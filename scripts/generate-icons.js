#!/usr/bin/env node
/**
 * Generates the PNG app icons from the same geometry as assets/icons/icon.svg.
 * No dependencies (pure Node: zlib for PNG compression). Run: node scripts/generate-icons.js
 *
 * Outputs (assets/icons/):
 *   icon-192.png, icon-512.png       — rounded tile, manifest purpose "any"
 *   icon-maskable-512.png            — full-bleed background, logo inside the 80% safe zone
 *   apple-touch-icon.png (180×180)   — full-bleed (iOS rounds the corners itself)
 */
'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const OUT_DIR = path.join(__dirname, '..', 'assets', 'icons');
const SAMPLES = 4; // 4×4 supersampling for anti-aliasing

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const BLUE = hex('#2563eb');
const TEAL = hex('#0d9488');
const WHITE = [255, 255, 255];

function insideRoundedRect(x, y, x0, y0, x1, y1, r) {
  if (x < x0 || x > x1 || y < y0 || y > y1) return false;
  const cx = Math.min(Math.max(x, x0 + r), x1 - r);
  const cy = Math.min(Math.max(y, y0 + r), y1 - r);
  return (x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r;
}

function insideTriangle(x, y, a, b, c) {
  const s = (p, q, r) => (p[0] - r[0]) * (q[1] - r[1]) - (q[0] - r[0]) * (p[1] - r[1]);
  const d1 = s([x, y], a, b);
  const d2 = s([x, y], b, c);
  const d3 = s([x, y], c, a);
  const neg = d1 < 0 || d2 < 0 || d3 < 0;
  const pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(neg && pos);
}

// line segment with round caps (the two "text" strokes)
function insideCapsule(x, y, x0, y0, x1, y1, halfWidth) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const t = Math.max(0, Math.min(1, ((x - x0) * dx + (y - y0) * dy) / (dx * dx + dy * dy)));
  const px = x0 + t * dx - x;
  const py = y0 + t * dy - y;
  return px * px + py * py <= halfWidth * halfWidth;
}

// colour of one point in the 128×128 design space, or null for transparent
function sample(x, y, fullBleed) {
  const inBg = fullBleed ? (x >= 0 && x <= 128 && y >= 0 && y <= 128) : insideRoundedRect(x, y, 0, 0, 128, 128, 28);
  if (!inBg) return null;

  // the maskable variant scales the foreground to 80% around the centre
  const s = fullBleed ? 0.8 : 1;
  const fx = (x - 64) / s + 64;
  const fy = (y - 64) / s + 64;

  if (insideCapsule(fx, fy, 46, 58, 82, 58, 3.5) || insideCapsule(fx, fy, 46, 72, 70, 72, 3.5)) return [BLUE, 1];
  if ((fx - 88) * (fx - 88) + (fy - 72) * (fy - 72) <= 25) return [TEAL, 1];
  if (insideRoundedRect(fx, fy, 28, 40, 100, 94, 6) || insideTriangle(fx, fy, [68, 93.5], [52, 108], [52, 93.5])) {
    return [WHITE, 0.95];
  }

  const t = Math.max(0, Math.min(1, (x + y) / 256)); // diagonal gradient, like the SVG
  return [[0, 1, 2].map((i) => BLUE[i] + (TEAL[i] - BLUE[i]) * t), 1];
}

function render(size, fullBleed) {
  const px = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) {
    for (let pxi = 0; pxi < size; pxi++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < SAMPLES; sy++) {
        for (let sx = 0; sx < SAMPLES; sx++) {
          const x = ((pxi + (sx + 0.5) / SAMPLES) / size) * 128;
          const y = ((py + (sy + 0.5) / SAMPLES) / size) * 128;
          const hit = sample(x, y, fullBleed);
          if (!hit) continue;
          let [col, alpha] = hit;
          if (alpha < 1) {
            // white bubble at 95% over the gradient beneath it
            const t = Math.max(0, Math.min(1, (x + y) / 256));
            const under = [0, 1, 2].map((i) => BLUE[i] + (TEAL[i] - BLUE[i]) * t);
            col = col.map((c, i) => c * alpha + under[i] * (1 - alpha));
          }
          r += col[0]; g += col[1]; b += col[2]; a += 1;
        }
      }
      const n = SAMPLES * SAMPLES;
      const o = (py * size + pxi) * 4;
      // premultiplied average → straight alpha
      px[o] = a ? Math.round(r / a) : 0;
      px[o + 1] = a ? Math.round(g / a) : 0;
      px[o + 2] = a ? Math.round(b / a) : 0;
      px[o + 3] = Math.round((a / n) * 255);
    }
  }
  return px;
}

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(size, rgba) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

const targets = [
  { file: 'icon-192.png', size: 192, fullBleed: false },
  { file: 'icon-512.png', size: 512, fullBleed: false },
  { file: 'icon-maskable-512.png', size: 512, fullBleed: true },
  { file: 'apple-touch-icon.png', size: 180, fullBleed: true }
];

targets.forEach((t) => {
  const png = encodePng(t.size, render(t.size, t.fullBleed));
  fs.writeFileSync(path.join(OUT_DIR, t.file), png);
  console.log(t.file, t.size + 'x' + t.size, Math.round(png.length / 1024) + ' KB');
});
