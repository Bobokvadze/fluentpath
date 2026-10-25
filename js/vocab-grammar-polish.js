/**
 * VOCAB-GRAMMAR-POLISH.JS
 * 1) ლექსიკონისა და გრამატიკის ბარათებზე "დონე A1..." რჩება ზედა მარცხენა კუთხეში,
 *    ხოლო "📍 0/50 სიტყვა" და "📍 მიმდინარე" გადადის უკიდურეს ზედა მარჯვენა კუთხეში!
 * 2) მარცხენა მენიუდან აქრობს ყველა "მზადაა" და "ფაზა" ბეიჯს.
 * 3) ყველა "—"-ს ცვლის "-"-ით.
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
      badge.remove();
    });

    // დამატებით შევამოწმოთ მარცხენა მენიუს ლინკების შიგნით ნებისმიერი span, სადაც წერია "მზადაა" ან "ფაზა"
    document.querySelectorAll('a[href^="#"] span, [data-route] span').forEach(function (sp) {
      const txt = (sp.textContent || "").trim();
      if (txt === "მზადაა" || /^ფაზა\s*\d+$/i.test(txt)) {
        sp.remove();
      }
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

        // 1. ზედა ბეიჯების განცალკევება: მარცხნივ დონე, უკიდურეს მარჯვნივ "📍 0/50 სიტყვა" ან "📍 მიმდინარე"
        const pills = Array.from(card.querySelectorAll(".stat-pill, .badge"));
        if (pills.length >= 1) {
          const firstPill = pills[0];
          const secondPill = pills[1] || null;

          firstPill.classList.add("vg-badge-level");
          if (secondPill) {
            secondPill.classList.add("vg-badge-status");
            secondPill.style.marginLeft = "auto";
            const cleanStatus = (secondPill.textContent || "").replace(/\s*\(\s*\)/g, "").trim();
            if (secondPill.textContent !== cleanStatus) {
              secondPill.textContent = cleanStatus;
            }
          }

          // გავუწეროთ მშობელ კონტეინერს და მის მშობელსაც 100% სიგანე და space-between,
          // რომ მეორე ბეიჯი აუცილებლად მარჯვენა კიდეში დადგეს!
          let parentRow = firstPill.parentElement;
          while (parentRow && parentRow !== card) {
            parentRow.style.display = "flex";
            parentRow.style.alignItems = "center";
            parentRow.style.justifyContent = "space-between";
            parentRow.style.width = "100%";
            parentRow = parentRow.parentElement;
          }
        }

        // 2. სათაური
        titleEl.classList.add("vg-card-title");

        // 3. გრამატიკის ბარათზე დავმალოთ შეწყვეტილი აღწერის ტექსტი
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
    cleanSidebarBadgesSafely();
    polishCardsInView();

    const appView = document.getElementById("app-view");
    if (appView && typeof MutationObserver !== "undefined") {
      let timer = null;
      const observer = new MutationObserver(function () {
        if (timer) window.clearTimeout(timer);
        timer = window.setTimeout(polishCardsInView, 20);
      });
      observer.observe(appView, { childList: true, subtree: true });
    }
  }

  window.addEventListener("hashchange", function () {
    window.setTimeout(polishCardsInView, 15);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(initPolisher, 30);
    });
  } else {
    window.setTimeout(initPolisher, 30);
  }
})(window);