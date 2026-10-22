/**
 * SPEAKING-A.JS — A1 დონის 15 ვრცელი სასაუბრო თემა (#1–#15)
 * თითოეულ თემაში: 5 აბზაცი, 10 საკვანძო ფრაზა და 10 გააზრების კითხვა (სულ 150 კითხვა).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.SpeakingDataA1 = [
    {
      num: 1, level: "A1",
      icon: "👋", genre: "გაცნობა და ეტიკეტი",
      title: "საკუთარი თავის წარდგენა და მისალმება",
      subtitle: "Introducing Yourself and Greeting New People",
      time: "5 წთ",
      paragraphs: [
        [
          "Hello, everyone! My name is David Miller, and I am very happy to meet you today. I am twenty-four years old, and I come from Manchester, a lively city in the north of England. Two weeks ago, I moved to London to start a new job as a junior graphic designer at an advertising agency.",
          "მოგესალმებით ყველას! ჩემი სახელია დევიდ მილერი და ძალიან მიხარია დღეს თქვენი გაცნობა. მე ვარ ოცდაოთხი წლის და წარმოშობით ვარ მანჩესტერიდან, ინგლისის ჩრდილოეთით მდებარე ხალისიანი ქალაქიდან. ორი კვირის წინ გადმოვედი ლონდონში, რათა სარეკლამო სააგენტოში უმცროს გრაფიკულ დიზაინერად დამეწყო ახალი სამსახური."
        ],
        [
          "When I meet someone for the first time in a formal setting, I always smile, shake their hand, and say, 'How do you do? It is a pleasure to meet you.' With friends and young colleagues at the office, I usually say, 'Hi, I'm David! How is everything going with you today?'",
          "როდესაც ოფიციალურ გარემოში ვინმეს პირველად ვხვდები, ყოველთვის ვიღიმი, ხელს ვართმევ და ვამბობ: „როგორ ბრძანდებით? სასიამოვნოა თქვენი გაცნობა“. მეგობრებთან და ოფისის ახალგაზრდა კოლეგებთან კი ჩვეულებრივ ვამბობ: „სალამი, მე დევიდი ვარ! როგორ მიდის დღეს შენი საქმეები?“"
        ],
        [
          "Right now, I am attending an evening Spanish course at the Community Language Centre twice a week. On the first evening, our teacher asked each student to stand up, spell their surname aloud, and share three interesting facts about their daily life and interests.",
          "ამჟამად კვირაში ორჯერ ვესწრები ესპანური ენის საღამოს კურსს საუბნო ენების ცენტრში. პირველ საღამოს ჩვენმა მასწავლებელმა თითოეულ სტუდენტს სთხოვა ფეხზე წამომდგარიყო, ხმამაღლა ასო-ასო წარმოეთქვა საკუთარი გვარი და გაეზიარებინა სამი საინტერესო ფაქტი თავისი ყოველდღიური ცხოვრებისა და ინტერესების შესახებ."
        ],
        [
          "Next to me in the classroom sits a friendly woman named Clara. She comes from Milan, Italy, and she works as a pastry chef at a famous hotel near Hyde Park. During the fifteen-minute coffee break, we talked about our favourite cities, music, and traditional dishes.",
          "საკლასო ოთახში ჩემ გვერდით ზის მეგობრული ქალი, სახელად კლარა. ის წარმოშობით იტალიიდან, მილანიდანაა და ჰაიდ-პარკთან ახლოს მდებარე ცნობილ სასტუმროში კონდიტერად მუშაობს. თხუთმეტწუთიანი ყავის შესვენების დროს ჩვენ ვისაუბრეთ ჩვენს საყვარელ ქალაქებზე, მუსიკასა და ტრადიციულ კერძებზე."
        ],
        [
          "At the end of the lesson, Clara and I exchanged phone numbers so we could practice speaking together before the next class. Before leaving the building, I said to her, 'Thank you for a lovely conversation, Clara! Have a safe trip home, and see you on Thursday evening!'",
          "გაკვეთილის ბოლოს მე და კლარამ ტელეფონის ნომრები გავცვალეთ, რათა მომდევნო ლექციამდე საუბარში ერთად გვევარჯიშა. შენობიდან გასვლამდე მას ვუთხარი: „გმადლობ სასიამოვნო საუბრისთვის, კლარა! მშვიდობიან მგზავრობას გისურვებ სახლამდე და ხუთშაბათ საღამოს შევხვდებით!“"
        ]
      ],
      glossary: [
        "It is a pleasure to meet you|სასიამოვნოა თქვენი გაცნობა", "come from|წარმოშობით იყო (საიდანმე)", "advertising agency|სარეკლამო სააგენტო",
        "formal setting|ოფიციალური გარემო", "shake hands|ხელის ჩამორთმევა", "spell a surname|გვარის ასო-ასო წარმოთქმა",
        "pastry chef|კონდიტერი (ტკბილეულის შეფ-მზარეული)", "coffee break|ყავის შესვენება", "exchange phone numbers|ტელეფონის ნომრების გაცვლა", "Have a safe trip home|მშვიდობიან მგზავრობას გისურვებ სახლამდე"
      ],
      questions: [
        "How old is David Miller, and which city does he come from?|He is twenty-four years old and comes from Manchester|He is thirty years old and comes from Rome|He is nineteen years old and comes from Oxford|He isforty years old and comes from Dublin",
        "Why did David move to London two weeks ago?|To start a new job as a junior graphic designer at an advertising agency|To study medicine at a hospital|To open an Italian restaurant|To live with his grandparents",
        "What does David say and do when meeting someone in a formal setting?|He smiles, shakes their hand, and says, 'How do you do? It is a pleasure to meet you.'|He waves from across the street without speaking|He asks for their phone number immediately|He only nods his head silently",
        "How often does David attend his evening Spanish course?|Twice a week|Every single morning|Once a month on Sundays|Five times a week",
        "What did the language teacher ask each student to do on the first evening?|Stand up, spell their surname aloud, and share three interesting facts about themselves|Write a five-page essay in Spanish|Sing a traditional song|Read a newspaper article",
        "Where does Clara come from, and what is her profession?|She comes from Milan, Italy, and works as a pastry chef at a hotel|She comes from Madrid and works at a bank|She comes from Paris and teaches music|She comes from Berlin and drives a bus",
        "Where is the hotel where Clara works located?|Near Hyde Park|Next to the airport|Outside Manchester|Opposite the railway station",
        "What did David and Clara talk about during the fifteen-minute coffee break?|Their favourite cities, music, and traditional dishes|Office taxes and computer repairs|Football scores and winter coats|Hospital rules",
        "Why did David and Clara exchange phone numbers at the end of the lesson?|So they could practice speaking together before the next class|Because Clara wanted to sell her car|Because David lost his textbook|To invite the teacher to dinner",
        "On which evening will David and Clara see each other again at the course?|On Thursday evening|On Saturday morning|On Monday afternoon|Next month"
      ]
    },
    {
      num: 2, level: "A1",
      icon: "👨‍👩‍👧‍👦", genre: "ოჯახი",
      title: "საუბარი ოჯახსა და ნათესავებზე",
      subtitle: "Talking About Your Family and Relatives",
      time: "5 წთ",
      paragraphs: [
        [
          "Let me show you a photograph of my family! We took this picture last summer in my parents' garden during my grandfather's seventieth birthday celebration. I come from a close-knit family of five people: my father, my mother, my older brother, my younger sister, and me.",
          "ნება მიბოძეთ გაჩვენოთ ჩემი ოჯახის ფოტოსურათი! ეს სურათი გასულ ზაფხულს ჩემი მშობლების ბაღში გადავიღეთ ბაბუაჩემის სამოცდამეათე დაბადების დღის აღნიშვნისას. მე ვარ ხუთი ადამიანისგან შემდგარი მჭიდრო, მეგობრული ოჯახიდან: მამაჩემი, დედაჩემი, ჩემი უფროსი ძმა, უმცროსი და და მე."
        ],
        [
          "The tall man standing on the left in the blue shirt is my father, Richard. He is fifty-two years old and works as a civil engineer who designs bridges and roads. He is a very patient and calm person, and on weekends he loves repairing old wooden clocks in his workshop.",
          "მარცხნივ ლურჯ პერანგში მდგომი მაღალი მამაკაცი მამაჩემი, რიჩარდია. ის ორმოცდათორმეტი წლისაა და მუშაობს სამოქალაქო ინჟინრად, რომელიც ხიდებსა და გზებს აპროექტებს. ის ძალიან მომთმენი და მშვიდი ადამიანია, შაბათ-კვირას კი თავის სახელოსნოში ძველი ხის საათების შეკეთება უყვარს."
        ],
        [
          "Standing next to my father is my mother, Helen. She is forty-nine years old and teaches biology at a local secondary school. My mother has curly brown hair and warm green eyes. Everyone in our neighbourhood loves her because she grows beautiful roses and always bakes fresh apple pie for guests.",
          "მამაჩემის გვერდით დგას დედაჩემი, ჰელენი. ის ორმოცდაცხრა წლისაა და ადგილობრივ საშუალო სკოლაში ბიოლოგიას ასწავლის. დედაჩემს ხვეული წაბლისფერი თმა და თბილი მწვანე თვალები აქვს. ჩვენს სამეზობლოში ის ყველას უყვარს, რადგან ახარებს ულამაზეს ვარდებს და სტუმრებისთვის ყოველთვის აცხობს ახალ ვაშლის ღვეზელს."
        ],
        [
          "My older brother, Lucas, is twenty-eight and already married. He and his wife, Emma, live in a cosy apartment ten minutes away from our house, and they have a two-year-old daughter named Lily — which makes me a proud uncle! My younger sister, Sophie, is seventeen and wants to study architecture at university next year.",
          "ჩემი უფროსი ძმა, ლუკასი, ოცდარვა წლისაა და უკვე დაოჯახებულია. ის და მისი მეუღლე ემა ჩვენი სახლიდან ათი წუთის სავალზე, მყუდრო ბინაში ცხოვრობენ და ჰყავთ ორი წლის ქალიშვილი, სახელად ლილი — რაც იმას ნიშნავს, რომ მე ამაყი ბიძა ვარ! ჩემი უმცროსი და, სოფი, ჩვიდმეტი წლისაა და მომავალ წელს უნივერსიტეტში არქიტექტურის შესწავლა სურს."
        ],
        [
          "Even though we all have busy weekday schedules, we have a special family tradition: every Sunday at two o'clock in the afternoon, we all gather at my parents' house for Sunday roast dinner. We cook together, play board games in the living room, and share stories from our week.",
          "მიუხედავად იმისა, რომ სამუშაო დღეებში ყველას დატვირთული გრაფიკი გვაქვს, ჩვენ გვაქვს განსაკუთრებული ოჯახური ტრადიცია: ყოველ კვირა დღეს, ნაშუადღევის ორ საათზე, ყველანი ვიკრიბებით ჩემი მშობლების სახლში საკვირაო სადილზე. ჩვენ ერთად ვამზადებთ საჭმელს, მისაღებ ოთახში ვთამაშობთ სამაგიდო თამაშებს და ერთმანეთს ვუზიარებთ კვირის ამბებს."
        ]
      ],
      glossary: [
        "close-knit family|მჭიდროდ შეკრული / მეგობრული ოჯახი", "civil engineer|სამოქალაქო (მშენებელი) ინჟინერი", "workshop|სახელოსნო",
        "secondary school|საშუალო სკოლა", "curly hair|ხვეული თმა", "married|დაოჯახებული / დაქორწინებული",
        "proud uncle|ამაყი ბიძა", "niece|ძმისშვილი ან დისშვილი (გოგონა)", "family tradition|ოჯახური ტრადიცია", "board games|სამაგიდო თამაშები"
      ],
      questions: [
        "When and where was the family photograph taken?|Last summer in the parents' garden during the grandfather's 70th birthday celebration|In winter inside a restaurant|Five years ago at the beach|At Lucas's wedding in a church",
        "What is the speaker's father's job, and how old is he?|He is fifty-two years old and works as a civil engineer who designs bridges and roads|He is forty years old and works as a doctor|He is sixty years old and drives a train|He is a history teacher",
        "What hobby does the father enjoy doing in his workshop on weekends?|Repairing old wooden clocks|Painting landscapes|Building canoes|Playing the drums",
        "What subject does the speaker's mother, Helen, teach at the secondary school?|Biology|Mathematics|Spanish|Music",
        "What does the mother look like?|She has curly brown hair and warm green eyes|She has short blonde hair and blue eyes|She is very tall with glasses|She has straight black hair",
        "Who is Lily, and how old is she?|She is the two-year-old daughter of the speaker's older brother Lucas and his wife Emma|She is the speaker's younger sister|She is a neighbour's cat|She is the speaker's cousin",
        "How old is the speaker's younger sister, Sophie, and what does she want to study?|She is seventeen and wants to study architecture at university next year|She is twelve and wants to be a vet|She is twenty-five and studies law|She is ten years old",
        "How far away do Lucas and Emma live from the parents' house?|Ten minutes away|In another country|Three hours away by train|On the same floor",
        "What is the family's special tradition every Sunday at two o'clock?|They all gather at the parents' house for Sunday roast dinner|They go swimming in the lake|They watch a movie at the cinema|They clean the garage",
        "What do the family members do together in the living room after Sunday dinner?|They play board games and share stories from their week|They sleep until evening|They study English grammar|They watch football on TV"
      ]
    },
    {
      num: 3, level: "A1",
      icon: "⏰", genre: "დღის რეჟიმი",
      title: "ყოველდღიური განრიგის აღწერა",
      subtitle: "Describing Your Daily Routine",
      time: "5 წთ",
      paragraphs: [
        [
          "People often ask me how I manage to stay energetic throughout the week. The secret is keeping a regular daily routine! From Monday to Friday, my alarm clock rings at quarter to seven in the morning. I never stay in bed looking at my phone; I get up immediately and open the bedroom window for fresh air.",
          "ადამიანები ხშირად მეკითხებიან, როგორ ვახერხებ მთელი კვირის განმავლობაში ენერგიულობის შენარჩუნებას. საიდუმლო რეგულარული დღის რეჟიმის დაცვაშია! ორშაბათიდან პარასკევის ჩათვლით ჩემი მაღვიძარა დილის შვიდის თხუთმეტ წუთზე (06:45-ზე) რეკავს. საწოლში ტელეფონის საყურებლად არასდროს ვრჩები; მაშინვე ვდგები და სუფთა ჰაერისთვის საძინებლის ფანჯარას ვაღებ."
        ],
        [
          "First, I drink a tall glass of water, take a warm shower, and brush my teeth. At sevenfifteen, I go to the kitchen to prepare a healthy breakfast. I usually cook oatmeal with banana slices and honey, or two boiled eggs with brown toast, accompanied by a cup of black coffee.",
          "პირველ რიგში, ვსვამ ერთ დიდ ჭიქა წყალს, ვიღებ თბილ შხაპს და ვიხეხავ კბილებს. რვის თხუთმეტ წუთზე (07:15-ზე) გავდივარ სამზარეულოში ჯანსაღი საუზმის მოსამზადებლად. ჩვეულებრივ ვამზადებ შვრიის ფაფას ბანანის ნაჭრებითა და თაფლით, ან ორ მოხარშულ კვერცხს შავ ტოსტთან და ფინჯან შავ ყავასთან ერთად."
        ],
        [
          "I leave my apartment at eight o'clock and walk ten minutes to the underground station. During the twenty-minute train ride to the city centre, I always listen to an English podcast or read a chapter of a book. I arrive at my office desk at eight forty-five, fifteen minutes before work officially starts.",
          "ბინიდან გავდივარ რვა საათზე და მეტროს სადგურამდე ათი წუთი ფეხით მივდივარ. ქალაქის ცენტრამდე ოცწუთიანი მგზავრობისას ყოველთვის ვუსმენ ინგლისურ პოდკასტს ან ვკითხულობ წიგნის ერთ თავს. ჩემს სამუშაო მაგიდასთან მივდივარ ცხრის თხუთმეტ წუთზე (08:45-ზე), სამუშაოს ოფიციალურ დაწყებამდე თხუთმეტი წუთით ადრე."
        ],
        [
          "In the morning, when my mind is sharpest, I answer important emails and write reports. At one o'clock, I take a one-hour lunch break with my colleagues at a salad bar near our building, and then we walk around the park for twenty minutes before returning to work until five thirty.",
          "დილით, როდესაც ჩემი გონება ყველაზე სხარტია, ვპასუხობ მნიშვნელოვან წერილებს და ვწერ ანგარიშებს. პირველ საათზე კოლეგებთან ერთად ვიღებ ერთსაათიან სადილის შესვენებას ჩვენს შენობასთან მდებარე სალათების ბარში, შემდეგ კი ოცი წუთი პარკში ვსეირნობთ, სანამ ექვსის ნახევრამდე სამუშაოს დავუბრუნდებით."
        ],
        [
          "On Tuesday and Thursday evenings, I go to the gym for an hour of exercise before going home. In the evening, I cook a light dinner of fish or chicken with vegetables, pack my bag for the next day, and read in bed until half past ten. Turning off the lights before eleven guarantees eight hours of deep sleep!",
          "სამშაბათსა და ხუთშაბათს საღამოობით, სახლში მისვლამდე ერთი საათით სავარჯიშოდ სპორტდარბაზში მივდივარ. საღამოს ვამზადებ მსუბუქ ვახშამს თევზით ან ქათმითა და ბოსტნეულით, ვალაგებ ჩანთას მომდევნო დღისთვის და თერთმეტის ნახევრამდე საწოლში ვკითხულობ. თერთმეტ საათამდე შუქის ჩაქრობა რვასაათიანი ღრმა ძილის გარანტიას მაძლევს!"
        ]
      ],
      glossary: [
        "daily routine|ყოველდღიური განრიგი / რუტინა", "quarter to seven|შვიდის თხუთმეტი წუთი (06:45)", "get up immediately|მაშინვე ადგომა (ლოგინიდან)",
        "take a shower|შხაპის მიღება", "oatmeal|შვრიის ფაფა (ჰერკულესი)", "underground station|მეტროს სადგური",
        "when my mind is sharpest|როდესაც გონება ყველაზე სხარტია/ფხიზელია", "lunch break|სადილის შესვენება", "light dinner|მსუბუქი ვახშამი", "deep sleep|ღრმა ძილი"
      ],
      questions: [
        "What time does the speaker's alarm clock ring from Monday to Friday?|At quarter to seven (6:45 AM)|At eight o'clock|At half past five|At nine o'clock",
        "What does the speaker do immediately after waking up?|Gets up immediately and opens the bedroom window for fresh air|Checks social media in bed for thirty minutes|Watches television|Calls a friend",
        "What does the speaker usually eat for breakfast at 7:15 AM?|Oatmeal with banana and honey, or two boiled eggs with brown toast and black coffee|Pizza and cold cola|Chocolate cake and milk|Nothing at all",
        "How does the speaker travel to the city centre every morning?|Walks ten minutes to the underground station and takes a twenty-minute train ride|Drives a car for one hour|Rides a motorcycle|Takes two buses",
        "What does the speaker do during the twenty-minute train ride?|Listens to an English podcast or reads a chapter of a book|Sleeps on the seat|Plays loud video games|Writes emails on a laptop",
        "What time does the speaker arrive at the office desk?|At eight forty-five (fifteen minutes before work starts at nine)|At nine thirty|At ten o'clock|At seven thirty",
        "What does the speaker do during the one-hour lunch break at one o'clock?|Eats at a salad bar with colleagues and walks around the park for twenty minutes|Eats a sandwich at the computer desk|Goes home to sleep|Goes shopping for clothes",
        "What time does the speaker finish work in the afternoon?|At five thirty (5:30 PM)|At three o'clock|At eight in the evening|At noon",
        "Where does the speaker go on Tuesday and Thursday evenings after work?|To the gym for an hour of exercise|To the cinema|To a music lesson|To a cooking class",
        "What time does the speaker turn off the lights to guarantee eight hours of sleep?|Before eleven o'clock at night (after reading until 10:30 PM)|At two in the morning|At eight in the evening|At midnight"
      ]
    },
    {
      num: 4, level: "A1",
      icon: "🍽️", genre: "რესტორანი",
      title: "საჭმლისა და სასმლის შეკვეთა რესტორანში",
      subtitle: "Ordering Food and Drinks at a Restaurant",
      time: "5 წთ",
      paragraphs: [
        [
          "Good evening! Do you have a table for two, please? We didn't make a reservation in advance, but we would love to sit near the window or out on the garden patio if you have a free table. Thank you very much — this corner table under the lamp looks wonderful!",
          "საღამო მშვიდობისა! გთხოვთ გვითხრათ, გაქვთ თუ არა მაგიდა ორი პერსონისთვის? წინასწარ ჯავშანი არ გაგვიკეთებია, მაგრამ სიამოვნებით დავსხდებოდით ფანჯარასთან ან ბაღის ტერასაზე, თუ თავისუფალი მაგიდა გაქვთ. დიდი მადლობა — სანათის ქვეშ მდგარი ეს კუთხის მაგიდა შესანიშნავად გამოიყურება!"
        ],
        [
          "Could we see the food and drink menus, please? While we look at the main courses, could you bring us a jug of tap water with ice and lemon slices, and one glass of fresh apple juice? Also, could you tell us what the soup of the day is tonight?",
          "შეიძლება ვნახოთ კერძებისა და სასმელების მენიუ? სანამ ძირითად კერძებს გადავხედავთ, შეგიძლიათ მოგვიტანოთ ერთი დოქი წყალი ყინულითა და ლიმონის ნაჭრებით, და ერთი ჭიქა ახალდაწურული ვაშლის წვენი? ასევე, ხომ ვერ გვეტყვით, რა არის დღეს „დღის წვნიანი“?"
        ],
        [
          "The waiter tells us that tonight's soup of the day is roasted tomato and basil soup served with warm crusty bread. That sounds delicious! We are ready to order now: for my starter, I would like a bowl of the tomato soup, and my friend will have the Greek salad with feta cheese and olives.",
          "მიმტანი გვეუბნება, რომ დღეს საღამოს „დღის წვნიანი“ არის შემწვარი პომიდვრისა და რეჰანის კრემ-სუპი, რომელსაც თბილ ხრაშუნა პურთან ერთად მოართმევენ. უგემრიელესად ჟღერს! ჩვენ უკვე მზად ვართ შესაკვეთად: წასახემსებლად (სტარტერად) მე ავიღებ ერთ თას პომიდვრის წვნიანს, ხოლო ჩემი მეგობარი მიირთმევს ბერძნულ სალათას ფეტა ყველითა და ზეთისხილით."
        ],
        [
          "For the main course, I would like the grilled salmon fillet. Instead of French fries, could I have steamed broccoli and boiled baby potatoes on the side, please? My friend would like the mushroom risotto, and she asks if it can be prepared without garlic.",
          "ძირითად კერძად მე ვისურვებდი გრილზე შემწვარ ორაგულის ფილეს. შემწვარი კარტოფილის (ფრის) ნაცვლად, შეიძლება გარნირად მოხარშული ბროკოლი და ახალი კარტოფილი მომიტანოთ? ჩემს მეგობარს სურს სოკოს რიზოტო და კითხულობს, შესაძლებელია თუ არა მისი მომზადება ნივრის გარეშე."
        ],
        [
          "Everything was cooked to perfection, thank you! We are too full for cake tonight, so we will just have two cups of peppermint tea and the bill, please. Do you accept contactless card payments, or would you prefer cash? We will pay together on one card.",
          "ყველაფერი იდეალურად იყო მომზადებული, გმადლობთ! ამაღამ ნამცხვრისთვის ზედმეტად დანაყრებულები ვართ, ამიტომ მხოლოდ ორ ფინჯან პიტნის ჩაისა და ანგარიშს გთხოვთ. იღებთ თუ არა უკონტაქტო ბარათით გადახდას, თუ ნაღდი ფული გირჩევნიათ? ჩვენ ერთად გადავიხდით ერთი ბარათით."
        ]
      ],
      glossary: [
        "table for two|მაგიდა ორი პერსონისთვის", "in advance|წინასწარ", "soup of the day|დღის წვნიანი (რესტორანში)",
        "crusty bread|ხრაშუნა ქერქიანი პური", "We are ready to order|მზად ვართ შესაკვეთად", "grilled salmon fillet|გრილზე შემწვარი ორაგულის ფილე",
        "on the side|გარნირად / ცალკე თეფშზე", "steamed broccoli|ორთქლზე მოხარშული ბროკოლი", "We are too full|ზედმეტად დანაყრებულები ვართ", "contactless card payment|უკონტაქტო ბარათით გადახდა"
      ],
      questions: [
        "Did the speaker and their friend make a restaurant reservation in advance?|No, they didn't make a reservation in advance|Yes, they booked a table three weeks ago|Yes, they booked a room for twenty people|No, because the restaurant doesn't take reservations",
        "Where do they sit in the restaurant?|At a corner table under the lamp|At the bar counter|In the kitchen|Outside on the street pavement",
        "What drinks do they ask for while looking at the menu?|A jug of tap water with ice and lemon slices, and one glass of fresh apple juice|Two bottles of cola|Hot chocolate and milk|Three cups of black coffee",
        "What is the 'soup of the day' tonight?|Roasted tomato and basil soup served with warm crusty bread|Chicken noodle soup|Cold cucumber soup|Fish soup with rice",
        "What does the speaker's friend order as a starter?|A Greek salad with feta cheese and olives|A bowl of tomato soup|Garlic bread with cheese|Fried shrimp",
        "What does the speaker order for the main course?|Grilled salmon fillet|Beef burger with cheese|Roast duck with oranges|Spaghetti with meatballs",
        "What side dishes does the speaker ask for instead of French fries?|Steamed broccoli and boiled baby potatoes|White rice and beans|Fried onions|A plate of pasta",
        "What special request does the friend make regarding her mushroom risotto?|She asks if it can be prepared without garlic|She asks for extra chili pepper|She wants it served cold|She asks for double cheese",
        "Why don't they order cake for dessert at the end of the meal?|Because they are too full, so they only order two cups of peppermint tea|Because the restaurant ran out of cake|Because they don't like sweet food|Because the kitchen is closed",
        "How do they pay the bill at the end?|Together on one card|Separately with coins|By bank transfer next week|With a gift voucher"
      ]
    },
    {
      num: 5, level: "A1",
      icon: "🛒", genre: "სუპერმარკეტი",
      title: "ფასის კითხვა და შოპინგი სუპერმარკეტში",
      subtitle: "Asking Prices and Shopping at a Supermarket",
      time: "5 წთ",
      paragraphs: [
        [
          "Every Saturday morning at nine o'clock, I take two reusable cloth bags and walk to the 'Fresh Market' supermarket on Green Street to do my weekly grocery shopping. Before I leave home, I always write a shopping list on a piece of paper so I don't forget anything or buy things I don't need!",
          "ყოველ შაბათ დილით, ცხრა საათზე, ვიღებ ორ მრავალჯერად ნაჭრის ჩანთას და მივდივარ გრინ-სტრიტზე მდებარე სუპერმარკეტ „ფრეშ მარკეტში“ კვირის სურსათის საყიდლად. სახლიდან გასვლამდე ქაღალდის ფურცელზე ყოველთვის ვწერ საყიდლების სიას, რათა არაფერი დამავიწყდეს და არც ზედმეტი ნივთები ვიყიდო!"
        ],
        [
          "First, I take a shopping trolley at the entrance and go to the fruit and vegetable section. Today, red apples cost two euros a kilogram, and ripe bananas cost one euro fifty a kilogram. I put six apples, a bunch of bananas, three cucumbers, and a bag of spinach into my trolley.",
          "პირველ რიგში, შესასვლელთან ვიღებ სავაჭრო ურიკას და მივდივარ ხილისა და ბოსტნეულის განყოფილებაში. დღეს წითელი ვაშლი კილოგრამი ორი ევრო ღირს, ხოლო მწიფე ბანანი — ევრო-ნახევარი. ურიკაში ვდებ ექვს ვაშლს, ბანანის მტევანს, სამ კიტრსა და ერთ შეკვრა ისპანახს."
        ],
        [
          "Next, I want to find olive oil and brown rice, but I cannot see them on the shelves. I stop a polite supermarket employee wearing a green vest and ask, 'Excuse me, which aisle is the olive oil in?' She smiles and says, 'Olive oil and pasta are in Aisle Four, right next to the bakery!'",
          "შემდეგ მინდა ვიპოვო ზეითუნის ზეთი და ყავისფერი ბრინჯი, მაგრამ თაროებზე ვერ ვხედავ. ვაჩერებ მწვანე ჟილეტში გამოწყობილ სუპერმარკეტის თავაზიან თანამშრომელს და ვეკითხები: „უკაცრავად, რომელ რიგშია ზეითუნის ზეთი?“ ის მიღიმის და მეუბნება: „ზეითუნის ზეთი და პასტა მეოთხე რიგშია, ზუსტად საცხობის გვერდით!“"
        ],
        [
          "At the dairy counter at the back of the store, I pick up a one-litre carton of fresh milk, a tub of Greek yoghurt, and a dozen free-range eggs. Before putting the milk and eggs into my trolley, I always check the 'best before' date printed on the lid to make sure they are fresh.",
          "მაღაზიის უკანა ნაწილში მდებარე რძის პროდუქტების დახლთან ვიღებ ერთლიტრიან ახალი რძის კოლოფს, ბერძნული იოგურტის ქილასა და თორმეტ ცალ სოფლის კვერცხს. რძისა და კვერცხის ურიკაში ჩადებამდე ყოველთვის ვამოწმებ თავსახურზე დაბეჭდილ ვარგისიანობის ვადას, რათა დავრწმუნდე, რომ პროდუქტი ახალია."
        ],
        [
          "At the checkout, the cashier scans my items and asks if I have a supermarket loyalty card. I hand her my card, which gives me a three-euro discount on my groceries! The total comes to twenty-four euros. I pay in cash with a二十-euro note and a five-euro note, take my one-euro coin in change, and pack my cloth bags.",
          "სალაროსთან მოლარე ატარებს ჩემს პროდუქტებს და მეკითხება, მაქვს თუ არა სუპერმარკეტის დაგროვების ბარათი. მე ვაწვდი ბარათს, რომელიც ჩემს შენაძენზე სამევროიან ფასდაკლებას მაძლევს! ჯამური თანხა ოცდაოთხი ევრო გამოდის. ვიხდი ნაღდი ფულით — ოცევროიანი და ხუთევროიანი კუპიურებით, ვიღებ ხურდაში ერთევროიან მონეტას და ვალაგებ ნაჭრის ჩანთებს."
        ]
      ],
      glossary: [
        "reusable cloth bag|მრავალჯერადი ნაჭრის ჩანთა", "shopping list|საყიდლების სია", "shopping trolley|სავაჭრო ურიკა",
        "bunch of bananas|ბანანის მტევანი/შეკვრა", "Which aisle is it in?|რომელ რიგშია (დერეფანშია)?", "dairy counter|რძის პროდუქტების დახლი",
        "a dozen eggs|თორმეტი ცალი კვერცხი (ერთი დუჟინი)", "'best before' date|ვარგისიანობის ვადა", "loyalty card|ლოიალობის / დაგროვების ბარათი", "change (money)|ხურდა (დაბრუნებული ფული)"
      ],
      questions: [
        "Why does the speaker always write a shopping list on paper before going to the supermarket?|So they don't forget anything or buy things they don't need|Because the supermarket requires a ticket to enter|To show the list to the cashier|To practice handwriting",
        "How much do red apples and ripe bananas cost per kilogram today?|Red apples cost two euros a kilogram, and bananas cost one euro fifty|Both cost पांच euros a kilogram|Apples cost one euro, and bananas cost four euros|They are free on Saturdays",
        "Who does the speaker ask when they cannot find the olive oil?|A polite supermarket employee wearing a green vest|The security guard at the door|Another customer with a dog|The manager on the telephone",
        "Which aisle are the olive oil and pasta in?|In Aisle Four, right next to the bakery|In Aisle One by the entrance|In the basement|Outside in the garden",
        "What three items does the speaker pick up at the dairy counter?|A one-litre carton of milk, a tub of Greek yoghurt, and a dozen free-range eggs|Butter, cheese, and ice cream|Bread, cakes, and biscuits|Fish, chicken, and beef",
        "How many eggs are in 'a dozen'?|Twelve eggs|Ten eggs|Six eggs|Twenty eggs",
        "What does the speaker always check on the lid of the milk and eggs?|The 'best before' date to make sure they are fresh|The colour of the box|The name of the farm driver|The weight in kilograms",
        "How much discount does the speaker's supermarket loyalty card give at the checkout?|A three-euro discount|A twenty-euro discount|No discount at all|A fifty percent discount",
        "What is the final total price that the speaker has to pay?|Twenty-four euros|Twenty-seven euros|Thirty euros|Fifteen euros",
        "How does the speaker pay the twenty-four-euro bill, and how much change do they receive?|Pays in cash with a 20-euro note and a 5-euro note (25 euros), and receives a 1-euro coin in change|Pays by credit card|Pays with a 50-euro note and gets 26 euros change|Pays with coins only"
      ]
    },
    {
      num: 6, level: "A1",
      icon: "🏠", genre: "სახლი და ოთახები",
      title: "საკუთარი სახლისა და ოთახების აღწერა",
      subtitle: "Describing Your Home and Rooms",
      time: "5 წთ",
      paragraphs: [
        [
          "Welcome to my new home! Last month, I moved into this bright two-bedroom apartment on the third floor of a quiet brick building on Oak Street. The building has an elevator, a small green courtyard with benches at the back, and a secure bicycle shed by the gate.",
          "კეთილი იყოს თქვენი მობრძანება ჩემს ახალ სახლში! გასულ თვეს გადმოვედი ამ ნათელ, ოროთახიან (ორი საძინებლის მქონე) ბინაში, რომელიც ოუკ-სტრიტზე, მშვიდი აგურის კორპუსის მესამე სართულზე მდებარეობს. შენობას აქვს ლიფტი, უკანა მხარეს პატარა მწვანე ეზო სკამებით და ჭიშკართან დაცული ველოსიპედების ფარდული."
        ],
        [
          "When you open the front door, you step into a neat hallway with a wooden coat rack, a shoe cabinet, and a tall mirror on the wall. Straight ahead is my favourite room in the apartment: the living room. It has two large windows facing south, so the room is full of warm sunlight all afternoon!",
          "როდესაც შემოსასვლელ კარს შემოაღებთ, ხვდებით კოხტა დერეფანში, სადაც დგას ხის ტანსაცმლის საკიდი, ფეხსაცმლის კარადა და კედელზე დაკიდებული მაღალი სარკე. პირდაპირ მდებარეობს ბინაში ჩემი საყვარელი ოთახი — მისაღები ოთახი. მას აქვს სამხრეთით გამავალი ორი დიდი ფანჯარა, ამიტომ ოთახი მთელი ნაშუადღევის განმავლობაში სავსეა მზის თბილი სინათლით!"
        ],
        [
          "In the centre of the living room, there is a comfortable grey sofa with yellow cushions, a soft woollen rug on the oak floor, and a low glass coffee table. Against the left wall stands a tall bookcase filled with my novels and dictionaries, and in the corner by the window sits a green indoor plant.",
          "მისაღები ოთახის ცენტრში დგას კომფორტული ნაცრისფერი დივანი ყვითელი ბალიშებით, მუხის იატაკზე აფენია რბილი შალის ხალიჩა და დგას მინის დაბალი, ყავის მაგიდა. მარცხენა კედელთან დგას ჩემი რომანებითა და ლექსიკონებით სავსე მაღალი წიგნის კარადა, ხოლო ფანჯრის კუთხეში — მწვანე ოთახის მცენარე."
        ],
        [
          "Next to the living room is the kitchen. Although it is not very big, it is modern and well-organized: it has white cupboards, a gas stove, an electric oven, a large silver fridge, and a round wooden table with four chairs where I eat breakfast every morning.",
          "მისაღები ოთახის გვერდით მდებარეობს სამზარეულო. მიუხედავად იმისა, რომ ძალიან დიდი არ არის, ის თანამედროვე და კარგად მოწყობილია: აქვს თეთრი კარადები, გაზქურა, ელექტროღუმელი, დიდი ვერცხლისფერი მაცივარი და მრგვალი ხის მაგიდა ოთხი სკამით, სადაც ყოველ დილით ვსაუზმობ."
        ],
        [
          "At the end of the corridor are the bathroom and the two bedrooms. The larger room is my bedroom, with a double bed, a wardrobe, and a reading lamp. I turned the smaller second bedroom into a quiet home study with a wide desk, an ergonomic chair, and a balcony overlooking the park trees!",
          "დერეფნის ბოლოში განთავსებულია სააბაზანო და ორი საძინებელი. უფრო დიდი ოთახი ჩემი საძინებელია — ორადგილიანი საწოლით, გარდერობითა და საკითხავი სანათით. მეორე, უფრო პატარა საძინებელი კი გადავაკეთე მშვიდ სამუშაო კაბინეტად, სადაც დგას განიერი საწერი მაგიდა, ერგონომიული სავარძელი და აქვს აივანი, რომელიც პარკის ხეებს გადაჰყურებს!"
        ]
      ],
      glossary: [
        "two-bedroom apartment|ბინა ორი საძინებლით", "third floor|მესამე სართული", "coat rack and shoe cabinet|ტანსაცმლის საკიდი და ფეხსაცმლის კარადა",
        "facing south|სამხრეთისკენ გამავალი (მზიანი მხარე)", "sofa with cushions|დივანი დეკორატიული ბალიშებით", "woollen rug|შალის ხალიჩა / ფარდაგი",
        "bookcase|წიგნების კარადა", "well-organized|კარგად მოწყობილი / ორგანიზებული", "wardrobe|ტანსაცმლის კარადა (გარდერობი)", "home study|საშინაო სამუშაო ოთახი / კაბინეტი"
      ],
      questions: [
        "On which floor and street is the speaker's new apartment located?|On the third floor of a brick building on Oak Street|On the ground floor on River Road|On the tenth floor in the city centre|In a cottage in the mountains",
        "What three items are in the hallway when you open the front door?|A wooden coat rack, a shoe cabinet, and a tall mirror on the wall|A sofa, a television, and a fridge|A bicycle, a desk, and a bed|A washing machine and a stove",
        "Why is the living room full of warm sunlight all afternoon?|Because it has two large windows facing south|Because the roof is made of glass|Because twenty lamps are turned on|Because the walls are painted yellow",
        "What furniture is in the centre of the living room?|A grey sofa with yellow cushions, a woollen rug, and a low glass coffee table|A large dining table with ten chairs|A piano and two armchairs|A double bed and a wardrobe",
        "What is standing against the left wall of the living room?|A tall bookcase filled with novels and dictionaries|A silver refrigerator|A fireplace with logs|A bicycle rack",
        "How is the kitchen equipped?|With white cupboards, a gas stove, an electric oven, a silver fridge, and a round wooden table with four chairs|With only a microwave and one chair|It has no table or oven|With red cupboards and a sofa",
        "Where are the bathroom and the two bedrooms located?|At the end of the corridor|Right next to the front door|Upstairs on the fourth floor|Behind the kitchen",
        "What furniture is in the speaker's main bedroom?|A double bed, a wardrobe, and a reading lamp|Two small beds and a television|A computer desk and bookshelves|A sofa and coffee table",
        "What did the speaker turn the smaller second bedroom into?|A quiet home study with a wide desk and an ergonomic chair|A storage room for old boxes|A gym with treadmills|A playroom for dogs",
        "What does the balcony of the home study overlook?|The park trees|A busy highway|The railway station|A supermarket car park"
      ]
    },
    {
      num: 7, level: "A1",
      icon: "🎨", genre: "ჰობი და დასვენება",
      title: "საუბარი ჰობისა და თავისუფალ დროზე",
      subtitle: "Talking About Hobbies and Free Time",
      time: "5 წთ",
      paragraphs: [
        [
          "In my opinion, having interesting hobbies is the best way to relax after a busy week of work or study. In my free time, I enjoy both active outdoor sports and quiet indoor activities, depending on the season and the weather outside.",
          "ჩემი აზრით, საინტერესო ჰობის ქონა საუკეთესო საშუალებაა დატვირთული სამუშაო ან სასწავლო კვირის შემდეგ განსატვირთად. თავისუფალ დროს, სეზონისა და ამინდის მიხედვით, მიყვარს როგორც აქტიური სპორტი ღია ცის ქვეშ, ისე მშვიდი საშინაო საქმიანობები."
        ],
        [
          "When the weather is warm in spring and summer, my favourite outdoor hobby is cycling and landscape photography. On Saturday mornings, I put my digital camera into my backpack and ride my bicycle along the river trail outside the city. I love taking photographs of old stone bridges, birds, and sunrise over the water.",
          "როდესაც გაზაფხულსა და ზაფხულში თბილი ამინდია, ღია ცის ქვეშ ჩემი საყვარელი ჰობია ველოსიპედით სეირნობა და პეიზაჟების ფოტოგრაფია. შაბათობით დილით ზურგჩანთაში ვდებ ჩემს ციფრულ კამერას და ქალაქგარეთ, მდინარისპირა ბილიკზე ველოსიპედით გავდივარ. მიყვარს ძველი ქვის ხიდების, ფრინველებისა და წყლის თავზე მზის ამოსვლის გადაღება."
        ],
        [
          "I also play amateur football with my friends every Wednesday evening at seven o'clock. We rent a small artificial-grass pitch near the sports centre for an hour. Playing team sports helps me stay fit, clears my head, and gives me a chance to laugh with my friends.",
          "ასევე, ყოველ ოთხშაბათ საღამოს, შვიდ საათზე, მეგობრებთან ერთად ვთამაშობ სამოყვარულო ფეხბურთს. სპორტულ ცენტრთან ახლოს ერთი საათით ვქირაობთ ხელოვნურსაფარიან პატარა მოედანს. გუნდური სპორტი მეხმარება ფორმის შენარჩუნებაში, მიწმენდს გონებას და მაძლევს მეგობრებთან ერთად ხალისის საშუალებას."
        ],
        [
          "On rainy autumn evenings and cold winter weekends, I prefer indoor hobbies. Two years ago, I started learning to play the acoustic guitar by watching video lessons online. Now I practice for thirty minutes every evening, and I can already play fifteen of my favourite folk and rock songs!",
          "შემოდგომის წვიმიან საღამოებსა და ზამთრის ცივ უქმეებზე უპირატესობას საშინაო ჰობის ვანიჭებ. ორი წლის წინ ონლაინ ვიდეოგაკვეთილების ყურებით დავიწყე აკუსტიკურ გიტარაზე დაკვრის სწავლა. ახლა ყოველ საღამოს ოცდაათი წუთი ვვარჯიშობ და უკვე შემიძლია ჩემი საყვარელი თხუთმეტი ხალხური და როკ-სიმღერის დაკვრა!"
        ],
        [
          "Besides music, I love cooking new recipes from around the world on Sunday afternoons — especially homemade Italian pasta and spicy Mexican tacos — and playing chess with my older brother. Having a hobby where you learn a new skill step by step makes every weekend exciting.",
          "მუსიკის გარდა, კვირა ნაშუადღევს მიყვარს მსოფლიოს სხვადასხვა ქვეყნის ახალი რეცეპტების მომზადება — განსაკუთრებით სახლში დამზადებული იტალიური პასტისა და ცხარე მექსიკური ტაკოსი — და ჩემს უფროს ძმასთან ჭადრაკის თამაში. ისეთი ჰობის ქონა, სადაც ახალ უნარს ნაბიჯ-ნაბიჯ ეუფლები, ყოველ შაბათ-კვირას საინტერესოს ხდის."
        ]
      ],
      glossary: [
        "In my opinion|ჩემი აზრით", "in my free time|თავისუფალ დროს", "outdoor and indoor activities|გარე (ბუნებაში) და შიდა (საშინაო) აქტივობები",
        "landscape photography|პეიზაჟების ფოტოგრაფია", "river trail|მდინარისპირა ბილიკი", "artificial-grass pitch|ხელოვნურბალახიანი მოედანი",
        "stay fit|ფიზიკური ფორმის შენარჩუნება", "clear my head|გონების განტვირთვა / გასუფთავება", "acoustic guitar|აკუსტიკური გიტარა", "step by step|ნაბიჯ-ნაბიჯ / ეტაპობრივად"
      ],
      questions: [
        "What are the speaker's favourite outdoor hobbies in spring and summer?|Cycling and landscape photography|Skiing and ice skating|Sailing on the ocean|Climbing high rock cliffs",
        "Where does the speaker ride their bicycle on Saturday mornings?|Along the river trail outside the city|In the underground car park|Around the supermarket|Along the airport highway",
        "What subjects does the speaker love photographing along the river?|Old stone bridges, birds, and sunrise over the water|Cars and buses in traffic|Tall office buildings|People shopping in stores",
        "When and where does the speaker play amateur football with friends?|Every Wednesday evening at seven o'clock on an artificial-grass pitch near the sports centre|Every Sunday morning at six o'clock on the beach|On Friday afternoons in the school gym|Once a month in the park",
        "How does playing team sports help the speaker?|It helps them stay fit, clears their head, and lets them laugh with friends|It earns them money|It helps them learn foreign languages|It teaches them how to cook",
        "When did the speaker start learning to play the acoustic guitar, and how?|Two years ago, by watching video lessons online|Ten years ago at a music university|Last week from a book|In primary school",
        "How long does the speaker practice the guitar every evening, and how many songs can they play?|Thirty minutes every evening, and they can play fifteen songs|Two hours every morning, playing one hundred songs|Five minutes a week, playing one song|Four hours on Sundays",
        "What dishes does the speaker enjoy cooking on Sunday afternoons?|Homemade Italian pasta and spicy Mexican tacos|French croissants and birthday cakes|Fish soup and boiled potatoes|Only green salads",
        "What board game does the speaker play with their older brother?|Chess|Checkers|Backgammon|Dominoes",
        "Why does the speaker believe having a skill-based hobby is rewarding?|Because learning a new skill step by step makes every weekend exciting|Because you can finish it in one day|Because it requires no effort|Because it replaces work"
      ]
    },
    {
      num: 8, level: "A1",
      icon: "🧭", genre: "ქუჩა და მარშრუტი",
      title: "გზის კითხვა და მარტივი მითითებები",
      subtitle: "Asking for and Giving Simple Directions",
      time: "5 წთ",
      paragraphs: [
        [
          "Excuse me, sir! I am sorry to bother you, but I am new to this neighbourhood and my phone battery has just died. Could you tell me the easiest way to walk from here to the Central Post Office and the City Art Gallery, please?",
          "უკაცრავად, ბატონო! ბოდიშს გიხდით შეწუხებისთვის, მაგრამ ამ უბანში ახალი ვარ და ტელეფონის ელემენტი ეს-ესაა დამიჯდა. ხომ ვერ მეტყვით უმარტივეს გზას, როგორ მივიდე აქედან ფეხით ცენტრალურ ფოსტამდე და ქალაქის სამხატვრო გალერეამდე?"
        ],
        [
          "Of course, I would be happy to help you! You are actually very close to both places. Right now we are standing on Station Road. To reach the Central Post Office, walk straight down this pavement for about two hundred metres until you reach the big roundabout with the fountain in the middle.",
          "რა თქმა უნდა, სიამოვნებით დაგეხმარებით! სინამდვილეში ორივე ადგილთან ძალიან ახლოს ხართ. ახლა ჩვენ ვდგავართ სტეიშენ-როუდზე. ცენტრალურ ფოსტამდე მისასვლელად იარეთ პირდაპირ ამ ტროტუარით დაახლოებით ორასი მეტრი, სანამ არ მიადგებით დიდ წრიულ გზაჯვარედინს, რომლის შუაშიც შადრევანია."
        ],
        [
          "At the roundabout, use the zebra crossing to cross to the other side of the street, and take the second exit on your right into King's Avenue. You will see a large red mailbox and a yellow sign outside a brick building — that is the Central Post Office! It takes only four minutes to walk there.",
          "წრიულ გზაჯვარედინთან ზებრა-გადასასვლელით გადადით ქუჩის მეორე მხარეს და შეუხვიეთ მარჯვნივ მეორე გასასვლელში, კინგს-ავენიუზე. აგურის შენობის გარეთ დაინახავთ დიდ წითელ საფოსტო ყუთსა და ყვითელ აბრას — სწორედ ეგ არის ცენტრალური ფოსტა! იქამდე ფეხით მისვლას მხოლოდ ოთხი წუთი სჭირდება."
        ],
        [
          "From the Post Office, getting to the City Art Gallery is even simpler. Continue walking straight along King's Avenue past the bakery and the flower shop. When you reach the pedestrian bridge over the canal, cross the bridge and turn left immediately onto Museum Lane.",
          "ფოსტიდან ქალაქის სამხატვრო გალერეამდე მისვლა კიდევ უფრო მარტივია. განაგრძეთ პირდაპირ სიარული კინგს-ავენიუზე, გასცდით საცხობსა და ყვავილების მაღაზიას. როდესაც მიადგებით არხზე გადებულ საფეხმავლო ხიდს, გადადით ხიდზე და მაშინვე შეუხვიეთ მარცხნივ, მიუზეუმ-ლეინზე."
        ],
        [
          "The City Art Gallery is the white marble building with six tall columns at the end of Museum Lane, right between the public library and the botanical garden. If you get tired after visiting the gallery, there is a bus stop right outside the library where Bus Number Ten goes straight back to the train station!",
          "ქალაქის სამხატვრო გალერეა არის თეთრი მარმარილოს შენობა ექვსი მაღალი სვეტით მიუზეუმ-ლეინის ბოლოში, ზუსტად საჯარო ბიბლიოთეკასა და ბოტანიკურ ბაღს შორის. თუ გალერეის დათვალიერების შემდეგ დაიღლებით, ზუსტად ბიბლიოთეკის წინ არის ავტობუსის გაჩერება, საიდანაც მეათე ნომერი ავტობუსი პირდაპირ რკინიგზის სადგურზე ბრუნდება!"
        ]
      ],
      glossary: [
        "I am sorry to bother you|ბოდიშს გიხდით შეწუხებისთვის", "pavement (sidewalk)|ტროტუარი", "roundabout|წრიული გზაჯვარედინი (წრე)",
        "zebra crossing|ზებრა-გადასასვლელი (ქვეითებისთვის)", "second exit on your right|მეორე გასასვლელი მარჯვნივ", "mailbox|საფოსტო ყუთი",
        "pedestrian bridge|საფეხმავლო ხიდი", "white marble building|თეთრი მარმარილოს შენობა", "right between|ზუსტად შორის (ორ შენობას შორის)", "bus stop|ავტობუსის გაჩერება"
      ],
      questions: [
        "Why can't the traveller use their mobile phone map to find the Post Office?|Because their phone battery has just died|Because they forgot their phone at the hotel|Because there is no internet in the city|Because their screen is broken",
        "Which street are the two speakers standing on right now?|Station Road|King's Avenue|Museum Lane|Green Street",
        "How far along Station Road must the traveller walk to reach the roundabout?|About two hundred metres|Two kilometres|Fifty metres|Five kilometres",
        "What is in the middle of the big roundabout?|A fountain|A clock tower|A bronze statue of a horse|A tall oak tree",
        "Which exit should the traveller take at the roundabout to enter King's Avenue?|The second exit on the right|The first exit on the left|The third exit straight ahead|Walk back the way they came",
        "How can the traveller recognize the Central Post Office building on King's Avenue?|By a large red mailbox and a yellow sign outside a brick building|By a green glass roof|By two stone lions at the door|By a blue flag",
        "How long does it take to walk from Station Road to the Central Post Office?|Only four minutes|Twenty-five minutes|Half an hour|One hour",
        "Where should the traveller turn left onto Museum Lane after passing the bakery and flower shop?|Immediately after crossing the pedestrian bridge over the canal|Before reaching the roundabout|Behind the supermarket|At the railway tunnel",
        "What does the City Art Gallery look like, and what two places is it right between?|A white marble building with six tall columns, right between the public library and the botanical garden|A red brick tower between a bank and a school|A modern glass building next to the airport|A wooden cottage in the park",
        "Which bus number goes straight back to the train station from the stop outside the library?|Bus Number Ten|Bus Number Two|Bus Number Twenty-Four|Bus Number Six"
      ]
    },
    {
      num: 9, level: "A1",
      icon: "☀️", genre: "ამინდი და სეზონები",
      title: "საუბარი ამინდსა და წელიწადის დროებზე",
      subtitle: "Talking About the Weather and Four Seasons",
      time: "5 წთ",
      paragraphs: [
        [
          "In British culture, talking about the weather is the most popular way to start a friendly conversation with neighbours, shopkeepers, or people waiting at a bus stop! Because the weather in our country changes so often — sometimes giving us sunshine, wind, and rain all in a single afternoon — there is always something new to say.",
          "ბრიტანულ კულტურაში ამინდზე საუბარი ყველაზე პოპულარული გზაა მეზობლებთან, მაღაზიის გამყიდველებთან ან გაჩერებაზე მომლოდინე ადამიანებთან მეგობრული საუბრის დასაწყებად! რადგან ჩვენს ქვეყანაში ამინდი ძალიან ხშირად იცვლება — ზოგჯერ ერთ ნაშუადღევს მზესაც გვთავაზობს, ქარსაც და წვიმასაც — სათქმელი ყოველთვის მოიძებნება."
        ],
        [
          "My favourite season of the year is spring, which begins in March and lasts through April and May. After the long, dark winter months, the days finally grow longer, the snow melts, and green leaves appear on the trees. Although April is famous for sudden brief rain showers, the air smells fresh and flowers bloom in every park.",
          "წელიწადის ჩემი საყვარელი დროა გაზაფხული, რომელიც მარტში იწყება და აპრილსა და მაისში გრძელდება. ზამთრის გრძელი, ბნელი თვეების შემდეგ დღეები საბოლოოდ იმატებს, თოვლი დნება და ხეებზე მწვანე ფოთლები ჩნდება. მიუხედავად იმისა, რომ აპრილი ცნობილია უეცარი ხანმოკლე წვიმებით, ჰაერში სიჯანსაღის სურნელი დგას და ყველა პარკში ყვავილები ყვავის."
        ],
        [
          "In June, July, and August, summer arrives with warm, sunny days and long, bright evenings when the sun doesn't set until nine o'clock! Temperatures usually stay between twenty-two and twenty-eight degrees Celsius. On hot weekends, families pack picnic baskets and travel to the seaside or cool mountain lakes.",
          "ივნისში, ივლისსა და აგვისტოში დგება ზაფხული თბილი, მზიანი დღეებითა და გრძელი, ნათელი საღამოებით, როცა მზე ცხრა საათამდე არ ჩადის! ტემპერატურა ჩვეულებრივ ოცდაორიდან ოცდარვა გრადუს ცელსიუსამდე მერყეობს. ცხელ უქმეებზე ოჯახები ალაგებენ პიკნიკის კალათებს და ზღვის სანაპიროზე ან მთის გრილ ტბებზე მიემგზავრებიან."
        ],
        [
          "September, October, and November bring autumn. The mornings become crisp and misty, and the forest leaves turn golden yellow, orange, and deep red before falling to the ground. I love walking through the crunchy leaves in October wearing a warm woollen sweater and a raincoat.",
          "სექტემბერს, ოქტომბერსა და ნოემბერს მოაქვს შემოდგომა. დილაობით ჰაერი გრილი და ნისლიანი ხდება, ტყის ფოთლები კი ჩამოცვენამდე ოქროსფერ ყვითელ, ნარინჯისფერ და მუქ წითელ ფერებს იღებს. მიყვარს ოქტომბერში თბილი შალის სვიტერითა და საწვიმრით ხრაშუნა ფოთლებში სეირნობა."
        ],
        [
          "Finally, winter comes in December, January, and February. The nights are frosty, and temperatures often drop below zero. When it snows heavily in January, children build snowmen in the parks, and nothing feels better than coming home to drink hot cocoa by the fireplace!",
          "დაბოლოს, დეკემბერში, იანვარსა და თებერვალში დგება ზამთარი. ღამეები სუსხიანია და ტემპერატურა ხშირად ნულს ქვემოთ ეცემა. როდესაც იანვარში უხვად თოვს, ბავშვები პარკებში თოვლის ბაბუებს აკეთებენ, და არაფერია იმაზე სასიამოვნო, ვიდრე სახლში დაბრუნება და ბუხართან ცხელი კაკაოს დალევა!"
        ]
      ],
      glossary: [
        "start a conversation|საუბრის წამოწყება", "all in a single afternoon|სულ რაღაც ერთ ნაშუადღევს", "days grow longer|დღეები იმატებს (გრძელდება)",
        "rain shower|ხანმოკლე (შხაპუნა) წვიმა", "seaside|ზღვის სანაპირო", "crisp and misty morning|გრილი (სუსხიანი) და ნისლიანი დილა",
        "crunchy leaves|ხრაშუნა (ხმელი) ფოთლები", "frosty night|ყინვიანი / სუსხიანი ღამე", "below zero|ნულს ქვემოთ (ყინვა)", "by the fireplace|ბუხართან ახლოს"
      ],
      questions: [
        "Why is talking about the weather such a popular way to start a conversation in Britain?|Because the weather changes very often, sometimes bringing sunshine, wind, and rain all in a single afternoon|Because it rains 365 days a year without stopping|Because there are no weather forecasts on television|Because it is a law to talk about the weather",
        "Which season is the speaker's favourite, and which months does it cover?|Spring, covering March, April, and May|Summer, covering June, July, and August|Autumn, covering September, October, and November|Winter, covering December, January, and February",
        "What is the month of April famous for in spring?|Sudden brief rain showers, while fresh leaves and flowers bloom|Heavy snowstorms and ice|Forty-degree desert heat|Dark days when the sun never rises",
        "What time does the sun set on long summer evenings, and what is the usual temperature?|Around nine o'clock in the evening, with temperatures between 22 and 28 degrees Celsius|At four in the afternoon, with ten degrees|At midnight, with forty degrees|At six in the evening",
        "Where do families like to travel on hot summer weekends?|To the seaside or cool mountain lakes with picnic baskets|To indoor ski resorts|To underground tunnels|They stay indoors all weekend",
        "Which months make up the autumn season?|September, October, and November|March, April, and May|August, September, and October|November, December, and January",
        "What happens to the mornings and the forest leaves in autumn?|Mornings become crisp and misty, and leaves turn golden yellow, orange, and red before falling|Mornings become hot and dry, and new green leaves grow|Snow covers the trees in September|Flowers bloom on every tree",
        "What does the speaker wear when walking through the crunchy leaves in October?|A warm woollen sweater and a raincoat|Shorts and a T-shirt|A heavy fur coat and snow boots|A swimsuit",
        "What are the nights like in winter (December, January, and February)?|Frosty, with temperatures often dropping below zero|Warm and humid|Bright until ten at night|Windy with tropical storms",
        "What does the speaker love doing after coming home on a snowy January day?|Drinking hot cocoa by the fireplace|Eating cold ice cream on the balcony|Watering the garden roses|Going for a swim in the river"
      ]
    },
    {
      num: 10, level: "A1",
      icon: "🎫", genre: "მგზავრობა",
      title: "მატარებლისა და ავტობუსის ბილეთების ყიდვა",
      subtitle: "Buying Train and Bus Tickets at the Station",
      time: "5 წთ",
      paragraphs: [
        [
          "Good morning! I would like to buy a train ticket to Bath for today, please. Could you tell me when the next train leaves? The ticket clerk checks his screen and tells me that there is a fast train leaving in twenty minutes at nine forty-five, and another one at ten fifteen.",
          "დილა მშვიდობისა! დღეისთვის მსურს მატარებლის ბილეთის შეძენა ქალაქ ბათამდე. ხომ ვერ მეტყვით, როდის გადის უახლოესი მატარებელი? სალაროს თანამშრომელი ამოწმებს თავის ეკრანს და მეუბნება, რომ სწრაფი მატარებელი გადის ოც წუთში, ათის თხუთმეტ წუთზე (09:45-ზე), ხოლო მომდევნო — თერთმეტის თხუთმეტ წუთზე (10:15-ზე)."
        ],
        [
          "I ask the clerk: 'How much is a ticket for the nine forty-five train, and would it be cheaper to buy a return ticket?' He explains that a single (one-way) ticket costs eighteen euros, whereas a same-day return ticket costs only twenty-six euros! Since I am coming back this evening, I choose the day return ticket.",
          "მოლარეს ვეკითხები: „რა ღირს ბილეთი 09:45 საათის მატარებელზე და უფრო იაფი ხომ არ იქნება ორმხრივი ბილეთის ყიდვა?“ ის მიხსნის, რომ ცალმხრივი ბილეთი ღირს თვრამეტი ევრო, ხოლო იმავე დღეს დასაბრუნებელი ორმხრივი ბილეთი — მხოლოდ ოცდაექვსი ევრო! რადგან დღეს საღამოსვე ვბრუნდები, ვირჩევ ერთდღიან ორმხრივ ბილეთს."
        ],
        [
          "Next, the clerk asks if I would like a window seat or an aisle seat, and whether I prefer the 'Quiet Coach' where mobile phone calls and loud music are not allowed. I ask for a window seat facing forward in the Quiet Coach so I can enjoy the countryside view in peace.",
          "შემდეგ მოლარე მეკითხება, ფანჯარასთან მსურს ადგილი თუ გასასვლელთან, და მირჩევნია თუ არა „მშვიდი ვაგონი“, სადაც მობილურით საუბარი და ხმამაღალი მუსიკა აკრძალულია. მე ვითხოვ წინ მიმართულ ადგილს ფანჯარასთან, მშვიდ ვაგონში, რათა სიმშვიდეში დავტკბე სოფლის პეიზაჟებით."
        ],
        [
          "He prints my two orange paper tickets — one for the outward journey this morning and one for the return journey tonight — and tells me: 'Your train departs from Platform Seven. Go through the ticket barrier, walk down the subway stairs, and take the second staircase up to Platform Seven.'",
          "ის მიბეჭდავს ორ ნარინჯისფერ ქაღალდის ბილეთს — ერთს დილის გზისთვის, ხოლო მეორეს საღამოს უკან დასაბრუნებლად — და მეუბნება: „თქვენი მატარებელი გადის მეშვიდე ბაქნიდან. გაიარეთ ბილეთების ტურნიკეტი, ჩადით მიწისქვეშა გადასასვლელის კიბეზე და მეორე კიბით ადით მეშვიდე ბაქანზე“."
        ],
        [
          "Before leaving the window, I also ask what time the last train back from Bath leaves tonight. He tells me that the last evening train departs from Bath at ten thirty at night, arriving back here at eleven forty-five. I thank him, insert my ticket into the gate, and walk to Platform Seven.",
          "სარკმლიდან წასვლამდე ასევე ვეკითხები, რომელ საათზე გამოდის ამაღამ ბათიდან ბოლო მატარებელი. ის მეუბნება, რომ საღამოს ბოლო მატარებელი ბათიდან გადის ღამის თერთმეტის ნახევარზე (22:30-ზე) და აქ ბრუნდება თორმეტის თხუთმეტ წუთზე (23:45-ზე). მადლობას ვუხდი, ბილეთს ვუშვებ ტურნიკეტში და მეშვიდე ბაქნისკენ მივდივარ."
        ]
      ],
      glossary: [
        "single (one-way) ticket|ცალმხრივი ბილეთი (მხოლოდ წასვლა)", "return ticket|ორმხრივი ბილეთი (წასვლა და დაბრუნება)", "window seat / aisle seat|ადგილი ფანჯარასთან / ადგილი გასასვლელთან",
        "Quiet Coach|„მშვიდი ვაგონი“ (სადაც ხმაური აკრძალულია)", "facing forward|წინ (მოძრაობის მიმართულებით) მიმართული", "outward journey|გზა დანიშნულების ადგილისკენ (წასვლა)",
        "depart from Platform Seven|გასვლა მეშვიდე ბაქნიდან", "ticket barrier|ბილეთების შესამოწმებელი ტურნიკეტი", "subway stairs|მიწისქვეშა გადასასვლელის კიბე", "last train back|ბოლო მატარებელი უკან დასაბრუნებლად"
      ],
      questions: [
        "Which city is the speaker buying a train ticket to?|Bath|York|Edinburgh|Manchester",
        "What time does the next fast train leave, and when is the one after that?|In twenty minutes at 9:45 AM, and the next one is at 10:15 AM|At noon and at two o'clock|At eight in the morning and eight at night|Tomorrow morning",
        "How much does a single (one-way) ticket cost compared to a same-day return ticket?|A single ticket costs 18 euros, while a same-day return ticket costs 26 euros|A single costs 10 euros, and a return costs 40 euros|Both cost 50 euros|A single costs 30 euros",
        "Why does the speaker choose the twenty-six-euro day return ticket?|Because they are coming back this evening, and it is much cheaper than buying two single tickets|Because they want to stay in Bath for a month|Because single tickets are sold out|Because it includes a free hotel room",
        "What is the rule inside the 'Quiet Coach' on the train?|Mobile phone calls and loud music are not allowed|Passengers are not allowed to read books|Passengers must stand up the whole way|The windows are covered with curtains",
        "Which specific seat does the speaker ask for?|A window seat facing forward in the Quiet Coach|An aisle seat facing backward near the door|A seat in the dining car|A seat next to the driver",
        "How many orange paper tickets does the clerk print, and what are they for?|Two tickets: one for the outward journey this morning and one for the return journey tonight|Only one ticket for next week|Four tickets for buses|Three tickets for luggage",
        "From which platform does the 9:45 train to Bath depart?|Platform Seven|Platform One|Platform Twelve|Platform Three",
        "How does the speaker get to Platform Seven from the ticket office?|Go through the ticket barrier, walk down the subway stairs, and take the second staircase up|Take the elevator to the roof|Cross the street outside the station|Walk across the wooden railway tracks",
        "What time does the last evening train depart from Bath tonight, and when does it arrive back?|It departs at 10:30 at night and arrives back at 11:45 PM|It departs at 6:00 PM and arrives at 7:00 PM|It departs at midnight|There are no evening trains"
      ]
    },
    {
      num: 11, level: "A1",
      icon: "🛎️", genre: "სასტუმრო",
      title: "სასტუმროს მიმღებში რეგისტრაცია",
      subtitle: "Checking In at a Hotel Reception",
      time: "5 წთ",
      paragraphs: [
        [
          "Good afternoon! My name is Robert King, and I have a reservation for a single room for four nights, under the surname King. Here is my passport and the printed booking confirmation number on my phone. I arrived in the city an hour early, so I hope my room is ready!",
          "შუადღე მშვიდობისა! ჩემი სახელია რობერტ კინგი და მაქვს ჯავშანი ერთადგილიან ნომერზე ოთხი ღამით, გვარზე — კინგი. ინებეთ ჩემი პასპორტი და ჯავშნის დადასტურების ნომერი ჩემს ტელეფონში. ქალაქში ერთი საათით ადრე ჩამოვედი, ამიტომ იმედი მაქვს, ჩემი ოთახი უკვე მზადაა!"
        ],
        [
          "The receptionist checks the computer, smiles warmly, and says: 'Welcome to the Grand Park Hotel, Mr King! Yes, your room on the fourth floor — Room 408 — is already clean and ready for you. It is a quiet room at the back of the building overlooking the courtyard garden.'",
          "მიმღების თანამშრომელი ამოწმებს კომპიუტერს, თბილად იღიმის და ამბობს: „კეთილი იყოს თქვენი მობრძანება სასტუმრო გრანდ-პარკში, ბატონო კინგ! დიახ, თქვენი ოთახი მეოთხე სართულზე — ნომერი 408 — უკვე დალაგებულია და მზადაა თქვენთვის. ეს არის მშვიდი ოთახი შენობის უკანა მხარეს, რომელიც შიდა ეზოს ბაღს გადაჰყურებს“."
        ],
        [
          "Please sign this registration card at the bottom and write down your car registration number if you are using the hotel garage. Here are two electronic key cards for Room 408. The elevators are just around the corner to your right, past the glass lounge doors.",
          "გთხოვთ, ქვემოთ ხელი მოაწეროთ ამ სარეგისტრაციო ბარათს და ჩაწეროთ თქვენი ავტომობილის სახელმწიფო ნომერი, თუ სასტუმროს ავტოფარეხით სარგებლობთ. ინებეთ ორი ელექტრონული გასაღები-ბარათი 408-ე ოთახისთვის. ლიფტები ზუსტად კუთხეშია თქვენგან მარჯვნივ, მოსაცდელი დარბაზის მინის კარებს მიღმა."
        ],
        [
          "I ask the receptionist about the breakfast hours and the Wi-Fi password. She explains: 'Breakfast is served every morning from seven o'clock until ten thirty in the Sunny Dining Room on the ground floor. The hotel Wi-Fi network is called GrandPark-Guest, and the password is written inside your key card folder.'",
          "ადმინისტრატორს ვეკითხები საუზმის საათებსა და უსადენო ინტერნეტის (Wi-Fi) პაროლს. ის მიხსნის: „საუზმე ყოველ დილით შვიდი საათიდან თერთმეტის ნახევრამდეა პირველ სართულზე მდებარე მზიან სასადილო დარბაზში. სასტუმროს Wi-Fi ქსელს ჰქვია GrandPark-Guest, ხოლო პაროლი წერია თქვენი გასაღები-ბარათის ბუდეში“."
        ],
        [
          "Before going up to my room, I ask if I can get an extra pillow and a wake-up call tomorrow morning at six thirty, as I have an early business meeting. She promises that housekeeping will bring an extra pillow to Room 408 within ten minutes, and sets the automated wake-up call for six thirty!",
          "ოთახში ასვლამდე ვკითხულობ, შემიძლია თუ არა მივიღო დამატებითი ბალიში და გამაღვიძებელი სატელეფონო ზარი ხვალ დილით, შვიდის ნახევარზე, რადგან ადრიანი საქმიანი შეხვედრა მაქვს. ის მპირდება, რომ დასუფთავების სამსახური დამატებით ბალიშს 408-ე ოთახში ათ წუთში ამოიტანს, და აყენებს ავტომატურ გამაღვიძებელ ზარს შვიდის ნახევარზე!"
        ]
      ],
      glossary: [
        "booking confirmation|ჯავშნის დადასტურება", "overlooking the courtyard|შიდა ეზოს ხედით (გადაჰყურებს ეზოს)", "registration card|სარეგისტრაციო ბარათი/ანკეტა",
        "key card|ელექტრონული გასაღები-ბარათი", "just around the corner|ზუსტად კუთხის მიღმა / იქვე", "ground floor|პირველი (მიწისპირა) სართული",
        "key card folder|გასაღები-ბარათის ქაღალდის ბუდე", "extra pillow|დამატებითი ბალიში", "wake-up call|გამაღვიძებელი სატელეფონო ზარი (სასტუმროში)", "housekeeping|სასტუმროს ნომრების დასუფთავების სამსახური"
      ],
      questions: [
        "For how many nights has Robert King booked a single room at the Grand Park Hotel?|For four nights|For one night|For two weeks|For seven nights",
        "Why was Robert worried his room might not be ready yet?|Because he arrived in the city an hour early|Because he arrived at midnight|Because he forgot to book a room|Because the hotel was being painted",
        "Which room number is Robert given, and on which floor is it located?|Room 408, on the fourth floor|Room 102, on the first floor|Room 705, on the seventh floor|Room 204, on the second floor",
        "What view does Room 408 have?|It is a quiet room at the back of the building overlooking the courtyard garden|It faces a noisy highway|It overlooks the airport runway|It has no windows",
        "What must a guest write on the registration card if they are using the hotel garage?|Their car registration number|Their bank account password|Their employer's phone number|The colour of their suitcases",
        "Where are the hotel elevators located?|Just around the corner to the right, past the glass lounge doors|Outside in the courtyard|Downstairs in the basement|Behind the kitchen",
        "When and where is breakfast served every morning?|From 7:00 AM until 10:30 AM in the Sunny Dining Room on the ground floor|From 6:00 AM to 8:00 AM on the roof|Only in the guest rooms|From 9:00 AM to noon in the café",
        "Where is the hotel Wi-Fi password written?|Inside the key card folder|On the elevator mirror|On the restaurant menu|On the front door",
        "What extra item does Robert ask to have sent up to his room?|An extra pillow (which housekeeping will bring within ten minutes)|A television|An extra chair|A coffee machine",
        "Why does Robert ask for a wake-up call at 6:30 tomorrow morning?|Because he has an early business meeting|Because he wants to catch a morning flight|Because he wants to go swimming in the sea|Because check-out is at seven"
      ]
    },
    {
      num: 12, level: "A1",
      icon: "🩺", genre: "ექიმთან ვიზიტი",
      title: "ექიმთან საუბარი მარტივ სიმპტომებზე",
      subtitle: "Talking to a Doctor About Simple Symptoms",
      time: "5 წთ",
      paragraphs: [
        [
          "Good morning, Doctor! Thank you for seeing me today. Since Wednesday evening, I haven't been feeling well at all. It started after I walked home in the heavy rain without an umbrella and got my shoes and coat completely soaked.",
          "დილა მშვიდობისა, ექიმო! გმადლობთ, რომ დღეს მიმიღეთ. ოთხშაბათი საღამოდან თავს სულაც ვერ ვგრძნობ კარგად. ყველაფერი დაიწყო მას შემდეგ, რაც ძლიერ წვიმაში სახლამდე უქოლგოდ ვიარე და ფეხსაცმელი და ქურთუკი სულ დამისველდა."
        ],
        [
          "The doctor asks me to describe my exact symptoms. I explain: 'First, I have a dry cough that keeps me awake at night, and my throat hurts whenever I swallow food or water. Second, I feel a dull ache behind my eyes, and I have been shivering with a mild fever since yesterday afternoon.'",
          "ექიმი მთხოვს ზუსტად აღვწერო ჩემი სიმპტომები. მე ვუხსნი: „პირველ რიგში, მაქვს მშრალი ხველა, რომელიც ღამით დაძინების საშუალებას არ მაძლევს, და ყელი მტკივა ყოველ ჯერზე, როცა საკვებს ან წყალს ვყლაპავ. მეორე — თვალების უკან ვგრძნობ ყრუ ტკივილს და გუშინ ნაშუადღევიდან მცირე სიცხის გამო მაჟრიალებს“."
        ],
        [
          "The doctor asks me to open my mouth wide and say 'Ah', and then asks me to take a deep breath in and out while he listens to my chest and back with his stethoscope. He also checks my ears and takes my temperature, which is thirty-seven point eight degrees.",
          "ექიმი მთხოვს ფართოდ გავაღო პირი და ვთქვა „აა“, შემდეგ კი მთხოვს ღრმად ჩავისუნთქო და ამოვისუნთქო, სანამ ის სტეთოსკოპით ჩემს გულმკერდსა და ზურგს უსმენს. ის ასევე მიმოწმებს ყურებს და მიზომავს ტემპერატურას, რომელიც ოცდაჩვიდმეტი და რვა მეათედი (37,8) გრადუსია."
        ],
        [
          "Next, the doctor asks an important medical question: 'Are you allergic to any medications, such as penicillin or aspirin?' I reply that I have no allergies to any medicine. He tells me that my chest is completely clear, so I don't need antibiotics — it is a viral cold.",
          "შემდეგ ექიმი მისვამს მნიშვნელოვან სამედიცინო კითხვას: „ხომ არ გაქვთ ალერგია რომელიმე მედიკამენტზე, მაგალითად პენიცილინზე ან ასპირინზე?“ მე ვპასუხობ, რომ არცერთ წამალზე ალერგია არ მაქვს. ის მეუბნება, რომ ჩემი ფილტვები სრულიად სუფთაა, ამიტომ ანტიბიოტიკები არ მჭირდება — ეს ვირუსული გაციებაა."
        ],
        [
          "He writes a prescription for a herbal cough syrup and paracetamol tablets. He explains the dosage clearly: 'Take one spoonful of the cough syrup three times a day after meals, and take one paracetamol tablet every six hours if your fever rises above thirty-eight degrees. Gargle with warm salt water and rest at home until Monday!'",
          "ის მიწერს რეცეპტს მცენარეული ხველის სიროფისა და პარაცეტამოლის ტაბლეტებისთვის. ის მკაფიოდ მიხსნის დოზირებას: „მიიღეთ ერთი კოვზი ხველის სიროფი დღეში სამჯერ ჭამის შემდეგ, ხოლო პარაცეტამოლის ერთი ტაბლეტი — ყოველ ექვს საათში ერთხელ, თუ ტემპერატურა ოცდათვრამეტ გრადუსს გადააჭარბებს. გამოივლეთ ყელში თბილი მარილიანი წყალი და ორშაბათამდე სახლში დაისვენეთ!“"
        ]
      ],
      glossary: [
        "completely soaked|სრულიად გალუმპული / სველი", "dry cough|მშრალი ხველა", "swallow (verb)|გადაყლაპვა",
        "shiver with a fever|სიცხისგან კანკალი / ჟრიალი", "take a deep breath|ღრმად ჩასუნთქვა", "Are you allergic to...?|ალერგიული ხართ თუ არა ...-ზე?",
        "viral cold|ვირუსული გაციება", "cough syrup|ხველის სიროფი", "three times a day after meals|დღეში სამჯერ ჭამის შემდეგ", "gargle with warm salt water|ყელში თბილი მარილიანი წყლის გამოვლება"
      ],
      questions: [
        "When and how did the speaker's illness begin?|On Wednesday evening, after walking home in heavy rain without an umbrella and getting completely soaked|Two weeks ago after swimming in a cold lake|On Monday morning after eating ice cream|Yesterday at the gym",
        "What symptoms does the speaker describe to the doctor?|A dry cough at night, a sore throat when swallowing, an ache behind the eyes, and shivering with a mild fever|A broken toe and knee pain|Stomach pain and nausea|Only a runny nose",
        "What is the speaker's body temperature when the doctor checks it?|Thirty-seven point eight degrees Celsius (37.8°C)|Forty degrees Celsius|Thirty-six point five degrees|Thirty-nine degrees",
        "What important question does the doctor ask before prescribing medicine?|'Are you allergic to any medications, such as penicillin or aspirin?'|'Where do you work?'|'How many hours do you sleep?'|'Do you have a car?'",
        "Why doesn't the speaker need antibiotics according to the doctor?|Because their chest is completely clear and it is a viral cold, not a bacterial chest infection|Because the pharmacy has no antibiotics today|Because the speaker is allergic to all pills|Because antibiotics are too expensive",
        "What two medicines does the doctor write on the prescription?|A herbal cough syrup and paracetamol tablets|Eye drops and sleeping pills|Strong antibiotics and bandages|Vitamin D and nose spray",
        "How often and when should the speaker take the herbal cough syrup?|One spoonful three times a day after meals|Five spoons every hour before meals|Only once at midnight|With hot coffee in the morning",
        "When should the speaker take a paracetamol tablet?|Every six hours if the fever rises above thirty-eight degrees|Every thirty minutes all day|Before going for a run|Only on Sunday",
        "What natural home remedy does the doctor recommend for the sore throat?|Gargling with warm salt water|Drinking cold sparkling water with ice|Eating spicy chili peppers|Singing aloud",
        "Until which day does the doctor advise the speaker to rest at home?|Until Monday|Until next month|Only for two hours|Until Friday"
      ]
    },
    {
      num: 13, level: "A1",
      icon: "🎟️", genre: "მოწვევა და გეგმები",
      title: "მეგობრის დაპატიჟება კინოში ან პარკში",
      subtitle: "Inviting a Friend for a Weekend Outing",
      time: "5 წთ",
      paragraphs: [
        [
          "Hi, Anna! It's Mark calling. How has your week been? I know we were both busy with university exams all week, so I was wondering if you are free this Saturday afternoon to get some fresh air and do something fun together!",
          "სალამი, ანა! მარკი გირეკავ. როგორ ჩაიარა შენმა კვირამ? ვიცი, რომ მთელი კვირა ორივენი დაკავებულები ვიყავით უნივერსიტეტის გამოცდებით, ამიტომ მაინტერესებდა, ხომ არ ხარ თავისუფალი ამ შაბათს ნაშუადღევს, რომ სუფთა ჰაერზე გავიდეთ და დრო სასიამოვნოდ გავატაროთ!"
        ],
        [
          "Anna replies happily: 'Hi, Mark! Yes, I finished my last exam this afternoon, so I would love to go out on Saturday! However, I have a dentist appointment on Saturday morning from ten until eleven. What did you have in mind for the afternoon?'",
          "ანა სიხარულით პასუხობს: „სალამი, მარკ! კი, დღეს ნაშუადღევს ჩავაბარე ბოლო გამოცდა, ამიტომ შაბათს სიამოვნებით გავისეირნებ! თუმცა, შაბათ დილით ათიდან თერთმეტ საათამდე სტომატოლოგთან ვარ ჩაწერილი. რა გქონდა ჩაფიქრებული ნაშუადღევისთვის?“"
        ],
        [
          "I suggest a plan: 'Since the weather forecast says Saturday afternoon will be sunny and warm, how about meeting at two o'clock at the main gate of the Botanical Garden? This weekend they have a special open-air photography exhibition and a street food festival by the greenhouse!'",
          "მე ვთავაზობ გეგმას: „რადგან ამინდის პროგნოზის მიხედვით შაბათი ნაშუადღევი მზიანი და თბილი იქნება, რას იტყვი, რომ ორ საათზე ბოტანიკური ბაღის მთავარ ჭიშკართან შევხვდეთ? ამ უქმეებზე იქ სათბურთან იმართება ღია ცის ქვეშ ფოტოგამოფენა და ქუჩის კულინარიის ფესტივალი!“"
        ],
        [
          "Anna loves the idea! Then I add: 'After walking through the garden, we could go to the Odeon Cinema across the street at five thirty. They are showing that new mystery film about the train in the Alps! Since I have a student cinema card, I can get two tickets for the price of one.'",
          "ანას იდეა ძალიან მოსწონს! შემდეგ მე ვამატებ: „ბაღში გასეირნების შემდეგ, ექვსის ნახევარზე შეგვიძლია გადავიდეთ ქუჩის მეორე მხარეს მდებარე კინოთეატრ „ოდეონში“. იქ აჩვენებენ იმ ახალ დეტექტიურ ფილმს ალპების მატარებელზე! რადგან სტუდენტური კინობარათი მაქვს, ერთის ფასად ორი ბილეთის აღება შემიძლია“."
        ],
        [
          "Anna says: 'That sounds like the perfect Saturday! I'll book our cinema seats online tonight, and I'll pay for our waffles and coffee at the Botanical Garden festival. Let's meet at two o'clock sharp by the fountain at the main gate. See you on Saturday, Mark!'",
          "ანა ამბობს: „იდეალური შაბათი გამოდის! კინოს ადგილებს დღეს საღამოს ონლაინ დავჯავშნი, ხოლო ბოტანიკური ბაღის ფესტივალზე ვაფლებსა და ყავაზე მე გეპატიჟები. მოდი, ზუსტად ორ საათზე შევხვდეთ მთავარი ჭიშკრის შადრევანთან. შაბათამდე, მარკ!“"
        ]
      ],
      glossary: [
        "Are you free this Saturday?|თავისუფალი ხარ ამ შაბათს?", "dentist appointment|სტომატოლოგთან (კბილის ექიმთან) ვიზიტი", "What did you have in mind?|რა გქონდა ჩაფიქრებული / რას გეგმავდი?",
        "How about meeting at...?|რას იტყვი, რომ შევხვდეთ ...-ზე?", "open-air exhibition|გამოფენა ღია ცის ქვეშ", "street food festival|ქუჩის კულინარიის ფესტივალი",
        "across the street|ქუჩის მეორე (მოპირდაპირე) მხარეს", "mystery film|დეტექტიური ფილმი", "two for the price of one|ორი ერთის ფასად (აქცია)", "at two o'clock sharp|ზუსტად ორ საათზე"
      ],
      questions: [
        "Why were both Mark and Anna busy all week?|Because they had university exams all week|Because they were moving to a new apartment|Because they were travelling in Italy|Because they were working at a hotel",
        "Why isn't Anna free on Saturday morning between ten and eleven o'clock?|Because she has a dentist appointment|Because she has a piano lesson|Because she has to work at the library|Because she is visiting her grandmother",
        "Where and at what time does Mark suggest meeting on Saturday afternoon?|At two o'clock sharp by the fountain at the main gate of the Botanical Garden|At noon at the railway station|At four o'clock at the shopping mall|At six o'clock at the pizzeria",
        "What two special events are taking place at the Botanical Garden this weekend?|An open-air photography exhibition and a street food festival by the greenhouse|A marathon race and a dog show|A rock concert and a book fair|A bicycle race and a swimming competition",
        "Where does Mark suggest going at five thirty after walking through the garden?|To the Odeon Cinema across the street|To a bowling alley|To a museum in the city centre|To a football match",
        "What is the new film at the Odeon Cinema about?|A mystery film about a train in the Alps|A comedy about a restaurant chef|A documentary about ocean whales|A science fiction film about Mars",
        "How can Mark get two cinema tickets for the price of one?|Because he has a student cinema card|Because his brother works at the cinema|Because tickets are free on Saturdays|Because he won a radio competition",
        "How does Anna offer to share the expenses for their outing?|She will pay for their waffles and coffee at the Botanical Garden festival|She will pay for Mark's taxi home|She will buy Mark a new backpack|She will bring sandwiches from home",
        "When will Anna book the cinema seats online?|Tonight|On Saturday afternoon at the door|Next Monday|She asks Mark to book them",
        "What is the weather forecast for Saturday afternoon?|Sunny and warm|Cold and snowy|Rainy and windy|Foggy"
      ]
    },
    {
      num: 14, level: "A1",
      icon: "📚", genre: "სწავლა და პროფესია",
      title: "საუბარი სამსახურსა და სწავლაზე",
      subtitle: "Talking About Your Job and University Studies",
      time: "5 წთ",
      paragraphs: [
        [
          "When you meet new people at a conference or a social gathering, one of the first questions they usually ask is, 'What do you do for a living?' or 'What are you studying?' Being able to describe your studies, your daily responsibilities, and your career goals clearly is a very useful skill.",
          "როდესაც კონფერენციაზე ან მეგობრულ შეხვედრაზე ახალ ადამიანებს ეცნობით, ერთ-ერთი პირველი კითხვა, რომელსაც ჩვეულებრივ გისვამენ, არის: „რას საქმიანობთ?“ ან „რას სწავლობთ?“. საკუთარი სწავლის, ყოველდღიური მოვალეობებისა და კარიერული მიზნების მკაფიოდ აღწერის უნარი ძალიან სასარგებლოა."
        ],
        [
          "Right now, I am combining university studies with a part-time job. In the mornings, I am a final-year business administration student at the Technical University. My favourite subjects are financial analysis, project management, and business law, because we solve real-world company cases in class.",
          "ამჟამად უნივერსიტეტში სწავლას ნახევარგანაკვეთიან სამსახურს ვუთავსებ. დილაობით ვარ ტექნიკური უნივერსიტეტის ბიზნესის ადმინისტრირების დამამთავრებელი კურსის სტუდენტი. ჩემი საყვარელი საგნებია ფინანსური ანალიზი, პროექტების მართვა და ბიზნეს-სამართალი, რადგან ლექციებზე რეალური კომპანიების ქეისებს ვხსნით."
        ],
        [
          "In the afternoons, from two o'clock until six, I work as a junior analyst at a commercial bank in the city centre. My main job is to check financial documents for small businesses — such as bakeries, pharmacies, and transport companies — that apply for bank loans to buy new equipment.",
          "ნაშუადღევს, ორიდან ექვს საათამდე, ქალაქის ცენტრში მდებარე კომერციულ ბანკში უმცროს ანალიტიკოსად ვმუშაობ. ჩემი მთავარი მოვალეობაა მცირე ბიზნესების — მაგალითად, საცხობების, აფთიაქებისა და სატრანსპორტო კომპანიების — ფინანსური დოკუმენტების შემოწმება, როდესაც ისინი ახალი დანადგარების შესაძენად ბანკში სესხზე განაცხადს აკეთებენ."
        ],
        [
          "What I enjoy most about my work is that every day brings a different story: on Monday I might analyze the budget of a family orchard, and on Wednesday I might visit a furniture workshop with my manager. Working with spreadsheets and numbers requires great attention to detail!",
          "ჩემს სამსახურში ყველაზე მეტად ის მომწონს, რომ ყოველ დღეს განსხვავებული ისტორია მოაქვს: ორშაბათს შეიძლება საოჯახო ხეხილის ბაღის ბიუჯეტი გავაანალიზო, ხოლო ოთხშაბათს მენეჯერთან ერთად ავეჯის სახელოსნოს ვესტუმრო. ცხრილებთან და ციფრებთან მუშაობა დეტალების მიმართ დიდ ყურადღებას მოითხოვს!"
        ],
        [
          "In June, after I graduate from university, my manager has offered me a full-time position in the international trade department! That is why I am practicing my English speaking skills every day, so I can communicate confidently with foreign partners and clients.",
          "ივნისში, უნივერსიტეტის დამთავრების შემდეგ, ჩემმა მენეჯერმა შემომთავაზა სრულგანაკვეთიანი პოზიცია საერთაშორისო ვაჭრობის დეპარტამენტში! სწორედ ამიტომ ვვარჯიშობ ყოველდღე ინგლისურ საუბარში, რათა უცხოელ პარტნიორებსა და კლიენტებთან თავდაჯერებულად შევძლო კომუნიკაცია."
        ]
      ],
      glossary: [
        "What do you do for a living?|რას საქმიანობთ (რა არის თქვენი პროფესია)?", "combine studies with a job|სწავლისა და სამსახურის შეთავსება", "final-year student|დამამთავრებელი კურსის სტუდენტი",
        "business administration|ბიზნესის ადმინისტრირება", "commercial bank|კომერციული ბანკი", "apply for a loan|სესხზე განაცხადის შეტანა",
        "spreadsheet|ელექტრონული ცხრილი (Excel)", "attention to detail|ყურადღება დეტალების მიმართ", "graduate from university|უნივერსიტეტის დამთავრება", "full-time position|სრულგანაკვეთიანი პოზიცია"
      ],
      questions: [
        "What common question do people ask when they want to know your profession?|'What do you do for a living?'|'Where is the nearest bank?'|'What time is your flight?'|'How old is your brother?'",
        "What does the speaker study at the Technical University in the mornings?|Business administration (as a final-year student)|Medicine and surgery|Classical music|Botany and gardening",
        "Which three university subjects are the speaker's favourites, and why?|Financial analysis, project management, and business law, because they solve real-world company cases|History, geography, and art|Chemistry, physics, and astronomy|Literature and poetry",
        "Where and during what hours does the speaker work in the afternoons?|From two o'clock until six, as a junior analyst at a commercial bank in the city centre|From eight at night until midnight at a restaurant|In the morning at a bookshop|On weekends only at a sports centre",
        "What is the speaker's main responsibility at the bank?|Checking financial documents for small businesses that apply for loans to buy new equipment|Counting coins at the cash window|Repairing office computers|Driving the bank manager's car",
        "What examples of small businesses applying for bank loans are mentioned?|Bakeries, pharmacies, transport companies, a family orchard, and a furniture workshop|Airlines and space agencies|Hospitals and universities|Cinemas and theatres",
        "What skill is required when working with spreadsheets and financial numbers?|Great attention to detail|Drawing pictures by hand|Running fast|Playing a musical instrument",
        "When will the speaker graduate from the university?|In June|In December|In two years|Next week",
        "What career opportunity has the manager offered the speaker after graduation?|A full-time position in the international trade department|A summer holiday in Spain|A part-time job at another branch|A job as a university teacher",
        "Why is the speaker practicing English speaking skills every day?|To communicate confidently with foreign partners and clients in the international trade department|To pass a high school history test|To work as a tour guide in Rome|To read medical books"
      ]
    },
    {
      num: 15, level: "A1",
      icon: "🗓️", genre: "შაბათ-კვირის გეგმები",
      title: "უქმეების გეგმებისა და განვლილი დღეების გაზიარება",
      subtitle: "Sharing Weekend Plans and Past Activities",
      time: "5 წთ",
      paragraphs: [
        [
          "Every Monday morning in our office kitchen, while we wait for the coffee machine to brew, my colleagues and I always ask each other, 'How was your weekend? Did you do anything special?' And on Friday afternoons before we go home, we ask, 'Do you have any plans for the weekend?'",
          "ყოველ ორშაბათ დილით ჩვენი ოფისის სამზარეულოში, სანამ ყავის აპარატს ველოდებით, მე და ჩემი კოლეგები ყოველთვის ვეკითხებით ერთმანეთს: „როგორ ჩაიარა შენმა უქმეებმა? რამე განსაკუთრებული ხომ არ გაგიკეთებია?“ ხოლო პარასკევ ნაშუადღევს, სახლში წასვლამდე, ვკითხულობთ: „გაქვს რაიმე გეგმები შაბათ-კვირისთვის?“"
        ],
        [
          "Last weekend was wonderful because my old school friend, Daniel, came to visit me from Bristol. On Saturday morning, I met him at the central train station at ten o'clock. Since he had never been to our city before, I took him on a walking tour of the Old Town and the riverside market.",
          "გასული უქმეები შესანიშნავი იყო, რადგან ბრისტოლიდან ჩემი სკოლის ძველი მეგობარი, დანიელი მესტუმრა. შაბათ დილით, ათ საათზე, მას ცენტრალურ რკინიგზის სადგურზე დავხვდი. რადგან ის ჩვენს ქალაქში მანამდე არასდროს ყოფილა, მოვუწყვე საფეხმავლო ტური ძველ ქალაქსა და მდინარისპირა ბაზარში."
        ],
        [
          "At the market, we tasted local honey and warm cheese pastries, and bought fresh fish for dinner. On Saturday evening, we cooked dinner at my apartment and watched the Champions League football match on television. Our favourite team won two-one in the final minute!",
          "ბაზარში დავაგემოვნეთ ადგილობრივი თაფლი და თბილი ყველის ღვეზელები, ვახშმისთვის კი ახალი თევზი ვიყიდეთ. შაბათ საღამოს ჩემს ბინაში მოვამზადეთ ვახშამი და ტელევიზორში ვუყურეთ ჩემპიონთა ლიგის საფეხბურთო მატჩს. ჩვენმა საყვარელმა გუნდმა ბოლო წუთზე ორით ერთი მოიგო!"
        ],
        [
          "On Sunday morning, we woke up early and went for a five-kilometre run around the lake before having a big breakfast of pancakes and berries. Daniel took the six o'clock evening train back to Bristol, and we promised to visit each other again in autumn.",
          "კვირა დილით ადრე გავიღვიძეთ და ტბის გარშემო ხუთი კილომეტრი ვირბინეთ, სანამ ბლინებითა და კენკრით ნოყიერად ვისაუზმებდით. დანიელი საღამოს ექვს საათზე მატარებლით დაბრუნდა ბრისტოლში და ერთმანეთს დავპირდით, რომ შემოდგომაზე კვლავ ვესტუმრებოდით ერთმანეთს."
        ],
        [
          "As for this coming weekend, I am planning a much quieter two days! On Saturday morning, I am going to clean my apartment, wash my clothes, and repot my indoor plants on the balcony. On Sunday afternoon, I am going to visit my grandparents in the countryside and help my grandfather pick apples in his orchard.",
          "რაც შეეხება მომავალ შაბათ-კვირას, გაცილებით მშვიდ ორ დღეს ვგეგმავ! შაბათ დილით ვაპირებ დავალაგო ბინა, გავრეცხო ტანსაცმელი და აივანზე გადავრგო ჩემი ოთახის მცენარეები. კვირა ნაშუადღევს კი სოფელში ბებიასა და ბაბუას ვესტუმრები და ბაბუას ხეხილის ბაღში ვაშლის დაკრეფაში დავეხმარები."
        ]
      ],
      glossary: [
        "How was your weekend?|როგორ ჩაიარა შენმა უქმეებმა?", "Do you have any plans for the weekend?|გაქვს რაიმე გეგმები შაბათ-კვირისთვის?", "old school friend|სკოლის ძველი მეგობარი",
        "walking tour|საფეხმავლო ტური / გასეირნება", "riverside market|მდინარისპირა ბაზარი", "in the final minute|ბოლო წუთზე",
        "go for a run|სარბენად წასვლა", "this coming weekend|ამ მომავალ შაბათ-კვირას", "repot plants|მცენარეების ახალ ქოთანში გადარგვა", "pick apples|ვაშლის დაკრეფა"
      ],
      questions: [
        "What question do the colleagues always ask each other on Monday mornings in the office kitchen?|'How was your weekend? Did you do anything special?'|'What is your surname?'|'Where is the train station?'|'How much does your coat cost?'",
        "Who came to visit the speaker last weekend, and from which city?|An old school friend named Daniel, from Bristol|A cousin from Manchester|An uncle from Edinburgh|A colleague from London",
        "Where did the speaker take Daniel on Saturday morning since he had never been to the city before?|On a walking tour of the Old Town and the riverside market|To an indoor shopping mall|To the airport|To a hospital",
        "What did they taste and buy at the riverside market?|They tasted local honey and warm cheese pastries, and bought fresh fish for dinner|They bought winter boots and umbrellas|They tasted ice cream and bought pasta|They bought books and pens",
        "What did they watch on television on Saturday evening, and what was the score?|The Champions League football match, and their favourite team won 2–1 in the final minute|A tennis match that lasted five hours|A comedy movie about a dog|The evening weather forecast",
        "What exercise did they do on Sunday morning before eating pancakes and berries?|They went for a five-kilometre run around the lake|They swam in the sea for two hours|They played basketball|They rode horses",
        "What time did Daniel take the train back to Bristol on Sunday?|At six o'clock in the evening|At eight in the morning|At midnight|On Monday afternoon",
        "How will the speaker's coming weekend be different from last weekend?|It will be much quieter|The speaker is flying to another country|Twenty guests are coming for a party|The speaker has to work at the office all weekend",
        "What three chores is the speaker planning to do at home on Saturday morning?|Clean the apartment, wash clothes, and repot indoor plants on the balcony|Paint the bedroom walls, fix the car, and bake bread|Study for an exam and write reports|Go to the dentist and the bank",
        "Where is the speaker going on Sunday afternoon, and what will they do there?|To visit their grandparents in the countryside and help their grandfather pick apples in his orchard|To the cinema with Anna|To a football stadium|To the central library"
      ]
    }
  ];

  App.SpeakingDataA = App.SpeakingDataA1.concat(App.SpeakingDataA2 || []);
})(window);