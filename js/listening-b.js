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