/**
 * LISTENING-A.JS — A1 დონის 15 ვრცელი მოსასმენი თემა (#1–#15)
 * თითოეულ თემაში: 5 აბზაცი, 10 საკვანძო სიტყვა და 10 გააზრების კითხვა (სულ 150 კითხვა).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ListeningDataA1 = [
    {
      num: 1, level: "A1",
      icon: "☕", genre: "ყოველდღიური დიალოგი",
      title: "კაფეში შეკვეთა დილით",
      subtitle: "Ordering at the Corner Café",
      time: "5 წთ",
      paragraphs: [
        [
          "Good morning, and welcome to the Green Leaf Café! Every weekday morning between eight and九 o'clock, our café is full of people who stop for breakfast on their way to offices and universities. Today the weather outside is cool and windy, so everyone wants a hot drink.",
          "დილა მშვიდობისა და კეთილი იყოს თქვენი მობრძანება კაფე „მწვანე ფოთოლში“! ყოველ სამუშაო დილას, რვიდან ცხრა საათამდე, ჩვენი კაფე სავსეა ადამიანებით, რომლებიც ოფისებსა და უნივერსიტეტებში მიმავალ გზაზე საუზმისთვის შემოდიან. დღეს გარეთ გრილი და ქარიანი ამინდია, ამიტომ ყველას ცხელი სასმელი სურს."
        ],
        [
          "A young woman named Emma walks up to the wooden counter and looks at the menu board on the wall. The barista, Marco, greets her with a smile and asks what she would like to order today. Emma asks for a large cup of cappuccino with oat milk and no sugar.",
          "ახალგაზრდა ქალი, სახელად ემა, ხის დახლთან მიდის და კედელზე დაკიდებულ მენიუს დაფას უყურებს. ბარისტა მარკო მას ღიმილით ესალმება და ეკითხება, რის შეკვეთას ინებებს დღეს. ემა ითხოვს დიდ ფინჯან კაპუჩინოს შვრიის რძითა და უშაქროდ."
        ],
        [
          "Next, Marco points to the glass display case, which is full of fresh pastries straight from the oven. There are butter croissants, blueberry muffins, and warm cheese sandwiches. Emma chooses a warm butter croissant and a small jar of strawberry jam.",
          "შემდეგ მარკო მიუთითებს მინის ვიტრინაზე, რომელიც სავსეა ღუმელიდან ახალგამოღებული ფუნთუშეულით. იქ არის კარაქის კრუასანები, მოცვის მაფინები და თბილი ყველის სენდვიჩები. ემა ირჩევს თბილ კარაქის კრუასანსა და მარწყვის ჯემის პატარა ქილას."
        ],
        [
          "Marco tells Emma that the cappuccino costs three euros and the croissant with jam costs two euros fifty, making the total five euros and fifty cents. Emma pays by tapping her bank card on the terminal, takes her receipt, and waits two minutes by the counter.",
          "მარკო ეუბნება ემას, რომ კაპუჩინო ღირს სამი ევრო, ხოლო კრუასანი ჯემით — ორნახევარი ევრო, რაც ჯამში ხუთ ევროსა და ორმოცდაათ ცენტს შეადგენს. ემა იხდის საბანკო ბარათის ტერმინალზე მიდებით, იღებს ქვითარს და დახლთან ორი წუთი იცდის."
        ],
        [
          "When her tray is ready, Emma carries it to a small round table by the window. She puts her laptop on the table, connects to the café's free wireless internet, and enjoys her warm breakfast while watching the red buses pass by on the street.",
          "როდესაც მისი ლანგარი მზადაა, ემას იგი მიაქვს ფანჯარასთან მდგარ პატარა მრგვალ მაგიდასთან. ის მაგიდაზე დებს ლეპტოპს, უერთდება კაფეს უფასო უსადენო ინტერნეტს და მიირთმევს თბილ საუზმეს, სანამ უყურებს ქუჩაში მიმავალ წითელ ავტობუსებს."
        ]
      ],
      glossary: [
        "weekday|სამუშაო დღე (ორშაბათი-პარასკევი)", "menu board|მენიუს დაფა", "barista|ბარისტა (ყავის მომმზადებელი)",
        "oat milk|შვრიის რძე", "display case|მინის ვიტრინა", "blueberry muffin|მოცვის მაფინი (კექსი)",
        "total|ჯამური თანხა", "tap a card|ბარათის მიდება (ტერმინალზე)", "receipt|გადახდის ქვითარი", "tray|ლანგარი"
      ],
      questions: [
        "What is the name of the café in the audio story?|The Green Leaf Café|The Red Bus Café|The Morning Sun|The Blue Cup",
        "When is the café full of people on their way to offices and universities?|Every weekday morning between eight and nine o'clock|Only on Sunday nights|At midnight|Between two and four in the afternoon",
        "What is the weather like outside today?|Cool and windy|Hot and sunny|Snowing heavily|Foggy and warm",
        "What drink does Emma order from Marco?|A large cappuccino with oat milk and no sugar|A small black coffee with two spoons of sugar|A glass of cold orange juice|A pot of green tea with lemon",
        "What food does Emma choose from the glass display case?|A warm butter croissant and a small jar of strawberry jam|A blueberry muffin and a banana|A cheese sandwich and soup|A slice of chocolate cake",
        "How much does the cappuccino cost?|Three euros|Two euros fifty|Five euros fifty|One euro",
        "What is the total price for Emma's breakfast?|Five euros and fifty cents|Three euros|Ten euros|Six euros and twenty cents",
        "How does Emma pay for her order?|By tapping her bank card on the terminal|With a ten-euro banknote|With silver coins|By sending a bank transfer",
        "Where does Emma sit with her tray?|At a small round table by the window|Outside on the street bench|At the large table near the kitchen|On the stairs",
        "What does Emma do while eating her breakfast?|She connects her laptop to the free internet and watches red buses pass by|She reads a printed newspaper|She talks on the phone with her mother|She writes postcards by hand"
      ]
    },
    {
      num: 2, level: "A1",
      icon: "🗺️", genre: "ქალაქი და ორიენტაცია",
      title: "გზის კითხვა უცხო ქალაქში",
      subtitle: "Asking for Directions in a New City",
      time: "5 წთ",
      paragraphs: [
        [
          "Paul is a tourist visiting the historic city of Oxford for the first time. He has just stepped out of the central bus station with a camera around his neck and a paper map in his hand. He wants to visit the Natural History Museum, but he is not sure which street to take.",
          "პოლი ტურისტია, რომელიც პირველად სტუმრობს ისტორიულ ქალაქ ოქსფორდს. ის ეს-ესაა გამოვიდა ცენტრალური ავტოსადგურიდან, კისერზე კამერა ჰკიდია, ხელში კი ქაღალდის რუკა უჭირავს. მას სურს ბუნების ისტორიის მუზეუმის მონახულება, მაგრამ არ არის დარწმუნებული, რომელ ქუჩას გაუყვეს."
        ],
        [
          "He approaches a policewoman standing near a pedestrian crossing and says, 'Excuse me, could you tell me how to get to the Natural History Museum?' The policewoman smiles and tells him that the museum is not far — it is about a fifteen-minute walk from the bus station.",
          "ის მიდის ქვეითთა გადასასვლელთან მდგარ პოლიციელ ქალთან და ეუბნება: „უკაცრავად, ხომ ვერ მეტყვით, როგორ მივიდე ბუნების ისტორიის მუზეუმამდე?“ პოლიციელი უღიმის და ეუბნება, რომ მუზეუმი შორს არ არის — ავტოსადგურიდან ფეხით დაახლოებით თხუთმეტი წუთის სავალზეა."
        ],
        [
          "She points down the wide avenue and gives clear instructions: 'First, go straight along High Street for two blocks until you see a tall church with a clock tower. At the traffic lights in front of the church, turn left into Park Road.'",
          "ის მიუთითებს განიერ გამზირზე და აძლევს მკაფიო ინსტრუქციას: „ჯერ იარეთ პირდაპირ ჰაი-სტრიტის გასწვრივ ორი კვარტალი, სანამ არ დაინახავთ მაღალ ეკლესიას საათის კოშკით. ეკლესიის წინ მდებარე შუქნიშანთან შეუხვიეთ მარცხნივ, პარკ-როუდზე“."
        ],
        [
          "Then she continues: 'Walk past the city library and the old bookshop on your right. After three hundred metres, you will see a large iron gate and a green lawn. The Natural History Museum is the big stone building right opposite the university park.'",
          "შემდეგ ის განაგრძობს: „ჩაუარეთ ქალაქის ბიბლიოთეკასა და ძველ წიგნის მაღაზიას თქვენგან მარჯვნივ. სამასი მეტრის შემდეგ დაინახავთ დიდ რკინის ჭიშკარსა და მწვანე გაზონს. ბუნების ისტორიის მუზეუმი არის დიდი ქვის შენობა ზუსტად უნივერსიტეტის პარკის მოპირდაპირედ“."
        ],
        [
          "Paulalso asks if there is a pharmacy along the way because he needs to buy some plasters for his shoes. The policewoman tells him there is a green pharmacy right next to the church at the traffic lights. Paul thanks her warmly and sets off down High Street.",
          "პოლი ასევე კითხულობს, არის თუ არა გზად აფთიაქი, რადგან ფეხსაცმლისთვის სანტავიკის (პლასტირის) ყიდვა სჭირდება. პოლიციელი ეუბნება, რომ შუქნიშანთან, ზუსტად ეკლესიის გვერდით, მწვანე აფთიაქია. პოლი მას თბილად უხდის მადლობას და ჰაი-სტრიტს მიუყვება."
        ]
      ],
      glossary: [
        "step out|გარეთ გამოსვლა", "pedestrian crossing|ქვეითთა გადასასვლელი", "fifteen-minute walk|ფეხით 15 წუთის სავალი",
        "go straight|პირდაპირ წასვლა", "block (city)|ქალაქის კვარტალი", "traffic lights|შუქნიშანი",
        "turn left|მარცხნივ შეხვევა", "walk past|ჩავლა (გვერდის ავლა)", "opposite|მოპირდაპირე მხარეს", "plaster (band-aid)|სამედიცინო პლასტირი (სანტავიკი)"
      ],
      questions: [
        "Which historic city is Paul visiting for the first time?|Oxford|Cambridge|Brighton|Edinburgh",
        "Where is Paul standing at the beginning of the story?|Outside the central bus station|Inside the Natural History Museum|At the airport gate|Inside a hotel room",
        "Who does Paul ask for directions?|A policewoman standing near a pedestrian crossing|A bus driver|A shopkeeper in a bookshop|A student on a bicycle",
        "How long does it take to walk from the bus station to the museum?|About fifteen minutes|About two hours|Only one minute|Forty-five minutes",
        "Which street must Paul walk along first for two blocks?|High Street|River Road|Oak Avenue|Station Lane",
        "Where should Paul turn left into Park Road?|At the traffic lights in front of a tall church with a clock tower|Behind the supermarket|In front of the hospital|At the railway bridge",
        "Which two buildings will Paul walk past on his right on Park Road?|The city library and an old bookshop|A cinema and a bakery|A bank and a post office|A gym and a swimming pool",
        "Where is the Natural History Museum located on Park Road?|Right opposite the university park, behind a large iron gate and green lawn|Underneath the bus station|On top of a high hill|Inside a shopping mall",
        "Why does Paul need to stop at a pharmacy along the way?|To buy some plasters because of his shoes|To buy medicine for a cough|To buy a bottle of water|To buy sunglasses",
        "Where is the green pharmacy located?|Right next to the church at the traffic lights|Opposite the bus station|Inside the museum|Behind the university park"
      ]
    },
    {
      num: 3, level: "A1",
      icon: "✈️", genre: "მგზავრობა",
      title: "აეროპორტის გამოცხადება და ჩასხდომა",
      subtitle: "Airport Announcements and Boarding",
      time: "5 წთ",
      paragraphs: [
        [
          "Welcome to International Terminal One! The airport departure hall is bright and busy this morning. Passengers with suitcases and backpacks are standing in line at the check-in desks, while others are looking up at the large yellow information screens.",
          "კეთილი იყოს თქვენი მობრძანება პირველ საერთაშორისო ტერმინალში! აეროპორტის გაფრენის დარბაზი დღეს დილით ნათელი და ხალხმრავალია. ჩემოდნებითა და ზურგჩანთებით მყოფი მგზავრები რეგისტრაციის დახლებთან რიგში დგანან, სხვები კი დიდ ყვითელ საინფორმაციო ეკრანებს აჰყურებენ."
        ],
        [
          "Maria is travelling to Rome to visit her older sister for a week. At the check-in desk, she shows her passport and ticket to the airline agent. She puts her big blue suitcase on the scale; it weighs eighteen kilograms, which is below the twenty-kilogram limit.",
          "მარია ერთი კვირით მიემგზავრება რომში თავისი უფროსი დის მოსანახულებლად. რეგისტრაციის დახლთან ის ავიაკომპანიის თანამშრომელს უჩვენებს პასპორტსა და ბილეთს. ის თავის დიდ ლურჯ ჩემოდანს დებს სასწორზე; იგი იწონის თვრამეტ კილოგრამს, რაც ოცკილოგრამიან ლიმიტზე ნაკლებია."
        ],
        [
          "The agent gives Maria her boarding pass for Seat 14A by the window and tells her that Flight AZ-402 to Rome is boarding from Gate Twelve. Maria takes her small hand luggage, goes through the security check, and walks to the waiting area near Gate Twelve.",
          "თანამშრომელი მარიას აძლევს ჩასხდომის ბარათს ფანჯარასთან მდებარე 14A ადგილისთვის და ეუბნება, რომ რეისი AZ-402 რომის მიმართულებით გადის მეთორმეტე გასასვლელიდან (გეითიდან). მარია იღებს თავის პატარა ხელბარგს, გადის უსაფრთხოების შემოწმებას და მიდის მეთორმეტე გასასვლელთან მდებარე მოსაცდელ სივრცეში."
        ],
        [
          "At ten fifteen, a clear voice speaks over the airport loudspeaker: 'Attention, passengers on Flight AZ-402 to Rome! There is a gate change. This flight will now depart from Gate Sixteen instead of Gate Twelve. Please proceed to Gate Sixteen immediately.'",
          "ათ საათსა და თხუთმეტ წუთზე აეროპორტის ხმამაღლა მოლაპარაკეში ისმის მკაფიო ხმა: „ყურადღება, რომის რეის AZ-402-ის მგზავრებო! შეიცვალა გასასვლელის ნომერი. ეს რეისი მეთორმეტე გასასვლელის ნაცვლად ახლა გავა მეთექვსმეტე გასასვლელიდან. გთხოვთ, დაუყოვნებლივ გადახვიდეთ მეთექვსმეტე გასასვლელთან“."
        ],
        [
          "Maria picks up her bag and walks five minutes down the hall to Gate Sixteen. The flight attendants are already checking boarding passes at the door. Maria boards the plane, finds Seat 14A by the wing, fastens her seatbelt, and gets ready for take-off.",
          "მარია იღებს ჩანთას და დერეფანში ხუთი წუთის სავალზე მდებარე მეთექვსმეტე გასასვლელთან მიდის. ბორტგამცილებლები კართან უკვე ამოწმებენ ჩასხდომის ბარათებს. მარია ადის თვითმფრინავში, პოულობს ფრთასთან მდებარე 14A ადგილს, იკრავს უსაფრთხოების ღვედს და აფრენისთვის ემზადება."
        ]
      ],
      glossary: [
        "departure hall|გაფრენის დარბაზი", "check-in desk|რეგისტრაციის დახლი", "scale|სასწორი",
        "boarding pass|ჩასხდომის ბარათი", "hand luggage|ხელბარგი", "security check|უსაფრთხოების შემოწმება",
        "loudspeaker|ხმამაღლა მოლაპარაკე / დინამიკი", "gate change|გასასვლელის (გეითის) შეცვლა", "flight attendant|ბორტგამცილებელი", "take-off|აფრენა"
      ],
      questions: [
        "Why is Maria flying to Rome?|To visit her older sister for a week|To attend a business meeting|To study Italian for a year|To work at a hotel",
        "How much does Maria's big blue suitcase weigh on the scale?|Eighteen kilograms|Twenty-five kilograms|Ten kilograms|Thirty kilograms",
        "What is the weight limit for suitcases on her flight?|Twenty kilograms|Fifteen kilograms|Thirty kilograms|Ten kilograms",
        "Which seat number is printed on Maria's boarding pass?|Seat 14A by the window|Seat 2B by the door|Seat 30C in the middle|Seat 1A at the front",
        "What is the flight number of Maria's plane to Rome?|Flight AZ-402|Flight BA-100|Flight LH-905|Flight AF-220",
        "Which gate was originally written on her boarding pass?|Gate Twelve|Gate Sixteen|Gate One|Gate Twenty",
        "What happens at ten fifteen over the airport loudspeaker?|An announcement says the gate has changed from Gate Twelve to Gate Sixteen|An announcement says the flight is cancelled due to snow|The airport shops close|Maria's sister calls her name",
        "Which new gate must the passengers go to?|Gate Sixteen|Gate Twelve|Gate Four|GateEight",
        "How long does it take Maria to walk to the new gate?|Five minutes|Half an hour|One minute|Twenty minutes",
        "What does Maria do as soon as she sits down in Seat 14A?|She fastens her seatbelt and gets ready for take-off|She orders dinner|She goes to sleep without a seatbelt|She walks to the cockpit"
      ]
    },
    {
      num: 4, level: "A1",
      icon: "🏨", genre: "სასტუმრო და ტურიზმი",
      title: "სასტუმროს ნომრის დაჯავშნა ტელეფონით",
      subtitle: "Booking a Hotel Room by Phone",
      time: "5 წთ",
      paragraphs: [
        [
          "The Sea View Hotel is a cosy three-star hotel located right on the beach in a quiet coastal town. On Monday afternoon, the telephone rings at the reception desk. The receptionist, Anna, picks up the phone and says, 'Good afternoon, Sea View Hotel, how may I help you?'",
          "სასტუმრო „ზღვის ხედი“ მყუდრო სამვარსკვლავიანი სასტუმროა, რომელიც მშვიდ ზღვისპირა ქალაქში, პირდაპირ პლაჟზე მდებარეობს. ორშაბათ ნაშუადღევს მიმღების მაგიდაზე ტელეფონი რეკავს. ადმინისტრატორი ანა იღებს ყურმილს და ამბობს: „შუადღე მშვიდობისა, სასტუმრო ზღვის ხედი, რით შემიძლია დაგეხმაროთ?“"
        ],
        [
          "The caller is Mr David Brooks. He explains that he and his wife would like to book a double room for three nights next weekend — arriving on Friday the tenth of July and checking out on Monday the thirteenth of July.",
          "ზარის ავტორია ბატონი დევიდ ბრუქსი. ის განმარტავს, რომ მას და მის მეუღლეს სურთ ორადგილიანი ნომრის დაჯავშნა სამი ღამით მომავალ უქმეებზე — ჩამოსვლა პარასკევს, ათ ივლისს, ხოლო გასვლა ორშაბათს, ცამეტ ივლისს."
        ],
        [
          "Anna checks the hotel computer calendar and says, 'Yes, Mr Brooks, we have two double rooms available for those dates: one facing the garden for eighty euros a night, and one with a balcony facing the sea for ninety-five euros a night.'",
          "ანა ამოწმებს სასტუმროს კომპიუტერულ კალენდარს და ამბობს: „დიახ, ბატონო ბრუქს, ამ თარიღებისთვის გვაქვს ორი თავისუფალი ორადგილიანი ნომერი: ერთი ბაღის ხედით ღამეში ოთხმოც ევროდ, ხოლო მეორე აივნითა და ზღვის ხედით — ღამეში ოთხმოცდათხუთმეტ ევროდ“."
        ],
        [
          "Mr Brooks chooses the room with the balcony facing the sea. He asks whether breakfast and car parking are included in the price. Anna replies that a full buffet breakfast is included every morning from seven to ten, and the hotel car park behind the building is completely free for guests.",
          "ბატონი ბრუქსი ირჩევს აივნიან ნომერს ზღვის ხედით. ის კითხულობს, შედის თუ არა ფასში საუზმე და ავტოსადგომი. ანა პასუხობს, რომ სრული შვედური მაგიდის საუზმე შედის ფასში ყოველ დილით შვიდიდან ათ საათამდე, ხოლო შენობის უკან მდებარე სასტუმროს ავტოსადგომი სტუმრებისთვის სრულიად უფასოა."
        ],
        [
          "To confirm the reservation, Anna writes down Mr Brooks's full name, phone number, and email address. She tells him that check-in starts at two o'clock in the afternoon on Friday, and sends a confirmation email to his phone right away.",
          "ჯავშნის დასადასტურებლად ანა იწერს ბატონი ბრუქსის სრულ სახელს, ტელეფონის ნომერსა და ელფოსტის მისამართს. ის ეუბნება, რომ პარასკევს სასტუმროში შესვლა (რეგისტრაცია) იწყება ნაშუადღევის ორ საათზე, და მაშინვე უგზავნის დამადასტურებელ წერილს ელფოსტაზე."
        ]
      ],
      glossary: [
        "reception desk|მიმღების მაგიდა (სასტუმროში)", "double room|ორადგილიანი ნომერი", "check out|სასტუმროდან გასვლა (ნომრის ჩაბარება)",
        "available|თავისუფალი / ხელმისაწვდომი", "facing the sea|ზღვისკენ გამავალი (ზღვის ხედით)", "included in the price|ფასში შესული",
        "buffet breakfast|შვედური მაგიდის საუზმე", "confirm a reservation|ჯავშნის დადასტურება", "check-in|სასტუმროში შესვლა / რეგისტრაცია", "right away|მაშინვე / დაუყოვნებლივ"
      ],
      questions: [
        "How many stars does the Sea View Hotel have, and where is it located?|It is a three-star hotel located right on the beach|It is a five-star hotel in the mountains|It is a hostel near the airport|It is a two-star hotel in the city centre",
        "For how many nights does Mr Brooks want to book a room?|For three nights (Friday to Monday)|For one night|For seven nights|For two weeks",
        "On what date will Mr and Mrs Brooks arrive at the hotel?|On Friday the tenth of July|On Monday the thirteenth of July|On the first of August|On the twentieth of June",
        "How much does the room facing the garden cost per night?|Eighty euros a night|Ninety-five euros a night|Fifty euros a night|One hundred and twenty euros a night",
        "How much does the room with a balcony facing the sea cost per night?|Ninety-five euros a night|Eighty euros a night|Sixty euros a night|Two hundred euros a night",
        "Which of the two rooms does Mr Brooks choose?|The room with a balcony facing the sea|The room facing the garden|A single room on the ground floor|He decides not to book a room",
        "Between what hours is the buffet breakfast served every morning?|From seven to ten in the morning|From six to eight in the morning|From nine to noon|Only at eight o'clock",
        "How much do hotel guests have to pay for the car park behind the building?|Nothing; it is completely free for guests|Ten euros a day|Five euros an hour|Twenty euros for the weekend",
        "What three details does Anna write down to confirm the reservation?|Mr Brooks's full name, phone number, and email address|His passport number, height, and age|His home address and bank password|His car colour and shoe size",
        "What time does check-in start on Friday afternoon?|At two o'clock in the afternoon|At nine in the morning|At six in the evening|At midnight"
      ]
    },
    {
      num: 5, level: "A1",
      icon: "🌦️", genre: "რადიოგადაცემა",
      title: "დილის ამინდის პროგნოზი რადიოში",
      subtitle: "The Morning Radio Weather Forecast",
      time: "5 წთ",
      paragraphs: [
        [
          "Good morning, listeners! It is seven o'clock on Friday, the fifteenth of May, and here is your national weather forecast for the day and the coming weekend. Today we have very different weather across the four regions of the country, so listen carefully before you leave home!",
          "დილა მშვიდობისა, მსმენელებო! პარასკევია, თხუთმეტი მაისი, დილის შვიდი საათი, და გთავაზობთ ქვეყნის ამინდის პროგნოზს დღევანდელი დღისა და მოახლოებული უქმეებისთვის. დღეს ქვეყნის ოთხ რეგიონში სრულიად განსხვავებული ამინდი გვაქვს, ამიტომ ყურადღებით მოუსმინეთ სახლიდან გასვლამდე!"
        ],
        [
          "In the northern mountains, the morning is cloudy and cold, with temperatures around eight degrees Celsius. Light rain will begin around noon, and a strong wind will blow from the north in the afternoon. If you are travelling to the north today, don't forget to pack a warm jacket and an umbrella.",
          "ჩრდილოეთის მთებში დილა მოღრუბლული და ცივია, ტემპერატურა დაახლოებით რვა გრადუსი ცელსიუსია. შუადღისას დაიწყება სუსტი წვიმა, ხოლო ნაშუადღევს ჩრდილოეთიდან ძლიერი ქარი დაუბერავს. თუ დღეს ჩრდილოეთში მიემგზავრებით, არ დაგავიწყდეთ თბილი ქურთუკისა და ქოლგის წაღება."
        ],
        [
          "In the eastern valleys and the capital city, there is thick morning fog near the river right now, so drivers should turn on their fog lights and drive slowly. However, by ten o'clock the sun will come out, the fog will disappear, and the afternoon will be pleasant and mild at eighteen degrees.",
          "აღმოსავლეთის ხეობებსა და დედაქალაქში ამჟამად მდინარესთან ახლოს სქელი დილის ნისლია, ამიტომ მძღოლებმა უნდა ჩართონ ნისლის ფარები და ნელა იმოძრაონ. თუმცა, ათი საათისთვის მზე გამოვა, ნისლი გაიფანტება და ნაშუადღევი სასიამოვნო და თბილი იქნება — თვრამეტი გრადუსი."
        ],
        [
          "In the western farming region, the sky is partly cloudy, but it will stay dry all day. A gentle breeze from the west makes it a perfect day for working in the gardens and fields, with afternoon temperatures reaching twenty degrees.",
          "დასავლეთის სასოფლო-სამეურნეო რეგიონში ცა ნაწილობრივ მოღრუბლულია, მაგრამ მთელი დღე უნალექოდ ჩაივლის. დასავლეთის სუსტი ნიავი იდეალურ დღეს ქმნის ბაღებსა და მინდვრებში სამუშაოდ, ხოლო ნაშუადღევს ტემპერატურა ოც გრადუსს მიაღწევს."
        ],
        [
          "Finally, the southern coast has the best weather of all today! The sky is completely clear and blue, and the temperature will reach twenty-five degrees by two o'clock. Better still, the warm, sunny weather will move across the whole country on Saturday and Sunday, giving everyone a wonderful weekend!",
          "დაბოლოს, სამხრეთ სანაპიროზე დღეს ყველაზე კარგი ამინდია! ცა სრულიად მოწმენდილი და ლურჯია, ხოლო ორი საათისთვის ტემპერატურა ოცდახუთ გრადუსს მიაღწევს. უკეთესიც: შაბათსა და კვირას თბილი, მზიანი ამინდი მთელ ქვეყანაზე გავრცელდება და ყველას შესანიშნავ უქმეებს აჩუქებს!"
        ]
      ],
      glossary: [
        "weather forecast|ამინდის პროგნოზი", "region|რეგიონი / მხარე", "degrees Celsius|გრადუსი ცელსიუსი",
        "light rain|სუსტი წვიმა", "thick fog|სქელი ნისლი", "fog lights|ნისლის ფარები (მანქანის)",
        "mild|რბილი / თბილი (ამინდი)", "partly cloudy|ნაწილობრივ მოღრუბლული", "stay dry|უნალექოდ (მშრალად) დარჩენა", "gentle breeze|სუსტი / ნაზი ნიავი"
      ],
      questions: [
        "What time and day is the radio weather forecast broadcast?|At seven o'clock on Friday morning, the fifteenth of May|At nine o'clock on Sunday night|At noon on Monday|At six in the evening in winter",
        "What is the temperature in the northern mountains this morning?|Around eight degrees Celsius|Eighteen degrees Celsius|Twenty-five degrees Celsius|Zero degrees Celsius",
        "When will light rain begin in the northern mountains?|Around noon|At six in the morning|Late at night|On Sunday",
        "What should people travelling to the north pack today?|A warm jacket and an umbrella|A swimsuit and sunglasses|Shorts and sandals|Skis and snow boots",
        "Why should drivers in the capital city drive slowly early this morning?|Because there is thick morning fog near the river|Because there is ice on the bridges|Because of a heavy thunderstorm|Because the roads are closed",
        "What time will the fog disappear and the sun come out in the capital city?|By ten o'clock|At five in the afternoon|At midnight|Tomorrow morning",
        "What will the afternoon temperature be in the capital city?|Eighteen degrees Celsius|Eight degrees Celsius|Twenty-five degrees Celsius|Thirty degrees Celsius",
        "What is the weather like in the western farming region today?|Partly cloudy, dry all day, with a gentle breeze and twenty degrees|Stormy with heavy snow|Hot and rainy|Covered in thick fog all day",
        "Which region has the warmest and sunniest weather today at twenty-five degrees?|The southern coast|The northern mountains|The eastern valleys|The western hills",
        "What will the weather be like across the whole country on Saturday and Sunday?|Warm and sunny everywhere|Cold and rainy in all regions|Snowy in the south|Windy and foggy"
      ]
    },
    {
      num: 6, level: "A1",
      icon: "🩺", genre: "ჯანმრთელობა",
      title: "კლინიკაში ექიმთან ჩაწერა",
      subtitle: "Making an Appointment at the Clinic",
      time: "5 წთ",
      paragraphs: [
        [
          "On Tuesday morning, Tom woke up with a sore throat, a headache, and a slight fever. He drank a mug of warm tea with honey, but he still felt too tired to go to the office. He decided to walk to the Riverside Medical Clinic at the end of his street.",
          "სამშაბათ დილით ტომმა გაიღვიძა ყელის ტკივილით, თავის ტკივილითა და მცირე სიცხით. მან დალია ერთი ჭიქა თბილი ჩაი თაფლით, მაგრამ თავს მაინც ზედმეტად სუსტად გრძნობდა ოფისში წასასვლელად. მან გადაწყვიტა თავისი ქუჩის ბოლოში მდებარე სამედიცინო კლინიკა „რივერსაიდში“ მისულიყო."
        ],
        [
          "At the clinic reception desk, the receptionist asked Tom if he had an appointment. Tom explained that he didn't have an appointment because he had woken up ill that morning. The receptionist checked the schedule and said that Dr Miller had a free slot at ten thirty.",
          "კლინიკის მიმღებში რეგისტრატორმა ჰკითხა ტომს, იყო თუ არა წინასწარ ჩაწერილი. ტომმა აუხსნა, რომ ჩაწერილი არ იყო, რადგან იმ დილით გახდა ავად. რეგისტრატორმა შეამოწმა განრიგი და უთხრა, რომ ექიმ მილერს თერთმეტის ნახევარზე თავისუფალი დრო ჰქონდა."
        ],
        [
          "Tom sat in the quiet waiting room for twenty minutes until the nurse called his name. Inside Room Three, Dr Miller listened to Tom's breathing with a stethoscope, looked at his red throat with a small light, and checked his temperature with a digital thermometer.",
          "ტომი ოცი წუთის განმავლობაში იჯდა მშვიდ მოსაცდელ დარბაზში, სანამ ექთანმა მისი სახელი არ გამოაცხადა. მესამე კაბინეტში ექიმმა მილერმა სტეთოსკოპით მოუსმინა ტომის სუნთქვას, პატარა ფანრით ჩახედა გაწითლებულ ყელში და ციფრული თერმომეტრით გაუზომა ტემპერატურა."
        ],
        [
          "The thermometer showed thirty-eight degrees. Dr Miller told Tom not to worry: his lungs were clear, and it was just a mild seasonal flu. She advised him to stay in bed for three days, drink plenty of warm water and herbal tea, and eat light soup and fruit.",
          "თერმომეტრმა ოცდათვრამეტი გრადუსი აჩვენა. ექიმმა მილერმა დაამშვიდა ტომი: მისი ფილტვები სუფთა იყო და ეს მხოლოდ მსუბუქი სეზონური გრიპი გახლდათ. მან ურჩია სამი დღე წოლითი რეჟიმის დაცვა, ბევრი თბილი წყლისა და ბალახეული ჩაის სმა და მსუბუქი წვნიანისა და ხილის მიღება."
        ],
        [
          "Dr Miller wrote a prescription for throat lozenges and vitamin C tablets, and gave Tom a medical note for his employer. On his way home, Tom stopped at the pharmacy next door, bought the medicine, and went straight back to his warm bed.",
          "ექიმმა მილერმა გამოწერა რეცეპტი ყელის საწუწნი აბებისა და C ვიტამინისთვის, და ტომს სამსახურში წარსადგენად მისცა სამედიცინო ცნობა (ბიულეტენი). სახლისკენ მიმავალ გზაზე ტომმა გვერდით მდებარე აფთიაქში შეიარა, იყიდა წამლები და პირდაპირ თავის თბილ საწოლში დაბრუნდა."
        ]
      ],
      glossary: [
        "sore throat|ყელის ტკივილი", "slight fever|მცირე სიცხე (ტემპერატურა)", "appointment|წინასწარი ჩაწერა / ვიზიტი",
        "free slot|თავისუფალი დრო / ფანჯარა განრიგში", "waiting room|მოსაცდელი დარბაზი", "stethoscope|სტეთოსკოპი (ფილტვების მოსასმენი)",
        "thermometer|თერმომეტრი", "lungs|ფილტვები", "prescription|ექიმის რეცეპტი", "throat lozenge|ყელის საწუწნი აბი"
      ],
      questions: [
        "What symptoms did Tom wake up with on Tuesday morning?|A sore throat, a headache, and a slight fever|A broken arm and a sprained ankle|A toothache and earache|Stomach pain after dinner",
        "Where is the Riverside Medical Clinic located?|At the end of Tom's street|On the other side of the city|Next to the airport|Inside a shopping centre",
        "What time did Dr Miller have a free slot to see Tom?|At ten thirty|At eight in the morning|At four in the afternoon|The next day",
        "How long did Tom wait in the waiting room?|For twenty minutes|For three hours|For two minutes|All morning",
        "Which room number was Dr Miller's office?|Room Three|Room Ten|Room One|Room Twelve",
        "What temperature did the digital thermometer show?|Thirty-eight degrees Celsius|Thirty-six point six degrees|Forty-one degrees|Thirty-five degrees",
        "What did Dr Miller say about Tom's lungs and his illness?|His lungs were clear, and it was just a mild seasonal flu|He needed an operation at the hospital|He had an allergy to cats|He was completely healthy",
        "For how many days did the doctor advise Tom to stay in bed?|For three days|For two weeks|For one month|Only for two hours",
        "What did Dr Miller write on the prescription?|Throat lozenges and vitamin C tablets|Strong sleeping pills|Eye drops|Bandages for his knee",
        "What document did the doctor give Tom for his office employer?|A medical note|A train ticket|A library card|A receipt for his shoes"
      ]
    },
    {
      num: 7, level: "A1",
      icon: "🧥", genre: "შოპინგი",
      title: "ზამთრის ტანსაცმლის შერჩევა მაღაზიაში",
      subtitle: "Shopping for Winter Clothes",
      time: "5 წთ",
      paragraphs: [
        [
          "December is here, and the morning air is freezing cold. Yesterday, Daniel realized that his old winter jacket was too small and had a broken zipper. Today is Saturday, so he is visiting the Nord Department Store in the city centre to buy a new warm coat and a woollen scarf.",
          "დეკემბერი დადგა და დილის ჰაერი ყინულივით ცივია. გუშინ დანიელი მიხვდა, რომ მისი ძველი ზამთრის ქურთუკი დაუპატარავდა და თან ელვა-შესაკრავიც გაფუჭებული ჰქონდა. დღეს შაბათია, ამიტომ ის ქალაქის ცენტრში მდებარე უნივერმაღ „ნორდს“ სტუმრობს ახალი თბილი პალტოსა და შალის კაშნეს საყიდლად."
        ],
        [
          "Daniel takes the escalator up to the Men's Clothing Department on the second floor. The shop assistant, a polite young man named Kevin, asks if he needs any help. Daniel says he is looking for a waterproof winter coat in a medium size.",
          "დანიელი ესკალატორით ადის მეორე სართულზე, მამაკაცის ტანსაცმლის განყოფილებაში. კონსულტანტი, თავაზიანი ახალგაზრდა მამაკაცი, სახელად კევინი, ეკითხება, სჭირდება თუ არა დახმარება. დანიელი ეუბნება, რომ ეძებს საშუალო ზომის (Medium) წყალგაუმტარ ზამთრის პალტოს."
        ],
        [
          "Kevin shows him two coats on the rack: a black coat and a dark blue coat with a warm hood and four deep pockets. Daniel likes the dark blue coat and takes it into the fitting room to try it on in front of the mirror.",
          "კევინი საკიდზე უჩვენებს ორ პალტოს: შავს და მუქ ლურჯს, რომელსაც აქვს თბილი კაპიუშონი და ოთხი ღრმა ჯიბე. დანიელს მოსწონს მუქი ლურჯი პალტო და შეაქვს გასახდელ ოთახში სარკის წინ მოსაზომებლად."
        ],
        [
          "The medium size is a little too tight around the shoulders when he wears a sweater underneath. Kevin brings him a large size in the same dark blue colour. The large size fits Daniel perfectly! Next to the mirrors, Daniel also picks out a soft grey woollen scarf.",
          "საშუალო ზომა მხრებში ოდნავ ვიწრო აღმოჩნდება, როცა ქვემოდან სვიტერი აცვია. კევინს მისთვის მოაქვს დიდი ზომა (Large) იმავე მუქ ლურჯ ფერში. დიდი ზომა დანიელს იდეალურად ადგას! სარკეების გვერდით დანიელი ასევე არჩევს რბილ ნაცრისფერ შალის კაშნეს."
        ],
        [
          "There is a winter sale at the store this weekend, so all coats have a twenty percent discount! Instead of one hundred euros, the coat costs eighty euros, and the scarf costs fifteen euros. Daniel pays at the cash desk, puts his new coat on immediately, and walks out into the cold street feeling warm and comfortable.",
          "ამ უქმეებზე მაღაზიაში ზამთრის ფასდაკლებაა, ამიტომ ყველა პალტოზე მოქმედებს ოცპროცენტიანი ფასდაკლება! ასი ევროს ნაცვლად პალტო ღირს ოთხმოცი ევრო, ხოლო კაშნე — თხუთმეტი ევრო. დანიელი იხდის სალაროსთან, მაშინვე იცვამს თავის ახალ პალტოს და ცივ ქუჩაში თბილად და კომფორტულად გადის."
        ]
      ],
      glossary: [
        "zipper|ელვა-შესაკრავი", "department store|უნივერმაღი / დიდი სავაჭრო ცენტრი", "escalator|ესკალატორი (მოძრავი კიბე)",
        "shop assistant|მაღაზიის კონსულტანტი", "hood|კაპიუშონი (ქურთუკის ქუდი)", "fitting room|ტანსაცმლის მოსაზომებელი ოთახი",
        "tight|ვიწრო / მოჭერილი", "fit perfectly|იდეალურად მორგება (ზომაში)", "discount|ფასდაკლება", "cash desk|სალარო"
      ],
      questions: [
        "Why does Daniel need to buy a new winter coat?|Because his old jacket is too small and has a broken zipper|Because he lost his coat on the train|Because he is moving to a hot country|Because his brother borrowed his coat",
        "On which floor is the Men's Clothing Department located?|On the second floor|On the ground floor|On the fifth floor|In the basement",
        "What size does Daniel ask for at first?|Medium size|Small size|Large size|Extra large size",
        "What features does the dark blue coat have?|A warm hood and four deep pockets|Silver buttons and no pockets|Short sleeves|A fur collar and two small pockets",
        "Why doesn't Daniel buy the medium-sized coat?|It is a little too tight around the shoulders over his sweater|The sleeves are too long|It has a broken button|He doesn't like the blue colour",
        "Which size fits Daniel perfectly?|The large size|The small size|The medium size|None of them",
        "What colour woollen scarf does Daniel pick out next to the mirrors?|A soft grey woollen scarf|A bright red scarf|A yellow and black scarf|A white silk scarf",
        "How much is the winter sale discount on all coats this weekend?|Twenty percent|Fifty percent|Ten percent|Five percent",
        "How much does the coat cost after the discount, instead of 100 euros?|Eighty euros|Ninety euros|Fifty euros|Seventy-five euros",
        "What does Daniel do right after paying at the cash desk?|He puts his new coat on immediately and walks out into the cold street|He leaves the coat at the shop for tomorrow|He returns the grey scarf|He goes to the café on the third floor"
      ]
    },
    {
      num: 8, level: "A1",
      icon: "📱", genre: "კომუნიკაცია",
      title: "მეგობრების ხმოვანი შეტყობინებები",
      subtitle: "Three Voice Messages on Sarah's Phone",
      time: "5 წთ",
      paragraphs: [
        [
          "At five o'clock on Friday afternoon, Sarah finishes her piano lesson at the music school and turns on her mobile phone. She sees that she has three new voice messages: one from her friend Lucy, one from her brother Ben, and one from the town bookshop.",
          "პარასკევ ნაშუადღევს, ხუთ საათზე, სარა მუსიკალურ სკოლაში ასრულებს ფორტეპიანოს გაკვეთილს და რთავს მობილურ ტელეფონს. ის ხედავს, რომ დახვდა სამი ახალი ხმოვანი შეტყობინება: ერთი მეგობარ ლუსისგან, ერთი თავისი ძმის — ბენისგან, და ერთიც ქალაქის წიგნის მაღაზიიდან."
        ],
        [
          "Sarah listens to the first message from Lucy: 'Hi Sarah! It's Lucy. We planned to see the new comedy film at the Star Cinema at सात o'clock tonight, but all tickets for the seven o'clock show are sold out! Luckily, there are good seats in the middle row for the eight fifteen show. Call me back if eight fifteen is okay for you!'",
          "სარა უსმენს პირველ შეტყობინებას ლუსისგან: „გამარჯობა სარა! ლუსი ვარ. ამაღამ შვიდ საათზე კინოთეატრ „სტარში“ ახალი კომედიური ფილმის ნახვას ვაპირებდით, მაგრამ შვიდი საათის სეანსზე ყველა ბილეთი გაყიდულია! საბედნიეროდ, რვის თხუთმეტი წუთის სეანსზე შუა რიგში კარგი ადგილებია. გადმომირეკე, თუ რვის თხუთმეტი წუთი გაწყობს!“"
        ],
        [
          "Since they now have an extra hour before the film, Lucy adds in her message: 'Let's meet at half past six in front of the Italian pizzeria next to the cinema. We can have dinner together before the movie starts!'",
          "რადგან ახლა ფილმის დაწყებამდე ერთი დამატებითი საათი აქვთ, ლუსი შეტყობინებაში ამატებს: „მოდი, შვიდის ნახევარზე კინოთეატრის გვერდით მდებარე იტალიური პიცერიის წინ შევხვდეთ. შეგვიძლია ფილმის დაწყებამდე ერთად ვივახშმოთ!“"
        ],
        [
          "Next, Sarah plays the second message from her brother Ben: 'Hey Sarah, I am staying at the university library until eight tonight to study for my history exam. I left my house keys on the kitchen table this morning. Please don't lock the top lock when you go out, or leave the spare key under the flowerpot on the porch!'",
          "შემდეგ სარა რთავს მეორე შეტყობინებას თავისი ძმისგან, ბენისგან: „ჰეი სარა, ამაღამ რვა საათამდე უნივერსიტეტის ბიბლიოთეკაში ვრჩები ისტორიის გამოცდისთვის სამეცადინოდ. დღეს დილით სახლის გასაღები სამზარეულოს მაგიდაზე დამრჩა. გთხოვ, გასვლისას ზედა საკეტს ნუ ჩაკეტავ, ან სათადარიგო გასაღები ვერანდაზე ყვავილის ქოთნის ქვეშ დამიტოვე!“"
        ],
        [
          "Finally, the third message is from Mr Carter at the town bookshop: 'Good afternoon, Miss Sarah. The Spanish dictionary that you ordered last week has arrived today. You can pick it up tomorrow between nine in the morning and six in the evening.' Sarah smiles and calls Lucy back right away to say yes to the pizza and the eight fifteen movie.",
          "დაბოლოს, მესამე შეტყობინება არის ბატონი კარტერისგან ქალაქის წიგნის მაღაზიიდან: „შუადღე მშვიდობისა, მის სარა. ესპანური ენის ლექსიკონი, რომელიც გასულ კვირას შეუკვეთეთ, დღეს ჩამოვიდა. შეგიძლიათ წაიღოთ ხვალ, დილის ცხრა საათიდან საღამოს ექვს საათამდე“. სარა იღიმის და მაშინვე ურეკავს ლუსის, რათა დაეთანხმოს პიცასა და რვის თხუთმეტი წუთის სეანსზე."
        ]
      ],
      glossary: [
        "voice message|ხმოვანი შეტყობინება", "sold out|სრულად გაყიდული (ბილეთები)", "middle row|შუა რიგი (დარბაზში)",
        "call back|უკან გადარეკვა", "extra hour|დამატებითი ერთი საათი", "house keys|სახლის გასაღები",
        "spare key|სათადარიგო (დამატებითი) გასაღები", "flowerpot|ყვავილის ქოთანი", "order (verb)|შეკვეთა", "pick up|წამოღება / გატანა"
      ],
      questions: [
        "Why was Sarah's mobile phone turned off until five o'clock?|Because she was having a piano lesson at the music school|Because the battery was dead|Because she was on an airplane|Because she was sleeping",
        "Why can't Sarah and Lucy watch the film at seven o'clock as planned?|Because all tickets for the seven o'clock show are sold out|Because the cinema is closed today|Because Lucy has to work until eight|Because the film was cancelled",
        "What time is the later show that still has good seats in the middle row?|At eight fifteen (8:15 PM)|At nine thirty|At six o'clock|At midnight",
        "Where and when does Lucy suggest meeting before the movie?|At half past six in front of the Italian pizzeria next to the cinema|At eight o'clock at the bus stop|At five o'clock at the library|At seven o'clock at Sarah's house",
        "Why is Sarah's brother Ben staying at the university library until eight tonight?|To study for his history exam|To work at the library reception|To wait for the rain to stop|To meet his friends",
        "Where did Ben accidentally leave his house keys this morning?|On the kitchen table|In his coat pocket|At the pizzeria|On the school bus",
        "Where does Ben ask Sarah to leave the spare key if she locks the door?|Under the flowerpot on the porch|In the mailbox|With the neighbour|At the bookshop",
        "Who sent the third voice message to Sarah's phone?|Mr Carter from the town bookshop|Her piano teacher|The cinema manager|Her mother",
        "What item that Sarah ordered last week has arrived at the bookshop?|A Spanish dictionary|A piano music book|A history textbook|A travel guide to Rome",
        "Between what hours can Sarah pick up her book tomorrow?|Between nine in the morning and six in the evening|Between eight and noon only|After seven in the evening|Only on Monday"
      ]
    },
    {
      num: 9, level: "A1",
      icon: "🍝", genre: "კულინარია და სერვისი",
      title: "სადილი იტალიურ რესტორანში",
      subtitle: "Lunch at an Italian Restaurant",
      time: "5 წთ",
      paragraphs: [
        [
          "It is one o'clock on Sunday afternoon, and Anna and her brother Mark are having lunch at 'Bella Roma', a small Italian restaurant near the river. The restaurant has red-and-white tablecloths, pictures of Venice on the walls, and a warm smell of garlic and fresh basil from the kitchen.",
          "კვირა შუადღის პირველი საათია და ანა და მისი ძმა მარკი სადილობენ მდინარესთან ახლოს მდებარე პატარა იტალიურ რესტორან „ბელა რომაში“. რესტორანში მაგიდებზე გადაფარებულია წითელ-თეთრი სუფრები, კედლებზე ჰკიდია ვენეციის სურათები, სამზარეულოდან კი ნივრისა და ცოცხალი რეჰანის (ბაზილიკის) თბილი სურნელი გამოდის."
        ],
        [
          "A polite waiter named Lorenzo shows them to a quiet table on the terrace and brings two menus. First, he asks what they would like to drink. Anna orders a glass of homemade lemonade with mint, and Mark asks for a large bottle of sparkling mineral water for the table.",
          "თავაზიანი მიმტანი, სახელად ლორენცო, მათ ტერასაზე მდგარ მშვიდ მაგიდამდე მიაცილებს და მოაქვს ორი მენიუ. ჯერ ის კითხულობს, რას ინებებენ დასალევად. ანა უკვეთავს ერთ ჭიქა სახლში დამზადებულ ლიმონათს პიტნით, მარკი კი მაგიდისთვის ითხოვს გაზიანი მინერალური წყლის დიდ ბოთლს."
        ],
        [
          "For the starter, they decide to share a plate of warm garlic bread with tomatoes and olive oil. For the main course, Anna chooses spaghetti with tomato sauce and parmesan cheese, while Mark orders a baked chicken breast with rosemary potatoes and green salad.",
          "წასახემსებლად (სტარტერად) ისინი წყვეტენ გაიყონ ერთი თეფში თბილი ნივრიანი პური პომიდვრითა და ზეითუნის ზეთით. ძირითად კერძად ანა ირჩევს სპაგეტის პომიდვრის სოუსითა და პარმეზანის ყველით, მარკი კი უკვეთავს ღუმელში გამომცხვარ ქათმის ფილეს როზმარინიანი კარტოფილითა და მწვანე სალათით."
        ],
        [
          "The food arrives in fifteen minutes, hot and delicious. Halfway through the meal, Lorenzo checks if everything is to their liking and brings a little extra grated cheese for Anna's pasta. After they finish their main courses, he clears the plates and asks if they would like to see the dessert menu.",
          "საჭმელი თხუთმეტ წუთში მოაქვთ — ცხელი და უგემრიელესი. სადილის შუაში ლორენცო ამოწმებს, ყველაფერი მოსწონთ თუ არა, და ანას პასტისთვის მოაქვს ცოტაოდენი დამატებითი გახეხილი ყველი. ძირითადი კერძების დასრულების შემდეგ ის ალაგებს თეფშებს და კითხულობს, ხომ არ სურთ დესერტის მენიუს ნახვა."
        ],
        [
          "Mark is full, so he only orders a small espresso coffee. Anna orders a bowl of vanilla and pistachio ice cream. When they finish, Mark asks for the bill. The total is thirty-two euros, and Mark leaves thirty-five euros on the table to thank Lorenzo for the wonderful service.",
          "მარკი დანაყრებულია, ამიტომ მხოლოდ პატარა ყავა ესპრესოს უკვეთავს. ანა უკვეთავს ვანილისა და ფისტას ნაყინს. დასრულებისას მარკი ითხოვს ანგარიშს. ჯამური თანხა ოცდათორმეტი ევროა, მარკი კი მაგიდაზე ოცდათხუთმეტ ევროს ტოვებს ლორენცოსთვის შესანიშნავი მომსახურებისთვის მადლობის გადასახდელად."
        ]
      ],
      glossary: [
        "tablecloth|მაგიდის გადასაფარებელი / სუფრა", "fresh basil|ცოცხალი ბაზილიკი / რეჰანი", "waiter|მიმტანი",
        "sparkling water|გაზიანი წყალი", "starter|წასახემსებელი (პირველი კერძი)", "main course|ძირითადი კერძი",
        "grated cheese|გახეხილი ყველი", "clear the plates|თეფშების ალაგება", "pistachio|ფისტა (თხილეული)", "bill|ანგარიში (რესტორანში)"
      ],
      questions: [
        "What is the name of the Italian restaurant where Anna and Mark have lunch?|Bella Roma|Venice Café|The Green Leaf|River Pasta",
        "What pictures are hanging on the walls of the restaurant?|Pictures of Venice|Pictures of Rome|Maps of the world|Paintings of fruit",
        "Where do Anna and Mark sit for their lunch?|At a quiet table on the terrace|In the basement|At the bar counter|Next to the kitchen door",
        "What drinks do they order first?|A glass of homemade lemonade with mint and a bottle of sparkling water|Two cups of hot tea|Orange juice and milk|Two glasses of cola",
        "What do they share as a starter?|A plate of warm garlic bread with tomatoes and olive oil|A bowl of pumpkin soup|A Greek salad|A plate of fried fish",
        "What does Mark order for his main course?|Baked chicken breast with rosemary potatoes and green salad|Spaghetti with tomato sauce|A large cheese pizza|Beef soup with rice",
        "How long does it take for the hot food to arrive?|Fifteen minutes|Forty-five minutes|Two minutes|One hour",
        "What extra item does Lorenzo bring for Anna halfway through the meal?|A little extra grated cheese for her pasta|A spoon for soup|A bottle of olive oil|More garlic bread",
        "What do Mark and Anna order at the end of the meal?|Mark orders a small espresso, and Anna orders vanilla and pistachio ice cream|They both order chocolate cake|They order nothing at all|Mark orders tea and Anna orders apple pie",
        "How much is the bill, and how much money does Mark leave on the table?|The bill is 32 euros, and he leaves 35 euros|The bill is 50 euros, and he leaves 50 euros|The bill is 20 euros, and he leaves 25 euros|The bill is 15 euros"
      ]
    },
    {
      num: 10, level: "A1",
      icon: "🏊‍♂️", genre: "სპორტი და ფიტნესი",
      title: "სპორტულ ცენტრში გაწევრიანება",
      subtitle: "Joining the Local Sports Centre",
      time: "5 წთ",
      paragraphs: [
        [
          "Alex wants to exercise three times a week after work to stay healthy and strong. On Monday evening at six o'clock, he visits the Olympic Sports Centre near his apartment to ask about membership and see the facilities.",
          "ალექსს სურს კვირაში სამჯერ სამსახურის შემდეგ ივარჯიშოს, რათა იყოს ჯანმრთელი და ძლიერი. ორშაბათ საღამოს, ექვს საათზე, ის თავის ბინასთან ახლოს მდებარე „ოლიმპიურ სპორტულ ცენტრს“ სტუმრობს აბონემენტის პირობების გასაგებად და დარბაზების დასათვალიერებლად."
        ],
        [
          "The manager at the front desk, Miss Laura, welcomes him and gives him a short tour of the building. On the ground floor, there is a twenty-five-metre heated swimming pool and a sauna. On the first floor, there is a bright fitness gym with treadmills, stationary bicycles, and weights.",
          "მიმღების მენეჯერი, მის ლორა, ესალმება მას და შენობაში მოკლე ტურს უწყობს. პირველ სართულზე განთავსებულია ოცდახუთმეტრიანი თბილი საცურაო აუზი და საუნა. მეორე სართულზე კი არის ნათელი ფიტნეს-დარბაზი სარბენი ბილიკებით, ველოტრენაჟორებითა და სიმძიმეებით."
        ],
        [
          "Miss Laura explains the opening hours: the centre is open from six thirty in the morning until ten at night on weekdays, and from eight in the morning until eight in the evening on Saturdays and Sundays.",
          "მის ლორა უხსნის სამუშაო საათებს: ცენტრი ღიაა სამუშაო დღეებში დილის შვიდის ნახევრიდან ღამის ათ საათამდე, ხოლო შაბათსა და კვირას — დილის რვა საათიდან საღამოს რვა საათამდე."
        ],
        [
          "Next, she explains the two membership options. The 'Gym Only' card costs thirty euros a month, while the 'Full Membership' card — which includes the gym, the swimming pool, and free group yoga and boxing classes — costs forty euros a month.",
          "შემდეგ ის აცნობს აბონემენტის ორ ვარიანტს. ბარათი „მხოლოდ დარბაზი“ ღირს თვეში ოცდაათი ევრო, ხოლო „სრული აბონემენტი“ — რომელშიც შედის დარბაზი, საცურაო აუზი და იოგისა და კრივის უფასო ჯგუფური ვარჯიშები — ღირს თვეში ორმოცი ევრო."
        ],
        [
          "Alex chooses the Full Membership because he loves swimming on Sundays. He fills in the registration form, takes a photo for his plastic membership card, and receives a blue electronic wristband that opens the locker room door and his personal locker.",
          "ალექსი ირჩევს სრულ აბონემენტს, რადგან კვირაობით ცურვა ძალიან უყვარს. ის ავსებს სარეგისტრაციო ანკეტას, იღებს ფოტოს პლასტიკური ბარათისთვის და იღებს ლურჯ ელექტრონულ სამაჯურს, რომელიც აღებს გასახდელის კარსა და მის პირად კარადას."
        ]
      ],
      glossary: [
        "membership|წევრობა / აბონემენტი", "facilities|ინფრასტრუქტურა / სავარჯიშო სივრცეები", "heated pool|გათბობადი (თბილი) აუზი",
        "treadmill|სარბენი ბილიკი", "weights|სავარჯიშო წონები / ჰანტელები", "opening hours|სამუშაო საათები",
        "group classes|ჯგუფური ვარჯიშები", "registration form|სარეგისტრაციო ფორმა/ანკეტა", "wristband|სამაჯური", "locker|პირადი ჩასაკეტი კარადა (გასახდელში)"
      ],
      questions: [
        "How often does Alex want to exercise after work?|Three times a week|Every single morning|Once a month|Only on Saturdays",
        "What facilities are on the ground floor of the Olympic Sports Centre?|A twenty-five-metre heated swimming pool and a sauna|A basketball court and café|A library and cinema|Tennis courts",
        "What equipment is in the fitness gym on the first floor?|Treadmills, stationary bicycles, and weights|Boats and canoes|Skis and sleds|Pianos and guitars",
        "What are the opening hours of the sports centre on weekdays?|From 6:30 in the morning until 10:00 at night|From 9:00 AM to 5:00 PM|Open 24 hours a day|From noon until midnight",
        "What are the opening hours on Saturdays and Sundays?|From eight in the morning until eight in the evening|It is closed on weekends|From six in the morning until midnight|Only for two hours in the morning",
        "How much does the 'Gym Only' membership card cost per month?|Thirty euros a month|Forty euros a month|Twenty euros a month|One hundred euros a month",
        "What is included in the forty-euro 'Full Membership' card?|The gym, the swimming pool, and free group yoga and boxing classes|Only the swimming pool on Mondays|Free lunch at the restaurant|A personal car park",
        "Why does Alex choose the Full Membership?|Because he loves swimming on Sundays|Because it is cheaper than the Gym Only card|Because he only wants to use the treadmill|Because his brother works at the pool",
        "What colour is the electronic wristband that Alex receives?|Blue|Red|Yellow|Black",
        "What does the electronic wristband open?|The locker room door and his personal locker|The front door of his apartment|His car door|The cash desk"
      ]
    },
    {
      num: 11, level: "A1",
      icon: "🚌", genre: "ექსკურსია",
      title: "ავტობუსის ტური გიდთან ერთად",
      subtitle: "A Guided Bus Tour of the Capital",
      time: "5 წთ",
      paragraphs: [
        [
          "Good morning, ladies and gentlemen, and welcome aboard the Red City Sightseeing Bus! My name is Oliver, your tour guide for today, and our driver is Patrick. Since the sun is shining brightly, the top deck of our double-decker bus is open, giving you a wonderful view of the streets.",
          "დილა მშვიდობისა, ქალბატონებო და ბატონებო, და კეთილი იყოს თქვენი მობრძანება ქალაქის წითელ საექსკურსიო ავტობუსში! მე მქვია ოლივერი, დღეს თქვენი გიდი ვიქნები, ჩვენი მძღოლი კი პატრიკია. რადგან მზე კაშკაშად ანათებს, ჩვენი ორსართულიანი ავტობუსის ზედა ბაქანი ღიაა, რაც ქუჩების შესანიშნავ ხედს გადაგიშლით."
        ],
        [
          "Our circular tour of the capital takes ninety minutes and has eight stops near the main attractions. With your day ticket, you can hop off the bus at any stop to explore a museum or park, and hop back on the next red bus, which comes every twenty minutes.",
          "ჩვენი წრიული ტური დედაქალაქის გარშემო ოთხმოცდაათ წუთს გრძელდება და აქვს რვა გაჩერება მთავარ ღირსშესანიშნაობებთან. თქვენი ერთდღიანი ბილეთით შეგიძლიათ ჩამოხვიდეთ ავტობუსიდან ნებისმიერ გაჩერებაზე მუზეუმის ან პარკის დასათვალიერებლად და შემდეგ კვლავ ახვიდეთ მომდევნო წითელ ავტობუსში, რომელიც ყოველ ოც წუთში ერთხელ დადის."
        ],
        [
          "For your safety, please remain seated while the bus is moving and do not stand on the stairs. Under each seat, there is a small green pouch containing free headphones. You can plug them into the audio panel next to your seat and choose Channel Two for English.",
          "თქვენივე უსაფრთხოებისთვის, გთხოვთ დარჩეთ თქვენს ადგილებზე, სანამ ავტობუსი მოძრაობს, და ნუ დადგებით კიბეზე. თითოეული სკამის ქვეშ არის პატარა მწვანე ჩანთა უფასო ყურსასმენებით. შეგიძლიათ შეაერთოთ ისინი თქვენი სკამის გვერდით განთავსებულ აუდიოპანელში და ინგლისური ენისთვის აირჩიოთ მეორე არხი."
        ],
        [
          "Look to your left now as we cross the Old Stone Bridge! You can see the Royal Palace with its golden roof and the boats sailing along the river. In five minutes, we will arrive at Stop Three: the National Art Gallery, where admission is free every day.",
          "ახლა გაიხედეთ მარცხნივ, სანამ ძველ ქვის ხიდს ვკვეთთ! თქვენ ხედავთ სამეფო სასახლეს ოქროსფერი სახურავითა და მდინარეზე მცურავ ნავებს. ხუთ წუთში მივალთ მესამე გაჩერებასთან: ეს არის ეროვნული სამხატვრო გალერეა, სადაც შესვლა ყოველდღე უფასოა."
        ],
        [
          "At the end of our route, at Stop Eight, we will stop near the historic Harbour Market, which is a great place to eat fish and chips for lunch. Enjoy the ride, take plenty of photos, and ask me if you have any questions when the bus stops!",
          "ჩვენი მარშრუტის ბოლოს, მერვე გაჩერებაზე, გავჩერდებით ისტორიულ საპორტო ბაზართან, რომელიც შესანიშნავი ადგილია სადილად თევზისა და კარტოფილის მისართმევად. ისიამოვნეთ მგზავრობით, გადაიღეთ ბევრი ფოტო და თუ რაიმე კითხვა გექნებათ, მკითხეთ გაჩერებებზე!"
        ]
      ],
      glossary: [
        "sightseeing bus|საექსკურსიო ავტობუსი", "double-decker bus|ორსართულიანი ავტობუსი", "top deck|ზედა სართული / ბაქანი (ავტობუსის)",
        "circular tour|წრიული ტური", "hop off and hop on|ავტობუსიდან ჩამოსვლა და მომდევნოზე ასვლა", "remain seated|ადგილზე დარჩენა (ჯდომა)",
        "headphones|ყურსასმენები", "audio panel|აუდიოპანელი", "admission is free|შესვლა უფასოა", "route|მარშრუტი / გზა"
      ],
      questions: [
        "What are the names of the tour guide and the bus driver?|The tour guide is Oliver, and the driver is Patrick|The guide is Patrick, and the driver is Marco|The guide is Alex, and the driver is Ben|The guide is Tom, and the driver is Kevin",
        "Why is the top deck of the double-decker bus open today?|Because the sun is shining brightly|Because it is snowing|Because the roof is broken|Because it is night-time",
        "How long does the full circular tour take without getting off?|Ninety minutes|Three hours|Twenty minutes|Half an hour",
        "How many stops does the sightseeing bus have, and how often does the next bus come?|It has eight stops, and a bus comes every twenty minutes|It has two stops, and a bus comes once a day|It has twenty stops, and a bus comes every hour|It never stops",
        "What safety rule does Oliver remind passengers to follow?|Remain seated while the bus is moving and do not stand on the stairs|Wear a bicycle helmet on the bus|Do not take any photographs|Keep all windows closed",
        "Where can passengers find the free headphones?|In a small green pouch under each seat|At the driver's desk|At the hotel reception|In the ticket office",
        "Which channel on the audio panel is for English?|Channel Two|Channel One|Channel Five|Channel Ten",
        "What can passengers see on their left as the bus crosses the Old Stone Bridge?|The Royal Palace with its golden roof and boats on the river|The airport runway|A ski resort in the mountains|An underground metro station",
        "How much does admission to the National Art Gallery at Stop Three cost?|It is free every day|Fifteen euros|Ten euros for adults|Twenty euros",
        "What is located at Stop Eight at the end of the route?|The historic Harbour Market, a great place to eat fish and chips|A swimming pool|A university library|A zoo"
      ]
    },
    {
      num: 12, level: "A1",
      icon: "🚲", genre: "აქტიური დასვენება",
      title: "ველოსიპედის ქირაობა ტბის პირას",
      subtitle: "Renting a Bicycle by the Lake",
      time: "5 წთ",
      paragraphs: [
        [
          "On Sunday morning, Clara and her cousin Leo walk to the 'Green Wheel' bicycle rental cabin near the entrance of Swan Lake Park. A cycle path goes all the way around the lake — a distance of twelve kilometres — and there are no cars allowed on the trail.",
          "კვირა დილით კლარა და მისი ბიძაშვილი ლეო მიდიან ველოსიპედების გასაქირავებელ ჯიხურ „მწვანე ბორბალთან“, რომელიც გედების ტბის პარკის შესასვლელთან მდებარეობს. ველობილიკი ტბას გარშემო სრულად უვლის — მანძილი თორმეტი კილომეტრია — და ბილიკზე მანქანების მოძრაობა აკრძალულია."
        ],
        [
          "The man working at the rental cabin, Mr Jenkins, explains the prices: renting a bicycle costs चार euros for one hour, or ten euros for a half-day pass of four hours. Since Clara and Leo want to stop for photos and lunch along the way, they choose two half-day passes.",
          "გაქირავების ჯიხურში მომუშავე მამაკაცი, ბატონი ჯენკინსი, აცნობს ფასებს: ველოსიპედის ქირაობა ერთი საათით ღირს ოთხი ევრო, ხოლო ოთხსაათიანი (ნახევარდღიანი) აბონემენტი — ათი ევრო. რადგან კლარასა და ლეოს გზად ფოტოების გადაღება და წახემსება სურთ, ისინი ირჩევენ ორ ნახევარდღიან აბონემენტს."
        ],
        [
          "Mr Jenkins adjusts the height of the bicycle seats to match their legs and checks the tyres and handbrakes. He also gives them two red helmets, a metal combination lock with the code 2-4-6-8, and a small map of the lake trail.",
          "ბატონი ჯენკინსი მათი სიმაღლის მიხედვით ასწორებს ველოსიპედის სკამებს და ამოწმებს საბურავებსა და ხელის მუხრუჭებს. ის ასევე აძლევს მათ ორ წითელ ჩაფხუტს, კოდირებულ ლითონის საკეტს კოდით 2-4-6-8 და ტბის ბილიკის პატარა რუკას."
        ],
        [
          "He points to the map and says, 'Ride clockwise around the lake. At the six-kilometre mark on the north shore, there is a wooden observation tower where you can lock your bikes and climb up to see the whole lake. Remember to return the bicycles before three o'clock!'",
          "ის რუკაზე მიუთითებს და ეუბნება: „იარეთ ტბის გარშემო საათის ისრის მიმართულებით. მეექვსე კილომეტრის ნიშნულთან, ჩრდილოეთ ნაპირზე, დგას ხის გადმოსახედი კოშკი, სადაც შეგიძლიათ დააბათ ველოსიპედები და ახვიდეთ მთელი ტბის დასანახად. არ დაგავიწყდეთ ველოსიპედების დაბრუნება სამ საათამდე!“"
        ],
        [
          "Clara puts her water bottle into the front basket of her bike, and they set off under the shady willow trees. The ride is smooth and pleasant, and at two thirty they return the bikes to Mr Jenkins with plenty of time to spare.",
          "კლარა წყლის ბოთლს დებს თავისი ველოსიპედის წინა კალათაში და ისინი ჩრდილიანი ტირიფების ქვეშ გზას მიუყვებიან. გასეირნება მშვიდი და სასიამოვნოა, სამის ნახევარზე კი ისინი დროულად უბრუნებენ ველოსიპედებს ბატონ ჯენკინსს."
        ]
      ],
      glossary: [
        "bicycle rental|ველოსიპედების გაქირავება", "cycle path|ველობილიკი", "half-day pass|ნახევარდღიანი აბონემენტი",
        "adjust the height|სიმაღლის გასწორება/მორგება", "combination lock|კოდირებული საკეტი", "clockwise|საათის ისრის მიმართულებით",
        "north shore|ჩრდილოეთი ნაპირი", "observation tower|გადმოსახედი კოშკი", "front basket|წინა კალათა", "willow tree|ტირიფის ხე"
      ],
      questions: [
        "How long is the cycle path that goes all the way around Swan Lake?|Twelve kilometres|Two kilometres|Fifty kilometres|Five hundred metres",
        "How much does it cost to rent a bicycle for one hour versus a four-hour half-day pass?|Four euros for one hour, or ten euros for a four-hour pass|Ten euros for one hour, or forty euros for four hours|One euro for the whole day|It is completely free",
        "Why do Clara and Leo choose the four-hour half-day passes?|Because they want to stop for photos and lunch along the way|Because one-hour bikes have no brakes|Because Mr Jenkins only sells half-day passes|Because they want to ride at night",
        "What does Mr Jenkins adjust and check on the bicycles before they leave?|He adjusts the height of the seats and checks the tyres and handbrakes|He paints the frames green|He takes off the pedals|He changes the chains",
        "What is the four-digit code for the metal combination lock?|2-4-6-8|1-2-3-4|0-0-0-0|9-8-7-6",
        "What colour helmets does Mr Jenkins give them?|Red helmets|Blue helmets|Yellow helmets|White helmets",
        "What is located at the six-kilometre mark on the north shore of the lake?|A wooden observation tower|A large shopping mall|A railway station|A cinema",
        "By what time must Clara and Leo return the bicycles?|Before three o'clock|Before noon|Before midnight|Tomorrow morning",
        "Where does Clara put her water bottle?|Into the front basket of her bicycle|In Leo's pocket|She leaves it at the cabin|In a plastic bag on the handlebars",
        "What time do Clara and Leo actually return the bicycles to Mr Jenkins?|At two thirty (half past two)|At four o'clock|At five o'clock|At one o'clock"
      ]
    },
    {
      num: 13, level: "A1",
      icon: "🚆", genre: "ტრანსპორტი",
      title: "ცენტრალურ რკინიგზის სადგურზე",
      subtitle: "At the Central Railway Station",
      time: "5 წთ",
      paragraphs: [
        [
          "Mr and Mrs Evans are at the Central Railway Station, waiting to take the morning express train to Edinburgh. In the main station concourse, there is a bakery, a flower shop, a waiting room with heated benches, and a ticket office with four windows.",
          "ბატონი და ქალბატონი ევანსები ცენტრალურ რკინიგზის სადგურზე იმყოფებიან და ედინბურგისკენ მიმავალ დილის ჩქაროსნულ მატარებელს ელოდებიან. სადგურის მთავარ დარბაზში არის საცხობი, ყვავილების მაღაზია, მოსაცდელი ოთახი თბილი სკამებითა და სალარო ოთხი სარკმლით."
        ],
        [
          "Mr Evans goes to Window Two at the ticket office to ask a question. He shows their tickets to the clerk and asks if they need to change trains along the way. The clerk replies, 'No, sir, the 10:20 train to Edinburgh is a direct express train; you don't need to change trains at all.'",
          "ბატონი ევანსი კითხვის დასასმელად მიდის სალაროს მეორე სარკმელთან. ის მოლარეს უჩვენებს ბილეთებს და ეკითხება, დასჭირდებათ თუ არა გზად სხვა მატარებელში გადაჯდომა. მოლარე პასუხობს: „არა, ბატონო, 10:20 საათის მატარებელი ედინბურგისკენ პირდაპირი ჩქაროსნული რეისია; გადაჯდომა საერთოდ არ დაგჭირდებათ“."
        ],
        [
          "The clerk adds that the journey takes four hours and the train stops at only two stations on the way: York and Newcastle. He also tells Mr Evans that the train has a dining car in the middle — between First Class and Standard Class — where passengers can buy hot soup, sandwiches, and tea.",
          "მოლარე ამატებს, რომ მგზავრობას ოთხი საათი სჭირდება და მატარებელი გზად მხოლოდ ორ სადგურზე ჩერდება: იორკსა და ნიუკასლში. ის ასევე ეუბნება ბატონ ევანსს, რომ მატარებელს შუაში — პირველ კლასსა და სტანდარტულ კლასს შორის — აქვს ვაგონ-რესტორანი, სადაც მგზავრებს შეუძლიათ შეიძინონ ცხელი წვნიანი, სენდვიჩები და ჩაი."
        ],
        [
          "At ten o'clock, the station loudspeaker announces: 'The ten twenty express service to Edinburgh, calling at York and Newcastle, is now standing at Platform Four. First Class carriages are at the front of the train, and Standard Class carriages are at the rear.'",
          "ათ საათზე სადგურის დინამიკში ცხადდება: „ათ საათსა და ოც წუთზე ედინბურგისკენ მიმავალი ჩქაროსნული მატარებელი, რომელიც გაჩერდება იორკსა და ნიუკასლში, უკვე დგას მეოთხე ბაქანზე. პირველი კლასის ვაგონები მატარებლის წინა ნაწილშია, ხოლო სტანდარტული კლასის ვაგონები — უკანა ნაწილში“."
        ],
        [
          "Since Mr and Mrs Evans have Standard Class tickets for Carriage E, they walk towards the rear of the train on Platform Four. A polite conductor helps Mrs Evans lift her heavy red suitcase onto the step, and they find their quiet table seats.",
          "რადგან ბატონ და ქალბატონ ევანსებს აქვთ სტანდარტული კლასის ბილეთები E ვაგონში, ისინი მეოთხე ბაქანზე მატარებლის უკანა ნაწილისკენ მიდიან. თავაზიანი გამცილებელი ეხმარება ქალბატონ ევანსს მძიმე წითელი ჩემოდნის საფეხურზე ატანაში და ისინი პოულობენ თავიანთ მშვიდ, მაგიდიან ადგილებს."
        ]
      ],
      glossary: [
        "express train|ჩქაროსნული მატარებელი", "change trains|სხვა მატარებელში გადაჯდომა", "direct train|პირდაპირი მატარებელი (გადაჯდომის გარეშე)",
        "dining car|ვაგონ-რესტორანი", "calling at (stations)|ჩერდება (აღნიშნულ სადგურებზე)", "First Class|პირველი კლასი",
        "Standard Class|სტანდარტული (ეკონომ) კლასი", "at the front|წინა ნაწილში", "at the rear|უკანა ნაწილში / ბოლოში", "conductor|მატარებლის გამცილებელი"
      ],
      questions: [
        "Which city are Mr and Mrs Evans travelling to by train?|Edinburgh|London|Oxford|Brighton",
        "What time does their express train depart?|At ten twenty (10:20 AM)|At nine o'clock|At noon|At four twenty",
        "Do Mr and Mrs Evans need to change trains during the journey?|No, it is a direct express train|Yes, they must change trains twice|Yes, they must take a bus in York|Yes, at Newcastle",
        "How long does the train journey to Edinburgh take?|Four hours|One hour|Eight hours|Thirty minutes",
        "At which two stations does the express train stop along the way?|York and Newcastle|Oxford and Cambridge|London and Bristol|Glasgow and Cardiff",
        "Where is the dining car located on the train?|In the middle of the train, between First Class and Standard Class|At the very front of the locomotive|At the very back behind the luggage van|There is no dining car",
        "From which platform does the Edinburgh express train depart?|Platform Four|Platform Two|Platform One|Platform Ten",
        "Where are the First Class and Standard Class carriages positioned?|First Class is at the front of the train, and Standard Class is at the rear|Standard Class is at the front, and First Class is at the rear|They are on two different trains|First Class is on the top floor",
        "Which carriage do Mr and Mrs Evans have tickets for?|Carriage E (Standard Class)|Carriage A (First Class)|The dining car|Carriage Z",
        "How does the conductor help Mrs Evans on the platform?|He helps her lift her heavy red suitcase onto the step of the train|He buys her a cup of tea|He carries her umbrella to the ticket office|He drives the train"
      ]
    },
    {
      num: 14, level: "A1",
      icon: "🎒", genre: "სერვისი და დახმარება",
      title: "დაკარგული ნივთების ბიუროში",
      subtitle: "At the Lost Property Office",
      time: "5 წთ",
      paragraphs: [
        [
          "Yesterday afternoon, nineteen-year-old Lucas took the NumberEight green city bus from the university to the central library. Because he was reading a message on his phone when the bus arrived at his stop, he jumped off in a hurry and accidentally left his backpack on the seat!",
          "გუშინ ნაშუადღევს ცხრამეტი წლის ლუკასი უნივერსიტეტიდან ცენტრალურ ბიბლიოთეკამდე მერვე ნომერი მწვანე საქალაქო ავტობუსით მგზავრობდა. რადგან გაჩერებაზე მისვლისას ტელეფონში შეტყობინებას კითხულობდა, იგი სიჩქარეში ჩამოხტა და ზურგჩანთა შემთხვევით სკამზე დარჩა!"
        ],
        [
          "This morning at nine o'clock, Lucas goes to the Lost Property Office at the main bus terminal. Behind the counter, there are long shelves filled with forgotten umbrellas, gloves, hats, glasses, and bags, all labelled with the date they were found.",
          "დღეს დილით, ცხრა საათზე, ლუკასი მიდის მთავარ ავტოსადგურში მდებარე დაკარგული ნივთების ბიუროში. დახლის უკან განლაგებულია გრძელი თაროები, რომლებიც სავსეა დარჩენილი ქოლგებით, ხელთათმანებით, ქუდებით, სათვალეებითა და ჩანთებით, და ყველა მათგანს აწერია პოვნის თარიღი."
        ],
        [
          "The officer at the desk, Mrs Green, asks Lucas which bus he was on and what his bag looks like. Lucas explains that he was on the Number Eight bus at four thirty yesterday afternoon, and describes his bag: it is a medium-sized dark grey canvas backpack with two black leather straps on the front.",
          "მაგიდასთან მომუშავე თანამშრომელი, ქალბატონი გრინი, ეკითხება ლუკასს, რომელ ავტობუსში იჯდა და როგორ გამოიყურება მისი ჩანთა. ლუკასი უხსნის, რომ გუშინ ნაშუადღევს, ხუთის ნახევარზე, იჯდა მერვე ნომერ ავტობუსში, და აღწერს ჩანთას: ეს არის საშუალო ზომის მუქი ნაცრისფერი ტილოს ზურგჩანთა, წინა მხარეს ორი შავი ტყავის თასმით."
        ],
        [
          "Mrs Green goes to the Thursday shelf and brings out a dark grey backpack. To make sure it really belongs to Lucas, she asks him to name three things that are inside the bag before she opens it.",
          "ქალბატონი გრინი მიდის ხუთშაბათის თაროსთან და გამოაქვს მუქი ნაცრისფერი ზურგჩანთა. იმისათვის, რომ დარწმუნდეს, ნამდვილად ლუკასს ეკუთვნის თუ არა იგი, გახსნამდე სთხოვს დაასახელოს სამი ნივთი, რომელიც ჩანთაში დევს."
        ],
        [
          "Lucas replies without hesitation: 'Inside, there is a blue notebook with my name on the first page, a silver metal water bottle, and a pair of black headphones in a round case.' Mrs Green opens the zipper, checks the items, smiles, and asks Lucas to sign the register book before handing him his backpack.",
          "ლუკასი დაუფიქრებლად პასუხობს: „შიგნით დევს ლურჯი რვეული, რომლის პირველ გვერდზეც ჩემი სახელი წერია, წყლის ვერცხლისფერი ლითონის ბოთლი და შავი ყურსასმენები მრგვალ ჩასადებში“. ქალბატონი გრინი ხსნის ელვა-შესაკრავს, ამოწმებს ნივთებს, იღიმის და ზურგჩანთის გადაცემამდე ლუკასს სთხოვს ხელი მოაწეროს სარეგისტრაციო ჟურნალში."
        ]
      ],
      glossary: [
        "Lost Property Office|დაკარგული ნივთების ბიურო", "in a hurry|სიჩქარეში / ნაჩქარევად", "accidentally|შემთხვევით / უნებლიედ",
        "labelled|ეტიკეტირებული / წარწერიანი", "canvas backpack|ტილოს (მკვრივი ქსოვილის) ზურგჩანთა", "leather strap|ტყავის თასმა / ღვედი",
        "belong to|ეკუთვნოდეს (ვინმეს)", "without hesitation|უყოყმანოდ / დაუფიქრებლად", "water bottle|წყლის ბოთლი", "sign the register|სარეგისტრაციო ჟურნალში ხელის მოწერა"
      ],
      questions: [
        "Where was Lucas travelling yesterday afternoon on the Number Eight bus?|From the university to the central library|From the airport to a hotel|From the cinema to a restaurant|From the park to the hospital",
        "Why did Lucas accidentally leave his backpack on the bus seat?|Because he was reading a message on his phone and jumped off in a hurry|Because he fell asleep on the bus|Because the bus was dark|Because he had too many suitcases",
        "Where is the Lost Property Office located?|At the main bus terminal|Inside the university library|At the police station|Inside the post office",
        "How are the forgotten items organized on the shelves behind the counter?|They are all labelled with the date they were found|They are sorted by price|They are sorted by the owner's age|They are kept in locked iron boxes",
        "What time was Lucas on the Number Eight bus yesterday?|At four thirty in the afternoon|At nine in the morning|At midnight|At noon",
        "What does Lucas's backpack look like on the outside?|A medium-sized dark grey canvas backpack with two black leather straps on the front|A small red plastic bag|A large yellow suitcase with wheels|A green leather briefcase",
        "Why does Mrs Green ask Lucas to name three things inside the bag before opening it?|To make sure the backpack really belongs to him|Because the zipper is stuck|Because she cannot see well without her glasses|To guess how heavy the bag is",
        "What three items does Lucas say are inside his backpack?|A blue notebook with his name, a silver metal water bottle, and black headphones in a round case|A laptop, an umbrella, and a sandwich|A dictionary, a camera, and a red hat|Shoes, a towel, and goggles",
        "Where is Lucas's name written inside the bag?|On the first page of his blue notebook|On the silver water bottle|On the headphones|On the leather strap",
        "What must Lucas do before Mrs Green hands him his backpack?|Sign the register book|Pay a ten-euro fee|Wait until tomorrow|Call the bus driver"
      ]
    },
    {
      num: 15, level: "A1",
      icon: "🏡", genre: "სამეზობლო და ოჯახი",
      title: "უქმეების დაგეგმვა მეზობლებთან ერთად",
      subtitle: "Planning a Neighbourhood Barbecue",
      time: "5 წთ",
      paragraphs: [
        [
          "Mr and Mrs Miller live at Number Twelve Maple Street, a quiet suburban road where all the neighbours know each other well. Since the weather forecast for Saturday is warm and sunny, they decide to invite the two families living next door for a Saturday afternoon barbecue in their back garden.",
          "ბატონი და ქალბატონი მილერები ცხოვრობენ მეიპლ-სტრიტის თორმეტ ნომერში — გარეუბნის მშვიდ ქუჩაზე, სადაც ყველა მეზობელი კარგად იცნობს ერთმანეთს. რადგან შაბათისთვის თბილი და მზიანი ამინდია გამოცხადებული, ისინი წყვეტენ გვერდით მცხოვრები ორი ოჯახი შაბათ ნაშუადღევს თავიანთ უკანა ბაღში ბარბექიუზე დაპატიჟონ."
        ],
        [
          "On Thursday evening, Mrs Miller talks over the garden fence with her neighbour, Julia, who lives at Number Fourteen with her husband and two young sons. Julia is delighted with the invitation and offers to bring a big bowl of potato salad and a basket of fresh strawberries from the market.",
          "ხუთშაბათ საღამოს ქალბატონი მილერი ბაღის ღობის გადაღმა ესაუბრება თავის მეზობელს, ჯულიას, რომელიც მეუღლესთან და ორ პატარა ვაჟთან ერთად მეთოთხმეტე ნომერში ცხოვრობს. ჯულია სიხარულით იღებს მიწვევას და სთავაზობს, რომ მოიტანს დიდ თას კარტოფილის სალათასა და ბაზრიდან ახალი მარწყვის კალათას."
        ],
        [
          "Next, Mr Miller visits Mr Bernard, a retired music teacher who lives at Number Ten. Mr Bernard happily agrees to come at two o'clock on Saturday. He says he will bring three bottles of homemade apple juice and his acoustic guitar to play some cheerful songs in the afternoon.",
          "შემდეგ ბატონი მილერი სტუმრობს ბატონ ბერნარდს — პენსიაზე გასულ მუსიკის მასწავლებელს, რომელიც ათ ნომერში ცხოვრობს. ბატონი ბერნარდი სიამოვნებით თანხმდება შაბათს, ორ საათზე მოსვლაზე. ის ამბობს, რომ მოიტანს სამ ბოთლ სახლში დაწურულ ვაშლის წვენს და თავის აკუსტიკურ გიტარას ნაშუადღევს მხიარული სიმღერების დასაკრავად."
        ],
        [
          "On Saturday morning, Mr Miller mows the green lawn, sets up a long wooden table under the shade of the cherry tree, and hangs colourful paper lanterns between the branches. Meanwhile, Mrs Miller prepares chicken skewers, beef burgers, and sweet corn for the grill.",
          "შაბათ დილით ბატონი მილერი კრეჭს მწვანე გაზონს, ალუბლის ხის ჩრდილქვეშ დგამს გრძელ ხის მაგიდას და ტოტებს შორის ჰკიდებს ფერად ქაღალდის ფარნებს. ამასობაში ქალბატონი მილერი გრილისთვის ამზადებს ქათმის მწვადს, საქონლის ხორცის ბურგერებსა და ტკბილ სიმინდს."
        ],
        [
          "At two o'clock, the neighbours arrive through the garden gate. While the food is cooking on the grill, Julia's two boys play badminton on the grass. Everyone sits together around the long table, shares the delicious food, and sings along as Mr Bernard plays his guitar until sunset.",
          "ორ საათზე მეზობლები ბაღის ჭიშკრიდან შემოდიან. სანამ საჭმელი გრილზე იწვება, ჯულიას ორი ბიჭი ბალახზე ბადმინტონს თამაშობს. ყველა ერთად ჯდება გრძელი მაგიდის გარშემო, იზიარებს უგემრიელეს კერძებს და მზის ჩასვლამდე მღერის ბატონი ბერნარდის გიტარის თანხლებით."
        ]
      ],
      glossary: [
        "suburban road|გარეუბნის ქუჩა", "next door|გვერდით სახლში / მეზობლად", "garden fence|ბაღის ღობე",
        "delighted|აღფრთოვანებული / ძალიან გახარებული", "retired|პენსიაზე გასული", "mow the lawn|გაზონის (ბალახის) გაკრეჭა",
        "paper lantern|ქაღალდის ფარანი", "grill / barbecue|გრილი / ბარბექიუ", "sweet corn|ტკბილი სიმინდი", "sing along|თანხლებით სიმღერა (აყოლა)"
      ],
      questions: [
        "At which house number on Maple Street do Mr and Mrs Miller live?|At Number Twelve|At Number Fourteen|At Number Ten|At Number One",
        "Why do the Millers decide to organize a garden barbecue this Saturday?|Because the weather forecast for Saturday is warm and sunny|Because it is New Year's Eve|Because they are moving to another city|Because their kitchen is broken",
        "Who lives at Number Fourteen Maple Street?|Julia, her husband, and their two young sons|Mr Bernard, the retired music teacher|Lucas and his sister|Nobody lives there",
        "What does Julia offer to bring to the Saturday barbecue?|A big bowl of potato salad and a basket of fresh strawberries|Chicken burgers and bread|Three bottles of apple juice|A chocolate cake",
        "What was Mr Bernard's profession before he retired?|He was a music teacher|He was a baker|He was a bus driver|He was a doctor",
        "What two things does Mr Bernard promise to bring on Saturday?|Three bottles of homemade apple juice and his acoustic guitar|Potato salad and strawberries|A badminton net and rackets|Paper lanterns and chairs",
        "What does Mr Miller do in the back garden on Saturday morning?|He mows the lawn, sets up a wooden table under the cherry tree, and hangs paper lanterns|He paints the house roof|He washes his car in the street|He repairs the wooden fence",
        "What food does Mrs Miller prepare for the grill?|Chicken skewers, beef burgers, and sweet corn|Fish soup and rice|Spaghetti and cheese|Croissants and jam",
        "What game do Julia's two boys play on the grass while the food is cooking?|Badminton|Football|Chess|Hide-and-seek",
        "What do the neighbours do together until sunset after eating?|They sing along as Mr Bernard plays his acoustic guitar|They watch television indoors|They go to the cinema|They clean the garage"
      ]
    }
  ];

  App.ListeningDataA = App.ListeningDataA1.concat(App.ListeningDataA2 || []);
})(window);