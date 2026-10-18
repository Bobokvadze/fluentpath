/**
 * READING-B.JS — B1 დონის 15 ვრცელი სასწავლო ტექსტი (#31–#45)
 * თითოეულ ტექსტში: 5 ვრცელი აბზაცი, 10 საკვანძო სიტყვა და 10 გააზრების კითხვა (სულ 150 კითხვა).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ReadingDataB1 = [
    {
      num: 31, level: "B1",
      icon: "🖨️", genre: "ისტორია და ტექნოლოგია",
      title: "სტამბის გამოგონება და წიგნების რევოლუცია",
      subtitle: "The Story of the Printing Press",
      time: "8 წთ",
      paragraphs: [
        [
          "Before the middle of the fifteenth century, books in Europe were extremely rare and expensive. Every single volume had to be copied by hand by skilled scribes, who usually worked in quiet monastery libraries. Using feather quills and ink on parchment made from animal skin, a scribe often needed a whole year to produce a single copy of a long book.",
          "მეთხუთმეტე საუკუნის შუა ხანებამდე ევროპაში წიგნები უაღრესად იშვიათი და ძვირადღირებული იყო. თითოეული ტომი ხელით უნდა გადაეწერათ დახელოვნებულ გადამწერებს, რომლებიც ჩვეულებრივ მონასტრის მშვიდ ბიბლიოთეკებში მუშაობდნენ. ცხოველის ტყავისგან დამზადებულ პერგამენტზე ბატის ფრთისა და მელნის გამოყენებით, გადამწერს ხშირად მთელი წელი სჭირდებოდა გრძელი წიგნის ერთი ეგზემპლარის შესაქმნელად."
        ],
        [
          "Because of this slow process, only kings, wealthy nobles, and major universities could afford to own a small collection of books. Most ordinary people never held a book in their hands during their entire lives, and very few citizens knew how to read or write.",
          "ამ ნელი პროცესის გამო მხოლოდ მეფეებს, მდიდარ დიდებულებსა და დიდ უნივერსიტეტებს შეეძლოთ წიგნების მცირე კოლექციის ქონა. ჩვეულებრივი ადამიანების უმეტესობას მთელი ცხოვრების განმავლობაში წიგნი ხელშიც კი არ სჭერია და ძალიან ცოტა მოქალაქემ იცოდა წერა-კითხვა."
        ],
        [
          "Everything changed around 1440 in the German city of Mainz, where a goldsmith named Johannes Gutenberg developed a revolutionary printing press. Although wooden block printing already existed in China and Korea, Gutenberg combined several new ideas into one efficient mechanical system.",
          "ყველაფერი შეიცვალა დაახლოებით 1440 წელს გერმანიის ქალაქ მაინცში, სადაც ოქრომჭედელმა იოჰანეს გუტენბერგმა შექმნა რევოლუციური საბეჭდი დაზგა. მიუხედავად იმისა, რომ ხის ფორმებით ბეჭდვა უკვე არსებობდა ჩინეთსა და კორეაში, გუტენბერგმა რამდენიმე ახალი იდეა გააერთიანა ერთ ეფექტიან მექანიკურ სისტემაში."
        ],
        [
          "Using his knowledge of metals, Gutenberg created small, durable metal letters called 'movable type' from a mixture of lead, tin, and antimony. Printers could arrange these metal letters in a frame to form a page of text, coat them with oil-based ink, and press paper onto them using a heavy wooden screw press similar to those used for making wine and olive oil.",
          "ლითონების ცოდნის გამოყენებით, გუტენბერგმა ტყვიის, კალისა და სტიბიუმის შენადნობისგან შექმნა პატარა, გამძლე ლითონის ასოები — „მოძრავი შრიფტი“. მბეჭდავებს შეეძლოთ ამ ლითონის ასოების ჩარჩოში ჩალაგება ტექსტის გვერდის შესადგენად, მათი ზეთოვანი მელნით დაფარვა და ქაღალდზე დაწოლა მძიმე ხის ხრახნიანი წნეხით, რომელიც ღვინისა და ზეითუნის ზეთის საწურს ჰგავდა."
        ],
        [
          "Once enough copies of a page were printed, the metal letters could be rearranged to print the next page. Within fifty years, printing presses spread to more than two hundred European cities, producing twenty million books. The cost of books fell dramatically, literacy rates rose, and scientific ideas travelled across borders faster than ever before.",
          "როგორც კი გვერდის საკმარისი რაოდენობა დაიბეჭდებოდა, ლითონის ასოების გადაწყობა მომდევნო გვერდის დასაბეჭდად შეიძლებოდა. ორმოცდაათ წელიწადში საბეჭდი დაზგები ევროპის ორასზე მეტ ქალაქში გავრცელდა და ოცი მილიონი წიგნი დაიბეჭდა. წიგნების ფასი მკვეთრად დაეცა, წერა-კითხვის დონე გაიზარდა და სამეცნიერო იდეები საზღვრებს მიღმა იმაზე სწრაფად ვრცელდებოდა, ვიდრე ოდესმე."
        ]
      ],
      glossary: [
        "scribe|გადამწერი", "feather quill|ბატის ფრთის კალამი", "parchment|პერგამენტი (საწერი მასალა)",
        "goldsmith|ოქრომჭედელი", "printing press|საბეჭდი დაზგა / სტამბა", "movable type|მოძრავი (ასაწყობი) შრიფტი",
        "lead and tin|ტყვია და კალა", "oil-based ink|ზეთოვანი მელანი", "rearrange|გადაწყობა / თავიდან დალაგება", "literacy rate|წერა-კითხვის ცოდნის დონე"
      ],
      questions: [
        "Why were books so rare and expensive in Europe before the mid-fifteenth century?|Because every single book had to be copied by hand by scribes|Because paper was illegal in Europe|Because nobody knew how to make ink|Because libraries burned all old books",
        "What material made from animal skin did medieval scribes often write on?|Parchment|Silk fabric|Cotton canvas|Wooden boards",
        "How long did a scribe often need to copy one long book by hand?|About a whole year|Only two days|One week|Ten years",
        "What was Johannes Gutenberg's original profession in the city of Mainz?|He was a goldsmith|He was a monastery librarian|He was a ship captain|He was a wine merchant",
        "Where did wooden block printing already exist before Gutenberg's invention?|In China and Korea|In Brazil and Peru|In Australia|In ancient Britain",
        "Which metals did Gutenberg mix to create durable 'movable type' letters?|Lead, tin, and antimony|Gold, silver, and copper|Iron and aluminium|Bronze and zinc",
        "What kind of ink did Gutenberg use so that it would stick to the metal letters?|Oil-based ink|Watercolour paint|Lemon juice|Melted wax",
        "What machine inspired the design of Gutenberg's heavy wooden screw press?|Presses used for making wine and olive oil|Windmills used for grinding flour|Steam locomotives|Clocks in church towers",
        "Why was 'movable type' so efficient for printers?|The metal letters could be rearranged and reused to print new pages|The letters melted after each page|Each letter was carved from a whole tree|It required no ink at all",
        "How many books were printed in Europe within fifty years of Gutenberg's invention?|Around twenty million books|Only five hundred books|One thousand books|Over five billion books"
      ]
    },
    {
      num: 32, level: "B1",
      icon: "🚀", genre: "კოსმოსი და მეცნიერება",
      title: "ყოველდღიური ცხოვრება საერთაშორისო კოსმოსურ სადგურზე",
      subtitle: "Daily Life Aboard the International Space Station",
      time: "8 წთ",
      paragraphs: [
        [
          "Four hundred kilometres above the Earth, the International Space Station (ISS) travels around our planet at an incredible speed of twenty-eight thousand kilometres per hour. Because it moves so fast, the station completes one full orbit every ninety minutes, which means the astronauts on board see sixteen sunrises and sixteen sunsets every single day!",
          "დედამიწიდან ოთხასი კილომეტრის სიმაღლეზე საერთაშორისო კოსმოსური სადგური (ISS) ჩვენი პლანეტის გარშემო წარმოუდგენელი სიჩქარით — საათში ოცდარვა ათასი კილომეტრით მოძრაობს. ასეთი სისწრაფის გამო სადგური ერთ სრულ ბრუნს ოთხმოცდაათ წუთში ასრულებს, რაც იმას ნიშნავს, რომ ბორტზე მყოფი ასტრონავტები ყოველდღე თექვსმეტ მზის ამოსვლასა და თექვსმეტ მზის ჩასვლას ხედავენ!"
        ],
        [
          "Inside the station, everything floats in microgravity. Simple daily tasks that we take for granted on Earth require special equipment in space. For example, astronauts cannot pour water into a glass because the liquid would float away in round drops and damage the electronic panels. Instead, they drink water, juice, and coffee from sealed plastic pouches using straws.",
          "სადგურის შიგნით უწონადობის (მიკროგრავიტაციის) გამო ყველაფერი დაფრინავს. მარტივი ყოველდღიური მოქმედებები, რომლებიც დედამიწაზე ჩვეულებრივად მიგვაჩნია, კოსმოსში სპეციალურ აღჭურვილობას მოითხოვს. მაგალითად, ასტრონავტები წყალს ჭიქაში ვერ დაასხამენ, რადგან სითხე მრგვალი ბურთულების სახით გაფრინდება და ელექტრონულ პანელებს დააზიანებს. ამის ნაცვლად, ისინი წყალს, წვენსა და ყავას დალუქული პლასტიკური პაკეტებიდან საწრუპებით სვამენ."
        ],
        [
          "Even salt and pepper are different in space. If astronauts sprinkled ordinary salt on their food, the tiny crystals would float into the air, get into their eyes, or clog the air vents. For this reason, space salt is dissolved in water, and pepper is suspended in oil, so astronauts squeeze them onto their meals as liquid drops.",
          "კოსმოსში მარილი და პილპილიც კი განსხვავებულია. ასტრონავტებმა საკვებს ჩვეულებრივი მარილი რომ მოაყარონ, პაწაწინა კრისტალები ჰაერში გაიფანტება, თვალებში ჩაუვათ ან სავენტილაციო მილებს გაჭედავს. ამ მიზეზით კოსმოსური მარილი წყალშია გახსნილი, ხოლო პილპილი — ზეთში, და ასტრონავტები მათ კერძებზე თხევადი წვეთების სახით აწვეთებენ."
        ],
        [
          "Without gravity pulling on their bodies, astronauts do not use their leg and back muscles simply by standing up. To prevent their bones and muscles from becoming weak, every crew member must exercise for two hours a day. They use a special stationary bicycle and a treadmill where they wear a harness with elastic straps to hold them down.",
          "რადგან სხეულზე მიზიდულობის ძალა არ მოქმედებს, ასტრონავტებს დგომისას ფეხისა და ზურგის კუნთები არ ეჭიმებათ. ძვლებისა და კუნთების დასუსტების თავიდან ასაცილებლად ეკიპაჟის თითოეული წევრი ვალდებულია დღეში ორი საათი ივარჯიშოს. ისინი იყენებენ სპეციალურ ველოტრენაჟორსა და სარბენ ბილიკს, რომელზეც ელასტიკური ღვედებით არიან დამაგრებულნი, რომ ჰაერში არ აფრინდნენ."
        ],
        [
          "At the end of their workday, astronauts do not lie down on beds. Instead, each astronaut has a small private cabin the size of a telephone booth. They zip themselves into a sleeping bag that is attached to the cabin wall so they don't float around and bump into computers while they are asleep.",
          "სამუშაო დღის ბოლოს ასტრონავტები საწოლებზე არ წვებიან. ამის ნაცვლად, თითოეულ ასტრონავტს აქვს ტელეფონის ჯიხურის ზომის პატარა პირადი კაიუტა. ისინი შედიან კედელზე მიმაგრებულ საძილე ტომარაში და ელვა-შესაკრავს იკრავენ, რათა ძილის დროს არ იტივტივონ და კომპიუტერებს არ დაეჯახონ."
        ]
      ],
      glossary: [
        "orbit|ორბიტა / სრული ბრუნი პლანეტის გარშემო", "microgravity|უწონადობა / მიკროგრავიტაცია", "sealed pouch|დალუქული პაკეტი",
        "sprinkle|მოყრა (მარილის/შაქრის)", "air vent|სავენტილაციო ხვრელი/მილი", "dissolve|გახსნა (სითხეში)",
        "treadmill|სარბენი ბილიკი (ტრენაჟორი)", "harness|დამჭერი ღვედების სისტემა", "telephone booth|ტელეფონის ჯიხური", "bump into|დაჯახება"
      ],
      questions: [
        "How high above the Earth does the International Space Station orbit?|Four hundred kilometres|Forty kilometres|Four thousand kilometres|Ten thousand kilometres",
        "How long does it take the space station to complete one full orbit around Earth?|Ninety minutes|Twenty-four hours|Twelve hours|Thirty days",
        "How many sunrises do astronauts on the ISS see every day?|Sixteen sunrises|Only one sunrise|Two sunrises|Fifty sunrises",
        "Why can't astronauts pour water into an open glass in space?|The water would float away in drops and damage electronic panels|Water freezes immediately inside the station|Glasses are too heavy to carry|There is no water on the station",
        "How do astronauts drink water, juice, and coffee?|From sealed plastic pouches using straws|From heavy metal mugs|By catching floating drops in the air|From glass bottles",
        "Why is ordinary dry salt dangerous inside the space station?|The tiny crystals would float into eyes or clog the air vents|It tastes bitter in microgravity|It ruins the plastic pouches|It is too heavy for rockets",
        "In what form do astronauts use salt and pepper on their food?|As liquids (salt dissolved in water and pepper in oil)|As solid cubes|Mixed with flour|They never use salt or pepper",
        "Why must every astronaut exercise for two hours a day?|To prevent their bones and muscles from becoming weak in microgravity|To generate electricity for the station|To stay warm in the cold cabin|To prepare for swimming in the ocean",
        "How do astronauts stay on the treadmill without floating away?|They wear a harness with elastic straps to hold them down|They wear heavy lead boots|Another astronaut holds their shoulders|They glue their shoes to the belt",
        "Why are the astronauts' sleeping bags attached to the cabin wall?|So they don't float around and bump into things while asleep|Because the floor is covered in water|To keep them close to the heater|Because there are no walls in the cabin"
      ]
    },
    {
      num: 33, level: "B1",
      icon: "🦢", genre: "ბუნება და ზოოლოგია",
      title: "ფრინველთა მიგრაციის საოცარი საიდუმლო",
      subtitle: "The Remarkable Mystery of Bird Migration",
      time: "8 წთ",
      paragraphs: [
        [
          "Every autumn, as the days grow shorter and insects become scarce in the northern hemisphere, billions of birds prepare for one of nature's greatest journeys. Without maps or modern instruments, even tiny songbirds weighing less than a coin fly thousands of kilometres across continents and oceans to reach their warm winter grounds.",
          "ყოველ შემოდგომაზე, როდესაც ჩრდილოეთ ნახევარსფეროში დღეები მოკლდება და მწერები იშვიათდება, მილიარდობით ფრინველი ბუნების ერთ-ერთი უდიდესი მოგზაურობისთვის ემზადება. რუკებისა და თანამედროვე ხელსაწყოების გარეშე, მონეტაზე მსუბუქი პაწაწინა მგალობელი ჩიტებიც კი ათასობით კილომეტრს მიფრინავენ კონტინენტებსა და ოკეანეებზე, რათა მიაღწიონ თბილ საზამთრო ადგილებს."
        ],
        [
          "The champion of all migrating birds is the Arctic tern, a slender white seabird. Every year, it flies from its nesting grounds in the Arctic Circle all the way to the ice of Antarctica and back again — a round trip of nearly seventy thousand kilometres! Over its thirty-year life, an Arctic tern flies a distance equal to three trips to the Moon and back.",
          "ყველა გადამფრენ ფრინველს შორის რეკორდსმენია არქტიკული თოლია (მეთოვლია) — მოხდენილი თეთრი ზღვის ფრინველი. ყოველწლიურად ის ჩრდილოეთ პოლარულ წრეში მდებარე ბუდობის ადგილებიდან ანტარქტიდის ყინულებამდე და უკან მიფრინავს, რაც ორივე გზაზე თითქმის სამოცდაათი ათას კილომეტრს შეადგენს! თავისი ოცდაათწლიანი სიცოცხლის განმავლობაში ეს ფრინველი გადის მანძილს, რომელიც მთვარემდე და უკან სამჯერ გაფრენას უდრის."
        ],
        [
          "Before setting off on these exhausting journeys, birds enter a period of intense feeding called 'hyperphagia'. For two or three weeks, they eat berries and insects constantly, sometimes doubling their body weight by storing thick layers of fat under their skin. This fat acts as high-energy fuel during non-stop flights over deserts and seas.",
          "ამ დამღლელი მოგზაურობის დაწყებამდე ფრინველებს ეწყებათ გაძლიერებული კვების პერიოდი, რომელსაც „ჰიპერფაგია“ ეწოდება. ორი ან სამი კვირის განმავლობაში ისინი განუწყვეტლივ ჭამენ კენკრასა და მწერებს და კანქვეშ ცხიმის სქელი ფენის დაგროვებით ხშირად სხეულის წონას იორმაგებენ. ეს ცხიმი მაღალენერგიული საწვავის როლს ასრულებს უდაბნოებსა და ზღვებზე შეუსვენებელი ფრენის დროს."
        ],
        [
          "For centuries, scientists wondered how birds find the exact same valley or tree year after year. Research shows that birds use several natural compasses. During the day, they navigate by the position of the sun and follow landmarks such as coastlines, mountain ranges, and major rivers. Species that fly at night use the stars, keeping their eyes on the North Star.",
          "საუკუნეების განმავლობაში მეცნიერებს აინტერესებდათ, როგორ პოულობენ ფრინველები წლიდან წლამდე ზუსტად ერთსა და იმავე ხეობას ან ხეს. კვლევები აჩვენებს, რომ ფრინველები რამდენიმე ბუნებრივ კომპასს იყენებენ. დღისით ისინი ორიენტირებენ მზის მდებარეობით და მიუყვებიან ისეთ ორიენტირებს, როგორებიცაა სანაპირო ზოლი, ქედები და დიდი მდინარეები. სახეობები, რომლებიც ღამით მიფრინავენ, იყენებენ ვარსკვლავებს და სწორებას პოლარულ ვარსკვლავზე აკეთებენ."
        ],
        [
          "Even more amazingly, birds can sense the Earth's invisible magnetic field! Tiny crystals of a magnetic mineral called magnetite in their beaks, along with special light-sensitive proteins in their eyes, allow them to 'feel' and 'see' magnetic lines between the north and south poles, guiding them safely even through thick clouds.",
          "კიდევ უფრო გასაოცარია ის, რომ ფრინველებს შეუძლიათ დედამიწის უხილავი მაგნიტური ველის შეგრძნება! მათ ნისკარტში არსებული მაგნიტური მინერალის — მაგნეტიტის პაწაწინა კრისტალები, თვალებში არსებულ სინათლის მიმართ მგრძნობიარე ცილებთან ერთად, საშუალებას აძლევს მათ „იგრძნონ“ და „დაინახონ“ მაგნიტური ხაზები ჩრდილოეთ და სამხრეთ პოლუსებს შორის, რაც მათ სქელ ღრუბლებშიც კი უსაფრთხოდ მიაცილებს."
        ]
      ],
      glossary: [
        "hemisphere|ნახევარსფერო", "scarce|მწირი / იშვიათი", "Arctic tern|არქტიკული თოლია (მეთოვლია)",
        "round trip|მგზავრობა ორივე მიმართულებით (წასვლა-წამოსვლა)", "double their weight|წონის გაორმაგება", "fuel|საწვავი",
        "landmark|სახმელეთო ორიენტირი", "mountain range|მთათა სისტემა / ქედი", "magnetic field|მაგნიტური ველი", "beak|ფრინველის ნისკარტი"
      ],
      questions: [
        "Why do billions of birds leave the northern hemisphere every autumn?|Because the days grow shorter and insects and food become scarce|Because the trees lose all their branches|Because there is too much sunlight|Because the oceans dry up",
        "Which bird holds the record for the longest migration in the world?|The Arctic tern|The emperor penguin|The golden eagle|The white swan",
        "How long is the Arctic tern's annual round trip between the Arctic and Antarctica?|Nearly seventy thousand kilometres|About five thousand kilometres|Ten thousand kilometres|One thousand kilometres",
        "How do birds prepare their bodies in the two or three weeks before migrating?|They eat constantly and sometimes double their weight by storing fat|They stop eating completely to become lighter|They lose all their feathers|They sleep for twenty hours a day",
        "What role does the stored body fat play during migration?|It acts as high-energy fuel during non-stop flights over deserts and seas|It helps the birds float under water|It changes the colour of their feathers|It makes their beaks harder",
        "What landmarks do daytime-flying birds follow on their journey?|Coastlines, mountain ranges, and major rivers|Highway signs and railway lines|Tall office buildings|Ships in the middle of the ocean",
        "How do night-flying birds navigate when the sky is clear?|By the stars, keeping their eyes on the North Star|By the smell of flowers on the ground|By following airplanes|By the sound of the wind",
        "What allows birds to navigate even when thick clouds hide the sun and stars?|They can sense the Earth's invisible magnetic field|They wait on the ground until spring|They follow bats|They use echolocation like dolphins",
        "Where are the tiny crystals of magnetite located in a bird's body?|In their beaks|In their claws|On the tips of their tail feathers|In their stomachs",
        "Over its thirty-year life, what is the total distance an Arctic tern flies equal to?|Three trips to the Moon and back|One trip around the equator|Walking across Europe twice|Flying across the Atlantic once"
      ]
    },
    {
      num: 34, level: "B1",
      icon: "🚇", genre: "ინჟინერია და ისტორია",
      title: "როგორ აშენდა მსოფლიოს პირველი მეტრო",
      subtitle: "How the World's First Underground Railway Was Built",
      time: "8 წთ",
      paragraphs: [
        [
          "By the 1850s, London had become the largest city in the world, with over two and a half million inhabitants. Every morning, hundreds of thousands of people arrived at the main railway terminals on the edge of the city, and the narrow streets were completely choked with horse-drawn buses, carriages, and carts. Crossing the city centre often took longer than the train journey from the countryside!",
          "1850-იანი წლებისთვის ლონდონი მსოფლიოს უდიდეს ქალაქად იქცა ორნახევარ მილიონზე მეტი მცხოვრებით. ყოველ დილით ასობით ათასი ადამიანი ჩამოდიოდა ქალაქის განაპირას მდებარე რკინიგზის სადგურებში, ვიწრო ქუჩები კი სრულად იყო გადაჭედილი ცხენებშებმული オムნიბუსებით, ეტლებითა და ურმებით. ქალაქის ცენტრის გადაკვეთას ხშირად უფრო მეტი დრო სჭირდებოდა, ვიდრე ქალაქგარეთიდან მატარებლით ჩამოსვლას!"
        ],
        [
          "A city lawyer named Charles Pearson proposed a bold solution: building a railway line underneath the streets to connect the main stations. Many critics laughed at the idea, warning that the tunnels would collapse under the weight of the buildings or that passengers would suffocate from the smoke of steam locomotives.",
          "ქალაქის იურისტმა ჩარლზ პირსონმა წამოაყენა თამამი იდეა: ქუჩების ქვეშ რკინიგზის ხაზის აშენება მთავარი სადგურების დასაკავშირებლად. ბევრი კრიტიკოსი დასცინოდა ამ მოსაზრებას და აფრთხილებდა საზოგადოებას, რომ გვირაბები შენობების სიმძიმის ქვეშ ჩამოინგრეოდა ან მგზავრები ორთქლმავლების კვამლით გაიგუდებოდნენ."
        ],
        [
          "Despite the scepticism, construction of the 'Metropolitan Railway' began in 1860. Engineers used a method called 'cut-and-cover'. Workers dug a deep trench along the middle of existing roads, built strong brick walls and a curved brick arch over the tracks, and then relaid the street surface on top.",
          "სკეპტიციზმის მიუხედავად, „მეტროპოლიტენის რკინიგზის“ მშენებლობა 1860 წელს დაიწყო. ინჟინრებმა გამოიყენეს „ამოთხრისა და გადახურვის“ (cut-and-cover) მეთოდი. მუშები არსებული გზების შუაგულში თხრიდნენ ღრმა თხრილს, ლიანდაგების გასწვრივ აშენებდნენ მყარ აგურის კედლებსა და თაღოვან სახურავს, შემდეგ კი ზემოდან ქუჩის საფარს თავიდან აგებდნენ."
        ],
        [
          "On the tenth of January 1863, the world's first underground railway opened to the public. The line was six kilometres long and had seven stations lit by gas lamps. On the very first day, nearly forty thousand curious citizens queued for hours to ride in the wooden carriages pulled by special steam engines that condensed most of their own steam.",
          "1863 წლის 10 იანვარს მსოფლიოს პირველი მიწისქვეშა რკინიგზა საზოგადოებისთვის გაიხსნა. ხაზის სიგრძე ექვსი კილომეტრი იყო და ჰქონდა გაზის ფარნებით განათებული შვიდი სადგური. პირველივე დღეს თითქმის ორმოცი ათასი ცნობისმოყვარე მოქალაქე საათობით იდგა რიგში, რათა ემგზავრა ხის ვაგონებით, რომლებსაც მიათრევდა საკუთარი ორთქლის დამჭერი სპეციალური ორთქლმავალი."
        ],
        [
          "Later, at the end of the nineteenth century, engineers invented a circular steel tunnelling shield that allowed them to bore deep tube-shaped tunnels through London's clay without digging up the streets above. When clean electric trains replaced steam locomotives, the 'Tube' became the model for metro systems in Paris, New York, Tokyo, and cities worldwide.",
          "მოგვიანებით, მეცხრამეტე საუკუნის ბოლოს, ინჟინრებმა გამოიგონეს მრგვალი ფოლადის გვირაბგამყვანი ფარი, რამაც მათ საშუალება მისცა, ქუჩების გადათხრის გარეშე გაეყვანათ ღრმა მილისებური გვირაბები ლონდონის თიხოვან ნიადაგში. როდესაც ორთქლმავლები სუფთა ელექტრომატარებლებმა ჩაანაცვლა, ლონდონის მეტრო იქცა ნიმუშად პარიზის, ნიუ-იორკის, ტოკიოსა და მსოფლიოს სხვა ქალაქების მეტროპოლიტენებისთვის."
        ]
      ],
      glossary: [
        "inhabitant|მცხოვრები / მოსახლე", "choked with traffic|ტრანსპორტით გადაჭედილი / გაჭედილი", "bold solution|თამამი გამოსავალი",
        "suffocate|სულის შეხუთვა / გაგუდვა", "steam locomotive|ორთქლმავალი", "trench|თხრილი / სანგარი",
        "brick arch|აგურის თაღი", "queue (verb)|რიგში დგომა", "tunnelling shield|გვირაბგამყვანი ფარი", "clay|თიხა / თიხოვანი ნიადაგი"
      ],
      questions: [
        "What was the population of London by the 1850s?|Over two and a half million inhabitants|Around five hundred thousand people|Ten million people|One hundred thousand people",
        "Why did crossing the centre of London take so long in the 1850s?|The narrow streets were choked with horse-drawn buses, carriages, and carts|There were no bridges across the river|Cars and trucks blocked the highways|People were not allowed to walk fast",
        "Who proposed building an underground railway line to connect the main stations?|A city lawyer named Charles Pearson|Queen Victoria|A French railway driver|A bridge builder from Scotland",
        "What two dangers did critics warn would happen in the underground tunnels?|The tunnels would collapse or passengers would suffocate from steam smoke|The tunnels would fill with sea fish or freeze in winter|The trains would go too fast or fly off the tracks|Nobody would know how to buy tickets",
        "How did the 'cut-and-cover' construction method work?|Workers dug a trench in the road, built a brick arch over the tracks, and relaid the street on top|Machines drilled a hundred metres deep under the river|Balloons lifted the houses while tracks were laid|Natural caves were connected together",
        "On what date did the world's first underground railway open to the public?|On the tenth of January 1863|On the first of May 1900|In 1817|In 1925",
        "How long was the first underground line and how many stations did it have?|Six kilometres long with seven stations|Fifty kilometres long with thirty stations|One kilometre long with two stations|One hundred kilometres long",
        "How were the first seven underground stations lit in 1863?|By gas lamps|By electric neon lights|By wax candles|By sunlight through glass roofs",
        "How many passengers rode the underground railway on its very first day?|Nearly forty thousand citizens|Only two hundred people|Five million people|Nobody rode it on the first day",
        "What two inventions at the end of the nineteenth century modernized the underground system?|A steel tunnelling shield for deep tunnels and clean electric trains|Diesel buses and wooden tracks|Solar panels and glass elevators|Steam boats and cable cars"
      ]
    },
    {
      num: 35, level: "B1",
      icon: "📜", genre: "ხელობა და კულტურა",
      title: "ქაღალდის დამზადების უძველესი ხელოვნება",
      subtitle: "The Ancient Art of Making Paper",
      time: "8 წთ",
      paragraphs: [
        [
          "Today we use paper every day for books, notebooks, newspapers, and packaging without thinking twice about where it comes from. Yet before paper was invented, recording words was a difficult task. In ancient Mesopotamia, people pressed marks into wet clay tablets; in Egypt, they used fragile sheets made from papyrus reeds; and in China, scholars wrote on heavy strips of bamboo or expensive silk.",
          "დღეს ჩვენ ყოველდღიურად ვიყენებთ ქაღალდს წიგნებისთვის, რვეულებისთვის, გაზეთებისა და შესაფუთი მასალისთვის და არც კი ვფიქრობთ, საიდან მოდის იგი. თუმცა, ქაღალდის გამოგონებამდე სიტყვების ჩაწერა რთული საქმე იყო. ძველ მესოპოტამიაში ხალხი ნიშნებს სველ თიხის ფირფიტებზე აღბეჭდავდა; ეგვიპტეში იყენებდნენ პაპირუსის ლერწმისგან დამზადებულ მყიფე ფურცლებს; ხოლო ჩინეთში სწავლულები წერდნენ ბამბუკის მძიმე ფირფიტებზე ან ძვირადღირებულ აბრეშუმზე."
        ],
        [
          "Bamboo books were so heavy that a scholar needed a whole cart to transport a few volumes, while silk was far too costly for everyday use. Around the year 105 AD, a Chinese court official named Cai Lun found a brilliant solution by creating the first true paper from plant fibres.",
          "ბამბუკის წიგნები იმდენად მძიმე იყო, რომ სწავლულს რამდენიმე ტომის გადასატანად მთელი ურემი სჭირდებოდა, ხოლო აბრეშუმი ყოველდღიური მოხმარებისთვის ზედმეტად ძვირი იყო. ახალი წელთაღრიცხვით დაახლოებით 105 წელს ჩინეთის საიმპერატორო კარის მოხელემ, ცაი ლუნმა, ბრწყინვალე გამოსავალს მიაგნო და მცენარეული ბოჭკოებისგან შექმნა პირველი ნამდვილი ქაღალდი."
        ],
        [
          "Cai Lun soaked the inner bark of mulberry trees, hemp, old linen rags, and worn-out fishing nets in water. He boiled the mixture and beat it with wooden mallets until the fibres separated into a soft, soupy pulp. Then he dipped a flat screen made of fine bamboo strips into the vat of pulp.",
          "ცაი ლუნმა წყალში დაალბო თუთის ხის შიდა ქერქი, კანაფი, ძველი სელის ნაჭრები და გაცვეთილი სათევზაო ბადეები. მან ნარევი მოხარშა და ხის უროებით დაბეგვა, სანამ ბოჭკოები რბილ, ფაფისებურ მასად არ იქცა. შემდეგ მან წვრილი ბამბუკის ღეროებისგან შეკრული ბრტყელი ბადე ჩაუშვა ამ მასით სავსე კასრში."
        ],
        [
          "When he lifted the screen out horizontally, the water drained through the tiny gaps, leaving a thin, even mat of tangled fibres on the surface. Once this wet sheet was pressed under heavy stones and dried in the sun on a warm wall, it became a light, smooth, and flexible sheet of paper that absorbed ink beautifully.",
          "როდესაც მან ბადე ჰორიზონტალურად ამოიღო, წყალი პაწაწინა ნაპრალებიდან დაიწურა და ზედაპირზე ერთმანეთში გადახლართული ბოჭკოების თხელი, თანაბარი ფენა დატოვა. მძიმე ქვების ქვეშ დაწურვისა და თბილ კედელზე მზეზე გაშრობის შემდეგ, ეს სველი ფენა გადაიქცა მსუბუქ, გლუვ და დრეკად ქაღალდის ფურცლად, რომელიც მშვენივრად იწოვდა მელანს."
        ],
        [
          "For several centuries, the Chinese guarded the secret of papermaking closely. In the eighth century, the craft spread to Samarkand, Damascus, and Baghdad, where Arab papermakers built water-powered mills. From there, paper reached Spain and Italy in the twelfth century, providing the essential material that later made the printing revolution possible.",
          "რამდენიმე საუკუნის განმავლობაში ჩინელები მკაცრად ინახავდნენ ქაღალდის დამზადების საიდუმლოს. მერვე საუკუნეში ეს ხელობა გავრცელდა სამარყანდში, დამასკოსა და ბაღდადში, სადაც არაბმა ოსტატებმა წყლის წისქვილებზე მომუშავე ქაღალდის საამქროები ააგეს. იქიდან მეთორმეტე საუკუნეში ქაღალდმა მიაღწია ესპანეთსა და იტალიას, რითაც შეიქმნა ის აუცილებელი მასალა, რომელმაც მოგვიანებით სტამბის რევოლუცია გახადა შესაძლებელი."
        ]
      ],
      glossary: [
        "clay tablet|თიხის ფირფიტა (საწერი)", "papyrus reed|პაპირუსის ლერწამი", "plant fibre|მცენარეული ბოჭკო",
        "mulberry tree|თუთის ხე", "linen rag|სელის ძველი ნაჭერი", "wooden mallet|ხის ურო / ჩაქუჩი",
        "pulp|ქაღალდის რბილობი (ფაფისებური მასა)", "drain|დაწურვა / გადინება (წყლის)", "absorb ink|მელნის შეწოვა", "water-powered mill|წყლის წისქვილი"
      ],
      questions: [
        "What material did people in ancient Mesopotamia use to record words?|Wet clay tablets|Sheets of plastic|Strips of pine wood|Silk handkerchiefs",
        "What were the two disadvantages of writing on bamboo strips and silk in ancient China?|Bamboo was very heavy to transport and silk was too expensive|Bamboo melted in the rain and silk was too dark|Nobody knew how to cut bamboo|Silk could not hold any ink",
        "Who is credited with inventing the first true paper around 105 AD?|A Chinese court official named Cai Lun|An Egyptian pharaoh|A German goldsmith|An Italian merchant",
        "Which четыре materials did Cai Lun soak and boil to make his paper pulp?|Mulberry tree bark, hemp, old linen rags, and worn-out fishing nets|Clay, sand, stones, and river water|Sheep wool, feathers, and milk|Pine needles, grass, and honey",
        "What tool did Cai Lun dip into the vat of soupy pulp to form a sheet?|A flat screen made of fine bamboo strips|A deep iron pot|A round glass bowl|A leather bag",
        "What happened when he lifted the bamboo screen out of the vat?|The water drained through the gaps, leaving a thin mat of tangled fibres|The fibres dissolved completely in the air|The bamboo screen turned into paper|The pulp froze into ice",
        "How were the wet sheets of paper dried?|They were pressed under heavy stones and dried in the sun on a warm wall|They were baked in a bread oven|They were hung from tall trees in the wind|They were ironed with hot coals",
        "When and where did the craft of papermaking spread after leaving China?|In the eighth century, to Samarkand, Damascus, and Baghdad|In the fifteenth century, directly to London|In the second century, to South America|In the nineteenth century, to Australia",
        "What innovation did Arab papermakers introduce to the process?|They built water-powered mills to make paper|They used plastic instead of plants|They invented the laser printer|They made paper out of metal",
        "Through which two countries did paper first enter Europe in the twelfth century?|Spain and Italy|Sweden and Norway|Poland and Hungary|Scotland and Ireland"
      ]
    },
    {
      num: 36, level: "B1",
      icon: "🌊", genre: "ოკეანოლოგია",
      title: "მოგზაურობა ოკეანის უღრმეს უფსკრულში",
      subtitle: "Exploring the Mariana Trench",
      time: "8 წთ",
      paragraphs: [
        [
          "More than seventy percent of our planet is covered by oceans, yet we know more about the surface of the Moon and Mars than we do about Earth's deepest seas. The deepest place on the planet is the Mariana Trench in the western Pacific Ocean. At its lowest point, called the Challenger Deep, the ocean floor lies nearly eleven হাজার metres below the waves.",
          "ჩვენი პლანეტის სამოცდაათ პროცენტზე მეტი ოკეანეებითაა დაფარული, თუმცა მთვარისა და მარსის ზედაპირის შესახებ უფრო მეტი ვიცით, ვიდრე დედამიწის უღრმესი ზღვების შესახებ. პლანეტის ყველაზე ღრმა ადგილია მარიანას ღრმული წყნარი ოკეანის დასავლეთ ნაწილში. მის ყველაზე დაბალ წერტილში, რომელსაც „ჩელენჯერის უფსკრული“ ეწოდება, ოკეანის ფსკერი ტალღებიდან თითქმის თერთმეტი ათასი მეტრის სიღრმეზე მდებარეობს."
        ],
        [
          "To imagine how deep that is, if you placed Mount Everest — the highest mountain on Earth — at the bottom of the Mariana Trench, its peak would still be covered by more than two kilometres of water! Sunlight can only penetrate the ocean down to about two hundred metres, so the trench is a world of complete, eternal darkness where the water temperature is just above freezing.",
          "იმის წარმოსადგენად, თუ რამდენად ღრმაა ეს ადგილი: დედამიწის უმაღლესი მთა ევერესტი მარიანას ღრმულის ფსკერზე რომ დავდგათ, მის მწვერვალს მაინც ორ კილომეტრზე მეტი სისქის წყლის ფენა დაფარავს! მზის სხივები ოკეანეში მხოლოდ ორას მეტრამდე აღწევს, ამიტომ ღრმული არის სრული, მარადიული წყვდიადის სამყარო, სადაც წყლის ტემპერატურა გაყინვის ნიშნულს სულ ოდნავ აღემატება."
        ],
        [
          "The greatest obstacle to exploring the trench is the crushing water pressure. At a depth of eleven kilometres, the pressure is more than one thousand times greater than at sea level — strong enough to crush an ordinary steel submarine like a tin can. For a long time, scientists believed that no living creature could survive under such extreme conditions.",
          "ღრმულის კვლევისას უდიდესი დაბრკოლება წყლის გამანადგურებელი წნევაა. თერთმეტი კილომეტრის სიღრმეზე წნევა ზღვის დონესთან შედარებით ათასჯერ უფრო მაღალია — საკმარისად ძლიერი იმისთვის, რომ ჩვეულებრივი ფოლადის წყალქვეშა ნავი თუნუქის ქილასავით დაჭყლიტოს. დიდი ხნის განმავლობაში მეცნიერებს სჯეროდათ, რომ ასეთ ექსტრემალურ პირობებში ვერცერთი ცოცხალი არსება ვერ გადარჩებოდა."
        ],
        [
          "In January 1960, Swiss oceanographer Jacques Piccard and US Navy lieutenant Don Walsh made history by descending into the Challenger Deep aboard a special vessel called the 'Trieste'. The crew cabin was a small steel sphere with walls twelve centimetres thick, attached to a giant tank filled with petrol for buoyancy. Their descent took nearly five hours.",
          "1960 წლის იანვარში შვეიცარიელმა ოკეანოგრაფმა ჟაკ პიკარმა და აშშ-ის საზღვაო ძალების ლეიტენანტმა დონ უოლშმა ისტორია შექმნეს და სპეციალური აპარატით, ბათისკაფ „ტრიესტით“, ჩელენჯერის უფსკრულში ჩაეშვნენ. ეკიპაჟის კაბინა წარმოადგენდა თორმეტი სანტიმეტრის სისქის კედლების მქონე პატარა ფოლადის სფეროს, რომელიც ტივტივადობისთვის მიმაგრებული იყო ბენზინით სავსე გიგანტურ ავზზე. მათ ჩაშვებას თითქმის ხუთი საათი დასჭირდა."
        ],
        [
          "When their floodlights illuminated the grey mud at the bottom of the trench, Piccard and Walsh were amazed to see a flatfish और shrimp swimming calmly past their thick glass window! Since then, robotic submarines have discovered hundreds of strange deep-sea species, including transparent snailfish and glowing jellyfish, proving that life can adapt to even the harshest environments on Earth.",
          "როდესაც მათმა პროჟექტორებმა ღრმულის ფსკერზე ნაცრისფერი შლამი გაანათა, პიკარი და უოლში გაოცდნენ, როცა სქელი მინის ილუმინატორის წინ მშვიდად მცურავი ბრტყელი თევზი და კრევეტები დაინახეს! მას შემდეგ რობოტულმა წყალქვეშა აპარატებმა აღმოაჩინეს ღრმა წყლის ასობით უცნაური სახეობა, მათ შორის გამჭვირვალე თევზები და მანათობელი მედუზები, რამაც დაამტკიცა, რომ სიცოცხლეს შეუძლია დედამიწის ყველაზე მკაცრ გარემოსთანაც კი ადაპტირება."
        ]
      ],
      glossary: [
        "ocean trench|ოკეანური ღრმული", "ocean floor|ოკეანის ფსკერი", "penetrate|შეღწევა (სინათლის)",
        "eternal darkness|მარადიული სიბნელე", "water pressure|წყლის წნევა", "descend|დაშვება / ჩასვლა",
        "steel sphere|ფოლადის სფერო", "buoyancy|ტივტივადობა / ამომგდები ძალა", "floodlight|მძლავრი პროჟექტორი", "transparent|გამჭვირვალე"
      ],
      questions: [
        "Where is the Mariana Trench located?|In the western Pacific Ocean|In the middle of the Atlantic Ocean|In the Mediterranean Sea|Under the Arctic ice",
        "How deep is the Challenger Deep, the lowest point of the Mariana Trench?|Nearly eleven thousand metres|About two thousand metres|Five hundred metres|Fifty thousand metres",
        "How deep can sunlight penetrate into the ocean?|Down to about two hundred metres|All the way to eleven thousand metres|Only two metres|Down to five kilometres",
        "How strong is the water pressure at the bottom of the Mariana Trench?|More than one thousand times greater than at sea level|Twice as strong as at sea level|The same as on top of a mountain|There is no pressure at the bottom",
        "When did Jacques Piccard and Don Walsh descend into the Challenger Deep?|In January 1960|In July 1995|In 1885|In 2012",
        "What was the name of the special vessel Piccard and Walsh used?|The Trieste|The Nautilus|The Challenger|The Voyager",
        "How thick were the steel walls of their spherical crew cabin?|Twelve centimetres thick|One centimetre thick|Two metres thick|Made of thin aluminium",
        "How long did it take the Trieste to descend to the bottom of the trench?|Nearly five hours|Twenty minutes|Three days|One hour",
        "What surprised Piccard and Walsh when their floodlights lit up the ocean floor?|They saw a flatfish and shrimp swimming calmly in the deep water|They found a sunken pirate ship|They saw green trees growing in the mud|The water at the bottom was boiling hot",
        "What have robotic submarines discovered in the trench since 1960?|Hundreds of strange species like transparent snailfish and glowing jellyfish|Large underwater cities|Dinosaurs living in caves|Solid gold mountains"
      ]
    },
    {
      num: 37, level: "B1",
      icon: "🏃‍♂️", genre: "სპორტის ისტორია",
      title: "მარათონული სირბილის ლეგენდა და ისტორია",
      subtitle: "The Legend and History of the Marathon Race",
      time: "8 წთ",
      paragraphs: [
        [
          "Every year, hundreds of thousands of runners gather in cities like Boston, Berlin, London, and Tokyo to test their endurance in the marathon — a long-distance footrace covering exactly 42.195 kilometres. While today anyone can train to run a marathon, the race has its roots in an ancient Greek military legend from two and a half thousand years ago.",
          "ყოველწლიურად ასობით ათასი მორბენალი იკრიბება ისეთ ქალაქებში, როგორებიცაა ბოსტონი, ბერლინი, ლონდონი და ტოკიო, რათა საკუთარი გამძლეობა გამოსცადოს მარათონში — გრძელ დისტანციაზე სირბილში, რომელიც ზუსტად 42,195 კილომეტრს მოიცავს. მიუხედავად იმისა, რომ დღეს მარათონისთვის მომზადება ყველას შეუძლია, ეს გარბენი სათავეს იღებს ორნახევარი ათასი წლის წინანდელი ძველბერძნული სამხედრო ლეგენდიდან."
        ],
        [
          "In the year 490 BC, a large Persian army landed on the coastal plain of Marathon, about forty kilometres northeast of Athens. Although the Athenian soldiers were heavily outnumbered, they won a decisive victory. According to the famous story, a Greek messenger named Pheidippides ran the entire distance from the battlefield of Marathon to Athens without stopping to announce the news: 'Rejoice, we conquer!'",
          "ძველი წელთაღრიცხვით 490 წელს სპარსეთის დიდი არმია გადმოსხდა მარათონის სანაპირო ველზე, ათენიდან ჩრდილო-აღმოსავლეთით დაახლოებით ორმოც კილომეტრში. მიუხედავად იმისა, რომ ათენელი ჯარისკაცები რიცხობრივად ბევრად ცოტანი იყვნენ, მათ გადამწყვეტი გამარჯვება მოიპოვეს. ცნობილი გადმოცემის თანახმად, ბერძენმა შიკრიკმა, სახელად ფიდიპიდესმა, მარათონის ბრძოლის ველიდან ათენამდე მთელი მანძილი შეუსვენებლად გაირბინა გამარჯვების საუწყებლად: „იხარეთ, ჩვენ გავიმარჯვეთ!“"
        ],
        [
          "When French historian Michel Bréal helped organize the first modern Olympic Games in Athens in 1896, he suggested creating a long-distance race from the town of Marathon to the marble stadium in Athens to honour Pheidippides. Seventeen runners started that first Olympic marathon, and to the delight of the Greek crowd, a local water-carrier named Spyridon Louis won the gold medal in just under three hours.",
          "როდესაც ფრანგი ისტორიკოსი მიშელ ბრეალი 1896 წელს ათენში პირველი თანამედროვე ოლიმპიური თამაშების ორგანიზებაში მონაწილეობდა, მან წამოაყენა იდეა, ფიდიპიდესის პატივსაცემად მოეწყოთ გრძელ დისტანციაზე გარბენი ქალაქ მარათონიდან ათენის მარმარილოს სტადიონამდე. იმ პირველ ოლიმპიურ მარათონში სტარტი ჩვიდმეტმა მორბენალმა აიღო და ბერძენი მაყურებლის სასიხარულოდ, ოქროს მედალი სამ საათზე ნაკლებ დროში მოიპოვა ადგილობრივმა წყლის დამტარებელმა სპირიდონ ლუისმა."
        ],
        [
          "At first, the length of the marathon was not fixed; it was simply around forty kilometres depending on the route chosen by each host city. The odd distance of 42.195 kilometres was established at the 1908 Olympic Games in London. The British organisers started the race underneath the nursery windows of Windsor Castle so the royal children could watch the start, and finished it right in front of the Queen's box at the stadium!",
          "თავდაპირველად მარათონის სიგრძე მკაცრად განსაზღვრული არ იყო; მასპინძელი ქალაქის მიერ შერჩეული მარშრუტის მიხედვით, ის უბრალოდ დაახლოებით ორმოც კილომეტრს შეადგენდა. უცნაური მანძილი — 42,195 კილომეტრი — დამკვიდრდა 1908 წლის ლონდონის ოლიმპიურ თამაშებზე. ბრიტანელმა ორგანიზატორებმა სტარტი დანიშნეს უინძორის სასახლის საბავშვო ოთახის ფანჯრების ქვეშ, რათა სამეფო ოჯახის ბავშვებს დაწყებისთვის ეყურებინათ, ხოლო ფინიში — სტადიონზე ზუსტად დედოფლის ლოჟის წინ!"
        ],
        [
          "In 1921, the International Athletics Federation officially adopted London's 1908 distance as the global standard. Today, top professional marathoners run at an astonishing pace, completing the forty-two kilometres in just over two hours, while amateur runners from all walks of life train for months simply for the pride of crossing the finish line.",
          "1921 წელს მძლეოსნობის საერთაშორისო ფედერაციამ ლონდონის 1908 წლის მანძილი ოფიციალურად დაამტკიცა მსოფლიო სტანდარტად. დღეს უმაღლესი დონის პროფესიონალი მარათონელები გასაოცარი ტემპით დარბიან და ორმოცდაორ კილომეტრს ორ საათსა და რამდენიმე წუთში ფარავენ, ხოლო სხვადასხვა პროფესიის მოყვარული მორბენლები თვეების განმავლობაში ვარჯიშობენ თუნდაც მხოლოდ ფინიშის ხაზის გადაკვეთის სიამაყისთვის."
        ]
      ],
      glossary: [
        "endurance|გამძლეობა / ამტანობა", "outnumbered|რიცხობრივ უმცირესობაში მყოფი", "decisive victory|გადამწყვეტი გამარჯვება",
        "messenger|შიკრიკი / მაცნე", "battlefield|ბრძოლის ველი", "rejoice|სიხარული / ზეიმი",
        "water-carrier|წყლის დამტარებელი", "nursery|საბავშვო ოთახი", "adopt a standard|სტანდარტად მიღება/დამტკიცება", "amateur|მოყვარული (არაპროფესიონალი)"
      ],
      questions: [
        "What is the exact official distance of a modern marathon race?|42.195 kilometres|40.000 kilometres|50.000 kilometres|35.500 kilometres",
        "In what year did the Battle of Marathon take place in ancient Greece?|In 490 BC|In 1896 AD|In 100 AD|In 1908 AD",
        "What was the job of Pheidippides in the ancient Greek legend?|He was a messenger who ran from the battlefield to Athens|He was the king of Sparta|He was a ship builder|He was a chariot driver",
        "Who suggested creating the marathon race for the first modern Olympic Games in 1896?|French historian Michel Bréal|The King of Britain|Spyridon Louis|A Roman emperor",
        "Who won the gold medal in the very first Olympic marathon in Athens in 1896?|A Greek water-carrier named Spyridon Louis|Michel Bréal|An American sprinter|A British soldier",
        "How long did it take Spyridon Louis to win the 1896 Olympic marathon?|Just under three hours|Just over two hours|Five hours|Ninety minutes",
        "At which Olympic Games was the exact distance of 42.195 kilometres first run?|At the 1908 Olympic Games in London|At the 1896 Games in Athens|At the 1924 Games in Paris|At the 1964 Games in Tokyo",
        "Why did the 1908 London marathon start at Windsor Castle and end at the Queen's box?|So the royal children could watch the start and the Queen could see the finish|Because the roads in central London were flooded|Because the stadium was next to Windsor Castle|Because the runners asked for a longer race",
        "When did the International Athletics Federation officially make 42.195 km the global standard?|In 1921|In 1896|In 1960|In 2000",
        "How fast do top professional marathoners complete the race today?|In just over two hours|In under one hour|In four hours|In ninety minutes"
      ]
    },
    {
      num: 38, level: "B1",
      icon: "🐪", genre: "მსოფლიო ისტორია",
      title: "ქარავნები უძველეს აბრეშუმის გზაზე",
      subtitle: "Caravans Along the Ancient Silk Road",
      time: "8 წთ",
      paragraphs: [
        [
          "For more than fifteen hundred years, the greatest trade network in the world was the Silk Road. Despite its name, the Silk Road was not a single paved highway, but a vast web of mountain passes, desert tracks, and sea routes stretching over six thousand kilometres from eastern China across Central Asia to the shores of the Mediterranean Sea.",
          "თხუთმეტი საუკუნის განმავლობაში მსოფლიოს უდიდეს სავაჭრო ქსელს აბრეშუმის გზა წარმოადგენდა. სახელწოდების მიუხედავად, აბრეშუმის გზა არ ყოფილა ერთი მოკირწყლული მაგისტრალი — ეს იყო მთის უღელტეხილების, უდაბნოს ბილიკებისა და საზღვაო მარშრუტების უზარმაზარი ქსელი, რომელიც ექვსი ათას კილომეტრზე მეტ მანძილზე იჭიმებოდა აღმოსავლეთ ჩინეთიდან ცენტრალური აზიის გავლით ხმელთაშუა ზღვის სანაპიროებამდე."
        ],
        [
          "The route got its name from Chinese silk, a fabric so light, soft, and shimmering that Roman nobles were willing to pay its weight in gold. For centuries, the Chinese imperial court kept the method of producing silk from silkworm cocoons a closely guarded state secret; anyone caught smuggling silkworms or mulberry seeds out of the country faced severe punishment.",
          "ამ მარშრუტს სახელი ეწოდა ჩინური აბრეშუმის გამო — ქსოვილისა, რომელიც იმდენად მსუბუქი, რბილი და მბზინავი იყო, რომ რომაელი დიდებულები მზად იყვნენ მის სანაცვლოდ იმავე წონის ოქრო გადაეხადათ. საუკუნეების განმავლობაში ჩინეთის საიმპერატორო კარი აბრეშუმის ჭიის პარკებისგან აბრეშუმის მიღების წესს სახელმწიფო საიდუმლოდ ინახავდა; ნებისმიერს, ვისაც ქვეყნიდან აბრეშუმის ჭიის ან თუთის თესლის გატანაზე დაიჭერდნენ, მკაცრი სასჯელი ელოდა."
        ],
        [
          "Very few merchants ever travelled the entire length of the Silk Road from start to finish. Instead, goods were traded in stages by caravans of up to a hundred Bactrian camels. With two humps and thick winter coats, these camels could carry heavy loads of two hundred kilograms across both freezing mountain plateaus and the burning sands of the Taklamakan Desert.",
          "ძალიან ცოტა ვაჭარს თუ გაუვლია აბრეშუმის გზა თავიდან ბოლომდე. ამის ნაცვლად, საქონელი ეტაპობრივად გადაჰქონდათ ქარავნებს, რომლებშიც ასამდე ორკუზიანი (ბაქტრიული) აქლემი შედიოდა. ორი კუზისა და სქელი ზამთრის ბეწვის წყალობით, ამ აქლემებს შეეძლოთ ორასკილოგრამიანი მძიმე ტვირთის გადატანა როგორც გაყინულ მთის პლატოებზე, ისე ტაკლა-მაკანის უდაბნოს მწველ ქვიშებში."
        ],
        [
          "Along the routes, rulers built fortified roadside inns called 'caravanserais', spaced about a day's journey apart. Behind their high stone walls, exhausted travellers and their camels could rest safely from sandstorms and bandits, find fresh water, cook meals, and exchange news with merchants from Persia, India, Samarkand, and Venice.",
          "გზების გასწვრივ მმართველები აშენებდნენ გამაგრებულ გზისპირა სასტუმროებს — „ქარვასლებს“, რომლებიც ერთმანეთისგან ერთი დღის სავალ მანძილზე იყო დაშორებული. მათი მაღალი ქვის გალავნების მიღმა დაღლილ მოგზაურებსა და მათ აქლემებს შეეძლოთ უსაფრთხოდ დაესვენათ ქვიშის ქარიშხლებისა და ყაჩაღებისგან, ეპოვათ სუფთა წყალი, მოემზადებინათ საკვები და გაეცვალათ ახალი ამბები სპარსეთიდან, ინდოეთიდან, სამარყანდიდან და ვენეციიდან ჩამოსულ ვაჭრებთან."
        ],
        [
          "While silk, porcelain, tea, and paper travelled west, horses, glassware, woollen carpets, olive oil, and spices travelled east. Even more importantly, the Silk Road acted as a bridge for knowledge: astronomy, mathematics, medicine, musical instruments, and the art of papermaking all spread between East and West along these ancient tracks.",
          "სანამ აბრეშუმი, ფაიფური, ჩაი და ქაღალდი დასავლეთისკენ მიედინებოდა, აღმოსავლეთისკენ მიჰქონდათ ცხენები, მინის ნაკეთობები, შალის ხალიჩები, ზეითუნის ზეთი და სანელებლები. კიდევ უფრო მნიშვნელოვანი კი ის იყო, რომ აბრეშუმის გზა ცოდნის ხიდის როლს ასრულებდა: ასტრონომია, მათემატიკა, მედიცინა, მუსიკალური საკრავები და ქაღალდის დამზადების ხელოვნება სწორედ ამ უძველესი ბილიკებით ვრცელდებოდა აღმოსავლეთსა და დასავლეთს შორის."
        ]
      ],
      glossary: [
        "trade network|სავაჭრო ქსელი", "shimmering|მბზინავი / მოელვარე", "silkworm cocoon|აბრეშუმის ჭიის პარკი",
        "smuggle|კონტრაბანდულად (ჩუმად) გატანა", "caravan|ქარავანი", "hump|აქლემის კუზი",
        "plateau|ზეგანი / მთის პლატო", "caravanserai|ქარვასლა (გზისპირა სასტუმრო)", "porcelain|ფაიფური", "glassware|მინის ჭურჭელი/ნაკეთობები"
      ],
      questions: [
        "What was the Silk Road in reality?|A vast network of mountain passes, desert tracks, and sea routes|A single straight paved highway with streetlamps|An underground railway tunnel|A canal dug between China and Rome",
        "How long was the Silk Road from eastern China to the Mediterranean Sea?|Over six thousand kilometres|About five hundred kilometres|One thousand kilometres|Twenty kilometres",
        "Where does silk thread come from?|From the cocoons of silkworms fed on mulberry leaves|From the wool of mountain sheep|From cotton flowers in the desert|From the bark of pine trees",
        "Why did very few merchants travel the entire length of the Silk Road?|Because goods were traded in stages by different caravans along the way|Because it was illegal to cross more than one border|Because camels could only walk for one hour|Because there were no cities along the way",
        "Why were Bactrian camels ideal for Silk Road caravans?|They had two humps and thick coats to survive both freezing mountains and hot deserts|They could swim across deep oceans|They ran faster than racehorses|They didn't need any food for a year",
        "How heavy a load could a Bactrian camel carry?|Around two hundred kilograms|Only twenty kilograms|Two thousand kilograms|Five kilograms",
        "What were 'caravanserais'?|Fortified roadside inns spaced a day's journey apart where merchants rested|Large sailing ships on the Mediterranean|Underground gold mines|Royal palaces in Rome",
        "What goods travelled from East (China) to West along the Silk Road?|Silk, porcelain, tea, and paper|Glassware, olive oil, and horses|Woollen carpets and Roman coins|Potatoes and tomatoes",
        "What goods travelled from West to East along the routes?|Horses, glassware, woollen carpets, olive oil, and spices|Porcelain vases and green tea|Bamboo books and silk robes|Fireworks and compasses",
        "Besides trade goods, what else spread along the Silk Road?|Knowledge of astronomy, mathematics, medicine, music, and papermaking|Modern steam locomotives|Electric telegraph wires|Plastic packaging"
      ]
    },
    {
      num: 39, level: "B1",
      icon: "🌋", genre: "გეოლოგია",
      title: "ვულკანიდან დაბადებული კუნძული სურტსეი",
      subtitle: "Surtsey: The Island Born from Fire and Sea",
      time: "8 წთ",
      paragraphs: [
        [
          "At dawn on the fourteenth of November 1963, the cook of a fishing trawler sailing off the southern coast of Iceland noticed a strange smell of sulphur in the air. Shortly afterwards, the crew saw a giant column of black smoke and steam rising from the cold waves of the Atlantic Ocean. At first, the captain thought another ship was on fire!",
          "1963 წლის 14 ნოემბერს, გამთენიისას, ისლანდიის სამხრეთ სანაპიროსთან მცურავი თევზსაჭერი ტრალერის მზარეულმა ჰაერში გოგირდის უცნაური სუნი იგრძნო. ცოტა ხნის შემდეგ ეკიპაჟმა დაინახა შავი კვამლისა და ორთქლის გიგანტური სვეტი, რომელიც ატლანტის ოკეანის ცივი ტალღებიდან ამოდიოდა. თავიდან კაპიტანს ეგონა, რომ სხვა გემს ცეცხლი ეკიდა!"
        ],
        [
          "When they sailed closer, they realized they were witnessing a rare geological event: an underwater volcano was erupting from the seabed, one hundred and thirty metres below the surface. By the next morning, piles of dark volcanic ash and lava had risen above the waves, forming a brand-new island right before their eyes.",
          "როდესაც უფრო ახლოს მიცურდნენ, მიხვდნენ, რომ იშვიათ გეოლოგიურ მოვლენას შეესწრნენ: წყალქვეშა ვულკანი იფრქვეოდა ზღვის ფსკერიდან, რომელიც ზედაპირიდან ას ოცდაათი მეტრის სიღრმეზე მდებარეობდა. მეორე დილისთვის მუქი ვულკანური ფერფლისა და ლავის გროვები ტალღებს ზემოთ ამოიმართა და მათ თვალწინ სრულიად ახალი კუნძული წარმოქმნა."
        ],
        [
          "The volcanic eruptions continued for three and a half years. Red-hot lava flowed into the icy ocean, cooling into hard basalt rock that protected the new island from being washed away by winter storms. By the time the volcano finally went quiet in June 1967, the island — named Surtsey — covered nearly three square kilometres and rose 170 metres above the sea.",
          "ვულკანური ამოფრქვევები სამნახევარი წლის განმავლობაში გაგრძელდა. გავარვარებული ლავა ყინულივით ცივ ოკეანეში ჩაედინებოდა და მყარ ბაზალტის ქანად ქვავდებოდა, რამაც ახალი კუნძული ზამთრის შტორმებისგან გადარეცხვას გადაარჩინა. როდესაც 1967 წლის ივნისში ვულკანი საბოლოოდ ჩაწყნარდა, კუნძული — რომელსაც სურტსეი დაარქვეს — თითქმის სამ კვადრატულ კილომეტრს იკავებდა და ზღვის დონიდან 170 მეტრზე იყო აღმართული."
        ],
        [
          "Scientists around the world realized that Surtsey offered a unique natural laboratory to study how life begins on barren rock. The Icelandic government immediately declared the island a strict nature reserve and banned tourists from landing there, so that no human would accidentally bring seeds or insects on their boots.",
          "მთელი მსოფლიოს მეცნიერები მიხვდნენ, რომ სურტსეი უნიკალურ ბუნებრივ ლაბორატორიას წარმოადგენდა იმის შესასწავლად, თუ როგორ იწყება სიცოცხლე შიშველ კლდეზე. ისლანდიის მთავრობამ კუნძული დაუყოვნებლივ მკაცრ ნაკრძალად გამოაცხადა და ტურისტებს იქ გადასვლა აუკრძალა, რათა ადამიანებს ფეხსაცმლით შემთხვევით არ შეეტანათ თესლი ან მწერები."
        ],
        [
          "Even without human help, nature quickly found a way. Ocean currents washed ashore the seeds of sea rockets (a hardy coastal plant), which sprouted in the black volcanic sand in 1965. Winds brought mosses and spiders on invisible silk threads, and seagulls soon began nesting on the cliffs, fertilizing the soil and turning the black rock into a green sanctuary of life.",
          "ადამიანის დახმარების გარეშეც კი ბუნებამ სწრაფად იპოვა გზა. ოკეანურმა დინებებმა ნაპირზე გამორიყა ზღვის მდოგვის (გამძლე სანაპირო მცენარის) თესლი, რომელიც 1965 წელს შავ ვულკანურ ქვიშაში აღმოცენდა. ქარმა მოიტანა ხავსები და აბლაბუდის უხილავ ძაფებზე დაკიდებული ობობები, მალე კი კლდეებზე თოლიებმა დაიწყეს ბუდობა, რამაც ნიადაგი გაანოყიერა და შავი კლდე სიცოცხლის მწვანე თავშესაფრად აქცია."
        ]
      ],
      glossary: [
        "fishing trawler|თევზსაჭერი ტრალერი (გემი)", "sulphur|გოგირდი", "erupt|ამოფრქვევა (ვულკანის)",
        "seabed|ზღვის ფსკერი", "volcanic ash|ვულკანური ფერფლი", "basalt rock|ბაზალტის ქანი (კლდე)",
        "barren|უნაყოფო / შიშველი (მიწა)", "ocean current|ოკეანური დინება", "sprout (verb)|აღმოცენება / გაღვივება", "fertilize|განოყიერება (ნიადაგის)"
      ],
      questions: [
        "When and where did the underwater volcanic eruption that created Surtsey begin?|On 14 November 1963, off the southern coast of Iceland|In June 1967, near the coast of Italy|In 1900, in the Pacific Ocean|In 1985, in the Mediterranean Sea",
        "What did the captain of the fishing trawler think at first when he saw the black smoke?|He thought another ship was on fire|He thought a whale was spouting water|He thought a storm cloud was falling|He thought it was a lighthouse",
        "How deep below the surface was the seabed where the volcano began erupting?|One hundred and thirty metres|Eleven thousand metres|Only five metres|Two kilometres",
        "How long did the volcanic eruptions on Surtsey continue?|For three and a half years (until June 1967)|For only one night|For twenty years|For two weeks",
        "What prevented the new island from being washed away by winter storms?|Red-hot lava cooled into hard basalt rock|Engineers built a concrete wall around it|Coral reefs grew around the sand|Icebergs protected the beach",
        "Why did the Icelandic government ban tourists from landing on Surtsey?|So that scientists could study how life begins naturally without humans bringing seeds on their boots|Because the island was full of gold|Because dangerous bears lived there|To build a military airport",
        "How did the seeds of the first coastal plant reach Surtsey in 1965?|They were washed ashore by ocean currents|Scientists planted them in rows|Tourists dropped them from airplanes|Fish carried them onto the rocks",
        "How did tiny spiders arrive on the new island?|Carried by the wind on invisible silk threads|Swimming across the cold sea|Inside wooden supply boxes|On the backs of sea turtles",
        "How did nesting seagulls help more plants grow on the island?|They fertilized the volcanic soil|They watered the plants with their beaks|They broke the basalt rocks into sand|They kept the island warm in winter",
        "How large was the island of Surtsey when the volcano went quiet in 1967?|Nearly three square kilometres and 170 metres high|Fifty square kilometres and one thousand metres high|Only the size of a tennis court|Two hundred square kilometres"
      ]
    },
    {
      num: 40, level: "B1",
      icon: "🍁", genre: "ბოტანიკა",
      title: "რატომ იცვლიან ფოთლები ფერს შემოდგომაზე",
      subtitle: "The Science Behind Autumn Leaves",
      time: "8 წთ",
      paragraphs: [
        [
          "Every autumn, forests across the temperate regions of the world transform from uniform green into a breathtaking tapestry of gold, orange, crimson, and bronze. Many people assume that the cold autumn frost paints the leaves in these new colours, but the truth is much more fascinating: the yellow and orange colours were hiding inside the leaves all summer long!",
          "ყოველ შემოდგომაზე მსოფლიოს ზომიერი სარტყლის ტყეები ერთგვაროვანი მწვანე ფერიდან ოქროსფერ, ნარინჯისფერ, მეწამულ და ბრინჯაოსფერ საოცარ ხალიჩად გარდაიქმნება. ბევრს ჰგონია, რომ ფოთლებს ამ ახალ ფერებში შემოდგომის ცივი ყინვა ღებავს, მაგრამ სიმართლე გაცილებით უფრო საინტერესოა: ყვითელი და ნარინჯისფერი პიგმენტები მთელი ზაფხულის განმავლობაში ფოთლების შიგნით იმალებოდა!"
        ],
        [
          "During spring and summer, leaves act as tiny food factories for the tree. Their cells are packed with a green chemical pigment called chlorophyll. Chlorophyll absorbs energy from sunlight and uses it to turn water and carbon dioxide into sugars that feed the tree — a process known as photosynthesis.",
          "გაზაფხულსა და ზაფხულში ფოთლები ხისთვის პაწაწინა საკვები ქარხნების როლს ასრულებს. მათი უჯრედები სავსეა მწვანე ქიმიური პიგმენტით, რომელსაც ქლოროფილი ეწოდება. ქლოროფილი შთანთქავს მზის სხივების ენერგიას და იყენებს მას წყლისა და ნახშირორჟანგის შაქრებად გარდასაქმნელად, რითაც ხე იკვებება — ამ პროცესს ფოტოსინთეზი ეწოდება."
        ],
        [
          "Because chlorophyll is so abundant and bright green, it completely masks the other natural pigments present in the leaf, such as carotenoids — the exact same yellow and orange pigments that give carrots and corn their colour. All through the summer, these yellow and orange pigments are there, invisible beneath the green.",
          "რადგან ქლოროფილი ასე უხვადაა და ხასხასა მწვანე ფერისაა, ის მთლიანად ფარავს ფოთოლში არსებულ სხვა ბუნებრივ პიგმენტებს, მაგალითად კაროტინოიდებს — ზუსტად იმავე ყვითელ და ნარინჯისფერ პიგმენტებს, რომლებიც სტაფილოსა და სიმინდს აძლევს ფერს. მთელი ზაფხულის განმავლობაში ეს ყვითელი და ნარინჯისფერი პიგმენტები იქვეა, მწვანე ფერის ქვეშ უხილავად დამალული."
        ],
        [
          "When September arrives, the days grow shorter and the nights become cooler. Sensing the change in daylight, the tree prepares for winter by building a thin layer of cork-like cells at the base of each leaf stem. This seal gradually blocks the flow of water and minerals into the leaf, causing the green chlorophyll to break down and disappear.",
          "როდესაც სექტემბერი დგება, დღეები მოკლდება და ღამეები გრილდება. დღის სინათლის ცვლილების შეგრძნებისას ხე ზამთრისთვის მზადებას იწყებს და თითოეული ფოთლის ყუნწის ძირში წარმოქმნის საცობისებური უჯრედების თხელ ფენას. ეს ჩამკეტი ფენა თანდათან წყვეტს ფოთოლში წყლისა და მინერალების მიწოდებას, რის გამოც მწვანე ქლოროფილი იშლება და ქრება."
        ],
        [
          "As the green fades away, the hidden yellows and oranges finally shine through! Meanwhile, in trees like maples and oaks, sugar trapped inside the leaves on sunny autumn days reacts with cool night temperatures to produce brand-new red and purple pigments called anthocyanins. Finally, when the wind blows, the leaves detach cleanly at the cork seal, leaving the tree ready to rest through the winter.",
          "როდესაც მწვანე ფერი ქრება, დამალული ყვითელი და ნარინჯისფერი ფერები საბოლოოდ გამობრწყინდება! ამავდროულად, ისეთ ხეებში, როგორებიცაა ნეკერჩხალი და მუხა, შემოდგომის მზიან დღეებში ფოთლებში ჩარჩენილი შაქარი რეაქციაში შედის ღამის გრილ ტემპერატურასთან და წარმოქმნის სრულიად ახალ წითელ და იისფერ პიგმენტებს — ანთოციანინებს. ბოლოს, ქარის დაბერვისას ფოთლები სუფთად სწყდება ყუნწს, ხე კი მზადაა ზამთრის ძილისთვის."
        ]
      ],
      glossary: [
        "temperate region|ზომიერი კლიმატური სარტყელი", "tapestry|ფერადი ხალიჩა / გობელენი", "pigment|პიგმენტი (საღებავი ნივთიერება)",
        "chlorophyll|ქლოროფილი (მწვანე პიგმენტი)", "carbon dioxide|ნახშირორჟანგი", "photosynthesis|ფოტოსინთეზი",
        "mask (verb)|დაფარვა / შენიღბვა", "leaf stem|ფოთლის ყუნწი", "fade away|გაფერმკრთალება / გაქრობა", "maple tree|ნეკერჩხლის ხე"
      ],
      questions: [
        "Where are the yellow and orange pigments of autumn leaves during the summer?|They are already inside the leaves, hidden beneath the bright green chlorophyll|They are underground in the tree roots|They are created by winter snow|They fall from the sky with autumn rain",
        "What is the name of the green pigment that fills leaves in spring and summer?|Chlorophyll|Carotenoid|Anthocyanin|Oxygen",
        "What does chlorophyll do during photosynthesis?|It absorbs sunlight energy to turn water and carbon dioxide into sugars|It turns the tree bark white|It freezes water inside the trunk|It protects the tree from insects",
        "Which vegetables contain the same carotenoid pigments that make leaves yellow and orange?|Carrots and corn|Potatoes and onions|Cabbage and broccoli|Garlic and mushrooms",
        "What main signal tells a tree that autumn has arrived and winter is coming?|The days growing shorter and the nights becoming cooler|Loud thunder in August|People raking the grass|Birds building nests",
        "How does a tree block the flow of water into a leaf in autumn?|By building a thin layer of cork-like cells at the base of the leaf stem|By dropping all its branches|By freezing its roots|By turning the leaves upside down",
        "Why do the yellow and orange colours finally become visible in autumn?|Because the green chlorophyll breaks down and disappears|Because the sun paints the outside of the leaf|Because the rain washes the green paint off|Because bees bring yellow pollen",
        "How are the bright red and purple pigments (anthocyanins) formed in maple trees?|Sugars trapped in the leaves on sunny days react with cool night temperatures|They are absorbed from red clay soil|They are present in the leaf from early spring|They come from forest fires",
        "Which two types of trees are mentioned as producing bright red pigments in autumn?|Maples and oaks|Pine trees and firs|Palm trees and cacti|Lemon and orange trees",
        "What happens when the autumn wind blows against the sealed leaf stems?|The leaves detach cleanly without hurting the tree|The branches break in half|The leaves turn green again|The tree falls over"
      ]
    },
    {
      num: 41, level: "B1",
      icon: "🌱", genre: "ეკოლოგია და მომავალი",
      title: "მსოფლიო თესლის საცავი არქტიკის ყინულებში",
      subtitle: "The Global Seed Vault in Svalbard",
      time: "8 წთ",
      paragraphs: [
        [
          "High in the Arctic Circle, halfway between the northern coast of Norway and the North Pole, lies the snowy island of Spitsbergen in the Svalbard archipelago. Built deep inside a sandstone mountain on this remote island is one of the most important buildings on Earth: the Svalbard Global Seed Vault.",
          "მაღლა, ჩრდილოეთ პოლარულ წრეში, ნორვეგიის ჩრდილოეთ სანაპიროსა და ჩრდილოეთ პოლუსს შორის შუა გზაზე, მდებარეობს შპიცბერგენის დათოვლილი კუნძული სვალბარდის არქიპელაგში. ამ შორეულ კუნძულზე, ქვიშაქვის მთის სიღრმეში აშენებულია დედამიწის ერთ-ერთი ყველაზე მნიშვნელოვანი ნაგებობა: სვალბარდის მსოფლიო თესლის საცავი."
        ],
        [
          "Around the world, there are more than one thousand seven hundred local 'gene banks' where countries store seeds of their food crops, such as wheat, rice, potatoes, and beans. However, local seed banks can be damaged or destroyed by floods, earthquakes, fires, power failures, or wars, causing unique varieties of plants to be lost forever.",
          "მსოფლიოს გარშემო არსებობს ათას შვიდასზე მეტი ადგილობრივი „გენეტიკური ბანკი“, სადაც ქვეყნები ინახავენ თავიანთი სასოფლო-სამეურნეო კულტურების — ხორბლის, ბრინჯის, კარტოფილისა და ლობიოს — თესლს. თუმცა, ადგილობრივი საცავები შეიძლება დაზიანდეს ან განადგურდეს წყალდიდობის, მიწისძვრის, ხანძრის, ელექტროენერგიის გათიშვის ან ომების შედეგად, რის გამოც მცენარეთა უნიკალური ჯიშები შეიძლება სამუდამოდ დაიკარგოს."
        ],
        [
          "Opened in 2008 by the Norwegian government and international agricultural organizations, the Svalbard Vault acts as a global backup system — like an external hard drive for the planet's agriculture. Countries from all over the world send duplicate copies of their most valuable seeds to be kept safe inside the mountain.",
          "2008 წელს ნორვეგიის მთავრობისა და საერთაშორისო სასოფლო-სამეურნეო ორგანიზაციების მიერ გახსნილი სვალბარდის საცავი მსოფლიო სარეზერვო სისტემის როლს ასრულებს — ის ჰგავს პლანეტის სოფლის მეურნეობის გარე მყარ დისკს. მსოფლიოს ყველა კუთხის ქვეყნები აქ აგზავნიან თავიანთი ყველაზე ძვირფასი თესლის სარეზერვო ასლებს მთის სიღრმეში უსაფრთხოდ შესანახად."
        ],
        [
          "Engineers chose Svalbard for several clever reasons. The island is geologically stable with almost no earthquakes, and it stands 130 metres above sea level, so it will remain dry even if polar ice caps melt. Most importantly, the mountain rock is permanently frozen (permafrost). Even if the electric cooling systems failed, the natural permafrost would keep the seeds frozen for decades!",
          "ინჟინრებმა სვალბარდი რამდენიმე ჭკვიანური მიზეზის გამო შეარჩიეს. კუნძული გეოლოგიურად სტაბილურია და იქ მიწისძვრები თითქმის არ ხდება; ამასთან, ის ზღვის დონიდან 130 მეტრის სიმაღლეზე მდებარეობს, ამიტომ პოლარული ყინულების დნობის შემთხვევაშიც კი მშრალი დარჩება. რაც მთავარია, მთის ქანი მუდმივად გაყინულია (მარადიული მზრალობა). ელექტრული გაგრილების სისტემა რომც გამოირთოს, ბუნებრივი ყინვა თესლს ათწლეულების განმავლობაში გაყინულს შეინარჩუნებს!"
        ],
        [
          "Inside the three underground vaults, the temperature is kept at minus eighteen degrees Celsius. More than one million seed samples are sealed inside special four-layer aluminium foil packets to keep out moisture, and stored in labelled boxes on tall shelves. Each country still owns the seeds it deposits, ensuring that future generations will always have the crops needed to feed the world.",
          "მიწისქვეშა სამ დარბაზში ტემპერატურა მინუს თვრამეტ გრადუს ცელსიუსზე ნარჩუნდება. მილიონზე მეტი თესლის ნიმუში სინესტისგან დასაცავად დალუქულია ოთხფენიან ალუმინის ფოლგის პაკეტებში და მაღალ თაროებზე დანომრილ ყუთებში ინახება. თითოეული ქვეყანა რჩება მის მიერ შენახული თესლის მესაკუთრედ, რაც იძლევა გარანტიას, რომ მომავალ თაობებს ყოველთვის ექნებათ კაცობრიობის გამოსაკვებად საჭირო კულტურები."
        ]
      ],
      glossary: [
        "archipelago|არქიპელაგი (კუნძულთა ჯგუფი)", "sandstone|ქვიშაქვა", "seed vault|თესლის საცავი",
        "food crop|სასოფლო-სამეურნეო (საკვები) კულტურა", "variety|ჯიში / სახესხვაობა", "duplicate copy|სარეზერვო ასლი / დუბლიკატი",
        "permafrost|მარადიული მზრალობა (მუდმივად გაყინული გრუნტი)", "aluminium foil|ალუმინის ფოლგა", "moisture|სინესტე / ტენი", "future generations|მომავალი თაობები"
      ],
      questions: [
        "Where is the Svalbard Global Seed Vault located?|Deep inside a sandstone mountain on Spitsbergen island, between Norway and the North Pole|At the bottom of the Atlantic Ocean|In the desert of Australia|On top of the Swiss Alps",
        "How many local 'gene banks' exist around the world?|More than one thousand seven hundred|Only three|About fifty|Ten thousand",
        "What threats can damage or destroy local seed banks in different countries?|Floods, earthquakes, fires, power failures, or wars|Too many visitors taking photos|Cold winter winds|Scientists reading books",
        "In what year was the Svalbard Global Seed Vault officially opened?|In 2008|In 1960|In 1921|In 1885",
        "Why is the vault built 130 metres above sea level?|So that it will remain dry even if polar ice caps melt|To be closer to airplanes|Because the beach is too crowded|To catch more sunlight",
        "What happens if the electric cooling systems inside the vault stop working?|The natural permafrost of the mountain rock keeps the seeds frozen|All the seeds sprout within an hour|The mountain melts immediately|Workers bring snow in buckets",
        "What temperature is maintained inside the three underground vaults?|Minus eighteen degrees Celsius|Plus twenty degrees Celsius|Zero degrees Celsius|Minus one hundred degrees",
        "How are the seeds packaged to keep out moisture?|Sealed inside special four-layer aluminium foil packets|In open wooden baskets|In paper envelopes|In glass bottles filled with water",
        "How many seed samples are currently stored inside the Svalbard Vault?|More than one million seed samples|About five hundred samples|Ten thousand samples|Fifty samples",
        "Who owns the seeds that are placed inside the vault?|Each country that deposits them retains ownership|Only the Norwegian king|Private supermarkets|Airline companies"
      ]
    },
    {
      num: 42, level: "B1",
      icon: "🔬", genre: "მედიცინის ისტორია",
      title: "პენიცილინის შემთხვევითი აღმოჩენა",
      subtitle: "The Accidental Discovery That Saved Millions",
      time: "8 წთ",
      paragraphs: [
        [
          "Before the 1940s, a tiny scratch from a rose thorn or a minor throat infection could easily become a life-threatening illness. Doctors had no effective medicine to fight harmful bacteria inside the human body. The discovery of the first antibiotic — penicillin — changed medicine forever, and it began with a messy laboratory desk and a bit of luck.",
          "1940-იან წლებამდე ვარდის ეკლით მიყენებული პაწაწინა ნაკაწრი ან ყელის მსუბუქი ინფექციაც კი შეიძლება ადვილად ქცეულიყო სიცოცხლისთვის საშიშ დაავადებად. ექიმებს არ ჰქონდათ ეფექტიანი წამალი ადამიანის ორგანიზმში მავნე ბაქტერიებთან საბრძოლველად. პირველი ანტიბიოტიკის — პენიცილინის — აღმოჩენამ მედიცინა სამუდამოდ შეცვალა, და ყველაფერი დაიწყო ლაბორატორიის არეული მაგიდითა და მცირეოდენი იღბლით."
        ],
        [
          "In August 1928, a Scottish bacteriologist named Alexander Fleming was studying dangerous bacteria at St Mary's Hospital in London. Before leaving the city for a two-week summer holiday with his family, Fleming stacked several glass Petri dishes containing bacteria cultures in a corner of his laboratory bench.",
          "1928 წლის აგვისტოში შოტლანდიელი ბაქტერიოლოგი ალექსანდრე ფლემინგი ლონდონის წმინდა მარიამის საავადმყოფოში სახიფათო ბაქტერიებს იკვლევდა. ოჯახთან ერთად ორკვირიან საზაფხულო შვებულებაში წასვლამდე ფლემინგმა ბაქტერიული კულტურებით სავსე რამდენიმე მინის პეტრის ჯამი ლაბორატორიის მაგიდის კუთხეში ერთმანეთზე დააწყო."
        ],
        [
          "When Fleming returned in September, he began sorting through the dishes to wash them. Suddenly, he noticed something unusual on one dish whose lid had been left slightly open. A small spot of blue-green mould — similar to the mould that grows on old bread — had landed on the dish. Around the mould, there was a clear ring where all the harmful bacteria had been completely dissolved!",
          "როდესაც ფლემინგი სექტემბერში დაბრუნდა, გასარეცხად ჯამების გადარჩევა დაიწყო. უეცრად მან ერთ ჯამზე, რომლის თავსახურიც ოდნავ ღია დარჩენილიყო, უჩვეულო რამ შეამჩნია. ჯამზე მოხვედრილიყო მოლურჯო-მომწვანო ობის პატარა ლაქა — ისეთივე ობისა, როგორიც ძველ პურზე ჩნდება. ობის გარშემო კი იყო სუფთა რგოლი, სადაც ყველა მავნე ბაქტერია სრულად გამქრალიყო!"
        ],
        [
          "Instead of throwing the contaminated dish away, Fleming looked closely and said his famous words: 'That's funny.' He realized that the mould, called Penicillium notatum, was producing a natural chemical substance that killed the bacteria. He named this substance 'penicillin'.",
          "დაბინძურებული ჯამის გადაგდების ნაცვლად, ფლემინგი მას დააკვირდა და წარმოთქვა თავისი ცნობილი სიტყვები: „უცნაურია“. ის მიხვდა, რომ ობი, სახელწოდებით Penicillium notatum, გამოყოფდა ბუნებრივ ქიმიურ ნივთიერებას, რომელიც ბაქტერიებს ხოცავდა. მან ამ ნივთიერებას „პენიცილინი“ დაარქვა."
        ],
        [
          "However, extracting pure penicillin from the mould liquid proved extremely difficult for Fleming. Ten years later, a team of scientists at Oxford University led by Howard Florey and Ernst Chain read Fleming's paper and found a way to purify and mass-produce the medicine. In 1945, Fleming, Florey, and Chain shared the Nobel Prize, and their work has saved hundreds of millions of lives worldwide.",
          "თუმცა, ობის სითხიდან სუფთა პენიცილინის გამოყოფა ფლემინგისთვის უაღრესად რთული აღმოჩნდა. ათი წლის შემდეგ ოქსფორდის უნივერსიტეტის მეცნიერთა გუნდმა ჰოვარდ ფლორისა და ერნსტ ჩეინის ხელმძღვანელობით წაიკითხა ფლემინგის სტატია და იპოვა წამლის გასუფთავებისა და მასობრივი წარმოების გზა. 1945 წელს ფლემინგმა, ფლორიმ და ჩეინმა ნობელის პრემია გაიზიარეს, მათმა შრომამ კი მსოფლიოში ასობით მილიონი ადამიანის სიცოცხლე იხსნა."
        ]
      ],
      glossary: [
        "rose thorn|ვარდის ეკალი", "life-threatening|სიცოცხლისთვის საშიში", "bacteria|ბაქტერია",
        "Petri dish|პეტრის ჯამი (ლაბორატორიული მინის ჭურჭელი)", "lid|თავსახური", "mould (mold)|ობი / სოკოვანი ნადები",
        "contaminated|დაბინძურებული (უცხო ნივთიერებით)", "substance|ნივთიერება", "purify|გასუფთავება / გაწმენდა", "mass-produce|მასობრივად წარმოება"
      ],
      questions: [
        "Why could a tiny scratch from a rose thorn be dangerous before the 1940s?|Because doctors had no effective medicine (antibiotics) to fight bacterial infections|Because roses were poisonous in the past|Because hospitals had no bandages|Because people didn't wash their hands with water",
        "Where was Alexander Fleming working in August 1928?|At St Mary's Hospital in London|At a pharmacy in Edinburgh|At a hospital in Paris|At a factory in New York",
        "What did Fleming leave stacked in a corner of his lab bench before going on holiday?|Several glass Petri dishes containing bacteria cultures|Open bottles of milk and honey|Stacks of medical textbooks|Slices of old bread",
        "What had landed on one of the Petri dishes while Fleming was away?|A small spot of blue-green mould|A dead honeybee|Drops of rain from the roof|Dust from the street",
        "What did Fleming notice in the clear ring around the spot of mould?|All the harmful bacteria around the mould had been dissolved|The bacteria had grown twice as large|The glass dish had cracked|The mould had turned into gold",
        "What was the scientific name of the mould that produced penicillin?|Penicillium notatum|Sakura blossom|Magnetite|Chlorophyll",
        "Why didn't penicillin become a widely used medicine immediately in 1928?|Because extracting and purifying penicillin from the mould liquid was extremely difficult|Because Fleming kept the discovery a secret|Because nobody believed bacteria caused illness|Because the hospital burned down",
        "At which university did Howard Florey and Ernst Chain find a way to purify penicillin?|At Oxford University|At Cambridge University|At the University of Vienna|At Harvard University",
        "When did Florey and Chain begin developing Fleming's discovery into a practical drug?|Ten years after Fleming's 1928 discovery|Fifty years later|The very next day|In 1900",
        "What honour did Fleming, Florey, and Chain share in 1945?|The Nobel Prize|The Olympic gold medal|A royal castle in Scotland|The presidency of the university"
      ]
    },
    {
      num: 43, level: "B1",
      icon: "🏛️", genre: "არქიტექტურა",
      title: "როგორ აშენდა ვენეცია წყალსა და ხის ხიმინჯებზე",
      subtitle: "How Venice Was Built on an Underwater Forest",
      time: "8 წთ",
      paragraphs: [
        [
          "With its marble palaces, grand churches, and stone bridges rising directly out of the water, Venice looks like a floating miracle. However, the most astonishing secret of this Italian city lies hidden beneath the muddy floor of its lagoon: the heavy stone buildings of Venice are actually standing on millions of wooden tree trunks!",
          "წყლიდან პირდაპირ აღმართული მარმარილოს სასახლეებით, დიდებული ტაძრებითა და ქვის ხიდებით ვენეცია მცურავ საოცრებას ჰგავს. თუმცა, ამ იტალიური ქალაქის ყველაზე გასაოცარი საიდუმლო მისი ლაგუნის ლამიანი ფსკერის ქვეშ იმალება: ვენეციის მძიმე ქვის შენობები სინამდვილეში მილიონობით ხის მორზე დგას!"
        ],
        [
          "Over fifteen hundred years ago, when invading armies marched across northern Italy, local residents fled from the mainland to a group of muddy, marshy islands in the shallow Adriatic lagoon. The lagoon protected them from enemies on horseback, but the soft mud and sand could not support the weight of stone houses.",
          "თხუთმეტი საუკუნის წინ, როდესაც დამპყრობელთა არმიები ჩრდილოეთ იტალიას შეესივნენ, ადგილობრივი მცხოვრებლები მატერიკიდან ადრიატიკის თავთხელ ლაგუნაში მდებარე ტალახიან, ჭაობიან კუნძულებზე გაიქცნენ. ლაგუნა მათ ცხენოსანი მტრებისგან იცავდა, მაგრამ რბილი შლამი და ქვიშა ქვის სახლების სიმძიმეს ვერ უძლებდა."
        ],
        [
          "To solve this problem, Venetian builders developed an ingenious engineering method. They brought millions of long, straight trunks of oak, alder, and larch trees from the forests of the Alps and the eastern Adriatic coast. Using heavy hammers, workers drove these wooden piles four to five metres deep into the mud until they reached a hard layer of compressed clay called 'caranto'.",
          "ამ პრობლემის გადასაჭრელად ვენეციელმა მშენებლებმა მახვილგონივრული საინჟინრო მეთოდი შეიმუშავეს. მათ ალპებისა და ადრიატიკის აღმოსავლეთ სანაპიროს ტყეებიდან ჩამოიტანეს მუხის, მურყნისა და ლარიქსის მილიონობით გრძელი, სწორი მორი. მძიმე უროების გამოყენებით მუშები ამ ხის ხიმინჯებს ოთხი-ხუთი მეტრის სიღრმეზე არჭობდნენ შლამში, სანამ არ მიაღწევდნენ დაწნეხილი თიხის მყარ ფენას, რომელსაც „კარანტო“ ეწოდება."
        ],
        [
          "The wooden piles were packed tightly together — for example, more than ten thousand oak trunks were driven into the mud just to support the famous Rialto Bridge! Once the tops of the wooden piles were sawed off level underwater, builders laid thick planks of wood and waterproof Istrian limestone on top, and then built the brick and marble palaces above the water.",
          "ხის ხიმინჯებს მჭიდროდ, ერთმანეთის გვერდიგვერდ ასობდნენ — მაგალითად, მხოლოდ ცნობილი რიალტოს ხიდის საყრდენად შლამში ათი ათასზე მეტი მუხის მორი ჩაარჭვეს! მას შემდეგ, რაც ხის ხიმინჯების წვერებს წყლის ქვეშ თანაბრად გადახერხავდნენ, მშენებლები ზემოდან აწყობდნენ სქელ ხის ფიცრებსა და წყალგაუმტარ ისტრიულ კირქვას, ხოლო შემდეგ წყლის ზემოთ აშენებდნენ აგურისა და მარმარილოს სასახლეებს."
        ],
        [
          "Why haven't these wooden trunks rotted away after sitting in water for a thousand years? The answer is simple science: wood only rots when fungi and bacteria have oxygen. Because the trunks are buried deep in airless mud and constantly washed by mineral-rich salt water, the wood has absorbed minerals over the centuries and slowly turned almost as hard as stone!",
          "რატომ არ დალპა ეს ხის მორები წყალში ათასწლიანი ყოფნის შემდეგ? პასუხი მარტივ მეცნიერებაშია: ხე მხოლოდ მაშინ ლპება, როცა სოკოებსა და ბაქტერიებს ჟანგბადი მიეწოდებათ. რადგან მორები ღრმად არის ჩაფლული უჟანგბადო ლამში და მუდმივად ირეცხება მინერალებით მდიდარი მლაშე წყლით, საუკუნეების განმავლობაში ხემ შეიწოვა მინერალები და ნელ-ნელა თითქმის ქვასავით გამაგრდა!"
        ]
      ],
      glossary: [
        "lagoon|ლაგუნა (ზღვის თავთხელი ყურე)", "marshy|ჭაობიანი", "ingenious|მახვილგონივრული / ჭკვიანური",
        "tree trunk|ხის ტანი / მორი", "wooden pile|ხის ხიმინჯი (საყრდენი ბოძი)", "compressed clay|დაწნეხილი (მკვრივი) თიხა",
        "limestone|კირქვა", "rot (verb)|დალპობა / გახრწნა", "airless|უჰაერო / უჟანგბადო", "mineral-rich|მინერალებით მდიდარი"
      ],
      questions: [
        "What are the heavy stone palaces and churches of Venice actually standing on?|On millions of wooden tree trunks driven into the mud|On natural granite mountains|On giant steel pontoons|On floating rubber rafts",
        "Why did mainland residents flee to the muddy islands of the lagoon over 1,500 years ago?|To escape invading armies marching across northern Italy|To look for gold in the mud|Because the mainland was covered in ice|To catch giant whales",
        "Why couldn't the early settlers simply build stone houses directly on the islands?|Because the soft mud and sand could not support the heavy weight|Because there were no stones in Italy|Because the king forbade stone houses|Because the wind was too strong",
        "Where did Venetian builders bring the millions of oak, alder, and larch trunks from?|From the forests of the Alps and the eastern Adriatic coast|From the deserts of Africa|From South America|From the bottom of the sea",
        "How deep into the mud did workers drive the wooden piles?|Four to five metres deep until they reached hard compressed clay|Only ten centimetres deep|One hundred metres deep|Fifty metres deep",
        "How many oak trunks were driven into the mud just to support the Rialto Bridge?|More than ten thousand oak trunks|Only twenty trunks|About one hundred trunks|Five hundred trunks",
        "What stone did builders place on top of the underwater wooden platforms?|Waterproof Istrian limestone|Soft red brick|Volcanic ash|White chalk",
        "What do fungi and bacteria need in order to make wood rot?|Oxygen (air)|Salt water|Darkness|Cold temperatures",
        "Why haven't the wooden piles beneath Venice rotted after a thousand years?|Because they are buried deep in airless mud with no oxygen|Because workers paint them every year|Because they are made of plastic|Because the lagoon water is boiling hot",
        "How has the mineral-rich salt water affected the buried wood over the centuries?|The wood has absorbed minerals and turned almost as hard as stone|The wood has become soft like paper|The wood has floated to the surface|The wood has turned into glass"
      ]
    },
    {
      num: 44, level: "B1",
      icon: "🐋", genre: "საზღვაო ბიოლოგია",
      title: "როგორ ურთიერთობენ ვეშაპები და დელფინები",
      subtitle: "The Complex Language of Whales and Dolphins",
      time: "8 წთ",
      paragraphs: [
        [
          "To human ears, the ocean beneath the waves seems like a silent world. In reality, the sea is filled with a rich symphony of clicks, whistles, pulses, and deep songs. Because light fades quickly underwater and smell travels slowly, marine mammals such as whales and dolphins rely on sound, which travels four and a half times faster in water than in air!",
          "ადამიანის ყურისთვის ტალღების ქვეშ მოქცეული ოკეანე მდუმარე სამყაროდ ჩანს. სინამდვილეში კი ზღვა სავსეა ტკაცუნის, სტვენის, იმპულსებისა და ღრმა სიმღერების მდიდარი სიმფონიით. რადგან წყლის ქვეშ სინათლე სწრაფად ქრება და სუნიც ნელა ვრცელდება, ზღვის ძუძუმწოვრები — ვეშაპები და დელფინები — ეყრდნობიან ბგერას, რომელიც წყალში ჰაერთან შედარებით ოთხნახევარჯერ უფრო სწრაფად ვრცელდება!"
        ],
        [
          "Dolphins are highly social animals that live in groups called pods. To hunt together in dark or muddy water, they use a biological sonar system known as echolocation. A dolphin produces rapid clicking sounds inside its nasal passages and focuses them through its forehead. When the sound waves hit a fish or a rock, the echo bounces back, allowing the dolphin's brain to 'see' the size, shape, and distance of the object.",
          "დელფინები მაღალსოციალური ცხოველები არიან, რომლებიც ჯგუფებად (გუნდებად) ცხოვრობენ. ბნელ ან მღვრიე წყალში ერთობლივი ნადირობისთვის ისინი იყენებენ ბიოლოგიურ სონარულ სისტემას — ექოლოკაციას. დელფინი ცხვირის ღრუში გამოსცემს სწრაფ მტკაცუნებელ ბგერებს და შუბლის გავლით მიმართავს მათ წინ. როდესაც ბგერითი ტალღა თევზს ან კლდეს ეჯახება, ექო უკან ბრუნდება, რაც დელფინის ტვინს საშუალებას აძლევს „დაინახოს“ ობიექტის ზომა, ფორმა და მანძილი."
        ],
        [
          "Even more remarkably, marine biologists have discovered that every bottlenose dolphin develops its own unique 'signature whistle' during the first few months of its life. This whistle acts just like a human name! Dolphins use these signature whistles to call out to specific family members and to introduce themselves when two pods meet in the open sea.",
          "კიდევ უფრო გასაოცარია ის, რომ საზღვაო ბიოლოგების აღმოჩენით, თითოეული დელფინი სიცოცხლის პირველსავე თვეებში იყალიბებს საკუთარ უნიკალურ „საფირმო სტვენას“. ეს სტვენა ზუსტად ისე მუშაობს, როგორც ადამიანის სახელი! დელფინები ამ ინდივიდუალურ სტვენას იყენებენ ოჯახის კონკრეტული წევრის დასაძახებლად და საკუთარი თავის წარსადგენად, როდესაც ღია ზღვაში ორი გუნდი ხვდება ერთმანეთს."
        ],
        [
          "Meanwhile, male humpback whales are the composers of the ocean. During the winter breeding season, they sing complex songs made of low rumbles and high cries that can last for thirty minutes and be heard by other whales hundreds of kilometres away. All the males in the same ocean basin sing the exact same song, and each year they gradually add new musical phrases to the melody.",
          "ამავდროულად, მამრი კუზიანი ვეშაპები ოკეანის კომპოზიტორები არიან. ზამთრის გამრავლების სეზონზე ისინი ასრულებენ დაბალი გუგუნისა და მაღალი შეძახილებისგან შემდგარ რთულ სიმღერებს, რომლებიც შეიძლება ოცდაათ წუთს გაგრძელდეს და სხვა ვეშაპებმა ასობით კილომეტრის მანძილზე გაიგონონ. ერთსა და იმავე ოკეანურ აუზში მცხოვრები ყველა მამრი ზუსტად ერთსა და იმავე სიმღერას მღერის, და ყოველწლიურად ისინი მელოდიას თანდათან ახალ მუსიკალურ ფრაზებს უმატებენ."
        ],
        [
          "In recent decades, scientists have raised concerns that loud noise from cargo ship engines and underwater construction is making the ocean too noisy. This noise pollution drowns out whale songs and makes it harder for mothers and calves to stay in touch, prompting international ports to design quieter ship propellers to protect marine life.",
          "ბოლო ათწლეულებში მეცნიერებმა გამოთქვეს წუხილი იმის გამო, რომ სატვირთო გემების ძრავებისა და წყალქვეშა მშენებლობების ხმაური ოკეანეს ზედმეტად ხმაურიანს ხდის. ეს ხმაურით დაბინძურება ახშობს ვეშაპების სიმღერებს და ართულებს დედებსა და ნაშიერებს შორის კავშირის შენარჩუნებას, რამაც საერთაშორისო პორტებს უბიძგა, ზღვის ბინადართა დასაცავად შეექმნათ გემის უფრო ჩუმი ხრახნები."
        ]
      ],
      glossary: [
        "marine mammal|ზღვის ძუძუმწოვარი", "pod|ვეშაპების ან დელფინების გუნდი", "echolocation|ექოლოკაცია (ბგერით ორიენტირება)",
        "bounce back|უკან არეკვლა / დაბრუნება", "signature whistle|ინდივიდუალური (სახელობითი) სტვენა", "humpback whale|კუზიანი ვეშაპი",
        "ocean basin|ოკეანური აუზი", "noise pollution|ხმაურით დაბინძურება", "drown out (sound)|ხმის გადაფარვა / ჩახშობა", "calf|ვეშაპის ან დელფინის ნაშიერი"
      ],
      questions: [
        "How much faster does sound travel in water compared to air?|Four and a half times faster|Twice as fast|Ten times slower|At the exact same speed",
        "Why do whales and dolphins rely primarily on sound rather than sight or smell?|Because light fades quickly underwater and smell travels slowly|Because they have no eyes|Because the ocean water has no smell at all|Because they only swim at midnight",
        "What is a group of dolphins called?|A pod|A pack|A swarm|A herd",
        "How does a dolphin's echolocation system work?|It sends out clicking sounds and listens to the echoes bouncing back from objects|It shines a light from its eyes into the dark water|It feels electric waves with its tail|It smells fish from five kilometres away",
        "What is a dolphin's 'signature whistle' used for?|It acts like a personal name to call family members and introduce itself|To scare away sharks|To stun small fish|To warn ships about rocks",
        "When does a bottlenose dolphin develop its unique signature whistle?|During the first few months of its life|When it turns twenty years old|Only when it is sick|Never",
        "How long can a single song sung by a male humpback whale last?|Up to thirty minutes|Only five seconds|Three days without stopping|One minute",
        "What is remarkable about the songs of male humpback whales living in the same ocean basin?|They all sing the exact same song and gradually add new phrases each year|Every whale sings a completely different song that never changes|They only sing when they are on the beach|They copy the songs of seagulls",
        "How far away can other whales hear a humpback whale's low song?|Hundreds of kilometres away|Only ten metres away|One kilometre away|Only inside a cave",
        "Why are international ports designing quieter ship propellers?|Because loud engine noise drowns out whale songs and separates mothers and calves|To make ships sail twice as fast|To save paint on the ship hulls|Because sailors cannot sleep"
      ]
    },
    {
      num: 45, level: "B1",
      icon: "⏳", genre: "მეცნიერება და დრო",
      title: "დროის გაზომვა: მზის საათიდან ატომურ საათამდე",
      subtitle: "Measuring Time: From Ancient Sundials to Atomic Clocks",
      time: "8 წთ",
      paragraphs: [
        [
          "For thousands of years, human beings had no need for minutes or seconds; the natural cycles of the sun, the moon, and the seasons were enough to guide farming and daily life. The earliest timekeeping device was the sundial, used in ancient Egypt and Babylon around 1500 BC. As the sun moved across the sky, a vertical stick cast a shadow onto a stone dial marked with hours.",
          "ათასობით წლის განმავლობაში ადამიანებს წუთებისა და წამების საჭიროება არ ჰქონდათ; მზის, მთვარისა და წელიწადის დროების ბუნებრივი ციკლები სრულიად საკმარისი იყო მიწათმოქმედებისა და ყოველდღიური ცხოვრების წარსამართავად. დროის გასაზომი უძველესი ხელსაწყო იყო მზის საათი, რომელსაც ძველ ეგვიპტესა და ბაბილონში ძვ. წ. 1500 წლისთვის იყენებდნენ. ცაზე მზის მოძრაობისას ვერტიკალური ჯოხი ჩრდილს აყენებდა საათებით დაყოფილ ქვის ციფერბლატზე."
        ],
        [
          "However, sundials were useless at night and on cloudy days. To measure time in the dark, ancient civilizations invented water clocks, where water dripped at a steady rate from one stone vessel into another, and hourglasses filled with fine sand. In medieval Europe, people also used marked candles that burned down by one line every hour.",
          "თუმცა, მზის საათები გამოუსადეგარი იყო ღამით და მოღრუბლულ დღეებში. სიბნელეში დროის გასაზომად უძველესმა ცივილიზაციებმა გამოიგონეს წყლის საათები, სადაც წყალი თანაბარი სიჩქარით წვეთავდა ერთი ქვის ჭურჭლიდან მეორეში, და წვრილი ქვიშით სავსე ქვიშის საათები. შუა საუკუნეების ევროპაში ასევე იყენებდნენ დახაზულ სანთლებს, რომლებიც ყოველ ერთ საათში ერთი ნიშნულით იწვებოდა."
        ],
        [
          "The first mechanical clocks appeared in European church towers in the fourteenth century, driven by heavy falling iron weights. Although impressive, these early tower clocks had no minute hand and often lost fifteen minutes a day! A major breakthrough came in 1656, when Dutch scientist Christiaan Huygens built the first pendulum clock, using a swinging weight to reduce the daily error to less than ten seconds.",
          "პირველი მექანიკური საათები მეოთხე საუკუნეში გამოჩნდა ევროპის ეკლესიების სამრეკლოებზე და მათ მძიმე დაშვებადი რკინის საწონები ამოძრავებდა. შთამბეჭდავი გარეგნობის მიუხედავად, ამ ადრეულ კოშკის საათებს წუთების ისარი არ ჰქონდა და დღეში ხშირად თხუთმეტ წუთს ცდებოდა! დიდი გარღვევა მოხდა 1656 წელს, როდესაც ჰოლანდიელმა მეცნიერმა ქრისტიან ჰიუიგენსმა ააგო პირველი ქანქარიანი საათი, რომელშიც მოქანავე საწონმა დღიური ცდომილება ათ წამზე ნაკლებამდე შეამცირა."
        ],
        [
          "At sea, pendulum clocks did not work because the rocking of the waves disturbed the swinging pendulum. Without knowing the exact time, sailors could not calculate their longitude (east-west position) and often crashed into rocks. In the 1760s, a self-taught English carpenter named John Harrison solved this problem by inventing the 'marine chronometer' — a pocket-sized clock with a coiled spring that kept accurate time on rolling ships.",
          "ზღვაზე ქანქარიანი საათები არ მუშაობდა, რადგან ტალღების რყევა ქანქარის მოძრაობას არღვევდა. ზუსტი დროის ცოდნის გარეშე კი მეზღვაურები ვერ ითვლიდნენ გრძედს (აღმოსავლეთ-დასავლეთის მდებარეობას) და ხშირად კლდეებს ეჯახებოდნენ. 1760-იან წლებში თვითნასწავლმა ინგლისელმა დურგალმა ჯონ ჰარისონმა გადაჭრა ეს პრობლემა და გამოიგონა „საზღვაო ქრონომეტრი“ — ჯიბის ზომის ზამბარიანი საათი, რომელიც მოძრავ გემზეც კი ზუსტ დროს ინარჩუნებდა."
        ],
        [
          "In the twentieth century, quartz crystal watches and finally atomic clocks revolutionized timekeeping. Modern atomic clocks measure the natural vibrations of cesium atoms — which vibrate more than nine billion times every second! They are so accurate that they would not gain or lose a single second in one hundred million years, making technologies like GPS satellite navigation and the internet possible.",
          "მეოცე საუკუნეში კვარცის კრისტალის საათებმა და საბოლოოდ ატომურმა საათებმა დროის აღრიცხვაში ნამდვილი რევოლუცია მოახდინა. თანამედროვე ატომური საათები ზომავს ცეზიუმის ატომების ბუნებრივ რხევას, რომლებიც ყოველ წამში ცხრა მილიარდზე მეტჯერ ირხევა! ისინი იმდენად ზუსტია, რომ ას მილიონ წელიწადში ერთ წამსაც კი არ დაკარგავს, რაც შესაძლებელს ხდის ისეთ ტექნოლოგიებს, როგორებიცაა GPS თანამგზავრული ნავიგაცია და ინტერნეტი."
        ]
      ],
      glossary: [
        "sundial|მზის საათი", "cast a shadow|ჩრდილის დაყენება/მიყენება", "hourglass|ქვიშის საათი",
        "pendulum|ქანქარა", "rocking of the waves|ტალღების რყევა", "longitude|გეოგრაფიული გრძედი",
        "self-taught|თვითნასწავლი", "marine chronometer|საზღვაო ქრონომეტრი (ზუსტი საათი)", "coiled spring|დახვეული ზამბარა", "atomic clock|ატომური საათი"
      ],
      questions: [
        "What was the earliest timekeeping device used in ancient Egypt and Babylon around 1500 BC?|The sundial|The pendulum clock|The marine chronometer|The quartz watch",
        "What was the main limitation of ancient sundials?|They were useless at night and on cloudy days|They were too heavy to keep outdoors|They melted in the summer sun|They only worked in winter",
        "What three devices did people use before mechanical clocks to measure time in the dark?|Water clocks, sand hourglasses, and marked candles|Pendulums, springs, and batteries|Telescopes, compasses, and maps|Steam engines and bells",
        "How accurate were the early fourteenth-century mechanical tower clocks?|They had no minute hand and often lost fifteen minutes a day|They lost only one second a year|They were as accurate as atomic clocks|They only worked for ten minutes",
        "Who built the first pendulum clock in 1656, reducing daily error to under ten seconds?|Dutch scientist Christiaan Huygens|English carpenter John Harrison|Italian astronomer Galileo|A Babylonian king",
        "Why didn't pendulum clocks work on ships at sea?|Because the rocking of the waves disturbed the swinging pendulum|Because the salt air rusted the stone weights|Because sailors forgot to wind them|Because pendulums only work on mountains",
        "Why did sailors desperately need an accurate clock at sea?|To calculate their longitude (east-west position) and avoid crashing into rocks|To know what time to eat lunch|To measure the depth of the water|To predict when it would rain",
        "What was the profession of John Harrison, who invented the marine chronometer in the 1760s?|He was a self-taught carpenter|He was a navy admiral|He was a university mathematics professor|He was a blacksmith",
        "What did John Harrison's marine chronometer use instead of a swinging pendulum?|A coiled spring|Dripping water|Falling iron weights|Sunlight",
        "How accurate are modern cesium atomic clocks, which make GPS navigation possible?|They would not gain or lose a single second in one hundred million years|They lose one second every month|They lose ten seconds a day|They have to be reset every Sunday"
      ]
    }
  ];

  // გავაერთიანოთ B1 და (მომავალი) B2 მასივები App.ReadingDataB-ში
  App.ReadingDataB = App.ReadingDataB1.concat(App.ReadingDataB2 || []);
})(window);
// ============================================================================
// B2 LEVEL — PASSAGES 46 TO 60 (5 PARAGRAPHS, 10 WORDS & 10 QUESTIONS EACH)
// ============================================================================
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ReadingDataB2 = [
    {
      num: 46, level: "B2",
      icon: "🪨", genre: "არქეოლოგია და ლინგვისტიკა",
      title: "როზეტის ქვა და იეროგლიფების გაშიფვრა",
      subtitle: "The Rosetta Stone and the Decipherment of Hieroglyphs",
      time: "9 წთ",
      paragraphs: [
        [
          "For more than a thousand years, the carved symbols covering the temples, tombs, and obelisks of ancient Egypt remained an impenetrable mystery. Following the decline of the pharaonic civilization in the fourth century AD, the knowledge of how to read hieroglyphs was completely lost. For centuries, European scholars mistakenly assumed that these intricate carvings were not a phonetic alphabet at all, but purely symbolic pictures representing mystical ideas.",
          "ათას წელზე მეტი ხნის განმავლობაში ძველი ეგვიპტის ტაძრებზე, აკლდამებსა და ობელისკებზე ამოკვეთილი სიმბოლოები ამოუცნობ საიდუმლოდ რჩებოდა. ახალი წელთაღრიცხვით მეოთხე საუკუნეში ფარაონთა ცივილიზაციის დაკნინების შემდეგ, იეროგლიფების წაკითხვის ცოდნა სრულიად დაიკარგა. საუკუნეების მანძილზე ევროპელი სწავლულები შეცდომით ვარაუდობდნენ, რომ ეს რთული გამოსახულებები სულაც არ იყო ბგერითი ანბანი და მხოლოდ მისტიკური იდეების გამომხატველ სიმბოლურ ნახატებს წარმოადგენდა."
        ],
        [
          "The breakthrough that finally unlocked this ancient script occurred by chance in July 1799 near the town of Rashid, known to Europeans as Rosetta, in the Nile Delta. While French soldiers were digging trenches to strengthen an old fort, a young engineering officer named Pierre-François Bouchard spotted a large slab of dark grey granodiorite built into an old wall. Realizing its potential value, he immediately alerted the scholars accompanying the expedition.",
          "გარღვევა, რომელმაც საბოლოოდ გასაღები მოარგო ამ უძველეს დამწერლობას, შემთხვევით მოხდა 1799 წლის ივლისში ნილოსის დელტაში მდებარე ქალაქ რაშიდის (ევროპელებისთვის ცნობილი როგორც როზეტა) მახლობლად. როდესაც ფრანგი ჯარისკაცები ძველი ციხესიმაგრის გასამაგრებლად სანგრებს თხრიდნენ, ახალგაზრდა საინჟინრო ოფიცერმა პიერ-ფრანსუა ბუშარმა ძველ კედელში ჩაშენებული მუქი ნაცრისფერი გრანოდიორიტის დიდი ფილა შეამჩნია. მან მაშინვე გააცნობიერა ქვის პოტენციური ღირებულება და ექსპედიციის თანმხლებ მეცნიერებს შეატყობინა."
        ],
        [
          "What made the Rosetta Stone extraordinary was that its polished surface bore the exact same royal decree inscribed in three different scripts. At the top were fourteen lines of formal Egyptian hieroglyphs, the script used for sacred monuments; in the middle were thirty-two lines of Demotic, the everyday handwriting of ancient Egyptians; and at the bottom were fifty-four lines of ancient Greek, a language that nineteenth-century scholars could read with ease.",
          "როზეტის ქვას უნიკალურს ხდიდა ის ფაქტი, რომ მის გაპრიალებულ ზედაპირზე ამოკვეთილი იყო ზუსტად ერთი და იგივე სამეფო ბრძანებულება სამ სხვადასხვა დამწერლობაზე. ზედა ნაწილში იყო თოთხმეტი სტრიქონი ფორმალური ეგვიპტური იეროგლიფებით, რომლებიც წმინდა ძეგლებისთვის გამოიყენებოდა; შუაში — ოცდათორმეტი სტრიქონი დემოტური დამწერლობით, რაც ძველი ეგვიპტელების ყოველდღიურ ხელწერას წარმოადგენდა; ხოლო ქვემოთ — ორმოცდათოთხმეტი სტრიქონი ძველბერძნულ ენაზე, რომელსაც მეცხრამეტე საუკუნის მეცნიერები თავისუფლად კითხულობდნენ."
        ],
        [
          "Translating the Greek section revealed that the text was a decree issued in 196 BC by a council of priests honouring the young Pharaoh Ptolemy V. An English physicist and polymath, Thomas Young, made the first crucial step by demonstrating that the oval rings — called cartouches — in the hieroglyphic text contained the phonetic spelling of royal names, such as 'Ptolemy'.",
          "ბერძნული ნაწილის თარგმნამ გამოავლინა, რომ ტექსტი წარმოადგენდა ძვ. წ. 196 წელს ქურუმთა საბჭოს მიერ გამოცემულ ბრძანებულებას ახალგაზრდა ფარაონ პტოლემე V-ის პატივსაცემად. ინგლისელმა ფიზიკოსმა და ენციკლოპედისტმა თომას იუნგმა გადადგა პირველი გადამწყვეტი ნაბიჯი და დაამტკიცა, რომ იეროგლიფურ ტექსტში არსებული ოვალური რგოლები — ეგრეთ წოდებული კარტუშები — შეიცავდა სამეფო სახელების (მაგალითად, „პტოლემეს“) ბგერით ჩანაწერს."
        ],
        [
          "Building on this insight, a brilliant French linguist named Jean-François Champollion mastered Coptic — the final stage of the ancient Egyptian language still used in Christian churches in Egypt. In 1822, by comparing the hieroglyphs with Coptic words and Greek names like 'Cleopatra' and 'Ramses', Champollion proved that hieroglyphs were a sophisticated combination of phonetic sounds and ideograms, giving birth to modern Egyptology.",
          "ამ მიგნებაზე დაყრდნობით, ბრწყინვალე ფრანგმა ლინგვისტმა ჟან-ფრანსუა შამპოლიონმა სრულყოფილად შეისწავლა კოპტური ენა — ძველი ეგვიპტური ენის უკანასკნელი საფეხური, რომელიც ეგვიპტის ქრისტიანულ ეკლესიებში კვლავ გამოიყენებოდა. 1822 წელს, იეროგლიფების კოპტურ სიტყვებთან და ისეთ ბერძნულ სახელებთან შედარებით, როგორებიცაა „კლეოპატრა“ და „რამსესი“, შამპოლიონმა დაამტკიცა, რომ იეროგლიფები ბგერითი ნიშნებისა და იდეოგრამების დახვეწილ ნაზავს წარმოადგენდა, რითაც სათავე დაუდო თანამედროვე ეგვიპტოლოგიას."
        ]
      ],
      glossary: [
        "impenetrable|შეუღწეველი / ამოუცნობი", "intricate|რთული / ჩახლართული", "slab|ქვის სქელი ფილა",
        "royal decree|სამეფო ბრძანებულება", "inscribe|ამოკვეთა (წარწერის ქვაზე)", "sacred|წმინდა / საკრალური",
        "polymath|მრავალმხრივი მეცნიერი / ენციკლოპედისტი", "cartouche|კარტუში (ოვალური ჩარჩო ფარაონის სახელის გარშემო)", "ideogram|იდეოგრამა (ცნების გამომხატველი ნიშანი)", "decipherment|გაშიფვრა / ამოკითხვა"
      ],
      questions: [
        "When was the knowledge of how to read Egyptian hieroglyphs originally lost?|In the fourth century AD, after the decline of the pharaonic civilization|In 1799 during the French expedition|In 196 BC under Pharaoh Ptolemy V|During the construction of the pyramids",
        "What mistaken belief did European scholars hold about hieroglyphs for centuries?|They believed hieroglyphs were purely symbolic pictures rather than a phonetic script|They thought the carvings were written in ancient Latin|They believed the symbols were only decorative patterns|They thought the stones were carved by Greek soldiers",
        "When and where was the Rosetta Stone discovered?|In July 1799, near the town of Rashid (Rosetta) in the Nile Delta|In 1822, inside a pyramid in Giza|In 1922, in the Valley of the Kings|In 1650, in a museum in Paris",
        "Who spotted the Rosetta Stone while soldiers were digging trenches?|A French engineering officer named Pierre-François Bouchard|Thomas Young|Jean-François Champollion|Pharaoh Ptolemy V",
        "Which three scripts were inscribed on the surface of the Rosetta Stone?|Formal Egyptian hieroglyphs, everyday Demotic, and ancient Greek|Latin, Arabic, and Hebrew|Greek, Persian, and Babylonian cuneiform|Hieroglyphs, French, and English",
        "Why was the presence of ancient Greek at the bottom of the stone so important?|Because nineteenth-century scholars could read ancient Greek easily and use it as a key|Because Greek was the oldest language in the world|Because the Greek text was longer than the others|Because it contained a map of the Nile",
        "What was the subject of the decree written on the Rosetta Stone in 196 BC?|A statement by priests honouring the young Pharaoh Ptolemy V|A peace treaty between Egypt and Rome|A list of taxes paid by farmers|Instructions for building a temple",
        "What did English physicist Thomas Young discover about the oval rings called 'cartouches'?|That they contained the phonetic spelling of royal names like 'Ptolemy'|That they represented numbers and dates|That they marked the end of a sentence|That they were signatures of the stone carvers",
        "Which language did Jean-François Champollion study to understand the sound of ancient Egyptian words?|Coptic, the final stage of the ancient Egyptian language|Ancient Sanskrit|Classical Latin|Old Norse",
        "What did Champollion finally prove in 1822 about the nature of hieroglyphs?|That they were a combination of phonetic sounds and ideograms|That every symbol represented a single letter like English|That they contained no spoken sounds at all|That they were identical to the Greek alphabet"
      ]
    },
    {
      num: 47, level: "B2",
      icon: "🌲", genre: "ეკოლოგია და ბიოლოგია",
      title: "როგორ ურთიერთობენ ხეები მიწისქვეშა ქსელის მეშვეობით",
      subtitle: "The Underground Network: How Trees Communicate",
      time: "9 წთ",
      paragraphs: [
        [
          "When we walk through an old-growth forest, we usually see individual trees competing silently with one another for sunlight and space. However, over the past three decades, forest ecologists have made a revolutionary discovery: beneath the forest floor lies a vast, interconnected biological network that links the roots of trees together, allowing them to share nutrients and information.",
          "როდესაც უძველეს ტყეში ვსეირნობთ, ჩვეულებრივ ვხედავთ ცალკეულ ხეებს, რომლებიც მზის სინათლისა და სივრცისთვის ერთმანეთს უხმოდ ეჯიბრებიან. თუმცა, ბოლო სამი ათწლეულის განმავლობაში ტყის ეკოლოგებმა რევოლუციური აღმოჩენა გააკეთეს: ტყის საფარის ქვეშ არსებობს უზარმაზარი, ურთიერთდაკავშირებული ბიოლოგიური ქსელი, რომელიც ხეების ფესვებს აერთიანებს და მათ საკვები ნივთიერებებისა და ინფორმაციის გაზიარების საშუალებას აძლევს."
        ],
        [
          "This underground system, playfully nicknamed the 'Wood Wide Web' by scientists, is built through a partnership between trees and fungi. The white threads of underground fungi — called mycelium — wrap around and penetrate the tips of tree roots. A single cubic inch of forest soil can contain several kilometres of these microscopic fungal threads, connecting almost every tree in the woods.",
          "ეს მიწისქვეშა სისტემა, რომელსაც მეცნიერებმა ხუმრობით „ტყის მსოფლიო ქსელი“ (Wood Wide Web) შეარქვეს, ეფუძნება ხეებისა და სოკოების თანამშრომლობას. მიწისქვეშა სოკოების თეთრი ძაფები — ეგრეთ წოდებული მიცელიუმი — ეხვევა ხის ფესვების წვერებს და აღწევს მათში. ტყის ნიადაგის ერთ კუბურ დუიმში შეიძლება რამდენიმე კილომეტრის სიგრძის ასეთი მიკროსკოპული სოკოვანი ძაფი იყოს, რაც ტყის თითქმის ყველა ხეს ერთმანეთთან აკავშირებს."
        ],
        [
          "The relationship between the trees and the fungi is mutually beneficial. Fungi cannot perform photosynthesis because they live in the dark soil and have no green leaves. Instead, the fungi absorb phosphorus, nitrogen, and water from the soil and deliver them to the tree roots; in exchange, the tree gives the fungi up to thirty percent of the sugar it produces from sunlight.",
          "ხეებსა და სოკოებს შორის ურთიერთობა ორმხრივად სასარგებლოა. სოკოებს არ შეუძლიათ ფოტოსინთეზის განხორციელება, რადგან ბნელ ნიადაგში ცხოვრობენ და მწვანე ფოთლები არ გააჩნიათ. ამის ნაცვლად, სოკოები ნიადაგიდან იწოვენ ფოსფორს, აზოტსა და წყალს და აწვდიან ხის ფესვებს; სანაცვლოდ კი ხე სოკოს უზიარებს მზის სინათლისგან გამომუშავებული შაქრის ოცდაათ პროცენტამდე."
        ],
        [
          "Even more astonishingly, Canadian ecologist Suzanne Simard proved that trees use this fungal network to support their neighbours. Using radioactive carbon isotopes to track the flow of nutrients, she discovered that tall, ancient 'mother trees' send extra carbon, water, and nitrogen through the fungal threads to young seedlings growing in the deep shade beneath the canopy, significantly increasing their chances of survival.",
          "კიდევ უფრო გასაოცარია ის, რაც კანადელმა ეკოლოგმა სუზან სიმარდმა დაამტკიცა: ხეები ამ სოკოვან ქსელს მეზობელი ხეების დასახმარებლად იყენებენ! საკვები ნივთიერებების მოძრაობის გასაკონტროლებლად რადიოაქტიური ნახშირბადის იზოტოპების გამოყენებით, მან აღმოაჩინა, რომ მაღალი, უძველესი „დედა ხეები“ სოკოვანი ძაფების მეშვეობით დამატებით ნახშირბადს, წყალსა და აზოტს უგზავნიან ვარჯის ქვეშ, ღრმა ჩრდილში მზარდ პატარა ნერგებს, რაც მკვეთრად ზრდის მათი გადარჩენის შანსს."
        ],
        [
          "The network also serves as an early warning system. When caterpillars or bark beetles attack a tree, the injured tree sends chemical distress signals through the fungal threads to its neighbours. Within hours, the neighbouring trees begin producing bitter defensive chemicals in their own leaves to make them unpalatable to the insects before the pests even arrive!",
          "ეს ქსელი ასევე ასრულებს ადრეული გაფრთხილების სისტემის ფუნქციას. როდესაც ხეს მუხლუხოები ან ქერქიჭამია ხოჭოები ესხმიან თავს, დაზიანებული ხე სოკოვანი ძაფების მეშვეობით მეზობელ ხეებს ქიმიურ განგაშის სიგნალებს უგზავნის. რამდენიმე საათში მეზობელი ხეები თავიანთ ფოთლებში იწყებენ მწარე დამცავი ნივთიერებების გამომუშავებას, რათა მწერებისთვის უგემური გახდნენ მანამდეც კი, სანამ მავნებლები მათამდე მიაღწევენ!"
        ]
      ],
      glossary: [
        "old-growth forest|უძველესი (ხელუხლებელი) ტყე", "interconnected|ურთიერთდაკავშირებული", "mycelium|მიცელიუმი (სოკოს მიწისქვეშა ქსელი)",
        "mutually beneficial|ორმხრივად სასარგებლო", "phosphorus and nitrogen|ფოსფორი და აზოტი", "isotope|იზოტოპი (ატომის სახესხვაობა)",
        "seedling|ნერგი / ახალაღმოცენებული მცენარე", "canopy|ტყის ვარჯი (ფოთლების ზედა საფარი)", "distress signal|განგაშის / საფრთხის სიგნალი", "unpalatable|უგემური / საჭმელად უვარგისი"
      ],
      questions: [
        "What have forest ecologists discovered beneath the forest floor over the past three decades?|A vast biological network of fungi that connects tree roots and allows them to share nutrients|Underground rivers of pure sugar|Ancient stone walls built by early humans|That tree roots never touch each other",
        "What builds the physical connections of the 'Wood Wide Web' between tree roots?|The microscopic white threads of underground fungi called mycelium|Earthworms tying roots together|Fallen pine needles|Underground spider webs",
        "Why can't underground fungi produce their own sugar through photosynthesis?|Because they live in the dark soil and have no green leaves|Because they do not need any energy to live|Because the soil is too cold|Because tree roots block all the water",
        "What do the fungi give to the trees in exchange for sugar?|Phosphorus, nitrogen, and water absorbed from the soil|Sunlight and carbon dioxide|Green chlorophyll|Seeds and pollen",
        "Up to what percentage of its produced sugar can a tree give to its fungal partners?|Up to thirty percent|Only one percent|Ninety percent|Zero percent",
        "How did Canadian ecologist Suzanne Simard track the movement of nutrients between trees?|By using radioactive carbon isotopes|By digging up all the trees in the forest|By putting cameras inside tree trunks|By painting the leaves blue",
        "How do tall 'mother trees' help young seedlings growing in the deep shade?|They send extra carbon, water, and nitrogen to the seedlings through the fungal network|They drop their own branches to let in more light|They pull the seedlings up with their branches|They stop absorbing water in summer",
        "What happens when caterpillars or bark beetles attack a tree?|The injured tree sends chemical distress signals through the fungal threads to neighbouring trees|The tree immediately loses all its roots|The fungi eat the caterpillars|The neighbouring trees stop growing",
        "How do neighbouring trees respond when they receive a chemical warning signal?|They produce bitter defensive chemicals in their leaves to make them unpalatable to insects|They turn their leaves yellow and drop them|They close their bark tightly|They send all their water back into the soil",
        "How quickly do neighbouring trees begin producing defensive chemicals after receiving a signal?|Within hours|After two years|Only in the following spring|After several months"
      ]
    },
    {
      num: 48, level: "B2",
      icon: "🧩", genre: "ფსიქოლოგია",
      title: "პირველი შთაბეჭდილების ფსიქოლოგია და „შარავანდედის ეფექტი“",
      subtitle: "The Psychology of First Impressions and the Halo Effect",
      time: "9 წთ",
      paragraphs: [
        [
          "When you meet a stranger for the first time, how long does it take to form an opinion about their personality? According to studies by psychologists at Princeton University, the human brain makes a snap judgment about a person's trustworthiness, competence, and warmth within just one-tenth of a second of seeing their face — long before a single word is spoken!",
          "როდესაც უცნობ ადამიანს პირველად ხვდებით, რამდენი დრო გჭირდებათ მის პიროვნებაზე აზრის შესاقმნელად? პრინსტონის უნივერსიტეტის ფსიქოლოგთა კვლევების თანახმად, ადამიანის ტვინი პიროვნების სანდოობის, კომპეტენტურობისა და კეთილგანწყობის შესახებ მყისიერ შეფასებას აკეთებს მისი სახის დანახვიდან წამის მეათედში — იმაზე გაცილებით ადრე, ვიდრე თუნდაც ერთი სიტყვა ითქმება!"
        ],
        [
          "Evolutionary psychologists explain that this rapid decision-making was an ancient survival mechanism. In prehistoric times, early humans needed to decide instantly whether an approaching stranger was a friend or a dangerous foe. Today, although we live in modern cities, our brains still rely on these automatic mental shortcuts, known as heuristics.",
          "ევოლუციური ფსიქოლოგები განმარტავენ, რომ გადაწყვეტილების ასეთი სწრაფი მიღება უძველესი გადარჩენის მექანიზმი იყო. პრეისტორიულ ხანაში პირველყოფილ ადამიანებს მყისიერად უნდა გადაეწყვიტათ, მოახლოებული უცნობი მოყვარე იყო თუ სახიფათო მტერი. დღეს, მიუხედავად იმისა, რომ თანამედროვე ქალაქებში ვცხოვრობთ, ჩვენი ტვინი კვლავ ეყრდნობა ამ ავტომატურ გონებრივ მალსახმობებს, რომლებსაც „ევრისტიკა“ ეწოდება."
        ],
        [
          "One of the most powerful biases shaping first impressions is the 'Halo Effect', a term coined by American psychologist Edward Thorndike in 1920. The Halo Effect occurs when one positive quality we notice in a person — such as a warm smile, neat clothing, or a confident voice — creates a metaphorical 'halo' of positivity that makes us assume they are also intelligent, honest, and capable in completely unrelated areas.",
          "პირველი შთაბეჭდილების ჩამოყალიბებაზე მოქმედი ერთ-ერთი უძლიერესი მიკერძოებაა „შარავანდედის ეფექტი“ (Halo Effect) — ტერმინი, რომელიც 1920 წელს ამერიკელმა ფსიქოლოგმა ედუარდ თორნდაიკმა დაამკვიდრა. შარავანდედის ეფექტი ვლინდება მაშინ, როცა ადამიანში შემჩნეული ერთი დადებითი თვისება — მაგალითად, თბილი ღიმილი, მოწესრიგებული ჩაცმულობა ან თავდაჯერებული ხმა — ქმნის დადებითობის მეტაფორულ „შარავანდედს“, რაც გვაფიქრებინებს, რომ ეს ადამიანი ასევე ჭკვიანი, პატიოსანი და უნარიანია სრულიად დაუკავშირებელ სფეროებშიც."
        ],
        [
          "The opposite phenomenon, known as the 'Horn Effect', is equally strong. If a candidate arrives five minutes late to an interview with messy hair, the interviewer may unconsciously assume the candidate is also lazy or bad at mathematics. Once our brain forms this initial impression, 'confirmation bias' takes over: we actively look for details that prove our first impression right, while ignoring evidence that contradicts it.",
          "საპირისპირო მოვლენა, რომელიც „რქების ეფექტის“ (Horn Effect) სახელითაა ცნობილი, არანაკლებ ძლიერია. თუ კანდიდატი გასაუბრებაზე ხუთი წუთის დაგვიანებითა და აწეწილი თმით მიდის, გამსაუბრებელმა შეიძლება ქვეცნობიერად ჩათვალოს, რომ ის ასევე ზარმაცია ან მათემატიკა არ ეხერხება. მას შემდეგ, რაც ტვინი ამ საწყის შთაბეჭდილებას შეიქმნის, ირთვება „დადასტურების მიკერძოება“: ჩვენ აქტიურად ვეძებთ დეტალებს, რომლებიც ჩვენს პირველ შთაბეჭდილებას გაამართლებს, ხოლო საპირისპირო ფაქტებს უგულებელვყოფთ."
        ],
        [
          "Understanding these psychological biases helps us make fairer judgments in daily life. For instance, many symphony orchestras now hold 'blind auditions' where musicians play behind a curtain so the judges evaluate only the music, not the performer's appearance. By slowing down our thinking and looking for objective facts, we can see people for who they truly are rather than judging a book by its cover.",
          "ამ ფსიქოლოგიური მიკერძოებების გააზრება გვეხმარება ყოველდღიურ ცხოვრებაში უფრო სამართლიანი შეფასებების გაკეთებაში. მაგალითად, ბევრი სიმფონიური ორკესტრი დღეს ატარებს „ბრმა მოსმენებს“, სადაც მუსიკოსები ფარდის მიღმა უკრავენ, რათა ჟიურიმ შეაფასოს მხოლოდ მუსიკა და არა შემსრულებლის გარეგნობა. აზროვნების შენელებითა და ობიექტურ ფაქტებზე დაკვირვებით შეგვიძლია ადამიანები დავინახოთ ისეთებად, როგორებიც სინამდვილეში არიან, ნაცვლად წიგნის ყდით შეფასებისა."
        ]
      ],
      glossary: [
        "snap judgment|მყისიერი (ნაჩქარევი) შეფასება", "trustworthiness|სანდოობა", "foe|მტერი / მოწინააღმდეგე",
        "heuristic|ევრისტიკა (გონებრივი მალსახმობი)", "bias|მიკერძოება", "coin a term|ახალი ტერმინის შემოღება/დამკვიდრება",
        "unconsciously|ქვეცნობიერად / გაუაზრებლად", "confirmation bias|დადასტურების მიკერძოება", "contradict|შეწინააღმდეგება / უარყოფა", "blind audition|ბრმა მოსმენა (ფარდის მიღმა)"
      ],
      questions: [
        "According to Princeton University studies, how quickly does the brain form a first impression of a face?|Within one-tenth of a second|After five minutes of conversation|After half an hour|Within ten seconds",
        "Why did early humans need to make instant judgments about strangers in prehistoric times?|As a survival mechanism to decide whether an approaching stranger was a friend or a foe|To choose who should cook dinner|To teach strangers how to read|To trade gold coins",
        "What are automatic mental shortcuts called in psychology?|Heuristics|Algorithms|Chronometers|Isotopes",
        "Who coined the term 'Halo Effect' in 1920?|American psychologist Edward Thorndike|Alexander Fleming|Charles Pearson|Suzanne Simard",
        "What happens during the 'Halo Effect'?|One positive trait makes us assume a person has other unrelated positive qualities|Bright light in a room makes people feel happier|People forget the names of strangers immediately|A person's voice sounds louder in a hall",
        "What is the 'Horn Effect'?|When one negative detail makes us assume a person has other unrelated flaws|When loud traffic noise makes people angry|When musicians play brass instruments|When people prefer winter to summer",
        "How does 'confirmation bias' affect our thinking after we form a first impression?|We look for details that prove our first impression right and ignore contradicting evidence|We immediately change our mind about the person|We ask ten other people for their opinion|We forget everything we saw",
        "Why do many symphony orchestras hold 'blind auditions' behind a curtain?|So the judges evaluate only the music and not the performer's appearance|Because the stage lights are too bright for the musicians|To make the instruments sound louder|Because the concert hall is cold",
        "What is the main danger of relying solely on first impressions?|We may judge people unfairly based on superficial details rather than objective facts|It takes too much time and energy|It makes us speak too slowly|It prevents us from recognizing faces",
        "What does the idiom 'judging a book by its cover' mean in the context of the passage?|Evaluating a person's character based only on their outward appearance|Buying expensive books at a library|Reading only the first page of a novel|Designing artwork for magazines"
      ]
    },
    {
      num: 49, level: "B2",
      icon: "🚢", genre: "მსოფლიო ინჟინერია",
      title: "პანამის არხის საინჟინრო საოცრება",
      subtitle: "The Engineering Marvel of the Panama Canal",
      time: "9 წთ",
      paragraphs: [
        [
          "Before the early twentieth century, a ship sailing from New York on the Atlantic coast to San Francisco on the Pacific coast had to travel over twenty thousand kilometres around Cape Horn at the stormy southern tip of South America. For centuries, explorers and engineers dreamed of cutting a canal across the narrow Isthmus of Panama to connect the two great oceans and shorten the voyage by nearly thirteen thousand kilometres.",
          "მეოცე საუკუნის დასაწყისამდე გემს, რომელიც ატლანტის სანაპიროზე მდებარე ნიუ-იორკიდან წყნარი ოკეანის სანაპიროზე მდებარე სან-ფრანცისკოში მიცურავდა, ოცი ათას კილომეტრზე მეტი უნდა გაევლო სამხრეთ ამერიკის ქარიშხლიანი უკიდურესი სამხრეთ წერტილის — ჰორნის კონცხის შემოვლით. საუკუნეების განმავლობაში მკვლევრები და ინჟინრები ოცნებობდნენ პანამის ვიწრო ყელზე არხის გაჭრაზე, რაც ორ დიდ ოკეანეს დააკავშირებდა და მგზავრობას თითქმის ცამეტი ათასი კილომეტრით შეამოკლებდა."
        ],
        [
          "In 1881, a French company led by Ferdinand de Lesseps — the diplomat who had successfully built the flat, sea-level Suez Canal in Egypt — began digging in Panama. However, Panama was nothing like the flat Egyptian desert. It was a mountainous tropical jungle where torrential rains caused massive mudslides that buried equipment, and mosquitoes spread deadly yellow fever and malaria among the workers. By 1889, the French effort collapsed.",
          "1881 წელს ფრანგულმა კომპანიამ ფერდინანდ დე ლესეპსის — იმ დიპლომატის, რომელმაც ეგვიპტეში წარმატებით ააშენა ზღვის დონეზე გამავ平坦ი სუეცის არხი — ხელმძღვანელობით პანამაში თხრა დაიწყო. თუმცა, პანამა სულაც არ ჰგავდა ეგვიპტის ბრტყელ უდაბნოს. ეს იყო მთიანი ტროპიკული ჯუნგლები, სადაც კოკისპირული წვიმები იწვევდა გიგანტურ მეწყერებს, ხოლო კოღოები მუშებს შორის სასიკვდილო ყვითელ ცხელებასა და მალარიას ავრცელებდნენ. 1889 წლისთვის ფრანგული პროექტი ჩაიშალა."
        ],
        [
          "When the United States took over the project in 1904, two crucial decisions changed everything. First, chief doctor William Gorgas launched a massive sanitation campaign to drain stagnant pools of water and wipe out the mosquitoes, practically eliminating yellow fever. Second, chief engineer John Stevens realized that digging a sea-level canal through the mountains was impossible.",
          "როდესაც 1904 წელს პროექტი ამერიკის შეერთებულმა შტატებმა გადაიბარა, ორმა გადამწყვეტმა ნაბიჯმა ყველაფერი შეცვალა. პირველი: მთავარმა ექიმმა უილიამ გორგასმა წამოიწყო მასშტაბური სანიტარული კამპანია დამდგარი წყლის გუბურების დასაშრობად და კოღოების გასანადგურებლად, რითაც ყვითელი ცხელება პრაქტიკულად მოსპო. მეორე: მთავარი ინჟინერი ჯონ სტივენსი მიხვდა, რომ მთებში ზღვის დონის არხის გაჭრა შეუძლებელი იყო."
        ],
        [
          "Instead of digging all the way down to sea level, Stevens designed a brilliant 'water elevator' system. Engineers built a massive dam across the Chagres River, creating Gatun Lake — a giant artificial lake sitting twenty-six metres above sea level in the middle of the isthmus. At each end of the canal, they built pairs of giant concrete chambers called locks.",
          "ზღვის დონემდე მთების ჩათხრის ნაცვლად, სტივენსმა შეიმუშავა ბრწყინვალე „წყლის ლიფტის“ სისტემა. ინჟინრებმა მდინარე ჩაგრესზე ააგეს უზარმაზარი კაშხალი, რითაც ყელის შუაგულში, ზღვის დონიდან ოცდაექვსი მეტრის სიმაღლეზე, შექმნეს გიგანტური ხელოვნური ტბა — გატუნი. არხის ორივე ბოლოში კი ააშენეს გიგანტური ბეტონის კამერების წყვილები, რომლებსაც რაბები (შлюზები) ეწოდება."
        ],
        [
          "When a ship enters a lock chamber from the ocean, massive steel gates close behind it. Gravity alone — without a single water pump! — allows fresh water from Gatun Lake to flow through underground tunnels into the chamber, lifting the heavy ship up step by step to the level of the lake. After sailing across the lake, the ship is lowered back down to the other ocean through another set of locks. Opened in 1914, the eighty-kilometre canal remains one of humanity's greatest engineering triumphs.",
          "როდესაც გემი ოკეანიდან რაბის კამერაში შედის, მის უკან მასიური ფოლადის ჭიშკარი იკეტება. მხოლოდ მიზიდულობის ძალით — ერთი წყლის ტუმბოს გარეშეც კი! — გატუნის ტბიდან მტკნარი წყალი მიწისქვეშა გვირაბებით შეედინება კამერაში და მძიმე გემს საფეხურებრივად მაღლა სწევს ტბის დონემდე. ტბის გადაცურვის შემდეგ კი გემი მეორე მხარეს არსებული რაბების სისტემით კვლავ დაბლა ეშვება მეორე ოკეანის დონემდე. 1914 წელს გახსნილი ოთხმოცკილომეტრიანი არხი დღემდე რჩება კაცობრიობის ერთ-ერთ უდიდეს საინჟინრო ტრიუმფად."
        ]
      ],
      glossary: [
        "isthmus|ყელი (ხმელეთის ვიწრო ზოლი ორ წყალს შორის)", "voyage|საზღვაო მოგზაურობა", "torrential rain|კოკისპირული / თავსხმა წვიმა",
        "mudslide|მეწყერი / ღვარცოფი", "stagnant water|დამდგარი (უძრავი) წყალი", "artificial lake|ხელოვნური ტბა (წყალსაცავი)",
        "lock chamber|რაბის (შლუზის) კამერა", "water pump|წყლის ტუმბო", "step by step|ნაბიჯ-ნაბიჯ / საფეხურებრივად", "triumph|ტრიუმფი / დიდი გამარჯვება"
      ],
      questions: [
        "Before the Panama Canal was built, how did ships sail from New York to San Francisco?|By travelling over 20,000 km around Cape Horn at the southern tip of South America|Through the Suez Canal in Egypt|Through the Arctic ice|By carrying ships on trains across Mexico",
        "By how many kilometres did the Panama Canal shorten the sea voyage between the Atlantic and Pacific coasts?|By nearly thirteen thousand kilometres|By only five hundred kilometres|By two thousand kilometres|By fifty thousand kilometres",
        "Why did Ferdinand de Lesseps initially think a sea-level canal would work in Panama?|Because he had successfully built the flat, sea-level Suez Canal in Egypt|Because Panama had no mountains or rain|Because the Panama Canal was only one kilometre long|Because there were no rivers in Panama",
        "What two major problems caused the French construction effort to collapse in 1889?|Massive mudslides from torrential rains and deadly mosquito-borne diseases (yellow fever and malaria)|Snowstorms and freezing temperatures|Lack of steel in Europe|Pirates attacking the ships",
        "How did Dr William Gorgas eliminate yellow fever in the canal zone after 1904?|By draining stagnant water pools and wiping out the mosquitoes that carried the disease|By moving all the workers to the mountains|By waiting for winter frost|By closing the hospitals",
        "What did chief engineer John Stevens design instead of a flat sea-level canal?|A 'water elevator' system using locks and a high artificial lake|An underground tunnel for ships through the rock|A giant bridge over the mountains|A railway that pulled ships on wheels",
        "How was Gatun Lake created, and how high above sea level does it sit?|By building a dam across the Chagres River; it sits twenty-six metres above sea level|By pumping salt water from the Pacific; it sits 500 metres high|It was a natural crater lake at sea level|By melting mountain glaciers",
        "How does water fill the lock chambers to lift ships up to the level of Gatun Lake?|By gravity alone, flowing down from Gatun Lake through underground tunnels without any pumps|Using thousands of giant diesel water pumps|By waiting for the ocean tide to rise 26 metres|By rainwater falling directly into the chamber",
        "In what year did the Panama Canal officially open to shipping?|In 1914|In 1881|In 1904|In 1950",
        "How long is the Panama Canal from one ocean to the other?|About eighty kilometres|About eight hundred kilometres|Only five kilometres|Two thousand kilometres"
      ]
    },
    {
      num: 50, level: "B2",
      icon: "🦎", genre: "ინოვაცია და დიზაინი",
      title: "ბიომიმიკრია: როდესაც ტექნოლოგია ბუნებას ბაძავს",
      subtitle: "Biomimicry: Learning from Nature's Genius",
      time: "9 წთ",
      paragraphs: [
        [
          "Over nearly four billion years of evolution, living organisms have developed ingenious solutions to survive in every environment on Earth. In recent decades, engineers, architects, and material scientists have increasingly turned to a field called 'biomimicry' — from the Greek words 'bios' (life) and 'mimesis' (imitation) — which studies nature's designs to solve complex human technological problems.",
          "თითქმის ოთხი მილიარდი წლის ევოლუციის განმავლობაში ცოცხალმა ორგანიზმებმა შეიმუშავეს მახვილგონივრული გადაწყვეტილებები დედამიწის ნებისმიერ გარემოში გადასარჩენად. ბოლო ათწლეულებში ინჟინრები, არქიტექტორები და მასალათმცოდნეები სულ უფრო ხშირად მიმართავენ დარგს, რომელსაც „ბიომიმიკრია“ ეწოდება — ბერძნული სიტყვებიდან „bios“ (სიცოცხლე) და „mimesis“ (მიბაძვა) — და რომელიც სწავლობს ბუნების კონსტრუქციებს რთული ტექნოლოგიური ამოცანების გადასაჭრელად."
        ],
        [
          "One of the most famous examples of biomimicry began in 1941, when Swiss engineer George de Mestral went for a walk in the Alps with his dog. Upon returning home, he noticed that his woollen trousers and his dog's fur were covered with the prickly seed burrs of the burdock plant. Curious to see why they stuck so firmly, he examined a burr under his microscope and saw ratusan of tiny hooks that caught onto the microscopic loops in fabric and fur. This observation inspired him to invent Velcro!",
          "ბიომიმიკრიის ერთ-ერთი ყველაზე ცნობილი მაგალითი 1941 წელს დაიწყო, როდესაც შვეიცარიელი ინჟინერი ჟორჟ დე მესტრალი თავის ძაღლთან ერთად ალპებში სასეირნოდ წავიდა. შინ დაბრუნებულმა შეამჩნია, რომ მისი შალის შარვალი და ძაღლის ბეწვი დაფარული იყო ბირკავას ეკლიანი ბურთულებით. დაინტერესდა, რატომ ეკვროდნენ ისინი ასე მჭიდროდ, ბურთულა მიკროსკოპის ქვეშ დაათვალიერა და დაინახა ასობით პაწაწინა კაუჭი, რომელიც ქსოვილისა და ბეწვის მიკროსკოპულ მარყუჟებს ეჭიდებოდა. ამ დაკვირვებამ შთააგონა იგი გამოეგონებინა „ველკრო“ (ფხრიწიანი შესაკრავი)!"
        ],
        [
          "Half a century later, in the 1990s, Japanese engineers faced a serious problem with their high-speed Shinkansen bullet trains. Whenever a train exited a narrow tunnel at three hundred kilometres per hour, the compressed air in front of its round nose created a loud sonic boom that disturbed residents half a kilometre away.",
          "ნახევარი საუკუნის შემდეგ, 1990-იან წლებში, იაპონელი ინჟინრები სერიოზული პრობლემის წინაშე აღმოჩნდნენ მაღალსიჩქარიან მატარებელ „შინკანსენთან“ დაკავშირებით. ყოველ ჯერზე, როცა მატარებელი საათში სამასი კილომეტრის სიჩქარით ვიწრო გვირაბიდან გამოდიოდა, მისი მრგვალი ცხვირის წინ შეკუმშული ჰაერი წარმოქმნიდა ხმამაღალ აკუსტიკურ დარტყმას (აფეთქების მსგავს ხმას), რაც ნახევარი კილომეტრის რადიუსში მცხოვრებლებს აწუხებდა."
        ],
        [
          "The chief engineer, Eiji Nakatsu, happened to be an avid birdwatcher. He noticed that the kingfisher — a small bird that dives from the air into water at high speed to catch fish — enters the water with barely a splash because of its long, narrow, wedge-shaped beak. By redesigning the front nose of the bullet train to match the exact shape of a kingfisher's beak, engineers eliminated the tunnel boom, reduced electricity use by fifteen percent, and made the train ten percent faster!",
          "მთავარი ინჟინერი, ეიჯი ნაკაცუ, ფრინველებზე დაკვირვების დიდი მოყვარული აღმოჩნდა. მან შეამჩნია, რომ ალკუნი — პატარა ფრინველი, რომელიც თევზის დასაჭერად ჰაერიდან დიდი სიჩქარით ყვინთავს წყალში — წყალში თითქმის უშხეფოდ შედის თავისი გრძელი, ვიწრო, სოლისებური ნისკარტის წყალობით. როდესაც ინჟინრებმა მატარებლის წინა ცხვირის ფორმა ზუსტად ალკუნის ნისკარტის მიხედვით გადააკეთეს, გვირაბის ხმაური სრულად გაქრა, ელექტროენერგიის მოხმარება თხუთმეტი პროცენტით შემცირდა, ხოლო მატარებლის სიჩქარე ათი პროცენტით გაიზარდა!"
        ],
        [
          "Biomimicry is also transforming architecture. In Harare, Zimbabwe, architect Mick Pearce designed the Eastgate Centre office building by studying the tall mud mounds built by African termites. Termites keep their mounds at a constant temperature despite the hot desert sun by opening and closing a network of air vents. Using the same passive ventilation principles, the Eastgate Centre stays cool without conventional air conditioning, consuming ninety percent less energy than ordinary buildings.",
          "ბიომიმიკრია ცვლის არქიტექტურასაც. ზიმბაბვეს დედაქალაქ ჰარარეში არქიტექტორმა მიკ პირსმა დააპროექტა საოფისე შენობა „ისტგეით ცენტრი“ აფრიკული ტერმიტების მიერ აგებული მაღალი მიწის ბორცვების შესწავლის საფუძველზე. ტერმიტები მწველი მზის მიუხედავად თავიანთ ბუდეში მუდმივ ტემპერატურას ინარჩუნებენ სავენტილაციო არხების გახსნითა და დახურვით. იმავე პასიური ვენტილაციის პრინციპების გამოყენებით, „ისტგეით ცენტრი“ გრილდება ჩვეულებრივი კონდიციონერების გარეშე და ჩვეულებრივ შენობებთან შედარებით ოთხმოცდაათი პროცენტით ნაკლებ ენერგიას მოიხმარს."
        ]
      ],
      glossary: [
        "biomimicry|ბიომიმიკრია (ბუნების მიბაძვა ტექნოლოგიაში)", "burr|ბირკა (მცენარის ეკლიანი ნაყოფი)", "microscopic hook|მიკროსკოპული კაუჭი",
        "sonic boom|აკუსტიკური დარტყმა (ჰაერის ტალღის ხმაური)", "avid birdwatcher|ფრინველებზე დაკვირვების დიდი მოყვარული", "kingfisher|ალკუნი (ფრინველი)",
        "wedge-shaped|სოლისებური ფორმის", "termite mound|ტერმიტების ბუდე (მიწის კოშკი)", "passive ventilation|პასიური (ბუნებრივი) ვენტილაცია", "conventional|ჩვეულებრივი / ტრადიციული"
      ],
      questions: [
        "What do the Greek roots 'bios' and 'mimesis' in the word 'biomimicry' mean?|Life and imitation|Stone and water|Speed and sound|Forest and wind",
        "What inspired Swiss engineer George de Mestral to invent Velcro in 1941?|Examining how burdock seed burrs stuck to his trousers and his dog's fur|Watching spiders spin silk webs in his garden|Studying how geckos climb glass walls|Looking at fish scales under a microscope",
        "What did George de Mestral see when he looked at a burdock burr under his microscope?|Hundreds of tiny hooks that caught onto microscopic loops in fabric and fur|Sticky drops of natural glue|Tiny magnets made of iron|Sharp straight needles",
        "What problem did Japanese Shinkansen bullet trains have in the 1990s?|Compressed air in front of the train created a loud sonic boom when exiting tunnels|The trains were too slow to climb hills|The wheels melted on hot summer days|Birds kept flying into the windows",
        "What hobby did chief engineer Eiji Nakatsu have that helped him solve the train problem?|He was an avid birdwatcher|He collected rare butterflies|He was a deep-sea diver|He built model airplanes",
        "Which bird's beak inspired the new nose design of the Shinkansen bullet train?|The kingfisher|The golden eagle|The woodpecker|The pelican",
        "Why does a kingfisher's beak allow it to dive into water with barely a splash?|Because it is long, narrow, and wedge-shaped|Because it is covered in soft feathers|Because it is flat and round|Because the bird dives very slowly",
        "Besides eliminating the tunnel boom, what two other benefits did the new train nose provide?|It reduced electricity use by 15% and made the train 10% faster|It made the train twice as heavy and cheaper to paint|It allowed the train to float on water|It doubled the number of seats inside",
        "What natural structure inspired architect Mick Pearce when designing the Eastgate Centre in Zimbabwe?|Tall mud mounds built by African termites|Beehives hanging from trees|Underground rabbit burrows|Coral reefs in the ocean",
        "How much less energy does the Eastgate Centre use for cooling compared to ordinary buildings?|Ninety percent less energy|Ten percent less energy|Fifty percent less energy|It uses twice as much energy"
      ]
    },
    {
      num: 51, level: "B2",
      icon: "🌷", genre: "ეკონომიკის ისტორია",
      title: "1637 წლის „ტიტების ციებ-ცხელება“: პირველი ეკონომიკური ბუშტი",
      subtitle: "Tulip Mania: When a Flower Cost More Than a House",
      time: "9 წთ",
      paragraphs: [
        [
          "In the seventeenth century, the Dutch Republic experienced a period of extraordinary wealth known as the Dutch Golden Age. Merchants in cities like Amsterdam and Haarlem grew rich from global maritime trade, and wealthy citizens looked for rare luxury items to display their status. Surprisingly, the most coveted status symbol of the 1630s was not gold, diamonds, or paintings, but a simple garden flower: the tulip.",
          "მეჩვიდმეტე საუკუნეში ნიდერლანდების რესპუბლიკაში დადგა უჩვეულო სიმდიდრისა და აღმავლობის ხანა, რომელიც „ჰოლანდიის ოქროს ხანის“ სახელითაა ცნობილი. ამსტერდამისა და ჰაარლემის მსგავს ქალაქებში ვაჭრები მსოფლიო საზღვაო ვაჭრობით გამდიდრდნენ და შეძლებულმა მოქალაქეებმა საკუთარი სტატუსის წარმოსაჩენად იშვიათი ფუფუნების საგნების ძებნა დაიწყეს. გასაოცარია, მაგრამ 1630-იანი წლების ყველაზე სასურველი სტატუსის სიმბოლო იყო არა ოქრო, ბრილიანტები ან ნახატები, არამედ ბაღის უბრალო ყვავილი — ტიტა."
        ],
        [
          "Tulips were not native to Holland; they originally grew as wildflowers in the mountains of Central Asia and were cultivated in the Ottoman Empire before botanist Carolus Clusius brought the bulbs to Leiden in the 1590s. The Dutch were fascinated by the intense, saturated colours of the petals, which were unlike any traditional European flower.",
          "ტიტა ჰოლანდიის ადგილობრივი მცენარე არ ყოფილა; ის თავდაპირველად ველურად იზრდებოდა ცენტრალური აზიის მთებში და გააშენეს ოსმალეთის იმპერიაში, სანამ ბოტანიკოსი კაროლუს კლუზიუსი 1590-იან წლებში ბოლქვებს ლეიდენში ჩამოიტანდა. ჰოლანდიელები მოხიბლულნი იყვნენ ფურცლების მკვეთრი, გაჯერებული ფერებით, რაც არცერთ ტრადიციულ ევროპულ ყვავილს არ ჰგავდა."
        ],
        [
          "The rarest and most expensive tulips were the 'broken' varieties, such as the famous 'Semper Augustus', which had vivid red or purple flame-like streaks on white petals. At the time, nobody knew that these dramatic patterns were actually caused by a plant virus spread by aphids! Because the virus weakened the bulb, these multi-coloured tulips reproduced very slowly, making them extremely scarce.",
          "ყველაზე იშვიათი და ძვირადღირებული იყო „ჭრელი“ ჯიშის ტიტები, როგორიცაა ცნობილი „Semper Augustus“, რომელსაც თეთრ ფურცლებზე ცეცხლის ალის მსგავსი მკვეთრი წითელი ან იისფერი ზოლები ჰქონდა. იმ დროს არავინ იცოდა, რომ ამ შთამბეჭდავ ორნამენტებს სინამდვილეში მცენარის ბუგრების მიერ გავრცელებული ვირუსი იწვევდა! რადგან ვირუსი ბოლქვს ასუსტებდა, ეს მრავალფეროვანი ტიტები ძალიან ნელა მრავლდებოდა, რაც მათ უაღრესად დეფიციტურს ხდიდა."
        ],
        [
          "By 1636, a speculative frenzy known as 'Tulip Mania' swept across Holland. Because tulip bulbs spend most of the year underground between June and September, traders began buying and selling paper contracts for future bulbs in taverns — creating one of history's first futures markets. Bakers, carpenters, and merchants mortgaged their homes to buy paper contracts, hoping to sell them a week later at double the price.",
          "1636 წლისთვის მთელი ჰოლანდია მოიცვა სპეკულაციურმა ციებ-ცხელებამ, რომელსაც „ტიტების მანია“ ეწოდა. რადგან ტიტის ბოლქვები წელიწადის უმეტეს ნაწილს მიწის ქვეშ ატარებს, მოვაჭრეებმა ტავერნებში დაიწყეს მომავალი ბოლქვების ქაღალდის კონტრაქტებით ყიდვა-გაყიდვა, რითაც შექმნეს ისტორიაში ერთ-ერთი პირველი ფიუჩერსული ბაზარი. ხაბაზები, დურგლები და ვაჭრები სახლებს აგირავებდნენ კონტრაქტების საყიდლად იმ იმედით, რომ ერთ კვირაში მათ ორმაგ ფასად გაყიდდნენ."
        ],
        [
          "At the peak of the bubble in January 1637, a single bulb of 'Semper Augustus' sold for the price of a grand canal house in Amsterdam, complete with a garden and coach house — more than a skilled craftsman earned in fifteen years! Then, on the third of February 1637, at a routine auction in Haarlem, buyers suddenly refused to pay the inflated prices. Panic spread overnight, prices plummeted by ninety-nine percent within days, and Tulip Mania entered history as the classic example of an economic bubble.",
          "1637 წლის იანვარში, ბუშტის პიკზე, „Semper Augustus“-ის ერთადერთი ბოლქვი გაიყიდა ამსტერდამის არხისპირა დიდებული სახლის ფასად (ბაღითა და ეტლის სადგომითურთ), რაც დახელოვნებული ხელოსნის თხუთმეტი წლის შემოსავალს აღემატებოდა! შემდეგ კი, 1637 წლის 3 თებერვალს, ჰაარლემის მორიგ აუქციონზე მყიდველებმა უეცრად უარი თქვეს გაბერილი ფასების გადახდაზე. პანიკა ერთ ღამეში გავრცელდა, რამდენიმე დღეში ფასები ოთხმოცდაცხრამეტი პროცენტით დაეცა და „ტიტების მანია“ ისტორიაში შევიდა, როგორც ეკონომიკური ბუშტის კლასიკური მაგალითი."
        ]
      ],
      glossary: [
        "Golden Age|ოქროს ხანა (აყვავების პერიოდი)", "coveted|სანუკვარი / ყველაზე სასურველი", "bulb (flower)|ყვავილის ბოლქვი",
        "saturated colour|გაჯერებული / მკვეთრი ფერი", "flame-like streak|ცეცხლის ალის მსგავსი ზოლი", "aphid|მცენარის ბუგრი (მწერი)",
        "speculative frenzy|სპეკულაციური ციებ-ცხელება / აჟიოტაჟი", "futures market|ფიუჩერსული ბაზარი (მომავალი საქონლის კონტრაქტებით ვაჭრობა)", "inflated price|ხელოვნურად გაბერილი ფასი", "plummet|მკვეთრად ვარდნა / დაცემა (ფასის)"
      ],
      questions: [
        "Where did tulips originally grow before being brought to Holland in the 1590s?|As wildflowers in Central Asia, and later cultivated in the Ottoman Empire|In the rainforests of South America|In the mountains of Scotland|Along the Nile River in Egypt",
        "Who brought tulip bulbs to Leiden in the 1590s?|Botanist Carolus Clusius|Ferdinand de Lesseps|Christiaan Huygens|Pierre-François Bouchard",
        "What did the most expensive tulip variety, 'Semper Augustus', look like?|It had vivid red or purple flame-like streaks on white petals|It was completely black with golden leaves|It was a giant yellow flower the size of a plate|It glowed in the dark at night",
        "What actually caused the dramatic flame-like patterns on the rarest tulips?|A plant virus spread by insects called aphids|Special fertilizer made from gold dust|Watering the bulbs with red wine|Grafting roses onto tulip stems",
        "Why were the virus-infected tulips so scarce?|Because the virus weakened the bulb, making them reproduce very slowly|Because the government burned most of them|Because they only bloomed once every fifty years|Because sheep ate them in the fields",
        "Why did traders begin buying and selling paper contracts instead of actual bulbs?|Because tulip bulbs spend most of the year underground in the soil|Because the bulbs were too heavy to carry into taverns|Because touching the bulbs was illegal|Because the flowers wilted in five minutes",
        "How much did a single bulb of 'Semper Augustus' cost at the peak of the mania in January 1637?|As much as a grand canal house in Amsterdam (more than 15 years of a craftsman's wages)|The price of a loaf of bread|About one gold coin|The price of a pair of boots",
        "When and where did the Tulip Mania bubble suddenly burst?|On 3 February 1637, at an auction in the city of Haarlem|In 1590 in Leiden|In 1700 in London|In 1656 in Rotterdam",
        "What triggered the sudden collapse of tulip prices?|Buyers at an auction suddenly refused to pay the inflated prices, causing overnight panic|A freezing winter storm killed all the bulbs in Holland|A cure for the tulip virus was discovered|The king banned all flower gardens",
        "By how much did tulip prices fall within days of the crash?|By ninety-nine percent|By ten percent|By twenty-five percent|Prices did not fall at all"
      ]
    },
    {
      num: 52, level: "B2",
      icon: "🏜️", genre: "უძველესი ცივილიზაციები",
      title: "პეტრას დაკარგული ქალაქი: ვარდისფერ კლდეებში ნაკვეთი საოცრება",
      subtitle: "Petra: The Rose-Red City of the Desert",
      time: "9 წთ",
      paragraphs: [
        [
          "Hidden deep within the rugged desert canyons of southern Jordan lies Petra, one of the most breathtaking archaeological wonders in the world. Unlike conventional ancient cities built from stone blocks stacked on top of one another, the monumental facades of Petra's temples and royal tombs were carved directly into the vertical rose-red sandstone cliffs.",
          "სამხრეთ იორდანიის უდაბნოს კლდოვანი კანიონების სიღრმეში დამალულია პეტრა — მსოფლიოს ერთ-ერთი ყველაზე თვალწარმტაცი არქეოლოგიური საოცრება. ჩვეულებრივი უძველესი ქალაქებისგან განსხვავებით, რომლებიც ერთმანეთზე დაწყობილი ქვის ბლოკებით შენდებოდა, პეტრას ტაძრებისა და სამეფო აკლდამების მონუმენტური ფასადები პირდაპირ ვერტიკალურ ვარდისფერ ქვიშაქვის კლდეებშია გამოკვეთილი."
        ],
        [
          "Petra was established around the fourth century BC as the capital of the Nabataeans, an industrious Arab nomadic tribe who settled down and became masters of desert trade. Positioned at the crossroads between Arabia, Egypt, and the Mediterranean, Petra controlled the lucrative caravan routes that carried frankincense, myrrh, cinnamon, and Indian spices.",
          "პეტრა დაარსდა ძველი წელთაღრიცხვით დაახლოებით მეოთხე საუკუნეში, როგორც ნაბატეველების — შრომისმოყვარე არაბული მომთაბარე ტომის — დედაქალაქი, რომლებიც მკვიდრ ცხოვრებაზე გადავიდნენ და უდაბნოს ვაჭრობის ნამდვილ ოსტატებად იქცნენ. არაბეთის, ეგვიპტისა და ხმელთაშუა ზღვის გზაჯვარედინზე მდებარე პეტრა აკონტროლებდა მომგებიან საქარავნო გზებს, რომლებითაც გადაჰქონდათ საკმეველი, მური, დარიჩინი და ინდური სანელებლები."
        ],
        [
          "The city's natural defences made it almost impossible to conquer. To enter Petra, visitors must walk through the 'Siq' — a narrow, winding gorge over a kilometre long, flanked by sheer rock walls soaring eighty metres into the sky. At the end of this dark canyon, the cleft suddenly opens to reveal 'Al-Khazneh' (The Treasury), a forty-metre-high Hellenistic facade carved with columns and statues that glows pink in the morning sun.",
          "ქალაქის ბუნებრივი დამცავი გარემო მის დაპყრობას თითქმის შეუძლებელს ხდიდა. პეტრაში შესასვლელად მნახველებმა უნდა გაიარონ „სიკი“ — კილომეტრზე მეტი სიგრძის ვიწრო, მიხვეულ-მოხვეული ხეობა, რომელსაც ორივე მხრიდან ცაში ოთხმოც მეტრზე აზიდული ციცაბო კლდეები დაჰყურებს. ამ ბნელი კანიონის ბოლოს ნაპრალი უეცრად იხსნება და ჩნდება „ალ-ხაზნე“ (საგანძური) — სვეტებითა და ქანდაკებებით შემკული ორმოცი მეტრის სიმაღლის ელინისტური ფასადი, რომელიც დილის მზეზე ვარდისფრად ბრწყინავს."
        ],
        [
          "How did a city of thirty thousand people flourish in a parched desert where rain falls only a few days a year? The Nabataeans were brilliant hydraulic engineers. They carved hundreds of underground cisterns, dams, and terracotta water pipes into the rock walls to capture every single drop of winter flash floods. This hidden water supply allowed Petra to have lush gardens, public baths, and fountains all year round!",
          "როგორ ყვაოდა ოცდაათი ათასი მცხოვრებისგან შემდგარი ქალაქი გვალვიან უდაბნოში, სადაც წვიმა წელიწადში მხოლოდ რამდენიმე დღეს მოდის? ნაბატეველები ბრწყინვალე ჰიდროინჟინრები იყვნენ. მათ კლდის კედლებში გამოკვეთეს ასობით მიწისქვეშა წყალსაცავი (ცისტერნა), კაშხალი და გამომწვარი თიხის მილსადენი, რათა ზამთრის უეცარი წყალმოვარდნების თითოეული წვეთი შეეგროვებინათ. ეს ფარული წყალმომარაგება პეტრას საშუალებას აძლევდა მთელი წლის განმავლობაში ჰქონოდა აყვავებული ბაღები, საჯარო აბანოები და შადრევნები!"
        ],
        [
          "After the Roman Empire annexed Petra in 106 AD and sea trade routes gradually replaced desert caravans, the city's wealth declined. A severe earthquake in 363 AD destroyed much of its water system, and by the seventh century, Petra was abandoned to the desert sands. Known only to local Bedouin shepherds for over a thousand years, it was reintroduced to the wider world in 1812 by Swiss explorer Johann Ludwig Burckhardt.",
          "მას შემდეგ, რაც ახ. წ. 106 წელს რომის იმპერიამ პეტრა შეიერთა და უდაბნოს ქარავნები თანდათან საზღვაო სავაჭრო გზებმა ჩაანაცვლა, ქალაქის სიმდიდრე შემცირდა. 363 წლის ძლიერმა მიწისძვრამ მისი წყალმომარაგების სისტემის დიდი ნაწილი დაანგრია და მეშვიდე საუკუნისთვის პეტრა უდაბნოს ქვიშებს მიატოვეს. ათას წელზე მეტი ხნის განმავლობაში ის მხოლოდ ადგილობრივი ბედუინი მწყემსებისთვის იყო ცნობილი, სანამ 1812 წელს შვეიცარიელმა მკვლევარმა იოჰან ლუდვიგ ბურკჰარდტმა იგი დანარჩენ მსოფლიოს ხელახლა არ გააცნო."
        ]
      ],
      glossary: [
        "facade|შენობის წინა მხარე / ფასადი", "sandstone cliff|ქვიშაქვის კლდე", "nomadic tribe|მომთაბარე ტომი",
        "frankincense and myrrh|საკმეველი და მური (სურნელოვანი ფისები)", "winding gorge|მიხვეულ-მოხვეული ვიწრო ხეობა", "parched desert|გამომშრალი / გვალვიანი უდაბნო",
        "hydraulic engineer|ჰიდროინჟინერი (წყლის სისტემების სპეციალისტი)", "cistern|მიწისქვეშა წყალსაცავი / ცისტერნა", "flash flood|უეცარი წყალმოვარდნა", "annex (verb)|შემოერთება (ტერიტორიის)"
      ],
      questions: [
        "How were the famous temples and royal tombs of Petra constructed?|They were carved directly into the vertical rose-red sandstone cliffs|They were built from white marble blocks brought from Greece|They were made of mud bricks dried in the sun|They were built of wood from cedar forests",
        "Who founded Petra as their capital around the fourth century BC?|The Nabataeans, an Arab nomadic tribe who became masters of trade|The Roman Emperors|The Pharaohs of Egypt|Alexander the Great's soldiers",
        "What valuable goods did caravans carry through Petra?|Frankincense, myrrh, cinnamon, and Indian spices|Coal, iron, and timber|Potatoes, corn, and tomatoes|Furs and amber from the north",
        "What is the 'Siq' that visitors must walk through to enter Petra?|A narrow, winding gorge over a kilometre long with 80-metre-high rock walls|A long underground tunnel beneath a river|A wide stone bridge with twenty arches|A wooden staircase over a mountain peak",
        "What famous monument appears at the end of the Siq gorge?|Al-Khazneh (The Treasury), a forty-metre-high carved facade|The Great Pyramid|The Colosseum|The Temple of Artemis",
        "Approximately how many people lived in Petra at its peak?|Around thirty thousand people|Only five hundred people|One million people|Two thousand people",
        "How did the Nabataeans supply Petra with water in the dry desert?|They carved cisterns, dams, and terracotta pipes to capture winter flash floods|They carried water in buckets from the Mediterranean Sea|They melted snow from high mountains in summer|They dug a canal from the Nile River",
        "What two factors led to the gradual decline and abandonment of Petra?|Sea trade routes replaced caravans, and a severe earthquake in 363 AD damaged its water system|A volcanic eruption buried the city in ash|The sandstone cliffs melted in the rain|A plague of locusts ate all the trees",
        "Who knew the location of Petra during the thousand years it was forgotten by the outside world?|Local Bedouin shepherds|Venetian sailors|French engineers|Nobody at all",
        "When and by whom was Petra reintroduced to the wider world?|In 1812, by Swiss explorer Johann Ludwig Burckhardt|In 1799, by Pierre-François Bouchard|In 1922, by Howard Carter|In 1492, by Christopher Columbus"
      ]
    },
    {
      num: 53, level: "B2",
      icon: "🕰️", genre: "ფიზიოლოგია და მეცნიერება",
      title: "ცირკადული რიტმები და ადამიანის ბიოლოგიური საათი",
      subtitle: "Circadian Rhythms: The Master Clock Inside Our Cells",
      time: "9 წთ",
      paragraphs: [
        [
          "Have you ever noticed that you naturally feel alert at certain hours of the day, hungry around the same time each afternoon, and sleepy when night falls — even if you are not wearing a watch? This daily cycle is governed by 'circadian rhythms' (from the Latin 'circa diem', meaning 'around a day'), an internal twenty-four-hour biological clock that regulates almost every function of the human body.",
          "შეგიმჩნევიათ თუ არა, რომ დღის გარკვეულ საათებში ბუნებრივად გრძნობთ სიფხიზლეს, შუადღისას დაახლოებით ერთსა და იმავე დროს გშივდებათ, ხოლო დაღამებისას გეძინებათ — მაშინაც კი, როცა საათი არ გიკეთიათ? ამ დღიურ ციკლს მართავს „ცირკადული რიტმები“ (ლათინურიდან „circa diem“, რაც ნიშნავს „დაახლოებით ერთ დღეს“) — შინაგანი ოცდაოთხსაათიანი ბიოლოგიური საათი, რომელიც ადამიანის ორგანიზმის თითქმის ყველა ფუნქციას არეგულირებს."
        ],
        [
          "The first scientific proof that internal clocks exist independently of sunlight came in 1729 from French astronomer Jean-Jacques d'Ortous de Mairan. He noticed that the leaves of a mimosa plant opened towards the sun every morning and closed at dusk. Curious, he placed the plant inside a pitch-black cupboard where no sunlight could reach it. To his amazement, the plant continued to open its leaves every morning and close them every night on its own internal schedule!",
          "პირველი მეცნიერული მტკიცებულება იმისა, რომ შინაგანი საათი მზის სინათლისგან დამოუკიდებლად არსებობს, 1729 წელს ფრანგმა ასტრონომმა ჟან-ჟაკ დ’ორტუ დე მერანმა წარმოადგინა. მან შეამჩნია, რომ მიმოზის ფოთლები ყოველ დილით მზისკენ იშლებოდა, ხოლო შებინდებისას იკეცებოდა. ცნობისმოყვარეობის გამო მან მცენარე სრულიად ბნელ კარადაში მოათავსა, სადაც მზის სხივი ვერ აღწევდა. მისდა გასაოცრად, მცენარემ საკუთარი შინაგანი გრაფიკით გააგრძელა ფოთლების გაშლა ყოველ დილით და დაკეცვა ყოველ ღამით!"
        ],
        [
          "In humans, the 'master clock' is a tiny cluster of about twenty thousand nerve cells in the brain called the suprachiasmatic nucleus (SCN), located right above the optic nerves. When morning sunlight enters our eyes, specialized light-sensitive cells send a direct signal to this master clock. The brain then stops producing melatonin (the sleep hormone) and raises body temperature and cortisol levels to wake us up.",
          "ადამიანებში „მთავარი საათი“ არის ტვინში, მხედველობის ნერვების ზუსტად ზემოთ მდებარე დაახლოებით ოცი ათასი ნერვული უჯრედისგან შემდგარი პაწაწინა გროვა — სუპრაქიაზმური ბირთვი (SCN). როდესაც დილის მზის სინათლე თვალში ხვდება, სინათლის მიმართ მგრძნობიარე სპეციალური უჯრედები პირდაპირ სიგნალს უგზავნიან ამ მთავარ საათს. ამის შემდეგ ტვინი წყვეტს მელატონინის (ძილის ჰორმონის) გამომუშავებას და გასაღვიძებლად სწევს სხეულის ტემპერატურასა და კორტიზოლის დონეს."
        ],
        [
          "Throughout the twenty-four-hour cycle, our body's abilities rise and fall in a predictable wave. For most people, mental alertness and concentration peak in late morning; physical coordination and reaction speed are sharpest in the afternoon; blood pressure reaches its highest point in the early evening; and around nine o'clock at night, the brain begins releasing melatonin again to prepare for sleep.",
          "ოცდაოთხსაათიანი ციკლის განმავლობაში ჩვენი სხეულის შესაძლებლობები პროგნოზირებადი ტალღისებური კანონზომიერებით იმატებს და იკლებს. ადამიანთა უმეტესობისთვის გონებრივი სიფხიზლე და კონცენტრაცია პიკს აღწევს გვიან დილით; ფიზიკური კოორდინაცია და რეაქციის სისწრაფე ყველაზე მკვეთრია ნაშუადღევს; არტერიული წნევა ყველაზე მაღალ ნიშნულს აღწევს ადრე საღამოს; ხოლო ღამის ცხრა საათისთვის ტვინი კვლავ იწყებს მელატონინის გამოყოფას ძილისთვის მოსამზადებლად."
        ],
        [
          "In 2017, three American geneticists won the Nobel Prize for discovering the specific genes and proteins inside individual cells that tick like a molecular clockwork. Understanding circadian rhythms has given rise to 'chronomedicine' — doctors now know that certain medications work much better, and with fewer side effects, when taken at the exact hour of the day that matches the body's internal clock.",
          "2017 წელს სამმა ამერიკელმა გენეტიკოსმა მოიპოვა ნობელის პრემია ცალკეულ უჯრედებში იმ კონკრეტული გენებისა და ცილების აღმოჩენისთვის, რომლებიც მოლეკულური საათის მექანიზმივით წიკწიკებენ. ცირკადული რიტმების შესწავლამ დასაბამი მისცა „ქრონომედიცინას“ — დღეს ექიმებმა იციან, რომ გარკვეული მედიკამენტები გაცილებით უკეთ და ნაკლები გვერდითი მოვლენებით მოქმედებს მაშინ, როცა მათ დღის ზუსტად იმ საათზე იღებენ, რომელიც სხეულის შინაგან საათს ემთხვევა."
        ]
      ],
      glossary: [
        "circadian rhythm|ცირკადული (დღე-ღამური) რიტმი", "alert (adjective)|ფხიზელი / ყურადღებიანი", "dusk|შებინდება / მწუხრი",
        "pitch-black|უკუნი / სრულიად ბნელი", "optic nerve|მხედველობის ნერვი", "melatonin|მელატონინი (ძილის მარეგულირებელი ჰორმონი)",
        "alertness|გონებრივი სიფხიზლე", "reaction speed|რეაქციის სისწრაფე", "geneticist|გენეტიკოსი (მეცნიერი)", "side effect|გვერდითი მოვლენა (წამლის)"
      ],
      questions: [
        "What does the Latin phrase 'circa diem' mean?|Around a day|Under the moon|Deep in sleep|Fast as light",
        "How did French astronomer Jean-Jacques d'Ortous de Mairan prove in 1729 that plants have an internal clock?|He placed a mimosa plant in a pitch-black cupboard, and its leaves still opened and closed on schedule|He took a plant to the North Pole in winter|He watered a plant with warm milk at night|He shone a candle on a tree for a month",
        "Where is the human body's 'master clock' located?|In a tiny cluster of nerve cells in the brain, right above the optic nerves|Inside the chambers of the heart|In the palms of the hands|In the stomach",
        "What happens in the brain when morning sunlight enters our eyes?|The brain stops producing melatonin and raises body temperature and cortisol levels|The brain releases melatonin to make us sleep|Body temperature drops by five degrees|The optic nerves close for an hour",
        "What is the main function of the hormone melatonin?|It prepares the body for sleep when evening arrives|It makes muscles stronger during afternoon exercise|It helps digest food at lunch|It raises blood pressure in the morning",
        "At what time of day do mental alertness and concentration usually peak for most people?|In late morning|At three in the morning|Late at night|Right after a heavy dinner",
        "When are physical coordination and reaction speed usually sharpest?|In the afternoon|At dawn when waking up|At midnight|During deep sleep",
        "Around what time at night does the brain typically begin releasing melatonin again?|Around nine o'clock at night|At six in the morning|At noon|At four in the afternoon",
        "Why did three American geneticists win the Nobel Prize in 2017?|For discovering the specific genes and proteins inside cells that control circadian rhythms|For inventing the first alarm clock|For discovering the hormone insulin|For mapping the bottom of the ocean",
        "What is 'chronomedicine'?|Giving medications at the specific hour of the day when they work best according to the body's clock|Using antique medical tools from the 1700s|Treating patients only during the winter months|Replacing all medicines with herbal tea"
      ]
    },
    {
      num: 54, level: "B2",
      icon: "🌫️", genre: "გარემოს ისტორია",
      title: "ლონდონის 1952 წლის დიდი სმოგი და სუფთა ჰაერის კანონი",
      subtitle: "The Great Smog of 1952 and the Fight for Clean Air",
      time: "9 წთ",
      paragraphs: [
        [
          "For centuries, London was famous for its thick, yellowish fogs, which nineteenth-century writers nicknamed 'pea-soupers'. These fogs were not purely natural weather events; they were caused by smoke from millions of domestic coal fires and factory chimneys mixing with the damp mist rising from the River Thames. However, until December 1952, most citizens viewed the smoke simply as an unavoidable part of urban life.",
          "საუკუნეების განმავლობაში ლონდონი ცნობილი იყო თავისი სქელი, მოყვითალო ნისლით, რომელსაც მეცხრამეტე საუკუნის მწერლებმა „ბარდის წვნიანი“ (pea-souper) შეარქვეს. ეს ნისლი არ ყოფილა მხოლოდ ბუნებრივი მოვლენა; იგი წარმოიქმნებოდა მილიონობით საოჯახო ნახშირის ბუხრისა და ქარხნის საკვამურის კვამლის შერევით მდინარე ტემზიდან ამომავალ ნესტიან ნისლთან. თუმცა, 1952 წლის დეკემბრამდე მოქალაქეთა უმეტესობა ამ კვამლს ქალაქური ცხოვრების გარდაუვალ ნაწილად მიიჩნევდა."
        ],
        [
          "On Friday, the fifth of December 1952, an unusual weather phenomenon known as a 'temperature inversion' settled over the Thames Valley. Normally, warm air near the ground rises and carries smoke away into the upper atmosphere. That week, however, a layer of warm air high in the sky acted like a giant lid, trapping a layer of freezing, windless air right over the city.",
          "1952 წლის 5 დეკემბერს, პარასკევს, ტემზის ხეობის თავზე დამყარდა უჩვეულო მეტეოროლოგიური მოვლენა, რომელიც „ტემპერატურული ინვერსიის“ სახელითაა ცნობილი. ჩვეულებრივ, მიწისპირა თბილი ჰაერი მაღლა ადის და კვამლი ატმოსფეროს ზედა ფენებში მიაქვს. მაგრამ იმ კვირაში ცაში არსებულმა თბილი ჰაერის ფენამ გიგანტური თავსახურის როლი შეასრულა და ქალაქის თავზე ყინულივით ცივი, უქარო ჰაერის ფენა გამოკეტა."
        ],
        [
          "Because the weather was bitterly cold, Londoners burned huge quantities of cheap, low-grade coal in their home fireplaces to stay warm. With no wind to blow the pollution away, thousands of tonnes of black soot and toxic sulphur dioxide accumulated at street level. Within twenty-four hours, the sky turned dark yellow-black, creating the worst air-pollution crisis in European history.",
          "რადგან სუსხიანი სიცივე იდგა, ლონდონელები გასათბობად სახლის ბუხრებში დიდი რაოდენობით იაფფასიან, დაბალი ხარისხის ქვანახშირს წვავდნენ. უქარობის გამო დაბინძურება ვერ იფანტებოდა და ქუჩის დონეზე დაგროვდა ათასობით ტონა შავი ჭვარტლი და მომწამვლელი გოგირდის დიოქსიდი. ოცდაოთხ საათში ცა მუქ მოყვითალო-შავ ფერად შეიღება, რამაც ევროპის ისტორიაში ჰაერის დაბინძურების უმძიმესი კრიზისი გამოიწვია."
        ],
        [
          "For five days, visibility dropped to less than one metre! Pedestrians could not see their own feet on the pavement. All buses, trains, and flights were cancelled, and ambulances could not drive through the streets, forcing patients to walk to hospitals. The toxic smog even crept indoors: concerts were cancelled because audiences in halls could not see the stage, and cinemas closed because the projector beam could not reach the screen!",
          "ხუთი დღის განმავლობაში ხილვადობა ერთ მეტრზე ნაკლებამდე დაეცა! ქვეითები ტროტუარზე საკუთარ ფეხებსაც კი ვერ ხედავდნენ. გაუქმდა ყველა ავტობუსი, მატარებელი და ავიარეისი, სასწრაფო დახმარების მანქანები ქუჩებში ვერ გადაადგილდებოდნენ და პაციენტებს საავადმყოფოებში ფეხით მისვლა უწევდათ. მომწამვლელმა სმოგმა შენობებშიც კი შეაღწია: კონცერტები გაუქმდა, რადგან დარბაზში მსხდომი მაყურებელი სცენას ვერ ხედავდა, ხოლო კინოთეატრები დაიხურა, რადგან პროექტორის სხივი ეკრანამდე ვერ აღწევდა!"
        ],
        [
          "When the wind finally returned on the ninth of December and blew the smog out to sea, the true scale of the tragedy became clear: thousands of people had suffered severe respiratory illness. Shocked into action, the British Parliament passed the landmark Clean Air Act of 1956, which banned the burning of black coal in city zones and helped households switch to cleaner gas and electricity, forever changing environmental law.",
          "როდესაც 9 დეკემბერს ქარი საბოლოოდ ამოვარდა და სმოგი ზღვისკენ გაფანტა, ტრაგედიის ნამდვილი მასშტაბი ნათელი გახდა: ათასობით ადამიანი მძიმე სასუნთქი გზების დაავადებით დაზარალდა. მომხდარით შეძრულმა ბრიტანეთის პარლამენტმა 1956 წელს მიიღო ისტორიული „სუფთა ჰაერის აქტი“, რომელმაც ქალაქის ზონებში შავი ქვანახშირის წვა აკრძალა და ოჯახებს უფრო სუფთა გაზსა და ელექტროენერგიაზე გადასვლაში დაეხმარა, რითაც გარემოსდაცვითი კანონმდებლობა სამუდამოდ შეცვალა."
        ]
      ],
      glossary: [
        "pea-souper|„ბარდის წვნიანი“ (სქელი ყვითელი ნისლის მეტსახელი)", "temperature inversion|ტემპერატურული ინვერსია (ჰაერის ფენების ჩაკეტვა)", "low-grade coal|დაბალი ხარისხის ქვანახშირი",
        "soot|ჭვარტლი / მური", "sulphur dioxide|გოგირდის დიოქსიდი (მომწამვლელი აირი)", "accumulate|დაგროვება",
        "visibility|ხილვადობა", "creep indoors|შენობაში შეპარვა / შეღწევა", "respiratory illness|სასუნთქი გზების დაავადება", "Clean Air Act|სუფთა ჰაერის კანონი"
      ],
      questions: [
        "What did nineteenth-century writers nickname London's thick yellowish fogs?|Pea-soupers|Black clouds|River snow|Winter blankets",
        "When did the Great Smog of London begin and how long did it last?|On 5 December 1952, lasting for five days (until 9 December)|In July 1956, lasting for two weeks|In January 1900, lasting for one night|In November 1928, lasting for a month",
        "What weather phenomenon trapped the cold, smoky air over the city?|A temperature inversion, where a high layer of warm air acted like a lid|A tropical hurricane|A sudden summer heatwave|Strong winds blowing from the sea",
        "Why did Londoners burn so much low-grade coal during that week in December 1952?|Because the weather was bitterly cold and they needed to heat their homes|Because electricity had not been invented yet|Because coal was free that week|To cook food for a winter festival",
        "What two pollutants accumulated at street level during the Great Smog?|Black soot and toxic sulphur dioxide|Sand and volcanic ash|Pollen and sea salt|Carbonated water and oil",
        "How low did visibility drop in the streets of London during the crisis?|To less than one metre (pedestrians could not see their own feet)|To about five hundred metres|To one kilometre|Visibility remained completely clear",
        "Why were concerts and cinemas forced to close during the Great Smog?|Because the smog crept indoors and audiences could not see the stage or screen|Because all the musicians left the city by plane|Because the government banned music|Because the buildings flooded with river water",
        "What finally cleared the Great Smog on the ninth of December?|The wind returned and blew the smog out to sea|Heavy snow washed the air clean|Firefighters sprayed water into the sky|Everyone turned on electric fans",
        "What landmark law did the British Parliament pass in 1956 as a result of the tragedy?|The Clean Air Act of 1956|The Underground Railway Act|The National Park Law|The River Thames Bridge Act",
        "How did the Clean Air Act of 1956 reduce urban air pollution?|It banned the burning of black coal in city zones and helped homes switch to gas and electricity|It banned all cars and buses from Britain|It moved all factories to the countryside overnight|It required citizens to wear masks outdoors"
      ]
    },
    {
      num: 55, level: "B2",
      icon: "🪸", genre: "ოკეანის ეკოსისტემა",
      title: "როგორ ინახავს მარჯნის რიფები ოკეანის ბინადართა მეოთხედს",
      subtitle: "Coral Reefs: The Rainforests of the Sea",
      time: "9 წთ",
      paragraphs: [
        [
          "Covering less than one percent of the ocean floor, tropical coral reefs are among the most biologically diverse ecosystems on Earth. Often called the 'rainforests of the sea', these vibrant underwater structures provide shelter, food, and breeding grounds for an astonishing twenty-five percent of all known marine species, including four thousand species of fish, sea turtles, crabs, and sponges.",
          "მიუხედავად იმისა, რომ ტროპიკული მარჯნის რიფები ოკეანის ფსკერის ერთ პროცენტზე ნაკლებს იკავებს, ისინი დედამიწაზე ბიოლოგიურად ყველაზე მრავალფეროვან ეკოსისტემებს განეკუთვნება. ეს ფერადი წყალქვეშა ნაგებობები, რომლებსაც ხშირად „ზღვის ტროპიკულ ტყეებს“ უწოდებენ, თავშესაფარს, საკვებსა და გამრავლების ადგილს აძლევს ყველა ცნობილი ზღვის სახეობის გასაოცარ ოცდახუთ პროცენტს, მათ შორის ოთხი ათასი სახეობის თევზს, ზღვის კუებს, კიბორჩხალებსა და ღრუბლებს."
        ],
        [
          "At first glance, corals look like colourful underwater rocks or exotic plants, but they are actually colonies of thousands of tiny, soft-bodied animals called polyps, closely related to jellyfish and sea anemones. Each tiny polyp absorbs calcium and carbonate minerals from seawater to build a hard, cup-shaped skeleton of limestone around itself for protection.",
          "ერთი შეხედვით მარჯნები ფერად წყალქვეშა ქვებს ან ეგზოტიკურ მცენარეებს ჰგავს, მაგრამ სინამდვილეში ისინი წარმოადგენენ ათასობით პაწაწინა, რბილსხეულიანი ცხოველის — პოლიპის კოლონიებს, რომლებიც მედუზებისა და აქტინიების ახლო ნათესავები არიან. თითოეული პაწაწინა პოლიპი თავდაცვის მიზნით ზღვის წყლიდან იწოვს კალციუმისა და კარბონატის მინერალებს და საკუთარი სხეულის გარშემო იშენებს ფنجانის ფორმის მყარ კირქვის ჩონჩხს."
        ],
        [
          "When one generation of polyps dies, their hard limestone skeletons remain in place, and a new generation builds right on top of them. Over thousands of years, these microscopic skeletons accumulate to form massive reefs. The largest of them all — Australia's Great Barrier Reef — stretches over two thousand three hundred kilometres and is the only structure built by living creatures that can be seen from space!",
          "როდესაც პოლიპების ერთი თაობა კვდება, მათი მყარი კირქვის ჩონჩხი ადგილზე რჩება, ახალი თაობა კი პირდაპირ მათ ზემოდან იშენებს საფარს. ათასობით წლის განმავლობაში ეს მიკროსკოპული ჩონჩხები გროვდება და წარმოქმნის უზარმაზარ რიფებს. მათ შორის უდიდესი — ავსტრალიის დიდი ბარიერული რიფი — ორი ათას სამას კილომეტრზე მეტ მანძილზეა გადაჭიმული და წარმოადგენს ცოცხალი არსებების მიერ აგებულ ერთადერთ სტრუქტურას, რომელიც კოსმოსიდან ჩანს!"
        ],
        [
          "The secret behind the success of coral reefs in nutrient-poor tropical waters is a remarkable symbiotic partnership. Living inside the tissues of each coral polyp are microscopic single-celled algae called zooxanthellae. The coral protects the algae and supplies them with compounds needed for photosynthesis; in return, the algae use sunlight to produce oxygen and sugars, providing up to ninety percent of the coral's energy and giving the reef its brilliant colours.",
          "საკვები ნივთიერებებით ღარიბ ტროპიკულ წყლებში მარჯნის რიფების წარმატების საიდუმლო გასაოცარ სიმბიოზურ თანამშრომლობაშია. თითოეული მარჯნის პოლიპის ქსოვილებში ცხოვრობენ მიკროსკოპული ერთუჯრედიანი წყალმცენარეები — ზოოქსანტელები. მარჯანი იცავს წყალმცენარეებს და აწვდის ფოტოსინთეზისთვის საჭირო ნაერთებს; სანაცვლოდ კი წყალმცენარეები მზის სინათლის გამოყენებით გამოიმუშავებენ ჟანგბადსა და შაქრებს, რითაც მარჯანს ენერგიის ოთხმოცდაათ პროცენტამდე აწვდიან და რიფს კაშკაშა ფერებს სძენენ."
        ],
        [
          "Because these algae need sunlight, warm-water coral reefs can only grow in clear, shallow water less than fifty metres deep. However, if ocean temperatures rise by even one or two degrees for several weeks, the stressed coral polyps expel the colourful algae, turning the reef stark white — a phenomenon known as 'coral bleaching'. Today, marine biologists are growing heat-resistant coral fragments in underwater nurseries to help restore damaged reefs.",
          "რადგან ამ წყალმცენარეებს მზის სინათლე სჭირდებათ, თბილი წყლის მარჯნის რიფებს ზრდა მხოლოდ ორმოცდაათ მეტრზე ნაკლები სიღრმის სუფთა, თავთხელ წყალში შეუძლიათ. თუმცა, თუ ოკეანის ტემპერატურა რამდენიმე კვირის განმავლობაში თუნდაც ერთი ან ორი გრადუსით მოიმატებს, სტრესის ქვეშ მყოფი მარჯნის პოლიპები გარეთ გამოდევნიან ფერად წყალმცენარეებს და რიფი სრულიად თეთრდება — ამ მოვლენას „მარჯნის გაუფერულება“ ეწოდება. დღეს საზღვაო ბიოლოგები წყალქვეშა სანერგეებში ზრდიან სიცხისადმი გამძლე მარჯნის ფრაგმენტებს დაზიანებული რიფების აღსადგენად."
        ]
      ],
      glossary: [
        "breeding ground|გამრავლების / ქვირითობის ადგილი", "polyp|პოლიპი (მარჯნის პაწაწინა ცხოველი)", "limestone skeleton|კირქვის ჩონჩხი",
        "symbiotic partnership|სიმბიოზური (ურთიერთსასარგებლო) თანაცხოვრება", "tissue|ქსოვილი (ბიოლოგიური)", "microscopic algae|მიკროსკოპული წყალმცენარეები",
        "expel|გამოდევნა / გარეთ გამოშვება", "coral bleaching|მარჯნის გაუფერულება (გათეთრება)", "heat-resistant|სიცხისადმი გამძლე", "underwater nursery|წყალქვეშა სანერგე"
      ],
      questions: [
        "What percentage of the ocean floor do tropical coral reefs cover, and what percentage of marine species do they support?|They cover less than 1% of the ocean floor, but support 25% of all marine species|They cover 50% of the ocean floor and support 90% of species|They cover 25% of the ocean floor and support 1% of species|They cover 10% of the ocean floor",
        "What are corals in biological terms?|Colonies of thousands of tiny, soft-bodied animals called polyps|Underwater volcanic rocks|Giant marine trees with roots|Frozen salt crystals",
        "Which marine animals are coral polyps closely related to?|Jellyfish and sea anemones|Crabs and lobsters|Sharks and rays|Sea turtles",
        "How do coral polyps build their protective cup-shaped skeletons?|By absorbing calcium and carbonate minerals from seawater to form limestone|By gathering sand grains with their tentacles|By eating small pebbles|By freezing water around themselves",
        "How long is Australia's Great Barrier Reef, and what makes it unique from space?|It is over 2,300 km long and is the only structure built by living creatures visible from space|It is 100 km long and glows in the dark|It is 10,000 km long and made of iron|It sits above the water like a mountain range",
        "What lives inside the tissues of each coral polyp in a symbiotic partnership?|Microscopic single-celled algae called zooxanthellae|Tiny baby fish|Baby crabs|Magnetite crystals",
        "How much of a coral's energy is provided by the sugars produced by its internal algae?|Up to ninety percent|Only five percent|About twenty percent|Zero percent",
        "Why can warm-water coral reefs only grow in clear, shallow water less than fifty metres deep?|Because their symbiotic algae need sunlight for photosynthesis|Because deeper water has too much oxygen|Because large whales eat corals in deep water|Because limestone dissolves below fifty metres",
        "What causes 'coral bleaching', turning a vibrant reef stark white?|Rising water temperatures stress the polyps, causing them to expel their colourful algae|White sand from the beach covers the reef|Salt crystals freeze on the coral in winter|Sunlight bleaches the rock like laundry",
        "How are marine biologists working to restore damaged reefs today?|By growing heat-resistant coral fragments in underwater nurseries|By painting white reefs with waterproof colours|By building plastic reefs in factories|By moving all corals to freshwater lakes"
      ]
    },
    {
      num: 56, level: "B2",
      icon: "⚙️", genre: "უძველესი ტექნოლოგია",
      title: "ანΤΙΚითერას მექანიზმი: უძველესი ანალოგური კომპიუტერი",
      subtitle: "The Antikythera Mechanism: A Clockwork Universe",
      time: "9 წთ",
      paragraphs: [
        [
          "In the spring of 1900, a crew of Greek sponge divers sought shelter from a storm near the tiny island of Antikythera, between Crete and the Peloponnese. When the storm subsided, diver Elias Stadiatos put on his heavy copper helmet and canvas diving suit and descended forty-five metres to the seabed. Instead of sponges, he stumbled upon the wreck of a Roman cargo ship that had sunk around 65 BC, filled with marble statues, bronze horses, and glassware.",
          "1900 წლის გაზაფხულზე ბერძენი ღრუბლის მომპოვებელი მყვინთავების ეკიპაჟმა შტორმს თავი შეაფარა კრეტასა და პელოპონესს შორის მდებარე პაწაწინა კუნძულ ანΤΙΚითერასთან. როდესაც ქარიშხალი ჩადგა, მყვინთავმა ელიას სტადიატოსმა დაიხურა სპილენძის მძიმე ჩაფხუტი, ჩაიცვა საყვინთაო კოსტიუმი და ზღვის ფსკერზე ორმოცდახუთი მეტრის სიღრმეზე ჩაეშვა. ზღვის ღრუბლების ნაცვლად, იგი წააწყდა ძვ. წ. დაახლოებით 65 წელს ჩაძირულ რომაულ სატვირთო გემს, რომელიც სავსე იყო მარმარილოს ქანდაკებებით, ბრინჯაოს ცხენებითა და მინის ჭურჭლით."
        ],
        [
          "Among the treasures brought up to the National Archaeological Museum in Athens was a corroded, green lump of bronze the size of a shoebox, encrusted with sea shells and limestone. At first, curators paid little attention to it until May 1902, when archaeologist Valerios Stais noticed that the lump had split open as it dried, revealing precisely cut bronze gearwheels with tiny triangular teeth and Greek astronomical inscriptions!",
          "ათენის ეროვნულ არქეოლოგიურ მუზეუმში ატანილ საგანძურს შორის იყო ფეხსაცმლის ყუთის ზომის ბრინჯაოს დაჟანგული, მწვანე გუნდა, რომელიც დაფარული იყო ნიჟარებითა და კირქვით. თავიდან მუზეუმის მცველებმა მას დიდი ყურადღება არ მიაქციეს, სანამ 1902 წლის მაისში არქეოლოგმა ვალერიოს სტაისმა არ შეამჩნია, რომ გაშრობისას გუნდა გაიბზარა და გამოჩნდა ზუსტად გამოჭრილი ბრინჯაოს კბილანები პაწაწინა სამკუთხა კბილებითა და ბერძნული ასტრონომიული წარწერებით!"
        ],
        [
          "The discovery stunned historians. Up until then, scholars firmly believed that complex gearwork had not been invented until the mechanical clock towers of fourteenth-century Europe — fifteen hundred years later! For decades, the fragile bronze fragments remained a puzzle until physicists used X-ray tomography and high-resolution 3D scanning to peer inside the corroded layers without damaging them.",
          "ამ აღმოჩენამ ისტორიკოსები გააოგნა. მანამდე მეცნიერებს მტკიცედ სჯეროდათ, რომ რთული კბილანური მექანიზმები მეოთხე საუკუნის ევროპულ კოშკის საათებამდე — ანუ თხუთმეტი საუკუნით გვიანობამდე — არ არსებობდა! ათწლეულების განმავლობაში ეს მყიფე ბრინჯაოს ფრაგმენტები გამოცანად რჩებოდა, სანამ ფიზიკოსებმა რენტგენული ტომოგრაფია და მაღალი გარჩევადობის 3D სკანირება არ გამოიყენეს დაზიანების გარეშე დაჟანგული ფენების შიგნით ჩასახედად."
        ],
        [
          "The scans revealed that the 'Antikythera Mechanism', built by Greek scientists around 150–100 BC, was the world's first analog computer! Housed in a wooden box with a hand crank on the side, it contained at least thirty interlocking bronze gears. When a user turned the crank to set a date, pointers on the front dial showed the exact positions of the Sun, the Moon, and the five planets known in antiquity across the zodiac.",
          "სკანირებამ გამოავლინა, რომ ძვ. წ. 150–100 წლებში ბერძენი მეცნიერების მიერ შექმნილი „ანΤΙΚითერას მექანიზმი“ მსოფლიოს პირველი ანალოგური კომპიუტერი იყო! ხის ყუთში მოთავსებული აპარატი, რომელსაც გვერდიდან ხელის სახელური ჰქონდა, შეიცავდა მინიმუმ ოცდაათ ერთმანეთზე გადაბმულ ბრინჯაოს კბილანას. როდესაც მომხმარებელი თარიღის დასაყენებლად სახელურს ატრიალებდა, წინა ციფერბლატის ისრები აჩვენებდა მზის, მთვარისა და ანტიკურ ხანაში ცნობილი ხუთი პლანეტის ზუსტ მდებარეობას ზოდიაქოს წრეზე."
        ],
        [
          "Even more astonishingly, the back of the device featured spiral dials that predicted solar and lunar eclipses decades in advance, and a tiny rotating half-black, half-silver ball that displayed the exact phase of the Moon! One small dial even tracked the चार-year cycle of the ancient Olympic Games. When the Roman ship sank, this technological knowledge was lost for over a millennium, reminding us how advanced ancient Greek science truly was.",
          "კიდევ უფრო გასაოცარი იყო ის, რომ მოწყობილობის უკანა მხარეს განთავსებული სპირალური ციფერბლატები ათწლეულებით ადრე წინასწარმეტყველებდა მზისა და მთვარის დაბნელებებს, ხოლო პაწაწინა მბრუნავი ნახევრად შავი და ნახევრად ვერცხლისფერი ბურთულა აჩვენებდა მთვარის ზუსტ ფაზას! ერთი პატარა ციფერბლატი უძველესი ოლიმპიური თამაშების ოთხწლიან ციკლსაც კი აღრიცხავდა. როდესაც რომაული გემი ჩაიძირა, ეს ტექნოლოგიური ცოდნა ათას წელზე მეტი ხნით დაიკარგა, რაც გვახსენებს, რამდენად განვითარებული იყო სინამდვილეში ძველბერძნული მეცნიერება."
        ]
      ],
      glossary: [
        "sponge diver|ზღვის ღრუბლის მომპოვებელი მყვინთავი", "shipwreck|ჩაძირული გემი", "corroded|დაჟანგული / კოროზიით დაზიანებული",
        "encrusted|დაფარული / შემოგარსული (ნიჟარებით, ქერქით)", "gearwheel|კბილანა (მექანიზმის ბორბალი)", "X-ray tomography|რენტგენული ტომოგრაფია",
        "analog computer|ანალოგური კომპიუტერი (მექანიკური გამომთვლელი)", "hand crank|ხელის სატრიალებელი სახელური", "solar and lunar eclipse|მზისა და მთვარის დაბნელება", "millennium|ათასწლეული"
      ],
      questions: [
        "Who discovered the ancient shipwreck off the island of Antikythera in the spring of 1900?|A crew of Greek sponge divers sheltering from a storm|A team of British astronomers|French soldiers digging trenches|Italian fishermen looking for pearls",
        "Approximately when had the Roman cargo ship sunk near Antikythera?|Around 65 BC|In 1400 AD|In 1812 AD|Around 2000 BC",
        "What did the Antikythera Mechanism look like when it was first brought to the museum in Athens?|A corroded green lump of bronze the size of a shoebox, encrusted with shells|A shiny golden sphere with glass windows|A long wooden telescope|A stone sundial",
        "What did archaeologist Valerios Stais notice in May 1902 when the bronze lump split open?|Precisely cut bronze gearwheels with tiny triangular teeth and Greek inscriptions|Gold coins from the Roman Empire|A rolled-up papyrus map|Seeds of ancient plants",
        "Why did the discovery of ancient bronze gears shock historians so deeply?|Because scholars believed complex gearwork was not invented until 14th-century European clock towers|Because they thought ancient Greeks didn't know how to melt bronze|Because the gears were made of modern steel|Because the inscriptions were written in English",
        "How did modern physicists examine the inside of the fragile mechanism without damaging it?|Using X-ray tomography and high-resolution 3D scanning|By boiling the bronze in olive oil|By cutting the gears apart with a saw|By melting the limestone with fire",
        "How did a user operate the Antikythera Mechanism?|By turning a hand crank on the side of the wooden box to set a date|By winding a steel spring with a key|By pouring water into the top|By placing it in direct sunlight",
        "What did the pointers on the front dial of the mechanism display?|The positions of the Sun, the Moon, and the five planets known in antiquity|The depth of the ocean water|The speed of the sailing ship|The temperature of the air",
        "What astronomical events could the spiral dials on the back of the device predict?|Solar and lunar eclipses decades in advance|Earthquakes and volcanic eruptions|Winter snowstorms|The arrival of comets",
        "What cultural event did one of the small dials on the mechanism track?|The four-year cycle of the ancient Olympic Games|The birthdays of Roman emperors|The schedule of theatre plays in Athens|The harvest season in Egypt"
      ]
    },
    {
      num: 57, level: "B2",
      icon: "🏙️", genre: "ურბანისტიკა",
      title: "„ურბანული სითბური კუნძულები“ და მწვანე სახურავების არქიტექტურა",
      subtitle: "Urban Heat Islands and the Rise of Green Roofs",
      time: "9 წთ",
      paragraphs: [
        [
          "If you have ever travelled from the countryside into a large city on a summer evening, you have probably noticed a striking change in temperature. While rural fields and forests cool down rapidly after sunset, the city centre remains hot and stuffy late into the night. Climatologists call this phenomenon the 'Urban Heat Island' effect, where metropolitan areas can be four to seven degrees Celsius warmer than the surrounding countryside.",
          "თუ ოდესმე ზაფხულის საღამოს ქალაქგარეთიდან დიდ ქალაქში შესულხართ, ალბათ შეგიმჩნევიათ ტემპერატურის მკვეთრი ცვლილება. მაშინ როცა სოფლის მინდვრები და ტყეები მზის ჩასვლის შემდეგ სწრაფად გრილდება, ქალაქის ცენტრი გვიან ღამემდე ცხელი და ჩახუთული რჩება. კლიმატოლოგები ამ მოვლენას „ურბანული სითბური კუნძულის“ ეფექტს უწოდებენ, რის გამოც დიდი ქალაქები გარშემორტყმულ სოფლის გარემოსთან შედარებით შეიძლება ოთხიდან შვიდ გრადუს ცელსიუსამდე უფრო თბილი იყოს."
        ],
        [
          "Several factors combine to turn modern cities into giant heat traps. In natural landscapes, trees provide shade and cool the air through 'evapotranspiration' — releasing moisture from their leaves, which absorbs heat as it evaporates. In cities, however, soil and vegetation have been replaced by dark asphalt roads, concrete pavements, and tar roofs. These dark, dry surfaces absorb up to ninety percent of the sun's radiation during the day and radiate it back into the night air like giant storage heaters.",
          "რამდენიმე ფაქტორი ერთიანდება იმისთვის, რომ თანამედროვე ქალაქები გიგანტურ სითბურ ხაფანგებად იქცეს. ბუნებრივ ლანდშაფტში ხეები ქმნის ჩრდილს და ჰაერს აგრილებს „ევაპოტრანსპირაციით“ — ფოთლებიდან გამოყოფს ტენს, რომელიც აორთქლებისას სითბოს შთანთქავს. ქალაქებში კი ნიადაგი და მცენარეული საფარი ჩანაცვლებულია მუქი ასფალტის გზებით, ბეტონის ტროტუარებითა და გუდრონის სახურავებით. ეს მუქი, მშრალი ზედაპირები დღისით მზის რადიაციის ოთხმოცდაათ პროცენტამდე შთანთქავს, ღამით კი გიგანტური გამათბობლებივით უკან ასხივებს ჰაერში."
        ],
        [
          "Furthermore, tall glass skyscrapers block cooling winds from flowing through the streets, while millions of cars, factory machines, and air conditioning units pump waste heat directly into the street-level air. This creates a vicious cycle: the hotter the city gets, the more residents turn on their air conditioners, which consume vast amounts of electricity and pump even more hot air outside!",
          "გარდა ამისა, მაღალი მინის ცათამბჯენები ქუჩებში გამაგრილებელ ქარს აკავებს, ხოლო მილიონობით მანქანა, ქარხნის დანადგარი და კონდიციონერი ნარჩენ სითბოს პირდაპირ ქუჩის ჰაერში გამოაფრქვევს. ეს ქმნის მანკიერ წრეს: რაც უფრო ცხელდება ქალაქი, მით უფრო მეტი მცხოვრები რთავს კონდიციონერს, რაც უზარმაზარ ელექტროენერგიას მოიხმარს და გარეთ კიდევ უფრო მეტ ცხელ ჰაერს უშვებს!"
        ],
        [
          "To break this cycle, urban planners in cities like Singapore, Basel, and Chicago are transforming empty flat rooftops into living 'green roofs'. Building a green roof involves covering the concrete roof deck with a tough waterproof membrane, a root barrier, a drainage layer, lightweight soil, and hardy drought-resistant plants called sedums.",
          "ამ მანკიერი წრის გასარღვევად სინგაპურის, ბაზელისა და ჩიკაგოს მსგავს ქალაქებში ურბანისტები ცარიელ ბრტყელ სახურავებს ცოცხალ „მწვანე სახურავებად“ გარდაქმნიან. მწვანე სახურავის მოწყობა გულისხმობს ბეტონის გადახურვის დაფარვას მტკიცე წყალგაუმტარი მემბრანით, ფესვებისგან დამცავი ფენით, სადრენაჟო შრით, მსუბუქი ნიადაგითა და გვალვაგამძლე მცენარეებით, რომლებსაც „სედუმი“ ეწოდება."
        ],
        [
          "The benefits of green roofs are remarkable. While a traditional black tar roof can reach a scorching seventy degrees Celsius under the summer sun, a green roof stays at a comfortable twenty-five degrees! The soil and plants act as natural insulation, cutting a building's summer cooling costs in half and keeping heat inside during winter. In addition, green roofs absorb up to seventy percent of rainwater during storms, preventing city drains from overflowing and providing a peaceful sanctuary for urban birds and bees.",
          "მწვანე სახურავების სარგებელი საოცარია. მაშინ როცა ტრადიციული შავი გუდრონის სახურავი ზაფხულის მზეზე შეიძლება სამოცდაათ გრადუს ცელსიუსამდე გავარვარდეს, მწვანე სახურავი ინარჩუნებს კომფორტულ ოცდახუთ გრადუსს! ნიადაგი და მცენარეები ბუნებრივი თბოიზოლაციის როლს ასრულებს, რაც ზაფხულში შენობის გაგრილების ხარჯებს ანახევრებს, ზამთარში კი სითბოს შიგნით ინარჩუნებს. ამასთანავე, წვიმის დროს მწვანე სახურავები ნალექის სამოცდაათ პროცენტამდე იწოვს, რაც ქალაქის სანიაღვრე სისტემას გადავსებისგან იცავს და ქალაქის ჩიტებისა და ფუტკრებისთვის მშვიდ თავშესაფარს ქმნის."
        ]
      ],
      glossary: [
        "Urban Heat Island|ურბანული სითბური კუნძული", "evapotranspiration|ევაპოტრანსპირაცია (მცენარის მიერ ტენის აორთქლება)", "tar roof|გუდრონით (შავი ფისით) დაფარული სახურავი",
        "radiate|გამოსხივება (სითბოსი/სინათლის)", "vicious cycle|მანკიერი (ჩაკეტილი) წრე", "waterproof membrane|წყალგაუმტარი მემბრანა (დამცავი ფენა)",
        "drainage layer|სადრენაჟო (წყლის გამტარი) ფენა", "drought-resistant|გვალვაგამძლე", "scorching|მწველი / გავარვარებული", "insulation|თბოიზოლაცია"
      ],
      questions: [
        "What is the 'Urban Heat Island' effect?|When metropolitan areas remain four to seven degrees Celsius warmer than the surrounding countryside|When an island in the ocean has an active volcano|When people light campfires in city parks in winter|When glass buildings reflect sunlight into the sky",
        "How do trees cool the air in natural landscapes besides providing shade?|Through evapotranspiration — releasing moisture from leaves that absorbs heat as it evaporates|By absorbing wind with their trunks|By turning green leaves white in summer|By pumping cold water into the air",
        "Why do dark asphalt roads and tar roofs make cities so hot at night?|They absorb up to 90% of solar radiation during the day and radiate it back into the air at night|They produce electricity when cars drive over them|They burn coal underground|They block moonlight from reaching the ground",
        "What 'vicious cycle' do air conditioning units create during summer heatwaves?|They consume vast electricity and pump waste heat outside, making the street air even hotter|They freeze the water pipes inside the walls|They make the wind blow too fast in the streets|They cause heavy rainstorms every afternoon",
        "What layers are placed underneath the soil when building a 'green roof'?|A tough waterproof membrane, a root barrier, and a drainage layer|Sheets of paper and cardboard|Heavy iron plates and sand|Wooden planks and woollen blankets",
        "Why are plants called 'sedums' commonly used on green roofs?|Because they are hardy and drought-resistant|Because they grow ten metres tall|Because they only bloom in winter snow|Because they need no sunlight at all",
        "How hot can a traditional black tar roof get under the summer sun compared to a green roof?|A black tar roof can reach 70°C, while a green roof stays around 25°C|Both roofs reach 100°C|A green roof gets hotter than a black roof|A black roof stays at 10°C",
        "How does a green roof help a building save energy in both summer and winter?|The soil and plants act as natural insulation, cutting summer cooling costs in half and keeping heat in during winter|It generates solar electricity from grass|It collects wind to turn turbines|It reflects snow onto the windows",
        "How do green roofs help prevent urban flooding during heavy rainstorms?|They absorb up to seventy percent of rainwater, preventing city drains from overflowing|They boil the rainwater away immediately|They channel all water straight into the subway|They block clouds from raining over the city",
        "What ecological benefit do green roofs provide for wildlife?|They create a peaceful sanctuary and habitat for urban birds, bees, and butterflies|They provide deep ponds for large fish|They allow deer to live on skyscrapers|They keep all insects out of the city"
      ]
    },
    {
      num: 58, level: "B2",
      icon: "💊", genre: "მედიცინა და ფსიქოლოგია",
      title: "პლაცებოს ეფექტი: როგორ მოქმედებს მოლოდინი გამოჯანმრთელებაზე",
      subtitle: "The Placebo Effect: The Power of Expectation in Medicine",
      time: "9 წთ",
      paragraphs: [
        [
          "Imagine a patient suffering from a severe headache who is given a white pill by a doctor in a clinical coat. Within thirty minutes, the pain vanishes completely — even though the pill contained nothing more than powdered sugar! This fascinating phenomenon is known as the 'placebo effect' (from the Latin word meaning 'I shall please'), where a patient experiences real physical improvement simply because they believe they are receiving an effective treatment.",
          "წარმოიდგინეთ ძლიერი თავის ტკივილით შეწუხებული პაციენტი, რომელსაც თეთრ ხალათში გამოწყობილი ექიმი თეთრ აბს აძლევს. ოცდაათ წუთში ტკივილი სრულად ქრება — მიუხედავად იმისა, რომ აბი შაქრის ფხვნილის გარდა არაფერს შეიცავდა! ეს საოცარი მოვლენა ცნობილია როგორც „პლაცებოს ეფექტი“ (ლათინური სიტყვიდან, რაც ნიშნავს „მე ვასიამოვნებ“), როდესაც პაციენტი განიცდის რეალურ ფიზიკურ გაუმჯობესებას მხოლოდ იმიტომ, რომ სჯერა — ეფექტიან მკურნალობას იღებს."
        ],
        [
          "The medical power of placebos was dramatically observed during the Second World War by an American anaesthetist named Henry Beecher. While treating wounded soldiers in a field hospital in Italy, Beecher ran out of morphine, a strong painkiller. Desperate to calm a soldier before surgery, a nurse injected him with harmless salt water (saline) while telling him it was morphine. Astonishingly, the soldier's pain subsided, and his blood pressure remained stable!",
          "პლაცებოს სამედიცინო ძალა მეორე მსოფლიო ომის დროს თვალსაჩინოდ შენიშნა ამერიკელმა ანესთეზიოლოგმა ჰენრი ბიჩერმა. იტალიის საველე ჰოსპიტალში დაჭრილი ჯარისკაცების მკურნალობისას ბიჩერს ძლიერი ტკივილგამაყუჩებელი — მორფინი გაუთავდა. ოპერაციის წინ ჯარისკაცის დასამშვიდებლად ექთანმა მას უვნებელი მარილიანი წყალი (ფიზიოლოგიური ხსნარი) შეუყვანა და უთხრა, რომ ეს მორფინი იყო. გასაოცარია, მაგრამ ჯარისკაცს ტკივილი გაუყუჩდა და არტერიული წნევაც სტაბილური დარჩა!"
        ],
        [
          "For a long time, sceptics thought the placebo effect was 'all in the patient's head' — meaning patients only imagined they felt better to please their doctor. However, modern brain-scanning technology (fMRI) has proved that the placebo effect triggers measurable, biological changes in the body. When a patient expects pain relief, the brain releases its own natural painkillers called endorphins and dopamine, which block pain signals in the spinal cord!",
          "დიდი ხნის განმავლობაში სკეპტიკოსებს ეგონათ, რომ პლაცებოს ეფექტი მხოლოდ „პაციენტის წარმოსახვაში“ იყო — ანუ პაციენტებს უბრალოდ ეჩვენებოდათ, რომ თავს უკეთ გრძნობდნენ. თუმცა, ტვინის სკანირების თანამედროვე ტექნოლოგიამ (fMRI) დაამტკიცა, რომ პლაცებოს ეფექტი ორგანიზმში იწვევს გაზომვად ბიოლოგიურ ცვლილებებს. როდესაც პაციენტი ტკივილის გაყუჩებას ელის, ტვინი გამოყოფს საკუთარ ბუნებრივ ტკივილგამაყუჩებლებს — ენდორფინებსა და დოფამინს, რომლებიც ზურგის ტვინში ტკივილის სიგნალებს ბლოკავს!"
        ],
        [
          "Researchers have also discovered that the context and presentation of a placebo change its strength. In clinical experiments, two sugar pills work better than one; large capsules work better than tiny tablets; and red or orange pills act as stimulants, while blue pills work better as sleeping aids! Even the doctor's warm, empathetic tone of voice significantly boosts the body's healing response.",
          "მკვლევრებმა ასევე აღმოაჩინეს, რომ პლაცებოს კონტექსტი და მიწოდების ფორმა ცვლის მის სიძლიერეს. კლინიკურ ცდებში ორი შაქრის აბი უკეთ მოქმედებს, ვიდრე ერთი; დიდი კაფსულები უკეთ მუშაობს, ვიდრე პაწაწინა ტაბლეტები; წითელი ან ნარინჯისფერი აბები მოქმედებს როგორც მასტიმულირებელი (გამამხნევებელი), ხოლო ლურჯი აბები უკეთ ეხმარება დაძინებაში! ექიმის თბილი, თანამგრძნობი ხმის ტონიც კი მნიშვნელოვნად აძლიერებს ორგანიზმის გამოჯანმრთელების რეაქციას."
        ],
        [
          "Conversely, negative expectations can trigger the 'nocebo effect' (Latin for 'I shall harm'): if a patient is warned that a harmless sugar pill causes nausea, they often develop a real upset stomach! Because expectations are so powerful, every new medicine today must be tested in a 'double-blind trial', where neither the patients nor the doctors know who is receiving the real drug and who is getting a placebo until the study is finished.",
          "საპირისპიროდ, უარყოფითმა მოლოდინმა შეიძლება გამოიწვიოს „ნოცებოს ეფექტი“ (ლათინურად: „მე ვავნებ“): თუ პაციენტს გააფრთხილებენ, რომ უვნებელი შაქრის აბი გულისრევას იწვევს, მას ხშირად მართლაც ეწყება კუჭის აშლილობა! რადგან მოლოდინის ძალა ასე დიდია, დღეს ყველა ახალი წამალი უნდა გამოიცადოს „ორმაგ ბრმა კვლევაში“, სადაც კვლევის დასრულებამდე არც პაციენტებმა და არც ექიმებმა არ იციან, ვინ იღებს ნამდვილ პრეპარატს და ვინ — პლაცებოს."
        ]
      ],
      glossary: [
        "placebo effect|პლაცებოს ეფექტი", "anaesthetist|ანესთეზიოლოგი (ექიმი)", "saline|ფიზიოლოგიური ხსნარი (მარილიანი წყალი)",
        "subside|ჩაცხრომა / კლება (ტკივილის, შტორმის)", "endorphins|ენდორფინები (ტვინის ბუნებრივი ტკივილგამაყუჩებლები)", "spinal cord|ზურგის ტვინი",
        "stimulant|მასტიმულირებელი / გამამხნევებელი საშუალება", "empathetic|თანამგრძნობი / ემპათიური", "nocebo effect|ნოცებოს ეფექტი (უარყოფითი მოლოდინით გამოწვეული ზიანი)", "double-blind trial|ორმაგი ბრმა კვლევა"
      ],
      questions: [
        "What does the Latin word 'placebo' literally mean?|I shall please|I shall heal|Pure sugar|Hidden medicine",
        "What did the nurse in Henry Beecher's WWII field hospital inject into the wounded soldier when morphine ran out?|Harmless salt water (saline)|Sugar mixed with lemon juice|Pure alcohol|Cold river water",
        "How have modern fMRI brain scans changed our understanding of the placebo effect?|They proved that it triggers real biological changes, releasing endorphins and dopamine in the brain|They showed that patients are only pretending to feel better|They proved that sugar cures bacterial infections|They showed that the brain stops working during pain",
        "What role do endorphins play when a patient expects pain relief?|They act as the brain's natural painkillers, blocking pain signals in the spinal cord|They make the patient feel hungry|They raise body temperature to 40 degrees|They cause the patient to fall asleep for days",
        "In clinical experiments on placebo presentation, which colour of sugar pill works best as a sleeping aid?|Blue pills|Bright red pills|Orange pills|Black pills",
        "How do red or orange placebo pills typically affect patients compared to blue ones?|Red or orange pills act as stimulants, while blue ones act as sleeping aids|Red pills make people sleepy, while blue ones give energy|Colour has no effect at all on expectations|Orange pills cause headaches",
        "How does a doctor's behaviour influence the placebo effect?|A warm, empathetic tone of voice significantly boosts the body's healing response|A cold, silent doctor makes the pill work twice as fast|The doctor's behaviour has zero effect|Only written notes work",
        "What is the 'nocebo effect'?|When negative expectations about a harmless treatment cause real unpleasant symptoms like nausea|When a real medicine works ten times faster than expected|When a patient forgets to take their medicine|When a pill tastes bitter",
        "What does the Latin word 'nocebo' mean?|I shall harm|I shall sleep|I do not know|Without pain",
        "What is a 'double-blind trial' in modern medical research?|A study where neither the patients nor the doctors know who gets the real drug and who gets the placebo|A test conducted in a completely dark room|An experiment on eyesight and glasses|A trial where patients take two pills at once"
      ]
    },
    {
      num: 59, level: "B2",
      icon: "🚂", genre: "გეოგრაფია და ტრანსპორტი",
      title: "ტრანსციმბირული მაგისტრალი: რვა დროის სარტყლის გადაკვეთა",
      subtitle: "The Trans-Siberian Railway: The Longest Train Journey on Earth",
      time: "9 წთ",
      paragraphs: [
        [
          "Stretching 9,289 kilometres from Moscow in Europe to the Pacific port of Vladivostok in Asia, the Trans-Siberian Railway is the longest single continuous railway line in the world. A non-stop journey from one end to the other takes seven full days and nights, crossing eight different time zones, two continents, sixteen major rivers, and nearly a third of the circumference of the globe!",
          "ევროპაში მდებარე მოსკოვიდან აზიაში, წყნარი ოკეანის პორტ ვლადივოსტოკამდე 9 289 კილომეტრზე გადაჭიმული ტრანსციმბირული მაგისტრალი მსოფლიოში ყველაზე გრძელი უწყვეტი სარკინიგზო ხაზია. ერთი ბოლოდან მეორემდე შეუსვენებელ მგზავრობას სრული შვიდი დღე და ღამე სჭირდება, რა დროსაც მატარებელი კვეთს რვა სხვადასხვა დროის სარტყელს, ორ კონტინენტს, თექვსმეტ დიდ მდინარესა და დედამიწის გარშემოწერილობის თითქმის მესამედს!"
        ],
        [
          "Before the railway was built, travelling across Siberia took months by horse-drawn sleigh in winter or along muddy river tracks in summer. Construction began simultaneously from both ends — Moscow in the west and Vladivostok in the east — in 1891. Tens of thousands of workers, soldiers, and engineers laboured using mostly hand tools: pickaxes, shovels, axes, and wheelbarrows.",
          "რკინიგზის აშენებამდე ციმბირის გადაკვეთას თვეები სჭირდებოდა ზამთარში ცხენებშებმული მარხილით, ხოლო ზაფხულში — ტალახიანი მდინარისპირა გზებით. მშენებლობა 1891 წელს ერთდროულად ორივე ბოლოდან — დასავლეთით მოსკოვიდან და აღმოსავლეთით ვლადივოსტოკიდან — დაიწყო. ათობით ათასი მუშა, ჯარისკაცი და ინჟინერი ძირითადად ხელის იარაღებით — წერაქვებით, ნიჩბებით, ცულებითა და ურიკებით შრომობდა."
        ],
        [
          "The geographical obstacles were immense. Workers had to clear dense taiga forests, build bridges across giant rivers like the Ob, the Yenisei, and the Amur, and lay tracks over permafrost that froze as hard as iron in winter — when temperatures dropped to minus fifty degrees Celsius — and turned into a sinking swamp when the top layer thawed in summer.",
          "გეოგრაფიული დაბრკოლებები უზარმაზარი იყო. მუშებს უწევდათ უღრანი ტაიგის ტყეების გაჩეხვა, ისეთ გიგანტურ მდინარეებზე ხიდების გადება, როგორებიცაა ობი, ენისეი და ამური, და ლიანდაგების დაგება მარადიული მზრალობის გრუნტზე, რომელიც ზამთარში (როცა ტემპერატურა მინუს ორმოცდაათ გრადუსამდე ეცემოდა) რკინასავით იყინებოდა, ხოლო ზაფხულში, ზედა ფენის გალღობისას, ჩამთრევ ჭაობად იქცეოდა."
        ],
        [
          "The most difficult section of all was the rocky shoreline of Lake Baikal, the deepest freshwater lake on Earth. While engineers blasted thirty-nine tunnels through the sheer granite cliffs around the southern tip of the lake, passengers and train carriages were carried across the forty-kilometre-wide lake on a giant British-built steam icebreaker ship called the 'Baikal'. In the middle of winter, when the ice was over a metre thick, workers even laid temporary railway tracks directly on top of the frozen lake!",
          "ყველაზე რთული მონაკვეთი იყო დედამიწის უღრმესი მტკნარი ტბის — ბაიკალის კლდოვანი სანაპირო. სანამ ინჟინრები ტბის სამხრეთ კიდის გარშემო ციცაბო გრანიტის კლდეებში ოცდაცხრამეტ გვირაბს აფეთქებით გაიყვანდნენ, მგზავრები და მატარებლის ვაგონები ორმოცი კილომეტრის სიგანის ტბაზე გადაჰყავდათ ბრიტანეთში აგებული გიგანტური ორთქლის ყინულმჭრელი გემით, სახელად „ბაიკალი“. შუა ზამთარში კი, როცა ყინულის სისქე ერთ მეტრს აჭარბებდა, მუშები დროებით ლიანდაგებს პირდაპირ გაყინული ტბის ზედაპირზე აგებდნენ!"
        ],
        [
          "Completed in 1916, the railway transformed the economy and geography of Eurasia. Today, the line is fully electrified. Inside every passenger carriage, a traditional hot-water urn called a 'samovar' is kept boiling day and night, and passengers from all over the world share tea, food, and stories as the endless birch forests, mountains, and steppes roll past the window.",
          "1916 წელს დასრულებულმა რკინიგზამ გარდაქმნა ევრაზიის ეკონომიკა და გეოგრაფია. დღეს მაგისტრალი სრულად ელექტროფიცირებულია. თითოეულ სამგზავრო ვაგონში დღე და ღამე დუღს წყლის ტრადიციული ჭურჭელი — სამოვარი, და მსოფლიოს სხვადასხვა კუთხიდან შეკრებილი მგზავრები ერთმანეთს უზიარებენ ჩაის, საკვებსა და ისტორიებს, სანამ ფანჯრის მიღმა უსასრულო არყის ხის ტყეები, მთები და სტეპები მიჰქრის."
        ]
      ],
      glossary: [
        "continuous|უწყვეტი", "time zone|დროის სარტყელი", "circumference of the globe|დედამიწის გარშემოწერილობა",
        "simultaneously|ერთდროულად", "pickaxe and wheelbarrow|წერაქვი და ურიკა", "taiga|ტაიგა (ჩრდილოეთის წიწვოვანი ტყე)",
        "thaw (verb)|გალღობა / დნობა", "icebreaker ship|ყინულმჭრელი გემი", "electrified|ელექტროფიცირებული", "birch forest|არყის ხის ტყე"
      ],
      questions: [
        "How long is the Trans-Siberian Railway from Moscow to Vladivostok?|9,289 kilometres|2,300 kilometres|20,000 kilometres|4,500 kilometres",
        "How many days and how many time zones does a non-stop journey across the entire line take?|Seven full days and nights, crossing eight time zones|Two days, crossing three time zones|Fourteen days, crossing twenty time zones|Twenty-four hours",
        "How did construction of the railway begin in 1891?|Simultaneously from both ends — Moscow in the west and Vladivostok in the east|Only from the middle at Lake Baikal|From north to south|Using giant tunnel-boring machines",
        "What tools did the tens of thousands of workers mainly use in the 1890s?|Hand tools such as pickaxes, shovels, axes, and wheelbarrows|Modern diesel bulldozers|Laser cutters|Helicopters",
        "Why was laying tracks over Siberian permafrost so difficult in summer?|When the top layer of frozen ground thawed in summer, it turned into a sinking swamp|The ground became too hot to touch|Volcanoes erupted under the tracks|Sandstorms buried the rails",
        "Which lake's rocky shoreline was the most difficult section of the entire railway?|Lake Baikal, the deepest freshwater lake on Earth|Gatun Lake|Silver Lake|The Caspian Sea",
        "How many tunnels did engineers have to blast through the granite cliffs around southern Lake Baikal?|Thirty-nine tunnels|Only two tunnels|One hundred tunnels|Five tunnels",
        "How were train carriages transported across Lake Baikal before the cliff tunnels were finished?|On a giant British-built steam icebreaker ship called the 'Baikal' (and on tracks laid over the ice in winter)|By pulling them with horses around the north of the lake|By dismantling every carriage into small boxes|On wooden rafts pulled by rowboats",
        "In what year was the entire Trans-Siberian Railway completed within Russian territory?|In 1916|In 1863|In 1960|In 1891",
        "What traditional item is kept boiling day and night inside every passenger carriage?|A hot-water urn called a 'samovar' for making tea|A pot of pumpkin soup|A charcoal stove for baking bread|A coffee machine"
      ]
    },
    {
      num: 60, level: "B2",
      icon: "🏛️", genre: "კულტურის ისტორია",
      title: "ალექსანდრიის ბიბლიოთეკა და უძველესი ცოდნის კერა",
      subtitle: "The Great Library of Alexandria: The Memory of the Ancient World",
      time: "9 წთ",
      paragraphs: [
        [
          "Founded in the third century BC in Egypt by the successors of Alexander the Great, the Royal Library of Alexandria was the most ambitious intellectual project of the ancient world. Its goal was nothing less than to collect a copy of every single book ever written — in Greek, Egyptian, Babylonian, Persian, and Hebrew — under one roof, creating a universal archive of human knowledge.",
          "ძველი წელთაღრიცხვით მესამე საუკუნეში ალექსანდრე მაკედონელის მემკვიდრეების მიერ ეგვიპტეში დაარსებული ალექსანდრიის სამეფო ბიბლიოთეკა ანტიკური სამყაროს ყველაზე მასშტაბური ინტელექტუალური პროექტი იყო. მისი მიზანი იყო არც მეტი, არც ნაკლები, ერთი სახურავის ქვეშ შეეგროვებინა ოდესმე დაწერილი ყველა წიგნის ასლი — ბერძნულ, ეგვიპტურ, ბაბილონურ, სპარსულ და ებრაულ ენებზე — და შეექმნა კაცობრიობის ცოდნის უნივერსალური არქივი."
        ],
        [
          "The library was part of a larger research institution called the 'Mouseion' — the shrine of the nine Muses, from which our modern word 'museum' derives. Paid a generous salary by the Ptolemaic kings and exempted from taxes, over a hundred brilliant scholars, mathematicians, poets, and astronomers lived and worked together in the Mouseion, dining in a grand communal hall and debating scientific theories in shaded courtyards.",
          "ბიბლიოთეკა წარმოადგენდა უფრო დიდი სამეცნიერო-კვლევითი დაწესებულების — „მუსეიონის“ (ცხრა მუზის ტაძრის) ნაწილს, საიდანაც მომდინარეობს ჩვენი თანამედროვე სიტყვა „მუზეუმი“. პტოლემეების დინასტიის მეფეებისგან დანიშნული უხვი ხელფასითა და გადასახადებისგან გათავისუფლებით, მუსეიონში ერთად ცხოვრობდა და მოღვაწეობდა ასზე მეტი ბრწყინვალე სწავლული, მათემატიკოსი, პოეტი და ასტრონომი, რომლებიც დიდ საერთო დარბაზში სადილობდნენ და ჩრდილიან ეზოებში სამეცნიერო თეორიებზე კამათობდნენ."
        ],
        [
          "To build the collection, Pharaoh Ptolemy III issued a remarkable law: every ship that sailed into the busy harbour of Alexandria had to surrender any scrolls found on board! Royal scribes copied the scrolls onto fresh papyrus; the Library kept the original manuscripts and returned the copies to the ship captains. At its peak, the library held between four hundred thousand and seven hundred thousand papyrus scrolls.",
          "კოლექციის შესავსებად ფარაონმა პტოლემე III-მ გამოსცა უჩვეულო კანონი: ალექსანდრიის დატვირთულ ნავსადგურში შემოსულ ყველა გემს უნდა ჩაებარებინა ბორტზე არსებული ნებისმიერი გრაგნილი! სამეფო გადამწერები გრაგნილებს ახალ პაპირუსზე იწერდნენ; ბიბლიოთეკა იტოვებდა ორიგინალ ხელნაწერებს, ხოლო ასლებს გემის კაპიტნებს უბრუნებდა. აყვავების პიკზე ბიბლიოთეკაში ინახებოდა ოთხასი ათასიდან შვიდასი ათასამდე პაპირუსის გრაგნილი."
        ],
        [
          "With So many scrolls stacked in wooden pigeonholes, finding a specific text was impossible without a system. Around 245 BC, the poet and scholar Callimachus compiled the 'Pinakes' — a 120-scroll catalogue that divided all books into subjects (such as rhetoric, law, medicine, mathematics, and history) and listed authors in alphabetical order with a short biography and the first line of each work. It was the world's first library catalogue!",
          "ხის თაროების უჯრედებში შეწყობილი ამდენი გრაგნილის პირობებში, სისტემის გარეშე კონკრეტული ტექსტის პოვნა შეუძლებელი იყო. ძვ. წ. დაახლოებით 245 წელს პოეტმა და სწავლულმა კალიმაქემ შეადგინა „პინაკესი“ (ცხრილები) — 120 გრაგნილისგან შემდგარი კატალოგი, რომელშიც ყველა წიგნი დაყოფილი იყო დარგებად (რიტორიკა, სამართალი, მედიცინა, მათემატიკა, ისტორია), ხოლო ავტორები ჩამოთვლილი იყო ანბანური თანმიმდევრობით, მოკლე ბიოგრაფიითა და ნაწარმოების პირველი სტრიქონის მითითებით. ეს იყო მსოფლიოს პირველი საბიბლიოთეკო კატალოგი!"
        ],
        [
          "Extraordinary discoveries were made within its walls: Euclid wrote his foundational books on geometry there, Archimedes invented a water-lifting screw, and the chief librarian Eratosthenes calculated the circumference of the Earth to within two percent of its true size simply by measuring shadows in two cities! Contrary to popular myth, the Library was not destroyed in a single sudden fire, but suffered a gradual decline over centuries due to wars, budget cuts, and political turmoil — leaving behind an enduring symbol of humanity's thirst for knowledge.",
          "მის კედლებში გასაოცარი აღმოჩენები გაკეთდა: იქ დაწერა ევკლიდემ თავისი ფუნდამენტური წიგნები გეომეტრიაზე, არქიმედემ გამოიგონა წყლის ასაქაჩი ხრახნი, ხოლო მთავარმა ბიბლიოთეკარმა ერატოსთენემ მხოლოდ ორ ქალაქში ჩრდილების გაზომვით გამოთვალა დედამიწის გარშემოწერილობა რეალური ზომიდან ორპროცენტიანი სიზუსტით! გავრცელებული მითის საპირისპიროდ, ბიბლიოთეკა ერთ უეცარ ხანძარს არ გაუნადგურებია — მან საუკუნეების განმავლობაში განიცადა თანდათანობითი დაკნინება ომების, დაფინანსების შემცირებისა და პოლიტიკური არეულობების გამო, თუმცა დარჩა კაცობრიობის ცოდნისადმი წყურვილის მარადიულ სიმბოლოდ."
        ]
      ],
      glossary: [
        "successor|მემკვიდრე / გამგრძელებელი", "universal archive|უნივერსალური (საყოველთაო) არქივი", "exempt from taxes|გადასახადებისგან გათავისუფლებული",
        "surrender (verb)|ჩაბარება / დათმობა", "papyrus scroll|პაპირუსის გრაგნილი", "pigeonhole|სათავსო უჯრედი (თაროზე გრაგნილებისთვის)",
        "compile a catalogue|კატალოგის შედგენა", "alphabetical order|ანბანური თანმიმდევრობა", "political turmoil|პოლიტიკური არეულობა / ქაოსი", "thirst for knowledge|ცოდნის წყურვილი"
      ],
      questions: [
        "When was the Royal Library of Alexandria founded?|In the third century BC|In the fifth century AD|In 1500 BC|In the first century AD",
        "From which ancient Greek institution does our modern word 'museum' derive?|From the 'Mouseion' (the shrine of the nine Muses) in Alexandria|From the Parthenon in Athens|From the Colosseum in Rome|From the Lighthouse of Pharos",
        "How did the Ptolemaic kings support the scholars working at the Mouseion?|They paid them a generous salary, exempted them from taxes, and provided communal dining|They gave each scholar a sailing ship|They made them generals in the army|They charged them rent for every scroll they read",
        "What unusual law did Pharaoh Ptolemy III pass to acquire books from visiting ships?|Every ship entering the harbour had to surrender its scrolls; scribes copied them, kept the originals, and returned the copies|Every ship captain had to write a new book before leaving|Foreign ships were banned from carrying books|Sailors had to pay taxes in ink",
        "Approximately how many papyrus scrolls did the Library of Alexandria hold at its peak?|Between four hundred thousand and seven hundred thousand scrolls|About ten thousand scrolls|Over ten million printed books|Only five thousand clay tablets",
        "Who compiled the 'Pinakes', the world's first library catalogue, around 245 BC?|The poet and scholar Callimachus|Alexander the Great|Julius Caesar|Homer",
        "How was Callimachus's 120-scroll catalogue organized?|Divided into subjects, with authors listed in alphabetical order along with a short biography and the first line of each work|By the colour and weight of the papyrus rolls|By the date the ship arrived in the harbour|In random order without author names",
        "What remarkable calculation did chief librarian Eratosthenes make?|He calculated the circumference of the Earth to within two percent accuracy by measuring shadows in two cities|He calculated the exact distance to the nearest star|He predicted the invention of the printing press|He counted the number of fish in the Mediterranean",
        "Which famous mathematician wrote his foundational books on geometry in Alexandria?|Euclid|Isaac Newton|Galileo Galilei|Pythagoras",
        "How did the Library of Alexandria actually come to an end according to modern historians?|Through a gradual decline over centuries due to wars, budget cuts, and political turmoil rather than one single fire|It sank into the sea during a tsunami in one night|It was dismantled and moved to Rome brick by brick|It was buried under volcanic ash"
      ]
    }
  ];

  // გავაერთიანოთ B1 (15 ტექსტი) და B2 (15 ტექსტი) App.ReadingDataB-ში (სულ 30 ტექსტი B დონეზე, ჯამში 60 ტექსტი A1–B2!)
  App.ReadingDataB = (App.ReadingDataB1 || []).concat(App.ReadingDataB2);
})(window);