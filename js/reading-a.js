/**
 * READING-A.JS — A1 დონის 15 ვრცელი სასწავლო ტექსტი (#1–#15)
 * თითოეულ ტექსტში: 5 ვრცელი აბზაცი, 10 საკვანძო სიტყვა და 10 გააზრების კითხვა (სულ 150 კითხვა).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ReadingDataA1 = [
    {
      num: 1, level: "A1",
      title: "ახალი სტუდენტი ენის კურსზე",
      subtitle: "A New Student in the Language Class",
      time: "6 წთ",
      paragraphs: [
        [
          "Today is Monday morning, and the autumn semester is starting at the International Language School. There are twelve students in Classroom Four on the second floor. The classroom is bright and clean, with a large whiteboard on the wall and a world map next to the door.",
          "დღეს ორშაბათი დილაა და საერთაშორისო ენის სკოლაში შემოდგომის სემესტრი იწყება. მეორე სართულზე, მეოთხე საკლასო ოთახში თორმეტი სტუდენტია. საკლასო ოთახი ნათელი და სუფთაა, კედელზე დიდი თეთრი დაფითა და კართან ახლოს მსოფლიო რუკით."
        ],
        [
          "At nine o'clock, the teacher, Mr Harris, walks into the room with a warm smile. Behind him is a new student named Lucas. Lucas is nineteen years old, and he comes from Lisbon, a famous coastal city in Portugal. He has dark hair, brown eyes, and carries a blue backpack.",
          "ცხრა საათზე მასწავლებელი, ბატონი ჰარისი, თბილი ღიმილით შემოდის ოთახში. მის უკან დგას ახალი სტუდენტი, სახელად ლუკასი. ლუკასი ცხრამეტი წლისაა და ის ლისაბონიდანაა — პორტუგალიის ცნობილი ზღვისპირა ქალაქიდან. მას აქვს მუქი თმა, ყავისფერი თვალები და ატარებს ლურჯ ზურგჩანთას."
        ],
        [
          "Lucas already speaks Portuguese and Spanish, and now he wants to learn English because he wants to study architecture in London next year. He sits down at a desk near the window next to a student from Japan named Kenji.",
          "ლუკასი უკვე საუბრობს პორტუგალიურად და ესპანურად, ახლა კი სურს ისწავლოს ინგლისური, რადგან მომავალ წელს ლონდონში არქიტექტურის შესწავლას აპირებს. ის ფანჯარასთან ახლოს მდგარ მერხთან ჯდება იაპონელი სტუდენტის, კენჯის გვერდით."
        ],
        [
          "During the first hour, the students practice speaking in pairs. They ask each other simple questions about their families, daily routines, and favourite foods. Lucas is a little shy at first, but Kenji is very friendly and helps him find the right page in the textbook.",
          "პირველი საათის განმავლობაში სტუდენტები წყვილებში საუბარში ვარჯიშობენ. ისინი ერთმანეთს უსვამენ მარტივ კითხვებს თავიანთ ოჯახებზე, ყოველდღიურ რუტინასა და საყვარელ კერძებზე. ლუკასი თავიდან ცოტა მორცხვობს, მაგრამ კენჯი ძალიან მეგობრულია და ეხმარება სახელმძღვანელოში სწორი გვერდის პოვნაში."
        ],
        [
          "At eleven o'clock, the bell rings for a twenty-minute break. Lucas, Kenji, and two girls from Italy go downstairs to the small café across the street. They drink fresh orange juice, eat warm apple pastries, and promise to study together in the library every Wednesday.",
          "თერთმეტ საათზე ზარი ირეკება ოცწუთიანი შესვენებისთვის. ლუკასი, კენჯი და ორი გოგონა იტალიიდან ქვემოთ ჩადიან ქუჩის გადაღმა მდებარე პატარა კაფეში. ისინი სვამენ ახალგაწურულ ფორთოხლის წვენს, მიირთმევენ თბილ ვაშლის ნამცხვრებს და დებენ პირობას, რომ ყოველ ოთხშაბათს ბიბლიოთეკაში ერთად იმეცადინებენ."
        ]
      ],
      glossary: [
        "semester|სემესტრი", "whiteboard|თეთრი დაფა", "coastal city|ზღვისპირა ქალაქი",
        "backpack|ზურგჩანთა", "architecture|არქიტექტურა", "in pairs|წყვილებში",
        "shy|მორცხვი", "textbook|სახელმძღვანელო", "break|შესვენება", "pastry|ფუნთუშა / ნამცხვარი"
      ],
      questions: [
        "On which floor is Classroom Four located?|On the second floor|On the ground floor|On the fifth floor|In the basement",
        "How many students are in the classroom?|Twelve students|Twenty students|Five students|Thirty students",
        "What is hanging on the wall next to the door?|A world map|A big clock|A painting of London|A mirror",
        "What is the name of the English teacher?|Mr Harris|Mr Miller|Mr Kenji|Mr Evans",
        "Where does Lucas come from?|Lisbon, Portugal|Madrid, Spain|Rome, Italy|Tokyo, Japan",
        "Why does Lucas want to learn English well?|Because he wants to study architecture in London|Because he wants to work at a bakery|Because he is moving to Japan|Because his brother lives in New York",
        "Who sits next to Lucas near the window?|Kenji, a student from Japan|Two girls from Italy|The school director|His older brother",
        "How does Kenji help Lucas during the lesson?|He helps him find the right page in the textbook|He lends him a blue backpack|He buys him a dictionary|He writes his homework",
        "What time does the bell ring for the break?|At eleven o'clock|At nine o'clock|At noon|At two o'clock",
        "When do the students promise to study together in the library?|Every Wednesday|Every Sunday night|Only on Mondays|Every morning at seven"
      ]
    },
    {
      num: 2, level: "A1",
      title: "კვირა დილა ცენტრალურ პარკში",
      subtitle: "Sunday Morning in the Central Park",
      time: "6 წთ",
      paragraphs: [
        [
          "Central Park is the largest and greenest place in our town. Every Sunday morning, the park gates open at six o'clock. At this early hour, the air is cool and fresh, and there is no noise from cars or buses.",
          "ცენტრალური პარკი ყველაზე დიდი და მწვანე ადგილია ჩვენს ქალაქში. ყოველ კვირა დილით პარკის ჭიშკარი ექვს საათზე იღება. ამ ადრიან საათებში ჰაერი გრილი და სუფთაა, და მანქანებისა თუ ავტობუსების ხმაური არ ისმის."
        ],
        [
          "At seven o'clock, people in sports clothes arrive to exercise. Some people jog slowly along the narrow red path under the oak trees, while others ride their bicycles around the park. Near the flower garden, a group of older people practices slow morning exercises together.",
          "შვიდ საათზე სპორტულ ტანსაცმელში გამოწყობილი ადამიანები მოდიან სავარჯიშოდ. ზოგი ნელა დარბის მუხის ხეების ქვეშ გაყვანილ ვიწრო წითელ ბილიკზე, სხვები კი პარკის გარშემო ველოსიპედით სეირნობენ. ყვავილების ბაღთან ახლოს ხანდაზმულთა ჯგუფი ერთად ასრულებს დილის მშვიდ ვარჯიშებს."
        ],
        [
          "By ten o'clock, the sun is warm, and families with young children walk into the park. In the middle of the park, there is a clear lake with four white swans and twenty brown ducks. Children stand on the small wooden bridge and watch the birds swim in the water.",
          "ათი საათისთვის მზე უკვე თბილია და პარკში პატარა ბავშვებთან ერთად ოჯახები შემოდიან. პარკის შუაგულში არის სუფთა ტბა ოთხი თეთრი გედითა და ოცი ყავისფერი იხვით. ბავშვები პატარა ხის ხიდზე დგანან და უყურებენ წყალში მოცურავე ფრინველებს."
        ],
        [
          "Next to the lake, an old man named Mr Bernard has a small green kiosk. In summer, he sells cold lemonade, water, and vanilla ice cream. In autumn and winter, he sells hot tea, roasted chestnuts, and sweet popcorn in paper bags.",
          "ტბის გვერდით მოხუც კაცს, სახელად ბატონ ბერნარდს, პატარა მწვანე ჯიხური აქვს. ზაფხულში ის ყიდის ცივ ლიმონათს, წყალსა და ვანილის ნაყინს. შემოდგომასა და ზამთარში კი ყიდის ცხელ ჩაის, შემწვარ წაბლსა და ტკბილ ბატიბუტს ქაღალდის პარკებით."
        ],
        [
          "At noon, the church bells ring in the distance. Many families sit on the green grass on large blankets and open their picnic baskets. They eat cheese sandwiches, fresh apples, and boiled eggs while listening to the birds singing in the trees.",
          "შუადღისას შორიდან ეკლესიის ზარების ხმა ისმის. ბევრი ოჯახი მწვანე ბალახზე გაშლილ დიდ პლედებზე ჯდება და პიკნიკის კალათებს ხსნის. ისინი მიირთმევენ ყველის სენდვიჩებს, ახალ ვაშლებსა და მოხარშულ კვერცხს, და უსმენენ ხეებზე მგალობელ ჩიტებს."
        ]
      ],
      glossary: [
        "gate|ჭიშკარი", "jog|ძუნძულით სირბილი", "oak tree|მუხის ხე",
        "swan|გედი", "wooden bridge|ხის ხიდი", "kiosk|ჯიხური",
        "roasted chestnuts|შემწვარი წაბლი", "in the distance|შორიდან / მანძილზე", "blanket|პლედი / საბანი", "picnic basket|პიკნიკის კალათა"
      ],
      questions: [
        "What time do the park gates open on Sunday mornings?|At six o'clock|At八 o'clock|At ten o'clock|At noon",
        "What colour is the narrow path under the oak trees?|Red|Blue|Yellow|White",
        "Where does the group of older people practice morning exercises?|Near the flower garden|On the wooden bridge|Inside the kiosk|In the lake",
        "When do families with young children usually arrive at the park?|By ten o'clock|At five in the morning|At midnight|After sunset",
        "How many white swans live on the lake?|Four white swans|Twenty white swans|Two white swans|Ten white swans",
        "Where do the children stand to watch the birds?|On the small wooden bridge|On the roof of the kiosk|On top of the oak trees|Outside the gate",
        "What colour is Mr Bernard's small kiosk?|Green|Red|White|Brown",
        "What does Mr Bernard sell in summer?|Cold lemonade, water, and vanilla ice cream|Roasted chestnuts and hot tea|Cheese sandwiches and boiled eggs|Books and newspapers",
        "What happens at noon in the distance?|The church bells ring|A train arrives|It starts to rain|The park closes",
        "What do families eat from their picnic baskets?|Cheese sandwiches, fresh apples, and boiled eggs|Hot pizza and pasta|Fish and chips|Chocolate cake and coffee"
      ]
    },
    {
      num: 3, level: "A1",
      title: "კუთხის საცხობი მუხის ქუჩაზე",
      subtitle: "The Corner Bakery on Oak Street",
      time: "6 წთ",
      paragraphs: [
        [
          "At the corner of Oak Street and River Road, there is a small family bakery called 'The Golden Loaf'. The building is over eighty years old, with a red door and a large glass window where customers can see fresh bread and cakes.",
          "მუხის ქუჩისა და მდინარის გზის კუთხეში მდებარეობს პატარა საოჯახო საცხობი, სახელად „ოქროს პური“. შენობა ოთხმოც წელზე მეტი ხნისაა, წითელი კარითა და დიდი მინის ვიტრინით, სადაც მყიდველებს ახალი პურისა და ნამცხვრების დანახვა შეუძლიათ."
        ],
        [
          "The baker, Mr Martin, wakes up at half past three every morning while the whole town is still asleep. He walks to the bakery, puts on his white apron and tall hat, and turns on the two big stone ovens.",
          "მცხობელი, ბატონი მარტინი, ყოველ დილითოთხის ნახევარზე იღვიძებს, სანამ მთელ ქალაქს ჯერ კიდევ სძინავს. ის ფეხით მიდის საცხობში, იკეთებს თეთრ წინსაფარს, იხურავს მაღალ ქუდს და რთავს ორ დიდ ქვის ღუმელს."
        ],
        [
          "First, he mixes flour, warm water, salt, and yeast in a big metal bowl to make the dough. He bakes brown country bread, long French baguettes, and soft milk rolls. By half past six, the wonderful smell of warm bread fills the entire street.",
          "პირველ რიგში, ცომის მოსაზელად ის დიდ ლითონის თასში ურევს ფქვილს, თბილ წყალს, მარილსა და საფუარს. ის აცხობს სოფლის რუხ პურს, გრძელ ფრანგულ ბაგეტებსა და რბილ რძიან ფუნთუშებს. შვიდის ნახევრისთვის თბილი პურის შესანიშნავი სურნელი მთელ ქუჩას ავსებს."
        ],
        [
          "At seven o'clock, Mr Martin's daughter, Sophie, opens the red front door. She arranges the cherry pies, chocolate muffins, and cinnamon buns on the wooden shelves. She also makes fresh coffee for people who are hurrying to work.",
          "შვიდ საათზე ბატონი მარტინის ქალიშვილი, სოფი, აღებს წითელ წინა კარს. ის ხის თაროებზე აწყობს ალუბლის ღვეზელებს, შოკოლადის მაფინებსა და დარიჩინიან ფუნთუშებს. ის ასევე ამზადებს ახალ ყავას მათთვის, ვინც სამსახურში მიიჩქარის."
        ],
        [
          "In the afternoon, school children stop at the bakery on their way home. Sophie always smiles and gives them warm cookies. At six o'clock in the evening, Mr Martin and Sophie clean the kitchen, lock the red door, and walk home together for dinner.",
          "ნაშუადღევს სკოლიდან სახლში მიმავალი ბავშვები საცხობთან ჩერდებიან. სოფი ყოველთვის იღიმის და მათ თბილ ორცხობილებს აძლევს. საღამოს ექვს საათზე ბატონი მარტინი და სოფი ასუფთავებენ სამზარეულოს, კეტავენ წითელ კარს და ერთად მიდიან სახლში სავახშმოდ."
        ]
      ],
      glossary: [
        "loaf|პურის ბულკი / თავი", "apron|წინსაფარი", "stone oven|ქვის ღუმელი",
        "flour|ფქვილი", "yeast|საფუარი", "dough|ცომი",
        "baguette|ფრანგული გრძელი პური", "arrange|დალაგება / მოწყობა", "cherry pie|ალუბლის ღვეზელი", "hurry|სიჩქარე / აჩქარება"
      ],
      questions: [
        "What is the name of the family bakery?|The Golden Loaf|The Red Door|The Sweet Cake|The Morning Coffee",
        "How old is the bakery building?|Over eighty years old|Ten years old|Two hundred years old|Five years old",
        "What time does Mr Martin wake up every morning?|At half past three|At seven o'clock|At six o'clock|At five o'clock",
        "What does Mr Martin wear when he works in the bakery?|A white apron and a tall hat|A blue suit and a tie|A green coat and gloves|A yellow raincoat",
        "What four ingredients does he mix to make the bread dough?|Flour, warm water, salt, and yeast|Milk, sugar, butter, and eggs|Apples, honey, cinnamon, and water|Rice, salt, oil, and pepper",
        "Who opens the red front door at seven o'clock?|Mr Martin's daughter, Sophie|Mr Martin's brother|A school boy|A neighbour",
        "Where does Sophie put the cherry pies and chocolate muffins?|On the wooden shelves|In the fridge|On the street bench|In cardboard boxes",
        "What does Sophie prepare for people hurrying to work?|Fresh coffee|Hot soup|Orange juice|Green tea",
        "Who stops at the bakery in the afternoon?|School children on their way home|Tourists from abroad|Bus drivers|Police officers",
        "What time does the bakery close in the evening?|At six o'clock|At चार o'clock|At nine o'clock|At midnight"
      ]
    },
    {
      num: 4, level: "A1",
      title: "ბებიის სოფლის სახლი და ბაღი",
      subtitle: "Grandmother's Country House and Garden",
      time: "6 წთ",
      paragraphs: [
        [
          "My grandmother, Mrs Rose, lives in a quiet village thirty kilometres from the city. Her house is small and painted light yellow, with green wooden shutters on the windows and a red tile roof. A narrow stone path leads from the wooden gate to the front porch.",
          "ბებიაჩემი, ქალბატონი როუზი, ქალაქიდან ოცდაათ კილომეტრში, მშვიდ სოფელში ცხოვრობს. მისი სახლი პატარაა და ღია ყვითლადაა შეღებილი, ფანჯრებზე მწვანე ხის დარაბებითა და წითელი კრამიტის სახურავით. ხის ჭიშკრიდან წინა ვერანდამდე ვიწრო ქვის ბილიკი მიდის."
        ],
        [
          "Behind the house, there is a big garden divided into two parts. In the first part, Grandmother grows colourful flowers: red roses, yellow tulips, and purple lavender. The lavender smells wonderful, and bees and butterflies fly around it all day.",
          "სახლის უკან არის დიდი ბაღი, რომელიც ორ ნაწილად იყოფა. პირველ ნაწილში ბებიას ფერადი ყვავილები მოჰყავს: წითელი ვარდები, ყვითელი ტიტები და იისფერი ლავანდა. ლავანდას საოცარი სურნელი აქვს და მის გარშემო მთელი დღე ფუტკრები და პეპლები დაფრინავენ."
        ],
        [
          "In the second part of the garden, she grows fresh vegetables and fruit. There are rows of tomatoes, cucumbers, carrots, and green beans, as well as four old apple trees and a pear tree. In the corner, there is a small wooden shed where she keeps her watering can and garden tools.",
          "ბაღის მეორე ნაწილში მას მოჰყავს ახალი ბოსტნეული და ხილი. იქ არის პომიდვრის, კიტრის, სტაფილოსა და მწვანე ლობიოს რიგები, ასევე ოთხი ძველი ვაშლის ხე და ერთი მსხლის ხე. კუთხეში დგას პატარა ხის ფარდული, სადაც ის ინახავს სარწყავ ქილასა და ბაღის ხელსაწყოებს."
        ],
        [
          "Grandmother also has five brown hens. Every morning at seven, she opens their coop and feeds them corn and grain. In return, the hens lay fresh brown eggs, which Grandmother collects in a little wicker basket.",
          "ბებიას ასევე ჰყავს ხუთი ყავისფერი ქათამი. ყოველ დილით შვიდ საათზე ის აღებს საქათმეს და აჭმევს მათ სიმინდსა და მარცვლეულს. სანაცვლოდ ქათმები დებენ ახალ ყავისფერ კვერცხებს, რომლებსაც ბებია პატარა მოწნულ კალათაში აგროვებს."
        ],
        [
          "Every autumn, our whole family visits Grandmother for a weekend. We help her pick the apples and dig up the potatoes. In the evening, we sit on the porch, drink mint tea, and listen to the crickets singing in the grass.",
          "ყოველ შემოდგომაზე მთელი ჩვენი ოჯახი უქმეებზე სტუმრობს ბებიას. ჩვენ ვეხმარებით მას ვაშლის დაკრეფასა და კარტოფილის ამოღებაში. საღამოს კი ვსხდებით ვერანდაზე, ვსვამთ პიტნის ჩაის და ვუსმენთ ბალახში ჭრიჭინების სიმღერას."
        ]
      ],
      glossary: [
        "shutter|ფანჯრის დარაბა", "tile roof|კრამიტის სახურავი", "porch|ვერანდა / აივანი",
        "butterfly|პეპელა", "shed|ფარდული / სათავსო", "watering can|სარწყავი",
        "hen|ქათამი (კრუხი)", "grain|მარცვლეული", "wicker basket|მოწნული კალათა", "cricket|ჭრიჭინა"
      ],
      questions: [
        "How far is Grandmother's village from the city?|Thirty kilometres|Five kilometres|One hundred kilometres|Ten kilometres",
        "What colour are the wooden shutters on her windows?|Green|Yellow|Red|Blue",
        "Into how many parts is the garden behind the house divided?|Into two parts|Into four parts|Into three parts|Into ten parts",
        "Which purple flower in the garden attracts bees and butterflies?|Lavender|Roses|Tulips|Sunflowers",
        "Where does Grandmother keep her watering can and garden tools?|In a small wooden shed in the corner|In the living room|Under the porch|On the roof",
        "How many brown hens does Grandmother have?|Five hens|Twelve hens|Two hens|Twenty hens",
        "What does she feed the hens every morning at seven?|Corn and grain|Bread and milk|Apples and pears|Tomatoes and carrots",
        "What does she use to collect the fresh eggs?|A little wicker basket|A plastic bag|A metal pot|Her hat",
        "When does the whole family visit Grandmother to help in the garden?|Every autumn|Every January|Only in winter|Every Monday",
        "What do they drink on the porch in the evening?|Mint tea|Cold lemonade|Hot coffee|Orange juice"
      ]
    },
    {
      num: 5, level: "A1",
      title: "წვიმიანი შაბათი სახლში",
      subtitle: "A Rainy Saturday Indoors",
      time: "6 წთ",
      paragraphs: [
        [
          "It is Saturday morning in November, and dark grey clouds cover the sky. Cold rain is tapping against the windowpanes, and a strong wind is blowing the last brown leaves off the trees in the street. It is definitely not a good day for outdoor sports.",
          "ნოემბრის შაბათი დილაა და ცას მუქი ნაცრისფერი ღრუბლები ფარავს. ცივი წვიმა ფანჯრის მინებზე აკაკუნებს, ძლიერი ქარი კი ქუჩაში ხეებიდან ბოლო ყავისფერ ფოთლებს ფანტავს. ნამდვილად არ არის კარგი დღე გარე სპორტისთვის."
        ],
        [
          "Twelve-year-old Sam and his sister Lily had planned to ride their scooters in the park, but now they have to stay indoors. At first, Sam sits on the sofa and looks bored, while Lily stares out at the puddles on the pavement.",
          "თორმეტი წლის სემს და მის დას, ლილის, პარკში სკუტერებით სეირნობა ჰქონდათ დაგეგმილი, მაგრამ ახლა სახლში დარჩენა უწევთ. თავიდან სემი დივანზე ზის და მოწყენილი ჩანს, ლილი კი ტროტუარზე დამდგარ გუბეებს გაჰყურებს."
        ],
        [
          "Their father has a great idea to cheer them up. He brings a big wooden box from the top shelf of the closet. Inside the box, there is a thousand-piece jigsaw puzzle of an ancient sailing ship and several classic board games.",
          "მათ მამას შესანიშნავი იდეა მოსდის ბავშვების გასამხიარულებლად. მას კარადის ზედა თაროდან დიდი ხის ყუთი ჩამოაქვს. ყუთში დევს უძველესი იალქნიანი გემის ათასნაწილიანი ფაზლი და რამდენიმე კლასიკური სამაგიდო თამაში."
        ],
        [
          "They clear the big table in the dining room and spread out the puzzle pieces. First, they find all the straight edge pieces to build the frame of the picture. Working together, they slowly put together the blue sea and the white sails of the ship.",
          "ისინი ათავისუფლებენ დიდ მაგიდას სასადილო ოთახში და შლიან ფაზლის ნაწილებს. ჯერ პოულობენ ყველა სწორკიდეებიან ნაწილს სურათის ჩარჩოს ასაწყობად. ერთობლივი მუშაობით ისინი ნელ-ნელა აწყობენ ლურჯ ზღვასა და გემის თეთრ იალქნებს."
        ],
        [
          "At four o'clock in the afternoon, their mother calls them into the kitchen. She has baked a tray of warm cinnamon rolls and made cuatro mugs of hot cocoa with marshmallows. By the time evening comes, the puzzle is finished, and everyone agrees that a rainy Saturday can be wonderful.",
          "ნაშუადღევის ოთხ საათზე დედა მათ სამზარეულოში ეძახის. მას გამოუცხვია ერთი ლანგარი თბილი დარიჩინიანი ფუნთუშები და მოუმზადებია ოთხი ჭიქა ცხელი კაკაო მარშმელოუთი. საღამოს დადგომისას ფაზლი უკვე დასრულებულია და ყველა თანხმდება, რომ წვიმიანი შაბათიც შეიძლება შესანიშნავი იყოს."
        ]
      ],
      glossary: [
        "windowpane|ფანჯრის მინა", "puddle|გუბე", "pavement|ტროტუარი",
        "cheer up|გამხიარულება / ხასიათზე მოყვანა", "closet|კარადა", "jigsaw puzzle|ასაწყობი სურათი (ფაზლი)",
        "sailing ship|იალქნიანი გემი", "frame|ჩარჩო", "tray|ლანგარი / საცხობი ფირფიტა", "mug|დიდი ჭიქა / კათხა"
      ],
      questions: [
        "What month is it in the story?|November|July|April|August",
        "What had Sam and Lily planned to do before the rain started?|Ride their scooters in the park|Go swimming in the sea|Visit the science museum|Play football at school",
        "What is Lily looking at through the window?|The puddles on the pavement|A rainbow in the sky|Children playing outside|A snowstorm",
        "Where does their father get the big wooden box from?|From the top shelf of the closet|From the garage|From the basement|From a neighbour's house",
        "What picture is on the thousand-piece jigsaw puzzle?|An ancient sailing ship|A mountain castle|A basket of puppies|A world map",
        "Where do they spread out the puzzle pieces?|On the big table in the dining room|On the kitchen floor|On the bed|On the balcony",
        "Which puzzle pieces do they find first?|All the straight edge pieces to build the frame|The white sails in the centre|The dark clouds at the top|The smallest pieces",
        "What time does their mother call them into the kitchen?|At four o'clock in the afternoon|At noon|At nine in the morning|At midnight",
        "What has their mother prepared for them?|Warm cinnamon rolls and hot cocoa|Cheese sandwiches and lemonade|Vegetable soup and bread|Ice cream and fruit",
        "When do they finish putting the whole puzzle together?|By the time evening comes|The next morning|After three days|They never finish it"
      ]
    },
    {
      num: 6, level: "A1",
      title: "ქალაქის საჯარო ბიბლიოთეკაში",
      subtitle: "Inside the Town Public Library",
      time: "6 წთ",
      paragraphs: [
        [
          "The public library stands in the centre of our town, right next to the post office. It is a quiet, welcoming three-storey building made of red brick. Above the main entrance, there is a round clock and a stone owl, which is the symbol of wisdom.",
          "საჯარო ბიბლიოთეკა ჩვენი ქალაქის ცენტრში დგას, ზუსტად ფოსტის გვერდით. ეს არის წითელი აგურით ნაშენები მშვიდი, სტუმართმოყვარე სამსართულიანი შენობა. მთავარი შესასვლელის თავზე განთავსებულია მრგვალი საათი და ქვის ბუ, რაც სიბრძნის სიმბოლოა."
        ],
        [
          "On the first floor, you can find the reception desk, the children's corner, and shelves of fiction books. The children's corner has a soft green rug, small colourful chairs, and hundreds of picture books about animals, fairy tales, and space.",
          "პირველ სართულზე შეგიძლიათ ნახოთ მიმღების მაგიდა, ბავშვთა კუთხე და მხატვრული ლიტერატურის თაროები. ბავშვთა კუთხეში არის რბილი მწვანე ხალიჩა, პატარა ფერადი სკამები და ასობით ილუსტრირებული წიგნი ცხოველებზე, ზღაპრებსა და კოსმოსზე."
        ],
        [
          "On the second floor, there are books on history, science, art, and foreign languages. There are also ten computers with free internet where students can search for information and write their school essays.",
          "მეორე სართულზე განლაგებულია წიგნები ისტორიის, მეცნიერების, ხელოვნებისა და უცხო ენების შესახებ. იქ ასევე დგას უფასო ინტერნეტით აღჭურვილი ათი კომპიუტერი, სადაც მოსწავლეებს შეუძლიათ მოიძიონ ინფორმაცია და დაწერონ სასკოლო თემები."
        ],
        [
          "The third floor is the silent study hall. Here, nobody is allowed to talk or use mobile phones. Long oak tables with small green reading lamps provide a peaceful place for university students and writers.",
          "მესამე სართული სრული სიჩუმის სამეცადინო დარბაზია. აქ არავის აქვს საუბრის ან მობილური ტელეფონის გამოყენების უფლება. მუხის გრძელი მაგიდები პატარა მწვანე სამკითხველო სანათებით მშვიდ გარემოს უქმნის სტუდენტებსა და მწერლებს."
        ],
        [
          "The head librarian, Mrs Clara, has worked here for twenty-five years. To get a library card, you only need to bring an identity card and fill in a short form. With a card, you can borrow five books for a month at no cost.",
          "მთავარი ბიბლიოთეკარი, ქალბატონი კლარა, აქ ოცდახუთი წელია მუშაობს. მკითხველის ბარათის ასაღებად მხოლოდ პირადობის მოწმობის წარდგენა და მოკლე ანკეტის შევსებაა საჭირო. ბარათით შეგიძლიათ ერთი თვით უფასოდ გაიტანოთ ხუთი წიგნი."
        ]
      ],
      glossary: [
        "three-storey|სამსართულიანი", "owl|ბუ", "wisdom|სიბრძნე",
        "fiction|მხატვრული ლიტერატურა", "fairy tale|ზღაპარი", "silent|ჩუმი / უხმო",
        "librarian|ბიბლიოთეკარი", "identity card|პირადობის მოწმობა", "fill in a form|ფორმის/ანკეტის შევსება", "at no cost|უფასოდ"
      ],
      questions: [
        "Where is the public library located?|In the centre of town, next to the post office|Near the airport|Opposite the sports stadium|Outside the city",
        "How many storeys (floors) does the library building have?|Three storeys|Two storeys|Five storeys|One storey",
        "What stone figure is above the main entrance as a symbol of wisdom?|A stone owl|A stone lion|A stone eagle|A stone horse",
        "Where is the children's corner located?|On the first floor|On the third floor|In the basement|On the roof",
        "What can students use on the second floor?|Ten computers with free internet|A swimming pool|A music studio|A kitchen",
        "What is the rule on the third floor in the silent study hall?|Nobody is allowed to talk or use mobile phones|Everyone must read aloud|Visitors can eat lunch there|Children can play games there",
        "How long has the head librarian, Mrs Clara, worked at the library?|For twenty-five years|For two years|For six months|For fifty years",
        "What do you need to bring to get a library card?|An identity card|A passport and twenty euros|A school textbook|A letter from a doctor",
        "How many books can you borrow with a library card?|Five books|Two books|Ten books|Only one book",
        "For how long can you keep the borrowed books?|For a month|For three days|For one week|For a whole year"
      ]
    },
    {
      num: 7, level: "A1",
      title: "მატარებლით მგზავრობა სანაპიროსკენ",
      subtitle: "A Train Journey to the Coast",
      time: "6 წთ",
      paragraphs: [
        [
          "It is a bright Friday morning in June, and Elena is going to spend the weekend with her cousin in Brighton, a lively town on the south coast. She prefers taking the train because it is fast, comfortable, and gives her a chance to see the countryside.",
          "ივნისის ნათელი პარასკევი დილაა და ელენა აპირებს უქმეები გაატაროს თავის ბიძაშვილთან ბრაიტონში — სამხრეთ სანაპიროზე მდებარე ხალისიან ქალაქში. მას მატარებლით მგზავრობა ურჩევნია, რადგან ეს სწრაფია, კომფორტული და სოფლის ბუნების დათვალიერების საშუალებას აძლევს."
        ],
        [
          "Elena arrives at Victoria Station at half past eight. The main hall is busy with commuters and tourists carrying suitcases. She looks up at the large electronic departure board and sees that the 9:00 train to Brighton is leaving from Platform Six.",
          "ელენა ვიქტორიას სადგურზე ცხრის ნახევარზე მიდის. მთავარი დარბაზი სავსეა მგზავრებითა და ჩემოდნიანი ტურისტებით. ის აჰყურებს გასვლის დიდ ელექტრონულ ტაბლოს და ხედავს, რომ ბრაიტონის 9:00 საათის მატარებელი მეექვსე ბაქნიდან გადის."
        ],
        [
          "Before walking to the platform, she stops at a small newsagent's shop. She buys a bottle of still water, a packet of almonds, and a travel magazine. Then she shows her ticket at the gate and boards Carriage C.",
          "ბაქანზე გასვლამდე ის პატარა საგაზეთო ჯიხურთან ჩერდება. ყიდულობს ერთ ბოთლ უგაზო წყალს, ერთ შეკვრა ნუშსა და სამოგზაურო ჟურნალს. შემდეგ გასასვლელთან აჩვენებს ბილეთს და ადის C ვაგონში."
        ],
        [
          "She finds her reserved seat by the window and puts her small suitcase on the luggage rack above her head. Exactly at nine o'clock, the guard blows his whistle, the doors close, and the train smoothly pulls out of the station.",
          "ის პოულობს თავის დაჯავშნილ ადგილს ფანჯარასთან და პატარა ჩემოდანს თავს ზემოთ, ბარგის თაროზე დებს. ზუსტად ცხრა საათზე გამცილებელი უსტვენს, კარები იკეტება და მატარებელი რბილად გადის სადგურიდან."
        ],
        [
          "Soon, the tall grey buildings of the city disappear, and the train passes green hills, white chalk cliffs, and fields of yellow wildflowers. After an hour, Elena sees the blue sea shining in the sun, and the train arrives in Brighton, where her cousin is waiting on the platform.",
          "მალე ქალაქის მაღალი ნაცრისფერი შენობები ქრება და მატარებელი გადის მწვანე გორაკებს, ცარცის თეთრ კლდეებსა და ყვითელი მინდვრის ყვავილების ველებს. ერთი საათის შემდეგ ელენა ხედავს მზეზე მოელვარე ლურჯ ზღვას და მატარებელი ჩადის ბრაიტონში, სადაც ბაქანზე მისი ბიძაშვილი ელოდება."
        ]
      ],
      glossary: [
        "south coast|სამხრეთ სანაპირო", "departure board|გასვლის ტაბლო", "newsagent's|საგაზეთო ჯიხური",
        "still water|უგაზო წყალი", "carriage|მატარებლის ვაგონი", "reserved seat|დაჯავშნილი ადგილი",
        "luggage rack|ბარგის თარო", "whistle|სასტვენი", "chalk cliff|ცარცის კლდე", "disappear|გაქრობა / თვალს მიფარება"
      ],
      questions: [
        "Where is Elena going to spend the weekend?|In Brighton, a town on the south coast|In the northern mountains|In a village in France|At home in London",
        "Who is she going to visit in Brighton?|Her cousin|Her grandmother|Her school teacher|Her brother",
        "What time does Elena arrive at Victoria Station?|At half past eight|At nine o'clock|At ten o'clock|At noon",
        "From which platform does the 9:00 train to Brighton leave?|Platform Six|Platform Three|Platform One|Platform Ten",
        "What three things does Elena buy at the newsagent's shop?|Still water, almonds, and a travel magazine|Coffee, cake, and a newspaper|Juice, apples, and a map|Tea, biscuits, and a postcard",
        "Which carriage does Elena board?|Carriage C|Carriage A|Carriage F|Carriage B",
        "Where does she put her small suitcase?|On the luggage rack above her head|Under her seat|By the door|On the table",
        "What does the guard do at nine o'clock before the doors close?|He blows his whistle|He rings a big bell|He waves a red flag|He shouts loudly",
        "How long does the train journey to Brighton take?|One hour|Three hours|Twenty minutes|Five hours",
        "Who is waiting for Elena on the platform when the train arrives?|Her cousin|Her parents|A taxi driver|A tour guide"
      ]
    },
    {
      num: 8, level: "A1",
      title: "ოჯახური დღე ქალაქის ზოოპარკში",
      subtitle: "A Family Day at the City Zoo",
      time: "6 წთ",
      paragraphs: [
        [
          "Saturday is warm and sunny, so Mr and Mrs Clark are taking their eight-year-old twins, Ben and Lucy, to the City Zoo. They arrive at ten o'clock in the morning, buy a family ticket at the gate, and take a colourful map of the park.",
          "შაბათი თბილი და მზიანია, ამიტომ ბატონი და ქალბატონი კლარკები თავიანთ რვა წლის ტყუპებს, ბენსა და ლუსის, ქალაქის ზოოპარკში მიიყვანენ. ისინი დილის ათ საათზე მიდიან, შესასვლელთან საოჯახო ბილეთს ყიდულობენ და პარკის ფერად რუკას იღებენ."
        ],
        [
          "First, they follow the green arrows on the path to the African Savannah zone. Here, three tall giraffes are eating fresh leaves from high wooden baskets, while zebras walk peacefully across the grass. Ben takes a photo of a baby giraffe standing next to its mother.",
          "პირველ რიგში, ისინი ბილიკზე მწვანე ისრებს მიჰყვებიან აფრიკული სავანის ზონისკენ. აქ სამი მაღალი ჟირაფი მაღალი ხის კალათებიდან ახალ ფოთლებს ჭამს, ზებრები კი მშვიდად დადიან ბალახზე. ბენი ფოტოს უღებს პატარა ჟირაფს, რომელიც დედის გვერდით დგას."
        ],
        [
          "At eleven thirty, they walk to the Monkey House. Dozens of small brown monkeys are swinging on ropes and jumping from branch to branch. One clever monkey peels a banana, eats it quickly, and makes funny faces at Lucy through the glass.",
          "თორმეტის ნახევარზე ისინი მაიმუნების სახლისკენ მიდიან. ათობით პატარა ყავისფერი მაიმუნი თოკებზე ქანაობს და ტოტიდან ტოტზე ხტება. ერთი ჭკვიანი მაიმუნი ფცქვნის ბანანს, სწრაფად ჭამს და მინის მიღმა ლუსის სასაცილო სახეებს უკერავს."
        ],
        [
          "After having sandwiches for lunch under the shade of a big tree, the family visits the Polar Zone. Behind a thick glass wall, penguins are diving into icy water and sliding on their bellies across the snow. At two o'clock, a zookeeper wearing rubber boots comes out with a bucket of silver fish to feed them.",
          "დიდი ხის ჩრდილქვეშ სენდვიჩებით წახემსების შემდეგ, ოჯახი პოლარულ ზონას სტუმრობს. სქელი მინის კედლის მიღმა პინგვინები ყინულიან წყალში ყვინთავენ და თოვლზე მუცლით სრიალებენ. ორ საათზე რეზინის ჩექმებში გამოწყობილი მომვლელი გამოდის ვერცხლისფერი თევზით სავსე სათლით მათ გამოსაკვებად."
        ],
        [
          "Before leaving the zoo at four o'clock, they stop at the gift shop near the exit. Ben chooses a small wooden elephant, and Lucy buys a notebook with a picture of a panda on the cover. Tired but happy, they take the number twelve bus back home.",
          "ოთხ საათზე ზოოპარკიდან წასვლამდე ისინი გასასვლელთან ახლოს საჩუქრების მაღაზიაში ჩერდებიან. ბენი ირჩევს პატარა ხის სპილოს, ლუსი კი ყიდულობს ბლოკნოტს, რომელსაც ყდაზე პანდა ახატია. დაღლილები, მაგრამ ბედნიერები, ისინი მეთორმეტე ნომერი ავტობუსით სახლში ბრუნდებიან."
        ]
      ],
      glossary: [
        "twins|ტყუპები", "arrow|ისარი (მიმართულების)", "swing|ქანაობა",
        "branch|ხის ტოტი", "peel|გაფცქვნა", "shade|ჩრდილი",
        "dive|ყვინთვა / წყალში გადახტომა", "belly|მუცელი", "bucket|სათლი / ვედრო", "gift shop|საჩუქრების მაღაზია"
      ],
      questions: [
        "How old are the twins, Ben and Lucy?|Eight years old|Five years old|Twelve years old|Ten years old",
        "Which zone of the zoo does the family visit first?|The African Savannah zone|The Polar Zone|The Monkey House|The Reptile House",
        "What are the three tall giraffes eating from?|From high wooden baskets|From the ground|From a bucket|From a visitor's hand",
        "What are the monkeys doing in the Monkey House?|Swinging on ropes and jumping from branch to branch|Sleeping on the floor|Swimming in a pool|Eating fish",
        "Where does the family eat their lunch sandwiches?|Under the shade of a big tree|Inside the Monkey House|On the bus|In a hotel",
        "What are the penguins doing in the Polar Zone?|Diving into icy water and sliding on their bellies|Climbing tall trees|Sitting in the hot sun|Flying high in the air",
        "What time does the zookeeper feed the penguins?|At two o'clock|At ten in the morning|At noon|At four o'clock",
        "What does the zookeeper carry to feed the penguins?|A bucket of silver fish|A basket of bananas|A bag of bread|Green leaves",
        "What does Lucy buy at the gift shop before leaving?|A notebook with a panda on the cover|A small wooden elephant|A toy monkey|A yellow hat",
        "Which bus do they take back home at four o'clock?|The number twelve bus|The number five bus|The number twenty bus|The airport bus"
      ]
    },
    {
      num: 9, level: "A1",
      title: "პარასკევის ვახშმის ერთად მომზადება",
      subtitle: "Preparing Friday Dinner Together",
      time: "6 წთ",
      paragraphs: [
        [
          "After a busy week at the office, Daniel and his wife Nora love spending Friday evenings at home. Instead of ordering food from a restaurant, they always cook a special three-course dinner together in their bright kitchen.",
          "ოფისში დატვირთული კვირის შემდეგ დანიელსა და მის მეუღلეს, ნორას, პარასკევი საღამოების სახლში გატარება უყვართ. რესტორნიდან საჭმლის შეკვეთის ნაცვლად, ისინი თავიანთ ნათელ სამზარეულოში ყოველთვის ერთად ამზადებენ განსაკუთრებულ სამკერძიან ვახშამს."
        ],
        [
          "At six o'clock, they put on their aprons, wash their hands, and turn on the radio to listen to soft jazz music. Tonight, their menu includes pumpkin soup, baked salmon with rice, and a fruit salad for dessert.",
          "ექვს საათზე ისინი იკეთებენ წინსაფრებს, იბანენ ხელებს და რთავენ რადიოს მშვიდი ჯაზური მუსიკის მოსასმენად. ამაღამ მათ მენიუში შედის გოგრის წვნიანი, ღუმელში გამომცხვარი ორაგული ბრინჯით და ხილის სალათა დესერტისთვის."
        ],
        [
          "Daniel starts by peeling the orange pumpkin, carrots, and onions. He cuts them into small cubes and puts them into a deep pot with water and a little salt. While the vegetables are boiling on the stove, the kitchen fills with a warm, sweet aroma.",
          "დანიელი იწყებს ნარინჯისფერი გოგრის, სტაფილოსა და ხახვის გაფცქვნით. ის ჭრის მათ პატარა კუბიკებად და ყრის ღრმა ქვაბში წყალთან და ცოტაოდენ მარილთან ერთად. სანამ ბოსტნეული ქურაზე იხარშება, სამზარეულო თბილი, ტკბილი არომატით ივსება."
        ],
        [
          "Meanwhile, Nora prepares the fish. She puts lemon slices, olive oil, and fresh green herbs on the salmon and places the tray into the hot oven for twenty-five minutes. She also washes a cup of white rice and cooks it in a small saucepan.",
          "ამასობაში ნორა ამზადებს თევზს. ის ორაგულს ადებს ლიმონის ნაჭრებს, ზეითუნის ზეთსა და ახალ მწვანილს და დგამს ლანგარს ცხელ ღუმელში ოცდახუთი წუთით. ის ასევე რეცხავს ერთ ჭიქა თეთრ ბრინჯს და ხარშავს პატარა ქვაბში."
        ],
        [
          "For dessert, they slice strawberries, kiwi, and bananas into a glass bowl. At half past seven, Daniel sets the table with white plates and two candles. They sit down, talk about their weekend plans, and enjoy every bite of their homemade meal.",
          "დესერტისთვის ისინი მინის თასში ჭრიან მარწყვს, კივისა და ბანანს. რვის ნახევარზე დანიელი აწყობს მაგიდას თეთრი თეფშებითა და ორი სანთლით. ისინი სხდებიან, საუბრობენ უქმეების გეგმებზე და სიამოვნებით მიირთმევენ სახლში მომზადებულ კერძს."
        ]
      ],
      glossary: [
        "three-course dinner|სამკერძიანი ვახშამი", "pumpkin|გოგრა", "salmon|ორაგული (თევზი)",
        "cube|კუბიკი", "stove|სამზარეულოს ქურა", "aroma|სურნელი / არომატი",
        "meanwhile|ამასობაში", "herbs|მწვანილი / სურნელოვანი ბალახები", "saucepan|პატარა ქვაბი (სახელურიანი)", "set the table|სუფრის გაშლა"
      ],
      questions: [
        "Why don't Daniel and Nora order food from a restaurant on Fridays?|Because they love cooking a special dinner together at home|Because there are no restaurants in their town|Because they don't eat dinner in the evening|Because the kitchen is closed",
        "What do they listen to on the radio while cooking?|Soft jazz music|The evening football match|Rock concerts|French lessons",
        "What is the first course (starter) on their menu tonight?|Pumpkin soup|Tomato salad|Chicken noodles|Boiled potatoes",
        "What vegetables does Daniel cut into small cubes for the soup?|Pumpkin, carrots, and onions|Cucumbers, peppers, and cabbage|Potatoes, beans, and corn|Apples and pears",
        "What does Nora put on the salmon before baking it?|Lemon slices, olive oil, and fresh green herbs|Sugar, honey, and cinnamon|Butter and cheese|Milk and flour",
        "How long does the salmon bake in the hot oven?|For twenty-five minutes|For two hours|For five minutes|All night",
        "What does Nora cook in the small saucepan?|A cup of white rice|Pasta|Oatmeal|Coffee",
        "Which three fruits do they slice for the fruit salad?|Strawberries, kiwi, and bananas|Oranges, peaches, and plums|Apples, grapes, and pears|Mangoes and coconuts",
        "What time do they sit down to eat dinner?|At half past seven|At six o'clock|At nine o'clock|At ten o'clock",
        "What does Daniel put on the table along with the white plates?|Two candles|A vase of roses|A portable television|A stack of books"
      ]
    },
    {
      num: 10, level: "A1",
      title: "შაბათის ღია ფერმერული ბაზრობა",
      subtitle: "The Saturday Open-Air Farmers' Market",
      time: "6 წთ",
      paragraphs: [
        [
          "Every Saturday from seven in the morning until two in the afternoon, the main square of Greenhill turns into a lively farmers' market. Thirty local farmers set up red and white striped tents and arrange their fresh goods on wooden tables.",
          "ყოველ შაბათს, დილის შვიდი საათიდან შუადღის ორ საათამდე, გრინჰილის მთავარი მოედანი ხალისიან ფერმერულ ბაზრობად იქცევა. ოცდაათი ადგილობრივი ფერმერი შლის წითელ და თეთრზოლიან კარვებს და ხის მაგიდებზე აწყობს თავის ახალ პროდუქციას."
        ],
        [
          "People from the whole town prefer shopping here rather than at the big supermarket because everything comes straight from the farms. The vegetables still have drops of morning dew on them, and the fruit smells sweet and natural.",
          "მთელი ქალაქის მცხოვრებლებს აქ ურჩევნიათ შოპინგი, ვიდრე დიდ სუპერმარკეტში, რადგან ყველაფერი პირდაპირ ფერმებიდან ჩამოდის. ბოსტნეულს ჯერ კიდევ ატყვია დილის ნამის წვეთები, ხილს კი ტკბილი და ბუნებრივი სურნელი აქვს."
        ],
        [
          "Mrs Alice arrives at the market at eight o'clock with two large wicker baskets. At the first stall, she buys a kilo of red strawberries, six yellow peaches, and a bunch of green grapes from a cheerful young farmer named Tom.",
          "ქალბატონი ელისი ბაზრობაზე რვა საათზე მიდის ორი დიდი მოწნული კალათით. პირველ დახლთან ის მხიარული ახალგაზრდა ფერმერისგან, ტომისგან, ყიდულობს ერთ კილოგრამ წითელ მარწყვს, ექვს ყვითელ ატამსა და ერთ მტევან მწვანე ყურძენს."
        ],
        [
          "Next, she walks to the dairy stall. An old woman in a white headscarf lets customers taste small pieces of goat cheese and cow's cheese before buying. Mrs Alice chooses a round wheel of mild white cheese and a bottle of fresh farm milk.",
          "შემდეგ ის რძის პროდუქტების დახლთან მიდის. თეთრ თავსაფარში გამოწყობილი მოხუცი ქალი მყიდველებს ყიდვამდე თხისა და ძროხის ყველის პატარა ნაჭრებს ასინჯებს. ქალბატონი ელისი ირჩევს ერთ მრგვალ თავ რბილ თეთრ ყველსა და ერთ ბოთლ ფერმის ახალ რძეს."
        ],
        [
          "Before going home, she stops at the flower stall near the fountain. She buys a bouquet of bright yellow sunflowers for her dining room table. Walking home in the morning sunshine, her baskets are heavy, but her heart is light.",
          "სახლში წასვლამდე ის შადრევანთან ახლოს ყვავილების დახლთან ჩერდება. სასადილო ოთახის მაგიდისთვის ყიდულობს ხასხასა ყვითელი მზესუმზირების თაიგულს. დილის მზეზე სახლისკენ მიმავალს კალათები მძიმე აქვს, მაგრამ გული — მსუბუქი და მხიარული."
        ]
      ],
      glossary: [
        "striped tent|ზოლიანი კარავი", "morning dew|დილის ნამი", "bunch of grapes|ყურძნის მტევანი",
        "dairy|რძის პროდუქტები", "headscarf|თავსაფარი", "goat cheese|თხის ყველი",
        "mild|რბილი (გემოთი, არაცხარე)", "fountain|შადრევანი", "bouquet|თაიგული", "sunflower|მზესუმზირა"
      ],
      questions: [
        "What are the opening hours of the Saturday farmers' market?|From seven in the morning until two in the afternoon|From nine in the morning until九 at night|Only for one hour at noon|All weekend day and night",
        "How many local farmers set up tents in the square?|Thirty local farmers|Five farmers|One hundred farmers|Ten farmers",
        "What colour are the striped tents at the market?|Red and white|Blue and yellow|Green and black|Orange and purple",
        "Why do townspeople prefer the farmers' market to the supermarket?|Because everything comes fresh straight from the farms|Because it is open at midnight|Because they sell televisions|Because it is indoors",
        "What time does Mrs Alice arrive at the market?|At eight o'clock|At noon|At two o'clock|At six o'clock",
        "What does she buy from the young farmer named Tom?|Strawberries, peaches, and green grapes|Potatoes, onions, and garlic|Bread and croissants|Fish and meat",
        "What can customers do at the dairy stall before buying?|Taste small pieces of goat and cow's cheese|Milk a cow themselves|Drink hot coffee|Bake bread",
        "What does Mrs Alice buy at the dairy stall?|A wheel of mild white cheese and a bottle of fresh milk|Butter and ice cream|Chocolate and honey|Eggs and flour",
        "Where is the flower stall located?|Near the fountain|Behind the church|Inside the post office|At the bus stop",
        "Which flowers does Mrs Alice buy for her dining table?|A bouquet of bright yellow sunflowers|Red roses|White lilies|Purple lavender"
      ]
    },
    {
      num: 11, level: "A1",
      title: "წელიწადის ოთხი დრო მთის ქალაქში",
      subtitle: "The Four Seasons in a Mountain Town",
      time: "6 წთ",
      paragraphs: [
        [
          "Clearwater is a small, picturesque town located in a valley between high mountains. Because of its location, the four seasons of the year look very different here, and each season brings its own beauty and activities.",
          "ქლიარუოთერი პატარა, თვალწარმტაცი ქალაქია, რომელიც მაღალ მთებს შორის ხეობაში მდებარეობს. მისი მდებარეობის გამო წელიწადის ოთხივე დრო აქ სრულიად განსხვავებულად გამოიყურება და თითოეულ სეზონს თავისი სილამაზე და საქმიანობა მოაქვს."
        ],
        [
          "In spring, the white snow on the lower hills melts and fills the river with clear, rushing water. Green grass covers the meadows, and wild daffodils bloom along the paths. People open their windows, paint their garden fences, and plant seeds.",
          "გაზაფხულზე დაბალ გორაკებზე თეთრი თოვლი დნება და მდინარეს ანკარა, ჩქარი წყლით ავსებს. მდელოებს მწვანე ბალახი ფარავს და ბილიკების გასწვრივ ველური ნარგიზები ყვავის. ხალხი აღებს ფანჯრებს, ღებავს ბაღის ღობეებს და თესავს მცენარეებს."
        ],
        [
          "Summer in the valley is warm, sunny, and never too hot because of the cool mountain breeze. Tourists arrive to hike on the forest trails, ride horses, and swim in the crystal-clear lake. In the evenings, cafés put tables outside under colourful umbrellas.",
          "ზაფხული ხეობაში თბილი, მზიანი და მთის გრილი ნიავის წყალობით არასდროს ზედმეტად ცხელი არ არის. ტურისტები ჩამოდიან ტყის ბილიკებზე სასიარულოდ, ცხენებით სასეირნოდ და კრისტალურად სუფთა ტბაში საცურაოდ. საღამოობით კაფეები გარეთ, ფერადი ქოლგების ქვეშ დგამენ მაგიდებს."
        ],
        [
          "In September and October, autumn turns the surrounding forests into a sea of gold, orange, and dark red. The mornings are misty and cool. Local families walk in the woods with baskets to gather mushrooms, walnuts, and sweet chestnuts.",
          "სექტემბერსა და ოქტომბერში შემოდგომა გარშემორტყმულ ტყეებს ოქროსფერ, ნარინჯისფერ და მუქ წითელ ზღვად აქცევს. დილაობით ნისლიანი და გრილი ამინდია. ადგილობრივი ოჯახები კალათებით დადიან ტყეში სოკოს, კაკლისა და ტკბილი წაბლის შესაგროვებლად."
        ],
        [
          "By December, winter arrives and covers the roofs and pine trees with a thick blanket of white snow. The lake freezes over, and children skate on the smooth ice after school. Smoke rises from the chimneys as families sit indoors by warm fireplaces.",
          "დეკემბრისთვის დგება ზამთარი და სახურავებსა და ფიჭვის ხეებს თეთრი თოვლის სქელი საბნით ფარავს. ტბა იყინება და ბავშვები სკოლის შემდეგ გლუვ ყინულზე ციგურებით სრიალებენ. საკვამურებიდან კვამლი ამოდის, სანამ ოჯახები სახლში თბილ ბუხრებთან სხედან."
        ]
      ],
      glossary: [
        "picturesque|თვალწარმტაცი / ლამაზი", "valley|ხეობა", "meadow|მდელო / მინდორი",
        "daffodil|ნარგიზი (ყვავილი)", "breeze|ნიავი", "trail|ტყის/მთის ბილიკი",
        "misty|ნისლიანი", "walnut|კაკალი / ნიგოზი", "freeze over|ზედაპირის მოყინვა", "chimney|საკვამური"
      ],
      questions: [
        "Where is the small town of Clearwater located?|In a valley between high mountains|On a flat desert island|On the ocean coast|Next to a huge industrial city",
        "Why does the river fill with rushing water in spring?|Because the white snow on the lower hills melts|Because it rains every single day|Because a dam opens|Because of ocean waves",
        "What do residents of the town do in spring?|Paint their garden fences and plant seeds|Go ice skating on the lake|Gather walnuts and mushrooms|Build snowmen",
        "Why is summer in the valley never too hot?|Because of the cool mountain breeze|Because the sun never shines there|Because it snows in July|Because there are no trees",
        "What three activities do tourists enjoy in summer?|Hiking on forest trails, riding horses, and swimming in the lake|Skiing, skating, and snowboarding|Working in factories|Staying indoors all day",
        "What colours do the forests turn in September and October?|Gold, orange, and dark red|Blue and purple|White and silver|Pink and violet",
        "What are autumn mornings like in the valley?|Misty and cool|Hot and dry|Stormy with thunder|Freezing with blizzards",
        "What do local families gather in the woods in autumn?|Mushrooms, walnuts, and sweet chestnuts|Strawberries and cherries|Oranges and lemons|Coconuts and mangoes",
        "Where do children skate in winter after school?|On the smooth ice of the frozen lake|On the main highway|Inside the school gym|On the river",
        "Why does smoke rise from the chimneys in December?|Because families sit indoors by warm fireplaces|Because the bakery is burning|Because of summer barbecues|Because of factory machines"
      ]
    },
    {
      num: 12, level: "A1",
      title: "დაკარგული ლეკვის პოვნა წვიმაში",
      subtitle: "Finding a Lost Puppy in the Rain",
      time: "6 წთ",
      paragraphs: [
        [
          "It was four o'clock on a rainy Wednesday afternoon. Ten-year-old Leo put on his yellow raincoat, opened his umbrella, and walked out of the school gate. His best friend lived on the next street, so Leo walked home alone along the park wall.",
          "წვიმიანი ოთხშაბათის ნაშუადღევის ოთხი საათი იყო. ათი წლის ლეომ ჩაიცვა თავისი ყვითელი საწვიმარი, გაშალა ქოლგა და სკოლის ჭიშკრიდან გამოვიდა. მისი საუკეთესო მეგობარი მეზობელ ქუჩაზე ცხოვრობდა, ამიტომ ლეო პარკის კედლის გასწვრივ სახლისკენ მარტო მიდიოდა."
        ],
        [
          "As he passed the old bus shelter near the post office, he heard a soft, sad sound. Leo stopped and looked under the wooden bench. Sitting in the corner was a small brown puppy with white paws and long ears. It was wet, cold, and shivering.",
          "როდესაც მან ფოსტასთან ახლოს ძველ ავტობუსის გაჩერებას ჩაუარა, რბილი, სევდიანი ხმა შემოესმა. ლეო გაჩერდა და ხის სკამის ქვეშ შეიხედა. კუთხეში იჯდა პატარა ყავისფერი ლეკვი თეთრი თათებითა და გრძელი ყურებით. ის სველი, გაყინული იყო და კანკალებდა."
        ],
        [
          "Leo knelt down and spoke to the puppy in a gentle voice. The little dog wagged its tail slowly and licked Leo's hand. Leo looked for a collar with a name or phone number, but the puppy had no collar around its neck.",
          "ლეო მუხლებზე დაეშვა და ლეკვს თბილი ხმით დაელაპარაკა. პატარა ძაღლმა ნელა გააქიცინა კუდი და ლეოს ხელი აულოკა. ლეომ მოძებნა საყელური სახელით ან ტელეფონის ნომრით, მაგრამ ლეკვს კისერზე საყელური არ ეკეთა."
        ],
        [
          "Leo wrapped the puppy in his warm woollen scarf, held it under his umbrella, and hurried home. His mother was surprised at first, but she immediately brought a dry towel and a bowl of warm milk with bread. Within an hour, the puppy was dry and sleeping in a basket by the heater.",
          "ლეომ ლეკვი თავის თბილ შალის კაშნეში გაახვია, ქოლგის ქვეშ დაიჭირა და სახლისკენ იჩქარა. დედამისი თავიდან გაოცდა, მაგრამ მაშინვე მოიტანა მშრალი პირსახოცი და ერთი ჯამი თბილი რძე პურით. ერთ საათში ლეკვი უკვე მშრალი იყო და გამათბობელთან კალათაში ეძინა."
        ],
        [
          "The next morning, Leo and his father took the puppy to the local vet. The vet checked the puppy, said it was healthy, and found no microchip. They put notices in the neighbourhood shops for two weeks, but no one called. Leo's parents smiled and said, 'Bruno is part of our family now!'",
          "მეორე დილით ლეომ და მამამისმა ლეკვი ადგილობრივ ვეტერინართან წაიყვანეს. ვეტერინარმა გასინჯა ლეკვი, თქვა, რომ ჯანმრთელი იყო და მიკროჩიპი ვერ უპოვა. მათ ორი კვირის განმავლობაში უბნის მაღაზიებში განცხადებები გააკრეს, მაგრამ არავის დაურეკავს. ლეოს მშობლებმა გაიღიმეს და თქვეს: „ბრუნო ახლა ჩვენი ოჯახის წევრია!“"
        ]
      ],
      glossary: [
        "raincoat|საწვიმარი ქურთუკი", "bus shelter|ავტობუსის გადახურული გაჩერება", "paw|ცხოველის თათი",
        "kneel down|მუხლებზე დაშვება", "wag its tail|კუდის ქიცინი", "lick|ალოკვა",
        "woollen scarf|შალის კაშნე", "heater|გამათბობელი", "vet (veterinarian)|ვეტერინარი", "notice|განცხადება"
      ],
      questions: [
        "What was Leo wearing when he walked out of the school gate?|A yellow raincoat|A blue winter coat|A green sweater|A football shirt",
        "Where did Leo find the small puppy?|Under a wooden bench at the bus shelter|Inside the post office|In the school yard|On the train",
        "What did the puppy look like?|Brown with white paws and long ears|All black with a short tail|White with black spots|Grey with blue eyes",
        "What did the puppy do when Leo spoke to it gently?|It wagged its tail and licked Leo's hand|It barked loudly and ran away|It bit his umbrella|It went back to sleep",
        "Why couldn't Leo call the puppy's owner?|Because the puppy had no collar around its neck|Because Leo had no phone at home|Because the phone number was wet|Because it was Sunday",
        "What did Leo wrap the shivering puppy in to carry it home?|His warm woollen scarf|A plastic bag|His school notebook|A newspaper",
        "What did Leo's mother give the puppy to eat?|A bowl of warm milk with bread|Cheese and apples|Cold fish|Chocolate biscuits",
        "Where did the puppy sleep after it was dry?|In a basket by the heater|On Leo's bed|In the garden shed|Under the kitchen table",
        "Who checked the puppy the next morning?|The local vet|The school doctor|The postmaster|A police officer",
        "How long did they wait after putting notices in the shops?|For two weeks|For one hour|For six months|For two days"
      ]
    },
    {
      num: 13, level: "A1",
      title: "მაიას ცურვის პირველი გაკვეთილი",
      subtitle: "Maya's First Swimming Lesson",
      time: "6 წთ",
      paragraphs: [
        [
          "Seven-year-old Maya was very excited on Tuesday afternoon. Her mother took her to the Dolphin Sports Centre for her very first swimming lesson. In her sports bag, Maya had a pink swimsuit, a rubber cap, blue goggles, and a large towel with pictures of seashells.",
          "შვიდი წლის მაია სამშაბათ ნაშუადღევს ძალიან აღფრთოვანებული იყო. დედამ ის სპორტულ ცენტრ „დელფინში“ მიიყვანა ცურვის სულ პირველ გაკვეთილზე. სპორტულ ჩანთაში მაიას ედო ვარდისფერი საცურაო კოსტიუმი, რეზინის ქუდი, ლურჯი სათვალე და ნიჟარებიანი დიდი პირსახოცი."
        ],
        [
          "In the changing room, Maya put on her swimsuit and took a warm shower. When she walked out to the poolside, the smell of water and the loud echoes made her feel a little nervous. The main pool looked huge, but her group was using the smaller, shallow pool where the water was warm.",
          "გასახდელში მაიამ ჩაიცვა საცურაო კოსტიუმი და თბილი შხაპი მიიღო. როდესაც აუზის პირას გავიდა, წყლის სუნმა და ხმამაღალმა ექომ ცოტათი ააღელვა. მთავარი აუზი უზარმაზარი ჩანდა, მაგრამ მისი ჯგუფი იყენებდა უფრო პატარა, თავთხელ აუზს, სადაც წყალი თბილი იყო."
        ],
        [
          "The swimming instructor, Miss Evans, had a friendly smile and a silver whistle around her neck. There were six children in the beginner group. First, Miss Evans asked them to sit on the edge of the pool and splash the water with their feet to get used to the temperature.",
          "ცურვის ინსტრუქტორს, მის ევანსს, მეგობრული ღიმილი ჰქონდა და კისერზე ვერცხლისფერი სასტვენი ეკიდა. დამწყებთა ჯგუფში ექვსი ბავშვი იყო. ჯერ მის ევანსმა სთხოვა მათ, აუზის კიდეზე ჩამომსხდარიყვნენ და ფეხებით წყალი აეშხეფებინათ ტემპერატურასთან შესაჩვევად."
        ],
        [
          "Next, the children climbed down the metal steps into the water, which reached Maya's chest. Miss Evans gave each child a yellow foam float board. Holding the board with both hands, Maya practiced kicking her legs and blowing bubbles into the water like a little motorboat.",
          "შემდეგ ბავშვები ლითონის კიბით ჩავიდნენ წყალში, რომელიც მაიას მკერდამდე სწვდებოდა. მის ევანსმა თითოეულ ბავშვს ყვითელი მცურავი დაფა მისცა. ორივე ხელით დაფაზე ჩაჭიდებული მაია ვარჯიშობდა ფეხების მოძრაობასა და წყალში ბუშტების გაშვებაში, როგორც პატარა მოტორიანი ნავი."
        ],
        [
          "In the last ten minutes of the lesson, the children played a game picking up colourful plastic rings from the steps. At five o'clock, Miss Evans gave everyone a star sticker for their swimming certificate. Maya waved to her mother in the viewing gallery with a big, proud smile.",
          "გაკვეთილის ბოლო ათ წუთში ბავშვებმა ითამაშეს თამაში, სადაც საფეხურებიდან ფერად პლასტმასის რგოლებს იღებდნენ. ხუთ საათზე მის ევანსმა ყველას ვარსკვლავის სტიკერი მისცა ცურვის სერტიფიკატისთვის. მაიამ დიდი, ამაყი ღიმილით დაუქნია ხელი დედას, რომელიც გალერეიდან უყურებდა."
        ]
      ],
      glossary: [
        "seashell|ზღვის ნიჟარა", "changing room|გასახდელი ოთახი", "poolside|აუზის პირი",
        "shallow|თავთხელი / არაღრმა", "instructor|ინსტრუქტორი / მწვრთნელი", "edge|კიდე / ნაპირი",
        "splash|წყლის აშხეფება", "chest|გულმკერდი", "motorboat|მოტორიანი ნავი", "sticker|სტიკერი / მისაწებებელი ნიშანი"
      ],
      questions: [
        "What is the name of the sports centre where Maya has her lesson?|The Dolphin Sports Centre|The Blue Whale Club|The City Gym|The River Pool",
        "What pictures are on Maya's large towel?|Seashells|Stars and moons|Dolphins|Red flowers",
        "Which pool does Maya's beginner group use?|The smaller, shallow pool with warm water|The huge deep diving pool|An outdoor river pool|A cold lake",
        "How many children are in Miss Evans's beginner group?|Six children|Twelve children|Twenty children|Two children",
        "What do the children do first while sitting on the edge of the pool?|Splash the water with their feet|Dive into the deep end|Swim across the pool twice|Put on their shoes",
        "How deep is the water in the small pool for Maya?|It reaches her chest|It is over her head|It only covers her toes|It is three metres deep",
        "What colour is the foam float board that Miss Evans gives each child?|Yellow|Pink|Blue|Green",
        "What game do the children play in the last ten minutes?|Picking up colourful plastic rings from the steps|Playing water basketball|Racing without boards|Jumping from a high tower",
        "What does Miss Evans give the children at five o'clock?|A star sticker for their certificate|A bar of chocolate|A new pair of goggles|A yellow float board to keep",
        "Where is Maya's mother watching the lesson from?|From the viewing gallery|From inside the water|From the café downstairs|From the car park"
      ]
    },
    {
      num: 14, level: "A1",
      title: "ზამთრის ღია ბარათი ალპებიდან",
      subtitle: "A Winter Postcard from the Alps",
      time: "6 წთ",
      paragraphs: [
        [
          "Dear Lucas, I am sending you this postcard from a charming mountain village in the Austrian Alps! My parents, my older brother Max, and I arrived here four days ago by train. We are staying in a traditional wooden guest house with balconies full of icicles.",
          "ძვირფასო ლუკას, ამ ღია ბარათს გიგზავნი ავსტრიის ალპების მომხიბვლელი მთის სოფლიდან! მე, ჩემი მშობლები და ჩემი უფროსი ძმა მაქსი აქ ოთხი დღის წინ მატარებლით ჩამოვედით. ჩვენ ვცხოვრობთ ტრადიციულ ხის საოჯახო სასტუმროში, რომლის აივნებიც ყინულის ლოლუებითაა სავსე."
        ],
        [
          "Every morning we wake up at eight and have a big breakfast in the sunny dining room. The host, Mrs Weber, serves fresh warm rolls, mountain butter, honey, and boiled eggs. From our table, we can see the cable cars going up the white mountain peak.",
          "ყოველ დილით რვა საათზე ვიღვიძებთ და მზიან სასადილო ოთახში ნოყიერად ვსაუზმობთ. დიასახლისი, ქალბატონი ვებერი, გვიმასპინძლდება ახალი თბილი ფუნთუშებით, მთის კარაქით, თაფლითა და მოხარშული კვერცხით. ჩვენი მაგიდიდან ვხედავთ საბაგირო გონდოლებს, რომლებიც თეთრი მწვერვალისკენ ადიან."
        ],
        [
          "After breakfast, we rent our ski equipment from a shop next to the ski lift. My father and Max are good skiers, so they take the cable car to the high red slopes. My mother and I stay on the gentle blue slope at the bottom of the hill with an instructor named Hans.",
          "საუზმის შემდეგ თხილამურების აღჭურვილობას ვქირაობთ საბაგიროს გვერდით მდებარე მაღაზიაში. მამაჩემი და მაქსი კარგი მოთხილამურეები არიან, ამიტომ ისინი საბაგიროთი მაღალ წითელ ტრასებზე ადიან. მე და დედა კი გორაკის ძირში, დამრეც ლურჯ ფერდობზე ვრჩებით ინსტრუქტორ ჰანსთან ერთად."
        ],
        [
          "Hans is very funny and teaches us how to turn and stop safely in the snow without falling. Yesterday afternoon, my mother and I took a horse-drawn sleigh ride through the snowy pine forest. We wore thick blankets over our knees and listened to the bells on the horses.",
          "ჰანსი ძალიან მხიარულია და გვასწავლის, როგორ მოვუხვიოთ და გავჩერდეთ თოვლში უსაფრთხოდ, წაქცევის გარეშე. გუშინ ნაშუადღევს მე და დედამ ცხენებშებმული მარხილით გავისეირნეთ დათოვლილ ფიჭვის ტყეში. მუხლებზე სქელი პლედები გვეფარა და ცხენების ეჟვნების წკარუნს ვუსმენდით."
        ],
        [
          "In the evenings, our cheeks are red from the cold air. We eat hot potato soup and apple strudel for dinner, and then play card games in the lounge. We are taking the train back home on Saturday afternoon. See you next week! Best wishes, Clara.",
          "საღამოობით ცივი ჰაერისგან ლოყები აწითლებული გვაქვს. ვახშმად მივირთმევთ ცხელ კარტოფილის წვნიანსა და ვაშლის შტრუდელს, შემდეგ კი მოსასვენებელ ოთახში ბანქოს ვთამაშობთ. შაბათ ნაშუადღევს მატარებლით სახლში ვბრუნდებით. მომავალ კვირამდე! საუკეთესო სურვილებით, კლარა."
        ]
      ],
      glossary: [
        "guest house|საოჯახო სასტუმრო", "icicle|ყინულის ლოლუა", "host|მასპინძელი / დიასახლისი",
        "cable car|საბაგირო გონდოლა", "ski equipment|სათხილამურო აღჭურვილობა", "gentle slope|დამრეცი / რბილი ფერდობი",
        "horse-drawn sleigh|ცხენებშებმული მარხილი", "cheek|ლოყა", "apple strudel|ვაშლის შტრუდელი (ნამცხვარი)", "lounge|მოსასვენებელი დარბაზი"
      ],
      questions: [
        "In which country is Clara spending her winter holiday?|In Austria (the Austrian Alps)|In Portugal|In Greece|In Sweden",
        "How did Clara and her family travel to the mountain village?|By train|By airplane|By ferry|By bus",
        "Who serves breakfast at the wooden guest house?|The host, Mrs Weber|The ski instructor, Hans|Clara's brother, Max|A waiter from town",
        "What can the family see from their breakfast table?|The cable cars going up the white mountain peak|The blue ocean waves|An airport runway|A football stadium",
        "Why do Clara's father and brother go to the high red slopes?|Because they are good skiers|Because the blue slope is closed|To ride a horse-drawn sleigh|To buy postcards",
        "Where do Clara and her mother practice skiing?|On the gentle blue slope at the bottom of the hill|On the dangerous black peak|On a frozen river|Inside a gym",
        "What is the name of their ski instructor?|Hans|Weber|Lucas|Max",
        "What did Clara and her mother do yesterday afternoon?|They took a horse-drawn sleigh ride through the pine forest|They went swimming in an outdoor pool|They visited a science museum|They baked bread",
        "What do they eat for dinner in the evenings?|Hot potato soup and apple strudel|Cold salad and fish|Pizza and ice cream|Roast beef and rice",
        "When is the family taking the train back home?|On Saturday afternoon|On Monday morning|Next month|Tonight at midnight"
      ]
    },
    {
      num: 15, level: "A1",
      title: "ქუჩის მუსიკოსები ძველ მოედანზე",
      subtitle: "Street Musicians in the Old Square",
      time: "6 წთ",
      paragraphs: [
        [
          "In the heart of our city, there is a historic square paved with grey cobblestones. Cars are not allowed here, so the square is a safe and pleasant place for pedestrians. Around the square, there are old bookshops, small cafés, and a marble fountain in the centre.",
          "ჩვენი ქალაქის გულში არის ნაცრისფერი ქვაფენილით მოკირწყლული ისტორიული მოედანი. აქ მანქანებით მოძრაობა აკრძალულია, ამიტომ მოედანი უსაფრთხო და სასიამოვნო ადგილია ქვეითებისთვის. მოედნის გარშემო განლაგებულია ძველი წიგნის მაღაზიები, პატარა კაფეები, ხოლო ცენტრში — მარმარილოს შადრევანი."
        ],
        [
          "Every warm evening between six and nine o'clock, street musicians come to the square to perform for the public. Each musician has a favourite spot, and they take turns so that their music does not mix together.",
          "ყოველ თბილ საღამოს, ექვსიდან ცხრა საათამდე, ქუჩის მუსიკოსები მოდიან მოედანზე ხალხის წინაშე დასაკრავად. თითოეულ მუსიკოსს თავისი საყვარელი ადგილი აქვს და ისინი რიგრიგობით უკრავენ, რათა მათი მუსიკა ერთმანეთში არ აირიოს."
        ],
        [
          "From six to seven, an elderly gentleman named Mr Rossi sits on a folding chair near the fountain and plays the accordion. He wears a black beret and plays romantic French and Italian melodies. Old couples sitting at the café tables clap after every song.",
          "ექვსიდან შვიდ საათამდე შადრევანთან ახლოს დასაკეც სკამზე ზის ხანდაზმული ბატონი, სახელად მისტერ როსი, და უკრავს აკორდეონზე. მას ახურავს შავი ბერეტი და ასრულებს რომანტიკულ ფრანგულ და იტალიურ მელოდიებს. კაფეების მაგიდებთან მსხდომი ხანდაზმული წყვილები ყოველი სიმღერის შემდეგ ტაშს უკრავენ."
        ],
        [
          "At seven o'clock, four young students from the Music Academy set up their stands in front of the old bookshop. Two of them play violins, one plays the viola, and the fourth plays a large wooden cello. A big crowd gathers in a circle to listen to their lively classical pieces.",
          "შვიდ საათზე მუსიკალური აკადემიის ოთხი ახალგაზრდა სტუდენტი ძველი წიგნის მაღაზიის წინ ნოტების სადგამებს შლის. ორი მათგანი უკრავს ვიოლინოზე, ერთი — ალტზე, ხოლო მეოთხე — დიდ ხის ჩელოზე. მათი ცოცხალი კლასიკური ნაწარმოებების მოსასმენად გარშემო წრედ დიდი ხალხი იკრიბება."
        ],
        [
          "In front of the musicians, there is an open violin case lined with red velvet. Listeners drop coins and banknotes into the case to thank the students and help them pay for their music books. When the stars appear in the sky at nine, the musicians pack their instruments and say goodnight to the square.",
          "მუსიკოსების წინ დევს წითელი ხავერდით გამოკრული ვიოლინოს ღია შალითა. მსმენელები შალითაში მონეტებსა და კუპიურებს ყრიან სტუდენტებისთვის მადლობის გადასახდელად და მუსიკალური წიგნების შეძენაში დასახმარებლად. როდესაც ცხრა საათზე ცაზე ვარსკვლავები ჩნდება, მუსიკოსები ინახავენ საკრავებს და მოედანს ემშვიდობებიან."
        ]
      ],
      glossary: [
        "cobblestone|რიყის ქვა / ქვაფენილი", "pedestrian|ქვეითი მოსიარულე", "take turns|რიგრიგობით გაკეთება",
        "folding chair|დასაკეცი სკამი", "accordion|აკორდეონი", "beret|ბერეტი (ქუდი)",
        "cello|ჩელო (სიმებიანი საკრავი)", "gather in a circle|წრედ შეკრება", "velvet|ხავერდი", "banknote|ქაღალდის ფული / კუპიურა"
      ],
      questions: [
        "Why is the historic square safe and quiet for pedestrians?|Because cars are not allowed there|Because nobody lives in the city|Because it is inside a building|Because it is only open in winter",
        "What is in the centre of the historic square?|A marble fountain|A tall glass tower|A bus station|A football pitch",
        "Between what hours do street musicians perform in the square?|Between six and nine o'clock in the evening|Between eight and ten in the morning|From midnight until dawn|Only at noon",
        "Why do the musicians take turns playing?|So that their music does not mix together|Because they share one instrument|Because the police tell them to|Because there is only one chair",
        "What instrument does Mr Rossi play near the fountain?|The accordion|The cello|The trumpet|The piano",
        "What does Mr Rossi wear on his head?|A black beret|A straw hat|A helmet|A woollen cap",
        "Where do the four young students study?|At the Music Academy|At a medical school|At a sports college|At a high school abroad",
        "Which four instruments do the students play?|Two violins, a viola, and a large wooden cello|Guitars and drums|Flutes and trumpets|Four accordions",
        "Why do listeners drop coins and banknotes into the open violin case?|To thank the students and help them pay for their music books|To buy tickets for a train|To pay for their coffee|To buy the old bookshop",
        "What colour is the velvet inside the open violin case?|Red|Blue|Green|Yellow"
      ]
    }
  ];

  // გავაერთიანოთ A1 და (მომავალი) A2 მასივები App.ReadingDataA-ში
  App.ReadingDataA = App.ReadingDataA1.concat(App.ReadingDataA2 || []);
})(window);
// ============================================================================
// A2 LEVEL — PASSAGES 16 TO 30 (5 PARAGRAPHS, 10 WORDS & 10 QUESTIONS EACH)
// ============================================================================
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ReadingDataA2 = [
    {
      num: 16, level: "A2",
      icon: "✈️", genre: "მოგზაურობა",
      title: "დილის რეისზე დაგვიანება",
      subtitle: "Missing the Morning Flight",
      time: "7 წთ",
      paragraphs: [
        [
          "Last Thursday, Robert had an early morning flight to Vienna for an international photography exhibition. Two of his landscape photographs were part of the main gallery display, and he was very excited to attend the opening ceremony on Thursday evening.",
          "გასულ ხუთშაბათს რობერტს დილის ადრიანი რეისი ჰქონდა ვენაში საერთაშორისო ფოტოგამოფენაზე დასასწრებად. მისი ორი პეიზაჟის ფოტო მთავარ გალერეაში იყო გამოფენილი და ის ძალიან ღელავდა ხუთშაბათ საღამოს გახსნის ცერემონიაზე დასწრების წინ."
        ],
        [
          "On Wednesday night, Robert packed his suitcase carefully, put his passport and boarding pass on the desk, and set the alarm on his mobile phone for five o'clock in the morning. However, he forgot to plug the charger into the wall socket before going to sleep.",
          "ოთხშაბათ ღამით რობერტმა გულდასმით ჩაალაგა ჩემოდანი, პასპორტი და ჩასხდომის ბარათი მაგიდაზე დადო და მობილურ ტელეფონზე მაღვიძარა დილის ხუთ საათზე დააყენა. თუმცა, დაძინებამდე დაავიწყდა დამტენის კედლის როზეტში შეერთება."
        ],
        [
          "During the night, the phone battery died completely, and the alarm never went off. When Robert finally woke up to the sound of birds outside his window, he looked at his wristwatch and jumped out of bed in shock. It was already half past six, and his plane was scheduled to depart at half past seven!",
          "ღამის განმავლობაში ტელეფონის ელემენტი ბოლომდე დაჯდა და მაღვიძარამ არ დარეკა. როდესაც რობერტს ფანჯრის მიღმა ჩიტების ხმაზე გაეღვიძა, მაჯის საათს დახედა და შოკირებული წამოხტა ლოგინიდან. უკვე შვიდის ნახევარი იყო, მისი თვითმფრინავი კი განრიგით რვის ნახევარზე მიფრინავდა!"
        ],
        [
          "He got dressed in five minutes, grabbed his luggage, and ran downstairs to catch a taxi. The taxi driver took the fastest highway route to the airport, but there was heavy morning traffic near the bridge. When Robert ran into Terminal Two at sevenfifteen, the boarding gate was already closed.",
          "მან ხუთ წუთში ჩაიცვა, ხელი დაავლო ბარგს და ტაქსის გასაჩერებლად ქვემოთ ჩაირბინა. ტაქსის მძღოლმა აეროპორტისკენ ყველაზე სწრაფი ავტომაგისტრალი აირჩია, მაგრამ ხიდთან დილის საცობი იყო. როდესაც რობერტი რვის თხუთმეტ წუთზე მეორე ტერმინალში შევარდა, ჩასხდომის გასასვლელი უკვე დაკეტილი დახვდა."
        ],
        [
          "Robert felt terrible, but the woman at the airline customer service desk was very patient and helpful. She checked the computer and found one remaining seat on the one o'clock afternoon flight. Robert paid a small change fee, charged his phone at an airport café, and still arrived in Vienna two hours before the exhibition opened.",
          "რობერტმა თავი საშინლად იგრძნო, მაგრამ ავიაკომპანიის მომხმარებელთა მომსახურების მაგიდასთან მომუშავე ქალი ძალიან მომთმენი და გულისხმიერი აღმოჩნდა. მან შეამოწმა კომპიუტერი და ნაშუადღევის პირველი საათის რეისზე ერთი თავისუფალი ადგილი იპოვა. რობერტმა გადაიხადა გადაცვლის მცირე საფასური, აეროპორტის კაფეში ტელეფონი დატენა და ვენაში გამოფენის გახსნამდე ორი საათით ადრე მაინც ჩაფრინდა."
        ]
      ],
      glossary: [
        "exhibition|გამოფენა", "landscape|პეიზაჟი / ბუნების ხედი", "opening ceremony|გახსნის ცერემონია",
        "plug in|დენში შეერთება", "wall socket|კედლის როზეტი / შტეფსელი", "go off (alarm)|დარეკვა (მაღვიძარასი)",
        "wristwatch|მაჯის საათი", "scheduled|განრიგით გათვალისწინებული", "boarding gate|ჩასხდომის გასასვლელი", "change fee|ბილეთის გადაცვლის საფასური"
      ],
      questions: [
        "Why was Robert flying to Vienna on Thursday?|To attend an international photography exhibition|To visit his family for Christmas|To start a new job at a bank|To watch a football final",
        "Why was Robert particularly excited about the exhibition?|Two of his landscape photographs were part of the main display|He was the director of the museum|He wanted to buy an old camera|His sister was singing there",
        "What time did Robert set his mobile phone alarm for?|Five o'clock in the morning|Half past six|Seven o'clock|Half past seven",
        "What mistake did Robert make before going to sleep on Wednesday night?|He forgot to plug the phone charger into the wall socket|He packed the wrong suitcase|He left his passport at the office|He set the alarm for Friday",
        "What woke Robert up in the morning?|The sound of birds outside his window|His neighbour knocking on the door|A phone call from the airline|The loud sound of thunder",
        "What time was it when Robert looked at his wristwatch?|Half past six|Five o'clock|Quarter past seven|Eight o'clock",
        "Why did the taxi take longer than expected to reach the airport?|Because there was heavy morning traffic near the bridge|Because the taxi had a flat tyre|Because the driver got lost|Because of a snowstorm",
        "What time did Robert reach Terminal Two?|At seven fifteen|At half past seven|At six thirty|At nine o'clock",
        "How did the woman at the customer service desk help him?|She found him a seat on the one o'clock afternoon flight|She asked the pilot to open the gate|She gave him a free train ticket|She drove him to Vienna",
        "When did Robert finally arrive in Vienna?|Two hours before the exhibition opened|The next morning after the ceremony|Three days late|Just as the gallery was closing"
      ]
    },
    {
      num: 17, level: "A2",
      icon: "🍫", genre: "ისტორია და კულტურა",
      title: "შოკოლადის უძველესი ისტორია",
      subtitle: "The Ancient History of Chocolate",
      time: "7 წთ",
      paragraphs: [
        [
          "Today, millions of people around the world enjoy eating sweet chocolate bars, cakes, and ice cream. However, for most of its four-thousand-year history, chocolate was not a solid sweet at all — it was a bitter, foamy drink enjoyed by kings and warriors.",
          "დღეს მსოფლიოში მილიონობით ადამიანი სიამოვნებით მიირთმევს ტკბილ შოკოლადის ფილებს, ნამცხვრებსა და ნაყინს. თუმცა, თავისი ოთხიათასწლიანი ისტორიის უმეტესი ნაწილის განმავლობაში შოკოლადი სულაც არ იყო მყარი ტკბილეული — ის იყო მწარე, ქაფიანი სასმელი, რომელსაც მეფეები და მეომრები სვამდნენ."
        ],
        [
          "The story of chocolate began in the tropical rainforests of Central and South America. The ancient Maya and Aztec civilizations believed that the cacao tree was a gift from the gods. They harvested the large pods from the tree trunks and took out the white beans inside.",
          "შოკოლადის ისტორია დაიწყო ცენტრალური და სამხრეთ ამერიკის ტროპიკულ ტყეებში. ძველი მაიასა და აცტეკების ცივილიზაციებს სწამდათ, რომ კაკაოს ხე ღმერთების საჩუქარი იყო. ისინი ხის ტანიდან კრეფდნენ დიდ ნაყოფს (პარკებს) და იღებდნენ შიგნით მოთავსებულ თეთრ მარცვლებს."
        ],
        [
          "First, they left the cacao beans in the sun to dry for several days. Then they roasted them over a fire, crushed them on flat stones, and mixed the dark paste with water, vanilla, and hot chili peppers. Because sugar was unknown in America at that time, the drink was spicy and bitter, and people believed it gave them strength.",
          "ჯერ კაკაოს მარცვლებს რამდენიმე დღით მზეზე ტოვებდნენ გასაშრობად. შემდეგ ცეცხლზე ხალავდნენ, ბრტყელ ქვებზე სრესდნენ და მუქ მასას ურევდნენ წყალს, ვანილსა და ცხარე წიწაკას. რადგან იმ დროს ამერიკაში შაქარი უცნობი იყო, სასმელი ცხარე და მწარე გამოდიოდა, და ხალხს სჯეროდა, რომ ის მათ ძალას მატებდა."
        ],
        [
          "Cacao beans were so precious in the Aztec Empire that they were used as currency in markets. For example, a person could buy a ripe avocado for three cacao beans, a rabbit for thirty beans, and a good turkey for one hundred beans.",
          "აცტეკების იმპერიაში კაკაოს მარცვლები იმდენად ძვირფასი იყო, რომ ბაზრებში ფულის ერთეულად გამოიყენებოდა. მაგალითად, ადამიანს შეეძლო ეყიდა მწიფე ავოკადო სამ კაკაოს მარცვლად, კურდღელი — ოცდაათ მარცვლად, ხოლო კარგი ინდაური — ას მარცვლად."
        ],
        [
          "In the early sixteenth century, Spanish ships brought cacao beans back to Europe. At the royal court in Madrid, cooks replaced the chili pepper with cane sugar and cinnamon, and served the drink hot. Finally, in 1847, a British company found a way to mix cocoa butter with sugar to create the first modern chocolate bar for eating.",
          "მეთექვსმეტე საუკუნის დასაწყისში ესპანურმა გემებმა კაკაოს მარცვლები ევროპაში ჩამოიტანეს. მადრიდის სამეფო კარზე მზარეულებმა ცხარე წიწაკა ლერწმის შაქრითა და დარიჩინით ჩაანაცვლეს და სასმელს ცხლად მიართმევდნენ. საბოლოოდ, 1847 წელს ბრიტანულმა კომპანიამ მიაგნო კაკაოს კარაქისა და შაქრის შერევის ხერხს და შექმნა პირველი თანამედროვე საჭმელი შოკოლადის ფილა."
        ]
      ],
      glossary: [
        "solid|მყარი", "bitter|მწარე", "foamy|ქაფიანი",
        "warrior|მეომარი", "rainforest|ტროპიკული ტყე", "crush|დასრესა / დაფქვა",
        "spicy|ცხარე / სანელებლებიანი", "precious|ძვირფასი", "currency|ვალუტა / ფულის ერთეული", "royal court|სამეფო კარი"
      ],
      questions: [
        "How long is the history of chocolate according to the text?|Around four thousand years|About two hundred years|One thousand years|Fifty years",
        "What was chocolate like for most of its history?|A bitter, foamy drink|A sweet frozen ice cream|A hard white candy|A type of bread",
        "Where did the cacao tree originally grow?|In the tropical rainforests of Central and South America|In the mountains of Spain|In northern Europe|In the deserts of Africa",
        "How did the ancient Maya and Aztecs prepare the cacao paste?|They dried, roasted, and crushed the beans on flat stones|They boiled the green leaves in milk|They froze the beans in snow|They fried the tree bark in oil",
        "Why wasn't the ancient Aztec chocolate drink sweet?|Because sugar was unknown in America at that time|Because they didn't like sweet food|Because sugar was only for children|Because honey was forbidden",
        "What did the Aztecs mix with the cacao paste and water?|Vanilla and hot chili peppers|Milk, butter, and strawberries|Lemon juice and salt|Flour and eggs",
        "How many cacao beans did a rabbit cost in an Aztec market?|Thirty cacao beans|Three cacao beans|One hundred cacao beans|Five hundred cacao beans",
        "How many cacao beans were needed to buy a good turkey?|One hundred beans|Ten beans|Three beans|Thirty beans",
        "How did cooks in Madrid change the chocolate recipe in the sixteenth century?|They replaced the chili pepper with cane sugar and cinnamon|They added more chili pepper and salt|They served it with fish|They turned it into cheese",
        "When and where was the first modern solid chocolate bar created?|In 1847, in Britain|In 1520, in Spain|In 1920, in France|In 1700, in Mexico"
      ]
    },
    {
      num: 18, level: "A2",
      icon: "⛺", genre: "თავგადასავალი",
      title: "კემპინგი ვერცხლისფერ ტბასთან",
      subtitle: "A Weekend Camping Trip by Silver Lake",
      time: "7 წთ",
      paragraphs: [
        [
          "At the end of July, four university friends — Leo, Sam, Mia, and Kate — decided to take a break from city life and spend a weekend camping by Silver Lake. The lake is located in a national nature reserve sixty kilometres north of the capital, surrounded by pine forests and rocky hills.",
          "ივლისის ბოლოს უნივერსიტეტის ოთხმა მეგობარმა — ლეომ, სემმა, მიამ და ქეითმა — გადაწყვიტა ქალაქის ცხოვრებისგან დაესვენა და უქმეები ვერცხლისფერ ტბასთან კემპინგზე გაეტარებინა. ტბა მდებარეობს დედაქალაქიდან ჩრდილოეთით სამოც კილომეტრში, ეროვნულ ნაკრძალში, რომელიც გარშემორტყმულია ფიჭვის ტყეებითა და კლდოვანი გორაკებით."
        ],
        [
          "On Friday afternoon, they packed their backpacks with two waterproof tents, warm sleeping bags, a gas stove, flashlights, and a first-aid kit. Since cars are not allowed near the lake shore, they parked at the ranger station and hiked four kilometres along a shady forest trail.",
          "პარასკევ ნაშუადღევს მათ ზურგჩანთებში ჩაალაგეს ორი წყალგაუმტარი კარავი, თბილი საძილე ტომრები, გაზქურა, ფანრები და პირველადი დახმარების ყუთი. რადგან ტბის ნაპირთან მანქანებით შესვლა აკრძალულია, მათ მანქანა რეინჯერთა სადგურთან გააჩერეს და ჩრდილიანი ტყის ბილიკით ოთხი კილომეტრი ფეხით გაიარეს."
        ],
        [
          "When they reached the campsite at five o'clock, they chose a flat grassy spot near a small stream. Leo and Sam pitched the two tents and tied the ropes tightly around wooden pegs, while Mia and Kate gathered dry branches from the forest floor to build a campfire in the stone ring.",
          "როდესაც ხუთ საათზე საკემპინგე ადგილს მიაღწიეს, პატარა ნაკადულთან ახლოს სწორი ბალახოვანი ადგილი შეარჩიეს. ლეომ და სემმა გაშალეს ორი კარავი და თოკები მჭიდროდ მიაბეს ხის პალოებს, მიამ და ქეითმა კი ტყეში ხმელი ტოტები შეაგროვეს ქვის წრეში კოცონის დასანთებად."
        ],
        [
          "On Saturday morning, the friends rented two wooden canoes from the boathouse. Wearing orange life jackets, they paddled across the calm, mirror-like water to a tiny island in the centre of the lake. There, they swam in the cool water, had a picnic lunch on the flat rocks, and watched an eagle flying high above the cliffs.",
          "შაბათ დილით მეგობრებმა ნავების სადგურიდან ორი ხის კანოე იქირავეს. ნარინჯისფერ სამაშველო ჟილეტებში გამოწყობილებმა მშვიდ, სარკესავით წყალზე გაცურეს ტბის შუაგულში მდებარე პაწაწინა კუნძულისკენ. იქ მათ გრილ წყალში იცურავეს, ბრტყელ კლდეებზე პიკნიკი მოაწყვეს და უყურეს კლდეების თავზე მაღლა მფრინავ არწივს."
        ],
        [
          "That night, the sky was completely clear. Far away from the bright streetlamps of the city, the Milky Way looked like a silver river of stars. Before leaving on Sunday afternoon, the friends made sure the campfire was completely out and carried all their rubbish back in their bags, leaving the forest as clean as they had found it.",
          "იმ ღამით ცა სრულიად მოწმენდილი იყო. ქალაქის კაშკაშა ლამპიონებიდან შორს, ირმის ნახტომი ვარსკვლავების ვერცხლისფერ მდინარეს ჰგავდა. კვირა ნაშუადღევს წამოსვლამდე მეგობრები დარწმუნდნენ, რომ კოცონი ბოლომდე ჩამქრალი იყო და მთელი ნაგავი ჩანთებით უკან წამოიღეს, ტყე კი ისეთივე სუფთა დატოვეს, როგორიც დახვდათ."
        ]
      ],
      glossary: [
        "nature reserve|ბუნების ნაკრძალი", "waterproof|წყალგაუმტარი", "first-aid kit|პირველადი დახმარების ყუთი",
        "campsite|საკემპინგე ადგილი", "stream|ნაკადული / რუ", "wooden peg|ხის პალო (კარვის)",
        "life jacket|სამაშველო ჟილეტი", "mirror-like|სარკესავით (გლუვი)", "Milky Way|ირმის ნახტომი (გალაქტიკა)", "rubbish|ნაგავი"
      ],
      questions: [
        "How far is Silver Lake from the capital city?|Sixty kilometres north|Ten kilometres south|Two hundred kilometres east|Five kilometres west",
        "Why did the friends have to hike four kilometres to the lake?|Because cars are not allowed near the lake shore|Because their car broke down on the highway|Because there was no road to the ranger station|Because they lost their car keys",
        "Where did they leave their car?|At the ranger station|On the small island|Inside the boathouse|In the city centre",
        "Where did they choose to pitch their two tents?|On a flat grassy spot near a small stream|On top of a rocky cliff|On the sandy beach in the water|Inside a dark cave",
        "What did Mia and Kate do while Leo and Sam pitched the tents?|They gathered dry branches to build a campfire|They went swimming in the lake|They rented two canoes|They slept in the car",
        "What did the friends wear for safety when paddling the canoes?|Orange life jackets|Heavy winter coats|Diving helmets|Rubber boots",
        "What bird did they see flying high above the cliffs on Saturday?|An eagle|A white swan|A penguin|An owl",
        "Why could they see the Milky Way so clearly at night?|Because they were far away from the bright streetlamps of the city|Because they used a giant observatory telescope|Because the moon was hidden by dark clouds|Because it was winter",
        "What did the friends check carefully before leaving on Sunday?|That the campfire was completely out|That the canoes were painted|That the stream was dry|That the fish were fed",
        "What did they do with their rubbish at the end of the trip?|They carried it all back in their bags|They burned it in the forest|They left it by the stream|They buried it under a tree"
      ]
    },
    {
      num: 19, level: "A2",
      icon: "🐝", genre: "ბუნება და ეკოლოგია",
      title: "ფუტკრების საიდუმლო ცხოვრება",
      subtitle: "The Secret Life of Honeybees",
      time: "7 წთ",
      paragraphs: [
        [
          "When we see a honeybee buzzing around a garden in spring, we usually think of sweet golden honey. However, scientists say that honeybees are among the most important creatures on Earth for a different reason: without their hard work, a third of the food we eat every day would disappear.",
          "როდესაც გაზაფხულზე ბაღში მოზუზუნე ფუტკარს ვხედავთ, ჩვეულებრივ ტკბილი ქარვისფერი თაფლი გვახსენდება. თუმცა, მეცნიერები ამბობენ, რომ ფუტკრები დედამიწაზე ყველაზე მნიშვნელოვან არსებებს შორის არიან სულ სხვა მიზეზის გამო: მათი დაუღალავი შრომის გარეშე იმ საკვების მესამედი, რასაც ყოველდღე ვჭამთ, გაქრებოდა."
        ],
        [
          "As a bee flies from blossom to blossom drinking sweet liquid called nectar, tiny yellow grains of pollen stick to the hairs on its back legs. When the bee lands on the next flower, some of this pollen rubs off. This process, known as pollination, allows plants to produce fruits, berries, nuts, and vegetables.",
          "როდესაც ფუტკარი ყვავილიდან ყვავილზე გადაფრინდება ტკბილი სითხის, ნექტრის დასალევად, ყვავილის მტვრის პაწაწინა ყვითელი მარცვლები ეკვრის მის უკანა ფეხებზე არსებულ ბუსუსებს. როდესაც ფუტკარი მომდევნო ყვავილზე ჯდება, ამ მტვრის ნაწილი იქ გადადის. ეს პროცესი, რომელსაც დამტვერვა ეწოდება, მცენარეებს საშუალებას აძლევს გამოიღოს ხილი, კენკრა, თხილეული და ბოსტნეული."
        ],
        [
          "A single beehive is like a busy city where up to fifty thousand bees live and work together. Every hive has only one queen bee, whose job is to lay eggs. Almost all the other bees are female worker bees, and each worker has different duties depending on her age.",
          "ერთი ფუტკრის სკა ჰგავს დატვირთულ ქალაქს, სადაც ორმოცდაათ ათასამდე ფუტკარი ერთად ცხოვრობს და შრომობს. თითოეულ სკას ჰყავს მხოლოდ ერთი დედა ფუტკარი, რომლის მოვალეობაც კვერცხების დადებაა. თითქმის ყველა დანარჩენი ფუტკარი მდედრი მუშა ფუტკარია და თითოეულ მუშას თავისი ასაკის მიხედვით სხვადასხვა მოვალეობა აკისრია."
        ],
        [
          "Young worker bees stay inside the hive: they clean the wax cells, feed the baby larvae, and flap their wings thousands of times a minute to keep the hive cool on hot summer days. When a worker bee is three weeks old, she becomes a forager and flies out to collect nectar and water.",
          "ახალგაზრდა მუშა ფუტკრები სკის შიგნით რჩებიან: ისინი ასუფთავებენ ცვილის უჯრედებს, კვებავენ პატარა მატლებს და ზაფხულის ცხელ დღეებში სკის გასაგრილებლად წუთში ათასჯერ აფართხალებენ ფრთებს. როდესაც მუშა ფუტკარი სამი კვირის ხდება, ის მომპოვებელი ხდება და ნექტრისა და წყლის შესაგროვებლად გარეთ მიფრინავს."
        ],
        [
          "To make just one jar of honey, bees from a hive must visit around two million flowers! Today, many people plant lavender, rosemary, and wildflowers in their gardens and on balconies to provide food for bees and help protect these amazing insects.",
          "მხოლოდ ერთი ქილა თაფლის დასამზადებლად სკის ფუტკრები დაახლოებით ორ მილიონ ყვავილს უნდა ესტუმრონ! დღეს ბევრი ადამიანი თავის ბაღებსა და აივნებზე რგავს ლავანდას, როზმარინსა და მინდვრის ყვავილებს, რათა ფუტკრებს საკვები მიაწოდოს და დაეხმაროს ამ საოცარი მწერების დაცვას."
        ]
      ],
      glossary: [
        "buzz|ზუზუნი / ბზუილი", "creature|არსება / ქმნილება", "nectar|ნექტარი",
        "pollen|ყვავილის მტვერი", "pollination|დამტვერვა", "queen bee|დედა ფუტკარი",
        "wax cell|ცვილის უჯრედი (ფიჭა)", "flap wings|ფრთების ქნევა/ფართხალი", "forager|საკვების მომპოვებელი", "rosemary|როზმარინი (მცენარე)"
      ],
      questions: [
        "What would happen without the pollination work of bees?|A third of the food we eat every day would disappear|Trees would grow much faster|Rivers would dry up|Winter would last all year",
        "What sweet liquid do bees drink from flowers?|Nectar|Honey|Maple syrup|Morning dew",
        "Where do the tiny yellow grains of pollen stick on a bee?|To the hairs on its back legs|To its eyes|Inside its mouth|On the tip of its wings",
        "How many bees can live and work together in a single beehive?|Up to fifty thousand bees|Only about twenty bees|Five hundred bees|Ten million bees",
        "How many queen bees live in one beehive?|Only one queen bee|Five queen bees|A hundred queen bees|Half of the hive",
        "What is the main job of the queen bee?|To lay eggs|To fly out and collect water|To clean the wax cells|To guard the entrance",
        "How do young worker bees keep the hive cool on hot summer days?|They flap their wings thousands of times a minute|They pour cold water on the roof|They open the windows|They blow wind with leaves",
        "At what age does a worker bee start flying outside to collect nectar?|When she is three weeks old|On the day she is born|When she is two years old|After six months",
        "How many flowers must bees visit to make just one jar of honey?|Around two million flowers|About एक hundred flowers|Five thousand flowers|Fifty flowers",
        "How can people help bees in towns and cities?|By planting lavender, rosemary, and wildflowers in gardens and on balconies|By leaving bowls of sugar indoors|By catching them in glass jars|By cutting all the grass short"
      ]
    },
    {
      num: 20, level: "A2",
      icon: "📦", genre: "ყოველდღიური ცხოვრება",
      title: "ახალ ბინაში გადასვლის დღე",
      subtitle: "Moving Day at the New Apartment",
      time: "7 წთ",
      paragraphs: [
        [
          "For four years, Mark and his wife Sarah lived in a small rented flat on the ground floor near the railway line. Every time a freight train passed at night, the windows rattled. This spring, they finally saved enough money to move into a larger, quieter apartment near the botanical garden.",
          "ოთხი წლის განმავლობაში მარკი და მისი მეუღლე სარა რკინიგზის ხაზთან ახლოს, პირველ სართულზე ნაქირავებ პატარა ბინაში ცხოვრობდნენ. ყოველ ჯერზე, როცა ღამით სატვირთო მატარებელი ჩაივლიდა, ფანჯრები ზანზარებდა. ამ გაზაფხულს მათ საბოლოოდ დააგროვეს საკმარისი თანხა ბოტანიკურ ბაღთან ახლოს უფრო დიდ და მშვიდ ბინაში გადასასვლელად."
        ],
        [
          "All week, they spent their evenings packing their belongings into thirty-five cardboard boxes. Sarah wrapped every plate and glass in old newspapers so they wouldn't break, and wrote 'KITCHEN — FRAGILE' on the outside with a thick black marker. Mark took apart the wooden bookshelf and put all the screws into a small plastic bag.",
          "მთელი კვირის განმავლობაში ისინი საღამოებს ატარებდნენ თავიანთი ნივთების ოცდათხუთმეტ მუყაოს ყუთში ჩალაგებაში. სარამ თითოეული თეფში და ჭიქა ძველ გაზეთებში შეახვია, რომ არ გამტყდარიყო, და გარედან სქელი შავი მარკერით დააწერა: „სამზარეულო — მსხვრევადი“. მარკმა დაშალა ხის წიგნების თარო და ყველა ხრახნი პატარა პლასტმასის პარკში ჩაყარა."
        ],
        [
          "On Saturday morning at eight o'clock, their friends David and Paul arrived with a white moving van. Loading the van was hard work, especially carrying the heavy washing machine and the green sofa. Before driving away, Mark walked through the empty rooms one last time to check the cupboards and return the keys to the landlord.",
          "შაბათ დილით რვა საათზე მათი მეგობრები დევიდი და პოლი თეთრი სატვირთო ფურგონით მოვიდნენ. ფურგონის დატვირთვა მძიმე სამუშაო აღმოჩნდა, განსაკუთრებით მძიმე სარეცხი მანქანისა და მწვანე დივნის გატანა. წასვლამდე მარკმა ბოლოჯერ შემოიარა ცარიელი ოთახები კარადების შესამოწმებლად და მესაკუთრეს გასაღები დაუბრუნა."
        ],
        [
          "Their new apartment was on the fourth floor of a modern building. However, when they parked in front of the entrance, a sign on the elevator door said: 'Out of Order until 2 PM — Technician Working'. The four friends looked at each other, laughed, and began carrying the thirty-five boxes up the stairs one by one.",
          "მათი ახალი ბინა თანამედროვე კორპუსის მეოთხე სართულზე იყო. თუმცა, როდესაც შესასვლელის წინ გაჩერდნენ, ლიფტის კარზე გაკრული წარწერა იუწყებოდა: „გათიშულია 14:00 საათამდე — მუშაობს ტექნიკოსი“. ოთხმა მეგობარმა ერთმანეთს გადახედა, გაიცინა და ოცდათხუთმეტივე ყუთის კიბით სათითაოდ ატანა დაიწყო."
        ],
        [
          "Just as they were about to lift the heavy washing machine, the technician finished his work and the elevator bell rang! By five o'clock, the furniture was in place. Sitting on the balcony overlooking the green trees of the botanical garden, they ate hot pizza directly from the boxes and celebrated their new home.",
          "ზუსტად მაშინ, როცა მძიმე სარეცხი მანქანის აწევას აპირებდნენ, ტექნიკოსმა მუშაობა დაასრულა და ლიფტის ზარმაც დარეკა! ხუთი საათისთვის ავეჯი უკვე თავის ადგილზე იდგა. ბოტანიკური ბაღის მწვანე ხეებზე გადამყურე აივანზე მსხდომებმა პირდაპირ ყუთებიდან მიირთვეს ცხელი პიცა და ახალმოსახლეობა აღნიშნეს."
        ]
      ],
      glossary: [
        "freight train|სატვირთო მატარებელი", "rattle|ზანზარი / რახრახი", "belongings|პირადი ნივთები / ქონება",
        "fragile|მსხვრევადი", "take apart|დაშლა (ნაწილებად)", "screw|ხრახნი / შურუპი",
        "moving van|ავეჯის გადასაზიდი ფურგონი", "landlord|ბინის მესაკუთრე / გამქირავებელი", "out of order|მწყობრიდან გამოსული", "overlook|გადაჰყურებს (ხედით)"
      ],
      questions: [
        "What was the problem with Mark and Sarah's old flat on the ground floor?|The windows rattled every time a freight train passed at night|The roof leaked when it rained|It was too far from the station|There was no kitchen",
        "Where is their new apartment located?|Near the botanical garden, on the fourth floor|Next to the airport|On the first floor near the highway|In a small mountain village",
        "How many cardboard boxes did they pack during the week?|Thirty-five boxes|Fifteen boxes|Fifty boxes|Ten boxes",
        "Why did Sarah wrap the plates and glasses in old newspapers?|So that they wouldn't break during the move|To keep them warm|Because she had no boxes|To hide them from guests",
        "What did Sarah write on the kitchen boxes with a black marker?|KITCHEN — FRAGILE|BOOKS — HEAVY|OLD CLOTHES|DO NOT OPEN",
        "Where did Mark put the screws from the wooden bookshelf?|Into a small plastic bag|In his coat pocket|Inside a shoe|On the window sill",
        "Who came at eight o'clock on Saturday morning with a white van?|Their friends David and Paul|Two professional drivers|Mark's parents|The landlord",
        "Why did they have to carry the thirty-five boxes up the stairs?|Because the elevator was out of order until 2 PM|Because there was no elevator in the building|Because the boxes were too big for the elevator|Because they wanted to exercise",
        "What happened just before they lifted the heavy washing machine?|The technician finished his work and the elevator started working|It started to rain heavily|The washing machine broke|The landlord arrived",
        "How did the four friends celebrate on the balcony at five o'clock?|They ate hot pizza directly from the boxes|They cooked a three-course fish dinner|They went to an expensive restaurant|They planted flowers"
      ]
    },
    {
      num: 21, level: "A2",
      icon: "🚨", genre: "ზღვა და ისტორია",
      title: "ძველი შუქურის მცველი",
      subtitle: "The Keeper of the Stormy Point Lighthouse",
      time: "7 წთ",
      paragraphs: [
        [
          "Two kilometres off the rocky northern coast lies a small granite island called Stormy Point. For centuries, sharp underwater reefs around the island were a terrible danger to passing ships. In 1865, engineers built a forty-metre-tall white stone lighthouse on the island to guide sailors safely to the harbour.",
          "კლდოვანი ჩრდილოეთ სანაპიროდან ორ კილომეტრში მდებარეობს პატარა გრანიტის კუნძული, სახელად სტორმი-პოინტი. საუკუნეების განმავლობაში კუნძულის გარშემო არსებული ბასრი წყალქვეშა რიფები უდიდეს საფრთხეს უქმნიდა გამვლელ გემებს. 1865 წელს ინჟინრებმა კუნძულზე ააგეს ორმოცი მეტრის სიმაღლის თეთრი ქვის შუქურა მეზღვაურების ნავსადგურამდე უსაფრთხოდ მისაცილებლად."
        ],
        [
          "Captain Arthur was the last keeper of the Stormy Point Lighthouse, working there for thirty-two years. He lived in a round cottage at the base of the tower. Every afternoon before sunset, he carried cans of oil up the 160 spiral iron steps to the lantern room at the very top.",
          "კაპიტანი არტური იყო სტორმი-პოინტის შუქურის უკანასკნელი მცველი, რომელიც იქ ოცდათორმეტი წლის განმავლობაში მუშაობდა. ის კოშკის ძირში მდებარე მრგვალ სახლში ცხოვრობდა. ყოველ ნაშუადღევს, მზის ჩასვლამდე, მას 160 ხვეული რკინის საფეხურით ზევით, სულ წვერში მდებარე სანათურის ოთახში საწვავი ზეთის ქილები აჰქონდა."
        ],
        [
          "In the lantern room, a giant glass lens surrounded the lamp. The lens turned slowly on a clockwork mechanism, sending a powerful beam of white light thirty kilometres across the dark waves every ten seconds. On nights with thick fog, Captain Arthur also rang a heavy bronze fog-bell to warn fishing boats.",
          "სანათურის ოთახში ნათურას გარს ერტყა გიგანტური მინის ლინზა. ლინზა საათის მექანიზმზე ნელა ბრუნავდა და ყოველ ათ წამში ერთხელ ბნელ ტალღებზე ოცდაათი კილომეტრის მანძილზე თეთრი სინათლის მძლავრ სხივს გზავნიდა. სქელი ნისლით დაფარულ ღამეებში კაპიტანი არტური მძიმე ბრინჯაოს ნისლის ზარსაც რეკავდა თევზსაჭერი ნავების გასაფრთხილებლად."
        ],
        [
          "Life on the island required patience and courage. In winter, fierce gales blew for weeks, and waves as high as houses crashed against the tower walls. The supply boat from the mainland could only come twice a month when the sea was calm, bringing fresh water, flour, coal, and letters.",
          "კუნძულზე ცხოვრება მოთმინებასა და სიმამაცეს მოითხოვდა. ზამთარში კვირების განმავლობაში მძვინვარე ქარიშხლები ქროდა და სახლის სიმაღლის ტალღები ეხეთქებოდა კოშკის კედლებს. მატერიკიდან მომმარაგებელ ნავს მოსვლა თვეში მხოლოდ ორჯერ შეეძლო, როცა ზღვა მშვიდი იყო, და მოჰქონდა მტკნარი წყალი, ფქვილი, ნახშირი და წერილები."
        ],
        [
          "Ten years ago, engineers installed solar panels and an automated LED beacon at the top of the lighthouse. Captain Arthur retired and moved to a cottage on the mainland cliff. Now, part of the island cottage is a small maritime museum where Arthur tells summer visitors stories about stormy nights at sea.",
          "ათი წლის წინ ინჟინრებმა შუქურის წვერზე მზის პანელები და ავტომატიზებული შუქდიოდური შუქურა დაამონტაჟეს. კაპიტანი არტური პენსიაზე გავიდა და მატერიკის კლდეზე მდებარე სახლში გადავიდა. ახლა კუნძულის სახლის ნაწილი პატარა საზღვაო მუზეუმია, სადაც არტური ზაფხულის დამთვალიერებლებს ზღვაზე გატარებულ ქარიშხლიან ღამეებზე უყვება."
        ]
      ],
      glossary: [
        "underwater reef|წყალქვეშა რიფი (კლდე)", "harbour|ნავსადგური", "base of the tower|კოშკის ძირი",
        "lantern room|სანათურის ოთახი (შუქურის წვერში)", "clockwork|საათის მექანიზმი", "beam of light|სინათლის სხივი",
        "gale|ძლიერი ქარიშხალი (ზღვაზე)", "mainland|მატერიკი / ხმელეთი", "beacon|შუქურა / სასიგნალო ნათურა", "maritime|საზღვაო"
      ],
      questions: [
        "When was the Stormy Point Lighthouse built and how tall is it?|In 1865, and it is forty metres tall|In 1950, and it is ten metres tall|In 1700, and it is one hundred metres tall|Ten years ago, and it is twenty metres tall",
        "Why was the island so dangerous for passing ships before the lighthouse was built?|Because of sharp underwater reefs around the island|Because of pirates living on the island|Because the water was too shallow for canoes|Because of icebergs in summer",
        "How many years did Captain Arthur work as the lighthouse keeper?|Thirty-two years|Ten years|Fifty years|Five years",
        "How many spiral iron steps led up to the lantern room?|160 steps|40 steps|500 steps|30 steps",
        "How far across the dark waves could the beam of light be seen?|Thirty kilometres|Two kilometres|One hundred kilometres|Five hundred metres",
        "How often did the revolving lens send out a flash of white light?|Every ten seconds|Once every hour|Every five minutes|Only at midnight",
        "What did Captain Arthur do on nights with thick fog?|He rang a heavy bronze fog-bell to warn fishing boats|He swam out to meet the boats|He turned off the lamp|He lit a bonfire on the beach",
        "How often could the supply boat come from the mainland in winter?|Twice a month when the sea was calm|Every morning at eight|Four times a week|Never in winter",
        "How does the lighthouse operate today?|With solar panels and an automated LED beacon|With oil lamps and clockwork|With coal fires|It no longer works",
        "What does Captain Arthur do now in summer?|He tells visitors stories at the small maritime museum on the island|He sails cargo ships across the ocean|He repairs engines in the harbour|He works at an airport"
      ]
    },
    {
      num: 22, level: "A2",
      icon: "🚲", genre: "ბავშვობის მოგონება",
      title: "ველოსიპედის ტარების სწავლა",
      subtitle: "The Day Oliver Learned to Ride",
      time: "6 წთ",
      paragraphs: [
        [
          "For his eighth birthday in May, Oliver received the present he had dreamed of all year: a shiny green bicycle with a silver bell on the handlebars. Up until then, he had only ridden a small bike with two plastic training wheels at the back.",
          "მაისში, თავის მერვე დაბადების დღეზე, ოლივერმა მიიღო საჩუქარი, რომელზეც მთელი წელი ოცნებობდა: პრიალა მწვანე ველოსიპედი საჭეზე დამაგრებული ვერცხლისფერი ზარით. მანამდე ის მხოლოდ პატარა ველოსიპედით დადიოდა, რომელსაც უკან ორი პლასტმასის დამხმარე ბორბალი ჰქონდა."
        ],
        [
          "After breakfast on Saturday, Oliver's father used a wrench to take off the training wheels. 'Today is the day you learn to balance on two wheels,' his father said with an encouraging smile. Oliver put on his blue helmet and knee pads, feeling both excited and a little nervous.",
          "შაბათს, საუზმის შემდეგ, ოლივერის მამამ ქანჩის გასაღებით მოხსნა დამხმარე ბორბლები. „დღეს ის დღეა, როცა ორ ბორბალზე წონასწორობის დაცვას ისწავლი“, — უთხრა მამამ გამამხნევებელი ღიმილით. ოლივერმა დაიხურა ლურჯი ჩაფხუტი, გაიკეთა სამუხლეები და ერთდროულად აღფრთოვანებაც იგრძნო და მცირე ღელვაც."
        ],
        [
          "They walked to the wide, flat path in the school playground, which was empty on the weekend. His father held the back of the saddle while Oliver put his feet on the pedals. 'Don't look down at your feet!' his father advised. 'Look straight ahead at where you want to go, and keep pedalling.'",
          "ისინი წავიდენ სკოლის ეზოს ფართო, სწორ ბილიკზე, რომელიც შაბათ-კვირას ცარიელი იყო. მამამ დაიჭირა უნაგირის (სკამის) უკანა მხარე, სანამ ოლივერმა ფეხები პედლებზე დააწყო. „დაბლა ფეხებზე ნუ იყურები!“ — ურჩია მამამ. „იყურე პირდაპირ წინ, საითაც გინდა წასვლა, და განაგრძე პედლების ტრიალი“."
        ],
        [
          "On the first attempt, Oliver looked down at the front wheel, turned the handlebars too sharply, and fell onto the grass beside the path. Because of his knee pads, it didn't hurt at all. He brushed the grass off his trousers, climbed back onto the saddle, and tried again.",
          "პირველ ცდაზე ოლივერმა დაბლა წინა ბორბალს დახედა, საჭე ზედმეტად მკვეთრად მოაბრუნა და ბილიკის გვერდით ბალახზე გადავარდა. სამუხლეების წყალობით საერთოდ არ სტკენია. მან შარვლიდან ბალახი ჩამოიფერთხა, ისევ შეჯდა უნაგირზე და თავიდან სცადა."
        ],
        [
          "On the fourth try, Oliver kept his eyes fixed on the big oak tree at the end of the playground and pedalled smoothly. The wind blew against his face, and the bike glided forward effortlessly. When he finally squeezed the handbrakes and looked back, he saw his father standing far behind at the gate, cheering loudly. Oliver rang his silver bell with pride!",
          "მეოთხე ცდაზე ოლივერმა მზერა გაუსწორა მოედნის ბოლოში მდგარ დიდ მუხის ხეს და პედლები თანაბრად დაატრიალა. ქარი სახეში უბერავდა და ველოსიპედი ძალდაუტანებლად მისრიალებდა წინ. როდესაც საბოლოოდ ხელის მუხრუჭებს მოუჭირა და უკან მიიხედა, დაინახა, რომ მამამისი შორს, ჭიშკართან იდგა და ხმამაღლა ამხნევებდა. ოლივერმა სიამაყით დარეკა თავისი ვერცხლისფერი ზარი!"
        ]
      ],
      glossary: [
        "handlebars|ველოსიპედის საჭე", "training wheels|დამხმარე ბორბლები", "wrench|ქანჩის გასაღები (ინსტრუმენტი)",
        "knee pads|დამცავი სამუხლეები", "saddle|ველოსიპედის უნაგირი / დასაჯდომი", "sharply|მკვეთრად",
        "brush off|ჩამოფერთხვა / გადაწმენდა", "glide|სრიალი / მსუბუქად სვლა", "effortlessly|ძალდაუტანებლად / მარტივად", "handbrake|ხელის მუხრუჭი"
      ],
      questions: [
        "What was on the handlebars of Oliver's new green bicycle?|A silver bell|A small basket|A mirror|A red flag",
        "What tool did Oliver's father use to remove the training wheels?|A wrench|A hammer|A pocket knife|A pair of scissors",
        "What protective gear did Oliver put on before riding?|A blue helmet and knee pads|Thick winter gloves and boots|Goggles and a raincoat|A leather jacket",
        "Where did they go to practice riding?|To the wide, flat path in the school playground|To a busy city street|To a steep mountain trail|To a sandy beach",
        "What important advice did Oliver's father give him?|Look straight ahead at where you want to go, not down at your feet|Look closely at the pedals while turning|Close your eyes when going fast|Use only one hand on the handlebars",
        "Why did Oliver fall onto the grass on his first attempt?|He looked down at the front wheel and turned the handlebars too sharply|A dog ran in front of his bike|The chain broke|His father pushed him too hard",
        "Why didn't Oliver hurt his knees when he fell?|Because he was wearing knee pads and fell on the grass|Because he landed in water|Because his father caught him|Because the bike didn't move",
        "On which attempt did Oliver ride all the way across the playground alone?|On the fourth try|On the first try|On the tenth try|The next day",
        "What did Oliver keep his eyes fixed on while pedalling smoothly?|The big oak tree at the end of the playground|His father's shoes|The clouds in the sky|His silver bell",
        "How did Oliver stop the bicycle at the end of the path?|He squeezed the handbrakes|He jumped off while moving|He hit the oak tree|He put his feet on the ground"
      ]
    },
    {
      num: 23, level: "A2",
      icon: "🔭", genre: "მეცნიერება",
      title: "ღამის თავგადასავალი მეცნიერების მუზეუმში",
      subtitle: "An Overnight Adventure at the Science Museum",
      time: "7 წთ",
      paragraphs: [
        [
          "Most visitors only see the National Science Museum during the day, when the halls are bright and full of crowds. However, on the first Friday of every month, the museum opens its doors at seven in the evening for a special educational event called 'Night Explorers' for children aged ten to fourteen.",
          "დამთვალიერებელთა უმეტესობა ეროვნულ სამეცნიერო მუზეუმს მხოლოდ დღისით ნახულობს, როდესაც დარბაზები განათებულია და ხალხითაა სავსე. თუმცა, ყოველი თვის პირველ პარასკევს მუზეუმი კარს საღამოს შვიდ საათზე აღებს ათიდან თოთხმეტ წლამდე ბავშვებისთვის განკუთვნილი სპეციალური საგანმანათლებლო ღონისძიებისთვის — „ღამის მკვლევრები“."
        ],
        [
          "Last Friday, twenty-four students from Oakwood School arrived with their science teacher, Mr Green. Each student carried a backpack with a sleeping bag, a toothbrush, pyjamas, and a small flashlight. At the entrance, a museum guide named Dr Sarah gave everyone a glowing green wristband.",
          "გასულ პარასკევს ოკვუდის სკოლის ოცდაოთხი მოსწავლე თავის ბუნებისმეტყველების მასწავლებელთან, ბატონ გრინთან ერთად მივიდა მუზეუმში. თითოეულ მოსწავლეს ზურგჩანთით მოჰქონდა საძილე ტომარა, კბილის ჯაგრისი, პიჟამა და პატარა ფანარი. შესასვლელთან მუზეუმის გიდმა, დოქტორმა სარამ, ყველას მანათობელი მწვანე სამაჯური დაურიგა."
        ],
        [
          "First, Dr Sarah took the group to the Space Gallery on the top floor. Inside the round planetarium dome, the students lay back in reclining seats and watched a 3D projection of the solar system. They learned how stars are born in giant clouds of gas and saw the rings of Saturn up close.",
          "პირველ რიგში, დოქტორმა სარამ ჯგუფი ბოლო სართულზე მდებარე კოსმოსის გალერეაში აიყვანა. პლანეტარიუმის მრგვალი გუმბათის ქვეშ მოსწავლეები გადასაწევ სავარძლებში მოკალათდნენ და მზის სისტემის სამგანზომილებიან პროექციას უყურეს. მათ გაიგეს, როგორ იბადებიან ვარსკვლავები გაზის გიგანტურ ღრუბლებში და ახლოდან ნახეს სატურნის რგოლები."
        ],
        [
          "At nine o'clock, the group went down to the laboratory for a hands-on workshop. Wearing white lab coats and safety glasses, the students built simple electric circuits with batteries and small bulbs, and mixed baking soda with vinegar to launch tiny model rockets.",
          "ცხრა საათზე ჯგუფი ქვემოთ, ლაბორატორიაში ჩავიდა პრაქტიკული ვორქშოპისთვის. თეთრ ხალათებსა და დამცავ სათვალეებში გამოწყობილმა მოსწავლეებმა ელემენტებითა და პატარა ნათურებით ააწყვეს მარტივი ელექტრული წრედები, ხოლო სოდისა და ძმრის შერევით პაწაწინა სასწავლო რაკეტები გაუშვეს."
        ],
        [
          "At half past ten, the main lights were dimmed, and the students unrolled their sleeping bags in the Ocean Hall, right beneath a thirty-metre model of a blue whale hanging from the ceiling. In the morning, after a breakfast of warm croissants and juice, every student received a 'Junior Scientist' badge.",
          "თერთმეტის ნახევარზე მთავარი განათება ჩააბნელეს და მოსწავლეებმა თავიანთი საძილე ტომრები ოკეანის დარბაზში გაშალეს, პირდაპირ ჭერიდან დაკიდებული ლურჯი ვეშაპის ოცდაათმეტრიანი მაკეტის ქვეშ. დილით, თბილი კრუასანებითა და წვენით საუზმობის შემდეგ, თითოეულმა მოსწავლემ „უმცროსი მეცნიერის“ სამკერდე ნიშანი მიიღო."
        ]
      ],
      glossary: [
        "overnight|ღამისთევით", "wristband|სამაჯური (მაჯის ლენტი)", "dome|გუმბათი",
        "reclining seat|უკან გადასაწევი სავარძელი", "solar system|მზის სისტემა", "hands-on|პრაქტიკული (საკუთარი ხელით კეთება)",
        "electric circuit|ელექტრული წრედი", "bulb|ნათურა", "dim the lights|შუქის ჩაბნელება / დაწევა", "ceiling|ჭერი"
      ],
      questions: [
        "When does the 'Night Explorers' event take place at the museum?|On the first Friday of every month|Every Sunday morning|Every night during summer|Once a year on New Year's Eve",
        "What age group is the event designed for?|Children aged ten to fourteen|Children under five|University professors|Adults over thirty",
        "What did Dr Sarah give each student at the entrance?|A glowing green wristband|A pair of binoculars|A box of chocolates|A heavy textbook",
        "Where did the group watch the 3D projection of the solar system?|Inside the round planetarium dome on the top floor|In the basement cinema|Outside in the garden|In the museum café",
        "Which planet's rings did the students see up close in the planetarium?|The rings of Saturn|The rings of Mars|The rings of Mercury|The rings of Venus",
        "What did the students wear during the laboratory workshop at nine o'clock?|White lab coats and safety glasses|Swimsuits and goggles|Winter coats and hats|Raincoats and boots",
        "What did the students mix to launch tiny model rockets?|Baking soda and vinegar|Salt and cold water|Flour and milk|Oil and lemon juice",
        "In which hall did the students unroll their sleeping bags at 10:30 PM?|In the Ocean Hall|In the Space Gallery|In the gift shop|In the entrance corridor",
        "What was hanging from the ceiling right above their sleeping bags?|A thirty-metre model of a blue whale|An old wooden airplane|A giant chandelier|A dinosaur skeleton",
        "What did every student receive in the morning after breakfast?|A 'Junior Scientist' badge|A free bicycle|A telescope|A gold coin"
      ]
    },
    {
      num: 24, level: "A2",
      icon: "🏮", genre: "მსოფლიო კულტურა",
      title: "სინათლისა და ბუნების ფესტივალები",
      subtitle: "Festivals of Light and Nature Around the World",
      time: "7 წთ",
      paragraphs: [
        [
          "Across different continents, traditional festivals bring communities together to celebrate the beauty of nature and the return of light. Although the customs vary from country to country, they all share a spirit of joy, family unity, and gratitude.",
          "სხვადასხვა კონტინენტზე ტრადიციული ფესტივალები აერთიანებს ადამიანებს ბუნების სილამაზისა და სინათლის დაბრუნების აღსანიშნავად. მიუხედავად იმისა, რომ წეს-ჩვეულებები ქვეყნების მიხედვით განსხვავდება, ყველა მათგანს აერთიანებს სიხარულის, ოჯახური ერთიანობისა და მადლიერების სულისკვეთება."
        ],
        [
          "In Japan, one of the most beloved traditions is 'Hanami', which means 'flower viewing'. Every spring, between late March and early April, cherry blossom trees — called 'sakura' — cover parks and riverbanks in delicate pink and white petals. Weather forecasts even announce the exact 'blossom front' as it moves north across the islands.",
          "იაპონიაში ერთ-ერთი ყველაზე საყვარელი ტრადიციაა „ჰანამი“, რაც „ყვავილების ცქერას“ ნიშნავს. ყოველ გაზაფხულზე, მარტის ბოლოდან აპრილის დასაწყისამდე, ალუბლის ხეები — რომლებსაც „საკურას“ უწოდებენ — პარკებსა და მდინარის ნაპირებს ნაზი ვარდისფერი და თეთრი ფურცლებით ფარავს. ამინდის პროგნოზიც კი აცხადებს „ყვავილობის ფრონტის“ ზუსტ გადაადგილებას კუნძულებზე ჩრდილოეთის მიმართულებით."
        ],
        [
          "Because the blossoms only last for about a week before the wind blows them away, millions of Japanese families and colleagues gather under the trees during the day and in the evening, when paper lanterns light up the branches, to share picnic boxes and appreciate the beauty of the moment.",
          "რადგან ყვავილობა მხოლოდ ერთ კვირას გრძელდება, სანამ ქარი ფურცლებს გაფანტავს, მილიონობით იაპონური ოჯახი და კოლეგა იკრიბება ხეების ქვეშ დღისით და საღამოს, როცა ქაღალდის ფარნები ტოტებს ანათებს, რათა გაიზიარონ პიკნიკის კერძები და დააფასონ წამის სილამაზე."
        ],
        [
          "In Thailand, the festival of 'Loi Krathong' takes place on the evening of the full moon in November, at the end of the rainy season. People make small lotus-shaped baskets out of banana leaves and decorate them with flowers, a candle, and three incense sticks.",
          "ტაილანდში ნოემბრის სავსემთვარეობის საღამოს, წვიმების სეზონის დასასრულს, იმართება ფესტივალი „ლოი კრათონგი“. ხალხი ბანანის ფოთლებისგან ამზადებს ლოტოსის ფორმის პატარა კალათებს და რთავს მათ ყვავილებით, სანთლითა და სამი სურნელოვანი ჩხირით."
        ],
        [
          "At night, thousands of people walk down to the rivers, canals, and lakes. They light the candles, make a quiet wish for good luck in the coming year, and gently place their baskets onto the water. Soon, the dark rivers are covered with a glowing stream of floating lights reflecting the full moon.",
          "ღამით ათასობით ადამიანი ჩადის მდინარეებთან, არხებსა და ტბებთან. ისინი ანთებენ სანთლებს, ჩუმად ჩაუთქვამენ სურვილს მომავალი წლის იღბლისთვის და ფრთხილად უშვებენ კალათებს წყალზე. მალე ბნელი მდინარეები იფარება მცურავი ნათურების მანათობელი ნაკადით, რომელიც სავსე მთვარეს ირეკლავს."
        ]
      ],
      glossary: [
        "unity|ერთიანობა", "gratitude|მადლიერება", "riverbank|მდინარის ნაპირი",
        "petal|ყვავილის ფურცელი", "paper lantern|ქაღალდის ფარანი", "full moon|სავსე მთვარე",
        "lotus-shaped|ლოტოსის ფორმის", "incense stick|სურნელოვანი ჩხირი (საკმევლის)", "make a wish|სურვილის ჩათქმა", "reflect|არეკვლა"
      ],
      questions: [
        "What does the Japanese word 'Hanami' literally mean?|Flower viewing|Winter snow|Autumn harvest|Floating candle",
        "What are cherry blossom trees called in Japan?|Sakura|Lotus|Bamboo|Maple",
        "What special information do Japanese weather forecasts announce in spring?|The exact movement of the 'blossom front' across the islands|The price of picnic baskets|The temperature of the ocean floor|The schedule of autumn festivals",
        "How long do the cherry blossoms usually last on the trees?|For about a week|For three months|For only one hour|All summer",
        "What lights up the cherry tree branches during evening Hanami picnics?|Paper lanterns|Car headlights|Campfires|Candles on boats",
        "When does the 'Loi Krathong' festival take place in Thailand?|On the evening of the full moon in November|In late March and early April|On New Year's Day in January|In the middle of summer",
        "Which season ends in Thailand around the time of Loi Krathong?|The rainy season|The winter snow season|The dry desert season|The spring frost",
        "What material do people use to make the small lotus-shaped baskets?|Banana leaves|Plastic bottles|Heavy oak wood|Glass jars",
        "What three things do they put inside the lotus-shaped baskets?|Flowers, a candle, and three incense sticks|Apples, bread, and cheese|Coins, keys, and letters|Sand, stones, and shells",
        "What do people do just before placing their lighted baskets onto the river?|They make a quiet wish for good luck in the coming year|They jump into the water to swim|They blow out the candle|They throw the basket into the air"
      ]
    },
    {
      num: 25, level: "A2",
      icon: "🚩", genre: "პროფესია და ტურიზმი",
      title: "საფეხმავლო ტურების გიდის ერთი დღე",
      subtitle: "A Day in the Life of a Walking Tour Guide",
      time: "7 წთ",
      paragraphs: [
        [
          "Every summer from June to September, twenty-one-year-old Sofia works as a licensed walking tour guide in the historic city of Prague. She studies history at the university during the winter, so this summer job allows her to share her love of architecture with visitors while earning money for her studies.",
          "ყოველ ზაფხულს, ივნისიდან სექტემბრამდე, ოცდაერთი წლის სოფია მუშაობს ლიცენზირებულ საფეხმავლო ტურების გიდად ისტორიულ ქალაქ პრაღაში. ზამთარში ის უნივერსიტეტში ისტორიას სწავლობს, ამიტომ ეს საზაფხულო სამუშაო საშუალებას აძლევს, დამთვალიერებლებს გაუზიაროს არქიტექტურის სიყვარული და თან სწავლისთვის ფული გამოიმუშაოს."
        ],
        [
          "Sofia's workday begins at half past nine in the Old Town Square. She wears comfortable walking shoes, a badge with her name and languages, and carries a folded yellow umbrella. Even on sunny days, she holds the yellow umbrella up when she stops so that her group of twenty tourists can spot her easily in the crowd.",
          "სოფიას სამუშაო დღე ათის ნახევარზე იწყება ძველი ქალაქის მოედანზე. მას აცვია კომფორტული სასიარულო ფეხსაცმელი, უკეთია ბეიჯი სახელითა და ენების მითითებით, და დააქვს დაკეცილი ყვითელი ქოლგა. მზიან დღეებშიც კი, გაჩერებისას ის მაღლა სწევს ყვითელ ქოლგას, რათა ოცი ტურისტისგან შემდგარმა ჯგუფმა ხალხმრავლობაში ადვილად დაინახოს."
        ],
        [
          "The morning tour starts in front of the famous Astronomical Clock, which was built in 1410. At ten o'clock sharp, the little wooden figures above the clock face move, and the tourists take photographs. Sofia explains the medieval symbols on the clock dial using interesting stories instead of dry dates.",
          "დილის ტური იწყება ცნობილი ასტრონომიული საათის წინ, რომელიც 1410 წელს აშენდა. ზუსტად ათ საათზე საათის ციფერბლატის ზემოთ პატარა ხის ფიგურები მოძრაობას იწყებს და ტურისტები ფოტოებს იღებენ. მშრალი თარიღების ნაცვლად, სოფია საინტერესო ამბებით ხსნის საათზე გამოსახულ შუა საუკუნეების სიმბოლოებს."
        ],
        [
          "Next, she leads the group across the stone Charles Bridge and up the narrow cobblestone streets towards the castle. Halfway up the hill, she always stops for fifteen minutes at a quiet garden terrace where everyone can drink cold water, rest their feet, and enjoy a panoramic view of the red rooftops.",
          "შემდეგ მას ჯგუფი მიჰყავს ქვის კარლის ხიდზე და ვიწრო ქვაფენილიანი ქუჩებით ციხესიმაგრისკენ ადის. გორაკის შუა გზაზე ის ყოველთვის ჩერდება თხუთმეტი წუთით მშვიდ ბაღის ტერასაზე, სადაც ყველას შეუძლია დალიოს ცივი წყალი, დაასვენოს ფეხები და დატკბეს წითელი სახურავების პანორამული ხედით."
        ],
        [
          "At the end of the three-hour tour, Sofia gives her guests a small printed map with her personal recommendations for traditional restaurants, quiet parks, and museum ticket offices. Watching visitors leave with a smile and a deeper understanding of her city is her favourite part of the day.",
          "სამსაათიანი ტურის ბოლოს სოფია სტუმრებს ურიგებს პატარა დაბეჭდილ რუკას, სადაც მონიშნულია მისი პირადი რეკომენდაციები ტრადიციული რესტორნების, მშვიდი პარკებისა და მუზეუმის სალაროების შესახებ. იმის დანახვა, თუ როგორ მიდიან სტუმრები ღიმილითა და მისი ქალაქის უფრო ღრმა გაგებით, მისი დღის საყვარელი ნაწილია."
        ]
      ],
      glossary: [
        "licensed|ლიცენზირებული", "spot (verb)|შემჩნევა / თვალის მოკვრა", "clock face / dial|საათის ციფერბლატი",
        "medieval|შუა საუკუნეების", "halfway|შუა გზაზე", "terrace|ტერასა",
        "panoramic view|პანორამული (ფართო) ხედი", "rooftop|სახურავი", "recommendation|რეკომენდაცია / რჩევა", "understanding|გაგება / აღქმა"
      ],
      questions: [
        "What does Sofia study at the university during the winter?|History|Medicine|Computer science|Music",
        "Where does Sofia's workday begin at half past nine?|In the Old Town Square|At the central train station|At the airport gate|Inside a hotel lobby",
        "Why does Sofia carry a yellow umbrella even on sunny days?|So that her group of tourists can spot her easily in the crowd|Because she is afraid of sunburn|To use it as a walking stick|To sell it to tourists",
        "When was the famous Astronomical Clock built?|In 1410|In 1885|In 1920|In 1650",
        "What happens at the Astronomical Clock at ten o'clock sharp?|Little wooden figures above the clock face move|Water sprays from the clock|A band plays jazz music|The clock lights turn off",
        "How does Sofia make history interesting for the visitors?|She uses interesting stories instead of dry dates|She asks them to read a long textbook|She gives them a written test|She shows them a movie on a screen",
        "Which bridge does the group cross on their way to the castle?|Charles Bridge|London Bridge|Golden Gate Bridge|River Road Bridge",
        "Why does Sofia stop for fifteen minutes at the garden terrace halfway up the hill?|So everyone can drink water, rest their feet, and enjoy the panoramic view|Because the castle is closed until noon|To buy souvenirs at a shop|To wait for a bus",
        "How long does Sofia's walking tour last in total?|Three hours|One hour|Six hours|Thirty minutes",
        "What does Sofia give her guests at the end of the tour?|A small printed map with her personal recommendations|A free umbrella|A bottle of honey|A history book"
      ]
    },
    {
      num: 26, level: "A2",
      icon: "⚙️", genre: "გამოგონებები",
      title: "როგორ შეიქმნა თანამედროვე ველოსიპედი",
      subtitle: "How the Modern Bicycle Was Invented",
      time: "7 წთ",
      paragraphs: [
        [
          "Today, there are more than one billion bicycles in the world, used for daily commuting, sport, and recreation. Yet the bicycle is a relatively young invention compared to the boat or the carriage. Its story began in 1817 in Germany, when a forest official named Karl Drais looked for a way to travel without horses.",
          "დღეს მსოფლიოში მილიარდზე მეტი ველოსიპედია, რომლებიც გამოიყენება ყოველდღიური გადაადგილებისთვის, სპორტისა და დასვენებისთვის. თუმცა, ნავსა თუ ეტლთან შედარებით, ველოსიპედი საკმაოდ ახალგაზრდა გამოგონებაა. მისი ისტორია დაიწყო 1817 წელს გერმანიაში, როდესაც ტყის მოხელემ, კარლ დრაისმა, ცხენების გარეშე გადაადგილების გზის ძებნა დაიწყო."
        ],
        [
          "Drais built a two-wheeled wooden frame with a leather seat and a steering bar. He called it the 'Laufmaschine', or 'running machine'. It had no pedals, no chain, and no brakes! Riders sat on the seat and pushed their feet rapidly against the ground, gliding twice as fast as a person walking.",
          "დრაისმა ააგო ორბორბლიანი ხის ჩარჩო ტყავის დასაჯდომითა და საჭის ძელით. მან მას „სარბენი მანქანა“ უწოდა. მას არ ჰქონდა არც პედლები, არც ჯაჭვი და არც მუხრუჭები! მხედრები სხდებოდნენ სკამზე და ფეხებს სწრაფად ჰკრავდნენ მიწას, რის წყალობითაც ქვეითად მოსიარულეზე ორჯერ სწრაფად მიჰქროდნენ."
        ],
        [
          "In the 1860s, French blacksmiths attached metal pedals directly to the front wheel hub. People called these machines 'boneshakers' because the heavy iron frame and wooden wheels with iron rims vibrated terribly on cobblestone streets.",
          "1860-იან წლებში ფრანგმა მჭედლებმა ლითონის პედლები პირდაპირ წინა ბორბლის ღერძზე დაამაგრეს. ხალხმა ამ მანქანებს „ძვლების შემანჯღრეველი“ შეარქვა, რადგან მძიმე რკინის ჩარჩო და რკინაშემოკრული ხის ბორბლები ქვაფენილიან ქუჩებზე საშინლად ზანზარებდა."
        ],
        [
          "To make bicycles go faster, designers in the 1870s made the front wheel larger and larger, creating the famous 'Penny-Farthing'. Its front wheel was up to one and a half metres tall, while the back wheel was tiny. Because the rider sat so high above the centre of gravity, hitting even a small stone could throw the rider headfirst over the handlebars.",
          "ველოსიპედის სიჩქარის გასაზრდელად 1870-იან წლებში კონსტრუქტორებმა წინა ბორბალი სულ უფრო და უფრო გაადიდეს, რითაც შექმნეს ცნობილი „პენი-ფართინგი“. მისი წინა ბორბალი მეტრ-ნახევრამდე სიმაღლის იყო, უკანა კი — პაწაწინა. რადგან მხედარი სიმძიმის ცენტრიდან ასე მაღლა იჯდა, პატარა ქვაზე გადავლასაც კი შეეძლო ადამიანის საჭის თავზე გადასროლა."
        ],
        [
          "The great breakthrough came in 1885 when British inventor John Kemp Starley introduced the 'Rover Safety Bicycle'. It had two wheels of equal size and a metal chain that turned the back wheel. Three years later, a Scottish vet named John Boyd Dunlop invented rubber tyres filled with air, making cycling smooth, safe, and comfortable for everyone.",
          "დიდი გარდატეხა მოხდა 1885 წელს, როდესაც ბრიტანელმა გამომგონებელმა ჯონ კემპ სტარლიმ წარადგინა „უსაფრთხო ველოსიპედი როვერი“. მას ჰქონდა ორი თანაბარი ზომის ბორბალი და ლითონის ჯაჭვი, რომელიც უკანა ბორბალს ატრიალებდა. სამი წლის შემდეგ შოტლანდიელმა ვეტერინარმა ჯონ ბოიდ დანლოპმა გამოიგონა ჰაერით გაბერილი რეზინის საბურავები, რამაც ველოსიპედით სიარული ყველასთვის რბილი, უსაფრთხო და კომფორტული გახადა."
        ]
      ],
      glossary: [
        "commuting|სამსახურში/სასწავლებელში ყოველდღიური მგზავრობა", "steering bar|საჭის ძელი", "blacksmith|მჭედელი",
        "wheel hub|ბორბლის მორგვი / ცენტრი", "iron rim|რკინის ფერსო (ბორბლის გარსი)", "vibrate|ვიბრირება / ზანზარი",
        "centre of gravity|სიმძიმის ცენტრი", "headfirst|თავით წინ", "breakthrough|გარღვევა / დიდი მიღწევა", "air-filled tyre|ჰაერით გაბერილი საბურავი"
      ],
      questions: [
        "Approximately how many bicycles are there in the world today?|More than one billion|Around ten million|Fifty million|One hundred thousand",
        "When and where did Karl Drais build the first 'running machine'?|In 1817, in Germany|In 1885, in Britain|In 1750, in France|In 1910, in America",
        "What was missing from Karl Drais's wooden machine?|Pedals, a chain, and brakes|Wheels and a seat|A steering bar|A wooden frame",
        "Where did French blacksmiths attach the pedals in the 1860s?|Directly to the front wheel hub|To the back wheel|Under the leather seat|On the handlebars",
        "Why were the 1860s bicycles called 'boneshakers'?|Because the iron frame and wooden wheels vibrated terribly on cobblestones|Because they were made of animal bones|Because they only rode on snow|Because they had no seat",
        "How tall was the front wheel of the 'Penny-Farthing' in the 1870s?|Up to one and a half metres tall|Only twenty centimetres tall|Three metres tall|The same size as the back wheel",
        "What was the main danger of riding a 'Penny-Farthing'?|Hitting a small stone could throw the rider headfirst over the handlebars|The rubber tyres often exploded|The chain broke easily|It was too slow to climb hills",
        "Which wheel did the metal chain turn on John Kemp Starley's 1885 'Safety Bicycle'?|The back wheel|The front wheel|Both wheels at once|A third small wheel",
        "What was John Boyd Dunlop's profession?|He was a Scottish vet (veterinarian)|He was a German forest official|He was a French blacksmith|He was a train driver",
        "What did John Boyd Dunlop invent three years after 1885?|Rubber tyres filled with air|The first metal chain|Electric bicycle lights|The bicycle bell"
      ]
    },
    {
      num: 27, level: "A2",
      icon: "❄️", genre: "ბუნების სტიქია",
      title: "დიდი ქარბუქი ფაინ-ველის ხეობაში",
      subtitle: "The Great Blizzard in Pine Valley",
      time: "7 წთ",
      paragraphs: [
        [
          "Pine Valley is a peaceful village of eighty houses situated high in the northern mountains. The residents are used to cold winters, but the blizzard that struck the valley in mid-January was the heaviest anyone had seen in forty years.",
          "ფაინ-ველი ოთხმოცი სახლისგან შემდგარი მშვიდი სოფელია, რომელიც მაღლა, ჩრდილოეთის მთებში მდებარეობს. მცხოვრებლები მიჩვეულნი არიან ცივ ზამთარს, მაგრამ ქარბუქი, რომელიც ხეობას იანვრის შუა რიცხვებში დაატყდა თავს, ყველაზე ძლიერი აღმოჩნდა ბოლო ორმოცი წლის განმავლობაში."
        ],
        [
          "The snow began falling on Monday afternoon, accompanied by a howling north wind. Within twelve hours, deep snowdrifts blocked the only mountain pass connecting the village to the town below. At midnight, a heavy pine tree fell onto the power line, and every house in the valley went dark.",
          "თოვამ ორშაბათ ნაშუადღევს დაიწყო, რასაც თან ახლდა ჩრდილოეთის მკივანი ქარი. თორმეტ საათში თოვლის ღრმა ნამქერმა ჩაკეტა ერთადერთი უღელტეხილი, რომელიც სოფელს ქვემოთ მდებარე ქალაქთან აკავშირებდა. შუაღამისას მძიმე ფიჭვის ხე დაეცა ელექტროგადამცემ ხაზს და ხეობის ყველა სახლში შუქი ჩაქრა."
        ],
        [
          "Fortunately, the villagers knew how to look after themselves and each other. Every household had stacks of dry firewood, oil lamps, candles, and basements stocked with potatoes, flour, and jars of preserved fruit. People lit their cast-iron stoves, which kept the rooms warm and allowed them to boil water and bake bread.",
          "საბედნიეროდ, სოფლის მცხოვრებლებმა იცოდნენ, როგორ ეზრუნათ საკუთარ თავსა და ერთმანეთზე. ყველა ოჯახს ჰქონდა მშრალი შეშის მარაგი, ნავთის ლამპები, სანთლები და სარდაფები, რომლებიც სავსე იყო კარტოფილით, ფქვილითა და დაკონსერვებული ხილის ქილებით. ხალხმა დაანთო თუჯის ღუმელები, რაც ოთახებს ათბობდა და წყლის ადუღებისა და პურის გამოცხობის საშუალებას იძლეოდა."
        ],
        [
          "On Wednesday morning, the wind finally died down and the sun came out. The village teacher and ten young volunteers put on snowshoes and walked from house to house to check on the elderly neighbours. With wide wooden shovels, they dug narrow tunnels through the snowdrifts between the front doors and the village well.",
          "ოთხშაბათ დილით ქარი საბოლოოდ ჩადგა და მზე გამოვიდა. სოფლის მასწავლებელმა და ათმა ახალგაზრდა მოხალისემ ჩაიცვეს თოვლის ფეხსაცმელები (თხილამურა-საფეხურები) და კარდაკარ შემოიარეს ხანდაზმული მეზობლების მოსაკითხად. განიერი ხის ნიჩბებით მათ თოვლის ნამქერში ვიწრო გვირაბები გათხარეს სახლების კარებსა და სოფლის ჭას შორის."
        ],
        [
          "On Thursday afternoon, the loud roar of engines echoed across the valley. Two orange snowploughs and an emergency repair truck arrived through the mountain pass. By evening, the power line was fixed and the streetlamps shone brightly again, while the villagers gathered in the school hall to share hot soup with the rescue workers.",
          "ხუთშაბათ ნაშუადღევს ხეობაში ძრავების ხმამაღალი გუგუნი გაისმა. უღელტეხილიდან შემოვიდა ორი ნარინჯისფერი თოვლსაწმენდი მანქანა და საავარიო-სარემონტო სატვირთო. საღამოსთვის ელექტროგადამცემი ხაზი შეკეთდა და ქუჩის ლამპიონები კვლავ აკაშკაშდა, სოფლის მცხოვრებლები კი სკოლის დარბაზში შეიკრიბნენ მაშველებისთვის ცხელი წვნიანის გასაზიარებლად."
        ]
      ],
      glossary: [
        "blizzard|ძლიერი ქარბუქი", "howling wind|მკივანი / მღრიალე ქარი", "snowdrift|თოვლის ნამქერი (ქარისგან დახვავებული)",
        "mountain pass|მთის უღელტეხილი", "power line|ელექტროგადამცემი ხაზი", "firewood|საშეშე მერქანი / შეშა",
        "cast-iron stove|თუჯის ღუმელი", "die down|ჩადგომა / მიწყნარება (ქარის)", "snowshoes|თოვლზე სასიარულო სპეციალური ფეხსაცმელი", "snowplough|თოვლსაწმენდი მანქანა"
      ],
      questions: [
        "How many houses are there in the mountain village of Pine Valley?|Eighty houses|Fifteen houses|Five hundred houses|Twenty houses",
        "When did the heavy blizzard strike the valley?|In mid-January|In late March|In November|In December before Christmas",
        "What blocked the mountain pass within twelve hours?|Deep snowdrifts|A fallen bridge|A flooded river|Large rocks",
        "Why did every house in the valley lose electricity at midnight?|A heavy pine tree fell onto the power line|The power station ran out of coal|Someone turned off the main switch|Lightning struck the school",
        "Where did the villagers keep their stores of potatoes, flour, and preserved fruit?|In their basements|On the rooftops|In the school gym|Inside their cars",
        "How did the villagers heat their rooms and bake bread without electricity?|They lit their cast-iron stoves with dry firewood|They used solar panels|They used electric heaters|They lit campfires in the street",
        "When did the wind finally die down and the sun come out?|On Wednesday morning|On Monday night|On Tuesday afternoon|After two weeks",
        "Why did the teacher and ten young volunteers walk from house to house?|To check on the elderly neighbours|To collect money for the road|To deliver newspapers|To look for a lost dog",
        "Where did the volunteers dig narrow tunnels through the snowdrifts?|Between the front doors and the village well|Up to the mountain peak|Inside the pine forest|Around the lake",
        "Where did the villagers gather on Thursday evening to thank the rescue workers?|In the school hall|At the railway station|In the open square|At the hotel"
      ]
    },
    {
      num: 28, level: "A2",
      icon: "🧠", genre: "ჯანმრთელობა",
      title: "ძილისა და მეხსიერების კავშირი",
      subtitle: "How a Good Night's Sleep Strengthens Memory",
      time: "7 წთ",
      paragraphs: [
        [
          "Before an important examination, many students make the mistake of staying awake until two or three in the morning, reading their textbooks again and again while drinking strong coffee. Although they feel they are working hard, brain researchers say this habit actually harms their test performance.",
          "მნიშვნელოვანი გამოცდის წინ ბევრი სტუდენტი უშვებს შეცდომას და ღამის ორ ან სამ საათამდე ფხიზლობს, კითხულობს სახელმძღვანელოებს თავიდან და თავიდან და თან მაგარ ყავას სვამს. მიუხედავად იმისა, რომ მათ ჰგონიათ, ბევრს შრომობენ, ტვინის მკვლევრები ამბობენ, რომ ეს ჩვევა სინამდვილეში აუარესებს გამოცდის შედეგს."
        ],
        [
          "To understand why, we can compare the human brain to a busy library. During the day, as we read books, listen to lectures, and practice new skills, information arrives at the front desk of the library. This temporary area is called short-term memory, and it can only hold a limited amount of data at one time.",
          "იმის გასაგებად, თუ რატომ ხდება ასე, შეგვიძლია ადამიანის ტვინი შევადაროთ დატვირთულ ბიბლიოთეკას. დღის განმავლობაში, როდესაც ვკითხულობთ წიგნებს, ვუსმენთ ლექციებს და ვავარჯიშებთ ახალ უნარებს, ინფორმაცია გროვდება ბიბლიოთეკის მიმღებ მაგიდაზე. ამ დროებით ადგილს ეწოდება მოკლევადიანი მეხსიერება და მას ერთდროულად მხოლოდ შეზღუდული რაოდენობის მონაცემების დატევა შეუძლია."
        ],
        [
          "When we go to sleep at night, our body rests, but our brain remains remarkably active. During deep sleep, the 'librarians' inside the brain sort through everything we learned during the day, connect new facts with old knowledge, and place the important memories onto permanent shelves in long-term storage.",
          "როდესაც ღამით ვიძინებთ, ჩვენი სხეული ისვენებს, მაგრამ ტვინი საოცრად აქტიური რჩება. ღრმა ძილის დროს ტვინის „ბიბლიოთეკარები“ ახარისხებენ ყველაფერს, რაც დღის განმავლობაში ვისწავლეთ, აკავშირებენ ახალ ფაქტებს ძველ ცოდნასთან და მნიშვნელოვან მოგონებებს გრძელვადიანი საცავის მუდმივ თაროებზე ათავსებენ."
        ],
        [
          "In a famous university experiment, two groups of students were asked to memorize a list of forty foreign words. The first group was tested in the evening after twelve hours of staying awake, while the second group studied the words in the evening, slept for eight hours, and took the test the next morning. The second group remembered thirty percent more words!",
          "ერთ ცნობილ საუნივერსიტეტო ექსპერიმენტში სტუდენტების ორ ჯგუფს სთხოვეს ორმოცი უცხო სიტყვისგან შემდგარი სიის დამახსოვრება. პირველი ჯგუფი გამოსცადეს საღამოს, თორმეტსაათიანი სიფხიზლის შემდეგ, ხოლო მეორე ჯგუფმა სიტყვები საღამოს ისწავლა, რვა საათი ეძინა და ტესტი მეორე დილით დაწერა. მეორე ჯგუფმა ოცდაათი პროცენტით მეტი სიტყვა გაიხსენა!"
        ],
        [
          "Sleep scientists also advise turning off bright computer and smartphone screens at least one hour before bedtime. The blue light from screens tricks the brain into thinking it is still daytime. A quiet room, a cool temperature, and eight hours of uninterrupted sleep are the best tools for any learner.",
          "ძილის მკვლევრები ასევე გვირჩევენ კომპიუტერისა და სმარტფონის კაშკაშა ეკრანების გამორთვას დაძინებამდე მინიმუმ ერთი საათით ადრე. ეკრანების ლურჯი ნათება ატყუებს ტვინს და აფიქრებინებს, რომ ჯერ კიდევ დღეა. მშვიდი ოთახი, გრილი ტემპერატურა და რვასაათიანი უწყვეტი ძილი საუკეთესო იარაღია ნებისმიერი მოსწავლისთვის."
        ]
      ],
      glossary: [
        "stay awake|სიფხიზლე / არდაძინება", "harm|ზიანის მიყენება / გაფუჭება", "temporary|დროებითი",
        "limited amount|შეზღუდული რაოდენობა", "remarkably|საოცრად / გამორჩეულად", "sort through|დახარისხება / გადარჩევა",
        "permanent|მუდმივი", "memorize|ზეპირად დამახსოვრება", "trick (verb)|მოტყუება / შეცდომაში შეყვანა", "uninterrupted|უწყვეტი"
      ],
      questions: [
        "What mistake do many students make before an important examination?|Staying awake until 2 or 3 AM drinking strong coffee|Going to bed at ten o'clock|Reviewing their notes in the afternoon|Eating a healthy breakfast",
        "What do the authors compare the human brain to?|A busy library|A fast train|A computer screen|A clockwork tower",
        "Why is short-term memory like the front desk of a library?|It is a temporary area that can only hold a limited amount of data|It keeps books forever for a hundred years|It is always closed during the day|Nobody is allowed to use it",
        "What happens to our brain when we go to sleep at night?|Our body rests, but our brain remains remarkably active|It shuts down completely until morning|It erases everything we learned|It only controls our breathing",
        "What does the brain do during deep sleep?|It sorts new facts and moves important memories into long-term storage|It invents new languages|It makes us feel hungry|It forgets old knowledge",
        "In the university experiment, how many foreign words did the students have to memorize?|Forty foreign words|Ten foreign words|Five hundred foreign words|One hundred numbers",
        "How much better did the group that slept for eight hours perform on the test?|They remembered thirty percent more words|They remembered the exact same number of words|They forgot half of the words|They finished ten minutes slower",
        "When should learners turn off computer and smartphone screens before bed?|At least one hour before bedtime|Five seconds before closing their eyes|Only in the morning|They should leave them on all night",
        "Why is the blue light from screens harmful before sleep?|It tricks the brain into thinking it is still daytime|It makes the room too hot|It uses too much electricity|It damages the keyboard",
        "What three conditions do scientists recommend for the best sleep?|A quiet room, a cool temperature, and eight hours of uninterrupted sleep|A hot room, bright lights, and loud music|Four hours of sleep after drinking coffee|Sleeping with the television on"
      ]
    },
    {
      num: 29, level: "A2",
      icon: "🐢", genre: "გარემოს დაცვა",
      title: "ზღვის კუს გადარჩენა კუნძულზე",
      subtitle: "The Rescue of a Green Sea Turtle",
      time: "7 წთ",
      paragraphs: [
        [
          "Every summer, female green sea turtles swim thousands of kilometres across the Mediterranean Sea to lay their eggs on the quiet sandy beaches of Zakynthos, a Greek island. Because sea turtles are an endangered species, a team of marine biologists and volunteers patrols the beaches every morning at dawn.",
          "ყოველ ზაფხულს მდედრი მწვანე ზღვის კუები ხმელთაშუა ზღვაში ათასობით კილომეტრს გაცურავენ, რათა კვერცხები დადონ საბერძნეთის კუნძულ ზაკინთოსის მშვიდ ქვიშიან პლაჟებზე. რადგან ზღვის კუები გადაშენების პირას მყოფი სახეობაა, საზღვაო ბიოლოგებისა და მოხალისეების გუნდი ყოველ დილით, გამთენიისას, პატრულირებს სანაპიროზე."
        ],
        [
          "One morning in August, two volunteers named Nikos and Helen were walking near the rocky cove at the end of the bay. Through her binoculars, Helen spotted a dark shape floating in the shallow water between two large rocks. When they waded into the waist-deep water, they saw it was an adult sea turtle.",
          "აგვისტოს ერთ დილას ორი მოხალისე, ნიკოსი და ჰელენი, ყურის ბოლოში მდებარე კლდოვან უბესთან მიდიოდა. დურბინდით ჰელენმა შეამჩნია მუქი სილუეტი, რომელიც ორ დიდ კლდეს შორის თავთხელ წყალში ტივტივებდა. როდესაც წელამდე წყალში შევიდნენ, დაინახეს, რომ ეს ზრდასრული ზღვის კუ იყო."
        ],
        [
          "The turtle was trying to dive, but a heavy piece of broken green fishing net was tangled tightly around its left front flipper and neck. The exhausted animal could barely lift its head above the waves to breathe. Nikos held the turtle's shell steady while Helen used special safety shears from her rescue kit to cut the nylon ropes.",
          "კუ ყვინთვას ცდილობდა, მაგრამ მის წინა მარცხენა ფარფლსა და კისერზე მჭიდროდ იყო შემოხვეული გაწყვეტილი მწვანე სათევზაო ბადის მძიმე ნაგლეჯი. ძალაგამოცლილი ცხოველი ტალღებს ზემოთ თავს ძლივს სწევდა ჩასასუნთქად. ნიკოსმა კუს ბაკანი მყარად დაიჭირა, ჰელენმა კი სამაშველო ნაკრებიდან სპეციალური უსაფრთხო მაკრატლით გადაჭრა ნეილონის თოკები."
        ],
        [
          "Once the net was removed, they carried the turtle gently onto the wet sand in the shade of the cliff. The net had left a small cut on the flipper, but thankfully the bone was not broken. Helen cleaned the wound with iodine, and Nikos measured the shell, which was eighty centimetres long.",
          "როგორც კი ბადე მოაშორეს, მათ კუ ფრთხილად გამოიყვანეს კლდის ჩრდილქვეშ სველ ქვიშაზე. ბადეს ფარფლზე პატარა ჭრილობა დაეტოვებინა, მაგრამ საბედნიეროდ ძვალი გატეხილი არ იყო. ჰელენმა ჭრილობა იოდით დაუმუშავა, ნიკოსმა კი ბაკანი გაზომა, რომელიც ოთხმოცი სანტიმეტრის სიგრძის აღმოჩნდა."
        ],
        [
          "Before releasing the turtle, they attached a small numbered metal tag to the edge of its flipper so scientists could recognize it in the future. As soon as they placed the turtle back near the water, it moved its strong flippers, glided into the clear blue waves, and raised its head once as if to say thank you before diving into the deep sea.",
          "გაშვებამდე მათ კუს ფარფლის კიდეზე პატარა დანომრილი ლითონის ნიშანი მიამაგრეს, რათა მომავალში მეცნიერებს მისი ცნობა შეძლებოდათ. როგორც კი კუ წყალთან დასვეს, მან ძლიერი ფარფლები აამოძრავა, სუფთა ლურჯ ტალღებში შესრიალდა და ღრმა ზღვაში ჩაყვინთვამდე ერთხელ თავი ამოსწია, თითქოს მადლობას იხდისო."
        ]
      ],
      glossary: [
        "endangered species|გადაშენების პირას მყოფი სახეობა", "dawn|გამთენია / განთიადი", "cove|პატარა ყურე / უბე",
        "binoculars|დურბინდი / ბინოკლი", "waist-deep|წელამდე სიღრმის", "tangled|ახლართული / შემოხვეული",
        "flipper|ფარფლი", "safety shears|უსაფრთხო სამაშველო მაკრატელი", "iodine|იოდი (ანტისეპტიკი)", "metal tag|ლითონის სანიშნე"
      ],
      questions: [
        "Why do female green sea turtles swim to the beaches of Zakynthos every summer?|To lay their eggs on the quiet sandy beaches|To hide from winter snow|To eat seaweed in the harbour|To sleep on the rocks",
        "When do the marine biologists and volunteers patrol the beaches?|Every morning at dawn|Only at midnight|Once a month|In the afternoon",
        "How did Helen first spot the turtle in the shallow water?|Through her binoculars|From a helicopter|While diving underwater|A fisherman told her",
        "How deep was the water where they found the turtle?|Waist-deep|Ten metres deep|Only ankle-deep|Over their heads",
        "Why couldn't the turtle dive or swim properly?|A broken fishing net was tangled around its flipper and neck|It was trapped inside a wooden box|Its shell was cracked|The water was too warm",
        "What tool did Helen use to cut the nylon ropes of the net?|Special safety shears from her rescue kit|A sharp stone from the beach|A kitchen fork|A saw",
        "Where did they carry the turtle to examine its wound?|Onto the wet sand in the shade of the cliff|To a veterinary hospital in Athens|Into a hot tent|Onto a fishing boat",
        "How long was the sea turtle's shell when Nikos measured it?|Eighty centimetres long|Twenty centimetres long|Two metres long|Fifty centimetres long",
        "Why did they attach a small numbered metal tag to the turtle's flipper?|So scientists could recognize it in the future|To make the turtle swim faster|To show how heavy it was|To stop nets from catching it",
        "What did the turtle do just before diving into the deep sea?|It raised its head once above the waves|It climbed back onto the sand|It ate a fish from Nikos's hand|It closed its eyes and slept"
      ]
    },
    {
      num: 30, level: "A2",
      icon: "🛶", genre: "გეოგრაფია და ტრადიცია",
      title: "სამხრეთ-აღმოსავლეთ აზიის მცურავი ბაზრები",
      subtitle: "The Colourful Floating Markets of the Mekong Delta",
      time: "7 წთ",
      paragraphs: [
        [
          "In the Mekong Delta of Vietnam and the central plains of Thailand, hundreds of rivers and narrow canals cross the green landscape like a giant web. For centuries, before modern highways and bridges were built, wooden boats were the only way for villagers to travel and transport their harvest.",
          "ვიეტნამის მეკონგის დელტასა და ტაილანდის ცენტრალურ დაბლობებზე ასობით მდინარე და ვიწრო არხი გიგანტური ქსელივით კვეთს მწვანე ლანდშაფტს. საუკუნეების განმავლობაში, თანამედროვე მაგისტრალებისა და ხიდების აშენებამდე, ხის ნავები სოფლის მცხოვრებთათვის მგზავრობისა და მოსავლის გადაზიდვის ერთადერთი საშუალება იყო."
        ],
        [
          "Where several canals met, farmers gathered in their boats to trade rice, fruit, and fish. This tradition gave birth to the famous 'floating markets' that still operate today. The largest markets begin at five in the morning, while the mist is still rising from the water and the air is cool.",
          "იქ, სადაც რამდენიმე არხი ერთმანეთს კვეთდა, ფერმერები თავიანთი ნავებით იკრიბებოდნენ ბრინჯის, ხილისა და თევზის გასაცვლელად. ამ ტრადიციამ დაუდო სათავე ცნობილ „მცურავ ბაზრებს“, რომლებიც დღესაც მოქმედებს. ყველაზე დიდი ბაზრები დილის ხუთ საათზე იწყება, სანამ წყლიდან ჯერ კიდევ ნისლი ადის და ჰაერი გრილია."
        ],
        [
          "Because hundreds of boats crowd into the same canal, how can a buyer see what each large boat is selling from a distance? The farmers solved this problem in a very clever way: every boat has a tall bamboo pole at the front, and the seller ties samples of their goods — such as a pineapple, a pumpkin, or a bunch of sweet potatoes — to the top of the pole like a flag!",
          "რადგან ერთსა და იმავე არხში ასობით ნავი იყრის თავს, როგორ შეუძლია მყიდველს შორიდანვე დაინახოს, რას ყიდის თითოეული დიდი ნავი? ფერმერებმა ეს ამოცანა ძალიან ჭკვიანურად გადაჭრეს: ყველა ნავს წინა მხარეს აქვს მაღალი ბამბუკის ჭოკი, რომლის წვერზეც გამყიდველი დროშასავით ჰკიდებს თავისი საქონლის ნიმუშს — მაგალითად ანანასს, გოგრას ან ტკბილი კარტოფილის კონას!"
        ],
        [
          "Smaller rowboats, paddled mostly by women wearing conical straw hats, weave skillfully between the big cargo boats. Some of these small boats are 'floating kitchens' equipped with charcoal stoves and steaming pots. They sell hot noodle soup, iced coffee with sweet condensed milk, and grilled bananas to hungry farmers and tourists.",
          "უფრო პატარა ნიჩბიანი ნავები, რომლებსაც ძირითადად კონუსური ჩალის ქუდებით შემოსილი ქალები მართავენ, ოსტატურად დაცურავენ დიდ სატვირთო ნავებს შორის. ამ პატარა ნავებიდან ზოგიერთი „მცურავი სამზარეულოა“, რომელიც აღჭურვილია ნახშირის ქურებითა და ოხშივარადენილი ქვაბებით. ისინი მშიერ ფერმერებსა და ტურისტებს სთავაზობენ ცხელ ატრიის წვნიანს, ცივ ყავას ტკბილი შედედებული რძით და შემწვარ ბანანს."
        ],
        [
          "By ten o'clock in the morning, when the tropical sun climbs high in the sky, most of the trading is finished. The farmers untie the samples from their bamboo poles, start their boat engines, and return to their quiet riverside villages until the next market day.",
          "დილის ათი საათისთვის, როდესაც ტროპიკული მზე ცაზე მაღლა ადის, ვაჭრობის უდიდესი ნაწილი უკვე დასრულებულია. ფერმერები ბამბუკის ჭოკებიდან ხსნიან ნიმუშებს, ქოქავენ ნავის ძრავებს და მომდევნო საბაზრო დღემდე თავიანთ მშვიდ, მდინარისპირა სოფლებში ბრუნდებიან."
        ]
      ],
      glossary: [
        "delta|მდინარის დელტა (შესართავი)", "plain|დაბლობი / ვაკე", "trade (verb)|ვაჭრობა / გაცვლა",
        "mist|თხელი ნისლი (წყლის ზედაპირზე)", "bamboo pole|ბამბუკის ჭოკი/ჯოხი", "sample|ნიმუში",
        "conical hat|კონუსის ფორმის ქუდი", "weave between|ოსტატურად გაძრომა/გაცურვა შორის", "charcoal stove|ხის ნახშირის ქურა", "condensed milk|შედედებული ტკბილი რძე"
      ],
      questions: [
        "Why were wooden boats historically the main way to travel in the Mekong Delta?|Because hundreds of rivers and canals crossed the land before highways and bridges were built|Because horses were not allowed in the villages|Because the mountains were too steep for cars|Because the land was covered in snow",
        "Where did the floating markets originally form?|Where several canals met|In the middle of the deep ocean|On top of high hills|Inside large stone buildings",
        "What time do the largest floating markets begin?|At five in the morning|At ten in the morning|At noon|At sunset",
        "How do buyers see from a distance what a large boat is selling?|The seller ties samples of their goods to the top of a tall bamboo pole|The seller shouts through a loudspeaker|Every boat is painted a different colour|They use big neon signs",
        "What examples of goods tied to the bamboo poles are mentioned in the text?|A pineapple, a pumpkin, or a bunch of sweet potatoes|Fish, crabs, and shrimp|Shoes, hats, and coats|Pots, pans, and knives",
        "What do the women paddling the smaller rowboats wear on their heads?|Conical straw hats|Blue helmets|Black woollen berets|Red headscarves",
        "What are the 'floating kitchens' equipped with?|Charcoal stoves and steaming pots|Electric ovens and fridges|Solar panels and microwaves|Campfires on sand",
        "What cold drink is sold from the floating kitchen boats?|Iced coffee with sweet condensed milk|Orange juice with honey|Cold apple tea|Lemonade with mint",
        "By what time is most of the trading at the floating market finished?|By ten o'clock in the morning|By five in the afternoon|By midnight|By seven in the morning",
        "Why does the market finish by mid-morning?|Because the tropical sun climbs high and it becomes very hot|Because the canal water dries up at noon|Because a storm arrives every day at ten|Because the bridges close"
      ]
    }
  ];

  // გავაერთიანოთ A1 (15 ტექსტი) და A2 (15 ტექსტი) App.ReadingDataA-ში (სულ 30 ტექსტი / 300 კითხვა A დონეზე!)
  App.ReadingDataA = (App.ReadingDataA1 || []).concat(App.ReadingDataA2);
})(window);