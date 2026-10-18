/**
 * GRAMMAR-A.JS — A1 (15 თემა) და A2 (15 თემა) = 30 თემა
 * თითოეულ თემაში: 8 ორენოვანი მაგალითი, 4 ფორმულა, 3 შეცდომის გარჩევა და 20 ტესტი (სულ 600 ტესტი).
 * კომპაქტური ტესტის ფორმატი: "კითხვა|სწორი_პასუხი|არასწორი1|არასწორი2|არასწორი3"
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  App.GrammarDataA = [
    // =========================================================================
    // A1 LEVEL — TOPICS 1 TO 15 (20 DRILLS EACH = 300 DRILLS)
    // =========================================================================
    {
      num: 1, level: 'A1',
      title: 'ზმნა „To Be“ (am / is / are) აწმყო დროში',
      subtitle: 'The Verb "To Be" — Present Simple',
      rule: 'ინგლისურ წინადადებაში ყოველთვის საჭიროა ზმნა. როდესაც მოქმედება არ გვაქვს და ვახასიათებთ ადამიანს, საგანს, მდგომარეობას ან მდებარეობას, ვიყენებთ დამხმარე ზმნა To Be-ს სამ ფორმას: am (მხოლოდ I-სთან), is (მხოლობითში: he, she, it) და are (მრავლობითში და you-სთან: we, you, they).',
      formulas: [
        ['+ დადებითი', 'I am (I\'m) | He/She/It is (He\'s) | We/You/They are (We\'re)', 'She is a doctor. / They are at home.'],
        ['- უარყოფითი', 'I am not | He/She/It is not (isn\'t) | We/You/They are not (aren\'t)', 'He isn\'t tired. / We aren\'t late.'],
        ['? კითხვითი', 'Am I...? | Is he/she/it...? | Are we/you/they...?', 'Are you a student? / Is it cold outside?'],
        ['💡 მოკლე პასუხი', 'Yes, I am. / No, I\'m not. | Yes, she is. / No, she isn\'t.', 'დადებით მოკლე პასუხში შემოკლება არ გამოიყენება (Yes, I am).']
      ],
      examples: [
        ['I am twenty years old and I live in a big city.', 'მე ოცი წლის ვარ და დიდ ქალაქში ვცხოვრობ.'],
        ['Anna is a very talented teacher at our school.', 'ანა ძალიან ნიჭიერი მასწავლებელია ჩვენს სკოლაში.'],
        ['The weather is warm and sunny today.', 'დღეს თბილი და მზიანი ამინდია.'],
        ['We are happy to see our old friends.', 'ბედნიერები ვართ ჩვენი ძველი მეგობრების ნახვით.'],
        ['My keys are not on the kitchen table.', 'ჩემი გასაღებები სამზარეულოს მაგიდაზე არ არის.'],
        ['He isn\'t at work today because he is on holiday.', 'ის დღეს სამსახურში არ არის, რადგან შვებულებაშია.'],
        ['Are these books interesting for beginners?', 'არის ეს წიგნები საინტერესო დამწყებთათვის?'],
        ['Where is the nearest bus stop?', 'სად არის უახლოესი ავტობუსის გაჩერება?']
      ],
      mistakes: [
        ['✗ She a student at the university.', '✓ She is a student at the university.'],
        ['✗ They is my best friends.', '✓ They are my best friends.'],
        ['✗ Are you hungry? — Yes, I\'m.', '✓ Are you hungry? — Yes, I am.']
      ],
      drills: [
        'David ___ my younger brother.|is|am|are|be',
        '___ your parents at home right now?|Are|Is|Am|Be',
        'I ___ from Spain; I am from Italy.|am not|isn\'t|aren\'t|not am',
        'The shops ___ open on Sunday evenings.|aren\'t|isn\'t|am not|not are',
        'Is Sarah a nurse? — Yes, she ___.|is|she\'s|are|am',
        'How old ___ your children?|are|is|am|be',
        'The weather ___ very nice today.|is|are|am|been',
        'Look! Those bags ___ very heavy.|are|is|am|be',
        'My brother and I ___ good tennis players.|are|am|is|was',
        'Emily ___ at home; her children ___ at school.|is / are|are / is|is / is|am / are',
        'I ___ a taxi driver; my sister is a nurse.|am|is|are|be',
        '___ the hotel room clean and comfortable?|Is|Are|Am|Do',
        'You ___ late! The lesson started ten minutes ago.|are|is|am|be',
        'Toronto ___ the capital of Canada; Ottawa is.|isn\'t|aren\'t|am not|not is',
        'Where ___ my glasses? I can\'t find them.|are|is|am|be',
        'Are you tired after the walk? — No, I ___.|am not|aren\'t|isn\'t|not',
        'This castle ___ five hundred years old.|is|are|am|have',
        'Why ___ the dog outside in the rain?|is|are|am|do',
        'Diamonds ___ cheap; they are very expensive.|aren\'t|isn\'t|am not|not',
        '___ I in the right classroom for the English course?|Am|Is|Are|Do'
      ]
    },
    {
      num: 2, level: 'A1',
      title: 'პირისა და კუთვნილებითი ნაცვალსახელები',
      subtitle: 'Subject, Object & Possessive Pronouns',
      rule: 'პირის ნაცვალსახელები (I, you, he, she, it, we, they) დგას ზმნის წინ. ზმნის ან წინდებულის შემდეგ ვიყენებთ ობიექტურ ფორმას (me, you, him, her, it, us, them). კუთვნილებისთვის არსებითი სახელის წინ იწერება my, your, his, her, its, our, their, ხოლო არსებითი სახელის გარეშე — mine, yours, his, hers, ours, theirs.',
      formulas: [
        ['+ ქვემდებარე (Subject)', 'I | you | he | she | it | we | they (ზმნის წინ)', 'She knows him. / They invited us.'],
        ['- ობიექტი (Object)', 'me | you | him | her | it | us | them (ზმნის შემდეგ)', 'Please call me. / Look at them.'],
        ['? კუთვნილებითი I', 'my | your | his | her | its | our | their + არსებითი სახელი', 'This is my bag and that is her coat.'],
        ['💡 კუთვნილებითი II', 'mine | yours | his | hers | ours | theirs (სახელის გარეშე)', 'This bag is mine. / That coat is hers.']
      ],
      examples: [
        ['I have a sister. She lives in another city.', 'მე მყავს და. ის სხვა ქალაქში ცხოვრობს.'],
        ['Tom is a good friend, and everyone likes him.', 'ტომი კარგი მეგობარია და ყველას მოსწონს იგი.'],
        ['Can you help us carry these heavy boxes?', 'შეგიძლია დაგვეხმარო ამ მძიმე ყუთების წაღებაში?'],
        ['Sarah forgot her umbrella in the classroom.', 'სარას თავისი ქოლგა საკლასო ოთახში დარჩა.'],
        ['The dog is wagging its tail happily.', 'ძაღლი ბედნიერად აქიცინებს თავის კუდს.'],
        ['We love our garden because it is full of flowers.', 'ჩვენ გვიყვარს ჩვენი ბაღი, რადგან ის სავსეა ყვავილებით.'],
        ['Is this blue pen yours or mine?', 'ეს ლურჯი კალამი შენია თუ ჩემი?'],
        ['The neighbours parked their car in front of the gate.', 'მეზობლებმა თავიანთი მანქანა ჭიშკრის წინ გააჩერეს.']
      ],
      mistakes: [
        ['✗ This is I book.', '✓ This is my book.'],
        ['✗ Give the keys to she.', '✓ Give the keys to her.'],
        ['✗ The cat drank it\'s milk.', '✓ The cat drank its milk.']
      ],
      drills: [
        'Where is Paul? Have you seen ___ today?|him|he|his|himself',
        'The children are doing ___ homework in the living room.|their|they|them|theirs',
        'This umbrella isn\'t my umbrella. It is ___.|hers|her|she|herself',
        'Please listen to ___ when I am speaking.|me|I|my|mine',
        'The tree loses ___ leaves in autumn.|its|it|it\'s|his',
        'We invited ___ friends to dinner on Saturday.|our|we|us|ours',
        'These tickets are for you and Anna. They are ___.|yours|your|you|our',
        'My brother loves football. ___ watches every match.|He|Him|His|They',
        'Don\'t eat those berries! ___ are poisonous.|They|Them|Their|It',
        'Who is that woman? Why are you looking at ___?|her|she|hers|him',
        'Can you give ___ your phone number, please?|us|we|our|ours',
        'Jack put on ___ coat and went out.|his|he|him|her',
        'Our house is small, but ___ is very big.|theirs|their|them|they',
        'I don\'t like cold weather. ___ makes me feel tired.|It|Its|He|They',
        'Is this ___ notebook on the floor, Maria?|your|yours|you|my',
        'My grandparents live in the country. We visit ___ every month.|them|they|their|theirs',
        'That camera belongs to me. It is ___.|mine|my|me|I',
        'Peter and I are going to the cinema. Would you like to come with ___?|us|we|our|me',
        'Oxford is famous for ___ old university.|its|it\'s|it|his',
        'She washed ___ hands before dinner.|her|hers|she|his'
      ]
    },
    {
      num: 3, level: 'A1',
      title: 'არსებითი სახელის მხოლობითი და მრავლობითი რიცხვი',
      subtitle: 'Singular and Plural Nouns (Regular & Irregular)',
      rule: 'არსებითი სახელების უმეტესობას მრავლობითში ემატება -s (book -> books). თუ სიტყვა ბოლოვდება -s, -ss, -sh, -ch, -x, -o-ზე, ემატება -es (bus -> buses, box -> boxes). თანხმოვანი + y იცვლება -ies-ით (city -> cities), ხოლო -f/-fe ხშირად გადადის -ves-ში (leaf -> leaves). არსებობს არაწესიერი ფორმებიც (child -> children, tooth -> teeth).',
      formulas: [
        ['+ სტანდარტული (-s / -es)', 'car -> cars | bus -> buses | watch -> watches | box -> boxes', 'Three buses stopped at the station.'],
        ['- დაბოლოება -y', 'თანხმოვანი + y -> ies (baby -> babies) | ხმოვანი + y -> ys (day -> days)', 'Many big cities have subways.'],
        ['? დაბოლოება -f / -fe', 'wife -> wives | knife -> knives | leaf -> leaves | life -> lives', 'Yellow leaves fall from the trees.'],
        ['💡 არაწესიერი ფორმები', 'man->men | woman->women | child->children | foot->feet | tooth->teeth', 'person -> people | mouse -> mice | sheep -> sheep']
      ],
      examples: [
        ['There are two libraries in our town.', 'ჩვენს ქალაქში ორი ბიბლიოთეკაა.'],
        ['Please put the sharp knives in the drawer.', 'გთხოვთ, ბასრი დანები უჯრაში ჩააწყოთ.'],
        ['Several families had a picnic in the park.', 'რამდენიმე ოჯახს პიკნიკი ჰქონდა პარკში.'],
        ['Brush your teeth twice a day.', 'გაიხეხეთ კბილები დღეში ორჯერ.'],
        ['Many people prefer travelling by train.', 'ბევრ ადამიანს მატარებლით მგზავრობა ურჩევნია.'],
        ['The children are playing with their toys.', 'ბავშვები თავიანთი სათამაშოებით თამაშობენ.'],
        ['We bought four kilos of potatoes and tomatoes.', 'ჩვენ ვიყიდეთ ოთხი კილოგრამი კარტოფილი და პომიდორი.'],
        ['White sheep are grazing on the green hill.', 'თეთრი ცხვრები ბალახობენ მწვანე გორაკზე.']
      ],
      mistakes: [
        ['✗ Three childs are in the yard.', '✓ Three children are in the yard.'],
        ['✗ I met two womans at the reception.', '✓ I met two women at the reception.'],
        ['✗ Put the keys in those boxs.', '✓ Put the keys in those boxes.']
      ],
      drills: [
        'რომელია სიტყვა „baby“-ს სწორი მრავლობითი ფორმა?|babies|babys|babyes|babis',
        'There are twenty ___ in the classroom.|children|childs|childrens|child',
        'რომელია სიტყვა „knife“ (დანა)-ს მრავლობითი ფორმა?|knives|knifes|knivs|knifees',
        'My ___ hurt after walking all day.|feet|foots|feets|foot',
        'რომელი სიტყვა არ იცვლება მრავლობით რიცხვში?|sheep|horse|cat|bird',
        'We need three ___ of water for the trip.|glasses|glass|glasss|glases',
        'Autumn ___ are red, yellow, and brown.|leaves|leafs|leavs|leafes',
        'Two ___ were talking at the bus stop.|women|womans|womens|woman',
        'How many ___ are there in this building?|floors|floores|flories|floor',
        'Cats like chasing ___.|mice|mouses|mices|mouse',
        'I bought two ___ of bread at the bakery.|loaves|loafs|loavs|loaf',
        'There are five ___ waiting outside.|men|mans|mens|man',
        'She speaks four foreign ___.|languages|language|languagies|languags',
        'Put the dirty ___ in the sink, please.|dishes|dishs|dishies|dish',
        'Dentists take care of people\'s ___.|teeth|tooths|teethes|tooth',
        'We visited three European ___ last summer.|countries|countrys|countris|country',
        'Where are the ___ to the car?|keys|keyes|keies|key',
        'Several ___ of wolves live in the northern forest.|packs|packes|packies|pack',
        'He bought two new ___ for his collection.|watches|watchs|watchies|watch',
        'Hundreds of ___ attended the festival.|people|person|peoples|persones'
      ]
    },
    {
      num: 4, level: 'A1',
      title: 'არტიკლები: A, An და The',
      subtitle: 'Indefinite (a/an) and Definite (the) Articles',
      rule: 'განუსაზღვრელი არტიკლი a/an გამოიყენება მხოლოდ მხოლობითი რიცხვის თვლად სახელებთან, როცა საგანს პირველად ვახსენებთ. „a“ იწერება თანხმოვანი ბგერის წინ (a book, a university), ხოლო „an“ — ხმოვანი ბგერის წინ (an apple, an hour). განსაზღვრული არტიკლი „the“ გამოიყენება კონკრეტულ ან უნიკალურ საგნებთან (the sun, the moon, the floor).',
      formulas: [
        ['+ A (თანხმოვანი ბგერა)', 'a cat | a doctor | a big house | a university (/juː/)', 'She is a doctor. / He studies at a university.'],
        ['- An (ხმოვანი ბგერა)', 'an orange | an umbrella | an interesting film | an hour (უხმო h)', 'I waited for an hour. / Take an umbrella.'],
        ['? The (კონკრეტული)', 'the book on the table | the sun | the sky | the capital', 'I bought a shirt. The shirt is blue.'],
        ['💡 უარტიკლოდ (Zero)', 'ზოგადი მრავლობითი და უთვლადი: Dogs are loyal. / Life is beautiful.', 'ქვეყნებისა და ქალაქების უმეტესობა: France, Tokyo.']
      ],
      examples: [
        ['I ate an apple and a banana for breakfast.', 'საუზმეზე ერთი ვაშლი და ერთი ბანანი შევჭამე.'],
        ['We saw a good movie yesterday. The movie was a comedy.', 'გუშინ კარგი ფილმი ვნახეთ. ფილმი კომედია იყო.'],
        ['The sun rises in the east and sets in the west.', 'მზე აღმოსავლეთით ამოდის და დასავლეთით ჩადის.'],
        ['He is an honest person and a loyal friend.', 'ის პატიოსანი ადამიანი და ერთგული მეგობარია.'],
        ['Can you close the window, please? It is cold.', 'შეგიძლიათ დახუროთ ფანჯარა? ცივა.'],
        ['My sister wants to become an engineer.', 'ჩემს დას სურს გახდეს ინჟინერი.'],
        ['The moon looks very bright tonight.', 'მთვარე ამაღამ ძალიან კაშკაშა ჩანს.'],
        ['Music helps people relax after work.', 'მუსიკა ეხმარება ადამიანებს დასვენებაში.']
      ],
      mistakes: [
        ['✗ It took a hour to get there.', '✓ It took an hour to get there.'],
        ['✗ She studies at an university.', '✓ She studies at a university.'],
        ['✗ Sun is very hot today.', '✓ The sun is very hot today.']
      ],
      drills: [
        'He waited at the station for ___ hour.|an|a|the|—',
        'My cousin is ___ architect in London.|an|a|the|some',
        'I bought a jacket and a hat. ___ jacket is very warm.|The|A|An|Some',
        'Look at ___ sky! There are no clouds today.|the|a|an|—',
        'She wears ___ uniform at school.|a|an|some|many',
        '___ dogs are very intelligent animals. (ზოგადად)|— (უარტიკლოდ)|A|An|The',
        'Paris is ___ capital of France.|the|a|an|—',
        'It is raining outside. Do you have ___ umbrella?|an|a|the|some',
        'We stayed at ___ small hotel near the lake.|a|an|the|any',
        'Can you pass me ___ salt, please?|the|a|an|many',
        'He is ___ honest man; you can trust him.|an|a|the|—',
        'She plays ___ piano very well.|the|a|an|some',
        'I usually have ___ breakfast at eight o\'clock.|— (უარტიკლოდ)|a|an|the',
        'There is ___ elephant in the zoo.|an|a|some|many',
        'Turn off ___ light before you go to sleep.|the|a|an|—',
        'My uncle is ___ European diplomat.|a|an|the|some',
        'What is ___ longest river in the world?|the|a|an|—',
        'I need ___ piece of paper to write a note.|a|an|some|any',
        '___ life is impossible without water. (ზოგადად)|— (უარტიკლოდ)|A|An|The',
        'We live on ___ third floor of this building.|the|a|an|—'
      ]
    },
    {
      num: 5, level: 'A1',
      title: 'ჩვენებითი ნაცვალსახელები (This / That / These / Those)',
      subtitle: 'Demonstrative Pronouns and Adjectives',
      rule: 'თუ საგანი ახლოსაა: მხოლობითში ვიყენებთ „this“ (ეს), მრავლობითში — „these“ (ესენი). თუ საგანი შორსაა: მხოლობითში ვიყენებთ „that“ (ის), მრავლობითში — „those“ (ისინი).',
      formulas: [
        ['+ ახლოს (მხოლობითი)', 'This + მხოლობითი სახელი + is...', 'This cup of tea is hot.'],
        ['- ახლოს (მრავლობითი)', 'These + მრავლობითი სახელი + are...', 'These apples are fresh and sweet.'],
        ['? შორს (მხოლობითი)', 'That + მხოლობითი სახელი + is...', 'That building over there is a museum.'],
        ['💡 შორს (მრავლობითი)', 'Those + მრავლობითი სახელი + are...', 'Those mountains in the distance are covered with snow.']
      ],
      examples: [
        ['This chair right here is very comfortable.', 'ეს სკამი აქ ძალიან კომფორტულია.'],
        ['These flowers in my hand smell wonderful.', 'ამ ყვავილებს ჩემს ხელში შესანიშნავი სურნელი აქვს.'],
        ['What is that noise outside the house?', 'რა არის ის ხმაური სახლის გარეთ?'],
        ['Those stars in the night sky are very bright.', 'ის ვარსკვლავები ღამის ცაზე ძალიან კაშკაშაა.'],
        ['Hello, this is Mark speaking.', 'გამარჯობა, მარკი გესაუბრებათ.'],
        ['Are these your glasses on the desk?', 'ეს შენი სათვალეა სამუშაო მაგიდაზე?'],
        ['That car across the street belongs to our neighbour.', 'ის მანქანა ქუჩის გადაღმა ჩვენს მეზობელს ეკუთვნის.'],
        ['Who are those people standing near the entrance?', 'ვინ არიან ის ადამიანები, შესასვლელთან რომ დგანან?']
      ],
      mistakes: [
        ['✗ These book is very interesting.', '✓ This book is very interesting.'],
        ['✗ Pass me that pencils over there.', '✓ Pass me those pencils over there.'],
        ['✗ This shoes are too small for me.', '✓ These shoes are too small for me.']
      ],
      drills: [
        'Look at ___ birds high up in the sky!|those|this|that|these',
        'Here, take ___ sandwich. I made it for you.|this|these|those|they',
        '___ bags right here in my hands are very heavy.|These|This|That|Those',
        'Can you see ___ tall tower on the hill over there?|that|this|these|those',
        'Are ___ your keys on the table next to you?|these|this|that|it',
        'ტელეფონზე წარდგენისას: „Hello, ___ is Anna speaking.“|this|it|that|she',
        '___ shoes I am wearing are very comfortable.|These|This|That|Those',
        'Who is ___ man standing by the gate over there?|that|this|these|those',
        'Taste ___ cake! I baked it this morning.|this|these|those|they',
        '___ clouds in the distance look like rain.|Those|That|This|These',
        'Is ___ seat next to you free?|this|these|those|they',
        'Please hand me ___ books from the top shelf over there.|those|that|this|these',
        '___ exercises on this page are quite easy.|These|This|That|It',
        'What is ___ shiny object on the roof over there?|that|this|these|those',
        'Anna, ___ are my cousins, Leo and Maya.|these|this|that|it',
        'I don\'t like ___ trousers; they are too tight.|these|this|that|it',
        'Look at ___ rainbow over the mountain!|that|this|these|those',
        'Are ___ apples in your basket from your garden?|these|this|that|it',
        '___ winter mornings this week are very frosty.|These|This|That|It',
        'Whose house is ___ at the end of the road?|that|these|those|they'
      ]
    },
    {
      num: 6, level: 'A1',
      title: 'კონსტრუქცია There is / There are და ადგილის წინდებულები',
      subtitle: 'There is / There are & Prepositions of Place',
      rule: 'როდესაც ვამბობთ, რომ სადღაც რაღაც არსებობს ან მდებარეობს, წინადადებას ვიწყებთ There is (მხოლობითში და უთვლადთან) ან There are (მრავლობითში) კონსტრუქციით. მდებარეობის წინდებულებია: in, on, under, next to, between, behind, in front of, opposite.',
      formulas: [
        ['+ მხოლობითი / უთვლადი', 'There is a lamp on the desk. / There is some milk in the fridge.', 'There is a bed and two chairs in the room.'],
        ['- მრავლობითი', 'There are ten students in the classroom.', 'There aren\'t any trees in the yard.'],
        ['? კითხვითი', 'Is there a bank near here? — Yes, there is. / No, there isn\'t.', 'Are there many hotels in this town?'],
        ['💡 წინდებულები', 'in | on | under | next to | behind | in front of | between | opposite', 'The pharmacy is opposite the supermarket.']
      ],
      examples: [
        ['There is a large mirror on the wall.', 'კედელზე დიდი სარკე კიდია.'],
        ['There are seven days in a week.', 'კვირაში შვიდი დღეა.'],
        ['There isn\'t any sugar in my coffee.', 'ჩემს ყავაში შაქარი საერთოდ არ არის.'],
        ['Are there any free tables in the restaurant?', 'არის თავისუფალი მაგიდები რესტორანში?'],
        ['The cat is sleeping under the sofa.', 'კატას დივნის ქვეშ სძინავს.'],
        ['There is a small park between the school and the library.', 'სკოლასა და ბიბლიოთეკას შორის პატარა პარკია.'],
        ['A bus stop is right in front of our building.', 'ავტობუსის გაჩერება ზუსტად ჩვენი შენობის წინ არის.'],
        ['Hang your coat behind the door.', 'დაკიდეთ თქვენი პალტო კარის უკან.']
      ],
      mistakes: [
        ['✗ Have many parks in this city.', '✓ There are many parks in this city.'],
        ['✗ There is four bedrooms in the house.', '✓ There are four bedrooms in the house.'],
        ['✗ The picture is in the wall.', '✓ The picture is on the wall.']
      ],
      drills: [
        'There ___ twenty-four hours in a day.|are|is|have|be',
        '___ there a post office near the station?|Is|Are|Do|Has',
        'The shoes are ___ the bed, not on the floor.|under|between|among|into',
        'There ___ any cold water in the bottle.|isn\'t|aren\'t|don\'t|no',
        'The bank is ___ the bakery and the pharmacy.|between|behind|under|in',
        'There is a beautiful painting ___ the wall.|on|in|at|under',
        'How many months ___ there in a year?|are|is|have|do',
        'Is there a cinema in this town? — Yes, there ___.|is|are|has|it is',
        'The keys are ___ my coat pocket.|in|on|at|between',
        'There ___ five apples in the bowl.|are|is|has|be',
        'Who is standing ___ front of the gate?|in|on|at|to',
        'The garden is ___ the house, at the back.|behind|between|in|on',
        'There ___ a lot of snow on the roof.|is|are|have|were',
        'Are there any letters for me? — No, there ___.|aren\'t|isn\'t|don\'t|haven\'t',
        'Sit ___ to me so we can talk.|next|near|between|behind',
        'The hospital is directly ___ the park across the road.|opposite|under|between|in',
        'There ___ a desk, a chair, and a lamp in the study.|is|are|have|be',
        'Put the carpet ___ the middle of the floor.|in|on|at|under',
        '___ there any mistakes in my test?|Are|Is|Do|Have',
        'The River Thames flows ___ London.|through|on|above|at'
      ]
    },
    {
      num: 7, level: 'A1',
      title: 'კუთვნილების გამოხატვა: Have got / Has got და ’s (Possessive ’s)',
      subtitle: 'Possession with Have got & Apostrophe ’s',
      rule: 'კუთვნილების გამოსახატავად („მაქვს / მყავს“) გამოიყენება have got / has got. კითხვასა და უარყოფაში do/does არ სჭირდება (Have you got? I haven\'t got). სულიერ არსებით სახელს კუთვნილებისას ემატება ’s (Anna\'s car), მრავლობითში -s-ზე დაბოლოებულს კი მხოლოდ აპოსტროფი ’ (my parents\' house).',
      formulas: [
        ['+ Have got / Has got', 'I/You/We/They have got (I\'ve got) | He/She/It has got (He\'s got)', 'She has got blue eyes and brown hair.'],
        ['- უარყოფითი და კითხვითი', 'haven\'t got / hasn\'t got | Have you got...? / Has he got...?', 'Have you got a pen? — Yes, I have.'],
        ['? მხოლობითის კუთვნილება (’s)', 'Tom\'s bicycle | the teacher\'s desk | my brother\'s friend', 'უსულო საგნებთან: the door of the room.'],
        ['💡 მრავლობითის კუთვნილება (s’)', 'the students\' books | my parents\' car | children\'s toys', 'Where is the men\'s department?']
      ],
      examples: [
        ['We have got a small cottage in the countryside.', 'ჩვენ გვაქვს პატარა აგარაკი ქალაქგარეთ.'],
        ['He hasn\'t got any brothers or sisters.', 'მას და-ძმა არ ჰყავს.'],
        ['Have you got time for a cup of coffee?', 'გაქვს დრო ერთი ფინჯანი ყავისთვის?'],
        ['This is Emma\'s new bicycle.', 'ეს ემას ახალი ველოსიპედია.'],
        ['My grandparents\' garden is full of apple trees.', 'ჩემი ბებია-ბაბუის ბაღი სავსეა ვაშლის ხეებით.'],
        ['The children\'s room is on the second floor.', 'ბავშვების ოთახი მეორე სართულზეა.'],
        ['She has got a headache, so she needs some rest.', 'მას თავი სტკივა, ამიტომ დასვენება სჭირდება.'],
        ['What is the name of this village?', 'რა ჰქვია ამ სოფელს?']
      ],
      mistakes: [
        ['✗ Do you have got a car?', '✓ Have you got a car? / Do you have a car?'],
        ['✗ He haven\'t got a ticket.', '✓ He hasn\'t got a ticket.'],
        ['✗ This is my parent\'s house (ორივე მშობლის).', '✓ This is my parents\' house.']
      ],
      drills: [
        'Maria ___ got two cats and a dog.|has|have|is|does',
        '___ you got a map of the city?|Have|Do|Are|Has',
        'Where are the ___ bags? (ბავშვების ჩანთები)|children\'s|childrens\'|childs\'|children',
        'That is my ___ office. (ჩემი უფროსის — მხოლობითი)|boss\'s|boss|bosses|of boss',
        'We ___ got any milk left in the fridge.|haven\'t|hasn\'t|don\'t|aren\'t',
        'The colour ___ the walls is light green.|of|\'s|from|by',
        'Has David got a bicycle? — Yes, he ___.|has|have|is|does',
        'My ___ names are Robert and Helen. (მშობლების)|parents\'|parent\'s|parents|of parents',
        'I ___ got a terrible cold today.|have|has|am|do',
        'Whose coat is this? — It is ___.|Sarah\'s|Sarah|Sarahs|of Sarah',
        'She ___ got a ticket for the concert.|hasn\'t|haven\'t|doesn\'t|isn\'t',
        'Where is the ___ changing room? (ქალების)|women\'s|womens\'|womans\'|woman\'s',
        '___ your house got a balcony?|Has|Have|Is|Does',
        'The roof ___ the old church needs repair.|of|\'s|to|from',
        'Tom and Lucy have got a car. ___ car is silver.|Their|They|Them|There',
        'Have they got any children? — No, they ___.|haven\'t|hasn\'t|don\'t|aren\'t',
        'This is my ___ favourite song. (ძმის)|brother\'s|brothers|brother|of brother',
        'How many rooms ___ the apartment got?|has|have|is|does',
        'The ___ library is open until 8 PM. (სტუდენტების)|students\'|student\'s|students|of students',
        'He has got blue eyes, ___ he?|hasn\'t|haven\'t|doesn\'t|isn\'t'
      ]
    },
    {
      num: 8, level: 'A1',
      title: 'Present Simple — მარტივი აწმყო დრო (დადებითი ფორმა)',
      subtitle: 'Present Simple Affirmative & Spelling Rules',
      rule: 'Present Simple გამოხატავს მუდმივ მდგომარეობას, ჩვევებსა და ბუნების კანონებს. I, you, we, they პირებთან ზმნა დგება საწყის ფორმაში (work), ხოლო მესამე პირის მხოლობითში (he, she, it) ზმნას ემატება -s ან -es (works, goes, watches, studies).',
      formulas: [
        ['+ I / You / We / They', 'Subject + V1 (work, live, play, study)', 'They live in Canada. / We read every evening.'],
        ['- He / She / It (+s)', 'Subject + V-s (works, lives, plays, runs)', 'He works at a hospital. / She plays the piano.'],
        ['? მართლწერა (-es / -ies)', '-ch/-sh/-ss/-x/-o -> +es (watches, goes, washes) | თანხმ.+y -> ies (studies, flies)', 'The plane flies high. / He watches the news.'],
        ['💡 გამონაკლისი: Have', 'I/You/We/They have -> He/She/It has (არა haves!)', 'She has breakfast at eight o\'clock.']
      ],
      examples: [
        ['Water boils at one hundred degrees Celsius.', 'წყალი დუღს ას გრადუს ცელსიუსზე.'],
        ['The museum opens at ten o\'clock in the morning.', 'მუზეუმი დილის ათ საათზე იხსნება.'],
        ['My sister teaches mathematics at a high school.', 'ჩემი და უფროსკლასელებს მათემატიკას ასწავლის.'],
        ['He studies foreign languages in his free time.', 'ის თავისუფალ დროს უცხო ენებს სწავლობს.'],
        ['Birds fly south before winter begins.', 'ფრინველები ზამთრის დადგომამდე სამხრეთისკენ მიფრინავენ.'],
        ['She washes her hands before every meal.', 'ის ყოველი ჭამის წინ იბანს ხელებს.'],
        ['Our train leaves at half past six.', 'ჩვენი მატარებელი შვიდის ნახევარზე გადის.'],
        ['Lucas has a cup of green tea every afternoon.', 'ლუკასი ყოველ ნაშუადღევს ერთ ფინჯან მწვანე ჩაის სვამს.']
      ],
      mistakes: [
        ['✗ He studyes English every day.', '✓ He studies English every day.'],
        ['✗ She haves a big family.', '✓ She has a big family.'],
        ['✗ My father watchs television in the evening.', '✓ My father watches television in the evening.']
      ],
      drills: [
        'The Earth ___ around the Sun.|moves|move|moving|is move',
        'აირჩიეთ სწორი მართლწერა (he/she/it + cry):|cries|crys|cryes|creis',
        'My brother ___ his car every Sunday.|washes|wash|washs|washing',
        'Anna ___ lunch at one o\'clock.|has|have|haves|having',
        'They ___ in a quiet neighbourhood.|live|lives|living|are live',
        'რომელი ზმნა იმატებს -es დაბოლოებას He/She/It-თან?|go|play|work|read',
        'A mechanic ___ cars at the garage.|fixes|fix|fixs|fixing',
        'She ___ to the radio every morning.|listens|listen|listenes|listening',
        'The baby ___ for ten hours every night.|sleeps|sleep|sleepes|sleeping',
        'He ___ his homework after school.|does|do|dos|doing',
        'Buses ___ every fifteen minutes on this route.|run|runs|running|is run',
        'My mother ___ delicious soups.|cooks|cook|cookes|cooking',
        'The bank ___ at five o\'clock in the afternoon.|closes|close|closies|closing',
        'A pilot ___ airplanes across the world.|flies|flys|fly|flying',
        'John ___ a lot of books about history.|reads|read|reades|reading',
        'Ice ___ when the temperature rises above zero.|melts|melt|meltes|melting',
        'She ___ her little brother with his lessons.|helps|help|helpes|helping',
        'We ___ our grandparents every Sunday.|visit|visits|visiting|visited',
        'The teacher ___ new grammar rules clearly.|explains|explain|explaines|explaining',
        'This shop ___ fresh bread and pastries.|sells|sell|selles|selling'
      ]
    },
    {
      num: 9, level: 'A1',
      title: 'Present Simple — უარყოფითი და კითხვითი ფორმები',
      subtitle: 'Present Simple Negative and Questions (Do / Does)',
      rule: 'Present Simple-ში უარყოფითი და კითხვითი წინადადებების საწარმოებლად ვიყენებთ დამხმარე ზმნებს do (I, you, we, they) და does (he, she, it). როდესაც წინადადებაში ჩნდება does ან doesn\'t, მთავარ ზმნას -s დაბოლოება აღარ ეწერება!',
      formulas: [
        ['+ უარყოფითი I', 'I / You / We / They + do not (don\'t) + V1', 'We don\'t drink coffee at night.'],
        ['- უარყოფითი II', 'He / She / It + does not (doesn\'t) + V1 (უ-s-ოდ!)', 'She doesn\'t work on Saturdays.'],
        ['? კითხვითი', 'Do + I/you/we/they + V1? | Does + he/she/it + V1?', 'Does he live near here? / Do they speak French?'],
        ['💡 მოკლე პასუხი', 'Yes, I do. / No, I don\'t. | Yes, she does. / No, she doesn\'t.', 'Does it rain a lot here? — Yes, it does.']
      ],
      examples: [
        ['I don\'t like loud music when I am reading.', 'არ მომწონს ხმამაღალი მუსიკა, როდესაც ვკითხულობ.'],
        ['He doesn\'t eat meat because he is a vegetarian.', 'ის ხორცს არ ჭამს, რადგან ვეგეტარიანელია.'],
        ['Do you wake up early on weekends?', 'იღვიძებთ ადრე შაბათ-კვირას?'],
        ['Does this bus go to the central hospital?', 'მიდის ეს ავტობუსი ცენტრალურ საავადმყოფომდე?'],
        ['My parents don\'t watch television very often.', 'ჩემი მშობლები ტელევიზორს ხშირად არ უყურებენ.'],
        ['It doesn\'t snow in this region during winter.', 'ამ რეგიონში ზამთარში არ თოვს.'],
        ['Do plants need sunlight and water to grow?', 'სჭირდებათ მცენარეებს მზის სხივები და წყალი გასაზრდელად?'],
        ['Does your cousin play any musical instruments?', 'უკრავს შენი ბიძაშვილი რომელიმე მუსიკალურ საკრავზე?']
      ],
      mistakes: [
        ['✗ He doesn\'t likes cold weather.', '✓ He doesn\'t like cold weather.'],
        ['✗ Does she lives in Paris?', '✓ Does she live in Paris?'],
        ['✗ Are you agree with this idea?', '✓ Do you agree with this idea?']
      ],
      drills: [
        'Sarah ___ drink milk in the morning.|doesn\'t|don\'t|isn\'t|not',
        '___ your friends play tennis on weekends?|Do|Does|Are|Have',
        'Where ___ your brother work?|does|do|is|has',
        'He doesn\'t ___ the answer to this question.|know|knows|knowing|to know',
        'Do you like dark chocolate? — Yes, I ___.|do|like|am|does',
        'აირჩიეთ სწორი წინადადება:|Do you understand me?|Are you understand me?|Does you understand me?|You are understand me?',
        'My cat ___ like swimming in water.|doesn\'t|don\'t|isn\'t|aren\'t',
        '___ this train stop at Oxford?|Does|Do|Is|Has',
        'We ___ go to the cinema on Mondays.|don\'t|doesn\'t|aren\'t|not',
        'Why ___ she always arrive so early?|does|do|is|has',
        'Does your father drive to work? — No, he ___.|doesn\'t|don\'t|isn\'t|hasn\'t',
        'They don\'t ___ any foreign languages.|speak|speaks|speaking|to speak',
        'What time ___ the banks open in your country?|do|does|are|is',
        'He ___ have a car, so he walks everywhere.|doesn\'t|don\'t|hasn\'t|isn\'t',
        '___ vegetarian dishes contain meat?|Do|Does|Are|Have',
        'She doesn\'t ___ glasses for reading.|wear|wears|wearing|to wear',
        '___ it cost a lot to stay at this hotel?|Does|Do|Is|Has',
        'I ___ know where his office is.|don\'t|doesn\'t|am not|not',
        'How many hours a day ___ she practice the piano?|does|do|is|has',
        'Vegetarians ___ eat beef or chicken.|don\'t|doesn\'t|aren\'t|isn\'t'
      ]
    },
    {
      num: 10, level: 'A1',
      title: 'სიხშირის ზმნიზედები და მათი ადგილი წინადადებაში',
      subtitle: 'Adverbs of Frequency & Word Order',
      rule: 'სიხშირის ზმნიზედებია: always (100%), usually (85%), often (70%), sometimes (50%), rarely/seldom (15%), never (0%). ისინი იწერება მთავარი ზმნის წინ (I always walk), მაგრამ ზმნა To Be-ს (am/is/are) შემდეგ (He is always on time). Never-თან ზმნა დგება დადებით ფორმაში!',
      formulas: [
        ['+ მთავარი ზმნის წინ', 'Subject + Adverb + Main Verb (I usually get up at 7)', 'She often reads before sleep.'],
        ['- To Be-ს შემდეგ', 'Subject + am/is/are + Adverb (They are never late)', 'The streets are usually quiet at night.'],
        ['? Never და უარყოფა', 'Never თავად უარყოფითია — ზმნა დგება დადებით ფორმაში!', 'He never eats fast food.'],
        ['💡 კითხვითში', 'Do/Does + Subject + Adverb + V1? (Do you ever...?)', 'Do you often travel by plane?']
      ],
      examples: [
        ['I always brush my teeth after breakfast.', 'საუზმის შემდეგ ყოველთვის ვიხეხავ კბილებს.'],
        ['She is never late for her morning classes.', 'ის არასდროს აგვიანებს დილის ლექციებზე.'],
        ['We usually spend our summer holidays by the sea.', 'ზაფხულის არდადეგებს ჩვეულებრივ ზღვაზე ვატარებთ.'],
        ['He rarely drinks coffee in the evening.', 'ის საღამოს ყავას იშვიათად სვამს.'],
        ['Sometimes we order pizza on Friday nights.', 'ხანდახან პარასკევ საღამოს პიცას ვუკვეთავთ.'],
        ['The library is always closed on national holidays.', 'ბიბლიოთეკა ეროვნულ დღესასწაულებზე ყოველთვის დაკეტილია.'],
        ['Do you ever go swimming in winter?', 'დადიხართ ოდესმე საცურაოდ ზამთარში?'],
        ['Good drivers always wear their seatbelts.', 'კარგი მძღოლები ყოველთვის იკრავენ უსაფრთხოების ღვედს.']
      ],
      mistakes: [
        ['✗ Always I wake up at seven o\'clock.', '✓ I always wake up at seven o\'clock.'],
        ['✗ She always is polite to everyone.', '✓ She is always polite to everyone.'],
        ['✗ He doesn\'t never complain.', '✓ He never complains.']
      ],
      drills: [
        'აირჩიეთ სიტყვების სწორი წყობა:|Tom usually goes to work by bus.|Tom goes usually to work by bus.|Usually Tom goes by bus to work.|Tom goes to work usually by bus.',
        'აირჩიეთ სწორი წინადადება To Be ზმნასთან:|They are never angry.|They never are angry.|Never they are angry.|They aren\'t never angry.',
        'My sister ___ eats fish because she dislikes the taste.|never|always|often|usually',
        'He ___ forgets his keys; he is very careful.|rarely|always|usually|often',
        'Do you ___ watch science documentaries?|ever|never|rare|every',
        'რომელი წინადადებაა გრამატიკულად სწორი?|I never smoke.|I don\'t never smoke.|I never smokes.|Never I smoke.',
        'The bus ___ arrives on time in the morning.|usually|usual|is usually|does usually',
        'She ___ very friendly to new students.|is always|always is|always|be always',
        'We ___ go to the theatre — maybe once or twice a year.|seldom|always|usually|often',
        'How ___ do you wash your car?|often|always|sometimes|never',
        'He ___ hungry after his swimming practice.|is often|often is|often|does often',
        'I ___ drink tea with milk; I prefer lemon.|never|don\'t never|not|ever',
        '___ they play board games in the evening.|Sometimes|Sometime|Ever|Rare',
        'Our teacher ___ patient with beginners.|is always|always is|always be|does always',
        'Does it ___ snow in your city in April?|ever|never|seldom|rare',
        'Children ___ like sweet fruit.|usually|are usually|usual|do usually',
        'My alarm clock ___ rings at 6:30 AM.|always|is always|always is|ever',
        'Restaurants in the centre ___ crowded on Friday nights.|are often|often are|do often|often',
        'She never ___ her umbrella when it looks cloudy.|forgets|forget|doesn\'t forget|forgetting',
        'I go to the dentist ___ a year.|twice|two time|oftenly|rare'
      ]
    },
    {
      num: 11, level: 'A1',
      title: 'კითხვითი სიტყვები და სპეციალური კითხვები (Wh- Questions)',
      subtitle: 'Question Words: Who, What, Where, When, Why, How',
      rule: 'სპეციალური კითხვის დასასმელად კითხვითი სიტყვა იწერება წინადადების თავში, შემდეგ მოდის დამხმარე ზმნა (am/is/are/do/does/can), ქვემდებარე და მთავარი ზმნა. ძირითადი კითხვითი სიტყვებია: What, Who, Where, When, Why, How, Whose, Which.',
      formulas: [
        ['+ To Be-სთან', 'Question Word + am/is/are + Subject...?', 'Where are my glasses? / Who is that man?'],
        ['- Present Simple-თან', 'Question Word + do/does + Subject + V1...?', 'What time do you finish work? / Why does she cry?'],
        ['? How + ზედსართავი', 'How old | How far | How long | How often | How tall', 'How often do you exercise?'],
        ['💡 Why -> Because', 'Why (რატომ?) კითხვაზე პასუხი იწყება კავშირით Because', 'Why are you late? — Because the traffic was heavy.']
      ],
      examples: [
        ['Where do your grandparents live?', 'სად ცხოვრობენ შენი ბებია და ბაბუა?'],
        ['What time does the supermarket close?', 'რომელ საათზე იკეტება სუპერმარკეტი?'],
        ['Who is your favourite author?', 'ვინ არის შენი საყვარელი მწერალი?'],
        ['Why are you wearing a warm coat today?', 'რატომ გაცვია დღეს თბილი პალტო?'],
        ['How do you spell your surname in English?', 'როგორ იწერება ასო-ასო შენი გვარი ინგლისურად?'],
        ['Whose umbrella is this near the door?', 'ვისია ეს ქოლგა კართან ახლოს?'],
        ['Which colour do you prefer: blue or green?', 'რომელი ფერი გირჩევნია: ლურჯი თუ მწვანე?'],
        ['How far is the airport from the city centre?', 'რა მანძილზეა აეროპორტი ქალაქის ცენტრიდან?']
      ],
      mistakes: [
        ['✗ Where you live?', '✓ Where do you live?'],
        ['✗ What time starts the movie?', '✓ What time does the movie start?'],
        ['✗ How many years old are you?', '✓ How old are you?']
      ],
      drills: [
        '___ bag is this on the chair? — It\'s Anna\'s.|Whose|Who|Which|Where',
        '___ do you usually get to school? — By bus.|How|Why|When|Who',
        '___ is the boy smiling? — Because he passed the test.|Why|What|Where|When',
        'What time ___ the train leave?|does|do|is|are',
        '___ often do you visit your dentist? — Twice a year.|How|What|When|Where',
        'აირჩიეთ სწორი კითხვითი წინადადება:|Where does she work?|Where does she works?|Where she works?|Where is she work?',
        '___ is your birthday? — In October.|When|Where|Who|How',
        '___ jacket do you want: the black one or the brown one?|Which|Who|Where|How',
        'How ___ is the river in this place? — About three metres.|deep|tall|often|many',
        '___ do you usually have for breakfast?|What|Who|Where|When',
        '___ is that tall man talking to the teacher?|Who|Whose|Which|What',
        'How ___ does it take to fly from London to New York?|long|far|often|many',
        '___ are the children playing? — In the garden.|Where|When|Why|Who',
        'How ___ is the station from here? — Only five hundred metres.|far|long|old|much',
        'What kind of music ___ your brother like?|does|do|is|has',
        '___ keys are these on the counter?|Whose|Who\'s|Who|Where',
        'Why ___ the shops closed today? — It\'s a public holiday.|are|do|is|does',
        'How ___ brothers and sisters have you got?|many|much|old|long',
        '___ does this word mean in Georgian?|What|How|Which|Who',
        'When ___ your summer holidays begin?|do|does|are|is'
      ]
    },
    {
      num: 12, level: 'A1',
      title: 'მოდალური ზმნა Can / Can\'t (უნარი და ნებართვა)',
      subtitle: 'Modal Verb Can / Cannot for Ability & Permission',
      rule: 'მოდალური ზმნა Can გამოხატავს უნარს („შემიძლია“), შესაძლებლობას ან ნებართვას („შეიძლება...?“). იგი ყველა პირთან უცვლელია და მის შემდეგ მთავარი ზმნა ყოველთვის დგება საწყის ფორმაში „to“ ნაწილაკის გარეშე.',
      formulas: [
        ['+ დადებითი', 'Subject + can + V1 (I/He/She/They can swim)', 'He can speak three languages.'],
        ['- უარყოფითი', 'Subject + cannot (can\'t) + V1', 'I can\'t hear you well. / She cannot drive.'],
        ['? კითხვითი', 'Can + Subject + V1? — Yes, I can. / No, I can\'t.', 'Can you play chess? / Can I sit here?'],
        ['💡 ზრდილობიანი თხოვნა', 'Can you please...? / Could you...?', 'Can you pass me the salt, please?']
      ],
      examples: [
        ['My grandfather can play chess very well.', 'ჩემს ბაბუას ჭადრაკის ძალიან კარგად თამაში შეუძლია.'],
        ['Little babies cannot walk or talk.', 'პატარა ჩვილებს სიარული და ლაპარაკი არ შეუძლიათ.'],
        ['Can you see the mountains from your balcony?', 'ხედავთ მთებს თქვენი აივნიდან?'],
        ['Excuse me, can I use your phone for a minute?', 'უკაცრავად, შეიძლება ერთი წუთით თქვენი ტელეფონით ვისარგებლო?'],
        ['Cheetahs can run faster than any other land animal.', 'გეპარდებს შეუძლიათ ნებისმიერ სხვა ხმელეთის ცხოველზე სწრაფად ირბინონ.'],
        ['I\'m sorry, I can\'t come to the party on Friday.', 'ვწუხვარ, პარასკევს წვეულებაზე ვერ მოვალ.'],
        ['Can we pay by credit card in this café?', 'შეგვიძლია ამ კაფეში საკრედიტო ბარათით გადავიხადოთ?'],
        ['She can bake delicious chocolate cakes.', 'მას უგემრიელესი შოკოლადის ნამცხვრების გამოცხობა ეხერხება.']
      ],
      mistakes: [
        ['✗ He cans play the guitar.', '✓ He can play the guitar.'],
        ['✗ I can to swim across the river.', '✓ I can swim across the river.'],
        ['✗ Do you can help me?', '✓ Can you help me?']
      ],
      drills: [
        'Penguins are birds, but they ___ fly.|can\'t|don\'t can|not can|can\'t to',
        'My sister can ___ the violin beautifully.|play|plays|to play|playing',
        '___ I open the window? It is very warm in here.|Can|Do|Am|Have',
        'Can David ride a horse? — No, he ___.|can\'t|doesn\'t|isn\'t|not',
        'აირჩიეთ სწორი უარყოფითი მართლწერა:|cannot / can\'t|cannt|cant|dont can',
        'აირჩიეთ გრამატიკულად სწორი წინადადება:|She can speak Spanish.|She can speaks Spanish.|She cans speak Spanish.|She can to speak Spanish.',
        'I can\'t ___ my keys anywhere.|find|to find|finding|finds',
        '___ you hear that strange sound outside?|Can|Do|Are|Have',
        'Fish ___ breathe air out of water.|cannot|don\'t can|aren\'t can|not can',
        'Can they come to dinner tonight? — Yes, they ___.|can|do|are|will',
        'How many languages ___ your teacher speak?|can|does can|is|has',
        'Speak louder, please. We ___ hear you at the back.|can\'t|don\'t|aren\'t|haven\'t',
        'He can ___ a hundred metres in twelve seconds.|run|runs|to run|running',
        '___ I borrow your umbrella for an hour?|Can|Do|Am|Have',
        'Owls ___ see very well in the dark.|can|cans|are can|can to',
        'She can\'t ___ to work today because she is ill.|come|comes|coming|to come',
        'Where ___ we buy tickets for the museum?|can|do can|are|have',
        'My little brother can count to ten, ___ he can\'t read yet.|but|and|because|or',
        'Can you ___ this heavy suitcase alone?|lift|lifts|to lift|lifting',
        'Nobody ___ live without water.|can|cans|does can|is can'
      ]
    },
    {
      num: 13, level: 'A1',
      title: 'თვლადი და უთვლადი სახელები (a / an / some / any)',
      subtitle: 'Countable & Uncountable Nouns with Some and Any',
      rule: 'თვლადი სახელები ითვლება ცალობით (an apple -> some apples). უთვლადი სახელები (water, milk, rice, bread, money, information, advice, furniture, luggage) ცალობით არ ითვლება და არ აქვთ მრავლობითი ფორმა. დადებითში ვიყენებთ some-ს, უარყოფასა და კითხვაში — any-ს (გარდა შეთავაზება/თხოვნისა: Would you like some...?).',
      formulas: [
        ['+ Some (დადებითში)', 'some + მრავლობითი თვლადი (some books) / უთვლადი (some water)', 'I bought some cheese and some apples.'],
        ['- Any (უარყოფასა და ?-ში)', 'any + მრავლობითი თვლადი / უთვლადი (not any / Are there any?)', 'We don\'t have any bread. / Is there any juice?'],
        ['? გამონაკლისი კითხვაში', 'შეთავაზებისა და თხოვნის დროს კითხვაშიც იწერება SOME!', 'Would you like some tea? / Can I have some water?'],
        ['💡 უთვლადი საზომით', 'a glass of water | a piece of advice | a loaf of bread | a cup of coffee', 'უთვლად სიტყვებთან a/an არ იწერება!']
      ],
      examples: [
        ['There are some fresh oranges in the basket.', 'კალათაში რამდენიმე ახალი ფორთოხალია.'],
        ['We need some butter and some flour for the cake.', 'ნამცხვრისთვის ცოტაოდენი კარაქი და ფქვილი გვჭირდება.'],
        ['There aren\'t any chairs in the hall.', 'დარბაზში სკამები საერთოდ არ არის.'],
        ['Do you have any brothers or sisters?', 'გყავს და ან ძმა?'],
        ['Would you like some more soup?', 'ხომ არ ინებებთ კიდევ ცოტაოდენ წვნიანს?'],
        ['Can you give me some information about the course?', 'შეგიძლიათ მომაწოდოთ ინფორმაცია კურსის შესახებ?'],
        ['Good advice is always helpful.', 'კარგი რჩევა ყოველთვის სასარგებლოა.'],
        ['I didn\'t buy any souvenirs at the airport.', 'აეროპორტში სუვენირები არ მიყიდია.']
      ],
      mistakes: [
        ['✗ I need an advice from you.', '✓ I need some advice / a piece of advice from you.'],
        ['✗ There isn\'t some milk in the fridge.', '✓ There isn\'t any milk in the fridge.'],
        ['✗ Would you like any coffee? (შეთავაზებისას)', '✓ Would you like some coffee?']
      ],
      drills: [
        'We haven\'t got ___ eggs to make an omelette.|any|some|a|an',
        'Would you like ___ lemon in your tea? (შეთავაზება)|some|any|a|many',
        'რომელი არსებითი სახელია უთვლადი (Uncountable)?|furniture|coin|chair|suitcase',
        'There is ___ important information in this letter.|some|a|an|many',
        'Are there ___ messages for me today?|any|some|a|much',
        'I bought ___ loaf of bread at the bakery.|a|some|an|any',
        'Can I have ___ cold water, please? (თხოვნა)|some|any|a|an',
        'She didn\'t make ___ mistakes in the dictation.|any|some|a|no',
        'There is ___ orange on the plate.|an|a|some|any',
        'We need to buy ___ new furniture for the living room.|some|a|an|many',
        'Is there ___ petrol in the car?|any|some|a|many',
        'He gave me ___ very good piece of advice.|a|some|an|any',
        'They planted ___ apple trees in the garden.|some|a|an|any',
        'I don\'t have ___ cash in my wallet right now.|any|some|a|many',
        'रोმელი სიტყვაა თვლადი (Countable)?|suitcase|luggage|traffic|money',
        'The teacher gave us ___ homework for the weekend.|some|a|an|many',
        'Have you got ___ brothers or cousins?|any|some|a|much',
        'Please buy ___ bottle of milk on your way home.|a|some|any|an',
        'There isn\'t ___ snow on the mountains yet.|any|some|a|many',
        'Here is ___ hot soup for you.|some|any|a|an'
      ]
    },
    {
      num: 14, level: 'A1',
      title: 'რაოდენობის გამომხატველი სიტყვები: Much, Many, A lot of',
      subtitle: 'Quantifiers: Much, Many, A lot of, A few, A little',
      rule: 'თვლად მრავლობით სახელებთან ვიყენებთ many-ს (დიდი რაოდენობა) და a few-ს (რამდენიმე). უთვლად სახელებთან ვიყენებთ much-ს (ბევრი) და a little-ს (ცოტაოდენი). დადებით წინადადებებში ორივესთან გამოიყენება a lot of.',
      formulas: [
        ['+ თვლადი (Countable)', 'many / a lot of / a few + მრავლობითი (many books, a few minutes)', 'How many languages do you speak?'],
        ['- უთვლადი (Uncountable)', 'much / a lot of / a little + უთვლადი (much time, a little sugar)', 'How much does this ticket cost?'],
        ['? A lot of (უნივერსალური)', 'დადებით წინადადებაში მიდის როგორც თვლადთან, ისე უთვლადთან!', 'She has a lot of friends and a lot of patience.'],
        ['💡 Few vs. A few', 'a few / a little = ცოტა, მაგრამ საკმარისი (+) | few / little = თითქმის არა (-)', 'I have a little money, so we can buy coffee.']
      ],
      examples: [
        ['How many students are there in your group?', 'რამდენი სტუდენტია თქვენს ჯგუფში?'],
        ['How much water should a person drink daily?', 'რამდენი წყალი უნდა დალიოს ადამიანმა დღეში?'],
        ['We don\'t have much time before the train leaves.', 'მატარებლის გასვლამდე ბევრი დრო არ გვაქვს.'],
        ['There are a lot of historic buildings in Rome.', 'რომში უამრავი ისტორიული შენობაა.'],
        ['I need a few minutes to finish this exercise.', 'რამდენიმე წუთი მჭირდება ამ სავარჯიშოს დასასრულებლად.'],
        ['Add a little salt and olive oil to the salad.', 'დაუმატეთ სალათას ცოტაოდენი მარილი და ზეითუნის ზეთი.'],
        ['He doesn\'t know many people in this neighbourhood.', 'ის ამ უბანში ბევრ ადამიანს არ იცნობს.'],
        ['Did you spend much money on the repairs?', 'ბევრი ფული დახარჯეთ შეკეთებაზე?']
      ],
      mistakes: [
        ['✗ How many money do you have?', '✓ How much money do you have?'],
        ['✗ There are much tourists in summer.', '✓ There are many / a lot of tourists in summer.'],
        ['✗ I speak a few Spanish.', '✓ I speak a little Spanish.']
      ],
      drills: [
        'How ___ pages are there in this book?|many|much|little|a lot',
        'We didn\'t see ___ traffic on the highway.|much|many|a few|several',
        'Wait a moment, I have ___ questions to ask.|a few|a little|much|any',
        'Put ___ honey in the warm tea.|a little|a few|many|several',
        'How ___ luggage are you taking on the flight?|much|many|few|number',
        'She has ___ of experience in teaching children.|a lot|many|much|a few',
        'There aren\'t ___ hotels in this small village.|many|much|a little|little',
        'How ___ does a ticket to Vienna cost?|much|many|few|lot',
        'I only slept for ___ hours last night.|a few|a little|much|many of',
        'Do you drink ___ coffee during the day?|much|many|a few|few',
        'We invited ___ friends to our housewarming party.|a few|a little|much|any',
        'There is only ___ milk left in the carton.|a little|a few|many|several',
        'How ___ apples did you pick from the tree?|many|much|little|lot',
        'He doesn\'t have ___ patience with slow computers.|much|many|a few|few',
        'Can you lend me ___ coins for the parking machine?|a few|a little|much|many of',
        'It takes ___ of time to learn a musical instrument.|a lot|many|much|a few',
        'How ___ cheese should I buy at the market?|much|many|few|several',
        'Only ___ people came to the outdoor concert because of the rain.|a few|a little|much|lot',
        'Add ___ butter to the hot pan.|a little|a few|many|several',
        'Are there ___ mistakes in my essay?|many|much|a little|little'
      ]
    },
    {
      num: 15, level: 'A1',
      title: 'ბრძანებითი კილო (Imperatives) და შეთავაზება (Let\'s / Would you like)',
      subtitle: 'Imperatives, Instructions & Polite Offers',
      rule: 'ბრძანების, ინსტრუქციის ან რჩევის მისაცემად წინადადებას ვიწყებთ პირდაპირ ზმნის საწყისი ფორმით (Open the book!). აკრძალვისთვის წინ ვუწერთ Don\'t (Don\'t touch!). საერთო მოქმედების შესათავაზებლად ვიყენებთ კონსტრუქციას Let\'s + V1.',
      formulas: [
        ['+ დადებითი ბრძანება', 'V1 + ... (Sit down! / Turn left at the corner.)', 'Please be quiet in the library.'],
        ['- აკრძალვა (Don\'t)', 'Don\'t (Do not) + V1 (Don\'t be late! / Don\'t forget!)', 'Don\'t walk on the grass.'],
        ['? შეთავაზება (Let\'s)', 'Let\'s (= Let us) + V1 (Let\'s take a break.) | უარყოფა: Let\'s not...', 'Let\'s go for a walk in the park.'],
        ['💡 თავაზიანი შეთავაზება', 'Would you like + Noun / to V1? (ინებებთ / გსურთ...?)', 'Would you like a biscuit? / Would you like to dance?']
      ],
      examples: [
        ['Read the instructions carefully before you start.', 'დაწყებამდე ყურადღებით წაიკითხეთ ინსტრუქცია.'],
        ['Don\'t leave your bags unattended at the airport.', 'ნუ დატოვებთ ბარგს უყურადღებოდ აეროპორტში.'],
        ['Please turn off your mobile phones during the play.', 'გთხოვთ გამორთოთ მობილური ტელეფონები სპექტაკლის დროს.'],
        ['Be careful! The floor is wet.', 'ფრთხილად იყავით! იატაკი სველია.'],
        ['Let\'s meet in front of the cinema at seven.', 'მოდით, შვიდ საათზე კინოთეატრის წინ შევხვდეთ.'],
        ['It is raining heavily. Let\'s not go out tonight.', 'ძლიერად წვიმს. მოდი, ამაღამ გარეთ ნუ გავალთ.'],
        ['Would you like to join us for lunch tomorrow?', 'გსურთ ხვალ სადილზე შემოგვიერთდეთ?'],
        ['Never give up on your goals.', 'არასდროს ჩაიქნიოთ ხელი თქვენს მიზნებზე.']
      ],
      mistakes: [
        ['✗ You open the window, please.', '✓ Open the window, please.'],
        ['✗ Not touch that hot pan!', '✓ Don\'t touch that hot pan!'],
        ['✗ Let\'s to watch a comedy tonight.', '✓ Let\'s watch a comedy tonight.']
      ],
      drills: [
        '___ forget to lock the front door when you leave.|Don\'t|Not|Aren\'t|Doesn\'t',
        '___ noisy! The baby is sleeping upstairs.|Don\'t be|Don\'t|Not be|Aren\'t',
        'The weather is lovely. Let\'s ___ a picnic by the lake.|have|to have|having|has',
        'Would you like ___ a cup of hot chocolate?|to have|have|having|had',
        'როგორ იწარმოება „Let\'s“-ის უარყოფითი ფორმა?|Let\'s not go|Don\'t let\'s to go|Let\'s no go|Not let\'s go',
        '___ straight ahead and then turn right at the traffic lights.|Go|Going|To go|Goes',
        'Please ___ your name at the top of the page.|write|writes|to write|writing',
        '___ drink that water; it isn\'t clean.|Don\'t|Not|Doesn\'t|Aren\'t',
        'We are tired. Let\'s ___ a short break.|take|to take|taking|takes',
        '___ careful when you cross the busy street!|Be|Are|Do|To be',
        'Would you like ___ slice of apple pie?|a|some to|to|any',
        '___ swim in this river; the current is dangerous.|Don\'t|Not|Never to|Aren\'t',
        'Let\'s ___ a taxi, or we will be late for the show.|call|to call|calling|calls',
        'Please ___ sit on that bench; the paint is wet.|don\'t|not|aren\'t|doesn\'t',
        '___ your seatbelt before the car starts moving.|Fasten|Fastens|To fasten|Fastening',
        'Would you like to come with us? — Yes, I ___ love to.|would|do|am|will',
        'It\'s very late. Let\'s ___ make any noise.|not|don\'t|no|aren\'t',
        '___ me as soon as you arrive at the hotel.|Call|Calls|To call|Calling',
        '___ afraid of making mistakes when speaking.|Don\'t be|Not be|Don\'t|Aren\'t',
        'Please ___ the window; it\'s cold outside.|close|closes|to close|closing'
      ]
    },

    // =========================================================================
    // A2 LEVEL — TOPICS 16 TO 30 (20 DRILLS EACH = 300 DRILLS)
    // =========================================================================
    {
      num: 16, level: 'A2',
      title: 'Present Continuous — ახლა მიმდინარე აწმყო დრო',
      subtitle: 'Present Continuous (am / is / are + V-ing)',
      rule: 'Present Continuous გამოიყენება მოქმედებისთვის, რომელიც ზუსტად ახლა, საუბრის მომენტში მიმდინარეობს (now, right now, Look!, Listen!) ან დროებით ხდება მიმდინარე პერიოდში (this week, these days). იწარმოება am/is/are + V-ing ფორმით.',
      formulas: [
        ['+ დადებითი', 'I am + V-ing | He/She/It is + V-ing | We/You/They are + V-ing', 'She is writing an email right now.'],
        ['- უარყოფითი', 'Subject + am not / isn\'t / aren\'t + V-ing', 'They aren\'t watching TV at the moment.'],
        ['? კითხვითი', 'Am / Is / Are + Subject + V-ing?', 'What are you cooking? It smells great!'],
        ['💡 მართლწერა (-ing)', 'write -> writing | run -> running | lie -> lying | sit -> sitting', 'ბოლო უხმო -e ვარდება; მოკლე ხმოვნის შემდეგ თანხმოვანი ორმაგდება.']
      ],
      examples: [
        ['Look! It is snowing outside.', 'შეხედე! გარეთ თოვს.'],
        ['Be quiet, please. The students are taking an exam.', 'გთხოვთ, სიჩუმე დაიცვათ. სტუდენტები გამოცდას აბარებენ.'],
        ['I am reading a very interesting historical novel these days.', 'ამ დღეებში ძალიან საინტერესო ისტორიულ რომანს ვკითხულობ.'],
        ['Why is that little boy crying?', 'რატომ ტირის ის პატარა ბიჭი?'],
        ['We aren\'t using the car this week because it is at the garage.', 'ამ კვირაში მანქანას არ ვიყენებთ, რადგან სახელოსნოშია.'],
        ['Listen! Someone is knocking at the door.', 'მოუსმინე! ვიღაც კარზე აკაკუნებს.'],
        ['Are you waiting for the number ten bus?', 'მეათე ნომერ ავტობუსს ელოდებით?'],
        ['The children are swimming in the pool right now.', 'ბავშვები ზუსტად ახლა აუზში ცურავენ.']
      ],
      mistakes: [
        ['✗ I working on a new project now.', '✓ I am working on a new project now.'],
        ['✗ They are runing in the park.', '✓ They are running in the park.'],
        ['✗ Do you listening to me?', '✓ Are you listening to me?']
      ],
      drills: [
        'Listen! The birds ___ in the trees.|are singing|sing|sings|is singing',
        'აირჩიეთ ზმნა „write“-ის სწორი -ing ფორმა:|writing|writeing|writting|wryting',
        'Where is Paul? — He ___ a shower right now.|is taking|takes|taking|has',
        'აირჩიეთ ზმნა „swim“-ის სწორი -ing ფორმა:|swimming|swiming|swimeing|swyming',
        'Why ___ you wearing sunglasses indoors?|are|do|is|have',
        'She ___ working today; it is her day off.|isn\'t|doesn\'t|aren\'t|don\'t',
        'Look! The cat ___ up that tall tree.|is climbing|climbs|climbing|are climbing',
        'We ___ staying at our cousin\'s house this week.|are|do|is|have',
        'აირჩიეთ ზმნა „lie“ (წოლა)-ს სწორი -ing ფორმა:|lying|lieing|liying|lyeing',
        'What ___ the children doing in the yard?|are|do|is|have',
        'I ___ looking for my glasses. Have you seen them?|am|do|is|are',
        'Please don\'t make noise; the baby ___.|is sleeping|sleeps|sleeping|are sleeping',
        '___ it still raining outside?|Is|Does|Are|Has',
        'They ___ building a new bridge across the river these days.|are|do|is|were',
        'Why ___ he running so fast?|is|does|are|do',
        'My computer ___ working properly today.|isn\'t|doesn\'t|aren\'t|not',
        'Are you using this dictionary right now? — No, I ___.|am not|don\'t|isn\'t|aren\'t',
        'აირჩიეთ ზმნა „sit“-ის სწორი -ing ფორმა:|sitting|siting|siteing|sittng',
        'The kettle ___ boiling. Shall I make some tea?|is|does|are|has',
        'Who ___ waiting for you downstairs?|is|are|does|do'
      ]
    },
    {
      num: 17, level: 'A2',
      title: 'Present Simple თუ Present Continuous? (Stative Verbs)',
      subtitle: 'Permanent Habits vs. Temporary Actions & State Verbs',
      rule: 'Present Simple გამოხატავს მუდმივ ფაქტებსა და ჩვევებს (every day, usually), ხოლო Present Continuous — ახლა ან დროებით მიმდინარე მოქმედებას (now, today). გრძნობის, აზროვნებისა და კუთვნილების ზმნები (Stative Verbs: know, understand, believe, remember, like, love, hate, want, need, belong, seem, mean) არ იხმარება -ing ფორმით!',
      formulas: [
        ['+ Present Simple', 'მუდმივი / ჩვეული: every day, always, often, on Sundays', 'He drives a bus. (მისი მუდმივი პროფესიაა)'],
        ['- Present Continuous', 'ახლა / დროებითი: now, at the moment, today, this month', 'He isn\'t driving now; he is drinking tea.'],
        ['? Stative Verbs (უ-ing-ოდ!)', 'know | understand | believe | like | want | need | prefer | belong', 'I want some water now. (არა: I am wanting)'],
        ['💡 Think და Have', 'I think (მიმაჩნია) vs. I\'m thinking (ვფიქრობ) | I have a car vs. I\'m having lunch', 'She is having a great time at the party.']
      ],
      examples: [
        ['Sarah usually walks to work, but today she is taking a taxi.', 'სარა ჩვეულებრივ ფეხით დადის სამსახურში, მაგრამ დღეს ტაქსით მიდის.'],
        ['I don\'t understand what this word means.', 'არ მესმის, რას ნიშნავს ეს სიტყვა.'],
        ['Do you know the answer to this riddle?', 'იცი ამ გამოცანის პასუხი?'],
        ['This old dictionary belongs to my grandfather.', 'ეს ძველი ლექსიკონი ჩემს ბაბუას ეკუთვნის.'],
        ['We are staying at a small hotel by the sea this week.', 'ამ კვირაში ზღვის პირას პატარა სასტუმროში ვცხოვრობთ.'],
        ['She needs a new umbrella right now because it is raining.', 'მას ახლა ახალი ქოლგა სჭირდება, რადგან წვიმს.'],
        ['What does your brother do? — He is an architect.', 'რას საქმიანობს შენი ძმა? — ის არქიტექტორია.'],
        ['What is your brother doing? — He is drawing a plan.', 'რას აკეთებს ახლა შენი ძმა? — ნახაზს ხაზავს.']
      ],
      mistakes: [
        ['✗ I am knowing him very well.', '✓ I know him very well.'],
        ['✗ She is wanting to buy a new coat.', '✓ She wants to buy a new coat.'],
        ['✗ Look! The sun shines brightly.', '✓ Look! The sun is shining brightly.']
      ],
      drills: [
        'I usually drink tea, but today I ___ coffee.|am drinking|drink|drinks|drinking',
        'Excuse me, ___ you know the way to the museum?|do|are|does|is',
        'Right now, the children ___ a sandcastle on the beach.|are building|build|builds|is building',
        'This bicycle ___ to my neighbour.|belongs|is belonging|belong|are belonging',
        'She looks tired. I think she ___ a break right now.|needs|is needing|need|needing',
        'What ___ your father do? — He is a pilot.|does|is|do|has',
        'Listen! What language ___ those people speaking?|are|do|does|is',
        'I ___ every word the speaker is saying right now.|understand|am understanding|understands|understanding',
        'Water ___ at 0 degrees Celsius.|freezes|is freezing|freeze|freezing',
        'Can you call back later? We ___ dinner at the moment.|are having|have|has|having',
        'He ___ two brothers and a sister.|has|is having|have|having',
        'What ___ this sign mean?|does|is|do|are',
        'My sister ___ as a waitress during the summer holidays.|is working|work|working|are working',
        'I ___ believe his story; it sounds impossible.|don\'t|am not|doesn\'t|isn\'t',
        'Why ___ you smiling? Tell me the joke!|are|do|does|is',
        'She ___ dark chocolate to milk chocolate.|prefers|is preferring|prefer|preferring',
        'How often ___ it snow in your country?|does|is|do|are',
        'Look at Tom! He ___ a red hat today.|is wearing|wears|wear|wearing',
        'Do you ___ the name of that hotel?|remember|remembering|are remembering|remembers',
        'This soup ___ delicious! What did you put in it?|tastes|is tasting|taste|tasting'
      ]
    },
    {
      num: 18, level: 'A2',
      title: 'ზმნა „To Be“ წარსულ დროში (Was / Were)',
      subtitle: 'Past Simple of "To Be": Was and Were',
      rule: 'წარსულ დროში მდგომარეობის ან მდებარეობის აღსაწერად am და is გადადის ფორმაში was (I, he, she, it-თან), ხოლო are გადადის ფორმაში were (we, you, they-სთან). კითხვასა და უარყოფაში დამხმარე ზმნა did არ გამოიყენება!',
      formulas: [
        ['+ დადებითი', 'I / He / She / It + was | We / You / They + were', 'The weather was cold yesterday. / We were tired.'],
        ['- უარყოფითი', 'was not (wasn\'t) | were not (weren\'t)', 'He wasn\'t at school last Monday.'],
        ['? კითხვითი', 'Was + I/he/she/it...? | Were + we/you/they...?', 'Were you at the concert last night?'],
        ['💡 Born (დაბადება)', 'I was born in... / Where were you born?', 'Mozart was born in Austria in 1756.']
      ],
      examples: [
        ['Yesterday was a very busy day for everyone.', 'გუშინ ყველასთვის ძალიან დატვირთული დღე იყო.'],
        ['The tickets were quite expensive, but the show was great.', 'ბილეთები საკმაოდ ძვირი იყო, მაგრამ წარმოდგენა შესანიშნავი გამოდგა.'],
        ['I wasn\'t hungry at lunchtime.', 'სადილის დროს მშიერი არ ვიყავი.'],
        ['Were the shops open last Sunday?', 'იყო მაღაზიები ღია გასულ კვირას?'],
        ['Where were you at eight o\'clock yesterday evening?', 'სად იყავი გუშინ საღამოს რვა საათზე?'],
        ['There was a long queue in front of the cinema.', 'კინოთეატრის წინ გრძელი რიგი იდგა.'],
        ['There weren\'t any clouds in the sky this morning.', 'დღეს დილით ცაზე ღრუბლები საერთოდ არ იყო.'],
        ['My grandmother was born in a small mountain village.', 'ჩემი ბებია პატარა მთის სოფელში დაიბადა.']
      ],
      mistakes: [
        ['✗ We was very happy to see them.', '✓ We were very happy to see them.'],
        ['✗ Did you were tired after the trip?', '✓ Were you tired after the trip?'],
        ['✗ Where you was born?', '✓ Where were you born?']
      ],
      drills: [
        'The hotel room ___ very clean and quiet.|was|were|did|been',
        '___ your friends at the stadium yesterday?|Were|Was|Did|Are',
        'I ___ late for the train; I arrived ten minutes early.|wasn\'t|weren\'t|didn\'t|not was',
        'Where ___ Marie Curie born? — In Warsaw.|was|were|did|is',
        'There ___ many people at the beach because it was cold.|weren\'t|wasn\'t|didn\'t|aren\'t',
        'Was the exam difficult? — No, it ___.|wasn\'t|weren\'t|didn\'t|isn\'t',
        'Last winter ___ the coldest in ten years.|was|were|is|did',
        'Why ___ you so angry yesterday morning?|were|was|did|are',
        'The children ___ very excited about the trip.|were|was|did|been',
        'There ___ a good film on television last night.|was|were|had|did',
        '___ the weather nice during your holiday?|Was|Were|Did|Is',
        'My keys ___ on the table a minute ago, and now they are gone!|were|was|are|did',
        'He ___ at work yesterday because he had a fever.|wasn\'t|weren\'t|didn\'t|isn\'t',
        'Where ___ your parents born?|were|was|did|are',
        'Were you at home at 5 PM? — Yes, I ___.|was|were|did|am',
        'The streets ___ completely empty at midnight.|were|was|is|did',
        '___ there a restaurant in that hotel?|Was|Were|Did|Had',
        'We ___ hungry, so we didn\'t stop at the café.|weren\'t|wasn\'t|didn\'t|aren\'t',
        'How old ___ you when you started school?|were|was|did|are',
        'Shakespeare ___ a famous English playwright.|was|were|is|did'
      ]
    },
    {
      num: 19, level: 'A2',
      title: 'Past Simple — მარტივი წარსული დრო (წესიერი და არაწესიერი ზმნები)',
      subtitle: 'Past Simple Affirmative: Regular (-ed) & Irregular Verbs (V2)',
      rule: 'Past Simple აღნიშნავს წარსულში კონკრეტულ დროს დასრულებულ მოქმედებას (yesterday, last week, two days ago, in 2015). დადებით წინადადებაში წესიერ ზმნებს ემატება -ed (worked, stopped, studied), ხოლო არაწესიერი ზმნები იცვლიან ფორმას (went, saw, bought, took).',
      formulas: [
        ['+ წესიერი ზმნები (-ed)', 'walk -> walked | arrive -> arrived | study -> studied | stop -> stopped', 'We walked in the park for two hours.'],
        ['- არაწესიერი ზმნები I', 'go -> went | see -> saw | come -> came | take -> took | give -> gave', 'She went to the library yesterday afternoon.'],
        ['? არაწესიერი ზმნები II', 'buy -> bought | bring -> brought | think -> thought | teach -> taught', 'He bought a new umbrella last week.'],
        ['💡 არაწესიერი ზმნები III', 'make -> made | have -> had | write -> wrote | speak -> spoke | find -> found', 'They had dinner at an Italian restaurant.']
      ],
      examples: [
        ['It rained heavily all day yesterday.', 'გუშინ მთელი დღე ძლიერად წვიმდა.'],
        ['We visited an ancient castle during our holiday.', 'არდადეგების დროს უძველესი ციხესიმაგრე მოვინახულეთ.'],
        ['The train stopped at every small station.', 'მატარებელი ყველა პატარა სადგურზე გაჩერდა.'],
        ['She studied French for three years at school.', 'ის სკოლაში სამი წლის განმავლობაში სწავლობდა ფრანგულს.'],
        ['Tom lost his keys, but he found them in his coat pocket.', 'ტომმა გასაღები დაკარგა, მაგრამ პალტოს ჯიბეში იპოვა.'],
        ['I wrote a long letter to my cousin last night.', 'გუშინ საღამოს ჩემს ბიძაშვილს გრძელი წერილი მივწერე.'],
        ['They saw a beautiful rainbow after the storm.', 'შტორმის შემდეგ მათ ულამაზესი ცისარტყელა დაინახეს.'],
        ['My mother made a delicious apple pie on Sunday.', 'დედაჩემმა კვირას უგემრიელესი ვაშლის ღვეზელი გამოაცხო.']
      ],
      mistakes: [
        ['✗ He buyed a new jacket yesterday.', '✓ He bought a new jacket yesterday.'],
        ['✗ The car stoped at the red light.', '✓ The car stopped at the red light.'],
        ['✗ We goed to the cinema last Friday.', '✓ We went to the cinema last Friday.']
      ],
      drills: [
        'რომელია ზმნა „take“ (აღება)-ს სწორი წარსული ფორმა?|took|taked|taken|tooked',
        'She ___ her grandparents in the village last weekend.|visited|visit|visitted|visiting',
        'I ___ a cup of hot tea and went to bed.|drank|drink|drinked|drunk',
        'აირჩიეთ ზმნა „try“-ს სწორი Past Simple ფორმა:|tried|tryed|tryd|triyed',
        'Shakespeare ___ many famous plays and sonnets.|wrote|writed|written|writes',
        'They ___ the museum at five o\'clock.|left|leaved|leave|leaving',
        'We ___ a great comedy at the cinema two days ago.|saw|seed|seen|see',
        'He ___ his wallet on the bus yesterday.|lost|losed|loost|lose',
        'The concert ___ at eight o\'clock sharp.|began|begun|beginned|begin',
        'She ___ me a nice present for my birthday.|gave|gived|given|give',
        'I ___ my homework before dinner.|finished|finish|finishd|finishing',
        'The bird ___ out of the open window.|flew|flied|flown|flyed',
        'We ___ five kilometres along the beach.|walked|walk|walkd|walking',
        'He ___ a sandwich because he was hungry.|ate|eated|eaten|eat',
        'My sister ___ a beautiful song at the festival.|sang|singed|sung|sing',
        'They ___ a new house in the suburbs last year.|built|builded|build|building',
        'The baby ___ peacefully all night.|slept|sleeped|sleep|sleeping',
        'I ___ my old friend in the bookshop yesterday.|met|meeted|meet|meeting',
        'She ___ the heavy box on the floor.|dropped|droped|droppd|drop',
        'Columbus ___ America in 1492.|discovered|discover|discoverd|discovering'
      ]
    },
    {
      num: 20, level: 'A2',
      title: 'Past Simple — უარყოფითი და კითხვითი ფორმები (Did / Didn\'t)',
      subtitle: 'Past Simple Negative and Questions',
      rule: 'Past Simple-ში უარყოფითი და კითხვითი ფორმების საწარმოებლად ყველა პირთან ვიყენებთ დამხმარე ზმნას did / didn\'t. როდესაც წინადადებაში არის did ან didn\'t, მთავარი ზმნა უბრუნდება საწყის პირველ ფორმას (V1)!',
      formulas: [
        ['+ უარყოფითი', 'Subject + did not (didn\'t) + V1 (საწყისი ფორმა!)', 'I didn\'t see him yesterday.'],
        ['- კითხვითი (Yes/No)', 'Did + Subject + V1...? — Yes, I did. / No, I didn\'t.', 'Did you enjoy the film? — Yes, I did.'],
        ['? სპეციალური კითხვა', 'Wh- + did + Subject + V1...?', 'Where did you buy that umbrella?'],
        ['💡 ქვემდებარის კითხვა', 'Who + V2...? (როცა ვკითხულობთ „ვინ გააკეთა?“, did არ იწერება!)', 'Who broke the window? / What happened?']
      ],
      examples: [
        ['We didn\'t go for a walk because it was raining.', 'სასეირნოდ არ წავედით, რადგან წვიმდა.'],
        ['Did you lock the back door before leaving?', 'ჩაკეტე უკანა კარი წამოსვლამდე?'],
        ['She didn\'t hear the alarm clock this morning.', 'მას დღეს დილით მაღვიძარას ხმა არ გაუგია.'],
        ['What time did the plane land at the airport?', 'რომელ საათზე დაჯდა თვითმფრინავი აეროპორტში?'],
        ['How much did your new winter boots cost?', 'რა დაჯდა შენი ახალი ზამთრის ფეხსაცმელი?'],
        ['They didn\'t have enough time to visit the gallery.', 'მათ არ ჰქონდათ საკმარისი დრო გალერეის დასათვალიერებლად.'],
        ['Why did he leave the party so early?', 'რატომ დატოვა მან წვეულება ასე ადრე?'],
        ['Who phoned you late last night?', 'ვინ დაგირეკა გუშინ გვიან ღამით?']
      ],
      mistakes: [
        ['✗ I didn\'t went to the gym yesterday.', '✓ I didn\'t go to the gym yesterday.'],
        ['✗ Did she bought the tickets?', '✓ Did she buy the tickets?'],
        ['✗ What did happen at the end of the story?', '✓ What happened at the end of the story?']
      ],
      drills: [
        'He didn\'t ___ my question.|answer|answered|answers|answering',
        'Where ___ you spend your summer holidays last year?|did|were|was|have',
        'Did Anna call you yesterday? — No, she ___.|didn\'t|wasn\'t|doesn\'t|hadn\'t',
        'We didn\'t ___ anything at the shopping mall.|buy|bought|buys|buying',
        'Who ___ this delicious cake? (ქვემდებარის კითხვა)|made|did make|make|was make',
        'აირჩიეთ სწორი კითხვა:|When did the concert start?|When did the concert started?|When started the concert?|When was the concert start?',
        'I didn\'t ___ television last night.|watch|watched|watches|watching',
        '___ it rain a lot during your trip?|Did|Was|Were|Does',
        'Why didn\'t you ___ me about the change of plan?|tell|told|tells|telling',
        'What time ___ you wake up this morning?|did|were|was|do',
        'She didn\'t ___ the bus; she walked instead.|take|took|taken|takes',
        '___ they enjoy the theatre performance?|Did|Were|Was|Had',
        'How ___ he break his glasses?|did|was|were|had',
        'We didn\'t ___ enough money for a taxi.|have|had|has|having',
        'What ___ at the meeting yesterday? (რა მოხდა?)|happened|did happen|happen|was happen',
        'Did you see Mark at the library? — Yes, I ___.|did|saw|was|do',
        'He didn\'t ___ how to solve the puzzle.|know|knew|known|knows',
        'Where did she ___ her coat?|leave|left|leaves|leaving',
        'Who ___ the front door open?|left|did leave|leave|was leave',
        'They didn\'t ___ tennis because the court was wet.|play|played|plays|playing'
      ]
    },
    {
      num: 21, level: 'A2',
      title: 'Past Continuous — წარსულში მიმდინარე დრო',
      subtitle: 'Past Continuous (was / were + V-ing)',
      rule: 'Past Continuous გამოხატავს მოქმედებას, რომელიც წარსულის რომელიმე კონკრეტულ მომენტში პროცესში იყო (მაგ.: გუშინ საღამოს 7 საათზე). იწარმოება was (I, he, she, it) ან were (we, you, they) + V-ing ფორმით.',
      formulas: [
        ['+ დადებითი', 'I/He/She/It was + V-ing | We/You/They were + V-ing', 'At 6 PM yesterday, I was driving home.'],
        ['- უარყოფითი', 'Subject + wasn\'t / weren\'t + V-ing', 'She wasn\'t sleeping at midnight.'],
        ['? კითხვითი', 'Was / Were + Subject + V-ing?', 'What were you doing at 10 o\'clock this morning?'],
        ['💡 ფონური აღწერა', 'ამბის დასაწყისში გარემოს აღწერა:', 'The sun was shining and a warm breeze was blowing.']
      ],
      examples: [
        ['At eight o\'clock last night, we were having dinner.', 'გუშინ საღამოს რვა საათზე ჩვენ ვვახშმობდით.'],
        ['The children were playing football in the yard all afternoon.', 'ბავშვები მთელი ნაშუადღევი ეზოში ფეხბურთს თამაშობდნენ.'],
        ['She was wearing a beautiful red dress at the ceremony.', 'ცერემონიაზე მას ლამაზი წითელი კაბა ეცვა.'],
        ['I wasn\'t listening because I was thinking about something else.', 'არ ვუსმენდი, რადგან სხვა რამეზე ვფიქრობდი.'],
        ['Were they waiting for us outside the theatre?', 'გველოდებოდნენ ისინი თეატრის გარეთ?'],
        ['It was raining heavily when we looked out the window.', 'ძლიერად წვიმდა, როდესაც ფანჯრიდან გავიხედეთ.'],
        ['This time last year, he was living in Madrid.', 'შარშან ზუსტად ამ დროს ის მადრიდში ცხოვრობდა.'],
        ['Why were the dogs barking so loudly last night?', 'რატომ ყეფდნენ ძაღლები ასე ხმამაღლა გუშინ ღამით?']
      ],
      mistakes: [
        ['✗ They was watching a film at 9 PM.', '✓ They were watching a film at 9 PM.'],
        ['✗ What did you doing yesterday evening?', '✓ What were you doing yesterday evening?'],
        ['✗ I was knowing the answer immediately.', '✓ I knew the answer immediately.']
      ],
      drills: [
        'At 11 AM yesterday, Sarah ___ a presentation.|was giving|gave|were giving|is giving',
        'What ___ you doing when the lights went out?|were|was|did|are',
        'The wind ___ blowing strongly all night.|was|were|did|had',
        'We ___ sitting at the back of the hall.|were|was|did|are',
        'He ___ driving fast because the road was icy.|wasn\'t|weren\'t|didn\'t|isn\'t',
        '___ it snowing when you left the house?|Was|Did|Were|Is',
        'This time yesterday, I ___ on a train to Vienna.|was travelling|travelled|were travelling|am travelling',
        'The students ___ talking when the teacher walked in.|were|was|did|are',
        'Why ___ she crying in the corridor?|was|were|did|is',
        'At midnight, most people in the town ___.|were sleeping|was sleeping|slept|are sleeping',
        'I ___ looking at the road when I stepped into a puddle.|wasn\'t|weren\'t|didn\'t|am not',
        'What ___ your brother wearing at the party?|was|were|did|is',
        'Were the birds singing this morning? — Yes, they ___.|were|was|did|are',
        'My parents ___ working in the garden all Saturday morning.|were|was|did|had',
        'She ___ carrying a heavy basket of fruit.|was|were|did|is',
        'They ___ paying attention to the guide\'s instructions.|weren\'t|wasn\'t|didn\'t|aren\'t',
        'Who ___ sitting next to you on the plane?|was|were|did|is',
        'The campfire ___ burning brightly in the dark.|was|were|did|is',
        '___ you studying in the library at 4 PM?|Were|Was|Did|Are',
        'He ___ waiting for the bus for half an hour.|was|were|did|has'
      ]
    },
    {
      num: 22, level: 'A2',
      title: 'Past Simple და Past Continuous ერთად (When და While)',
      subtitle: 'Interrupted Past Actions with When and While',
      rule: 'როდესაც წარსულში ერთი გრძელი, მიმდინარე მოქმედება (Past Continuous) გაწყვიტა მეორე მოკლე, უეცარმა მოქმედებამ (Past Simple), მათ დასაკავშირებლად ვიყენებთ კავშირებს while და when. „While“-ს მოსდევს გრძელი პროცესი (Past Continuous), ხოლო „when“-ს ხშირად მოსდევს მოკლე მოქმედება (Past Simple).',
      formulas: [
        ['+ While + გრძელი პროცესი', 'While + Past Continuous, Past Simple', 'While I was walking home, I met an old friend.'],
        ['- When + მოკლე მოქმედება', 'Past Continuous + when + Past Simple', 'I was cooking dinner when the phone rang.'],
        ['? ორი პარალელური პროცესი', 'While + Past Continuous, Past Continuous', 'While she was reading, he was cooking.'],
        ['💡 ორი თანმიმდევრული მოქმედება', 'When + Past Simple, Past Simple', 'When the bell rang, the students stood up.']
      ],
      examples: [
        ['While I was crossing the street, I saw a famous actor.', 'სანამ ქუჩას ვკვეთდი, ცნობილი მსახიობი დავინახე.'],
        ['She was sleeping peacefully when the alarm went off.', 'მას მშვიდად ეძინა, როდესაც მაღვიძარამ დარეკა.'],
        ['He hurt his knee while he was playing basketball.', 'მან მუხლი იტკინა, როდესაც კალათბურთს თამაშობდა.'],
        ['What were they talking about when you entered the room?', 'რაზე საუბრობდნენ ისინი, როდესაც ოთახში შეხვედი?'],
        ['While my mother was preparing lunch, my father was setting the table.', 'სანამ დედა სადილს ამზადებდა, მამა სუფრას შლიდა.'],
        ['When I opened the curtains, the sun was shining brightly.', 'როდესაც ფარდები გადავწიე, მზე კაშკაშად ანათებდა.'],
        ['The electricity went out while we were watching the final.', 'შუქი ჩაქრა მაშინ, როცა ფინალს ვუყურებდით.'],
        ['When the rain stopped, we went out for a walk.', 'როდესაც წვიმა გადაიღო, სასეირნოდ გავედით.']
      ],
      mistakes: [
        ['✗ While I walked down the street, it began to rain.', '✓ While I was walking down the street, it began to rain.'],
        ['✗ I was dropping my cup when I heard the news.', '✓ I dropped my cup when I heard the news.'],
        ['✗ When the guest was arriving, we opened the door.', '✓ When the guest arrived, we opened the door.']
      ],
      drills: [
        'While Sarah ___ for the bus, it started to snow.|was waiting|waited|waits|is waiting',
        'We were having coffee when the waiter ___ a tray of glasses.|dropped|was dropping|drops|drop',
        'He fell asleep while he ___ a book.|was reading|read|reads|is reading',
        'When the teacher entered the room, all the students ___ up.|stood|were standing|stand|stands',
        'While I was washing the dishes, my sister ___ the floor.|was cleaning|cleaned|cleans|is cleaning',
        'I ___ my old school photo while I was cleaning the drawer.|found|was finding|find|finds',
        'She ___ her finger while she was slicing bread.|cut|was cutting|cuts|is cutting',
        'What were you doing when the earthquake ___?|started|was starting|starts|start',
        '___ we were swimming in the sea, someone took our towels.|While|During|For|By',
        'I was riding my bicycle when a dog suddenly ___ across the road.|ran|was running|runs|run',
        'When the train finally arrived, we ___ on immediately.|got|were getting|get|gets',
        'He ___ his glasses while he was running for the bus.|broke|was breaking|breaks|break',
        'While the children ___ upstairs, their mother cooked dinner.|were playing|played|play|are playing',
        'She met her future husband while she ___ in Italy.|was studying|studied|studies|study',
        'The television was on, but nobody ___ it.|was watching|watched|watches|were watching',
        'When I ___ the door, I saw a parcel on the mat.|opened|was opening|open|opens',
        'It ___ heavily when we left the theatre.|was raining|rained|rains|is raining',
        'He was painting the ceiling when he ___ off the ladder.|fell|was falling|falls|fall',
        'While Tom was digging in the garden, he ___ an old coin.|found|was finding|finds|find',
        'We ___ home when our car ran out of petrol.|were driving|drove|drive|drives'
      ]
    },
    {
      num: 23, level: 'A2',
      title: 'წარსული ჩვევები და მდგომარეობა: Used to + V1',
      subtitle: 'Past Habits and States with "Used to"',
      rule: 'კონსტრუქცია „used to + საწყისი ზმნა (V1)“ გამოიყენება ისეთი ჩვევების ან მდგომარეობების აღსაწერად, რომლებიც წარსულში რეგულარულად გვქონდა, მაგრამ ახლა აღარ გვაქვს. კითხვასა და უარყოფაში did/didn\'t-თან იწერება ფორმა use to (d-ს გარეშე!).',
      formulas: [
        ['+ დადებითი', 'Subject + used to + V1', 'I used to live in a small town, but now I live in the capital.'],
        ['- უარყოფითი', 'Subject + didn\'t use to + V1 (ან never used to + V1)', 'She didn\'t use to like olives when she was a child.'],
        ['? კითხვითი', 'Did + Subject + use to + V1?', 'Did you use to wear glasses at school?'],
        ['💡 განსხვავება აწმყოსგან', 'აწმყოს ჩვევისთვის ვიყენებთ usually + Present Simple!', 'Now I usually walk to work.']
      ],
      examples: [
        ['There used to be an old cinema on this corner.', 'ამ კუთხეში ადრე ძველი კინოთეატრი იყო.'],
        ['He used to play the guitar in a rock band when he was younger.', 'ახალგაზრდობაში ის როკ-ჯგუფში გიტარაზე უკრავდა ხოლმე.'],
        ['I didn\'t use to drink coffee, but now I drink two cups a day.', 'ადრე ყავას არ ვსვამდი, მაგრამ ახლა დღეში ორ ფინჯანს ვსვამ.'],
        ['Did your family use to go camping every summer?', 'დადიოდა თქვენი ოჯახი კემპინგზე ყოველ ზაფხულს?'],
        ['People used to write letters by hand before email was invented.', 'ელფოსტის გამოგონებამდე ადამიანები წერილებს ხელით წერდნენ.'],
        ['She used to have very long hair, but she cut it last month.', 'მას ადრე ძალიან გრძელი თმა ჰქონდა, მაგრამ გასულ თვეს შეიჭრა.'],
        ['We never used to lock our doors in that quiet village.', 'იმ მშვიდ სოფელში კარს არასდროს ვკეტავდით ხოლმე.'],
        ['Where did you use to play when you were a child?', 'სად თამაშობდი ხოლმე, როცა ბავშვი იყავი?']
      ],
      mistakes: [
        ['✗ I use to swim every day now.', '✓ I usually swim every day now.'],
        ['✗ Did you used to live here?', '✓ Did you use to live here?'],
        ['✗ We used to went to the mountains last Sunday.', '✓ We went to the mountains last Sunday.']
      ],
      drills: [
        'My grandfather ___ work at a printing factory forty years ago.|used to|use to|was used|uses to',
        'I didn\'t ___ like spicy food, but now I love it.|use to|used to|using to|uses to',
        '___ there use to be a bridge across this river?|Did|Was|Were|Had',
        'When Anna was a child, she ___ collect stamps.|used to|use to|usually|is used to',
        'Nowadays I ___ cycle to work every morning. (აწმყო)|usually|used to|use to|was used to',
        'Did they ___ have a summer house by the lake?|use to|used to|using|had',
        'He ___ be very shy, but now he is confident.|used to|use to|usually|uses to',
        'We didn\'t ___ have a dishwasher in our old apartment.|use to|used to|using to|usually',
        'Where did your parents ___ live before they moved here?|use to|used to|usually|living',
        'She ___ wear glasses, but now she wears contact lenses.|used to|use to|usually|is used',
        'There ___ be a lot of fields here; now it\'s a shopping centre.|used to|use to|was|were',
        'Did you ___ play hide-and-seek when you were little?|use to|used to|playing|played',
        'I never ___ wake up early on Sundays.|used to|use to|using to|am used',
        'People didn\'t ___ travel by plane a hundred years ago.|use to|used to|usually|travelled',
        'My brother ___ ride a motorcycle, but he sold it.|used to|use to|usually|rides',
        'What games did you ___ play at primary school?|use to|used to|usually|played',
        'This building ___ be a hotel; now it is a university.|used to|use to|was used|usually',
        'She didn\'t ___ speak French, but she learned it in Paris.|use to|used to|spoke|speaking',
        '___ he use to be a professional swimmer?|Did|Was|Were|Had',
        'We ___ go to the same seaside town every August when we were kids.|used to|use to|are used to|usually'
      ]
    },
    {
      num: 24, level: 'A2',
      title: 'ზედსართავი სახელის შედარებითი და აღმატებითი ხარისხი',
      subtitle: 'Comparative and Superlative Adjectives',
      rule: 'ორი საგნის შესადარებლად ვიყენებთ შედარებით ხარისხს (+ than): მოკლე ზედსართავებს ემატება -er (colder, bigger, happier), გრძელებს — more (more modern). სამი ან მეტი საგნიდან ერთის გამოსარჩევად ვიყენებთ აღმატებით ხარისხს: the -est (the coldest) ან the most (the most modern).',
      formulas: [
        ['+ მოკლე ზედსართავი', 'fast -> faster than -> the fastest | big -> bigger -> the biggest', 'Summer is hotter than spring.'],
        ['- -y-ზე დაბოლოებული', 'easy -> easier than -> the easiest | busy -> busier -> the busiest', 'This is the easiest question in the test.'],
        ['? გრძელი ზედსართავი', 'expensive -> more expensive than -> the most expensive', 'Health is more important than money.'],
        ['💡 არაწესიერი ფორმები', 'good -> better -> the best | bad -> worse -> the worst | far -> further -> the furthest', 'Today\'s weather is worse than yesterday\'s.']
      ],
      examples: [
        ['The Nile is longer than the Amazon river.', 'მდინარე ნილოსი ამაზონზე უფრო გრძელია.'],
        ['Mount Everest is the highest mountain in the world.', 'ევერესტი მსოფლიოში ყველაზე მაღალი მთაა.'],
        ['Travelling by plane is faster than travelling by train.', 'თვითმფრინავით მგზავრობა მატარებლით მგზავრობაზე სწრაფია.'],
        ['This armchair is the most comfortable seat in the room.', 'ეს სავარძელი ყველაზე კომფორტული დასაჯდომია ოთახში.'],
        ['Learning a language is easier when you practice every day.', 'ენის სწავლა უფრო მარტივია, როდესაც ყოველდღე ვარჯიშობ.'],
        ['That was the best meal I have ever tasted.', 'ეს იყო საუკეთესო კერძი, რაც კი ოდესმე გამისინჯავს.'],
        ['The city centre is much noisier than the suburbs.', 'ქალაქის ცენტრი გაცილებით უფრო ხმაურიანია, ვიდრე გარეუბანი.'],
        ['Which planet is the furthest from the Sun?', 'რომელი პლანეტაა მზიდან ყველაზე შორს?']
      ],
      mistakes: [
        ['✗ This road is more narrow than the highway.', '✓ This road is narrower than the highway.'],
        ['✗ Your idea is more better than mine.', '✓ Your idea is better / much better than mine.'],
        ['✗ She is the most tallest girl in the class.', '✓ She is the tallest girl in the class.']
      ],
      drills: [
        'Gold is ___ than silver.|heavier|more heavy|heaviest|heavyer',
        'This is ___ film I have seen this year.|the worst|bad|worse|the baddest',
        'A museum is usually ___ than a stadium.|quieter|more quietest|quietter|most quiet',
        'Which is ___ ocean in the world? — The Pacific Ocean.|the largest|large|larger|most large',
        'His new novel is ___ than his previous one.|more interesting|interesting|interester|most interesting',
        'შედარებითი ხარისხის გასაძლიერებლად ვიყენებთ: „___ bigger“|much|very|more|many',
        'December is usually ___ month of the year.|the coldest|colder|cold|most cold',
        'My new laptop is ___ than my old computer.|faster|more fast|fastest|the faster',
        'Who is ___ person in your family?|the oldest|older|old|most old',
        'Vegetables are ___ for you than sweets.|better|gooder|more good|best',
        'This puzzle is ___ than it looks.|more difficult|difficulter|most difficult|the difficultest',
        'What is ___ way to get to the airport?|the quickest|quicker|most quick|quick',
        'Today the traffic is ___ than it was yesterday.|worse|badder|more bad|worst',
        'Jupiter is ___ planet in our solar system.|the biggest|bigger|bigest|most big',
        'She looks ___ today than she did yesterday.|happier|more happy|happyer|happiest',
        'That was ___ mistake of his career.|the biggest|bigger|most big|biger',
        'Health and happiness are ___ than wealth.|more important|importanter|most important|the importantest',
        'How much ___ is the hotel from the beach?|further|farer|more far|furthest',
        'This street is ___ in the whole town.|the cleanest|cleaner|most clean|clean',
        'A cheetah is ___ than a horse.|faster|more fast|fastest|most fast'
      ]
    },
    {
      num: 25, level: 'A2',
      title: 'თანაბარი შედარება და ხარისხის ზმნიზედები (as...as, too, enough)',
      subtitle: 'Comparisons with As...As, Too and Enough',
      rule: 'როდესაც ორი საგანი ერთნაირია, ვიყენებთ „as + ზედსართავი (საწყის ფორმაში!) + as“. „Too + ზედსართავი“ ნიშნავს „ზედმეტად“. „Enough“ (საკმარისად) იწერება ზედსართავის შემდეგ (warm enough), მაგრამ არსებითი სახელის წინ (enough time).',
      formulas: [
        ['+ As + Adj + As', 'as tall as | as fast as | not as expensive as', 'This apple is as sweet as honey.'],
        ['- Too + Adjective', 'too + ზედსართავი (+ to V1) — ზედმეტად', 'The box is too heavy to lift.'],
        ['? Adjective + Enough', 'ზედსართავი + enough (+ to V1) — საკმარისად', 'Is the water warm enough to swim?'],
        ['💡 Enough + Noun', 'enough + არსებითი სახელი (enough money, enough chairs)', 'We don\'t have enough chairs for all the guests.']
      ],
      examples: [
        ['My brother is just as tall as my father.', 'ჩემი ძმა ზუსტად ისეთივე მაღალია, როგორც მამაჩემი.'],
        ['Today isn\'t as cold as it was yesterday.', 'დღეს არ არის ისეთი ცივი ამინდი, როგორიც გუშინ იყო.'],
        ['This soup is too salty to eat.', 'ეს წვნიანი ზედმეტად მლაშეა საჭმელად.'],
        ['You are speaking too quickly; please slow down.', 'ზედმეტად სწრაფად საუბრობთ; გთხოვთ, შეანელოთ.'],
        ['He is old enough to drive a car.', 'ის საკმარისად დიდია იმისთვის, რომ მანქანა მართოს.'],
        ['The room wasn\'t bright enough to read without a lamp.', 'ოთახი არ იყო საკმარისად ნათელი სანათის გარეშე წასაკითხად.'],
        ['Did you buy enough bread for dinner?', 'იყიდე საკმარისი პური ვახშმისთვის?'],
        ['Silver is not as expensive as gold.', 'ვერცხლი არ არის ისეთი ძვირფასი, როგორიც ოქროა.']
      ],
      mistakes: [
        ['✗ This test is not as easier as the first one.', '✓ This test is not as easy as the first one.'],
        ['✗ The coffee is enough hot.', '✓ The coffee is hot enough.'],
        ['✗ We don\'t have time enough.', '✓ We don\'t have enough time.']
      ],
      drills: [
        'Rome is not as ___ as Tokyo.|big|bigger|biggest|more big',
        'These shoes are ___ small for me; I need a larger size.|too|enough|as|more',
        'He isn\'t ___ to reach the top shelf.|tall enough|enough tall|too tall|as tall',
        'Do we have ___ for the train tickets?|enough money|money enough|too money|as money',
        'The film was ___ boring that we left early.|so|too|enough|as',
        'Can you run as ___ as your cousin?|fast|faster|fastest|more fast',
        'The tea is ___ hot to drink right now.|too|enough|as|very much',
        'She didn\'t study ___ to pass the exam.|hard enough|enough hard|too hard|as hard',
        'This exercise is as ___ as ABC.|easy|easier|easiest|more easy',
        'There aren\'t ___ for everyone in the hall.|enough seats|seats enough|too seats|many enough',
        'It is ___ cold outside to go out without a coat.|too|enough|as|so much',
        'Is your suitcase ___ for all your clothes?|big enough|enough big|too big|as big',
        'A bicycle is not as ___ as a motorcycle.|fast|faster|fastest|more fast',
        'Don\'t eat ___ many sweets before dinner!|too|enough|as|very',
        'We have ___ time to catch the eight o\'clock train.|enough|too|as|many',
        'His hands were as ___ as ice.|cold|colder|coldest|too cold',
        'The music is ___ loud; I can\'t hear what you are saying.|too|enough|as|more',
        'Are you ___ to go back to work after your illness?|well enough|enough well|too well|as well',
        'This dictionary isn\'t as ___ as that big one.|useful|more useful|most useful|usefuller',
        'There wasn\'t ___ in the pan to fry the potatoes.|enough oil|oil enough|too oil|much enough'
      ]
    },
    {
      num: 26, level: 'A2',
      title: 'მომავალი დრო: Be going to, Will და Present Continuous',
      subtitle: 'Expressing the Future: Plans, Predictions & Arrangements',
      rule: '1) „Will + V1“ — სპონტანური გადაწყვეტილება, დაპირება ან ვარაუდი (I think, probably); 2) „am/is/are going to + V1“ — წინასწარ გადაწყვეტილი განზრახვა ან აშკარა ნიშნებზე დაფუძნებული პროგნოზი; 3) Present Continuous — უკვე შეთანხმებული შეხვედრა ზუსტი დროით.',
      formulas: [
        ['+ Will + V1 (სპონტანური)', 'I\'ll help you! | I think it will rain tomorrow. | I promise I won\'t be late.', 'უარყოფა: will not = won\'t'],
        ['- Be going to + V1 (განზრახვა)', 'I am going to buy a new bicycle next month.', 'Look! That glass is going to fall!'],
        ['? Present Continuous (შეთანხმება)', 'We are meeting the dentist at 4 PM tomorrow.', 'They are getting married in June.'],
        ['💡 Shall I / Shall we...?', 'შეთავაზება კითხვით ფორმაში I და We პირებთან:', 'Shall I carry your bag? / Shall we dance?']
      ],
      examples: [
        ['The bag looks heavy. I will carry it for you.', 'ჩანთა მძიმე ჩანს. მე წამოგიღებ.'],
        ['I promise I won\'t tell anyone your secret.', 'გპირდები, შენს საიდუმლოს არავის ვეტყვი.'],
        ['She is going to study medicine at university.', 'ის უნივერსიტეტში მედიცინის შესწავლას აპირებს.'],
        ['Be careful! You are going to spill your tea!', 'ფრთხილად! ჩაის დაღვრი!'],
        ['We are having dinner with our neighbours tonight at seven.', 'ამაღამ შვიდ საათზე მეზობლებთან ერთად ვვახშმობთ.'],
        ['I think people will travel to Mars in the future.', 'ვფიქრობ, მომავალში ადამიანები მარსზე იმოგზაურებენ.'],
        ['What are you going to wear to the wedding?', 'რის ჩაცმას აპირებ ქორწილში?'],
        ['Shall I open the window for some fresh air?', 'გავაღო ფანჯარა სუფთა ჰაერისთვის?']
      ],
      mistakes: [
        ['✗ Wait here, I am going to get you some water. (სპონტანური)', '✓ Wait here, I\'ll get you some water.'],
        ['✗ I will to call you tomorrow evening.', '✓ I will call you tomorrow evening.'],
        ['✗ Look at the black sky! It will rain in a minute.', '✓ Look at the black sky! It is going to rain in a minute.']
      ],
      drills: [
        'Oh, I forgot my wallet! — Don\'t worry, I ___ lend you some money.|will|am going to|lend|am lending',
        'Watch out! That cyclist ___ hit the tree!|is going to|will|shall|goes to',
        'We have already bought the tickets. We ___ to Rome tomorrow morning.|are flying|will fly|fly|shall fly',
        'I think our team ___ win the championship next year.|will|is going|wills|winning',
        '___ we go to the beach this afternoon? (შეთავაზება)|Shall|Will|Are|Do',
        'Why did you buy this paint? — I ___ paint my bedroom tomorrow.|am going to|will|shall|painted',
        'I promise I ___ be late for the ceremony.|won\'t|am not going|don\'t|not will',
        'The phone is ringing. — I ___ answer it!|will|am going to|answer|answering',
        'She ___ the dentist at 3 PM tomorrow; she has an appointment.|is seeing|will see|sees|see',
        'Look at the traffic! We ___ miss our flight!|are going to|will to|shall|going to',
        'Perhaps it ___ snow in the mountains this weekend.|will|is going|shall to|wills',
        '___ I help you carry those heavy suitcases? (შეთავაზება)|Shall|Will|Do|Am',
        'They have saved enough money. They ___ buy a cottage.|are going to|will to|shall|buying',
        'I\'m sure you ___ pass the exam easily.|will|are going|shall to|do',
        'What time ___ your guests arriving tonight?|are|will|do|shall',
        'Waiter, I ___ have the grilled fish and a salad, please. (შეკვეთა)|will|am going to|have|having',
        'He ___ retire next year when he turns sixty-five.|is going to|wills|going to|shall to',
        'Don\'t touch that dog! It ___ bite you.|will|going to|is bite|shall',
        'Are you free tomorrow? — No, I ___ lunch with my aunt at noon.|am having|will have|have|had',
        'I don\'t think she ___ agree to this plan.|will|is going|wills|shall'
      ]
    },
    {
      num: 27, level: 'A2',
      title: 'ვალდებულება, აუცილებლობა და რჩევა (Have to, Must, Should)',
      subtitle: 'Modal Verbs of Obligation, Prohibition & Advice',
      rule: 'Must და Have to ნიშნავს „უნდა“-ს. უარყოფაში: „Mustn\'t“ ნიშნავს მკაცრ აკრძალვას („არ შეიძლება!“), ხოლო „Don\'t have to“ — აუცილებლობის არარსებობას („არ არის საჭირო“). რჩევისთვის ვიყენებთ Should / Shouldn\'t-ს. წარსულში ვალდებულებას გამოხატავს had to.',
      formulas: [
        ['+ ვალდებულება', 'must + V1 | have to / has to + V1 (წარსულში: had to + V1)', 'All passengers must wear seatbelts.'],
        ['- აკრძალვა (Mustn\'t)', 'must not (mustn\'t) + V1 — მკაცრად აკრძალულია!', 'You mustn\'t touch electrical wires.'],
        ['? არ არის საჭირო', 'don\'t have to / doesn\'t have to + V1 — არ გევალება', 'It\'s Saturday, so I don\'t have to get up early.'],
        ['💡 რჩევა (Should)', 'should / shouldn\'t + V1 — გირჩევ', 'You should see a dentist about that toothache.']
      ],
      examples: [
        ['Drivers must stop when the traffic light is red.', 'მძღოლები ვალდებულნი არიან გაჩერდნენ წითელ შუქნიშანზე.'],
        ['Visitors mustn\'t take photographs inside the museum.', 'ვიზიტორებისთვის მუზეუმის შიგნით ფოტოების გადაღება აკრძალულია.'],
        ['The museum is free on Sundays, so you don\'t have to pay.', 'კვირაობით მუზეუმი უფასოა, ამიტომ გადახდა არ გჭირდებათ.'],
        ['He had to take a taxi yesterday because he missed the bus.', 'გუშინ ტაქსის აყვანა მოუწია, რადგან ავტობუსზე დააგვიანდა.'],
        ['Does your brother have to work on night shifts?', 'უწევს შენს ძმას ღამის ცვლაში მუშაობა?'],
        ['You look tired; you should go to bed earlier tonight.', 'დაღლილი ჩანხარ; ამაღამ უფრო ადრე უნდა დაიძინო.'],
        ['Children shouldn\'t eat too many sweets.', 'ბავშვებმა ბევრი ტკბილეული არ უნდა ჭამონ.'],
        ['We must hurry or we will miss the beginning of the play.', 'უნდა ვიჩქაროთ, თორემ სპექტაკლის დასაწყისს გამოვტოვებთ.']
      ],
      mistakes: [
        ['✗ Yesterday I musted work late.', '✓ Yesterday I had to work late.'],
        ['✗ Does he has to wear a tie?', '✓ Does he have to wear a tie?'],
        ['✗ You should to apologize to her.', '✓ You should apologize to her.']
      ],
      drills: [
        'You ___ tell anyone what I said. It is a strict secret!|mustn\'t|don\'t have to|shouldn\'t to|haven\'t to',
        'We have plenty of time. We ___ hurry.|don\'t have to|mustn\'t|shouldn\'t to|haven\'t',
        'Last night the train was cancelled, so we ___ take a bus.|had to|must|have to|should to',
        'You ___ drink cold water when you have a sore throat.|shouldn\'t|don\'t have to|hadn\'t|aren\'t',
        '___ Sarah have to work this Saturday?|Does|Must|Has|Is',
        'რა განსხვავებაა „mustn\'t“-სა და „don\'t have to“-ს შორის?|mustn\'t = აკრძალულია / don\'t have to = არ არის აუცილებელი|ერთი და იგივეა|mustn\'t = რჩევაა|mustn\'t წარსულია',
        'Passengers ___ show their passports at the border.|must|should to|don\'t have|have',
        'He ___ wear a suit to work; his office is casual.|doesn\'t have to|mustn\'t|hasn\'t to|shouldn\'t to',
        'You ___ always check the mirror before turning.|should|ought|have|must to',
        'Students ___ use mobile phones during the exam. It\'s against the rules.|mustn\'t|don\'t have to|haven\'t to|didn\'t have to',
        'Did you ___ wait long for the doctor yesterday?|have to|had to|must|should',
        'My eyes hurt. — You ___ spend so many hours in front of the screen.|shouldn\'t|don\'t have to|must|had to',
        'In many countries, you ___ be eighteen to vote.|have to|should|can|may',
        'I didn\'t ___ cook dinner last night because we ate out.|have to|had to|must|mustn\'t',
        'You ___ park here! Look at the "No Parking" sign.|mustn\'t|don\'t have to|shouldn\'t to|haven\'t to',
        'What time ___ you have to be at the airport tomorrow?|do|must|are|have',
        'She has a high fever. She ___ stay in bed and rest.|should|don\'t have to|has|ought',
        'You ___ bring an umbrella; the sky is completely clear.|don\'t have to|mustn\'t|shouldn\'t to|can\'t',
        'A pilot ___ have excellent eyesight.|must|can|may|might',
        'We ___ pay in cash yesterday because the card terminal was broken.|had to|must|have to|should'
      ]
    },
    {
      num: 28, level: 'A2',
      title: 'განუსაზღვრელი ნაცვალსახელები (Someone, Anyone, Nothing, Everywhere)',
      subtitle: 'Indefinite Pronouns: Some-, Any-, No-, Every-',
      rule: 'განუსაზღვრელი ნაცვალსახელები იწარმოება some, any, no, every ფუძეებზე -body/-one, -thing და -where დამატებით. ყველა ეს ნაცვალსახელი გრამატიკულად მხოლობით რიცხვშია და მათთან ზმნაც მხოლობითში დგება (Everybody is ready!). nothing/nobody/nowhere-თან ზმნა დადებით ფორმაში იწერება.',
      formulas: [
        ['+ ადამიანი (-body / -one)', 'somebody/someone | anybody/anyone | nobody/no one | everybody/everyone', 'Someone is waiting for you downstairs.'],
        ['- საგანი (-thing)', 'something | anything | nothing | everything', 'Everything in this shop is handmade.'],
        ['? ადგილი (-where)', 'somewhere | anywhere | nowhere | everywhere', 'I looked everywhere, but I couldn\'t find my keys.'],
        ['💡 მხოლობითი ზმნა + ზედსართავი', 'Everybody likes... (ზმნას +s) | something interesting', 'Did you hear anything unusual?']
      ],
      examples: [
        ['Everybody in the hall was listening in silence.', 'დარბაზში ყველა სიჩუმეში უსმენდა.'],
        ['There is nothing in the mailbox today.', 'დღეს საფოსტო ყუთში არაფერია.'],
        ['Did anyone call while I was out?', 'დარეკა ვინმემ, სანამ გასული ვიქნები?'],
        ['I want to read something light and funny on the train.', 'მატარებელში რაიმე მსუბუქისა და სახალისოს წაკითხვა მინდა.'],
        ['Nobody knows the exact answer to that question.', 'არავინ იცის ამ კითხვის ზუსტი პასუხი.'],
        ['We didn\'t go anywhere last weekend because of the storm.', 'გასულ უქმეებზე ქარიშხლის გამო არსად წავსულვართ.'],
        ['Let\'s go somewhere quiet to talk.', 'მოდი, სადმე მშვიდ ადგილას გავიდეთ სასაუბროდ.'],
        ['Would you like something to drink?', 'ხომ არ ინებებთ რაიმეს დასალევად?']
      ],
      mistakes: [
        ['✗ Everybody are ready for the trip.', '✓ Everybody is ready for the trip.'],
        ['✗ I didn\'t tell nobody about the plan.', '✓ I didn\'t tell anybody / I told nobody about the plan.'],
        ['✗ She bought interesting something.', '✓ She bought something interesting.']
      ],
      drills: [
        'Listen! ___ is playing the piano upstairs.|Someone|Anyone|No one|Anywhere',
        'Everyone ___ happy with the final result.|is|are|were|have',
        'The box is completely empty. There is ___ inside.|nothing|anything|something|everything',
        'I didn\'t see ___ I knew at the conference.|anyone|nobody|someone|no one',
        'აირჩიეთ სიტყვების სწორი წყობა:|something important|important something|anything importantly|important anything',
        'We looked ___ for the lost kitten, and finally found it in the garden.|everywhere|nowhere|anywhere|something',
        'Is there ___ cold to drink in the fridge?|anything|nothing|somebody|everywhere',
        '___ left their umbrella in the hallway.|Somebody|Anybody|Anything|Somewhere',
        'The streets were deserted; there was ___ outside.|nobody|anybody|somebody|everybody',
        'Would you like ___ to eat before we leave? (შეთავაზება)|something|anything|nothing|everything',
        'I have ___ to say to him; the conversation is over.|nothing|anything|something|everything',
        'Did you go ___ interesting during the holidays?|anywhere|nowhere|somewhere|everywhere',
        'Nobody ___ what happened to the old painting.|knows|know|knowing|don\'t know',
        'All the hotels were full; we had ___ to stay.|nowhere|anywhere|somewhere|everywhere',
        '___ in the village knows the old doctor.|Everybody|Anybody|Nothing|Somewhere',
        'Don\'t touch ___ on this desk!|anything|nothing|something|everything',
        'Let\'s find ___ warm to sit and have tea.|somewhere|anywhere|nowhere|somebody',
        'Everything ___ ready for the guests.|is|are|were|have',
        'Can ___ help me move this heavy table?|anyone|no one|nothing|somewhere',
        'He packed ___ into one small backpack.|everything|anything|somebody|everywhere'
      ]
    },
    {
      num: 29, level: 'A2',
      title: 'დროის, ადგილისა და მოძრაობის წინდებულები',
      subtitle: 'Prepositions of Time, Place & Movement (at, on, in, into, across, through)',
      rule: 'დროში: AT — საათებთან და დღესასწაულებთან (at 5 PM, at night); ON — კვირის დღეებთან და თარიღებთან (on Friday, on May 10th); IN — თვეებთან, სეზონებთან, წლებთან და დღის მონაკვეთებთან (in April, in 2026, in the morning). მოძრაობისას: to, into, out of, across, through, along.',
      formulas: [
        ['+ დრო: AT / ON / IN', 'at 6 o\'clock, at midnight | on Monday, on my birthday | in winter, in July', 'last/next/every/this-ის წინ წინდებული არ იწერება!'],
        ['- ადგილი: AT / ON / IN', 'at the bus stop, at work | on the floor, on the second floor | in a box, in London', 'arrive in (ქალაქში/ქვეყანაში) vs. arrive at (შენობაში)'],
        ['? მოძრაობა I', 'go to school | walk into the room | get out of the car | fall off the bike', 'She walked into the bakery.'],
        ['💡 მოძრაობა II', 'swim across the river | walk through the forest | walk along the beach', 'The train went through a long tunnel.']
      ],
      examples: [
        ['Our classes start on Monday morning at nine o\'clock.', 'ჩვენი გაკვეთილები იწყება ორშაბათ დილით 9 საათზე.'],
        ['Many trees blossom in spring, especially in April.', 'ბევრი ხე ყვავის გაზაფხულზე, განსაკუთრებით აპრილში.'],
        ['The streets are very quiet at night.', 'ღამით ქუჩები ძალიან მშვიდია.'],
        ['We arrived in Paris late in the evening.', 'პარიზში გვიან საღამოს ჩავედით.'],
        ['He jumped into the swimming pool to cool down.', 'ის საცურაო აუზში ჩახტა გასაგრილებლად.'],
        ['A little dog ran across the road.', 'პატარა ძაღლმა გზა გადაირბინა.'],
        ['We walked through the old forest to reach the lake.', 'ტბამდე მისასვლელად ძველი ტყე გავიარეთ.'],
        ['I will see you next Friday.', 'მომავალ პარასკევს გნახავ.']
      ],
      mistakes: [
        ['✗ Let\'s meet on next Monday.', '✓ Let\'s meet next Monday.'],
        ['✗ The train arrived to the station on time.', '✓ The train arrived at the station on time.'],
        ['✗ I like reading in night.', '✓ I like reading at night.']
      ],
      drills: [
        'Shakespeare was born ___ April 1564.|in|on|at|to',
        'The concert is ___ Saturday evening ___ eight o\'clock.|on / at|in / at|at / on|on / in',
        'The hikers walked ___ the dark tunnel.|through|across|on|at',
        'What time did the guests arrive ___ the hotel?|at|to|in|on',
        'She took her wallet ___ her bag and paid the bill.|out of|into|across|along',
        'Are you free ___ this weekend?|— (წინდებულის გარეშე)|on|in|at',
        'Owls hunt for food ___ night.|at|in|on|by',
        'When did your family arrive ___ Canada?|in|at|to|on',
        'The boat sailed slowly ___ the wide river.|across|through|into|at',
        'My sister\'s birthday is ___ the fifteenth of May.|on|in|at|by',
        'We usually go skiing ___ winter.|in|on|at|to',
        'He got ___ the taxi and walked towards the terminal.|out of|off of|from in|through',
        'Let\'s walk ___ the beach and watch the sunset.|along|through|into|under',
        'The cat jumped ___ the table and knocked over a glass.|onto|in|at|along',
        'I don\'t like driving ___ the morning rush hour.|in|on|at|to',
        'They built a new bridge ___ the river.|over|through|into|out of',
        'Where were you ___ New Year\'s Day?|on|in|at|by',
        'The plane flew high ___ the clouds.|above|on|across|into',
        'He dived ___ the cold water.|into|in|onto|across',
        'The library is ___ the third floor.|on|in|at|into'
      ]
    },
    {
      num: 30, level: 'A2',
      title: 'ზმნური კონსტრუქციები: Infinitive (to + V1) და Gerund (V-ing)',
      subtitle: 'Verb Patterns: Verb + to-infinitive vs. Verb + -ing',
      rule: '1) სურვილის, გეგმისა და გადაწყვეტილების ზმნებს (want, would like, decide, hope, plan, promise, forget, learn, need, offer, agree, refuse) მოსდევს „to + V1“. 2) მოწონებისა და პროცესის დასრულების ზმნებს (enjoy, finish, mind, stop, suggest, avoid, keep) და ყველა წინდებულს (good at, interested in, without, thank for) მოსდევს „V-ing“.',
      formulas: [
        ['+ Verb + to V1', 'want | decide | hope | plan | promise | need | forget | learn + to V1', 'We decided to take the early train.'],
        ['- Verb + V-ing', 'enjoy | finish | mind | suggest | stop | keep + V-ing', 'Have you finished reading that newspaper?'],
        ['? Preposition + V-ing', 'interested in | good at | afraid of | thank you for | without + V-ing', 'She left the house without taking her umbrella.'],
        ['💡 მიზნის ინფინიტივი (To)', 'რატომ / რა მიზნით? -> to + V1 (Infinitive of Purpose)', 'I went to the bakery to buy fresh bread.']
      ],
      examples: [
        ['They plan to build a new school in the district.', 'ისინი უბანში ახალი სკოლის აშენებას გეგმავენ.'],
        ['He promised to call us as soon as he arrived.', 'მან პირობა დადო, რომ ჩასვლისთანავე დაგვირეკავდა.'],
        ['My sister enjoys painting landscapes in her free time.', 'ჩემს დას თავისუფალ დროს პეიზაჟების ხატვა სიამოვნებს.'],
        ['Would you mind closing the door, please?', 'წინააღმდეგი ხომ არ იქნებით, კარი რომ დახუროთ?'],
        ['She is very good at solving logic puzzles.', 'მას ძალიან კარგად ეხერხება ლოგიკური თავსატეხების ამოხსნა.'],
        ['We went to the library to borrow some books.', 'ბიბლიოთეკაში წიგნების გამოსატანად წავედით.'],
        ['Don\'t forget to water the plants while I am away.', 'არ დაგავიწყდეს მცენარეების მორწყვა, სანამ წასული ვიქნები.'],
        ['Thank you for helping me with the luggage.', 'გმადლობთ ბარგის წაღებაში დახმარებისთვის.']
      ],
      mistakes: [
        ['✗ I enjoy to walk in the rain.', '✓ I enjoy walking in the rain.'],
        ['✗ She went to the shop for buy some milk.', '✓ She went to the shop to buy some milk.'],
        ['✗ He is interested in learn history.', '✓ He is interested in learning history.']
      ],
      drills: [
        'We decided ___ at home because of the cold wind.|to stay|staying|stay|for staying',
        'Do you mind ___ a few minutes in the hall?|waiting|to wait|wait|waited',
        'He turned on the radio ___ to the morning news.|to listen|for listen|listening|listen',
        'My cousin is very good at ___ chess.|playing|play|to play|played',
        'When did you finish ___ your essay?|writing|to write|write|wrote',
        'She promised ___ on time for the ceremony.|to be|being|be|been',
        'They enjoy ___ in the mountains every summer.|hiking|to hike|hike|hiked',
        'I hope ___ you again very soon.|to see|seeing|see|saw',
        'He left the restaurant without ___ for his coffee.|paying|to pay|pay|paid',
        'My brother is learning ___ a car.|to drive|driving|drive|drove',
        'Please stop ___ so much noise!|making|to make|make|made',
        'She suggested ___ to the new museum on Sunday.|going|to go|go|went',
        'Are you interested in ___ a foreign language?|learning|to learn|learn|learned',
        'Don\'t forget ___ the back door before you go to bed.|to lock|locking|lock|locked',
        'He offered ___ us carry the heavy suitcases.|to help|helping|help|helped',
        'Thank you for ___ me to your birthday party.|inviting|to invite|invite|invited',
        'She refused ___ the question.|to answer|answering|answer|answered',
        'Keep ___ every day and your English will improve.|practicing|to practice|practice|practiced',
        'We need ___ tickets in advance for the fast train.|to book|booking|book|booked',
        'Many people are afraid of ___ in the dark.|walking|to walk|walk|walked'
      ]
    }
  ];
})(window);