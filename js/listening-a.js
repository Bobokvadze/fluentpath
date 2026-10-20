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
// ============================================================================
// A2 LEVEL — LISTENING TOPICS 16 TO 30 (5 PARAGRAPHS, 10 WORDS & 10 QUESTIONS)
// ============================================================================
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ListeningDataA2 = [
    {
      num: 16, level: "A2",
      icon: "💼", genre: "კარიერა და სამსახური",
      title: "გასაუბრება წიგნის მაღაზიაში",
      subtitle: "A Job Interview at a Bookshop",
      time: "6 წთ",
      paragraphs: [
        [
          "Good morning, Sophie! Please take a seat. My name is Mrs Helen Carter, and I am the manager of 'Page & Lantern', the oldest independent bookshop in our town. Thank you for sending us your CV and coming in today for this interview for the part-time weekend assistant position.",
          "დილა მშვიდობისა, სოფი! გთხოვთ, დაბრძანდით. მე გახლავართ ჰელენ კარტერი, ჩვენი ქალაქის უძველესი დამოუკიდებელი წიგნის მაღაზიის — „ფურცელი და ფარანი“ — მენეჯერი. გმადლობთ, რომ გამოგვიგზავნეთ თქვენი რეზიუმე (CV) და დღეს მოხვედით გასაუბრებაზე შაბათ-კვირის ნახევარგანაკვეთიანი ასისტენტის პოზიციისთვის."
        ],
        [
          "Sophie smiles and explains why she is interested in the job: she is currently a second-year literature student at the local university, so her weekday mornings are busy with lectures, but she is completely free every Saturday and Sunday. She loves reading historical novels and helping people choose books.",
          "სოფი იღიმის და განმარტავს, თუ რატომ არის დაინტერესებული ამ სამსახურით: ის ამჟამად ადგილობრივი უნივერსიტეტის ლიტერატურის ფაკულტეტის მეორე კურსის სტუდენტია, ამიტომ სამუშაო დღეებში დილაობით ლექციები აქვს, მაგრამ ყოველ შაბათსა და კვირას სრულიად თავისუფალია. მას უყვარს ისტორიული რომანების კითხვა და ადამიანებისთვის წიგნების შერჩევაში დახმარება."
        ],
        [
          "Mrs Carter asks Sophie if she has any previous experience working with customers. Sophie replies that last summer she worked for three months at her uncle's stationery shop, where she operated the cash register, wrapped presents, and organized notebooks and pens on the shelves.",
          "ქალბატონი კარტერი ეკითხება სოფის, აქვს თუ არა მომხმარებლებთან მუშაობის წინა გამოცდილება. სოფი პასუხობს, რომ გასულ ზაფხულს სამი თვის განმავლობაში მუშაობდა ბიძამისის საკანცელარიო მაღაზიაში, სადაც მართავდა სალარო აპარატს, ფუთავდა საჩუქრებს და თაროებზე ალაგებდა რვეულებსა და კალმებს."
        ],
        [
          "Next, Mrs Carter describes the duties at the bookshop. The weekend shift runs from nine in the morning until five in the afternoon, with a one-hour paid lunch break at one o'clock. Besides working at the cash desk, Sophie will unpack new book deliveries and read a short story to children in the reading corner on Saturday mornings at eleven.",
          "შემდეგ ქალბატონი კარტერი აღწერს მოვალეობებს წიგნის მაღაზიაში. შაბათ-კვირის ცვლა გრძელდება დილის ცხრა საათიდან საღამოს ხუთ საათამდე, პირველ საათზე ერთსაათიანი ანაზღაურებადი სადილის შესვენებით. სალაროსთან მუშაობის გარდა, სოფი ამოალაგებს წიგნების ახალ გზავნილებს და შაბათობით, დილის თერთმეტ საათზე, კითხვის კუთხეში ბავშვებს მოკლე ზღაპარს წაუკითხავს."
        ],
        [
          "The hourly wage is twelve euros an hour, and all staff members receive a thirty percent discount on any book in the shop. Mrs Carter is very impressed with Sophie's friendly attitude and asks her to start her first training day this coming Saturday at nine o'clock!",
          "საათობრივი ანაზღაურება შეადგენს თორმეტ ევროს საათში, და ყველა თანამშრომელი სარგებლობს ოცდაათპროცენტიანი ფასდაკლებით მაღაზიის ნებისმიერ წიგნზე. ქალბატონი კარტერი ძალიან კმაყოფილია სოფის მეგობრული დამოკიდებულებით და სთხოვს, პირველი სატრენინგო დღე ამ შაბათს, ცხრა საათზე დაიწყოს!"
        ]
      ],
      glossary: [
        "part-time position|ნახევარგანაკვეთიანი სამუშაო პოზიცია", "literature student|ლიტერატურის ფაკულტეტის სტუდენტი", "previous experience|წინა სამუშაო გამოცდილება",
        "stationery shop|საკანცელარიო ნივთების მაღაზია", "cash register|სალარო აპარატი", "weekend shift|შაბათ-კვირის სამუშაო ცვლა",
        "paid lunch break|ანაზღაურებადი სადილის შესვენება", "unpack deliveries|ახალი გზავნილების/ყუთების ამოლაგება", "hourly wage|საათობრივი ანაზღაურება", "staff member|თანამშრომელი / პერსონალის წევრი"
      ],
      questions: [
        "What is the name of the independent bookshop where Sophie is having her interview?|Page & Lantern|The Green Leaf|The Old Library|Star Books",
        "What position is Sophie applying for?|A part-time weekend assistant position|A full-time weekday manager|A night security guard|A book delivery driver",
        "What does Sophie study at the local university?|Literature (she is a second-year student)|Medicine|Architecture|Computer science",
        "Where did Sophie work for three months last summer?|At her uncle's stationery shop|At a supermarket|At a hotel reception|At a cinema",
        "What are the working hours of the weekend shift at the bookshop?|From nine in the morning until five in the afternoon|From eight in the morning until midnight|From noon until four o'clock|Only for two hours in the evening",
        "When is the one-hour paid lunch break?|At one o'clock in the afternoon|At eleven in the morning|At three thirty|There is no lunch break",
        "What special activity will Sophie do on Saturday mornings at eleven o'clock?|Read a short story to children in the reading corner|Bake cakes in the café|Clean the outside windows|Drive the delivery van",
        "How much is the hourly wage for the position?|Twelve euros an hour|Eight euros an hour|Twenty euros an hour|Fifty euros a day",
        "What special discount do staff members receive at the bookshop?|A thirty percent discount on any book in the shop|A ten percent discount on coffee|One free book every day|A fifty percent discount on stationery",
        "When will Sophie start her first training day?|This coming Saturday at nine o'clock|Next Monday morning|In two months|Tomorrow evening"
      ]
    },
    {
      num: 17, level: "A2",
      icon: "🧳", genre: "მგზავრობა და სერვისი",
      title: "დაგვიანებული ბარგის მოძიება აეროპორტში",
      subtitle: "Reporting Delayed Luggage at the Airport",
      time: "6 წთ",
      paragraphs: [
        [
          "After a two-hour flight from Madrid to Dublin, Mr Thomas Reed walked to the baggage reclaim hall and stood by Carousel Three. One by one, the other passengers picked up their bags and left, until the conveyor belt stopped turning and remained completely empty. Thomas's suitcase had not arrived!",
          "მადრიდიდან დუბლინამდე ორსაათიანი ფრენის შემდეგ, ბატონი თომას რიდი მივიდა ბარგის მიღების დარბაზში და მესამე კარუსელთან დადგა. სხვა მგზავრებმა სათითაოდ აიღეს თავიანთი ჩანთები და გავიდნენ, სანამ მოძრავი ლენტი არ გაჩერდა და სრულიად ცარიელი არ დარჩა. თომასის ჩემოდანი არ ჩამოსულიყო!"
        ],
        [
          "Thomas walked over to the 'Baggage Services' desk in the corner of the hall. He showed his passport and the white luggage sticker attached to his boarding pass to the clerk, a helpful woman named Fiona. Fiona typed the ten-digit tracking number into her computer.",
          "თომასი მივიდა დარბაზის კუთხეში მდებარე „ბარგის მომსახურების“ დახლთან. მან თანამშრომელს — გულისხმიერ ქალს, სახელად ფიონას — აჩვენა პასპორტი და ჩასხდომის ბარათზე მიკრული ბარგის თეთრი სტიკერი. ფიონამ კომპიუტერში შეიყვანა ათნიშნა საძიებო ნომერი."
        ],
        [
          "After a moment, Fiona looked up and explained what had happened: because Thomas had a very short transfer in Madrid, his suitcase had missed the morning plane. However, the computer showed that the bag was safe in Madrid and was already loaded onto the evening flight to Dublin, arriving at six o'clock.",
          "რამდენიმე წამის შემდეგ ფიონამ აიხედა და აუხსნა, რაც მოხდა: რადგან თომასს მადრიდში გადაჯდომისთვის ძალიან მცირე დრო ჰქონდა, მისმა ჩემოდანმა დილის თვითმფრინავზე ვერ მოასწრო. თუმცა, კომპიუტერში ჩანდა, რომ ჩანთა მადრიდში უსაფრთხოდ იყო და უკვე დატვირთული გახლდათ დუბლინის საღამოს რეისზე, რომელიც ექვს საათზე ჩამოფრინდებოდა."
        ],
        [
          "Fiona asked Thomas to describe his suitcase so the courier could identify it easily. Thomas said it was a hard-shell, medium-sized dark green suitcase with four wheels and a bright yellow ribbon tied to the top handle. He also wrote down the address of his hotel in the centre of Dublin.",
          "ფიონამ სთხოვა თომასს აღეწერა თავისი ჩემოდანი, რათა კურიერს იგი ადვილად ეცნო. თომასმა თქვა, რომ ეს იყო მყარი კორპუსის მქონე, საშუალო ზომის მუქი მწვანე ჩემოდანი ოთხი ბორბლითა და ზედა სახელურზე შემოხვეული ხასხასა ყვითელი ლენტით. მან ასევე დაწერა თავისი სასტუმროს მისამართი დუბლინის ცენტრში."
        ],
        [
          "Fiona gave Thomas a printed reference number and a free overnight toiletry kit containing a toothbrush, toothpaste, soap, and a comb. She promised that the airline courier would deliver the suitcase directly to his hotel reception before九 o'clock that night at no cost.",
          "ფიონამ თომასს მისცა ამობეჭდილი სარეგისტრაციო ნომერი და პირადი ჰიგიენის უფასო ნაკრები, რომელშიც იდო კბილის ჯაგრისი, კბილის პასტა, საპონი და სავარცხელი. ის დაჰპირდა, რომ ავიაკომპანიის კურიერი ჩემოდანს იმავე ღამის ცხრა საათამდე სრულიად უფასოდ მიიტანდა პირდაპირ მისი სასტუმროს მიმღებში."
        ]
      ],
      glossary: [
        "baggage reclaim hall|ბარგის მიღების დარბაზი", "conveyor belt / carousel|ბარგის მოძრავი ლენტი / კარუსელი", "luggage sticker|ბარგის სტიკერი / ქვითარი",
        "tracking number|საძიებო (კონტროლის) ნომერი", "short transfer|მოკლე გადაჯდომა (რეისებს შორის)", "hard-shell suitcase|მყარი კორპუსის მქონე ჩემოდანი",
        "yellow ribbon|ყვითელი ლენტი", "top handle|ზედა სახელური", "toiletry kit|პირადი ჰიგიენის ნაკრები", "airline courier|ავიაკომპანიის კურიერი"
      ],
      questions: [
        "Which two cities was Mr Thomas Reed flying between?|From Madrid to Dublin|From London to Rome|From Paris to Berlin|From Vienna to Athens",
        "At which carousel did Thomas wait for his suitcase?|Carousel Three|Carousel One|Carousel Seven|Carousel Ten",
        "What did Thomas show to Fiona at the Baggage Services desk?|His passport and the white luggage sticker attached to his boarding pass|A photograph of his clothes|His hotel key|His train ticket",
        "Why hadn't Thomas's suitcase arrived on the morning plane?|Because he had a very short transfer in Madrid and the bag missed the plane|Because someone else took his bag by mistake|Because he forgot to bring it to the airport|Because the suitcase was too heavy",
        "Which flight was his suitcase loaded onto, and when would it arrive in Dublin?|The evening flight from Madrid, arriving at six o'clock|Tomorrow morning's flight at eight o'clock|A cargo ship arriving next week|A train arriving at midnight",
        "What does Thomas's suitcase look like?|A hard-shell, medium-sized dark green suitcase with four wheels|A small black leather backpack|A large red cloth bag with two wheels|A silver metal box",
        "What did Thomas tie to the top handle of his suitcase to recognize it easily?|A bright yellow ribbon|A blue woollen scarf|A small bell|A green flag",
        "Where is Thomas staying in Dublin?|At a hotel in the centre of Dublin|At his brother's apartment|At a campsite by the sea|At the airport hotel",
        "What did Fiona give Thomas along with his printed reference number?|A free overnight toiletry kit (toothbrush, toothpaste, soap, and comb)|A new green suitcase|One hundred euros in cash|A free plane ticket for next year",
        "When and where will the airline courier deliver the suitcase?|Directly to his hotel reception before nine o'clock that night|To the airport gate tomorrow at noon|To his home in Madrid|In three days"
      ]
    },
    {
      num: 18, level: "A2",
      icon: "🏰", genre: "ისტორია და ტურიზმი",
      title: "აუდიო-გიდი უძველეს ციხესიმაგრეში",
      subtitle: "An Audio Guide at Falcon Rock Castle",
      time: "6 წთ",
      paragraphs: [
        [
          "Welcome to Falcon Rock Castle, one of the best-preserved medieval fortresses in the country! You are currently standing in the Outer Courtyard, wearing your digital audio guide. Whenever you see a numbered wooden sign on the castle walls, simply press that number on your keypad and press the green play button.",
          "კეთილი იყოს თქვენი მობრძანება „შევარდნის კლდის“ ციხესიმაგრეში — ქვეყნის ერთ-ერთ ყველაზე კარგად შემონახულ შუა საუკუნეების სიმაგრეში! თქვენ ამჟამად დგახართ გარე ეზოში და გიკეთიათ ციფრული აუდიო-გიდი. როდესაც ციხესიმაგრის კედლებზე დაინახავთ დანომრილ ხის აბრას, უბრალოდ აკრიფეთ ეს ნომერი კლავიატურაზე და დააჭირეთ ჩართვის მწვანე ღილაკს."
        ],
        [
          "Falcon Rock Castle was built in the year 1280 by Lord Richard to guard the river crossing below the cliff. The outer stone walls are three metres thick, and in the middle ages, the castle was surrounded by a deep moat filled with water. Visitors could only enter when the heavy oak drawbridge was lowered on iron chains.",
          "„შევარდნის კლდის“ ციხესიმაგრე აშენდა 1280 წელს ლორდ რიჩარდის მიერ კლდის ქვეშ არსებული მდინარის ფონის (გადასასვლელის) დასაცავად. გარე ქვის გალავნის სისქე სამი მეტრია, ხოლო შუა საუკუნეებში ციხეს გარს ერტყა წყლით სავსე ღრმა თხრილი. სტუმრებს შესვლა მხოლოდ მაშინ შეეძლოთ, როცა რკინის ჯაჭვებზე დაკიდებული მძიმე მუხის ასაწევი ხიდი დაბლა ეშვებოდა."
        ],
        [
          "Now walk through the stone archway in front of you into the Great Hall, marked as Stop Two. This huge room was the heart of castle life. In winter, logs burned in the giant fireplace on the north wall, while knights, guests, and musicians sat at long oak tables enjoying banquets.",
          "ახლა გაიარეთ თქვენ წინ მდებარე ქვის თაღში და შედით დიდ დარბაზში, რომელიც მონიშნულია როგორც მეორე გაჩერება. ეს უზარმაზარი ოთახი ციხესიმაგრის ცხოვრების გული იყო. ზამთარში ჩრდილოეთ კედელზე არსებულ გიგანტურ ბუხარში მორები იწვოდა, ხოლო რაინდები, სტუმრები და მუსიკოსები გრძელ მუხის მაგიდებთან ისხდნენ და ნადიმობდნენ."
        ],
        [
          "Next to the Great Hall is the old Castle Kitchen. Here, twenty cooks and servants worked every day baking bread in stone ovens and roasting meat over open fires. Because fresh water was vital during a siege, a forty-metre-deep well was dug right inside the kitchen floor!",
          "დიდი დარბაზის გვერდით მდებარეობს ციხესიმაგრის ძველი სამზარეულო. აქ ყოველდღე ოცი მზარეული და მსახური შრომობდა — ქვის ღუმელებში აცხობდნენ პურს და ღია ცეცხლზე წვავდნენ ხორცს. რადგან ალყის დროს სასმელი წყალი სასიცოცხლოდ მნიშვნელოვანი იყო, პირდაპირ სამზარეულოს იატაკში გათხარეს ორმოცი მეტრის სიღრმის ჭა!"
        ],
        [
          "From the courtyard, you can climb the ninety stone steps up to the Eagle Tower. The staircase turns clockwise as it goes up, which was a clever defensive design. Before you leave today, don't forget to return your audio headset at the gift shop by five o'clock.",
          "ეზოდან შეგიძლიათ ოთხმოცდაათი ქვის საფეხურით ახვიდეთ „არწივის კოშკზე“. კიბე ზემოთ ასვლისას საათის ისრის მიმართულებით უხვევს, რაც ჭკვიანური თავდაცვითი კონსტრუქცია იყო. დღეს წასვლამდე არ დაგავიწყდეთ ხუთ საათამდე აუდიო-ყურსასმენის დაბრუნება საჩუქრების მაღაზიაში."
        ]
      ],
      glossary: [
        "well-preserved|კარგად შემონახული", "fortress|ციხესიმაგრე", "outer courtyard|გარე ეზო",
        "moat|ციხის გარშემო წყლიანი თხრილი", "drawbridge|ასაწევი ხიდი", "archway|თაღოვანი გასასვლელი",
        "banquet|ნადიმი / წვეულება", "siege|ალყა (ციხესიმაგრის)", "well|წყლის ჭა", "headset|ყურსასმენი მოწყობილობა"
      ],
      questions: [
        "In what year was Falcon Rock Castle built, and why?|In 1280 by Lord Richard, to guard the river crossing below the cliff|In 1650, as a summer hotel for tourists|In 1890, to store books for a university|In 1050, as a lighthouse by the ocean",
        "How do visitors use the digital audio guide as they walk around the castle?|They press the number shown on the wooden signs on their keypad and press the green play button|They shout the name of the room into a microphone|The guide only plays music without words|They must connect it to a television",
        "How thick are the outer stone walls of the castle?|Three metres thick|Half a metre thick|Ten metres thick|Twenty centimetres thick",
        "How did visitors cross the water-filled moat in the Middle Ages?|When the heavy oak drawbridge was lowered on iron chains|By swimming across the cold water|Using an underground escalator|On a glass bridge",
        "Which room is marked as Stop Two on the audio tour?|The Great Hall|The Eagle Tower|The Gift Shop|The Stables",
        "Where was the giant fireplace located in the Great Hall?|On the north wall|In the middle of the ceiling|Outside in the garden|Under the floor",
        "How many cooks and servants worked every day in the Castle Kitchen?|Twenty cooks and servants|Only two cooks|One hundred soldiers|Five bakers",
        "Why was a forty-metre-deep well dug right inside the kitchen floor?|Because fresh water was vital inside the castle during a siege|To keep fish swimming in the kitchen|Because there was no river nearby|To hide gold coins at the bottom",
        "How many stone steps lead up to the top of the Eagle Tower?|Ninety stone steps|Twenty steps|Three hundred steps|Fifteen steps",
        "Where and by what time must visitors return their audio headsets?|At the gift shop by five o'clock|At the bus stop by midnight|In the kitchen by noon|They can keep the headsets forever"
      ]
    },
    {
      num: 19, level: "A2",
      icon: "🔧", genre: "საყოფაცხოვრებო სერვისი",
      title: "სანტექნიკოსის გამოძახება სამზარეულოს დაზიანებისას",
      subtitle: "Calling a Plumber for a Kitchen Leak",
      time: "6 წთ",
      paragraphs: [
        [
          "On Wednesday morning, while Mr Peter Grant was making coffee in his kitchen, he noticed a small puddle of water on the floor in front of the sink. When he opened the cupboard doors underneath the sink, he saw water dripping rapidly from a cracked metal pipe into a plastic bucket.",
          "ოთხშაბათ დილით, როდესაც ბატონი პიტერ გრანტი თავის სამზარეულოში ყავას ამზადებდა, ნიჟარის წინ იატაკზე წყლის პატარა გუბე შეამჩნია. როდესაც ნიჟარის ქვეშ კარადის კარი გამოაღო, დაინახა, რომ გაბზარული ლითონის მილიდან წყალი სწრაფად წვეთავდა პლასტმასის სათლში."
        ],
        [
          "Peter immediately called 'City Quick Plumbing' on his phone. The technician who answered, George, gave him an important piece of advice first: 'Before I arrive, look under the sink on the right-hand side and turn the red main water valve clockwise to shut off the water supply!'",
          "პიტერმა ტელეფონით მაშინვე დარეკა კომპანია „სითი ქუიქ სანტექნიკაში“. ტექნიკოსმა ჯორჯმა, რომელმაც უპასუხა, პირველ რიგში მნიშვნელოვანი რჩევა მისცა: „სანამ მოვალ, ნიჟარის ქვეშ მარჯვენა მხარეს მოძებნეთ წყლის მთავარი წითელი ონკანი (ვენტილი) და დაატრიალეთ საათის ისრის მიმართულებით წყლის მიწოდების გადასაკეტად!“"
        ],
        [
          "Peter turned the red valve, and the dripping stopped right away. He then dried the kitchen floor with two old towels. George asked for Peter's address and said he could be at Apartment 4B, Twenty-Two Green Street, at eleven o'clock that morning.",
          "პიტერმა გადაატრიალა წითელი ვენტილი და წყლის წვეთა მაშინვე შეწყდა. შემდეგ მან სამზარეულოს იატაკი ორი ძველი პირსახოცით გაამშრალა. ჯორჯმა გამოჰკითხა პიტერს მისამართი და უთხრა, რომ იმავე დილის თერთმეტ საათზე მივიდოდა გრინ-სტრიტის ოცდაორ ნომერში, ბინა 4B-ში."
        ],
        [
          "George arrived right on time at eleven o'clock carrying his heavy red toolbox. He examined the pipe under the sink with a flashlight and explained that the old rubber seal inside the pipe joint had worn out after ten years of use.",
          "ჯორჯი ზუსტად დროზე, თერთმეტ საათზე მოვიდა თავისი მძიმე წითელი ხელსაწყოების ყუთით. მან ფანრით დაათვალიერა ნიჟარის ქვეშ არსებული მილი და განმარტა, რომ მილის შეერთების ადგილას ძველი რეზინის შუასადები ათწლიანი ხმარების შემდეგ გაცვეთილიყო."
        ],
        [
          "In thirty minutes, George replaced the cracked section of pipe and fitted a brand-new rubber seal. He turned the red water valve back on to test the sink, and there was not a single drop of water leaking! Peter paid the forty-five-euro repair bill and thanked George for his fast work.",
          "ოცდაათ წუთში ჯორჯმა შეცვალა მილის გაბზარული მონაკვეთი და დააყენა სრულიად ახალი რეზინის შუასადები. მან ნიჟარის შესამოწმებლად კვლავ გახსნა წითელი ვენტილი და წყლის არცერთი წვეთი აღარ ჟონავდა! პიტერმა გადაიხადა შეკეთების საფასური — ორმოცდახუთი ევრო — და ჯორჯს სწრაფი მუშაობისთვის მადლობა გადაუხადა."
        ]
      ],
      glossary: [
        "kitchen sink|სამზარეულოს ნიჟარა", "drip rapidly|სწრაფად წვეთა", "cracked pipe|გაბზარული მილი",
        "plumbing / plumber|სანტექნიკა / სანტექნიკოსი", "water valve|წყლის ჩამკეტი ვენტილი", "shut off|გადაკეტვა / გამორთვა",
        "toolbox|ხელსაწყოების ყუთი", "rubber seal|რეზინის დამცავი შუასადები (სალნიკი)", "wear out|გაცვეთა / მწყობრიდან გამოსვლა", "repair bill|შეკეთების ანგარიში/საფასური"
      ],
      questions: [
        "What did Peter Grant notice on his kitchen floor on Wednesday morning?|A small puddle of water in front of the sink|A broken glass plate|Mud from his dog's paws|Oil leaking from the fridge",
        "Where was the water coming from when he opened the cupboard under the sink?|From a cracked metal pipe dripping into a plastic bucket|From an open window above the sink|From a boiling pot on the stove|From the washing machine",
        "What important instruction did George the plumber give Peter over the phone first?|To turn the red main water valve under the sink clockwise to shut off the water supply|To pour hot water down the sink|To hit the metal pipe with a hammer|To leave the apartment immediately",
        "What happened as soon as Peter turned the red valve clockwise?|The dripping stopped right away|The water sprayed faster|The lights in the kitchen went out|The bucket broke",
        "What is Peter's address, and what time did George promise to arrive?|Apartment 4B, 22 Green Street, at eleven o'clock|House 10, Oak Road, at four o'clock|Apartment 1A, River Street, at noon|Tomorrow morning at nine",
        "What did George carry with him when he arrived at eleven o'clock?|His heavy red toolbox and a flashlight|A wooden ladder|A new kitchen sink|A mop and bucket",
        "What had caused the leak according to George's examination?|The old rubber seal inside the pipe joint had worn out after ten years of use|A mouse had chewed through the plastic|The water had frozen into ice|Someone had dropped a heavy pot on the pipe",
        "How long did it take George to replace the pipe section and fit a new rubber seal?|Thirty minutes|Three hours|Five minutes|All afternoon",
        "How did George test his repair before leaving?|He turned the red water valve back on to check that not a single drop was leaking|He waited until the next day|He asked Peter to boil water|He took a photograph of the cupboard",
        "How much did Peter pay for the plumbing repair?|Forty-five euros|One hundred and五十 euros|Ten euros|Ninety euros"
      ]
    },
    {
      num: 20, level: "A2",
      icon: "📻", genre: "ჯანმრთელობა და რადიო",
      title: "რადიოგადაცემა დილის ჯანსაღ ჩვევებზე",
      subtitle: "Radio Health Talk: Four Simple Morning Habits",
      time: "6 წთ",
      paragraphs: [
        [
          "Good morning, everyone! You are listening to 'City Morning Radio', and it is ten past eight. Today in our studio, we have Dr Clara Evans, a nutritionist and wellness author, who is going to share four simple morning habits that can give you more energy throughout the entire workday.",
          "დილა მშვიდობისა ყველას! თქვენ უსმენთ „ქალაქის დილის რადიოს“, საათია ცხრის ათი წუთი. დღეს ჩვენს სტუდიაში სტუმრად გვყავს დოქტორი კლარა ევანსი — ნუტრიციოლოგი და ჯანსაღი ცხოვრების წესის შესახებ წიგნების ავტორი, რომელიც გაგვიზიარებს დილის ოთხ მარტივ ჩვევას მთელი სამუშაო დღის განმავლობაში მეტი ენერგიის შესანარჩუნებლად."
        ],
        [
          "First, Dr Evans talks about waking up: 'Many people press the snooze button on their alarm clock three or चार times, sleeping for an extra five minutes each time. However, this fragmented sleep actually makes your brain feel more tired! Instead, set your alarm for the real time you need to get up, and open your curtains immediately to let natural daylight in.'",
          "პირველ რიგში, დოქტორი ევანსი საუბრობს გაღვიძებაზე: „ბევრი ადამიანი მაღვიძარას გადადების ღილაკს (snooze) სამჯერ ან ოთხჯერ აჭერს ხელს, რათა თითო ჯერზე დამატებით ხუთი წუთი წაუძინოს. თუმცა, ასეთი ნაწყვეტ-ნაწყვეტი ძილი სინამდვილეში ტვინს უფრო მეტად ღლის! ამის ნაცვლად, დააყენეთ მაღვიძარა ზუსტად იმ დროზე, როცა რეალურად უნდა ადგეთ, და მაშინვე გადასწიეთ ფარდები ბუნებრივი სინათლის შემოსაშვებად“."
        ],
        [
          "Second, she explains the importance of water: 'While you sleep for seven or eight hours, your body loses moisture through breathing. Before you drink your morning cup of coffee or tea, drink one full glass of room-temperature water. It wakes up your metabolism and helps your brain concentrate.'",
          "მეორე: ის განმარტავს წყლის მნიშვნელობას: „სანამ შვიდი ან რვა საათის განმავლობაში გძინავთ, თქვენი ორგანიზმი სუნთქვისას კარგავს სითხეს. დილის ფინჯანი ყავის ან ჩაის დალევამდე მიირთვით ერთი სავსე ჭიქა ოთახის ტემპერატურის წყალი. იგი აღვიძებს ნივთიერებათა ცვლას და ეხმარება ტვინს კონცენტრირებაში“."
        ],
        [
          "The third habit is ten minutes of gentle movement. You don't need to run ten kilometres at dawn; simply stretching your back and shoulders, doing ten squats, or walking briskly around the block with your dog increases blood flow and removes morning stiffness.",
          "მესამე ჩვევაა ათწუთიანი მსუბუქი მოძრაობა. სულაც არ არის აუცილებელი გამთენიისას ათი კილომეტრის გარბენა; ზურგისა და მხრების მარტივი გაჭიმვა, ათი ჩაჯდომის გაკეთება ან ძაღლთან ერთად კვარტლის გარშემო სწრაფი ნაბიჯით გავლა აუმჯობესებს სისხლის მიმოქცევას და ხსნის დილის შებოჭილობას."
        ],
        [
          "Finally, Dr Evans warns against eating sugary pastries for breakfast, as they cause a sudden drop in energy at eleven o'clock. Instead, she recommends a breakfast rich in protein and fibre — such as oatmeal with nuts, or boiled eggs with wholegrain toast — and keeping your phone notifications turned off for the first thirty minutes of the morning!",
          "დაბოლოს, დოქტორი ევანსი გვაფრთხილებს, მოვერიდოთ საუზმეზე ტკბილი ფუნთუშეულის ჭამას, რადგან ეს თერთმეტი საათისთვის ენერგიის მკვეთრ ვარდნას იწვევს. ამის ნაცვლად, ის გვირჩევს ცილებითა და უჯრედისით მდიდარ საუზმეს — მაგალითად, შვრიის ფაფას თხილეულით, ან მოხარშულ კვერცხს მთელმარცვლოვან ტოსტთან ერთად — და დილის პირველი ოცდაათი წუთის განმავლობაში ტელეფონის შეტყობინებების გამორთვას!"
        ]
      ],
      glossary: [
        "nutritionist|ნუტრიციოლოგი (კვების სპეციალისტი)", "snooze button|მაღვიძარას გადადების ღილაკი", "fragmented sleep|ნაწყვეტ-ნაწყვეტი (დაქუცმაცებული) ძილი",
        "natural daylight|დღის ბუნებრივი სინათლე", "room-temperature water|ოთახის ტემპერატურის წყალი", "metabolism|მეტაბოლიზმი / ნივთიერებათა ცვლა",
        "stretch (verb)|გაჭიმვა / გაზმორება", "blood flow|სისხლის მიმოქცევა", "protein and fibre|ცილა და უჯრედისი", "wholegrain toast|მთელმარცვლოვანი პურის ტოსტი"
      ],
      questions: [
        "Who is the guest on 'City Morning Radio' at ten past eight?|Dr Clara Evans, a nutritionist and wellness author|A professional marathon runner|A chef from an Italian restaurant|A weather forecaster",
        "Why does Dr Evans advise against pressing the 'snooze button' three or four times?|Because fragmented five-minute sleep makes your brain feel more tired|Because it breaks the alarm clock battery|Because it makes you wake up too early|Because it causes a sore throat",
        "What should you do immediately after waking up according to the first habit?|Open your curtains to let natural daylight in|Check your work emails in the dark|Turn on the television|Eat a piece of chocolate",
        "Why is your body slightly dehydrated when you wake up in the morning?|Because it loses moisture through breathing while you sleep for seven or eight hours|Because the bedroom is too cold|Because you dreamed about running|Because your muscles grow at night",
        "What should you drink before your morning coffee or tea?|One full glass of room-temperature water|A bottle of cold sparkling lemonade|A glass of hot milk with sugar|Two cups of orange juice",
        "How much gentle movement does Dr Evans recommend as the third morning habit?|Ten minutes of stretching, squats, or a brisk walk|Two hours of heavy weightlifting at dawn|Running twenty kilometres before breakfast|No movement at all until noon",
        "How does ten minutes of morning stretching or walking help the body?|It increases blood flow and removes morning stiffness|It makes you fall back asleep|It lowers your height|It replaces breakfast",
        "Why does Dr Evans warn against eating sugary pastries for breakfast?|They cause a sudden drop in energy around eleven o'clock|They are too expensive to buy|They take too long to chew|They make you thirsty at night",
        "What examples of a healthy breakfast rich in protein and fibre does she give?|Oatmeal with nuts, or boiled eggs with wholegrain toast|White bread with strawberry jam|Chocolate muffins and sweet coffee|Ice cream and bananas",
        "How long does she suggest keeping phone notifications turned off after waking up?|For the first thirty minutes of the morning|Until six o'clock in the evening|For only ten seconds|All week"
      ]
    },
    {
      num: 21, level: "A2",
      icon: "🛒", genre: "მომხმარებლის უფლებები",
      title: "წუნდებული ყავის აპარატის დაბრუნება მაღაზიაში",
      subtitle: "Returning a Faulty Coffee Machine",
      time: "6 წთ",
      paragraphs: [
        [
          "Last Saturday, Mrs Laura Bennett bought a silver espresso machine from 'Home Electro', a large electronics store in the shopping mall. The machine cost ninety euros and came with a two-year warranty. For the first three days, it made wonderful hot coffee with thick milk foam.",
          "გასულ შაბათს ქალბატონმა ლორა ბენეტმა სავაჭრო ცენტრში მდებარე ტექნიკის დიდ მაღაზია „ჰოუმ ელექტროში“ იყიდა ვერცხლისფერი ესპრესოს აპარატი. აპარატი ოთხმოცდაათი ევრო ღირდა და მოჰყვებოდა ორწლიანი გარანტია. პირველი სამი დღის განმავლობაში ის შესანიშნავ ცხელ ყავას ამზადებდა სქელი რძის ქაფით."
        ],
        [
          "On Wednesday morning, however, when Laura pressed the power button, the machine made a loud buzzing noise and the water did not heat up at all — it only poured cold water into the cup! Today is Thursday, so Laura has packed the machine back into its original cardboard box and brought it to the store's Customer Service desk.",
          "თუმცა, ოთხშაბათ დილით, როდესაც ლორამ ჩართვის ღილაკს დააჭირა, აპარატმა გამოსცა ხმამაღალი ზუზუნის ხმა და წყალი საერთოდ არ გააცხელა — ფინჯანში მხოლოდ ცივი წყალი ჩამოასხა! დღეს ხუთშაბათია, ამიტომ ლორამ აპარატი ისევ თავის ორიგინალ მუყაოს ყუთში ჩადო და მაღაზიის მომხმარებელთა მომსახურების დახლთან მოიტანა."
        ],
        [
          "The customer service manager, Mr Harris, greets Laura politely and asks to see the paper receipt and the warranty card. Laura hands him both documents and explains that the heating element inside the coffee machine seems to be broken.",
          "მომხმარებელთა მომსახურების მენეჯერი, ბატონი ჰარისი, თავაზიანად ესალმება ლორას და სთხოვს წარმოადგინოს გადახდის ქაღალდის ქვითარი და საგარანტიო ტალონი. ლორა აწვდის ორივე დოკუმენტს და უხსნის, რომ ყავის აპარატის შიგნით გამაცხელებელი ელემენტი სავარაუდოდ გაფუჭებულია."
        ],
        [
          "Mr Harris plugs the machine into the test socket at the counter, and indeed, the water remains completely cold. He apologizes for the inconvenience and tells Laura that since she bought the item less than fourteen days ago, she has two choices: she can either get a full refund of ninety euros onto her bank card, or exchange it immediately for a brand-new machine.",
          "ბატონი ჰარისი აპარატს დახლთან არსებულ სატესტო როზეტში აერთებს და წყალი მართლაც სრულიად ცივი რჩება. ის ბოდიშს იხდის შექმნილი უხერხულობისთვის და ეუბნება ლორას, რომ რადგან ნივთი თოთხმეტ დღეზე ნაკლები ხნის წინ შეიძინა, მას აქვს ორი არჩევანი: შეუძლია სრულად დაიბრუნოს ოთხმოცდაათი ევრო საბანკო ბარათზე, ან მაშინვე გადაცვალოს იგი სრულიად ახალ აპარატში."
        ],
        [
          "Laura says she really liked the coffee it made on the first three days, so she chooses to exchange it for a new one. Mr Harris brings a sealed box from the storeroom, tests the new machine to make sure the water heats up properly, stamps the new warranty card, and gives Laura a complimentary packet of Italian coffee beans as an apology!",
          "ლორა ამბობს, რომ პირველ სამ დღეს აპარატის მომზადებული ყავა ძალიან მოეწონა, ამიტომ ირჩევს მის გადაცვლას ახალ მოდელში. ბატონ ჰარისს საწყობიდან გამოაქვს დალუქული ყუთი, ამოწმებს ახალ აპარატს, რათა დარწმუნდეს, რომ წყალი ნამდვილად ცხელდება, ბეჭედს არტყამს ახალ საგარანტიო ტალონს და ბოდიშის ნიშნად ლორას საჩუქრად გადასცემს იტალიური ყავის მარცვლების შეკვრას!"
        ]
      ],
      glossary: [
        "faulty|წუნდებული / გაუმართავი", "warranty card|საგარანტიო ტალონი", "milk foam|რძის ქაფი",
        "power button|ჩართვის ღილაკი", "heating element|გამაცხელებელი ელემენტი (ტენი)", "inconvenience|უხერხულობა / შეწუხება",
        "full refund|თანხის სრული დაბრუნება", "exchange (verb)|გადაცვლა (ახალ ნივთში)", "storeroom|საწყობი", "complimentary|უფასო / საჩუქრად გადაცემული"
      ],
      questions: [
        "How much did Mrs Laura Bennett pay for the silver espresso machine, and how long was the warranty?|Ninety euros, with a two-year warranty|Fifty euros, with no warranty|Two hundred euros, with a five-year warranty|Thirty euros, with a one-month warranty",
        "How many days did the coffee machine work properly before breaking?|For the first three days|For two years|It never worked at all|For six months",
        "What went wrong with the coffee machine on Wednesday morning?|It made a loud buzzing noise and poured cold water instead of heating it up|The glass pot broke in half|The power cord caught fire|The buttons fell off",
        "What two documents did Mr Harris ask to see at the Customer Service desk?|The paper receipt and the warranty card|Laura's passport and driving licence|A letter from the bank|A photo of her kitchen",
        "How did Mr Harris verify that the machine was indeed faulty?|He plugged it into the test socket at the counter and saw that the water stayed cold|He sent it to a factory in Italy for a month|He opened it with a screwdriver|He took Laura's word without checking",
        "Why did Laura have the right to an immediate refund or exchange?|Because she had bought the item less than fourteen days ago|Because her brother worked at the shop|Because she paid an extra fee|Because it was her birthday",
        "What two options did Mr Harris offer Laura?|A full refund of 90 euros onto her bank card, or an immediate exchange for a brand-new machine|A fifty percent refund or a toaster|Waiting three weeks for repairs|A store voucher for clothes",
        "Which option did Laura choose, and why?|She chose to exchange it for a new machine because she really liked the coffee it made|She took the money and bought a teapot|She left the machine at the shop and walked out|She asked for a television instead",
        "What did Mr Harris do before giving Laura the new machine from the storeroom?|He tested the new machine to make sure the water heated up properly and stamped the warranty card|He painted the box blue|He charged her ten euros for testing|He kept the warranty card",
        "What did Mr Harris give Laura for free as an apology for the inconvenience?|A complimentary packet of Italian coffee beans|A set of six glass mugs|A bottle of milk|A silver spoon"
      ]
    },
    {
      num: 22, level: "A2",
      icon: "🌱", genre: "ბუნება და საზოგადოება",
      title: "საუბნო მებაღეობის კლუბში გაწევრიანება",
      subtitle: "Joining the Sunny Hill Community Garden",
      time: "6 წთ",
      paragraphs: [
        [
          "Many people who live in city apartments wish they had a small piece of land to grow fresh vegetables, herbs, and flowers. Three years ago, the residents of Sunny Hill neighbourhood asked the town council for permission to turn an empty, overgrown lot behind the public library into a Community Garden.",
          "ბევრი ადამიანი, რომელიც ქალაქის კორპუსის ბინაში ცხოვრობს, ნატრობს ჰქონდეს მიწის პატარა ნაკვეთი ახალი ბოსტნეულის, მწვანილისა და ყვავილების მოსაყვანად. სამი წლის წინ უბან „სანი-ჰილის“ მცხოვრებლებმა ქალაქის საბჭოს სთხოვეს ნებართვა, საჯარო ბიბლიოთეკის უკან მდებარე ცარიელი, ბალახით დაფარული ნაკვეთი საუბნო ბაღად გადაექციათ."
        ],
        [
          "Today, the Sunny Hill Community Garden has forty wooden raised beds, a greenhouse for young seedlings, three water taps, and a shared tool shed. On Saturday morning, a new neighbour named Mia visits the garden and meets the club coordinator, Mr Arthur.",
          "დღეს „სანი-ჰილის“ საუბნო ბაღში არის ორმოცი ხის შემაღლებული კვალი, სათბური პატარა ნერგებისთვის, წყლის სამი ონკანი და საერთო ხელსაწყოების ფარდული. შაბათ დილით ახალი მეზობელი, სახელად მია, სტუმრობს ბაღს და ხვდება კლუბის კოორდინატორს, ბატონ არტურს."
        ],
        [
          "Mr Arthur shows Mia around and tells her that Plot Number Seventeen — a sunny wooden bed measuring two metres by three metres — has just become available! To join the club and rent the plot, members pay a small fee of twenty-five euros per year, which pays for water, organic compost, and shared tools.",
          "ბატონი არტური მიას ათვალიერებინებს გარემოს და ეუბნება, რომ ნაკვეთი ნომერი ჩვიდმეტი — მზიანი ხის კვალი ზომით ორი მეტრი სამ მეტრზე — ეს-ესაა გათავისუფლდა! კლუბში გასაწევრიანებლად და კვალის დასაქირავებლად წევრები იხდიან მცირე წლიურ საფასურს — ოცდახუთ ევროს, რაც ხმარდება წყალს, ორგანულ კომპოსტსა და საერთო ხელსაწყოებს."
        ],
        [
          "He explains two important rules of the garden: first, chemical pesticides and artificial sprays are strictly forbidden because the club keeps two beehives in the corner of the orchard; second, every member must clean their spades and watering cans before putting them back in the shed.",
          "ის განმარტავს ბაღის ორ მნიშვნელოვან წესს: პირველი — ქიმიური პესტიციდები და ხელოვნური შესაწამლი საშუალებები მკაცრად აკრძალულია, რადგან კლუბს ხეხილის ბაღის კუთხეში ორი ფუტკრის სკა უდგას; მეორე — თითოეულმა წევრმა ფარდულში დაბრუნებამდე უნდა გაწმინდოს ბარები და სარწყავები."
        ],
        [
          "In the centre of the garden, there is a 'Sharing Table' under a wooden roof. Whenever members harvest more tomatoes, courgettes, or mint than their family can eat, they leave the extra vegetables on the table for neighbours and elderly residents to take for free. Mia is delighted and signs up for Plot Seventeen right away!",
          "ბაღის შუაგულში, ხის გადახურვის ქვეშ, დგას „გაზიარების მაგიდა“. როდესაც წევრები იმაზე მეტ პომიდორს, ყაბაყს ან პიტნას კრეფენ, ვიდრე მათ ოჯახს სჭირდება, ზედმეტ ბოსტნეულს ტოვებენ მაგიდაზე, რათა მეზობლებმა და ხანდაზმულმა მცხოვრებლებმა უფასოდ წაიღონ. მია აღფრთოვანებულია და მაშინვე ეწერება მეჩვიდმეტე ნაკვეთზე!"
        ]
      ],
      glossary: [
        "overgrown lot|ბალახით/ბუჩქებით დაფარული მიწის ნაკვეთი", "raised bed|შემაღლებული ხის კვალი (ბოსტნის)", "greenhouse|სათბური",
        "seedling|ნერგი / ჩითილი", "tool shed|ხელსაწყოების ფარდული", "organic compost|ორგანული სასუქი / კომპოსტი",
        "chemical pesticide|ქიმიური პესტიციდი (მწერების საწამლავი)", "orchard|ხეხილის ბაღი", "spade|ბარი (მიწის სათხრელი)", "courgette (zucchini)|ყაბაყი"
      ],
      questions: [
        "Where is the Sunny Hill Community Garden located?|On a former empty lot behind the public library|On the roof of a supermarket|Next to the airport highway|Inside a school gym",
        "When did the residents turn the empty lot into a community garden?|Three years ago|Yesterday morning|Fifty years ago|Ten years ago",
        "How many wooden raised beds are in the garden today?|Forty wooden raised beds|Only five beds|Two hundred beds|Twelve beds",
        "Which plot number has just become available for Mia, and how big is it?|Plot Number Seventeen, measuring two metres by three metres|Plot Number One, measuring ten metres by ten metres|Plot Number Forty, measuring one metre square|Plot Number Five",
        "How much is the annual membership fee, and what does it pay for?|Twenty-five euros per year, paying for water, organic compost, and shared tools|Twenty-five euros per week for rent only|One hundred euros a month|It costs nothing at all",
        "Why are chemical pesticides strictly forbidden in the community garden?|Because the club keeps two beehives in the corner of the orchard|Because pesticides smell like lemons|Because they change the colour of the wooden fences|Because the library director doesn't like them",
        "What must members do before putting spades and watering cans back into the tool shed?|Clean them properly|Paint them green|Lock them in a metal box|Leave them by the water tap",
        "What is the 'Sharing Table' in the centre of the garden used for?|Members leave extra vegetables there for neighbours and elderly residents to take for free|Members sell expensive fruit to tourists|It is a desk where Mr Arthur writes letters|People leave old books there",
        "Which vegetables and herbs are mentioned as being placed on the Sharing Table?|Tomatoes, courgettes, and mint|Potatoes, onions, and garlic|Apples, pears, and plums|Oranges and bananas",
        "Who is the coordinator of the Sunny Hill Community Garden?|Mr Arthur|Mr Harris|Dr Evans|Mr Jenkins"
      ]
    },
    {
      num: 23, level: "A2",
      icon: "⛴️", genre: "საზღვაო მგზავრობა",
      title: "გამოცხადება სამგზავრო ბორანზე",
      subtitle: "Welcome Announcement Aboard the Island Ferry",
      time: "6 წთ",
      paragraphs: [
        [
          "Good morning, passengers, and welcome aboard the 'Northern Star' ferry! This is Captain Robert speaking from the bridge. We are about to cast off from Harbour Pier Two for our morning crossing to Bluebell Island. The distance is thirty-five kilometres, and our sailing time today will be one hour and forty-five minutes.",
          "დილა მშვიდობისა, მგზავრებო, და კეთილი იყოს თქვენი მობრძანება ბორან „ჩრდილოეთის ვარსკვლავის“ ბორტზე! გესაუბრებათ კაპიტანი რობერტი კაპიტნის ხიდურიდან. ჩვენ ეს-ესაა გავდივართ ნავსადგურის მეორე ნავმისადგომიდან კუნძულ ბლუბელის მიმართულებით. მანძილი ოცდათხუთმეტი კილომეტრია და ჩვენი დღევანდელი ცურვის დრო შეადგენს ერთ საათსა და ორმოცდახუთ წუთს."
        ],
        [
          "For all passengers who parked their cars, vans, or bicycles on the lower vehicle deck, please note that the vehicle deck is locked during the voyage for safety reasons. Please make sure you have taken your handbanks, cameras, and warm coats with you before coming upstairs to the passenger lounges.",
          "ყველა მგზავრის საყურადღებოდ, ვინც მანქანა, ფურგონი ან ველოსიპედი ქვედა სატრანსპორტო გემბანზე გააჩერა: გთხოვთ გაითვალისწინოთ, რომ უსაფრთხოების მიზნით ცურვის დროს სატრანსპორტო გემბანი იკეტება. გთხოვთ დარწმუნდეთ, რომ ზედა სამგზავრო დარბაზებში ამოსვლამდე თან წამოიღეთ ხელჩანთები, კამერები და თბილი ქურთუკები."
        ],
        [
          "Let me briefly explain the layout of our ship. On Deck Two, you will find the main indoor seating lounge, the children's play area, and the self-service cafeteria, which is now open and serving hot porridge, bacon rolls, tea, and freshly brewed coffee. On Deck Three, there is a quiet reading lounge and an open-air viewing deck at the back of the ship.",
          "ნება მიბოძეთ მოკლედ გაგაცნოთ ჩვენი გემის განლაგება. მეორე გემბანზე განთავსებულია მთავარი დახურული მოსაცდელი დარბაზი, ბავშვთა სათამაშო კუთხე და თვითმომსახურების კაფეტერია, რომელიც უკვე ღიაა და გთავაზობთ ცხელ ფაფას, ბეკონიან ფუნთუშებს, ჩაისა და ახალმოდუღებულ ყავას. მესამე გემბანზე კი არის მშვიდი სამკითხველო დარბაზი და ღია გადმოსახედი ბაქანი გემის უკანა ნაწილში."
        ],
        [
          "The sea is calm today with a light breeze from the west, so we expect a very smooth crossing. In about forty minutes, we will pass close to Seal Rock on the right-hand side of the ship. If you go out onto the open viewing deck on Deck Three, you will be able to see dozens of grey seals resting on the rocks and dolphins swimming alongside the ferry!",
          "ზღვა დღეს მშვიდია, ქრის დასავლეთის სუსტი ნიავი, ამიტომ ძალიან რბილ მგზავრობას ველოდებით. დაახლოებით ორმოც წუთში გემის მარჯვენა მხარეს ახლოს ჩავუვლით „სელაპების კლდეს“. თუ გახვალთ მესამე გემბანის ღია გადმოსახედ ბაქანზე, შეძლებთ დაინახოთ კლდეებზე წამოწოლილი ათობით ნაცრისფერი სელაპი და ბორნის გასწვრივ მოცურავე დელფინები!"
        ],
        [
          "For your safety, life jackets are stored under every seat and in the marked cabinets on the outer decks. Fifteen minutes before we dock at Bluebell Island harbour, you will hear an announcement calling car drivers back down to the vehicle deck. Have a pleasant voyage!",
          "თქვენი უსაფრთხოებისთვის სამაშველო ჟილეტები ინახება ყველა სკამის ქვეშ და გარე გემბანებზე არსებულ სპეციალურ კარადებში. კუნძულ ბლუბელის ნავსადგურში შესვლამდე თხუთმეტი წუთით ადრე მოისმენთ გამოცხადებას, რომელიც მძღოლებს ქვედა სატრანსპორტო გემბანზე დაბრუნებისკენ მოუწოდებს. გისურვებთ სასიამოვნო ცურვას!"
        ]
      ],
      glossary: [
        "ferry|სამგზავრო/სატრანსპორტო ბორანი (გემი)", "bridge (ship)|კაპიტნის ხიდური", "cast off|ნაპირიდან გასვლა (გემის)",
        "crossing|ზღვის/სრუტის გადაკვეთა", "vehicle deck|სატრანსპორტო გემბანი (მანქანებისთვის)", "self-service cafeteria|თვითმომსახურების კაფეტერია",
        "open-air viewing deck|ღია გადმოსახედი გემბანი", "smooth crossing|მშვიდი / უშფოთველი ცურვა", "grey seal|ნაცრისფერი სელაპი", "dock (verb)|ნავსადგურში შესვლა / მიბმა"
      ],
      questions: [
        "What is the name of the ferry, and which island is it sailing to?|The 'Northern Star', sailing to Bluebell Island|The 'Silver Wave', sailing to Swan Island|The 'Sea Queen', sailing to Stormy Point|The 'Blue Dolphin'",
        "How long will the thirty-five-kilometre crossing take today?|One hour and forty-five minutes|Thirty minutes|Four hours|Ten hours",
        "Why must car drivers take their bags and coats with them before leaving the lower vehicle deck?|Because the vehicle deck is locked during the voyage for safety reasons|Because the vehicle deck is flooded with water|Because it is too hot downstairs|Because other passengers might move the cars",
        "What facilities are located on Deck Two?|The main indoor seating lounge, the children's play area, and the self-service cafeteria|The captain's bridge and engine room|A swimming pool and cinema|The bicycle rental cabin",
        "What hot food and drinks is the cafeteria on Deck Two serving?|Hot porridge, bacon rolls, tea, and freshly brewed coffee|Pizza, pasta, and lemonade|Roast chicken and soup|Ice cream and waffles",
        "What is located on Deck Three?|A quiet reading lounge and an open-air viewing deck at the back of the ship|The car park|The luggage reclaim belts|The ticket office",
        "What is the weather and sea condition like today?|The sea is calm with a light breeze from the west|There is a heavy storm with high waves|There is thick fog and snow|The wind is blowing from the north",
        "What will passengers see on the right-hand side of the ship in about forty minutes?|Seal Rock, with grey seals resting on the rocks and dolphins swimming alongside|An active underwater volcano|A giant lighthouse|Another ferry from Madrid",
        "Where are the life jackets stored on the ferry?|Under every seat and in marked cabinets on the outer decks|Only inside the captain's cabin|In the car trunks on the lower deck|At the cafeteria cash desk",
        "When will car drivers be called back down to the vehicle deck?|Fifteen minutes before the ferry docks at Bluebell Island harbour|One hour after the ship stops|Halfway through the voyage|At midnight"
      ]
    },
    {
      num: 24, level: "A2",
      icon: "🐕", genre: "ცხოველებზე ზრუნვა",
      title: "ძაღლის აყვანა ცხოველთა თავშესაფრიდან",
      subtitle: "Adopting a Dog from the Animal Shelter",
      time: "6 წთ",
      paragraphs: [
        [
          "After moving into a house with a fenced garden last month, Martin and his ten-year-old daughter Zoe decided they were ready to adopt a rescue dog. On Saturday morning, they drove to the 'Happy Paws Animal Shelter' just outside the town, where dogs and cats wait for new loving homes.",
          "გასულ თვეს შემოღობილი ბაღის მქონე სახლში გადასვლის შემდეგ, მარტინმა და მისმა ათი წლის ქალიშვილმა ზოიმ გადაწყვიტეს, რომ მზად იყვნენ თავშესაფრიდან ძაღლის ასაყვანად. შაბათ დილით ისინი ქალაქგარეთ მდებარე ცხოველთა თავშესაფარ „ბედნიერ თათებში“ მივიდნენ, სადაც ძაღლები და კატები ახალ მზრუნველ ოჯახებს ელოდებიან."
        ],
        [
          "A shelter volunteer named Rachel welcomed them and asked a few questions about their lifestyle: how many hours a day someone is at home, whether they have a fenced yard, and how active they are. Martin explained that he works from home four days a week and loves going for long walks in the forest.",
          "თავშესაფრის მოხალისე რეიჩელი მიესალმა მათ და დაუსვა რამდენიმე კითხვა მათი ცხოვრების წესის შესახებ: დღეში რამდენი საათია ვინმე სახლში, აქვთ თუ არა შემოღობილი ეზო და რამდენად აქტიურები არიან. მარტინმა აუხსნა, რომ კვირაში ოთხი დღე სახლიდან მუშაობს და უყვარს ტყეში ხანგრძლივი სეირნობა."
        ],
        [
          "Rachel led them to Kennel Six to meet Toby, a two-year-old golden retriever mix with soft brown eyes and a friendly tail. She explained that Toby's previous owner was an elderly gentleman who had moved into a small care home where pets were not allowed.",
          "რეიჩელმა ისინი მეექვსე ვოლიერთან მიიყვანა ტობის გასაცნობად — ეს იყო ორი წლის ოქროსფერი რეტრივერის მეტისი თბილი ყავისფერი თვალებითა და მეგობრული კუდით. მან განმარტა, რომ ტობის წინა პატრონი ხანდაზმული ბატონი იყო, რომელიც პატარა მოხუცთა пансионатში გადავიდა, სადაც შინაური ცხოველების ყოლა არ შეიძლებოდა."
        ],
        [
          "To see how they got along, Rachel gave Martin a leash and let them take Toby for a thirty-minute walk in the meadow behind the shelter. Toby walked politely beside Zoe, brought back a tennis ball five times, and sat calmly whenever Zoe gave him a dog biscuit.",
          "იმის სანახავად, თუ როგორ შეეწყობოდნენ ერთმანეთს, რეიჩელმა მარტინს მისცა საბელი და ნება დართო, ტობი ოცდაათი წუთით გაესეირნებინათ თავშესაფრის უკან მდებარე მდელოზე. ტობი ზრდილობიანად მიჰყვებოდა ზოის გვერდით, ხუთჯერ მოუტანა გადაგდებული ჩოგბურთის ბურთი და მშვიდად ჯდებოდა ყოველ ჯერზე, როცა ზოი ძაღლის ორცხობილას აძლევდა."
        ],
        [
          "Back at the office, Rachel gave Martin Toby's veterinary health booklet, showing that Toby was vaccinated and microchipped. Martin signed the adoption agreement and paid a fifty-euro donation to help feed the other animals at the shelter. Toby jumped happily into the back of their car, ready for his new life!",
          "ოფისში დაბრუნებისას რეიჩელმა მარტინს გადასცა ტობის ვეტერინარული პასპორტი, სადაც ჩანდა, რომ ძაღლი აცრილი და ჩიპირებული იყო. მარტინმა ხელი მოაწერა აყვანის ხელშეკრულებას და გადაიხადა ორმოცდაათი ევროს შემოწირულობა თავშესაფრის სხვა ცხოველების გამოსაკვებად. ტობი სიხარულით შეხტა მათი მანქანის უკანა სავარძელზე, ახალი ცხოვრებისთვის მზადმყოფი!"
        ]
      ],
      glossary: [
        "fenced garden|შემოღობილი ბაღი/ეზო", "adopt a rescue dog|თავშესაფრიდან ძაღლის აყვანა", "animal shelter|ცხოველთა თავშესაფარი",
        "work from home|სახლიდან (დისტანციურად) მუშაობა", "kennel|ძაღლის ვოლიერი / სადგომი", "previous owner|წინა პატრონი",
        "get along|შეწყობა / დამეგობრება", "leash|ძაღლის საბელი", "vaccinated and microchipped|აცრილი და მიკროჩიპირებული", "donation|შემოწირულობა (ქველმოქმედება)"
      ],
      questions: [
        "Why did Martin and Zoe wait until this month to adopt a dog?|Because they moved into a house with a fenced garden last month|Because Zoe just turned eighteen|Because the shelter was closed all winter|Because they sold their cat",
        "What is the name of the animal shelter they visited?|Happy Paws Animal Shelter|The City Zoo|Green Meadow Farm|Golden Dog Club",
        "How many days a week does Martin work from home?|Four days a week|Every single day|Only on Fridays|He never works from home",
        "How old is Toby, and what kind of dog is he?|A two-year-old golden retriever mix|A ten-year-old black poodle|A six-month-old white terrier|A five-year-old German shepherd",
        "Why did Toby's previous owner have to give him up?|He was an elderly gentleman who moved into a care home where pets were not allowed|He moved to Australia by boat|Toby was too noisy in the garden|He didn't like walking in the park",
        "Where did Martin and Zoe take Toby for a thirty-minute walk to see how they got along?|In the meadow behind the shelter|Down the busy main street of the town|Inside the shopping mall|Around a lake",
        "How did Toby behave during the walk with Zoe?|He walked politely beside her, brought back a tennis ball five times, and sat calmly for biscuits|He barked at cars and ran away into the woods|He refused to walk and lay down|He jumped into a muddy river",
        "What did Toby's veterinary health booklet show?|That he was already vaccinated and microchipped|That he needed an operation next week|That he was allergic to grass|That he was born in Spain",
        "How much money did Martin pay as a donation to the shelter, and what is it used for?|Fifty euros, to help feed the other animals at the shelter|Five hundred euros for the leash|Ten euros for car parking|Nothing at all",
        "What did Toby do as soon as they finished the paperwork?|He jumped happily into the back of their car|He ran back to Kennel Six|He fell asleep under Rachel's desk|He ate Zoe's hat"
      ]
    },
    {
      num: 25, level: "A2",
      icon: "🥾", genre: "ლაშქრობა და ბუნება",
      title: "მზადება მთის ლაშქრობისთვის",
      subtitle: "Preparing for the Eagle Ridge Hike",
      time: "6 წთ",
      paragraphs: [
        [
          "Good evening, everyone, and welcome to the Friday meeting of the 'Green Trail Hiking Club'! Tomorrow morning, Saturday, our group of twelve hikers is going to climb Eagle Ridge, a scenic mountain trail that rises eight hundred metres above the valley. Please listen carefully to the checklist for tomorrow.",
          "საღამო მშვიდობისა ყველას, და კეთილი იყოს თქვენი მობრძანება „მწვანე ბილიკის მოლაშქრეთა კლუბის“ პარასკევის შეხვედრაზე! ხვალ დილით, შაბათს, ჩვენი თორმეტკაციანი ჯგუფი ავა „არწივის ქედზე“ — თვალწარმტაც მთის ბილიკზე, რომელიც ხეობიდან რვაასი მეტრის სიმაღლეზე ადის. გთხოვთ, ყურადღებით მოუსმინოთ ხვალინდელ სიასა და წესებს."
        ],
        [
          "First, our minibus will leave from the north car park of the central library at seven thirty sharp in the morning. Please arrive by seven fifteen so we can load the backpacks into the boot. The drive to the mountain village of Oakdale takes one hour.",
          "პირველი: ჩვენი მიკროავტობუსი გავა ცენტრალური ბიბლიოთეკის ჩრდილოეთ ავტოსადგომიდან დილის რვის ნახევარზე, ზუსტად დანიშნულ დროს. გთხოვთ მოხვიდეთ რვის თხუთმეტი წუთისთვის, რათა ზურგჩანთები საბარგულში ჩავაწყოთ. მთის სოფელ ოკდეილამდე მგზავრობას ერთი საათი სჭირდება."
        ],
        [
          "Second, let's talk about footwear and clothing. Do not wear brand-new shoes or flat canvas trainers! The upper part of Eagle Ridge is rocky and steep, so you must wear sturdy hiking boots with good ankle support. Even though the valley will be warm at twenty degrees, the mountain peak is windy and ten degrees cooler, so pack a fleece sweater and a windproof jacket.",
          "მეორე: ვისაუბროთ ფეხსაცმელსა და ჩაცმულობაზე. ნუ ჩაიცვამთ სულ ახალ ფეხსაცმელს ან ბრტყელძირიან ნაჭრის კედებს! „არწივის ქედის“ ზედა ნაწილი კლდოვანი და ციცაბოა, ამიტომ აუცილებლად უნდა გეცვათ მყარი სამთო ფეხსაცმელი, რომელიც კოჭს კარგად იჭერს. მიუხედავად იმისა, რომ ხეობაში სითბო და ოცი გრადუსი იქნება, მთის მწვერვალზე ქარია და ათი გრადუსით უფრო გრილა, ამიტომ ჩაალაგეთ თბილი ჯემპრი და ქარგაუმტარი ქურთუკი."
        ],
        [
          "Third, there are no shops or cafés along the mountain trail, and the hike takes five hours in total — three hours going up and two hours coming down. Each hiker must bring at least two litres of water, a packed lunch of sandwiches, and high-energy snacks like almonds, dried apricots, and dark chocolate.",
          "მესამე: მთის ბილიკზე არ არის მაღაზიები ან კაფეები, ლაშქრობას კი ჯამში ხუთი საათი სჭირდება — სამი საათი ასვლას და ორი საათი ჩამოსვლას. თითოეულმა მოლაშქრემ უნდა წამოიღოს მინიმუმ ორი ლიტრი წყალი, სენდვიჩები სადილისთვის და მაღალენერგიული წასახემსებლები, როგორებიცაა ნუში, გარგრის ჩირი და შავი შოკოლადი."
        ],
        [
          "At one o'clock, we will have our picnic lunch beside the old stone watchtower at the summit, where you can see three lakes at once! We will return to Oakdale village by four o'clock and stop at the village bakery for hot apple pie before driving back to the city.",
          "პირველ საათზე მწვერვალზე მდგარ ძველ ქვის საგუშაგო კოშკთან მოვაწყობთ პიკნიკს, საიდანაც ერთდროულად სამი ტბა ჩანს! ოთხი საათისთვის დავბრუნდებით სოფელ ოკდეილში და ქალაქში გამომგზავრებამდე სოფლის საცხობში შევივლით ცხელი ვაშლის ღვეზელის მისართმევად."
        ]
      ],
      glossary: [
        "hiking club|მოლაშქრეთა კლუბი", "scenic trail|თვალწარმტაცი ბილიკი", "minibus|მიკროავტობუსი",
        "boot (car trunk)|მანქანის საბარგული", "sturdy hiking boots|მყარი სამთო ფეხსაცმელი (ბათინკები)", "ankle support|კოჭის დამჭერი/ფიქსატორი",
        "windproof jacket|ქარგაუმტარი ქურთუკი", "dried apricots|გარგრის ჩირი (კურაგა)", "watchtower|საგუშაგო კოშკი", "summit|მთის მწვერვალი"
      ],
      questions: [
        "How many hikers are in the group climbing Eagle Ridge tomorrow, and how high does the trail rise?|Twelve hikers, rising eight hundred metres above the valley|Fifty hikers, rising three thousand metres|Four hikers, rising one hundred metres|Twenty hikers",
        "Where and at what time will the minibus leave tomorrow morning?|From the north car park of the central library at 7:30 sharp (arrive by 7:15)|From the railway station at nine o'clock|From the airport at six o'clock|From Oakdale village at noon",
        "How long does the minibus drive to Oakdale village take?|One hour|Three hours|Fifteen minutes|Four hours",
        "Why must hikers wear sturdy hiking boots instead of flat canvas trainers?|Because the upper part of Eagle Ridge is rocky and steep, requiring good ankle support|Because they have to wade through a deep river|Because it is snowing in the valley|Because trainers are too heavy",
        "Why should hikers pack a fleece sweater and a windproof jacket even though the valley is 20 degrees?|Because the mountain peak is windy and ten degrees cooler (around 10°C)|Because they will camp overnight on the mountain|Because it will snow heavily at noon|To use the jacket as a pillow",
        "How long does the entire hike take going up and coming down?|Five hours in total — three hours going up and two hours coming down|One hour in total|Eight hours going up and four hours coming down|Ten hours",
        "How much water must each hiker carry in their backpack?|At least two litres of water|Half a glass of water|Five litres of lemonade|None, because there are cafés on the peak",
        "What high-energy snacks does the leader recommend bringing along with sandwiches?|Almonds, dried apricots, and dark chocolate|Ice cream and yoghurt|Hot soup in open bowls|Potato salad",
        "Where will the group eat their picnic lunch at one o'clock?|Beside the old stone watchtower at the summit, overlooking three lakes|Inside a mountain restaurant|In the minibus|At the library car park",
        "Where will the group stop at four o'clock in Oakdale village before driving back to the city?|At the village bakery for hot apple pie|At a swimming pool|At a shoe shop|At the police station"
      ]
    },
    {
      num: 26, level: "A2",
      icon: "🍕", genre: "კულინარია და პოდკასტი",
      title: "კულინარიული პოდკასტი: ნამდვილი პიცის მომზადება",
      subtitle: "Kitchen Podcast: The Secret to Perfect Homemade Pizza",
      time: "6 წთ",
      paragraphs: [
        [
          "Hello, food lovers, and welcome back to Episode Twelve of the 'Simple Kitchen Podcast'! I am your host, Chef Marco. Today we are going to talk about why homemade pizza sometimes turns out hard like a biscuit, and how you can make soft, crispy Italian pizzeria-style pizza in your own home oven!",
          "გამარჯობა, გურმანებო, და კეთილი იყოს თქვენი დაბრუნება „მარტივი სამზარეულოს პოდკასტის“ მეთორმეტე ეპიზოდში! მე ვარ თქვენი წამყვანი, შეფ-მზარეული მარკო. დღეს ვისაუბრებთ იმაზე, თუ რატომ გამოდის ზოგჯერ სახლში გამომცხვარი პიცა ორცხობილასავით მაგარი, და როგორ შეგიძლიათ მოამზადოთ რბილი, ხრაშუნა იტალიური პიცა საკუთარ საოჯახო ღუმელში!"
        ],
        [
          "The first secret lies in the dough. You only need चार basic ingredients: five hundred grams of strong bread flour, three hundred millilitres of lukewarm water, one teaspoon of dry yeast, and two teaspoons of sea salt. Never use hot water, because hot water kills the yeast and the dough will not rise!",
          "პირველი საიდუმლო ცომშია. თქვენ გჭირდებათ მხოლოდ ოთხი საბაზისო ინგრედიენტი: ხუთასი გრამი პურის ფქვილი, სამასი მილილიტრი ნელთბილი წყალი, ერთი ჩაის კოვზი მშრალი საფუარი და ორი ჩაის კოვზი ზღვის მარილი. არასდროს გამოიყენოთ ცხელი წყალი, რადგან ცხელი წყალი კლავს საფუარს და ცომი აღარ ამოფუვდება!"
        ],
        [
          "After kneading the dough on a wooden board for ten minutes until it is smooth and elastic, place it in a lightly oiled bowl, cover it, and put it in the fridge overnight for twenty-four hours. This slow cold fermentation gives the crust a wonderful flavour and makes it much easier to digest.",
          "მას შემდეგ, რაც ცომს ხის დაფაზე ათი წუთის განმავლობაში მოზელთ, სანამ გლუვი და ელასტიკური არ გახდება, მოათავსეთ იგი მსუბუქად ზეთწასმულ ჯამში, დააფარეთ და შედგით მაცივარში ოცდაოთხი საათით. ეს ნელი, ცივი ფერმენტაცია ქერქს საოცარ გემოს სძენს და ბევრად უფრო ადვილად მოსანელებელს ხდის."
        ],
        [
          "When you shape the pizza the next day, do not use a wooden rolling pin! A rolling pin pushes all the air bubbles out of the dough. Instead, press the dough gently from the centre outwards with your fingertips, leaving a puffy ring around the edge to form the crust.",
          "როდესაც მეორე დღეს პიცის გაბრტყელებას დაიწყებთ, არ გამოიყენოთ ხის საბრტყელებელი (ცომის გორგოლაჭი)! საბრტყელებელი ცომიდან ჰაერის ყველა ბუშტუკს დევნის. ამის ნაცვლად, თითის წვერებით ფრთხილად გაშალეთ ცომი ცენტრიდან ნაპირებისკენ ისე, რომ კიდეებზე ფუმფულა რგოლი დატოვოთ ქერქისთვის."
        ],
        [
          "Finally, do not boil your tomato sauce on the stove; simply crush canned Italian plum tomatoes by hand with a pinch of salt and a drizzle of olive oil. Turn your oven to its highest temperature — two hundred and fifty degrees — preheat a flat baking tray inside, and bake the pizza with mozzarella for just eight minutes. Add fresh basil leaves after taking it out of the oven so they don't burn!",
          "დაბოლოს, პომიდვრის სოუსს ქურაზე ნუ მოხარშავთ; უბრალოდ ხელით დასრისეთ კعلبული იტალიური ქლიავისებური პომიდორი მწიკვ მარილთან და ცოტაოდენ ზეითუნის ზეთთან ერთად. ჩართეთ ღუმელი მაქსიმალურ ტემპერატურაზე — ორას ორმოცდაათ გრადუსზე — წინასწარ გაახურეთ შიგნით ბრტყელი საცხობი ლანგარი და გამოაცხვეთ პიცა მოცარელასთან ერთად სულ რაღაც რვა წუთის განმავლობაში. ცოცხალი რეჰანის ფოთლები კი ღუმელიდან გამოღების შემდეგ დაუმატეთ, რომ არ დაიწვას!"
        ]
      ],
      glossary: [
        "dough|ცომი", "lukewarm water|ნელთბილი წყალი", "yeast|საფუარი",
        "knead (verb)|ცომის მოზელა", "fermentation|ფერმენტაცია / დადუღება (ცომის ამოსვლა)", "rolling pin|ცომის საბრტყელებელი ჯოხი",
        "air bubbles|ჰაერის ბუშტუკები", "fingertips|თითის წვერები", "pinch of salt|მწიკვი მარილი", "preheat|წინასწარ გახურება (ღუმელის)"
      ],
      questions: [
        "Who is the host of the 'Simple Kitchen Podcast', and which episode is this?|Chef Marco, in Episode Twelve|Chef Lorenzo, in Episode One|Mr Martin, in Episode Five|Dr Evans, in Episode Twenty",
        "What are the four basic ingredients needed for the pizza dough?|500g of strong bread flour, 300ml of lukewarm water, 1 teaspoon of dry yeast, and 2 teaspoons of sea salt|Flour, boiling milk, sugar, and butter|Rice flour, cold juice, baking soda, and eggs|Flour, olive oil, cheese, and vinegar",
        "Why must you never use hot water when mixing the yeast?|Because hot water kills the yeast and the dough will not rise|Because hot water melts the wooden bowl|Because it makes the dough turn blue|Because it makes the salt taste bitter",
        "How long should you knead the dough on a wooden board?|For ten minutes until it is smooth and elastic|For two hours|For only ten seconds|You should not knead it at all",
        "Where and for how long should the dough rest for slow cold fermentation?|In a covered, lightly oiled bowl in the fridge overnight for twenty-four hours|On Top of a hot radiator for five minutes|In the freezer for a month|Outdoors in the sun for three hours",
        "Why does Chef Marco tell listeners NOT to use a wooden rolling pin to shape the pizza?|Because a rolling pin pushes all the air bubbles out of the dough|Because the dough sticks to the wood|Because rolling pins are too heavy|Because it makes the pizza square",
        "How should you stretch and shape the pizza dough instead?|By pressing it gently from the centre outwards with your fingertips, leaving a puffy ring around the edge|By cutting it with a knife|By pulling it with two forks|By pressing it under a heavy pot",
        "How should you prepare the tomato sauce according to Chef Marco?|Do not boil it; simply crush canned Italian plum tomatoes by hand with a pinch of salt and olive oil|Boil tomatoes with sugar and flour for two hours|Mix ketchup with hot water|Fry onions and carrots in butter",
        "At what temperature and for how many minutes should the pizza bake in a home oven?|At the highest temperature (250°C) on a preheated tray for just eight minutes|At 100°C for one hour|At 150°C for forty minutes|At 80°C for three hours",
        "When should you add fresh basil leaves to the pizza, and why?|After taking the pizza out of the oven, so the delicate leaves don't burn|Before putting the dough in the fridge|Underneath the dough on the metal tray|While kneading the flour"
      ]
    },
    {
      num: 27, level: "A2",
      icon: "🏺", genre: "ჰობი და ხელოვნება",
      title: "კერამიკის საღამოს კურსზე ჩაწერა",
      subtitle: "Enrolling in an Evening Pottery Course",
      time: "6 წთ",
      paragraphs: [
        [
          "After spending eight hours a day typing on a computer at a bank, twenty-six-year-old Elena wanted a creative evening hobby where she could make real objects with her hands. Walking home through the Old Quarter on Monday, she saw a sign in a studio window: 'Clay & Wheel Studio — Beginner Pottery Courses Starting Next Week!'",
          "ბანკში კომპიუტერთან დღეში რვასაათიანი მუშაობის შემდეგ, ოცდაექვსი წლის ელენას სურდა შემოქმედებითი საღამოს ჰობი, სადაც საკუთარი ხელით შექმნიდა ნამდვილ ნივთებს. ორშაბათს, ძველ უბანში სახლისკენ მიმავალმა, სახელოსნოს ვიტრინაში დაინახა აბრა: „თიხისა და ჩარხის სტუდია — დამწყებთა კერამიკის კურსები იწყება მომავალ კვირას!“"
        ],
        [
          "Elena walked inside. The studio smelled of damp earth, and shelves along the brick walls were lined with bowls, vases, and teapots in blue, green, and cream glazes. The pottery teacher, a cheerful woman in a clay-stained apron named Mrs Clara, welcomed her and wiped her hands on a towel.",
          "ელენა შიგნით შევიდა. სახელოსნოში ნესტიანი მიწის სურნელი იდგა, აგურის კედლების გასწვრივ განლაგებულ თაროებზე კი ეწყო ლურჯი, მწვანე და კრემისფერი ჭიქურით დაფარული ჯამები, ლარნაკები და ჩაიდნები. კერამიკის მასწავლებელი — თიხით დასვრილ წინსაფარში გამოწყობილი მხიარული ქალი, სახელად ქალბატონი კლარა — მიესალმა მას და ხელები პირსახოცზე შეიწმინდა."
        ],
        [
          "Mrs Clara explained how the beginner course works: it runs for six weeks, every Tuesday and Thursday evening from half past six until half past eight. There are only eight students in each group so that everyone gets their own electric potter's wheel and plenty of individual guidance.",
          "ქალბატონმა კლარამ აუხსნა, როგორ ტარდება დამწყებთა კურსი: იგი გრძელდება ექვსი კვირა, ყოველ სამშაბათსა და ხუთშაბათს საღამოს, შვიდის ნახევრიდან ცხრის ნახევრამდე. თითოეულ ჯგუფში მხოლოდ რვა მოსწავლეა, რათა ყველას ჰქონდეს საკუთარი ელექტრული სამეთუნეო ჩარხი და მასწავლებლის საკმარისი ყურადღება."
        ],
        [
          "During the first three weeks, students learn how to centre soft grey clay on the spinning wheel and shape simple breakfast bowls, coffee mugs, and small flowerpots. In the fourth week, the dried clay pieces are baked for the first time in a special high-temperature oven called a kiln at one thousand degrees Celsius!",
          "პირველი სამი კვირის განმავლობაში მოსწავლეები სწავლობენ მბრუნავ ჩარხზე რბილი ნაცრისფერი თიხის ცენტრირებას და მარტივი საუზმის ჯამების, ყავის ჭიქებისა და ყვავილის პატარა ქოთნების ამოყვანას. მეოთხე კვირაში გამომშრალი თიხის ნაკეთობები პირველად იწვება სპეციალურ მაღალტემპერატურულ ღუმელში (ქურაში) ათას გრადუს ცელსიუსზე!"
        ],
        [
          "In the final two weeks, students paint their baked bowls with colourful liquid glazes, and the pieces are fired in the kiln a second time to make them shiny, waterproof, and safe for food. The full six-week course costs one hundred and twenty euros, including all clay, glazes, aprons, and kiln firing. Elena paid a twenty-euro deposit and took the last free spot in the group!",
          "ბოლო ორი კვირის განმავლობაში მოსწავლეები გამომწვარ ჯამებს ღებავენ ფერადი თხევადი ჭიქურით (მინანქრით), რის შემდეგაც ნაკეთობები მეორედ იწვება ქურაში, რათა გახდეს პრიალა, წყალგაუმტარი და საკვებისთვის უსაფრთხო. სრული ექვსკვირიანი კურსი ღირს ას ოცი ევრო, რაშიც შედის თიხა, ჭიქური, წინსაფრები და ქურაში გამოწვა. ელენამ გადაიხადა ოცი ევროს წინასწარი შენატანი (ავანსი) და ჯგუფში ბოლო თავისუფალი ადგილი დაიკავა!"
        ]
      ],
      glossary: [
        "pottery course|კერამიკის / მეთუნეობის კურსი", "glaze|კერამიკული ჭიქური / მინანქარი", "apron|წინსაფარი",
        "potter's wheel|სამეთუნეო ჩარხი (მბრუნავი დაზგა)", "individual guidance|ინდივიდუალური მითითება / ხელმძღვანელობა", "centre the clay|თიხის ცენტრირება ჩარხზე",
        "kiln|კერამიკის გამოსაწვავი სპეციალური ღუმელი/ქურა", "waterproof|წყალგაუმტარი", "deposit|წინასწარი შენატანი / ბე (ავანსი)", "last free spot|ბოლო თავისუფალი ადგილი"
      ],
      questions: [
        "Where does Elena work during the day, and why did she want an evening hobby?|She works on a computer at a bank and wanted a creative hobby where she could make real objects with her hands|She works at a bakery and wanted to learn how to use computers|She is a school teacher who wanted to learn a foreign language|She is a tour guide",
        "What is the name of the pottery studio in the Old Quarter?|Clay & Wheel Studio|The Golden Bowl|Art & Paint House|The Red Brick Gallery",
        "How long does the beginner pottery course last, and on which evenings do classes meet?|For six weeks, every Tuesday and Thursday evening from 6:30 to 8:30 PM|For one weekend on Saturday and Sunday|For six months, every Monday morning|For two weeks, every night at nine",
        "Why are there only eight students in each group?|So that everyone gets their own electric potter's wheel and plenty of individual guidance|Because the studio only has eight chairs|Because clay is very rare|Because the room is in a tiny basement",
        "What objects do students learn to shape on the spinning wheel during the first three weeks?|Simple breakfast bowls, coffee mugs, and small flowerpots|Giant garden statues|Clay roof tiles|Plates and spoons",
        "What is a 'kiln', and how hot does it get?|A special high-temperature oven for baking clay at one thousand degrees Celsius|A wooden tool for cutting clay|A cold fridge for storing paint|A brush made of horsehair",
        "When are the dried clay pieces baked in the kiln for the first time?|In the fourth week of the course|On the very first evening|After six months|At the students' homes",
        "Why are the painted bowls fired in the kiln a second time in the final weeks?|To make the glaze shiny, waterproof, and safe for food|To make the bowls smaller|To turn the clay back into soft mud|To dry the aprons",
        "How much does the full six-week course cost, and what is included in the price?|120 euros, including all clay, glazes, aprons, and kiln firing|50 euros, but students must buy their own clay and oven|300 euros for three lessons|20 euros in total",
        "How much did Elena pay as a deposit to reserve the last free spot in the group?|Twenty euros|One hundred and twenty euros|Ten euros|Fifty euros"
      ]
    },
    {
      num: 28, level: "A2",
      icon: "🚗", genre: "ტრანსპორტი და გზები",
      title: "საგზაო მოძრაობისა და რემონტის მიმოხილვა რადიოში",
      subtitle: "Morning Traffic and Roadworks Update",
      time: "6 წთ",
      paragraphs: [
        [
          "Good morning, drivers! It is quarter to eight on Monday morning, and here is your live fifteen-minute traffic and public transport update for the metropolitan area. Because of overnight rain and several new roadworks projects starting this week, traffic into the city centre is heavier than usual today.",
          "დილა მშვიდობისა, მძღოლებო! ორშაბათი დილაა, რვის თხუთმეტი წუთია, და გთავაზობთ საგზაო მოძრაობისა და საზოგადოებრივი ტრანსპორტის პირდაპირ მიმოხილვას დედაქალაქის მასშტაბით. ღამის წვიმისა და ამ კვირაში დაწყებული რამდენიმე ახალი საგზაო-სარემონტო სამუშაოს გამო, ქალაქის ცენტრისკენ მოძრაობა დღეს ჩვეულებრივზე უფრო გადატვირთულია."
        ],
        [
          "First, a warning for drivers coming from the north on the M4 Highway: a delivery truck has a flat tyre in the right-hand lane just before Exit Six. Police are on the scene, and nobody is injured, but there is a four-kilometre queue of slow-moving cars. If possible, leave the highway early at Exit Five and take the Old Valley Road instead.",
          "პირველ რიგში, გაფრთხილება ჩრდილოეთიდან M4 ავტომაგისტრალით მომავალი მძღოლებისთვის: მეექვსე გასასვლელამდე სულ ცოტა ხნით ადრე, მარჯვენა ზოლში სადისტრიბუციო სატვირთო მანქანას საბურავი დაეშვა. პოლიცია ადგილზეა და არავინ დაშავებულა, თუმცა დგას ნელა მოძრავი მანქანების ოთხკილომეტრიანი რიგი. თუ შესაძლებელია, ადრევე გადაუხვიეთ მაგისტრალიდან მეხუთე გასასვლელთან და ისარგებლეთ ძველი ხეობის გზით."
        ],
        [
          "In the city centre, the West River Bridge is closed to all private cars and taxis from today until Friday afternoon while engineers repair the bridge surface and paint the iron railings. Only city buses, ambulances, and cyclists are allowed to cross the West River Bridge this week; all other drivers must use the South Tunnel.",
          "ქალაქის ცენტრში დღეიდან პარასკევ ნაშუადღევამდე დასავლეთის მდინარის ხიდი დაკეტილია ყველა კერძო ავტომობილისა და ტაქსისთვის, სანამ ინჟინრები ხიდის საფარს არემონტებენ და რკინის მოაჯირებს ღებავენ. ამ კვირაში დასავლეთის ხიდზე გადასვლის უფლება აქვთ მხოლოდ ქალაქის ავტობუსებს, სასწრაფო დახმარების მანქანებსა და ველოსიპედისტებს; ყველა სხვა მძღოლმა უნდა ისარგებლოს სამხრეთის გვირაბით."
        ],
        [
          "Next, an announcement for people driving to the Central Shopping Mall: the underground car park on Level Two is closed for electrical lighting maintenance today, so spaces are filling up fast. However, the 'Park and Ride' car park next to the football stadium has five hundred free spaces, and a shuttle bus runs to the centre every ten minutes for just one euro.",
          "შემდეგი ცნობა ცენტრალურ სავაჭრო ცენტრში მიმავალი მძღოლებისთვის: მიწისქვეშა ავტოსადგომის მეორე დონე დღეს დაკეტილია ელექტროგანათების პროფილაქტიკური სამუშაოების გამო, ამიტომ ადგილები სწრაფად ივსება. თუმცა, ფეხბურთის სტადიონის გვერდით მდებარე „Park and Ride“ ავტოსადგომზე ხუთასი თავისუფალი ადგილია, საიდანაც სპეციალური ავტობუსი ქალაქის ცენტრისკენ ყოველ ათ წუთში ერთხელ გადის სულ რაღაც ერთ ევროდ."
        ],
        [
          "Finally, good news for rail and metro passengers: all three underground metro lines and the suburban trains are running right on schedule this morning with zero delays. Drive safely, keep a safe distance on the wet roads, and we will be back with the next traffic report at eight o'clock!",
          "დაბოლოს, კარგი ამბავი რკინიგზისა და მეტროს მგზავრებისთვის: მეტროს სამივე ხაზი და საგარეუბნო მატარებლები დღეს დილით ზუსტად განრიგის მიხედვით, ყოველგვარი შეფერხების გარეშე მუშაობს. იარეთ უსაფრთხოდ, დაიცავით დისტანცია სველ გზებზე, ჩვენ კი მომდევნო საგზაო მიმოხილვით რვა საათზე დაგიბრუნდებით!"
        ]
      ],
      glossary: [
        "roadworks|საგზაო-სარემონტო სამუშაოები", "flat tyre|დაშვებული საბურავი", "right-hand lane|მარჯვენა სამოძრაო ზოლი",
        "on the scene|შემთხვევის ადგილზე", "iron railings|რკინის მოაჯირი", "cyclist|ველოსიპედისტი",
        "electrical maintenance|ელექტროსისტემის ტექნიკური მომსახურება", "shuttle bus|სპეციალური მიმომსვლელი ავტობუსი (შატლი)", "on schedule|განრიგის მიხედვით / დროულად", "keep a safe distance|უსაფრთხო დისტანციის დაცვა"
      ],
      questions: [
        "What time is this morning traffic report broadcast, and when is the next one?|It is broadcast at quarter to eight (7:45 AM), and the next one is at eight o'clock|At nine o'clock, and the next one is at noon|At six in the morning|At five in the afternoon",
        "What has caused a four-kilometre queue of slow-moving cars on the M4 Highway?|A delivery truck has a flat tyre in the right-hand lane just before Exit Six|A heavy snowstorm blocked the road|A bridge collapsed into the river|A flock of sheep is on the road",
        "Which alternative route does the presenter recommend for drivers on the M4 Highway?|Leave the highway early at Exit Five and take the Old Valley Road|Wait on the highway for three hours|Turn around and drive backwards|Take a ferry boat",
        "Why is the West River Bridge closed to private cars and taxis until Friday afternoon?|Engineers are repairing the bridge surface and painting the iron railings|A film is being shot on the bridge|The river is flooded over the bridge|A marathon race is taking place all week",
        "Who IS allowed to cross the West River Bridge this week?|Only city buses, ambulances, and cyclists|Only heavy trucks and taxis|Only pedestrians with dogs|Nobody at all",
        "Which route must private car drivers use instead of the West River Bridge?|The South Tunnel|The Old Wooden Bridge|The railway bridge|The airport highway",
        "Why is Level Two of the Central Shopping Mall's underground car park closed today?|For electrical lighting maintenance|Because it is flooded with rainwater|Because it is being turned into a supermarket|Because the gate is broken",
        "Where is the 'Park and Ride' car park with five hundred free spaces located?|Next to the football stadium|At the airport|Behind the hospital|On top of the hill",
        "How often does the shuttle bus run from the stadium car park to the centre, and how much does it cost?|Every ten minutes, for just one euro|Once an hour, for ten euros|Every thirty minutes, for five euros|Only twice a day",
        "How are the three underground metro lines and suburban trains running this morning?|Right on schedule with zero delays|All metro lines are closed today|With a forty-minute delay|Only one line is working"
      ]
    },
    {
      num: 29, level: "A2",
      icon: "🪐", genre: "მეცნიერება და კოსმოსი",
      title: "წარმოდგენა ქალაქის პლანეტარიუმში",
      subtitle: "A Guided Show at the City Planetarium",
      time: "6 წთ",
      paragraphs: [
        [
          "Good afternoon, visitors, and welcome to the Star Dome at the City Planetarium! My name is DrAlan Vance, an astronomer here at the observatory. In a moment, the main hall lights will fade to black, and our digital projector in the centre of the room will project the night sky onto the curved ceiling above your heads.",
          "შუადღე მშვიდობისა, სტუმრებო, და კეთილი იყოს თქვენი მობრძანება ქალაქის პლანეტარიუმის „ვარსკვლავურ გუმბათში“! მე გახლავართ დოქტორი ალან ვანსი, ამ ობსერვატორიის ასტრონომი. სულ მალე დარბაზის მთავარი განათება ჩაქრება და დარბაზის ცენტრში მდგარი ციფრული პროექტორი თქვენს თავზემოთ, მრუდე ჭერზე, ღამის ცას გამოსახავს."
        ],
        [
          "Before we begin our forty-minute journey through the solar system, please switch your mobile phones and smartwatches to silent mode, and turn your screen brightness all the way down. Even a tiny flash of white light from a phone screen makes it harder for everyone's eyes to adjust to the dark sky.",
          "სანამ მზის სისტემაში ჩვენს ორმოცწუთიან მოგზაურობას დავიწყებდეთ, გთხოვთ გადაიყვანოთ მობილური ტელეფონები და სმარტ-საათები უხმო რეჟიმზე და ბოლომდე დაუწიოთ ეკრანის სიკაშკაშეს. ტელეფონის ეკრანის პაწაწინა თეთრი ნათებაც კი ართულებს თვალების ბნელ ცასთან შეჩვევას."
        ],
        [
          "Look straight up at the centre of the dome now! Because we have removed the city's light pollution, you can see more than three thousand stars. Those seven bright stars arranged like a saucepan form the 'Big Dipper'. If you follow a straight line from the two stars at the front edge of the pan, they point directly to Polaris — the North Star — which always marks true north!",
          "ახლა აიხედეთ პირდაპირ გუმბათის ცენტრში! რადგან ჩვენ მოვაშორეთ ქალაქის სინათლით დაბინძურება, თქვენ შეგიძლიათ დაინახოთ სამი ათასზე მეტი ვარსკვლავი. ის შვიდი კაშკაშა ვარსკვლავი, რომელიც ტარიანი ქვაბის (ჩამჩის) ფორმით არის განლაგებული, ქმნის „დიდ დათვს“. თუ ქვაბის წინა კიდის ორი ვარსკვლავიდან სწორ ხაზს გააყოლებთ თვალს, ისინი პირდაპირ მიუთითებენ პოლარულ ვარსკვლავზე, რომელიც ყოველთვის ნამდვილ ჩრდილოეთს გვიჩვენებს!"
        ],
        [
          "Now our projector is zooming in on the planets of our solar system. First, we pass Mars, the 'Red Planet', whose surface is covered in iron oxide — better known as rust! Mars has polar ice caps and the tallest volcano in the solar system, Olympus Mons, which is three times higher than Mount Everest.",
          "ახლა ჩვენი პროექტორი ახლოდან გვიჩვენებს მზის სისტემის პლანეტებს. ჯერ ჩავუვლით მარსს — „წითელ პლანეტას“, რომლის ზედაპირიც დაფარულია რკინის ოქსიდით, რაც ჩვენთვის ჟანგის სახელითაა ცნობილი! მარსს აქვს პოლარული ყინულოვანი ქუდები და მზის სისტემაში ყველაზე მაღალი ვულკანი — ოლიმპოს მთა, რომელიც ევერესტზე სამჯერ მაღალია."
        ],
        [
          "Beyond Mars lies Jupiter, a giant ball of hydrogen and helium gas so huge that more than one thousand three hundred Earths could fit inside it! Notice the 'Great Red Spot' on Jupiter's side — that is a giant storm that has been blowing for over three hundred years. After the show ends, if the evening sky outside stays clear, you are invited up to the roof terrace to look at Jupiter's चार largest moons through our real telescope!",
          "მარსის მიღმა მდებარეობს იუპიტერი — წყალბადისა და ჰელიუმის გაზისგან შემდგარი იმდენად უზარმაზარი სფერო, რომ მის შიგნით ათას სამასზე მეტი დედამიწა დაეტეოდა! დააკვირდით „დიდ წითელ ლაქას“ იუპიტერის გვერდზე — ეს არის გიგანტური ქარიშხალი, რომელიც სამას წელზე მეტია მძვინვარებს. წარმოდგენის დასრულების შემდეგ, თუ გარეთ საღამოს ცა მოწმენდილი დარჩება, გეპატიჟებით სახურავის ტერასაზე, რათა ჩვენი ნამდვილი ტელესკოპით დაათვალიეროთ იუპიტერის ოთხი უდიდესი თანამგზავრი (მთვარე)!"
        ]
      ],
      glossary: [
        "planetarium / observatory|პლანეტარიუმი / ობსერვატორია", "curved ceiling / dome|მრუდე (თაღოვანი) ჭერი / გუმბათი", "silent mode|უხმო რეჟიმი",
        "light pollution|სინათლით დაბინძურება (ქალაქის ნათება)", "Big Dipper|„დიდი დათვის“ თანავარსკვლავედის ჩამჩა", "North Star (Polaris)|პოლარული ვარსკვლავი",
        "iron oxide (rust)|რკინის ოქსიდი (ჟანგი)", "polar ice caps|პოლარული ყინულოვანი ქუდები", "hydrogen and helium|წყალბადი და ჰელიუმი", "roof terrace|სახურავის ტერასა"
      ],
      questions: [
        "How long does the guided planetarium show last?|Forty minutes|Two hours|Fifteen minutes|Three hours",
        "Why does Dr Alan Vance ask visitors to turn off their phone screens completely?|Because even a tiny flash of white light makes it harder for everyone's eyes to adjust to the dark sky|Because phone signals turn off the projector|Because phones use the planetarium's electricity|Because photography is too loud",
        "How many stars can visitors see on the dome once the city's light pollution is removed?|More than three thousand stars|Only seven stars|About fifty stars|Ten million stars",
        "How can you use the seven stars of the 'Big Dipper' to find the North Star (Polaris)?|Follow a straight line from the two stars at the front edge of the saucepan|Count three stars backwards from the handle|Look directly opposite the moon|Follow the brightest red planet",
        "Why does the surface of Mars look red?|Because it is covered in iron oxide, better known as rust|Because it is covered in red lava fires|Because red flowers grow there|Because of red clouds of gas",
        "What is 'Olympus Mons' on Mars, and how tall is it?|The tallest volcano in the solar system, three times higher than Mount Everest|A deep ocean trench|A crater filled with liquid water|A mountain smaller than the Alps",
        "What is the planet Jupiter made of, and how large is it?|A giant ball of hydrogen and helium gas, large enough to fit over 1,300 Earths inside|A solid rock of iron smaller than Earth|A frozen ball of water ice|A star burning like the Sun",
        "What is the 'Great Red Spot' on Jupiter's side?|A giant storm that has been blowing for over three hundred years|A tall red mountain|A lake of hot oil|A shadow cast by Mars",
        "Where are visitors invited to go after the planetarium show if the evening sky stays clear?|Up to the roof terrace to look through the real observatory telescope|Down to the basement cinema|To the gift shop to buy rocks|To the airport",
        "What will visitors be able to see through the real telescope on the roof?|Jupiter's four largest moons|Astronauts walking on Mars|The rings of the Sun|Satellites landing on Venus"
      ]
    },
    {
      num: 30, level: "A2",
      icon: "📚", genre: "განათლება და ქველმოქმედება",
      title: "საქველმოქმედო წიგნის ბაზრობის ორგანიზება სკოლაში",
      subtitle: "Organizing the Annual School Charity Book Fair",
      time: "6 წთ",
      paragraphs: [
        [
          "Good morning, teachers and students of Oakridge High School! This is your student council president, Liam, speaking. Next Saturday, the二十-second of October, our school is holding its annual 'Autumn Charity Book Fair' in the main sports hall from ten in the morning until four in the afternoon.",
          "დილა მშვიდობისა, ოკრიჯის უფროსი სკოლის მასწავლებლებო და მოსწავლეებო! მოგმართავთ მოსწავლეთა თვითმმართველობის პრეზიდენტი ლიამი. მომავალ შაბათს, ოცდაორ ოქტომბერს, ჩვენი სკოლა მთავარ სპორტულ დარბაზში დილის ათი საათიდან საღამოს ოთხ საათამდე ატარებს ყოველწლიურ „შემოდგომის საქველმოქმედო წიგნის ბაზრობას“."
        ],
        [
          "This year, all the money we raise from the fair will be donated to the Children's Hospital Library in our city, to buy new storybooks, audiobooks, and art supplies for young patients. Our goal is to raise one thousand euros!",
          "წელს ბაზრობიდან შემოსული მთელი თანხა გადაერიცხება ჩვენი ქალაქის ბავშვთა საავადმყოფოს ბიბლიოთეკას, რათა პატარა პაციენტებისთვის შევიძინოთ ახალი ზღაპრების წიგნები, აუდიოწიგნები და სახატავი მასალები. ჩვენი მიზანია შევაგროვოთ ათასი ევრო!"
        ],
        [
          "From Monday to Thursday next week, we are collecting second-hand books in good condition. Please check your bookshelves at home for novels, science books, comic books, and dictionaries that you have already read. You can drop your donated books into the big green boxes next to the school library entrance.",
          "მომავალ კვირას, ორშაბათიდან ხუთშაბათის ჩათვლით, ვაგროვებთ კარგ მდგომარეობაში მყოფ მეორად წიგნებს. გთხოვთ გადახედოთ თქვენს წიგნის თაროებს სახლში და მოძებნოთ რომანები, სამეცნიერო წიგნები, კომიქსები და ლექსიკონები, რომლებიც უკვე წაკითხული გაქვთ. შემოწირული წიგნები შეგიძლიათ ჩააწყოთ სკოლის ბიბლიოთეკის შესასვლელთან მდგარ დიდ მწვანე ყუთებში."
        ],
        [
          "To make shopping easy for everyone on Saturday, all paperback books will cost two euros, all hardcover books will cost four euros, and anyone who buys four books will get a fifth book completely free! In addition, Class 10B is organizing a 'Bake Sale' corner with homemade carrot cake, brownies, and hot apple tea.",
          "შაბათს ყველასთვის შოპინგის გასამარტივებლად, რბილყდიანი წიგნები ეღირება ორი ევრო, მაგარყდიანი წიგნები — ოთხი ევრო, ხოლო ნებისმიერი მყიდველი, ვინც ოთხ წიგნს შეიძენს, მეხუთე წიგნს მიიღებს სრულიად უფასოდ! გარდა ამისა, მე-10 „ბ“ კლასი აწყობს ტკბილეულის კუთხეს სახლში გამომცხვარი სტაფილოს ნამცხვრით, ბრაუნითა და ცხელი ვაშლის ჩაით."
        ],
        [
          "We still need ten student volunteers to help us on Friday afternoon after classes to sort the books onto tables by genre — such as Mystery, History, Science Fiction, and Children's Books. If you would like to help, please write your name on the sign-up sheet on the noticeboard outside Room Twelve today!",
          "ჩვენ კვლავ გვჭირდება ათი მოხალისე მოსწავლე, რომლებიც პარასკევ ნაშუადღევს, გაკვეთილების შემდეგ, დაგვეხმარებიან წიგნების მაგიდებზე ჟანრების მიხედვით — დეტექტივი, ისტორია, სამეცნიერო ფანტასტიკა და საბავშვო ლიტერატურა — დახარისხებაში. თუ დახმარება გსურთ, გთხოვთ დღესვე ჩაწეროთ თქვენი სახელი მეთორმეტე კაბინეტის გარეთ, საინფორმაციო დაფაზე გაკრულ სიაში!"
        ]
      ],
      glossary: [
        "student council|მოსწავლეთა თვითმმართველობა / საბჭო", "charity book fair|საქველმოქმედო წიგნის ბაზრობა", "raise money|თანხის შეგროვება (ქველმოქმედებისთვის)",
        "art supplies|სახატავი / სამხატვრო მასალები", "second-hand books|მეორადი (უკვე ნახმარი) წიგნები", "in good condition|კარგ მდგომარეობაში",
        "paperback and hardcover|რბილყდიანი და მაგარყდიანი (წიგნი)", "bake sale|საქველმოქმედო ნამცხვრების გაყიდვა", "sort by genre|ჟანრების მიხედვით დახარისხება", "noticeboard|საინფორმაციო დაფა"
      ],
      questions: [
        "When and where will the Oakridge High School Charity Book Fair take place?|Next Saturday, 22 October, in the main sports hall from 10 AM to 4 PM|Tomorrow morning in the school garden|On Sunday evening in the town square|In December in the city library",
        "Where will all the money raised from the book fair be donated?|To the Children's Hospital Library to buy storybooks, audiobooks, and art supplies|To build a new swimming pool at the school|To buy computers for the teachers|To pay for a bus trip to the mountains",
        "How much money is the school aiming to raise at the fair?|One thousand euros|One hundred euros|Ten thousand euros|Five hundred euros",
        "When and where can students drop off their donated second-hand books?|From Monday to Thursday, into the big green boxes next to the school library entrance|On Sunday night at the hospital|At the town post office|In the sports hall on Friday morning",
        "How much will paperback books and hardcover books cost at the fair?|Paperbacks will cost two euros, and hardcovers will cost four euros|All books will cost ten euros|Paperbacks will cost five euros, and hardcovers twenty euros|Every book costs one euro",
        "What special offer is available for someone who buys four books?|They will get a fifth book completely free|They get a free bicycle|They get a fifty percent discount on shoes|They get a cinema ticket",
        "What is Class 10B organizing at the book fair?|A 'Bake Sale' corner with homemade carrot cake, brownies, and hot apple tea|A live rock concert|A football match|A painting competition",
        "How many student volunteers are needed on Friday afternoon, and what will they do?|Ten volunteers, to sort the books onto tables by genre after classes|Thirty volunteers, to paint the sports hall walls|Two volunteers, to drive a truck|Five volunteers, to bake bread",
        "Which four book genres are mentioned for sorting the tables?|Mystery, History, Science Fiction, and Children's Books|Cooking, Gardening, Sports, and Music|Medicine, Law, Banking, and Maths|Dictionaries only",
        "Where should volunteers write their names if they want to help on Friday?|On the sign-up sheet on the noticeboard outside Room Twelve|In an email to the city mayor|On the blackboard in the gym|At the hospital reception"
      ]
    }
  ];

  // გავაერთიანოთ A1 (15 თემა) და A2 (15 თემა) App.ListeningDataA-ში (სულ 30 თემა / 300 კითხვა A დონეზე!)
  App.ListeningDataA = (App.ListeningDataA1 || []).concat(App.ListeningDataA2);
})(window);