/**
 * VOCAB-GRAMMAR-POLISH.JS
 * - აწესრიგებს ლექსიკონისა და გრამატიკის ბარათებს.
 */
(function (window) {
  "use strict";

  let isRunning = false;

  function detectLevelFromText(text) {
    const m = String(text || "").match(/\b(A1|A2|B1|B2|C1|C2)\b/);
    return m ? m[1] : "A1";
  }

  function replaceDashesInContainer(rootEl) {
    if (!rootEl) return;
    const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      const val = node.nodeValue;
      if (val && (val.indexOf("—") !== -1 || val.indexOf("()") !== -1)) {
        const cleaned = val.replace(/—/g, "-").replace(/\s*\(\s*\)/g, "");
        if (cleaned !== val) {
          node.nodeValue = cleaned;
        }
      }
    }
  }

  function polishAll() {
    if (isRunning) return;
    isRunning = true;

    try {
      const container = document.getElementById("app-view");
      if (!container) {
        isRunning = false;
        return;
      }

      replaceDashesInContainer(container);

      const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
      if (hash !== "vocabulary" && hash !== "grammar") {
        isRunning = false;
        return;
      }

      const isGrammarPage = (hash === "grammar");
      const candidateCards = container.querySelectorAll("article.card, div.card, .pack-card, .vocab-pack-card, .grammar-card, .topic-card");

      candidateCards.forEach(function (card) {
        if (card.querySelector(".pill-tabs") || card.querySelector('input[type="search"], input[type="text"]')) {
          return;
        }

        const actionBtn = card.querySelector("button");
        const titleEl = card.querySelector("h3, h4, .section-title");
        if (!actionBtn || !titleEl) return;
        if (card.querySelector(".drill-question-box") || card.querySelector("table")) return;

        card.style.border = "";
        card.style.outline = "";
        card.style.boxShadow = "";

        const detectedLevel = detectLevelFromText(card.textContent || "");
        card.setAttribute("data-vg-level", detectedLevel);
        card.classList.add("vg-polished-card");

        if (card.parentElement && !card.parentElement.classList.contains("dashboard-grid")) {
          card.parentElement.classList.add("vg-cards-grid");
        }

        let leftBadge = null;
        let rightBadge = null;

        card.querySelectorAll("span, div, small").forEach(function (el) {
          if (el === card || el === titleEl || el === actionBtn) return;
          if (el.children.length > 0) return;
          const txt = (el.textContent || "").trim();
          if (!txt || txt.length > 40) return;

          if (!leftBadge && /^დონე\s+(A1|A2|B1|B2|C1|C2)/i.test(txt)) {
            leftBadge = el;
          } else if (
            !rightBadge &&
            (txt.indexOf("📍") !== -1 ||
             txt.indexOf("მიმდინარე") !== -1 ||
             txt.indexOf("დასრულებული") !== -1 ||
             txt.indexOf("ჩათვლილი") !== -1 ||
             txt.indexOf("დაბლოკილი") !== -1 ||
             /^\d+\s*\/\s*\d+\s*სიტყვა/.test(txt))
          ) {
            rightBadge = el;
          }
        });

        if (leftBadge) {
          leftBadge.classList.add("vg-pinned-left-badge");
        }
        if (rightBadge) {
          const cleanTxt = (rightBadge.textContent || "").replace(/\s*\(\s*\)/g, "").trim();
          if (rightBadge.textContent !== cleanTxt) {
            rightBadge.textContent = cleanTxt;
          }
          rightBadge.classList.add("vg-pinned-right-badge");
        }

        titleEl.classList.add("vg-card-title");

        if (isGrammarPage) {
          card.querySelectorAll("p").forEach(function (pEl) {
            pEl.style.display = "none";
          });
        }

        const progTrack = card.querySelector(".progress-track");
        if (progTrack && progTrack.parentElement) {
          progTrack.parentElement.classList.add("vg-progress-wrap");
        }

        const footerEl = actionBtn.parentElement;
        if (footerEl && footerEl !== card) {
          footerEl.classList.add("vg-card-footer");
          footerEl.style.display = "flex";
          footerEl.style.alignItems = "center";
          footerEl.style.width = "100%";

          if (isGrammarPage) {
            Array.from(footerEl.childNodes).forEach(function (node) {
              if (node !== actionBtn) {
                if (node.nodeType === 3) {
                  node.nodeValue = "";
                } else if (node.nodeType === 1) {
                  node.style.display = "none";
                }
              }
            });
            footerEl.style.justifyContent = "flex-end";
          } else {
            footerEl.style.justifyContent = "space-between";
            Array.from(footerEl.childNodes).forEach(function (node) {
              if (node.nodeType === 3 && node.textContent.trim().length > 0) {
                const span = document.createElement("span");
                span.className = "vg-footer-meta";
                span.textContent = node.textContent.trim();
                footerEl.replaceChild(span, node);
              } else if (node.nodeType === 1 && node !== actionBtn) {
                node.classList.add("vg-footer-meta");
              }
            });
          }
        }

        actionBtn.classList.add("vg-open-btn");
        if ((actionBtn.textContent || "").indexOf("🔒") !== -1) {
          card.classList.add("is-locked-card");
        }
      });
    } catch (e) {}

    isRunning = false;
  }

  function initPolisher() {
    polishAll();

    // მხოლოდ მთავარი შინაარსის სრულ გადახატვაზე რეაგირებს (და არა გვერდის ყოველ მცირე ცვლილებაზე)
    const view = document.getElementById("app-view");
    if (view && typeof MutationObserver !== "undefined") {
      let timer = null;
      const observer = new MutationObserver(function () {
        if (timer) window.clearTimeout(timer);
        timer = window.setTimeout(polishAll, 15);
      });
      observer.observe(view, { childList: true });
    }
  }

  window.addEventListener("hashchange", function () {
    window.setTimeout(polishAll, 15);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(initPolisher, 20);
    });
  } else {
    window.setTimeout(initPolisher, 20);
  }
})(window);