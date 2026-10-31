/**
 * I18N-KA.JS — Georgian translations of educational content.
 * Structure: App.I18n.ka[section][itemId][field] = "Georgian text".
 *   sections: vocab (fields: term, def, ex), grammar (title, objective, explanation, compare),
 *             dialogues (title, line<N>), writing (task), curriculum (title, goal).
 * Only real translations belong here — leave an item out instead of copying English text.
 * vocab.term entries below are the existing glosses carried over from the previous vocabulary.
 * New translations can be merged with: node scripts/import-translations.js <file.json>
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};
  App.I18n = App.I18n || {};
  const ka = App.I18n.ka = App.I18n.ka || {};
  ka.vocab = Object.assign(ka.vocab || {}, {
    "v-abroad-adv": {
    "term": "საზღვარგარეთ"
    },
    "v-accident-n": {
    "term": "შემთხვევა"
    },
    "v-accountability-n": {
    "term": "ანგარიშვალდებულება"
    },
    "v-accurate-adj": {
    "term": "ზუსტი"
    },
    "v-achieve-v": {
    "term": "მიღწევა"
    },
    "v-afford-v": {
    "term": "გაწვდომა"
    },
    "v-ago-adv": {
    "term": "წინ"
    },
    "v-agree-v": {
    "term": "დათანხმება"
    },
    "v-airport-n": {
    "term": "აეროპორტი"
    },
    "v-albeit-conj": {
    "term": "თუმცა კი"
    },
    "v-alleviate-v": {
    "term": "შერბილება"
    },
    "v-ambiguity-n": {
    "term": "ორაზროვნება"
    },
    "v-ancient-adj": {
    "term": "უძველესი"
    },
    "v-angry-adj": {
    "term": "გაბრაზებული"
    },
    "v-answer-n": {
    "term": "პასუხი"
    },
    "v-answer-v": {
    "term": "პასუხი"
    },
    "v-apple-n": {
    "term": "ვაშლი"
    },
    "v-appointment-n": {
    "term": "ვიზიტი"
    },
    "v-aunt-n": {
    "term": "დეიდა / მამიდა"
    },
    "v-autonomy-n": {
    "term": "ავტონომია"
    },
    "v-autumn-n": {
    "term": "შემოდგომა"
    },
    "v-back-n": {
    "term": "ზურგი"
    },
    "v-bad-adj": {
    "term": "ცუდი"
    },
    "v-bake-v": {
    "term": "გამოცხობა"
    },
    "v-balance-n": {
    "term": "ბალანსი"
    },
    "v-bank-n": {
    "term": "ბანკი"
    },
    "v-bathroom-n": {
    "term": "სააბაზანო"
    },
    "v-beach-n": {
    "term": "პლაჟი"
    },
    "v-bed-n": {
    "term": "საწოლი"
    },
    "v-bedroom-n": {
    "term": "საძინებელი"
    },
    "v-big-adj": {
    "term": "დიდი"
    },
    "v-bill-n": {
    "term": "ქვითარი"
    },
    "v-black-adj": {
    "term": "შავი"
    },
    "v-blue-adj": {
    "term": "ლურჯი"
    },
    "v-boil-v": {
    "term": "მოხარშვა"
    },
    "v-book-n": {
    "term": "წიგნი"
    },
    "v-book-v": {
    "term": "წიგნი"
    },
    "v-borrow-v": {
    "term": "სესხება"
    },
    "v-bread-n": {
    "term": "პური"
    },
    "v-break-v": {
    "term": "გატეხვა"
    },
    "v-brother-n": {
    "term": "ძმა"
    },
    "v-budget-n": {
    "term": "ბიუჯეტი"
    },
    "v-bus-n": {
    "term": "ავტობუსი"
    },
    "v-call-v": {
    "term": "ზარი"
    },
    "v-car-n": {
    "term": "მანქანა"
    },
    "v-career-n": {
    "term": "კარიერა"
    },
    "v-carry-v": {
    "term": "ტარება"
    },
    "v-cash-n": {
    "term": "ნაღდი ფული"
    },
    "v-cat-n": {
    "term": "კატა"
    },
    "v-chair-n": {
    "term": "სკამი"
    },
    "v-challenge-n": {
    "term": "გამოწვევა"
    },
    "v-cheap-adj": {
    "term": "იაფი"
    },
    "v-cheese-n": {
    "term": "ყველი"
    },
    "v-chicken-n": {
    "term": "ქათამი"
    },
    "v-child-n": {
    "term": "ბავშვი"
    },
    "v-choose-v": {
    "term": "არჩევა"
    },
    "v-city-n": {
    "term": "ქალაქი"
    },
    "v-client-n": {
    "term": "კლიენტი"
    },
    "v-close-v": {
    "term": "დახურვა"
    },
    "v-coffee-n": {
    "term": "ყავა"
    },
    "v-cold-adj": {
    "term": "ცივი"
    },
    "v-colleague-n": {
    "term": "კოლეგა"
    },
    "v-compelling-adj": {
    "term": "დამაჯერებელი"
    },
    "v-complain-v": {
    "term": "ჩივილი"
    },
    "v-comply-v": {
    "term": "დაცვა"
    },
    "v-comprehensive-adj": {
    "term": "სრული"
    },
    "v-concert-n": {
    "term": "კონცერტი"
    },
    "v-conducive-adj": {
    "term": "ხელშემწყობი"
    },
    "v-connection-n": {
    "term": "კავშირი"
    },
    "v-consensus-n": {
    "term": "კონსენსუსი"
    },
    "v-consequently-adv": {
    "term": "შესაბამისად"
    },
    "v-contract-n": {
    "term": "კონტრაქტი"
    },
    "v-conversely-adv": {
    "term": "საპირისპიროდ"
    },
    "v-convince-v": {
    "term": "დარწმუნება"
    },
    "v-cook-v": {
    "term": "მომზადება"
    },
    "v-correlation-n": {
    "term": "კორელაცია"
    },
    "v-cough-n": {
    "term": "ხველა"
    },
    "v-countryside-n": {
    "term": "სოფლის გარემო"
    },
    "v-course-n": {
    "term": "კურსი"
    },
    "v-cousin-n": {
    "term": "ბიძაშვილი / დეიდაშვილი"
    },
    "v-credibility-n": {
    "term": "სანდოობა"
    },
    "v-dance-v": {
    "term": "ცეკვა"
    },
    "v-daughter-n": {
    "term": "ქალიშვილი"
    },
    "v-deadline-n": {
    "term": "დედლაინი"
    },
    "v-debt-n": {
    "term": "ვალი"
    },
    "v-decide-v": {
    "term": "გადაწყვეტა"
    },
    "v-degree-n": {
    "term": "გრადუსი"
    },
    "v-delay-n": {
    "term": "დაგვიანება"
    },
    "v-dentist-n": {
    "term": "სტომატოლოგი"
    },
    "v-detrimental-adj": {
    "term": "საზიანო"
    },
    "v-device-n": {
    "term": "მოწყობილობა"
    },
    "v-dilemma-n": {
    "term": "დილემა"
    },
    "v-discount-n": {
    "term": "ფასდაკლება"
    },
    "v-discuss-v": {
    "term": "განხილვა"
    },
    "v-diverse-adj": {
    "term": "მრავალფეროვანი"
    },
    "v-doctor-n": {
    "term": "ექიმი"
    },
    "v-dog-n": {
    "term": "ძაღლი"
    },
    "v-door-n": {
    "term": "კარი"
    },
    "v-download-v": {
    "term": "ჩამოტვირთვა"
    },
    "v-dress-n": {
    "term": "ჩაცმა"
    },
    "v-drink-v": {
    "term": "დალევა"
    },
    "v-drive-v": {
    "term": "მართვა"
    },
    "v-ear-n": {
    "term": "ყური"
    },
    "v-early-adj": {
    "term": "ადრიანი"
    },
    "v-easy-adj": {
    "term": "მარტივი"
    },
    "v-eat-v": {
    "term": "ჭამა"
    },
    "v-efficiency-n": {
    "term": "ეფექტიანობა"
    },
    "v-egg-n": {
    "term": "კვერცხი"
    },
    "v-empirical-adj": {
    "term": "ემპირიული"
    },
    "v-energy-n": {
    "term": "ენერგია"
    },
    "v-evening-n": {
    "term": "საღამო"
    },
    "v-evidence-n": {
    "term": "მტკიცებულება"
    },
    "v-exacerbate-v": {
    "term": "გამწვავება"
    },
    "v-exam-n": {
    "term": "გამოცდა"
    },
    "v-excuse-me-phr": {
    "term": "უკაცრავად"
    },
    "v-expensive-adj": {
    "term": "ძვირი"
    },
    "v-experience-n": {
    "term": "გამოცდილება"
    },
    "v-explain-v": {
    "term": "ახსნა"
    },
    "v-explore-v": {
    "term": "დათვალიერება"
    },
    "v-eye-n": {
    "term": "თვალი"
    },
    "v-face-n": {
    "term": "სახე"
    },
    "v-facilitate-v": {
    "term": "გაადვილება"
    },
    "v-family-n": {
    "term": "ოჯახი"
    },
    "v-famous-adj": {
    "term": "ცნობილი"
    },
    "v-father-n": {
    "term": "მამა"
    },
    "v-feasible-adj": {
    "term": "განხორციელებადი"
    },
    "v-feedback-n": {
    "term": "უკუკავშირი"
    },
    "v-fever-n": {
    "term": "სიცხე"
    },
    "v-find-v": {
    "term": "პოვნა"
    },
    "v-finish-v": {
    "term": "დასრულება"
    },
    "v-first-num": {
    "term": "პირველი"
    },
    "v-fiscal-adj": {
    "term": "ფისკალური"
    },
    "v-fish-n": {
    "term": "თევზი"
    },
    "v-flawed-adj": {
    "term": "ხარვეზიანი"
    },
    "v-flight-n": {
    "term": "რეისი"
    },
    "v-flower-n": {
    "term": "ყვავილი"
    },
    "v-foot-n": {
    "term": "ტერფი"
    },
    "v-forest-n": {
    "term": "ტყე"
    },
    "v-forget-v": {
    "term": "დავიწყება"
    },
    "v-foster-v": {
    "term": "ხელშეწყობა"
    },
    "v-framework-n": {
    "term": "ჩარჩო"
    },
    "v-fresh-adj": {
    "term": "ქორფა"
    },
    "v-fridge-n": {
    "term": "მაცივარი"
    },
    "v-friendly-adj": {
    "term": "მეგობრული"
    },
    "v-fry-v": {
    "term": "შეწვა"
    },
    "v-funny-adj": {
    "term": "სასაცილო"
    },
    "v-furthermore-adv": {
    "term": "გარდა ამისა"
    },
    "v-game-n": {
    "term": "თამაში"
    },
    "v-garden-n": {
    "term": "ბაღი"
    },
    "v-get-up-pv": {
    "term": "ადგომა"
    },
    "v-give-v": {
    "term": "მიცემა"
    },
    "v-goal-n": {
    "term": "მიზანი"
    },
    "v-good-adj": {
    "term": "კარგი"
    },
    "v-goodbye-int": {
    "term": "ნახვამდის"
    },
    "v-grandfather-n": {
    "term": "ბაბუა"
    },
    "v-grandmother-n": {
    "term": "ბებია"
    },
    "v-green-adj": {
    "term": "მწვანე"
    },
    "v-guide-n": {
    "term": "გიდი"
    },
    "v-gym-n": {
    "term": "სავარჯიშო დარბაზი"
    },
    "v-habit-n": {
    "term": "ჩვევა"
    },
    "v-hair-n": {
    "term": "თმა"
    },
    "v-hand-n": {
    "term": "ხელი"
    },
    "v-happen-v": {
    "term": "მოხდენა"
    },
    "v-happy-adj": {
    "term": "ბედნიერი"
    },
    "v-hard-adv": {
    "term": "რთული"
    },
    "v-head-n": {
    "term": "თავი"
    },
    "v-healthy-adj": {
    "term": "ჯანსაღი"
    },
    "v-hello-int": {
    "term": "გამარჯობა"
    },
    "v-help-v": {
    "term": "დახმარება"
    },
    "v-hence-adv": {
    "term": "აქედან გამომდინარე"
    },
    "v-heritage-n": {
    "term": "მემკვიდრეობა"
    },
    "v-homework-n": {
    "term": "დავალება"
    },
    "v-honest-adj": {
    "term": "პატიოსანი"
    },
    "v-hope-v": {
    "term": "იმედი"
    },
    "v-hospital-n": {
    "term": "საავადმყოფო"
    },
    "v-hot-adj": {
    "term": "ცხელი"
    },
    "v-hotel-n": {
    "term": "სასტუმრო"
    },
    "v-hour-n": {
    "term": "საათი"
    },
    "v-house-n": {
    "term": "სახლი"
    },
    "v-husband-n": {
    "term": "ქმარი"
    },
    "v-hypothesis-n": {
    "term": "ჰიპოთეზა"
    },
    "v-improve-v": {
    "term": "გაუმჯობესება"
    },
    "v-indispensable-adj": {
    "term": "შეუცვლელი"
    },
    "v-inevitable-adj": {
    "term": "გარდაუვალი"
    },
    "v-inflation-n": {
    "term": "ინფლაცია"
    },
    "v-inherent-adj": {
    "term": "თანდაყოლილი"
    },
    "v-innovation-n": {
    "term": "ინოვაცია"
    },
    "v-inspire-v": {
    "term": "შთაგონება"
    },
    "v-integrity-n": {
    "term": "კეთილსინდისიერება"
    },
    "v-interview-n": {
    "term": "გასაუბრება"
    },
    "v-invest-v": {
    "term": "ინვესტირება"
    },
    "v-invite-v": {
    "term": "მოწვევა"
    },
    "v-island-n": {
    "term": "კუნძული"
    },
    "v-jacket-n": {
    "term": "ქურთუკი"
    },
    "v-join-v": {
    "term": "შემოერთება"
    },
    "v-juice-n": {
    "term": "წვენი"
    },
    "v-jurisdiction-n": {
    "term": "იურისდიქცია"
    },
    "v-justify-v": {
    "term": "დასაბუთება"
    },
    "v-key-n": {
    "term": "გასაღები"
    },
    "v-kind-adj": {
    "term": "კეთილი"
    },
    "v-know-v": {
    "term": "ცოდნა"
    },
    "v-lake-n": {
    "term": "ტბა"
    },
    "v-late-adj": {
    "term": "გვიანი"
    },
    "v-lazy-adj": {
    "term": "ზარმაცი"
    },
    "v-leave-v": {
    "term": "გასვლა"
    },
    "v-lecture-n": {
    "term": "ლექცია"
    },
    "v-leg-n": {
    "term": "ფეხი"
    },
    "v-legislation-n": {
    "term": "კანონმდებლობა"
    },
    "v-liability-n": {
    "term": "ვალდებულება"
    },
    "v-like-v": {
    "term": "მოწონება"
    },
    "v-loan-n": {
    "term": "სესხი"
    },
    "v-lose-v": {
    "term": "დაკარგვა"
    },
    "v-love-v": {
    "term": "სიყვარული"
    },
    "v-luggage-n": {
    "term": "ბარგი"
    },
    "v-manager-n": {
    "term": "მენეჯერი"
    },
    "v-map-n": {
    "term": "რუკა"
    },
    "v-market-n": {
    "term": "სუპერმარკეტი"
    },
    "v-meat-n": {
    "term": "ხორცი"
    },
    "v-medicine-n": {
    "term": "წამალი"
    },
    "v-merger-n": {
    "term": "შერწყმა"
    },
    "v-message-n": {
    "term": "შეტყობინება"
    },
    "v-methodology-n": {
    "term": "მეთოდოლოგია"
    },
    "v-milk-n": {
    "term": "რძე"
    },
    "v-minute-n": {
    "term": "წუთი"
    },
    "v-mistake-n": {
    "term": "შეცდომა"
    },
    "v-mitigate-v": {
    "term": "შემცირება"
    },
    "v-modern-adj": {
    "term": "თანამედროვე"
    },
    "v-monopoly-n": {
    "term": "მონოპოლია"
    },
    "v-month-n": {
    "term": "თვე"
    },
    "v-morning-n": {
    "term": "დილა"
    },
    "v-mother-n": {
    "term": "დედა"
    },
    "v-mountain-n": {
    "term": "მთა"
    },
    "v-mouth-n": {
    "term": "პირი"
    },
    "v-museum-n": {
    "term": "მუზეუმი"
    },
    "v-music-n": {
    "term": "მუსიკა"
    },
    "v-name-n": {
    "term": "სახელი"
    },
    "v-nervous-adj": {
    "term": "აღელვებული"
    },
    "v-nevertheless-adv": {
    "term": "მაინც"
    },
    "v-new-adj": {
    "term": "ახალი"
    },
    "v-nose-n": {
    "term": "ცხვირი"
    },
    "v-notwithstanding-prep": {
    "term": "მიუხედავად"
    },
    "v-nuance-n": {
    "term": "ნიუანსი"
    },
    "v-obvious-adj": {
    "term": "აშკარა"
    },
    "v-old-adj": {
    "term": "ძველი"
    },
    "v-open-v": {
    "term": "გაღება"
    },
    "v-overcome-v": {
    "term": "დაძლევა"
    },
    "v-pain-n": {
    "term": "ტკივილი"
    },
    "v-paradigm-n": {
    "term": "პარადიგმა"
    },
    "v-parents-n": {
    "term": "მშობლები"
    },
    "v-park-n": {
    "term": "პარკი"
    },
    "v-party-n": {
    "term": "მხარე"
    },
    "v-passport-n": {
    "term": "პასპორტი"
    },
    "v-password-n": {
    "term": "პაროლი"
    },
    "v-pay-v": {
    "term": "გადახდა"
    },
    "v-pen-n": {
    "term": "კალამი"
    },
    "v-perspective-n": {
    "term": "პერსპექტივა"
    },
    "v-pharmacy-n": {
    "term": "აფთიაქი"
    },
    "v-plan-n": {
    "term": "გეგმა"
    },
    "v-plausible-adj": {
    "term": "სარწმუნო"
    },
    "v-please-adv": {
    "term": "გთხოვთ / თუ შეიძლება"
    },
    "v-plot-n": {
    "term": "მიწის ნაკვეთი"
    },
    "v-police-n": {
    "term": "პოლიცია"
    },
    "v-polite-adj": {
    "term": "ზრდილობიანი"
    },
    "v-pragmatic-adj": {
    "term": "პრაგმატული"
    },
    "v-prefer-v": {
    "term": "უპირატესობის მინიჭება"
    },
    "v-prepare-v": {
    "term": "მომზადება"
    },
    "v-prevent-v": {
    "term": "პრევენცია"
    },
    "v-price-n": {
    "term": "ფასი"
    },
    "v-probably-adv": {
    "term": "სავარაუდოდ"
    },
    "v-profit-n": {
    "term": "მოგება"
    },
    "v-promotion-n": {
    "term": "დაწინაურება"
    },
    "v-proposal-n": {
    "term": "შეთავაზება"
    },
    "v-proud-adj": {
    "term": "ამაყი"
    },
    "v-qualification-n": {
    "term": "კვალიფიკაცია"
    },
    "v-question-n": {
    "term": "კითხვა"
    },
    "v-quiet-adj": {
    "term": "მშვიდი"
    },
    "v-rain-n": {
    "term": "წვიმა"
    },
    "v-read-v": {
    "term": "კითხვა"
    },
    "v-receipt-n": {
    "term": "ჩეკი"
    },
    "v-recession-n": {
    "term": "რეცესია"
    },
    "v-reconcile-v": {
    "term": "შედარება"
    },
    "v-red-adj": {
    "term": "წითელი"
    },
    "v-redundant-adj": {
    "term": "ზედმეტი"
    },
    "v-refund-n": {
    "term": "თანხის დაბრუნება"
    },
    "v-regulation-n": {
    "term": "რეგულაცია"
    },
    "v-relevant-adj": {
    "term": "რელევანტური"
    },
    "v-reliable-adj": {
    "term": "სანდო"
    },
    "v-remember-v": {
    "term": "გახსენება"
    },
    "v-repeat-v": {
    "term": "გამეორება"
    },
    "v-reservation-n": {
    "term": "ჯავშანი"
    },
    "v-resign-v": {
    "term": "გადადგომა"
    },
    "v-resilience-n": {
    "term": "მედეგობა"
    },
    "v-responsible-adj": {
    "term": "პასუხისმგებლიანი"
    },
    "v-rest-v": {
    "term": "დასვენება"
    },
    "v-retire-v": {
    "term": "პენსიაზე გასვლა"
    },
    "v-revenue-n": {
    "term": "შემოსავალი"
    },
    "v-rice-n": {
    "term": "ბრინჯი"
    },
    "v-rigorous-adj": {
    "term": "ზედმიწევნითი"
    },
    "v-river-n": {
    "term": "მდინარე"
    },
    "v-rude-adj": {
    "term": "უხეში"
    },
    "v-salary-n": {
    "term": "ხელფასი"
    },
    "v-school-n": {
    "term": "სკოლა"
    },
    "v-scope-n": {
    "term": "მოცულობა"
    },
    "v-screen-n": {
    "term": "ეკრანი"
    },
    "v-send-v": {
    "term": "გაგზავნა"
    },
    "v-shirt-n": {
    "term": "პერანგი"
    },
    "v-shoes-n": {
    "term": "ფეხსაცმელი"
    },
    "v-significant-adj": {
    "term": "მნიშვნელოვანი"
    },
    "v-sister-n": {
    "term": "და"
    },
    "v-skill-n": {
    "term": "უნარი"
    },
    "v-sleep-v": {
    "term": "ძილი"
    },
    "v-small-adj": {
    "term": "პატარა"
    },
    "v-snow-n": {
    "term": "თოვლი"
    },
    "v-software-n": {
    "term": "პროგრამა"
    },
    "v-son-n": {
    "term": "ვაჟი / შვილი"
    },
    "v-soon-adv": {
    "term": "მალე"
    },
    "v-sorry-adj": {
    "term": "ბოდიში / ვწუხვარ"
    },
    "v-souvenir-n": {
    "term": "სუვენირი"
    },
    "v-spend-v": {
    "term": "დახარჯვა"
    },
    "v-sport-n": {
    "term": "სპორტი"
    },
    "v-spring-n": {
    "term": "გაზაფხული"
    },
    "v-stakeholder-n": {
    "term": "დაინტერესებული მხარე"
    },
    "v-start-v": {
    "term": "დაწყება"
    },
    "v-station-n": {
    "term": "სადგური"
    },
    "v-storm-n": {
    "term": "ქარიშხალი"
    },
    "v-story-n": {
    "term": "ამბავი"
    },
    "v-street-n": {
    "term": "ქუჩა"
    },
    "v-student-n": {
    "term": "სტუდენტი"
    },
    "v-study-v": {
    "term": "სწავლა"
    },
    "v-suddenly-adv": {
    "term": "უეცრად"
    },
    "v-suggest-v": {
    "term": "შეთავაზება"
    },
    "v-suitcase-n": {
    "term": "ჩემოდანი"
    },
    "v-summer-n": {
    "term": "ზაფხული"
    },
    "v-sun-n": {
    "term": "მზე"
    },
    "v-sustainable-adj": {
    "term": "მდგრადი"
    },
    "v-swim-v": {
    "term": "ცურვა"
    },
    "v-symptom-n": {
    "term": "სიმპტომი"
    },
    "v-synthesis-n": {
    "term": "სინთეზი"
    },
    "v-t-shirt-n": {
    "term": "მაისური"
    },
    "v-table-n": {
    "term": "მაგიდა"
    },
    "v-take-off-pv": {
    "term": "აფრენა"
    },
    "v-take-v": {
    "term": "აღება"
    },
    "v-taxi-n": {
    "term": "ტაქსი"
    },
    "v-tea-n": {
    "term": "ჩაი"
    },
    "v-teacher-n": {
    "term": "მასწავლებელი"
    },
    "v-thank-you-phr": {
    "term": "გმადლობთ"
    },
    "v-think-v": {
    "term": "ფიქრი"
    },
    "v-ticket-n": {
    "term": "ბილეთი"
    },
    "v-today-adv": {
    "term": "დღეს"
    },
    "v-tomorrow-adv": {
    "term": "ხვალ"
    },
    "v-tooth-n": {
    "term": "კბილი"
    },
    "v-tourist-n": {
    "term": "ტურისტი"
    },
    "v-tradition-n": {
    "term": "ტრადიცია"
    },
    "v-train-n": {
    "term": "მატარებელი"
    },
    "v-transform-v": {
    "term": "გარდაქმნა"
    },
    "v-transparency-n": {
    "term": "გამჭვირვალობა"
    },
    "v-tree-n": {
    "term": "ხე"
    },
    "v-trigger-v": {
    "term": "გამშვები პირობა"
    },
    "v-trousers-n": {
    "term": "შარვალი"
    },
    "v-uncle-n": {
    "term": "ბიძა"
    },
    "v-undermine-v": {
    "term": "საფუძვლის შერყევა"
    },
    "v-understand-v": {
    "term": "გაგება"
    },
    "v-university-n": {
    "term": "უნივერსიტეტი"
    },
    "v-unprecedented-adj": {
    "term": "უპრეცედენტო"
    },
    "v-update-v": {
    "term": "განახლება"
    },
    "v-valid-adj": {
    "term": "მოქმედი"
    },
    "v-viable-adj": {
    "term": "სიცოცხლისუნარიანი"
    },
    "v-wake-up-pv": {
    "term": "გაღვიძება"
    },
    "v-want-v": {
    "term": "სურვილი"
    },
    "v-warm-adj": {
    "term": "თბილი"
    },
    "v-wash-v": {
    "term": "დაბანა"
    },
    "v-watch-v": {
    "term": "ყურება"
    },
    "v-water-n": {
    "term": "წყალი"
    },
    "v-weather-n": {
    "term": "გადატანა"
    },
    "v-website-n": {
    "term": "ვებსაიტი"
    },
    "v-week-n": {
    "term": "კვირა"
    },
    "v-weekend-n": {
    "term": "უქმეები"
    },
    "v-welcome-int": {
    "term": "კეთილი იყოს თქვენი მობრძანება"
    },
    "v-whereas-conj": {
    "term": "მაშინ როდესაც"
    },
    "v-whereby-adv": {
    "term": "რომლის მეშვეობითაც"
    },
    "v-white-adj": {
    "term": "თეთრი"
    },
    "v-wife-n": {
    "term": "ცოლი"
    },
    "v-win-v": {
    "term": "გამარჯვება"
    },
    "v-wind-n": {
    "term": "ქარი"
    },
    "v-window-n": {
    "term": "ფანჯარა"
    },
    "v-winter-n": {
    "term": "ზამთარი"
    },
    "v-word-n": {
    "term": "სიტყვა"
    },
    "v-work-v": {
    "term": "მუშაობა"
    },
    "v-year-n": {
    "term": "წელი"
    },
    "v-yesterday-adv": {
    "term": "გუშინ"
    },
    "v-yield-v": {
    "term": "სარგებლიანობა"
    }
    });
  ka.grammar = ka.grammar || {};
  ka.dialogues = ka.dialogues || {};
  ka.writing = ka.writing || {};
  ka.curriculum = ka.curriculum || {};
})(window);
