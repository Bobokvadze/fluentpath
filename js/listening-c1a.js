/**
 * LISTENING-C1A.JS — C1 დონის მოსასმენი თემები #61–#65
 * თითოეულ თემაში: 5 აბზაცი, 10 საკვანძო სიტყვა და 10 გააზრების კითხვა.
 * ფორმატი: glossary "english|ქართული", questions "კითხვა|სწორი|არასწორი1|არასწორი2|არასწორი3".
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ListeningDataC1 = (App.ListeningDataC1 || []).concat([
    {
      num: 61, level: "C1",
      icon: "🧠", genre: "ფსიქოლოგია",
      title: "პოდკასტი: კოგნიტური მიკერძოებები და გადაწყვეტილებების მიღება",
      subtitle: "Psychology Podcast: How Cognitive Biases Shape Our Decisions",
      time: "7 წთ",
      paragraphs: [
        [
          "Welcome back to 'Mind Matters'. Today we're looking at why intelligent, well-informed people still make predictable mistakes. Psychologists call these patterns cognitive biases: mental shortcuts that usually save us time and effort, but occasionally lead us badly astray. Crucially, they are not a sign of stupidity. They are a by-product of a brain that evolved to make fast decisions with incomplete information.",
          "კეთილი იყოს თქვენი დაბრუნება პოდკასტში „გონების საკითხები“. დღეს განვიხილავთ, რატომ უშვებენ ჭკვიანი და ინფორმირებული ადამიანებიც კი პროგნოზირებად შეცდომებს. ფსიქოლოგები ამ კანონზომიერებებს კოგნიტურ მიკერძოებებს უწოდებენ: ეს არის აზროვნების მალსახმობები, რომლებიც ჩვეულებრივ დროსა და ძალისხმევას გვიზოგავს, მაგრამ ზოგჯერ სერიოზულად გვაცდენს გზას. მთავარია, რომ ეს სისულელის ნიშანი არ არის — ეს იმ ტვინის თანმდევი შედეგია, რომელიც არასრული ინფორმაციით სწრაფი გადაწყვეტილებების მისაღებად განვითარდა."
        ],
        [
          "Take confirmation bias, arguably the most pervasive of all. Once we hold a belief, we tend to seek out evidence that supports it and quietly dismiss anything that contradicts it. In one classic study, people on both sides of a political debate read exactly the same mixed evidence, and each group came away more convinced that it had been right all along.",
          "ავიღოთ დადასტურების მიკერძოება, რომელიც, შესაძლოა, ყველაზე გავრცელებულია. როცა რაიმე რწმენა გვაქვს, ვცდილობთ ვიპოვოთ მტკიცებულებები, რომლებიც მას ამყარებს, ხოლო ყველაფერს, რაც ეწინააღმდეგება, ჩუმად უგულებელვყოფთ. ერთ კლასიკურ კვლევაში პოლიტიკური დებატის ორივე მხარის მონაწილეებმა ზუსტად ერთი და იგივე შერეული მტკიცებულებები წაიკითხეს — და თითოეული ჯგუფი კიდევ უფრო დარწმუნდა, რომ თავიდანვე მართალი იყო."
        ],
        [
          "Then there is anchoring. When people are asked to estimate a price or a quantity, the first number they encounter exerts a surprisingly strong pull, even when it is obviously irrelevant. Shoppers who first see a coat priced at five hundred euros will judge a two-hundred-euro coat as a bargain, while the same coat seen on its own might seem expensive.",
          "შემდეგია ღუზის ეფექტი. როცა ადამიანებს ფასის ან რაოდენობის შეფასებას ვთხოვთ, პირველი რიცხვი, რომელსაც ხედავენ, გასაოცრად ძლიერ გავლენას ახდენს — მაშინაც კი, როცა აშკარად შეუსაბამოა. მყიდველი, რომელიც ჯერ ხუთასევროიან პალტოს ნახავს, ორასევროიან პალტოს იაფად ჩათვლის, ხოლო იგივე პალტო ცალკე ნანახი შეიძლება ძვირი მოეჩვენოს."
        ],
        [
          "The sunk cost fallacy is another expensive habit. We keep investing in a failing project simply because we have already put so much into it, rather than asking whether future investment is worthwhile. Governments continue funding troubled infrastructure, and individuals sit through terrible films they paid for, because walking away feels like admitting that the original decision was a mistake.",
          "ძვირადღირებული ჩვევაა „დახარჯული რესურსის მცდარი ლოგიკაც“. ვაგრძელებთ წარუმატებელ პროექტში ინვესტირებას მხოლოდ იმიტომ, რომ უკვე ბევრი ჩავდეთ მასში, ნაცვლად იმისა, რომ ვიკითხოთ, ღირს თუ არა მომავალი დანახარჯი. მთავრობები აგრძელებენ პრობლემური ინფრასტრუქტურის დაფინანსებას, ადამიანები კი ბოლომდე უყურებენ ცუდ ფილმებს, რადგან ბილეთის ფული გადაიხადეს — წასვლა ხომ პირვანდელი გადაწყვეტილების შეცდომად აღიარებას ჰგავს."
        ],
        [
          "So can we protect ourselves? Awareness alone helps surprisingly little. What works better is changing the decision process itself: deliberately looking for evidence against our views, setting criteria before we see the options, and inviting someone to play devil's advocate. In other words, the most effective defence against bias is not a smarter individual but a better system.",
          "შეგვიძლია კი თავის დაცვა? მხოლოდ ინფორმირებულობა გასაოცრად ცოტას გვეხმარება. გაცილებით ეფექტურია თავად გადაწყვეტილების მიღების პროცესის შეცვლა: შეგნებულად ვეძიოთ მტკიცებულებები ჩვენი შეხედულებების საწინააღმდეგოდ, კრიტერიუმები ვარიანტების ნახვამდე დავადგინოთ და ვინმეს „ეშმაკის ადვოკატის“ როლი ვთხოვოთ. სხვა სიტყვებით, მიკერძოებისგან საუკეთესო დაცვა უფრო ჭკვიანი ადამიანი კი არა, უკეთესი სისტემაა."
        ]
      ],
      glossary: [
        "cognitive bias|კოგნიტური მიკერძოება (აზროვნების სისტემური შეცდომა)",
        "mental shortcut|აზროვნების მალსახმობი",
        "to lead astray|გზის აცდენა, შეცდომაში შეყვანა",
        "by-product|თანმდევი შედეგი",
        "pervasive|ყოვლისმომცველი, ფართოდ გავრცელებული",
        "to dismiss|უგულებელყოფა, უარყოფა",
        "anchoring|ღუზის ეფექტი (პირველი ინფორმაციის გადამეტებული გავლენა)",
        "sunk cost fallacy|დახარჯული რესურსის მცდარი ლოგიკა",
        "worthwhile|ღირებული, სასარგებლო",
        "devil's advocate|ეშმაკის ადვოკატი (განზრახ საპირისპირო აზრის დამცველი)"
      ],
      questions: [
        "According to the speaker, what are cognitive biases?|Mental shortcuts that usually help but sometimes lead us into predictable mistakes|Signs of low intelligence|Rare medical conditions affecting memory|Deliberate lies people tell themselves",
        "Why does the speaker say biases exist?|Because the brain evolved to make fast decisions with incomplete information|Because modern education is poor|Because people are naturally dishonest|Because of too much screen time",
        "What happened in the classic study on confirmation bias?|Both groups became more convinced of their original views after reading the same evidence|Both groups changed their minds completely|Only one group read the evidence|The participants refused to read anything",
        "What is anchoring?|The strong influence of the first number we encounter on later estimates|Refusing to change a decision|Remembering only recent events|Copying the opinions of others",
        "In the coat example, why does the 200-euro coat seem like a bargain?|Because shoppers first saw a coat priced at 500 euros|Because it is of higher quality|Because it was on sale for one day only|Because it was made locally",
        "What is the sunk cost fallacy?|Continuing to invest in something because of what has already been spent|Spending money on unnecessary luxuries|Saving too much money for the future|Avoiding all financial risks",
        "Why do people sit through bad films they paid for, according to the speaker?|Leaving feels like admitting the original decision was a mistake|They hope the ending will be excellent|They want to criticise it later|Cinemas do not allow people to leave",
        "How effective is simple awareness of biases?|It helps surprisingly little|It eliminates all biases|It makes biases much worse|It only works for experts",
        "Which strategy does the speaker recommend?|Setting decision criteria before seeing the options|Making all decisions as quickly as possible|Relying entirely on intuition|Avoiding any discussion with colleagues",
        "What is the speaker's final conclusion?|A better decision-making system is the best defence against bias|Only very intelligent people can avoid bias|Biases cannot be reduced at all|Technology will soon remove all biases"
      ]
    },
    {
      num: 62, level: "C1",
      icon: "🪸", genre: "ოკეანე და კლიმატი",
      title: "დოკუმენტური ფილმი: ოკეანის მჟავიანობა და მარჯნის რიფები",
      subtitle: "Documentary: Ocean Acidification and the Fate of Coral Reefs",
      time: "8 წთ",
      paragraphs: [
        [
          "Beneath the surface of tropical seas lie some of the richest ecosystems on Earth. Coral reefs cover less than one percent of the ocean floor, yet they support roughly a quarter of all marine species. They also protect coastlines from storms and provide food and income for hundreds of millions of people. Today, however, these underwater cities face a threat that is largely invisible.",
          "ტროპიკული ზღვების ზედაპირის ქვეშ დედამიწის ერთ-ერთი ყველაზე მდიდარი ეკოსისტემა იმალება. მარჯნის რიფები ოკეანის ფსკერის ერთ პროცენტზე ნაკლებს ფარავს, თუმცა ზღვის სახეობების დაახლოებით მეოთხედს ინახავს. ისინი სანაპიროებს ქარიშხლებისგან იცავს და ასობით მილიონ ადამიანს საკვებითა და შემოსავლით უზრუნველყოფს. დღეს კი ეს წყალქვეშა ქალაქები თითქმის უხილავი საფრთხის წინაშე დგას."
        ],
        [
          "Since the Industrial Revolution, the oceans have absorbed around a quarter of the carbon dioxide released by human activity. At first, scientists saw this as good news, because it slowed global warming. But when carbon dioxide dissolves in seawater, it forms carbonic acid. As a result, the ocean has become roughly thirty percent more acidic than it was two centuries ago.",
          "ინდუსტრიული რევოლუციის შემდეგ ოკეანეებმა ადამიანის საქმიანობით გამოყოფილი ნახშირორჟანგის დაახლოებით მეოთხედი შთანთქა. თავდაპირველად მეცნიერები ამას კარგ ამბად მიიჩნევდნენ, რადგან ეს გლობალურ დათბობას ანელებდა. მაგრამ როცა ნახშირორჟანგი ზღვის წყალში იხსნება, ნახშირმჟავა წარმოიქმნება. შედეგად, ოკეანე ორი საუკუნის წინანდელთან შედარებით დაახლოებით ოცდაათი პროცენტით უფრო მჟავე გახდა."
        ],
        [
          "For corals, this is a serious problem. They build their skeletons from calcium carbonate, and more acidic water makes that process slower and more costly. In laboratory experiments, young corals grown in water with the acidity predicted for the end of this century produced weaker, more fragile skeletons. Shellfish, sea urchins and even tiny plankton at the base of the food chain face similar difficulties.",
          "მარჯნებისთვის ეს სერიოზული პრობლემაა. ისინი ჩონჩხს კალციუმის კარბონატისგან აშენებენ, ხოლო უფრო მჟავე წყალი ამ პროცესს ანელებს და მეტ ენერგიას მოითხოვს. ლაბორატორიულ ექსპერიმენტებში ახალგაზრდა მარჯნებმა, რომლებიც ამ საუკუნის ბოლოსთვის ნავარაუდევი მჟავიანობის წყალში იზრდებოდნენ, უფრო სუსტი და მყიფე ჩონჩხი შექმნეს. მსგავსი სირთულეები აქვთ ნიჟარიან მოლუსკებს, ზღვის ზღარბებს და კვებითი ჯაჭვის საფუძველში მყოფ პაწია პლანქტონსაც კი."
        ],
        [
          "Acidification rarely acts alone. Marine heatwaves cause corals to expel the colourful algae that live inside them and supply most of their energy, a process known as bleaching. If temperatures return to normal quickly, corals can recover. But when heatwaves become more frequent and acidity weakens their structures, reefs have less and less time to rebuild between crises.",
          "მჟავიანობა იშვიათად მოქმედებს მარტო. ზღვის სითბური ტალღები მარჯნებს აიძულებს, გამოდევნონ ფერადი წყალმცენარეები, რომლებიც მათ შიგნით ცხოვრობენ და ენერგიის უმეტეს ნაწილს აწვდიან — ამ პროცესს გაუფერულება ეწოდება. თუ ტემპერატურა სწრაფად დაბრუნდება ნორმას, მარჯნები შეიძლება აღდგნენ. მაგრამ როცა სითბური ტალღები სულ უფრო ხშირდება, მჟავიანობა კი მათ სტრუქტურას ასუსტებს, რიფებს კრიზისებს შორის აღსადგენად სულ უფრო ნაკლები დრო რჩება."
        ],
        [
          "There are reasons for cautious hope. Some coral populations appear naturally more tolerant of heat and acidity, and researchers are breeding these resilient strains to restore damaged reefs. Local measures, such as reducing pollution and overfishing, also give reefs a better chance. Yet every scientist we spoke to agreed on one point: without deep cuts in carbon emissions, these efforts can only buy time.",
          "ფრთხილი იმედის საფუძველიც არსებობს. ზოგიერთი მარჯნის პოპულაცია ბუნებრივად უფრო მდგრადი ჩანს სიცხისა და მჟავიანობის მიმართ, ხოლო მკვლევრები ამ გამძლე სახეობებს აშენებენ დაზიანებული რიფების აღსადგენად. ადგილობრივი ზომები, როგორიცაა დაბინძურებისა და ჭარბი თევზჭერის შემცირება, რიფებს ასევე მეტ შანსს აძლევს. თუმცა ყველა მეცნიერი, ვისაც ვესაუბრეთ, ერთ რამეზე თანხმდებოდა: ნახშირბადის ემისიების მკვეთრი შემცირების გარეშე ეს ძალისხმევა მხოლოდ დროის მოგებას შეძლებს."
        ]
      ],
      glossary: [
        "ecosystem|ეკოსისტემა",
        "to absorb|შთანთქმა",
        "carbon dioxide|ნახშირორჟანგი",
        "acidic|მჟავე",
        "calcium carbonate|კალციუმის კარბონატი",
        "fragile|მყიფე, სუსტი",
        "food chain|კვებითი ჯაჭვი",
        "bleaching|(მარჯნის) გაუფერულება",
        "resilient|მდგრადი, გამძლე",
        "to buy time|დროის მოგება"
      ],
      questions: [
        "What share of marine species do coral reefs support?|Roughly a quarter|Less than one percent|About half|Almost all of them",
        "Why did scientists initially see ocean absorption of CO2 as good news?|Because it slowed global warming|Because it made the ocean cleaner|Because it increased fish populations|Because it cooled the poles directly",
        "What forms when carbon dioxide dissolves in seawater?|Carbonic acid|Calcium carbonate|Pure oxygen|Salt crystals",
        "How much more acidic has the ocean become in two centuries?|About thirty percent|About three percent|It has become less acidic|More than one hundred percent",
        "Why is acidity a problem for corals?|It makes building calcium carbonate skeletons slower and more costly|It changes their colour to blue|It makes them grow too quickly|It prevents them from moving",
        "What did laboratory experiments show?|Young corals in future acidity levels built weaker skeletons|Corals stopped needing sunlight|Acidity had no measurable effect|Corals grew larger in acidic water",
        "What is coral bleaching?|Corals expelling the algae that supply most of their energy|Corals being cleaned by fish|Corals changing location|Corals absorbing too much salt",
        "When can bleached corals recover?|If temperatures return to normal quickly|Only if they are moved to aquariums|Never under any circumstances|Only during winter storms",
        "What are researchers doing with heat-tolerant corals?|Breeding them to restore damaged reefs|Selling them to tourists|Moving them to cold seas|Using them to make medicine",
        "What did all the scientists agree on?|Without deep emission cuts, restoration can only buy time|Reefs will recover on their own|Local measures are enough to save reefs|Acidification has stopped"
      ]
    },
    {
      num: 63, level: "C1",
      icon: "🏙️", genre: "ქალაქი და გარემო",
      title: "ლექცია: ქალაქური სითბოს კუნძულები და მწვანე სახურავები",
      subtitle: "Lecture: Urban Heat Islands and the Case for Green Roofs",
      time: "7 წთ",
      paragraphs: [
        [
          "Good afternoon. If you have ever walked from a park into a busy city centre on a summer day, you will have noticed a sudden rise in temperature. This is the urban heat island effect. On calm summer evenings, the centre of a large city can be up to seven or eight degrees warmer than the surrounding countryside, and that difference has real consequences for health and energy use.",
          "შუადღე მშვიდობისა. თუ ოდესმე ზაფხულის დღეს პარკიდან ხალხმრავალ ქალაქის ცენტრში გადასულხართ, ტემპერატურის უეცარი მატება შეგიმჩნევიათ. ეს ქალაქური სითბოს კუნძულის ეფექტია. ზაფხულის მშვიდ საღამოებზე დიდი ქალაქის ცენტრი შეიძლება მიმდებარე სოფლებზე შვიდი-რვა გრადუსით თბილი იყოს, და ამ სხვაობას ჯანმრთელობასა და ენერგიის მოხმარებაზე რეალური შედეგები აქვს."
        ],
        [
          "Why does this happen? Dark surfaces such as asphalt and roofing materials absorb sunlight during the day and release the heat slowly at night. Tall buildings trap warm air and block cooling winds, while air conditioners, vehicles and factories add waste heat of their own. Meanwhile, cities have far fewer trees and plants, which would normally cool the air by releasing water vapour.",
          "რატომ ხდება ეს? მუქი ზედაპირები, როგორიცაა ასფალტი და სახურავის მასალები, დღისით მზის სინათლეს შთანთქავს და ღამით სითბოს ნელა გამოყოფს. მაღალი შენობები თბილ ჰაერს იჭერს და გამაგრილებელ ქარებს უღობავს გზას, ხოლო კონდიციონერები, მანქანები და ქარხნები საკუთარ ნარჩენ სითბოს ამატებს. ამავდროულად, ქალაქებში გაცილებით ნაკლები ხე და მცენარეა, რომლებიც ჩვეულებრივ ჰაერს წყლის ორთქლის გამოყოფით აგრილებს."
        ],
        [
          "The consequences are serious. During heatwaves, mortality rises sharply, particularly among elderly people living alone in poorly ventilated flats. Higher temperatures also increase demand for air conditioning, which puts pressure on electricity grids and, ironically, releases even more heat into the streets. Ground-level ozone, a harmful pollutant, forms more quickly in hot conditions as well.",
          "შედეგები სერიოზულია. სითბური ტალღების დროს სიკვდილიანობა მკვეთრად იზრდება, განსაკუთრებით მარტოხელა ხანდაზმულებში, რომლებიც ცუდად განიავებულ ბინებში ცხოვრობენ. მაღალი ტემპერატურა კონდიციონერებზე მოთხოვნასაც ზრდის, რაც ელექტროქსელებს ტვირთავს და, ირონიულად, ქუჩებში კიდევ უფრო მეტ სითბოს გამოყოფს. ცხელ ამინდში უფრო სწრაფად წარმოიქმნება მიწისპირა ოზონიც — მავნე დამაბინძურებელი."
        ],
        [
          "One promising response is the green roof: a layer of soil and vegetation installed on top of a building. Studies suggest that green roofs can lower roof surface temperatures by thirty degrees or more on hot days and reduce cooling costs inside. They also absorb rainwater, which eases pressure on drainage systems during storms, and they provide habitats for insects and birds.",
          "ერთ-ერთი პერსპექტიული პასუხი მწვანე სახურავია: შენობის თავზე დაგებული ნიადაგისა და მცენარეულობის ფენა. კვლევები აჩვენებს, რომ ცხელ დღეებში მწვანე სახურავებს შეუძლია სახურავის ზედაპირის ტემპერატურა ოცდაათი ან მეტი გრადუსით შეამციროს და შიგნით გაგრილების ხარჯები შეამციროს. ისინი წვიმის წყალსაც შთანთქავს, რაც ქარიშხლების დროს სადრენაჟო სისტემებს ამსუბუქებს, და მწერებსა და ფრინველებს საბინადრო გარემოს უქმნის."
        ],
        [
          "Green roofs are not a complete solution, of course. They are expensive to install on older buildings, which may need structural reinforcement, and they require maintenance. That is why many cities combine them with cheaper measures: painting roofs white, planting street trees and creating small parks. The lesson for urban planners is clear: cooling a city requires many small interventions rather than a single grand project.",
          "რა თქმა უნდა, მწვანე სახურავი სრული გადაწყვეტა არ არის. ძველ შენობებზე მისი მოწყობა ძვირია, რადგან შეიძლება კონსტრუქციის გამაგრება დასჭირდეს, და ის მოვლასაც საჭიროებს. ამიტომ ბევრი ქალაქი მათ იაფ ზომებთან აერთიანებს: სახურავების თეთრად შეღებვასთან, ქუჩებში ხეების დარგვასა და პატარა პარკების მოწყობასთან. ქალაქდამგეგმარებლებისთვის გაკვეთილი ნათელია: ქალაქის გაგრილებას ერთი გრანდიოზული პროექტი კი არა, ბევრი მცირე ჩარევა სჭირდება."
        ]
      ],
      glossary: [
        "urban heat island|ქალაქური სითბოს კუნძული",
        "surrounding|მიმდებარე",
        "to trap|დაჭერა, ჩაკეტვა",
        "waste heat|ნარჩენი სითბო",
        "water vapour|წყლის ორთქლი",
        "mortality|სიკვდილიანობა",
        "poorly ventilated|ცუდად განიავებული",
        "electricity grid|ელექტროქსელი",
        "drainage system|სადრენაჟო სისტემა",
        "structural reinforcement|კონსტრუქციის გამაგრება"
      ],
      questions: [
        "How much warmer can a city centre be than the countryside on calm summer evenings?|Up to seven or eight degrees|About half a degree|More than twenty degrees|There is no difference",
        "Why do dark surfaces increase city temperatures?|They absorb sunlight by day and release heat at night|They reflect all sunlight back into space|They produce electricity|They attract rain clouds",
        "What role do tall buildings play?|They trap warm air and block cooling winds|They create cool shadows that eliminate heat|They absorb pollution|They generate wind power",
        "Why do plants normally cool the air?|They release water vapour|They absorb all sunlight|They produce cold air at night|They block the wind",
        "Who is most at risk during heatwaves, according to the lecturer?|Elderly people living alone in poorly ventilated flats|Young athletes|Office workers|Tourists in hotels",
        "Why is increased air conditioning described as ironic?|It releases even more heat into the streets|It makes buildings colder than necessary|It is cheaper than fans|It reduces electricity demand",
        "By how much can green roofs reduce roof surface temperatures?|Thirty degrees or more|One or two degrees|They increase temperatures|Exactly ten degrees",
        "Which additional benefit of green roofs is mentioned?|They absorb rainwater and ease drainage pressure|They generate solar electricity|They make buildings taller|They remove the need for insulation",
        "Why are green roofs difficult to install on older buildings?|They may need structural reinforcement|They are not allowed by law|Plants cannot grow on old roofs|Older buildings are too small",
        "What is the lecturer's main lesson for urban planners?|Cooling a city requires many small interventions|One large project is enough|Only green roofs work|Cities cannot be cooled"
      ]
    },
    {
      num: 64, level: "C1",
      icon: "💼", genre: "სამუშაო და საზოგადოება",
      title: "პანელური დისკუსია: დისტანციური მუშაობა და პროდუქტიულობა",
      subtitle: "Panel Discussion: What Research Says About Remote Work",
      time: "8 წთ",
      paragraphs: [
        [
          "Moderator: Welcome to tonight's panel. Few changes in working life have been as sudden as the shift to remote work. Almost overnight, millions of office employees started working from their kitchens. Years later, companies are still arguing about whether to bring everyone back. Dr Lewis, you've studied this for a decade. What does the evidence actually tell us?",
          "წამყვანი: კეთილი იყოს თქვენი მობრძანება ამაღამინდელ პანელზე. სამუშაო ცხოვრებაში ცოტა ცვლილება ყოფილა ისეთი უეცარი, როგორიც დისტანციურ მუშაობაზე გადასვლა. თითქმის ერთ ღამეში მილიონობით ოფისის თანამშრომელმა სამზარეულოდან დაიწყო მუშაობა. წლების შემდეგაც კომპანიები ისევ კამათობენ, დააბრუნონ თუ არა ყველა ოფისში. დოქტორო ლუის, ამას ათი წელია სწავლობთ. რას გვეუბნება სინამდვილეში მტკიცებულებები?"
        ],
        [
          "Dr Lewis: The honest answer is that it depends on the type of work. For focused, individual tasks such as writing, analysis or programming, many studies find that people working from home are at least as productive as their office colleagues, partly because they face fewer interruptions and no commute. Some employees reported gaining more than an hour a day.",
          "დოქტორი ლუისი: გულწრფელი პასუხი ისაა, რომ ეს სამუშაოს ტიპზეა დამოკიდებული. კონცენტრაციის მომთხოვნ, ინდივიდუალურ ამოცანებზე — როგორიცაა წერა, ანალიზი ან პროგრამირება — ბევრი კვლევა აჩვენებს, რომ სახლიდან მომუშავეები სულ მცირე ისეთივე პროდუქტიულები არიან, როგორც ოფისელი კოლეგები, ნაწილობრივ იმიტომ, რომ ნაკლებად ერევიან და გზაში დრო არ ეკარგებათ. ზოგიერთმა თანამშრომელმა აღნიშნა, რომ დღეში საათზე მეტს იგებდა."
        ],
        [
          "Ms Okafor: But productivity isn't only about individual output. In my research on young employees, the biggest cost of remote work was invisible: the informal learning that happens when you overhear how a senior colleague handles a difficult client. New hires who worked fully remotely received noticeably less feedback and were promoted more slowly than those who sat near their teams.",
          "ქალბატონი ოკაფორი: მაგრამ პროდუქტიულობა მხოლოდ ინდივიდუალური შედეგი არ არის. ახალგაზრდა თანამშრომლებზე ჩემს კვლევაში დისტანციური მუშაობის ყველაზე დიდი ფასი უხილავი იყო: არაფორმალური სწავლა, რომელიც ხდება, როცა ყურს მოკრავ, როგორ უმკლავდება გამოცდილი კოლეგა რთულ კლიენტს. ახალმა თანამშრომლებმა, რომლებიც სრულად დისტანციურად მუშაობდნენ, შესამჩნევად ნაკლები უკუკავშირი მიიღეს და უფრო ნელა დაწინაურდნენ, ვიდრე ისინი, ვინც გუნდთან ახლოს ისხდნენ."
        ],
        [
          "Dr Lewis: That's an important point, and it explains why so many firms have settled on hybrid arrangements. The most successful companies we studied didn't simply let people choose randomly. They coordinated office days so that whole teams were present at the same time, and they used those days for mentoring, brainstorming and relationship building, rather than for tasks that could be done anywhere.",
          "დოქტორი ლუისი: ეს მნიშვნელოვანი შენიშვნაა და ხსნის, რატომ აირჩია ამდენმა ფირმამ ჰიბრიდული მოწყობა. ყველაზე წარმატებულ კომპანიებს, რომლებიც შევისწავლეთ, ადამიანებისთვის შემთხვევითი არჩევანის უფლება უბრალოდ არ მიუციათ. მათ ოფისის დღეები ისე შეათანხმეს, რომ მთელი გუნდი ერთდროულად ყოფილიყო, და ეს დღეები მენტორობისთვის, იდეების გენერირებისა და ურთიერთობების გასაღრმავებლად გამოიყენეს — და არა ისეთი ამოცანებისთვის, რისი გაკეთებაც ნებისმიერ ადგილას შეიძლება."
        ],
        [
          "Ms Okafor: I'd add one warning. Flexibility is valued so highly that many employees would accept lower pay to keep it. Companies that impose a rigid return to the office risk losing their most experienced people, who can easily find another employer. So the real question isn't remote versus office; it's how deliberately an organisation designs the way people work together.",
          "ქალბატონი ოკაფორი: ერთ გაფრთხილებას დავამატებდი. მოქნილობა იმდენად ფასობს, რომ ბევრი თანამშრომელი მის შესანარჩუნებლად უფრო დაბალ ხელფასსაც დათანხმდებოდა. კომპანიები, რომლებიც ოფისში მკაცრ დაბრუნებას აიძულებენ, რისკავენ, დაკარგონ ყველაზე გამოცდილი ადამიანები, რომლებიც ადვილად იპოვიან სხვა დამსაქმებელს. ასე რომ, ნამდვილი კითხვა „დისტანციური თუ ოფისი“ კი არ არის, არამედ ის, რამდენად გააზრებულად აგებს ორგანიზაცია ადამიანების ერთად მუშაობის წესს."
        ]
      ],
      glossary: [
        "remote work|დისტანციური მუშაობა",
        "evidence|მტკიცებულება",
        "interruption|შეწყვეტა, ხელის შეშლა",
        "commute|სამსახურში მისვლა-მოსვლა",
        "output|შედეგი, გამომუშავება",
        "to overhear|ყურის მოკვრა",
        "new hire|ახალი თანამშრომელი",
        "hybrid arrangement|ჰიბრიდული (შერეული) მოწყობა",
        "to impose|თავს მოხვევა, დაწესება",
        "deliberately|გააზრებულად, განზრახ"
      ],
      questions: [
        "According to Dr Lewis, what does the effect of remote work depend on?|The type of work|The size of the city|The employee's age only|The weather",
        "For which tasks do remote workers tend to be at least as productive?|Focused individual tasks like writing and programming|Physical tasks like construction|Customer service at a counter|Laboratory experiments",
        "What did some employees report gaining by working from home?|More than an hour a day|A higher salary|A company car|Longer holidays",
        "What does Ms Okafor describe as the biggest hidden cost of remote work?|The loss of informal learning from senior colleagues|Higher electricity bills|Poor internet connections|Loneliness during holidays",
        "What happened to new hires who worked fully remotely?|They received less feedback and were promoted more slowly|They were promoted faster|They earned higher bonuses|They changed jobs less often",
        "How did the most successful companies organise hybrid work?|They coordinated office days so whole teams were present together|They let everyone choose days randomly|They closed their offices completely|They required five office days a week",
        "What did these companies use office days for?|Mentoring, brainstorming and relationship building|Individual writing tasks|Answering emails|Long training videos",
        "How highly do employees value flexibility, according to Ms Okafor?|Many would accept lower pay to keep it|They care about it less than free coffee|They value it only in summer|Very few employees value it",
        "What risk do companies face if they impose a rigid return to the office?|Losing their most experienced people|Paying higher taxes|Running out of office space|Breaking the law",
        "What is the 'real question' according to the final speaker?|How deliberately an organisation designs collaboration|Whether offices should be closed forever|Which country has the best offices|How many hours employees sleep"
      ]
    },
    {
      num: 65, level: "C1",
      icon: "🧬", genre: "მეცნიერება და ეთიკა",
      title: "დებატები: CRISPR და გენების რედაქტირების ეთიკა",
      subtitle: "Debate: The Promise and Ethics of CRISPR Gene Editing",
      time: "8 წთ",
      paragraphs: [
        [
          "Host: Good evening and welcome to 'Big Questions'. A little over a decade ago, scientists unveiled CRISPR, a tool that allows researchers to edit DNA with unprecedented precision and at a fraction of the previous cost. It has been described as a pair of molecular scissors. Tonight we ask: how far should we go in rewriting the code of life?",
          "წამყვანი: საღამო მშვიდობისა და კეთილი იყოს თქვენი მობრძანება გადაცემაში „დიდი კითხვები“. ათიოდე წლის წინ მეცნიერებმა წარმოადგინეს CRISPR — ინსტრუმენტი, რომელიც მკვლევრებს დნმ-ის უპრეცედენტო სიზუსტით და ადრინდელი ღირებულების მცირე ნაწილად რედაქტირების საშუალებას აძლევს. მას მოლეკულურ მაკრატელსაც უწოდებენ. ამაღამ ვსვამთ კითხვას: რამდენად შორს უნდა წავიდეთ სიცოცხლის კოდის გადაწერაში?"
        ],
        [
          "Professor Hall: Let's start with what is already happening. Doctors have used gene editing to treat sickle cell disease, a painful inherited blood disorder. Patients who once needed constant transfusions are now living largely symptom-free. These treatments edit cells in the patient's own body, and the changes are not passed on to their children. Ethically, I see them as a natural extension of medicine.",
          "პროფესორი ჰოლი: დავიწყოთ იმით, რაც უკვე ხდება. ექიმებმა გენების რედაქტირება ნამგლისებრუჯრედოვანი ანემიის — მტკივნეული მემკვიდრეობითი სისხლის დაავადების — სამკურნალოდ გამოიყენეს. პაციენტები, რომლებსაც ოდესღაც მუდმივი გადასხმა სჭირდებოდათ, ახლა თითქმის სიმპტომების გარეშე ცხოვრობენ. ეს მკურნალობა პაციენტის საკუთარი სხეულის უჯრედებს არედაქტირებს და ცვლილებები შვილებს არ გადაეცემა. ეთიკური თვალსაზრისით, მე ამას მედიცინის ბუნებრივ გაგრძელებად ვხედავ."
        ],
        [
          "Dr Reyes: I agree about those therapies. My concern is germline editing: changing embryos, eggs or sperm, so that the alterations are inherited by every future generation. We still don't fully understand how genes interact, so an edit intended to prevent one disease might have unexpected effects decades later. And the people most affected, future generations, cannot possibly give their consent.",
          "დოქტორი რეიესი: ამ თერაპიებთან დაკავშირებით გეთანხმებით. ჩემი შეშფოთება ჩანასახის ხაზის რედაქტირებას ეხება: ემბრიონების, კვერცხუჯრედების ან სპერმის შეცვლას, რის შედეგადაც ცვლილებები ყველა მომავალ თაობას გადაეცემა. ჯერ კიდევ სრულად არ გვესმის, როგორ ურთიერთქმედებენ გენები, ამიტომ ცვლილებამ, რომელიც ერთი დაავადების თავიდან ასაცილებლადაა გამიზნული, შეიძლება ათწლეულების შემდეგ მოულოდნელი შედეგები გამოიწვიოს. ხოლო ყველაზე მეტად დაზარალებულებს — მომავალ თაობებს — თანხმობის მიცემა უბრალოდ არ შეუძლიათ."
        ],
        [
          "Professor Hall: Those risks are real, but consider families who carry genes for devastating conditions like Huntington's disease. If editing becomes safe, refusing to use it is also a moral choice, one that condemns children to preventable suffering. The line I would draw is between preventing serious disease and so-called enhancement, such as selecting for height or intelligence.",
          "პროფესორი ჰოლი: ეს რისკები რეალურია, მაგრამ წარმოიდგინეთ ოჯახები, რომლებიც ჰანტინგტონის დაავადების მსგავსი დამანგრეველი დაავადებების გენებს ატარებენ. თუ რედაქტირება უსაფრთხო გახდება, მის გამოყენებაზე უარის თქმაც მორალური არჩევანია — ისეთი, რომელიც ბავშვებს თავიდან აცილებადი ტანჯვისთვის იმეტებს. ზღვარს მე სერიოზული დაავადების პრევენციასა და ე.წ. „გაუმჯობესებას“ შორის გავავლებდი, მაგალითად, სიმაღლის ან ინტელექტის მიხედვით შერჩევას."
        ],
        [
          "Dr Reyes: The trouble is that the line between therapy and enhancement is blurry, and commercial pressures will push against it. If these procedures are expensive, we could create a world where wealthy families buy genetic advantages for their children. That's why I believe decisions of this magnitude must involve the public, not just scientists and companies, and must be governed by international agreements.",
          "დოქტორი რეიესი: პრობლემა ისაა, რომ თერაპიასა და „გაუმჯობესებას“ შორის ზღვარი ბუნდოვანია, კომერციული ზეწოლა კი მის გადალახვას შეეცდება. თუ ეს პროცედურები ძვირი იქნება, შეიძლება შევქმნათ სამყარო, სადაც მდიდარი ოჯახები შვილებისთვის გენეტიკურ უპირატესობებს ყიდულობენ. ამიტომ მჯერა, რომ ამ მასშტაბის გადაწყვეტილებებში მთელი საზოგადოება უნდა მონაწილეობდეს — და არა მხოლოდ მეცნიერები და კომპანიები — და ისინი საერთაშორისო შეთანხმებებით უნდა რეგულირდებოდეს."
        ]
      ],
      glossary: [
        "to unveil|წარდგენა, საჯაროდ გაცნობა",
        "unprecedented|უპრეცედენტო",
        "inherited|მემკვიდრეობითი",
        "transfusion|(სისხლის) გადასხმა",
        "germline editing|ჩანასახის ხაზის რედაქტირება (მემკვიდრეობითი ცვლილება)",
        "embryo|ემბრიონი",
        "consent|თანხმობა",
        "devastating|დამანგრეველი",
        "enhancement|გაუმჯობესება (ნორმაზე მეტი უნარების მიცემა)",
        "blurry|ბუნდოვანი"
      ],
      questions: [
        "What does CRISPR allow researchers to do?|Edit DNA with unprecedented precision at low cost|Clone entire animals instantly|Read human thoughts|Create new elements",
        "Which disease has already been treated with gene editing, according to Professor Hall?|Sickle cell disease|Influenza|Malaria|Diabetes",
        "Why does Professor Hall consider these treatments ethically acceptable?|They edit the patient's own cells and are not passed on to children|They are completely free|They do not require doctors|They change every future generation",
        "What is germline editing?|Changing embryos, eggs or sperm so changes are inherited|Editing only skin cells|Editing plants for agriculture|Removing genes after death",
        "What is one of Dr Reyes's main concerns about germline editing?|Future generations cannot give consent|It is too cheap|It only works on animals|It is too slow to be useful",
        "Why might an edit have unexpected effects decades later?|Because we do not fully understand how genes interact|Because DNA changes every year|Because doctors make errors deliberately|Because embryos reject all edits",
        "What argument does Professor Hall make about families with Huntington's disease?|Refusing safe editing could also be a moral choice that causes preventable suffering|They should never have children|Editing will always be unsafe|The disease is not serious",
        "Where would Professor Hall draw the ethical line?|Between preventing serious disease and enhancement|Between plants and animals|Between rich and poor countries|Between adults and children",
        "What social risk does Dr Reyes describe?|Wealthy families buying genetic advantages for their children|Scientists losing their jobs|Hospitals running out of space|Governments banning all medicine",
        "What does Dr Reyes believe should govern such decisions?|Public involvement and international agreements|Individual companies alone|Only the scientists who invent the tools|Random selection"
      ]
    }
  ]);
})(window);
