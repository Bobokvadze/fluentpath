/**
 * VOCAB-GRAMMAR-POLISH.JS — უსაფრთხო ვიზუალური დამხვეწი (DOM-ის დონეზე, კოდის დაზიანების გარეშე)
 * 1) ეკრანზე გამოტანილ ტექსტებში ცვლის "—"-ს "-"-ით და აქრობს ცარიელ "()"-ს.
 * 2) გრამატიკის ბარათებზე აქრობს ზედმეტ აღწერას და "8 მაგალითი • 20 ტესტი" ტექსტს.
 * 3) მარცხენა მენიუში მალავს მხოლოდ ".nav-badge" ელემენტებს ("მზადაა" / "ფაზა").
 */
(function (window) {
  "use strict";

  let isRunning = false;

  function detectLevelFromText(text) {
    const m = String(text || "").match(/\b(A1|A2|B1|B2|C1|C2)\b/);
    return m ? m[1] : "A1";
  }

  function cleanSidebarBadgesSafely() {
    document.querySelectorAll(".nav-badge").forEach(function (badge) {
      badge.style.display = "none";
    });
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

  function polishCardsInView() {
    if (isRunning) return;
    isRunning = true;

    try {
      cleanSidebarBadgesSafely();

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

        // 1. ზედა ბეიჯები
        const pills = Array.from(card.querySelectorAll(".stat-pill, .badge"));
        if (pills.length >= 1) {
          const topRow = pills[0].parentElement;
          if (topRow && topRow !== card) {
            topRow.classList.add("vg-card-top");
          }
          pills[0].classList.add("vg-badge-level");
          if (pills[1]) {
            pills[1].classList.add("vg-badge-status");
            const cleanStatus = (pills[1].textContent || "").replace(/\s*\(\s*\)/g, "").trim();
            if (pills[1].textContent !== cleanStatus) {
              pills[1].textContent = cleanStatus;
            }
          }
        }

        // 2. სათაური
        titleEl.classList.add("vg-card-title");

        // 3. გრამატიკის ბარათზე დავმალოთ შეწყვეტილი აღწერის ტექსტი ("ინგლისურ წინადადებაში...")
        if (isGrammarPage) {
          card.querySelectorAll("p").forEach(function (pEl) {
            pEl.style.display = "none";
          });
        }

        // 4. პროგრეს-ბარი
        const progTrack = card.querySelector(".progress-track");
        if (progTrack && progTrack.parentElement) {
          progTrack.parentElement.classList.add("vg-progress-wrap");
        }

        // 5. ქვედა ზოლი (Footer)
        const footerEl = actionBtn.parentElement;
        if (footerEl && footerEl !== card) {
          footerEl.classList.add("vg-card-footer");
          footerEl.style.display = "flex";
          footerEl.style.alignItems = "center";
          footerEl.style.width = "100%";

          if (isGrammarPage) {
            // გრამატიკის ბარათზე დავმალოთ "🔊 8 მაგალითი • ✍️ 20 ტესტი" და დავტოვოთ მხოლოდ ღილაკი
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
    polishCardsInView();

    const appView = document.getElementById("app-view");
    if (appView && typeof MutationObserver !== "undefined") {
      let timer = null;
      const observer = new MutationObserver(function () {
        if (timer) window.clearTimeout(timer);
        timer = window.setTimeout(polishCardsInView, 25);
      });
      observer.observe(appView, { childList: true, subtree: true });
    }
  }

  window.addEventListener("hashchange", function () {
    window.setTimeout(polishCardsInView, 20);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(initPolisher, 40);
    });
  } else {
    window.setTimeout(initPolisher, 40);
  }
})(window);