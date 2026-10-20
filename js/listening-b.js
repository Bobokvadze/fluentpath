/**
 * LISTENING-B.JS — B1 დონის 15 ვრცელი მოსასმენი თემა (#31–#45)
 * თითოეულ თემაში: 5 ვრცელი აბზაცი, 10 საკვანძო სიტყვა და 10 გააზრების კითხვა (სულ 150 კითხვა).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ListeningDataB1 = [
    {
      num: 31, level: "B1",
      icon: "💻", genre: "თანამედროვე სამუშაო",
      title: "პოდკასტი დისტანციურ მუშაობასა და საერთო სამუშაო სივრცეებზე",
      subtitle: "Podcast: The Rise of Remote Work and Co-Working Spaces",
      time: "7 წთ",
      paragraphs: [
        [
          "Welcome back to 'Future of Work', our weekly radio podcast! Today we are exploring how technology has changed the traditional nine-to-five office routine. Twenty years ago, almost every office employee had to commute to a central building five days a week. Today, thanks to high-speed internet and cloud software, millions of graphic designers, programmers, accountants, and writers work remotely.",
          "კეთილი იყოს თქვენი დაბრუნება ჩვენს ყოველკვირეულ რადიოპოდკასტში „მუშაობის მომავალი“! დღეს ვიკვლევთ, თუ როგორ შეცვალა ტექნოლოგიამ ტრადიციული, ცხრიდან ხუთ საათამდე საოფისე რუტინა. ოცი წლის წინ თითქმის ყველა საოფისე თანამშრომელს კვირაში ხუთი დღე ცენტრალურ შენობაში მისვლა უწევდა. დღეს კი, სწრაფი ინტერნეტისა და ღრუბლოვანი პროგრამების წყალობით, მილიონობით გრაფიკული დიზაინერი, პროგრამისტი, ბუღალტერი და მწერალი დისტანციურად მუშაობს."
        ],
        [
          "Working from home has obvious advantages. Employees save up to two hours a day by avoiding crowded morning trains and traffic jams, and they spend less money on fuel, bus passes, and restaurant lunches. Many people also find that they can concentrate better on complex tasks in a quiet room at home than in a noisy open-plan office.",
          "სახლიდან მუშაობას აშკარა უპირატესობები აქვს. თანამშრომლები დღეში ორ საათამდე დროს ზოგავენ გადატვირთული დილის მატარებლებისა და საცობების თავიდან აცილებით, და ნაკლებ ფულს ხარჯავენ საწვავზე, სამგზავრო ბარათებსა და რესტორნის სადილებზე. ბევრი ადამიანი ასევე აღნიშნავს, რომ რთულ ამოცანებზე კონცენტრირება სახლის მშვიდ ოთახში უფრო უადვილდება, ვიდრე ხმაურიან ღია ტიპის ოფისში."
        ],
        [
          "However, working from home all week also brings unexpected challenges. Without clear boundaries between work and personal life, many remote workers find it hard to switch off in the evening and end up checking work emails at dinner. In addition, sitting alone in an apartment all day can make people miss the social interaction and spontaneous conversations with colleagues.",
          "თუმცა, მთელი კვირის განმავლობაში სახლიდან მუშაობას მოულოდნელი სირთულეებიც ახლავს. სამუშაოსა და პირად ცხოვრებას შორის მკაფიო ზღვრის გარეშე, ბევრ დისტანციურად მომუშავეს საღამოს საქმისგან მოწყვეტა უჭირს და ვახშმის დროსაც კი სამსახურებრივ მეილებს ამოწმებს. გარდა ამისა, მთელი დღე ბინაში მარტო ჯდომისას ადამიანებს ხშირად აკლდებათ სოციალური ურთიერთობა და კოლეგებთან სპონტანური საუბრები."
        ],
        [
          "To combine the freedom of remote work with the energy of a community, neighbourhood 'co-working spaces' have become popular in cities around the world. For a monthly membership fee, freelancers and remote employees can rent a desk in a bright, shared building equipped with fast Wi-Fi, printers, soundproof phone booths for video calls, and a shared kitchen.",
          "დისტანციური მუშაობის თავისუფლებისა და საზოგადოებრივი გარემოს ენერგიის გასაერთიანებლად, მსოფლიოს ქალაქებში პოპულარული გახდა უბნის „საერთო სამუშაო სივრცეები“ (ქოვორქინგები). ყოველთვიური საწევრო გადასახადის სანაცვლოდ, ფრილანსერებსა და დისტანციურ თანამშრომლებს შეუძლიათ იქირაონ სამუშაო მაგიდა ნათელ, საზიარო შენობაში, რომელიც აღჭურვილია სწრაფი ინტერნეტით, პრინტერებით, ვიდეოზარებისთვის განკუთვნილი ხმის იზოლაციის მქონე ჯიხურებითა და საერთო სამზარეულოთი."
        ],
        [
          "Meanwhile, many large companies have adopted a 'hybrid model': employees work from home three days a week to focus on individual tasks, and come into the main office on Tuesdays and Thursdays for team meetings and brainstorming. Surveys show that this balanced schedule is now the most popular choice among modern professionals.",
          "ამავდროულად, ბევრმა დიდმა კომპანიამ დანერგა „ჰიბრიდული მოდელი“: თანამშრომლები კვირაში სამი დღე სახლიდან მუშაობენ ინდივიდუალურ დავალებებზე ფოკუსირებისთვის, ხოლო სამშაბათსა და ხუთშაბათს მთავარ ოფისში მიდიან გუნდური შეხვედრებისა და იდეების განხილვისთვის. გამოკითხვები აჩვენებს, რომ ასეთი დაბალანსებული გრაფიკი დღეს თანამედროვე პროფესიონალებს შორის ყველაზე პოპულარული არჩევანია."
        ]
      ],
      glossary: [
        "nine-to-five routine|ცხრიდან ხუთ საათამდე სამუშაო რუტინა", "commute (verb)|სამსახურში ყოველდღიური მგზავრობა", "work remotely|დისტანციურად მუშაობა",
        "open-plan office|ღია ტიპის (ტიხრების გარეშე) ოფისი", "clear boundaries|მკაფიო საზღვრები / ზღვარი", "switch off|საქმისგან გონებრივად გამორთვა / დასვენება",
        "spontaneous|სპონტანური / დაუგეგმავი", "co-working space|საერთო სამუშაო სივრცე (ქოვორქინგი)", "soundproof booth|ხმის იზოლაციის მქონე ჯიხური", "hybrid model|ჰიბრიდული (შერეული) მოდელი"
      ],
      questions: [
        "What has allowed millions of employees to work remotely today compared to twenty years ago?|High-speed internet and cloud software|Cheaper train tickets|Larger office buildings|Shorter working weeks",
        "How much time can employees save every day by not commuting to a central office?|Up to two hours a day|Up to six hours a day|Only five minutes a day|Ten hours a week",
        "Why do some employees concentrate better at home than in a traditional workplace?|Because a quiet room at home has fewer distractions than a noisy open-plan office|Because home computers have larger screens|Because they work at midnight|Because there are no telephones at home",
        "What is one major challenge of working from home all week without clear boundaries?|People find it hard to switch off in the evening and check work emails at dinner|People forget how to use their computers|The internet turns off at five o'clock|Employees have to wear formal suits at home",
        "What social aspect of work do people often miss when sitting alone in an apartment all day?|Social interaction and spontaneous conversations with colleagues|Long traffic jams on the highway|Waiting for the elevator|Paying for expensive parking",
        "What is a 'co-working space'?|A shared neighbourhood building where freelancers and remote workers can rent a desk for a monthly fee|A free public park bench|A factory that manufactures desks|An airport waiting lounge",
        "Why do co-working spaces have soundproof booths?|So workers can make video calls and phone calls without disturbing others|To store old paper files|For workers to sleep during the afternoon|To keep printers cool",
        "How does the 'hybrid model' described in the podcast work?|Employees work from home three days a week and come into the office two days (such as Tuesdays and Thursdays) for team meetings|Employees work in the office every morning and at home every afternoon|Employees work for six months and take six months off|Employees work on trains",
        "What activities do employees typically use their in-office days for in a hybrid model?|Team meetings and brainstorming sessions|Quiet individual reading|Fixing their home computers|Shopping for office furniture",
        "According to surveys mentioned in the podcast, which work schedule is now the most popular among modern professionals?|The balanced hybrid schedule|Working in the office seven days a week|Working only at night|Never meeting colleagues in person"
      ]
    },
    {
      num: 32, level: "B1",
      icon: "🚲", genre: "ურბანული გარემო",
      title: "როგორ იქცა კოპენჰაგენი ველოსიპედების დედაქალაქად",
      subtitle: "Radio Feature: How Copenhagen Became the City of Cyclists",
      time: "7 წთ",
      paragraphs: [
        [
          "If you stand on Queen Louise's Bridge in the centre of Copenhagen at eight o'clock on a weekday morning, you will witness an extraordinary sight. Nearly forty thousand people cross this single bridge every day — not in cars, but on two wheels! In Denmark's capital, there are actually five times more bicycles than cars, and sixty-two percent of residents commute to work or university by bike in all kinds of weather.",
          "თუ სამუშაო დღის დილის რვა საათზე კოპენჰაგენის ცენტრში, დედოფალ ლუიზას ხიდზე დადგებით, უჩვეულო სანახაობის მომსწრე გახდებით. ამ ერთ ხიდს ყოველდღიურად თითქმის ორმოცი ათასი ადამიანი კვეთს — არა მანქანებით, არამედ ორი ბორბლით! დანიის დედაქალაქში ველოსიპედების რაოდენობა მანქანებისას სინამდვილეში ხუთჯერ აღემატება, ხოლო მცხოვრებთა სამოცდაორი პროცენტი სამსახურსა თუ უნივერსიტეტში ნებისმიერ ამინდში ველოსიპედით დადის."
        ],
        [
          "Many foreign visitors assume that the Danish have always ridden bicycles everywhere. However, in the 1960s, Copenhagen looked just like any other car-dominated European city, with wide roads choked with traffic and historic squares turned into noisy car parks. The transformation began in the 1970s, when an international oil crisis and rising road accidents prompted citizens to demand safer streets.",
          "ბევრ უცხოელ სტუმარს ჰგონია, რომ დანიელები ყოველთვის ყველგან ველოსიპედით დადიოდნენ. თუმცა, 1960-იან წლებში კოპენჰაგენი ზუსტად ისევე გამოიყურებოდა, როგორც მანქანებით გადატვირთული ნებისმიერი სხვა ევროპული ქალაქი — საცობებით სავსე განიერი გზებითა და ხმაურიან ავტოსადგომებად ქცეული ისტორიული მოედნებით. გარდაქმნა 1970-იან წლებში დაიწყო, როდესაც ნავთობის საერთაშორისო კრიზისმა და გახშირებულმა ავტოსაგზაო შემთხვევებმა მოქალაქეებს უსაფრთხო ქუჩების მოთხოვნისკენ უბიძგა."
        ],
        [
          "Over the next four decades, city planners redesigned the streets step by step. Instead of simply painting a white line on the edge of the road next to fast cars, engineers built over four hundred kilometres of 'curb-protected cycle tracks'. These wide bicycle lanes are raised higher than the car road and separated from both cars and pedestrians by concrete curbs, making cycling safe for children and elderly people alike.",
          "მომდევნო ოთხი ათწლეულის განმავლობაში ქალაქმგეგმარებლებმა ქუჩები ნაბიჯ-ნაბიჯ გადააკეთეს. სწრაფად მოძრავი მანქანების გვერდით გზის კიდეზე უბრალო თეთრი ხაზის დახატვის ნაცვლად, ინჟინრებმა ააშენეს ოთხას კილომეტრზე მეტი სიგრძის „ბორდიურით დაცული ველობილიკები“. ეს განიერი ველოზოლები საავტომობილო გზაზე მაღლაა აწეული და როგორც მანქანებისგან, ისე ქვეითებისგან ბეტონის ბორდიურებითაა გამოყოფილი, რაც ველოსიპედით სიარულს ერთნაირად უსაფრთხოს ხდის ბავშვებისა და ხანდაზმულებისთვის."
        ],
        [
          "To make cycling even faster, the city introduced the 'Green Wave' system on major avenues. Small LED lights embedded in the cycle track show cyclists whether they are riding at the ideal speed of twenty kilometres per hour. If a cyclist maintains that steady twenty-kilometre-per-hour pace during morning rush hour, they will hit every single traffic light on green all the way into the city centre without stopping once!",
          "ველოსიპედით გადაადგილების კიდევ უფრო დასაჩქარებლად, ქალაქმა მთავარ გამზირებზე დანერგა „მწვანე ტალღის“ სისტემა. ველობილიკში ჩამონტაჟებული პატარა შუქდიოდური ნათურები ველოსიპედისტებს უჩვენებს, მოძრაობენ თუ არა ისინი იდეალური სიჩქარით — საათში ოცი კილომეტრით. თუ ველოსიპედისტი დილის პიკის საათში ამ თანაბარ სიჩქარეს (20 კმ/სთ) შეინარჩუნებს, ქალაქის ცენტრამდე ყველა შუქნიშანზე მწვანე შუქი დახვდება და ერთხელაც არ მოუწევს გაჩერება!"
        ],
        [
          "Even families with two or three young children rarely need a car in Copenhagen, thanks to the popularity of 'cargo bikes' — sturdy three-wheeled bicycles with a large wooden box in front where children sit under a rain cover. With cleaner air, quieter streets, and lower healthcare costs, Copenhagen has proved that designing a city around bicycles improves the quality of life for everyone.",
          "კოპენჰაგენში ორი ან სამი პატარა ბავშვის მყოლ ოჯახებსაც კი იშვიათად სჭირდებათ მანქანა „სატვირთო ველოსიპედების“ პოპულარობის წყალობით — ეს არის მყარი სამბორბლიანი ველოსიპედები წინა მხარეს დიდი ხის ყუთით, სადაც ბავშვები წვიმისგან დამცავი ტენტის ქვეშ სხედან. უფრო სუფთა ჰაერით, მშვიდი ქუჩებითა და ჯანდაცვის შემცირებული ხარჯებით კოპენჰაგენმა დაამტკიცა, რომ ქალაქის ველოსიპედებზე მორგება ყველას ცხოვრების ხარისხს აუმჯობესებს."
        ]
      ],
      glossary: [
        "two wheels|ორი ბორბალი (ველოსიპედი)", "car-dominated|მანქანებით დომინირებული / გადატვირთული", "oil crisis|ნავთობის კრიზისი",
        "city planner|ქალაქმგეგმარებელი / ურბანისტი", "curb-protected|ბორდიურით დაცული / გამოყოფილი", "Green Wave|„მწვანე ტალღა“ (შუქნიშნების სინქრონული სისტემა)",
        "embedded|ჩამონტაჟებული / ჩაშენებული", "steady pace|თანაბარი ტემპი / სიჩქარე", "rush hour|პიკის საათი", "cargo bike|სატვირთო (საოჯახო) სამბორბლიანი ველოსიპედი"
      ],
      questions: [
        "How many people cross Queen Louise's Bridge in Copenhagen by bicycle every day?|Nearly forty thousand people|About two thousand people|One million people|Five hundred people",
        "What percentage of Copenhagen residents commute to work or university by bicycle?|Sixty-two percent|Ten percent|Twenty-five percent|Ninety-nine percent",
        "How many more bicycles than cars are there in Copenhagen today?|Five times more bicycles than cars|Twice as many cars as bicycles|The exact same number|Ten times more cars",
        "What was Copenhagen like in the 1960s before the transformation?|It was a car-dominated city with roads choked with traffic and squares turned into car parks|It had no cars at all|Everyone travelled by canal boats|It had underground moving walkways",
        "What two events in the 1970s prompted citizens to demand safer, bicycle-friendly streets?|An international oil crisis and rising road accidents|A heavy snowstorm and a flood|The closure of the railway station|The invention of the mountain bike",
        "How are Copenhagen's 400 kilometres of cycle tracks designed to keep riders safe?|They are raised higher than the car road and separated from cars and pedestrians by concrete curbs|They are built inside underground tunnels|They are painted in the middle of the car lanes|They are on the roofs of buildings",
        "What is the 'Green Wave' system on Copenhagen's major avenues?|A system of LED lights that helps cyclists ride at a steady pace so they hit every traffic light on green|A green bridge over the harbour|A law that all bicycles must be painted green|A summer festival in the park",
        "What exact speed must a cyclist maintain to catch every green light during the 'Green Wave'?|Twenty kilometres per hour|Forty kilometres per hour|Five kilometres per hour|Fifty kilometres per hour",
        "How do many families in Copenhagen transport two or three young children without a car?|In three-wheeled 'cargo bikes' that have a large wooden box in front|On the handlebars of racing bikes|By pulling a sled behind a bike|Only by taxi",
        "What three major benefits has Copenhagen gained by designing the city around bicycles?|Cleaner air, quieter streets, and lower healthcare costs|More car parks, wider highways, and cheaper petrol|Taller skyscrapers and faster buses|Warmer winter weather"
      ]
    },
    {
      num: 33, level: "B1",
      icon: "🎓", genre: "განათლება და კამპუსი",
      title: "საორიენტაციო ტური უნივერსიტეტის ბიბლიოთეკაში",
      subtitle: "University Orientation: How to Use the Campus Library",
      time: "7 წთ",
      paragraphs: [
        [
          "Welcome, first-year students, to the Central University Library! My name is David Thorne, the head academic librarian. Over the next three years of your degree, this five-storey building will be your most important resource for research, essay writing, and exam preparation. Let me explain how everything works before we start our walking tour.",
          "კეთილი იყოს თქვენი მობრძანება, პირველკურსელებო, უნივერსიტეტის ცენტრალურ ბიბლიოთეკაში! მე გახლავართ დევიდ თორნი, მთავარი აკადემიური ბიბლიოთეკარი. თქვენი სწავლის მომდევნო სამი წლის განმავლობაში ეს ხუთსართულიანი შენობა იქნება თქვენი უმთავრესი რესურსი კვლევისთვის, ესეების წერისა და გამოცდებისთვის მოსამზადებლად. ნება მიბოძეთ აგიხსნათ, როგორ მუშაობს ყველაფერი, სანამ შემოვლას დავიწყებდეთ."
        ],
        [
          "First, your plastic student ID card is also your library card. You must tap it on the electronic turnstiles at the entrance every time you come in or go out. During the regular semester, the library is open from eight in the morning until midnight, tujuh days a week. During the January and May exam periods, the ground floor remains open twenty-four hours a day!",
          "პირველი: თქვენი პლასტიკური სტუდენტური ბარათი იმავდროულად თქვენი მკითხველის ბარათიცაა. ყოველ ჯერზე, შემოსვლისა და გასვლისას, იგი უნდა მიადოთ შესასვლელში მდგარ ელექტრონულ ტურნიკეტებს. ჩვეულებრივი სემესტრის განმავლობაში ბიბლიოთეკა ღიაა კვირაში შვიდი დღე, დილის რვა საათიდან შუაღამემდე. ხოლო იანვრისა და მაისის საგამოცდო პერიოდებში პირველი სართული ოცდაოთხი საათის განმავლობაში მუშაობს!"
        ],
        [
          "Our building is organized by noise level as you go up. The Ground Floor and First Floor are 'Collaborative Zones' where you can talk quietly with classmates, work on group presentations, and borrow laptops from the IT Helpdesk. We also have twelve glass-walled group study pods equipped with large digital screens that you can reserve online for up to two hours.",
          "ჩვენი შენობა სართულების მიხედვით ხმაურის დონის შესაბამისადაა დაყოფილი. პირველი და მეორე სართულები წარმოადგენს „ერთობლივი მუშაობის ზონებს“, სადაც შეგიძლიათ კურსელებთან მშვიდად ისაუბროთ, იმუშაოთ ჯგუფურ პრეზენტაციებზე და IT დახმარების მაგიდიდან დროებით აიღოთ ლეპტოპები. ჩვენ ასევე გვაქვს დიდი ციფრული ეკრანებით აღჭურვილი თორმეტი მინისკედლებიანი ჯგუფური სამეცადინო კაბინა, რომელთა ონლაინ დაჯავშნაც ორ საათამდე ვადით შეგიძლიათ."
        ],
        [
          "Floors Two, Three, and Four are 'Strict Silent Zones'. On these upper floors, all phones and laptops must be muted, and no whispered conversations are permitted. Each floor houses different academic subjects: Floor Two holds Humanities and Languages; Floor Three holds Law, Economics, and Business; and Floor Four holds Science, Engineering, and Medicine.",
          "მესამე, მეოთხე და მეხუთე სართულები (Floors 2, 3, 4) არის „მკაცრი სიჩუმის ზონები“. ამ ზედა სართულებზე ყველა ტელეფონსა და ლეპტოპს ხმა უნდა ჰქონდეს გათიშული და ჩურჩულით საუბარიც კი არ დაიშვება. თითოეულ სართულზე განთავსებულია სხვადასხვა აკადემიური დარგი: მეორე სართულზეა ჰუმანიტარული მეცნიერებები და ენები; მესამეზე — სამართალი, ეკონომიკა და ბიზნესი; ხოლო მეოთხეზე — ზუსტი მეცნიერებები, ინჟინერია და მედიცინა."
        ],
        [
          "With your student card, you can borrow up to ten regular books for three weeks using the self-service machines near the exit. However, textbooks marked with a red 'Short Loan' sticker on the spine are in high demand by hundreds of students, so they can only be borrowed for twenty-four hours. Returning a red-sticker book late costs one euro per hour, so always check the due date on your receipt!",
          "სტუდენტური ბარათით გასასვლელთან მდგარი თვითმომსახურების აპარატების მეშვეობით შეგიძლიათ სამი კვირის ვადით გაიტანოთ ათამდე ჩვეულებრივი წიგნი. თუმცა, სახელმძღვანელოებზე, რომლებსაც ყუაზე წითელი სტიკერი („მოკლევადიანი გატანა“) აკვრია, ასობით სტუდენტის მხრიდან მაღალი მოთხოვნაა, ამიტომ მათი გატანა მხოლოდ ოცდაოთხი საათით შეიძლება. წითელსტიკერიანი წიგნის დაგვიანებით დაბრუნება საათში ერთი ევრო ჯდება, ამიტომ ქვითარზე ყოველთვის შეამოწმეთ ჩაბარების დრო!"
        ]
      ],
      glossary: [
        "orientation|საორიენტაციო შეხვედრა (ახალი სტუდენტებისთვის)", "turnstile|ტურნიკეტი (შესასვლელი ბარიერი)", "collaborative zone|ერთობლივი (ჯგუფური) მუშაობის ზონა",
        "study pod|სამეცადინო კაბინა / სივრცე", "strict silent zone|მკაცრი სიჩუმის ზონა", "mute (verb)|ხმის გათიშვა / დადუმება",
        "humanities|ჰუმანიტარული მეცნიერებები", "spine of a book|წიგნის ყუა (გვერდითი ნაწილი)", "in high demand|მაღალი მოთხოვნის მქონე", "due date|დაბრუნების / ჩაბარების ბოლო ვადა"
      ],
      questions: [
        "What must students use to pass through the electronic turnstiles at the library entrance?|Their plastic student ID card|A paper ticket bought at the door|Their passport|A metal key",
        "What are the library's opening hours during the regular semester, and what changes during exam periods?|8 AM to midnight seven days a week, and the ground floor stays open 24 hours a day during January and May exams|9 AM to 5 PM on weekdays only|Open 24 hours every day of the year|Closed on Saturdays and Sundays",
        "How is the five-storey library building organized as you go up?|By noise level (from Collaborative Zones on the lower floors to Strict Silent Zones on the upper floors)|By the age of the students|By the colour of the book covers|Alphabetically by author",
        "What are students allowed to do on the Ground Floor and First Floor ('Collaborative Zones')?|Talk quietly with classmates, work on group presentations, and borrow laptops from the IT Helpdesk|Play musical instruments|Eat hot pizza at the computers|Sleep on the tables",
        "For how long can students reserve one of the twelve glass-walled group study pods online?|For up to two hours|For a whole week|For only fifteen minutes|For twenty-four hours",
        "What is the rule on Floors Two, Three, and Four ('Strict Silent Zones')?|All phones and laptops must be muted, and even whispered conversations are not permitted|Students can talk on the phone for five minutes|Music is played through loudspeakers|Only professors are allowed to enter",
        "Which subjects are located on Floor Three of the library?|Law, Economics, and Business|Humanities and Languages|Science, Engineering, and Medicine|Children's books and fiction",
        "How many regular books can a student borrow at one time, and for how long?|Up to ten regular books for three weeks|Only two books for one week|Fifty books for a whole year|Five books for two days",
        "Why can textbooks with a red 'Short Loan' sticker on the spine only be borrowed for twenty-four hours?|Because they are in high demand by hundreds of students|Because they are very old and fragile|Because they are written in foreign languages|Because they cost a thousand euros",
        "What is the fine for returning a red-sticker 'Short Loan' textbook late?|One euro per hour|One euro per week|Ten euros per month|There is no fine at all"
      ]
    },
    {
      num: 34, level: "B1",
      icon: "🍫", genre: "წარმოება და ტრადიცია",
      title: "აუდიო-ტური ბელგიურ შოკოლადის ქარხანაში",
      subtitle: "Factory Audio Tour: From Cacao Bean to Belgian Praline",
      time: "7 წთ",
      paragraphs: [
        [
          "Welcome to the 'Maison Vermeulen Chocolate Factory' here in historic Bruges, Belgium! Before we step through the glass doors into the production gallery, please make sure you are wearing your white hygiene hairnet and blue shoe covers. At the end of our forty-five-minute tour, we will visit the tasting room where you can sample our warm liquid chocolate and handmade pralines.",
          "კეთილი იყოს თქვენი მობრძანება „მეზონ ვერმეულენის შოკოლადის ქარხანაში“, ისტორიულ ქალაქ ბრიუგეში, ბელგიაში! სანამ მინის კარით საწარმოო გალერეაში შევალთ, გთხოვთ დარწმუნდეთ, რომ გიკეთიათ თეთრი ჰიგიენური თმის ბადე და ფეხსაცმლის ლურჯი ბახილები. ჩვენი ორმოცდახუთწუთიანი ტურის ბოლოს ვესტუმრებით სადეგუსტაციო ოთახს, სადაც შეძლებთ დააგემოვნოთ ჩვენი თბილი თხევადი შოკოლადი და ხელნაკეთი პრალინე."
        ],
        [
          "Look down through the first viewing window on your right. Here in the receiving hall, burlap sacks of dried cacao beans arrive by ship from family farms in Ghana, Ecuador, and Madagascar. First, our sorting machines clean the beans to remove any small stones or twigs, and then roast them in rotating drums at one hundred and thirty degrees Celsius to bring out their deep chocolate aroma.",
          "გაიხედეთ ქვემოთ, თქვენგან მარჯვნივ მდებარე პირველ სათვალთვალო ფანჯარაში. აქ, მიმღებ დარბაზში, განის, ეკვადორისა და მადაგასკარის საოჯახო ფერმებიდან გემით ჩამოდის გამომშრალი კაკაოს მარცვლებით სავსე ჯვალოს ტომრები. ჯერ ჩვენი დამხარისხებელი დანადგარები წმენდს მარცვლებს პატარა კენჭებისა და ტოტებისგან, შემდეგ კი მბრუნავ დოლურებში ხალავს ას ოცდაათ გრადუს ცელსიუსზე ღრმა შოკოლადის არომატის გამოსავლენად."
        ],
        [
          "Next, a machine cracks the thin outer shells and blows them away with air, leaving the dark, crunchy pieces of the bean called 'cocoa nibs'. These nibs are ground between heavy granite rollers until the natural fat inside them — cocoa butter — melts, turning the nibs into a thick dark paste. To make dark chocolate, we mix this paste with sugar and extra cocoa butter; for milk chocolate, we add creamy whole milk powder.",
          "შემდეგ დანადგარი ამტვრევს გარე თხელ გარსს და ჰაერის ნაკადით აცილებს მას, რის შედეგადაც რჩება მარცვლის მუქი, ხრაშუნა ნატეხები — „კაკაოს ნიბსები“. ეს ნატეხები იფქვება მძიმე გრანიტის ლილვაკებს შორის, სანამ მათში არსებული ბუნებრივი ცხიმი — კაკაოს კარაქი — არ გადნება და ნატეხებს სქელ მუქ მასად არ აქცევს. შავი შოკოლადის მისაღებად ამ მასას ვურევთ შაქარსა და დამატებით კაკაოს კარაქს, ხოლო რძიანი შოკოლადისთვის ვუმატებთ ნაღების მშრალ რძეს."
        ],
        [
          "At Window Three, you can see huge stainless-steel tanks stirring the liquid chocolate continuously for twenty-four hours. This crucial process, invented in Switzerland in 1879 and called 'conching', smooths out the sugar crystals until they are smaller than twenty microns, so the chocolate feels like velvet on your tongue rather than gritty sand!",
          "მესამე ფანჯარასთან თქვენ ხედავთ უჟანგავი ფოლადის უზარმაზარ ავზებს, რომლებიც თხევად შოკოლადს ოცდაოთხი საათის განმავლობაში განუწყვეტლივ ურევს. ეს უმნიშვნელოვანესი პროცესი, რომელიც 1879 წელს შვეიცარიაში გამოიგონეს და „კონშირება“ ეწოდება, აპრიალებს და აწვრილებს შაქრის კრისტალებს ოც მიკრონზე ნაკლებ ზომამდე, რათა შოკოლადი ენაზე ხავერდივით დნებოდეს და ქვიშასავით არ იგრძნობოდეს!"
        ],
        [
          "Finally, before the chocolate is poured into moulds, it undergoes 'tempering' — carefully heating and cooling the chocolate to thirty-one degrees Celsius. Tempering aligns the cocoa butter crystals so the finished bar has a mirror-like shine and makes a crisp 'snap' when you break it! In 1912, Belgian chocolatier Jean Neuhaus invented the 'praline' — a tempered chocolate shell filled with soft hazelnut cream — which our master chocolatiers are decorating by hand right in front of you.",
          "დაბოლოს, ყალიბებში ჩასხმამდე შოკოლადი გადის „ტემპერირებას“ — მის ფრთხილ გათბობასა და გაგრილებას ოცდათერთმეტ გრადუს ცელსიუსამდე. ტემპერირება აწესრიგებს კაკაოს კარაქის კრისტალებს, რის წყალობითაც მზა ფილას აქვს სარკისებური ბზინვარება და გატეხვისას გამოსცემს მკაფიო ტკაცუნის ხმას! 1912 წელს ბელგიელმა კონდიტერმა ჟან ნოიჰაუსმა გამოიგონა „პრალინე“ — ტემპერირებული შოკოლადის გარსი რბილი თხილის კრემის შიგთავსით — რომელსაც ჩვენი ოსტატები ახლა თქვენ თვალწინ ხელით რთავენ."
        ]
      ],
      glossary: [
        "hygiene hairnet|ჰიგიენური თმის ბადე", "burlap sack|ჯვალოს (უხეში ქსოვილის) ტომარა", "rotating drum|მბრუნავი დოლურა (სახალავი)",
        "cocoa nibs|კაკაოს მარცვლის გულის ნატეხები", "cocoa butter|კაკაოს კარაქი (ბუნებრივი ცხიმი)", "stainless-steel tank|უჟანგავი ფოლადის ავზი",
        "conching|კონშირება (შოკოლადის ხანგრძლივი მორევა სიგლუვისთვის)", "gritty|მარცვლოვანი / ქვიშასავით უხეში", "tempering|ტემპერირება (შოკოლადის თერმული დამუშავება)", "hazelnut cream|თხილის კრემი"
      ],
      questions: [
        "In which Belgian city is the Maison Vermeulen Chocolate Factory located?|In Bruges|In Brussels|In Antwerp|In Ghent",
        "What two hygiene items must visitors wear before entering the production gallery?|A white hygiene hairnet and blue shoe covers|Rubber boots and a yellow helmet|A thick winter coat and woollen gloves|Safety goggles and a raincoat",
        "From which three countries do the sacks of dried cacao beans arrive at the factory?|Ghana, Ecuador, and Madagascar|Spain, Italy, and Greece|Canada, Norway, and Sweden|Japan, China, and Korea",
        "At what temperature are the cacao beans roasted in the rotating drums?|At one hundred and thirty degrees Celsius|At one thousand degrees Celsius|At thirty-one degrees Celsius|At zero degrees Celsius",
        "What happens when the roasted 'cocoa nibs' are ground between heavy granite rollers?|The natural cocoa butter inside them melts, turning the nibs into a thick dark paste|They turn into dry white flour|They freeze into solid ice cubes|They evaporate into steam",
        "What is the 'conching' process seen at Window Three?|Stirring liquid chocolate continuously in tanks for 24 hours to make the sugar crystals tiny and smooth|Washing the burlap sacks in hot river water|Wrapping finished chocolate bars in gold foil|Picking cacao pods from trees",
        "Why is conching so important for the texture of the chocolate?|It makes the sugar crystals smaller than 20 microns so the chocolate feels like velvet on the tongue rather than gritty sand|It makes the chocolate taste salty|It turns dark chocolate into white chocolate|It makes the bars twice as heavy",
        "What is 'tempering', and what two qualities does it give to a finished chocolate bar?|Carefully heating and cooling the chocolate to 31°C, giving it a mirror-like shine and a crisp 'snap' when broken|Boiling chocolate with water so it stays liquid forever|Freezing chocolate at minus fifty degrees|Adding chili pepper to make it spicy",
        "What did Belgian chocolatier Jean Neuhaus invent in 1912?|The 'praline' — a tempered chocolate shell filled with soft hazelnut cream|The first steam-powered roasting machine|Hot cocoa drink with marshmallows|The paper box for biscuits",
        "Where will visitors go at the end of the forty-five-minute tour?|To the tasting room to sample warm liquid chocolate and handmade pralines|To the harbour to unload ships|To the roof to plant cacao trees|To the office to pack boxes"
      ]
    },
    {
      num: 35, level: "B1",
      icon: "🦓", genre: "ველური ბუნება",
      title: "დოკუმენტური რეპორტაჟი სერენგეტის დიდ მიგრაციაზე",
      subtitle: "Nature Documentary: The Great Serengeti Migration",
      time: "7 წთ",
      paragraphs: [
        [
          "Across the vast golden plains of East Africa, the greatest wildlife spectacle on Earth is underway. Every year, more than one and a half million wildebeest, accompanied by two hundred thousand zebras and hundreds of thousands of gazelles, walk in a giant clockwise circle covering eight hundred kilometres across the Serengeti in Tanzania and the Maasai Mara in Kenya.",
          "აღმოსავლეთ აფრიკის უკიდეგანო ოქროსფერ ვაკეებზე მიმდინარეობს დედამიწის უდიდესი ველური ბუნების სანახაობა. ყოველწლიურად მილიონ-ნახევარზე მეტი ანტილოპა გნუ, რომლებსაც თან ახლავს ორასი ათასი ზებრა და ასობით ათასი გაზელი, საათის ისრის მიმართულებით გიგანტურ წრეზე გადის რვაას კილომეტრს ტანზანიის სერენგეტისა და კენიის მასაი-მარას ტერიტორიაზე."
        ],
        [
          "What drives this endless journey? The answer is rain and fresh green grass. In January and February, the herds gather on the southern plains of the Serengeti, where nutrient-rich volcanic soil produces lush grass during the wet season. Here, nearly half a million wildebeest calves are born within a तीन-week period! Amazingly, a newborn calf can stand up and run beside its mother just five minutes after birth.",
          "რა ამოძრავებს ამ დაუსრულებელ მოგზაურობას? პასუხი არის წვიმა და ახალი მწვანე ბალახი. იანვარსა და თებერვალში ჯოგები იკრიბებიან სერენგეტის სამხრეთ ვაკეებზე, სადაც წვიმების სეზონზე მინერალებით მდიდარ ვულკანურ ნიადაგზე ხასხასა ბალახი იზრდება. აქ სამკვირიან პერიოდში თითქმის ნახევარი მილიონი გნუს ხბო იბადება! გასაოცარია, მაგრამ ახალშობილ ხბოს დაბადებიდან სულ რაღაც ხუთ წუთში შეუძლია ფეხზე წამოდგომა და დედის გვერდით სირბილი."
        ],
        [
          "By May, the rains stop in the south, the plains dry into dusty brown earth, and the herds begin marching northwest towards the permanent rivers. Scientists have discovered that zebras and wildebeest do not compete for food; instead, they graze as a team! Zebras have sharp front teeth that clip the tall, tough upper stems of the grass, exposing the soft, nutritious lower leaves that wildebeest love to eat.",
          "მაისისთვის სამხრეთში წვიმები წყდება, ვაკეები მტვრიან ყავისფერ მიწად იქცევა და ჯოგები ჩრდილო-დასავლეთით, წყალუხვი მდინარეებისკენ იწყებენ სვლას. მეცნიერებმა აღმოაჩინეს, რომ ზებრები და ანტილოპა გნუები საკვებისთვის ერთმანეთს კი არ ეჯიბრებიან, არამედ ერთ გუნდად ძოვენ! ზებრებს აქვთ წინა ბასრი კბილები, რომლებითაც ბალახის მაღალ, უხეშ ზედა ღეროებს კვნეტენ, რის შემდეგაც ჩნდება ქვედა რბილი, ნოყიერი ფოთლები, რომლებიც გნუებს ძალიან უყვართ."
        ],
        [
          "Furthermore, travelling together helps both species spot predators like lions and cheetahs. Zebras have excellent eyesight and memory for landmarks, while wildebeest have a keen sense of smell and an ability to hear distant rainstorms humming across the plains from fifty kilometres away!",
          "გარდა ამისა, ერთად გადაადგილება ორივე სახეობას ეხმარება ისეთი მტაცებლების შემჩნევაში, როგორებიც არიან ლომები და გეპარდები. ზებრებს აქვთ ბრწყინვალე მხედველობა და გზის ორიენტირების მეხსიერება, ხოლო გნუებს — მახვილი ყნოსვა და უნარი, ორმოცდაათი კილომეტრის მანძილიდან გაიგონონ ვაკეებზე მომავალი ჭექა-ქუხილისა და წვიმის ხმაური!"
        ],
        [
          "In July and August, the herds face their greatest obstacle: crossing the swollen Mara River. Giant Nile crocodiles wait in the muddy water, and the riverbanks are steep and slippery. Once the herds fight their way across to the green pastures of Kenya, they graze until October, when the autumn rains call them back south to start the great circle of life all over again.",
          "ივლისსა და აგვისტოში ჯოგები ყველაზე დიდ დაბრკოლებას აწყდებიან: ეს არის ადიდებული მდინარე მარას გადაკვეთა. მღვრიე წყალში ნილოსის გიგანტური ნიანგები იცდიან, ნაპირები კი ციცაბო და სრიალაა. მას შემდეგ, რაც ჯოგები ბრძოლით გადალახავენ მდინარეს და კენიის მწვანე საძოვრებზე გადავლენ, ისინი ოქტომბრამდე ბალახობენ, სანამ შემოდგომის წვიმები კვლავ სამხრეთისკენ არ მოუხმობს სიცოცხლის დიდი წრებრუნვის თავიდან დასაწყებად."
        ]
      ],
      glossary: [
        "wildlife spectacle|ველური ბუნების სანახაობა", "wildebeest|ანტილოპა გნუ", "gazelle|გაზელი / ქურციკი",
        "volcanic soil|ვულკანური ნიადაგი", "calf (calves)|ხბო / ნაშიერი", "nutritious|ნოყიერი / საკვები ნივთიერებებით მდიდარი",
        "cheetah|გეპარდი", "keen sense of smell|მახვილი ყნოსვა", "swollen river|ადიდებული მდინარე", "slippery|სრიალა / მოლიპული"
      ],
      questions: [
        "How many wildebeest and zebras take part in the Great Migration across the Serengeti and Maasai Mara?|More than 1.5 million wildebeest and 200,000 zebras (plus hundreds of thousands of gazelles)|About ten thousand animals in total|Only five hundred zebras|Fifty million elephants",
        "How long is the giant clockwise circle that the herds walk every year?|Eight hundred kilometres|Eighty kilometres|Eight thousand kilometres|Twenty kilometres",
        "What is the main reason the herds are constantly moving across East Africa?|To follow the seasonal rains and find fresh green grass and water|To escape cold winter snow|Because tourists chase them in cars|To reach the ocean beach",
        "When and where are nearly half a million wildebeest calves born each year?|In January and February, within a three-week period on the southern plains of the Serengeti|In August in the rivers of Kenya|In December on top of mountains|Only once every five years",
        "How quickly can a newborn wildebeest calf stand up and run beside its mother?|Just five minutes after birth|After three weeks|After six months|The next morning",
        "Why don't zebras and wildebeest compete for the same grass when grazing together?|Zebras clip the tall, tough upper stems with their front teeth, exposing the soft lower leaves that wildebeest eat|Zebras only eat tree leaves, while wildebeest eat roots|Wildebeest only eat at night, and zebras eat at noon|Zebras eat fish from the river",
        "How do zebras and wildebeest complement each other's senses to stay safe and find water?|Zebras have sharp eyesight and memory for landmarks, while wildebeest have a keen sense of smell and can hear rainstorms 50 km away|Wildebeest climb trees to look for lions|Zebras can smell water underground|Both animals use echolocation",
        "When do the herds face their most dangerous obstacle, and what is it?|In July and August, when they must cross the swollen Mara River|In January, when they cross a dry desert|In May, when they climb an icy mountain|In November, when they cross a highway",
        "What dangers await the herds in the Mara River?|Giant Nile crocodiles in the muddy water and steep, slippery riverbanks|Sharks and killer whales|Deep snowdrifts|Volcanic lava",
        "When do the herds begin returning south from Kenya back to Tanzania?|In October, when the autumn rains begin in the south|In July|In March|They never return south"
      ]
    },
    {
      num: 36, level: "B1",
      icon: "🌙", genre: "ფსიქოლოგია და ძილი",
      title: "სამეცნიერო პოდკასტი: რატომ ვხედავთ სიზმრებს?",
      subtitle: "Science Podcast: Why Do We Dream Every Night?",
      time: "7 წთ",
      paragraphs: [
        [
          "Hello, everyone, and welcome to 'Mind Matters'! Have you ever woken up in the morning wondering why you just dreamed that you were flying over your old primary school or taking an exam in a language you don't speak? Every single human being dreams for about two hours every night — even people who claim they never dream simply forget their dreams before waking up!",
          "მოგესალმებით ყველას და კეთილი იყოს თქვენი მობრძანება პოდკასტში „გონების საიდუმლოებანი“! გაგიღვიძიათ თუ არა დილით გაკვირვებულს იმის გამო, რომ სიზმარში თქვენს ძველ დაწყებით სკოლას გადაუფრინეთ ან უცნობ ენაზე გამოცდას აბარებდით? უკლებლივ ყველა ადამიანი ყოველ ღამით დაახლოებით ორი საათის განმავლობაში ხედავს სიზმრებს — ისინიც კი, ვინც ამტკიცებენ, რომ სიზმრებს საერთოდ არ ნახულობენ, უბრალოდ გაღვიძებამდე ივიწყებენ მათ!"
        ],
        [
          "In the 1950s, sleep researchers discovered that sleep is not a uniform state of rest. Instead, our brain cycles through four stages of non-REM sleep, followed by a fifth stage called 'REM sleep' (Rapid Eye Movement) every ninety minutes. During REM sleep, our breathing becomes irregular, our eyes dart back and forth beneath our closed eyelids, and brain scans show that our visual and emotional centres are just as active as when we are wide awake!",
          "1950-იან წლებში ძილის მკვლევრებმა აღმოაჩინეს, რომ ძილი არ არის მოსვენების ერთგვაროვანი მდგომარეობა. ამის ნაცვლად, ჩვენი ტვინი ყოველ ოთხმოცდაათ წუთში ერთხელ გადის ნელი ძილის ოთხ ფაზას, რომლებსაც მოსდევს მეხუთე ფაზა — „სწრაფი ძილი“ (REM — თვალების სწრაფი მოძრაობის ფაზა). სწრაფი ძილის დროს სუნთქვა არათანაბარი ხდება, დახუჭული ქუთუთოების ქვეშ თვალები სწრაფად მოძრაობს, ხოლო ტვინის სკანირება აჩვენებს, რომ მხედველობითი და ემოციური ცენტრები ისეთივე აქტიურია, როგორც სრული სიფხიზლისას!"
        ],
        [
          "To prevent us from acting out our vivid REM dreams and hurting ourselves by jumping out of bed, the brainstem sends a chemical signal to the spinal cord that temporarily paralyses our voluntary leg and arm muscles! Meanwhile, the rational, logical part of the brain behind our forehead — the prefrontal cortex — shuts down during REM sleep, which is why we accept bizarre, impossible events in dreams without questioning them.",
          "იმისათვის, რომ ჩვენი მკვეთრი სიზმრების მოქმედებები რეალურად არ შევასრულოთ, ლოგინიდან არ გადმოვხტეთ და თავი არ დავიზიანოთ, ტვინის ღერო ზურგის ტვინს უგზავნის ქიმიურ სიგნალს, რომელიც დროებით თიშავს ხელებისა და ფეხების კუნთებს! ამავდროულად, შუბლის უკან მდებარე ტვინის რაციონალური, ლოგიკური უბანი — პრეფრონტალური ქერქი — სწრაფი ძილის დროს გამორთულია, სწორედ ამიტომ ვიღებთ სიზმარში უცნაურ და შეუძლებელ მოვლენებს ყოველგვარი ეჭვის გარეშე."
        ],
        [
          "Why does the brain put on this nightly theatre show? Neuroscientist Matthew Walker explains that REM dreaming serves two vital functions. First, it acts as 'overnight therapy': during REM sleep, the brain replays emotional experiences from the day in a safe chemical environment free from stress hormones (noradrenaline), stripping away the painful sharp edges of difficult memories so we feel calmer the next morning.",
          "რატომ მართავს ტვინი ამ ყოველღამურ თეატრალურ წარმოდგენას? ნეირომეცნიერი მეთიუ უოკერი განმარტავს, რომ სიზმრებს ორი სასიცოცხლო ფუნქცია აქვს. პირველი: ის მოქმედებს როგორც „ღამის თერაპია“ — სწრაფი ძილის დროს ტვინი სტრესის ჰორმონებისგან (ნორადრენალინისგან) თავისუფალ, უსაფრთხო გარემოში ხელახლა ატრიალებს დღის ემოციურ განცდებს და მძიმე მოგონებებს მტკივნეულ სიმწვავეს აცლის, რათა მეორე დილით თავი უფრო მშვიდად ვიგრძნოთ."
        ],
        [
          "Second, dreaming is an engine of creativity and problem-solving. While dreaming, the brain connects brand-new information with distant, seemingly unrelated memories, finding creative solutions that our logical daytime mind missed. In fact, chemist Dmitri Mendeleev saw the structure of the Periodic Table of Elements in a dream, and musician Paul McCartney woke up with the melody of the famous song 'Yesterday' playing in his head!",
          "მეორე: სიზმარი შემოქმედებითობისა და ამოცანების გადაჭრის მძლავრი ძრავაა. სიზმრის დროს ტვინი სრულიად ახალ ინფორმაციას აკავშირებს შორეულ, ერთი შეხედვით დაუკავშირებელ მოგონებებთან და პოულობს შემოქმედებით გამოსავალს, რომელიც დღის ლოგიკურ გონებას გამორჩა. სხვათა შორის, ქიმიკოსმა დიმიტრი მენდელეევმა ქიმიურ ელემენტთა პერიოდული სისტემის სტრუქტურა სწორედ სიზმარში იხილა, ხოლო მუსიკოსმა პოლ მაკარტნიმ გაიღვიძა ცნობილი სიმღერის — „Yesterday“-ს მელოდიით, რომელიც ძილში ჩაესმა!"
        ]
      ],
      glossary: [
        "uniform state|ერთგვაროვანი მდგომარეობა", "REM (Rapid Eye Movement)|თვალების სწრაფი მოძრაობის (სწრაფი ძილის) ფაზა", "eyelid|ქუთუთო",
        "wide awake|სრულიად ფხიზელი", "act out a dream|სიზმრის მოქმედებების ფიზიკურად შესრულება", "brainstem|ტვინის ღერო",
        "voluntary muscles|ნებითი (კიდურების სამოძრაო) კუნთები", "prefrontal cortex|პრეფრონტალური ქერქი (ლოგიკური აზროვნების უბანი)", "bizarre|უცნაური / ახირებული", "Periodic Table of Elements|ქიმიურ ელემენტთა პერიოდული სისტემა"
      ],
      questions: [
        "Approximately how many hours does every human being spend dreaming each night?|About two hours every night|Only five minutes a week|Eight full hours every night|Some people never dream at all",
        "Why do some people believe that they never dream?|Because they simply forget their dreams before waking up|Because their brain turns off completely at night|Because they sleep with a pillow|Because they drink water before bed",
        "How often does a sleeping person enter a stage of REM (Rapid Eye Movement) sleep?|About every ninety minutes|Only once a month|Every five minutes|Only during daytime naps",
        "What happens to our eyes and visual brain centres during REM sleep?|Our eyes dart back and forth under closed eyelids, and visual/emotional brain centres are as active as when we are awake|Our eyes open wide and our brain activity drops to zero|Our eyes stop moving completely|Only the hearing centre is active",
        "Why doesn't a person jump out of bed and act out their vivid dreams during REM sleep?|The brainstem sends a signal to the spinal cord that temporarily paralyses voluntary arm and leg muscles|Because the bedroom door is locked|Because the muscles are too cold|Because gravity increases at night",
        "Why do we accept bizarre, impossible events in dreams (like flying) without questioning them?|Because the logical prefrontal cortex behind our forehead shuts down during REM sleep|Because our eyes are closed|Because we are too tired to speak|Because dreams only last one second",
        "How does REM dreaming act as 'overnight therapy' according to neuroscientist Matthew Walker?|It replays emotional experiences in a safe environment free from stress hormones, softening painful memories|It erases our entire childhood memory|It makes us sleepwalk around the house|It lowers our body weight",
        "How does dreaming boost creativity and problem-solving?|By connecting new information with distant, seemingly unrelated memories to find novel solutions|By reading textbooks while we are asleep|By keeping the logical prefrontal cortex working overtime|By preventing us from remembering yesterday",
        "What famous scientific breakthrough did chemist Dmitri Mendeleev see in a dream?|The structure of the Periodic Table of Elements|The invention of the telescope|The formula for penicillin|The map of Antarctica",
        "Which famous song melody came to musician Paul McCartney in a dream?|'Yesterday'|'Yellow Submarine'|'Imagine'|'Silent Night'"
      ]
    },
    {
      num: 37, level: "B1",
      icon: "📋", genre: "პროექტების მართვა",
      title: "სამუშაო შეხვედრა წლიური ტექნოლოგიური გამოფენის წინ",
      subtitle: "Team Briefing: Preparing for the Annual Tech Expo",
      time: "7 წთ",
      paragraphs: [
        [
          "Good morning, team! Please grab a cup of coffee and take a seat around the conference table. As you all know, the 'European Green Tech Expo' opens this Thursday at the City Exhibition Centre, and over five thousand visitors are expected to attend over the three days. Let's go through our final preparations so everyone knows their exact role.",
          "დილა მშვიდობისა, გუნდო! გთხოვთ აიღოთ ფინჯანი ყავა და დასხდეთ საკონფერენციო მაგიდის გარშემო. როგორც ყველამ იცით, ამ ხუთშაბათს ქალაქის საგამოფენო ცენტრში იხსნება „ევროპის მწვანე ტექნოლოგიების გამოფენა“ და სამი დღის განმავლობაში ხუთი ათასზე მეტ სტუმარს ველოდებით. მოდით გავიაროთ ჩვენი საბოლოო მოსამზადებელი გეგმა, რათა ყველამ ზუსტად იცოდეს თავისი როლი."
        ],
        [
          "First, our company booth is Stand B-14 in the Main Hall, right opposite the central café — which is a fantastic location with high foot traffic. Tomorrow afternoon, Wednesday, at two o'clock, Lucas and the logistics team will take the company van to set up our wooden display counter, test the two large LED screens, and arrange the product brochures.",
          "პირველი: ჩვენი კომპანიის სტენდია B-14 მთავარ დარბაზში, ზუსტად ცენტრალური კაფეს მოპირდაპირედ — რაც ფანტასტიკური მდებარეობაა ხალხის მაღალი ნაკადით. ხვალ ნაშუადღევს, ოთხშაბათს, ორ საათზე, ლუკასი და ლოგისტიკის გუნდი კომპანიის ფურგონით წავლენ ხის სადემონსტრაციო დახლის ასაწყობად, ორი დიდი LED ეკრანის შესამოწმებლად და პროდუქციის ბროშურების დასალაგებლად."
        ],
        [
          "Second, let's check the printing update. Yesterday, the printing company delivered two thousand colour brochures and five hundred cloth tote bags with our logo. However, Nina noticed a small typo in the phone number on the business cards, so the printer is reprinting them this morning and will deliver the corrected boxes before four o'clock today.",
          "მეორე: შევამოწმოთ ბეჭდვითი მასალების სტატუსი. გუშინ სტამბამ მოიტანა ორი ათასი ფერადი ბროშურა და ხუთასი ნაჭრის ჩანთა ჩვენი ლოგოთი. თუმცა, ნინამ სავიზიტო ბარათებზე ტელეფონის ნომერში პატარა ბეჭდვითი შეცდომა შეამჩნია, ამიტომ სტამბა მათ დღეს დილით თავიდან ბეჭდავს და გასწორებულ ყუთებს დღეს ოთხ საათამდე მოიტანს."
        ],
        [
          "During the exhibition on Thursday, Friday, and Saturday, we will work at the stand in two shifts so nobody gets exhausted. The morning shift runs from nine o'clock until one thirty, and the afternoon shift runs from one thirty until six o'clock. Please wear our dark blue company polo shirts and comfortable shoes, as we will be standing for several hours.",
          "ხუთშაბათს, პარასკევსა და შაბათს, გამოფენის მსვლელობისას, სტენდთან ორ ცვლად ვიმუშავებთ, რათა არავინ გადაიღალოს. დილის ცვლა მუშაობს ცხრა საათიდან პირველის ნახევრამდე (13:30-მდე), ხოლო ნაშუადღევის ცვლა — 13:30-დან საღამოს ექვს საათამდე. გთხოვთ ჩაიცვათ ჩვენი კომპანიის მუქი ლურჯი პოლოს მაისურები და კომფორტული ფეხსაცმელი, რადგან რამდენიმე საათი ფეხზე დგომა მოგვიწევს."
        ],
        [
          "Finally, remember that our main goal at the expo is not just handing out brochures, but building relationships! When visitors stop to test our new solar battery charger, offer them a bottle of water, answer their technical questions clearly, and scan their visitor badge QR code with the tablet so we can send them a follow-up email next Monday.",
          "დაბოლოს, გახსოვდეთ, რომ გამოფენაზე ჩვენი მთავარი მიზანი მხოლოდ ბროშურების დარიგება კი არა, საქმიანი ურთიერთობების დამყარებაა! როდესაც სტუმრები ჩვენი ახალი მზის ელემენტის დამტენის შესამოწმებლად შეჩერდებიან, შესთავაზეთ წყალი, მკაფიოდ უპასუხეთ მათ ტექნიკურ კითხვებს და პლანშეტით დაასკანერეთ მათი სამკერდე ბეიჯის QR-კოდი, რათა მომავალ ორშაბათს საპასუხო წერილი გავუგზავნოთ."
        ]
      ],
      glossary: [
        "conference table|საკონფერენციო მაგიდა", "exhibition / expo|გამოფენა / ექსპო", "foot traffic|გამვლელთა / მבקרებელთა ნაკადი",
        "brochure|ბროშურა / საინფორმაციო ბუკლეტი", "tote bag|ნაჭრის ჩანთა", "typo (typographical error)|ბეჭდვითი შეცდომა (ასოს შეშლა)",
        "business card|სავიზიტო ბარათი", "work in shifts|ცვლებში მუშაობა", "solar battery charger|მზის ენერგიაზე მომუშავე დამტენი", "follow-up email|შეხვედრის შემდგომი (დამაზუსტებელი) ელფოსტა"
      ],
      questions: [
        "When does the 'European Green Tech Expo' open, and how many visitors are expected?|This Thursday, with over five thousand visitors expected over three days|Next month, with five hundred visitors|Tomorrow morning, for one hour only|In December, with ten thousand visitors",
        "Where is the company's booth (Stand B-14) located inside the Main Hall?|Right opposite the central café|In the basement car park|Behind the emergency exit|On the third floor balcony",
        "When will Lucas and the logistics team go to set up the display counter and screens?|Tomorrow afternoon (Wednesday) at two o'clock|On Thursday morning at ten o'clock|On Sunday night|Next week",
        "What items did the printing company deliver yesterday?|Two thousand colour brochures and five hundred cloth tote bags with the company logo|Computers and tablets|Dark blue shoes|Bottles of water",
        "Why is the printing company reprinting the business cards this morning?|Because Nina noticed a small typo in the phone number on the cards|Because the cards were printed in the wrong language|Because the boxes got wet in the rain|Because they forgot to put the company name",
        "When will the corrected boxes of business cards be delivered?|Before four o'clock today|On Saturday evening|Next Monday|They cannot be reprinted in time",
        "Why will the team work in two shifts (9:00–13:30 and 13:30–18:00) during the expo?|So that nobody gets exhausted from standing all day|Because the hall only allows two people at a time|Because the lights turn off at noon|Because half the team is on holiday",
        "What clothing should team members wear at the exhibition stand?|Dark blue company polo shirts and comfortable shoes|Black formal suits and high heels|Yellow raincoats and helmets|White lab coats",
        "What new product will visitors be testing at the company's stand?|A new solar battery charger|An electric bicycle|A coffee machine|A smartphone camera",
        "How will team members collect contact details from interested visitors to send a follow-up email on Monday?|By scanning the QR code on the visitor's badge with a tablet|By writing names on paper napkins|By taking photographs of their passports|By asking them to mail a letter"
      ]
    },
    {
      num: 38, level: "B1",
      icon: "🏔️", genre: "სარკინიგზო მოგზაურობა",
      title: "სამოგზაურო გადაცემა: ალპების პანორამული მატარებელი",
      subtitle: "Travel Broadcast: Aboard the Glacier Express in the Swiss Alps",
      time: "7 წთ",
      paragraphs: [
        [
          "In an age when high-speed trains race across Europe at three hundred kilometres per hour, one red train in Switzerland proudly calls itself 'the slowest express train in the world'! Welcome to our travel special aboard the famous Glacier Express, which travels across the heart of the Swiss Alps from the mountain resort of Zermatt to St. Moritz.",
          "ეპოქაში, როდესაც ჩქაროსნული მატარებლები ევროპას საათში სამასი კილომეტრის სიჩქარით კვეთენ, შვეიცარიის ერთი წითელი მატარებელი თავს ამაყად უწოდებს „მსოფლიოში ყველაზე ნელ ექსპრესს“! კეთილი იყოს თქვენი მობრძანება ჩვენს სპეციალურ სამოგზაურო რეპორტაჟში ცნობილი „გლეტჩერ-ექსპრესის“ (Glacier Express) ბორტიდან, რომელიც შვეიცარიის ალპების გულს კვეთს სამთო კურორტ ცერმატიდან სანქტ-მორიცამდე."
        ],
        [
          "The journey covers just two hundred and ninety kilometres, yet it takes a full eight hours — an average speed of only thirty-six kilometres per hour! Why does nobody complain about the slow pace? Because every single carriage has giant panoramic glass windows that curve all the way up into the roof, giving passengers an unobstructed view of snow-capped peaks, deep gorges, and alpine meadows.",
          "მარშრუტი სულ რაღაც ორას ოთხმოცდაათ კილომეტრს მოიცავს, მაგრამ მის გავლას სრული რვა საათი სჭირდება — საშუალო სიჩქარე საათში მხოლოდ ოცდათექვსმეტი კილომეტრია! რატომ არავინ წუწუნებს ასეთ ნელ სვლაზე? იმიტომ, რომ თითოეულ ვაგონს აქვს გიგანტური პანორამული მინის ფანჯრები, რომლებიც პირდაპირ სახურავამდე ადის და მგზავრებს თოვლიანი მწვერვალების, ღრმა ხეობებისა და ალპური მდელოების სრულ ხედს უშლის თვალწინ."
        ],
        [
          "During the eight-hour route, the train performs an astonishing feat of mountain engineering: it crosses two hundred and ninety-one bridges and passes through ninety-one tunnels! When the mountain slopes become too steep for normal smooth rails, a special toothed wheel underneath the train locks into a notched 'rack rail' in the middle of the track, pulling the carriages safely up to the Oberalp Pass at two thousand metres above sea level.",
          "რვასაათიანი მარშრუტის განმავლობაში მატარებელი სამთო ინჟინერიის გასაოცარ მიღწევას გვიჩვენებს: იგი კვეთს ორას ოთხმოცდათერთმეტ ხიდს და გადის ოთხმოცდათერთმეტ გვირაბს! როდესაც მთის ფერდობები ჩვეულებრივი გლუვი რელსებისთვის ზედმეტად ციცაბო ხდება, მატარებლის ქვეშ არსებული სპეციალური კბილანური ბორბალი ეჭიდება ლიანდაგის შუაში დაგებულ დაკბილულ რელსს და ვაგონები უსაფრთხოდ აჰყავს ობერალპის უღელტეხილზე, ზღვის დონიდან ორი ათასი მეტრის სიმაღლეზე."
        ],
        [
          "The most dramatic moment of the trip comes in the afternoon as the train approaches the Landwasser Viaduct. Standing sixty-five metres above the rushing river below, this curved limestone bridge has six tall arches and leads directly into the vertical rock wall of a cliff tunnel without any warning!",
          "მოგზაურობის ყველაზე შთამბეჭდავი მომენტი დგება ნაშუადღევს, როდესაც მატარებელი უახლოვდება ლანდვასერის ვიადუკს (მაღალ თაღოვან ხიდს). მდინარის თავზე სამოცდახუთი მეტრის სიმაღლეზე აღმართულ ამ მრუდე კირქვის ხიდს აქვს ექვსი მაღალი თაღი და ყოველგვარი გაფრთხილების გარეშე პირდაპირ ვერტიკალურ კლდეში გაჭრილ გვირაბში შედის!"
        ],
        [
          "Even the drinking glasses in the dining car have a clever Swiss design: because the train climbs and descends steep gradients all day, the stem of each glass is tilted at an angle so your drink stays level on the table without spilling! Whether you travel in summer when cows graze among wildflowers, or in winter when the valleys are covered in deep snow, the Glacier Express is an unforgettable railway adventure.",
          "ვაგონ-რესტორნის სასმელ ჭიქებსაც კი ჭკვიანური შვეიცარიული დიზაინი აქვს: რადგან მატარებელი მთელი დღე ციცაბო აღმართებსა და დაღმართებზე მოძრაობს, თითოეული ჭიქის ფეხი დახრილი კუთხით არის ჩამოსხმული, რათა სასმელი მაგიდაზე არ დაიღვაროს და ჰორიზონტალურად დარჩეს! იმოგზაურებთ ზაფხულში, როცა მინდვრის ყვავილებში ძროხები ბალახობენ, თუ ზამთარში, როცა ხეობები ღრმა თოვლითაა დაფარული, „გლეტჩერ-ექსპრესი“ დაუვიწყარი სარკინიგზო თავგადასავალია."
        ]
      ],
      glossary: [
        "slowest express train|ყველაზე ნელი ჩქაროსნული მატარებელი", "panoramic window|პანორამული (ფართო ხედის) ფანჯარა", "unobstructed view|დაუბრკოლებელი / სრული ხედი",
        "snow-capped peak|თოვლით დაფარული მწვერვალი", "toothed wheel / rack rail|კბილანური ბორბალი / დაკბილული რელსი", "mountain pass|მთის უღელტეხილი",
        "viaduct|ვიადუკი (მაღალი მრავალთაღოვანი ხიდი ხეობაზე)", "limestone arch|კირქვის თაღი", "steep gradient|ციცაბო დახრილობა (აღმართი/დაღმართი)", "tilted at an angle|კუთხით გადახრილი"
      ],
      questions: [
        "What nickname does the Glacier Express proudly give itself, and which two Swiss resorts does it connect?|'The slowest express train in the world', connecting Zermatt and St. Moritz|'The fastest bullet train in Europe', connecting Geneva and Zurich|'The midnight mountain train', connecting Vienna and Milan|'The underground alpine express'",
        "How long is the Glacier Express route, and how many hours does the journey take?|290 kilometres, taking a full eight hours (an average speed of 36 km/h)|1,000 kilometres, taking two hours|50 kilometres, taking ten hours|500 kilometres, taking three hours",
        "What is special about the windows on the Glacier Express carriages?|They are giant panoramic glass windows that curve all the way up into the roof|They are tiny round windows like on a submarine|There are no windows at all|They are made of dark green glass",
        "How many bridges and how many tunnels does the train pass through during the eight-hour trip?|291 bridges and 91 tunnels|Only 5 bridges and 2 tunnels|1,000 bridges and 500 tunnels|20 bridges and no tunnels",
        "How does the train climb steep mountain slopes without slipping backwards on the rails?|A special toothed wheel underneath the train locks into a notched 'rack rail' in the middle of the track|Horses pull the train up the steepest hills|Passengers get out and push|It uses jet engines on the roof",
        "How high above sea level is the Oberalp Pass, the highest point on the route?|Two thousand metres above sea level|Five hundred metres above sea level|Eight thousand metres above sea level|At sea level",
        "What makes the Landwasser Viaduct such a dramatic sight for passengers?|It stands 65 metres above the river on six limestone arches and leads directly into a vertical cliff tunnel|It is a floating wooden bridge on a lake|It is made completely of glass|It goes underwater through a river",
        "Why is the stem of each drinking glass on the train tilted at an angle?|So that drinks stay level on the table without spilling when the train climbs steep gradients|Because the glassmaker made a mistake|To make the glasses fit in a smaller box|So passengers drink faster",
        "What can passengers see in the alpine valleys when travelling on the train in summer?|Cows grazing among wildflowers in green meadows|Frozen lakes with ice skaters|Sand dunes and camels|Palm trees and beaches",
        "What colour is the Glacier Express train?|Red|Bright yellow|Dark green|Black"
      ]
    },
    {
      num: 39, level: "B1",
      icon: "♻️", genre: "ეკოლოგია და მომავალი",
      title: "ეკოლოგიური რუბრიკა: უნარჩენო სუპერმარკეტები",
      subtitle: "Environmental Talk: Inside a Zero-Waste Supermarket",
      time: "7 წთ",
      paragraphs: [
        [
          "Think about the last time you unpacked your shopping bags after a trip to a regular supermarket. Within ten minutes, your kitchen bin was probably half full of single-use plastic wrappers, polystyrene trays, cardboard boxes, and plastic bags! Globally, packaging makes up nearly forty percent of all plastic waste, and most of it is used only once before being thrown away.",
          "გაიხსენეთ ბოლო შემთხვევა, როდესაც ჩვეულებრივ სუპერმარკეტში სტუმრობის შემდეგ სახლში სავაჭრო პარკები ამოალაგეთ. ათ წუთში თქვენი სამზარეულოს სანაგვე ურნა ალბათ სანახევროდ გაივსო ერთჯერადი პლასტიკური შესაფუთი ცელოფნებით, პენოპლასტის ლანგრებით, მუყაოს ყუთებითა და პარკებით! მსოფლიო მასშტაბით, შესაფუთი მასალები მთელი პლასტიკური ნარჩენების თითქმის ორმოც პროცენტს შეადგენს და მათი უმეტესობა გადაგდებამდე მხოლოდ ერთხელ გამოიყენება."
        ],
        [
          "Today on 'Green Planet Radio', we are visiting 'The Refill Pantry', a zero-waste grocery store that opened in our city six months ago. When you walk through the door, the first thing you notice is the absence of colourful plastic packets. Instead, the walls are lined with hundreds of transparent glass dispensers filled with rice, pasta, oats, lentils, coffee beans, nuts, and dried fruit.",
          "დღეს გადაცემაში „მწვანე პლანეტის რადიო“ ვსტუმრობთ „შესავსებ საკუჭნაოს“ (The Refill Pantry) — უნარჩენო სასურსათო მაღაზიას, რომელიც ჩვენს ქალაქში ექვსი თვის წინ გაიხსნა. კარში შესვლისთანავე პირველი, რასაც ამჩნევთ, ფერადი პლასტიკური შეკვრების არარსებობაა. ამის ნაცვლად, კედლების გასწვრივ ჩამწკრივებულია ასობით გამჭვირვალე მინის დისპენსერი (ჩამოსასხმელი კონტეინერი), რომლებიც სავსეა ბრინჯით, პასტით, შვრიით, ოსპით, ყავის მარცვლებით, თხილეულითა და ჩირით."
        ],
        [
          "The store owner, Clara, explains the simple cuatro-step system for shopping here: 'Step One: bring your own clean glass jars, cloth bags, or plastic boxes from home. Step Two: before you put any food inside, place your empty jar on the digital scale at the entrance. The scale prints a small sticker with a barcode showing the exact weight of your empty jar — called the tare weight!'",
          "მაღაზიის მფლობელი, კლარა, გვიხსნის აქ შოპინგის მარტივ, ოთხსაფეხურიან სისტემას: „ნაბიჯი პირველი: სახლიდან მოიტანეთ თქვენი სუფთა მინის ქილები, ნაჭრის ტომსიკები ან კონტეინერები. ნაბიჯი მეორე: სანამ შიგნით რაიმე პროდუქტს ჩაყრით, დადეთ თქვენი ცარიელი ქილა შესასვლელში მდგარ ციფრულ სასწორზე. სასწორი ამობეჭდავს პატარა შტრიხკოდიან სტიკერს, რომელზეც მითითებულია თქვენი ცარიელი ქილის ზუსტი წონა — ეგრეთ წოდებული ტარის წონა!“"
        ],
        [
          "She continues: 'Step Three: go to the dispensers, pull the metal handle, and fill your jar with as much or as little food as you need — whether it is fifty grams of cinnamon or two kilograms of brown rice. Step Four: at the cash desk, the scanner reads your sticker and automatically subtracts the weight of your heavy glass jar, so you only pay for the food inside!'",
          "ის განაგრძობს: „ნაბიჯი მესამე: მიდით დისპენსერებთან, ჩამოწიეთ ლითონის სახელური და აავსეთ ქილა ზუსტად იმდენი პროდუქტით, რამდენიც გჭირდებათ — იქნება ეს ორმოცდაათი გრამი დარიჩინი თუ ორი კილოგრამი ყავისფერი ბრინჯი. ნაბიჯი მეოთხე: სალაროსთან სკანერი კითხულობს თქვენს სტიკერს და მთლიანი წონიდან ავტომატურად აკლებს მძიმე მინის ქილის წონას, ასე რომ თქვენ იხდით მხოლოდ შიგნით მოთავსებული საკვების საფასურს!“"
        ],
        [
          "In another corner of the shop, stainless-steel taps allow customers to refill their own bottles with olive oil, honey, liquid soap, and laundry detergent. Besides eliminating plastic waste, shopping this way reduces food waste at home: instead of being forced to buy a huge plastic bag of a new spice when a recipe only calls for one spoonful, you buy the exact amount you need!",
          "მაღაზიის მეორე კუთხეში დამონტაჟებული უჟანგავი ფოლადის ონკანები მყიდველებს საშუალებას აძლევს, საკუთარი ბოთლები შეავსონ ზეითუნის ზეთით, თაფლით, თხევადი საპნითა და სარეცხი სითხით. პლასტიკური ნარჩენების შემცირების გარდა, ასეთი შოპინგი სახლში საკვების გადაყრასაც ამცირებს: ნაცვლად იმისა, რომ იძულებული იყოთ იყიდოთ ახალი სანელებლის მთელი დიდი შეკვრა, როცა რეცეპტში მხოლოდ ერთი კოვზია საჭირო, ყიდულობთ ზუსტად იმ რაოდენობას, რაც გჭირდებათ!"
        ]
      ],
      glossary: [
        "single-use plastic|ერთჯერადი გამოყენების პლასტმასი", "packaging|შეფუთვა / შესაფუთი მასალა", "zero-waste store|უნარჩენო (ეკოლოგიური) მაღაზია",
        "glass dispenser|მინის დისპენსერი / ჩამოსასხმელი კონტეინერი", "lentils|ოსპი (პარკოსანი მცენარე)", "tare weight|ტარის (ცარიელი ჭურჭლის) წონა",
        "barcode|შტრიხკოდი", "subtract (verb)|გამოკლება (მათემატიკურად)", "laundry detergent|სარეცხი საშუალება / სითხე", "food waste|საკვების ნარჩენი / გადაყრილი საკვები"
      ],
      questions: [
        "What percentage of global plastic waste comes from packaging?|Nearly forty percent|Less than two percent|About ten percent|Ninety-five percent",
        "What is the name of the zero-waste grocery store visited in the radio programme?|The Refill Pantry|The Green Basket|Plastic Free Market|City Superstore",
        "How are dry foods like rice, pasta, oats, and coffee beans stored along the walls of the shop?|In hundreds of transparent glass dispensers with metal handles|In colourful plastic bags on the floor|In closed wooden barrels in the basement|In tin cans",
        "What is 'Step One' of shopping at a zero-waste supermarket?|Bring your own clean glass jars, cloth bags, or containers from home|Buy a plastic shopping cart at the door|Wash the floor before entering|Order everything by telephone",
        "Why must you weigh your empty glass jar on the digital scale BEFORE filling it with food (Step Two)?|To print a barcode sticker showing the 'tare weight' (the weight of the empty jar) so you don't pay for the glass|To make sure the glass jar is not too heavy to carry|Because the shop charges a fee for heavy jars|To warm up the glass",
        "What happens at the cash desk in 'Step Four' when the scanner reads your sticker?|It automatically subtracts the weight of your empty glass jar so you only pay for the food inside|It adds five euros for the sticker|It doubles the weight of the rice|It prints a recipe for dinner",
        "What liquid products can customers refill from stainless-steel taps in the corner of the shop?|Olive oil, honey, liquid soap, and laundry detergent|Petrol and motor oil|Hot soup and coffee|Paint and glue",
        "How does shopping at a zero-waste store help reduce 'food waste' at home?|You can buy the exact amount you need (even one spoonful of a spice) instead of being forced to buy a large pre-packaged bag|The food in glass dispensers never needs to be cooked|The store only sells frozen food|Customers are only allowed to buy one item a day",
        "When did 'The Refill Pantry' open in the city?|Six months ago|Twenty years ago|Yesterday morning|Five years ago",
        "What is the main environmental goal of a zero-waste supermarket?|To eliminate single-use plastic packaging and reduce food waste|To sell more cardboard boxes|To replace glass jars with plastic bags|To make shopping take three hours"
      ]
    },
    {
      num: 40, level: "B1",
      icon: "⛵", genre: "საზღვაო ისტორია",
      title: "ისტორიული პოდკასტი: გემ „მერი სელესტის“ საიდუმლო",
      subtitle: "History Podcast: The Mystery of the Mary Celeste",
      time: "7 წთ",
      paragraphs: [
        [
          "On the afternoon of the fifth of December 1872, a British merchant ship called the 'Dei Gratia' was sailing across the Atlantic Ocean about six hundred kilometres west of Portugal. Looking through his telescope, the captain spotted a two-masted sailing ship drifting strangely on the waves. Her sails were partly set, but the ship was moving in a zigzag line with nobody standing at the wooden steering wheel!",
          "1872 წლის 5 დეკემბერს, ნაშუადღევს, ბრიტანული სავაჭრო გემი „დეი გრაცია“ ატლანტის ოკეანეში, პორტუგალიიდან დასავლეთით დაახლოებით ექვსას კილომეტრში მიცურავდა. დურბინდში გახედვისას კაპიტანმა შეამჩნია ორანძიანი იალქნიანი გემი, რომელიც ტალღებზე უცნაურად ტივტივებდა. მისი იალქნები ნაწილობრივ გაშლილი იყო, მაგრამ გემი ზიგზაგისებურად მოძრაობდა და ხის საჭესთან არავინ იდგა!"
        ],
        [
          "The captain of the Dei Gratia recognized the ship immediately: it was the 'Mary Celeste', an American merchant vessel commanded by his friend, Captain Benjamin Briggs. The Mary Celeste had sailed out of New York Harbor a month earlier, on the seventh of November, bound for Genoa, Italy. Aboard were Captain Briggs, his wife Sarah, their two-year-old daughter Sophia, and a seasoned crew of seven sailors.",
          "„დეი გრაციას“ კაპიტანმა გემი მაშინვე იცნო: ეს იყო „მერი სელესტი“ — ამერიკული სავაჭრო ხომალდი, რომელსაც მისი მეგობარი, კაპიტანი ბენჯამინ ბრიგსი მეთაურობდა. „მერი სელესტი“ ერთი თვით ადრე, 7 ნოემბერს, გავიდა ნიუ-იორკის ნავსადგურიდან იტალიის ქალაქ გენუის მიმართულებით. ბორტზე იმყოფებოდნენ კაპიტანი ბრიგსი, მისი მეუღლე სარა, მათი ორი წლის ქალიშვილი სოფია და შვიდი გამოცდილი მეზღვაურისგან შემდგარი ეკიპაჟი."
        ],
        [
          "When three sailors rowed over and climbed aboard the Mary Celeste, they found an eerie silence. There was not a single living soul on the ship! Contrary to later newspaper myths, there were no steaming cups of tea on the table; however, the ship was in good sailing condition, and the storehouse was packed with enough food and fresh water to last the crew for six months.",
          "როდესაც სამი მეზღვაური ნავით მიუახლოვდა და „მერი სელესტის“ გემბანზე ავიდა, იქ უცნაური სიჩუმე დახვდათ. გემზე არცერთი ცოცხალი სული არ იყო! მოგვიანებით გაზეთებში გავრცელებული მითების საპირისპიროდ, მაგიდაზე ცხელი ჩაის ფინჯნები არ მდგარა; თუმცა, გემი სრულიად გამართულ მდგომარეობაში იყო, საკუჭნაო კი სავსე გახლდათ ეკიპაჟისთვის ექვსი თვის სამყოფი საკვებითა და მტკნარი წყლით."
        ],
        [
          "Inside the cabins, the sailors' oilskin boots, pipes, and warm coats were still neatly in place, proving that the crew had not left because of pirates. The cargo hold contained one thousand seven hundred barrels of industrial alcohol. Only four things were missing from the ship: the captain's navigation instruments (his sextant and marine chronometer), the ship's papers, and the single small wooden lifeboat!",
          "კაიუტებში მეზღვაურების წყალგაუმტარი ჩექმები, ჩიბუხები და თბილი ქურთუკები ხელუხლებლად ეწყო თავის ადგილზე, რაც ამტკიცებდა, რომ ეკიპაჟს გემი მეკობრეების გამო არ მიუტოვებია. სატვირთო ტრიუმში ინახებოდა სამრეწველო სპირტის ათას შვიდასი კასრი. გემიდან გამქრალი იყო მხოლოდ ოთხი რამ: კაპიტნის სანავიგაციო ხელსაწყოები (სექსტანტი და საზღვაო ქრონომეტრი), გემის საბუთები და ერთადერთი პატარა ხის სამაშველო ნავი!"
        ],
        [
          "The last entry in the ship's logbook was dated nine days earlier, on the twenty-fifth of November, near the Azores islands. Why would an experienced captain abandon a sound ship in the middle of the ocean? Modern historians believe that because nine of the alcohol barrels had leaked, dangerous alcohol fumes built up in the hold. Fearing the ship was about to explode, Captain Briggs likely ordered everyone into the lifeboat tied to the ship by a long rope — only for a sudden storm to snap the rope and leave the lifeboat behind forever.",
          "გემის ჟურნალში ბოლო ჩანაწერი ცხრა დღით ადრე, 25 ნოემბრით თარიღდებოდა, აზორის კუნძულების მახლობლად. რატომ უნდა მიეტოვებინა გამოცდილ კაპიტანს მწყობრში მყოფი გემი შუა ოკეანეში? თანამედროვე ისტორიკოსები ვარაუდობენ, რომ რადგან სპირტის ცხრა კასრმა გაჟონა, ტრიუმში საშიში აალებადი ორთქლი დაგროვდა. აფეთქების შიშით, კაპიტანმა ბრიგსმა სავარაუდოდ ყველას უბრძანა დროებით გადამსხდარიყვნენ გრძელი თოკით გემზე გამობმულ სამაშველო ნავში — მაგრამ უეცარმა ქარიშხალმა თოკი გაწყვიტა და ნავი სამუდამოდ ჩამოიტოვა უკან."
        ]
      ],
      glossary: [
        "merchant ship|სავაჭრო გემი", "drift on the waves|ტალღებზე უმართავად ტივტივი (დრეიფი)", "steering wheel (helm)|გემის საჭე (შტურვალი)",
        "bound for (destination)|მიმავალი (დანიშნულების ადგილისკენ)", "eerie silence|უცნაური / შემზარავი სიჩუმე", "cargo hold|გემის სატვირთო ტრიუმი",
        "industrial alcohol|სამრეწველო (ტექნიკური) სპირტი", "lifeboat|სამაშველო ნავი", "ship's logbook|გემის სავახტო ჟურნალი", "fumes|აირები / ორთქლი"
      ],
      questions: [
        "When and where was the 'Mary Celeste' found drifting on the waves?|On 5 December 1872, in the Atlantic Ocean about 600 kilometres west of Portugal|In November 1912, in the icy North Atlantic|In July 1800, in the Mediterranean Sea|In 1950, near the coast of Australia",
        "Which ship spotted the Mary Celeste, and why did the captain notice something was wrong?|The British ship 'Dei Gratia'; the Mary Celeste was moving in a zigzag line with nobody at the steering wheel|A Spanish fishing boat; the Mary Celeste was on fire|An American warship; the sails were all missing|A lighthouse keeper on the coast",
        "Where had the Mary Celeste sailed from on 7 November, and what was her destination?|From New York Harbor, bound for Genoa, Italy|From London, bound for Boston|From Lisbon, bound for Rio de Janeiro|From Venice, bound for Athens",
        "Who was aboard the Mary Celeste when she left New York?|Ten people in total: Captain Benjamin Briggs, his wife Sarah, their two-year-old daughter Sophia, and seven sailors|Fifty tourists and ten sailors|Only Captain Briggs and his dog|Two hundred soldiers",
        "What did the sailors from the Dei Gratia find in the ship's storehouse?|Enough food and fresh water to last the crew for six months|Empty shelves with no food or water|Chests of gold coins|Wild animals in cages",
        "How did the investigators know that pirates had not attacked the ship?|The sailors' boots, pipes, and warm coats were still neatly in place, and the cargo of 1,700 barrels was untouched|The pirates left a signed letter on the table|There were cannonballs on the deck|The ship was locked from the inside",
        "What cargo was the Mary Celeste carrying in her hold?|One thousand seven hundred barrels of industrial alcohol|Sacks of coffee beans and sugar|Blocks of Italian marble|Wooden furniture",
        "What four things were missing from the ship?|The captain's sextant, the marine chronometer, the ship's papers, and the single small wooden lifeboat|All the sails, the anchor, the steering wheel, and the food|The captain's coat and the kitchen stove|The compass and the bell",
        "When and where was the last entry written in the ship's logbook?|Nine days earlier, on 25 November, near the Azores islands|On the morning of 5 December|Two months earlier in New York|There was no logbook on board",
        "What is the most likely modern historical explanation for why Captain Briggs ordered everyone into the lifeboat?|Nine alcohol barrels had leaked, and fearing the fumes in the hold would explode, they got into the lifeboat tied by a rope that later snapped|They saw a desert island with fruit trees and decided to live there|They thought the ship was sinking because of an iceberg|They wanted to row back to New York"
      ]
    },
    {
      num: 41, level: "B1",
      icon: "💧", genre: "ჯანმრთელობა და მეცნიერება",
      title: "რადიოგადაცემა: წყლის ბალანსი და ტვინის მუშაობა",
      subtitle: "Health Radio: How Hydration Affects Brain and Body",
      time: "7 წთ",
      paragraphs: [
        [
          "We all know that human beings cannot survive for more than a few days without water, as water makes up around sixty percent of an adult's body weight. However, many people think that dehydration only happens to runners in a hot desert! On today's 'Science of Health' programme, sports physiologist Dr Paul Sterling explains how even mild daily dehydration affects our mood, memory, and energy.",
          "ყველამ ვიცით, რომ ადამიანი წყლის გარეშე რამდენიმე დღეზე მეტხანს ვერ გაძლებს, რადგან წყალი ზრდასრული ადამიანის სხეულის წონის დაახლოებით სამოც პროცენტს შეადგენს. თუმცა, ბევრს ჰგონია, რომ გაუწყლოება (დეჰიდრატაცია) მხოლოდ ცხელ უდაბნოში მორბენლებს ემართებათ! დღევანდელ გადაცემაში „ჯანმრთელობის მეცნიერება“ სპორტის ფიზიოლოგი, დოქტორი პოლ სტერლინგი განმარტავს, თუ როგორ მოქმედებს თუნდაც მსუბუქი ყოველდღიური გაუწყლოება ჩვენს განწყობაზე, მეხსიერებასა და ენერგიაზე."
        ],
        [
          "Surprisingly, while the average human body is sixty percent water, the human brain and heart are composed of nearly seventy-three percent water! Because brain cells are so sensitive to fluid balance, losing just one to two percent of your body's water — which can easily happen during a busy morning at the office or a one-hour walk — is enough to slow down neural signals.",
          "გასაოცარია, მაგრამ თუ ადამიანის სხეული საშუალოდ სამოცი პროცენტით წყლისგან შედგება, თავის ტვინსა და გულში წყლის წილი თითქმის სამოცდაცამეტ პროცენტს აღწევს! რადგან ტვინის უჯრედები სითხის ბალანსის მიმართ უაღრესად მგრძნობიარეა, სხეულის წყლის მარაგის მხოლოდ ერთი ან ორი პროცენტის დაკარგვაც კი — რაც ადვილად შეიძლება მოხდეს ოფისში დატვირთული დილის ან ერთსაათიანი გასეირნების დროს — საკმარისია ნერვული სიგნალების შესანელებლად."
        ],
        [
          "In university studies, volunteers who were mildly dehydrated by just two percent made twice as many errors on concentration and short-term memory tests as volunteers who drank water regularly. Furthermore, mild dehydration causes blood volume to drop slightly, forcing the heart to beat faster to pump oxygen to the brain, which often triggers afternoon headaches and sudden feelings of fatigue.",
          "საუნივერსიტეტო კვლევებში მოხალისეებმა, რომლებსაც სულ რაღაც ორპროცენტიანი მსუბუქი გაუწყლოება აღენიშნებოდათ, კონცენტრაციისა და მოკლევადიანი მეხსიერების ტესტებში ორჯერ მეტი შეცდომა დაუშვეს, ვიდრე მათ, ვინც წყალს რეგულარულად სვამდა. გარდა ამისა, მსუბუქი გაუწყლოება იწვევს სისხლის მოცულობის მცირედ შემცირებას, რაც გულს აიძულებს უფრო სწრაფად იძგეროს ტვინისთვის ჟანგბადის მისაწოდებლად; ეს კი ხშირად იწვევს ნაშუადღევის თავის ტკივილსა და უეცარ დაღლილობას."
        ],
        [
          "Dr Sterling points out an important biological trick: by the time your mouth feels dry and you consciously feel thirsty, your body has already lost between one and two percent of its water! Therefore, waiting until you feel very thirsty is not the best strategy, especially during exercise or when working in heated winter rooms where dry air evaporates moisture from your skin.",
          "დოქტორი სტერლინგი მიუთითებს მნიშვნელოვან ბიოლოგიურ თავისებურებაზე: იმ დროისთვის, როცა პირის სიმშრალესა და წყურვილს ცნობიერად იგრძნობთ, თქვენს ორგანიზმს უკვე დაკარგული აქვს წყლის მარაგის ერთიდან ორ პროცენტამდე! ამიტომ ძლიერი წყურვილის შეგრძნებამდე მოცდა არ არის საუკეთესო სტრატეგია, განსაკუთრებით ვარჯიშის დროს ან ზამთარში გამთბარ ოთახებში მუშაობისას, სადაც მშრალი ჰაერი კანიდან ტენს აორთქლებს."
        ],
        [
          "How much water do we actually need? While two litres a day is a good general rule, about twenty percent of our daily water actually comes from the food we eat! Cucumbers, watermelon, oranges, tomatoes, and soups are over ninety percent water. Keeping a reusable bottle on your desk and drinking a glass of water every two hours is the simplest way to keep your brain sharp all day.",
          "რეალურად რამდენი წყალი გვჭირდება? მიუხედავად იმისა, რომ დღეში ორი ლიტრი კარგი ზოგადი ориентиრია, ჩვენი დღიური წყლის ნორმის დაახლოებით ოცი პროცენტი სინამდვილეში საკვებიდან შემოგვდის! კიტრი, საზამთრო, ფორთოხალი, პომიდორი და წვნიანები ოთხმოცდაათ პროცენტზე მეტი წყლისგან შედგება. სამუშაო მაგიდაზე მრავალჯერადი ბოთლის დადგმა და ყოველ ორ საათში ერთი ჭიქა წყლის დალევა უმარტივესი გზაა მთელი დღის განმავლობაში გონების სიმკვირცხლის შესანარჩუნებლად."
        ]
      ],
      glossary: [
        "dehydration|გაუწყლოება / დეჰიდრატაცია", "physiologist|ფიზიოლოგი (ორგანიზმის ფუნქციების მკვლევარი)", "fluid balance|სითხის ბალანსი",
        "neural signal|ნერვული სიგნალი / იმპულსი", "blood volume|სისხლის მოცულობა", "fatigue|დაღლილობა / ქანცის გაწყვეტა",
        "consciously|ცნობიერად / გააზრებულად", "evaporate moisture|ტენის / სინესტის აორთქლება", "reusable bottle|მრავალჯერადი გამოყენების ბოთლი", "keep your brain sharp|გონების სიმკვირცხლის / სიფხიზლის შენარჩუნება"
      ],
      questions: [
        "What percentage of an adult human's total body weight is made up of water?|Around sixty percent|Around ten percent|Ninety-nine percent|Twenty-five percent",
        "What percentage of the human brain and heart is composed of water?|Nearly seventy-three percent|Only thirty percent|Fifty percent|One hundred percent",
        "How much water loss is enough to start slowing down neural signals in the brain?|Losing just one to two percent of your body's water|Losing fifty percent of your body's water|Losing twenty percent|Only after three days without water",
        "How did mildly dehydrated volunteers perform on concentration and short-term memory tests in university studies?|They made twice as many errors as volunteers who drank water regularly|They finished the tests ten minutes faster|They scored 100% on every question|There was no difference at all",
        "Why does mild dehydration often trigger afternoon headaches and fatigue?|Because blood volume drops slightly, forcing the heart to beat faster to pump oxygen to the brain|Because water makes the skull heavier|Because the stomach stops digesting food|Because the eyes close automatically",
        "How much water has your body already lost by the time your mouth feels dry and you consciously feel thirsty?|Between one and two percent of its water|Zero percent|Ten percent|Half of its water",
        "Why can people easily become dehydrated indoors during winter?|Because heated winter rooms have dry air that evaporates moisture from the skin|Because cold water freezes in the pipes|Because people sleep longer in winter|Because people wear woollen coats",
        "Approximately what percentage of our daily water intake comes from the food we eat?|About twenty percent|About eighty percent|Zero percent|Only one percent",
        "Which foods mentioned in the broadcast are composed of over ninety percent water?|Cucumbers, watermelon, oranges, tomatoes, and soups|Bread, rice, pasta, and almonds|Cheese, butter, and chocolate|Roast beef and biscuits",
        "What simple habit does Dr Sterling recommend to keep your brain sharp throughout the workday?|Keeping a reusable bottle on your desk and drinking a glass of water every two hours|Drinking two litres of water all at once before going to sleep|Drinking only strong black coffee all day|Waiting until evening to drink water"
      ]
    },
    {
      num: 42, level: "B1",
      icon: "🏺", genre: "არქეოლოგია",
      title: "მუზეუმის აუდიო-გიდი: ჩინეთის ტერაკოტის არმია",
      subtitle: "Museum Audio Guide: The Terracotta Warriors of Xi'an",
      time: "7 წთ",
      paragraphs: [
        [
          "Welcome to Pit One of the Emperor Qin Shi Huang Mausoleum Museum here in Xi'an, China! Looking down from this viewing gallery into the vast underground hall, you are gazing at one of the greatest archaeological discoveries of the twentieth century: an army of more than eight thousand life-sized clay soldiers, horses, and chariots standing in battle formation after two thousand two hundred years underground!",
          "კეთილი იყოს თქვენი მობრძანება იმპერატორ ცინ შიხუანდის მავზოლეუმის მუზეუმის პირველ დარბაზში, ქალაქ სიანში, ჩინეთში! როდესაც ამ გადმოსახედი გალერეიდან უზარმაზარ მიწისქვეშა დარბაზს დაჰყურებთ, თქვენს თვალწინ იშლება მეოცე საუკუნის ერთ-ერთი უდიდესი არქეოლოგიური აღმოჩენა: რვა ათასზე მეტი ნატურალური ზომის თიხის ჯარისკაცის, ცხენისა და საბრძოლო ეტლისგან შემდგარი არმია, რომელიც მიწის ქვეშ ორი ათას ორასი წლის განმავლობაში საბრძოლო წყობით იდგა!"
        ],
        [
          "Remarkably, nobody knew this underground army existed until March 1974, when a group of local farmers were digging a water well in a dry orchard during a spring drought. About four metres below the surface, their shovels struck hard red baked clay, and they uncovered a life-sized terracotta head and several bronze arrowheads!",
          "საოცარია, მაგრამ ამ მიწისქვეშა არმიის არსებობის შესახებ არავინ არაფერი იცოდა 1974 წლის მარტამდე, როდესაც ადგილობრივი ფერმერების ჯგუფი საგაზაფხულო გვალვის დროს ხეხილის ბაღში წყლის ჭას თხრიდა. ზედაპირიდან დაახლოებით ოთხი მეტრის სიღრმეზე მათი ნიჩბები მაგარ წითელ გამომწვარ თიხას მოხვდა და მათ მიწიდან ამოიღეს ნატურალური ზომის ტერაკოტის თავი და რამდენიმე ბრინჯაოს ისრისპირი!"
        ],
        [
          "When archaeologists excavated the site, they found three huge underground pits built around 210 BC to guard the tomb of Qin Shi Huang — the First Emperor who united China, standardized coins and writing, and connected the early walls into the Great Wall. The emperor believed that this clay army would protect him in the afterlife just as his real soldiers had protected his empire.",
          "როდესაც არქეოლოგებმა ტერიტორია გათხარეს, მათ აღმოაჩინეს ძვ. წ. დაახლოებით 210 წელს აგებული სამი უზარმაზარი მიწისქვეშა თხრილი (დარბაზი), რომლებიც იცავდა ცინ შიხუანდის — იმ პირველი იმპერატორის აკლდამას, რომელმაც გააერთიანა ჩინეთი, შემოიღო ერთიანი მონეტები და დამწერლობა, და ადრეული კედლები ჩინეთის დიდ კედლად შეაერთა. იმპერატორს სწამდა, რომ ეს თიხის არმია მას საიქიოშიც ისევე დაიცავდა, როგორც ნამდვილი ჯარისკაცები იცავდნენ მის იმპერიას."
        ],
        [
          "Look closely at the faces of the warriors in the front ranks through your binoculars. The most astonishing fact about the Terracotta Army is that no two soldiers have the exact same face! Craftsmen made the bodies, legs, and arms separately in moulds, and then sculpted each warrior's facial expression, moustache, hairstyle, and ears by hand. By looking at a soldier's uniform and topknot hairstyle, you can tell whether he is a general, an archer, a charioteer, or an infantryman.",
          "დურბინდით ახლოდან დააკვირდით წინა რიგებში მდგომი მეომრების სახეებს. ტერაკოტის არმიის ყველაზე გასაოცარი თავისებურება ის არის, რომ არცერთ ორ ჯარისკაცს არ აქვს ზუსტად ერთნაირი სახე! ხელოსნები ტანს, ფეხებსა და ხელებს ცალ-ცალკე ყალიბებში ამზადებდნენ, შემდეგ კი თითოეული მეომრის სახის გამომეტყველებას, ულვაშს, ვარცხნილობასა და ყურებს ხელით აქანდაკებდნენ. ჯარისკაცის უნიფორმისა და თმის კონის ფორმის მიხედვით შეგიძლიათ გაარჩიოთ, ვინ არის გენერალი, მშვილდოსანი, მეეტლე თუ ქვეითი მეომარი."
        ],
        [
          "Today, the statues look grey-brown, but when they were first placed in the pits two millennia ago, every warrior was painted in bright red, green, purple, and blue mineral colours, and held real bronze swords, spears, and crossbows! When the statues were first exposed to the dry air in the 1970s, the ancient paint curled and flaked off within minutes. Modern chemists have now developed a special protective spray to preserve the original colours on newly excavated warriors.",
          "დღეს ქანდაკებები მონაცრისფრო-ყავისფერი ჩანს, მაგრამ ორი ათასწლეულის წინ, როდესაც ისინი პირველად ჩაადგეს მიწისქვეშა დარბაზებში, თითოეული მეომარი შეღებილი იყო ხასხასა წითელ, მწვანე, იისფერ და ლურჯ მინერალურ ფერებში და ხელში ეჭირა ნამდვილი ბრინჯაოს ხმლები, შუბები და არბალეტები! როდესაც 1970-იან წლებში ქანდაკებებს პირველად მოხვდა მშრალი ჰაერი, უძველესი საღებავი რამდენიმე წუთში აიქერცლა და ჩამოცვივდა. თანამედროვე ქიმიკოსებმა უკვე შეიმუშავეს სპეციალური დამცავი სპრეი ახლად გათხრილ მეომრებზე თავდაპირველი ფერების შესანარჩუნებლად."
        ]
      ],
      glossary: [
        "terracotta|ტერაკოტა (გამომწვარი წითელი/ყავისფერი თიხა)", "life-sized|ნატურალური (ადამიანის რეალური) ზომის", "battle formation|საბრძოლო წყობა",
        "drought|გვალვა", "arrowhead|ისრისპირი (ისრის წვერი)", "excavate|არქეოლოგიური გათხრა",
        "afterlife|საიქიო ცხოვრება", "archer and infantryman|მშვილდოსანი და ქვეითი ჯარისკაცი", "crossbow|არბალეტი (სასროლი იარაღი)", "flake off|აქერცვლა / ჩამოცვენა (საღებავის)"
      ],
      questions: [
        "How many clay soldiers, horses, and chariots make up the Terracotta Army in Xi'an?|More than eight thousand life-sized figures|About two hundred small figures|Fifty thousand miniature statues|Only twelve statues",
        "When and how was the Terracotta Army accidentally discovered?|In March 1974, by local farmers digging a water well in an orchard during a drought|In 1900, by railway engineers building a bridge|In 1850, by European explorers|In 2008, during the construction of an airport",
        "How deep below the surface did the farmers' shovels strike the first clay head and bronze arrowheads?|About four metres below the surface|One hundred metres deep|Right on top of the grass|Fifty metres deep",
        "Which historical ruler was the Terracotta Army built to guard around 210 BC?|Qin Shi Huang, the First Emperor who united China|Emperor Marcus Aurelius|Kublai Khan|Cai Lun",
        "Why did the First Emperor have this massive clay army buried near his tomb?|He believed the clay soldiers would protect him in the afterlife just as his real army protected his empire|To hide his gold from bandits|To store grain inside the hollow statues|As a museum for tourists",
        "What is the most astonishing artistic fact about the faces of the eight thousand warriors?|No two soldiers have the exact same face; each facial expression and hairstyle was finished by hand|All eight thousand soldiers have the exact same face from one mould|They have no eyes or ears|Their faces are made of pure bronze",
        "How can archaeologists tell the military rank and role (such as general, archer, or infantryman) of each statue?|By looking at the soldier's uniform, armour, and topknot hairstyle|By reading a paper label on their boots|By the height of their horses|By the colour of the floor tiles",
        "What did the Terracotta Warriors look like when they were first placed underground two thousand years ago?|They were painted in bright red, green, purple, and blue colours and held real bronze weapons|They were plain grey-brown with wooden sticks|They were covered in gold leaf|They were painted completely white",
        "What happened to the ancient paint on the statues when they were first exposed to dry air in the 1970s?|The paint curled and flaked off within minutes|The paint turned bright yellow|The paint melted the clay|Nothing happened to the paint",
        "How do modern chemists protect the original colours on newly excavated warriors today?|By applying a special protective chemical spray as soon as they are uncovered|By keeping the museum flooded with water|By repainting them with modern oil paint|By only excavating at night"
      ]
    },
    {
      num: 43, level: "B1",
      icon: "🛡️", genre: "ციფრული უსაფრთხოება",
      title: "რჩევები კიბერუსაფრთხოებასა და ფიშინგის ამოცნობაზე",
      subtitle: "Consumer Advice: How to Spot Online Scams and Phishing",
      time: "7 წთ",
      paragraphs: [
        [
          "Good afternoon, listeners, and welcome to 'Consumer Watch'! Today we are joined by cybersecurity expert Rachel Vance to talk about one of the fastest-growing crimes in the digital world: 'phishing' — fraudulent emails, text messages, and phone calls designed to trick people into giving away their bank passwords and personal data.",
          "შუადღე მშვიდობისა, მსმენელებო, და კეთილი იყოს თქვენი მობრძანება გადაცემაში „მომხმარებლის გუშაგი“! დღეს ჩვენი სტუმარია კიბერუსაფრთხოების ექსპერტი რეიჩელ ვანსი, რომელთან ერთადაც ვისაუბრებთ ციფრულ სამყაროში ერთ-ერთ ყველაზე სწრაფად მზარდ დანაშაულზე — „ფიშინგზე“, რაც გულისხმობს ყალბ ელფოსტებს, სმს-შეტყობინებებსა და სატელეფონო ზარებს, რომელთა მიზანია მოტყუებით გამოსძალოს ადამიანებს საბანკო პაროლები და პირადი მონაცემები."
        ],
        [
          "Rachel explains why the word 'phishing' sounds like 'fishing': 'Instead of using a fishing rod with a worm on a hook to catch a fish in a lake, online scammers send out thousands of fake messages as bait, hoping that a busy person will click on a dangerous link without looking closely.'",
          "რეიჩელი განმარტავს, თუ რატომ ჟღერს სიტყვა „ფიშინგი“ (phishing) ზუსტად ისე, როგორც „თევზაობა“ (fishing): „ნაცვლად იმისა, რომ ტბაში თევზის დასაჭერად ანკესი და ჭიაყელა გამოიყენონ, ონლაინ თაღლითები სატყუარას სახით აგზავნიან ათასობით ყალბ შეტყობინებას იმ იმედით, რომ დაკავებული ადამიანი ახლოდან დაკვირვების გარეშე დააჭერს სახიფათო ბმულს“."
        ],
        [
          "How can you recognize a phishing message? The first warning sign is 'artificial urgency'. Scammers want you to panic so you act fast without thinking! A typical fake SMS might say: 'Your parcel cannot be delivered today due to an unpaid two-euro fee — click here within thirty minutes!' or 'Your bank account will be locked tonight unless you verify your password immediately!'",
          "როგორ შეგიძლიათ ამოიცნოთ ფიშინგ-შეტყობინება? პირველი საგანგაშო ნიშანია „ხელოვნური გადაუდებლობა“. თაღლითებს სურთ პანიკაში ჩაგაგდონ, რათა დაუფიქრებლად და სწრაფად იმოქმედოთ! ტიპური ყალბი სმს-ი შეიძლება გეუბნებოდეთ: „თქვენი ამანათის მოტანა დღეს ვერ ხერხდება გადაუხდელი ორევროიანი საფასურის გამო — დააჭირეთ აქ ოცდაათ წუთში!“ ან „თქვენი საბანკო ანგარიში ამაღამ დაიბლოკება, თუ დაუყოვნებლივ არ დაადასტურებთ პაროლს!“"
        ],
        [
          "The second sign is a disguised sender address or website link. Even if an email has your bank's official logo at the top, always click on the sender's name to inspect the actual email address! A real bank will never write from a public email domain or a misspelled web address where the letter 'O' is replaced with the number zero. And remember the golden rule: no legitimate bank or government office will ever ask you for your password, PIN, or four-digit SMS code!",
          "მეორე ნიშანია გამომგზავნის შენიღბული მისამართი ან ვებ-ბმული. მაშინაც კი, თუ წერილს თავში თქვენი ბანკის ოფიციალური ლოგო აქვს, ყოველთვის დააჭირეთ გამომგზავნის სახელს რეალური ელფოსტის მისამართის შესამოწმებლად! ნამდვილი ბანკი არასდროს მოგწერთ საჯარო დომენიდან ან შეცდომით დაწერილი ვებ-მისამართიდან, სადაც ასო „O“ ჩანაცვლებულია ციფრ ნულით. და გახსოვდეთ ოქროს წესი: არცერთი ნამდვილი ბანკი ან სახელმწიფო უწყება არასდროს გთხოვთ თქვენს პაროლს, პინ-კოდს ან სმს-ით მოსულ ოთხნიშნა კოდს!"
        ],
        [
          "To protect your accounts, Rachel recommends two simple steps. First, never use the same password for your email, online shopping, and bank accounts; instead, use long passphrases made of four random words. Second, turn on 'Two-Factor Authentication' (2FA) on all your accounts, so that even if someone guesses your password, they still cannot log in without the second security check on your phone.",
          "თქვენი ანგარიშების დასაცავად რეიჩელი გვირჩევს ორ მარტივ ნაბიჯს. პირველი: არასდროს გამოიყენოთ ერთი და იგივე პაროლი ელფოსტის, ონლაინ მაღაზიებისა და საბანკო ანგარიშებისთვის; ამის ნაცვლად, შექმენით გრძელი საპაროლე ფრაზები ოთხი შემთხვევითი სიტყვისგან. მეორე: ყველა ანგარიშზე ჩართეთ „ორფაქტორიანი ავთენტიფიკაცია“ (2FA), რათა პაროლის გაგების შემთხვევაშიც კი უცხო პირმა ვერ შეძლოს შესვლა თქვენს ტელეფონზე მეორე უსაფრთხოების დადასტურების გარეშე."
        ]
      ],
      glossary: [
        "cybersecurity|კიბერუსაფრთხოება", "phishing|ფიშინგი (თაღლითური შეტყობინებით მონაცემების მოპარვა)", "fraudulent / fake|თაღლითური / ყალბი",
        "scammer|თაღლითი", "bait|სატყუარა (ანკესზე)", "artificial urgency|ხელოვნური გადაუდებლობა / დაჩქარება",
        "verify|დადასტურება / გადამოწმება", "misspelled|ასოშეშლილი / შეცდომით დაწერილი", "legitimate|კანონიერი / ნამდვილი", "Two-Factor Authentication (2FA)|ორფაქტორიანი ავთენტიფიკაცია (ორმაგი დაცვა)"
      ],
      questions: [
        "What is 'phishing' in the digital world?|Sending fraudulent emails or text messages designed to trick people into giving away passwords and personal data|A computer game about catching fish|A program that makes the internet faster|Repairing broken keyboards",
        "Why is the crime called 'phishing' (sounding like 'fishing')?|Because scammers send out thousands of fake messages as bait, hoping someone will 'bite' and click a dangerous link|Because it was invented by fishermen on a boat|Because it only happens in coastal cities|Because the computer virus looks like a fish",
        "What is the first major warning sign of a phishing message?|'Artificial urgency' that tries to make you panic and act fast without thinking|A polite greeting that uses your full name|A message that arrives on a Sunday|A very long scientific article",
        "What two typical examples of urgent phishing messages does Rachel mention?|A fake parcel delivery asking for a two-euro fee, or a fake bank alert threatening to lock your account tonight|An invitation to a birthday party|A weather forecast for rain|A receipt from a bookshop you just visited",
        "Why shouldn't you trust an email just because it has your bank's official logo at the top?|Because anyone can copy a logo; you must inspect the actual sender email address and web link|Because banks never use logos in emails|Because logos change every day|Because only scammers use colour pictures",
        "What trick do scammers often use in fake website addresses (URLs)?|Using a misspelled web address, such as replacing the letter 'O' with the number zero|Writing the address in capital letters only|Making the address one hundred words long|Using green text",
        "What is the 'golden rule' regarding legitimate banks and government offices?|They will never ask you for your password, PIN, or four-digit SMS security code|They only call customers after midnight|They always ask for your password by SMS|They charge two euros for every email",
        "What should you do if you receive a suspicious message claiming to be from your bank or delivery company?|Do not click the link in the message; call the bank directly using the official number on the back of your card or open the official app yourself|Reply to the message with your password immediately|Forward the message to ten friends|Pay the two-euro fee to see what happens",
        "What kind of password does Rachel recommend using instead of reusing the same short password?|A unique, long passphrase made of four random words for each important account|Your date of birth or your dog's name|The numbers 1-2-3-4-5-6|Writing the same password on every website",
        "How does 'Two-Factor Authentication' (2FA) protect your account?|Even if someone guesses or steals your password, they cannot log in without the second security check on your phone|It makes your computer screen invisible|It deletes all your emails every night|It blocks you from using the internet on weekends"
      ]
    },
    {
      num: 44, level: "B1",
      icon: "🌠", genre: "ასტრონომია",
      title: "ასტრონომიული გადაცემა: აგვისტოს მეტეორთა წვიმა",
      subtitle: "Astronomy Broadcast: How to Watch the Perseid Meteor Shower",
      time: "7 წთ",
      paragraphs: [
        [
          "Good evening, stargazers! This weekend, on the nights of the twelfth and thirteenth of August, nature is putting on its most famous annual fireworks display: the Perseid meteor shower! Under a clear, dark sky away from city streetlamps, you will be able to see up to sixty 'shooting stars' streaking across the heavens every hour.",
          "საღამო მშვიდობისა, ვარსკვლავების მოყვარულებო! ამ უქმეებზე, თორმეტი და ცამეტი აგვისტოს ღამეებში, ბუნება მართავს თავის ყველაზე ცნობილ ყოველწლიურ ფოიერვერკს — პერსეიდების მეტეორთა წვიმას! ქალაქის ლამპიონებიდან შორს, მოწმენდილი, ბნელი ცის ქვეშ, თქვენ შეძლებთ საათში სამოცამდე „მოწყვეტილი ვარსკვლავის“ დანახვას!"
        ],
        [
          "First, let's clear up a common misunderstanding: a 'shooting star' is not actually a star at all! Stars are giant suns trillions of kilometres away. The bright streaks of light we call meteors are actually tiny grains of cosmic dust and ice — most no larger than a grain of sand or a garden pea — burning up high in Earth's atmosphere about one hundred kilometres above our heads.",
          "პირველ რიგში, გავფანტოთ ერთი გავრცელებული მცდარი წარმოდგენა: „მოწყვეტილი ვარსკვლავი“ სინამდვილეში ვარსკვლავი სულაც არ არის! ვარსკვლავები ტრილიონობით კილომეტრით დაშორებული გიგანტური მზეებია. სინათლის კაშკაშა ზოლები, რომლებსაც მეტეორებს ვუწოდებთ, სინამდვილეში არის კოსმოსური მტვრისა და ყინულის პაწაწინა ნაწილაკები — უმეტესწილად ქვიშის მარცვალზე ან ბარდის მარცვალზე არცთუ დიდი — რომლებიც ჩვენს თავზემოთ დაახლოებით ასი კილომეტრის სიმაღლეზე, დედამიწის ატმოსფეროში იწვის."
        ],
        [
          "Where do these cosmic dust grains come from, and why do they appear every year on the exact same dates in mid-August? They are the leftover trail of a giant icy comet named 'Comet Swift-Tuttle', which orbits the Sun once every one hundred and thirty-three years. Every August, as Earth travels along its orbit around the Sun, our planet ploughs directly through the dusty river of debris left behind by that comet!",
          "საიდან ჩნდება ეს კოსმოსური მტვრის ნაწილაკები და რატომ ჩანს ისინი ყოველწლიურად ზუსტად ერთსა და იმავე დღეებში, აგვისტოს შუა რიცხვებში? ეს არის გიგანტური ყინულოვანი კომეტის — „სვიფტ-ტატლის კომეტის“ — მიერ დატოვებული კვალი, რომელიც მზის გარშემო ერთ სრულ ბრუნს ას ოცდაცამეტ წელიწადში ერთხელ აკეთებს. ყოველ აგვისტოს, მზის გარშემო ორბიტაზე მოძრაობისას, ჩვენი პლანეტა პირდაპირ გადის ამ კომეტის მიერ დატოვებულ მტვროვან ნაკადში!"
        ],
        [
          "Because these tiny specks of comet dust hit Earth's upper atmosphere at an astonishing speed of fifty-nine kilometres per second, the air in front of them compresses and heats up to thousands of degrees, creating a brilliant white or green flash of light that lasts for a second before vanishing completely.",
          "რადგან კომეტის მტვრის ეს პაწაწინა ნაწილაკები დედამიწის ატმოსფეროს ზედა ფენაში წარმოუდგენელი სიჩქარით — წამში ორმოცდაცხრამეტი კილომეტრით — იჭრება, მათ წინ არსებული ჰაერი იკუმშება და ათასობით გრადუსამდე ხურდება, რაც ქმნის სინათლის კაშკაშა თეთრ ან მწვანე გაელვებას, რომელიც სრულ გაქრობამდე ერთ წამს გრძელდება."
        ],
        [
          "What is the best way to watch the Perseids? Do not bring a telescope or binoculars! Telescopes only show a tiny patch of the sky, whereas meteors can flash anywhere overhead. Instead, drive or hike to an open hill or beach away from city lights, bring a reclining deckchair or a warm blanket to lie flat on your back, and give your eyes thirty minutes in the dark without looking at your phone. The best viewing hours are between midnight and dawn!",
          "როგორ დავაკვირდეთ პერსეიდებს ყველაზე უკეთ? ნუ წაიღებთ ტელესკოპს ან დურბინდს! ტელესკოპი ცის მხოლოდ პაწაწინა ნაწილს აჩვენებს, მეტეორმა კი შეიძლება თავზემოთ ნებისმიერ წერტილში გაიელვოს. ამის ნაცვლად, გადით ქალაქის განათებისგან დაშორებულ გაშლილ გორაკზე ან სანაპიროზე, წაიღეთ დასაწოლი შეზლონგი ან თბილი პლედი ზურგზე წამოსაწოლად და მიეცით თვალებს ოცდაათი წუთი სიბნელესთან შესაჩვევად ტელეფონის ეკრანზე დახედვის გარეშე. დაკვირვებისთვის საუკეთესო დროა შუაღამიდან გამთენიამდე!"
        ]
      ],
      glossary: [
        "stargazer|ვარსკვლავებზე დამკვირვებელი", "meteor shower|მეტეორთა წვიმა (ვარსკვლავთცვენა)", "shooting star|„მოწყვეტილი ვარსკვლავი“ (მეტეორი)",
        "grain of sand / pea|ქვიშის მარცვალი / ბარდის მარცვალი", "atmosphere|ატმოსფერო (პლანეტის ჰაერის გარსი)", "comet|კომეტა (კუდიანი ვარსკვლავი)",
        "trail of debris|ნამსხვრევების / მტვრის კვალი", "per second|წამში (სიჩქარე)", "reclining deckchair|გადასაწევი დასაკეცი სავარძელი (შეზლონგი)", "between midnight and dawn|შუაღამიდან გამთენიამდე"
      ],
      questions: [
        "On which dates in August does the Perseid meteor shower reach its peak this weekend?|On the nights of the twelfth and thirteenth of August|On the first of August|On the thirty-first of August|In mid-December",
        "How many meteors ('shooting stars') per hour can you see under a clear, dark sky during the peak?|Up to sixty meteors every hour|Only one meteor all night|Ten thousand meteors a minute|Two meteors a week",
        "What is a 'shooting star' (meteor) in reality?|A tiny grain of cosmic dust and ice (the size of a grain of sand or a pea) burning up high in Earth's atmosphere|A giant burning sun falling into the ocean|A piece of a broken satellite|A flash of lightning in a cloud",
        "How high above our heads do these cosmic dust grains burn up in the atmosphere?|About one hundred kilometres above our heads|Only two metres above the trees|At the level of passenger airplanes (10 km)|Halfway to the Moon",
        "Why does the Perseid meteor shower happen every year on the exact same dates in August?|Because every August, Earth's orbit passes through the dusty river of debris left behind by Comet Swift-Tuttle|Because the Sun gets hotter in August|Because the Moon blocks the stars in summer|Because volcanoes erupt in August",
        "How long does it take Comet Swift-Tuttle to complete one full orbit around the Sun?|One hundred and thirty-three years|Every twelve months|Ten thousand years|Twenty-four hours",
        "At what speed do the Perseid dust grains hit Earth's upper atmosphere?|Fifty-nine kilometres per second|Fifty-nine kilometres per hour|One kilometre per hour|Ten metres per second",
        "Why shouldn't you use a telescope or binoculars to watch a meteor shower?|Because telescopes only show a tiny patch of the sky, whereas meteors can flash anywhere overhead|Because meteor light is too bright and will break the glass lens|Because telescopes only work during the day|Because binoculars are too heavy",
        "How long do your eyes need in the dark (without looking at a phone screen) to adjust fully to the night sky?|About thirty minutes|Only two seconds|Four hours|Two days",
        "Which hours of the night are the best for watching the Perseid meteor shower?|Between midnight and dawn|Between six and eight in the evening|At noon|Right at sunset"
      ]
    },
    {
      num: 45, level: "B1",
      icon: "🫖", genre: "კულტურა და ტრადიცია",
      title: "კულტურული მიმოხილვა: ჩაის სმის ტრადიცია და ეტიკეტი",
      subtitle: "Cultural Feature: The Story and Etiquette of Afternoon Tea",
      time: "7 წთ",
      paragraphs: [
        [
          "Few traditions are more closely associated with British culture than 'Afternoon Tea' — a relaxing mid-afternoon gathering featuring a pot of hot black tea, crustless finger sandwiches, warm scones, and petite cakes served on a three-tiered silver stand. Yet this famous custom is not an ancient medieval tradition at all; it was invented in the 1840s by one hungry noblewoman!",
          "ცოტა ტრადიცია თუ უკავშირდება ბრიტანულ კულტურას ისე მჭიდროდ, როგორც „შუადღის ჩაი“ (Afternoon Tea) — ნაშუადღევის მშვიდი შეკრება ცხელი შავი ჩაის ჩაიდნით, უქერქო პატარა სენდვიჩებით, თბილი ფუნთუშებითა (სკონებით) და პატარა ნამცხვრებით, რომლებსაც სამსართულიანი ვერცხლის ლანგრით მოართმევენ. თუმცა, ეს ცნობილი წეს-ჩვეულება სულაც არ არის შუა საუკუნეების უძველესი ტრადიცია; იგი 1840-იან წლებში ერთმა მშიერმა დიდგვაროვანმა ქალბატონმა დაამკვიდრა!"
        ],
        [
          "In the early nineteenth century, most people in Britain ate only two main meals a day: a big breakfast in the morning and a late dinner at eight o'clock in the evening, after lamps were lit. Anna Maria Russell, the Duchess of Bedford and a close friend of Queen Victoria, complained of a 'sinking feeling' of hunger every afternoon at four o'clock. She began asking her servants to bring a pot of Darjeeling tea and light snacks to her room.",
          "მეცხრამეტე საუკუნის დასაწყისში ბრიტანეთში ადამიანთა უმეტესობა დღეში მხოლოდ ორჯერ იკვებებოდა: დილით ნოყიერად საუზმობდა, ხოლო საღამოს რვა საათზე, ლამპების ანთების შემდეგ, გვიან ვახშმობდა. ანა მარია რასელი — ბედფორდის ჰერცოგინია და დედოფალ ვიქტორიას ახლო მეგობარი — ყოველ ნაშუადღევს, ოთხ საათზე, შიმშილისგან გამოწვეულ სისუსტეს უჩიოდა. მან მსახურებს სთხოვა, მის ოთახში მოეტანათ ერთი ჩაიდანი დარჯილინგის ჩაი და მსუბუქი წასახემსებელი."
        ],
        [
          "Soon, the Duchess began inviting her friends to join her at four o'clock in her drawing room for tea and conversation, and the fashionable habit quickly spread across London society. Notice the traditional three-tiered stand on the table: etiquette dictates that you always eat from the bottom tier up to the top! You start on the bottom plate with savoury finger sandwiches — such as cucumber with cream cheese, smoked salmon, and egg salad.",
          "მალე ჰერცოგინიამ დაიწყო მეგობრების მიწვევა ოთხ საათზე თავის სასტუმრო ოთახში ჩაისა და საუბრისთვის, და ეს მოდური ჩვევა სწრაფად გავრცელდა ლონდონის მაღალ საზოგადოებაში. დააკვირდით მაგიდაზე მდგარ ტრადიციულ სამსართულიან სადგამს: ეტიკეტის თანახმად, ჭამა ყოველთვის ქვედა სართულიდან იწყება და ზემოთ ადის! თქვენ იწყებთ ქვედა თეფშზე დაწყობილი მარილიანი პატარა სენდვიჩებით — როგორებიცაა კიტრი კრემ-ყველით, შებოლილი ორაგული და კვერცხის სალათა."
        ],
        [
          "Next, you move to the middle tier, which holds warm, round baked scones served with strawberry jam and thick 'clotted cream' from Devon or Cornwall. According to polite tea etiquette, you should never cut a scone open with a knife; instead, break it gently in half with your fingers! On the top tier sit the sweet pastries, fruit tarts, and miniature sponges.",
          "შემდეგ გადადიხართ შუა იარუსზე, სადაც დევს თბილი, მრგვალი გამომცხვარი ფუნთუშები (სკონები), რომლებსაც მიირთმევენ მარწყვის ჯემთან და დევონის ან კორნუოლის სქელ ნაღებთან ერთად. ჩაის დახვეწილი ეტიკეტის მიხედვით, სკონი არასდროს უნდა გაჭრათ დანით; ამის ნაცვლად, იგი თითებით ფრთხილად უნდა გატეხოთ შუაზე! სულ ზედა სართულზე კი განლაგებულია ტკბილი ნამცხვრები, ხილის ტარტალეტები და პატარა ბისკვიტები."
        ],
        [
          "Finally, there are two amusing myths about tea etiquette that every visitor should know. First, contrary to what people see in cartoons, sticking your little finger (pinky) out while holding a teacup is actually considered impolite! Second, when stirring your tea with a small spoon, do not stir in circles and clink the porcelain sides; instead, move the spoon gently back and forth between the 'six o'clock' and 'twelve o'clock' positions before placing the spoon quietly on the saucer.",
          "დაბოლოს, არსებობს ჩაის ეტიკეტთან დაკავშირებული ორი სახალისო მითი, რომელიც ყველა სტუმარმა უნდა იცოდეს. პირველი: მულტფილმებში ნანახის საპირისპიროდ, ჩაის ფინჯნის დაჭერისას ნეკა თითის განზე გაშვერა სინამდვილეში უზრდელობად ითვლება! მეორე: პატარა კოვზით ჩაის მორევისას ნუ ატრიალებთ კოვზს წრიულად და ნუ მიარტყამთ ფაიფურის კედლებს; ამის ნაცვლად, კოვზი ფრთხილად ამოძრავეთ წინ და უკან „ექვსი საათისა“ და „თორმეტი საათის“ მიმართულებით, შემდეგ კი უხმაუროდ დადეთ ლამბაქზე."
        ]
      ],
      glossary: [
        "three-tiered stand|სამსართულიანი (სამიარუსიანი) ლანგარი/სადგამი", "scone|სკონი (ტრადიციული ბრიტანული ჩაის ფუნთუშა)", "Duchess|ჰერცოგინია (დიდგვაროვანი ქალბატონი)",
        "sinking feeling|შიმშილისგან გამოწვეული სისუსტის შეგრძნება", "drawing room|სასტუმრო დარბაზი", "savoury|მარილიანი / არატკბილი (საკვები)",
        "clotted cream|სქელი გამომცხვარი ნაღები", "etiquette|ეტიკეტი (ქცევის წესები)", "little finger (pinky)|ნეკა თითი", "saucer|ლამბაქი (ფინჯნის ქვეშ დასადები თეფში)"
      ],
      questions: [
        "When and by whom was the tradition of 'Afternoon Tea' invented?|In the 1840s, by Anna Maria Russell, the Duchess of Bedford|In the 1200s, by medieval knights|In 1950, by a London hotel manager|In the 1600s, by sailors from India",
        "Why did the Duchess of Bedford start asking for tea and snacks in her room at four o'clock?|Because people only ate breakfast and a late dinner at 8 PM, so she felt a 'sinking feeling' of hunger at 4 PM|Because she didn't like eating dinner in the evening|Because her doctor told her to drink ten cups of tea a day|Because the kitchen closed at cinco o'clock",
        "In what order does etiquette say you should eat the food on a three-tiered Afternoon Tea stand?|From the bottom tier up to the top tier|From the top tier down to the bottom|Starting with the middle tier first|All three tiers mixed together on one plate",
        "What kind of food is served on the bottom tier of the stand?|Savoury crustless finger sandwiches (such as cucumber, smoked salmon, and egg salad)|Sweet chocolate cakes and fruit tarts|Hot soup in bowls|Roast chicken and potatoes",
        "What is served on the middle tier of the stand?|Warm, round baked scones with strawberry jam and thick clotted cream|Cold ice cream|Cheese and biscuits|Fresh apples and grapes",
        "According to polite tea etiquette, how should you open a warm scone?|Break it gently in half with your fingers, rather than cutting it with a knife|Cut it into four pieces with a large knife|Crush it with a spoon|Dip the whole scone into your teacup",
        "What is placed on the top tier of the three-tiered stand?|Sweet pastries, fruit tarts, and miniature cakes|Savoury cucumber sandwiches|The teapot and milk jug|Extra spoons and napkins",
        "What does traditional British tea etiquette say about sticking your little finger (pinky) out while holding a teacup?|It is actually a myth and is considered impolite|It is required by royal law|It helps cool the tea faster|Only men are supposed to do it",
        "How should you stir your tea with a small spoon without making a clinking noise?|Move the spoon gently back and forth between the 'six o'clock' and 'twelve o'clock' positions|Stir rapidly in circles as fast as possible|Blow on the spoon|Shake the whole teacup",
        "Where should you place your teaspoon after stirring your tea?|Quietly on the saucer beside the cup|Leave it standing inside the teacup while drinking|Put it on the white tablecloth|Hold it in your left hand"
      ]
    }
  ];

  // გავაერთიანოთ B1 და (მომავალი) B2 მასივები App.ListeningDataB-ში
  App.ListeningDataB = App.ListeningDataB1.concat(App.ListeningDataB2 || []);
})(window);
// ============================================================================
// B2 LEVEL — LISTENING TOPICS 46 TO 60 (5 PARAGRAPHS, 10 WORDS & 10 QUESTIONS)
// ============================================================================
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ListeningDataB2 = [
    {
      num: 46, level: "B2",
      icon: "🎻", genre: "აკუსტიკა და არქიტექტურა",
      title: "პოდკასტი: როგორ ქმნის არქიტექტურა საკონცერტო დარბაზის ჟღერადობას",
      subtitle: "Architecture Podcast: How Acoustic Design Shapes Concert Halls",
      time: "8 წთ",
      paragraphs: [
        [
          "Welcome to 'Sound and Structure'! When we attend a symphony concert, we usually credit the conductor and the musicians for the beauty of the performance. However, acoustic engineers know that the concert hall itself is the largest musical instrument in the room. While a violinist plays a note on stage, only a small fraction of the sound travels directly to your ears; over eighty percent bounces off the walls, ceiling, and balconies before reaching your seat.",
          "კეთილი იყოს თქვენი მობრძანება პოდკასტში „ბგერა და სტრუქტურა“! როდესაც სიმფონიურ კონცერტს ვესწრებით, შესრულების სილამაზეს ჩვეულებრივ დირიჟორსა და მუსიკოსებს მივაწერთ. თუმცა, აკუსტიკოს-ინჟინრებმა იციან, რომ თავად საკონცერტო დარბაზი ყველაზე დიდი მუსიკალური საკრავია. როცა მევიოლინე სცენაზე ნოტს იღებს, ბგერის მხოლოდ მცირე ნაწილი აღწევს პირდაპირ თქვენს ყურამდე; ოთხმოც პროცენტზე მეტი კი სკამამდე მოსვლამდე კედლებიდან, ჭერიდან და აივნებიდან აირეკლება."
        ],
        [
          "The most important measurement in architectural acoustics is 'reverberation time' — the number of seconds it takes for a loud sound to fade away into silence after the orchestra stops playing. If a hall has too little reverberation, because of thick carpets and heavy curtains, the music sounds dry and lifeless. If it has too much — like a stone cathedral where echoes last for six seconds — rapid musical notes blur together into muddy noise.",
          "არქიტექტურულ აკუსტიკაში ყველაზე მნიშვნელოვანი საზომია „რევერბერაციის დრო“ — წამების რაოდენობა, რომელიც სჭირდება ხმამაღალი ბგერის სრულ მიწყნარებას ორკესტრის გაჩერების შემდეგ. თუ დარბაზს სქელი ხალიჩებისა და მძიმე ფარდების გამო ზედმეტად მცირე რევერბერაცია აქვს, მუსიკა მშრალად და უსიცოცხლოდ ჟღერს. ხოლო თუ რევერბერაცია ზედმეტად დიდია — როგორც ქვის ტაძარში, სადაც ექო ექვს წამს გრძელდება — სწრაფი მუსიკალური ნოტები ერთმანეთში ირევა."
        ],
        [
          "For classical symphony orchestras, the 'golden standard' of reverberation time is almost exactly two seconds. Historically, the halls that achieved this perfection best were nineteen-century 'shoebox' halls, such as the Musikverein in Vienna and Symphony Hall in Boston. Their long, narrow, high-ceilinged rectangular shape reflects sound waves sideways off the parallel walls, wrapping the audience in warm, rich sound.",
          "კლასიკური სიმფონიური ორკესტრებისთვის რევერბერაციის დროის „ოქროს სტანდარტი“ თითქმის ზუსტად ორი წამია. ისტორიულად, ამ სრულყოფილებას ყველაზე უკეთ აღწევდა მეცხრამეტე საუკუნის „ფეხსაცმლის ყუთის“ ფორმის დარბაზები, როგორებიცაა ვენის „მუზიკფერაინი“ და ბოსტონის სიმფონიური დარბაზი. მათი გრძელი, ვიწრო და მაღალჭერიანი მართკუთხა ფორმა ბგერით ტალღებს პარალელური კედლებიდან გვერდულად ირეკლავს და მსმენელს თბილ, მდიდარ ჟღერადობაში ახვევს."
        ],
        [
          "Surprisingly, the ornate plaster statues, columns, and relief carvings on the walls of old concert halls are not just for visual decoration! These uneven surfaces diffuse high-frequency sound waves in all directions, preventing harsh echoes. Modern halls achieve the same effect using computer-designed wooden panels carved with thousands of mathematical grooves.",
          "გასაოცარია, მაგრამ ძველი საკონცერტო დარბაზების კედლებზე არსებული თაბაშირის ქანდაკებები, სვეტები და რელიეფური ჩუქურთმები მხოლოდ ვიზუალური სილამაზისთვის არ არის შექმნილი! ეს უსწორმასწორო ზედაპირები მაღალსიხშირიან ბგერით ტალღებს ყველა მიმართულებით ფანტავს და ხელს უშლის მკვეთრი ექოს წარმოქმნას. თანამედროვე დარბაზები იმავე ეფექტს აღწევენ კომპიუტერულად დაპროექტებული ხის პანელებით, რომლებზეც ათასობით მათემატიკური ღარია ამოჭრილი."
        ],
        [
          "Because human bodies and winter coats absorb a huge amount of sound, an empty hall sounds completely different from a full one. To allow orchestras to rehearse in an empty hall without acoustic distortion, engineers design seats with special undersides covered in fabric that absorbs the exact same amount of sound when the seat is flipped up empty as a person sitting in it during an evening concert!",
          "რადგან ადამიანის სხეული და ტანსაცმელი უზარმაზარი რაოდენობის ბგერას შთანთქავს, ცარიელი დარბაზი სავსისგან სრულიად განსხვავებულად ჟღერს. იმისათვის, რომ ორკესტრმა ცარიელ დარბაზში აკუსტიკური ცდომილების გარეშე გაიაროს რეპეტიცია, ინჟინრები ქმნიან სავარძლებს სპეციალური ქსოვილით დაფარული ქვედა მხარით, რომელიც აკეცილ (ცარიელ) მდგომარეობაში ზუსტად იმდენივე ბგერას შთანთქავს, რამდენსაც საღამოს კონცერტზე მასში მჯდომი მსმენელი!"
        ]
      ],
      glossary: [
        "acoustic engineer|აკუსტიკოს-ინჟინერი", "bounce off|არეკვლა (ზედაპირიდან)", "reverberation time|რევერბერაციის (ბგერის მილევის) დრო",
        "blur together|ერთმანეთში არევა / გადღაბნა", "shoebox hall|„ფეხსაცმლის ყუთის“ (მართკუთხა) ფორმის დარბაზი", "plaster statue|თაბაშირის ქანდაკება",
        "diffuse sound|ბგერის გაფანტვა / გაბნევა", "harsh echo|მკვეთრი / უხეში ექო", "rehearse (verb)|რეპეტიციის გავლა", "flip up a seat|სავარძლის აკეცვა"
      ],
      questions: [
        "What percentage of the sound from a stage instrument bounces off walls and ceilings before reaching your seat?|Over eighty percent|Less than ten percent|Around twenty percent|Zero percent",
        "What is 'reverberation time' in architectural acoustics?|The number of seconds it takes for a loud sound to fade away into silence after the music stops|The time it takes for the audience to enter the hall|The length of a symphony concert|The speed of sound in cold air",
        "What happens to music in a hall with too little reverberation due to thick carpets and curtains?|The music sounds dry and lifeless|The notes echo for ten seconds|The instruments sound twice as loud|The pitch of the violins changes",
        "Why is a stone cathedral with a six-second reverberation time problematic for fast orchestral music?|Rapid musical notes blur together into muddy noise|The musicians cannot hear their own instruments at all|The stone walls absorb all the sound|The ceiling is too low",
        "What is the ideal 'golden standard' reverberation time for a classical symphony concert hall?|Almost exactly two seconds|Six seconds|Zero point two seconds|Ten seconds",
        "Why are nineteenth-century 'shoebox' halls like Vienna's Musikverein famous for their acoustics?|Their long, narrow, high-ceilinged rectangular shape reflects sound waves sideways off parallel walls|They are built entirely of glass|They have circular walls with no corners|They have open roofs",
        "What acoustic function do plaster statues, columns, and carvings serve in historic concert halls?|Their uneven surfaces diffuse high-frequency sound waves in all directions, preventing harsh echoes|They make the hall warmer in winter|They block sound from reaching the balconies|They hold microphones inside",
        "How do modern concert halls diffuse sound waves without classical statues?|Using computer-designed wooden panels carved with thousands of mathematical grooves|By hanging plastic curtains over the stage|By painting the walls black|By using loudspeakers on every seat",
        "Why does an empty concert hall normally sound different from a full one?|Because human bodies and clothing absorb a large amount of sound|Because the air is colder when the hall is empty|Because musicians play quieter during rehearsals|Because the doors are left open",
        "How do engineers design concert hall seats so the acoustics stay the same during empty rehearsals?|The underside of each flipped-up seat is covered in fabric that absorbs the exact same amount of sound as a seated person|They place heavy sandbags on every seat during rehearsals|They lower the ceiling by five metres|They turn on electric heaters under the seats"
      ]
    },
    {
      num: 47, level: "B2",
      icon: "💳", genre: "ფინანსები და ეკონომიკა",
      title: "ეკონომიკური მიმოხილვა: უნაღდო ანგარიშსწორებაზე გადასვლა",
      subtitle: "Economics Broadcast: The Shift Towards Cashless Societies",
      time: "8 წთ",
      paragraphs: [
        [
          "For nearly three thousand years, physical money — first minted as gold and silver coins in ancient Lydia, and later printed as paper banknotes — was the backbone of human commerce. Today, however, we are witnessing a historic financial transformation. In countries such as Sweden, Norway, and South Korea, physical cash has almost vanished from daily life, with fewer than ten percent of retail transactions paid in coins or banknotes.",
          "თითქმის სამი ათასი წლის განმავლობაში ფიზიკური ფული — რომელიც პირველად ოქროსა და ვერცხლის მონეტების სახით მოიჭრა ძველ ლიდიაში, მოგვიანებით კი ქაღალდის კუპიურებად დაიბეჭდა — ადამიანური ვაჭრობის ხერხემალი იყო. თუმცა, დღეს ჩვენ ისტორიული ფინანსური გარდაქმნის მომსწრენი ვართ. ისეთ ქვეყნებში, როგორებიცაა შვედეთი, ნორვეგია და სამხრეთ კორეა, ნაღდი ფული ყოველდღიური ცხოვრებიდან თითქმის გაქრა და საცალო გადახდების ათ პროცენტზე ნაკლები სრულდება მონეტებითა თუ კუპიურებით."
        ],
        [
          "In Stockholm or Oslo, it is now common to see 'No Cash Accepted' signs not only in sleek restaurants and hotels, but also at street bakeries, public buses, and flea markets. Contactless bank cards, smartphone wallets, and instant mobile payment apps allow people to split a restaurant bill or buy a bus ticket in two seconds without counting out small change.",
          "სტოკჰოლმსა თუ ოსლოში დღეს ჩვეულებრივი მოვლენაა წარწერა „ნაღდი ფული არ მიიღება“ არა მხოლოდ თანამედროვე რესტორნებსა და სასტუმროებში, არამედ ქუჩის საცხობებში, საზოგადოებრივ ავტობუსებსა და ძველმანების ბაზრობებზეც კი. უკონტაქტო საბანკო ბარათები, სმარტფონის საფულეები და მყისიერი გადახდის აპლიკაციები ადამიანებს საშუალებას აძლევს, რესტორნის ანგარიში გაიყონ ან ავტობუსის ბილეთი იყიდონ ორ წამში, ხურდის დათვლის გარეშე."
        ],
        [
          "Economists point out several clear benefits of a cashless economy. Printing, transporting, guarding, and sorting physical banknotes in armoured trucks costs banks and governments billions of euros every year. Digital payments eliminate the risk of armed robberies at shops and banks, speed up checkout queues, and make it much harder for businesses to evade taxes in the shadow economy.",
          "ეკონომისტები უნაღდო ეკონომიკის რამდენიმე აშკარა სარგებელზე მიუთითებენ. ფიზიკური ბანკნოტების ბეჭდვა, დაჯავშნული მანქანებით გადაზიდვა, დაცვა და დახარისხება ბანკებსა და მთავრობებს ყოველწლიურად მილიარდობით ევრო უჯდება. ციფრული გადახდები აქრობს მაღაზიებსა და ბანკებზე შეიარაღებული თავდასხმის რისკს, აჩქარებს სალაროს რიგებს და ბიზნესისთვის გაცილებით ართულებს ჩრდილოვან ეკონომიკაში გადასახადებისგან თავის არიდებას."
        ],
        [
          "Yet the rapid disappearance of cash has also raised serious psychological and social concerns. Behavioural economists have proved the 'pain of paying' effect: when we hand over physical banknotes from our wallet, our brain registers a real sense of loss, which naturally restrains impulse buying. When tapping a plastic card or a phone, the transaction feels abstract and painless, causing consumers to spend up to twenty percent more!",
          "მიუხედავად ამისა, ნაღდი ფულის სწრაფმა გაქრობამ სერიოზული ფსიქოლოგიური და სოციალური კითხვებიც გააჩინა. ქცევითმა ეკონომისტებმა დაამტკიცეს „გადახდის ტკივილის“ ეფექტი: როდესაც საფულიდან ფიზიკურ კუპიურებს გავცემთ, ჩვენი ტვინი აღიქვამს დანაკარგის რეალურ განცდას, რაც ბუნებრივად აკავებს იმპულსურ შესყიდვებს. პლასტიკური ბარათის ან ტელეფონის მიდებისას კი ტრანზაქცია აბსტრაქტული და უმტკივნეულო ჩანს, რის გამოც მომხმარებლები ოცი პროცენტით მეტს ხარჯავენ!"
        ],
        [
          "Furthermore, central banks warn of two vulnerabilities in a purely digital system. First, elderly citizens, rural residents, and people without smartphones risk being excluded from basic services. Second, if a severe winter storm, cyberattack, or power outage knocks out cellular networks and electricity, a 100% cashless city cannot even buy bread or water! For this reason, authorities in Sweden and Norway now advise every household to keep a small reserve of physical banknotes at home for emergencies, ensuring that cash remains a reliable backup.",
          "გარდა ამისა, ცენტრალური ბანკები გვაფრთხილებენ სრულად ციფრული სისტემის ორი სუსტი წერტილის შესახებ. პირველი: ხანდაზმული მოქალაქეები, სოფლის მცხოვრებლები და სმარტფონის არმქონე პირები შეიძლება საბაზისო მომსახურების მიღმა აღმოჩნდნენ. მეორე: თუ ძლიერი შტორმი, კიბერშეტევა ან ელექტროენერგიის გათიშვა მობილურ ქსელებს მწყობრიდან გამოიყვანს, 100%-ით უნაღდო ქალაქში პურისა და წყლის ყიდვაც კი შეუძლებელი გახდება! ამ მიზეზით, შვედეთისა და ნორვეგიის ხელისუფლება დღეს ყველა ოჯახს ურჩევს, საგანგებო სიტუაციებისთვის სახლში შეინახოს ნაღდი ფულის მცირე მარაგი."
        ]
      ],
      glossary: [
        "mint coins|მონეტების მოჭრა", "cashless society|უნაღდო საზოგადოება (ციფრულ გადახდებზე გადასული)", "retail transaction|საცალო სავაჭრო გადახდა/ოპერაცია",
        "small change|ხურდა ფული", "armoured truck|დაჯავშნული საინკასაციო მანქანა", "evade taxes|გადასახადებისგან თავის არიდება",
        "shadow economy|ჩრდილოვანი (არაოფიციალური) ეკონომიკა", "impulse buying|იმპულსური (დაუფიქრებელი) ყიდვა", "power outage|ელექტროენერგიის გათიშვა", "backup|სარეზერვო საშუალება / დაზღვევა"
      ],
      questions: [
        "Where were the first gold and silver coins minted nearly three thousand years ago?|In ancient Lydia|In ancient Sweden|In South Korea|In nineteenth-century London",
        "In countries like Sweden, Norway, and South Korea, what percentage of retail transactions are now paid in physical cash?|Fewer than ten percent|More than eighty percent|Exactly fifty percent|Ninety-five percent",
        "Why is physical cash expensive for banks and governments to maintain?|Printing, transporting, guarding, and sorting banknotes in armoured trucks costs billions every year|Because paper is more expensive than gold|Because coins melt in summer|Because ATMs use too much water",
        "How do digital payments affect crime and tax collection?|They eliminate armed robberies of cash at shops and make it harder to evade taxes in the shadow economy|They make bank robberies much easier|They eliminate all taxes for shops|They slow down supermarket queues",
        "What is the 'pain of paying' effect discovered by behavioural economists?|Handing over physical banknotes triggers a real sense of loss in the brain, which restrains impulse buying|Counting heavy coins hurts people's fingers|Banknotes have sharp edges|Paying bank fees causes headaches",
        "How much more do consumers tend to spend when paying by card or phone compared to physical cash?|Up to twenty percent more|Fifty percent less|The exact same amount|Ten times more",
        "Why do people spend more easily with contactless cards and mobile wallets?|Because the transaction feels abstract and painless compared to handing over physical bills|Because shops charge higher prices for card users|Because cards only work for expensive items|Because banks give free money every day",
        "Which groups of people risk being excluded in a 100% cashless society?|Elderly citizens, rural residents, and people without smartphones or bank accounts|University computer students|Bank managers|Software engineers",
        "What major technical vulnerability does a purely digital payment system face?|A severe storm, cyberattack, or power outage could knock out electricity and cellular networks, halting all purchases|Banknotes might get wet in the rain|Coins might run out of metal|Cash registers might run out of paper",
        "What do authorities in Sweden and Norway now advise every household to do for emergencies?|Keep a small reserve of physical banknotes at home as a reliable backup|Throw away all their coins|Buy five extra smartphones|Keep gold bars in the garden"
      ]
    },
    {
      num: 48, level: "B2",
      icon: "🐙", genre: "საზღვაო ბიოლოგია",
      title: "საზღვაო ბიოლოგიის ლექცია: რვაფეხების გასაოცარი ინტელექტი",
      subtitle: "Marine Biology Lecture: The Remarkable Mind of the Octopus",
      time: "8 წთ",
      paragraphs: [
        [
          "When we think of intelligent animals, we almost always think of vertebrates with large brains and backbones — such as chimpanzees, dolphins, elephants, and crows. Yet deep in the ocean lives an invertebrate animal — a soft-bodied mollusc related to snails and clams — that possesses problem-solving skills rivalling those of mammals: the octopus!",
          "როდესაც გონიერ ცხოველებზე ვფიქრობთ, თითქმის ყოველთვის წარმოვიდგენთ დიდტვინიან ხერხემლიანებს — მაგალითად, შიმპანზეებს, დელფინებს, სპილოებსა და ყვავებს. თუმცა, ოკეანის სიღრმეში ბინადრობს უხერხემლო ცხოველი — ლოკოკინებისა და ნიჟარიანი მოლუსკების ნათესავი რბილსხეულიანი არსება — რომელსაც ძუძუმწოვრების დონის ამოცანების გადაჭრის უნარი გააჩნია: ეს არის რვაფეხა!"
        ],
        [
          "The nervous system of an octopus is unlike anything else on Earth. An octopus has roughly five hundred million neurons — about the same number as a dog. However, only one-third of these neurons are located in its central brain between its eyes! The other two-thirds are distributed across its eight flexible arms, meaning each arm has its own mini-brain that can taste, touch, and open a shellfish independently!",
          "რვაფეხას ნერვული სისტემა დედამიწაზე არცერთ სხვა არსებას არ ჰგავს. რვაფეხას აქვს დაახლოებით ხუთასი მილიონი ნეირონი — დაახლოებით იმდენივე, რამდენიც ძაღლს. თუმცა, ამ ნეირონების მხოლოდ ერთი მესამედია მოთავსებული მის ცენტრალურ ტვინში, თვალებს შორის! დანარჩენი ორი მესამედი გადანაწილებულია მის რვა მოქნილ საცეცში (ხელში), რაც იმას ნიშნავს, რომ თითოეულ საცეცს აქვს საკუთარი „მინი-ტვინი“, რომელსაც დამოუკიდებლად შეუძლია გემოს შეგრძნება, შეხება და ნიჟარის გახსნა!"
        ],
        [
          "Because an octopus has no bones at all, the only hard part of its entire body is its sharp, parrot-like beak. If an octopus's beak can fit through a hole the size of a coin, its entire body can squeeze through too! In marine laboratories, octopuses regularly unscrew childproof glass jars from the inside, slide back heavy tank lids at night to raid neighbouring fish tanks for crabs, and then return to their own tank before morning!",
          "რადგან რვაფეხას ძვლები საერთოდ არ გააჩნია, მისი მთელი სხეულის ერთადერთი მაგარი ნაწილი თუთიყუშის მსგავსი ბასრი ნისკარტია. თუ რვაფეხას ნისკარტი მონეტის ზომის ნახვრეტში ეტევა, იქ მისი მთელი სხეულიც გაეტევა! საზღვაო ლაბორატორიებში რვაფეხები რეგულარულად ხსნიან შიგნიდან დაცულ მინის ქილებს, ღამით სწევენ აკვარიუმის მძიმე თავსახურს, გადადიან მეზობელ აკვარიუმებში კიბორჩხალებზე სანადიროდ, დილამდე კი ისევ თავიანთ აკვარიუმში ბრუნდებიან!"
        ],
        [
          "In the wild, the 'veined octopus' of Indonesia has been filmed doing something that stunned biologists: using tools with foresight! It collects two empty coconut shell halves dropped on the seabed, carries them tucked underneath its body while walking on its arms like stilts, and then snaps the two halves together like a sphere to hide inside when a shark approaches.",
          "ველურ ბუნებაში ინდონეზიის „ძარღვიანი რვაფეხა“ გადაიღეს ისეთი მოქმედებისას, რამაც ბიოლოგები გააოგნა: იგი იარაღებს წინასწარი გათვლით იყენებს! ის ზღვის ფსკერზე აგროვებს ქოქოსის ნაჭუჭის ორ ცარიელ ნახევარს, სხეულის ქვეშ ამოდებულს მიათრევს საცეცებზე ოჩოფეხებივით შემდგარი, ხოლო ზვიგენის მოახლოებისას ორივე ნახევარს სფეროსავით კრავს და შიგნით იმალება."
        ],
        [
          "Octopuses are also the undisputed masters of camouflage. Although they are colour-blind, their skin contains millions of elastic pigment sacs called chromatophores controlled directly by their nervous system. Within two-tenths of a second — faster than the blink of an eye — an octopus can change both the colour and the 3D texture of its skin to look exactly like rough coral, smooth sand, or waving seaweed!",
          "რვაფეხები შენიღბვის უდავო დიდოსტატებიც არიან. მიუხედავად იმისა, რომ ფერებს ვერ არჩევენ (დალტონიკები არიან), მათი კანი შეიცავს ნერვული სისტემით პირდაპირ მართულ მილიონობით ელასტიკურ პიგმენტურ პარკუჭს — ქრომატოფორს. წამის მეხუთედში — თვალის დახამხამებაზე უფრო სწრაფად — რვაფეხას შეუძლია შეცვალოს როგორც კანის ფერი, ისე მისი სამგანზომილებიანი რელიეფი, რათა ზუსტად დაემსგავსოს უხეშ მარჯანს, გლუვ ქვიშას ან მოლივლივე წყალმცენარეს!"
        ]
      ],
      glossary: [
        "vertebrate and invertebrate|ხერხემლიანი და უხერხემლო (ცხოველი)", "mollusc|მოლუსკი (რბილტანიანი არსება)", "neuron|ნეირონი (ნერვული უჯრედი)",
        "parrot-like beak|თუთიყუშის მსგავსი ნისკარტი", "squeeze through|გაძრომა (ვიწრო ხვრელში)", "childproof jar|ბავშვებისგან დაცული (რთულად გასახსნელი) ქილა",
        "foresight|წინდახედულობა / წინასწარი გათვლა", "walk on stilts|ოჩოფეხებზე სიარული", "chromatophore|ქრომატოფორი (კანის ფერის შემცვლელი უჯრედი)", "blink of an eye|თვალის დახამხამება"
      ],
      questions: [
        "Which animal group does the octopus biologically belong to?|Invertebrates (soft-bodied molluscs related to snails and clams)|Marine mammals like dolphins|Bony fish|Amphibians",
        "Approximately how many neurons does an octopus have, and what mammal is this comparable to?|Roughly five hundred million neurons, about the same number as a dog|Only ten thousand neurons, like a jellyfish|Ten billion neurons, like a whale|One hundred neurons",
        "How are an octopus's five hundred million neurons distributed in its body?|Only one-third are in its central brain, while two-thirds are distributed across its eight arms|All 100% are inside its central head|They are all located in its eyes|They are in its stomach",
        "What is the only hard part of an octopus's entire body?|Its sharp, parrot-like beak|Its skull|Its spine|Its tail bone",
        "What determines how small a hole an octopus can squeeze its entire body through?|Whether its hard beak can fit through the hole|The length of its longest arm|The temperature of the water|Whether it has eaten lunch",
        "What mischievous behaviour have octopuses been observed doing at night in marine laboratories?|Sliding back their tank lids, crawling into neighbouring tanks to eat crabs, and returning before morning|Turning off the laboratory computers|Building sandcastles on the floor|Singing loud songs like whales",
        "How does the 'veined octopus' of Indonesia demonstrate tool use with foresight?|It collects and carries two coconut shell halves to snap together as a protective sphere when predators approach|It uses a wooden stick to hit sharks|It builds a stone wall around its cave|It uses old fishing nets to catch crabs",
        "What are 'chromatophores' in an octopus's skin?|Millions of elastic pigment sacs controlled by the nervous system to change colour instantly|Tiny scales made of bone|Organs that produce electric shocks|Gills used for breathing air",
        "How fast can an octopus change the colour and 3D texture of its skin for camouflage?|Within two-tenths of a second (faster than the blink of an eye)|In about ten minutes|In two hours|Only when it is sleeping",
        "What makes the octopus's colour-changing camouflage even more surprising to scientists?|The fact that octopuses are biologically colour-blind|The fact that they only live in freshwater rivers|The fact that their skin is made of hard shell|The fact that they cannot see at all"
      ]
    },
    {
      num: 49, level: "B2",
      icon: "⚓", genre: "ტექნოლოგიის ისტორია",
      title: "ისტორიული რადიო: 1858 წლის ტრანსატლანტიკური ტელეგრაფის კაბელი",
      subtitle: "History Radio: The Cable That Shrunk the Atlantic Ocean",
      time: "8 წთ",
      paragraphs: [
        [
          "In the early 1850s, sending a letter from London to New York required putting an envelope onto a steamship and waiting ten to twelve days for it to cross the stormy Atlantic Ocean. Although electric telegraph wires already connected cities on land, the ocean remained an unbridgeable barrier — until an American entrepreneur named Cyrus West Field proposed laying a four-thousand-kilometre copper cable right across the bottom of the Atlantic!",
          "1850-იანი წლების დასაწყისში ლონდონიდან ნიუ-იორკში წერილის გაგზავნა მოითხოვდა კონვერტის ორთქლის გემზე დადებას და ათი-თორმეტი დღის ლოდინს, სანამ გემი ბობოქარ ატლანტის ოკეანეს გადაკვეთდა. მიუხედავად იმისა, რომ ხმელეთზე ელექტროტელეგრაფის სადენები უკვე აკავშირებდა ქალაქებს, ოკეანე გადაულახავ ზღუდედ რჩებოდა — სანამ ამერიკელმა მეწარმემ საირუს უესტ ფილდმა არ წამოაყენა იდეა, პირდაპირ ატლანტის ოკეანის ფსკერზე გაეყვანათ ოთხი ათასი კილომეტრის სიგრძის სპილენძის კაბელი!"
        ],
        [
          "Building the cable was an immense industrial challenge. At the core were seven twisted copper wires to carry the electric telegraph signals. To prevent the salty ocean water from short-circuiting the electricity, the copper was coated in 'gutta-percha' — a natural waterproof latex gum harvested from tropical trees in Malaya — and wrapped in tarred hemp and protective iron wires.",
          "კაბელის დამზადება უდიდესი სამრეწველო გამოწვევა იყო. მის გულში გადიოდა შვიდი დაგრეხილი სპილენძის მავთული ელექტრული სატელეგრაფო სიგნალების გასატარებლად. იმისათვის, რომ მლაშე ოკეანის წყალს მოკლე ჩართვა არ გამოეწვია, სპილენძი დაფარეს „გუტაპერჩით“ — მალაიზიის ტროპიკული ხეებისგან მოპოვებული ბუნებრივი წყალგაუმტარი ფისით — ხოლო გარედან შემოახვიეს ფისით გაჟღენთილი კანაფი და დამცავი რკინის მავთულები."
        ],
        [
          "The completed cable was so heavy — weighing over four thousand tonnes — that no single ship in the world could carry it! Instead, the British and American navies lent two warships, the 'Agamemnon' and the 'Niagara', each carrying half the cable. After three failed attempts in 1857 and early 1858 when the cable snapped in deep water, the two ships met in the middle of the Atlantic in July 1858, spliced the two ends together, and sailed in opposite directions.",
          "მზა კაბელი იმდენად მძიმე იყო — იწონიდა ოთხი ათას ტონაზე მეტს — რომ მსოფლიოს ვერცერთი გემი მას მარტო ვერ დაიტევდა! ამის გამო ბრიტანეთისა და ამერიკის ფლოტებმა გამოყვეს ორი სამხედრო ხომალდი, „აგამემნონი“ და „ნიაგარა“, რომლებმაც კაბელის ნახევარ-ნახევარი დაიტვირთეს. 1857 და 1858 წლების სამი წარუმატებელი ცდის შემდეგ, როცა კაბელი ღრმა წყალში გაწყდა, 1858 წლის ივლისში ორი გემი შუა ატლანტიკაში შეხვდა ერთმანეთს, კაბელის ბოლოები გადააბეს და საპირისპირო მიმართულებით გაცურეს."
        ],
        [
          "On the fifth of August 1858, both ships reached land — one in Valentia Island, Ireland, and the other in Newfoundland, Canada! Eleven days later, Queen Victoria sent a ninety-eight-word congratulatory telegram to US President James Buchanan. Celebrations erupted on both sides of the ocean, even though that first message took sixteen hours to transmit because the weak signal was hard to read.",
          "1858 წლის 5 აგვისტოს ორივე გემმა ხმელეთს მიაღწია — ერთმა ირლანდიის კუნძულ ვალენტიაზე, მეორემ კი კანადის ნიუფაუნდლენდზე! თერთმეტი დღის შემდეგ დედოფალმა ვიქტორიამ აშშ-ის პრეზიდენტ ჯეიმზ ბიუკენენს გაუგზავნა ოთხმოცდათვრამეტსიტყვიანი მისალოცი დეპეშა. ოკეანის ორივე მხარეს საყოველთაო ზეიმი დაიწყო, მიუხედავად იმისა, რომ სუსტი სიგნალის გამო იმ პირველი შეტყობინების გადაცემას თექვსმეტი საათი დასჭირდა."
        ],
        [
          "Tragically, the chief electrician in Ireland, Wildman Whitehouse, believed that pumping two thousand volts of electricity into the cable would make messages travel faster. Instead, the high voltage burned right through the gutta-percha insulation on the ocean floor, and after just three weeks, the 1858 cable went dead! Yet physicist William Thomson (Lord Kelvin) invented a sensitive mirror galvanometer that needed only a tiny current, and in 1866 a permanent, fast cable was laid — reducing transatlantic communication from twelve days to a matter of minutes!",
          "სამწუხაროდ, ირლანდიაში მომუშავე მთავარ ელექტრიკოსს, უაილდმენ უაითჰაუსს, ეგონა, რომ კაბელში ორი ათასი ვოლტი ძაბვის გაშვება შეტყობინებებს ააჩქარებდა. სინამდვილეში კი მაღალმა ძაბვამ ოკეანის ფსკერზე გუტაპერჩის იზოლაცია დაწვა და სულ რაღაც სამ კვირაში 1858 წლის კაბელი მწყობრიდან გამოვიდა! თუმცა, ფიზიკოსმა უილიამ თომსონმა (ლორდმა კელვინმა) გამოიგონა მგრძნობიარე სარკიანი გალვანომეტრი, რომელსაც უმცირესი დენიც ჰყოფნიდა, და 1866 წელს გაიყვანეს მუდმივი, სწრაფი კაბელი — რამაც ოკეანისგაღმა კავშირი თორმეტი დღიდან რამდენიმე წუთამდე შეამცირა!"
        ]
      ],
      glossary: [
        "unbridgeable barrier|გადაულახავი ზღუდე / დაბრკოლება", "copper cable|სპილენძის კაბელი", "short-circuit (verb)|მოკლე ჩართვის გამოწვევა",
        "gutta-percha|გუტაპერჩი (ბუნებრივი წყალგაუმტარი საიზოლაციო ფისი)", "tarred hemp|ფისით გაჟღენთილი კანაფი", "splice together|ერთმანეთზე გადაბმა / შეერთება (კაბელის)",
        "congratulatory telegram|მისალოცი დეპეშა (ტელეგრამა)", "high voltage|მაღალი ძაბვა", "insulation|იზოლაცია (დამცავი გარსი)", "galvanometer|გალვანომეტრი (სუსტი დენის საზომი ხელსაწყო)"
      ],
      questions: [
        "How long did it take for a letter on a steamship to cross the Atlantic Ocean in the early 1850s?|Ten to twelve days|Only twenty-four hours|Two months|Six weeks",
        "Who proposed laying a four-thousand-kilometre telegraph cable across the bottom of the Atlantic?|American entrepreneur Cyrus West Field|President James Buchanan|Queen Victoria|Alexander Fleming",
        "What natural material harvested from tropical trees in Malaya was used to insulate the copper wires from salt water?|Gutta-percha (a natural waterproof latex gum)|Melted glass|Sheep wool soaked in butter|Plastic wrap",
        "Why did two warships (the 'Agamemnon' and the 'Niagara') have to lay the cable together?|Because the completed cable weighed over 4,000 tonnes, so no single ship in the world could carry all of it|Because one ship was British and one was French|Because the ocean was frozen|To race each other across the sea",
        "How did the two ships lay the cable in July 1858?|They met in the middle of the Atlantic, spliced the two ends together, and sailed in opposite directions to Ireland and Canada|Both ships sailed together from New York to London|They dropped the cable from hot-air balloons|Submarines carried the cable along the bottom",
        "Who sent the famous 98-word congratulatory telegram in August 1858, and how long did it take to transmit?|Queen Victoria sent it to US President James Buchanan, and it took sixteen hours to transmit|Cyrus Field sent it to his wife in two seconds|Lord Kelvin sent it to Paris in one hour|The ship captain sent it",
        "Why did the first transatlantic cable of 1858 stop working after just three weeks?|Chief electrician Wildman Whitehouse pumped 2,000 volts into the cable, burning through the gutta-percha insulation|A giant whale bit the cable in half|A ship's anchor pulled the entire cable onto the beach|The copper dissolved in the water",
        "Why had Whitehouse pumped such high voltage into the cable?|He mistakenly believed that higher voltage would make the telegraph messages travel faster|He wanted to heat the ocean water|He was trying to light electric lamps in Canada|His battery was broken",
        "How did physicist William Thomson (Lord Kelvin) solve the problem of reading weak signals over long cables?|He invented a sensitive mirror galvanometer that needed only a tiny electrical current|He made the copper wire one metre thick|He built relay towers in the middle of the ocean|He used sound waves instead of electricity",
        "When was the permanent, successful transatlantic cable laid, reducing communication time from twelve days to minutes?|In 1866|In 1858|In 1914|In 1950"
      ]
    },
    {
      num: 50, level: "B2",
      icon: "🧠", genre: "კოგნიტური ფსიქოლოგია",
      title: "ფსიქოლოგიური საუბარი: ზეიგარნიკის ეფექტი და დაუსრულებელი საქმეები",
      subtitle: "Psychology Talk: The Zeigarnik Effect and How to Beat Procrastination",
      time: "8 წთ",
      paragraphs: [
        [
          "Have you ever noticed that when a television series ends an episode right in the middle of a dramatic scene — a 'cliffhanger' — you cannot stop thinking about what will happen next, yet as soon as the final episode resolves the story, you forget the details within days? In psychology, this quirk of human memory is known as the 'Zeigarnik Effect': our brain remembers interrupted or unfinished tasks much more vividly than completed ones!",
          "შეგიმჩნევიათ თუ არა, რომ როდესაც სერიალის ეპიზოდი ყველაზე დაძაბულ მომენტში წყდება, ვერ წყვეტთ იმაზე ფიქრს, თუ რა მოხდება შემდეგ, მაგრამ როგორც კი ფინალური სერია ისტორიას დაასრულებს, დეტალები რამდენიმე დღეში გავიწყდებათ? ფსიქოლოგიაში ადამიანის მეხსიერების ამ თავისებურებას „ზეიგარნიკის ეფექტი“ ეწოდება: ჩვენი ტვინი შეწყვეტილ ან დაუსრულებელ საქმეებს გაცილებით უფრო მკაფიოდ იმახსოვრებს, ვიდრე დასრულებულს!"
        ],
        [
          "The phenomenon was discovered in the 1920s in a café in Vienna by a young Lithuanian-born psychologist named Bluma Zeigarnik and her professor, Kurt Lewin. While sitting at a table with a large group of academics, they noticed something remarkable about the waiter: without writing anything down on a notepad, the waiter remembered complex food and drink orders for twelve people with 100% accuracy!",
          "ეს მოვლენა 1920-იან წლებში ვენის ერთ-ერთ კაფეში აღმოაჩინეს წარმოშობით ლიეტუველმა ახალგაზრდა ფსიქოლოგმა ბლუმა ზეიგარნიკმა და მისმა პროფესორმა კურტ ლევინმა. მეცნიერთა დიდ ჯგუფთან ერთად მაგიდასთან ჯდომისას მათ მიმტანში უჩვეულო რამ შეამჩნიეს: ბლოკნოტში ყოველგვარი ჩაწერის გარეშე, მიმტანს 100%-იანი სიზუსტით ახსოვდა თორმეტი ადამიანის რთული შეკვეთა!"
        ],
        [
          "However, ten minutes after the group paid the bill and stood up to leave, Kurt Lewin walked back to the waiter and asked him to repeat what they had ordered. The waiter looked blank and said he couldn't remember a single dish! He explained that he kept the orders in his head only while the table was still unpaid; the moment the bill was settled, his brain automatically 'deleted' the list to make room for new customers.",
          "თუმცა, მას შემდეგ, რაც ჯგუფმა ანგარიში გადაიხადა და წასასვლელად წამოდგა, ათი წუთის შემდეგ კურტ ლევინი მიმტანთან მიბრუნდა და სთხოვა გაემეორებინა, თუ რა ჰქონდათ შეკვეთილი. მიმტანი დაიბნა და თქვა, რომ ერთ კერძსაც კი ვეღარ იხსენებდა! მან განმარტა, რომ შეკვეთებს გონებაში მხოლოდ მანამ ინახავდა, სანამ მაგიდა გადაუხდელი იყო; როგორც კი ანგარიში გასწორდებოდა, მისი ტვინი ახალი სტუმრებისთვის ადგილის გასათავისუფლებლად სიას ავტომატურად „შლიდა“."
        ],
        [
          "Intrigued, Bluma Zeigarnik conducted laboratory experiments in which volunteers were given twenty short tasks — such as solving riddles, stringing beads, and folding paper puzzles. Half of the tasks were interrupted before the volunteers could finish them, while the other half were completed. When asked afterwards to list the tasks they had worked on, participants were nearly twice as likely to remember the interrupted tasks as the finished ones!",
          "დაინტერესებულმა ბლუმა ზეიგარნიკმა ჩაატარა ლაბორატორიული ექსპერიმენტები, სადაც მოხალისეებს მისცეს ოცი მოკლე დავალება — გამოცანების ამოხსნა, მძივების აცმა და ქაღალდის ფიგურების დაკეცვა. დავალებების ნახევარი შეაწყვეტინეს დასრულებამდე, მეორე ნახევარი კი ბოლომდე მიიყვანეს. როდესაც მოგვიანებით სთხოვეს ჩამოეთვალათ შესრულებული დავალებები, მონაწილეებმა შეწყვეტილი საქმეები თითქმის ორჯერ უკეთ გაიხსენეს, ვიდრე დასრულებული!"
        ],
        [
          "How can you use the Zeigarnik Effect to your advantage in daily life? First, it is the ultimate weapon against procrastination! When you dread starting a long report or studying a thick textbook, tell yourself you will work on it for just five minutes. Once you start — even by writing two sentences — your brain opens a 'mental tab' of cognitive tension that nudges you to come back and finish it! Second, to sleep peacefully at night without worrying about tomorrow's unfinished chores, write down a concrete step-by-step plan on paper before bed; studies show that writing down a plan tricks the brain into closing those open mental tabs!",
          "როგორ შეგიძლიათ გამოიყენოთ ზეიგარნიკის ეფექტი ყოველდღიურ ცხოვრებაში? პირველი: ეს არის საუკეთესო იარაღი საქმის გადადების (პროკრასტინაციის) წინააღმდეგ! როცა გრძელი ანგარიშის დაწერა ან სქელი სახელმძღვანელოს კითხვა გეზარებათ, უთხარით საკუთარ თავს, რომ მასზე მხოლოდ ხუთი წუთი იმუშავებთ. როგორც კი დაიწყებთ — თუნდაც ორი წინადადების დაწერით — ტვინი ხსნის კოგნიტური დაძაბულობის „ფანჯარას“, რომელიც გიბიძგებთ დაბრუნდეთ და საქმე ბოლომდე მიიყვანოთ! მეორე: ღამით მშვიდად დასაძინებლად, დაწოლამდე ფურცელზე ჩამოწერეთ ხვალინდელი დაუსრულებელი საქმეების კონკრეტული გეგმა — კვლევები აჩვენებს, რომ გეგმის დაწერა ტვინს აწყნარებს და ღია ფანჯრებს ახურვინებს!"
        ]
      ],
      glossary: [
        "cliffhanger|კულმინაციურ მომენტში გაწყვეტილი ფინალი (სერიალში/წიგნში)", "Zeigarnik Effect|ზეიგარნიკის ეფექტი (დაუსრულებელი საქმეების უკეთ დამახსოვრება)", "notepad|ბლოკნოტი / ჩასაწერი წიგნაკი",
        "settle the bill|ანგარიშის გასწორება / გადახდა", "make room for|ადგილის გათავისუფლება (ახლისთვის)", "string beads|მძივების აცმა",
        "procrastination|პროკრასტინაცია (საქმის სამომავლოდ გადადება)", "dread (verb)|შიში / უსიამოვნო მოლოდინი (რთული საქმის დაწყების წინ)", "cognitive tension|კოგნიტური (გონებრივი) დაძაბულობა", "nudge (verb)|მსუბუქად ბიძგის მიცემა / წახალისება"
      ],
      questions: [
        "What is the 'Zeigarnik Effect' in cognitive psychology?|The tendency of the human brain to remember interrupted or unfinished tasks much better than completed ones|The ability to memorize entire books after reading them once|Forgetting people's names five seconds after meeting them|Feeling sleepy after eating a heavy lunch",
        "Why do television series often end episodes with a dramatic 'cliffhanger'?|Because an unresolved story keeps the brain's mental tab open, making viewers think about it until the next episode|Because the writers ran out of paper|To make the episode five minutes shorter|Because viewers dislike happy endings",
        "Where and when did Bluma Zeigarnik and Kurt Lewin first notice this phenomenon?|In the 1920s, in a café in Vienna|In 1960, in a hospital in London|In 1890, at a railway station in Paris|In 2005, at a university in Boston",
        "What impressed Zeigarnik and Lewin about the waiter at the Vienna café?|He remembered complex food and drink orders for twelve people with 100% accuracy without writing anything down|He carried ten plates on one arm|He spoke six foreign languages|He calculated the bill faster than a machine",
        "What happened when Kurt Lewin asked the waiter to repeat the order ten minutes after the bill was paid?|The waiter couldn't remember a single dish because his brain had deleted the list once the task (the bill) was completed|The waiter repeated every single word backwards|The waiter showed him a hidden notebook|The waiter remembered only the desserts",
        "How did Bluma Zeigarnik test this effect in her laboratory experiments?|She gave volunteers 20 short tasks, interrupted half of them before completion, and tested which ones they remembered best|She asked waiters to carry trays up stairs|She tested how many numbers students could memorize in the dark|She showed volunteers silent movies",
        "How much more likely were participants in Zeigarnik's experiment to remember interrupted tasks compared to finished ones?|Nearly twice as likely|Ten times less likely|They remembered both groups equally|They forgot all the interrupted tasks",
        "How can you use the Zeigarnik Effect to overcome procrastination on a difficult project?|By working on it for just five minutes; starting opens a mental tab of cognitive tension that nudges you to finish it|By waiting until the last night before the deadline|By finishing ten easy tasks first|By never taking a break",
        "Why do unfinished work tasks often keep people awake worrying at night?|Because the brain keeps reminding us of open, unresolved tasks so we don't forget them|Because the bedroom is too warm|Because people drink too much water|Because the hippocampus shuts down at night",
        "How can you quiet your brain before bed if you have unfinished tasks for tomorrow?|Write down a concrete step-by-step plan on paper before bed, which signals the brain that the task is tracked and closes the mental tab|Read work emails in bed until midnight|Try to finish the entire week's work at 2 AM|Drink a cup of strong coffee"
      ]
    },
    {
      num: 51, level: "B2",
      icon: "🏙️", genre: "ურბანისტიკა",
      title: "ურბანისტული პოდკასტი: „15-წუთიანი ქალაქის“ კონცეფცია",
      subtitle: "Urban Planning Podcast: The 15-Minute City",
      time: "8 წთ",
      paragraphs: [
        [
          "For much of the twentieth century, cities were built around a strict separation of zones: people lived in quiet residential suburbs on the edge of town, drove their cars into a central business district to work, drove to a giant highway mall to shop on Saturdays, and drove somewhere else for sports. Today, urban planners are rethinking this car-dependent design through a concept called the '15-Minute City'.",
          "მეოცე საუკუნის უმეტესი ნაწილის განმავლობაში ქალაქები შენდებოდა ზონების მკაცრი დაყოფის პრინციპით: ხალხი ცხოვრობდა ქალაქის განაპირას მდებარე მშვიდ საცხოვრებელ გარეუბნებში, სამუშაოდ მანქანით მიდიოდა ცენტრალურ საქმიან უბანში, შაბათობით საყიდლებზე მიემგზავრებოდა გზატკეცილის გიგანტურ მოლში, ხოლო სპორტისთვის — სულ სხვაგან. დღეს ურბანისტები ცვლიან ამ ავტომობილზე დამოკიდებულ მოდელს კონცეფციით, რომელსაც „15-წუთიანი ქალაქი“ ეწოდება."
        ],
        [
          "Proposed in 2016 by French-Colombian professor Carlos Moreno at the Sorbonne University in Paris, the 15-Minute City is based on a simple, human-centred idea: every resident in every neighbourhood should be able to reach their six essential daily needs — living, working, grocery shopping, healthcare, education, and leisure — within a fifteen-minute walk or bicycle ride from their front door!",
          "2016 წელს პარიზის სორბონის უნივერსიტეტის ფრანგ-კოლუმბიელი პროფესორის, კარლოს მორენოს მიერ შემოთავაზებული „15-წუთიანი ქალაქი“ ეფუძნება მარტივ, ადამიანზე ორიენტირებულ იდეას: ნებისმიერი უბნის თითოეულ მცხოვრებს საკუთარი სახლის კარიდან ფეხით ან ველოსიპედით თხუთმეტი წუთის სავალ მანძილზე უნდა მიუწვდებოდეს ხელი ექვს ძირითად ყოველდღიურ საჭიროებაზე — საცხოვრებელზე, სამუშაოზე, სურსათზე, ჯანდაცვაზე, განათლებასა და დასვენებაზე!"
        ],
        [
          "Instead of having one massive city centre where everyone must travel every morning, a 15-Minute City is 'polycentric' — made up of dozens of lively, self-sufficient neighbourhoods, almost like a collection of connected villages. When local bakeries, pharmacies, clinics, co-working hubs, and parks are right around the corner, residents no longer need to sit in traffic for two hours a day just to buy bread or see a doctor.",
          "ნაცვლად ერთი უზარმაზარი ცენტრისა, სადაც ყველა ადამიანი ყოველ დილით უნდა მივიდეს, „15-წუთიანი ქალაქი“ არის „პოლიცენტრული“ — იგი შედგება ათობით ცოცხალი, თვითკმარი უბნისგან, თითქოს ერთმანეთთან დაკავშირებული პატარა სოფლების ერთობლიობაა. როდესაც საცხობები, აფთიაქები, კლინიკები, საერთო სამუშაო სივრცეები და პარკები სახლთან ახლოსაა, მცხოვრებლებს აღარ უწევთ დღეში ორი საათი საცობში დგომა მხოლოდ პურის საყიდლად ან ექიმთან მისასვლელად."
        ],
        [
          "A key principle of Moreno's vision is 'multi-purpose buildings' — using the same building for different activities at different times of the day rather than leaving it locked and empty. In Paris, for example, dozens of concrete schoolyards are being turned into green 'oasis yards' with trees and fountains. After school finishes at four o'clock and on weekends, the school gates open to the public so neighbours can use the yard as a local park and sports court!",
          "მორენოს ხედვის ერთ-ერთი მთავარი პრინციპია „მრავალფუნქციური შენობები“ — ერთი და იმავე ნაგებობის დღის სხვადასხვა მონაკვეთში სხვადასხვა დანიშნულებით გამოყენება, ნაცვლად მისი ჩაკეტვისა და დაცარიელებისა. მაგალითად, პარიზში ათობით ბეტონის სკოლის ეზო გარდაიქმნება ხეებითა და შადრევნებით სავსე მწვანე „ოაზის-ეზოებად“. ოთხ საათზე გაკვეთილების დასრულების შემდეგ და შაბათ-კვირას სკოლის ჭიშკარი იღება, რათა მეზობლებმა ეზო გამოიყენონ როგორც უბნის პარკი და სპორტული მოედანი!"
        ],
        [
          "Critics sometimes worry that a 15-Minute City means people are not allowed to leave their neighbourhood, which is a complete misunderstanding. Citizens are free to travel anywhere across the city by metro, bus, or car whenever they wish; the goal is simply that you don't HAVE to drive across town for basic daily necessities! By bringing services closer to people, neighbourhoods become livelier, local small shops thrive, and citizens gain back hours of free time every week.",
          "კრიტიკოსები ზოგჯერ შიშობენ, თითქოს „15-წუთიანი ქალაქი“ ნიშნავს იმას, რომ ადამიანებს თავიანთი უბნიდან გასვლა ეკრძალებათ, რაც სრული გაუგებრობაა. მოქალაქეებს ნებისმიერ დროს თავისუფლად შეუძლიათ გადაადგილდნენ მთელ ქალაქში მეტროთი, ავტობუსითა თუ მანქანით; მიზანი უბრალოდ ის არის, რომ ყოველდღიური საბაზისო საჭიროებებისთვის მთელი ქალაქის გადაკვეთა იძულებით არ გიწევდეთ! სერვისების ადამიანებთან დაახლოებით უბნები უფრო ცოცხალი ხდება, მცირე უბნის მაღაზიები ყვავის, მოქალაქეებს კი ყოველკვირეულად საათობით თავისუფალი დრო უბრუნდებათ."
        ]
      ],
      glossary: [
        "residential suburb|საცხოვრებელი გარეუბანი", "car-dependent|ავტომობილზე დამოკიდებული", "15-Minute City|„15-წუთიანი ქალაქი“ (ურბანული მოდელი)",
        "essential daily needs|ყოველდღიური აუცილებელი საჭიროებები", "polycentric|პოლიცენტრული (მრავალცენტრიანი)", "self-sufficient|თვითკმარი",
        "right around the corner|სულ ახლოს / კუთხეშივე", "multi-purpose building|მრავალფუნქციური შენობა", "schoolyard|სკოლის ეზო", "thrive (verb)|აყვავება / წარმატებით განვითარება"
      ],
      questions: [
        "How were many twentieth-century cities designed before the 15-Minute City concept?|With a strict separation of zones for living, working, and shopping, requiring residents to drive everywhere|With all shops and offices built inside residential apartment buildings|Without any roads or car parks|With underground tunnels connecting every house",
        "Who proposed the '15-Minute City' concept in 2016?|Professor Carlos Moreno at the Sorbonne University in Paris|Architect Mick Pearce in Zimbabwe|The Mayor of New York in 1950|Engineer Karl Drais in Germany",
        "What is the core idea of the 15-Minute City?|Every resident should be able to reach their six essential daily needs within a 15-minute walk or bike ride from home|Every bus journey must cost fifteen cents|Cars are only allowed to drive at 15 km/h|Shops are only open for fifteen minutes a day",
        "What are the six essential daily needs mentioned in Carlos Moreno's model?|Living, working, grocery shopping, healthcare, education, and leisure|Airports, stadiums, factories, ports, hotels, and banks|Television, radio, internet, cinema, theatre, and concerts|Driving, parking, flying, sailing, running, and swimming",
        "What does it mean that a 15-Minute City is 'polycentric'?|It is made up of dozens of lively, self-sufficient neighbourhoods rather than one single crowded centre|It has only one giant skyscraper in the middle|It is shaped like a perfect circle|It has no parks or trees",
        "What is the principle of 'multi-purpose buildings' in urban planning?|Using the same building or space for different community activities at different times of the day rather than leaving it empty|Building every house out of five different materials|Turning all schools into supermarkets permanently|Having ten families live in one room",
        "How is the city of Paris applying the multi-purpose principle to its concrete schoolyards?|By turning them into green 'oasis yards' with trees and opening them to neighbours as public parks after 4 PM and on weekends|By turning schoolyards into paid car parks at night|By locking school gates all summer|By building office towers on top of schools",
        "What common misunderstanding do critics sometimes have about the 15-Minute City?|They mistakenly think residents are not allowed to leave their neighbourhood, whereas the goal is simply that you don't HAVE to drive far for basic needs|They think bicycles are banned in the city|They think everyone must work at a bakery|They think the metro will be closed",
        "How does the 15-Minute City model affect local small businesses and neighbourhood shops?|Local small shops thrive because residents walk and shop in their own neighbourhood every day|All small shops close down|Only giant highway malls survive|Shops only open on Sundays",
        "What personal benefit do citizens gain when daily services are within a fifteen-minute walk or ride?|They save hours of commuting time every week, gaining more free time for family and leisure|They get free cars from the government|They never have to walk outdoors|They work twelve hours a day"
      ]
    },
    {
      num: 52, level: "B2",
      icon: "🎨", genre: "ხელოვნება და ექსპერტიზა",
      title: "სამხატვრო მუზეუმის აუდიო-გიდი: როგორ ავლენს მეცნიერება ყალბ შედევრებს",
      subtitle: "Art Museum Audio Guide: The Science of Detecting Forgeries",
      time: "8 წთ",
      paragraphs: [
        [
          "Welcome to the Conservation and Forensics Gallery of the National Art Museum! When you look at a seventeenth-century oil painting hanging in a gilded frame, how can museum curators be 100% certain that it was genuinely painted by an Old Master like Rembrandt or Vermeer, and not by a clever twentieth-century forger? Today, art historians work side by side with chemists and physicists using forensic science to uncover the truth.",
          "კეთილი იყოს თქვენი მობრძანება ეროვნული სამხატვრო მუზეუმის კონსერვაციისა და ექსპერტიზის გალერეაში! როდესაც მოოქროვილ ჩარჩოში ჩასმულ მეჩვიდმეტე საუკუნის ზეთის ფერწერულ ტილოს უყურებთ, როგორ შეუძლიათ მუზეუმის კურატორებს 100%-ით იყვნენ დარწმუნებულნი, რომ იგი ნამდვილად რემბრანდტის ან ვერმეერის მსგავსი ძველი ოსტატის მიერაა დახატული და არა მეოცე საუკუნის ნიჭიერი გამყალბებლის მიერ? დღეს ხელოვნებათმცოდნეები ქიმიკოსებსა და ფიზიკოსებთან ერთად კრიმინალისტიკურ მეთოდებს იყენებენ სიმართლის დასადგენად."
        ],
        [
          "First, conservators examine the painting without touching it, using different wavelengths of light. Under Ultraviolet (UV) light, old natural varnish that has aged for centuries glows with a milky greenish light, whereas fresh modern paint patches applied on top look like dark purple spots! Next, Infrared Reflectography peers right through the upper layers of paint to reveal the artist's original charcoal 'underdrawing' — showing where the master changed the position of a hand or a hat while sketching.",
          "პირველ რიგში, რესტავრატორები ნახატს შეუხებლად იკვლევენ სინათლის სხვადასხვა ტალღის სიგრძის გამოყენებით. ულტრაიისფერი (UV) სხივების ქვეშ საუკუნეების განმავლობაში დაძველებული ბუნებრივი ლაქი რძისფერ-მომწვანოდ ანათებს, ხოლო ზემოდან წასმული ახალი თანამედროვე საღებავის ლაქები მუქ იისფერ წერტილებად ჩანს! შემდეგ ინფრაწითელი რეფლექტოგრაფია საღებავის ზედა ფენების მიღმა იხედება და აჩვენებს მხატვრის თავდაპირველ ნახშირის ესკიზს — სადაც ჩანს, თუ როგორ შეუცვალა ოსტატმა ხატვისას პოზიცია ხელს ან ქუდს."
        ],
        [
          "In a forgery, the underdrawing looks completely different! Because a forger is usually copying a photograph or projecting an image onto the canvas, their pencil lines are stiff, neat, and hesitation-free, with none of the creative changes made by an original artist. X-ray scans can even reveal an older, cheaper nineteenth-century landscape painting hidden underneath that the forger scraped off to get an old canvas!",
          "ყალბ ნახატში კი ქვედა ესკიზი სრულიად სხვანაირად გამოიყურება! რადგან გამყალბებელი ჩვეულებრივ ფოტოდან იხატავს ან გამოსახულებას ტილოზე პროექტორით ანათებს, მისი ფანქრის ხაზები ხისტი, სწორი და უყოყმანოა, ორიგინალი ავტორისთვის დამახასიათებელი შემოქმედებითი ძიებების გარეშე. რენტგენულ სკანირებას კი შეუძლია საღებავის ქვეშ გამოავლინოს მეცხრამეტე საუკუნის უფრო ძველი, იაფფასიანი პეიზაჟი, რომელიც გამყალბებელმა ძველი ტილოს მისაღებად გადაფხიკა!"
        ],
        [
          "The most decisive weapon against art forgers is chemical pigment analysis. Every colour pigment has a known birth date in history! For example, 'Prussian Blue' was invented in Berlin in 1704; 'Cobalt Blue' in 1802; and 'Titanium White' was not available to artists until 1921! Using a laser beam or a microscopic needle to test a tiny speck of paint smaller than a period at the end of a sentence, chemists can identify the exact minerals used.",
          "ხელოვნების გამყალბებელთა წინააღმდეგ ყველაზე გადამწყვეტი იარაღია პიგმენტების ქიმიური ანალიზი. ყველა ფერად პიგმენტს ისტორიაში თავისი ზუსტი დაბადების თარიღი აქვს! მაგალითად, „პრუსიული ლურჯი“ გამოიგონეს ბერლინში 1704 წელს; „კობალტის ლურჯი“ — 1802 წელს; ხოლო „ტიტანის თეთრი“ მხატვრებისთვის ხელმისაწვდომი გახდა მხოლოდ 1921 წელს! ლაზერის სხივის ან მიკროსკოპული ნემსის მეშვეობით, წინადადების ბოლოს დასმულ წერტილზე უფრო პატარა საღებავის ნაწილაკის შემოწმებითაც კი, ქიმიკოსები ზუსტად ადგენენ გამოყენებულ მინერალებს."
        ],
        [
          "In 2010, a notorious German forger named Wolfgang Beltracchi was finally unmasked after selling dozens of fake early-twentieth-century paintings for millions of euros. Although he carefully ground old mineral pigments by hand, he accidentally used a tube of white zinc paint that contained a tiny trace of modern 'Titanium White' — a pigment that did not exist in 1914 when the painting was supposedly made! One microscopic anachronism was enough to solve the case.",
          "2010 წელს ცნობილი გერმანელი გამყალბებელი ვოლფგანგ ბელტრაკი საბოლოოდ გამოაშკარავეს მას შემდეგ, რაც მან მეოცე საუკუნის დასაწყისის ათობით ყალბი ნახატი მილიონობით ევროდ გაყიდა. მიუხედავად იმისა, რომ იგი ძველ მინერალურ პიგმენტებს გულდასმით ხელით ფქვავდა, მან შემთხვევით გამოიყენა თეთრი თუთიის საღებავის ტუბი, რომელიც შეიცავდა თანამედროვე „ტიტანის თეთრის“ უმცირეს კვალს — პიგმენტისა, რომელიც 1914 წელს (როცა ნახატი თითქოსდა შეიქმნა) ჯერ არ არსებობდა! ერთი მიკროსკოპული ანაქრონიზმი საკმარისი აღმოჩნდა საქმის გასახსნელად."
        ]
      ],
      glossary: [
        "gilded frame|მოოქროვილი ჩარჩო", "forger / forgery|გამყალბებელი / ყალბი ნამუშევარი", "forensic science|სასამართლო ექსპერტიზა / კრიმინალისტიკა",
        "Ultraviolet (UV) light|ულტრაიისფერი სინათლე", "varnish|დამცავი ლაქი (ნახატის ზედაპირზე)", "underdrawing|საღებავის ქვეშ არსებული პირველადი ესკიზი",
        "scrape off|გადაფხეკა / აფხეკა", "pigment analysis|პიგმენტების (საღებავის შემადგენლობის) ანალიზი", "Titanium White|ტიტანის თეთრი (1921 წელს შექმნილი პიგმენტი)", "anachronism|ანაქრონიზმი (ეპოქის შეუსაბამობა)"
      ],
      questions: [
        "How does Ultraviolet (UV) light help conservators spot modern repairs or alterations on an old painting?|Old natural varnish glows with a milky greenish light under UV, while fresh modern paint patches look like dark purple spots|UV light melts modern paint immediately|UV light turns the wooden frame blue|Old paint disappears under UV light",
        "What does 'Infrared Reflectography' allow museum scientists to see?|It peers through the upper paint layers to reveal the artist's original charcoal underdrawing and sketching changes|It measures the weight of the wooden frame|It shows the price of the canvas|It cleans dust off the surface",
        "How does a forger's underdrawing typically differ from an original master's underdrawing?|A forger's lines are stiff, neat, and copied without hesitation, lacking the creative changes of an original artist|A forger never uses a pencil or charcoal|An original master never makes any changes while sketching|A forger draws only in red ink",
        "Why do forgers sometimes buy cheap nineteenth-century landscape paintings and scrape the paint off?|To reuse the genuinely old canvas and wooden stretcher so the back of the painting looks old|Because they like nineteenth-century frames|To find gold hidden under the paint|Because new canvas is illegal to buy",
        "What can an X-ray scan reveal if a forger reused an old canvas?|The ghost image of the older painting still hidden underneath the new layers of paint|The fingerprint of the museum director|The temperature of the room|The exact date the tree was planted",
        "Why is chemical pigment analysis the most decisive weapon against art forgers?|Because every colour pigment has a known invention date in history, so finding a modern pigment proves a painting is fake|Because old pigments have no colour under a microscope|Because only kings were allowed to use blue paint|Because modern paint smells like lemons",
        "In what year did the pigment 'Titanium White' become available to artists?|In 1921|In 1704|In 1650|In 1802",
        "How large a sample of paint do chemists need to test the minerals inside it?|A microscopic speck smaller than a period at the end of a sentence|A five-centimetre square cut from the centre|Half of the canvas|They must dissolve the entire painting",
        "How was the famous German art forger Wolfgang Beltracchi finally caught in 2010?|He accidentally used a tube of white paint containing a trace of modern 'Titanium White' on a painting dated 1914|He signed his own real name on the front of the canvas|He used a plastic frame from a supermarket|He confessed on a radio show",
        "What does the word 'anachronism' mean in the context of art forensics?|Something (such as a 1921 pigment) that belongs to a different time period than the date claimed for the artwork|A type of brush made from horsehair|A cracks pattern in old oil paint|A museum ticket"
      ]
    },
    {
      num: 53, level: "B2",
      icon: "🦬", genre: "ეკოლოგია და კონსერვაცია",
      title: "ეკოლოგიური რეპორტაჟი: ევროპის ველური ბუნების აღდგენა (Rewilding)",
      subtitle: "Environmental Feature: Rewilding Europe's Ancient Landscapes",
      time: "8 წთ",
      paragraphs: [
        [
          "For decades, traditional nature conservation focused on freezing landscapes in time — building fences around small nature reserves and managing them like tidy gardens. In recent years, however, a bold new movement called 'rewilding' has begun transforming conservation across Europe. Instead of micromanaging nature, rewilding aims to restore missing keystone species, remove artificial dams and fences, and step back so nature can heal and regulate itself!",
          "ათწლეულების განმავლობაში ბუნების დაცვის ტრადიციული მიდგომა მიზნად ისახავდა ლანდშაფტების უცვლელად დაკონსერვებას — პატარა ნაკრძალების შემოღობვასა და მათ მოვლას მოწესრიგებული ბაღებივით. თუმცა, ბოლო წლებში ევროპაში გარემოს დაცვას ცვლის თამამი ახალი მოძრაობა, რომელსაც „რიუაილდინგი“ (Rewilding — ველური ბუნების თვითაღდგენა) ეწოდება. ბუნების მუდმივი კონტროლის ნაცვლად, ეს მიდგომა გულისხმობს გამქრალი საკვანძო სახეობების დაბრუნებას, ხელოვნური კაშხლებისა და ღობეების მოშლით ბუნებისთვის თვითრეგულირების საშუალების მიცემას!"
        ],
        [
          "One of the most inspiring success stories of European rewilding is the return of the European bison — the continent's largest land mammal, weighing up to nine hundred kilograms. Hunting and habitat loss wiped out every single wild European bison by 1927; the species survived only because just fifty-four animals remained in zoos! Through careful breeding and reintroduction into the Białowieża Forest in Poland and the Southern Carpathian Mountains in Romania, over seven thousand wild bison now roam free again.",
          "ევროპული ველური ბუნების აღდგენის ერთ-ერთი ყველაზე შთამბეჭდავი მაგალითია ევროპული დომბის (ზუბრის) დაბრუნება — ეს არის კონტინენტის უდიდესი სახმელეთო ძუძუმწოვარი, რომელიც ცხრაას კილომეტრამდე (კილოგრამამდე) იწონის. ნადირობამ და საბინადრო გარემოს დაკარგვამ 1927 წლისთვის ბუნებაში ყველა ველური დომბა გაანადგურა; სახეობა გადარჩა მხოლოდ იმიტომ, რომ ზოოპარკებში ორმოცდათოთხმეტი ცხოველი იყო შემორჩენილი! პოლონეთის ბელოვეჟის ტყესა და რუმინეთის სამხრეთ კარპატებში მათი გამრავლებისა და დაბრუნების წყალობით, დღეს თავისუფლებაში კვლავ შვიდი ათასზე მეტი ველური დომბა ბინადრობს."
        ],
        [
          "Why is the bison such an important 'ecosystem engineer'? When a dark, dense forest has no large grazing animals, fast-growing bushes and brambles block all sunlight from reaching the forest floor. As herds of heavy bison walk through the woods, they eat thorny bushes, strip bark from trees, and roll in dry dirt baths. This creates sunny open clearings in the forest where wildflowers bloom, attracting rare butterflies, bees, and ground-nesting birds!",
          "რატომ არის დომბა ასეთი მნიშვნელოვანი „ეკოსისტემის ინჟინერი“? როდესაც ბნელ, ხშირ ტყეში დიდი ბალახისმჭამელი ცხოველები არ არიან, სწრაფად მზარდი ბუჩქები და მაყვლის ბარდები მზის სინათლეს ტყის ნიადაგამდე აღარ უშვებს. როცა მძიმე დომბების ჯოგი ტყეში გადაადგილდება, ისინი ჭამენ ეკლიან ბუჩქებს, ხეებს ქერქს აცლიან და მიწაში გორაობენ. ეს ტყეში აჩენს მზიან მდელოებს (კორდებს), სადაც მინდვრის ყვავილები ყვავის, რაც იზიდავს იშვიათ პეპლებს, ფუტკრებსა და მიწაზე მობუდარ ფრინველებს!"
        ],
        [
          "Rewilding is also transforming Europe's rivers. Over the past century, thousands of small, obsolete concrete weirs and dams were left standing across rivers in Spain, France, and Finland, blocking migratory fish like salmon and eels from swimming upstream to lay their eggs. In the past five years alone, conservationists have demolished over three thousand old river barriers, allowing rivers to flow naturally and fish populations to rebound within a single season!",
          "ეს პროცესი ცვლის ევროპის მდინარეებსაც. გასული საუკუნის განმავლობაში ესპანეთის, საფრანგეთისა და ფინეთის მდინარეებზე შემორჩა ათასობით პატარა, მოძველებული ბეტონის ჯებირი და კაშხალი, რომლებიც ორაგულისა და გველთევზას მსგავს გადამფრენ თევზებს ქვირითის დასაყრელად დინების აღმა ასვლაში უშლიდა ხელს. მხოლოდ ბოლო ხუთ წელიწადში გარემოსდამცველებმა სამი ათასზე მეტი ძველი მდინარის ბარიერი მოშალეს, რამაც მდინარეებს ბუნებრივი დინება დაუბრუნა, თევზების პოპულაცია კი ერთ სეზონში აღდგა!"
        ],
        [
          "Even rural economies benefit from rewilding. As young people move from remote mountain villages to cities, abandoned farmland can be linked together into 'wildlife corridors' where lynx, wolves, golden eagles, and beavers can travel safely between national parks. In turn, small eco-tourism guest houses and local nature guides bring sustainable income back to quiet mountain communities.",
          "ველური ბუნების აღდგენით სოფლის ეკონომიკაც კი სარგებლობს. რადგან ახალგაზრდები მთის შორეული სოფლებიდან ქალაქებში გადადიან, მიტოვებული სასოფლო-სამეურნეო მიწები შეიძლება გაერთიანდეს „ველური ბუნების დერეფნებად“, სადაც ფოცხვერებს, მგლებს, მთის არწივებსა და თახვებს ეროვნულ პარკებს შორის უსაფრთხოდ გადაადგილება შეეძლებათ. თავის მხრივ, პატარა ეკოტურისტული საოჯახო სასტუმროები და ბუნების ადგილობრივი გიდები მშვიდ მთის სოფლებს მდგრად შემოსავალს უბრუნებენ."
        ]
      ],
      glossary: [
        "rewilding|ველური ბუნების თვითაღდგენა (ბუნებრივი ეკოსისტემის დაბრუნება)", "micromanage|წვრილმანებამდე მკაცრად კონტროლი", "European bison|ევროპული დომბა / ზუბრი",
        "roam free|თავისუფლად ხეტიალი / ბინადრობა", "ecosystem engineer|ეკოსისტემის ინჟინერი (გარემოს გარდამქმნელი სახეობა)", "bramble|მაყვლის ეკლიანი ბარდი",
        "forest clearing|ტყის მზიანი მდელო / კორდი", "obsolete dam / weir|მოძველებული (უფუნქციო) კაშხალი / ჯებირი", "swim upstream|დინების აღმა (სათავისკენ) ცურვა", "wildlife corridor|ველური ბუნების დერეფანი (დამაკავშირებელი ზოლი)"
      ],
      questions: [
        "How does the modern 'rewilding' movement differ from traditional nature conservation?|Instead of micromanaging fenced reserves like tidy gardens, rewilding restores keystone species and removes barriers so nature can regulate itself|Rewilding means planting rows of identical pine trees for timber|Rewilding keeps all animals inside city zoos|Rewilding replaces forests with farmland",
        "What happened to the wild European bison by 1927, and how did the species survive?|Every wild bison was wiped out by 1927, and the species survived only because 54 animals remained in zoos|Millions of bison hid on an island in the Atlantic|They migrated to Africa|They never went extinct in the wild",
        "Approximately how many wild European bison now roam free in Europe thanks to reintroduction programmes?|Over seven thousand wild bison|Only fifty-four bison|About two hundred bison|One million bison",
        "In which two regions mentioned in the broadcast have European bison been successfully reintroduced?|The Białowieża Forest in Poland and the Southern Carpathian Mountains in Romania|The beaches of southern Spain and Italy|The islands of Greece|The suburbs of London",
        "How do herds of heavy European bison act as 'ecosystem engineers' in dense forests?|They eat thorny bushes, strip bark, and roll in dirt, creating sunny forest clearings where wildflowers, bees, and birds thrive|They build wooden dams across rivers like beavers|They dig deep underground caves for bears|They plant acorns in straight rows",
        "What happens to a dense forest floor when there are no large grazing animals like bison?|Fast-growing bushes and brambles block sunlight from reaching the forest floor, reducing plant and insect diversity|All the trees fall down within a year|The forest turns into a sandy desert|Wildflowers grow ten metres tall",
        "Why have conservationists demolished over three thousand old concrete weirs and dams across European rivers in the past five years?|Because obsolete barriers blocked migratory fish like salmon and eels from swimming upstream to lay their eggs|To build highways on the dry riverbeds|Because the concrete was needed for houses|To stop rivers from reaching the sea",
        "How quickly did fish populations rebound after the old river barriers were removed?|Within a single season|It took fifty years|Fish never returned to the rivers|Only after scientists carried fish in trucks",
        "What are 'wildlife corridors'?|Connected strips of natural land that allow animals like lynx, wolves, and beavers to travel safely between national parks|Underground metro tunnels for tourists|Fenced cages along highways|Paths in city parks for dog walkers",
        "How does rewilding economically help quiet mountain villages?|By attracting eco-tourism, which supports local guest houses and nature guides|By building large coal factories in the mountains|By paving over meadows for shopping malls|By selling all the forest trees"
      ]
    },
    {
      num: 54, level: "B2",
      icon: "✈️", genre: "ავიაცია და ინჟინერია",
      title: "ავიაციის დოკუმენტური: როგორ უძლებს „შავი ყუთი“ კატასტროფას",
      subtitle: "Aviation Documentary: The Engineering Inside a Plane's Black Box",
      time: "8 წთ",
      paragraphs: [
        [
          "Whenever an aircraft accident occurs anywhere in the world, the first priority of aviation investigators is to locate the plane's two flight recorders — universally known in the media as the 'black boxes'. Yet if you ever held a flight recorder in your hands, the first thing you would notice is that it is not black at all! By international aviation law, every flight recorder is painted in brilliant, high-visibility 'international orange' with reflective white strips so search teams can spot it easily in twisted wreckage or deep underwater.",
          "როდესაც მსოფლიოს ნებისმიერ წერტილში საავიაციო შემთხვევა ხდება, გამომძიებელთა უპირველესი ამოცანაა თვითმფრინავის ორი ბორტჩამწერის პოვნა, რომლებსაც მედიაში საყოველთაოდ „შავ ყუთებს“ უწოდებენ. თუმცა, ბორტჩამწერი ხელში რომ დაგეჭირათ, პირველი, რასაც შეამჩნევდით, ის არის, რომ იგი სულაც არ არის შავი! საერთაშორისო საავიაციო კანონმდებლობით, ყველა ბორტჩამწერი იღებება კაშკაშა, შორიდანვე შესამჩნევ „საერთაშორისო ნარინჯისფერში“ ამრეკლავი თეთრი ზოლებით, რათა სამძებრო ჯგუფებმა იგი ადვილად შეამჩნიონ ნამსხვრევებში ან წყლის სიღრმეში."
        ],
        [
          "The device was invented in the 1950s by a young Australian aeronautical chemist named David Warren. In 1953, Warren was investigating the mysterious crashes of the world's first commercial jet airliner, the 'Comet'. Realizing that there were no witnesses left to explain what had gone wrong in the sky, Warren remembered seeing the world's first pocket-sized voice recorder at a trade fair and built a fireproof prototype that recorded both the pilots' voices and instrument readings.",
          "ეს მოწყობილობა 1950-იან წლებში გამოიგონა ახალგაზრდა ავსტრალიელმა საავიაციო ქიმიკოსმა დევიდ უორენმა. 1953 წელს უორენი იძიებდა მსოფლიოს პირველი რეაქტიული სამგზავრო თვითმფრინავის — „კომეტის“ — იდუმალ კატასტროფებს. როცა გააცნობიერა, რომ ცაში მომხდარის ასახსნელად თვითმხილველები არ არსებობდნენ, უორენს გაახსენდა გამოფენაზე ნანახი ჯიბის ხმის ჩამწერი და შექმნა ცეცხლგამძლე პროტოტიპი, რომელიც იწერდა როგორც პილოტების საუბარს, ისე ხელსაწყოების მაჩვენებლებს."
        ],
        [
          "Modern commercial airliners carry two separate recorders: the 'Cockpit Voice Recorder' (CVR), which records the last two hours of pilot conversations, engine noise, and cockpit alarms; and the 'Flight Data Recorder' (FDR), which logs twenty-five hours of data across eighty-eight different parameters — including altitude, airspeed, wing flap positions, autopilot status, and even smoke detector alerts!",
          "თანამედროვე სამგზავრო თვითმფრინავებზე ორი ცალკეული ჩამწერია განთავსებული: „კაბინის ხმის ჩამწერი“ (CVR), რომელიც იწერს პილოტების საუბრის, ძრავების ხმაურისა და განგაშის სიგნალების ბოლო ორ საათს; და „ფრენის მონაცემთა ჩამწერი“ (FDR), რომელიც ოცდახუთი საათის განმავლობაში იწერს ოთხმოცდარვა სხვადასხვა პარამეტრს — მათ შორის სიმაღლეს, სიჩქარეს, ფრთის ფარფლების მდებარეობას, ავტოპილოტის სტატუსსა და კვამლის დეტექტორების სიგნალებსაც კი!"
        ],
        [
          "Where are the black boxes placed on an airplane? Although people assume they are in the cockpit at the front, they are actually installed in the tail section at the very rear of the plane, because the tail usually experiences the least impact force during a crash. To pass certification, the solid-state memory boards inside are encased in multiple layers of silica thermal insulation and a thick shell of titanium or hardened stainless steel.",
          "სად არის განთავსებული „შავი ყუთები“ თვითმფრინავში? მიუხედავად იმისა, რომ ბევრს ისინი წინ, პილოტის კაბინაში ჰგონია, სინამდვილეში მათ აყენებენ თვითმფრინავის კუდის ნაწილში, სულ ბოლოში, რადგან შეჯახებისას კუდზე ყველაზე ნაკლები დარტყმის ძალა მოდის. სერტიფიცირების გასავლელად შიგნით მოთავსებული მეხსიერების პლატები დაცულია თბოიზოლაციის მრავალი ფენითა და ტიტანის ან წრთობილი უჟანგავი ფოლადის სქელი გარსით."
        ],
        [
          "Before a recorder model is approved for flight, engineers subject it to brutal survival tests: it is fired from an air cannon into a concrete wall at seven hundred and fifty kilometres per hour, crushed under a two-tonne weight for five minutes, baked in a roaring jet-fuel fire at one thousand one hundred degrees Celsius for an hour, and submerged under six thousand metres of salt water! If the plane sinks in the ocean, a cylinder on the box called an 'Underwater Locator Beacon' automatically activates on contact with water, sending out an ultrasonic 'ping' every second for thirty days so rescue ships can find it.",
          "სანამ ჩამწერის მოდელი ფრენისთვის დამტკიცდება, ინჟინრები მას გადარჩენის უმკაცრეს გამოცდებს უტარებენ: პნევმატური ქვემეხიდან საათში შვიდას ორმოცდაათი კილომეტრის სიჩქარით ესვრიან ბეტონის კედელს, ხუთი წუთით აწვებიან ორტონიანი სიმძიმით, ერთი საათის განმავლობაში წვავენ რეაქტიული საწვავის ცეცხლში ათას ას გრადუს ცელსიუსზე და ძირავენ მლაშე წყალში ექვსი ათასი მეტრის სიღრმეზე! ხოლო თუ თვითმფრინავი ოკეანეში ჩაიძირა, ყუთზე მიმაგრებული ცილინდრი — „წყალქვეშა რადიოშუქურა“ — წყალთან შეხებისთანავე ავტომატურად ირთვება და ოცდაათი დღის განმავლობაში ყოველ წამს გამოსცემს ულტრაბგერით სიგნალს, რათა სამაშველო გემებმა მისი პოვნა შეძლონ."
        ]
      ],
      glossary: [
        "flight recorder ('black box')|ბორტჩამწერი („შავი ყუთი“)", "high-visibility orange|შორიდანვე შესამჩნევი კაშკაშა ნარინჯისფერი", "wreckage|ნამსხვრევები (კატასტროფის შემდეგ)",
        "aeronautical chemist|საავიაციო ქიმიკოსი", "jet airliner|რეაქტიული სამგზავრო თვითმფრინავი", "fireproof prototype|ცეცხლგამძლე პროტოტიპი (პირველი ნიმუში)",
        "altitude and airspeed|ფრენის სიმაღლე და ჰაერის მიმართ სიჩქარე", "tail section|თვითმფრინავის კუდის ნაწილი", "titanium shell|ტიტანის დამცავი გარსი", "Underwater Locator Beacon|წყალქვეშა სამძებრო რადიოშუქურა"
      ],
      questions: [
        "What colour is an airplane's 'black box' (flight recorder) actually painted, and why?|Brilliant, high-visibility 'international orange' with reflective white strips so search teams can spot it easily|Completely matte black so it hides in the dark|Sky blue to match the clouds|Silver to match the wings",
        "Who invented the first flight recorder in the 1950s, and what inspired him?|Australian aeronautical chemist David Warren, while investigating the mysterious crashes of the 'Comet' jet airliner|The Wright brothers in 1903|A submarine captain in the Atlantic|An American radio host",
        "What are the two separate recorders carried on modern commercial airliners?|The Cockpit Voice Recorder (CVR) and the Flight Data Recorder (FDR)|A television camera and a weather radar|A telephone and a typewriter|Two identical music recorders",
        "What does the Cockpit Voice Recorder (CVR) record besides the pilots' voices?|Engine noise and cockpit alarms over the last two hours|Conversations of passengers in the back rows|Radio music from the ground|Only the take-off announcement",
        "How many hours of data and how many parameters does the Flight Data Recorder (FDR) log?|Twenty-five hours of data across eighty-eight parameters (such as altitude, airspeed, and autopilot status)|Only five minutes of speed data|One hundred hours of video|Only the temperature outside",
        "Where are the two black boxes installed inside an airplane, and why?|In the tail section at the very rear of the plane, because the tail usually experiences the least impact force in a crash|Right in the nose cone at the very front|Inside the left wing fuel tank|Under the pilot's seat",
        "What materials protect the solid-state memory boards inside a modern flight recorder?|Multiple layers of silica thermal insulation and a thick shell of titanium or hardened stainless steel|A wooden box wrapped in wool|A glass jar filled with oil|Hard black plastic",
        "What brutal fire test must a flight recorder survive before being certified for flight?|Being baked in a jet-fuel fire at 1,100 degrees Celsius for one full hour|Being held over a candle for ten minutes|Being left in the summer sun for a week|Being boiled in water at 100 degrees",
        "How deep under salt water is a flight recorder tested to survive?|Six thousand metres deep|Only ten metres deep|One hundred metres deep|Fifty metres deep",
        "How does the 'Underwater Locator Beacon' help rescue ships find a black box if a plane sinks in the ocean?|It activates automatically on contact with water and sends out an ultrasonic 'ping' every second for thirty days|It inflates a giant yellow balloon that floats to the surface|It shines a bright red laser beam through the waves|It sends an email to the airport"
      ]
    },
    {
      num: 55, level: "B2",
      icon: "🗣️", genre: "ენა და კულტურა",
      title: "ლინგვისტიკის პოდკასტი: ყოველდღიური იდიომების ისტორიული წარმოშობა",
      subtitle: "Linguistics Podcast: The Hidden History Behind Everyday Idioms",
      time: "8 წთ",
      paragraphs: [
        [
          "Every language is a living museum of history. In everyday English conversation, people constantly use idioms — colourful expressions like 'bite the bullet', 'break the ice', 'turn a blind eye', or 'pass with flying colours' — whose literal words have nothing to do with their modern meaning! On today's episode of 'Word Origins', we are looking at the real historical events that gave birth to four famous English idioms.",
          "ყველა ენა ისტორიის ცოცხალი მუზეუმია. ყოველდღიურ ინგლისურ საუბარში ადამიანები მუდმივად იყენებენ იდიომებს — ხატოვან გამოთქმებს, როგორებიცაა „ტყვიის მოკვნეტა“ (bite the bullet), „ყინულის გალღობა“ (break the ice), „ბრმა თვალის მიპყრობა“ (turn a blind eye) ან „აფრიალებული დროშებით ჩაბარება“ (pass with flying colours) — რომელთა პირდაპირ მნიშვნელობას თანამედროვე შინაარსთან საერთო არაფერი აქვს! დღევანდელ ეპიზოდში „სიტყვათა წარმოშობა“ განვიხილავთ იმ რეალურ ისტორიულ მოვლენებს, რომლებმაც დასაბამი მისცა ოთხ ცნობილ ინგლისურ იდიომს."
        ],
        [
          "Many idioms come from the Golden Age of Sail, when Britain's wooden sailing ships crossed the globe. For example, if a student passes a difficult university exam with top marks, we say they 'passed with flying colours'! In the seventeenth and eighteenth centuries, 'colours' meant a ship's national flags. When a ship returned to its home harbour after winning a victorious battle at sea, the captain kept all the colourful flags flying proudly from the tall masts; a defeated ship had to lower its flags in shame.",
          "ბევრი იდიომი მომდინარეობს იალქნიანი ფლოტის ოქროს ხანიდან, როდესაც ბრიტანეთის ხის ხომალდები მსოფლიოს სერავდნენ. მაგალითად, თუ სტუდენტი რთულ საუნივერსიტეტო გამოცდას უმაღლესი ქულებით აბარებს, ვამბობთ, რომ მან გამოცდა „აფრიალებული დროშებით ჩააბარა“ (passed with flying colours)! მეჩვიდმეტე-მეთვრამეტე საუკუნეებში სიტყვა „colours“ გემის ეროვნულ დროშებს ნიშნავდა. როდესაც გემი ზღვაზე გამარჯვებული ბრძოლის შემდეგ მშობლიურ ნავსადგურში ბრუნდებოდა, კაპიტანი მაღალ ანძებზე ყველა ფერად დროშას ამაყად აფრიალებულს ტოვებდა; დამარცხებულ გემს კი დროშები უნდა დაეშვა."
        ],
        [
          "Another nautical expression is 'to break the ice', which today means saying something friendly to relax a tense, awkward silence at the start of a meeting or party. Before modern steel icebreaker ships were invented, merchant ships sailing to northern ports in winter often got trapped in frozen rivers and harbours. The port city would send out small, sturdy boats equipped with iron-reinforced bows to smash through the ice in front of the merchant ship and clear a path for trade to begin!",
          "კიდევ ერთი საზღვაო გამოთქმაა „ყინულის გატეხვა/გალღობა“ (to break the ice), რაც დღეს ნიშნავს შეხვედრის ან წვეულების დასაწყისში უხერხული სიჩუმის განმუხტვას მეგობრული ხუმრობით. თანამედროვე ფოლადის ყინულმჭრელი გემების გამოგონებამდე, ზამთარში ჩრდილოეთის პორტებისკენ მიმავალი სავაჭრო გემები ხშირად იჭედებოდნენ გაყინულ მდინარეებსა და ნავსადგურებში. საპორტო ქალაქი წინ უგზავნიდა რკინით გამაგრებული ცხვირის მქონე პატარა, მყარ ნავებს, რომლებიც სავაჭრო გემის წინ ყინულს ამტვრევდნენ და ვაჭრობის დასაწყებად გზას ათავისუფლებდნენ!"
        ],
        [
          "What about 'turning a blind eye', which means intentionally ignoring a rule violation or an inconvenient fact? This phrase comes from a real historical event during the Battle of Copenhagen in 1801! British Admiral Horatio Nelson — who had lost the sight in his right eye years earlier in battle — wanted to continue attacking the Danish fleet. When his cautious superior commander raised a signal flag ordering Nelson to retreat, Nelson held his brass telescope up to his blind right eye, declared 'I really do not see the signal!', and went on to win the battle!",
          "რას ნიშნავს „ბრმა თვალის მიპყრობა“ (თვალის დახუჭვა — turning a blind eye), რაც გულისხმობს წესის დარღვევის ან უხერხული ფაქტის შეგნებულად არშემჩნევას? ეს ფრაზა მომდინარეობს 1801 წლის კოპენჰაგენის ბრძოლის რეალური ისტორიული ეპიზოდიდან! ბრიტანელ ადმირალ ჰორაციო ნელსონს — რომელსაც წლების წინ ბრძოლაში მარჯვენა თვალში მხედველობა ჰქონდა დაკარგული — დანიის ფლოტზე შეტევის გაგრძელება სურდა. როდესაც მისმა ფრთხილმა ზემდგომმა სარდალმა უკან დახევის სასიგნალო დროშა აღმართა, ნელსონმა თავისი თითბრის ჭოგრიტი ბრმა მარჯვენა თვალზე მიიდო, განაცხადა: „სიგნალს მართლა ვერ ვხედავ!“, და ბრძოლა გამარჯვებით დაასრულა!"
        ],
        [
          "Finally, when someone faces an unpleasant situation with courage, we tell them to 'bite the bullet'. Before medical anaesthesia was introduced in the late 1840s, battlefield surgeons had to treat wounded soldiers while they were wide awake. To help a patient endure the pain without screaming or biting their own tongue, the doctor placed a soft lead musket bullet between the soldier's back teeth to bite down on! Knowing these stories reminds us that every time we speak, we are echoing centuries of human history.",
          "დაბოლოს, როდესაც ადამიანი უსიამოვნო სიტუაციას სიმამაცით ხვდება, ეუბნებიან „ტყვიას უკბინეო“ (bite the bullet — კბილი კბილს დააჭირე). 1840-იანი წლების ბოლოს სამედიცინო ანესთეზიის შემოღებამდე, საველე ქირურგებს დაჭრილი ჯარისკაცებისთვის ოპერაციის გაკეთება სრულ გონებაზე უწევდათ. იმისათვის, რომ პაციენტს ტკივილისთვის ყვირილისა და ენის მოკვნეტის გარეშე გაეძლო, ექიმი მას უკანა კბილებს შორის უდებდა მუშკეტის რბილ ტყვიის ბურთულას მაგრად დასაჭერად! ამ ისტორიების ცოდნა გვახსენებს, რომ ყოველი საუბრისას ჩვენ საუკუნოვან ადამიანურ ისტორიას ვაცოცხლებთ."
        ]
      ],
      glossary: [
        "idiom|იდიომი (ხატოვანი გამოთქმა)", "literal meaning|პირდაპირი (სიტყვასიტყვითი) მნიშვნელობა", "pass with flying colours|წარმატებით / ბრწყინვალედ ჩაბარება (გამოცდის)",
        "mast (ship)|გემის ანძა", "break the ice|უხერხული სიჩუმის დარღვევა / ყინულის გალღობა", "turn a blind eye|თვალის დახუჭვა (შეგნებულად არშემჩნევა)",
        "signal flag|სასიგნალო დროშა", "retreat (verb)|უკან დახევა (ბრძოლაში)", "bite the bullet|კბილის კბილზე დაჭერა / სიმამაცის მოკრება", "lead musket bullet|ტყვიის (ლითონის) მუშკეტის ტყვია"
      ],
      questions: [
        "What is an 'idiom' in linguistics?|A colourful expression whose overall figurative meaning cannot be understood from the literal meanings of its individual words|A scientific word borrowed from ancient Greek|A grammatical rule about past tense verbs|A regional accent spoken in port cities",
        "What does the modern idiom 'to pass with flying colours' mean?|To pass a difficult test or challenge with high marks and great success|To paint a picture using bright colours|To fly on an airplane during a storm|To run a race wearing a colourful shirt",
        "Where did the expression 'with flying colours' originate in the seventeenth and eighteenth centuries?|Victorious warships returning to harbour kept all their national flags ('colours') flying proudly from the tall masts|Artists hung wet paintings from castle windows|Runners carried silk ribbons at the Olympic Games|Students wore colourful hats during exams",
        "What did a defeated warship have to do with its flags ('colours') after losing a battle?|Lower its flags in shame and surrender|Paint its flags black|Burn its flags on the deck|Tie them to the anchor",
        "What does the idiom 'to break the ice' mean in modern social situations?|To say or do something friendly to relax awkward silence when people meet for the first time|To serve cold drinks with ice cubes at a party|To go ice skating on a frozen lake|To argue with a stranger",
        "What was the original historical practice behind 'breaking the ice'?|Port cities sent small, sturdy boats to smash through river ice in front of merchant ships so trade could begin|Bakers broke ice off their windows in winter|Explorers carved ice blocks in Antarctica|Fishermen cut holes in the ice",
        "Who inspired the idiom 'to turn a blind eye' during the Battle of Copenhagen in 1801?|British Admiral Horatio Nelson|King George III|Captain Benjamin Briggs|Ferdinand de Lesseps",
        "What did Admiral Nelson actually do at the Battle of Copenhagen to ignore the order to retreat?|He held his telescope up to his blind right eye and declared that he could not see the signal flag|He closed both eyes and went to sleep in his cabin|He threw his telescope into the sea|He wore a black blindfold",
        "What does the idiom 'to bite the bullet' mean today?|To face a difficult or unpleasant situation with courage and determination|To eat dinner very quickly|To speak angrily to a colleague|To repair a broken machine",
        "Why did battlefield surgeons before the 1840s give wounded soldiers a soft lead bullet to bite on?|Because before anaesthesia was invented, biting on soft lead helped awake patients endure pain without biting their tongue|Because lead contained medicine that cured infections|To keep the soldier's mouth cold|To test how strong their teeth were"
      ]
    },
    {
      num: 56, level: "B2",
      icon: "🧼", genre: "მედიცინის ისტორია",
      title: "მედიცინის ისტორიის ლექცია: იგნაც ზემელვაისი და ჰიგიენის რევოლუცია",
      subtitle: "Medical History Lecture: The Doctor Who Discovered the Power of Handwashing",
      time: "8 წთ",
      paragraphs: [
        [
          "Today, washing our hands with soap and water before eating or before a doctor examines a patient seems like the most basic common sense in the world. Yet less than one hundred and eighty years ago, in the 1840s, the medical profession had no idea that microscopic germs caused disease! Even in the most prestigious European hospitals, surgeons and doctors walked straight from examining dead bodies in the autopsy room to treating patients on the wards without washing their hands!",
          "დღეს ჭამის წინ ან პაციენტის გასინჯვამდე საპნითა და წყლით ხელების დაბანა მსოფლიოში ყველაზე ელემენტარულ საღ აზრად გვეჩვენება. თუმცა, ას ოთხმოც წელზე ნაკლები ხნის წინ, 1840-იან წლებში, სამედიცინო საზოგადოებას წარმოდგენაც არ ჰქონდა, რომ დაავადებებს მიკროსკოპული მიკრობები იწვევდა! ევროპის ყველაზე პრესტიჟულ საავადმყოფოებშიც კი ქირურგები და ექიმები გვამების გაკვეთის ოთახიდან (პrozექტურიდან) პირდაპირ პალატებში მიდიოდნენ პაციენტების სამკურნალოდ ხელების დაუბანლად!"
        ],
        [
          "In 1846, a young Hungarian physician named Ignaz Semmelweis began working at the Vienna General Hospital, which had two separate maternity clinics standing side by side. Semmelweis was horrified by a tragic mystery: in the First Clinic, where patients were treated by male doctors and medical students, nearly fifteen percent of mothers died from a terrible infection called 'childbed fever'. In the Second Clinic next door, where patients were cared for by female midwives, the death rate was under two percent!",
          "1846 წელს ახალგაზრდა უნგრელმა ექიმმა იგნაც ზემელვაისმა მუშაობა დაიწყო ვენის ცენტრალურ საავადმყოფოში, რომელსაც გვერდიგვერდ ჰქონდა ორი სამშობიარო კლინიკა. ზემელვაისი შეძრა ტრაგიკულმა საიდუმლომ: პირველ კლინიკაში, სადაც პაციენტებს ექიმები და სამედიცინო ფაკულტეტის სტუდენტები მკურნალობდნენ, მშობიარეთა თითქმის თხუთმეტი პროცენტი იღუპებოდა მძიმე ინფექციით — „მელოგინეთა ცხელებით“. გვერდით მდებარე მეორე კლინიკაში კი, სადაც ქალებს ბებიაქალები უვლიდნენ, სიკვდილიანობა ორ პროცენტზე ნაკლები იყო!"
        ],
        [
          "At the time, hospital professors blamed the fever on 'bad air' (miasma) or overcrowding. Semmelweis tested every variable between the two clinics: the rooms, the food, the beds, and the ventilation were identical. The only difference was the daily schedule of the staff: every morning, the doctors and medical students in the First Clinic performed autopsies on patients who had died the day before, whereas the midwives in the Second Clinic never performed autopsies!",
          "იმ დროს საავადმყოფოს პროფესორები ცხელებას „ცუდ ჰაერს“ (მიაზმებს) ან გადატვირთულობას აბრალებდნენ. ზემელვაისმა შეამოწმა ყველა ფაქტორი ორ კლინიკას შორის: ოთახები, საკვები, საწოლები და ვენტილაცია იდენტური იყო. ერთადერთი განსხვავება პერსონალის დღის განრიგში მდგომარეობდა: პირველ კლინიკაში ექიმები და სტუდენტები ყოველ დილით კვეთდნენ წინა დღეს გარდაცვლილ პაციენტთა ცხედრებს, ხოლო მეორე კლინიკის ბებიაქალები გაკვეთას არასდროს ატარებდნენ!"
        ],
        [
          "The final clue came in 1847 when Semmelweis's colleague, Professor Jakob Kolletschka, accidentally pricked his finger with a student's scalpel during an autopsy and died of the exact same fever symptoms! Semmelweis realized immediately that doctors were carrying invisible 'cadaverous particles' on their unwashed hands from the autopsy room directly to healthy patients.",
          "საბოლოო კვანძი გაიხსნა 1847 წელს, როდესაც ზემელვაისის კოლეგამ, პროფესორმა იაკობ კოლეჩკამ, გაკვეთის დროს შემთხვევით თითი გაიჭრა სტუდენტის სკალპელით და ზუსტად იმავე ცხელების სიმპტომებით გარდაიცვალა! ზემელვაისი მაშინვე მიხვდა, რომ ექიმებს დაუბანელი ხელებით გადაჰქონდათ უხილავი „გვამური ნაწილაკები“ საсекციო ოთახიდან პირდაპირ ჯანმრთელ პაციენტებთან."
        ],
        [
          "In May 1847, Semmelweis placed a basin of chlorinated lime solution at the entrance of the First Clinic and ordered every doctor and student to scrub their hands thoroughly before examining any patient. The result was miraculous: within two months, the death rate in the First Clinic plummeted from fifteen percent down to one percent! Sadly, many proud senior doctors felt insulted by the suggestion that their hands were dirty and rejected his rule; only decades later, when Louis Pasteur proved the Germ Theory of Disease, was Semmelweis honoured as a pioneer who saved millions of mothers and babies.",
          "1847 წლის მაისში ზემელვაისმა პირველი კლინიკის შესასვლელში დადგა ქლორიანი კირის ხსნარის თასი და ყველა ექიმსა და სტუდენტს უბრძანა, პაციენტის გასინჯვამდე ხელები საგულდაგულოდ დაებანათ. შედეგი სასწაულებრივი აღმოჩნდა: ორ თვეში პირველ კლინიკაში სიკვდილიანობა თხუთმეტი პროცენტიდან ერთ პროცენტამდე დაეცა! სამწუხაროდ, ბევრმა ამაყმა უფროსმა ექიმმა შეურაცხყოფად მიიღო მოსაზრება, თითქოს მათი ხელები ბინძური იყო, და მისი წესი უარყო; მხოლოდ ათწლეულების შემდეგ, როდესაც ლუი პასტერმა დაამტკიცა დაავადებათა მიკრობული თეორია, ზემელვაისი აღიარეს ნოვატორად, რომელმაც მილიონობით დედისა და ბავშვის სიცოცხლე იხსნა."
        ]
      ],
      glossary: [
        "common sense|საღი აზრი / ელემენტარული ჭეშმარიტება", "microscopic germs|მიკროსკოპული მიკრობები/ბაქტერიები", "autopsy|გვამის სამედიცინო გაკვეთა (აუტოფსია)",
        "hospital ward|საავადმყოფოს პალატა", "maternity clinic|სამშობიარო კლინიკა", "midwife (midwives)|ბებიაქალი (მ акушерი)",
        "miasma ('bad air')|მიაზმა („ცუდი ჰაერი“, ძველი მცდარი თეორია)", "scalpel|სკალპელი (ქირურგიული დანა)", "chlorinated lime solution|ქლორიანი კირის (სადეზინფექციო) ხსნარი", "Germ Theory of Disease|დაავადებათა მიკრობული თეორია"
      ],
      questions: [
        "Why didn't doctors wash their hands between examining dead bodies and treating live patients in the early 1840s?|Because the medical profession did not yet know that microscopic germs caused disease|Because soap had not been invented yet|Because hospitals had no running water|Because water was too expensive",
        "Where did Hungarian physician Ignaz Semmelweis begin working in 1846?|At the Vienna General Hospital|At St Mary's Hospital in London|At Oxford University|At a military hospital in Paris",
        "What tragic difference did Semmelweis observe between the hospital's First Clinic and Second Clinic?|In the First Clinic (staffed by doctors and students), nearly 15% of mothers died of fever; in the Second Clinic (staffed by midwives), the death rate was under 2%|The Second Clinic had a higher death rate than the First Clinic|Both clinics had a 50% death rate|Nobody ever got sick in the First Clinic",
        "What did hospital professors at the time mistakenly blame 'childbed fever' on?|'Bad air' (miasma) or overcrowding|Drinking cold water|Too much sunlight in the wards|Washing hands too often",
        "What was the only real difference in the daily routine between the doctors in the First Clinic and the midwives in the Second Clinic?|The doctors and medical students performed autopsies on dead bodies every morning, while the midwives never performed autopsies|The midwives worked at night and the doctors worked only one hour a week|The Second Clinic had modern antibiotics|The First Clinic had no windows",
        "What tragic event in 1847 gave Semmelweis the final clue to solve the mystery?|His colleague, Professor Jakob Kolletschka, accidentally pricked his finger with a scalpel during an autopsy and died of the exact same fever|A fire destroyed the autopsy room|He looked through an electron microscope|A midwife told him about bacteria",
        "What did Semmelweis conclude was causing the deadly fever in the First Clinic?|Doctors were carrying invisible 'cadaverous particles' on their unwashed hands from the autopsy room to healthy patients|The hospital food was poisoned|The blankets were too thin in winter|The river water was salty",
        "What strict rule did Semmelweis introduce at the entrance of the First Clinic in May 1847?|Every doctor and student had to scrub their hands thoroughly in a basin of chlorinated lime solution before examining any patient|All windows had to be kept closed all day|Patients had to wear masks|Autopsies were moved to the roof",
        "What happened to the death rate in the First Clinic within two months of introducing chlorinated handwashing?|It plummeted from fifteen percent down to one percent|It stayed exactly the same at fifteen percent|It rose to thirty percent|It dropped only in winter",
        "Why did many senior doctors in the 1840s reject Semmelweis's life-saving discovery, and who later proved him right?|Senior doctors felt insulted by the idea that their hands were dirty; decades later, Louis Pasteur proved the Germ Theory of Disease|Because chlorinated water turned their hands blue; Isaac Newton proved him right|Because the soap cost a thousand euros a bottle|Because they preferred using gloves"
      ]
    },
    {
      num: 57, level: "B2",
      icon: "🌵", genre: "ბოტანიკა",
      title: "ბოტანიკური რადიოგადაცემა: როგორ უძლებენ უდაბნოს მცენარეები გვალვას",
      subtitle: "Botany Broadcast: How Desert Plants Survive Years Without Rain",
      time: "8 წთ",
      paragraphs: [
        [
          "To most garden plants, a hot summer week without rain is an emergency; their green leaves wilt, dry up, and die because they lose water faster through evaporation than their roots can absorb from the soil. Yet in the driest deserts on Earth — such as the Sonoran Desert in North America, the Namib in Africa, and the Atacama in Chile — remarkable plants flourish under scorching fifty-degree heat where rain may not fall for years!",
          "ბაღის მცენარეთა უმეტესობისთვის ზაფხულის ერთი უწვიმო კვირაც კი საგანგებო მდგომარეობაა; მათი მწვანე ფოთლები ჭკნება, ხმება და კვდება, რადგან აორთქლებისას იმაზე სწრაფად კარგავენ წყალს, ვიდრე ფესვებს ნიადაგიდან შეწოვა შეუძლია. თუმცა, დედამიწის ყველაზე მშრალ უდაბნოებში — როგორებიცაა სონორას უდაბნო ჩრდილოეთ ამერიკაში, ნამიბი აფრიკაში და ატაკამა ჩილეში — გასაოცარი მცენარეები ხარობენ ორმოცდაათგრადუსიან პაპანაქება სიცხეში, სადაც წვიმა შეიძლება წლების განმავლობაში არ მოვიდეს!"
        ],
        [
          "On today's episode of 'The Green World', botanist Dr Elena Vance explains that desert plants use three main survival strategies: they are either 'succulents' that store water, 'deep-rooters' that hunt for underground water, or 'drought-evaders' that hide as seeds! The most famous succulents are cacti, such as the giant Saguaro cactus, which can grow twelve metres tall and live for two hundred years.",
          "დღევანდელ გადაცემაში „მწვანე სამყარო“ ბოტანიკოსი დოქტორი ელენა ვანსი განმარტავს, რომ უდაბნოს მცენარეები გადარჩენის სამ მთავარ სტრატეგიას იყენებენ: ისინი არიან ან „სუკულენტები“, რომლებიც წყალს იმარაგებენ, ან „ღრმაფესვიანები“, რომლებიც მიწისქვეშა წყალს ეძებენ, ან „გვალვისგან გამქცევნი“, რომლებიც თესლის სახით იმალებიან! ყველაზე ცნობილი სუკულენტებია კაქტუსები, მაგალითად გიგანტური კაქტუსი „საგუარო“, რომელიც თორმეტი მეტრის სიმაღლის იზრდება და ორას წელს ცოცხლობს."
        ],
        [
          "How does a Saguaro cactus survive without rain? First, it has replaced flat green leaves — which lose too much moisture in the sun — with sharp spines! The spines protect the cactus from thirsty desert animals, cast tiny shadows across the stem to keep it cool, and collect morning dew that drips right down to the roots. Second, its thick, waxy green trunk is pleated like an accordion: when a brief desert rainstorm finally arrives, its shallow roots soak up hundreds of litres of water in hours, and the trunk expands like a sponge to store enough water for two whole years!",
          "როგორ ძლებს კაქტუსი საგუარო უწვიმოდ? პირველი: მან ბრტყელი მწვანე ფოთლები — რომლებიც მზეზე ზედმეტად ბევრ ტენს კარგავს — ჩაანაცვლა ბასრი ეკლებით! ეკლები იცავს კაქტუსს უდაბნოს მწყურვალი ცხოველებისგან, ღეროზე პაწაწინა ჩრდილებს აყენებს გასაგრილებლად და აგროვებს დილის ნამს, რომელიც პირდაპირ ფესვებთან ჩაედინება. მეორე: მისი სქელი, ცვილისებრი მწვანე ტანი აკორდეონივით დანაოჭებულია: როდესაც უდაბნოში ხანმოკლე თავსხმა წვიმა მოდის, მისი ზედაპირული ფესვები რამდენიმე საათში იწოვს ასობით ლიტრ წყალს, ტანი კი ღრუბელივით ფართოვდება და ორი სრული წლის სამყოფ წყალს იغلოვებს!"
        ],
        [
          "Even more cleverly, cacti और desert succulents like aloe and agave breathe differently from ordinary plants. Normal plants open microscopic pores called 'stomata' during the sunny day to take in carbon dioxide for photosynthesis, losing water vapour in the heat. Desert succulents keep their pores tightly sealed all day long under the burning sun, and only open them at night when the desert air is cool and humid, storing the carbon dioxide until morning!",
          "კიდევ უფრო ჭკვიანურია ის, რომ კაქტუსები და უდაბნოს სხვა სუკულენტები — ალოე და აგავა — ჩვეულებრივი მცენარეებისგან განსხვავებულად სუნთქავენ. ჩვეულებრივი მცენარეები მიკროსკოპულ ფორებს — „ბაგეებს“ (stomata) — მზიან დღისით აღებენ ფოტოსინთეზისთვის ნახშირორჟანგის მისაღებად, რა დროსაც სიცხეში წყლის ორთქლს კარგავენ. უდაბნოს სუკულენტებს კი მწველი მზის ქვეშ მთელი დღის განმავლობაში ფორები მჭიდროდ აქვთ დახურული და მათ მხოლოდ ღამით აღებენ, როცა უდაბნოს ჰაერი გრილი და ნესტიანია, ხოლო ნახშირორჟანგს დილამდე ინახავენ!"
        ],
        [
          "Meanwhile, desert trees like the Mesquite and the Shepherd's Tree use the opposite strategy: instead of shallow roots, they grow taproots that drill fifty to sixty metres straight down through solid rock to reach deep underground water tables! And the 'drought-evaders' — desert wildflowers — spend ten dry years sleeping in the sand as tough seeds; when a rare heavy rain washes away the natural chemical coating on the seed shell, millions of seeds sprout, bloom into a purple-and-gold carpet of flowers, and produce new seeds all within two weeks!",
          "ამავდროულად, უდაბნოს ხეები, როგორებიცაა მესკიტი და „მწყემსის ხე“, საპირისპირო სტრატეგიას მიმართავენ: ზედაპირული ფესვების ნაცვლად, ისინი ივითარებენ მთავარ ფესვს, რომელიც კლდოვან ქანებში პირდაპირ ქვემოთ, ორმოცდაათიდან სამოც მეტრამდე სიღრმეზე ჩადის მიწისქვეშა წყლებამდე! ხოლო „გვალვისგან გამქცევნი“ — უდაბნოს მინდვრის ყვავილები — ათ მშრალ წელიწადს ქვიშაში მძინარე მყარი თესლის სახით ატარებენ; როდესაც იშვიათი ძლიერი წვიმა თესლის გარსიდან ბუნებრივ დამცავ ფენას ჩამორეცხავს, მილიონობით თესლი ღვივდება, იისფერ-ოქროსფერ ყვავილოვან ხალიჩად ყვავის და სულ რაღაც ორ კვირაში ახალ თესლს იძლევა!"
        ]
      ],
      glossary: [
        "wilt (verb)|დაჭკნობა (მცენარის)", "succulent|სუკულენტი (წყლის დამგროვებელი ხორციანი მცენარე)", "drought-evader|გვალვისგან გამქცევი (თესლის სახით მომლოდინე მცენარე)",
        "cactus spines|კაქტუსის ეკლები", "pleated like an accordion|აკორდეონივით (გარმონივით) დანაოჭებული", "stomata (microscopic pores)|ბაგეები (ფოთლის მიკროსკოპული სასუნთქი ფორები)",
        "water vapour|წყლის ორთქლი", "taproot|მთავარი (ღერძული) ღრმა ფესვი", "water table|მიწისქვეშა წყლების ჰორიზონტი/დონე", "chemical coating|ქიმიური დამცავი გარსი"
      ],
      questions: [
        "Why do ordinary garden plants wilt and die quickly in a hot desert?|Because their flat green leaves lose water through evaporation faster than their roots can absorb it from dry soil|Because desert soil has too much salt water|Because desert winds blow them away|Because there is no carbon dioxide in the desert",
        "What are the three main survival strategies used by desert plants?|Succulents that store water, deep-rooters that reach underground water, and drought-evaders that wait as seeds|Climbing tall mountains, floating on rivers, or eating insects|Growing only in winter snow|Turning their leaves into stone",
        "How tall can a giant Saguaro cactus grow, and how long can it live?|Up to twelve metres tall, living for two hundred years|Only one metre tall, living for five years|Fifty metres tall, living for ten years|Thirty centimetres tall",
        "What three functions do the sharp spines of a cactus serve instead of flat leaves?|They protect it from thirsty animals, cast tiny cooling shadows on the stem, and collect morning dew that drips to the roots|They catch small birds for food|They absorb nitrogen from the wind|They help the cactus roll across the sand",
        "Why is the green trunk of a Saguaro cactus pleated like an accordion?|So that it can expand like a sponge after a rainstorm to store hundreds of litres of water (enough for two years)|To make it harder for insects to climb|To reflect moonlight at night|Because the wind bends the trunk",
        "How do desert succulents like cacti, aloe, and agave breathe differently from ordinary plants?|They keep their microscopic pores (stomata) sealed all day under the hot sun and only open them in the cool night air to take in carbon dioxide|They never take in carbon dioxide at all|They only open their pores at noon when the sun is brightest|They breathe through their underground roots",
        "Why do normal plants lose so much water vapour during photosynthesis?|Because they open their microscopic pores (stomata) during the sunny, hot day to take in carbon dioxide|Because their roots push water out into the air|Because rain washes their leaves|Because bees drink water from the leaves",
        "How deep can desert trees like the Mesquite and Shepherd's Tree drill their taproots to find underground water?|Fifty to sixty metres straight down|Only fifty centimetres deep|Two metres deep|Five hundred metres deep",
        "How do 'drought-evader' desert wildflowers survive ten dry years without rain?|By sleeping in the sand as tough, dormant seeds until a heavy rain arrives|By storing ten litres of water in their petals|By hiding inside caves|By moving to the ocean coast",
        "What triggers millions of desert wildflower seeds to sprout all at once after ten dry years?|A rare heavy rain washes away the natural chemical coating on the seed shell, allowing them to sprout, bloom, and make new seeds within two weeks|A cold winter snowstorm freezes the sand|Desert animals dig up the seeds|Strong wind blows the sand away"
      ]
    },
    {
      num: 58, level: "B2",
      icon: "👥", genre: "სოციოლოგია",
      title: "სოციოლოგიური საუბარი: დანბარის რიცხვი და სოციალური კავშირების ზღვარი",
      subtitle: "Sociology Talk: Dunbar's Number and the Limits of Friendship",
      time: "8 წთ",
      paragraphs: [
        [
          "On modern social media platforms, it is easy to accumulate one thousand, two thousand, or even five thousand digital 'friends' and followers. Yet if you look through that long list of names on your screen, how many of those people do you actually know well enough to invite to a birthday dinner, or sit down with uninvited if you saw them at an airport café? In the 1990s, British anthropologist Robin Dunbar at Oxford University discovered that the human brain has a natural biological limit to the number of stable social relationships it can maintain: around one hundred and fifty people!",
          "თანამედროვე სოციალურ ქსელებში ადვილია ათასი, ორი ათასი ან თუნდაც ხუთი ათასი ციფრული „მეგობრისა“ და გამომწერის დაგროვება. თუმცა, ეკრანზე ამ გრძელ სიას თუ გადახედავთ, რეალურად რამდენ მათგანს იცნობთ იმდენად ახლოს, რომ დაბადების დღის ვახშამზე დაპატიჟოთ, ან აეროპორტის კაფეში დანახვისას მოურიდებლად მიუჯდეთ მაგიდასთან? 1990-იან წლებში ოქსფორდის უნივერსიტეტის ბრიტანელმა ანთროპოლოგმა რობინ დანბარმა აღმოაჩინა, რომ ადამიანის ტვინს აქვს სტაბილური სოციალური ურთიერთობების შენარჩუნების ბუნებრივი ბიოლოგიური ზღვარი: დაახლოებით ას ორმოცდაათი ადამიანი!"
        ],
        [
          "How did Dunbar arrive at the number 150? He began by studying primates — monkeys and apes — and comparing the size of their 'neocortex' (the outer thinking layer of the brain) with the size of the social groups they lived in. He found a direct mathematical correlation: the larger a primate species' neocortex, the larger the group it could live in harmoniously without constant fighting, because keeping track of who is friends with whom requires immense computing power!",
          "როგორ მივიდა დანბარი რიცხვ 150-მდე? მან კვლევა დაიწყო პრიმატების — მაიმუნების — შესწავლით და ერთმანეთს შეადარა მათი „ნეოკორტექსის“ (ტვინის გარე მოაზროვნე ქერქის) ზომა და იმ სოციალური ჯგუფების სიდიდე, რომლებშიც ისინი ცხოვრობდნენ. მან აღმოაჩინა პირდაპირი მათემატიკური კავშირი: რაც უფრო დიდია სახეობის ნეოკორტექსი, მით უფრო დიდ ჯგუფში შეუძლია მას ჰარმონიულად ცხოვრება მუდმივი ჩხუბის გარეშე, რადგან იმის დამახსოვრება, თუ ვინ ვისთან მეგობრობს, უზარმაზარ გამოთვლით რესურსს მოითხოვს!"
        ],
        [
          "When Dunbar plugged the size of the human neocortex into this equation, the formula predicted a natural human group size of roughly 150 individuals! To test whether this number held true in the real world, Dunbar examined historical and anthropological records across millennia. The results were uncanny: prehistoric hunter-gatherer clans averaged 148 people; Neolithic farming villages in Mesopotamia had around 150 residents; a basic Roman army company (a maniple) had 120 to 160 soldiers; and even the average number of Christmas cards British households sent out in the 1990s was 154!",
          "როდესაც დანბარმა ამ განტოლებაში ადამიანის ნეოკორტექსის ზომა ჩასვა, ფორმულამ ადამიანური ჯგუფის ბუნებრივ ზომად დაახლოებით 150 ინდივიდი იწინასწარმეტყველა! იმის შესამოწმებლად, მუშაობდა თუ არა ეს რიცხვი რეალურ სამყაროში, დანბარმა შეისწავლა ათასწლეულების ისტორიული და ანთროპოლოგიური ჩანაწერები. შედეგი поразительный (გასაოცარი) აღმოჩნდა: პრეისტორიულ მონადირე-შემგროვებელთა თემები საშუალოდ 148 კაცისგან შედგებოდა; მესოპოტამიის ნეოლითურ სოფლებში დაახლოებით 150 მცხოვრები იყო; რომაული არმიის საბაზისო ქვედანაყოფი (მანიპულა) 120-დან 160-მდე ჯარისკაცს ითვლიდა; და 1990-იან წლებში ბრიტანული ოჯახების მიერ გაგზავნილი საშობაო ბარათების საშუალო რაოდენობაც კი 154 იყო!"
        ],
        [
          "Dunbar explains that our 150 social relationships are arranged like ripples in a pond in concentric circles of intimacy. In the innermost circle are just five people — your closest family members and best friends whom you can call in a crisis at three in the morning. The next circle holds fifteen good friends with whom you share regular dinners and deep sympathy; the next holds fifty friends you invite to a big party; and the outer ring of 150 encompasses your whole meaningful social network.",
          "დანბარი განმარტავს, რომ ჩვენი 150 სოციალური ურთიერთობა წყალზე გაჩენილი რგოლებივით სიახლოვის კონცენტრულ წრეებადაა განლაგებული. ყველაზე შიდა წრეში მხოლოდ ხუთი ადამიანია — უახლოესი ოჯახის წევრები და საუკეთესო მეგობრები, რომლებსაც განსაცდელის დროს ღამის სამ საათზეც კი დაურეკავთ. მომდევნო წრე მოიცავს თხუთმეტ კარგ მეგობარს, რომლებთანაც რეგულარულად ვახშმობთ; შემდეგი — ორმოცდაათ მეგობარს, რომლებსაც დიდ წვეულებაზე ეპატიჟებით; ხოლო 150-კაციანი გარე რგოლი მოიცავს თქვენს მთლიან შინაარსიან სოციალურ ქსელს."
        ],
        [
          "Why hasn't social media expanded Dunbar's Number to five thousand? Because maintaining real trust requires two things that cannot be automated: time and face-to-face attention! Studies show thatforty percent of our total social time is invested in our innermost circle of five people, and another twenty percent in the next ten. Even in the digital age, many progressive companies — such as W. L. Gore & Associates, the makers of Gore-Tex fabric — never build a factory for more than 150 employees; as soon as a building reaches 150 workers, they build a new one next door so everyone still knows everyone else by name!",
          "რატომ ვერ გაზარდა სოციალურმა ქსელებმა დანბარის რიცხვი ხუთი ათასამდე? იმიტომ, რომ ნამდვილი ნდობის შენარჩუნება მოითხოვს ორ რამეს, რისი ავტომატიზებაც შეუძლებელია: დროსა და პირისპირ ყურადღებას! კვლევები აჩვენებს, რომ ჩვენი სოციალური დროის ორმოცი პროცენტი იხარჯება უახლოეს ხუთ ადამიანზე, ხოლო კიდევ ოცი პროცენტი — მომდევნო ათზე. ციფრულ ეპოქაშიც კი ბევრი პროგრესული კომპანია — მაგალითად, Gore-Tex-ის მწარმოებელი W. L. Gore & Associates — არასდროს აშენებს ქარხანას 150-ზე მეტი თანამშრომლისთვის; როგორც კი შენობაში მომუშავეთა რიცხვი 150-ს მიაღწევს, გვერდით ახალ შენობას დგამენ, რათა ყველა თანამშრომელი კვლავ სახელით იცნობდეს ერთმანეთს!"
        ]
      ],
      glossary: [
        "Dunbar's Number|დანბარის რიცხვი (დაახლ. 150 სტაბილური სოციალური კავშირი)", "neocortex|ნეოკორტექსი (თავის ტვინის ახალი ქერქი)", "mathematical correlation|მათემატიკური კორელაცია / ურთიერთკავშირი",
        "computing power|გამოთვლითი სიმძლავრე (ტვინის)", "hunter-gatherer clan|მონადირე-შემგროვებელთა გვარი/თემი", "Neolithic village|ნეოლითური (ახალი ქვის ხანის) სოფელი",
        "ripples in a pond|წყლის ზედაპირზე გაჩენილი წრიული ტალღები", "concentric circles|კონცენტრული (საერთო ცენტრის მქონე) წრეები", "innermost circle|ყველაზე შიდა (უახლოესი) წრე", "face-to-face attention|პირისპირ (ცოცხალი) ყურადღება"
      ],
      questions: [
        "What is 'Dunbar's Number', discovered by anthropologist Robin Dunbar in the 1990s?|The natural cognitive limit to the number of stable social relationships a human can maintain: around 150 people|The maximum number of words a person can learn in a week|The number of hours a person sleeps in a month|The population of a modern city",
        "How did Robin Dunbar originally calculate the number 150?|By comparing the size of primates' neocortex (the outer thinking layer of the brain) with the size of the social groups they live in|By counting passengers on London buses|By reading phone books in Oxford|By testing university students' eyesight",
        "Why does living in a larger social group require a larger neocortex?|Because keeping track of complex social relationships — who is friends with whom and who can be trusted — requires immense mental computing power|Because larger groups walk further every day|Because larger groups eat more fruit|Because the neocortex controls running speed",
        "What historical examples confirmed that natural human communities cluster around 150 people?|Prehistoric hunter-gatherer clans (148), Neolithic farming villages (150), and basic Roman army companies (120–160)|Ancient empires of fifty million people|Medieval cities of one hundred thousand|Crews of two-person canoes",
        "How are a person's 150 social relationships organized according to Dunbar?|In concentric circles of intimacy, like ripples in a pond: 5, 15, 50, and 150|In a single flat line where everyone is equally close|Alphabetically by surname|By the distance people live from the city centre",
        "How many people are in the 'innermost circle' of a person's social network?|Just five people — your closest family members and best friends whom you can call in a crisis|Fifty people|One hundred and fifty people|Only one person",
        "How many people are in the second circle (good friends for regular dinners) and third circle (party friends)?|Fifteen good friends in the second circle, and fifty friends in the third circle|Two in the second, and ten in the third|One hundred in the second, and five hundred in the third|Thirty in both circles",
        "What percentage of our total social time and effort is invested in our innermost five people and the next ten?|Forty percent in the innermost five, and another twenty percent in the next ten (60% of our time goes to just 15 people)|Only one percent of our time|Equally divided at less than one percent per person|Ninety percent goes to strangers online",
        "Why hasn't social media increased Dunbar's Number from 150 to 5,000?|Because maintaining genuine trust and friendship requires real time and face-to-face attention, which are finite|Because smartphones cannot store more than 150 names|Because the internet is too slow|Because people delete their accounts every year",
        "How does the company W. L. Gore & Associates apply Dunbar's Number to its workplace architecture?|They never put more than 150 employees in one building; when a factory reaches 150 workers, they build a new one next door so everyone knows each other by name|They hire only 150 people worldwide|They fire everyone after 150 days|They make offices with 150 floors"
      ]
    },
    {
      num: 59, level: "B2",
      icon: "💎", genre: "გეოლოგია",
      title: "გეოლოგიური აუდიო-ტური: ნაიკას გიგანტური კრისტალების მღვიმე",
      subtitle: "Geology Audio Tour: Inside the Giant Crystal Cave of Naica",
      time: "8 წთ",
      paragraphs: [
        [
          "When we think of natural crystals, we usually picture a small purple amethyst or a clear quartz prism that fits comfortably in the palm of your hand. Yet three hundred metres beneath the Chihuahuan Desert in northern Mexico lies a geological wonder that looks like a scene from another planet: the Cave of the Crystals at Naica, where translucent white beams of selenite gypsum grow up to eleven metres long — taller than telephone poles — and weigh fifty-five tonnes each!",
          "როდესაც ბუნებრივ კრისტალებზე ვფიქრობთ, ჩვეულებრივ წარმოვიდგენთ პატარა იისფერ ამეთვისტოს ან მთის ბროლის პრიზმას, რომელიც ხელისგულზე თავისუფლად ეტევა. თუმცა, ჩრდილოეთ მექსიკაში, ჩიუაუას უდაბნოს ქვეშ სამასი მეტრის სიღრმეზე, მდებარეობს გეოლოგიური საოცრება, რომელიც სხვა პლანეტის პეიზაჟს ჰგავს: ნაიკას კრისტალების მღვიმე, სადაც სელენიტის (თაბაშირის) ნახევრად გამჭვირვალე თეთრი სვეტები თერთმეტი მეტრის სიგრძეს აღწევს — სატელეფონო ბოძებზე მაღალია — და თითოეული ორმოცდათხუთმეტ ტონას იწონის!"
        ],
        [
          "The cave remained completely hidden from human eyes until April 2000, when two brothers, Eloy and Javier Delgado, were drilling a new ventilation tunnel for a lead and silver mine at a depth of three hundred metres. When they broke through a limestone wall and shone their helmet lamps inside, they found a horseshoe-shaped cavern thirty metres wide, criss-crossed from floor to ceiling by colossal, glittering crystal pillars!",
          "მღვიმე ადამიანის თვალისგან სრულიად დაფარული რჩებოდა 2000 წლის აპრილამდე, როდესაც ორი ძმა, ელოი და ხავიერ დელგადოები, სამასი მეტრის სიღრმეზე ტყვიისა და ვერცხლის მაღაროსთვის ახალ სავენტილაციო გვირაბს ბურღავდნენ. როდესაც კირქვის კედელი გაარღვიეს და ჩაფხუტის ფანრები შიგნით მიანათეს, მათ აღმოაჩინეს ოცდაათი მეტრის სიგანის ნალისებური დარბაზი, რომელიც იატაკიდან ჭერამდე გადაჭიმული იყო კოლოსალური, მოელვარე კრისტალის სვეტებით!"
        ],
        [
          "How did these giant crystals grow so large? Geologists explain that about twenty-six million years ago, a chamber of rising volcanic magma pushed up beneath the Naica mountain. For hundreds of thousands of years, the cave was completely filled with mineral-rich groundwater heated by the magma below. Around five hundred thousand years ago, the water temperature stabilized at a very precise point: fifty-eight degrees Celsius! At this exact temperature, a mineral called anhydrite dissolved slowly into the water and crystallized into gypsum at a microscopic rate — adding the thickness of a single human hair every hundred years!",
          "როგორ გაიზარდა ეს გიგანტური კრისტალები ასეთ ზომამდე? გეოლოგები განმარტავენ, რომ დაახლოებით ოცდაექვსი მილიონი წლის წინ ნაიკას მთის ქვეშ ვულკანური მაგმის კამერა ამოიწია. ასობით ათასი წლის განმავლობაში მღვიმე სრულად იყო სავსე მინერალებით მდიდარი მიწისქვეშა წყლით, რომელსაც ქვემოდან მაგმა აცხელებდა. დაახლოებით ხუთასი ათასი წლის წინ წყლის ტემპერატურა დასტაბილურდა უაღრესად ზუსტ ნიშნულზე: ორმოცდათვრამეტ გრადუს ცელსიუსზე! ზუსტად ამ ტემპერატურაზე მინერალი ანჰიდრიტი წყალში ნელა იხსნებოდა და მიკროსკოპული სიჩქარით თაბაშირის კრისტალებად ყალიბდებოდა — ყოველ ას წელიწადში მას მხოლოდ ადამიანის თმის ღერის სისქე ემატებოდა!"
        ],
        [
          "The only reason humans could walk inside the cave in 2000 was that the mining company was pumping ninety thousand litres of hot groundwater out of the mountain every minute to keep the silver mines dry. However, once the water was pumped out, the Cave of the Crystals became one of the deadliest environments on Earth for human beings! Because of the magma chamber below, the air temperature inside the cave was fifty degrees Celsius, with ninety-nine percent humidity — like a steam sauna!",
          "ერთადერთი მიზეზი, რის გამოც 2000 წელს ადამიანებმა მღვიმეში შესვლა შეძლეს, იყო ის, რომ სამთო-მომპოვებელი კომპანია ვერცხლის მაღაროების სიმშრალის შესანარჩუნებლად მთიდან ყოველ წუთს ოთხმოცდაათი ათას ლიტრ ცხელ მიწისქვეშა წყალს ტუმბავდა. თუმცა, წყლის ამოტუმბვის შემდეგ კრისტალების მღვიმე ადამიანისთვის დედამიწაზე ერთ-ერთ ყველაზე მომაკვდინებელ გარემოდ იქცა! ქვემოთ არსებული მაგმის კამერის გამო მღვიმეში ჰაერის ტემპერატურა ორმოცდაათი გრადუსი ცელსიუსი იყო, ხოლო ტენიანობა — ოთხმოცდაცხრამეტი პროცენტი, როგორც ორთქლის საუნაში!"
        ],
        [
          "Because the cave air was hotter than the human body (37°C) and saturated with moisture, human sweat could not evaporate to cool the skin; worse still, with every breath a person took, hot water vapour condensed inside their cooler lungs! Without protection, a human could survive inside for only ten minutes. Scientists had to wear orange 'ice-suits' packed with frozen gel tubes and breathe chilled air from backpacks just to study the cave for forty minutes. In 2015, when mining operations ended and the pumps were turned off, the cave naturally flooded with hot mineral water once again — protecting the giant crystals and allowing them to continue growing in peace for future millennia.",
          "რადგან მღვიმის ჰაერი ადამიანის სხეულზე (37°C-ზე) უფრო ცხელი და ტენით გაჯერებული იყო, ოფლი კანს ვერ აგრილებდა; უარესიც — ყოველი ჩასუნთქვისას ცხელი წყლის ორთქლი უფრო გრილ ფილტვებში წყლად კონდენსირდებოდა! დამცავი აღჭურვილობის გარეშე ადამიანი შიგნით მხოლოდ ათ წუთს გაძლებდა. მეცნიერებს ეცვათ გაყინული გელის მილებით სავსე ნარინჯისფერი „ყინულის სკაფანდრები“ და სუნთქავდნენ ზურგჩანთიდან მოწოდებულ გაგრილებულ ჰაერს, რათა მღვიმე ორმოცი წუთის განმავლობაში მაინც შეესწავლათ. 2015 წელს, როდესაც მაღარომ მუშაობა დაასრულა და ტუმბოები გაითიშა, მღვიმე ბუნებრივად კვლავ ცხელი მინერალური წყლით აივსო — რაც გიგანტურ კრისტალებს იცავს და მომავალი ათასწლეულების განმავლობაში მშვიდად ზრდის საშუალებას აძლევს."
        ]
      ],
      glossary: [
        "translucent|ნახევრად გამჭვირვალე (შუქგამტარი)", "selenite gypsum|სელენიტი (კრისტალური თაბაშირი)", "limestone cavern|კირქვის მღვიმე / გამოქვაბული",
        "magma chamber|ვულკანური მაგმის კამერა", "groundwater|მიწისქვეშა წყალი (გრუნტის წყალი)", "crystallize|დაკრისტალება / კრისტალად ჩამოყალიბება",
        "humidity|ჰაერის ტენიანობა", "saturated with moisture|ტენით (წყლის ორთქლით) გაჯერებული", "condense in the lungs|ფილტვებში კონდენსირება (ორთქლის წყლად ქცევა)", "ice-suit|გამაგრილებელი „ყინულის სკაფანდრი“"
      ],
      questions: [
        "Where is the Cave of the Crystals located, and how deep underground does it lie?|Three hundred metres beneath the Chihuahuan Desert at Naica in northern Mexico|Fifty metres under the Alps in Switzerland|One thousand metres under the Sahara Desert|On an island in Iceland",
        "How large and heavy are the largest selenite gypsum crystals inside the cave?|Up to eleven metres long (taller than telephone poles) and weighing fifty-five tonnes each|About one metre long and weighing ten kilograms|Thirty centimetres long|One hundred metres long",
        "When and how was the Cave of the Crystals discovered?|In April 2000, by two brothers (Eloy and Javier Delgado) drilling a ventilation tunnel for a lead and silver mine|In 1850, by Spanish gold explorers|In 1974, by farmers digging a water well|In 2015, by satellite radar",
        "What heated the mineral-rich groundwater inside the cave for hundreds of thousands of years?|A chamber of rising volcanic magma deep beneath the Naica mountain|Direct sunlight shining through a hole in the roof|Underground coal fires|Hot ocean currents",
        "At what exact water temperature did the mineral anhydrite slowly dissolve and crystallize into giant gypsum beams?|At fifty-eight degrees Celsius|At zero degrees Celsius|At one hundred degrees Celsius|At twenty degrees Celsius",
        "How fast did the giant crystals grow over half a million years?|At a microscopic rate — adding the thickness of a single human hair every hundred years|One metre every summer|Ten centimetres a week|They formed in a single night during an earthquake",
        "Why was the cave dry enough for humans to walk inside in the year 2000?|Because the mining company was pumping 90,000 litres of groundwater out of the mountain every minute to keep the mines dry|Because a desert drought dried up the underground river|Because the magma boiled all the water away|Because engineers built a dam",
        "Why could an unprotected human survive for only ten minutes inside the drained cave?|The air was 50°C with 99% humidity; sweat could not evaporate, and hot water vapour condensed inside the person's cooler lungs|Because there was zero oxygen in the cave|Because the crystals emitted poisonous gas|Because the cave was freezing cold",
        "What special equipment did scientists have to wear to study the cave for forty minutes at a time?|Orange 'ice-suits' packed with frozen gel tubes and backpacks supplying chilled air to breathe|Heavy lead aprons and diving flippers|Thick woollen coats|Standard firefighter uniforms",
        "What happened to the Cave of the Crystals in 2015 when mining ended and the pumps were turned off?|It naturally flooded with hot mineral-rich groundwater again, protecting the crystals and allowing them to keep growing|It was turned into an underground shopping mall|All the crystals were cut down and moved to museums|The roof collapsed completely"
      ]
    },
    {
      num: 60, level: "B2",
      icon: "🛸", genre: "კოსმოსური მისიები",
      title: "კოსმოსური რადიო: „ვოიაჯერის“ ოქროს ფირფიტის ისტორია",
      subtitle: "Space Exploration Radio: The Voyager Golden Record — A Message in a Bottle",
      time: "8 წთ",
      paragraphs: [
        [
          "In August and September 1977, NASA launched two unmanned robotic space probes — Voyager 1 and Voyager 2 — from Cape Canaveral to take advantage of a rare geometric alignment of the outer planets that occurs only once every 176 years. After sending back the first close-up photographs of Jupiter, Saturn, Uranus, and Neptune, both spacecraft continued flying outward at sixty thousand kilometres per hour, becoming the first human-made objects to leave our solar system and enter interstellar space!",
          "1977 წლის აგვისტოსა და სექტემბერში ნასამ კანავერალის კონცხიდან გაუშვა ორი უპილოტო კოსმოსური ზონდი — „ვოიაჯერ 1“ და „ვოიაჯერ 2“ — რათა გამოეყენებინა გარე პლანეტების იშვიათი გეომეტრიული განლაგება, რომელიც 176 წელიწადში მხოლოდ ერთხელ ხდება. იუპიტერის, სატურნის, ურანისა და ნეპტუნის პირველი ახლო ფოტოების გამოგზავნის შემდეგ, ორივე ხომალდმა განაგრძო სვლა საათში სამოცი ათასი კილომეტრის სიჩქარით და გახდა ადამიანის ხელით შექმნილი პირველი ობიექტი, რომელმაც მზის სისტემა დატოვა და ვარსკვლავთშორის სივრცეში გავიდა!"
        ],
        [
          "Because the Voyagers would drift through the Milky Way galaxy for billions of years, NASA asked astronomer Carl Sagan and a small committee to design a 'time capsule' to attach to the outside of each spacecraft — a cosmic message in a bottle in case an advanced extraterrestrial civilization ever found the probes in the distant future. The result was the 'Voyager Golden Record', a twelve-inch phonograph disc made of gold-plated copper.",
          "რადგან „ვოიაჯერებს“ ირმის ნახტომის გალაქტიკაში მილიარდობით წლის განმავლობაში უნდა ეფრინათ, ნასამ ასტრონომ კარლ საგანსა და მცირე კომიტეტს სთხოვა შეექმნათ „დროის კაფსულა“, რომელიც თითოეული ხომალდის გარე კორპუსზე დამაგრდებოდა — როგორც ბოთლში ჩადებული კოსმოსური წერილი იმ შემთხვევისთვის, თუ შორეულ მომავალში ზონდებს რომელიმე განვითარებული არამიწიერი ცივილიზაცია იპოვიდა. შედეგად შეიქმნა „ვოიაჯერის ოქროს ფირფიტა“ — ოქროთი დაფარული სპილენძის თორმეტდუიმიანი გრამფირფიტა."
        ],
        [
          "Why did scientists choose an analog grooved record with a needle cartridge instead of a magnetic tape? Because cosmic radiation in deep space quickly erases magnetic tapes, whereas microscopic grooves etched into gold-plated metal can survive intact in the vacuum of space for more than one billion years! On the protective aluminium cover, scientists engraved universal diagrams showing how to play the record and where our Sun is located relative to fourteen pulsing stars (pulsars).",
          "რატომ აირჩიეს მეცნიერებმა ნემსიანი ანალოგური გრამფირფიტა მაგნიტური ფირის ნაცვლად? იმიტომ, რომ ღრმა კოსმოსის რადიაცია მაგნიტურ ფირს სწრაფად შლის, ხოლო მოოქროვილ ლითონზე ამოჭრილი მიკროსკოპული ღარები კოსმოსურ ვაკუუმში დაუზიანებლად ძლებს ერთ მილიარდ წელზე მეტხანს! დამცავ ალუმინის ხუფზე მეცნიერებმა ამოტვიფრეს უნივერსალური დიაგრამები, რომლებიც აჩვენებს ფირფიტის დაკვრის წესს და ჩვენი მზის მდებარეობას თოთხმეტი პულსირებადი ვარსკვლავის (პულსარის) მიმართ."
        ],
        [
          "What did Sagan's team put on the Golden Record to represent the entire planet Earth? First, they encoded 115 photographs into the audio grooves — showing mathematical definitions, the DNA double helix, human anatomy, snow-covered mountains, dolphins leaping, a mother nursing her baby, and rush-hour traffic. Next, they recorded spoken greetings in fifty-five ancient and modern languages, followed by a twelve-minute audio montage of 'The Sounds of Earth': rain, wind, thunder, whale songs, birdsong, footsteps, a heartbeat, and laughter!",
          "რა ჩაწერა საგანის გუნდმა ოქროს ფირფიტაზე მთელი პლანეტა დედამიწის წარმოსაჩენად? პირველ რიგში, აუდიოღარებში ჩააკודირეს 115 ფოტოსურათი — მათემატიკური განმარტებები, დნმ-ის ორმაგი სპირალი, ადამიანის ანატომია, დათოვლილი მთები, მოხტუნავე დელფინები, დედა ჩვილით და ქალაქის საგზაო მოძრაობა. შემდეგ ჩაწერეს მისალმებები ორმოცდათხუთმეტ უძველეს და თანამედროვე ენაზე, რასაც მოსდევს თორმეტწუთიანი ხმოვანი კოლაჟი „დედამიწის ხმები“: წვიმა, ქარი, ჭექა-ქუხილი, ვეშაპების სიმღერა, ჩიტების გალობა, ნაბიჯების ხმა, გულისცემა და სიცილი!"
        ],
        [
          "The largest section of the record is ninety minutes of music from across human cultures! Alongside Bach, Mozart, Beethoven, and Louis Armstrong's jazz trumpet, the record features Peruvian panpipes, a Japanese bamboo flute, an Australian Aboriginal song, and the traditional Georgian polyphonic folk song 'Chakrulo' — creating a timeless symphony of human creativity sailing forever among the stars.",
          "ფირფიტის ყველაზე დიდი ნაწილი უჭირავს კაცობრიობის სხვადასხვა კულტურის ოთხმოცდაათწუთიან მუსიკას! ბახის, მოცარტის, ბეთჰოვენისა და ლუი არმსტრონგის ჯაზური საყვირის გვერდით, ფირფიტაზე ჩაწერილია პერუს სალამური, იაპონური ბამბუკის ფლეიტა, ავსტრალიელი აბორიგენების სიმღერა და ქართული მრავალხმიანი ხალხური სიმღერა „ჩაკრულო“ — რაც ქმნის ადამიანური შემოქმედების მარადიულ სიმფონიას, რომელიც ვარსკვლავებს შორის უსასრულოდ მიცურავს."
        ]
      ],
      glossary: [
        "unmanned space probe|უპილოტო კოსმოსური ზონდი (აპარატი)", "geometric alignment|გეომეტრიული განლაგება / მწკრივში ჩადგომა (პლანეტების)", "interstellar space|ვარსკვლავთშორისი სივრცე",
        "time capsule|დროის კაფსულა", "extraterrestrial civilization|არამიწიერი (უცხოპლანეტური) ცივილიზაცია", "gold-plated copper|ოქროთი დაფარული (მოოქროვილი) სპილენძი",
        "cosmic radiation|კოსმოსური რადიაცია", "pulsar (pulsing star)|პულსარი (პულსირებადი ნეიტრონული ვარსკვლავი)", "DNA double helix|დნმ-ის ორმაგი სპირალი", "polyphonic folk song|მრავალხმიანი (პოლიფონიური) ხალხური სიმღერა"
      ],
      questions: [
        "Why did NASA launch Voyager 1 and Voyager 2 specifically in August and September 1977?|To take advantage of a rare geometric alignment of the outer planets (Jupiter, Saturn, Uranus, Neptune) that occurs once every 176 years|Because the rocket engines were invented in August 1977|To photograph a solar eclipse on the Moon|To land astronauts on Mars",
        "What historic milestone have the two Voyager spacecraft achieved?|They became the first human-made objects to leave our solar system and enter interstellar space|They landed on the surface of Jupiter and returned to Earth|They orbited the Sun at the speed of light|They built a telescope on Pluto",
        "Who led the committee that designed the 'Voyager Golden Record'?|Astronomer Carl Sagan|Physicist Albert Einstein|Engineer John Stevens|Biologist Charles Darwin",
        "What material is the twelve-inch Voyager Golden Record made of, and why wasn't a magnetic tape used?|It is a grooved phonograph disc made of gold-plated copper, because cosmic radiation erases magnetic tapes while metal grooves can last over a billion years|It is made of black vinyl plastic because it is lighter|It is made of glass because it reflects starlight|It is a paper book",
        "What information is engraved on the protective aluminium cover of the Golden Record?|Universal diagrams showing how to play the record with the included needle and where our Sun is located relative to fourteen pulsars|A map of all the highways in America|The names of every person on Earth|A list of prices in dollars",
        "How many photographs were encoded into the audio grooves of the record, and what did they show?|115 photographs showing mathematical definitions, DNA, human anatomy, nature, animals, and daily human life|Only two photographs of the White House|Ten thousand photographs of cars|Zero photographs, because discs can only hold sound",
        "In how many different ancient and modern human languages were spoken greetings recorded on the disc?|In fifty-five languages|In only one language (English)|In five European languages|In one thousand languages",
        "What was included in the twelve-minute audio montage called 'The Sounds of Earth'?|Natural and human sounds such as rain, wind, thunder, whale songs, birdsong, footsteps, a heartbeat, and laughter|Only the sound of factory machines and traffic|A reading of an entire dictionary|Silence",
        "How many minutes of music from around the world were included on the Golden Record?|Ninety minutes of music|Only five minutes of music|Twenty-four hours of music|Ten seconds of music",
        "Which traditional Georgian polyphonic folk song was included on the Voyager Golden Record alongside Bach, Mozart, Beethoven, and Louis Armstrong?|'Chakrulo'|'Suliko'|'Mravaljamieri'|'Tsintskaro'"
      ]
    }
  ];

  // გავაერთიანოთ B1 (15 თემა) და B2 (15 თემა) App.ListeningDataB-ში (სულ 30 თემა B დონეზე, ჯამში 60 თემა A1–B2!)
  App.ListeningDataB = (App.ListeningDataB1 || []).concat(App.ListeningDataB2);
})(window);