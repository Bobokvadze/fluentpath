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