/**
 * WRITING-A.JS — A1 დონის 15 ვრცელი წერითი თემა (#1–#15)
 * თითოეულ თემაში: 5 აბზაცი (წერითი ნიმუში), 10 საკვანძო ფრაზა/შაბლონი და 10 ტესტი (სულ 150 კითხვა).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.WritingDataA1 = [
    {
      num: 1, level: "A1",
      icon: "🪪", genre: "პირადი პროფილი",
      title: "პირადი პროფილისა და გაცნობითი ტექსტის დაწერა",
      subtitle: "Writing a Personal Profile for an Online Language Club",
      time: "6 წთ",
      prompt: "დაწერეთ მოკლე გაცნობითი ტექსტი თქვენ შესახებ (სახელი, ქალაქი, პროფესია/სწავლა, ჰობი და რატომ სწავლობთ ინგლისურს).",
      template: "Hello! My name is [Name], and I live in [City]. I work as a [Job] / I am a student at [University]. In my free time, I enjoy [Hobby 1] and [Hobby 2]. I am learning English because [Reason].",
      paragraphs: [
        [
          "Hello, everyone! My name is Lucas Novak, and I am twenty-three years old. I was born in Prague, the capital city of the Czech Republic, and I still live here in a small apartment near the river with my younger brother.",
          "მოგესალმებით ყველას! ჩემი სახელია ლუკას ნოვაკი და ვარ ოცდასამი წლის. დავიბადე ჩეხეთის დედაქალაქ პრაღაში და დღესაც აქ ვცხოვრობ, მდინარესთან ახლოს მდებარე პატარა ბინაში, ჩემს უმცროს ძმასთან ერთად."
        ],
        [
          "From Monday to Friday, I work as a junior web developer at a small technology company. My job is to design clean, simple websites for local shops and cafés. I really like my team because everyone is helpful and friendly.",
          "ორშაბათიდან პარასკევის ჩათვლით ვმუშაობ უმცროს ვებ-დეველოპერად პატარა ტექნოლოგიურ კომპანიაში. ჩემი საქმეა ადგილობრივი მაღაზიებისა და კაფეებისთვის სუფთა, მარტივი ვებსაიტების შექმნა. ძალიან მომწონს ჩემი გუნდი, რადგან ყველა ყურადღებიანი და მეგობრულია."
        ],
        [
          "In my free time, I love being active outdoors. On weekday evenings, I usually ride my bicycle in the park for forty minutes, and on Sundays, I play football with my old school friends. When it rains, I stay at home and read science fiction books.",
          "თავისუფალ დროს მიყვარს აქტიური დასვენება ღია ცის ქვეშ. სამუშაო დღეების საღამოობით პარკში ჩვეულებრივ ორმოცი წუთი ველოსიპედით დავდივარ, ხოლო კვირაობით სკოლის ძველ მეგობრებთან ერთად ფეხბურთს ვთამაშობ. როცა წვიმს, სახლში ვრჩები და სამეცნიერო ფანტასტიკის ჟანრის წიგნებს ვკითხულობ."
        ],
        [
          "I am learning English for two main reasons. First, many of our new clients at work come from other European countries, so I need to write clear emails in English every day. Second, I love travelling and want to make friends when I visit new cities.",
          "ინგლისურს ვსწავლობ ორი მთავარი მიზეზის გამო. პირველი: სამსახურში ჩვენი ახალი კლიენტების დიდი ნაწილი ევროპის სხვა ქვეყნებიდანაა, ამიტომ ყოველდღე მჭირდება ინგლისურად გასაგები იმეილების წერა. მეორე: მიყვარს მოგზაურობა და მინდა ახალი მეგობრების შეძენა უცხო ქალაქებში სტუმრობისას."
        ],
        [
          "My goal for this year is to practice English for thirty minutes every evening and write one short text every weekend. Thank you for reading my profile! Please send me a message if you would like to practice writing together.",
          "ამ წლისთვის ჩემი მიზანია ყოველ საღამოს ოცდაათი წუთი ვივარჯიშო ინგლისურში და ყოველ შაბათ-კვირას დავწერო ერთი მოკლე ტექსტი. გმადლობთ ჩემი პროფილის წაკითხვისთვის! გთხოვთ მომწეროთ შეტყობინება, თუ გსურთ წერაში ერთად ვივარჯიშოთ."
        ]
      ],
      glossary: [
        "I was born in...|მე დავიბადე ...-ში", "I work as a...|მე ვმუშაობ ...-ად (პროფესია)", "In my free time|თავისუფალ დროს",
        "for two main reasons|ორი მთავარი მიზეზის გამო", "First, ... Second, ...|პირველი: ... მეორე: ...", "make friends|დამეგობრება / მეგობრების შეძენა",
        "My goal for this year is...|ამ წლისთვის ჩემი მიზანია...", "Thank you for reading|გმადლობთ წაკითხვისთვის", "send me a message|მომწერეთ შეტყობინება", "practice together|ერთად ვარჯიში"
      ],
      questions: [
        "In English writing, which words MUST always start with a capital letter in a personal profile?|Names of people, cities, countries, nationalities, days of the week, and the pronoun 'I'|Every noun and verb in a sentence|Only the last word of a paragraph|Words like 'apartment', 'river', and 'brother'",
        "Where was Lucas Novak born, and who does he live with?|He was born in Prague and lives with his younger brother|He was born in London and lives alone|He was born in Vienna and lives with his parents|He was born in Berlin",
        "Which preposition is correct when writing about your profession: 'I work ___ a junior web developer'?|as ('I work as a junior web developer')|like ('I work like a developer')|for ('I work for a developer')|in ('I work in a developer')",
        "What does Lucas design at his technology company?|Clean, simple websites for local shops and cafés|Tall bridges and highways|Winter coats and shoes|Mobile phone batteries",
        "Which connector does Lucas use in Paragraph 2 to explain WHY he likes his team?|because ('I really like my team because everyone is helpful and friendly.')|but|although|however",
        "What does Lucas do when it rains on the weekend?|He stays at home and reads science fiction books|He plays football in the rain|He goes swimming in the river|He works at the office",
        "How does Lucas organize his two reasons for learning English in Paragraph 4?|Using the sequence markers 'First,' and 'Second,'|By writing all sentences without periods|Using 'Finally' at the beginning|By writing numbers backwards",
        "Why does Lucas need to write clear emails in English at work?|Because many of their new clients come from other European countries|Because his brother only speaks English|Because Czech keyboards do not work|Because his boss lives in Australia",
        "What is Lucas's learning goal for this year?|To practice English for thirty minutes every evening and write one short text every weekend|To read ten books every single day|To learn five languages in one month|To study only once a month",
        "How does Lucas politely end his personal profile?|By thanking readers and inviting them to send a message to practice together|By writing 'Goodbye forever'|By leaving the last sentence unfinished|By asking readers for money"
      ]
    },
    {
      num: 2, level: "A1",
      icon: "🏖️", genre: "ღია ბარათი",
      title: "დასვენებიდან ღია ბარათის გაგზავნა",
      subtitle: "Writing a Holiday Postcard from the Coast",
      time: "6 წთ",
      prompt: "დაწერეთ მოკლე ღია ბარათი მეგობარს არდადეგებიდან (სად იმყოფებით, როგორია ამინდი, რას აკეთებთ დღისით და როდის ბრუნდებით).",
      template: "Dear [Friend's Name], Greetings from sunny [Place]! The weather here is [Weather]. Every morning we [Activity 1], and in the afternoon we [Activity 2]. Wish you were here! Best wishes, [Your Name].",
      paragraphs: [
        [
          "Dear Emma, Greetings from the beautiful island of Crete in Greece! Tom and I arrived here on Monday afternoon after a smooth three-hour flight. We are staying in a charming white guesthouse with blue shutters, just a five-minute walk from the sandy beach.",
          "ძვირფასო ემა, მოკითხვა საბერძნეთის ულამაზეს კუნძულ კრეტადან! მე და ტომი აქ ორშაბათ ნაშუადღევს ჩამოვედით მშვიდი სამსაათიანი ფრენის შემდეგ. ვცხოვრობთ მომხიბვლელ თეთრ საოჯახო სასტუმროში ლურჯი დარაბებით, ქვიშიანი პლაჟიდან ფეხით სულ რაღაც ხუთი წუთის სავალზე."
        ],
        [
          "The weather here is absolutely wonderful! Every single day the sky is bright blue without a single cloud, and a warm breeze blows from the sea. The water is crystal clear and warm, so we go swimming every morning before breakfast.",
          "ამინდი აქ უბრალოდ შესანიშნავია! ყოველდღე ცა კაშკაშა ლურჯია ერთი ღრუბლის გარეშე, ზღვიდან კი თბილი ნიავი უბერავს. წყალი კამკამა და თბილია, ამიტომ ყოველ დილით საუზმემდე საცურაოდ გავდივართ."
        ],
        [
          "After swimming, we sit on the shady terrace under a lemon tree and eat fresh Greek yoghurt with thyme honey, walnuts, and warm bread. The owner of the guesthouse, Mrs Sofia, brings us fresh orange juice from her own garden!",
          "ცურვის შემდეგ ვსხდებით ჩრდილიან ტერასაზე, ლიმონის ხის ქვეშ, და მივირთმევთ ახალ ბერძნულ იოგურტს ბეგქონდარას თაფლით, ნიგვზითა და თბილი პურით. სასტუმროს დიასახლისს, ქალბატონ სოფიას, თავისივე ბაღიდან ჩვენთვის ახალდაწურული ფორთოხლის წვენი მოაქვს!"
        ],
        [
          "Yesterday we rented two bicycles and rode along the coast to an old Venetian harbour. We visited a small maritime museum, took dozens of photographs of the colourful fishing boats, and had grilled fish with lemon for dinner at a seaside tavern.",
          "გუშინ ვიქირავეთ ორი ველოსიპედი და სანაპიროს გასწვრივ ძველ ვენეციურ ნავსადგურამდე გავისეირნეთ. დავათვალიერეთ პატარა საზღვაო მუზეუმი, გადავუღეთ ათობით ფოტო ფერად თევზსაჭერ ნავებს და ზღვისპირა ტავერნაში ვახშმად მივირთვით გრილზე შემწვარი თევზი ლიმონით."
        ],
        [
          "Tomorrow we are going on a boat trip to a quiet lagoon on the south coast. We are flying back home on Sunday evening, and I have bought a lovely jar of local olive oil and some postcards for you! Wish you were here! Warm regards, Clara.",
          "ხვალ ნავით მივდივართ ექსკურსიაზე სამხრეთ სანაპიროს მშვიდ ლაგუნაში. სახლში კვირა საღამოს მოვფრინავთ, შენთვის კი უკვე ვიყიდე ადგილობრივი ზეითუნის ზეთის მშვენიერი ქილა და ღია ბარათები! ნეტავ შენც აქ იყო! თბილი სურვილებით, კლარა."
        ]
      ],
      glossary: [
        "Dear Emma,|ძვირფასო ემა, (წერილის დასაწყისი)", "Greetings from...|მოკითხვა ...-დან!", "just a five-minute walk from...|ფეხით სულ რაღაც 5 წუთის სავალზე ...-დან",
        "crystal clear|კრისტალურად სუფთა / კამკამა", "shady terrace|ჩრდილიანი ტერასა", "rent bicycles|ველოსიპედების ქირაობა",
        "seaside tavern|ზღვისპირა ტავერნა (რესტორანი)", "go on a boat trip|ნავით ექსკურსიაზე წასვლა", "Wish you were here!|ნეტავ შენც აქ იყო! (ღია ბარათის ფრაზა)", "Warm regards,|თბილი სურვილებით, (წერილის დასასრული)"
      ],
      questions: [
        "How should you begin a friendly postcard or informal letter to a friend named Emma?|'Dear Emma,' followed by a comma|'To Mrs Emma,' followed by a full stop|'Attention Emma!'|'Hey you,'",
        "Where is Clara spending her holiday, and when did she arrive?|On the island of Crete in Greece, arriving on Monday afternoon|In Rome, arriving on Friday night|In the Swiss Alps, arriving yesterday|In Madrid, arriving two weeks ago",
        "What does the guesthouse where Clara and Tom are staying look like?|A charming white guesthouse with blue shutters, a five-minute walk from the beach|A tall glass hotel in the city centre|A wooden cabin in a snowy forest|A campsite by a river",
        "Which verb tense does Clara use in Paragraph 2 to describe things they do every day on holiday ('we go swimming every morning')?|The Present Simple tense|The Past Simple tense|The Future tense with 'will'|The Passive voice",
        "What do Clara and Tom eat for breakfast under the lemon tree?|Fresh Greek yoghurt with thyme honey, walnuts, and warm bread|Bacon, sausages, and beans|Pancakes with chocolate sauce|Pizza and soup",
        "Which verb tense does Clara switch to in Paragraph 4 when starting with the word 'Yesterday'?|The Past Simple tense ('rented', 'rode', 'visited', 'took', 'had')|The Present Continuous tense|The Future 'going to' tense|Imperative verbs",
        "Where did Clara and Tom ride their rented bicycles yesterday?|Along the coast to an old Venetian harbour|Up a steep mountain trail|To the airport|To a shopping mall",
        "Which structure does Clara use in Paragraph 5 to talk about their fixed plan for 'Tomorrow'?|Present Continuous for future plans ('Tomorrow we are going on a boat trip...')|Past Simple ('Tomorrow we went...')|Present Simple ('Tomorrow we go yesterday')|Used to",
        "What gift has Clara bought for Emma to bring back on Sunday?|A jar of local olive oil and some postcards|A blue woollen sweater|A silver bracelet|A box of Belgian chocolates",
        "Which classic expression do English speakers often write at the end of a holiday postcard before signing their name?|'Wish you were here!'|'Please reply immediately!'|'Yours faithfully, Sir,'|'Attached is my CV.'"
      ]
    },
    {
      num: 3, level: "A1",
      icon: "🏨", genre: "სასტუმროს ჯავშანი",
      title: "სასტუმროს დაჯავშნის წერილი (Email)",
      subtitle: "Writing a Polite Email to Book a Hotel Room",
      time: "6 წთ",
      prompt: "დაწერეთ თავაზიანი იმეილი სასტუმროს მიმღებში ოთახის დასაჯავშნად (მიუთითეთ თარიღები, ოთახის ტიპი, კითხვა საუზმეზე და ტრანსფერზე).",
      template: "Dear Sir or Madam, I would like to book a [Room Type] for [Number] nights, from [Date] to [Date]. Could you please tell me if breakfast is included in the price? I look forward to hearing from you. Kind regards, [Your Name].",
      paragraphs: [
        [
          "Subject: Room Reservation Request — 14th to 17th August (Mr Daniel Brooks). Dear Reception Team at the Lakeview Hotel, I am writing to inquire about availability and to book a room at your hotel for three nights next month.",
          "თემა: ოთახის დაჯავშნის მოთხოვნა — 14-დან 17 აგვისტომდე (ბატონი დანიელ ბრუქსი). ძვირფასო სასტუმრო „ლეიქვიუს“ მიმღების გუნდო, გწერთ თავისუფალი ადგილების გასაგებად და მომავალ თვეში თქვენს სასტუმროში სამი ღამით ოთახის დასაჯავშნად."
        ],
        [
          "My wife and I would like to reserve a quiet double room with a private bathroom from Friday, the fourteenth of August, to Monday, the seventeenth of August (checking out on Monday morning). If possible, we would prefer a room on an upper floor with a balcony overlooking the lake.",
          "მე და ჩემს მეუღლეს გვსურს დავჯავშნოთ მშვიდი ორადგილიანი ნომერი იზოლირებული სააბაზანოთი პარასკევიდან, თოთხმეტი აგვისტოდან, ორშაბათამდე, ჩვიდმეტ აგვისტომდე (სასტუმროდან გასვლა ორშაბათ დილით). თუ შესაძლებელია, უპირატესობას მივანიჭებდით ზედა სართულის ოთახს აივნითა და ტბის ხედით."
        ],
        [
          "Could you please confirm the total price per night for the room, and let me know whether breakfast and wireless internet are included in the room rate? My wife follows a gluten-free diet, so we would also like to know if your breakfast buffet offers gluten-free bread.",
          "გთხოვთ დამიდასტუროთ ოთახის ღამის ჯამური ღირებულება და შემატყობინოთ, შედის თუ არა ნომრის ფასში საუზმე და უსადენო ინტერნეტი? ჩემი მეუღლე იცავს უგლუტენო დიეტას, ამიტომ ასევე გვაინტერესებს, თუ არის თქვენს საუზმის მენიუში უგლუტენო პური."
        ],
        [
          "In addition, our train arrives at the central railway station at nine o'clock on Friday evening. Since we will arrive in the evening, could you tell us if your reception desk is open twenty-four hours a day, or if there is a late check-in code?",
          "გარდა ამისა, ჩვენი მატარებელი ცენტრალურ რკინიგზის სადგურზე პარასკევ საღამოს ცხრა საათზე ჩამოდის. რადგან საღამოს ჩამოვალთ, ხომ ვერ გვეტყვით, თქვენი მიმღები ოცდაოთხი საათის განმავლობაში ღიაა, თუ გვიანი შესვლისთვის სპეციალური კოდი მოქმედებს?"
        ],
        [
          "Please let me know if you need my credit card details to guarantee the reservation. Thank you very much in advance for your help, and I look forward to hearing from you soon. Kind regards, Daniel Brooks (Phone: +44 7700 900412).",
          "გთხოვთ შემატყობინოთ, თუ გჭირდებათ ჩემი საკრედიტო ბარათის მონაცემები ჯავშნის გარანტირებისთვის. წინასწარ გიხდით დიდ მადლობას დახმარებისთვის და მოუთმენლად ველი თქვენს პასუხს. პატივისცემით, დანიელ ბრუქსი (ტელ.: +44 7700 900412)."
        ]
      ],
      glossary: [
        "Subject: Room Reservation Request|თემა: ოთახის დაჯავშნის მოთხოვნა", "I am writing to inquire about...|გწერთ, რათა გავიგო ...-ის შესახებ", "We would like to reserve...|გვსურს დავჯავშნოთ...",
        "If possible, we would prefer...|თუ შესაძლებელია, ვამჯობინებდით...", "Could you please confirm...?|ხომ ვერ დამიდასტურებდით...?", "included in the room rate|შედის ნომრის საფასურში",
        "In addition,|გარდა ამისა, / ამასთანავე,", "late check-in|სასტუმროში გვიანი შესვლა/რეგისტრაცია", "I look forward to hearing from you|მოუთმენლად ველი თქვენგან პასუხს", "Kind regards,|პატივისცემით / კეთილი სურვილებით,"
      ],
      questions: [
        "Why is it important to write a clear 'Subject' line at the top of a hotel reservation email?|So the reception staff immediately see the purpose of the email, the dates, and the guest's name|Because emails cannot be sent without fifty words in the subject|To write the entire letter inside the subject box|To show off your vocabulary",
        "Which polite phrase is much better than writing 'I want a room' in a formal email?|'I would like to reserve a quiet double room...'|'Give me a double room now.'|'You must book a room for me.'|'I need room fast.'",
        "For which dates and how many nights is Daniel Brooks booking the room?|For three nights, from Friday 14th August to Monday 17th August|For seven nights in December|For one night on Saturday|For two weeks in July",
        "What special preferences does Daniel mention for the double room if possible?|An upper floor with a balcony overlooking the lake, and a private bathroom|A room in the basement next to the kitchen|A room with four single beds|A room without windows",
        "Why does Daniel ask if the breakfast buffet offers gluten-free bread?|Because his wife follows a gluten-free diet|Because he owns a bakery|Because gluten-free bread is cheaper|Because he doesn't like butter",
        "What connector does Daniel use at the start of Paragraph 4 to add another question about their arrival time?|'In addition,'|'However,'|'Because of,'|'On the contrary,'",
        "Why does Daniel ask whether the reception desk is open twenty-four hours a day?|Because their train arrives at nine o'clock on Friday evening, so they will check in late|Because they want to check out at three in the morning|Because he wants to work at the hotel|Because they are arriving at six in the morning",
        "What does Daniel offer to provide if needed to guarantee the reservation?|His credit card details|His university diploma|A photograph of his train ticket|Cash sent in an envelope",
        "Which standard polite sentence is used before the sign-off to say you are waiting for a reply?|'I look forward to hearing from you soon.'|'Write back to me right now.'|'Don't forget to answer me.'|'Call me tonight.'",
        "Which sign-off is appropriate at the end of a polite business or service email?|'Kind regards,' (or 'Best regards,' / 'Yours sincerely,')|'Lots of kisses,'|'Bye-bye!'|'See ya later,'"
      ]
    },
    {
      num: 4, level: "A1",
      icon: "🎂", genre: "მოსაწვევი",
      title: "დაბადების დღის მოსაწვევი წერილი",
      subtitle: "Writing an Invitation to a Birthday Garden Party",
      time: "6 წთ",
      prompt: "დაწერეთ მეგობრული მოსაწვევი წერილი წვეულებაზე ან დაბადების დღეზე (მიუთითეთ თარიღი, დრო, მისამართი, პროგრამა და RSVP).",
      template: "Hi everyone! I am having a birthday party on [Day, Date] at [Time] at [Place/Address]. We will have [Food/Music]. Please let me know if you can come by [Day]! Best, [Your Name].",
      paragraphs: [
        [
          "Hi everyone! I hope you are all having a wonderful week. Next Saturday, the twenty-fourth of May, is my twenty-fifth birthday, and I would love to invite you all to a garden party at my house to celebrate together!",
          "სალამი ყველას! იმედი მაქვს, ყველას მშვენიერი კვირა გაქვთ. მომავალ შაბათს, ოცდაოთხ მაისს, ოცდახუთი წელი მისრულდება და დიდი სიამოვნებით გეპატიჟებით ყველას ჩემი სახლის ბაღში წვეულებაზე, რათა ერთად აღვნიშნოთ!"
        ],
        [
          "The party will start at four o'clock in the afternoon and continue until late in the evening. My address is Fourteen Maple Avenue, just across the street from the Green Park metro station (take Exit Two and walk past the flower shop to the house with the blue gate).",
          "წვეულება დაიწყება ნაშუადღევის ოთხ საათზე და გაგრძელდება გვიან საღამომდე. ჩემი მისამართია მეიპლ-ავენიუს თოთხმეტი ნომერი, ზუსტად მეტროსადგურ „გრინ-პარკის“ მოპირდაპირე მხარეს (ამოდით მეორე ამოსასვლელიდან, ჩაუარეთ ყვავილების მაღაზიას და მოდით ლურჯჭიშკრიან სახლთან)."
        ],
        [
          "Since the weather forecast for Saturday is warm and sunny, we will set up tables and lanterns outside on the lawn. My brother Leo is going to cook burgers, grilled chicken, and vegetable skewers on the barbecue, and my mother is baking a big chocolate and raspberry birthday cake!",
          "რადგან შაბათისთვის თბილი და მზიანი ამინდია გამოცხადებული, მაგიდებსა და ფარნებს გარეთ, გაზონზე გავშლით. ჩემი ძმა ლეო გრილზე მოამზადებს ბურგერებს, შემწვარ ქათამსა და ბოსტნეულის მწვადს, ხოლო დედაჩემი აცხობს დაბადების დღის დიდ შოკოლადისა და ჟოლოს ტორტს!"
        ],
        [
          "Please do not bring any presents — your company is the best gift! However, if you would like to bring a favourite board game or a musical instrument for the evening, that would be fantastic. Also, feel free to bring a warm sweater, as the garden gets a little cool after sunset.",
          "გთხოვთ, საჩუქრებზე ნუ შეწუხდებით — თქვენი სტუმრობა საუკეთესო საჩუქარია! თუმცა, თუ საღამოსთვის წამოიღებთ საყვარელ სამაგიდო თამაშს ან მუსიკალურ საკრავს, ფანტასტიკური იქნება. ასევე, წამოიღეთ თბილი სვიტერი, რადგან მზის ჩასვლის შემდეგ ბაღში ოდნავ გრილა."
        ],
        [
          "Could you please reply to this message by Wednesday evening to let me know if you can make it, and tell me if you have any food allergies or vegetarian preferences? I really hope to see you all on Saturday! Lots of love, Nina.",
          "გთხოვთ უპასუხოთ ამ შეტყობინებას ოთხშაბათ საღამომდე და მომწეროთ, შეძლებთ თუ არა მოსვლას, ასევე მითხარით, ხომ არ გაქვთ კვებითი ალერგია ან ვეგეტარიანული მენიუს სურვილი? ძალიან დიდი იმედი მაქვს, რომ შაბათს ყველას გნახავთ! დიდი სიყვარულით, ნინა."
        ]
      ],
      glossary: [
        "I would love to invite you to...|დიდი სიამოვნებით გეპატიჟებით ...-ზე", "across the street from...|ქუჩის მოპირდაპირე მხარეს ...-დან", "set up tables|მაგიდების გაშლა / დადგმა",
        "birthday cake|დაბადების დღის ტორტი", "Your company is the best gift!|თქვენი სტუმრობა (თანადგომა) საუკეთესო საჩუქარია!", "feel free to bring...|თავისუფლად წამოიღეთ...",
        "after sunset|მზის ჩასვლის შემდეგ", "let me know if you can make it|შემატყობინეთ, თუ შეძლებთ მოსვლას (RSVP)", "food allergies|კვებითი ალერგია", "Lots of love,|დიდი სიყვარულით, (მეგობრული წერილის დასასრული)"
      ],
      questions: [
        "What essential pieces of information must every party invitation include?|The date, the start time, the exact address/directions, and when to reply (RSVP)|The price of the house and the neighbour's name|A five-page history of the street|A list of grammar rules",
        "Which birthday is Nina celebrating next Saturday, the 24th of May?|Her twenty-fifth birthday|Her eighteenth birthday|Her thirtieth birthday|Her fiftieth birthday",
        "What time does the garden party start, and what is Nina's address?|At four o'clock in the afternoon, at 14 Maple Avenue|At noon, at 22 Green Street|At eight at night, at a restaurant|At ten in the morning, in the park",
        "How can guests find Nina's house from the Green Park metro station?|Take Exit Two and walk past the flower shop to the house with the blue gate|Take a bus for thirty minutes|Cross the river bridge and turn left|Walk behind the hospital",
        "What food will Nina's brother Leo and her mother prepare for the party?|Leo will cook burgers, chicken, and vegetable skewers on the barbecue, and her mother is baking a chocolate and raspberry cake|Pizza and spaghetti|Fish soup and salads|Sandwiches and ice cream",
        "What does Nina write about birthday presents in Paragraph 4?|'Please do not bring any presents — your company is the best gift!'|She asks everyone to bring expensive books|She asks for money in envelopes|She sends a link to a shoe shop",
        "Why does Nina advise guests to bring a warm sweater?|Because the garden gets a little cool after sunset|Because it is going to snow in the afternoon|Because the house has no roof|Because they are going to the mountains",
        "What does the expression 'let me know if you can make it' mean in an invitation?|Tell me whether you are able to come to the party|Tell me if you can bake a cake|Tell me if you can build a table|Tell me if you know the address",
        "By which day does Nina ask her friends to reply to the invitation?|By Wednesday evening|By Sunday morning|On the day of the party|Next month",
        "Why does Nina need her friends to reply by Wednesday evening?|So she knows how many people are coming and whether anyone has food allergies or vegetarian preferences|Because the metro station closes on Wednesday|Because she is moving to another house on Thursday|To buy cinema tickets"
      ]
    },
    {
      num: 5, level: "A1",
      icon: "🏡", genre: "სახლის აღწერა",
      title: "ბინისა და სახლის აღწერა განცხადებისთვის",
      subtitle: "Writing a Clear Description of an Apartment for Rent",
      time: "6 წთ",
      prompt: "დაწერეთ ბინის ან სახლის მოკლე სარეკლამო აღწერა (მდებარეობა, ოთახების რაოდენობა, ავეჯი/ტექნიკა, ახლომდებარე ობიექტები და ქირის პირობები).",
      template: "Bright and modern [Number]-bedroom apartment for rent on [Street Name]. The flat has a spacious living room, a fully equipped kitchen, and a sunny balcony. Located just [Number] minutes from [Metro/Park]. Rent is [Amount] euros per month.",
      paragraphs: [
        [
          "For Rent: Bright and Sunny One-Bedroom Apartment near University Park! This freshly painted, fifty-five-square-metre apartment is located on the second floor of a quiet, well-maintained building on Linden Street. It is ideal for a single professional, a student, or a couple.",
          "ქირავდება: ნათელი და მზიანი ერთსაძინებლიანი ბინა უნივერსიტეტის პარკთან ახლოს! ეს ახალგარემონტებული (ახალშეღებილი), ორმოცდათხუთმეტი კვადრატული მეტრის ფართობის ბინა მდებარეობს ლინდენ-სტრიტზე, მშვიდი და მოვლილი კორპუსის მეორე სართულზე. იდეალურია ერთი დასაქმებული პირისთვის, სტუდენტისთვის ან წყვილისთვის."
        ],
        [
          "The apartment is fully furnished and ready to move into immediately. The spacious living room features large double-glazed windows that keep out street noise, a comfortable L-shaped sofa, a wooden dining table with four chairs, a bookshelf, and fast fibre-optic internet.",
          "ბინა სრულად არის აღჭურვილი ავეჯით და მზადაა დაუყოვნებლივ შესასვლელად. ფართო მისაღებ ოთახში არის დიდი მეტალოპლასტმასის (ორმაგი მინაპაკეტის) ფანჯრები, რომლებიც ქუჩის ხმაურს აკავებს, კომფორტული კუთხის დივანი, ხის სასადილო მაგიდა ოთხი სკამით, წიგნების თარო და სწრაფი ოპტიკურ-ბოჭკოვანი ინტერნეტი."
        ],
        [
          "The separate kitchen is equipped with brand-new appliances: a large refrigerator, a four-burner gas stove, an electric oven, a microwave, and a kettle. There is also a quiet balcony off the kitchen where you can enjoy your morning coffee overlooking the green courtyard.",
          "იზოლირებული სამზარეულო აღჭურვილია სულ ახალი ტექნიკით: დიდი მაცივრით, ოთხქურიანი გაზქურით, ელექტროღუმელით, მიკროტალღური ღუმელითა და ელექტროჩაიდნით. სამზარეულოდან ასევე გადიხართ მშვიდ აივანზე, სადაც შეგიძლიათ მიირთვათ დილის ყავა მწვანე ეზოს ხედით."
        ],
        [
          "The bedroom has a comfortable queen-sized bed with a new mattress, a large mirrored wardrobe with plenty of storage space, and blackout curtains for a good night's sleep. The modern bathroom has a glass shower cabin, a heated towel rail, and a new washing machine.",
          "საძინებელში დგას კომფორტული ფართო საწოლი ახალი მატრასით, დიდი სარკიანი გარდერობი ტევადი სათავსოებით და შუქგაუმტარი ფარდები მშვიდი ძილისთვის. თანამედროვე სააბაზანოში კი არის მინის საშხაპე კაბინა, პირსახოცის საშრობი და ახალი სარეცხი მანქანა."
        ],
        [
          "The location is unbeatable: a supermarket, a pharmacy, and a bakery are right across the street, and the University Metro Station is only a six-minute walk away! The monthly rent is चार hundred and fifty euros, including water and internet. To arrange a viewing this weekend, please call or text Mr Martin at 555-0198.",
          "მდებარეობა საუკეთესოა: სუპერმარკეტი, აფთიაქი და საცხობი ზუსტად ქუჩის გადაღმაა, ხოლო მეტროსადგური „უნივერსიტეტი“ ფეხით მხოლოდ ექვსი წუთის სავალზეა! ყოველთვიური ქირა შეადგენს ოთხას ორმოცდაათ ევროს, წყლისა და ინტერნეტის ჩათვლით. ამ უქმეებზე ბინის სანახავად გთხოვთ დაურეკოთ ან მისწეროთ ბატონ მარტინს ნომერზე: 555-0198."
        ]
      ],
      glossary: [
        "For Rent|ქირავდება (განცხადების სათაური)", "square metres|კვადრატული მეტრი (ფართობი)", "fully furnished|ავეჯით სრულად გაწყობილი",
        "spacious living room|ფართო / ნათელი მისაღები ოთახი", "double-glazed windows|ორმაგი მინაპაკეტის (ხმაურდამცავი) ფანჯრები", "brand-new appliances|სულ ახალი საყოფაცხოვრებო ტექნიკა",
        "plenty of storage space|უამრავი სათავსო ადგილი", "blackout curtains|შუქგაუმტარი (მუქი) ფარდები", "monthly rent|ყოველთვიური ქირა", "arrange a viewing|ბინის დათვალიერების დაგეგმვა/შეთანხმება"
      ],
      questions: [
        "How big is the apartment on Linden Street, and on which floor is it located?|Fifty-five square metres, on the second floor|One hundred square metres, on the tenth floor|Twenty square metres, in the basement|Eighty square metres, on the ground floor",
        "What does the phrase 'fully furnished' mean in a property listing?|The apartment comes with all necessary furniture (sofa, bed, table, wardrobe) ready to use|The apartment is completely empty with bare walls|The apartment is for sale, not for rent|The apartment has no kitchen",
        "Why do the 'double-glazed windows' in the living room make the apartment comfortable?|They keep out street noise (and keep heat inside)|They allow rain to come into the room|They are painted black|They cannot be opened",
        "Which appliances are included in the separate kitchen?|A large refrigerator, a four-burner gas stove, an electric oven, a microwave, and a kettle|Only a small toaster|A television and a sofa|A washing machine and a bicycle",
        "Where is the quiet balcony located, and what does it overlook?|Off the kitchen, overlooking the green courtyard|Off the bathroom, overlooking a highway|On the roof, overlooking the airport|At the front door",
        "Why are 'blackout curtains' useful in the bedroom?|They block out street light and morning sun for a good night's sleep|They let in maximum sunlight at night|They keep mosquitoes out of the kitchen|They warm up the bathroom",
        "What three features are inside the modern bathroom?|A glass shower cabin, a heated towel rail, and a new washing machine|Only a cold water tap|A wooden bathtub and a stove|A bookshelf and a mirror",
        "How far is the University Metro Station from the apartment on foot?|Only a six-minute walk away|A forty-minute bus ride away|Two kilometres away|Right inside the same building",
        "How much is the monthly rent, and which bills are already included in that price?|450 euros per month, including water and internet|800 euros per month, with no bills included|200 euros per week|1,000 euros per month",
        "What does the phrase 'to arrange a viewing' mean at the end of the listing?|To schedule an appointment to visit and see the apartment in person|To watch a television show in the living room|To look at photographs in a magazine|To pay the rent online without seeing the flat"
      ]
    },
    {
      num: 6, level: "A1",
      icon: "📓", genre: "პირადი დღიური",
      title: "ყოველდღიური დღიურის ჩანაწერი",
      subtitle: "Writing an Evening Diary Entry About a Memorable Day",
      time: "6 წთ",
      prompt: "დაწერეთ დღიურის მოკლე ჩანაწერი განვლილი დღის შესახებ წარსულ დროში (Past Simple): რა გააკეთეთ დილით, სად იყავით შუადღეს და როგორ დასრულდა საღამო.",
      template: "Sunday, 18th October. Today was a wonderful day! In the morning, I woke up at [Time] and [Activity 1]. In the afternoon, I met [Person] and we [Activity 2]. Right now, I feel happy and grateful.",
      paragraphs: [
        [
          "Sunday, 18th October — 9:30 PM. Dear Diary, today was one of the most relaxing and enjoyable days I have had all autumn! After working hard on my university project all week, I decided to spend the entire Sunday outdoors without looking at my computer.",
          "კვირა, 18 ოქტომბერი — 21:30 სთ. ძვირფასო დღიურო, დღეს იყო ერთ-ერთი ყველაზე მშვიდი და სასიამოვნო დღე მთელი ამ შემოდგომის განმავლობაში! მთელი კვირა საუნივერსიტეტო პროექტზე დაძაბული მუშაობის შემდეგ, გადავწყვიტე მთელი კვირა დღე გარეთ, კომპიუტერის გარეშე გამეტარებინა."
        ],
        [
          "In the morning, I woke up naturally at half past eight without an alarm clock. The autumn sun was shining through my curtains, so I put on my running shoes and jogged three kilometres through the golden leaves in the park. Afterwards, I stopped at the corner bakery and bought two warm cinnamon rolls.",
          "დილით მაღვიძარას გარეშე, ბუნებრივად გამეღვიძა ცხრის ნახევარზე. შემოდგომის მზე ფარდებიდან ანათებდა, ამიტომ ჩავიცვი სარბენი ფეხსაცმელი და პარკში, ოქროსფერ ფოთლებში სამი კილომეტრი ვირბინე. შემდეგ კუთხის საცხობთან გავჩერდი და ორი თბილი დარიჩინის ფუნთუშა ვიყიდე."
        ],
        [
          "At noon, my cousin Maya came over to my apartment, and we took the suburban train to Silver Hill, a small historic town thirty minutes outside the city. We walked along the cobblestone streets, visited an antique bookshop, and found an old illustrated atlas from 1950 for just five euros!",
          "შუადღისას ჩემს ბინაში ჩემი ბიძაშვილი მაია მოვიდა და საგარეუბნო მატარებლით გავემგზავრეთ სილვერ-ჰილში — პატარა ისტორიულ ქალაქში, რომელიც ქალაქიდან ოცდაათი წუთის სავალზეა. გავისეირნეთ ქვაფენილიან ქუჩებში, შევედით ძველი წიგნების მაღაზიაში და სულ რაღაც ხუთ ევროდ ვიპოვეთ 1950 წლის ილუსტრირებული ატლასი!"
        ],
        [
          "For late lunch, we sat on the wooden porch of a country café overlooking the apple orchards. We shared a pot of hot ginger tea and ate homemade pumpkin soup with toasted pumpkin seeds. We talked for two hours about our childhood memories and our travel plans for next spring.",
          "გვიანი სადილისთვის დავსხედით სოფლის კაფეს ხის ვერანდაზე, რომელიც ვაშლის ბაღებს გადაჰყურებდა. გავიყავით ერთი ჩაიდანი ცხელი ჯანჯაფილის (კოჭას) ჩაი და მივირთვით სახლში მომზადებული გოგრის კრემ-სუპი მოხალული გოგრის თესლით. ორი საათის განმავლობაში ვსაუბრობდით ბავშვობის მოგონებებსა და მომავალი გაზაფხულის სამოგზაურო გეგმებზე."
        ],
        [
          "We returned to the city at seven o'clock in the evening just as the streetlamps were coming on. Right now, I am sitting in my armchair with a cup of chamomile tea, writing these lines in my notebook. Taking a day away from screens has completely recharged my batteries for Monday!",
          "ქალაქში საღამოს შვიდ საათზე დავბრუნდით, ზუსტად მაშინ, როცა ქუჩის ლამპიონები აინთო. ამ წუთას ვზივარ ჩემს სავარძელში გვირილის ჩაის ფინჯნით და რვეულში ამ სტრიქონებს ვწერ. ეკრანებისგან თავისუფალმა ერთმა დღემ ორშაბათისთვის ენერგიით სრულად ამავსო!"
        ]
      ],
      glossary: [
        "Dear Diary,|ძვირფასო დღიურო,", "without an alarm clock|მაღვიძარას გარეშე", "cinnamon roll|დარიჩინის ფუნთუშა",
        "At noon,|შუადღისას (12:00 საათზე),", "antique bookshop|ანტიკვარული (ძველი) წიგნების მაღაზია", "country café|სოფლის / ქალაქგარეთა კაფე",
        "childhood memories|ბავშვობის მოგონებები", "just as the streetlamps were coming on|ზუსტად მაშინ, როცა ლამპიონები აინთო", "chamomile tea|გვირილის ჩაი", "recharge my batteries|ძალების / ენერგიის სრულად აღდგენა"
      ],
      questions: [
        "Why do people usually write a diary entry at the end of the day using the Past Simple tense?|Because they are recording events that already happened earlier that day (in the morning and afternoon)|Because diary entries are only about future rules|Because the Present Simple is forbidden in notebooks|To give orders to other people",
        "Why did the writer decide to spend the entire Sunday outdoors without a computer?|Because they had worked hard on a university project all week and needed a relaxing break from screens|Because their computer was broken|Because there was a power outage in the city|Because the library was closed",
        "What did the writer do in the morning after waking up at half past eight?|Jogged three kilometres through the park and bought two warm cinnamon rolls at the corner bakery|Stayed in bed until noon|Went to the swimming pool|Cleaned the kitchen",
        "Which time expressions does the writer use to organize the diary entry chronologically from morning to night?|'In the morning,', 'Afterwards,', 'At noon,', 'For late lunch,', and 'Right now,'|'First, Second, Third, Fourth'|'Yesterday, Last year, Next month'|No time words at all",
        "Where did the writer and their cousin Maya go at noon, and how long did the train ride take?|To Silver Hill, a small historic town thirty minutes outside the city|To the seaside, two hours away|To the airport|To a shopping mall in the city centre",
        "What treasure did they find in the antique bookshop for five euros?|An old illustrated atlas from 1950|A gold pocket watch|A Spanish dictionary|A painting of a ship",
        "What did they eat and drink on the wooden porch of the country café?|A pot of hot ginger tea and homemade pumpkin soup with toasted pumpkin seeds|Coffee and chocolate cake|Pizza and lemonade|Roast beef and potatoes",
        "What time did they return to the city in the evening?|At seven o'clock in the evening, just as the streetlamps were coming on|At midnight|At four in the afternoon|At ten at night",
        "Why does the writer switch from Past Simple to Present Continuous ('Right now, I am sitting...') in the final paragraph?|To describe what they are doing at the exact moment of writing the diary entry|Because they forgot the past tense|To talk about next summer|Because it is a grammatical mistake",
        "What does the idiom 'recharged my batteries' mean at the end of the diary entry?|Restored my energy and made me feel fresh and ready for the new week|Bought new batteries for my flashlight|Fixed the battery in my mobile phone|Paid the electricity bill"
      ]
    },
    {
      num: 7, level: "A1",
      icon: "✉️", genre: "სოციალური მიმოწერა",
      title: "თავაზიანი წერილი მეზობელს",
      subtitle: "Writing a Friendly Note to a Neighbour asking for a Favour",
      time: "6 წთ",
      prompt: "დაწერეთ მოკლე, თავაზიანი წერილი მეზობელს, სადაც სთხოვთ მცირე დახმარებას რამდენიმე დღით გამგზავრებისას (მაგ. ყვავილების მორწყვა ან ამანათის აღება).",
      template: "Dear [Neighbour's Name], I am going away to [Place] from [Day] to [Day]. Would you mind doing me a small favour? Could you please [Task 1] and [Task 2]? I have left my spare key [Location]. Thank you so much! Best, [Your Name].",
      paragraphs: [
        [
          "Dear Mrs Higgins, I hope you are keeping well! I am writing this short note because I knocked on your door this morning, but you were out doing your shopping. Tomorrow morning, I am travelling to Edinburgh for چهار days to attend my sister's university graduation ceremony.",
          "ძვირფასო ქალბატონო ჰიგინს, იმედი მაქვს, თავს კარგად გრძნობთ! ამ მოკლე წერილს გწერთ იმიტომ, რომ დღეს დილით თქვენს კარზე დავაკაკუნე, მაგრამ საყიდლებზე იყავით გასული. ხვალ დილით ოთხი დღით მივემგზავრები ედინბურგში ჩემი დის უნივერსიტეტის გამოსაშვებ ცერემონიაზე დასასწრებად."
        ],
        [
          "Would you mind doing me a small favour while I am away from Thursday until Sunday evening? First, the postman is going to deliver a small book parcel for me on Friday afternoon. If the postman rings your bell, could you please sign for the parcel and keep it in your hallway until Sunday?",
          "ხომ არ შეწუხდებით, რომ პატარა სამსახური გამიწიოთ, სანამ ხუთშაბათიდან კვირა საღამომდე გასული ვიქნები? პირველი: პარასკევ ნაშუადღევს ფოსტალიონი ჩემს სახელზე მოიტანს წიგნის პატარა ამანათს. თუ ფოსტალიონი თქვენს ზარს დარეკავს, შეგიძლიათ ხელი მოუწეროთ და ამანათი კვირამდე თქვენს დერეფანში შეინახოთ?"
        ],
        [
          "Second, since the weather will be quite warm this week, could you please water the two pots of red geraniums and the green fern on my balcony on Friday evening? I have already filled the green plastic watering can and left it right next to the balcony door.",
          "მეორე: რადგან ამ კვირაში საკმაოდ თბილი ამინდი იქნება, ხომ ვერ მორწყავდით პარასკევ საღამოს ჩემს აივანზე მდგარ წითელი გერანიუმის (ბალბის) ორ ქოთანსა და მწვანე გვიმრას? მწვანე პლასტმასის სარწყავი უკვე გავავსე წყლით და ზუსტად აივნის კართან დავტოვე."
        ],
        [
          "I have put my spare apartment key inside this envelope with a blue ribbon on it. In case of any emergency with the water pipes or electricity while I am in Scotland, my mobile phone number is written at the bottom of this page, and I will have my phone switched on at all times.",
          "ჩემი ბინის სათადარიგო გასაღები ლურჯი ლენტით ჩავდე ამავე კონვერტში. თუ ჩემი შოტლანდიაში ყოფნისას წყლის მილებთან ან ელექტროენერგიასთან დაკავშირებით რაიმე გადაუდებელი შემთხვევა იქნება, ამ ფურცლის ბოლოში წერია ჩემი მობილურის ნომერი და ტელეფონი მუდმივად ჩართული მექნება."
        ],
        [
          "Please help yourself to the fresh strawberries and peaches in the bowl on my kitchen table when you come in on Friday — otherwise they will spoil before I return! I will bring you a tin of traditional Scottish shortbread biscuits when I get back on Sunday night. Thank you so much for your kindness! Warmly, Oliver (Flat 3B).",
          "გთხოვთ, პარასკევს შემოსვლისას მიირთვათ ახალი მარწყვი და ატამი, რომელიც ჩემი სამზარეულოს მაგიდაზე თასში დევს — წინააღმდეგ შემთხვევაში ჩემს დაბრუნებამდე გაფუჭდება! კვირა საღამოს, როცა დავბრუნდები, ჩამოგიტანთ ტრადიციული შოტლანდიური ფხვიერი ორცხობილის (შორთბრედის) თუნუქის კოლოფს. უღრმესი მადლობა გულისხმიერებისთვის! თბილი სურვილებით, ოლივერი (ბინა 3B)."
        ]
      ],
      glossary: [
        "I hope you are keeping well|იმედი მაქვს, თავს კარგად გრძნობთ", "Would you mind doing me a small favour?|ხომ არ შეწუხდებით, რომ პატარა სამსახური გამიწიოთ (დამეხმაროთ)?", "while I am away|სანამ გასული (წასული) ვიქნები",
        "sign for a parcel|ამანათის ჩაბარებაზე ხელის მოწერა", "water the plants|მცენარეების მორწყვა", "watering can|სარწყავი (ჭურჭელი)",
        "spare key|სათადარიგო გასაღები", "In case of any emergency|ნებისმიერი გადაუდებელი (საგანგებო) შემთხვევის დროს", "Please help yourself to...|გთხოვთ, მიირთვათ (გაუმასპინძლდით საკუთარ თავს)...", "Thank you for your kindness|გმადლობთ გულისხმიერებისთვის/სიკეთისთვის"
      ],
      questions: [
        "Why did Oliver write a note to Mrs Higgins instead of speaking to her in person?|Because he knocked on her door this morning, but she was out doing her shopping|Because his voice was sore|Because Mrs Higgins lives in another city|Because he prefers writing letters",
        "Why is Oliver travelling to Edinburgh for four days?|To attend his sister's university graduation ceremony|To go on a skiing holiday|To start a new job at a bank|To visit a museum",
        "Which polite phrase does Oliver use at the start of Paragraph 2 to ask for help?|'Would you mind doing me a small favour while I am away...?'|'You must help me this weekend.'|'Do this work for me please.'|'I order you to water my plants.'",
        "What is the first favour Oliver asks Mrs Higgins to do on Friday afternoon?|To sign for a small book parcel from the postman and keep it in her hallway until Sunday|To take his dog for a walk in the park|To pay his electricity bill at the post office|To clean his kitchen windows",
        "What is the second favour Oliver asks her to do on Friday evening?|To water the two pots of red geraniums and the green fern on his balcony|To mow the grass in the back garden|To feed his three cats|To cook dinner",
        "Where did Oliver leave the filled green plastic watering can?|Right next to the balcony door|Under the kitchen sink|Outside in the corridor|In the bathroom",
        "What did Oliver put inside the envelope along with his handwritten note?|His spare apartment key with a blue ribbon on it|Twenty euros in cash|His train ticket to Edinburgh|A photograph of his sister",
        "Why did Oliver write his mobile phone number at the bottom of the page?|In case of any emergency with the water pipes or electricity while he is in Scotland|So Mrs Higgins can call him to read the book|Because he forgot his own number|For the postman",
        "Why does Oliver invite Mrs Higgins to take the fresh strawberries and peaches from his kitchen table?|Because otherwise the fruit will spoil before he returns on Sunday night|Because he doesn't like strawberries|Because the fridge is broken|As payment for the rent",
        "What gift does Oliver promise to bring Mrs Higgins from Scotland when he returns?|A tin of traditional Scottish shortbread biscuits|A woollen tartan scarf|A bottle of olive oil|A bouquet of red roses"
      ]
    },
    {
      num: 8, level: "A1",
      icon: "🎓", genre: "სასწავლო იმეილი",
      title: "გაცდენის შესახებ წერილი მასწავლებელს",
      subtitle: "Writing a Polite Absence Email to a University Professor",
      time: "6 წთ",
      prompt: "დაწერეთ თავაზიანი იმეილი მასწავლებელს ან ლექტორს ლექციის გაცდენის შესახებ (მიუთითეთ მიზეზი, როგორ აინაზღაურებთ მასალას და საშინაო დავალების საკითხი).",
      template: "Dear Professor [Surname], I am writing to let you know that I will not be able to attend tomorrow's [Subject] class because [Reason]. I have asked my classmate [Name] to share the lecture notes with me. Sincerely, [Your Name].",
      paragraphs: [
        [
          "Subject: Absence from Tuesday's English Seminar — Group B2 (Elena Rossi). Dear Professor Bennett, I hope this email finds you well. I am writing to inform you that, unfortunately, I will not be able to attend tomorrow morning's ten o'clock English communication seminar.",
          "თემა: სამშაბათის ინგლისურის სემინარის გაცდენა — ჯგუფი B2 (ელენა როსი). ძვირფასო პროფესორო ბენეტ, იმედი მაქვს, კარგად ბრძანდებით. გწერთ, რათა გაცნობოთ, რომ, სამწუხაროდ, ვერ შევძლებ ხვალ დილის ათსაათიან ინგლისური კომუნიკაციის სემინარზე დასწრებას."
        ],
        [
          "Yesterday evening I came down with a high fever and a severe sore throat. This morning I visited the university medical clinic, and the doctor advised me to stay at home and rest for two days so that I do not spread the flu to other students in the classroom.",
          "გუშინ საღამოს მაღალი სიცხე და ყელის ძლიერი ტკივილი დამეწყო. დღეს დილით ვიყავი უნივერსიტეტის სამედიცინო კლინიკაში და ექიმმა მირჩია ორი დღე სახლში დარჩენა და წოლითი რეჟიმის დაცვა, რათა აუდიტორიაში სხვა სტუდენტებს გრიპი არ გადავდო."
        ],
        [
          "I have already completed the written homework assignment for tomorrow's lesson — the two-page essay on 'Environmental Habits in Modern Cities' — and I have attached the PDF document to this email so that I do not miss the submission deadline.",
          "ხვალინდელი გაკვეთილისთვის განკუთვნილი წერითი საშინაო დავალება — ორგვერდიანი ესე თემაზე „გარემოსდაცვითი ჩვევები თანამედროვე ქალაქებში“ — უკვე სრულად შევასრულე და ამ იმეილს დავურთე PDF ფაილის სახით, რათა ჩაბარების ბოლო ვადა არ დავარღვიო."
        ],
        [
          "To make sure I do not fall behind with the course material, I have already spoken to my classmate, Marcus Weber, who promised to share his lecture notes and any handouts with me tomorrow afternoon. Could you please let me know if there are any additional chapters in the workbook that I should study before Thursday's class?",
          "იმისათვის, რომ სასწავლო მასალას არ ჩამოვრჩე, უკვე ვესაუბრე ჩემს კურსელს, მარკუს ვებერს, რომელიც დამპირდა, რომ ხვალ ნაშუადღევს გამიზიარებს ლექციის ჩანაწერებსა და დარიგებულ მასალებს. გთხოვთ მაცნობოთ, ხომ არ არის სამუშაო რვეულში რაიმე დამატებითი თავი, რომელიც ხუთშაბათის ლექციამდე უნდა დავამუშაო?"
        ],
        [
          "I have also attached a scan of my medical certificate from the clinic for the attendance register. Thank you very much for your understanding, and I look forward to returning to class on Thursday morning. Yours sincerely, Elena Rossi (Student ID: 20489).",
          "დასწრების ჟურნალისთვის წერილს ასევე დავურთე კლინიკის მიერ გაცემული სამედიცინო ცნობის სკანირებული ასლი. დიდი მადლობა გაგებისთვის და მოუთმენლად ველი ხუთშაბათ დილით აუდიტორიაში დაბრუნებას. პატივისცემით, ელენა როსი (სტუდენტის ID: 20489)."
        ]
      ],
      glossary: [
        "I hope this email finds you well|იმედი მაქვს, კარგად ბრძანდებით (ფორმალური იმეილის დასაწყისი)", "I will not be able to attend...|ვერ შევძლებ დასწრებას ...-ზე", "come down with a fever|სიცხის მოცემა / გაციების დაწყება",
        "I have attached the PDF document|წერილს დავურთე PDF დოკუმენტი", "submission deadline|დავალების ჩაბარების ბოლო ვადა", "fall behind with the material|სასწავლო მასალაში ჩამორჩენა",
        "lecture notes and handouts|ლექციის ჩანაწერები (კონსპექტი) და დასარიგებელი მასალები", "medical certificate|სამედიცინო ცნობა (ბიულეტენი)", "Thank you for your understanding|გმადლობთ გაგებისთვის/გულისხმიერებისთვის", "Yours sincerely,|პატივისცემით, (ფორმალური წერილის დასასრული)"
      ],
      questions: [
        "How should you address a university professor at the beginning of a formal email?|'Dear Professor Bennett,' (using their title and surname)|'Hey teacher!'|'Hello Bennett,'|'Dear Mr Teacher,'",
        "Why is Elena Rossi unable to attend Tuesday morning's ten o'clock seminar?|Because she came down with a high fever and a severe sore throat, and the doctor advised her to rest for two days|Because she missed her morning train|Because she has a job interview|Because she is on holiday in Italy",
        "Why did the clinic doctor advise Elena not to go to the classroom for two days?|So that she can rest and does not spread the flu to other students|Because the university building is closed|Because there is no heating in the room|Because the exam was cancelled",
        "What has Elena done with her written homework assignment so she doesn't miss the deadline?|She completed the two-page essay and attached the PDF document to her email|She asked the professor to cancel the homework|She sent it by post|She promised to write it next month",
        "Which phrase is used in English emails when you include a file (like a PDF or photo) with your message?|'I have attached the PDF document to this email.'|'I have glued the file on the screen.'|'Look at the box under the letter.'|'I put the paper inside the computer.'",
        "How is Elena making sure she does not 'fall behind' with Tuesday's lesson material?|She asked her classmate Marcus Weber to share his lecture notes and handouts with her|She asked the professor to repeat the whole lecture for her alone|She will skip the chapter completely|She recorded a video",
        "What polite question does Elena ask Professor Bennett in Paragraph 4?|Whether there are any additional chapters in the workbook she should study before Thursday's class|Whether she can get an 'A' without taking the exam|What time the professor eats lunch|Where the library is located",
        "What second document did Elena attach for the official attendance register?|A scan of her medical certificate from the university clinic|A photo of her student ID card|A letter from her mother|A receipt from the pharmacy",
        "When does Elena expect to return to class?|On Thursday morning|Next Monday|In three weeks|Tomorrow afternoon",
        "Why does Elena write her full name, group number (B2), and Student ID at the end of the email?|Because professors teach many students and groups, so clear identification helps them record attendance and homework accurately|Because she wants to change her name|Because it makes the email longer|Because she forgot the professor's name"
      ]
    },
    {
      num: 9, level: "A1",
      icon: "⭐", genre: "მიმოხილვა",
      title: "კაფესა და რესტორნის შეფასების დაწერა",
      subtitle: "Writing an Online Review of a Local Bakery and Café",
      time: "6 წთ",
      prompt: "დაწერეთ კაფეს ან რესტორნის მოკლე ონლაინ-მიმოხილვა (სად მდებარეობს, როგორია გარემო, რა შეუკვეთეთ, როგორი იყო მომსახურება და რამდენ ვარსკვლავს უწერთ).",
      template: "5/5 Stars! Last weekend I visited [Café Name] on [Street]. The atmosphere is [Adjective] and [Adjective]. I ordered [Food/Drink], and it was delicious! The staff were very friendly, and prices are reasonable. I highly recommend this place!",
      paragraphs: [
        [
          "Rating: Five out of Five Stars — The Best Cinnamon Buns and Coffee in Town! Last Saturday morning, my sister and I visited 'The Copper Kettle', a new family-run bakery and café that opened last month on Bridge Street, right opposite the old clock tower.",
          "შეფასება: ხუთი ვარსკვლავი ხუთიდან — საუკეთესო დარიჩინის ფუნთუშები და ყავა ქალაქში! გასულ შაბათ დილით მე და ჩემი და ვესტუმრეთ „სპილენძის ჩაიდანს“ (The Copper Kettle) — ახალ საოჯახო საცხობსა და კაფეს, რომელიც გასულ თვეს გაიხსნა ბრიჯ-სტრიტზე, ზუსტად ძველი საათის კოშკის მოპირდაპირედ."
        ],
        [
          "As soon as you step inside, you are greeted by the wonderful aroma of freshly ground coffee beans and warm vanilla from the kitchen ovens. The interior is bright, cosy, and tastefully decorated with brick walls, wooden tables, soft jazz music, and shelves full of green plants.",
          "როგორც კი შიგნით შეაბიჯებთ, გხვდებათ ახალდაფქული ყავის მარცვლებისა და სამზარეულოს ღუმელებიდან გამომავალი თბილი ვანილის საოცარი სურნელი. ინტერიერი ნათელი, მყუდრო და გემოვნებით მოწყობილია — აგურის კედლებით, ხის მაგიდებით, მშვიდი ჯაზური მუსიკითა და მწვანე მცენარეებით სავსე თაროებით."
        ],
        [
          "For breakfast, I ordered the poached eggs on sourdough toast with avocado and roasted cherry tomatoes, while my sister chose a warm cardamom and cinnamon bun with a cup of flat white coffee. Everything was served on handmade ceramic plates within ten minutes!",
          "საუზმისთვის მე შევუკვეთე პაშირებული კვერცხი ბუნებრივ საფუარზე გამომცხვარ ტოსტზე ავოკადოთი და შემწვარი პატარა პომიდვრებით, ხოლო ჩემმა დამ აირჩია თბილი ილისა და დარიჩინის ფუნთუშა ფინჯან ყავა „ფლეთ უაითთან“ ერთად. ათ წუთში ყველაფერი ხელნაკეთი კერამიკული თეფშებით მოგვიტანეს!"
        ],
        [
          "The food was fresh and full of flavour: the bread crust was crispy, and the cinnamon bun was soft and not too sweet. What impressed us even more was the attentive service. Even though every table was full at ten o'clock, the young waiter smiled, refilled our water jug twice without being asked, and didn't rush us at all.",
          "საკვები იყო უახლესი და არომატული: პურის ქერქი ხრაშუნა იყო, ხოლო დარიჩინის ფუნთუშა — ფუმფულა და ზომიერად ტკბილი. კიდევ უფრო მეტად მოგვხიბლა ყურადღებიანმა მომსახურებამ. მიუხედავად იმისა, რომ ათ საათზე ყველა მაგიდა სავსე იყო, ახალგაზრდა მიმტანი გვიღიმოდა, შეხსენების გარეშე ორჯერ შეგვივსო წყლის დოქი და სულაც არ გვაჩქარებდა."
        ],
        [
          "The prices are very reasonable for the high quality: our entire breakfast for two people cost just sixteen euros! If you want to sit by the window on a weekend morning, I recommend arriving before nine thirty. I highly recommend 'The Copper Kettle' to anyone looking for a quiet place to read, work, or meet friends!",
          "მაღალ ხარისხთან შედარებით ფასები ძალიან მისაღებია: ჩვენი მთლიანი საუზმე ორ პერსონაზე სულ რაღაც თექვსმეტი ევრო დაჯდა! თუ უქმეების დილას ფანჯარასთან დაჯდომა გსურთ, გირჩევთ ათის ნახევრამდე მიხვიდეთ. გულითადად ვუწევ რეკომენდაციას „სპილენძის ჩაიდანს“ ყველასთვის, ვინც ეძებს მშვიდ ადგილს წასაკითხად, სამუშაოდ ან მეგობრებთან შესახვედრად!"
        ]
      ],
      glossary: [
        "Five out of Five Stars|ხუთი ვარსკვლავი ხუთიდან (უმაღლესი შეფასება)", "family-run bakery|საოჯახო საცხობი", "freshly ground coffee|ახალდაფქული ყავა",
        "tastefully decorated|გემოვნებით მოწყობილი / გაფორმებული", "full of flavour|არომატული / გემოთი მდიდარი", "attentive service|ყურადღებიანი მომსახურება",
        "without being asked|შეხსენების / თხოვნის გარეშე", "Prices are very reasonable|ფასები ძალიან მისაღებია (ზომიერია)", "I recommend arriving before...|გირჩევთ მიხვიდეთ ...-მდე", "I highly recommend...|დიდად / გულითადად ვუწევ რეკომენდაციას..."
      ],
      questions: [
        "How are the paragraphs of a good restaurant or café review logically structured?|Paragraph 1: Name & location; Paragraph 2: Atmosphere; Paragraph 3: What we ordered; Paragraph 4: Food quality & service; Paragraph 5: Price & final recommendation|All five paragraphs only list prices of drinks|Starting with the bill and ending with the street name|Writing only one-word sentences",
        "Where is 'The Copper Kettle' bakery and café located, and when did it open?|On Bridge Street, right opposite the old clock tower, and it opened last month|Inside the airport terminal, ten years ago|Behind the hospital on Oak Road|Underneath the train station",
        "Which positive adjectives does the writer use in Paragraph 2 to describe the café's interior?|Bright, cosy, and tastefully decorated|Dark, noisy, and crowded|Cold, empty, and expensive|Small and dirty",
        "What did the writer order for breakfast?|Poached eggs on sourdough toast with avocado and roasted cherry tomatoes|A warm cardamom and cinnamon bun|Pancakes with maple syrup|A cheese sandwich and soup",
        "How quickly did the food arrive, and what was it served on?|Within ten minutes, served on handmade ceramic plates|After forty-five minutes, in paper boxes|In two minutes, on plastic trays|After an hour",
        "How does the writer describe the taste and texture of the bread and the cinnamon bun?|The bread crust was crispy, and the cinnamon bun was soft and not too sweet|The bread was hard and the bun was too salty|Everything was cold|The bun was burnt",
        "What example does the writer give to show that the young waiter provided 'attentive service'?|He smiled, refilled their water jug twice without being asked, and didn't rush them even though the café was full|He gave them free cakes|He played the guitar at their table|He carried their bags home",
        "How much did the entire breakfast for two people cost?|Just sixteen euros|Sixty euros|Thirty-five euros|Five euros",
        "What practical tip does the writer give to readers who want a window table on a weekend morning?|Arrive before nine thirty (9:30 AM)|Book a table a month in advance|Come only on Tuesday nights|Bring your own chairs",
        "Which strong positive phrase does the writer use in the final sentence to endorse the café?|'I highly recommend The Copper Kettle to anyone looking for...'|'This place is okay if you are hungry.'|'Never visit this street.'|'You must go there tomorrow.'"
      ]
    },
    {
      num: 10, level: "A1",
      icon: "🗺️", genre: "მარშრუტის აღწერა",
      title: "სახლამდე მოსასვლელი გზის ინსტრუქცია",
      subtitle: "Writing Clear Step-by-Step Directions from the Station",
      time: "6 წთ",
      prompt: "დაწერეთ მკაფიო, ნაბიჯ-ნაბიჯ ინსტრუქცია მეგობრისთვის, თუ როგორ მოვიდეს რკინიგზის სადგურიდან ან მეტროდან თქვენს სახლამდე.",
      template: "Hi [Name]! Here are the directions to my house from [Station]. First, walk out of the main exit and turn [Left/Right] onto [Street]. Go straight past the [Landmark], cross the street at the traffic lights, and my building is Number [Number] on your [Left/Right].",
      paragraphs: [
        [
          "Hi Sam! I am so excited that you are coming to stay with us this weekend! Since the streets around the old town can be a little confusing on a map, I have written down clear step-by-step directions from the Central Railway Station to my apartment so you can find it easily even without internet.",
          "სალამი, სემ! ძალიან მიხარია, რომ ამ უქმეებზე ჩვენთან სტუმრად ჩამოდიხარ! რადგან ძველი ქალაქის გარშემო ქუჩები რუკაზე შეიძლება ცოტა დამაბნეველი იყოს, ჩამოგიწერე მკაფიო, ნაბიჯ-ნაბიჯ ინსტრუქცია ცენტრალური რკინიგზის სადგურიდან ჩემს ბინამდე, რათა ინტერნეტის გარეშეც ადვილად მოაგნო."
        ],
        [
          "When you get off the train, follow the yellow signs for the 'North Exit — City Centre'. Do not take the South Exit, because that leads to the industrial car park! Walk out through the glass sliding doors into Station Square, where you will see a bronze statue of a horse in the middle.",
          "როდესაც მატარებლიდან ჩამოხვალ, გაჰყევი ყვითელ მაჩვენებლებს წარწერით „ჩრდილოეთი გასასვლელი — ქალაქის ცენტრი“. არ გახვიდე სამხრეთ გასასვლელიდან, რადგან იგი სამრეწველო ავტოსადგომზე გადის! გასრიალდი მინის კარებში და გახვალ სადგურის მოედანზე, რომლის შუაგულშიც დაინახავ ცხენის ბრინჯაოს ქანდაკებას."
        ],
        [
          "Cross the square past the horse statue and turn right onto Victoria Street. Walk straight along Victoria Street for about five minutes. Along the way, you will pass a red brick post office on your left and a large pharmacy with a green cross on your right.",
          "გადაკვეთე მოედანი ცხენის ქანდაკების გავლით და შეუხვიე მარჯვნივ, ვიქტორიას ქუჩაზე. იარე პირდაპირ ვიქტორიას ქუჩაზე დაახლოებით ხუთი წუთის განმავლობაში. გზად მარცხენა მხარეს ჩაუვლი წითელი აგურის ფოსტის შენობას, ხოლო მარჯვენა მხარეს — დიდ აფთიაქს მწვანე ჯვრით."
        ],
        [
          "At the end of Victoria Street, you will reach a set of traffic lights in front of a small stone bridge over the canal. Do not cross the bridge! Instead, turn left at the traffic lights onto Willow Walk, a quiet tree-lined path that runs right alongside the canal water.",
          "ვიქტორიას ქუჩის ბოლოს მიადგები შუქნიშანს, რომელიც არხზე გადებული პატარა ქვის ხიდის წინ დგას. არ გადახვიდე ხიდზე! ამის ნაცვლად, შუქნიშანთან შეუხვიე მარცხნივ „ტირიფების ბილიკზე“ (Willow Walk) — მშვიდ, ხეებით დაჩრდილულ გზაზე, რომელიც პირდაპირ არხის წყლის გასწვრივ მიუყვება."
        ],
        [
          "My building is the third house on your left — Number Six Willow Walk. It is a four-storey cream-coloured building with black iron balconies and two olive trees in wooden pots by the front door. Press button '3A' on the intercom panel, and I will buzz you in! Call me if you get stuck.",
          "ჩემი კორპუსი არის მესამე სახლი შენგან მარცხნივ — „ტირიფების ბილიკის“ ექვსი ნომერი. ეს არის ოთხსართულიანი კრემისფერი შენობა შავი რკინის აივნებითა და სადარბაზოს კართან ხის ქოთნებში ჩარგული ორი ზეთისხილის ხით. დომოფონის პანელზე დააჭირე ღილაკს „3A“ და კარს გაგიღებ! დამირეკე, თუ გზა აგებნა."
        ]
      ],
      glossary: [
        "step-by-step directions|ნაბიჯ-ნაბიჯ გაწერილი გზის ინსტრუქცია", "follow the yellow signs for...|გაჰყევი ყვითელ მაჩვენებლებს ...-ისკენ", "Do not take the South Exit|არ გახვიდე სამხრეთ გასასვლელიდან",
        "sliding doors|მოძრავი (გასაწევი) კარები", "Along the way, you will pass...|გზად ჩაუვლი...", "on your left / on your right|შენგან მარცხნივ / შენგან მარჯვნივ",
        "tree-lined path|ხეებით გაწყობილი (ჩრდილიანი) ბილიკი", "right alongside the canal|ზუსტად არხის გასწვრივ", "intercom panel|დომოფონის პანელი (სადარბაზოს კართან)", "I will buzz you in|ღილაკით კარს გაგიღებ (შემოგიშვებ)"
      ],
      questions: [
        "Which verb form is primarily used when writing step-by-step directions ('Walk out...', 'Cross the square...', 'Turn right...')?|The Imperative form (base verb without 'you')|The Past Continuous form|Question forms only|Passive verbs",
        "Why did the writer write down these directions for Sam?|Because the streets around the old town can be confusing on a map, and this way Sam can find it even without internet|Because Sam doesn't know how to read maps|Because there are no street names in the city|Because Sam is driving a truck",
        "Which exit must Sam take at the Central Railway Station, and why shouldn't he take the other one?|Take the 'North Exit — City Centre', because the South Exit leads to the industrial car park|Take the South Exit, because the North Exit is locked|Take the roof exit|Take the underground metro tunnel",
        "What landmark will Sam see in the middle of Station Square?|A bronze statue of a horse|A tall glass fountain|A clock tower|A red telephone box",
        "Which street should Sam turn right onto after crossing Station Square?|Victoria Street|Willow Walk|Bridge Street|Linden Street",
        "What two buildings will Sam pass along Victoria Street to know he is going the right way?|A red brick post office on his left and a large pharmacy with a green cross on his right|A cinema and a supermarket|A school and a hospital|A hotel and a museum",
        "What important warning does the writer give when Sam reaches the small stone bridge over the canal?|'Do not cross the bridge! Instead, turn left at the traffic lights onto Willow Walk.'|'Cross the bridge and turn right.'|'Take a boat across the canal.'|'Go down the stairs under the bridge.'",
        "What is Willow Walk like?|A quiet tree-lined path that runs right alongside the canal water|A busy six-lane highway|A steep mountain staircase|An indoor shopping arcade",
        "What is the exact address and appearance of the writer's building?|Number Six Willow Walk (third house on the left) — a four-storey cream-coloured building with black iron balconies and two olive trees by the door|Number Ten Victoria Street — a red brick house|Number One Station Square|A wooden cottage with a green roof",
        "What should Sam press on the intercom panel at the front door?|Button '3A'|Button '10B'|The red alarm bell|Code 1-2-3-4"
      ]
    },
    {
      num: 11, level: "A1",
      icon: "🍳", genre: "რეცეპტი",
      title: "მარტივი კულინარიული რეცეპტის დაწერა",
      subtitle: "Writing a Clear Recipe for Golden Banana Pancakes",
      time: "6 წთ",
      prompt: "დაწერეთ თქვენი საყვარელი მარტივი კერძის ან საუზმის რეცეპტი (მოსამზადებელი დრო, ინგრედიენტების ზუსტი რაოდენობა და მომზადების თანმიმდევრული ნაბიჯები).",
      template: "Recipe: [Dish Name] (Serves 2, Time: 15 mins). Ingredients: [List of ingredients]. First, mix [Ingredient 1] and [Ingredient 2] in a bowl. Next, heat a pan and cook for [Number] minutes. Serve warm with [Topping]!",
      paragraphs: [
        [
          "Recipe Title: Fluffy Sunday Banana Pancakes (Preparation Time: 10 minutes | Cooking Time: 10 minutes | Serves: 2 people). Hi Kate! Yesterday you asked me for my Sunday pancake recipe, so I have written down the exact ingredients and steps for you. Even a beginner can make them in twenty minutes!",
          "რეცეპტის სათაური: ფუმფულა საკვირაო ბანანის ბლინები (მომზადების დრო: 10 წუთი | შეწვის დრო: 10 წუთი | ულუფა: 2 პერსონა). სალამი, ქეით! გუშინ მთხოვე ჩემი საკვირაო ბლინების რეცეპტი, ამიტომ ზუსტი ინგრედიენტები და მომზადების ნაბიჯები ჩამოგიწერე. დამწყებსაც კი შეუძლია მათი მომზადება ოც წუთში!"
        ],
        [
          "First, gather your ingredients on the kitchen counter so everything is ready: two ripe bananas (the ones with brown spots on the skin are the sweetest!), two large eggs, one hundred and fifty grams of flour, one hundred millilitres of milk, one teaspoon of baking powder, a pinch of salt, and a little butter for the pan.",
          "პირველ რიგში, სამზარეულოს დახლზე მოიმარაგე ინგრედიენტები, რათა ყველაფერი ხელთ გქონდეს: ორი მწიფე ბანანი (ყავისფერწინწკლებიანი ქერქით ყველაზე ტკბილია!), ორი დიდი კვერცხი, ას ორმოცდაათი გრამი ფქვილი, ასი მილილიტრი რძე, ერთი ჩაის კოვზი გამაფხვიერებელი, მწიკვი მარილი და ცოტაოდენი კარაქი ტაფისთვის."
        ],
        [
          "Step One: Peel the two ripe bananas, put them into a large mixing bowl, and mash them thoroughly with a fork until they form a smooth paste. Next, crack the two eggs into the bowl, pour in the milk, and whisk everything together for one minute.",
          "ნაბიჯი პირველი: გაფცქვენი ორი მწიფე ბანანი, მოათავსე დიდ ჯამში და ჩანგლით კარგად დასრისე, სანამ ერთგვაროვან ფაფისებურ მასას არ მიიღებ. შემდეგ ჯამში ჩაახალე ორი კვერცხი, დაასხი რძე და ყველაფერი ერთად ათქვიფე ერთი წუთის განმავლობაში."
        ],
        [
          "Step Two: In a separate small bowl, stir the flour, the baking powder, and the pinch of salt together, and then gently fold the dry ingredients into the wet banana mixture with a wooden spoon. Do not overmix the batter — a few small lumps are completely fine and will keep the pancakes fluffy!",
          "ნაბიჯი მეორე: ცალკე პატარა ჯამში ერთმანეთში აურიე ფქვილი, გამაფხვიერებელი და მწიკვი მარილი, შემდეგ კი ხის კოვზით მშრალი ინგრედიენტები ფრთხილად შეურიე თხევად ბანანის მასას. ცომს ზედმეტად დიდხანს ნუ მოურევ — რამდენიმე პატარა კოშტის დარჩენა სრულიად ნორმალურია და ბლინებს სირბილეს შეუნარჩუნებს!"
        ],
        [
          "Step Three: Heat a non-stick frying pan over medium heat and melt half a teaspoon of butter. Pour two tablespoons of batter into the pan for each pancake. Cook for two minutes until tiny bubbles appear on the surface, flip them over with a spatula, and cook for one more minute until golden brown. Serve warm with honey and fresh berries!",
          "ნაბიჯი მესამე: გაახურე უმიწვავი ტაფა საშუალო ცეცხლზე და გაადნე ნახევარი ჩაის კოვზი კარაქი. თითოეული ბლინისთვის ტაფაზე დაასხი ორი სუფრის კოვზი ცომი. შეწვი ორი წუთი, სანამ ზედაპირზე პატარა ბუშტუკები არ გაჩნდება, გადააბრუნე ნიჩბით და შეწვი კიდევ ერთი წუთი ოქროსფერ შეფერილობამდე. მიირთვი თბილი, თაფლთან და ცოცხალ კენკრასთან ერთად!"
        ]
      ],
      glossary: [
        "Preparation Time / Cooking Time|მომზადების დრო / შეწვის (მოხარშვის) დრო", "Serves: 2 people|ულუფა: 2 პერსონაზე", "ripe banana|მწიფე ბანანი",
        "baking powder|ცომის გამაფხვიერებელი", "mash with a fork|ჩანგლით დასრესა (პიურედ ქცევა)", "whisk together|ერთად ათქვეფა",
        "batter|თხევადი ცომი (ბლინებისთვის)", "non-stick frying pan|უმიწვავი (ტეფლონის) ტაფა", "over medium heat|საშუალო ცეცხლზე", "flip over with a spatula|სამზარეულოს ნიჩბით გადაბრუნება"
      ],
      questions: [
        "What three pieces of quick summary information are written right under the recipe title?|Preparation time (10 mins), Cooking time (10 mins), and how many people it serves (2 people)|The price of the stove, the name of the supermarket, and the date|The history of bananas|A list of restaurants in town",
        "Why does the recipe recommend using ripe bananas with brown spots on the skin?|Because they are the sweetest and easiest to mash|Because green bananas are poisonous|Because brown bananas are heavier|Because they change the colour to red",
        "How much flour, milk, and baking powder are needed for two people?|150 grams of flour, 100 millilitres of milk, and 1 teaspoon of baking powder|1 kilogram of flour and 2 litres of milk|50 grams of flour and no milk|500 grams of sugar",
        "What is the first action in 'Step One' after peeling the bananas?|Put them into a large mixing bowl and mash them thoroughly with a fork|Boil them in water for twenty minutes|Cut them into cubes and freeze them|Fry the whole bananas in oil",
        "Which kitchen verbs are used in Step One for adding eggs, milk, and mixing them?|'crack' the eggs, 'pour in' the milk, and 'whisk' everything together|'break', 'drop', and 'shake'|'slice', 'peel', and 'bake'|'roast' and 'grill'",
        "Why does the writer warn 'Do not overmix the batter' in Step Two?|Because leaving a few small lumps keeps the pancakes light and fluffy|Because overmixing breaks the wooden spoon|Because the batter will turn into bread|Because it takes too much time",
        "What level of heat should you use for the non-stick frying pan in Step Three?|Medium heat|The highest possible heat so it smokes|Cold without turning on the stove|Inside an oven at 250 degrees",
        "How do you know when the pancake is ready to be flipped over after two minutes?|When tiny bubbles appear on the top surface of the pancake|When black smoke fills the kitchen|When the butter turns blue|After twenty minutes",
        "How long do you cook the second side of the pancake after flipping it with a spatula?|For one more minute until golden brown|For ten minutes|For five seconds|For half an hour",
        "How does the writer recommend serving the finished pancakes?|Warm, with honey and fresh berries|Cold from the fridge with salt|In a bowl of soup|With garlic and olive oil"
      ]
    },
    {
      num: 12, level: "A1",
      icon: "🔍", genre: "განცხადება",
      title: "განცხადება დაკარგული ნივთის შესახებ",
      subtitle: "Writing a 'Lost Item' Notice for a Community Board",
      time: "6 წთ",
      prompt: "დაწერეთ მკაფიო განცხადება დაკარგული ნივთის შესახებ საინფორმაციო დაფისთვის (რა დაიკარგა, სად და როდის, ნივთის ზუსტი აღწერა და საკონტაქტო ნომერი).",
      template: "LOST: [Item Name]! On [Day] at [Time], I accidentally left my [Colour/Material Item] near [Location]. It contains [Contents]. It has great sentimental value. If found, please call [Name] at [Phone Number]. Reward offered!",
      paragraphs: [
        [
          "LOST: Small Brown Leather Satchel Bag — Reward Offered! Yesterday afternoon, Thursday the twelfth of November, between four o'clock and four thirty, I accidentally left my small shoulder bag on a wooden bench near the duck pond in Riverside Park.",
          "დაიკარგა: ყავისფერი ტყავის პატარა მხარზე გადასაკიდი ჩანთა — მპოვნელი დასაჩუქრდება! გუშინ ნაშუადღევს, ხუთშაბათს, თორმეტ ნოემბერს, ოთხიდან ხუთის ნახევრამდე, რივერსაიდის პარკში, იხვების ტბორთან მდგარ ხის სკამზე შემთხვევით დამრჩა ჩემი პატარა ჩანთა."
        ],
        [
          "I was sitting on the third bench to the left of the small wooden bridge, tying my dog's leash, when it started to rain suddenly. In my hurry to get home before the downpour, I stood up and walked away without picking up my bag from the bench.",
          "ვიჯექი პატარა ხის ხიდიდან მარცხნივ მესამე სკამზე და ჩემი ძაღლის საბელს ვკრავდი, როდესაც უეცრად წვიმა დაიწყო. თავსხმა წვიმამდე სახლში მისვლის სიჩქარეში ფეხზე წამოვდექი და ისე წამოვედი, რომ სკამიდან ჩანთის აღება დამავიწყდა."
        ],
        [
          "Here is a detailed description of the bag: it is a vintage, chestnut-brown leather satchel measuring about twenty-five centimetres wide, with a brass buckle on the front flap and a long adjustable shoulder strap. There is a small silver keychain shaped like a sailboat attached to the side ring.",
          "გთავაზობთ ჩანთის დეტალურ აღწერას: ეს არის ვინტაჟური, წაბლისფერი ტყავის ჩანთა, სიგანეში დაახლოებით ოცდახუთი სანტიმეტრი, წინა სარქველზე თითბრის (მოყვითალო ლითონის) ბალთითა და მხარზე გადასაკიდი გრძელი რეგულირებადი ღვედით. გვერდითა რგოლზე მიმაგრებული აქვს იალქნიანი ნავის ფორმის პატარა ვერცხლისფერი საკიდი (ბრელოკი)."
        ],
        [
          "There is no cash or bank card inside the bag, as I had my wallet in my coat pocket. However, the bag contains three items that are extremely important to me: my reading glasses in a green hard case, a black notebook filled with my university lecture notes, and an old silver pocket watch that belonged to my late grandfather.",
          "ჩანთაში არ დევს ნაღდი ფული ან საბანკო ბარათი, რადგან საფულე ქურთუკის ჯიბეში მედო. თუმცა, ჩანთაში არის ჩემთვის უაღრესად მნიშვნელოვანი სამი ნივთი: ჩემი საკითხავი სათვალე მწვანე მყარ ბუდეში, უნივერსიტეტის ლექციების კონსპექტებით სავსე შავი რვეული და ძველი ვერცხლის ჯიბის საათი, რომელიც ჩემს გარდაცვლილ ბაბუას ეკუთვნოდა."
        ],
        [
          "Both the leather bag and the pocket watch have immense sentimental value to my family. If you found this bag in the park or handed it in to the park ranger's office, please call or text me at any hour on 0789-442-910 (Arthur). I am offering a fifty-euro reward to say thank you!",
          "როგორც ტყავის ჩანთას, ისე ჯიბის საათს ჩემი ოჯახისთვის უდიდესი სენტიმენტალური (სახსოვარი) ღირებულება აქვს. თუ ეს ჩანთა პარკში იპოვეთ ან პარკის დაცვის ოფისში ჩააბარეთ, გთხოვთ დღე-ღამის ნებისმიერ დროს დამირეკოთ ან მომწეროთ ნომერზე: 0789-442-910 (არტური). მადლობის ნიშნად მპოვნელს ვთავაზობ ორმოცდაათი ევროს ჯილდოს!"
        ]
      ],
      glossary: [
        "LOST: ... — Reward Offered!|დაიკარგა: ... — მპოვნელი დასაჩუქრდება!", "accidentally left|შემთხვევით დამრჩა", "in my hurry|სიჩქარეში / ნაჩქარევად",
        "detailed description|დეტალური აღწერა", "brass buckle|თითბრის ბალთა (შესაკრავი)", "adjustable shoulder strap|მხარზე გადასაკიდი რეგულირებადი ღვედი",
        "keychain shaped like a...|...-ის ფორმის ბრელოკი (საკიდი)", "reading glasses|საკითხავი სათვალე", "sentimental value|სენტიმენტალური (სახსოვარი/ემოციური) ღირებულება", "hand in to the office|ოფისში / ბიუროში ჩაბარება"
      ],
      questions: [
        "Why should a 'Lost Item' notice begin with a bold capital heading like 'LOST: Small Brown Leather Satchel Bag'?|So passers-by immediately see what the notice is about from a distance|Because lowercase letters are not allowed on park boards|To make the paper heavier|To test the printer ink",
        "When and where did Arthur accidentally leave his bag?|Yesterday afternoon (Thursday 12th November) between 4:00 and 4:30 PM, on a bench near the duck pond in Riverside Park|On Monday morning on a city bus|Last week at the university library|At the supermarket cash desk",
        "Why did Arthur walk away from the bench without picking up his bag?|Because it started to rain suddenly while he was tying his dog's leash, and he hurried home before the downpour|Because someone called his name|Because he fell asleep on the bench|Because his dog ran after a cat",
        "In which order should adjectives be written before a noun in English ('a small brown leather bag')?|Size first, then Colour, then Material ('small brown leather bag')|Material first, then Colour, then Size ('leather brown small bag')|Noun first, then adjectives|Alphabetical order",
        "What special details on the outside of the bag make it easy to identify?|A brass buckle on the front flap, a long strap, and a small silver keychain shaped like a sailboat on the side ring|Two red wheels and a yellow ribbon|A painted picture of a dog|A broken black zipper",
        "Why isn't there any cash or bank card inside the lost bag?|Because Arthur had his wallet in his coat pocket|Because he never uses money|Because he left his wallet at home|Because someone took the wallet",
        "What three important items ARE inside the bag?|Reading glasses in a green hard case, a black notebook with lecture notes, and an old silver pocket watch|A laptop, an umbrella, and a sandwich|A camera, a passport, and keys|Shoes and a winter hat",
        "What does it mean that the bag and pocket watch have 'immense sentimental value'?|They are emotionally precious family keepsakes (belonging to his late grandfather) that cannot be replaced with money|They cost a million euros at a bank|They are made of pure diamond|They are brand-new from a shop",
        "Where might a finder have handed the bag in if they didn't take it home?|To the park ranger's office|To the airport baggage desk|To a hotel reception|To the hospital",
        "How much reward is Arthur offering to thank the person who returns his bag?|A fifty-euro reward|A five-euro reward|Five hundred euros|A free bicycle"
      ]
    },
    {
      num: 13, level: "A1",
      icon: "🎁", genre: "სამადლობელი წერილი",
      title: "სამადლობელი წერილი საჩუქრისთვის",
      subtitle: "Writing a Warm Thank-You Email for a Birthday Present",
      time: "6 წთ",
      prompt: "დაწერეთ თბილი სამადლობელი წერილი ნათესავს ან მეგობარს მიღებული საჩუქრისთვის (რა მოგეწონათ საჩუქარში, როგორ იყენებთ მას და მოიკითხეთ ადრესატი).",
      template: "Dear [Name], Thank you so much for the wonderful [Gift] you sent me for my birthday! The [Colour/Detail] is perfect, and I am already using it to [Use]. It was so thoughtful of you! Hope to see you soon. Love, [Your Name].",
      paragraphs: [
        [
          "Dear Aunt Sarah and Uncle Peter, I hope you are both well and enjoying the sunny autumn weather in Brighton! I am writing to say a huge thank you for the wonderful birthday parcel that arrived in the post this morning, and for the lovely card with your kind wishes.",
          "ძვირფასო დეიდა სარა და ბიძია პიტერ, იმედი მაქვს, ორივენი კარგად ხართ და ბრაიტონში მზიანი შემოდგომის ამინდით ტკბებით! გწერთ, რათა უდიდესი მადლობა გადაგიხადოთ დაბადების დღის შესანიშნავი ამანათისთვის, რომელიც დღეს დილით ფოსტით ჩამოვიდა, და მშვენიერი მისალოცი ბარათისთვის თქვენი კეთილი სურვილებით."
        ],
        [
          "When I opened the wrapping paper and saw the dark green woollen sweater and the water-colour painting set, I was absolutely delighted! Aunt Sarah, how did you guess that forest green is my favourite colour? The sweater fits me as if it were tailor-made, and the wool is so soft and warm.",
          "როდესაც შესაფუთი ქაღალდი გავხსენი და დავინახე მუქი მწვანე შალის სვიტერი და აკვარელის სახატავი ნაკრები, აღფრთოვანებას ვერ ვმალავდი! დეიდა სარა, როგორ გამოიცანით, რომ ტყისფერი მწვანე ჩემი საყვარელი ფერია? სვიტერი ისე ზუსტად მადგას, თითქოს ჩემზეა შეკერილი, შალი კი საოცრად რბილი და თბილია."
        ],
        [
          "I have already worn the sweater this afternoon when I walked to the university library, and two of my friends complimented me on it! Since the mornings here in the north are getting quite chilly now, I know I will be wearing it almost every week this winter.",
          "დღეს ნაშუადღევს, როდესაც უნივერსიტეტის ბიბლიოთეკაში წავედი, სვიტერი უკვე მეცვა და ჩემმა ორმა მეგობარმა შემიქო! რადგან აქ, ჩრდილოეთში, დილაობით უკვე საკმაოდ აგრილდა, ვიცი, რომ ამ ზამთარს მას თითქმის ყოველ კვირას ჩავიცვამ."
        ],
        [
          "The twenty-four-colour watercolour box and the wooden brushes from Uncle Peter are also a fantastic gift. My old paintbox was almost empty, and I was planning to buy new brushes next month for my weekend sketching club! This Sunday, I am taking the new set to the botanical garden to paint the autumn trees.",
          "ბიძია პიტერის გამოგზავნილი ოცდაოთხფერიანი აკვარელის კოლოფი და ხის ფუნჯებიც ფანტასტიკური საჩუქარია. ჩემი ძველი საღებავების კოლოფი თითქმის დაცლილი იყო და მომავალ თვეს შაბათ-კვირის ხატვის კლუბისთვის ახალი ფუნჯების ყიდვას ვაპირებდი! ამ კვირა დღეს ახალი ნაკრები მიმაქვს ბოტანიკურ ბაღში შემოდგომის ხეების დასახატად."
        ],
        [
          "Thank you both again for being so thoughtful and generous! As soon as I finish my first watercolour landscape on Sunday, I will frame it and send it to you for your living room wall. I cannot wait to visit you in Brighton during the Christmas holidays! With lots of love, Mia.",
          "კიდევ ერთხელ გიხდით მადლობას ორივეს ასეთი ყურადღებისა და ხელგაშლილობისთვის! როგორც კი კვირას ჩემს პირველ აკვარელის პეიზაჟს დავასრულებ, ჩარჩოში ჩავსვამ და თქვენი მისაღები ოთახის კედლისთვის გამოგიგზავნით. ერთი სული მაქვს, როდის გესტუმრებით ბრაიტონში საშობაო არდადეგებზე! დიდი სიყვარულით, მია."
        ]
      ],
      glossary: [
        "say a huge thank you for...|უდიდესი მადლობის გადახდა ...-ისთვის", "wrapping paper|საჩუქრის შესაფუთი ქაღალდი", "I was absolutely delighted!|აღფრთოვანებული / უზომოდ გახარებული დავრჩი!",
        "watercolour painting set|აკვარელის (წყლის საღებავების) სახატავი ნაკრები", "compliment someone on...|ვინმესთვის რაიმეს შექება (კომპლიმენტის თქმა)", "getting quite chilly|საკმაოდ აგრილდა (სუსხი შემოიპარა)",
        "thoughtful and generous|ყურადღებიანი და ხელგაშლილი (უხვი)", "frame a picture|სურათის ჩარჩოში ჩასმა", "I cannot wait to visit you|ერთი სული მაქვს, როდის გესტუმრებით", "Christmas holidays|საშობაო არდადეგები"
      ],
      questions: [
        "What makes a thank-you letter for a gift feel genuinely warm and personal?|Naming the specific gifts, explaining why you love them, and describing how you are already using them|Writing only 'Thanks for the box' in one line|Asking how much money the gift cost|Listing other gifts that you wanted instead",
        "Where do Aunt Sarah and Uncle Peter live, and how did the birthday gift reach Mia?|They live in Brighton, and the parcel arrived in the post this morning|They live in Edinburgh and brought it by car|They live next door|They sent an online gift card by email",
        "What two birthday presents were inside the parcel?|A dark green woollen sweater and a 24-colour watercolour painting set with wooden brushes|A winter coat and a camera|A pair of shoes and a dictionary|A box of chocolates and a watch",
        "Why was the dark green sweater such a great choice for Mia?|Because forest green is her favourite colour, it fits her perfectly, and the mornings in the north are getting chilly|Because green is her university uniform|Because she lost her coat yesterday|Because she wants to give it to her friend",
        "Where did Mia wear the new sweater this afternoon?|When she walked to the university library (where two friends complimented her on it)|To a swimming pool|To a restaurant dinner|To a cinema",
        "Why was Uncle Peter's watercolour set and brushes so timely for Mia?|Because her old paintbox was almost empty, and she was planning to buy new brushes for her weekend sketching club|Because she had never painted in her life|Because she teaches art at a primary school|Because she needed to paint her bedroom walls",
        "Where is Mia taking her new watercolour set this Sunday?|To the botanical garden to paint the autumn trees|To the beach in Brighton|To the mountain peak|To the museum",
        "What does the adjective 'thoughtful' mean when thanking someone for a gift?|Showing careful attention to what the other person truly likes and needs|Thinking about mathematics all day|Being quiet and shy|Spending a lot of time reading",
        "What does Mia promise to send her aunt and uncle once she finishes her first landscape on Sunday?|She will frame the watercolour painting and send it to them for their living room wall|She will send them a box of apples|She will send the brushes back|She will send a postcard from Spain",
        "When is Mia planning to visit Aunt Sarah and Uncle Peter in Brighton?|During the Christmas holidays|Tomorrow morning|Next August|In two years"
      ]
    },
    {
      num: 14, level: "A1",
      icon: "📝", genre: "ანკეტა და ფორმა",
      title: "მოკლე ბიოგრაფია და განაცხადი კლუბის ანკეტისთვის",
      subtitle: "Writing a Personal Statement for a Hiking and Nature Club Form",
      time: "6 წთ",
      prompt: "შეავსეთ კლუბში ან მოხალისეთა გუნდში გასაწევრიანებელი სამოტივაციო ანკეტა (პირადი მონაცემები, თქვენი გამოცდილება, უნარები და რატომ გსურთ გაწევრიანება).",
      template: "Applicant Name: [Full Name]. Reason for Joining: I would like to join the [Club Name] because I love [Interest]. Experience & Skills: I have experience in [Skill 1] and [Skill 2]. Availability: I am free on [Days].",
      paragraphs: [
        [
          "Application Form — The Mountain Pine Hiking & Conservation Club. Full Name: Thomas Edward Grant. Date of Birth: 12th March 1999. Occupation: Junior Civil Engineer. Emergency Contact: Helen Grant (Mother) — Phone: 07700-900518.",
          "განაცხადის ფორმა — მთის ლაშქრობისა და ბუნების დაცვის კლუბი „მთის ფიჭვი“. სრული სახელი: თომას ედვარდ გრანტი. დაბადების თარიღი: 1999 წლის 12 მარტი. საქმიანობა: უმცროსი სამოქალაქო ინჟინერი. საკონტაქტო პირი საგანგებო შემთხვევისას: ჰელენ გრანტი (დედა) — ტელ.: 07700-900518."
        ],
        [
          "Section 1 — Why would you like to join our club? Since moving to this city six months ago for my engineering job, I have been looking for a friendly community of people who love the outdoors. I would like to join the Mountain Pine Club to explore the northern national parks on weekends and help maintain the forest trails.",
          "ნაწილი 1 — რატომ გსურთ ჩვენს კლუბში გაწევრიანება? მას შემდეგ, რაც ექვსი თვის წინ საინჟინრო სამსახურის გამო ამ ქალაქში გადმოვედი, ვეძებ ბუნების მოყვარულ ადამიანთა მეგობრულ გუნდს. მსურს შევუერთდე კლუბ „მთის ფიჭვს“, რათა შაბათ-კვირას დავათვალიერო ჩრდილოეთის ეროვნული პარკები და მონაწილეობა მივიღო ტყის ბილიკების მოვლაში."
        ],
        [
          "Section 2 — Previous Hiking Experience and Fitness Level: I am in good physical health and exercise three times a week. I run five kilometres every Wednesday and Sunday, and over the past तीन summers I have completed ten full-day hikes of fifteen to twenty kilometres in the Scottish Highlands.",
          "ნაწილი 2 — ლაშქრობის წინა გამოცდილება და ფიზიკური მომზადება: ვარ კარგ ფიზიკურ ფორმაში და კვირაში სამჯერ ვვარჯიშობ. ყოველ ოთხშაბათსა და კვირას დავრბივარ ხუთ კილომეტრს, ხოლო გასული სამი ზაფხულის განმავლობაში შოტლანდიის მთიანეთში გავიარე თხუთმეტიდან ოც კილომეტრამდე სიგრძის ათი ერთდღიანი მარშრუტი."
        ],
        [
          "Section 3 — Practical Skills and Equipment: I own all required four-season hiking equipment, including waterproof boots, a forty-litre backpack, a two-person tent, and a warm sleeping bag. In addition, I completed a two-day Red Cross Wilderness First Aid course last year, and I know how to read paper topographic maps and use a compass.",
          "ნაწილი 3 — პრაქტიკული უნარები და აღჭურვილობა: მაქვს ყველა საჭირო ოთხსეზონიანი სამთო აღჭურვილობა, მათ შორის წყალგაუმტარი ფეხსაცმელი, ორმოცლიტრიანი ზურგჩანთა, ორადგილიანი კარავი და თბილი საძილე ტომარა. გარდა ამისა, გასულ წელს გავიარე წითელი ჯვრის ორდღიანი პირველადი სამედიცინო დახმარების კურსი და ვიცი ქაღალდის ტოპოგრაფიული რუკების კითხვა და კომპასის გამოყენება."
        ],
        [
          "Section 4 — Availability and Contribution: I am completely free every Saturday and Sunday, and I have a five-seat estate car with a roof rack, so I would be happy to drive three or four club members from the city centre to the mountain trailheads! Signature: Thomas E. Grant.",
          "ნაწილი 4 — თავისუფალი დრო და წვლილი: სრულიად თავისუფალი ვარ ყოველ შაბათსა და კვირას, და მყავს ხუთადგილიანი უნივერსალის ტიპის ავტომობილი სახურავის საბარგულით, ამიტომ სიამოვნებით წავიყვან კლუბის სამ ან ოთხ წევრს ქალაქის ცენტრიდან მთის ბილიკების დასაწყისამდე! ხელმოწერა: თომას ე. გრანტი."
        ]
      ],
      glossary: [
        "Application Form|განაცხადის ფორმა / ანკეტა", "Date of Birth (DOB)|დაბადების თარიღი", "Occupation|საქმიანობა / პროფესია",
        "Emergency Contact|საკონტაქტო პირი საგანგებო შემთხვევისას", "maintain the trails|ბილიკების მოვლა / წესრიგში შენარჩუნება", "fitness level|ფიზიკური მომზადების დონე",
        "First Aid course|პირველადი სამედიცინო დახმარების კურსი", "topographic map|ტოპოგრაფიული (რელიეფური) რუკა", "Availability|ხელმისაწვდომობა / თავისუფალი დრო", "roof rack|მანქანის სახურავის საბარგული"
      ],
      questions: [
        "What does the heading 'Occupation' mean on an official registration or application form?|Your job or profession (for example, 'Junior Civil Engineer')|Your home street address|Your favourite hobby|Your nationality",
        "Why do sports and outdoor clubs always ask for an 'Emergency Contact' on their registration form?|So the club leader knows which family member to call immediately if an accident or medical emergency happens|To send advertisements to your relatives|To check if you have a telephone|To invite your mother to every meeting",
        "When did Thomas Grant move to this city, and why does he want to join the Mountain Pine Club?|He moved six months ago for his engineering job, and wants to meet outdoor lovers, explore national parks, and help maintain trails|He was born in the city and wants to win a running prize|He wants to sell hiking boots to members|He needs a place to sleep",
        "How does Thomas demonstrate his fitness level in Section 2?|He exercises three times a week, runs 5 km every Wednesday and Sunday, and has completed ten 15–20 km hikes in the Scottish Highlands|He says he likes watching sports on television|He says he walked to the shop once last year|He says he owns a car",
        "What hiking gear does Thomas already own?|Waterproof boots, a 40-litre backpack, a two-person tent, and a warm sleeping bag|Only a pair of summer sandals and an umbrella|A bicycle and a canoe|Skis and ice skates",
        "What useful safety training did Thomas complete last year?|A two-day Red Cross Wilderness First Aid course|A cooking course at a restaurant|A Spanish language course|A computer programming course",
        "What navigation skills does Thomas have besides using a phone?|He knows how to read paper topographic maps and use a compass|He navigates by the stars at night|He asks farmers along the road|He follows birds",
        "What does the heading 'Availability' refer to on a club or job form?|The days and hours when you are free to participate|How much money you have in the bank|How tall you are|How many languages you speak",
        "How does Thomas offer to help other club members on weekend trips in Section 4?|He has a five-seat estate car with a roof rack and offers to drive three or four members from the city centre to the trailheads|He offers to buy everyone new boots|He offers to cook dinner at his apartment|He offers to pay the club's rent",
        "What is a 'trailhead' mentioned in the final sentence?|The starting point where a mountain hiking trail begins|The highest peak of a mountain|A hat worn while walking|A map of a forest"
      ]
    },
    {
      num: 15, level: "A1",
      icon: "📅", genre: "გეგმები და მიზნები",
      title: "უქმეების გეგმებისა და მიზნების ჩამოწერა",
      subtitle: "Writing a Personal Weekend Plan and Monthly Goals",
      time: "6 წთ",
      prompt: "დაწერეთ თქვენი მომავალი შაბათ-კვირის ან თვის სამოქმედო გეგმა (გამოიყენეთ 'be going to' და 'will' მომავალი გეგმებისა და მიზნების გადმოსაცემად).",
      template: "My Plan for This Weekend: On Saturday morning, I am going to [Task 1] and [Task 2]. In the afternoon, I am meeting [Person] to [Activity]. On Sunday, I will [Relaxing Activity] so I feel ready for Monday!",
      paragraphs: [
        [
          "Writing down my weekend schedule and monthly goals on Friday evening is a habit that helps me stay organized and make the most of my free time! Instead of wasting Saturday morning wondering what to do, having a clear written list gives me a great sense of purpose.",
          "პარასკევ საღამოს შაბათ-კვირის განრიგისა და თვის მიზნების ფურცელზე ჩამოწერა არის ჩვევა, რომელიც მეხმარება ორგანიზებულობის შენარჩუნებასა და თავისუფალი დროის ნაყოფიერად გამოყენებაში! ნაცვლად იმისა, რომ შაბათი დილა იმაზე ფიქრში დავკარგო, თუ რა გავაკეთო, მკაფიო წერილობითი სია მიზანდასახულობის შესანიშნავ განცდას მაძლევს."
        ],
        [
          "Tomorrow morning, Saturday, I am going to wake up at eight o'clock and dedicate the first three hours to practical errands. First, I am going to take my winter coat to the dry cleaner's on High Street. Second, I am going to visit the farmers' market to buy fresh vegetables, eggs, and apples for the week.",
          "ხვალ დილით, შაბათს, ვაპირებ რვა საათზე გავიღვიძო და პირველი სამი საათი პრაქტიკულ საოჯახო საქმეებს დავუთმო. პირველ რიგში, ჩემს ზამთრის პალტოს წავიღებ ჰაი-სტრიტზე მდებარე ქიმწმენდაში. მეორე — შევივლი ფერმერთა ბაზარში მთელი კვირისთვის ახალი ბოსტნეულის, კვერცხისა და ვაშლის საყიდლად."
        ],
        [
          "On Saturday afternoon, after tidying my desk and vacuuming the living room carpet, I am going to spend two hours working on my personal goals. This month, my main goal is to finish reading my first complete novel in English and to learn one hundred new business vocabulary words!",
          "შაბათ ნაშუადღევს, საწერი მაგიდის მილაგებისა და მისაღები ოთახის ხალიჩის მტვერსასრუტით გასუფთავების შემდეგ, ორ საათს დავუთმობ ჩემს პირად მიზნებზე მუშაობას. ამ თვეში ჩემი მთავარი მიზანია ბოლომდე წავიკითხო ჩემი პირველი სრული რომანი ინგლისურად და ვისწავლო ასი ახალი საქმიანი სიტყვა!"
        ],
        [
          "On Saturday evening at सात o'clock, I am meeting my sister and her husband at the new Thai restaurant by the harbour. Since it is always busy on Saturday nights, I have already reserved a table for three people. After dinner, we will walk along the pier to see the harbour lights.",
          "შაბათ საღამოს, შვიდ საათზე, ნავსადგურთან მდებარე ახალ ტაილანდურ რესტორანში ვხვდები ჩემს დასა და მის მეუღლეს. რადგან შაბათ საღამოობით იქ ყოველთვის ხალხმრავლობაა, სამ პერსონაზე მაგიდა უკვე დავჯავშნე. ვახშმის შემდეგ ნავმისადგომის გასწვრივ გავისეირნებთ პორტის განათებების სანახავად."
        ],
        [
          "Sunday will be my day for sport and rest. In the morning, I am going to swim twenty lengths at the indoor swimming pool, and in the afternoon, I will cook a large pot of chicken and vegetable soup for Monday and Tuesday. By planning a balance of chores, study, friends, and rest, every weekend feels twice as long!",
          "კვირა იქნება ჩემი სპორტისა და დასვენების დღე. დილით დახურულ საცურაო აუზში ოც სიგრძეს გავცურავ, ხოლო ნაშუადღევს ორშაბათისა და სამშაბათისთვის მოვამზადებ ქათმისა და ბოსტნეულის წვნიანის დიდ ქვაბს. საოჯახო საქმეების, სწავლის, მეგობრებისა და დასვენების დაბალანსებული დაგეგმვით ყოველი შაბათ-კვირა ორჯერ უფრო ხანგრძლივი ჩანს!"
        ]
      ],
      glossary: [
        "make the most of my free time|თავისუფალი დროის მაქსიმალურად ნაყოფიერად გამოყენება", "sense of purpose|მიზანდასახულობის განცდა", "practical errands|პრაქტიკული საქმეები / წვრილმანი გასავლელები",
        "dry cleaner's|ქიმწმენდა (ტანსაცმლის)", "farmers' market|ფერმერთა (აგრარული) ბაზარი", "vacuum the carpet|ხალიჩის მტვერსასრუტით გასუფთავება",
        "My main goal is to...|ჩემი მთავარი მიზანია...", "reserve a table for three|მაგიდის დაჯავშნა სამ პერსონაზე", "swim twenty lengths|აუზის ოცი სიგრძის გაცურვა", "a balance of chores and rest|საოჯახო საქმეებისა და დასვენების ბალანსი"
      ],
      questions: [
        "Why does the writer like writing down a weekend schedule on Friday evening?|It helps them stay organized, gives a sense of purpose, and prevents wasting Saturday morning wondering what to do|Because their boss checks their weekend notebook|Because they forget what day of the week it is|To practice spelling days of the week",
        "Which grammatical structure does the writer mainly use in Paragraphs 2 and 3 to express decided personal intentions for the weekend?|'be going to' + base verb ('I am going to wake up...', 'I am going to take...', 'I am going to visit...')|The Past Simple tense ('I went', 'I bought')|The Passive voice|Conditional sentences with 'would'",
        "What two practical errands is the writer going to do on Saturday morning?|Take their winter coat to the dry cleaner's on High Street and buy fresh food at the farmers' market|Wash the car and go to the dentist|Go to the post office and the bank|Repair a bicycle",
        "What household chores will the writer do before studying on Saturday afternoon?|Tidy their desk and vacuum the living room carpet|Paint the kitchen ceiling|Mow the garden lawn|Wash all the windows",
        "What are the writer's two main personal learning goals for this month?|To finish reading their first complete novel in English and to learn 100 new business vocabulary words|To learn how to play the violin and speak French|To write a 500-page book|To run a marathon",
        "Where and with whom is the writer having dinner at seven o'clock on Saturday evening?|At a new Thai restaurant by the harbour, with their sister and her husband|At an Italian pizzeria with university classmates|At their parents' house|At a café in the park",
        "Why did the writer reserve a table for three people in advance?|Because the restaurant is always busy on Saturday nights|Because the restaurant is very small with only two tables|To get a fifty percent discount|Because it is their sister's birthday",
        "What exercise is the writer going to do on Sunday morning?|Swim twenty lengths at the indoor swimming pool|Run ten kilometres in the forest|Play tennis with a friend|Ride a bicycle around the lake",
        "Why will the writer cook a large pot of chicken and vegetable soup on Sunday afternoon?|So they have ready meals for Monday and Tuesday|Because ten guests are coming on Sunday night|To take it to a school charity fair|Because the fridge is broken",
        "According to the final sentence, what makes every weekend feel twice as long?|Planning a healthy balance of chores, study, friends, and rest|Sleeping until two o'clock in the afternoon|Working at the office on Saturday and Sunday|Never making any plans"
      ]
    }
  ];

  App.WritingDataA = App.WritingDataA1.concat(App.WritingDataA2 || []);
})(window);
// ============================================================================
// A2 LEVEL — WRITING TOPICS 16 TO 30 (5 PARAGRAPHS, 10 PHRASES & 10 QUESTIONS)
// ============================================================================
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.WritingDataA2 = [
    {
      num: 16, level: "A2",
      icon: "💼", genre: "კარიერა და CV",
      title: "სამოტივაციო წერილი საზაფხულო სამსახურისთვის",
      subtitle: "Writing a Cover Letter for a Summer Museum Job",
      time: "7 წთ",
      prompt: "დაწერეთ მოკლე სამოტივაციო წერილი (Cover Letter) საზაფხულო სამსახურის ან სტაჟირებისთვის (რომელ პოზიციაზე აგზავნით განაცხადს, თქვენი განათლება, გამოცდილება და უნარები).",
      template: "Dear [Manager's Name], I am writing to apply for the position of [Job Title] advertised on [Website]. I am currently a student of [Subject]. Last summer, I worked as a [Previous Job], where I learned how to [Skill]. I have attached my CV and look forward to hearing from you. Yours sincerely, [Your Name].",
      paragraphs: [
        [
          "Subject: Job Application — Summer Visitor Assistant (Ref: MVA-2026). Dear Mrs Eleanor Vance, I am writing to apply for the position of Summer Visitor Assistant at the City History Museum, which was advertised on your museum's official website this morning.",
          "თემა: განაცხადი ვაკანსიაზე — ზაფხულის ვიზიტორთა ასისტენტი (კოდი: MVA-2026). ძვირფასო ქალბატონო ელეონორ ვანს, გწერთ ქალაქის ისტორიის მუზეუმში ზაფხულის ვიზიტორთა ასისტენტის პოზიციაზე განაცხადის წარმოსადგენად, რომელიც დღეს დილით თქვენი მუზეუმის ოფიციალურ ვებსაიტზე გამოქვეყნდა."
        ],
        [
          "I am currently a first-year history student at the National University, and my summer vacation runs from the first of June until the fifteenth of September. Because I have a deep passion for local history and architecture, working at your museum would be an ideal opportunity for me.",
          "ამჟამად ვარ ეროვნული უნივერსიტეტის ისტორიის ფაკულტეტის პირველი კურსის სტუდენტი და ჩემი საზაფხულო არდადეგები გრძელდება პირველი ივნისიდან თხუთმეტ სექტემბრამდე. რადგან ძალიან მიყვარს ადგილობრივი ისტორია და არქიტექტურა, თქვენს მუზეუმში მუშაობა ჩემთვის იდეალური შესაძლებლობა იქნებოდა."
        ],
        [
          "Last summer, I worked for two months as a volunteer receptionist at the Municipal Tourist Information Centre. My daily responsibilities included welcoming foreign visitors, handing out city maps, answering questions about bus routes, and organizing group ticket bookings on the computer.",
          "გასულ ზაფხულს ორი თვის განმავლობაში მოხალისე ადმინისტრატორად ვმუშაობდი ქალაქის ტურისტულ საინფორმაციო ცენტრში. ჩემს ყოველდღიურ მოვალეობებში შედიოდა უცხოელი სტუმრების დახვედრა, ქალაქის რუკების დარიგება, ავტობუსების მარშრუტებზე კითხვების პასუხის გაცემა და კომპიუტერში ჯგუფური ბილეთების ჯავშნების ორგანიზება."
        ],
        [
          "Through that experience, I learned how to stay calm, patient, and polite even during busy afternoon hours. In addition to my native language, I speak fluent English and intermediate German, which will allow me to assist international tourists at the ticket desk and in the exhibition halls.",
          "ამ გამოცდილების წყალობით ვისწავლე სიმშვიდის, მოთმინებისა და თავაზიანობის შენარჩუნება ნაშუადღევის ყველაზე დატვირთულ საათებშიც კი. მშობლიური ენის გარდა, თავისუფლად ვსაუბრობ ინგლისურად და საშუალო დონეზე ვფლობ გერმანულს, რაც საშუალებას მომცემს დავეხმარო უცხოელ ტურისტებს სალაროსთან და საგამოფენო დარბაზებში."
        ],
        [
          "I have attached my full CV and a letter of recommendation from my supervisor at the Tourist Information Centre. I am available for an interview at any time on weekday afternoons. Thank you very much for considering my application. Yours sincerely, Sofia Lindqvist.",
          "წერილს დავურთე ჩემი სრული რეზიუმე (CV) და სარეკომენდაციო წერილი ტურისტული საინფორმაციო ცენტრის ხელმძღვანელისგან. გასაუბრებისთვის მზად ვარ ნებისმიერ სამუშაო დღეს, ნაშუადღევს. დიდი მადლობა ჩემი განაცხადის განხილვისთვის. პატივისცემით, სოფია ლინდკვისტი."
        ]
      ],
      glossary: [
        "I am writing to apply for the position of...|გწერთ, რათა წარმოვადგინო განაცხადი ...-ის პოზიციაზე", "advertised on your website|გამოქვეყნებული თქვენს ვებსაიტზე", "I have a deep passion for...|ძალიან მიყვარს / გატაცებული ვარ ...-ით",
        "My daily responsibilities included...|ჩემს ყოველდღიურ მოვალეობებში შედიოდა...", "Through that experience, I learned...|ამ გამოცდილების წყალობით ვისწავლე...", "In addition to...|...-ის გარდა / ამასთანავე",
        "letter of recommendation|სარეკომენდაციო წერილი", "I am available for an interview|ხელმისაწვდომი (მზად) ვარ გასაუბრებისთვის", "Thank you for considering my application|გმადლობთ ჩემი განაცხადის განხილვისთვის", "Yours sincerely,|პატივისცემით, (როდესაც ადრესატის გვარი ცნობილია)"
      ],
      questions: [
        "What should always be stated in the very first sentence of a job cover letter?|The exact position you are applying for and where you saw the job advertisement|Your favourite hobbies and childhood memories|How much salary you want to receive|A list of your school grades",
        "Which job position is Sofia applying for, and where did she see it advertised?|Summer Visitor Assistant at the City History Museum, advertised on the museum's official website|Head Librarian at the university, advertised in a newspaper|Tour Bus Driver, told by a friend|Hotel Chef",
        "What does Sofia study at the National University, and when is her summer vacation?|She is a first-year history student, and her vacation runs from 1st June to 15th September|She studies medicine and is free only in August|She studies law and is free on weekends only|She is a high school student",
        "Where did Sofia work as a volunteer for two months last summer?|At the Municipal Tourist Information Centre|At an airport check-in desk|At a supermarket cash register|At a children's hospital",
        "Which verb form follows the phrase 'My daily responsibilities included...' in Paragraph 3?|'-ing' forms (gerunds): 'welcoming visitors, handing out maps, answering questions, and organizing bookings'|Past tense verbs with '-ed'|Future verbs with 'will'|Imperative verbs",
        "What soft skills did Sofia learn from her previous experience with tourists?|How to stay calm, patient, and polite even during busy afternoon hours|How to repair computers|How to cook Italian food|How to drive a minibus",
        "Which foreign languages does Sofia speak, and at what level?|Fluent English and intermediate German|Basic French and Spanish|Only her native language|Fluent Chinese",
        "What two documents has Sofia attached to her application email?|Her full CV and a letter of recommendation from her previous supervisor|Her passport and train ticket|A photograph of her apartment and her diploma|A medical certificate",
        "When is Sofia available to attend a job interview?|At any time on weekday afternoons|Only on Sunday mornings|Next month|After six o'clock in the evening",
        "In formal British/international letter rules, why does Sofia end with 'Yours sincerely,' instead of 'Yours faithfully,'?|Because she knows the recipient's name ('Dear Mrs Eleanor Vance'); 'Yours faithfully' is used when writing 'Dear Sir or Madam'|Because 'Yours sincerely' is only for close family members|There is no rule at all|Because she is applying for a summer job"
      ]
    },
    {
      num: 17, level: "A2",
      icon: "📦", genre: "მომხმარებლის წერილი",
      title: "საჩივრის წერილი ონლაინ შეკვეთის შესახებ",
      subtitle: "Writing a Polite Complaint Email About a Damaged Delivery",
      time: "7 წთ",
      prompt: "დაწერეთ თავაზიანი, მაგრამ მკაფიო საჩივრის წერილი ონლაინ მაღაზიას დაზიანებული ან შეცდომით გამოგზავნილი ამანათის შესახებ (შეკვეთის ნომერი, რა პრობლემაა და რას ითხოვთ).",
      template: "Subject: Complaint Regarding Order #[Number]. Dear Customer Service, On [Date], I ordered a [Product] from your website. However, when the parcel arrived today, I discovered that [Problem]. I have attached photos of the damage. I would like to request a [Replacement / Full Refund]. Kind regards, [Your Name].",
      paragraphs: [
        [
          "Subject: Damaged Item in Order #UK-88412 — Request for Replacement. Dear Customer Service Team at 'Home & Study', I am writing to report a problem with a desk lamp that I ordered from your online store last Tuesday, the fifth of October, under Order Number UK-88412.",
          "თემა: დაზიანებული ნივთი შეკვეთაში #UK-88412 — შეცვლის მოთხოვნა. ძვირფასო „ჰოუმ ენდ სთადის“ მომხმარებელთა მომსახურების გუნდო, გწერთ სამუშაო მაგიდის სანათთან დაკავშირებული პრობლემის შესახებ, რომელიც თქვენს ონლაინ მაღაზიაში გასულ სამშაბათს, ხუთ ოქტომბერს შევუკვეთე (შეკვეთის ნომერი: UK-88412)."
        ],
        [
          "According to my order confirmation, I paid forty-eight euros for a brass reading lamp with a dark green glass shade, plus five euros for express courier delivery. The parcel was delivered to my apartment this morning at ten o'clock.",
          "ჩემი შეკვეთის დადასტურების თანახმად, გადავიხადე ორმოცდარვა ევრო თითბრის საკითხავ სანათში მუქი მწვანე მინის აბაჟურით, რასაც დაემატა ხუთი ევრო სწრაფი საკურიერო მიწოდებისთვის. ამანათი ჩემს ბინაში დღეს დილით, ათ საათზე მოიტანეს."
        ],
        [
          "Unfortunately, when I opened the cardboard box, I was very disappointed to find two serious issues. First, the outer box had no bubble wrap or protective foam inside, so the green glass shade was cracked into three pieces. Second, the power cord had a European two-pin plug instead of the standard UK three-pin plug that I selected on your website.",
          "სამწუხაროდ, როდესაც მუყაოს ყუთი გავხსენი, ძალიან იმედგაცრუებული დავრჩი, რადგან ორი სერიოზული პრობლემა აღმოვაჩინე. პირველი: გარე ყუთს შიგნით არ ჰქონდა ბუშტუკოვანი ცელოფანი ან დამცავი ქაფი, რის გამოც მწვანე მინის აბაჟური სამ ნაწილად იყო გატეხილი. მეორე: დენის სადენს ჰქონდა ევროპული ორჩხირიანი შტეფსელი, ნაცვლად ბრიტანული სტანდარტული სამჩხირიანი შტეფსელისა, რომელიც თქვენს ვებსაიტზე ავირჩიე."
        ],
        [
          "I have taken तीन clear photographs showing the cracked glass shade, the wrong plug, and the shipping label on the box, and I have attached them to this email as evidence. As you can understand, the lamp cannot be used in this condition.",
          "გადავიღე სამი მკაფიო ფოტო, სადაც ჩანს გაბზარული მინის აბაჟური, არასწორი შტეფსელი და ყუთზე დაკრული საფოსტო ეტიკეტი, და მტკიცებულების სახით დავურთე ამ იმეილს. როგორც თავად ხვდებით, ასეთ მდგომარეობაში სანათის გამოყენება შეუძლებელია."
        ],
        [
          "Since I need this lamp for my home office desk, I would like to request a brand-new replacement lamp with the correct UK plug, packed securely in protective bubble wrap. Could you please send me a prepaid return label so I can send the damaged item back to your warehouse free of charge? I look forward to your prompt reply. Kind regards, Robert Evans.",
          "რადგან ეს სანათი ჩემი საშინაო ოფისის მაგიდისთვის მჭირდება, გთხოვთ გამომიგზავნოთ სრულიად ახალი სანათი სწორი ბრიტანული შტეფსელით, რომელიც უსაფრთხოდ იქნება შეფუთული დამცავ ბუშტუკოვან ცელოფანში. ხომ ვერ გამომიგზავნიდით წინასწარ გადახდილ უკან დაბრუნების ეტიკეტს, რათა დაზიანებული ნივთი თქვენს საწყობში უფასოდ დავაბრუნო? ველი თქვენს დროულ პასუხს. პატივისცემით, რობერტ ევანსი."
        ]
      ],
      glossary: [
        "I am writing to report a problem with...|გწერთ, რათა გაცნობოთ ...-თან დაკავშირებული პრობლემის შესახებ", "Order Number|შეკვეთის ნომერი", "I was very disappointed to find...|ძალიან იმედგაცრუებული დავრჩი, როდესაც აღმოვაჩინე...",
        "bubble wrap|ბუშტუკოვანი დამცავი შესაფუთი ცელოფანი", "glass shade (lampshade)|მინის აბაჟური (სანათის)", "as evidence|მტკიცებულების სახით",
        "in this condition|ასეთ მდგომარეობაში", "I would like to request a replacement|მსურს მოვითხოვო ნივთის შეცვლა (ახლით ჩანაცვლება)", "prepaid return label|წინასწარ გადახდილი უკან დაბრუნების ეტიკეტი", "prompt reply|სწრაფი / დროული პასუხი"
      ],
      questions: [
        "What is the best tone to use when writing a customer complaint email?|Polite, calm, and factual — clearly stating the order number, the problem, and the solution you want|Angry and rude, using all capital letters and exclamation marks|Funny and informal, without mentioning the order number|Apologizing for buying the product",
        "What did Robert Evans order from 'Home & Study', and how much did he pay in total?|A brass reading lamp with a dark green glass shade for 48 euros, plus 5 euros for express delivery (53 euros total)|A wooden desk for 200 euros|A computer monitor for 150 euros|Two green chairs",
        "Why did the green glass shade break during transport?|Because the outer cardboard box had no bubble wrap or protective foam inside|Because Robert dropped the box on his stairs|Because the courier threw it through the window|Because it was made of paper",
        "What was the second mistake with the lamp that arrived?|The power cord had a European two-pin plug instead of the UK three-pin plug he had selected|The lamp was painted bright pink|The bulb was missing|It was a ceiling chandelier instead of a desk lamp",
        "What did Robert attach to his email as evidence of the problem?|Three clear photographs showing the cracked glass shade, the wrong plug, and the shipping label|A video of his entire apartment|A copy of his passport|A letter from his neighbour",
        "Does Robert ask for his money back (a refund) or a replacement item?|He requests a brand-new replacement lamp with the correct UK plug, packed securely in bubble wrap|He asks for a refund and says he will never buy a lamp again|He asks for a fifty percent discount to keep the broken lamp|He asks for a free chair instead",
        "Why does Robert ask the company for a 'prepaid return label'?|So he can send the damaged lamp back to their warehouse free of charge without paying postage himself|So he can wrap the box in green paper|To get a discount on his next order|To stick it on his front door",
        "Which word in Paragraph 3 is used to introduce bad news or a problem politely?|'Unfortunately,'|'Happily,'|'Finally,'|'Therefore,'",
        "What does the phrase 'I look forward to your prompt reply' mean at the end of the email?|I am waiting for a quick/timely answer from you|I will write to you again next year|Please do not reply to this email|I am coming to your shop tonight",
        "Why is it essential to include 'Order #UK-88412' in the Subject line of the email?|So the customer service team can immediately look up the purchase record in their computer database|Because the email system requires numbers in every subject|To show how many lamps were in the box|It is Robert's phone number"
      ]
    },
    {
      num: 18, level: "A2",
      icon: "✈️", genre: "სამოგზაურო ბლოგი",
      title: "სამოგზაურო ბლოგი შაბათ-კვირის მოგზაურობაზე",
      subtitle: "Writing an Engaging Travel Blog Post: 48 Hours in Bruges",
      time: "7 წთ",
      prompt: "დაწერეთ სამოგზაურო ბლოგის პოსტი ქალაქზე ან კურორტზე, სადაც იმოგზაურეთ (როგორ ჩახვედით, რა მოინახულეთ, რა დააგემოვნეთ და რა რჩევას მისცემთ მკითხველებს).",
      template: "Title: A Weekend in [City]! Last month, I travelled to [City] by [Train/Plane]. On the first day, I explored [Place] and saw [Sight]. Don't miss trying the local [Food]! My top tip for visitors is to [Tip].",
      paragraphs: [
        [
          "Blog Title: Canals, Cobblestones, and Chocolate — How to Spend 48 Hours in Bruges! If you are looking for a European city that feels like stepping into the pages of a medieval fairy tale, pack your weekend bag and take the train to Bruges in northern Belgium! Last weekend, I spent two unforgettable days exploring its quiet canals and historic squares.",
          "ბლოგის სათაური: არხები, ქვაფენილი და შოკოლადი — როგორ გავატაროთ 48 საათი ბრიუგეში! თუ ეძებთ ევროპულ ქალაქს, სადაც მოხვედრა შუა საუკუნეების ზღაპრის ფურცლებზე შებიჯებას ჰგავს, ჩაალაგეთ უქმეების ჩანთა და მატარებლით გაემგზავრეთ ჩრდილოეთ ბელგიის ქალაქ ბრიუგეში! გასულ შაბათ-კვირას იქ ორი დაუვიწყარი დღე გავატარე მშვიდი არხებისა და ისტორიული მოედნების დათვალიერებაში."
        ],
        [
          "Getting to Bruges is effortless: fast trains run every half hour from Brussels, and the journey takes just एक hour. Because the historic centre is compact and mostly car-free, you don't need taxis or buses at all! The best way to start your Saturday morning is in the 'Markt' — the main square surrounded by colourful stepped-gable houses.",
          "ბრიუგემდე ჩასვლა უმარტივესია: ბრიუსელიდან ყოველ ნახევარ საათში გადის სწრაფი მატარებლები და მგზავრობას სულ რაღაც ერთი საათი სჭირდება. რადგან ისტორიული ცენტრი კომპაქტურია და მანქანებისგან თითქმის თავისუფალია, ტაქსი ან ავტობუსი საერთოდ არ დაგჭირდებათ! შაბათი დილის დასაწყებად საუკეთესო ადგილია „მარკტი“ — მთავარი მოედანი, რომელიც გარშემორტყმულია საფეხუროვანი სახურავების მქონე ფერადი სახლებით."
        ],
        [
          "Before the midday crowds arrive, climb the 366 narrow steps of the thirteenth-century Belfry Tower. Although the climb is a workout for your legs, you are rewarded at the top with a breathtaking panoramic view of red rooftops and green church spires, accompanied by the music of forty-seven bronze bells!",
          "სანამ შუადღის ხალხმრავლობა დაიწყება, ადით მეცამეტე საუკუნის სამრეკლოს კოშკის (ბელფრის) 366 ვიწრო საფეხურზე. მიუხედავად იმისა, რომ ასვლა ფეხებისთვის კარგი ვარჯიშია, წვერზე დაჯილდოვდებით წითელი სახურავებისა და ეკლესიის მწვანე шპილების თვალწარმტაცი პანორამული ხედით, რომელსაც ორმოცდაშვიდი ბრინჯაოს ზარის რეკვა ახლავს!"
        ],
        [
          "In the afternoon, take a thirty-minute wooden boat tour along the canals to see the city from the water, passing underneath low stone bridges and weeping willows where white swans glide by. Afterwards, warm up at an artisan chocolate shop on Katelijnestraat with a mug of rich hot chocolate and a fresh Belgian waffle topped with strawberries.",
          "ნაშუადღევს გაისეირნეთ ოცდაათწუთიანი ხის ნავის ტურით არხებზე, რათა ქალაქი წყლიდან დაინახოთ — გაცურავთ დაბალი ქვის ხიდებისა და მტირალა ტირიფების ქვეშ, სადაც თეთრი გედები დაცურავენ. შემდეგ კი გათბით კატელაინესტრაატზე მდებარე ხელნაკეთი შოკოლადის მაღაზიაში ფინჯანი სქელი ცხელი შოკოლადითა და მარწყვიანი ბელგიური ვაფლით."
        ],
        [
          "My top tip for fellow travellers: do not just visit for a few hours in the middle of the day! Stay overnight in a canal-side guesthouse. After six o'clock in the evening, when the day-trip tour buses leave and the golden streetlamps reflect on the quiet water, walking through the peaceful streets feels truly magical.",
          "ჩემი მთავარი რჩევა მოგზაურებს: ნუ ესტუმრებით ქალაქს მხოლოდ რამდენიმე საათით შუადღისას! დარჩით ღამისთევით არხისპირა სასტუმროში. საღამოს ექვსი საათის შემდეგ, როდესაც ერთდღიანი ტურისტული ავტობუსები ქალაქს ტოვებენ და მშვიდ წყალში ოქროსფერი ლამპიონები ირეკლება, წყნარ ქუჩებში სეირნობა ნამდვილ ჯადოსნობას ჰგავს."
        ]
      ],
      glossary: [
        "feel like stepping into a fairy tale|ზღაპარში შებიჯების განცდა", "car-free centre|მანქანებისგან თავისუფალი ცენტრი", "Before the midday crowds arrive,|სანამ შუადღის ხალხმრავლობა დაიწყება,",
        "you are rewarded with a view|ჯილდოვდებით (საოცარი) ხედით", "panoramic view|პანორამული (ფართო) ხედი", "take a boat tour|ნავის ტურით გასეირნება",
        "weeping willow|მტირალა ტირიფი (ხე)", "artisan chocolate shop|ხელნაკეთი (ოსტატური) შოკოლადის მაღაზია", "My top tip for travellers:|ჩემი მთავარი რჩევა მოგზაურებისთვის:", "stay overnight|ღამისთევით დარჩენა"
      ],
      questions: [
        "How does a travel blog post differ in style from a formal business letter?|It uses an enthusiastic, descriptive, and conversational tone that speaks directly to the reader ('If you are looking for...', 'My top tip...')|It must be written only in passive legal sentences|It never uses adjectives|It starts with 'Dear Sir or Madam'",
        "How long does the train journey from Brussels to Bruges take, and how often do trains run?|Just one hour, and trains run every half hour|Four hours, once a day|Thirty minutes by airplane|Three hours by ferry",
        "Why don't visitors need taxis or buses once they are inside the historic centre of Bruges?|Because the historic centre is compact and mostly car-free, making it easy to walk everywhere|Because taxis are illegal in Belgium|Because everyone travels by underground metro|Because the streets are flooded with water",
        "Where does the writer recommend starting your Saturday morning, and why should you climb the Belfry Tower early?|In the 'Markt' (main square), climbing the Belfry Tower before the midday crowds arrive|At the railway station at noon|At the chocolate shop at midnight|In a museum basement",
        "How many steps does the thirteenth-century Belfry Tower have, and how many bronze bells are at the top?|366 narrow steps and 47 bronze bells|100 steps and 2 bells|500 steps and 100 bells|50 steps and an elevator",
        "What activity does the writer recommend for Saturday afternoon to see the city from a different perspective?|Taking a thirty-minute wooden boat tour along the canals underneath stone bridges and weeping willows|Renting a car to drive on the highway|Flying in a helicopter|Visiting a modern shopping mall",
        "What local treats did the writer enjoy at the artisan chocolate shop on Katelijnestraat?|A mug of rich hot chocolate and a fresh Belgian waffle topped with strawberries|Pizza and iced coffee|Apple pie and green tea|Ice cream and biscuits",
        "Which linking word in Paragraph 3 contrasts the difficulty of climbing the stairs with the great view at the top?|'Although' ('Although the climb is a workout for your legs, you are rewarded at the top...')|'Because'|'Therefore'|'Furthermore'",
        "What is the writer's 'top tip' for travellers in the final paragraph?|Stay overnight in a canal-side guesthouse rather than just visiting for a few hours during the day|Only visit Bruges for two hours at noon|Travel by tour bus and leave before dinner|Visit only in January",
        "Why is Bruges especially magical after six o'clock in the evening?|Because the day-trip tour buses leave and the golden streetlamps reflect on the quiet canal water|Because all the museums open at six o'clock|Because there is a fireworks show every night|Because the shops offer free chocolate"
      ]
    },
    {
      num: 19, level: "A2",
      icon: "🎬", genre: "კულტურის მიმოხილვა",
      title: "წიგნის ან ფილმის მიმოხილვის დაწერა",
      subtitle: "Writing a Book Review Without Spoiling the Ending",
      time: "7 წთ",
      prompt: "დაწერეთ თქვენი საყვარელი წიგნის ან ფილმის მოკლე მიმოხილვა (სათაური, ავტორი/რეჟისორი, ჟანრი, მოკლე სიუჟეტი ფინალის გამხელის გარეშე და რატომ ურჩევთ სხვებს).",
      template: "Book Review: '[Title]' by [Author]. This [Genre] novel is set in [Place/Time]. The story follows [Main Character], who [Plot Summary]. What I loved most about this book is [Reason]. It is a real page-turner that I recommend to anyone who enjoys [Genre]!",
      paragraphs: [
        [
          "Book Review: 'The Lighthouse on Foggy Island' by Clara Hawthorne. Last week, I finished reading 'The Lighthouse on Foggy Island', a gripping mystery novel written by British author Clara Hawthorne and published in 2024. At three hundred and twenty pages, it is the best book I have read this year!",
          "წიგნის მიმოხილვა: კლარა ჰოთორნის „შუქურა ნისლიან კუნძულზე“. გასულ კვირას დავასრულე კითხვა წიგნისა „შუქურა ნისლიან კუნძულზე“ — ეს არის ჩამთრევი დეტექტიური რომანი, რომელიც ბრიტანელმა მწერალმა კლარა ჰოთორნმა დაწერა და 2024 წელს გამოიცა. სამას ოცგვერდიანი წიგნი საუკეთესოა მათ შორის, რაც წელს წამიკითხავს!"
        ],
        [
          "The story is set in the autumn of 1928 on a tiny, windswept island off the coast of Cornwall. The main character is Arthur Pendelton, a young cartographer who travels to the island to draw an updated map of the rocky coastline after a cargo ship mysteriously disappears in the fog.",
          "მოქმედება ვითარდება 1928 წლის შემოდგომაზე, კორნუოლის სანაპიროსთან მდებარე პაწაწინა, ქარიან კუნძულზე. მთავარი გმირია არტურ პენდლტონი — ახალგაზრდა კარტოგრაფი, რომელიც კუნძულზე ჩადის კლდოვანი სანაპირო ზოლის განახლებული რუკის დასახაზად მას შემდეგ, რაც ნისლში სატვირთო გემი იდუმალებით ქრება."
        ],
        [
          "When a fierce October storm cuts off the ferry connection to the mainland for a week, Arthur is trapped in the village inn with seven local residents, each hiding a secret. One night, Arthur discovers a hidden leather diary inside the old lighthouse lantern room, which changes everything he thought he knew about the island.",
          "როდესაც ოქტომბრის მძვინვარე შტორმი მატერიკთან ბორნის მიმოსვლას ერთი კვირით წყვეტს, არტური სოფლის სასტუმროში გამოკეტილი აღმოჩნდება შვიდ ადგილობრივ მცხოვრებთან ერთად, რომელთაგან თითოეული საიდუმლოს მალავს. ერთ ღამეს არტური ძველი შუქურის სანათურის ოთახში პოულობს გადამალულ ტყავისყდიან დღიურს, რაც კუნძულის შესახებ მის ყველა წარმოდგენას თავდაყირა აყენებს."
        ],
        [
          "Without giving away any spoilers about the ending, the plot is full of clever twists that keep you guessing until the very last chapter! What I enjoyed most was the author's vivid description of the stormy sea and the realistic dialogues between the characters.",
          "ფინალის წინასწარ გამხელის (სპოილერების) გარეშე გეტყვით, რომ სიუჟეტი სავსეა ჭკვიანური მოულოდნელობებით, რაც სულ ბოლო თავამდე დაძაბულს გტოვებთ! ყველაზე მეტად მომეწონა ავტორის მიერ ბობოქარი ზღვის ცოცხალი აღწერა და პერსონაჟებს შორის რეალისტური დიალოგები."
        ],
        [
          "My only minor criticism is that the first twenty pages move a little slowly while the author introduces the history of the village, but once the storm begins in Chapter Three, the book becomes a real page-turner! I highly recommend this novel to anyone who loves classic detective stories and coastal adventures.",
          "ჩემი ერთადერთი მცირე შენიშვნა ის არის, რომ პირველი ოცი გვერდი ოდნავ ნელა მიდის, სანამ ავტორი სოფლის ისტორიას გვაცნობს, მაგრამ როგორც კი მესამე თავში შტორმი იწყება, წიგნს ხელიდან ვეღარ გააგდებთ! გულითადად ვურჩევ ამ რომანს ყველას, ვისაც უყვარს კლასიკური დეტექტივები და ზღვისპირა თავგადასავლები."
        ]
      ],
      glossary: [
        "gripping mystery novel|ჩამთრევი დეტექტიური რომანი", "The story is set in...|მოქმედება ვითარდება ...-ში (დრო და ადგილი)", "The main character is...|მთავარი გმირი (პერსონაჟი) არის...",
        "cut off from the mainland|მატერიკს (ხმელეთს) მოწყვეტილი", "Without giving away any spoilers,|სიუჟეტის კვანძის (ფინალის) წინასწარ გამხელის გარეშე,", "clever plot twist|სიუჟეტის ჭკვიანური / მოულოდნელი შემოტრიალება",
        "keep you guessing|გამოცნობის რეჟიმში (ინტერესში) დატოვება", "vivid description|ცოცხალი / თვალსაჩინო აღწერა", "My only minor criticism is...|ჩემი ერთადერთი მცირე შენიშვნა (კრიტიკა) არის...", "a real page-turner|წიგნი, რომელსაც ხელიდან ვერ გააგდებ (ერთი ამოსუნთქვით საკითხავი)"
      ],
      questions: [
        "Which verb tense do writers conventionally use in English when summarizing the plot of a book or film ('The story is set...', 'Arthur travels...', 'Arthur discovers...')?|The Present Simple tense (known as the 'narrative present')|The Future Continuous tense|Only the Past Perfect tense|Imperative commands",
        "Who wrote the novel 'The Lighthouse on Foggy Island', and what genre is it?|British author Clara Hawthorne, and it is a mystery novel|Arthur Pendelton, and it is a biography|A Cornish sailor, and it is a cookbook|A history professor, and it is a textbook",
        "When and where is the story set?|In the autumn of 1928, on a tiny windswept island off the coast of Cornwall|In modern-day London in 2026|On a cruise ship in the Pacific Ocean|In a mountain village in Switzerland",
        "Who is the main character, and why does he travel to the island?|Arthur Pendelton, a young cartographer sent to draw an updated map of the coastline after a ship disappears|A police detective from Scotland Yard sent to arrest a thief|An old lighthouse keeper retiring after forty years|A journalist writing for a newspaper",
        "What traps Arthur on the island with seven local residents for a week?|A fierce October storm that cuts off the ferry connection to the mainland|A broken bridge over a river|A winter snowstorm|His boat engine breaks down",
        "What important object does Arthur discover inside the old lighthouse lantern room?|A hidden leather diary|A chest of gold coins|A broken radio transmitter|An old bronze telescope",
        "Why is it an important rule of book and film reviewing NEVER to include 'spoilers'?|Because revealing the ending ruins the surprise and suspense for readers who haven't read the book yet|Because book reviews must be under fifty words|Because authors forbid mentioning the main character's name|Because the reviewer didn't finish the book",
        "What two aspects of the author's writing style did the reviewer enjoy most?|The vivid description of the stormy sea and the realistic dialogues between the characters|The pictures drawn on the cover and the large font size|The short chapters and simple words|The recipes at the back of the book",
        "What is the reviewer's 'only minor criticism' of the novel?|That the first twenty pages move a little slowly while the author introduces the village history|That the book is too short|That the ending makes no sense|That there are too many characters",
        "What does the idiom 'a real page-turner' mean in a book review?|A book that is so exciting and engaging that you want to keep turning the pages rapidly to see what happens next|A heavy book with thick paper pages|A book used by students to practice reading speed|A machine that prints books"
      ]
    },
    {
      num: 20, level: "A2",
      icon: "🙏", genre: "საქმიანი ეტიკეტი",
      title: "ბოდიშის წერილი შეხვედრის გაცდენის გამო",
      subtitle: "Writing a Sincere Apology Email and Rescheduling a Meeting",
      time: "7 წთ",
      prompt: "დაწერეთ თავაზიანი ბოდიშის წერილი კოლეგას ან პარტნიორს გაუთვალისწინებელი მიზეზით გაცდენილი შეხვედრის გამო და შესთავაზეთ ახალი დრო.",
      template: "Subject: Sincere Apologies for Missing Our Meeting Today. Dear [Name], Please accept my sincere apologies for not being able to attend our meeting at [Time] today due to [Unforeseen Reason]. Could we reschedule our meeting for [New Day] at [New Time]? Best regards, [Your Name].",
      paragraphs: [
        [
          "Subject: Sincere Apologies for Missing Our 11:00 AM Meeting — Rescheduling Request. Dear Mr Henderson, Please accept my sincere apologies for missing our scheduled project meeting at eleven o'clock this morning, and for not being able to call you beforehand.",
          "თემა: გულწრფელი ბოდიში 11:00 საათის შეხვედრის გაცდენისთვის — გადატანის მოთხოვნა. ძვირფასო ბატონო ჰენდერსონ, გთხოვთ მიიღოთ ჩემი გულწრფელი ბოდიში დღეს დილით, თერთმეტ საათზე დაგეგმილი საპროექტო შეხვედრის გაცდენისა და წინასწარ დაკავშირების ვერმოხერხების გამო."
        ],
        [
          "I was on my way to your office on the Northern Underground Line at ten thirty when the train suddenly stopped inside the tunnel between two stations due to a signal failure. Because we were deep underground with no mobile network signal, I had no way to send you a message or call your receptionist.",
          "თერთმეტის ნახევარზე მეტროს ჩრდილოეთის ხაზით თქვენს ოფისში მოვდიოდი, როდესაც სასიგნალო სისტემის დაზიანების გამო მატარებელი ორ სადგურს შორის გვირაბში უეცრად გაჩერდა. რადგან მიწის ქვეშ ღრმად ვიყავით და მობილური კავშირი არ იჭერდა, ვერანაირად ვერ შევძელი თქვენთვის შეტყობინების გამოგზავნა ან მდივანთან დარეკვა."
        ],
        [
          "Engineers finally fixed the signal problem after forty-five minutes, and as soon as our train reached the next station and my phone reconnected, I sent a text message to your office assistant. I completely understand that your schedule is very busy, and I feel terrible for wasting your valuable time.",
          "ინჟინრებმა სასიგნალო პრობლემა საბოლოოდ ორმოცდახუთი წუთის შემდეგ გაასწორეს და როგორც კი ჩვენმა მატარებელმა მომდევნო სადგურს მიაღწია და ტელეფონმა მიღება აღადგინა, თქვენს ასისტენტს მოკლე ტექსტური შეტყობინება გავუგზავნე. სრულად მესმის, რომ ძალიან დატვირთული გრაფიკი გაქვთ, და თავს უხერხულად ვგრძნობ თქვენი ძვირფასი დროის დაკარგვის გამო."
        ],
        [
          "So that our project does not lose any momentum, I have attached the completed architectural drawings and the updated budget spreadsheet that I was going to present to you today. You can review the figures at your convenience.",
          "იმისათვის, რომ ჩვენი პროექტის ტემპი არ შეფერხდეს, წერილს დავურთე დასრულებული არქიტექტურული ნახაზები და ბიუჯეტის განახლებული ცხრილი, რომელთა წარდგენასაც დღეს თქვენთვის ვაპირებდი. შეგიძლიათ მონაცემებს თქვენთვის მოსახერხებელ დროს გადახედოთ."
        ],
        [
          "Would it be possible to reschedule our meeting for later this week? I am completely free on Thursday afternoon between two and five o'clock, or at any time on Friday morning, and I would be happy to come to your office or meet via video call. Thank you very much for your patience and understanding. Best regards, David Ross.",
          "შესაძლებელი იქნება თუ არა ჩვენი შეხვედრის გადატანა ამ კვირის ბოლოსთვის? სრულიად თავისუფალი ვარ ხუთშაბათს ნაშუადღევს, ორიდან ხუთ საათამდე, ან პარასკევ დილით ნებისმიერ დროს, და სიამოვნებით მოვალ თქვენს ოფისში ან შეგხვდებით ვიდეოზარით. დიდი მადლობა მოთმინებისა და გაგებისთვის. პატივისცემით, დევიდ როსი."
        ]
      ],
      glossary: [
        "Please accept my sincere apologies for...|გთხოვთ მიიღოთ ჩემი გულწრფელი ბოდიში ...-ის გამო", "beforehand|წინასწარ", "I was on my way to...|მოვდიოდი (გზაში ვიყავი) ...-ისკენ",
        "due to a signal failure|სასიგნალო სისტემის დაზიანების გამო", "valuable time|ძვირფასი დრო", "lose momentum|ტემპის / ინერციის დაკარგვა",
        "at your convenience|თქვენთვის მოსახერხებელ დროს", "reschedule a meeting|შეხვედრის სხვა დროისთვის გადატანა", "via video call|ვიდეოზარის მეშვეობით", "patience and understanding|მოთმინება და გაგება"
      ],
      questions: [
        "What are the four essential steps of a professional apology email after missing a meeting?|1) Apologize sincerely right away; 2) Briefly explain the unforeseen reason; 3) Share the prepared work/files; 4) Offer clear times to reschedule|1) Blame the other person; 2) Write a short joke; 3) Cancel the project|Wait two weeks before writing anything|Send only a one-word text message",
        "Why did David Ross miss his eleven o'clock meeting with Mr Henderson?|His underground train stopped inside a tunnel between two stations at 10:30 due to a signal failure|He overslept because his alarm clock broke|He wrote down the wrong day in his calendar|His car had a flat tyre",
        "Why couldn't David call or text Mr Henderson while the train was stuck?|Because the train was deep underground inside a tunnel with no mobile network signal|Because he forgot Mr Henderson's name|Because his phone was at home|Because talking is forbidden on trains",
        "How long was the train stuck in the tunnel before engineers fixed the signal?|Forty-five minutes|Five minutes|Four hours|All day",
        "What did David do as soon as the train reached the next station and his phone reconnected?|He sent a text message to Mr Henderson's office assistant|He went back home to sleep|He went to a restaurant for lunch|He waited until the next day",
        "How does David make sure their project does not 'lose any momentum' despite the missed meeting?|He attaches the completed architectural drawings and updated budget spreadsheet to the email so Mr Henderson can review them|He asks Mr Henderson to draw the plans himself|He hires another company|He cancels the budget",
        "What does the polite phrase 'at your convenience' mean in Paragraph 4?|Whenever it is easiest and most suitable for you|Within five minutes|Only on Sunday night|In my office",
        "What does the verb 'to reschedule' mean in business English?|To arrange a new date or time for a planned meeting or event|To cancel a meeting forever|To arrive ten minutes early|To write a summary of a meeting",
        "Which two specific time slots does David offer for rescheduling the meeting?|Thursday afternoon between 2:00 and 5:00 PM, or any time on Friday morning|Only Saturday at midnight|Next month on Monday|In ten minutes",
        "What two options does David offer for how they can hold the rescheduled meeting?|Coming to Mr Henderson's office in person or meeting via video call|Meeting at the train station platform|Talking by post letter|Meeting at an airport"
      ]
    },
    {
      num: 21, level: "A2",
      icon: "📰", genre: "სტატია და რეპორტაჟი",
      title: "ღონისძიების მიმოხილვა საუბნო ჟურნალისთვის",
      subtitle: "Writing a Community Newsletter Report: The River Clean-Up Day",
      time: "7 წთ",
      prompt: "დაწერეთ მოკლე სტატია-ანგარიში ჩატარებული სასკოლო, საუნივერსიტეტო ან საუბნო ღონისძიების შესახებ (როდის ჩატარდა, რამდენი ადამიანი მონაწილეობდა, რა გაკეთდა და რა შედეგი დადგა).",
      template: "Headline: [Event Name] Brings the Community Together! Last Saturday, over [Number] volunteers gathered at [Place] for our annual [Event]. Divided into teams, participants [Activity]. In total, we [Result]! Thank you to everyone who took part.",
      paragraphs: [
        [
          "Newsletter Headline: Over One Hundred Volunteers Join Forces for the Annual Willow River Clean-Up! Last Saturday, the ninth of May, the sun shone brightly over Riverside Park as one hundred and twenty local residents — including families, university students, and retired neighbours — gathered for our fifth annual Spring River Clean-Up Day.",
          "სტატიის სათაური: ასზე მეტი მოხალისე გაერთიანდა მდინარე უილოუს ყოველწლიური დასუფთავების აქციაზე! გასულ შაბათს, ცხრა მაისს, რივერსაიდის პარკს მზე კაშკაშად დაჰნათოდა, როდესაც ას ოცი ადგილობრივი მცხოვრები — მათ შორის ოჯახები, სტუდენტები და პენსიონერი მეზობლები — შეიკრიბა ჩვენს მეხუთე ყოველწლიურ მდინარის საგაზაფხულო დასუფთავების დღეზე."
        ],
        [
          "The event began at nine o'clock in the morning by the old stone boathouse. The town council provided every volunteer with thick protective gloves, reusable recycling sacks, and wooden litter-pickers. The event coordinator, Mrs Clara Green, divided the volunteers into six teams, assigning each team a one-kilometre stretch of the riverbank.",
          "ღონისძიება დაიწყო დილის ცხრა საათზე ძველ ქვის ნავების სადგურთან. ქალაქის საბჭომ თითოეული მოხალისე უზრუნველყო სქელი დამცავი ხელთათმანებით, მრავალჯერადი ტომრებითა და ნაგვის ასაღები ხის მაშებით. ღონისძიების კოორდინატორმა, ქალბატონმა კლარა გრინმა, მოხალისეები გაყო ექვს გუნდად და თითოეულ გუნდს მდინარის ნაპირის ერთკილომეტრიანი მონაკვეთი ჩააბარა."
        ],
        [
          "Over the next four hours, the teams worked tirelessly along both sides of the river. While most volunteers collected plastic bottles, aluminium cans, and paper wrappers from the grass and bushes, four experienced canoeists paddled along the shallow water to pull out old car tyres and a rusty supermarket trolley!",
          "მომდევნო ოთხი საათის განმავლობაში გუნდები მდინარის ორივე ნაპირზე დაუღალავად შრომობდნენ. სანამ მოხალისეთა უმეტესობა ბალახსა და ბუჩქებში აგროვებდა პლასტმასის ბოთლებს, ალუმინის ქილებსა და ქაღალდის შეფუთვებს, ოთხმა გამოცდილმა კანოეს ნიჩბოსანმა თავთხელ წყალში გაცურა და ამოიღო მანქანის ძველი საბურავები და სუპერმარკეტის დაჟანგული ურიკა!"
        ],
        [
          "In addition to clearing rubbish, the biology club from Oakwood High School planted thirty young willow and alder trees along the north bank to strengthen the soil and provide new nesting places for kingfishers and ducks. They also installed four wooden birdhouses in the tall oak trees.",
          "ნაგვის გატანის გარდა, ოკვუდის სკოლის ბიოლოგიის კლუბმა ჩრდილოეთ ნაპირის გასწვრივ დარგო ოცდაათი ახალგაზრდა ტირიფისა და მურყნის ნერგი ნიადაგის გასამაგრებლად და ალკუნებისა და იხვებისთვის ახალი საბუდარი ადგილების შესაქმნელად. მათ ასევე მაღალ მუხის ხეებზე დაამაგრეს ოთხი ხის скворечникი (ჩიტის ბუდე)."
        ],
        [
          "By one o'clock in the afternoon, the results were astonishing: together, we collected eighty-five sacks of recyclable waste and restored six kilometres of the river trail! Afterwards, the local bakery treated all volunteers to hot vegetable soup, fresh bread rolls, and apple juice on the park lawn. A huge thank you to everyone who helped make our river clean and green again!",
          "ნაშუადღევის პირველი საათისთვის შედეგები გასაოცარი იყო: ჩვენ ერთად შევაგროვეთ გადამუშავებადი ნარჩენების ოთხმოცდახუთი ტომარა და სრულად გავასუფთავეთ მდინარის ბილიკის ექვსი კილომეტრი! დასასრულს, ადგილობრივი საცხობი პარკის მდელოზე ყველა მოხალისეს გაუმასპინძლდა ცხელი ბოსტნეულის წვნიანით, ახალი ფუნთუშებითა და ვაშლის წვენით. უდიდესი მადლობა ყველას, ვინც დაგვეხმარა ჩვენი მდინარის კვლავ გასუფთავებასა და გამწვანებაში!"
        ]
      ],
      glossary: [
        "join forces|ძალების გაერთიანება", "annual event|ყოველწლიური ღონისძიება", "protective gloves|დამცავი ხელთათმანები",
        "one-kilometre stretch|ერთკილომეტრიანი მონაკვეთი/ზოლი", "work tirelessly|დაუღალავად მუშაობა/შრომა", "rusty trolley|დაჟანგული ურიკა",
        "In addition to clearing rubbish,|ნაგვის გასუფთავების გარდა,", "strengthen the soil|ნიადაგის გამაგრება", "recyclable waste|გადამუშავებადი ნარჩენები", "treat someone to...|ვინმესთვის გამასპინძლება ...-ით"
      ],
      questions: [
        "Which verb tense is used in a newspaper or newsletter headline ('Over One Hundred Volunteers Join Forces...') to make past news sound fresh and immediate?|The Present Simple tense ('historical present' in headlines)|The Past Perfect tense|The Future Continuous tense|Questions only",
        "How many local residents took part in the fifth annual Spring River Clean-Up Day on Saturday, 9th May?|One hundred and twenty local residents|Only twelve people|Five hundred soldiers|Thirty school teachers",
        "What equipment did the town council provide to every volunteer at the boathouse?|Thick protective gloves, reusable recycling sacks, and wooden litter-pickers|Bicycles and helmets|Fishing rods and nets|Paintbrushes and ladders",
        "How did Mrs Clara Green organize the 120 volunteers so they covered the whole river efficiently?|She divided them into six teams, assigning each team a one-kilometre stretch of the riverbank|Everyone walked together in one big group for 100 metres|Each person worked alone at night|Only the canoeists cleaned the river",
        "How did the four experienced canoeists help during the clean-up?|They paddled along the shallow water to pull out old car tyres and a rusty supermarket trolley|They caught fish for lunch|They raced each other to the bridge|They took photographs from the water",
        "What did the biology club from Oakwood High School do along the north bank of the river?|They planted thirty young willow and alder trees and installed four wooden birdhouses|They built a concrete wall|They cut down old bushes|They painted the boathouse",
        "Why did the students plant willow and alder trees along the riverbank?|To strengthen the soil and provide new nesting places for kingfishers and ducks|To block the view of the river|To sell the wood in winter|To shade the car park",
        "How much waste was collected in total by one o'clock, and how many kilometres of trail were restored?|Eighty-five sacks of recyclable waste, restoring six kilometres of the river trail|Ten sacks of waste over one kilometre|Five hundred sacks|Two trucks of sand",
        "How did the local bakery thank the volunteers after the work was finished at one o'clock?|By treating all volunteers to hot vegetable soup, fresh bread rolls, and apple juice on the park lawn|By giving everyone a ten-euro voucher|By baking a giant birthday cake|By delivering bread to their homes",
        "Why are concrete numbers (120 residents, 6 teams, 30 trees, 85 sacks) effective when writing an event report?|They give the reader a clear, factual picture of the scale and success of the community effort|Because reports are not allowed to use adjectives|To make the article harder to read|To test the readers' math skills"
      ]
    },
    {
      num: 22, level: "A2",
      icon: "💡", genre: "მეგობრული რჩევა",
      title: "რჩევის მიცემის წერილი მეგობრისთვის",
      subtitle: "Writing a Supportive Email Giving Advice to a Friend",
      time: "7 წთ",
      prompt: "დაწერეთ გამამხნევებელი წერილი მეგობარს, რომელიც ახალ ქალაქში ან ახალ სამსახურში გადავიდა და გთხოვთ რჩევას, როგორ შეეგუოს გარემოს და გაიჩინოს მეგობრები.",
      template: "Dear [Name], It was great to hear from you! Moving to a new city is always a bit overwhelming at first. If I were you, I would [Advice 1]. Why don't you also try [Advice 2]? Give yourself time, and call me whenever you want to chat! Best, [Your Name].",
      paragraphs: [
        [
          "Dear Leo, It was wonderful to receive your email yesterday, although I was sorry to hear that you have been feeling a bit lonely during your first two weeks in Munich! Please remember that moving to a new city where you don't know anyone is always overwhelming at first, so be kind to yourself.",
          "ძვირფასო ლეო, ძალიან გამიხარდა გუშინ შენი იმეილის მიღება, თუმცა მეწყინა იმის გაგება, რომ მიუნხენში ცხოვრების პირველ ორ კვირას თავს ცოტა მარტოსულად გრძნობ! გთხოვ გახსოვდეს, რომ ახალ ქალაქში გადასვლა, სადაც არავის იცნობ, თავიდან ყოველთვის რთული და დამთრგუნველია, ამიტომ საკუთარი თავის მიმართ მომთმენი იყავი."
        ],
        [
          "When I moved away from home three years ago for my first job, I felt the exact same way for the first month. You asked how I managed to settle in and build a circle of friends, so I wanted to share three practical tips that worked really well for me!",
          "როდესაც სამი წლის წინ პირველი სამსახურის გამო სახლიდან სხვა ქალაქში გადავედი, პირველი ერთი თვე ზუსტად ასევე ვგრძნობდი თავს. შენ მკითხე, როგორ მოვახერხე ახალ გარემოსთან შეგუება და სამეგობრო წრის შექმნა, ამიტომ მინდა გაგიზიარო სამი პრაქტიკული რჩევა, რომლებმაც ჩემს შემთხვევაში ძალიან გაამართლა!"
        ],
        [
          "First, if I were you, I would join a local club connected to one of your regular hobbies. Since you love running and playing badminton, why don't you join a neighbourhood running group on Saturday mornings? Meeting the same people every week while doing an activity you enjoy is the easiest way to start natural conversations.",
          "პირველი: შენს ადგილას რომ ვიყო, გავწევრიანდებოდი რომელიმე ადგილობრივ კლუბში, რომელიც შენს საყვარელ ჰობის უკავშირდება. რადგან გიყვარს სირბილი და ბადმინტონის თამაში, რატომ არ უნდა შეუერთდე უბნის მორბენალთა ჯგუფს შაბათობით დილით? საყვარელი საქმიანობის კეთებისას ყოველ კვირას ერთსა და იმავე ადამიანებთან შეხვედრა უმარტივესი გზაა ბუნებრივი საუბრების დასაწყებად."
        ],
        [
          "Second, try not to eat lunch alone at your office desk! Even if you feel a little shy in a new team, ask one or two colleagues if they would like to grab a cup of coffee or walk to the bakery at lunchtime. Also, signing up for an evening German language class will help you meet other international newcomers who are in the exact same boat as you!",
          "მეორე: ეცადე სამსახურში საკუთარ სამუშაო მაგიდასთან მარტომ არ ისადილო! მაშინაც კი, თუ ახალ გუნდში თავს ოდნავ მორიდებულად გრძნობ, ჰკითხე ერთ ან ორ კოლეგას, ხომ არ სურთ შესვენებაზე ფინჯანი ყავის დალევა ან საცხობამდე გასეირნება. ასევე, გერმანული ენის საღამოს კურსზე ჩაწერა დაგეხმარება გაიცნო სხვა უცხოელი ახალჩამოსულები, რომლებიც ზუსტად შენსავით არიან!"
        ],
        [
          "Finally, create a cosy weekend routine so you look forward to Saturdays: find a favourite local café where the barista knows your name, explore one new museum or park each week, and cook your favourite meals. I am planning to take a train to Munich next month to visit you for a weekend! Call me whenever you want to chat. Your friend, Paul.",
          "დაბოლოს, შეიქმენი შაბათ-კვირის მყუდრო რუტინა, რათა უქმეებს სიხარულით ელოდო: იპოვე საყვარელი უბნის კაფე, სადაც ბარისტას შენი სახელი ეცოდინება, ყოველ კვირას დაათვალიერე ერთი ახალი მუზეუმი ან პარკი და მოამზადე საყვარელი კერძები. მომავალ თვეში მატარებლით ვაპირებ მიუნხენში ჩამოსვლას შენს მოსანახულებლად! დამირეკე ნებისმიერ დროს, როცა საუბარი მოგინდება. შენი მეგობარი, პოლი."
        ]
      ],
      glossary: [
        "I was sorry to hear that...|მეწყინა იმის გაგება, რომ...", "settle in|ახალ გარემოსთან შეგუება / მოწყობა", "If I were you, I would...|შენს ადგილას რომ ვიყო, მე...",
        "Why don't you...?|რატომ არ უნდა (სცადო)...? (რჩევის ფორმა)", "build a circle of friends|სამეგობრო წრის შექმნა", "grab a cup of coffee|ყავის დასალევად გასვლა (სასაუბრო)",
        "sign up for a class|კურსზე ჩაწერა / დარეგისტრირება", "in the exact same boat|ზუსტად იმავე მდგომარეობაში (იდიომი)", "look forward to|სიხარულით / მოუთმენლად ლოდინი", "Call me whenever you want|დამირეკე ნებისმიერ დროს, როცა მოგინდება"
      ],
      questions: [
        "How does Paul show empathy in the opening paragraph before giving any advice?|He acknowledges Leo's feelings, says it is normal to feel overwhelmed at first, and shares that he felt the exact same way three years ago|He tells Leo that Munich is a terrible city|He tells Leo to quit his job immediately|He ignores Leo's problem and talks about football",
        "Which three grammatical structures does Paul use to give friendly, non-bossy advice in Paragraphs 3 and 4?|'If I were you, I would...', 'Why don't you...?', and 'Try not to...'|'You must...', 'I order you to...', and 'It is forbidden to...'|Past tense questions only|Passive voice commands",
        "What is Paul's first piece of advice regarding Leo's hobbies (running and badminton)?|Join a local neighbourhood running group or badminton club on Saturday mornings to meet people with shared interests|Stop exercising and stay at home|Run alone at midnight|Buy an expensive bicycle",
        "Why is joining a weekly hobby club an effective way to make friends in a new city?|Because meeting the same people every week while doing an activity you enjoy makes starting conversations natural and easy|Because clubs pay you money to attend|Because nobody talks during sports|Because you only go once a year",
        "What does Paul advise Leo NOT to do at lunchtime at the office?|Try not to eat lunch alone at his office desk; instead, invite one or two colleagues for coffee or a walk to the bakery|Never eat lunch at work|Eat lunch in the car park|Take a three-hour lunch break",
        "Why does Paul suggest signing up for an evening German language class?|It will help him learn the local language and meet other international newcomers who are in the exact same boat|Because his boss requires a German exam tomorrow|Because the classes are free at the airport|To become a language teacher",
        "What does the idiom 'in the exact same boat' mean in Paragraph 4?|In the exact same situation or facing the same challenges as you|Travelling on a ferry across a lake|Working at a harbour|Owning a wooden canoe",
        "What does Paul suggest Leo do to build a comforting weekend routine in Paragraph 5?|Find a regular local café, explore one new museum or park each week, and cook his favourite meals|Sleep until Sunday evening|Work at the office seven days a week|Move to a different apartment every month",
        "What encouraging news does Paul share at the end of the email?|He is planning to take a train to Munich next month to visit Leo for a weekend|He is sending Leo a dog|He is moving to Munich permanently tomorrow|He bought a new car",
        "Why is 'If I were you, I would join...' grammatically written with 'were' instead of 'was'?|Because 'If I were you' is a standard Second Conditional phrase used for giving hypothetical advice|Because 'you' is plural|Because it happened in the past|It is a spelling mistake"
      ]
    },
    {
      num: 23, level: "A2",
      icon: "🏫", genre: "სასწავლო მიმოწერა",
      title: "საინფორმაციო მოთხოვნის წერილი სასწავლო კურსის შესახებ",
      subtitle: "Writing an Email Inquiring About a Summer Photography Course",
      time: "7 წთ",
      prompt: "დაწერეთ საინფორმაციო მოთხოვნის წერილი (Inquiry Email) სასწავლო ცენტრს ან კოლეჯს თქვენთვის საინტერესო კურსის პირობების, გრაფიკისა და საფასურის გასაგებად.",
      template: "Dear Admissions Team, I saw your advertisement for the [Course Name] and would like to request some further information. First, could you tell me [Question 1]? Second, I would like to know [Question 2]. Thank you for your assistance. Best regards, [Your Name].",
      paragraphs: [
        [
          "Subject: Course Inquiry — July Intensive Digital Photography Course. Dear Admissions Team at the Dublin School of Arts, I recently saw your advertisement for the 'Summer Intensive Digital Photography Course' in Arts Monthly magazine, and I am writing to request some further information before I register.",
          "თემა: კურსის შესახებ ინფორმაციის მოთხოვნა — ივლისის ციფრული ფოტოგრაფიის ინტენსიური კურსი. ძვირფასო დუბლინის ხელოვნების სკოლის მიღების გუნდო, ცოტა ხნის წინ ჟურნალ „Arts Monthly“-ში ვნახე თქვენი განცხადება „ციფრული ფოტოგრაფიის საზაფხულო ინტენსიური კურსის“ შესახებ და გწერთ დამატებითი ინფორმაციის მისაღებად დარეგისტრირებამდე."
        ],
        [
          "First, I would like to know more about the weekly timetable and class size. Your advertisement mentions that the course runs for four weeks in July, from the sixth to the thirty-first. Could you please tell me whether the classes are held in the mornings or in the evenings, and how many students are in each group?",
          "პირველ რიგში, მსურს მეტი გავიგო კვირის განრიგისა და ჯგუფის სიდიდის შესახებ. თქვენს განცხადებაში აღნიშნულია, რომ კურსი გრძელდება ოთხი კვირა ივლისში, ექვსიდან ოცდათერთმეტ რიცხვამდე. გთხოვთ მაცნობოთ, გაკვეთილები დილის საათებში ტარდება თუ საღამოს, და რამდენი სტუდენტია თითოეულ ჯგუფში?"
        ],
        [
          "Second, regarding the equipment required for the practical outdoor sessions: I currently own a beginner digital mirrorless camera with a standard 18-55mm lens. Is this camera suitable for the course, or does the school lend tripods, studio lights, and telephoto lenses to students during the workshops?",
          "მეორე — რაც შეეხება გარე პრაქტიკული მეცადინეობებისთვის საჭირო აღჭურვილობას: ამჟამად მაქვს დამწყების დონის ციფრული უსარკო კამერა სტანდარტული 18-55 მმ ობიექტივით. არის თუ არა ეს კამერა საკმარისი კურსისთვის, და ათხოვებს თუ არა სკოლა სტუდენტებს შტატივებს, სტუდიურ განათებასა და ტელეობიექტივებს ვორქშოპების დროს?"
        ],
        [
          "Third, could you please confirm the total tuition fee for the four-week programme and let me know if there is a discount for university students? I would also appreciate it if you could tell me whether students receive an official certificate upon completing the final portfolio exhibition.",
          "მესამე — გთხოვთ დამიდასტუროთ ოთხკვირიანი პროგრამის სწავლის სრული საფასური და შემატყობინოთ, მოქმედებს თუ არა ფასდაკლება უნივერსიტეტის სტუდენტებისთვის? ასევე მადლობელი დაგრჩებით, თუ მეტყვით, გადაეცემათ თუ არა მოსწავლეებს ოფიციალური სერტიფიკატი საბოლოო პორტფოლიოს გამოფენის დასრულების შემდეგ."
        ],
        [
          "Finally, what is the deadline for submitting the online registration form and paying the deposit? Thank you very much in advance for answering my questions, and I look forward to hearing from you soon. Kind regards,Liam O'Connor.",
          "დაბოლოს, როდის იწურება ონლაინ სარეგისტრაციო ფორმის შევსებისა და წინასწარი შენატანის (ავანსის) გადახდის ბოლო ვადა? წინასწარ გიხდით დიდ მადლობას ჩემს კითხვებზე პასუხისთვის და მოუთმენლად ველი თქვენს გამოხმაურებას. პატივისცემით, ლიამ ო’კონორი."
        ]
      ],
      glossary: [
        "request some further information|დამატებითი ინფორმაციის მოთხოვნა", "weekly timetable|კვირის განრიგი / ცხრილი", "Could you please tell me whether...|ხომ ვერ მეტყვით, ... თუ ...",
        "regarding the equipment required|რაც შეეხება საჭირო აღჭურვილობას", "Is this suitable for the course?|არის თუ არა ეს შესაფერისი (საკმარისი) კურსისთვის?", "tuition fee|სწავლის საფასური",
        "I would appreciate it if you could...|მადლობელი დაგრჩებით, თუ შეძლებთ...", "upon completing the course|კურსის დასრულების შემდეგ", "registration deadline|რეგისტრაციის ბოლო ვადა", "Thank you in advance|წინასწარ გიხდით მადლობას"
      ],
      questions: [
        "Why is it helpful to organize an inquiry email using 'First,', 'Second,', 'Third,', and 'Finally,'?|It separates your questions clearly into paragraphs so the recipient can answer every single question without missing one|Because emails must have at least four numbers|To make the email look like a math test|So you don't have to use question marks",
        "Where did Liam O'Connor see the advertisement for the Summer Intensive Digital Photography Course?|In 'Arts Monthly' magazine|On a poster at the bus station|On television|From a friend at school",
        "When does the four-week photography course take place?|In July, from the sixth to the thirty-first|In August, for two weeks|From September to December|Only on one weekend in May",
        "What two questions does Liam ask in Paragraph 2 about the schedule and group?|Whether classes are held in the mornings or evenings, and how many students are in each group|Whether classes are held on Sundays and who the teacher is|Where the school café is located|How old the school building is",
        "In indirect polite questions ('Could you please tell me whether the classes are held...'), what is the correct word order?|Subject + verb ('whether the classes ARE held'), NOT question inversion ('whether ARE the classes held')|Verb before subject ('whether are held the classes')|Using 'do' without a subject|Putting the verb at the very beginning of the sentence",
        "What camera equipment does Liam already own?|A beginner digital mirrorless camera with a standard 18-55mm lens|A professional film camera with five lenses|Only a smartphone camera|An underwater video camera",
        "What equipment does Liam ask if the school lends to students during workshops?|Tripods, studio lights, and telephoto lenses|Laptops and printers|Backpacks and raincoats|Bicycles",
        "What two questions does Liam ask about the 'tuition fee' and completion in Paragraph 4?|The total tuition fee (and whether there is a student discount), and whether students receive an official certificate|Whether he can pay next year and get a job at the school|Whether lunch is free|How much textbooks cost",
        "What does the noun 'tuition fee' mean?|The money you pay for instruction/teaching on a course or at a university|A fine for returning a library book late|The price of a bus ticket|A membership card for a gym",
        "What is the final question Liam asks in Paragraph 5?|What the deadline is for submitting the online registration form and paying the deposit|Where to park his car|Whether he can bring his dog to class|What the Wi-Fi password is"
      ]
    },
    {
      num: 24, level: "A2",
      icon: "🌟", genre: "ბიოგრაფია",
      title: "საინტერესო ადამიანის მოკლე ბიოგრაფიის დაწერა",
      subtitle: "Writing a Biographical Sketch of an Inspiring Person",
      time: "7 წთ",
      prompt: "დაწერეთ თქვენთვის საინტერესო ან სამაგალითო ადამიანის მოკლე ბიოგრაფია (სად და როდის დაიბადა, როგორ დაიწყო საქმიანობა, რა სირთულეები გადალახა და რას მიაღწია).",
      template: "[Person's Name] was born in [Year] in [Place]. From an early age, he/she was fascinated by [Interest]. After studying [Subject], he/she worked as [Job]. Despite facing difficulties, he/she achieved [Achievement]. I admire [Name] because [Reason].",
      paragraphs: [
        [
          "Biographical Sketch: The Woman Who Mapped the Ocean Floor — Marie Tharp (1920–2006). Today, every school atlas shows the giant mountain ranges and deep valleys hidden beneath the world's oceans. Yet until the 1950s, scientists believed that the bottom of the Atlantic Ocean was a flat, featureless plain of mud! The person who revealed the true face of the ocean floor was a brilliant American geologist and cartographer named Marie Tharp.",
          "ბიოგრაფიული ნარკვევი: ქალი, რომელმაც ოკეანის ფსკერი რუკაზე დაიტანა — მერი თარპი (1920–2006). დღეს ყველა სასკოლო ატლასზე ჩანს მსოფლიო ოკეანეების ქვეშ დამალული გიგანტური ქედები და ღრმა ხეობები. თუმცა, 1950-იან წლებამდე მეცნიერებს სჯეროდათ, რომ ატლანტის ოკეანის ფსკერი შლამით დაფარული ბრტყელი, უსახური ვაკე იყო! ადამიანი, რომელმაც ოკეანის ფსკერის ნამდვილი სახე გამოაჩინა, გახლდათ ბრწყინვალე ამერიკელი გეოლოგი და კარტოგრაფი მერი თარპი."
        ],
        [
          "Marie Tharp was born in 1920 in Michigan. Her father was a soil surveyor who travelled across the country making agricultural maps, so Marie grew up accompanying him in the fields and developed an early love for nature and drawing. At university, she earned master's degrees in both geology and mathematics.",
          "მერი თარპი დაიბადა 1920 წელს მიჩიგანის შტატში. მამამისი იყო ნიადაგის ამგეგმავი, რომელიც მთელ ქვეყანაში მოგზაურობდა სასოფლო-სამეურნეო რუკების შესადგენად, ამიტომ მერი ბავშვობიდანვე დაჰყვებოდა მას მინდვრებში და ადრეული ასაკიდანვე შეუყვარდა ბუნება და ხაზვა. უნივერსიტეტში მან მოიპოვა მაგისტრის ხარისხი როგორც გეოლოგიაში, ისე მათემატიკაში."
        ],
        [
          "In 1948, Marie moved to New York and joined the Lamont Geological Observatory at Columbia University, where she began a lifelong scientific partnership with marine geologist Bruce Heezen. Because women were not allowed to work aboard research ships at that time, Heezen sailed across the Atlantic collecting sonar depth measurements, while Marie stayed at her drafting table in New York.",
          "1948 წელს მერი ნიუ-იორკში გადავიდა და მუშაობა დაიწყო კოლუმბიის უნივერსიტეტის ლამონტის გეოლოგიურ ობსერვატორიაში, სადაც დაიწყო მისი მრავალწლიანი სამეცნიერო თანამშრომლობა საზღვაო გეოლოგ ბრიუს ჰიზენთან. რადგან იმ დროს ქალებს კვლევით გემებზე მუშაობის უფლება არ ჰქონდათ, ჰიზენი დაცურავდა ატლანტის ოკეანეში და აგროვებდა სონარის სიღრმის მაჩვენებლებს, მერი კი ნიუ-იორკში თავის სახაზავ მაგიდასთან მუშაობდა."
        ],
        [
          "Working patiently with rulers, pencils, and thousands of paper sonar strips for four years, Marie plotted the exact depth of the Atlantic floor. In 1952, she noticed something extraordinary: running right down the middle of the Atlantic Ocean was a forty-thousand-kilometre underwater mountain range with a deep rift valley down its centre — proving that the ocean floor was splitting apart and pushing the continents!",
          "სახაზავებით, ფანქრებითა და სონარის ათასობით ქაღალდის ლენტით ოთხწლიანი მომთმენი შრომის შედეგად, მერიმ წერტილ-წერტილ დაიტანა ატლანტის ოკეანის ფსკერის ზუსტი სიღრმე. 1952 წელს მან გასაოცარი რამ აღმოაჩინა: ატლანტის ოკეანის ზუსტად შუაგულში გადიოდა ორმოცი ათასი კილომეტრის სიგრძის წყალქვეშა ქედი, რომლის ცენტრსაც ღრმა ნაპრალი (რიფტული ხეობა) მიუყვებოდა — რამაც დაამტკიცა, რომ ოკეანის ფსკერი იבקობოდა და კონტინენტებს ამოძრავებდა!"
        ],
        [
          "At first, even her partner Bruce Heezen dismissed her discovery as 'girl talk', until earthquake data proved she was 100% right! In 1977, Tharp and Heezen published the first complete world ocean floor map. In 1997, the Library of Congress named Marie Tharp one of the four greatest cartographers of the twentieth century — a testament to her patience, precision, and quiet perseverance.",
          "თავიდან მისმა პარტნიორმა ბრიუს ჰიზენმაც კი არ დაუჯერა მის აღმოჩენას, სანამ მიწისძვრების მონაცემებმა არ დაამტკიცა, რომ მერი 100%-ით მართალი იყო! 1977 წელს თარპმა და ჰიზენმა გამოაქვეყნეს მსოფლიო ოკეანის ფსკერის პირველი სრული რუკა. 1997 წელს კი კონგრესის ბიბლიოთეკამ მერი თარპი მეოცე საუკუნის ოთხ უდიდეს კარტოგრაფთა შორის დაასახელა — რაც მისი მოთმინების, სიზუსტისა და შეუპოვრობის ღირსეული დაფასება იყო."
        ]
      ],
      glossary: [
        "featureless plain|უსახური (ერთფეროვანი) ვაკე", "was born in [Year]|დაიბადა [წელი]-ში", "develop an early love for...|ადრეული ასაკიდანვე შეყვარება ...-ის",
        "earn a master's degree in...|მაგისტრის ხარისხის მოპოვება ...-ში", "lifelong partnership|მთელი ცხოვრების მანძილზე თანამშრომლობა", "drafting table|სახაზავი მაგიდა",
        "underwater mountain range|წყალქვეშა ქედი (მთათა სისტემა)", "rift valley|რიფტული ხეობა (დედამიწის ქერქის ნაპრალი)", "prove someone right|ვინმეს სიმართლის დამტკიცება", "perseverance|შეუპოვრობა / მიზანსწრაფულობა"
      ],
      questions: [
        "How is a biographical sketch typically organized from paragraph to paragraph?|Chronologically: 1) Who the person is & why they are famous; 2) Childhood & education; 3) Early career; 4) Major breakthrough; 5) Legacy & recognition|Starting with old age and ending with birth|Listing only dates without sentences|Writing in the first person ('I')",
        "What did scientists mistakenly believe about the bottom of the Atlantic Ocean until the 1950s?|That it was a flat, featureless plain of mud|That it was covered in underwater forests|That it was only fifty metres deep|That the Lost City of Atlantis was in the middle",
        "How did Marie Tharp's childhood influence her future career?|Her father was a soil surveyor who made agricultural maps, and accompanying him in the fields gave her an early love for nature and drawing|Her father was a submarine captain|She grew up on an island lighthouse|She worked in a bookshop as a child",
        "Which two subjects did Marie Tharp earn master's degrees in at university?|Geology and mathematics|History and literature|Medicine and chemistry|Architecture and music",
        "Why didn't Marie Tharp sail across the Atlantic on the research ship with Bruce Heezen in the late 1940s and 1950s?|Because women were not allowed to work aboard research ships at that time|Because she suffered from severe seasickness|Because she didn't know how to swim|Because she preferred staying in Michigan",
        "How did Marie Tharp map the ocean floor from her drafting table in New York?|By patiently plotting thousands of paper sonar depth measurements by hand with rulers and pencils over four years|Using satellite photographs from space|Using a modern 3D computer printer|By looking through a telescope",
        "What extraordinary geological feature did Marie discover running down the middle of the Atlantic Ocean in 1952?|A 40,000-kilometre underwater mountain range with a deep rift valley down its centre|A giant underwater volcano made of gold|A tunnel connecting America and Europe|A sunken fleet of ships",
        "What scientific theory did Marie Tharp's rift valley discovery help prove?|Continental drift / plate tectonics (that the ocean floor was splitting apart and pushing the continents)|The theory of gravity|That the Earth is flat|How clouds form rain",
        "What finally convinced Bruce Heezen and other sceptical scientists that Marie's rift valley map was 100% accurate?|Earthquake data, which lined up along the exact rift valley she had drawn|They drained the water out of the ocean|They sent divers down to walk along the bottom|A fish swam up with a rock",
        "What honour did the Library of Congress bestow upon Marie Tharp in 1997?|Named her one of the four greatest cartographers of the twentieth century|Gave her a research ship|Named a planet after her|Elected her mayor of New York"
      ]
    },
    {
      num: 25, level: "A2",
      icon: "🏷️", genre: "ონლაინ გაყიდვები",
      title: "მეორადი ნივთის გაყიდვის განცხადების დაწერა",
      subtitle: "Writing a Clear Online Listing to Sell a Camera Setup",
      time: "7 წთ",
      prompt: "დაწერეთ დეტალური და სანდო ონლაინ-განცხადება მეორადი ნივთის (მაგ. კამერის, ველოსიპედის ან ლეპტოპის) გასაყიდად (მოდელი, მდგომარეობა, რა მოჰყვება კომპლექტში, გაყიდვის მიზეზი და ფასი).",
      template: "For Sale: [Brand & Model] — Mint Condition! I am selling my [Item] because [Reason]. It is in excellent working order with no scratches. Included in the price: [Accessories]. Price: [Amount] euros. Available for inspection in [City/Area].",
      paragraphs: [
        [
          "For Sale: Silver Mirrorless Digital Camera with 18-55mm Lens + Accessories — Like New Condition! I am offering for sale my personal Fujifilm X-Series mirrorless camera body together with its versatile 18-55mm zoom lens. I bought this camera brand-new from an authorized photography store two years ago.",
          "იყიდება: ვერცხლისფერი უსარკო ციფრული კამერა 18-55 მმ ობიექტივითა და აქსესუარებით — ახალივით მდგომარეობაში! გასაყიდად გამომაქვს ჩემი პირადი „Fujifilm X-Series“ უსარკო კამერა თავის უნივერსალურ 18-55 მმ ზუმ-ობიექტივთან ერთად. კამერა ორი წლის წინ სულ ახალი შევიძინე ოფიციალურ ფოტომაღაზიაში."
        ],
        [
          "Condition: The camera and lens are in immaculate, ten-out-of-ten cosmetic and mechanical condition. From the very first day, the rear LCD screen has been protected by a tempered glass cover, and the lens has always had a UV filter attached. There are zero scratches, dents, or dust marks on the sensor or glass!",
          "მდგომარეობა: კამერაც და ობიექტივიც იდეალურ (10/10) ვიზუალურ და ტექნიკურ მდგომარეობაშია. პირველივე დღიდან უკანა ეკრანს იცავს ბრონირებული მინა, ხოლო ობიექტივზე მუდმივად ეყენა დამცავი ულტრაიისფერი (UV) ფილტრი. სენსორსა და ლინზაზე არ არის არცერთი ნაკაწრი, ჩაღრმავება ან მტვრის ნაწილაკი!"
        ],
        [
          "The camera has been used exclusively as a hobby for weekend travel and landscape photography — never in rain or dusty environments — and has a very low shutter count of just चार thousand two hundred photos! Every dial, button, and autofocus motor works as smoothly as the day it left the box.",
          "კამერა გამოიყენებოდა მხოლოდ სამოყვარულო მიზნით შაბათ-კვირის მოგზაურობებისა და პეიზაჟების გადასაღებად — არასდროს მოხვედრილა წვიმასა თუ მტვრიან გარემოში — და აქვს ძალიან მცირე გარბენი: სულ რაღაც ოთხი ათას ორასი კადრი! ყველა სარეგულირებელი რგოლი, ღილაკი და ავტოფოკუსის ძრავა მუშაობს ისევე რბილად და გამართულად, როგორც ყუთიდან ამოღების დღეს."
        ],
        [
          "What is included in the bundle: 1) The original box, manual, and purchase receipt; 2) The 18-55mm lens with both caps and lens hood; 3) Two original rechargeable batteries and the wall charger; 4) A fast 64GB memory card; and 5) A padded green canvas shoulder bag.",
          "რა შედის კომპლექტში: 1) ორიგინალი ყუთი, ინსტრუქცია და ყიდვის ქვითარი; 2) 18-55 მმ ობიექტივი ორივე ხუფითა და მზისგან დამცავი ბლენდით; 3) ორი ორიგინალი აკუმულატორი (ელემენტი) და სატენი; 4) სწრაფი 64-გიგაბაიტიანი მეხსიერების ბარათი; და 5) მწვანე ფერის რბილი ტილოს მხარზე გადასაკიდი ჩანთა."
        ],
        [
          "Reason for selling: I am only selling this wonderful setup because I focus entirely on music production in my free time now, so the camera has been sitting unused in its cabinet. Price: seven hundred and fifty euros (firm). You are welcome to meet me at a café near Central Station to test the camera thoroughly before buying!",
          "გაყიდვის მიზეზი: ამ შესანიშნავ კომპლექტს ვყიდი მხოლოდ იმიტომ, რომ ახლა თავისუფალ დროს მთლიანად მუსიკის კეთებას ვუთმობ, კამერა კი კარადაში უქმად დევს. ფასი: შვიდას ორმოცდაათი ევრო (საბოლოოა). შეგიძლიათ შემხვდეთ ცენტრალურ სადგურთან მდებარე კაფეში და ყიდვამდე კამერა ადგილზევე გულდასმით შეამოწმოთ!"
        ]
      ],
      glossary: [
        "Like New / Immaculate condition|ახალივით / უნაკლო მდგომარეობაში", "tempered glass cover|დამცავი (ბრონირებული) მინა ეკრანისთვის", "zero scratches or dents|ნაკაწრებისა და დაზიანებების გარეშე",
        "low shutter count|კამერის მცირე გარბენი (გადაღებული კადრების რაოდენობა)", "What is included in the bundle:|რა შედის კომპლექტში:", "purchase receipt|ყიდვის ქვითარი / ჩეკი",
        "rechargeable battery|დატენვადი აკუმულატორი / ელემენტი", "Reason for selling:|გაყიდვის მიზეზი:", "Price: 750 euros (firm)|ფასი: 750 ევრო (საბოლოოა / დაკლების გარეშე)", "test thoroughly before buying|ყიდვამდე საფუძვლიანად შემოწმება"
      ],
      questions: [
        "Why does a well-written online sales listing build immediate trust with potential buyers?|Because it gives honest, specific details about the item's age, condition, shutter count, included accessories, and reason for selling|Because it hides all information and only says 'Call me'|Because it uses twenty exclamation marks in every sentence|Because it asks buyers to send money before seeing the item",
        "Where and when did the seller originally buy the Fujifilm camera and 18-55mm lens?|Brand-new from an authorized photography store two years ago|Second-hand at a flea market five years ago|Found it in a park|From an unknown website without a box",
        "How has the seller protected the rear LCD screen and the lens glass since day one?|With a tempered glass cover on the LCD screen and a UV filter on the lens|By wrapping the camera in newspaper|By never taking the lens cap off|By painting the screen",
        "What does 'shutter count of just 4,200 photos' tell a camera buyer?|That the camera has been used very lightly (like low mileage on a car) and has a long lifespan ahead|That the memory card can only hold 4,200 photos|That the camera costs 4,200 euros|That the battery lasts for 4,200 hours",
        "What accessories are included in the bundle along with the camera body and lens?|The original box/receipt, lens caps & hood, two original batteries & charger, a 64GB memory card, and a padded green shoulder bag|Only the camera body without a battery or lens|A tripod and three studio lamps|A printer and photo paper",
        "Why is keeping the 'original box and purchase receipt' valuable when selling electronics second-hand?|It proves that you are the legitimate owner and shows that you cared for your equipment properly|Because the cardboard box weighs five kilograms|Because you cannot take photos without the box|Because the receipt works as a memory card",
        "What is the seller's honest 'Reason for selling' the camera?|They now focus entirely on music production in their free time, so the camera sits unused in its cabinet|The autofocus motor is broken|They dropped the camera in a river|They are moving to Antarctica",
        "What does the word '(firm)' mean when written next to the price: 'Price: 750 euros (firm)'?|The price is fixed/final and the seller is not bargaining for a lower price|The camera is made of firm metal|You must work at a law firm to buy it|The price will double tomorrow",
        "Where does the seller invite interested buyers to meet and test the camera?|At a café near Central Station, so the buyer can test it thoroughly in person before paying|In a dark alley at midnight|They refuse to meet in person and only ship by post|At the airport gate",
        "Which word in Paragraph 2 means 'perfectly clean and free from any flaws or marks'?|'immaculate'|'versatile'|'rechargeable'|'authorized'"
      ]
    },
    {
      num: 26, level: "A2",
      icon: "📖", genre: "თხრობითი ესე",
      title: "თხრობითი ისტორია დაუვიწყარ მოგზაურობაზე",
      subtitle: "Writing a Personal Narrative: The Night the Train Stopped in the Snow",
      time: "7 წთ",
      prompt: "დაწერეთ მოკლე თხრობითი ისტორია (Narrative Story) საინტერესო ან მოულოდნელ შემთხვევაზე მოგზაურობის დროს (გამოიყენეთ დროის კავშირები: First, Suddenly, While, Fortunately, In the end).",
      template: "Two years ago, I was travelling to [Place] by [Transport]. Everything was going smoothly until suddenly, [Unexpected Event]. At first, everyone felt worried, but then [What Happened Next]. Fortunately, [Resolution]. In the end, it became a memory I will never forget!",
      paragraphs: [
        [
          "Sometimes the journeys that go wrong turn into the stories we remember most fondly! Two winters ago, in late December, I was travelling on an evening train from Munich to a small alpine town in Austria to spend New Year's Eve with my university friends.",
          "ზოგჯერ სწორედ ის მგზავრობები, რომლებიც გეგმის მიხედვით არ მიდის, იქცევა ისტორიებად, რომლებსაც ყველაზე თბილად ვიხსენებთ! ორი ზამთრის წინ, დეკემბრის ბოლოს, საღამოს მატარებლით მიუნხენიდან ავსტრიის პატარა ალპურ ქალაქში მივემგზავრებოდი უნივერსიტეტის მეგობრებთან ერთად ახალი წლის შესახვედრად."
        ],
        [
          "When our train pulled out of the station at six o'clock, light snowflakes were dancing under the platform lamps. However, as the train climbed higher into the mountain valley, the gentle snowfall turned into a fierce blizzard. Suddenly, with a gentle jolt, the train slowed down and came to a complete stop in the middle of a pine forest.",
          "როდესაც ჩვენი მატარებელი ექვს საათზე სადგურიდან გავიდა, ბაქნის ლამპიონების ქვეშ მსუბუქი ფიფქები ცეკვავდნენ. თუმცა, რაც უფრო მაღლა ადიოდა მატარებელი მთის ხეობაში, მშვიდი თოვა მძვინვარე ქარბუქში გადაიზარდა. უეცრად, მსუბუქი ბიძგით, მატარებელმა სვლა შეანელა და ფიჭვის ტყის შუაგულში სრულიად გაჩერდა."
        ],
        [
          "A few minutes later, the conductor's voice came over the loudspeaker: 'Ladies and gentlemen, a heavy snowdrift has blocked the tracks ahead of us. A snowplough locomotive is on its way from the next town, so we will be waiting here for about two hours. The heating in the carriages will stay on!'",
          "რამდენიმე წუთის შემდეგ დინამიკში გაისმა გამცილებლის ხმა: „ქალბატონებო და ბატონებო, ჩვენ წინ ლიანდაგი თოვლის დიდმა ნამქერმა ჩახერგა. მომდევნო ქალაქიდან უკვე მოდის თოვლსაწმენდი ლოკომოტივი, ამიტომ აქ მოცდა დაახლოებით ორი საათით მოგვიწევს. ვაგონებში გათბობა ჩართული დარჩება!“"
        ],
        [
          "At first, passengers sighed and looked at their watches in frustration. Then, an elderly lady sitting opposite me opened a large tin of homemade gingerbread biscuits and offered them to everyone in our carriage! Inspired by her kindness, a young couple shared tangerines, the conductor brought free cups of hot peppermint tea from the dining car, and a music student took out his violin.",
          "თავიდან მგზავრებმა ამოიოხრეს და უკმაყოფილოდ დახედეს საათებს. შემდეგ კი ჩემ წინ მჯდომმა ხანდაზმულმა ქალბატონმა გახსნა სახლში გამომცხვარი ჯანჯაფილის ორცხობილების დიდი თუნუქის კოლოფი და მთელ ვაგონს გაუმასპინძლდა! მისი სიკეთით შთაგონებულმა ახალგაზრდა წყვილმა მანდარინები გააზიარა, გამცილებელმა ვაგონ-რესტორნიდან უფასო ცხელი პიტნის ჩაი მოიტანა, ხოლო მუსიკალური ფაკულტეტის სტუდენტმა ვიოლინო ამოიღო."
        ],
        [
          "For the next two hours, while the wind howled outside the frosted windows, thirty strangers talked, laughed, and sang winter songs together like old friends. When the orange snowplough finally cleared the tracks and we arrived at our station at ten o'clock, nobody wanted to say goodbye! In the end, that delay became the warmest memory of my entire winter holiday.",
          "მომდევნო ორი საათის განმავლობაში, სანამ გაყინული ფანჯრების მიღმა ქარი ზუზუნებდა, ოცდაათი უცნობი ადამიანი ძველი მეგობრებივით საუბრობდა, იცინოდა და ერთად მღეროდა ზამთრის სიმღერებს. როდესაც ნარინჯისფერმა თოვლსაწმენდმა ლიანდაგი საბოლოოდ გაწმინდა და ათ საათზე სადგურში ჩავედით, დამშვიდობება აღარავის უნდოდა! საბოლოოდ, ის შეფერხება ჩემი მთელი ზამთრის არდადეგების ყველაზე თბილ მოგონებად იქცა."
        ]
      ],
      glossary: [
        "remember most fondly|ყველაზე თბილად გახსენება", "pull out of the station|სადგურიდან გასვლა (მატარებლის)", "come to a complete stop|სრულიად გაჩერება",
        "snowdrift|თოვლის ნამქერი (ქარისგან დახვავებული თოვლი)", "on its way|გზაშია (უკვე მოდის)", "At first, ... Then, ...|თავიდან, ... შემდეგ კი, ...",
        "in frustration|გაწბილებით / უკმაყოფილოდ", "gingerbread biscuits|ჯანჯაფილის (კოჭას) სურნელოვანი ორცხობილები", "frosted windows|დაორთქლილი / ყინულმოკიდებული ფანჯრები", "In the end,|საბოლოოდ, / ბოლოს,"
      ],
      questions: [
        "How do the Past Continuous ('I was travelling...', 'snowflakes were dancing...') and Past Simple ('the train slowed down and came to a stop') work together in a story?|Past Continuous sets the background scene/ongoing action, while Past Simple describes the sudden main events that happened|They have the exact same meaning and can be swapped anywhere|Past Continuous is used for future plans|Past Simple is only used in the last sentence",
        "Where and when was the writer travelling on the evening train?|Two winters ago in late December, from Munich to a small alpine town in Austria for New Year's Eve|In July, from Paris to Rome|Last week, from London to Oxford|In spring, to a beach resort",
        "Why did the train come to a complete stop in the middle of a pine forest?|Because the gentle snowfall turned into a fierce blizzard and a heavy snowdrift blocked the tracks ahead|Because the locomotive ran out of electricity|Because a bridge had collapsed|Because the driver got lost",
        "What reassuring news did the conductor announce over the loudspeaker?|That a snowplough locomotive was on its way, the wait would be about two hours, and the heating in the carriages would stay on|That passengers had to walk five kilometres in the snow|That the train would return to Munich|That there was no food or heat",
        "How did the passengers react 'At first' when they heard about the two-hour delay?|They sighed and looked at their watches in frustration|They immediately started dancing|They opened the windows|They got off the train",
        "What small act of kindness changed the mood of the entire carriage?|An elderly lady sitting opposite the writer opened a large tin of homemade gingerbread biscuits and offered them to everyone|The conductor gave everyone fifty euros|A famous actor walked into the carriage|The snow stopped falling immediately",
        "How did other passengers and the conductor join in after the elderly lady shared her biscuits?|A young couple shared tangerines, the conductor brought free cups of hot peppermint tea, and a music student played his violin|Everyone went to sleep in the dark|They played football in the corridor|They watched a movie on a screen",
        "What were the thirty strangers doing for the next two hours while the wind howled outside?|Talking, laughing, and singing winter songs together like old friends|Complaining to the railway company on their phones|Writing angry letters|Sitting in total silence",
        "What time did the train finally arrive at the station after the orange snowplough cleared the tracks?|At ten o'clock at night|At six in the morning the next day|At midnight|At seven o'clock",
        "Which time markers help structure the narrative smoothly from start to finish?|'Two winters ago,', 'When...', 'Suddenly,', 'A few minutes later,', 'At first,', 'Then,', and 'In the end,'|'First, Second, Third, Fourth, Fifth'|'Dear Sir, Yours faithfully'|No time words at all"
      ]
    },
    {
      num: 27, level: "A2",
      icon: "🔧", genre: "საყოფაცხოვრებო წერილი",
      title: "წერილი ბინის მესაკუთრეს შეკეთების თაობაზე",
      subtitle: "Writing a Polite Maintenance Request Email to a Landlord",
      time: "7 წთ",
      prompt: "დაწერეთ თავაზიანი იმეილი ბინის მესაკუთრეს (Landlord) ბინაში გაფუჭებული გათბობის ან ტექნიკის შეკეთების თხოვნით (აღწერეთ პრობლემა და მიუთითეთ, როდის ხართ სახლში ხელოსნის მისაღებად).",
      template: "Subject: Maintenance Request — Flat [Number]. Dear [Landlord's Name], I hope you are well. I am writing to let you know that the [Appliance/Heater] in the apartment stopped working yesterday. Could you please arrange for a technician to check it? I am at home on [Days/Hours]. Kind regards, [Your Name].",
      paragraphs: [
        [
          "Subject: Heating Boiler Issue — Flat 2A, 18 Oakfield Road. Dear Mr Miller, I hope you and your family are having a good week. I am writing to let you know about a technical issue with the central heating boiler in the kitchen of Flat 2A that started yesterday evening.",
          "თემა: გათბობის ქვაბის გაუმართაობა — ბინა 2A, ოკფილდ-როუდის 18. ძვირფასო ბატონო მილერ, იმედი მაქვს, თქვენ და თქვენს ოჯახს კარგი კვირა გაქვთ. გწერთ, რათა გაცნობოთ ბინა 2A-ს სამზარეულოში ცენტრალური გათბობის ქვაბის ტექნიკური პრობლემის შესახებ, რომელიც გუშინ საღამოს დაიწყო."
        ],
        [
          "When I turned the heating thermostat up at सात o'clock last night, the radiators in the living room and bedroom stayed completely cold, and there was no hot water coming from the bathroom tap either. The small digital screen on the front of the boiler is flashing a red 'Error E-04' code.",
          "როდესაც გუშინ საღამოს შვიდ საათზე გათბობის თერმოსტატს მოვუმატე, მისაღები ოთახისა და საძინებლის რადიატორები სრულიად ცივი დარჩა, და ცხელი წყალი არც სააბაზანოს ონკანიდან წამოვიდა. ქვაბის წინა პანელზე არსებულ პატარა ციფრულ ეკრანზე კი წითლად ციმციმებს შეცდომის კოდი „Error E-04“."
        ],
        [
          "Following the instructions in the boiler manual that you left in the kitchen drawer, I checked the water pressure gauge underneath the boiler. The needle was pointing to zero, meaning the pressure has dropped, and I did not want to touch any valves myself without a qualified technician.",
          "ქვაბის ინსტრუქციის მიხედვით, რომელიც სამზარეულოს უჯრაში დამიტოვეთ, შევამოწმე ქვაბის ქვეშ არსებული წყლის წნევის საზომი (მანომეტრი). ისარი ნულზე იდგა, რაც ნიშნავს, რომ წნევა დაეცა, თუმცა კვალიფიციური სპეციალისტის გარეშე ვენტილებთან შეხება თავად არ მოვინდომე."
        ],
        [
          "Since the weather forecast says night temperatures will drop to two degrees Celsius by Thursday, could you please arrange for your heating engineer to come and inspect the boiler over the next couple of days? In the meantime, I am using my small electric heater in the bedroom.",
          "რადგან ამინდის პროგნოზის მიხედვით ხუთშაბათისთვის ღამის ტემპერატურა ორ გრადუს ცელსიუსამდე დაეცემა, ხომ ვერ სთხოვდით თქვენს გათბობის ხელოსანს, რომ მომდევნო ორი დღის განმავლობაში მოვიდეს და ქვაბი შეამოწმოს? მანამდე კი საძინებელში ჩემს პატარა ელექტროგამათბობელს ვიყენებ."
        ],
        [
          "I work from home on Tuesdays and Wednesdays, so I will be in the apartment all day tomorrow and Wednesday to let the engineer in. Alternatively, if I am at the office on Thursday, I am happy for you to let the engineer in using your spare key. Thank you very much for your help! Best regards, Clara Foster.",
          "სამშაბათსა და ოთხშაბათს სახლიდან ვმუშაობ, ამიტომ ხვალ და ზეგ მთელი დღე ბინაში ვიქნები ხელოსნის დასახვედრად. ან, თუ ხუთშაბათს ოფისში ვიქნები, წინააღმდეგი არ ვარ, რომ ხელოსანი თქვენი სათადარიგო გასაღებით შემოუშვათ. დიდი მადლობა დახმარებისთვის! პატივისცემით, კლარა ფოსტერი."
        ]
      ],
      glossary: [
        "central heating boiler|ცენტრალური გათბობის ქვაბი", "radiator|გათბობის რადიატორი (ბატარეა)", "flashing an error code|შეცდომის კოდის ციმციმი (ეკრანზე)",
        "Following the instructions in the manual,|ინსტრუქციაში მოცემული მითითებების შესაბამისად,", "water pressure gauge|წყლის წნევის საზომი (მანომეტრი)", "qualified technician|კვალიფიციური ტექნიკოსი / ხელოსანი",
        "arrange for an engineer to come|ხელოსნის მოსვლის ორგანიზება", "In the meantime,|მანამდე კი, / ამასობაში,", "let someone in|ვინმეს შენობაში/ბინაში შემოშვება", "Alternatively,|ალტერნატიულად, / სხვა შემთხვევაში,"
      ],
      questions: [
        "What details does Clara include in the Subject line so her landlord immediately knows who is writing and why?|The exact problem ('Heating Boiler Issue') and the flat number and street address ('Flat 2A, 18 Oakfield Road')|Only the word 'Hello'|The history of the building|Her bank account number",
        "What two symptoms showed Clara that the central heating boiler had stopped working last night?|The radiators in the living room and bedroom stayed cold, and there was no hot water from the bathroom tap|The kitchen lights went out and the fridge stopped|Water was flooding across the living room floor|The windows wouldn't close",
        "What helpful specific detail on the boiler screen does Clara report to help the technician prepare?|That the digital screen is flashing a red 'Error E-04' code, and the water pressure gauge needle points to zero|That the boiler is painted white|That the boiler is two metres tall|That the kitchen is cold",
        "Where did Clara find the boiler manual, and why didn't she turn the valves herself?|She found the manual in the kitchen drawer, and didn't touch the valves because she wanted a qualified technician to handle it safely|She found it on the street|She tried to fix it with a hammer|She threw the manual away",
        "Why is it urgent to have the boiler inspected before Thursday?|Because the weather forecast says night temperatures will drop to two degrees Celsius by Thursday|Because Clara is having a party for thirty people on Thursday|Because she is moving out on Friday|Because the water bill is due",
        "How is Clara keeping her bedroom warm 'In the meantime' (while waiting for the repair)?|By using her small electric heater|By lighting a campfire on the balcony|By leaving the kitchen oven door open|By wearing three winter coats in bed",
        "Why is Tuesday or Wednesday ideal for the heating engineer to visit Flat 2A?|Because Clara works from home on Tuesdays and Wednesdays, so she will be in the apartment all day to let the engineer in|Because engineers work for free on Tuesdays|Because the street is closed on Mondays|Because she is on holiday for a month",
        "What alternative solution does Clara offer if the engineer can only come on Thursday when she is at the office?|She says she is happy for Mr Miller to let the engineer in using his spare key|She will leave the front door wide open all day|She will hide the key under a stone in the street|The engineer can climb through the balcony",
        "Which linking word at the start of a sentence in Paragraph 5 means 'As another option / Or instead'?|'Alternatively,'|'Unfortunately,'|'Consequently,'|'Previously,'",
        "Why is Clara's email a model of effective communication with a landlord?|It is polite, gives exact technical details (Error E-04, zero pressure), shows she acted responsibly, and offers flexible access times|It threatens to stop paying rent immediately|It demands a brand-new apartment|It is only one sentence long"
      ]
    },
    {
      num: 28, level: "A2",
      icon: "🏛️", genre: "ტურისტული გზამკვლევი",
      title: "მშობლიური ქალაქის გზამკვლევი ტურისტებისთვის",
      subtitle: "Writing a Mini Visitor's Guide to Your Hometown",
      time: "7 წთ",
      prompt: "დაწერეთ თქვენი მშობლიური ქალაქის ან კუთხის მოკლე გზამკვლევი უცხოელი სტუმრებისთვის (სად მდებარეობს, რა უნდა ნახონ, რა კერძი გასინჯონ და როდის არის სტუმრობისთვის საუკეთესო დრო).",
      template: "Welcome to [City Name]! Located in [Region], my hometown is famous for its [Feature 1] and [Feature 2]. Visitors should start by exploring [Sight]. For lunch, don't miss tasting [Local Dish]. The best time of year to visit is [Season] because [Reason]!",
      paragraphs: [
        [
          "Visitor's Guide: Welcome to Valencia — Where Ancient History Meets the Mediterranean Sea! Located on the sunny southeastern coast of Spain, my hometown of Valencia is the third-largest city in the country. Although many tourists only visit Madrid or Barcelona, Valencia offers a wonderful blend of medieval streets, futuristic architecture, and golden sandy beaches!",
          "ტურისტის გზამკვლევი: კეთილი იყოს თქვენი მობრძანება ვალენსიაში — სადაც უძველესი ისტორია ხმელთაშუა ზღვას ხვდება! ესპანეთის მზიან სამხრეთ-აღმოსავლეთ სანაპიროზე მდებარე ჩემი მშობლიური ქალაქი ვალენსია სიდიდით მესამეა ქვეყანაში. მიუხედავად იმისა, რომ ბევრი ტურისტი მხოლოდ მადრიდს ან ბარსელონას სტუმრობს, ვალენსია გთავაზობთ შუა საუკუნეების ქუჩების, ფუტურისტული არქიტექტურისა და ოქროსფერი ქვიშიანი პლაჟების საოცარ ნაზავს!"
        ],
        [
          "The best place to begin your visit is in the historic Old Town. Start at the Central Market ('Mercado Central'), one of the largest fresh food markets in Europe, housed inside a stunning stained-glass building with a high dome. Here, over three hundred stalls sell fragrant oranges, olives, saffron, and fresh seafood!",
          "სტუმრობის დასაწყებად საუკეთესო ადგილია ისტორიული ძველი ქალაქი. დაიწყეთ ცენტრალური ბაზრით („Mercado Central“) — ეს არის ევროპის ერთ-ერთი უდიდესი სურსათის ბაზარი, რომელიც განთავსებულია მაღალგუმბათიან და ფერადი ვიტრაჟებით შემკულ ულამაზეს შენობაში. აქ სამასზე მეტ დახლზე იყიდება სურნელოვანი ფორთოხალი, ზეთისხილი, ზაფრანა და ახალი ზღვის პროდუქტები!"
        ],
        [
          "From the market, rent a bicycle and ride down into the 'Turia Gardens'. In 1957, after a major flood, the city diverted the Turia River and turned the dry nine-kilometre riverbed into a sunken green park winding right through the heart of the city! Riding under eighteen historic bridges without a single car in sight is an unforgettable experience.",
          "ბაზრიდან იქირავეთ ველოსიპედი და ჩადით „ტურიას ბაღებში“. 1957 წელს, ძლიერი წყალდიდობის შემდეგ, ქალაქმა მდინარე ტურიას კალაპოტი შეუცვალა, ხოლო დამშრალი ცხრაკილომეტრიანი მდინარის ფსკერი გადააქცია მწვანე პარკად, რომელიც პირდაპირ ქალაქის გულს მიუყვება! თვრამეტი ისტორიული ხიდის ქვეშ ველოსიპედით გასეირნება ისე, რომ ერთ მანქანასაც ვერ ხედავთ, დაუვიწყარი შთაბეჭდილებაა."
        ],
        [
          "At the eastern end of the Turia Park, you will reach the 'City of Arts and Sciences' — a breathtaking complex of white modern buildings surrounded by turquoise pools that holds an opera house, a science museum, and Europe's largest aquarium. Afterwards, take a ten-minute walk to Malvarrosa Beach to swim in the sea!",
          "ტურიას პარკის აღმოსავლეთ ბოლოში მიადგებით „ხელოვნებისა და მეცნიერების ქალაქს“ — ფირუზისფერი აუზებით გარშემორტყმულ თეთრ თანამედროვე შენობათა თვალწარმტაც კომპლექსს, რომელიც აერთიანებს ოპერის თეატრს, მეცნიერების მუზეუმსა და ევროპის უდიდეს ოკეანარიუმს. შემდეგ კი ფეხით ათ წუთში გადადით მალვაროსას პლაჟზე ზღვაში საცურაოდ!"
        ],
        [
          "No trip to Valencia is complete without tasting authentic 'Paella Valenciana', which was invented right here in the rice fields south of the city! Remember a local custom: Valencians always eat paella for lunch at two o'clock in the afternoon, never for dinner, because it is a filling dish cooked over orange-tree wood. Visit in spring or autumn for warm twenty-four-degree sunshine!",
          "ვალენსიაში მოგზაურობა წარმოუდგენელია ნამდვილი „ვალენსიური პაელიას“ დაგემოვნების გარეშე, რომელიც სწორედ აქ, ქალაქის სამხრეთით მდებარე ბრინჯის მინდვრებში შეიქმნა! გაითვალისწინეთ ადგილობრივი წესი: ვალენსიელები პაელიას ყოველთვის მიირთმევენ სადილად, შუადღის ორ საათზე, და არასდროს ვახშმად, რადგან იგი ფორთოხლის ხის შეშაზე მომზადებული ნოყიერი კერძია. ეწვიეთ ქალაქს გაზაფხულზე ან შემოდგომაზე თბილი, ოცდაოთხგრადუსიანი მზიანი ამინდისთვის!"
        ]
      ],
      glossary: [
        "my hometown|ჩემი მშობლიური ქალაქი", "a wonderful blend of...|...-ის შესანიშნავი ნაზავი/შერწყმა", "stained-glass building|ფერადი ვიტრაჟებით შემკული შენობა",
        "riverbed|მდინარის კალაპოტი (ფსკერი)", "winding right through the heart of the city|პირდაპირ ქალაქის გულში მიხვეულ-მოხვეულად გამავალი", "without a single car in sight|ისე, რომ თვალთახედვის არეში ერთი მანქანაც არ ჩანს",
        "No trip to ... is complete without...|...-ში მოგზაურობა სრულყოფილი არ იქნება ...-ის გარეშე", "local custom|ადგილობრივი წეს-ჩვეულება", "filling dish|ნოყიერი კერძი", "The best time to visit is...|სტუმრობისთვის საუკეთესო დროა..."
      ],
      questions: [
        "Where is Valencia located, and what three styles of attractions does it combine?|On the southeastern coast of Spain, combining medieval streets, futuristic architecture, and sandy beaches|In the northern mountains of Spain, famous for ski resorts|On an island in the Atlantic Ocean|In central Spain with no coast",
        "What is the 'Mercado Central' in Valencia's Old Town?|One of the largest fresh food markets in Europe, inside a stained-glass building with over 300 stalls|A modern shopping mall near the airport|An open-air flea market for old furniture|A museum of modern art",
        "How were the nine-kilometre 'Turia Gardens' created after 1957?|After a major flood in 1957, the city diverted the Turia River and turned the dry riverbed into a green park|By planting trees on the roofs of buildings|By filling a lake with sand|By demolishing an old railway line",
        "How many historic bridges do cyclists pass underneath when riding through the Turia Gardens?|Eighteen historic bridges|Only two bridges|One hundred bridges|There are no bridges in the park",
        "What is located at the eastern end of the Turia Park?|The 'City of Arts and Sciences' — a modern white complex holding an opera house, a science museum, and Europe's largest aquarium|An ancient Roman castle|The central railway station|An orange orchard",
        "How far is Malvarrosa Beach from the City of Arts and Sciences?|A ten-minute walk|A two-hour train ride|Fifty kilometres away|On the other side of the mountains",
        "Which famous Spanish rice dish was invented in the rice fields south of Valencia?|Paella Valenciana|Spaghetti Bolognese|Tortilla soup|Garlic bread",
        "What important local custom about eating paella does the writer share with visitors?|Valencians always eat paella for lunch at 2:00 PM, never for dinner, because it is a filling dish|It is only eaten for breakfast at seven in the morning|It must be eaten cold with a spoon|It is only cooked in December",
        "What kind of wood is traditionally used to cook authentic Paella Valenciana over an open fire?|Orange-tree wood|Pine needles|Oak barrels|Charcoal bricks",
        "Which seasons does the writer recommend as the best time to visit Valencia, and why?|Spring or autumn, for warm twenty-four-degree sunshine without extreme summer heat|January, for winter snow|Only during rainy weeks|Midnight in August"
      ]
    },
    {
      num: 29, level: "A2",
      icon: "🥗", genre: "მოსაზრების ესე",
      title: "მოკლე მოსაზრების ესე ჯანსაღი ცხოვრების წესზე",
      subtitle: "Writing a Short Opinion Essay: Why Daily Walking Matters",
      time: "7 წთ",
      prompt: "დაწერეთ მოკლე მოსაზრების ესე (Opinion Essay) ყოველდღიური ფიზიკური აქტივობის ან ფეხით სიარულის სარგებლიანობაზე (შესავალი მოსაზრებით, 2-3 არგუმენტი მაგალითებით და დასკვნა).",
      template: "In my opinion, [Topic] is one of the best habits for modern life. First of all, it improves our physical health by [Benefit 1]. Secondly, it helps our mental well-being because [Benefit 2]. In conclusion, even thirty minutes a day can make a huge difference!",
      paragraphs: [
        [
          "Essay Title: Why a Thirty-Minute Daily Walk Is the Best Medicine for Modern Life. In today's digital world, millions of people spend their entire day sitting down — first in a car or bus on the way to work, then for eight hours in front of an office computer, and finally on the sofa in the evening. In my opinion, making time for a brisk thirty-minute walk every single day is the simplest and most effective habit for protecting both our physical and mental health.",
          "ესეს სათაური: რატომ არის ყოველდღიური ოცდაათწუთიანი ფეხით სიარული საუკეთესო წამალი თანამედროვე ცხოვრებისთვის. დღევანდელ ციფრულ სამყაროში მილიონობით ადამიანი მთელ დღეს მჯდომარე ატარებს — ჯერ სამსახურისკენ მიმავალ მანქანასა თუ ავტობუსში, შემდეგ რვა საათი ოფისის კომპიუტერის წინ, ბოლოს კი საღამოს დივანზე. ჩემი აზრით, ყოველდღე სწრაფი ნაბიჯით ოცდაათწუთიანი გასეირნებისთვის დროის გამონახვა უმარტივესი და ყველაზე ეფექტიანი ჩვევაა როგორც ფიზიკური, ისე ფსიქიკური ჯანმრთელობის დასაცავად."
        ],
        [
          "First of all, regular walking strengthens the body without requiring expensive gym memberships or special equipment. Doctors point out that walking briskly for half an hour a day improves heart circulation, lowers blood pressure, strengthens leg bones and joints, and helps us sleep much more deeply at night. All you need is a comfortable pair of shoes!",
          "უპირველეს ყოვლისა, რეგულარული ფეხით სიარული აძლიერებს ორგანიზმს ძვირადღირებული სპორტდარბაზის აბონემენტებისა და სპეციალური აღჭურვილობის გარეშე. ექიმები აღნიშნავენ, რომ დღეში ნახევარი საათი სწრაფი ნაბიჯით სიარული აუმჯობესებს გულ-სისხლძარღვთა მუშაობას, არეგულირებს წნევას, ამაგრებს ფეხის ძვლებსა და სახსრებს და გვეხმარება ღამით ბევრად უფრო ღრმად დაძინებაში. ყველაფერი, რაც გჭირდებათ, ერთი წყვილი კომფორტული ფეხსაცმელია!"
        ],
        [
          "Secondly, walking outdoors is a powerful remedy for mental stress and screen fatigue. When we stare at glowing screens indoors for hours, our eyes get tired and our concentration drops. Stepping outside into a park or tree-lined street gives our brain a rest, lowers stress hormones, and often sparks creative ideas. Many famous writers, including Charles Dickens, walked every afternoon to think of new story plots!",
          "მეორეც, ღია ცის ქვეშ სეირნობა მძლავრი საშუალებაა გონებრივი სტრესისა და ეკრანით გამოწვეული გადაღლილობის მოსახსნელად. როდესაც შენობაში საათობით მანათობელ ეკრანებს შევცქერით, თვალები გვეღლება და კონცენტრაცია ეცემა. პარკში ან ხეებით დაჩრდილულ ქუჩაში გასვლა ტვინს ასვენებს, ამცირებს სტრესის ჰორმონებს და ხშირად ბადებს შემოქმედებით იდეებს. ბევრი ცნობილი მწერალი, მათ შორის ჩარლზ დიკენსი, ყოველ ნაშუადღევს ფეხით დადიოდა ახალი სიუჟეტების მოსაფიქრებლად!"
        ],
        [
          "Furthermore, fitting thirty minutes of walking into a busy schedule is much easier than people think. For example, you can get off the bus or metro two stops early in the morning, take a fifteen-minute walk after lunch with a colleague, or take the stairs instead of the elevator.",
          "გარდა ამისა, დატვირთულ გრაფიკში ოცდაათწუთიანი ფეხით სიარულის ჩასმა გაცილებით ადვილია, ვიდრე ბევრს ჰგონია. მაგალითად, შეგიძლიათ დილით ავტობუსიდან ან მეტროდან ორი გაჩერებით ადრე ჩამოხვიდეთ, სადილის შემდეგ კოლეგასთან ერთად თხუთმეტი წუთი გაისეირნოთ, ან ლიფტის ნაცვლად კიბით ისარგებლოთ."
        ],
        [
          "In conclusion, while technology has made our lives more convenient, our bodies and minds were designed to move. By replacing just thirty minutes of evening screen time with a daily walk in the fresh air, anyone can boost their energy, clear their mind, and enjoy a healthier, happier life.",
          "დასასრულს, მიუხედავად იმისა, რომ ტექნოლოგიამ ჩვენი ცხოვრება უფრო კომფორტული გახადა, ჩვენი სხეული და გონება მოძრაობისთვის არის შექმნილი. საღამოს ეკრანთან გატარებული დროიდან სულ რაღაც ოცდაათი წუთის სუფთა ჰაერზე გასეირნებით ჩანაცვლებით, ნებისმიერ ადამიანს შეუძლია გაიუმჯობესოს ენერგია, განიტვირთოს გონება და იცხოვროს უფრო ჯანსაღი, ბედნიერი ცხოვრებით."
        ]
      ],
      glossary: [
        "In my opinion,|ჩემი აზრით, (მოსაზრების წარდგენა)", "First of all,|უპირველეს ყოვლისა, (პირველი არგუმენტი)", "brisk walk|სწრაფი, ენერგიული ნაბიჯით სიარული",
        "Thirdly / Secondly,|მეორეც, / მესამეც,", "screen fatigue|ეკრანით გამოწვეული გადაღლილობა", "spark creative ideas|შემოქმედებითი იდეების გაღვივება / დაბადება",
        "Furthermore,|გარდა ამისა, / უფრო მეტიც,", "For example,|მაგალითად,", "In conclusion,|დასასრულს, / შეჯამების სახით,", "boost your energy|ენერგიის მომატება / გაძლიერება"
      ],
      questions: [
        "How is a standard five-paragraph 'Opinion Essay' structured?|Paragraph 1: Introduction & clear opinion; Paragraphs 2, 3, & 4: Supporting arguments with examples; Paragraph 5: Conclusion summarizing the main message|Five paragraphs of random questions without answers|Writing the conclusion in Paragraph 1 and the title at the bottom|Listing only vocabulary words",
        "Where does the writer state their main thesis (opinion) in the introductory paragraph?|In the final sentence of Paragraph 1, starting with 'In my opinion, making time for a brisk thirty-minute walk...'|In the middle of Paragraph 4|They never state their opinion|In a footnote",
        "What is the writer's first main argument ('First of all,') in Paragraph 2?|Regular walking strengthens physical health (heart, blood pressure, bones, and sleep) without needing expensive gym memberships or equipment|Walking makes you run faster than cars|Walking helps you learn foreign languages|Walking is only for elderly people",
        "What is the only piece of equipment needed for daily walking according to Paragraph 2?|A comfortable pair of shoes|A five-hundred-euro smartwatch|A carbon-fibre bicycle|Special mountain ropes",
        "What is the writer's second main argument ('Secondly,') in Paragraph 3?|Walking outdoors reduces mental stress and screen fatigue, rests the brain, and sparks creative ideas|Walking helps you read books faster in the dark|Walking heats up your apartment|Walking replaces sleeping at night",
        "Which famous nineteenth-century writer is mentioned as an example of someone who walked every afternoon to think of story plots?|Charles Dickens|William Shakespeare|Mark Twain|Arthur Conan Doyle",
        "Which linking word does the writer use at the start of Paragraph 4 to add a third practical point?|'Furthermore,'|'However,'|'Although,'|'Instead,'",
        "What three practical examples does the writer give for fitting 30 minutes of walking into a busy workday?|Getting off the bus/metro two stops early, taking a 15-minute walk after lunch, or taking the stairs instead of the elevator|Leaving work four hours early every day|Walking on a treadmill while typing emails|Running to another city",
        "Which linking phrase signals the final summarizing paragraph of an essay?|'In conclusion,'|'First of all,'|'For instance,'|'Yesterday,'",
        "What simple trade-off does the writer suggest in the final sentence of the essay?|Replacing just thirty minutes of evening screen time with a daily walk in the fresh air|Throwing away your computer and smartphone forever|Moving out of the city to a farm|Walking for six hours every night"
      ]
    },
    {
      num: 30, level: "A2",
      icon: "🎉", genre: "მისალოცი წერილი",
      title: "მისალოცი წერილი მნიშვნელოვან მოვლენაზე",
      subtitle: "Writing a Warm Congratulatory Letter for a Wedding or New Home",
      time: "7 წთ",
      prompt: "დაწერეთ გულითადი მისალოცი წერილი მეგობარს ან კოლეგას მნიშვნელოვან ცხოვრებისეულ მოვლენაზე — ქორწინებაზე, შვილის შეძენაზე, ახალ სახლში გადასვლაზე ან დაწინაურებაზე.",
      template: "Dear [Names], Warmest congratulations on your [Occasion]! I was thrilled to hear the wonderful news. Wishing you both many years of health, joy, and happiness in your new chapter together! Fondest wishes, [Your Name].",
      paragraphs: [
        [
          "Dear Julia and Marcus, Warmest congratulations to you both on your wedding last Saturday, and on moving into your new home by the river! When I saw the photographs of your garden ceremony under the cherry blossom trees, I was overjoyed to see how happy you both looked.",
          "ძვირფასო ჯულია და მარკუს, გულითადად გილოცავთ ორივეს გასულ შაბათს დაქორწინებასა და მდინარის პირას თქვენს ახალ სახლში გადასვლას! როდესაც ალუბლის აყვავებული ხეების ქვეშ გამართული თქვენი საქორწილო ცერემონიის ფოტოები ვნახე, უზომოდ გამიხარდა იმის დანახვა, თუ რა ბედნიერები იყავით."
        ],
        [
          "I was so sorry that I could not be there in person to celebrate with you on Saturday, as I was in Vienna all week for our annual engineering conference. Our mutual friend Sophie told me that your brother's speech made everyone laugh, and that the live band kept everyone dancing until midnight!",
          "ძალიან დამწყდა გული, რომ შაბათს პირადად ვერ დავესწარი თქვენს დღესასწაულს, რადგან მთელი კვირა ვენაში ვიმყოფებოდი ჩვენს ყოველწლიურ საინჟინრო კონფერენციაზე. ჩვენმა საერთო მეგობარმა სოფიმ მიამბო, რომ შენი ძმის სადღეგრძელომ ყველა გაამხიარულა, ცოცხალმა ბენდმა კი სტუმრები შუაღამემდე აცეკვა!"
        ],
        [
          "Knowing how much the two of you love cooking dinner for friends and growing herbs in the summer, your new house with the sunny kitchen and back terrace sounds like the perfect place to start this exciting new chapter of your lives together.",
          "რადგან კარგად ვიცი, როგორ გიყვართ ორივეს მეგობრებისთვის ვახშმის მომზადება და ზაფხულში მწვანილის მოყვანა, თქვენი ახალი სახლი მზიანი სამზარეულოთია და უკანა ტერასით იდეალური ადგილი ჩანს ერთობლივი ცხოვრების ამ ამაღელვებელი ახალი თავის დასაწყებად."
        ],
        [
          "To celebrate your marriage and your new kitchen, I have sent a wedding gift parcel by courier, which should arrive at your new address tomorrow afternoon. Inside, you will find a set of six handmade olive-wood salad bowls and a pair of linen aprons that I bought from a traditional workshop in Vienna!",
          "თქვენი ქორწინებისა და ახალი სამზარეულოს აღსანიშნავად, კურიერით გამოგიგზავნეთ საქორწილო საჩუქრის ამანათი, რომელიც თქვენს ახალ მისამართზე ხვალ ნაშუადღევს უნდა მოიტანონ. შიგნით დაგხვდებათ ზეთისხილის ხისგან ხელით დამზადებული ექვსი სასალათე თასის ნაკრები და სელის წინსაფრების წყვილი, რომელიც ვენის ტრადიციულ სახელოსნოში შევიძინე!"
        ],
        [
          "Once you have unpacked your boxes and settled into your new home next month, I would love to invite you both out to dinner at our favourite Italian restaurant to toast your future! Wishing you a lifetime of love, laughter, good health, and wonderful adventures together. With fondest wishes, Elena.",
          "როგორც კი მომავალ თვეში ყუთებს ამოალაგებთ და ახალ სახლში მოეწყობით, დიდი სიამოვნებით დაგპატიჟებთ ორივეს ვახშამზე ჩვენს საყვარელ იტალიურ რესტორანში თქვენი მომავლის სადღეგრძელოდ! გისურვებთ სიყვარულით, ხალისით, ჯანმრთელობითა და საოცარი თავგადასავლებით სავსე ხანგრძლივ ერთობლივ ცხოვრებას. საუკეთესო სურვილებით, ელენა."
        ]
      ],
      glossary: [
        "Warmest congratulations on...|გულითადად (უდიდესი სითბოთი) გილოცავთ ...-ს!", "I was overjoyed to see...|უზომოდ გამიხარდა იმის დანახვა, რომ...", "in person|პირადად (ადგილზე დასწრებით)",
        "mutual friend|საერთო მეგობარი", "this exciting new chapter of your lives|თქვენი ცხოვრების ეს ამაღელვებელი ახალი თავი (ეტაპი)", "settle into your new home|ახალ სახლში მოწყობა / დაბინავება",
        "toast your future|თქვენი მომავლის დალოცვა / სადღეგრძელოს თქმა", "Wishing you a lifetime of...|გისურვებთ მთელი ცხოვრების მანძილზე...", "good health and happiness|ჯანმრთელობა და ბედნიერება", "With fondest wishes,|უერთგულესი / უთბილესი სურვილებით,"
      ],
      questions: [
        "Which preposition always follows the noun 'congratulations' in English ('Warmest congratulations ___ your wedding!')?|on ('congratulations on your wedding / on your new job')|for ('congratulations for your wedding')|to ('congratulations to your wedding')|with ('congratulations with your wedding')",
        "What two happy milestones are Julia and Marcus celebrating?|Their wedding last Saturday and moving into their new home by the river|Graduating from university and buying a car|Retiring from work and moving to Spain|Opening a bakery",
        "Where was the wedding ceremony held according to the photographs Elena saw?|In a garden under cherry blossom trees|Inside a large stone cathedral|On a boat on the sea|In a hotel ballroom in Vienna",
        "Why couldn't Elena attend the wedding in person last Saturday?|Because she was in Vienna all week for her annual engineering conference|Because she was ill with the flu|Because her flight was cancelled|Because she didn't receive the invitation",
        "Who told Elena about the funny speech and the live band at the wedding?|Their mutual friend Sophie|Julia's mother|The hotel manager|She read about it in a newspaper",
        "Why does Elena say the new house with a sunny kitchen and back terrace is perfect for Julia and Marcus?|Because they both love cooking dinner for friends and growing herbs in the summer|Because they have five large dogs|Because they want to open a restaurant in their house|Because they don't like going outside",
        "What wedding gift has Elena sent them by courier from Vienna?|A set of six handmade olive-wood salad bowls and a pair of linen aprons from a traditional workshop|A silver coffee machine|A painting of Vienna|A box of Austrian chocolates",
        "When should the courier parcel arrive at their new address?|Tomorrow afternoon|Next month|On Saturday morning|In two weeks",
        "How does Elena plan to celebrate with them in person next month once they have unpacked their boxes?|She wants to invite them both out to dinner at their favourite Italian restaurant to toast their future|She wants to throw a party for fifty people in their garden|She wants to take them to Vienna|She will visit them at work",
        "Which warm closing phrase does Elena use at the end of her congratulatory letter?|'Wishing you a lifetime of love, laughter, good health, and wonderful adventures together. With fondest wishes,'|'I look forward to your prompt reply. Yours faithfully,'|'Please find attached my receipt.'|'See you at the office tomorrow.'"
      ]
    }
  ];

  // გავაერთიანოთ A1 (15 თემა) და A2 (15 თემა) App.WritingDataA-ში (სულ 30 თემა / 300 კითხვა A დონეზე!)
  App.WritingDataA = (App.WritingDataA1 || []).concat(App.WritingDataA2);
})(window);