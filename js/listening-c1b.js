/**
 * LISTENING-C1B.JS — C1 დონის მოსასმენი თემები #66–#70
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.ListeningDataC1 = (App.ListeningDataC1 || []).concat([
    {
      num: 66, level: "C1",
      icon: "📱", genre: "მედია და საზოგადოება",
      title: "რადიოგადაცემა: დეზინფორმაცია და სოციალური ქსელების ალგორითმები",
      subtitle: "Radio Feature: Misinformation and the Algorithms That Spread It",
      time: "7 წთ",
      paragraphs: [
        [
          "This is 'Signal and Noise'. A few years ago, researchers analysed millions of posts on a major social network and reached an uncomfortable conclusion: false stories travelled faster, further and more widely than true ones. On average, a false claim reached fifteen hundred people about six times faster than an accurate report. Surprisingly, automated accounts were not the main culprits. Ordinary users were.",
          "ეს გადაცემაა „სიგნალი და ხმაური“. რამდენიმე წლის წინ მკვლევრებმა ერთ-ერთ დიდ სოციალურ ქსელში მილიონობით პოსტი გააანალიზეს და არასასიამოვნო დასკვნამდე მივიდნენ: ყალბი ამბები ჭეშმარიტზე უფრო სწრაფად, შორს და ფართოდ ვრცელდებოდა. საშუალოდ, ყალბი მტკიცება ათას ხუთას ადამიანამდე ზუსტ ცნობაზე დაახლოებით ექვსჯერ სწრაფად აღწევდა. მოულოდნელად, მთავარი დამნაშავეები ავტომატური ანგარიშები არ აღმოჩნდნენ — ჩვეულებრივი მომხმარებლები იყვნენ."
        ],
        [
          "Why would ordinary people share falsehoods? Part of the answer is novelty. False stories are often more surprising than the truth, and surprise triggers strong emotions such as anger, fear or disgust. Content that provokes these emotions is more likely to be shared, often within seconds, before anyone has stopped to check whether it is accurate.",
          "რატომ ავრცელებენ ჩვეულებრივი ადამიანები სიცრუეს? პასუხის ნაწილი სიახლეა. ყალბი ამბები ხშირად სიმართლეზე უფრო გასაკვირია, გაკვირვება კი ძლიერ ემოციებს იწვევს — ბრაზს, შიშს ან ზიზღს. შინაარსი, რომელიც ამ ემოციებს აღძრავს, მეტი ალბათობით ზიარდება, ხშირად წამებში, სანამ ვინმე შეჩერდება და შეამოწმებს, სიმართლეა თუ არა."
        ],
        [
          "Algorithms amplify this tendency. Most platforms rank posts according to engagement: likes, comments and shares. They are not designed to promote falsehoods, but because emotional content generates more engagement, it is pushed to the top of people's feeds. Over time, users may also be shown more and more of what they already agree with, which reinforces existing beliefs.",
          "ალგორითმები ამ ტენდენციას აძლიერებს. პლატფორმების უმეტესობა პოსტებს ჩართულობის მიხედვით ალაგებს: მოწონებების, კომენტარებისა და გაზიარებების მიხედვით. ისინი სიცრუის გასავრცელებლად არ შექმნილა, მაგრამ რადგან ემოციური შინაარსი მეტ ჩართულობას იწვევს, ის არხის სათავეში ინაცვლებს. დროთა განმავლობაში მომხმარებლებს შეიძლება სულ უფრო მეტი ის ჩვენებოდეთ, რასაც უკვე ეთანხმებიან, რაც არსებულ რწმენებს აძლიერებს."
        ],
        [
          "So what helps? Fact-checking labels have a modest effect, but they often arrive after a story has already spread. A more promising approach is called prebunking. Instead of correcting myths afterwards, people are shown short examples of common manipulation techniques in advance, such as fake experts or emotional language. Studies suggest this builds a kind of psychological immunity.",
          "მაშ, რა გვეხმარება? ფაქტების გადამოწმების ნიშნებს ზომიერი ეფექტი აქვს, მაგრამ ხშირად მაშინ ჩნდება, როცა ამბავი უკვე გავრცელდა. უფრო პერსპექტიული მიდგომაა ე.წ. „წინასწარი გაქარწყლება“. მითების შემდგომ შესწორების ნაცვლად, ადამიანებს წინასწარ აჩვენებენ მანიპულაციის გავრცელებული ხერხების მოკლე მაგალითებს — მაგალითად, ყალბ ექსპერტებს ან ემოციურ ენას. კვლევები მიუთითებს, რომ ეს ერთგვარ ფსიქოლოგიურ იმუნიტეტს აყალიბებს."
        ],
        [
          "There are also simple habits anyone can adopt. Before sharing, pause and ask who created the content and what evidence supports it. Check whether reputable news organisations are reporting the same story. And be especially careful with posts that make you feel outraged, because that feeling is precisely what manipulators rely on. In the information age, a moment of doubt is a civic duty.",
          "არსებობს მარტივი ჩვევებიც, რომელთა შეძენაც ყველას შეუძლია. გაზიარებამდე შეჩერდით და იკითხეთ, ვინ შექმნა ეს შინაარსი და რა მტკიცებულება ამყარებს მას. შეამოწმეთ, იუწყებიან თუ არა იმავეს სანდო საინფორმაციო ორგანიზაციები. და განსაკუთრებით ფრთხილად იყავით პოსტებთან, რომლებიც აღშფოთებას იწვევს, რადგან სწორედ ამ გრძნობას ეყრდნობიან მანიპულატორები. ინფორმაციის ეპოქაში ეჭვის ერთი წამი სამოქალაქო მოვალეობაა."
        ]
      ],
      glossary: [
        "misinformation|დეზინფორმაცია, მცდარი ინფორმაცია",
        "culprit|დამნაშავე",
        "falsehood|სიცრუე",
        "novelty|სიახლე",
        "to trigger|გამოწვევა",
        "engagement|ჩართულობა (მოწონებები, კომენტარები, გაზიარებები)",
        "to amplify|გაძლიერება",
        "to reinforce|განმტკიცება",
        "prebunking|წინასწარი გაქარწყლება (მანიპულაციის ხერხების წინასწარ ჩვენება)",
        "outraged|აღშფოთებული"
      ],
      questions: [
        "What did researchers conclude after analysing millions of posts?|False stories spread faster and further than true ones|True stories spread faster than false ones|Both spread at the same speed|Nobody shares news online",
        "Who were the main spreaders of false stories?|Ordinary users|Automated accounts|Journalists|Government agencies",
        "Why are false stories often shared, according to the programme?|They are surprising and trigger strong emotions|They are always shorter|They contain more images|They are written by experts",
        "How do most platforms rank posts?|According to engagement such as likes, comments and shares|In alphabetical order|By the age of the author|Randomly",
        "Are algorithms designed to promote falsehoods?|No, but emotional content generates more engagement and is pushed higher|Yes, deliberately|Only on weekends|Only for political news",
        "What can happen to users over time?|They are shown more of what they already agree with|They stop using social media|They become fact-checkers|They see only advertisements",
        "What is a weakness of fact-checking labels?|They often arrive after the story has already spread|They are always wrong|They are too expensive to read|They make stories spread faster",
        "What is prebunking?|Showing people manipulation techniques in advance|Deleting all false posts|Banning social media|Paying users to share facts",
        "What do studies suggest prebunking builds?|A kind of psychological immunity|Addiction to news|Distrust of all information|Faster typing skills",
        "Why should we be especially careful with posts that make us outraged?|Manipulators rely on that feeling|They are always true|They are usually old|They contain viruses"
      ]
    },
    {
      num: 67, level: "C1",
      icon: "🏛️", genre: "ტურიზმი და კულტურა",
      title: "რეპორტაჟი: ჭარბი ტურიზმი ისტორიულ ქალაქებში",
      subtitle: "Report: Overtourism and the Struggle of Historic Cities",
      time: "7 წთ",
      paragraphs: [
        [
          "Reporting from the narrow streets of an old European port city, it is hard to move without bumping into a selfie stick. Every summer, several cruise ships arrive on the same morning, and tens of thousands of visitors pour into a historic centre where barely a few thousand people actually live. Locals have a name for it: overtourism.",
          "ძველი ევროპული საპორტო ქალაქის ვიწრო ქუჩებიდან რეპორტაჟისას ძნელია სელფის ჯოხს არ წამოედო. ყოველ ზაფხულს ერთსა და იმავე დილას რამდენიმე საკრუიზო გემი შემოდის და ათიათასობით ვიზიტორი ისტორიულ ცენტრში იღვრება, სადაც სინამდვილეში სულ რამდენიმე ათასი ადამიანი ცხოვრობს. ადგილობრივებს ამისთვის სახელიც აქვთ: ჭარბი ტურიზმი."
        ],
        [
          "Tourism brings undeniable benefits. It creates jobs, supports restaurants and craftspeople, and funds the restoration of monuments. But when visitor numbers far exceed what a place can absorb, the costs begin to outweigh the gains. Pavements wear out, rubbish piles up and public transport becomes unusable for residents trying to get to work.",
          "ტურიზმს უდავო სარგებელი მოაქვს. ის სამუშაო ადგილებს ქმნის, რესტორნებსა და ხელოსნებს ეხმარება და ძეგლების რესტავრაციას აფინანსებს. მაგრამ როცა ვიზიტორთა რაოდენობა ბევრად აღემატება იმას, რისი დატევაც ადგილს შეუძლია, ხარჯები სარგებელს აჭარბებს. ტროტუარები ცვდება, ნაგავი გროვდება, საზოგადოებრივი ტრანსპორტი კი სამსახურში მიმავალი მცხოვრებლებისთვის გამოუსადეგარი ხდება."
        ],
        [
          "The most serious problem, residents say, is housing. As more apartments are converted into short-term holiday rentals, rents rise and long-term tenants are pushed out. In some historic districts, the permanent population has fallen by half in two decades. Bakeries and hardware shops are replaced by souvenir stalls, and neighbourhoods begin to feel like stage sets rather than living communities.",
          "მცხოვრებლების თქმით, ყველაზე სერიოზული პრობლემა საცხოვრებელია. რაც უფრო მეტი ბინა გადაკეთდება მოკლევადიან სადღესასწაულო ქირად, მით უფრო იზრდება ქირა და გრძელვადიანი მოიჯარეები იძულებით ტოვებენ სახლებს. ზოგიერთ ისტორიულ უბანში მუდმივი მოსახლეობა ორ ათწლეულში განახევრდა. საცხობებსა და სამეურნეო მაღაზიებს სუვენირების ჯიხურები ანაცვლებს, უბნები კი ცოცხალ თემს კი აღარ, არამედ თეატრის დეკორაციას ემსგავსება."
        ],
        [
          "Cities are experimenting with solutions. Some have introduced entry fees for day-trippers on peak days, while others limit the number of cruise ships or cap new holiday-rental licences. Several museums now require timed tickets booked in advance. Critics argue that fees turn heritage into a privilege for the wealthy, but supporters say they spread visitors more evenly and fund local services.",
          "ქალაქები გადაწყვეტებზე ექსპერიმენტებს ატარებენ. ზოგმა დაწესა შესვლის საფასური ერთდღიანი ვიზიტორებისთვის პიკურ დღეებში, სხვები ზღუდავენ საკრუიზო გემების რაოდენობას ან სადღესასწაულო ქირის ახალ ლიცენზიებს. რამდენიმე მუზეუმი ახლა წინასწარ დაჯავშნილ, დროზე მიბმულ ბილეთებს მოითხოვს. კრიტიკოსები ამტკიცებენ, რომ საფასური მემკვიდრეობას მდიდრების პრივილეგიად აქცევს, მომხრეები კი ამბობენ, რომ ის ვიზიტორებს უფრო თანაბრად ანაწილებს და ადგილობრივ სერვისებს აფინანსებს."
        ],
        [
          "Travellers can help too. Visiting outside the peak season, staying longer in one place, choosing locally owned accommodation and exploring less famous towns all reduce the pressure on the most crowded spots. As one shopkeeper told us, 'We don't want tourists to stop coming. We just want them to visit our city, not consume it.'",
          "მოგზაურებსაც შეუძლიათ დახმარება. პიკური სეზონის მიღმა მოგზაურობა, ერთ ადგილას უფრო დიდხანს დარჩენა, ადგილობრივების საკუთრებაში არსებული განთავსების არჩევა და ნაკლებად ცნობილი ქალაქების აღმოჩენა — ეს ყველაფერი ყველაზე გადატვირთულ ადგილებზე ზეწოლას ამცირებს. როგორც ერთმა მაღაზიის მეპატრონემ გვითხრა: „არ გვინდა, რომ ტურისტებმა მოსვლა შეწყვიტონ. უბრალოდ გვინდა, რომ ჩვენს ქალაქს ესტუმრონ და არა — მოიხმარონ“."
        ]
      ],
      glossary: [
        "overtourism|ჭარბი ტურიზმი",
        "to pour into|შემოდინება, მასობრივად შესვლა",
        "undeniable|უდავო",
        "to outweigh|გადაწონა, აჭარბება",
        "short-term rental|მოკლევადიანი ქირა",
        "tenant|მოიჯარე, დამქირავებელი",
        "day-tripper|ერთდღიანი ვიზიტორი",
        "to cap|ზედა ზღვრის დაწესება",
        "heritage|მემკვიდრეობა",
        "peak season|პიკური სეზონი"
      ],
      questions: [
        "What happens every summer in the port city described?|Several cruise ships arrive on the same morning|The city closes its historic centre|All residents go on holiday|The port is rebuilt",
        "Which benefit of tourism is mentioned?|It funds the restoration of monuments|It lowers rents|It reduces traffic|It increases the permanent population",
        "When do the costs of tourism outweigh the gains?|When visitor numbers far exceed what a place can absorb|Whenever tourists arrive by plane|Only during winter|When museums charge entry fees",
        "What do residents consider the most serious problem?|Housing|Noise from churches|Bad weather|Lack of restaurants",
        "What has happened to the permanent population in some historic districts?|It has fallen by half in two decades|It has doubled|It has stayed exactly the same|It has moved to the city centre",
        "What replaces bakeries and hardware shops?|Souvenir stalls|Libraries|Schools|Hospitals",
        "Which solution is mentioned for museums?|Timed tickets booked in advance|Free entry for everyone|Closing on weekends|Banning photography",
        "What do critics say about entry fees?|They turn heritage into a privilege for the wealthy|They are too low to matter|They attract more cruise ships|They are illegal everywhere",
        "Which traveller behaviour reduces pressure on crowded places?|Visiting outside the peak season|Visiting only famous landmarks|Taking shorter trips more often|Travelling exclusively by cruise ship",
        "What did the shopkeeper mean by 'visit our city, not consume it'?|Tourists should respect the city as a living place|Tourists should not buy anything|Tourists should eat only at home|Tourists should stop coming"
      ]
    },
    {
      num: 68, level: "C1",
      icon: "🔋", genre: "ტექნოლოგია და გარემო",
      title: "ბიზნეს-პოდკასტი: ბატარეების გადამუშავება და წრიული ეკონომიკა",
      subtitle: "Business Podcast: Battery Recycling and the Circular Economy",
      time: "8 წთ",
      paragraphs: [
        [
          "Welcome to 'Future Markets'. Electric vehicles are often presented as the clean solution to transport emissions, and over their lifetime they generally are. But each car battery contains several kilograms of valuable metals such as lithium, cobalt and nickel. As millions of these vehicles reach the end of their lives, a pressing question arises: what happens to all those batteries?",
          "კეთილი იყოს თქვენი მობრძანება პოდკასტში „მომავლის ბაზრები“. ელექტრომობილებს ხშირად ტრანსპორტის ემისიების სუფთა გადაწყვეტად წარმოადგენენ და მთელი სიცოცხლის მანძილზე, ზოგადად, ასეც არის. მაგრამ თითოეული მანქანის ბატარეა რამდენიმე კილოგრამ ძვირფას ლითონს შეიცავს — ლითიუმს, კობალტს და ნიკელს. როცა მილიონობით ასეთი ავტომობილი სიცოცხლის ბოლოს მიაღწევს, ჩნდება აქტუალური კითხვა: რა ბედი ეწევა ამ ბატარეებს?"
        ],
        [
          "Mining these metals has significant environmental and social costs. Extracting lithium can consume enormous amounts of water in already dry regions, and some cobalt mines have been linked to dangerous working conditions. At the same time, demand is expected to rise many times over in the coming decades. Simply digging more out of the ground is neither cheap nor sustainable.",
          "ამ ლითონების მოპოვებას მნიშვნელოვანი გარემოსდაცვითი და სოციალური ფასი აქვს. ლითიუმის მოპოვებამ შეიძლება უზარმაზარი რაოდენობის წყალი მოიხმაროს ისედაც მშრალ რეგიონებში, ზოგიერთ კობალტის მაღაროს კი სახიფათო სამუშაო პირობებს უკავშირებენ. ამავდროულად, მომდევნო ათწლეულებში მოთხოვნა რამდენჯერმე გაიზრდება. უბრალოდ მიწიდან მეტის ამოღება არც იაფია და არც მდგრადი."
        ],
        [
          "This is where the circular economy comes in. The idea is to keep materials in use for as long as possible instead of following the old model of take, make and throw away. For batteries, that means two stages. First, a used car battery that has lost some capacity can enjoy a 'second life' storing energy from solar panels in homes or factories.",
          "აქ ჩნდება წრიული ეკონომიკა. მისი იდეაა, მასალები რაც შეიძლება დიდხანს დარჩეს გამოყენებაში, ნაცვლად ძველი მოდელისა „აიღე, აწარმოე, გადააგდე“. ბატარეებისთვის ეს ორ ეტაპს ნიშნავს. პირველ რიგში, ნახმარ ბატარეას, რომელმაც ტევადობის ნაწილი დაკარგა, შეუძლია „მეორე სიცოცხლე“ გაატაროს — სახლებსა თუ ქარხნებში მზის პანელების ენერგიის შენახვით."
        ],
        [
          "Second, when a battery is truly exhausted, it can be recycled. Modern recycling plants can recover more than ninety percent of the key metals, which can then be used to build new batteries. The technology works, but the economics are challenging. Batteries come in many different designs, they are difficult to take apart safely, and collecting them from across a country is expensive.",
          "მეორე, როცა ბატარეა მართლაც ამოიწურება, მისი გადამუშავება შეიძლება. თანამედროვე გადამამუშავებელ ქარხნებს ძირითადი ლითონების ოთხმოცდაათ პროცენტზე მეტის აღდგენა შეუძლიათ, რაც შემდეგ ახალი ბატარეების წარმოებაში გამოიყენება. ტექნოლოგია მუშაობს, მაგრამ ეკონომიკა რთულია. ბატარეები სხვადასხვა კონსტრუქციისაა, მათი უსაფრთხოდ დაშლა ძნელია, ხოლო ქვეყნის მასშტაბით შეგროვება ძვირი ჯდება."
        ],
        [
          "Policy is starting to change the picture. New regulations in several regions require manufacturers to take responsibility for batteries at the end of their life and to use a minimum share of recycled material in new ones. Some companies are also designing batteries that are easier to dismantle. If these efforts succeed, the mines of the future may be the recycling plants on the edge of our cities.",
          "პოლიტიკა სურათის შეცვლას იწყებს. რამდენიმე რეგიონში ახალი რეგულაციები მწარმოებლებს ავალდებულებს, პასუხისმგებლობა აიღონ ბატარეებზე სიცოცხლის ბოლოს და ახალ ბატარეებში გადამუშავებული მასალის მინიმალური წილი გამოიყენონ. ზოგიერთი კომპანია ისეთ ბატარეებსაც აპროექტებს, რომელთა დაშლაც უფრო ადვილია. თუ ეს ძალისხმევა წარმატებით დასრულდა, მომავლის მაღაროები შეიძლება ჩვენი ქალაქების გარეუბნებში მდგარი გადამამუშავებელი ქარხნები იყოს."
        ]
      ],
      glossary: [
        "lifetime|სიცოცხლის (ექსპლუატაციის) ვადა",
        "pressing|აქტუალური, გადაუდებელი",
        "to extract|მოპოვება, ამოღება",
        "sustainable|მდგრადი",
        "circular economy|წრიული ეკონომიკა",
        "capacity|ტევადობა",
        "exhausted|ამოწურული",
        "to recover|აღდგენა, დაბრუნება",
        "to dismantle|დაშლა",
        "manufacturer|მწარმოებელი"
      ],
      questions: [
        "Which valuable metals do car batteries contain?|Lithium, cobalt and nickel|Gold, silver and platinum|Iron, copper and tin|Uranium and lead only",
        "What environmental problem is linked to lithium extraction?|It can consume enormous amounts of water in dry regions|It causes earthquakes|It produces radioactive waste|It destroys coral reefs",
        "What is expected to happen to demand for these metals?|It will rise many times over|It will disappear|It will remain stable|It will fall by half",
        "What is the idea of the circular economy?|Keeping materials in use for as long as possible|Producing more goods faster|Throwing away products sooner|Using only new materials",
        "What is a battery's 'second life'?|Storing energy from solar panels in homes or factories|Powering a second car|Being melted into jewellery|Being sent back to the mine",
        "What percentage of key metals can modern plants recover?|More than ninety percent|About ten percent|Exactly fifty percent|None of them",
        "Why are the economics of recycling challenging?|Batteries have many designs, are hard to dismantle and costly to collect|Recycled metals are useless|The technology does not work|Governments forbid recycling",
        "What do some new regulations require from manufacturers?|Responsibility for end-of-life batteries and recycled content in new ones|Lower prices for consumers|Batteries made only of lithium|Stopping electric car production",
        "What are some companies doing to help?|Designing batteries that are easier to dismantle|Making batteries heavier|Hiding battery designs|Selling batteries without warranties",
        "What does the speaker mean by 'the mines of the future may be recycling plants'?|Metals will increasingly come from recycled batteries|Mines will be built inside cities|Recycling plants will dig for coal|Mining will become more dangerous"
      ]
    },
    {
      num: 69, level: "C1",
      icon: "🍇", genre: "კულტურული მემკვიდრეობა",
      title: "დოკუმენტური ფილმი: ქვევრის ღვინო — რვა ათასწლოვანი ტრადიცია",
      subtitle: "Documentary: Qvevri Wine and an 8,000-Year-Old Tradition",
      time: "8 წთ",
      paragraphs: [
        [
          "In the hills of eastern Georgia, the autumn harvest is more than an agricultural event; it is a celebration that brings families and neighbours together. Archaeologists working south of Tbilisi have found fragments of clay jars containing traces of wine that date back around eight thousand years, making this region one of the oldest known centres of winemaking in the world.",
          "აღმოსავლეთ საქართველოს მთებში შემოდგომის რთველი სასოფლო-სამეურნეო მოვლენაზე მეტია — ეს დღესასწაულია, რომელიც ოჯახებსა და მეზობლებს აერთიანებს. თბილისის სამხრეთით მომუშავე არქეოლოგებმა იპოვეს თიხის ჭურჭლის ფრაგმენტები ღვინის კვალით, რომელთა ასაკი დაახლოებით რვა ათას წელს ითვლის. ეს რეგიონს მსოფლიოში მეღვინეობის ერთ-ერთ უძველეს ცნობილ ცენტრად აქცევს."
        ],
        [
          "At the heart of this tradition is the qvevri, a large egg-shaped clay vessel that is buried in the ground up to its neck. Crushed grapes, often together with their skins, stems and seeds, are placed inside and left to ferment. Because the earth keeps the temperature stable throughout the year, the wine can mature slowly without any modern cooling equipment.",
          "ამ ტრადიციის გულში ქვევრია — დიდი, კვერცხის ფორმის თიხის ჭურჭელი, რომელიც მიწაში ყელამდეა ჩაფლული. მასში ათავსებენ დაწურულ ყურძენს, ხშირად კანთან, კლერტთან და წიპწასთან ერთად, და დასადუღებლად ტოვებენ. რადგან მიწა ტემპერატურას მთელი წლის განმავლობაში სტაბილურად ინარჩუნებს, ღვინოს შეუძლია ნელა დამწიფდეს ყოველგვარი თანამედროვე გამაგრილებელი მოწყობილობის გარეშე."
        ],
        [
          "When white grapes are fermented with their skins for several months, the result is a distinctive amber-coloured wine with firm tannins and complex aromas of dried fruit, nuts and tea. For years, such wines were almost unknown outside Georgia. Today, however, so-called orange wines inspired by this method appear on restaurant menus from Tokyo to New York.",
          "როცა თეთრ ყურძენს კანთან ერთად რამდენიმე თვე ადუღებენ, შედეგი გამორჩეული ქარვისფერი ღვინოა მკვრივი ტანინებითა და ჩირის, თხილისა და ჩაის რთული არომატებით. წლების განმავლობაში ასეთი ღვინო საქართველოს გარეთ თითქმის უცნობი იყო. დღეს კი ამ მეთოდით შთაგონებული ე.წ. ნარინჯისფერი ღვინოები რესტორნების მენიუებში ტოკიოდან ნიუ-იორკამდე გვხვდება."
        ],
        [
          "Making a qvevri is itself a rare craft. Only a handful of master potters still build these vessels by hand, coiling clay layer by layer over several weeks before firing them in large kilns. In recognition of its cultural importance, UNESCO added the traditional Georgian qvevri winemaking method to its list of the Intangible Cultural Heritage of Humanity in 2013.",
          "ქვევრის დამზადება თავისთავად იშვიათი ხელობაა. სულ რამდენიმე ოსტატი მეთუნე ამზადებს ამ ჭურჭელს ხელით: რამდენიმე კვირის განმავლობაში თიხას ფენა-ფენა ახვევენ, შემდეგ კი დიდ ქურებში გამოწვავენ. კულტურული მნიშვნელობის აღიარების ნიშნად, იუნესკომ 2013 წელს ქვევრში ღვინის დაყენების ტრადიციული ქართული მეთოდი კაცობრიობის არამატერიალური კულტურული მემკვიდრეობის სიაში შეიტანა."
        ],
        [
          "For many young winemakers, the qvevri is not merely a symbol of the past but a way of expressing the character of a particular place. Some combine ancient techniques with modern hygiene and scientific testing, while others insist on working exactly as their grandparents did. What unites them is a belief that wine, like language, carries the memory of the people who make it.",
          "ბევრი ახალგაზრდა მეღვინისთვის ქვევრი მხოლოდ წარსულის სიმბოლო კი არა, კონკრეტული ადგილის ხასიათის გამოხატვის საშუალებაა. ზოგი ძველ ტექნიკას თანამედროვე ჰიგიენასა და სამეცნიერო ანალიზს უთავსებს, სხვები კი ჯიუტად იცავენ ზუსტად ისეთ მუშაობას, როგორც მათი ბებია-ბაბუები. მათ აერთიანებს რწმენა, რომ ღვინო, ენის მსგავსად, იმ ადამიანების მეხსიერებას ატარებს, ვინც მას ქმნის."
        ]
      ],
      glossary: [
        "harvest|რთველი, მოსავალი",
        "fragment|ფრაგმენტი, ნატეხი",
        "vessel|ჭურჭელი",
        "to ferment|დადუღება (დუღილი)",
        "to mature|დამწიფება, დავარგება",
        "amber|ქარვისფერი",
        "tannins|ტანინები (ღვინის მთრიმლავი ნივთიერებები)",
        "master potter|ოსტატი მეთუნე",
        "kiln|ქურა (გამოსაწვავი ღუმელი)",
        "intangible heritage|არამატერიალური მემკვიდრეობა"
      ],
      questions: [
        "How old are the wine traces found south of Tbilisi?|Around eight thousand years old|About eight hundred years old|Around two thousand years old|About eighty years old",
        "What is a qvevri?|A large egg-shaped clay vessel buried in the ground|A wooden barrel kept in a cellar|A type of Georgian grape|A metal tank with cooling pipes",
        "What is often fermented together with the crushed grapes?|Skins, stems and seeds|Sugar and yeast only|Water and honey|Oak chips",
        "Why can wine mature without modern cooling equipment in a qvevri?|The earth keeps the temperature stable|The clay produces cold air|It is stored on mountain tops|It is fermented only in winter",
        "What kind of wine results from fermenting white grapes with their skins for months?|An amber-coloured wine with firm tannins|A sparkling pink wine|A sweet dessert wine|A clear wine with no aroma",
        "Which aromas are mentioned for amber wine?|Dried fruit, nuts and tea|Chocolate and vanilla only|Fresh strawberries and mint|Smoke and leather",
        "How are qvevris made?|By hand, coiling clay layer by layer over several weeks|By machine in a single day|From carved stone|By pouring liquid clay into moulds",
        "What happened in 2013?|UNESCO recognised qvevri winemaking as Intangible Cultural Heritage|Qvevri wine was banned for export|The first qvevri was discovered|Georgia stopped producing wine",
        "How do some young winemakers approach the tradition?|They combine ancient techniques with modern hygiene and testing|They reject the qvevri completely|They use only plastic containers|They import grapes from abroad",
        "What belief unites the winemakers, according to the documentary?|Wine, like language, carries the memory of its makers|Wine should be as cheap as possible|Only old wine has value|Tradition prevents innovation"
      ]
    },
    {
      num: 70, level: "C1",
      icon: "😴", genre: "ჯანმრთელობა და ტვინი",
      title: "სამეცნიერო ლექცია: ძილი და მეხსიერების კონსოლიდაცია",
      subtitle: "Science Lecture: Why Sleep Is Essential for Memory",
      time: "7 წთ",
      paragraphs: [
        [
          "Good morning, everyone. Many students treat sleep as a luxury they can sacrifice before an exam. Today I want to convince you that this is one of the worst study strategies available. Over the last few decades, research has shown that sleep is not a passive state in which the brain simply switches off. It is an active period during which memories are processed and strengthened.",
          "დილა მშვიდობისა ყველას. ბევრი სტუდენტი ძილს ფუფუნებად მიიჩნევს, რომლის შეწირვაც გამოცდის წინ შეიძლება. დღეს მინდა დაგარწმუნოთ, რომ ეს ერთ-ერთი ყველაზე ცუდი სასწავლო სტრატეგიაა. ბოლო ათწლეულების კვლევებმა აჩვენა, რომ ძილი არ არის პასიური მდგომარეობა, როცა ტვინი უბრალოდ ითიშება. ეს აქტიური პერიოდია, რომლის დროსაც მოგონებები მუშავდება და მყარდება."
        ],
        [
          "When you learn something new during the day, the information is first stored temporarily in a region called the hippocampus. During deep sleep, the hippocampus replays these experiences, sometimes many times faster than they actually happened, and gradually transfers them to the cortex for long-term storage. Scientists call this process memory consolidation.",
          "როცა დღის განმავლობაში რაიმე ახალს სწავლობთ, ინფორმაცია ჯერ დროებით ინახება უბანში, რომელსაც ჰიპოკამპი ეწოდება. ღრმა ძილის დროს ჰიპოკამპი ამ გამოცდილებას თავიდან „ატრიალებს“ — ზოგჯერ რეალურზე ბევრჯერ სწრაფად — და თანდათან გადასცემს ქერქს გრძელვადიანი შენახვისთვის. მეცნიერები ამ პროცესს მეხსიერების კონსოლიდაციას უწოდებენ."
        ],
        [
          "The evidence is striking. In typical experiments, participants learn a list of word pairs or a new motor skill, such as a piano sequence. Those who sleep afterwards perform significantly better when tested the next day than those who stay awake for the same length of time. Remarkably, sleep seems to improve some skills even without any additional practice.",
          "მტკიცებულებები შთამბეჭდავია. ტიპურ ექსპერიმენტებში მონაწილეები სწავლობენ სიტყვათა წყვილების სიას ან ახალ მოტორულ უნარს, მაგალითად, ფორტეპიანოზე ბგერების თანმიმდევრობას. ვინც შემდეგ იძინებს, მეორე დღეს ტესტირებისას შესამჩნევად უკეთეს შედეგს აჩვენებს, ვიდრე ის, ვინც იმავე დროის განმავლობაში ფხიზლობს. საოცარია, მაგრამ ძილი ზოგიერთ უნარს დამატებითი ვარჯიშის გარეშეც კი აუმჯობესებს."
        ],
        [
          "Sleep also prepares the brain to learn. After a night of sleep deprivation, the hippocampus shows reduced activity, and people's ability to form new memories can drop by around forty percent. In other words, staying up all night to revise not only fails to consolidate what you studied the day before; it also makes it harder to absorb anything new the following day.",
          "ძილი ტვინს სასწავლოდაც ამზადებს. უძილო ღამის შემდეგ ჰიპოკამპის აქტივობა მცირდება და ახალი მოგონებების ფორმირების უნარი შეიძლება დაახლოებით ორმოცი პროცენტით დაეცეს. სხვა სიტყვებით, ღამისთევით მეცადინეობა არა მხოლოდ ვერ ამყარებს წინა დღეს ნასწავლს, არამედ მომდევნო დღეს ახლის ათვისებასაც ართულებს."
        ],
        [
          "So what should you do in practice? Spread your study sessions over several days and protect seven to nine hours of sleep each night. Short afternoon naps of around twenty minutes can also help. Avoid bright screens and caffeine late in the evening, because they delay sleep. Think of sleep not as time lost from studying, but as the moment when your studying actually pays off.",
          "მაშ, რა უნდა გააკეთოთ პრაქტიკაში? მეცადინეობა რამდენიმე დღეზე გაანაწილეთ და ყოველ ღამე შვიდიდან ცხრა საათამდე ძილი შეინარჩუნეთ. დაახლოებით ოცწუთიანი მოკლე შუადღის ძილიც შეიძლება დაგეხმაროთ. გვიან საღამოს მოერიდეთ კაშკაშა ეკრანებსა და კოფეინს, რადგან ისინი ჩაძინებას აგვიანებს. ძილი სწავლისგან დაკარგულ დროდ კი არა, იმ მომენტად აღიქვით, როცა თქვენი მეცადინეობა რეალურად ნაყოფს იძლევა."
        ]
      ],
      glossary: [
        "luxury|ფუფუნება",
        "to sacrifice|შეწირვა",
        "passive|პასიური",
        "hippocampus|ჰიპოკამპი (მეხსიერებისთვის მნიშვნელოვანი ტვინის უბანი)",
        "to replay|თავიდან გათამაშება, განმეორება",
        "cortex|(თავის ტვინის) ქერქი",
        "memory consolidation|მეხსიერების კონსოლიდაცია (მოგონებების განმტკიცება)",
        "motor skill|მოტორული (მოძრაობითი) უნარი",
        "sleep deprivation|ძილის ნაკლებობა, უძილობა",
        "to pay off|ნაყოფის გამოღება, გამართლება"
      ],
      questions: [
        "How does the lecturer describe sleep?|An active period during which memories are processed|A passive state when the brain switches off|A waste of study time|A luxury for students",
        "Where is new information first stored temporarily?|In the hippocampus|In the cortex|In the spinal cord|In the heart",
        "What happens to memories during deep sleep?|They are replayed and transferred to the cortex|They are deleted completely|They become dreams only|They move to the hippocampus",
        "What is memory consolidation?|The process of strengthening and transferring memories for long-term storage|Forgetting unimportant details|Learning while awake|Remembering only dreams",
        "What did typical experiments show?|People who slept after learning performed better the next day|People who stayed awake performed better|Sleep had no effect|Only children benefited from sleep",
        "What surprising effect of sleep is mentioned?|It can improve some skills without extra practice|It makes people forget new skills|It replaces all practice|It improves eyesight",
        "How much can the ability to form new memories drop after sleep deprivation?|Around forty percent|Around four percent|It increases by forty percent|It does not change",
        "Why is staying up all night to revise doubly harmful?|It fails to consolidate past learning and makes new learning harder|It is only harmful for older people|It makes exams longer|It improves short-term memory only",
        "How long should afternoon naps be, according to the lecturer?|Around twenty minutes|Around three hours|At least two hours|Exactly one hour",
        "Why should bright screens and caffeine be avoided late in the evening?|They delay sleep|They improve memory too much|They cause hunger|They make naps impossible"
      ]
    }
  ]);
})(window);
