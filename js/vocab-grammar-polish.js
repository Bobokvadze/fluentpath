/**
 * VOCAB-GRAMMAR-POLISH.JS — ლექსიკონისა და გრამატიკის ბარათების ვიზუალური ტრანსფორმაცია
 * - აშორებს უხეშ ლურჯ ჩარჩოს
 * - აცალკევებს ზედა ბეიჯებს (მარცხნივ დონე/იუნიტი, მარჯვნივ სტატუსი)
 * - ქვედა ფუტერში სიმეტრიულად აშორებს "📚 50 სიტყვა" წარწერასა და "გახსნა →" ღილაკს
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  function detectLevelFromText(text) {
    const m = String(text || "").match(/\b(A1|A2|B1|B2|C1|C2)\b/);
    return m ? m[1] : "A1";
  }

  function polishCardsInView() {
    const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
    if (hash !== "vocabulary" && hash !== "grammar") return;

    const container = document.getElementById("app-view");
    if (!container) return;

    // ვიპოვოთ ყველა პაკეტის/თემის ბარათი ლექსიკონსა და გრამატიკაში
    const candidateCards = container.querySelectorAll("article.card, div.card, .pack-card, .vocab-pack-card, .grammar-card, .topic-card");

    candidateCards.forEach(function (card) {
      if (card.classList.contains("vg-polished-card")) return;

      // გამოვტოვოთ მთავარი ზედა ფილტრის სექცია (რომელსაც აქვს .pill-tabs ან საძიებო ველი)
      if (card.querySelector(".pill-tabs") || card.querySelector('input[type="search"], input[type="text"]')) {
        return;
      }

      // შევამოწმოთ, არის თუ არა ეს პაკეტის ან გრამატიკის თემის ბარათი (აქვს ღილაკი "გახსნა", "დაწყება", "გამეორება" ან "დაბლოკილია")
      const actionBtn = card.querySelector("button");
      const titleEl = card.querySelector("h3, h4, .section-title");
      if (!actionBtn || !titleEl) return;

      // თუ ეს არის შიდა დეტალური გვერდის დიდი სექცია (მაგ. ტესტის კითხვები), არ შევეხოთ
      if (card.querySelector(".drill-question-box") || card.querySelector("table")) return;

      // მოვაშოროთ უხეში inline border-ები (რაც ქმნიდა ორმაგ ლურჯ ჩარჩოს)
      card.style.border = "";
      card.style.outline = "";
      card.style.boxShadow = "";

      const fullCardText = card.textContent || "";
      const detectedLevel = detectLevelFromText(fullCardText);
      card.setAttribute("data-vg-level", detectedLevel);
      card.classList.add("vg-polished-card");

      if (card.parentElement && !card.parentElement.classList.contains("dashboard-grid")) {
        card.parentElement.classList.add("vg-cards-grid");
      }

      // 1. გავასწოროთ ზედა ბეიჯების ზოლი (დონე მარცხნივ, სიტყვების/სტატუსის ბეიჯი მარჯვნივ)
      const pills = Array.from(card.querySelectorAll(".stat-pill, .badge"));
      if (pills.length >= 1) {
        const topRow = pills[0].parentElement;
        if (topRow && topRow !== card) {
          topRow.classList.add("vg-card-top");
        }
        pills[0].classList.add("vg-badge-level");
        if (pills[1]) {
          pills[1].classList.add("vg-badge-status");
        }
      }

      // 2. დავხვეწოთ სათაური
      titleEl.classList.add("vg-card-title");

      // 3. გავასწოროთ პროგრეს-ბარის კონტეინერი
      const progTrack = card.querySelector(".progress-track");
      if (progTrack && progTrack.parentElement) {
        progTrack.parentElement.classList.add("vg-progress-wrap");
      }

      // 4. გავასწოროთ ქვედა ზოლი (Footer), სადაც "📚 50 სიტყვა" და "გახსნა →" ეჯახებოდა ერთმანეთს!
      const footerEl = actionBtn.parentElement;
      if (footerEl && footerEl !== card) {
        footerEl.classList.add("vg-card-footer");
        footerEl.style.display = "flex";
        footerEl.style.justifyContent = "space-between";
        footerEl.style.alignItems = "center";
        footerEl.style.width = "100%";

        // თუ ტექსტი ("📚 50 სიტყვა") პირდაპირ ტექსტურ კვანძად წერია ღილაკის გვერდით, ჩავსვათ სუფთა <span>-ში
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

      actionBtn.classList.add("vg-open-btn");
      if ((actionBtn.textContent || "").indexOf("🔒") !== -1) {
        card.classList.add("is-locked-card");
      }
    });
  }

  function initPolisher() {
    polishCardsInView();

    const appView = document.getElementById("app-view");
    if (appView && typeof MutationObserver !== "undefined") {
      const observer = new MutationObserver(function () {
        polishCardsInView();
      });
      observer.observe(appView, { childList: true, subtree: true });
    }
  }

  window.addEventListener("hashchange", function () {
    window.setTimeout(polishCardsInView, 15);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(initPolisher, 40);
    });
  } else {
    window.setTimeout(initPolisher, 40);
  }
})(window);