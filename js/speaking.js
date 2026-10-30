/**
 * SPEAKING.JS — საუბრისა და გამოთქმის სტუდია
 * - მოუსმინეთ ფრაზას (ჩვეულებრივი/ნელი), გაიმეორეთ მიკროფონში და მიიღეთ სიტყვა-სიტყვით შეფასება.
 * - იყენებს ბრაუზერის Web Speech API-ს (SpeechRecognition). თუ ბრაუზერი არ უჭერს მხარს,
 *   ჩაირთვება თვითშეფასების რეჟიმი.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const PASS_SCORE = 70;

  const PHRASES = {
    A1: [
      { en: "Hello, my name is Anna.", ka: "გამარჯობა, მე ანა მქვია." },
      { en: "Nice to meet you.", ka: "სასიამოვნოა თქვენი გაცნობა." },
      { en: "I live in Tbilisi.", ka: "მე თბილისში ვცხოვრობ." },
      { en: "How much is this?", ka: "რა ღირს ეს?" },
      { en: "Can you help me, please?", ka: "შეგიძლიათ დამეხმაროთ, გთხოვთ?" },
      { en: "I would like a cup of coffee.", ka: "ერთი ფინჯანი ყავა მინდა." },
      { en: "Where is the bus station?", ka: "სად არის ავტობუსის სადგური?" },
      { en: "I don't understand.", ka: "ვერ გავიგე." },
      { en: "What time is it now?", ka: "ახლა რომელი საათია?" },
      { en: "See you tomorrow.", ka: "ხვალამდე." }
    ],
    A2: [
      { en: "I usually get up at seven o'clock.", ka: "ჩვეულებრივ შვიდ საათზე ვდგები." },
      { en: "Last weekend we visited my grandparents.", ka: "გასულ შაბათ-კვირას ბებია-ბაბუას ვესტუმრეთ." },
      { en: "Could you speak more slowly, please?", ka: "შეგიძლიათ უფრო ნელა ილაპარაკოთ, გთხოვთ?" },
      { en: "I'm looking for a cheaper hotel.", ka: "უფრო იაფ სასტუმროს ვეძებ." },
      { en: "It's colder today than yesterday.", ka: "დღეს გუშინდელზე უფრო ცივა." },
      { en: "I have never been to London.", ka: "ლონდონში არასდროს ვყოფილვარ." },
      { en: "What do you do in your free time?", ka: "რას აკეთებთ თავისუფალ დროს?" },
      { en: "I'd like to book a table for two.", ka: "ორი კაცისთვის მაგიდის დაჯავშნა მინდა." },
      { en: "The train leaves in ten minutes.", ka: "მატარებელი ათ წუთში გადის." },
      { en: "My phone battery is almost dead.", ka: "ტელეფონის ბატარეა თითქმის დამჯდარია." }
    ],
    B1: [
      { en: "If I had more time, I would travel more often.", ka: "მეტი დრო რომ მქონდეს, უფრო ხშირად ვიმოგზაურებდი." },
      { en: "I've been learning English for two years.", ka: "ორი წელია, ინგლისურს ვსწავლობ." },
      { en: "In my opinion, public transport should be free.", ka: "ჩემი აზრით, საზოგადოებრივი ტრანსპორტი უფასო უნდა იყოს." },
      { en: "Could you tell me how to get to the museum?", ka: "შეგიძლიათ მითხრათ, როგორ მივიდე მუზეუმამდე?" },
      { en: "I'm sorry, but I have to cancel our meeting.", ka: "ბოდიში, მაგრამ ჩვენი შეხვედრის გაუქმება მიწევს." },
      { en: "The report must be finished by Friday.", ka: "ანგარიში პარასკევამდე უნდა დასრულდეს." },
      { en: "I'm not used to working at night.", ka: "ღამით მუშაობას არ ვარ მიჩვეული." },
      { en: "She asked me where I had bought my jacket.", ka: "მკითხა, საიდან ვიყიდე ქურთუკი." },
      { en: "We decided to stay at home because of the rain.", ka: "წვიმის გამო სახლში დარჩენა გადავწყვიტეთ." },
      { en: "It's worth visiting the old town at sunset.", ka: "ძველი ქალაქის მზის ჩასვლისას ნახვა ღირს." }
    ],
    B2: [
      { en: "Had I known about the delay, I would have taken a taxi.", ka: "დაგვიანების შესახებ რომ მცოდნოდა, ტაქსით წავიდოდი." },
      { en: "The new policy has had a significant impact on small businesses.", ka: "ახალმა პოლიტიკამ მცირე ბიზნესზე მნიშვნელოვანი გავლენა მოახდინა." },
      { en: "I'd rather you didn't mention it to anyone.", ka: "მირჩევნია, ეს არავის უთხრა." },
      { en: "By the end of the year, we will have launched three new products.", ka: "წლის ბოლოსთვის სამ ახალ პროდუქტს გამოვუშვებთ." },
      { en: "Despite the difficulties, the project was completed on time.", ka: "სირთულეების მიუხედავად, პროექტი დროულად დასრულდა." },
      { en: "You should have backed up your files before the update.", ka: "განახლებამდე ფაილების სარეზერვო ასლი უნდა შეგექმნა." },
      { en: "There is growing evidence that sleep affects memory.", ka: "იზრდება მტკიცებულებები, რომ ძილი მეხსიერებაზე მოქმედებს." },
      { en: "It's high time we found a long-term solution.", ka: "დროა, გრძელვადიანი გამოსავალი ვიპოვოთ." },
      { en: "The more you practise, the more confident you become.", ka: "რაც მეტს ვარჯიშობ, მით უფრო თავდაჯერებული ხდები." },
      { en: "I'm looking forward to hearing from you.", ka: "მოუთმენლად ველი თქვენს პასუხს." }
    ],
    C1: [
      { en: "Not only did the company miss its targets, but it also lost key clients.", ka: "კომპანიამ არა მხოლოდ მიზნებს ვერ მიაღწია, არამედ მთავარი კლიენტებიც დაკარგა." },
      { en: "The findings are, to a large extent, consistent with previous research.", ka: "შედეგები დიდწილად შეესაბამება წინა კვლევებს." },
      { en: "Were the government to raise taxes, consumer spending would fall.", ka: "მთავრობას რომ გადასახადები გაეზარდა, სამომხმარებლო ხარჯები შემცირდებოდა." },
      { en: "It is widely acknowledged that the issue requires urgent attention.", ka: "საყოველთაოდ აღიარებულია, რომ საკითხი სასწრაფო ყურადღებას საჭიროებს." },
      { en: "She has a remarkable ability to put complex ideas into simple words.", ka: "მას რთული იდეების მარტივად გადმოცემის გასაოცარი უნარი აქვს." },
      { en: "On no account should this information be shared outside the team.", ka: "ეს ინფორმაცია არავითარ შემთხვევაში არ უნდა გავიდეს გუნდის გარეთ." },
      { en: "The proposal was met with considerable scepticism.", ka: "წინადადებას მნიშვნელოვანი სკეპტიციზმით შეხვდნენ." },
      { en: "We need to strike a balance between growth and sustainability.", ka: "ზრდასა და მდგრადობას შორის ბალანსი უნდა ვიპოვოთ." },
      { en: "Little did they know that the decision would change everything.", ka: "წარმოდგენაც არ ჰქონდათ, რომ ეს გადაწყვეტილება ყველაფერს შეცვლიდა." },
      { en: "His argument, while persuasive, overlooks several key factors.", ka: "მისი არგუმენტი, თუმცა დამაჯერებელია, რამდენიმე მთავარ ფაქტორს ყურადღების გარეშე ტოვებს." }
    ],
    C2: [
      { en: "The ramifications of this ruling will be felt for decades to come.", ka: "ამ გადაწყვეტილების შედეგები ათწლეულების განმავლობაში იგრძნობა." },
      { en: "Her prose is characterised by an almost unsettling clarity.", ka: "მის პროზას თითქმის შემაშფოთებელი სიცხადე ახასიათებს." },
      { en: "Notwithstanding the board's objections, the merger went ahead.", ka: "საბჭოს წინააღმდეგობის მიუხედავად, შერწყმა შედგა." },
      { en: "The theory, elegant as it may be, lacks empirical support.", ka: "თეორიას, რაც არ უნდა ელეგანტური იყოს, ემპირიული მხარდაჭერა აკლია." },
      { en: "He was at pains to stress that no wrongdoing had occurred.", ka: "ის განსაკუთრებით ცდილობდა ხაზი გაესვა, რომ დარღვევა არ მომხდარა." },
      { en: "The negotiations reached an impasse over the question of sovereignty.", ka: "მოლაპარაკებები სუვერენიტეტის საკითხზე ჩიხში შევიდა." },
      { en: "Such ubiquitous technology inevitably raises questions of privacy.", ka: "ასეთი ყოვლისმომცველი ტექნოლოგია გარდაუვლად აჩენს პირადი ცხოვრების საკითხებს." },
      { en: "To dismiss these concerns out of hand would be a grave mistake.", ka: "ამ შეშფოთების დაუფიქრებლად უარყოფა სერიოზული შეცდომა იქნებოდა." },
      { en: "The author deftly interweaves personal memoir with social history.", ka: "ავტორი ოსტატურად აერთიანებს პირად მემუარებსა და სოციალურ ისტორიას." },
      { en: "Whatever the merits of the plan, its timing could hardly be worse.", ka: "გეგმას რა ღირსებებიც არ უნდა ჰქონდეს, მისი დრო უარესი ვერ იქნებოდა." }
    ]
  };


  // დამატებითი ფრაზები (ფრაზების id-ები გრძელდება 11-დან, რომ ძველი პროგრესი არ აირიოს)
  const EXTRA_PHRASES = {
    A1: [
      { en: "I am from Georgia.", ka: "მე საქართველოდან ვარ." },
      { en: "This is my friend Giorgi.", ka: "ეს ჩემი მეგობარი გიორგია." },
      { en: "I like tea with lemon.", ka: "ლიმონიანი ჩაი მიყვარს." },
      { en: "Where is the toilet, please?", ka: "სად არის საპირფარეშო, გთხოვთ?" },
      { en: "My phone number is five five five.", ka: "ჩემი ტელეფონის ნომერია ხუთი ხუთი ხუთი." },
      { en: "Today is Monday.", ka: "დღეს ორშაბათია." },
      { en: "I have two brothers.", ka: "ორი ძმა მყავს." },
      { en: "Can I have the bill, please?", ka: "ანგარიშს მომიტანთ, გთხოვთ?" },
      { en: "It is very hot today.", ka: "დღეს ძალიან ცხელა." },
      { en: "Thank you very much.", ka: "დიდი მადლობა." }
    ],
    A2: [
      { en: "I'm going to visit Batumi next summer.", ka: "მომავალ ზაფხულს ბათუმში წასვლას ვაპირებ." },
      { en: "How long does it take to get there?", ka: "რამდენი ხანი სჭირდება იქამდე მისვლას?" },
      { en: "I didn't sleep well last night.", ka: "წუხელ კარგად ვერ დავიძინე." },
      { en: "Is there a pharmacy near here?", ka: "აქ ახლოს აფთიაქია?" },
      { en: "I usually walk to work.", ka: "სამსახურში ჩვეულებრივ ფეხით დავდივარ." },
      { en: "Can I try this on?", ka: "შემიძლია ეს მოვიზომო?" },
      { en: "We are meeting at six in the evening.", ka: "საღამოს ექვს საათზე ვხვდებით." },
      { en: "She is taller than her sister.", ka: "ის თავის დაზე მაღალია." },
      { en: "I forgot my umbrella at home.", ka: "ქოლგა სახლში დამრჩა." },
      { en: "What would you like to drink?", ka: "რას დალევთ?" }
    ],
    B1: [
      { en: "I wish I had studied harder at school.", ka: "ნეტავ სკოლაში უფრო ბევრს ვსწავლობდი." },
      { en: "Have you ever thought about working abroad?", ka: "ოდესმე გიფიქრიათ საზღვარგარეთ მუშაობაზე?" },
      { en: "I'd prefer to stay in a smaller hotel.", ka: "უფრო პატარა სასტუმროში დარჩენას ვამჯობინებ." },
      { en: "It depends on how much time we have.", ka: "იმაზეა დამოკიდებული, რამდენი დრო გვექნება." },
      { en: "The meeting has been moved to Thursday.", ka: "შეხვედრა ხუთშაბათისთვის გადაიტანეს." },
      { en: "I'm thinking of changing my job.", ka: "სამსახურის შეცვლაზე ვფიქრობ." },
      { en: "Could you send me the details by email?", ka: "დეტალებს ელ-ფოსტით გამომიგზავნით?" },
      { en: "I've already seen that film twice.", ka: "ის ფილმი უკვე ორჯერ ვნახე." },
      { en: "Unless it rains, we'll have a picnic.", ka: "თუ არ იწვიმა, პიკნიკს მოვაწყობთ." },
      { en: "That's a good point, but I don't agree.", ka: "კარგი შენიშვნაა, მაგრამ არ ვეთანხმები." }
    ],
    B2: [
      { en: "I'd have called you if I had known you were in town.", ka: "დაგირეკავდი, რომ მცოდნოდა, ქალაქში იყავი." },
      { en: "The results were far better than we expected.", ka: "შედეგები ბევრად უკეთესი აღმოჩნდა, ვიდრე ველოდით." },
      { en: "She is said to be one of the best surgeons in the country.", ka: "ამბობენ, რომ ის ქვეყნის ერთ-ერთი საუკეთესო ქირურგია." },
      { en: "We should take into account the long-term costs.", ka: "გრძელვადიანი ხარჯები უნდა გავითვალისწინოთ." },
      { en: "No matter how hard I try, I can't remember his name.", ka: "რაც არ უნდა ვეცადო, მისი სახელი ვერ გავიხსენე." },
      { en: "I'm not entirely convinced by his argument.", ka: "მისმა არგუმენტმა ბოლომდე ვერ დამარწმუნა." },
      { en: "The deadline has been extended until next week.", ka: "ვადა მომავალ კვირამდე გაგრძელდა." },
      { en: "It's worth considering all the alternatives first.", ka: "ჯერ ყველა ალტერნატივის განხილვა ღირს." },
      { en: "Hardly anyone noticed the mistake.", ka: "შეცდომა თითქმის არავის შეუმჩნევია." },
      { en: "I'd appreciate it if you could reply by Friday.", ka: "მადლობელი ვიქნები, თუ პარასკევამდე მიპასუხებთ." }
    ],
    C1: [
      { en: "Rarely have I seen such a well-organised event.", ka: "იშვიათად მინახავს ასე კარგად ორგანიზებული ღონისძიება." },
      { en: "The report sheds light on a long-neglected issue.", ka: "ანგარიში დიდი ხნის უყურადღებოდ დატოვებულ საკითხს ნათელს ჰფენს." },
      { en: "Given the circumstances, the decision was understandable.", ka: "გარემოებების გათვალისწინებით, გადაწყვეტილება გასაგები იყო." },
      { en: "She was quick to dismiss the rumours as baseless.", ka: "მან ჭორები მაშინვე უსაფუძვლოდ გამოაცხადა." },
      { en: "The policy is bound to face fierce opposition.", ka: "ეს პოლიტიკა აუცილებლად წააწყდება მკაცრ წინააღმდეგობას." },
      { en: "Had it not been for her help, we would have failed.", ka: "მისი დახმარება რომ არა, ვერ მოვახერხებდით." },
      { en: "There is a fine line between confidence and arrogance.", ka: "თავდაჯერებულობასა და ქედმაღლობას შორის ზღვარი ძალიან თხელია." },
      { en: "The company has yet to respond to the allegations.", ka: "კომპანიას ბრალდებებზე ჯერ არ უპასუხია." },
      { en: "His remarks were taken out of context.", ka: "მისი შენიშვნები კონტექსტიდან ამოგლიჯეს." },
      { en: "We cannot afford to overlook these warning signs.", ka: "ამ გამაფრთხილებელი ნიშნების უგულებელყოფის უფლება არ გვაქვს." }
    ],
    C2: [
      { en: "The minister's evasive answers did little to allay public concern.", ka: "მინისტრის თავის არიდებულმა პასუხებმა საზოგადოების შეშფოთება ვერ შეამსუბუქა." },
      { en: "Far from being a setback, the delay proved to be a blessing in disguise.", ka: "დაგვიანება წარუმატებლობა კი არა, საბოლოოდ სასიკეთო აღმოჩნდა." },
      { en: "The novel offers a scathing critique of modern consumerism.", ka: "რომანი თანამედროვე მომხმარებლურ კულტურას მწვავედ აკრიტიკებს." },
      { en: "Such claims should be treated with a healthy degree of scepticism.", ka: "ასეთ განცხადებებს ჯანსაღი სკეპტიციზმით უნდა მოვეკიდოთ." },
      { en: "The negotiations were conducted behind closed doors.", ka: "მოლაპარაკებები დახურულ კარს მიღმა მიმდინარეობდა." },
      { en: "His meteoric rise to fame was as sudden as his downfall.", ka: "მისი ელვისებური აღზევება ისეთივე მოულოდნელი იყო, როგორც დაცემა." },
      { en: "The proposal, albeit ambitious, is fundamentally sound.", ka: "წინადადება, თუმცა ამბიციურია, არსებითად გამართულია." },
      { en: "One can hardly overstate the significance of this discovery.", ka: "ამ აღმოჩენის მნიშვნელობის გადაჭარბება თითქმის შეუძლებელია." },
      { en: "The film's understated elegance belies its emotional depth.", ka: "ფილმის თავშეკავებული ელეგანტურობა მის ემოციურ სიღრმეს ფარავს." },
      { en: "It remains to be seen whether the reforms will take root.", ka: "ჯერ უცნობია, ფეხს მოიკიდებს თუ არა რეფორმები." }
    ]
  };
  Object.keys(EXTRA_PHRASES).forEach(function (lvl) {
    PHRASES[lvl] = PHRASES[lvl].concat(EXTRA_PHRASES[lvl]);
  });

  // დიალოგები: "partner" ხაზს აპლიკაცია ხმოვნად კითხულობს, "you" ხაზი მომხმარებელმა უნდა თქვას
  const DIALOGUES = {
    A1: [
      { id: "dlg-A1-cafe", title: "კაფეში", lines: [
        { who: "partner", en: "Hi! What can I get you?", ka: "გამარჯობა! რა მოგიტანოთ?" },
        { who: "you", en: "A coffee, please.", ka: "ერთი ყავა, გთხოვთ." },
        { who: "partner", en: "Small or large?", ka: "პატარა თუ დიდი?" },
        { who: "you", en: "Large, please.", ka: "დიდი, გთხოვთ." },
        { who: "partner", en: "That's three lari.", ka: "სამი ლარი იქნება." },
        { who: "you", en: "Here you are. Thank you!", ka: "ინებეთ. მადლობა!" }
      ] }
    ],
    A2: [
      { id: "dlg-A2-hotel", title: "სასტუმროში რეგისტრაცია", lines: [
        { who: "partner", en: "Good evening. Do you have a reservation?", ka: "საღამო მშვიდობისა. ჯავშანი გაქვთ?" },
        { who: "you", en: "Yes, I booked a room for two nights.", ka: "დიახ, ორი ღამით ოთახი დავჯავშნე." },
        { who: "partner", en: "Can I see your passport, please?", ka: "პასპორტს მაჩვენებთ, გთხოვთ?" },
        { who: "you", en: "Of course. Here it is.", ka: "რა თქმა უნდა. ინებეთ." },
        { who: "partner", en: "Breakfast is from seven to ten.", ka: "საუზმე შვიდიდან ათამდეა." },
        { who: "you", en: "Great. What time is check out?", ka: "კარგი. რომელ საათზე უნდა გავათავისუფლო ოთახი?" }
      ] }
    ],
    B1: [
      { id: "dlg-B1-interview", title: "გასაუბრება სამსახურში", lines: [
        { who: "partner", en: "So, tell me a little about yourself.", ka: "აბა, ცოტა რამ მომიყევით თქვენ შესახებ." },
        { who: "you", en: "I've been working in marketing for three years.", ka: "სამი წელია, მარკეტინგში ვმუშაობ." },
        { who: "partner", en: "Why do you want to join our company?", ka: "რატომ გსურთ ჩვენს კომპანიაში მუშაობა?" },
        { who: "you", en: "I'm looking for new challenges and I like your products.", ka: "ახალ გამოწვევებს ვეძებ და თქვენი პროდუქტები მომწონს." },
        { who: "partner", en: "What is your biggest strength?", ka: "რა არის თქვენი ყველაზე ძლიერი მხარე?" },
        { who: "you", en: "I'm good at working in a team and solving problems.", ka: "კარგად ვმუშაობ გუნდში და პრობლემებს ვაგვარებ." }
      ] }
    ],
    B2: [
      { id: "dlg-B2-complaint", title: "საჩივარი მომსახურებაზე", lines: [
        { who: "partner", en: "Customer service, how can I help you?", ka: "მომხმარებელთა მომსახურება, რით შემიძლია დაგეხმაროთ?" },
        { who: "you", en: "I ordered a laptop two weeks ago and it still hasn't arrived.", ka: "ორი კვირის წინ ლეპტოპი შევუკვეთე და ჯერ არ მოსულა." },
        { who: "partner", en: "I'm sorry to hear that. Could you give me your order number?", ka: "ვწუხვარ. შეკვეთის ნომერს მეტყვით?" },
        { who: "you", en: "Sure, it's on the confirmation email you sent me.", ka: "რა თქმა უნდა, ის თქვენს გამოგზავნილ დადასტურების წერილშია." },
        { who: "partner", en: "It seems there was a delay at the warehouse.", ka: "როგორც ჩანს, საწყობში შეფერხება მოხდა." },
        { who: "you", en: "I'd like a refund if it can't be delivered this week.", ka: "თუ ამ კვირაში ვერ მოიტანთ, თანხის დაბრუნება მსურს." }
      ] }
    ],
    C1: [
      { id: "dlg-C1-debate", title: "დისკუსია დისტანციურ მუშაობაზე", lines: [
        { who: "partner", en: "Do you think remote work is here to stay?", ka: "როგორ ფიქრობთ, დისტანციური მუშაობა დიდხანს დარჩება?" },
        { who: "you", en: "I'd say it has fundamentally changed how we view the office.", ka: "ვიტყოდი, რომ მან ოფისისადმი ჩვენი დამოკიდებულება ძირეულად შეცვალა." },
        { who: "partner", en: "But doesn't it make collaboration harder?", ka: "მაგრამ თანამშრომლობას არ ართულებს?" },
        { who: "you", en: "To some extent, although the right tools can bridge that gap.", ka: "გარკვეულწილად, თუმცა სწორ ხელსაწყოებს ამ ხარვეზის შევსება შეუძლია." },
        { who: "partner", en: "So what would you recommend to employers?", ka: "მაშ, დამსაქმებლებს რას ურჩევდით?" },
        { who: "you", en: "A hybrid model seems to strike the best balance.", ka: "როგორც ჩანს, ჰიბრიდული მოდელი საუკეთესო ბალანსს იძლევა." }
      ] }
    ],
    C2: [
      { id: "dlg-C2-review", title: "წიგნის განხილვა", lines: [
        { who: "partner", en: "What did you make of the author's latest novel?", ka: "როგორ შეაფასე ავტორის ბოლო რომანი?" },
        { who: "you", en: "I found it beautifully written, if somewhat self-indulgent.", ka: "ლამაზად დაწერილი მეჩვენა, თუმცა ცოტა თვითკმაყოფილი." },
        { who: "partner", en: "Many critics hailed it as her finest work.", ka: "ბევრმა კრიტიკოსმა ის მის საუკეთესო ნაწარმოებად შეაფასა." },
        { who: "you", en: "I can see why, but the ending felt rather contrived.", ka: "მესმის რატომ, მაგრამ დასასრული საკმაოდ ხელოვნური მეჩვენა." },
        { who: "partner", en: "Would you still recommend it?", ka: "მაინც ურჩევდი სხვებს?" },
        { who: "you", en: "Without hesitation, its flaws notwithstanding.", ka: "უყოყმანოდ, მისი ნაკლოვანებების მიუხედავად." }
      ] }
    ]
  };

  let activeLevel = null;
  let activeIndex = 0;
  let recognition = null;
  let isListening = false;
  let lastResult = null; // { transcript, score, words: [{ text, ok }] }

  function getRecognitionCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
  }

  function normalizeWords(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[^a-z0-9'\s-]/g, " ")
      .split(/[\s-]+/)
      .filter(Boolean);
  }

  // რამდენი სამიზნე სიტყვა გამოითქვა სწორი თანმიმდევრობით (LCS) — უფრო სამართლიანი, ვიდრე უბრალო თანხვედრა
  function scoreAttempt(target, spoken) {
    const t = normalizeWords(target);
    const s = normalizeWords(spoken);
    const dp = [];
    for (let i = 0; i <= t.length; i++) {
      dp.push(new Array(s.length + 1).fill(0));
    }
    for (let i = 1; i <= t.length; i++) {
      for (let j = 1; j <= s.length; j++) {
        dp[i][j] = t[i - 1] === s[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    const okFlags = new Array(t.length).fill(false);
    let i = t.length;
    let j = s.length;
    while (i > 0 && j > 0) {
      if (t[i - 1] === s[j - 1]) {
        okFlags[i - 1] = true;
        i--;
        j--;
      } else if (dp[i - 1][j] >= dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
    const matched = okFlags.filter(Boolean).length;
    return {
      score: t.length ? Math.round((matched / t.length) * 100) : 0,
      words: t.map(function (w, idx) { return { text: w, ok: okFlags[idx] }; })
    };
  }

  function getCompletedIds() {
    const ids = App.Storage.get("progress.completedSpeakingIds", []);
    return Array.isArray(ids) ? ids : [];
  }

  function phraseId(level, idx) {
    return "sp-" + level + "-" + (idx + 1);
  }

  function markPhraseCompleted(level, idx, score) {
    const id = phraseId(level, idx);
    const done = getCompletedIds();
    if (done.indexOf(id) !== -1) return false;
    done.push(id);
    App.Storage.set("progress.completedSpeakingIds", done);
    App.Storage.set("progress.speakingSessions", (Number(App.Storage.get("progress.speakingSessions", 0)) || 0) + 1);
    if (App.Progress && typeof App.Progress.recordActivity === "function") {
      App.Progress.recordActivity({
        xp: 5,
        title: "გამოთქმის ვარჯიში (" + level + ", " + score + "%): " + PHRASES[level][idx].en,
        category: "საუბარი"
      });
    }
    return true;
  }

  function stopListening() {
    if (recognition) {
      try { recognition.abort(); } catch (e) {}
    }
    recognition = null;
    isListening = false;
  }

  let mode = "phrases"; // "phrases" | "dialogues"
  let activeDialogueIdx = 0;
  let dialogueStep = 0;

  function getCompletedDialogueIds() {
    const ids = App.Storage.get("progress.completedDialogueIds", []);
    return Array.isArray(ids) ? ids : [];
  }

  function markDialogueCompleted(dlg) {
    const done = getCompletedDialogueIds();
    if (done.indexOf(dlg.id) !== -1) return false;
    done.push(dlg.id);
    App.Storage.set("progress.completedDialogueIds", done);
    App.Storage.set("progress.speakingSessions", (Number(App.Storage.get("progress.speakingSessions", 0)) || 0) + 1);
    if (App.Progress && typeof App.Progress.recordActivity === "function") {
      App.Progress.recordActivity({ xp: 10, title: "დიალოგი დასრულდა: " + dlg.title, category: "საუბარი" });
    }
    return true;
  }

  function renderFeedbackHtml(esc) {
    if (isListening) {
      return '<p role="status" style="font-weight:700; color:var(--brand-primary);">🎙️ გისმენთ... წაიკითხეთ ფრაზა ხმამაღლა.</p>';
    }
    if (!lastResult) return "";
    const wordsHtml = lastResult.words.map(function (w) {
      return '<span class="sp-word ' + (w.ok ? "sp-word--ok" : "sp-word--miss") + '">' + esc(w.text) + "</span>";
    }).join("");
    const passed = lastResult.score >= PASS_SCORE;
    return (
      '<div role="status" style="margin-top:4px;">' +
        '<p style="font-weight:700; font-size:1.1rem; margin-bottom:8px;">' + (passed ? "✅ " : "🔁 ") + "შედეგი: " + lastResult.score + "%" +
          (passed ? "" : ' <span style="font-weight:500; font-size:0.88rem; color:var(--text-secondary);">(ჩასათვლელად საჭიროა ' + PASS_SCORE + "%)</span>") + "</p>" +
        '<div style="margin-bottom:8px;">' + wordsHtml + "</div>" +
        '<p style="font-size:0.88rem; color:var(--text-secondary);">ამოცნობილი ტექსტი: «' + esc(lastResult.transcript || "—") + "»</p>" +
      "</div>"
    );
  }

  const Speaking = {
    getAllPhrases: function () {
      return PHRASES;
    },

    getAllDialogues: function () {
      return DIALOGUES;
    },

    getTotalPhrases: function () {
      return LEVELS.reduce(function (sum, lvl) { return sum + PHRASES[lvl].length; }, 0);
    },

    speak: function (text, slow) {
      if (App.AudioEngine && typeof App.AudioEngine.speak === "function") {
        App.AudioEngine.speak(text, undefined, slow ? 0.75 : 1.0);
      } else if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US";
        u.rate = slow ? 0.75 : 1.0;
        window.speechSynthesis.speak(u);
      }
    },

    // ზოგადი ჩაწერა: target ტექსტთან შედარება, შემდეგ onScored(result) — თუ მომხმარებელი იმავე ეკრანზეა
    startListening: function (target, onScored) {
      const Ctor = getRecognitionCtor();
      if (!Ctor || isListening) return;
      const screenKey = mode + "|" + activeLevel + "|" + activeIndex + "|" + activeDialogueIdx + "|" + dialogueStep;

      if (App.AudioEngine && typeof App.AudioEngine.stop === "function") App.AudioEngine.stop();

      recognition = new Ctor();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      isListening = true;
      lastResult = null;
      this.render();

      recognition.onresult = (event) => {
        const alternatives = event.results && event.results[0] ? Array.from(event.results[0]) : [];
        let best = null;
        alternatives.forEach(function (alt) {
          const r = scoreAttempt(target, alt.transcript);
          if (!best || r.score > best.score) {
            best = { transcript: alt.transcript, score: r.score, words: r.words };
          }
        });
        const nowKey = mode + "|" + activeLevel + "|" + activeIndex + "|" + activeDialogueIdx + "|" + dialogueStep;
        if (nowKey !== screenKey) return;
        lastResult = best || { transcript: "", score: 0, words: scoreAttempt(target, "").words };
        App.UI.playSound(lastResult.score >= PASS_SCORE ? "success" : "click");
        if (onScored) onScored(lastResult);
      };

      recognition.onerror = (event) => {
        const code = event && event.error;
        if (code === "not-allowed" || code === "service-not-allowed") {
          App.UI.toast("მიკროფონზე წვდომა დაბლოკილია. ჩართეთ ის ბრაუზერის მისამართის ზოლში არსებული ხატულიდან.", "warning", 6000);
        } else if (code === "no-speech") {
          App.UI.toast("ხმა ვერ დაფიქსირდა. სცადეთ თავიდან და ილაპარაკეთ უფრო ხმამაღლა.", "info");
        } else if (code === "network") {
          App.UI.toast("მეტყველების ამოცნობას ინტერნეტ-კავშირი სჭირდება.", "warning");
        } else if (code !== "aborted") {
          App.UI.toast("მეტყველების ამოცნობა ვერ მოხერხდა. სცადეთ თავიდან.", "warning");
        }
      };

      recognition.onend = () => {
        isListening = false;
        recognition = null;
        if (App.Router && App.Router.currentRoute === "speaking") this.render();
      };

      try {
        recognition.start();
      } catch (e) {
        stopListening();
        this.render();
      }
    },

    recordPhrase: function () {
      const level = activeLevel;
      const idx = activeIndex;
      this.startListening(PHRASES[level][idx].en, function (res) {
        if (res.score >= PASS_SCORE && markPhraseCompleted(level, idx, res.score)) {
          App.UI.toast("🎉 შესანიშნავია! ფრაზა ჩაითვალა (" + res.score + "%).", "success");
        }
      });
    },

    // დიალოგში ვამოწმებთ მომხმარებლის მიმდინარე ხაზს; წარმატებისას გადავდივართ შემდეგზე
    recordDialogueLine: function () {
      const dlg = DIALOGUES[activeLevel][activeDialogueIdx];
      const line = dlg.lines[dialogueStep];
      if (!line || line.who !== "you") return;
      this.startListening(line.en, (res) => {
        if (res.score >= PASS_SCORE) this.advanceDialogue(true);
      });
    },

    advanceDialogue: function (fromRecognition) {
      const dlg = DIALOGUES[activeLevel][activeDialogueIdx];
      dialogueStep++;
      if (!fromRecognition) lastResult = null;
      // პარტნიორის ხაზებს ავტომატურად ვკითხულობთ
      if (dialogueStep < dlg.lines.length && dlg.lines[dialogueStep].who === "partner") {
        this.speak(dlg.lines[dialogueStep].en, false);
        dialogueStep++;
      }
      if (dialogueStep >= dlg.lines.length) {
        if (markDialogueCompleted(dlg)) {
          App.UI.playSound("success");
          App.UI.toast("🎉 დიალოგი დასრულდა: " + dlg.title, "success");
        }
      }
      window.setTimeout(() => {
        lastResult = null;
        if (App.Router && App.Router.currentRoute === "speaking" && !isListening) this.render();
      }, fromRecognition ? 1200 : 0);
    },

    startDialogue: function (idx) {
      stopListening();
      lastResult = null;
      activeDialogueIdx = idx;
      dialogueStep = 0;
      const dlg = DIALOGUES[activeLevel][idx];
      if (dlg.lines[0].who === "partner") {
        this.speak(dlg.lines[0].en, false);
        dialogueStep = 1;
      }
      this.render();
    },

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;

      if (!activeLevel) {
        const userLevel = App.Storage.get("progress.level", "A1");
        activeLevel = LEVELS.indexOf(userLevel) !== -1 ? userLevel : "A1";
      }

      const esc = App.UI.escapeHTML;
      const supported = !!getRecognitionCtor();
      const completed = getCompletedIds();
      const phrases = PHRASES[activeLevel];
      const levelDone = phrases.filter(function (p, idx) { return completed.indexOf(phraseId(activeLevel, idx)) !== -1; }).length;

      const tabsHtml = LEVELS.map(function (lvl) {
        return '<button type="button" class="pill-tab' + (lvl === activeLevel ? " active" : "") + '" data-speak-level="' + lvl + '" aria-pressed="' + (lvl === activeLevel) + '">' + lvl + "</button>";
      }).join("");

      const modeHtml =
        '<div class="segmented-control" role="group" aria-label="რეჟიმი">' +
          '<button type="button" class="segment-btn' + (mode === "phrases" ? " active" : "") + '" data-speak-mode="phrases" aria-pressed="' + (mode === "phrases") + '">💬 ფრაზები</button>' +
          '<button type="button" class="segment-btn' + (mode === "dialogues" ? " active" : "") + '" data-speak-mode="dialogues" aria-pressed="' + (mode === "dialogues") + '">🗣️ დიალოგები</button>' +
        "</div>";

      const header =
        '<section class="card">' +
          '<div class="section-header">' +
            "<div>" +
              '<h2 class="section-title">საუბრისა და გამოთქმის სტუდია</h2>' +
              '<p class="section-subtitle">მოუსმინეთ, გაიმეორეთ ხმამაღლა და მიიღეთ სიტყვა-სიტყვით შეფასება. ფრაზა ჩაითვლება ' + PASS_SCORE + "%-იანი სიზუსტიდან.</p>" +
            "</div>" +
            modeHtml +
          "</div>" +
          '<div class="filter-bar" style="margin-bottom:0;"><div class="pill-tabs" role="group" aria-label="დონის არჩევა">' + tabsHtml + "</div>" +
            (mode === "phrases" ? '<span class="stat-pill stat-pill--level">' + activeLevel + ": " + levelDone + " / " + phrases.length + "</span>" : "") +
          "</div>" +
        "</section>";

      const unsupportedNote = supported ? "" :
        '<p style="margin-top:12px; font-size:0.88rem; color:var(--text-secondary);">ℹ️ თქვენი ბრაუზერი მეტყველების ავტომატურ ამოცნობას არ უჭერს მხარს (მუშაობს Chrome-სა და Edge-ში). ' +
        "შეგიძლიათ ივარჯიშოთ მოსმენით და თავად შეაფასოთ გამოთქმა.</p>";

      let body = "";
      if (mode === "phrases") {
        const phrase = phrases[activeIndex];
        const isDone = completed.indexOf(phraseId(activeLevel, activeIndex)) !== -1;
        const listHtml = phrases.map(function (p, idx) {
          const done = completed.indexOf(phraseId(activeLevel, idx)) !== -1;
          return '<button type="button" class="btn btn-sm ' + (idx === activeIndex ? "btn-primary" : "btn-outline") + '" data-speak-index="' + idx + '" aria-label="ფრაზა ' + (idx + 1) + (done ? " (დასრულებული)" : "") + '">' + (done ? "✓ " : "") + (idx + 1) + "</button>";
        }).join("");
        const actionHtml = supported
          ? '<button type="button" class="btn btn-primary" id="speak-record-btn"' + (isListening ? " disabled" : "") + ">" + (isListening ? "🎙️ გისმენთ..." : "🎙️ ჩაწერა და შემოწმება") + "</button>"
          : '<button type="button" class="btn btn-primary" id="speak-selfcheck-btn">' + (isDone ? "✓ ჩათვლილია" : "✓ სწორად წარმოვთქვი") + "</button>";

        body =
          '<section class="card" aria-live="polite">' +
            '<div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:18px;">' + listHtml + "</div>" +
            '<p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:6px;">ფრაზა ' + (activeIndex + 1) + " / " + phrases.length + (isDone ? " • ✓ ჩათვლილია" : "") + "</p>" +
            '<p lang="en" class="sp-phrase">' + esc(phrase.en) + "</p>" +
            '<p style="color:var(--text-secondary); margin-bottom:18px;">' + esc(phrase.ka) + "</p>" +
            '<div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:18px;">' +
              '<button type="button" class="btn btn-outline" data-speak-say="' + esc(phrase.en) + '">🔊 მოსმენა</button>' +
              '<button type="button" class="btn btn-outline" data-speak-say="' + esc(phrase.en) + '" data-speak-slow="1">🐢 ნელა</button>' +
              actionHtml +
            "</div>" +
            renderFeedbackHtml(esc) +
            unsupportedNote +
            '<div style="display:flex; justify-content:space-between; gap:10px; margin-top:20px;">' +
              '<button type="button" class="btn btn-outline" id="speak-prev-btn"' + (activeIndex === 0 ? " disabled" : "") + ">← წინა</button>" +
              '<button type="button" class="btn btn-outline" id="speak-next-btn"' + (activeIndex === phrases.length - 1 ? " disabled" : "") + ">შემდეგი →</button>" +
            "</div>" +
          "</section>";
      } else {
        const dialogues = DIALOGUES[activeLevel] || [];
        const doneDlg = getCompletedDialogueIds();
        const dlg = dialogues[activeDialogueIdx];
        const finished = dlg && dialogueStep >= dlg.lines.length;
        const linesHtml = dlg ? dlg.lines.map(function (line, idx) {
          const state = idx < dialogueStep ? "done" : (idx === dialogueStep ? "current" : "upcoming");
          const hidden = line.who === "you" && state === "upcoming";
          return (
            '<div class="sp-line sp-line--' + line.who + " sp-line--" + state + '">' +
              '<div class="sp-line__who">' + (line.who === "you" ? "თქვენ" : "პარტნიორი") + "</div>" +
              '<div class="sp-line__bubble">' +
                '<p lang="en" class="sp-line__en">' + (hidden ? "• • •" : esc(line.en)) + "</p>" +
                (hidden ? "" : '<p class="sp-line__ka">' + esc(line.ka) + "</p>") +
                (line.who === "partner" && state !== "upcoming" ? '<button type="button" class="sp-line__replay" data-speak-say="' + esc(line.en) + '" aria-label="ხელახლა მოსმენა">🔊</button>' : "") +
              "</div>" +
            "</div>"
          );
        }).join("") : "";

        let controls = "";
        if (dlg && !finished) {
          const current = dlg.lines[dialogueStep];
          controls = supported
            ? '<button type="button" class="btn btn-primary" id="speak-dlg-record-btn"' + (isListening ? " disabled" : "") + ">" + (isListening ? "🎙️ გისმენთ..." : "🎙️ ჩემი რეპლიკის თქმა") + "</button>"
            : '<button type="button" class="btn btn-primary" id="speak-dlg-self-btn">✓ ვთქვი, შემდეგი</button>';
          controls = '<button type="button" class="btn btn-outline" data-speak-say="' + esc(current.en) + '">🔊 ნიმუშის მოსმენა</button>' + controls;
        } else if (finished) {
          controls = '<p style="font-weight:700; color:var(--color-success);">🎉 დიალოგი დასრულებულია!</p>' +
            '<button type="button" class="btn btn-outline" id="speak-dlg-restart-btn">↺ თავიდან</button>';
        }

        body =
          '<section class="card" aria-live="polite">' +
            '<div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:18px;">' +
              dialogues.map(function (d, idx) {
                return '<button type="button" class="btn btn-sm ' + (idx === activeDialogueIdx ? "btn-primary" : "btn-outline") + '" data-dialogue-index="' + idx + '">' + (doneDlg.indexOf(d.id) !== -1 ? "✓ " : "") + esc(d.title) + "</button>";
              }).join("") +
            "</div>" +
            '<div class="sp-dialogue">' + linesHtml + "</div>" +
            '<div style="display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin-top:18px;">' + controls + "</div>" +
            renderFeedbackHtml(esc) +
            unsupportedNote +
          "</section>";
      }

      container.innerHTML = '<div class="dashboard-grid">' + header + body + "</div>";
      this.bindEvents(container);
    },

    goTo: function (level, index) {
      stopListening();
      lastResult = null;
      if (level !== activeLevel) {
        activeDialogueIdx = 0;
        dialogueStep = 0;
      }
      activeLevel = level;
      activeIndex = Math.max(0, Math.min(PHRASES[level].length - 1, index));
      if (mode === "dialogues" && dialogueStep === 0) {
        this.startDialogue(activeDialogueIdx);
        return;
      }
      this.render();
    },

    bindEvents: function (container) {
      const self = this;
      container.querySelectorAll("[data-speak-mode]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          stopListening();
          lastResult = null;
          mode = btn.getAttribute("data-speak-mode");
          if (mode === "dialogues") {
            self.startDialogue(0);
          } else {
            self.render();
          }
        });
      });
      container.querySelectorAll("[data-speak-level]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.goTo(btn.getAttribute("data-speak-level"), 0);
        });
      });
      container.querySelectorAll("[data-speak-index]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.goTo(activeLevel, Number(btn.getAttribute("data-speak-index")));
        });
      });
      container.querySelectorAll("[data-speak-say]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.speak(btn.getAttribute("data-speak-say"), btn.hasAttribute("data-speak-slow"));
        });
      });
      container.querySelectorAll("[data-dialogue-index]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.startDialogue(Number(btn.getAttribute("data-dialogue-index")));
        });
      });

      const recordBtn = container.querySelector("#speak-record-btn");
      if (recordBtn) recordBtn.addEventListener("click", function () { self.recordPhrase(); });

      const selfBtn = container.querySelector("#speak-selfcheck-btn");
      if (selfBtn) {
        selfBtn.addEventListener("click", function () {
          if (markPhraseCompleted(activeLevel, activeIndex, 100)) {
            App.UI.playSound("success");
            App.UI.toast("✓ ფრაზა ჩაითვალა.", "success");
          }
          if (activeIndex < PHRASES[activeLevel].length - 1) {
            self.goTo(activeLevel, activeIndex + 1);
          } else {
            self.render();
          }
        });
      }

      const dlgRecord = container.querySelector("#speak-dlg-record-btn");
      if (dlgRecord) dlgRecord.addEventListener("click", function () { self.recordDialogueLine(); });
      const dlgSelf = container.querySelector("#speak-dlg-self-btn");
      if (dlgSelf) dlgSelf.addEventListener("click", function () { self.advanceDialogue(false); });
      const dlgRestart = container.querySelector("#speak-dlg-restart-btn");
      if (dlgRestart) dlgRestart.addEventListener("click", function () { self.startDialogue(activeDialogueIdx); });

      const prevBtn = container.querySelector("#speak-prev-btn");
      if (prevBtn) prevBtn.addEventListener("click", function () { self.goTo(activeLevel, activeIndex - 1); });
      const nextBtn = container.querySelector("#speak-next-btn");
      if (nextBtn) nextBtn.addEventListener("click", function () { self.goTo(activeLevel, activeIndex + 1); });
    }
  };

  // გვერდიდან გასვლისას მიკროფონი გამოვრთოთ
  window.addEventListener("hashchange", function () {
    if (isListening) stopListening();
    lastResult = null;
  });

  App.Speaking = Speaking;
  App.Speaking._scoreAttempt = scoreAttempt;
})(window);
