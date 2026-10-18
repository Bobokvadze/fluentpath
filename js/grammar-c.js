/**
 * GRAMMAR-C.JS — C1 დონე (15 თემა: #61–#75)
 * თითოეულ თემაში: 8 ორენოვანი მაგალითი, 4 ფორმულა, 3 შეცდომის გარჩევა და 20 ტესტი (სულ 300 ტესტი).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.GrammarDataC1 = [
    // =========================================================================
    // C1 LEVEL — TOPICS 61 TO 75 (20 DRILLS EACH = 300 DRILLS)
    // =========================================================================
    {
      num: 61, level: "C1",
      title: "უარყოფითი და შემზღუდავი ინვერსია (Negative & Limiting Inversion)",
      subtitle: "Never, Seldom, Rarely, Little, Not only... but also, Under no circumstances",
      rule: "როდესაც ფორმალურ ან ლიტერატურულ ინგლისურში წინადადებას ვიწყებთ უარყოფითი ან შემზღუდავი მნიშვნელობის ზმნიზედით ან ფრაზით (Never, Rarely, Seldom, Little, Not only, Under no circumstances, On no account, At no time, In no way), მოსდევს ინვერსია — ანუ დამხმარე ზმნა (do/does/did/have/had/should/can/will) გადმოდის ქვემდებარის წინ, ზუსტად ისე, როგორც კითხვით წინადადებაში.",
      formulas: [
        ["+ Present / Past Simple", "Rarely / Seldom / Little + do/does/did + Subject + V1", "Little did she know what was waiting for her."],
        ["- Perfect / Modal", "Never / At no time + have/had/should/can + Subject + V3/V1", "Never have I seen such a breathtaking view."],
        ["? Not only ... but also", "Not only + Auxiliary + Subject + V, but ... also ...", "Not only did he miss the train, but he also lost his ticket."],
        ["💡 Under no circumstances", "Under no circumstances / On no account + should/must + Subject + V1", "Under no circumstances should this door be left unlocked."]
      ],
      examples: [
        ["Never before have we witnessed such a rapid change in climate.", "აქამდე არასდროს გვინახავს კლიმატის ასეთი სწრაფი ცვლილება."],
        ["Seldom do tourists visit this remote mountain village in winter.", "ტურისტები ზამთარში იშვიათად სტუმრობენ ამ შორეულ მთის სოფელს."],
        ["Little did the explorers realize how dangerous the journey would be.", "მკვლევრები ვერც კი ხვდებოდნენ, რამდენად სახიფათო იქნებოდა მოგზაურობა."],
        ["Not only does she play the violin, but she also composes music.", "ის არა მხოლოდ უკრავს ვიოლინოზე, არამედ მუსიკასაც თხზავს."],
        ["Under no circumstances are visitors permitted to feed the wild animals.", "ვიზიტორებს არავითარ შემთხვევაში არ ეძლევათ გარეული ცხოველების გამოკვების უფლება."],
        ["At no time did the speaker mention the true cause of the delay.", "გამომსვლელს არცერთ მომენტში არ უხსენებია დაგვიანების ნამდვილი მიზეზი."],
        ["On no account must you touch the exhibits in the gallery.", "არავითარ შემთხვევაში არ უნდა შეეხოთ ექსპონატებს გალერეაში."],
        ["Rarely has an orchestra performed this symphony with such precision.", "იშვიათად შეუსრულებია ორკესტრს ეს სიმფონია ასეთი სიზუსტით."]
      ],
      mistakes: [
        ["✗ Never I have heard such a ridiculous story.", "✓ Never have I heard such a ridiculous story. (საჭიროა ინვერსია: have I heard)"],
        ["✗ Little she knew about their secret plan.", "✓ Little did she know about their secret plan. (Past Simple-ის ინვერსია: did she know)"],
        ["✗ Not only he arrived late, but he also forgot his notes.", "✓ Not only did he arrive late, but he also forgot his notes."]
      ],
      drills: [
        "Never before ___ such a magnificent aurora in the night sky.|have I seen|I have seen|saw I|I saw",
        "Little ___ that the quiet stranger was a world-famous novelist.|did they know|they knew|knew they|do they knew",
        "Seldom ___ a historian discover such a well-preserved manuscript.|does|is|has|did to",
        "Not only ___ the race, but she also broke the world record.|did she win|she won|won she|has she win",
        "Under no circumstances ___ passengers open the emergency exit during flight.|must|do|have|are to",
        "At no time ___ the witness change his statement to the police.|did|was|had to|has",
        "Rarely ___ we seen such enthusiasm among the students.|have|did|do|are",
        "On no account ___ this confidential letter be shown to outsiders.|should|do|did|has",
        "In no way ___ the scientist be held responsible for the misuse of his invention.|can|does|did|has",
        "Not a single word ___ during the entire two-hour journey.|did he speak|he spoke|spoke he|has he speak",
        "Nowhere else in the world ___ find such unique flora and fauna.|will you|you will|do you will|you can",
        "Never again ___ agree to travel on a ferry during a winter storm.|will I|I will|do I|did I",
        "Little ___ that one small mistake would ruin the whole experiment.|did he suspect|he suspected|suspected he|was he suspect",
        "Not only ___ cold, but it was also raining heavily.|was it|it was|did it be|had it",
        "Seldom ___ such a convincing performance on the theatre stage.|have we witnessed|we have witnessed|witnessed we|did we witnessed",
        "Under no circumstances ___ children be left unattended near the pool.|should|do|have|did",
        "At no point during the ceremony ___ smile.|did the prince|the prince did|smiled the prince|was the prince",
        "Rarely ___ wild wolves approach human settlements in summer.|do|does|are|have",
        "Not once ___ to thank the people who had helped him.|did he bother|he bothered|bothered he|was he bother",
        "On no account ___ you to leave the building without a visitor's badge.|are|do|should|must"
      ]
    },
    {
      num: 62, level: "C1",
      title: "ინვერსია დროისა და პირობის კონსტრუქციებში (No sooner, Hardly, Not until, Only)",
      subtitle: "Time & Restrictive Inversions: No sooner... than, Hardly... when, Only after",
      rule: "1) როდესაც ვამბობთ „როგორც კი ერთი რამ მოხდა, მაშინვე მეორე მოჰყვა“, ვიყენებთ წყვილებს: „No sooner + had + Subject + V3 ... THAN + Past Simple“ და „Hardly / Scarcely / Barely + had + Subject + V3 ... WHEN + Past Simple“. დააკვირდით კავშირებს: No sooner-ს მოსდევს THAN, ხოლო Hardly/Scarcely-ს — WHEN! 2) როდესაც წინადადება იწყება ფრაზებით Only after, Only when, Only if, Not until — პირველ (დამოკიდებულ) ნაწილში წყობა ჩვეულებრივია, ხოლო ინვერსია ხდება მეორე (მთავარ) წინადადებაში!",
      formulas: [
        ["+ No sooner ... than", "No sooner + had + Subject + V3 + THAN + Subject + Past Simple", "No sooner had we sat down than the bell rang."],
        ["- Hardly / Scarcely ... when", "Hardly / Scarcely + had + Subject + V3 + WHEN + Subject + Past Simple", "Hardly had the play begun when the lights went out."],
        ["? Only after / Only when / Not until", "Only when + Clause (ჩვეულებრივი წყობა) + Auxiliary + Subject + V (ინვერსია მთავარში!)", "Only when the rain stopped did we leave the shelter."],
        ["💡 Only by / Only in this way", "Only by + V-ing + Auxiliary + Subject + V1", "Only by working together can we solve this problem."]
      ],
      examples: [
        ["No sooner had the ship left the harbour than a fierce storm broke out.", "გემი ნავსადგურიდან გასული არ იყო, რომ ძლიერი ქარიშხალი ამოვარდა (No sooner... than)."],
        ["Hardly had I closed my eyes when the telephone rang.", "თვალები დახუჭული არ მქონდა, როდესაც ტელეფონმა დარეკა (Hardly... when)."],
        ["Scarcely had the speaker finished his sentence when the audience applauded.", "გამომსვლელს წინადადება დასრულებული არ ჰქონდა, როცა აუდიტორიამ ტაში დაუკრა."],
        ["Not until the sun rose did the hikers realize how high they had climbed.", "მზის ამოსვლამდე მოლაშქრეები ვერ მიხვდნენ, რა სიმაღლეზე იყვნენ ასულნი (did the hikers realize)."],
        ["Only after reading the letter twice did she understand its true meaning.", "მხოლოდ წერილის ორჯერ წაკითხვის შემდეგ გაიგო მან მისი ნამდვილი აზრი."],
        ["Only when all the passengers had boarded did the plane take off.", "მხოლოდ მაშინ, როცა ყველა მგზავრი ავიდა ბორტზე, აფრინდა თვითმფრინავი."],
        ["Only by practicing every single day can a musician master this instrument.", "მხოლოდ ყოველდღიური ვარჯიშით შეუძლია მუსიკოსს ამ საკრავის სრულყოფილად დაუფლება."],
        ["So cold was the wind that the lake froze overnight.", "ისეთი ცივი იყო ქარი, რომ ტბა ერთ ღამეში გაიყინა (So + Adj + be + Subject)."]
      ],
      mistakes: [
        ["✗ No sooner had we arrived when dinner was served.", "✓ No sooner had we arrived than dinner was served. (No sooner ითხოვს კავშირს than!)"],
        ["✗ Only when did the rain stop we went out.", "✓ Only when the rain stopped did we go out. (ინვერსია ხდება მთავარ ნაწილში: did we go out!)"],
        ["✗ Hardly I had stepped outside when it started to pour.", "✓ Hardly had I stepped outside when it started to pour."]
      ],
      drills: [
        "No sooner had we reached the summit ___ a thick fog covered the valley.|than|when|that|then",
        "Hardly ___ the match started when the home team scored a goal.|had|did|was|has",
        "Scarcely had she opened the umbrella ___ the wind blew it inside out.|when|than|then|that",
        "Only after the guests had left ___ how tired we were.|did we realize|we realized|realized we|had we realize",
        "Not until he took off his hat ___ him.|did I recognize|I recognized|recognized I|had I recognize",
        "Only by conserving water ___ prevent a severe drought in the region.|can we|we can|do we can|we may",
        "No sooner ___ the letter than he regretted his words.|had he posted|he had posted|did he post|posted he",
        "Only when the laboratory results arrived ___ the diagnosis.|did the doctor confirm|the doctor confirmed|confirmed the doctor|was the doctor confirm",
        "So steep ___ that many cyclists had to dismount and walk.|was the hill|the hill was|did the hill be|had the hill been",
        "Barely had the concert ended ___ the crowd rushed towards the stage.|when|than|that|as",
        "Not until the nineteenth century ___ anaesthetic widely used in surgery.|was|did|had|is",
        "Only if the weather improves ___ attempt to cross the mountain pass.|will we|we will|do we will|would we to",
        "Such ___ of the storm that dozens of ancient trees were uprooted.|was the force|the force was|did the force|had the force",
        "Hardly had the train pulled into the station ___ the doors opened.|when|than|then|after",
        "Only in the last chapter ___ the detective reveal the culprit's identity.|does|is|has|did to",
        "Not since the summer of 2003 ___ temperatures risen so high in this region.|have|did|are|were",
        "No sooner ___ down at the café than a waiter brought the menu.|had we sat|we had sat|sat we|did we sat",
        "Only after years of research ___ manage to decode the ancient script.|did the linguists|the linguists did|managed the linguists|were the linguists",
        "So quickly ___ that nobody had time to take a photograph.|did the bird fly away|the bird flew away|flew the bird|was the bird fly",
        "Not until you have tried it yourself ___ how challenging the task is.|will you understand|you will understand|do you understand|understand you"
      ]
    },
    {
      num: 63, level: "C1",
      title: "აქცენტირებული კონსტრუქციები — Cleft Sentences (It-clefts & Wh-clefts)",
      subtitle: "Focusing Information: It is/was... that, What... is/was, All... is",
      rule: "Cleft Sentence („გახლეჩილი წინადადება“) გამოიყენება მაშინ, როცა წინადადების ერთ კონკრეტულ წევრზე გვსურს განსაკუთრებული ლოგიკური და ემოციური აქცენტის დასმა: 1) It-cleft: „It is / was + [გამოყოფილი წევრი] + that / who + დანარჩენი წინადადება“ (მაგ.: „სწორედ ტომმა გატეხა ფანჯარა გუშინ“ -> It was Tom who broke the window yesterday); 2) Wh-cleft (Pseudo-cleft): „What + Clause + is / was + [აქცენტირებული ნაწილი]“ (მაგ.: „ის, რაც მჭირდება, არის დასვენება“ -> What I need is a good rest). ზმნის აქცენტირებისას ვიყენებთ: What he did was (to) V1.",
      formulas: [
        ["+ It-Cleft (საგანი/დრო/ადგილი)", "It is/was + [Emphasized Part] + that / who + Clause", "It was in Paris that they first met in 2018."],
        ["- Wh-Cleft (არსებითი ფოკუსი)", "What + Subject + Verb + is/was + Noun / Clause", "What surprised me most was his calm reaction."],
        ["? Wh-Cleft (მოქმედების ფოკუსი)", "What + Subject + do/does/did + is/was + (to) V1", "What she did was (to) pack her bags and leave."],
        ["💡 All-Cleft & The thing/person", "All (that) I want is... | The person who... is... | The reason why... is that...", "All I asked for was a glass of water."]
      ],
      examples: [
        ["It was my sister who found the lost ring in the garden, not my brother.", "სწორედ ჩემმა დამ იპოვა დაკარგული ბეჭედი ბაღში და არა ჩემმა ძმამ."],
        ["It was not until midnight that the storm finally subsided.", "მხოლოდ შუაღამისას ჩაცხრა საბოლოოდ ქარიშხალი."],
        ["What we need most right now is reliable information.", "ის, რაც ახლა ყველაზე მეტად გვჭირდება, არის სანდო ინფორმაცია."],
        ["What happened was that the driver mistook the red light for green.", "მოხდა ის, რომ მძღოლს წითელი შუქნიშანი მწვანეში აერია."],
        ["What he did was apologize and offer to pay for the damage.", "მან ის გააკეთა, რომ ბოდიში მოიხადა და ზარალის ანაზღაურება შემოგვთავაზა."],
        ["All you have to do is press this green button.", "ყველაფერი, რაც უნდა გააკეთოთ, არის ამ მწვანე ღილაკზე დაჭერა."],
        ["The reason why the flight was cancelled was that visibility was zero.", "მიზეზი, რის გამოც რეისი გაუქმდა, იყო ნულოვანი ხილვადობა."],
        ["It is the quality of the ingredients that makes this dish so special.", "სწორედ ინგრედიენტების ხარისხია ის, რაც ამ კერძს ასე განსაკუთრებულს ხდის."]
      ],
      mistakes: [
        ["✗ What I need are a long holiday.", "✓ What I need is a long holiday. (მხოლობით სახელთან იწერება is)"],
        ["✗ It was yesterday when I saw him at the bank (არასტანდარტული Cleft).", "✓ It was yesterday that I saw him at the bank. (It-cleft-ში დროსა და ადგილთანაც იწერება that!)"],
        ["✗ The reason why I'm late is because the bus broke down.", "✓ The reason why I'm late is that the bus broke down. (The reason is that..., და არა is because)"]
      ],
      drills: [
        "___ was Alexander Graham Bell who invented the telephone in 1876.|It|What|There|Who",
        "___ impressed the judges most was the young pianist's emotional depth.|What|It|That|Which",
        "It was in Rome ___ they spent their honeymoon.|that|where|which|what",
        "All I want ___ a quiet place to read my book.|is|are|were|have",
        "What the mechanic did ___ replace the broken water pump.|was|were|did|had",
        "The reason why the bridge collapsed is ___ the pillars were too weak.|that|because|why|for",
        "It was only when I reached the checkout ___ I realized I had no cash.|that|when|which|what",
        "___ annoys me most about winter is the lack of sunlight.|What|It|That|Which",
        "It is dedication and daily practice ___ turn a beginner into a master.|that|what|who|where",
        "What you should do ___ consult a specialist before making a decision.|is|are|was to|did",
        "___ was because of the heavy fog that the ferry couldn't sail.|It|What|That|There",
        "The person ___ deserves the most credit for this discovery is Dr Evans.|who / that|which|what|whom",
        "All she did ___ smile and wave at the crowd.|was|were|did|had",
        "___ we enjoyed most about the trip was the hospitality of the locals.|What|It|That|Which",
        "It wasn't until the nineteenth century ___ the city gained a railway.|that|when|which|what",
        "The place where we used to meet ___ the old bookshop on the corner.|was|were|that|which",
        "___ happened next took everyone in the courtroom by surprise.|What|It|That|Which",
        "It is not the cost ___ worries me, but the time required.|that|what|who|where",
        "All ___ is needed now is your signature at the bottom of the page.|that|what|who|which",
        "What they are planning to do ___ open a new branch in the north.|is|are|were|do"
      ]
    },
    {
      num: 64, level: "C1",
      title: "ინვერტირებული პირობითი წინადადებები (Inverted Conditionals: Should, Were, Had)",
      subtitle: "Omitting 'If' in Formal Conditionals (Should you..., Were it to..., Had we...)",
      rule: "ფორმალურ და აკადემიურ ინგლისურში I, II და III პირობით წინადადებებში კავშირი „If“ შეიძლება გამოტოვებულ იქნეს და მის ნაცვლად დამხმარე ზმნა გადმოვიდეს ქვემდებარის წინ: 1) I ტიპი (If you should need... -> Should you need... = თუ დაგჭირდებათ); 2) II ტიპი (If she were here... -> Were she here... / If the price were to fall... -> Were the price to fall... = რომ იყოს / რომ დაეცეს); 3) III ტიპი (If they had known... -> Had they known... = რომ სცოდნოდათ). უარყოფით ფორმაში ნაწილაკი „not“ არ იკუმშება და იწერება ქვემდებარის შემდეგ: Had it not been for... (და არა: Hadn't it been!).",
      formulas: [
        ["+ I ტიპი (Should + Subject + V1)", "Should + Subject + V1, will / imperative...", "Should you require further information, please contact us."],
        ["- II ტიპი (Were + Subject + to V1)", "Were + Subject + Adj/Noun (ან to + V1), would + V1", "Were the dam to break, the whole valley would be flooded."],
        ["? III ტიპი (Had + Subject + V3)", "Had + Subject + (not) + V3, would have + V3", "Had we left earlier, we would have caught the flight."],
        ["💡 Had it not been for...", "Had it not been for + Noun (= If it hadn't been for = რომ არა...)", "Had it not been for your help, we would have failed."]
      ],
      examples: [
        ["Should the alarm ring, leave the building immediately by the stairs.", "თუ განგაშის ზარი დარეკავს, დაუყოვნებლივ დატოვეთ შენობა კიბით."],
        ["Should you change your mind, please let us know by Friday.", "თუ აზრს შეიცვლით, გთხოვთ პარასკევამდე შეგვატყობინოთ."],
        ["Were I in your position, I would accept the scholarship without hesitation.", "შენს ადგილას რომ ვიყო, სტიპენდიას უყოყმანოდ დავთანხმდებოდი."],
        ["Were the temperature to drop below zero tonight, the pipes might freeze.", "ტემპერატურა ამაღამ ნულს ქვემოთ რომ დაეცეს, მილები შეიძლება გაიყინოს."],
        ["Had I known that you were coming, I would have baked a cake.", "რომ მცოდნოდა მოდიოდი, ნამცხვარს გამოვაცხობდი."],
        ["Had the captain not reacted so quickly, the ships would have collided.", "კაპიტანს ასე სწრაფად რომ არ ემოქმედა, გემები ერთმანეთს შეეჯახებოდნენ."],
        ["Had it not been for the seatbelt, the driver would have been seriously injured.", "უსაფრთხოების ღვედი რომ არა, მძღოლი მძიმედ დაშავდებოდა."],
        ["Were it not for the traffic, the commute would take only twenty minutes.", "საცობები რომ არა (აწმყოში), მგზავრობას მხოლოდ ოცი წუთი დასჭირდებოდა."]
      ],
      mistakes: [
        ["✗ Hadn't you helped me, I wouldn't have finished.", "✓ Had you not helped me, I wouldn't have finished. (ინვერტირებულ პირობითში not არ იკუმშება!)"],
        ["✗ Were the government lower taxes, spending would rise.", "✓ Were the government to lower taxes, spending would rise. (ზმნასთან საჭიროა to + V1)"],
        ["✗ Should you will see Tom, give him this note.", "✓ Should you see Tom, give him this note. (Should + Subject + V1)"]
      ],
      drills: [
        "___ you have any further questions, please do not hesitate to ask.|Should|Were|Had|Would",
        "___ we known about the roadworks, we would have taken another route.|Had|Were|Should|Did",
        "___ the volcano to erupt, the nearby villages would have to be evacuated.|Were|Should|Had|Would",
        "Had it ___ been for the lighthouse, the vessel would have hit the rocks.|not|no|never|none",
        "___ I richer, I would donate a large sum to the children's hospital.|Were|Had|Should|Am",
        "___ the rain continue until tomorrow, the river will overflow its banks.|Should|Were|Had|Would",
        "Had she ___ forgotten her passport, she would be in Lisbon right now.|not|n't|never to|no",
        "___ they to offer me the position, I would gladly move to Edinburgh.|Were|Should|Had|Did",
        "___ it not for my morning coffee, I wouldn't be able to wake up properly. (აწმყო!)|Were|Had|Should|Is",
        "___ the flight be delayed, we will wait for you at the terminal.|Should|Were|Had|Will",
        "___ the firefighters arrived five minutes later, the whole roof would have collapsed.|Had|Were|Should|Did",
        "Were you ___ examine the picture closely, you would notice a tiny signature.|to|—|have|for",
        "___ anyone call while I am in the meeting, please take a message.|Should|Were|Had|Would",
        "___ he followed the doctor's instructions, he would have recovered much faster.|Had|Were|Should|Did",
        "აირჩიეთ სწორი უარყოფითი ინვერტირებული ფორმა:|Had we not seen the sign|Hadn't we seen the sign|Did we not had seen|Not had we seen",
        "___ the company to go bankrupt, hundreds of people would lose their jobs.|Were|Should|Had|Would",
        "___ you find my keys in the classroom, please leave them at the reception.|Should|Were|Had|Could",
        "___ it not been for your timely warning, we would have walked into a trap. (წარსული!)|Had|Were|Should|Was",
        "___ she here right now, she would know exactly how to calm the children.|Were|Had|Should|Was",
        "___ they realized the value of the painting, they would never have sold it.|Had|Were|Should|Did"
      ]
    },
    {
      num: 65, level: "C1",
      title: "ალტერნატიული პირობითი კავშირები (Suppose, Provided that, But for, Otherwise)",
      subtitle: "Advanced Conditional Linkers: As long as, On condition that, In case, But for",
      rule: "პირობით წინადადებებში „If“-ის ნაცვლად C1 დონეზე ვიყენებთ ზუსტი ნიუანსის მქონე კავშირებს: 1) „Provided (that) / Providing (that) / On condition that / As long as / So long as“ ნიშნავს „მხოლოდ იმ პირობით, თუ...“; 2) „Suppose / Supposing / What if“ ნიშნავს „წარმოიდგინე / დავუშვათ, რომ...“; 3) „In case + Present Simple“ ნიშნავს „იმ შემთხვევისთვის, თუ (წინასწარ თავის დაზღვევა)“ — განსხვავდება if-ისგან! 4) „But for + არსებითი სახელი“ ნიშნავს „რომ არა...“ (= Without / Had it not been for); 5) „Otherwise“ ნიშნავს „წინააღმდეგ შემთხვევაში“.",
      formulas: [
        ["+ მკაცრი პირობა", "Provided (that) / On condition that / As long as + Present Simple", "You can borrow the car as long as you drive carefully."],
        ["- In case (თავის დაზღვევა)", "Take an umbrella in case it rains (წინასწარ მიმაქვს) vs. if it rains (მხოლოდ თუ გაწვიმდება)", "In case of + Noun: In case of fire, use the stairs."],
        ["? But for + Noun (რომ არა)", "But for + არსებითი სახელი, Subject + would / would have V3", "But for the goalkeeper, we would have lost the match."],
        ["💡 Suppose / Otherwise", "Suppose/Supposing + Past/Past Perfect | Imperative + otherwise + will/would", "Hurry up; otherwise, we will miss the bus."]
      ],
      examples: [
        ["You may use the laboratory provided that you wear protective goggles.", "შეგიძლიათ ისარგებლოთ ლაბორატორიით იმ პირობით, თუ დამცავ სათვალეს გაიკეთებთ."],
        ["He agreed to lend them the money on condition that they paid it back by June.", "ის დათანხმდა ფულის სესხებას იმ პირობით, რომ ივნისამდე დააბრუნებდნენ."],
        ["Write down the phone number in case you forget it.", "ჩაიწერეთ ტელეფონის ნომერი იმ შემთხვევისთვის, თუ დაგავიწყდებათ (წინასწარ!)."],
        ["In case of an emergency, press the red alarm button.", "საგანგებო შემთხვევის დროს დააჭირეთ წითელ ღილაკს (In case of + Noun)."],
        ["But for the heavy traffic, we would have arrived an hour ago.", "ძლიერი საცობი რომ არა, ერთი საათის წინ მოვიდოდით (But for + Noun)."],
        ["Supposing you missed the last train, how would you get home?", "დავუშვათ ბოლო მატარებელზე დაგაგვიანდა, სახლში როგორ წახვიდოდი?"],
        ["Put the milk in the fridge; otherwise, it will go sour.", "შედგი რძე მაცივარში, წინააღმდეგ შემთხვევაში აიჭრება."],
        ["We will go on the picnic even if it is slightly cloudy.", "პიკნიკზე მაინც წავალთ, თუნდაც ოდნავ მოღრუბლული იყოს (even if)."]
      ],
      mistakes: [
        ["✗ Take some sandwiches in case you will get hungry.", "✓ Take some sandwiches in case you get hungry. (in case-ის შემდეგ will არ იწერება!)"],
        ["✗ In case of it rains, we will stay inside.", "✓ In case of rain / If it rains, we will stay inside. (in case of-ს მოსდევს მხოლოდ არსებითი სახელი)"],
        ["✗ But for he helped us, we would have failed.", "✓ But for his help, we would have failed. (But for-ს მოსდევს არსებითი ფრაზა და არა ზმნა)"]
      ],
      drills: [
        "I will take a flashlight ___ the electricity goes out during the storm.|in case|if only|unless|otherwise",
        "___ the lifeboat crew, the sailors would have drowned.|But for|Unless|Provided|Suppose",
        "You can stay up late tonight ___ you promise to wake up on time tomorrow.|as long as / provided that|in case|otherwise|but for",
        "In case ___ fire, do not use the elevator.|of|that|if|for",
        "We must book a table in advance; ___, we won't find a seat on Friday night.|otherwise|unless|provided|in case",
        "___ they offered you a job in Tokyo, would you accept it?|Supposing / Suppose|But for|In case of|Otherwise",
        "The bank agreed to extend the loan ___ the borrower provided extra collateral.|on condition that|in case of|but for|otherwise",
        "I'll draw a map for you ___ you can't find our cottage.|in case|unless|provided|even if",
        "___ your generous support, the charity project would never have succeeded.|But for|Suppose|As long as|In case",
        "We will play the tennis match tomorrow ___ it rains heavily.|unless|in case|but for|otherwise",
        "Even ___ he apologizes now, she won't trust him again.|if|though to|in case|unless",
        "Take a bottle of water with you in case the weather ___ very hot.|gets|will get|would get|got",
        "Children are allowed in the pool ___ they are accompanied by an adult.|provided that / as long as|in case|but for|otherwise",
        "You should back up your files regularly; ___, you might lose important work.|otherwise|unless|supposing|provided",
        "___ the sudden frost in April, the fruit harvest would have been excellent.|But for|In case|As long as|Suppose",
        "What ___ nobody is at the airport to meet us when we land?|if|in case|unless|otherwise",
        "Keep a spare key in your wallet ___ you lock yourself out.|in case|unless|on condition|but for",
        "She will lend you her camera ___ you take good care of it.|so long as / provided|in case of|but for|otherwise",
        "In case ___ any delay, please notify the reception desk immediately.|of|that|if|when",
        "He wore a thick raincoat ___ getting wet in the downpour.|for fear of / to avoid|in case|unless|provided"
      ]
    },
    {
      num: 66, level: "C1",
      title: "სურვილისა და უპირატესობის რთული კონსტრუქციები (Would rather, Would sooner, Had better)",
      subtitle: "Preferences & Strong Advice: Same vs. Different Subject",
      rule: "1) როცა „would rather / would sooner“ (მირჩევნია) ეხება თავად მოსაუბრეს (ერთი და იგივე ქვემდებარე), მოსდევს საწყისი ზმნა „to“-ს გარეშე (I'd rather stay at home tonight; წარსულზე: I'd rather have stayed at home last night). 2) მაგრამ როცა გვსურს, რომ სხვა ადამიანმა გააკეთოს (ან არ გააკეთოს) რამე (ორი სხვადასხვა ქვემდებარე: I'd rather YOU...), ზმნა გადადის წარსულ დროში (Unreal Past): აწმყო/მომავალზე იწერება Past Simple (I'd rather you didn't smoke here), ხოლო უკვე მომხდარ წარსულზე — Past Perfect (I'd rather you hadn't told him yesterday)! 3) „Had better ('d better) + V1“ ნიშნავს მკაცრ რჩევას/გაფრთხილებას კონკრეტულ სიტუაციაში.",
      formulas: [
        ["+ ერთი ქვემდებარე (I -> I)", "I would rather (not) + V1 (აწმყო) | + have V3 (წარსული)", "I'd rather walk than take a crowded bus."],
        ["- სხვა ქვემდებარე (აწმყო/მომავალი)", "I'd rather + someone else + Past Simple (went / didn't go)", "I'd rather you cooked dinner tonight."],
        ["? სხვა ქვემდებარე (წარსული!)", "I'd rather + someone else + Past Perfect (had / hadn't + V3)", "I'd rather you hadn't mentioned that yesterday."],
        ["💡 Had better + V1 (გაფრთხილება)", "Subject + had better (not) + V1 (უ-to-ოდ!)", "You had better hurry, or you'll miss the train."]
      ],
      examples: [
        ["I would rather read a book than watch television tonight.", "ამაღამ ტელევიზორის ყურებას წიგნის წაკითხვა მირჩევნია (ერთი ქვემდებარე -> read)."],
        ["I'd rather not go out in this freezing rain.", "მირჩევნია არ გავიდე გარეთ ამ სუსხიან წვიმაში (not go)."],
        ["I would rather you didn't park your car in front of our gate.", "მირჩევნია ჩვენი ჭიშკრის წინ მანქანას არ აჩერებდე (I -> you + didn't park!)."],
        ["Shall I open the window? — I'd rather you didn't; it's cold outside.", "გავაღო ფანჯარა? — მირჩევნია არ გააღო; გარეთ ცივა."],
        ["I'd rather you hadn't borrowed my bicycle yesterday without asking.", "მერჩივნა გუშინ ჩემი ველოსიპედი უკითხავად არ აგეღო (წარსული -> hadn't borrowed!)."],
        ["We had better leave now, or we will get stuck in the rush hour traffic.", "ჯობია ახლავე გავიდეთ, თორემ საცობში მოვყვებით (had better + leave)."],
        ["You'd better not touch that switch with wet hands!", "ჯობია სველი ხელებით მაგ ჩამრთველს არ შეეხო! (had better not + V1)."],
        ["She prefers drinking green tea to drinking coffee.", "მას ყავის დალევას მწვანე ჩაის დალევა ურჩევნია (prefer V-ing TO V-ing)."]
      ],
      mistakes: [
        ["✗ I'd rather you don't tell anyone about this.", "✓ I'd rather you didn't tell anyone about this. (სხვა ქვემდებარესთან იწერება Past Simple: didn't tell)"],
        ["✗ You had better to see a doctor immediately.", "✓ You had better see a doctor immediately. (had better-ის შემდეგ to არ იწერება!)"],
        ["✗ I prefer walking than cycling.", "✓ I prefer walking to cycling / I'd rather walk than cycle. (prefer ... TO ..., ხოლო would rather ... THAN ...)"]
      ],
      drills: [
        "I would rather ___ at home tonight than go to a noisy party.|stay|to stay|stayed|staying",
        "I'd rather you ___ make so much noise while I am studying. (აწმყო)|didn't|don't|wouldn't|not",
        "You had better ___ an umbrella; those clouds look very dark.|take|to take|taking|took",
        "I'd rather you ___ told Sarah about the surprise party yesterday! (წარსული!)|hadn't|didn't|wouldn't|haven't",
        "He would rather ___ in the countryside than in a crowded city.|live|to live|living|lived",
        "You'd better ___ be late for the interview tomorrow morning!|not|don't|not to|didn't",
        "Shall I phone him now? — I'd rather you ___ until tomorrow.|waited|wait|will wait|to wait",
        "She prefers reading historical novels ___ watching action films.|to|than|from|over",
        "I would prefer ___ by train rather than fly.|to travel|travelling to|travel|travelled",
        "We'd better ___ the petrol tank before we get onto the highway.|fill|to fill|filling|filled",
        "I'd rather ___ a quiet dinner at home last night; the restaurant was too loud.|have had|had|have|to have",
        "My parents would rather I ___ medicine at university.|studied|study|will study|to study",
        "I'd rather ___ tell him the bad news right now.|not|don't|not to|didn't",
        "The concert was boring; I'd rather we ___ gone to the theatre instead. (გუშინ)|had|have|did|were",
        "You had better ___ forget your passport, or they won't let you board.|not|don't|not to|never to",
        "Would you rather ___ tea or coffee with your dessert?|have|to have|having|had",
        "I'd sooner you ___ smoke inside the house, if you don't mind.|didn't|don't|won't|not",
        "He prefers ___ chess to playing card games.|playing|to play|play|played",
        "I'd rather you ___ paid the bill in cash yesterday.|had|have|did|would",
        "It's getting dark; we ___ better turn on the headlights.|had|would|should|did"
      ]
    },
    {
      num: 67, level: "C1",
      title: "ვნებითი გვარის ინფინიტივური და გერუნდიული ფორმები",
      subtitle: "Passive Infinitives (to be done / to have been done) & Passive Gerunds (being done)",
      rule: "როდესაც ზმნის შემდეგ გვჭირდება ინფინიტივი ან გერუნდი (-ing), მაგრამ ქვემდებარე თვითონ განიცდის მოქმედებას (ვნებითი გვარი): 1) Passive Infinitive: „to be + V3“ (She wants to be invited = მას სურს, რომ დაპატიჟონ); 2) Perfect Passive Infinitive (უკვე დასრულებული წარსული მოქმედებისთვის): „to have been + V3“ (The manuscript appears to have been written in 1400); 3) Passive Gerund: „being + V3“ (Nobody likes being laughed at = არავის მოსწონს, როცა დასცინიან); 4) Perfect Passive Gerund: „having been + V3“.",
      formulas: [
        ["+ Passive Infinitive (აწმყო)", "want / expect / hope / need + TO BE + V3", "Every child needs to be loved and respected."],
        ["- Perfect Passive Infinitive", "seem / appear / claim / delighted + TO HAVE BEEN + V3", "She was delighted to have been chosen for the team."],
        ["? Passive Gerund (-ing)", "like / hate / avoid / remember / mind + BEING + V3", "He hates being kept waiting at appointments."],
        ["💡 წინდებული + being V3", "insist on / afraid of / without + BEING + V3", "The thief entered the building without being seen."]
      ],
      examples: [
        ["Nobody enjoys being interrupted while they are speaking.", "არავის სიამოვნებს, როცა საუბრის დროს სიტყვას აწყვეტინებენ (being interrupted)."],
        ["The president asked not to be disturbed during the conference.", "პრეზიდენტმა ითხოვა, რომ კონფერენციის დროს არ შეეწუხებინათ (not to be disturbed)."],
        ["I clearly remember being taken to the seaside when I was four.", "მკაფიოდ მახსოვს, როგორ წამიყვანეს ზღვაზე, როცა ოთხი წლის ვიყავი (being taken)."],
        ["The fox managed to cross the yard without being noticed by the dogs.", "მელამ შეძლო ეზოს გადაკვეთა ისე, რომ ძაღლებს არ შეემჩნიათ (without being noticed)."],
        ["This ancient statue seems to have been carved out of a single stone.", "ეს უძველესი ქანდაკება, როგორც ჩანს, ერთი მთლიანი ქვისგან გამოუთლიათ (to have been carved)."],
        ["She was proud to have been awarded the first prize in chemistry.", "ის ამაყობდა, რომ ქიმიაში პირველი პრიზი მიანიჭეს (to have been awarded)."],
        ["Most cats dislike being bathed in cold water.", "კატების უმეტესობას არ უყვარს, როცა ცივ წყალში აბანავებენ."],
        ["The letters are ready to be posted this afternoon.", "წერილები მზადაა დღეს ნაშუადღევს გასაგზავნად (to be posted)."]
      ],
      mistakes: [
        ["✗ He avoids to be seen by reporters.", "✓ He avoids being seen by reporters. (avoid-ს მოსდევს -ing -> being seen)"],
        ["✗ She hopes being promoted next month.", "✓ She hopes to be promoted next month. (hope-ს მოსდევს to-infinitive -> to be promoted)"],
        ["✗ The town appears to destroy by an earthquake centuries ago.", "✓ The town appears to have been destroyed by an earthquake centuries ago."]
      ],
      drills: [
        "Most people hate ___ told what to do all the time.|being|to be|be|been",
        "The new hospital is expected ___ completed by next autumn.|to be|being|to have been|be",
        "The burglar climbed over the wall without ___ seen by the guards.|being|to be|been|be",
        "This fortress appears ___ built by the Romans two thousand years ago.|to have been|to be|being|having been",
        "My little brother is afraid of ___ left alone in the dark.|being|to be|be|been",
        "She hopes ___ selected for the national swimming team.|to be|being|be|been",
        "Do you mind ___ photographed while you are working?|being|to be|be|been",
        "The damaged painting needs ___ restored by a professional.|to be|being to|be|have been",
        "He was thrilled ___ invited to speak at the international symposium last week.|to have been|being|to be|having",
        "Celebrities often wear sunglasses to avoid ___ recognized in the street.|being|to be|be|been",
        "I don't remember ___ informed about the change of schedule.|being / having been|to be|be|to have",
        "All applications must ___ submitted before the thirty-first of May.|be|to be|being|been",
        "The stray dog seems ___ abandoned by its previous owners.|to have been|being|to be|be",
        "Babies demand ___ fed every few hours.|to be|being|be|been",
        "She complained about ___ given too much paperwork.|being|to be|be|been",
        "There is a lot of work ___ done before the guests arrive.|to be|being|been|be",
        "He resented ___ treated like a child by his older brothers.|being|to be|be|been",
        "The documents are thought ___ destroyed in the fire of 1920.|to have been|to be|being|be",
        "No one likes ___ kept waiting in the rain.|being|to be|be|been",
        "She insisted on ___ consulted before any major decision was made.|being|to be|be|been"
      ]
    },
    {
      num: 68, level: "C1",
      title: "რთული მიმღეობური და აბსოლუტური კონსტრუქციები (Absolute Phrases & Dangling Participles)",
      subtitle: "With + Object + Participle, Weather Permitting & Subject Alignment",
      rule: "1) სტანდარტულ მიმღეობურ ბრუნვაში (Participle Clause) მიმღეობისა და მთავარი ზმნის ქვემდებარე აუცილებლად ერთი და იგივე უნდა იყოს! თუ ისინი სხვადასხვაა, ვიღებთ უხეშ სტილისტურ შეცდომას (Dangling/Misrelated Participle: მაგ. ✗ Walking through the park, the flowers looked lovely — ყვავილები ხომ არ სეირნობდნენ!). 2) როცა ორ ნაწილს სხვადასხვა ქვემდებარე აქვს, ვიყენებთ აბსოლუტურ კონსტრუქციას (Nominative Absolute) ან „With + Object + V-ing / V3“ (მაგ.: With the exams approaching, the students studied harder; Weather permitting, we will sail tomorrow).",
      formulas: [
        ["+ ქვემდებარის თანხვედრა", "Looking out the window, I saw the mountains. (I looked = I saw)", "არასწორია: Looking out the window, the mountains were visible!"],
        ["- With + Object + V-ing / V3", "With + ობიექტი + V-ing (აქტიური) / V3 (პასიური)", "With night falling, we hurried back to the camp."],
        ["? აბსოლუტური კონსტრუქცია", "Subject 1 + Participle, Subject 2 + Main Verb", "Weather permitting, the ceremony will be held outdoors."],
        ["💡 კავშირი + მიმღეობა", "While / When / Once / Unless / On + V-ing / V3", "On arriving at the hotel, she checked in immediately."]
      ],
      examples: [
        ["On hearing the good news, she called her parents immediately.", "კარგი ამბის გაგებისთანავე (On hearing = As soon as she heard), მან მაშინვე დაურეკა მშობლებს."],
        ["Once deprived of oxygen, a fire quickly goes out.", "ჟანგბადის შეწყვეტისთანავე (Once + V3), ცეცხლი სწრაფად ქრება."],
        ["Weather permitting, the outdoor concert will take place on Saturday.", "თუ ამინდი ხელს შეგვიწყობს (Weather permitting), კონცერტი შაბათს გაიმართება."],
        ["With the final exams approaching, the library is full of students.", "რადგან ფინალური გამოცდები ახლოვდება (With + exams + approaching), ბიბლიოთეკა სავსეა."],
        ["She sat by the fireplace with her eyes closed.", "ის ბუხართან იჯდა თვალებდახუჭული (with + her eyes + closed - V3)."],
        ["All things considered, the expedition was a remarkable success.", "ყველაფრის გათვალისწინებით (All things considered), ექსპედიცია დიდი წარმატებით დასრულდა."],
        ["Having been warned about the storm, the fishermen stayed in the harbour.", "რადგან ქარიშხლის შესახებ გაფრთხილებულნი იყვნენ (Having been warned), მეთევზეები ნავსადგურში დარჩნენ."],
        ["Until proven guilty, every suspect is presumed innocent.", "სანამ ბრალი არ დაუმტკიცდება (Until proven), ყველა ეჭვმიტანილი უდანაშაულოდ ითვლება."]
      ],
      mistakes: [
        ["✗ Walking through the forest, a bear crossed our path.", "✓ Walking through the forest, we saw a bear cross our path. (ტყეში ჩვენ მივდიოდით და არა დათვი!)"],
        ["✗ Being a rainy day, we cancelled the picnic.", "✓ It being a rainy day / Because it was a rainy day, we cancelled the picnic."],
        ["✗ Having repaired, the mechanic tested the engine.", "✓ Having been repaired, the engine was tested by the mechanic."]
      ],
      drills: [
        "___ arriving at the station, please show your ticket at the barrier.|On / Upon|In|At|By",
        "Weather ___, we will have lunch on the terrace tomorrow.|permitting|permitted|permits|to permit",
        "აირჩიეთ სტილისტურად გამართული წინადადება (Dangling Participle-ის გარეშე):|Looking through the binoculars, we saw an eagle.|Looking through the binoculars, an eagle was seen.|Looking through the binoculars, the sky was clear.|Looking through the binoculars, the mountain looked close.",
        "With the sun ___ behind the hills, the valley grew cold and dark.|setting|set|to set|sets",
        "___ been painted recently, the room smelled strongly of fresh paint.|Having|Being|To have|Had",
        "He stood in the rain with his hands ___ in his pockets.|buried|burying|bury|to bury",
        "Once ___ to air, the chemical changes colour rapidly.|exposed|exposing|expose|to expose",
        "All things ___, the team performed remarkably well under pressure.|considered|considering|consider|to consider",
        "___ a holiday, all the banks and post offices were closed.|It being|Being|Having been|To be",
        "With prices ___ so fast, many families are cutting back on luxuries.|rising|risen|rose|to rise",
        "Unless ___ otherwise, please submit your essays by Friday.|instructed|instructing|instruct|to instruct",
        "___ opening the ancient chest, the archaeologists found gold coins.|On / Upon|At|In|With",
        "She listened to the music with her head ___ against the cushion.|resting|rested to|rest|rests",
        "___ been bitten by a dog as a child, he is still afraid of them.|Having|Being|Had|To have",
        "When ___ under a microscope, a snowflake reveals a complex pattern.|viewed|viewing|view|to view",
        "With all the tickets ___, thousands of fans had to watch the match on TV.|sold|selling|sell|to sell",
        "აირჩიეთ გრამატიკულად სწორი წინადადება:|Driving home last night, I saw a fox on the road.|Driving home last night, a fox ran across the road.|Driving home last night, the moon was bright.|Driving home last night, the road was icy.",
        "If ___ carefully, these herbs can cure a mild sore throat.|prepared|preparing|prepare|to prepare",
        "The negotiations ___ ended, the delegates signed the treaty.|having|being|had|to have",
        "With the children ___ asleep, the house was completely silent.|fast|fastly|being to|having"
      ]
    },
    {
      num: 69, level: "C1",
      title: "მომავალი წარსულში და მომავლის იდიომატური ფორმები (Future in the Past & Idiomatic Future)",
      subtitle: "Was/Were going to, Was to have V3, Be on the verge/brink of, Be due to",
      rule: "1) როდესაც წარსულის გადმოსახედიდან ვსაუბრობთ მოვლენაზე, რომელიც იმ მომენტისთვის მომავალში იყო დაგეგმილი, ვიყენებთ „Future in the Past“ ფორმებს: was/were going to + V1 (ვაპირებდი, მაგრამ ხშირად არ განხორციელდა), would + V1, was/were about to + V1 (ზუსტად ვაპირებდი, როცა...), was/were to + V1 (ოფიციალური გეგმა ან ბედისწერა), ხოლო „was/were to have + V3“ ნიშნავს გეგმას, რომელიც ჩაიშალა და არ შედგა! 2) მომავლის C1 იდიომები: be on the verge / brink / point of + V-ing/Noun (რისამე ზღვარზე ყოფნა), be due to + V1 (განრიგით უწევს), be bound / sure to + V1 (გარდაუვლად მოხდება).",
      formulas: [
        ["+ Was/Were going to & About to", "was/were going to + V1 | was/were about to + V1 (when...)", "I was just about to leave when the phone rang."],
        ["- Was to V1 vs. Was to have V3", "was/were to + V1 (შედგა) vs. was/were to have + V3 (ჩაიშალა!)", "The summit was to have taken place in May, but it was cancelled."],
        ["? On the verge / brink / point of", "be on the verge / brink / point of + V-ing / Noun (უახლოეს წამებში მოხდება)", "Scientists are on the verge of finding a cure."],
        ["💡 Be due to / Be bound to", "be due to + V1 (დროის განრიგით) | be bound to + V1 (აუცილებლად მოხდება)", "The train is due to arrive at 6:15."]
      ],
      examples: [
        ["We were going to play tennis yesterday, but the rain stopped us.", "გუშინ ჩოგბურთის თამაშს ვაპირებდით, მაგრამ წვიმამ ხელი შეგვიშალა."],
        ["I was just about to go to bed when someone knocked at the door.", "ზუსტად დაძინებას ვაპირებდი, როდესაც ვიღაცამ კარზე დააკაკუნა."],
        ["Little did he know that this painting was to make him famous.", "მან არც კი იცოდა, რომ ეს ნახატი მას მომავალში სახელს გაუთქვამდა (ბედისწერა -> was to make)."],
        ["The championship was to have been held in June, but it was postponed.", "ჩემპიონატი ივნისში უნდა ჩატარებულიყო (მაგრამ არ ჩატარდა -> was to have been held)."],
        ["The exhausted swimmer was on the verge of giving up when he saw the boat.", "დაღლილი მოცურავე დანებების ზღვარზე იყო (on the verge of giving up), როცა ნავი დაინახა."],
        ["The plane is due to land in twenty minutes.", "განრიგის მიხედვით თვითმფრინავი ოც წუთში უნდა დაჯდეს (is due to land)."],
        ["If you leave your bike unlocked, someone is bound to steal it.", "თუ ველოსიპედს დაუბმელს დატოვებ, ვიღაც აუცილებლად მოიპარავს (is bound to)."],
        ["The two countries were on the brink of signing a historic peace treaty.", "ორი ქვეყანა ისტორიული სამშვიდობო ხელშეკრულების ხელმოწერის მიჯნაზე იდგა."]
      ],
      mistakes: [
        ["✗ The company is on the verge to launch a new product.", "✓ The company is on the verge of launching a new product. (on the verge OF + V-ing!)"],
        ["✗ The train is due arriving at noon.", "✓ The train is due to arrive at noon. (be due TO + V1)"],
        ["✗ I was about leaving when you called.", "✓ I was about to leave / on the point of leaving when you called."]
      ],
      drills: [
        "I was just ___ to lock the door when I remembered my keys were inside.|about|on the verge|due|bound",
        "The rare bird species is on the brink ___ extinction.|of|to|for|in",
        "The ferry is due ___ depart at seven o'clock tomorrow morning.|to|of|for|in",
        "The festival was ___ taken place last weekend, but the storm ruined the stage. (ჩაშლილი წარსული გეგმა!)|to have|to be|going|about to",
        "She was on the point of ___ into tears when her mother hugged her.|bursting|burst|to burst|bursts",
        "With so much preparation, their team is ___ to win the competition.|bound / sure|due|verge|brink",
        "We ___ going to visit the castle, but we ran out of time.|were|are|have|had",
        "The young actor had no idea that this role ___ change his life forever.|would / was to|will|is going to|is due to",
        "Researchers are on the verge ___ a major breakthrough in astronomy.|of making|to make|for making|make",
        "What time is the next high-speed train due ___?|to arrive|arriving|of arriving|arrive",
        "He was about ___ the contract when his lawyer noticed a mistake.|to sign|signing|of signing|sign",
        "Don't worry; everything is ___ to work out fine in the end.|bound / sure|due|verge|about",
        "The bridge was ___ opened in March, but construction was delayed.|to have been|to be|being|going",
        "I knew from the start that the plan ___ fail.|would|will|is going to|can",
        "The old empire was on the ___ of collapse.|brink / verge|due|bound|about",
        "The new library is ___ to open its doors to the public next Monday.|due / scheduled|verge|brink|point",
        "She was on the ___ of calling a taxi when the bus finally appeared.|point / verge|due|bound|about",
        "They promised they ___ send us a postcard as soon as they arrived.|would|will|are going to|shall",
        "If you don't wear gloves in this frost, your fingers are ___ to get numb.|bound|due|verge|point",
        "I was ___ to phone you when your message arrived!|just about|on the verge|due|bound"
      ]
    },
    {
      num: 70, level: "C1",
      title: "მოდალური ზმნების რთული ნიუანსები (Characteristic Behaviour, May/Might as well)",
      subtitle: "Will/Would for Habits, May/Might + Concession, Can't help, Dare & Need",
      rule: "C1 დონეზე მოდალურ ზმნებს აქვთ დამატებითი სტილისტური მნიშვნელობები: 1) „will + V1“ აწმყოში და „would + V1“ წარსულში გამოხატავს ადამიანის დამახასიათებელ, ჩვეულ (ხშირად გამაღიზიანებელ ან ნოსტალგიურ) ქცევას (He will sit for hours watching the waves; My grandmother would always bake bread on Sundays). გაითვალისწინეთ: used to-სგან განსხვავებით, would არ იხმარება მდგომარეობის ზმნებთან (be, live, have)! 2) „may / might + V1 ... but ...“ გამოხატავს დათმობას (= Although: He may be young, but he is very wise). 3) „may / might as well + V1“ ნიშნავს „ბარემ გავაკეთოთ (სხვა უკეთესი ვარიანტი მაინც არ გვაქვს)“. 4) „needn't + V1“ (უ-to-ოდ! = don't need to).",
      formulas: [
        ["+ ჩვეული ქცევა (Will / Would)", "She will talk for hours. (აწმყო ჩვევა) | In summer, we would swim daily. (წარსული ქცევა)", "მდგომარეობასთან (be/live/own) იწერება მხოლოდ used to (და არა would)!"],
        ["- May / Might ... but (დათმობა)", "Subject + may/might + V1, but... (= Although...)", "The hotel may be expensive, but the view is worth it."],
        ["? May / Might as well + V1", "We may/might as well + V1 (ბარემ გავაკეთოთ...)", "The bus is late; we might as well walk."],
        ["💡 Need & Dare (ნახევრად მოდალური)", "You needn't worry (უ-to-ოდ!) | How dare you say that! / I daren't look.", "He didn't dare (to) ask."]
      ],
      examples: [
        ["When we were children, our grandfather would tell us stories by the fire.", "როცა ბავშვები ვიყავით, ბაბუა ბუხართან ზღაპრებს გვიყვებოდა ხოლმე (განმეორებადი მოქმედება -> would)."],
        ["We used to live in a small cottage near the woods.", "ჩვენ ტყესთან ახლოს პატარა აგარაკზე ვცხოვრობდით (მდგომარეობა live -> მხოლოდ used to, არა would!)."],
        ["He will leave his wet towel on the bathroom floor! It's so annoying.", "ის სულ სველ პირსახოცს ტოვებს იატაკზე! (დამახასიათებელი ქცევა -> will)."],
        ["The film may be three hours long, but it is never boring.", "ფილმი შეიძლება სამსაათიანია (მიუხედავად იმისა, რომ...), მაგრამ მოსაწყენი სულაც არ არის."],
        ["Nobody else wants this last slice of cake, so you might as well eat it.", "ეს ბოლო ნაჭერი ნამცხვარი მაინც არავის უნდა, ასე რომ ბარემ შენ შეჭამე."],
        ["You needn't bring an umbrella; the forecast says it will be sunny.", "ქოლგის წამოღება არ გჭირდებათ (needn't bring — to-ს გარეშე!)."],
        ["How dare he accuse us without any proof!", "როგორ ბედავს ჩვენს დადანაშაულებას ყოველგვარი მტკიცებულების გარეშე!"],
        ["I couldn't help laughing when I saw the puppy chasing its tail.", "სიცილი ვერ შევიკავე (couldn't help + V-ing), როცა დავინახე, როგორ დასდევდა ლეკვი თავის კუდს."]
      ],
      mistakes: [
        ["✗ When I was young, I would have a red bicycle.", "✓ When I was young, I used to have a red bicycle. (have არის კუთვნილება/მდგომარეობა -> would არ იხმარება!)"],
        ["✗ You needn't to wait for me.", "✓ You needn't wait / You don't need to wait for me. (needn't-ის შემდეგ to არ იწერება)"],
        ["✗ I can't help to think about the exam.", "✓ I can't help thinking about the exam. (can't help-ს ყოველთვის მოსდევს V-ing!)"]
      ],
      drills: [
        "Every Sunday morning, my grandmother ___ bake fresh cinnamon rolls.|would|was|used|might",
        "რომელ წინადადებაში არ შეიძლება „used to“-ს ჩანაცვლება „would“-ით (რადგან ზმნა მდგომარეობას აღნიშნავს)?|There used to be an old castle on this hill.|We used to swim in the river every afternoon.|He used to read us poems in the evening.|She used to visit us every Sunday.",
        "Since the rain has stopped, we ___ as well walk home instead of taking a taxi.|might / may|can|should|must",
        "You ___ wash those tomatoes; I have already washed them. (to-ს გარეშე!)|needn't|don't need|mustn't to|haven't to",
        "He ___ have a PhD in physics, but he can't fix a simple toaster! (დათმობა)|may / might|can|should|will",
        "I couldn't help ___ when he told me that funny story.|laughing|to laugh|laugh|laughed",
        "How ___ you open my private letters without permission!|dare|need|may|ought",
        "Cats are independent animals; they ___ only come to you when they want to.|will|shall|ought|need",
        "The concert has been cancelled, so we ___ as well go back to the hotel.|might / may|can|must|would",
        "When we lived by the sea, we ___ walk along the cliffs for hours.|would / used to|were used to|got used to|might",
        "My uncle ___ be a captain in the navy thirty years ago. (მდგომარეობა: be!)|used to|would|was used to|will",
        "She ___ not look very strong, but she can lift heavy weights easily.|may / might|can|must|will",
        "I ___ not tell him the truth; he would lose his temper.|dare|need|ought|may",
        "You ___ to worry about the accommodation; everything is booked.|don't need|needn't|mustn't|can't",
        "Typical of Tom! He ___ always forget where he parked his car.|will|shall|may|need",
        "There is nothing good on TV tonight; I ___ as well go to bed early.|might / may|should to|can|must",
        "She couldn't help ___ sorry for the lost traveller.|feeling|to feel|feel|felt",
        "___ we really fill in all these forms by hand? (მოდალური კითხვა)|Need|Do need|Are need|Have need",
        "In the old days, people ___ gather around the radio every evening.|would|were used to|got used to|shall",
        "The cabin ___ be small and simple, but it is warm and cosy.|may / might|can|will|shall"
      ]
    },
    {
      num: 71, level: "C1",
      title: "სრული გერუნდი/ინფინიტივი და კუთვნილებითი გერუნდი (Perfect Gerund/Infinitive)",
      subtitle: "Having done, To have done & Possessive + V-ing (Do you mind my...?)",
      rule: "1) როდესაც ზმნის შემდეგ მოყვანილი მოქმედება წინ უსწრებს მთავარ ზმნას (ანუ უფრო ადრე მოხდა წარსულში), ვიყენებთ სრულ (Perfect) ფორმებს: Perfect Infinitive: „to have + V3“ (He claims to have met the president last year / I would like to have seen that play) და Perfect Gerund: „having + V3“ (She admitted having taken the key). 2) ფორმალურ ინგლისურში, როდესაც გერუნდის (-ing) წინ დგას მოქმედების შემსრულებელი პირი, ვიყენებთ კუთვნილებით ფორმას (my, your, his, her, our, their, Tom's + V-ing): „Do you mind my opening the window?“ / „I appreciate your helping us.“",
      formulas: [
        ["+ Perfect Infinitive (to have V3)", "seem / appear / claim / pretend / glad + TO HAVE + V3", "He seems to have forgotten our appointment."],
        ["- Unrealized Past (would like to have V3)", "would like / would love / would prefer + TO HAVE + V3 (მინდოდა მენახა, მაგრამ ვერ ვნახე)", "I would love to have visited Venice, but we had no time."],
        ["? Perfect Gerund (having V3)", "admit / deny / regret / apologize for + HAVING + V3", "He denied having seen the document before."],
        ["💡 Possessive + Gerund (კუთვნილებითი)", "appreciate / mind / object to / excuse + my/your/his/Tom's + V-ing", "I appreciate your replying so promptly."]
      ],
      examples: [
        ["The mountaineer claims to have reached the summit without oxygen.", "მთამსვლელი ამტკიცებს, რომ მწვერვალს ჟანგბადის გარეშე მიაღწია (წარსულში -> to have reached)."],
        ["I would like to have stayed longer at the festival, but I had to catch the train.", "მინდოდა უფრო დიდხანს დავრჩენილიყავი ფესტივალზე (მაგრამ ვერ დავრჩი -> to have stayed)."],
        ["He denied having revealed the company's secret to anyone.", "მან უარყო, რომ კომპანიის საიდუმლო ვინმეს გაუმჟღავნა (having revealed)."],
        ["Do you mind my sitting next to you?", "წინააღმდეგი ხომ არ იქნებით, თქვენ გვერდით რომ დავჯდე? (ფორმალური: my sitting)."],
        ["We really appreciate your taking the time to review our proposal.", "ძალიან ვაფასებთ, რომ დრო დაუთმეთ ჩვენი შეთავაზების განხილვას (your taking)."],
        ["She seems to have lost weight since the last time we met.", "როგორც ჩანს, ბოლო შეხვედრის შემდეგ წონაში დაიკლო (to have lost)."],
        ["His parents objected to his dropping out of university.", "მისი მშობლები წინააღმდეგნი იყვნენ, რომ მას უნივერსიტეტი მიეტოვებინა (object to + his dropping)."],
        ["They were fortunate to have escaped the storm unharmed.", "მათ გაუმართლათ, რომ ქარიშხალს უვნებლად გადაურჩნენ."]
      ],
      mistakes: [
        ["✗ I would like to have gone to the concert tomorrow.", "✓ I would like to go to the concert tomorrow. (to have gone ეხება მხოლოდ წარსულ, განუხორციელებელ სურვილს!)"],
        ["✗ He pretended having read the entire book.", "✓ He pretended to have read the entire book. (pretend-ს მოსდევს to-infinitive -> to have read)"],
        ["✗ She objected to him smoke in the room (არაფორმალური/უხეში).", "✓ She objected to his smoking in the room. (ფორმალურ C1 სტილში: his smoking)"]
      ],
      drills: [
        "The witness claimed ___ seen the suspect near the harbour the night before.|to have|having|to be|that have",
        "I would love ___ met your grandfather before he passed away.|to have|having|to be|have",
        "We greatly appreciate ___ helping us organize the charity event. (ფორმალური C1)|your|you to|yours|for you",
        "He admitted ___ made a serious error in the calculation.|having / to having|to have|have|had",
        "You seem ___ lost your keys again! Let's look for them.|to have|having|to be|that you",
        "Do you mind ___ opening the window for a few minutes?|my|mine|I|for me",
        "The explorer is believed ___ crossed the desert on foot in 1910.|to have|having|to be|have",
        "She regretted not ___ studied a second foreign language at school.|having|to have|have|had",
        "We were lucky ___ found a shelter before the hailstorm began.|to have|having|be|to be",
        "His mother strongly objected to ___ buying a dangerous motorcycle.|his|he|him to|for him",
        "They pretended not ___ noticed our mistake, which was very polite.|to have|having|have|to be",
        "I was meant ___ called you yesterday, but I completely forgot.|to have|having|to be|have",
        "Please excuse ___ arriving unannounced at this late hour.|my|mine|I|me to",
        "The ancient Mariners are thought ___ navigated by the stars.|to have|having|to be|that had",
        "He was proud of ___ completed the marathon in under four hours.|having|to have|have|had",
        "I would prefer ___ told the truth from the very beginning.|to have been|being|to be|having",
        "Nobody could explain ___ disappearing so suddenly from the party.|his|he|him to|of him",
        "She appears ___ been waiting here for quite a long time.|to have|having|to be|that has",
        "We apologize for not ___ replied to your inquiry earlier.|having|to have|have|had",
        "The castle was supposed ___ been renovated last year, but funds ran out.|to have|having|to be|be"
      ]
    },
    {
      num: 72, level: "C1",
      title: "დათმობისა და განუსაზღვრელობის სტრუქტურები (Whatever, However + Adj, Much as, Adj + as/though)",
      subtitle: "No matter how/what, However hard, Rich as he is, Much as I admire",
      rule: "1) „However + ზედსართავი/ზმნიზედა + Subject + Verb“ (= No matter how + adj/adv) ნიშნავს „რაც არ უნდა [რთული/სწრაფი] იყოს...“ (მაგ.: However hard he tries = No matter how hard he tries, he can't win). 2) „Whatever + არსებითი სახელი / წინადადება“ (= No matter what) — „რაც არ უნდა...“. 3) ემფაზური დათმობა წინ გადმოტანილი ზედსართავით: „Adjective/Adverb + as / though + Subject + Verb“ (მაგ.: Tired as/though she was, she finished the work = მიუხედავად იმისა, რომ დაღლილი იყო...). 4) ზმნის დათმობა: „Much as + Subject + Verb“ (Much as I respect him, I disagree = რამდენადაც არ უნდა ვცემდე პატივს...).",
      formulas: [
        ["+ However + Adj/Adv", "However + ზედსართავი/ზმნიზედა + Subject + Verb (= No matter how...)", "However cold it is, he goes for a morning swim."],
        ["- Whatever / Whoever / Wherever", "Whatever (= No matter what) | Whoever (= No matter who) | Wherever (= No matter where)", "Whatever happens, stay calm."],
        ["? Adjective + as / though", "Adjective / Adverb + as / though + Subject + Verb (და არა although!)", "Difficult though the exam was, everyone passed."],
        ["💡 Much as + Subject + Verb", "Much as + Subject + like/admire/respect/want...", "Much as I would like to stay, I must leave now."]
      ],
      examples: [
        ["However hard I try, I can never remember all the irregular numbers.", "რამდენადაც არ უნდა ვეცადო (However hard), ყველა კოდს ვერ ვიმახსოვრებ."],
        ["No matter how fast we walked, we couldn't catch up with the guide.", "რაც არ უნდა სწრაფად გვევლო (No matter how fast), გიდს ვერ დავეწიეთ."],
        ["Exhausted though the climbers were, they continued towards the peak.", "მიუხედავად იმისა, რომ მთამსვლელები ქანცგაწყვეტილნი იყვნენ (Exhausted though...), გზა გააგრძელეს."],
        ["Much as I admire his artistic talent, I don't like his latest painting.", "რამდენადაც არ უნდა ვაფასებდე მის ნიჭს (Much as I admire), მისი ბოლო ნახატი არ მომწონს."],
        ["Whatever excuses he makes, do not lend him any more money.", "რა თავის მართლებაც არ უნდა მოიგონოს, მეტი ფული აღარ ასესხო."],
        ["Rich as he is, he lives in a very modest apartment.", "მიუხედავად იმისა, რომ მდიდარია (Rich as he is), ძალიან მოკრძალებულ ბინაში ცხოვრობს."],
        ["Whoever calls, tell them I am busy until five o'clock.", "ვინც არ უნდა დარეკოს (Whoever calls), უთხარი, რომ ხუთ საათამდე დაკავებული ვარ."],
        ["Strange as it may seem, birds are the closest living relatives of dinosaurs.", "რაოდენ უცნაურადაც არ უნდა ჩანდეს (Strange as it may seem), ფრინველები დინოზავრების უახლოესი ნათესავები არიან."]
      ],
      mistakes: [
        ["✗ However the task is difficult, we must finish it.", "✓ However difficult the task is, we must finish it. (However-ის შემდეგ ეგრევე მოდის ზედსართავი difficult!)"],
        ["✗ Tired although he was, he kept working.", "✓ Tired as / though he was, he kept working. (წინ გადმოტანილი ზედსართავის შემდეგ although არ იწერება — მხოლოდ as ან though!)"],
        ["✗ No matter what difficult it is...", "✓ No matter how difficult it is... (ზედსართავის წინ იწერება how, და არა what)"]
      ],
      drills: [
        "___ rich a person may be, health cannot be bought with money.|However|Whatever|Whoever|Although",
        "Cold ___ the water was, the children jumped into the lake.|though / as|although|despite|however",
        "___ as I enjoy her company, I need some quiet time alone today.|Much|Many|However|Although",
        "No matter ___ happens, we must stick to our original plan.|what|how|which|that",
        "אირჩიეთ სიტყვების სწორი წყობა:|However fast he runs, he won't catch the train.|However he runs fast, he won't catch the train.|Whatever fast he runs, he won't catch the train.|No matter what fast he runs, he won't catch the train.",
        "___ knocks at the door, do not open it to strangers at night.|Whoever|Whatever|However|Wherever",
        "Strange ___ it may sound, desert nights can be freezing cold.|as / though|although|despite|even",
        "No matter ___ carefully you plan a trip, unexpected things can happen.|how|what|which|who",
        "___ route we take, the journey will last at least three hours.|Whichever / Whatever|However|Whoever|Whenever",
        "Brave ___ the firefighters were, they could not enter the collapsing building.|though / as|although|despite|even if",
        "___ you go in this region, you will be welcomed with warm hospitality.|Wherever|Whatever|Whoever|However",
        "___ as I would love to join you for dinner, I have a deadline tomorrow.|Much|More|However|Even",
        "However ___ the problem seems, there is always a logical solution.|complex|complexly|the complex|is complex",
        "No matter ___ you ask, nobody knows the origin of that ancient stone.|whom / who|what|how|which",
        "Hard ___ she tried, she couldn't remember the name of the tune.|as / though|although|despite|however",
        "___ the weather is like tomorrow, the marathon will go ahead.|Whatever|However|Whichever|Whenever",
        "Clever ___ he is, he sometimes makes very simple mistakes.|though / as|although|despite|however",
        "You can call me ___ you need help, day or night.|whenever|whatever|whoever|however",
        "No matter ___ many times I read this poem, I always find something new.|how|what|which|so",
        "___ much it costs, we must repair the roof before winter arrives.|However|Whatever|Whichever|Although"
      ]
    },
    {
      num: 73, level: "C1",
      title: "რთული და პროპორციული შედარებითი კონსტრუქციები (The more..., the more..., Like vs. As)",
      subtitle: "Double Comparatives, Not so much A as B, Such as vs. Like vs. As",
      rule: "1) პროპორციული შედარება („რაც უფრო..., მით უფრო...“) იწარმოება ორივე ნაწილში განსაზღვრული არტიკლით the + შედარებითი ხარისხი: „The + comparative..., the + comparative...“ (The higher you climb, the colder it gets). 2) „not so much A as B“ ნიშნავს „არა იმდენად A, რამდენადაც B“. 3) „Like“ (წინდებული) ნიშნავს „მსგავსად“ (He speaks like an expert — სინამდვილეში არ არის ექსპერტი, უბრალოდ ჰგავს), ხოლო „As“ ნიშნავს რეალურ პროფესიას/როლს (He works as a doctor — ნამდვილად ექიმია) ან მოსდევს წინადადება (Do as I say). 4) შედარებითი ხარისხის C1 გამაძლიერებლები: far / considerably / significantly / slightly / marginally + comparative; ხოლო აღმატებითის: by far / easily + superlative.",
      formulas: [
        ["+ პროპორცია (The..., the...)", "The + comparative (+ Clause), the + comparative (+ Clause)", "The sooner we leave, the earlier we will arrive."],
        ["- Not so much A as B", "not so much + A + as + B (არა იმდენად A, რამდენადაც B)", "He is not so much angry as disappointed."],
        ["? Like vs. As", "like + Noun (მსგავსება) | as + Noun (რეალური ფუნქცია/პროფესია) | as + Clause", "She worked as a guide. / This house is like a palace."],
        ["💡 C1 გამაძლიერებლები", "far / considerably / slightly + bigger | by far + the biggest", "This is by far the most accurate map."]
      ],
      examples: [
        ["The more you practice speaking, the more confident you will become.", "რაც უფრო მეტს ივარჯიშებ საუბარში, მით უფრო თავდაჯერებული გახდები."],
        ["The higher we climbed up the mountain, the thinner the air became.", "რაც უფრო მაღლა ავდიოდით მთაზე, მით უფრო გაიშვიათდა ჰაერი."],
        ["The success of the team was due not so much to luck as to hard work.", "გუნდის წარმატება გამოწვეული იყო არა იმდენად იღბლით, რამდენადაც დაუღალავი შრომით."],
        ["My uncle worked as a ship captain for thirty years.", "ბიძაჩემი ოცდაათი წლის განმავლობაში გემის კაპიტნად მუშაობდა (რეალური პროფესია -> as)."],
        ["After the renovation, our small apartment looks like a luxury hotel.", "რემონტის შემდეგ ჩვენი პატარა ბინა მდიდრულ სასტუმროს ჰგავს (შედარება -> like)."],
        ["Please leave the books on the shelf just as you found them.", "გთხოვთ დატოვოთ წიგნები თაროზე ზუსტად ისე, როგორც დაგხვდათ (as + წინადადება)."],
        ["This winter is considerably colder than the previous one.", "ეს ზამთარი საგრძნობლად უფრო ცივია, ვიდრე წინა."],
        ["That was by far the most challenging exam of the entire semester.", "ეს იყო უდავოდ (ყველაზე მეტად) ურთულესი გამოცდა მთელ სემესტრში."]
      ],
      mistakes: [
        ["✗ More you read, more you learn.", "✓ The more you read, the more you learn. (არტიკლი The აუცილებელია ორივე ნაწილში!)"],
        ["✗ During the summer, she worked like a waitress.", "✓ During the summer, she worked as a waitress. (პროფესიასთან იწერება as!)"],
        ["✗ He is not so much tired than bored.", "✓ He is not so much tired as bored. (not so much ... AS ...)"]
      ],
      drills: [
        "___ sooner we set off, the earlier we will reach the coast.|The|As|More|Most",
        "The longer the soup simmers, ___ richer the flavour becomes.|the|as|more|most",
        "During his student years, he worked ___ a tour guide in Edinburgh.|as|like|for|by",
        "Don't act ___ a child! Be reasonable.|like|as|such as|so as",
        "I am not so much worried about the cost ___ about the quality.|as|than|like|that",
        "This telescope is ___ far the most powerful one in the observatory.|by|in|for|with",
        "The new train is ___ faster than the old diesel locomotive.|considerably / far|very|by far|more",
        "Please do exactly ___ the instructor tells you.|as|like|so|such",
        "We used an old wooden box ___ a table during the camping trip. (ფუნქციით!)|as|like|for|by",
        "The fabric feels soft, ___ silk.|like|as|as if|such",
        "The more books you read, ___ broader your vocabulary becomes.|the|more|most|as",
        "Citrus fruits, ___ oranges and lemons, are rich in vitamin C. (მაგალითების ჩამოთვლა)|such as / like|as|so as|as if",
        "___ was expected, the tickets for the final sold out in an hour.|As|Like|What|So",
        "His reaction was not so much anger ___ sheer surprise.|as|than|like|but",
        "Today's test was only ___ more difficult than last week's.|slightly / marginally|very|by far|too",
        "___ fewer mistakes you make, the higher your score will be.|The|As|More|Most",
        "She swims ___ a fish in the water.|like|as|such as|as if",
        "He was regarded ___ the finest architect of his century.|as|like|for|to be",
        "How do you like your coffee? — ___ strong as possible, please!|As|The|So|More",
        "The more complicated the puzzle, ___ more enjoyable it is to solve.|the|as|more|most"
      ]
    },
    {
      num: 74, level: "C1",
      title: "აკადემიური კავშირები და დისკურსის მარკერები (Discourse Markers & Linkers)",
      subtitle: "Notwithstanding, Albeit, Whereas, Consequently, Hence, Yet, Whereby",
      rule: "C1 აკადემიურ და ოფიციალურ წერაში მარტივი კავშირების (but, so, because) ნაცვლად ვიყენებთ ზუსტ დისკურსულ მარკერებს: 1) დათმობა: „Notwithstanding + არსებითი სახელი“ (= Despite: მიუხედავად), „Albeit + ზედსართავი/ზმნიზედა/ფრაზა“ (თუმცა კი — მის შემდეგ სრული ზმნური წინადადება არ იწერება: He agreed, albeit reluctantly!); 2) დაპირისპირება: „Whereas / While“ (მაშინ როდესაც — აპირისპირებს ორ ფაქტს), „Conversely“ (საპირისპიროდ); 3) შედეგი: „Consequently / Therefore / Hence / Thus“ (შესაბამისად / აქედან გამომდინარე); 4) მექანიზმი: „Whereby“ (რომლის საშუალებითაც / რომლის მიხედვითაც).",
      formulas: [
        ["+ Albeit + Adj/Adv/Phrase", "Clause + , albeit + ზედსართავი/ზმნიზედა/წინდებულიანი ფრაზა (ზმნის გარეშე!)", "The expedition succeeded, albeit at a high cost."],
        ["- Notwithstanding + Noun", "Notwithstanding + Noun Phrase (= Despite) | ან წინადადების ბოლოს", "Notwithstanding the bad weather, the ship sailed."],
        ["? Whereas / Conversely", "Clause 1, whereas Clause 2 (კონტრასტი) | Sentence 1. Conversely, Sentence 2.", "Northern regions are cold, whereas the south is warm."],
        ["💡 Whereby & Hence", "a system whereby... (= by which) | Hence / Consequently, + შედეგი", "They introduced a plan whereby waste is recycled."]
      ],
      examples: [
        ["The new bridge was completed on schedule, albeit slightly over budget.", "ახალი ხიდი გრაფიკის მიხედვით დასრულდა, თუმცა კი ბიუჯეტის მცირე გადაჭარბებით."],
        ["Notwithstanding the steep terrain, the hikers reached the village before dark.", "ციცაბო რელიეფის მიუხედავად, მოლაშქრეებმა სოფელს დაღამებამდე მიაღწიეს."],
        ["Some birds migrate south in autumn, whereas others remain here all winter.", "ზოგიერთი ფრინველი შემოდგომაზე სამხრეთში მიფრინავს, მაშინ როცა სხვები მთელ ზამთარს აქ რჩებიან."],
        ["The region received very little rainfall this spring; consequently, water levels are low.", "რეგიონში ამ გაზაფხულს ძალიან ცოტა ნალექი მოვიდა; შესაბამისად, წყლის დონე დაბალია."],
        ["The school introduced a programme whereby older students mentor younger ones.", "სკოლამ დანერგა პროგრამა, რომლის მეშვეობითაც უფროსკლასელები უმცროსებს ეხმარებიან."],
        ["The road was blocked by a landslide; hence, we had to take a detour.", "გზა მეწყერით იყო ჩახერგილი; აქედან გამომდინარე, შემოვლითი გზით წასვლა მოგვიწია."],
        ["Furthermore, the study reveals a link between sleep quality and memory.", "გარდა ამისა (ამასთანავე), კვლევა ავლენს კავშირს ძილის ხარისხსა და მეხსიერებას შორის."],
        ["The experiment had several flaws; nevertheless, it provided useful insights.", "ექსპერიმენტს რამდენიმე ხარვეზი ჰქონდა; მიუხედავად ამისა, მან სასარგებლო ცოდნა მოგვცა."]
      ],
      mistakes: [
        ["✗ He accepted the offer, albeit he was hesitant.", "✓ He accepted the offer, albeit with some hesitation / albeit reluctantly. (albeit-ს სრული ზმნიანი წინადადება არ მოსდევს!)"],
        ["✗ Notwithstanding of the difficulties, they succeeded.", "✓ Notwithstanding the difficulties, they succeeded. (Notwithstanding-ს წინდებული of არ სჭირდება)"],
        ["✗ It rained heavily, consequently the match was cancelled (მძიმით გადაბმა — Comma Splice).", "✓ It rained heavily; consequently, the match was cancelled. (consequently მოითხოვს წერტილ-მძიმეს ან ახალ წინადადებას)"]
      ],
      drills: [
        "He agreed to help us with the move, ___ rather reluctantly.|albeit|although|despite|whereas",
        "___ the heavy snowstorm, the mountain rescue team continued the search.|Notwithstanding / Despite|Although|Whereas|Consequently",
        "The first chapter of the novel is slow, ___ the rest of the book is gripping.|whereas / while|consequently|hence|whereby",
        "They signed an agreement ___ both towns share the cost of the new bridge.|whereby|whereas|albeit|hence",
        "The museum had no heating; ___, the galleries were freezing cold in winter.|consequently / therefore|whereas|albeit|notwithstanding",
        "She made steady progress, ___ at a slower pace than she had hoped.|albeit|although|despite|conversely",
        "The northern slopes are covered in pine forests. ___, the southern side is dry and rocky.|Conversely|Whereby|Albeit|Since",
        "___ the lack of modern equipment, the early astronomers made accurate maps.|Notwithstanding|Although|Even though|Whereas",
        "The witness's story contained several contradictions; ___, the jury doubted him.|hence / thus|whereas|albeit|whereby",
        "აირჩიეთ სწორი გაგრძელება კავშირისთვის „albeit“: „The software is effective, albeit ___“|difficult to install|it is difficult to install|difficultly installation|despite difficult",
        "The universidad created a scholarship fund ___ talented students study for free.|whereby|whereas|albeit|consequently",
        "The ferry was cancelled due to high winds; ___, we had to stay on the island overnight.|therefore / consequently|whereas|albeit|notwithstanding",
        "City life offers many cultural events, ___ country life provides peace and quiet.|whereas / while|hence|thus|whereby",
        "The climb was exhausting; ___, the view from the peak made it worthwhile.|nevertheless / nonetheless|consequently|therefore|hence",
        "___ the initial scepticism, the new library design proved very popular.|Notwithstanding|Although|Whereas|Albeit",
        "The village has no railway station, ___ its isolation from the capital.|hence|whereas|whereby|albeit",
        "The treaty brought peace to the region, ___ only temporarily.|albeit|although|despite|whereas",
        "First, the timber is dried for months; ___, it is carved by master craftsmen.|subsequently / thereafter|whereas|albeit|notwithstanding",
        "He is fluent in four languages; ___, he has a degree in international law.|furthermore / moreover|conversely|albeit|whereby",
        "The two brothers look identical, ___ their personalities are completely different.|whereas / yet|therefore|hence|whereby"
      ]
    },
    {
      num: 75, level: "C1",
      title: "ელიფსისი და ჩანაცვლება (Ellipsis & Substitution: Do so, So/Not, Reduced Infinitives)",
      subtitle: "Avoiding Repetition with Do so, I hope so / I'm afraid not, Omitted Words",
      rule: "რათა თავიდან ავიცილოთ ერთი და იმავე სიტყვების ტავტოლოგიური გამეორება, C1 დონეზე ვიყენებთ ჩანაცვლებას (Substitution) და გამოტოვებას (Ellipsis): 1) „do so / did so / doing so“ ანაცვლებს მთლიან ზმნურ ფრაზას (He promised to repair the roof, and he did so yesterday); 2) აზრის, ვარაუდისა და იმედის ზმნებთან მთლიან დამოკიდებულ წინადადებას ანაცვლებს „so“ (დადებითში: I think so, I hope so, I presume so) და „not“ (უარყოფითში: I hope not, I'm afraid not, I suppose not / I don't suppose so). დაიმახსოვრეთ: hope-თან და afraid-თან უარყოფა კეთდება მხოლოდ ფორმით I hope not / I'm afraid not! 3) Reduced Infinitive: წინადადების ბოლოს ვიტოვებთ მხოლოდ ნაწილაკს „to“ მთავარი ზმნის გარეშე (Are you going to the party? — I'd love to!).",
      formulas: [
        ["+ Do so / Did so / Doing so", "ანაცვლებს ზმნას + მის დამატებებს (Verb Phrase)", "She asked me to wait outside, and I did so."],
        ["- So vs. Not (Clause Substitution)", "I hope so / I'm afraid so | I hope not / I'm afraid not / I presume not", "\"Will it rain?\" — \"I hope not!\""],
        ["? Reduced Infinitive (მხოლოდ to)", "want to / would love to / used to / ought to / be able to (ზმნა აღარ მეორდება!)", "\"Did you visit the castle?\" — \"No, I didn't have time to.\""],
        ["💡 One / Ones (არსებითის ჩანაცვლება)", "the blue one (მხოლობითი) | the wooden ones (მრავლობითი)", "My umbrella broke, so I bought a new one."]
      ],
      examples: [
        ["The guide advised us to stay on the path, and we did so.", "გიდმა გვირჩია ბილიკზე დავრჩენილიყავით და ჩვენც ასე მოვიქეცით (did so = stayed on the path)."],
        ["Learning a language takes time, but doing so opens many doors.", "ენის სწავლას დრო სჭირდება, მაგრამ ამის გაკეთება (doing so) ბევრ კარს ხსნის."],
        ["\"Is the museum open on Sundays?\" — \"I believe so, but let's check.\"", "„ღიაა მუზეუმი კვირაობით?“ — „მგონი კი (I believe so), მაგრამ მოდი გადავამოწმოთ.“"],
        ["\"Are we going to miss our flight?\" — \"I certainly hope not!\"", "„რეისზე დავაგვიანებთ?“ — „დიდი იმედი მაქვს, რომ არა (I hope not)!“"],
        ["\"Have they found the missing dog?\" — \"I'm afraid not.\"", "„იპოვეს დაკარგული ძაღლი?“ — „სამწუხაროდ, არა (I'm afraid not).“"],
        ["\"Would you like to join us for a walk?\" — \"I'd love to, but I'm busy.\"", "„გსურს შემოგვიერთდე სასეირნოდ?“ — „დიდი სიამოვნებით (I'd love to = to join you), მაგრამ დაკავებული ვარ.“"],
        ["He doesn't play the piano now, though he used to when he was younger.", "ის ახლა აღარ უკრავს ფორტეპიანოზე, თუმცა უკრავდა ხოლმე (used to), როცა ახალგაზრდა იყო."],
        ["If you haven't read this book yet, you really ought to.", "თუ ეს წიგნი ჯერ არ წაგიკითხავს, ნამდვილად ღირს რომ წაიკითხო (ought to)."]
      ],
      mistakes: [
        ["✗ \"Will the test be difficult?\" — \"I don't hope so.\"", "✓ \"Will the test be difficult?\" — \"I hope not.\" (hope-თან don't hope so არ იხმარება!)"],
        ["✗ \"Would you like to come?\" — \"Yes, I'd love!\"", "✓ \"Would you like to come?\" — \"Yes, I'd love to!\" (ნაწილაკი to აუცილებელია)"],
        ["✗ I need some fresh milk, so I'll buy a one.", "✓ I need some fresh milk, so I'll buy some. (უთვლად სახელთან one არ იხმარება!)"]
      ],
      drills: [
        "\"Will the weather be stormy tomorrow?\" — \"I hope ___! We have a picnic planned.\"|not|so not|don't|no",
        "The doctor told him to give up smoking, and he finally ___ last year.|did so|did it so|made so|so did",
        "\"Are there any tickets left for tonight's show?\" — \"I'm afraid ___.\"|not|no|don't|isn't",
        "\"Why didn't you apologize to her?\" — \"I wanted ___, but she left early.\"|to|to do|it|so",
        "Climbing the cliff alone is dangerous, and anyone ___ risks their life.|doing so|do so|done so|to do it",
        "\"Is Sarah coming to the lecture?\" — \"I suppose ___.\"|so|it|this|that",
        "Which shoes do you prefer: the brown ___ or the black ones?|ones|one|those|them",
        "\"Did you finish painting the fence?\" — \"No, I didn't have time ___.\"|to|to do|for|it",
        "აირჩიეთ სწორი უარყოფითი პასუხი: „Is the library closed today?“|I hope not.|I don't hope so.|I hope no.|I am not hoping so.",
        "He promised to send us the photographs, but he hasn't ___ yet.|done so|did so|do so|doing so",
        "\"Can we park here without a permit?\" — \"I presume ___.\"|not|no|don't|never",
        "I don't go swimming as often as I used ___.|to|to go to|it|so",
        "If you haven't visited the national museum yet, you really ought ___.|to|to be|it|so",
        "The committee asked him to resign, and he agreed to ___.|do so|doing so|done so|so do",
        "\"Will the repair cost a lot of money?\" — \"I'm afraid ___.\"|so|it|this|yes",
        "She wanted to buy a wooden table, but the shop only had glass ___.|ones|one|tables ones|some",
        "You don't have to stay until the end of the meeting if you don't want ___.|to|to do|it|so",
        "We need some brown bread, and if they don't have any, get white ___. (bread = უთვლადი!)|— (უბრალოდ white)|one|ones|a one",
        "\"Did the parcel arrive this morning?\" — \"I don't think ___.\"|so|not|it|that",
        "Many people want to learn a musical instrument, but few have the patience to ___.|do so|doing so|done so|did so"
      ]
    }
  ];

  // გავაერთიანოთ C1 და (მომავალი) C2 მასივები App.GrammarDataC-ში
  App.GrammarDataC = App.GrammarDataC1.concat(App.GrammarDataC2 || []);
})(window);
// ============================================================================
// C2 LEVEL — TOPICS 76 TO 90 (20 DRILLS EACH = 300 DRILLS)
// ============================================================================
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.GrammarDataC2 = [
    {
      num: 76, level: "C2",
      title: "კავშირებითი კილო და მყარი ფორმულები (The Mandative & Formulaic Subjunctive)",
      subtitle: "It is imperative that he be..., Lest, Be that as it may, Suffice it to say",
      rule: "1) Mandative Subjunctive გამოიყენება მაღალ ფორმალურ და ოფიციალურ სტილში მოთხოვნის, რეკომენდაციისა და აუცილებლობის გამომხატველი სიტყვების შემდეგ (insist, demand, recommend, propose, suggest, imperative, vital, essential, crucial, mandatory): that-წინადადებაში ზმნა დგება საწყის ფორმაში (bare infinitive: be, go, submit) ყველა პირსა და დროში! უარყოფითში: not + V1 (that he not leave). 2) კავშირი „Lest“ (რათა არ / იმის შიშით, რომ არ) ასევე ითხოვს Subjunctive-ს (lest he forget / lest it be lost). 3) ფორმულური გამოთქმები: Be that as it may (როგორც არ უნდა იყოს), Come what may (რაც არ უნდა მოხდეს), Suffice it to say (საკმარისია ითქვას).",
      formulas: [
        ["+ დადებითი Subjunctive", "insist/recommend/imperative/vital + that + Subject + V1 (be / attend)", "It is vital that every member be informed."],
        ["- უარყოფითი და ვნებითი", "...that + Subject + not + V1 | ...that + Subject + be + V3", "She insisted that her name not be mentioned."],
        ["? Lest (რათა არ...)", "Clause + lest + Subject + V1 (ან should + V1)", "He wrote down the date lest he forget it."],
        ["💡 ფორმულური Subjunctive", "Be that as it may | Come what may | Suffice it to say | Far be it from me to...", "Suffice it to say, the experiment succeeded."]
      ],
      examples: [
        ["It is imperative that the medicine be stored in a cool, dark place.", "სასიცოცხლოდ აუცილებელია, რომ წამალი გრილ და ბნელ ადგილას ინახებოდეს (be stored)."],
        ["The judge ordered that the witness not leave the city until the trial ended.", "მოსამართლემ ბრძანა, რომ მოწმეს სასამართლოს დასრულებამდე ქალაქი არ დაეტოვებინა (not leave)."],
        ["The committee recommended that the museum remain free for all students.", "კომიტეტმა რეკომენდაცია გასცა, რომ მუზეუმი ყველა სტუდენტისთვის უფასო დარჩეს (remain)."],
        ["They spoke in whispers lest anyone overhear their conversation.", "ისინი ჩურჩულით საუბრობდნენ, რათა მათი საუბარი ვინმეს არ გაეგონა (lest + overhear)."],
        ["Be that as it may, we cannot change our decision at this late stage.", "როგორც არ უნდა იყოს (Be that as it may), ამ გვიან ეტაპზე გადაწყვეტილებას ვერ შევცვლით."],
        ["Suffice it to say, the expedition encountered numerous unexpected obstacles.", "საკმარისია ითქვას (Suffice it to say), რომ ექსპედიციას მრავალი მოულოდნელი დაბრკოლება შეხვდა."],
        ["We will defend the truth, come what may.", "ჩვენ დავიცავთ სიმართლეს, რაც არ უნდა მოხდეს (come what may)."],
        ["Far be it from me to criticize your work, but this figure seems inaccurate.", "შორს ვარ იმ აზრისგან, რომ შენი ნაშრომი გავაკრიტიკო (Far be it from me to...), მაგრამ ეს ციფრი უზუსტოდ ჩანს."]
      ],
      mistakes: [
        ["✗ The director insisted that the letter is sent immediately (არაფორმალური).", "✓ The director insisted that the letter be sent immediately. (C2 ფორმალური Subjunctive: be sent)"],
        ["✗ It is essential that he doesn't touch the equipment.", "✓ It is essential that he not touch the equipment. (უარყოფითი Subjunctive იწარმოება do/does-ის გარეშე: not touch)"],
        ["✗ Suffices it to say that we won.", "✓ Suffice it to say that we won. (მყარი ფორმულაა Suffice it to say)"]
      ],
      drills: [
        "It is imperative that every passenger ___ a valid passport before boarding.|have|has|had|having",
        "The doctor recommended that the patient ___ kept under observation overnight.|be|is|was|been",
        "She requested that her phone number ___ disclosed to the press.|not be|isn't|don't be|not to be",
        "He tied a string around his finger ___ he forget to post the letter.|lest|unless|so that|in case of",
        "___ that as it may, the rules apply equally to everyone.|Be|Is|Were|Being",
        "___ it to say, the negotiations were far more complex than anticipated.|Suffice|Suffices|Sufficed|Sufficing",
        "The regulations stipulate that the laboratory door ___ locked at all times.|be|is|was|to be",
        "They walked carefully along the icy ridge lest someone ___ and fall.|slip|slips|slipped|slipping",
        "It is crucial that the witness ___ influence the rest of the jury.|not|doesn't|don't|isn't",
        "___ be it from me to interrupt, but the last train leaves in ten minutes.|Far|Long|High|Wide",
        "The architect proposed that the old stone facade ___ preserved.|be|is|were|been",
        "We are determined to complete the voyage, ___ what may.|come|comes|came|coming",
        "The treaty demands that each nation ___ its carbon emissions.|reduce|reduces|reduced|reducing",
        "It is essential that a surgeon ___ steady hands and sharp focus.|have|has|having|to have",
        "She hid the diary in a locked drawer lest her brother ___ it.|find / should find|finds|found|finding",
        "The board insisted that the chairperson ___ immediately.|resign|resigns|resigned|to resign",
        "Heaven ___ that such a disaster should ever happen again!|forbid|forbids|forbade|forbidding",
        "It is mandatory that all safety equipment ___ inspected prior to departure.|be|is|was|are",
        "He demanded that he ___ allowed to speak to the ambassador in person.|be|is|was|were",
        "The king decreed that no citizen ___ taxed without representation.|be|is|was|were"
      ]
    },
    {
      num: 77, level: "C2",
      title: "ადგილისა და მოძრაობის ლიტერატურული ინვერსია (Locative & Directional Inversion)",
      subtitle: "On the hill stood a castle, Out rushed the crowd (Noun vs. Pronoun Rule)",
      rule: "როდესაც მხატვრულ ან მაღალ აღწერით პროზაში წინადადების თავში გადმოგვაქვს ადგილის ან მიმართულების გარემოება (On the hill, At the end of the path, Into the room, Up, Down, Out, Away, Here, There), მთავარი ზმნა (stood, lay, sat, came, went, flew, hung) პირდაპირ გადმოდის არსებითი სახელის (ქვემდებარის) წინ დამხმარე ზმნის (do/did) გარეშე! (მაგ.: On the hill stood an ancient tower). უმნიშვნელოვანესი წესი: თუ ქვემდებარე პირის ნაცვალსახელია (I, you, he, she, it, we, they), ინვერსია არ ხდება! (Here comes the bus vs. Here it comes!).",
      formulas: [
        ["+ ადგილი + ზმნა + არსებითი", "Place Phrase + Verb (stood/lay/sat/hung) + Noun Subject", "In the centre of the square stood a marble fountain."],
        ["- მიმართულება + ზმნა + არსებითი", "Up / Down / Out / In / Away + Verb (went/flew/came) + Noun Subject", "Out rushed the excited children."],
        ["? Here / There + Noun", "Here comes the train! / There goes our last chance!", "მხოლოდ როცა ქვემდებარე არსებითი სახელია!"],
        ["💡 ნაცვალსახელის გამონაკლისი!", "თუ ქვემდებარე ნაცვალსახელია (it/he/she/they), ინვერსია აკრძალულია!", "Here it comes! / Away they flew! / Into the room he walked."]
      ],
      examples: [
        ["At the top of the mountain stood an ancient stone monastery.", "მთის მწვერვალზე იდგა უძველესი ქვის მონასტერი (stood + monastery)."],
        ["Under the old oak tree lay a sleeping hound.", "ძველი მუხის ქვეშ იწვა მძინარე მონადირე ძაღლი (lay + a sleeping hound)."],
        ["Into the harbour sailed a magnificent three-masted ship.", "ნავსადგურში შემოცურდა დიდებული სამანძიანი გემი."],
        ["The cage door opened, and out flew a dozen white doves.", "გალიის კარი გაიღო და გარეთ გამოფრინდა თორმეტი თეთრი მტრედის გუნდი (out flew + doves)."],
        ["The cage door opened, and out they flew. (ნაცვალსახელი they -> ინვერსიის გარეშე!)", "გალიის კარი გაიღო და ისინი გარეთ გამოფრინდნენ."],
        ["Above the fireplace hung a portrait of the founder.", "ბუხრის თავზე ეკიდა დამფუძნებლის პორტრეტი."],
        ["From the distant valley came the sound of church bells.", "შორეული ხეობიდან მოისმა ეკლესიის ზარების ხმა."],
        ["Down came the rain, washing the dusty streets clean.", "წამოვიდა წვიმა და მტვრიანი ქუჩები გადარეცხა."]
      ],
      mistakes: [
        ["✗ On the hill did stand an old castle.", "✓ On the hill stood an old castle. (ადგილის ინვერსიაში did არ გამოიყენება!)"],
        ["✗ Here comes it! (როცა ავტობუსზე ვამბობთ ნაცვალსახელით).", "✓ Here it comes! (ნაცვალსახელთან it ზმნა რჩება ბოლოში)"],
        ["✗ Out rushed they into the street.", "✓ Out they rushed into the street / Out rushed the students."]
      ],
      drills: [
        "At the end of the dark corridor ___ a heavy iron door.|stood|did stand|was stand|standing",
        "Look! Here ___ the postman with our parcels! (ქვემდებარე: the postman)|comes|come|is come|does come",
        "Look! Here ___! (ქვემდებარე: ნაცვალსახელი he)|he comes|comes he|does he come|is he come",
        "The whistle blew, and off ___ the runners.|went|did go|they went to|going",
        "The whistle blew, and off ___! (ნაცვალსახელით: they)|they went|went they|did they go|were they",
        "In the middle of the tranquil lake ___ a tiny wooded island.|lay|laid|did lie|lying",
        "Above the entrance to the library ___ an inscription in Latin.|hung|hanged|did hang|was hang",
        "Down ___ the snow, covering the rooftops in white.|came|did come|coming|was come",
        "Round the corner ___ a horse-drawn carriage.|came|did come|coming|was come",
        "Into the misty forest ___ the two travellers.|walked|did walk|walking|were walk",
        "Into the misty forest ___! (ნაცვალსახელით: they)|they walked|walked they|did they walk|walked them",
        "Next to thetall tower ___ a small chapel built in the twelfth century.|stood|did stand|standing|was stand",
        "Up into the clouds ___ the colourful hot-air balloon.|soared / went|did soar|they soared|soaring",
        "There ___ our last bus! We will have to walk home now.|goes|go|it goes|does go",
        "Beneath the floorboards ___ a chest full of old silver coins.|lay|laid|did lie|was lie",
        "Out of the cave ___ a huge brown bear.|emerged / came|did emerge|it emerged|emerging",
        "On the top shelf ___ several rare leather-bound volumes.|sat / stood|did sit|sitting|was sit",
        "Away ___ the frightened deer into the woods.|ran|did run|they ran|running",
        "Away ___ into the woods! (ნაცვალსახელით: it)|it ran|ran it|did it run|was it run",
        "Behind the mountains ___ the golden autumn sun.|sank / set|did sink|sinking|was sink"
      ]
    },
    {
      num: 78, level: "C2",
      title: "რიტორიკული წინ წამოწევა (Fronting & Thematic Reordering)",
      subtitle: "Such was..., Gone are the days..., Enclosed is..., Object & Complement Fronting",
      rule: "C2 დონეზე რიტორიკული ეფექტისა და ტექსტის ლოგიკური გადაბმისთვის ხშირად წინადადების თავში გადმოგვაქვს შედგენილი შემასმენლის ნაწილი (ზედსართავი ან მიმღეობა) ან დამატება: 1) „Such + be + Noun + that...“ (Such was the force of the wind that... = ისეთი იყო ქარის ძალა, რომ...); 2) მიმღეობის წინ გადმოტანა ზმნა be-სთან: „Gone are the days when...“, „Standing in the doorway was...“, „Enclosed is the report...“, „Attached are the files...“; 3) დამატების წინ გადმოტანა (Object Fronting — ინვერსიის გარეშე!): „This question we have already discussed.“",
      formulas: [
        ["+ Such + be + Noun + that", "Such + is / was + Noun Phrase + that + Clause", "Such was her determination that nothing could stop her."],
        ["- Participle + be + Subject", "Standing / Sitting / Waiting / Hanging + is/was + Subject", "Waiting outside the hall were hundreds of reporters."],
        ["? V3 + be + Subject (ოფიციალური)", "Enclosed / Attached / Included + is/are + Noun Subject", "Enclosed is a copy of the signed contract."],
        ["💡 Gone are the days...", "Gone are the days when... (წავიდა ის დრო, როდესაც...)", "Gone are the days when people wrote letters with quills."]
      ],
      examples: [
        ["Such was the popularity of the play that tickets sold out within an hour.", "ისეთი დიდი იყო სპექტაკლის პოპულარობა, რომ ბილეთები ერთ საათში გაიყიდა."],
        ["Gone are the days when travellers had to rely solely on paper maps.", "წავიდა ის დრო, როდესაც მოგზაურები მხოლოდ ქაღალდის რუკებს ეყრდნობოდნენ."],
        ["Standing at the edge of the cliff was a lone lighthouse.", "კლდის პირას იდგა ეული შუქურა (Standing... was a lone lighthouse)."],
        ["Enclosed are the receipts and certificates you requested.", "თანდართულია (Enclosed are...) თქვენ მიერ მოთხოვნილი ქვითრები და სერტიფიკატები."],
        ["Particularly striking was the contrast between the old and new buildings.", "განსაკუთრებით თვალშისაცემი იყო კონტრასტი ძველსა და ახალ შენობებს შორის."],
        ["Why he refused such a generous offer we will never know. (Object Clause Fronting)", "რატომ თქვა მან უარი ასეთ გულუხვ შეთავაზებაზე, ვერასდროს გავიგებთ."],
        ["Also included in the package is a guided tour of the ancient ruins.", "პაკეტში ასევე შედის გიდის თანხლებით ტური უძველეს ნანგრევებში."],
        ["Faintly visible on the horizon were the snow-capped peaks.", "ჰორიზონტზე მკრთალად ჩანდა თოვლით დაფარული მწვერვალები."]
      ],
      mistakes: [
        ["✗ Such strong was the wind that trees fell.", "✓ So strong was the wind / Such was the strength of the wind that trees fell. (Such-ს მოსდევს არსებითი სახელი, ხოლო So-ს — ზედსართავი!)"],
        ["✗ Enclosed the documents are.", "✓ Enclosed are the documents. (Enclosed-ის შემდეგ ზმნა are დგება ქვემდებარის წინ)"],
        ["✗ What he meant did nobody understand (უბრალო დამატების წინ გადმოტანისას).", "✓ What he meant nobody understood. (დამატების წინ გადმოტანა ინვერსიას არ იწვევს!)"]
      ],
      drills: [
        "___ are the days when a craftsman spent years on a single book.|Gone|Going|Went|Been",
        "___ was the noise in the stadium that we couldn't hear each other.|Such|So|How|What",
        "___ is a copy of the timetable for the autumn semester. (ერთი ასლი)|Enclosed / Attached|Enclosing|Enclose|To enclose",
        "___ in the centre of the room was a magnificent grand piano.|Standing|Stood|Stand|To stand",
        "___ intense was the heat that the asphalt began to soften.|So|Such|What|How",
        "Also ___ in the exhibition are three sketches by Leonardo da Vinci.|included|including|include|to include",
        "___ on the branches of the willow tree were dozens of swallows.|Perched / Sitting|Perch|Sit|To sit",
        "Where the ancient treasure is hidden ___ knows for certain. (ინვერსიის გარეშე!)|nobody|does nobody|is nobody|knows nobody",
        "___ was the complexity of the code that it took years to decipher.|Such|So|Too|Very",
        "Attached to this email ___ the three photographs from the archive.|are|is|be|have",
        "Equally ___ is the question of how the monument was transported.|important / puzzling|importantly|importance|to be important",
        "___ beneath the layers of dust was a medieval fresco.|Hidden / Buried|Hiding|Hide|To hide",
        "___ grateful were the villagers that they organized a grand feast.|So|Such|What|How",
        "Much more ___ was the sudden drop in atmospheric pressure.|concerning / worrying|concern|worriedly|to concern",
        "___ around the campfire were the exhausted mountaineers.|Gathered / Sitting|Gather|Sit|To gather",
        "How she managed to finish the sculpture in a week ___ can explain.|no one|can no one|does no one|is no one",
        "___ was the enthusiasm of the crowd that the band played three encores.|Such|So|How|Too",
        "___ on the stone wall were the names of the early explorers.|Carved / Engraved|Carving|Carve|To carve",
        "___ are the days of steam locomotives on this main line.|Gone|Went|Going|Go",
        "Included in the price of the ticket ___ a complimentary guidebook.|is|are|be|have"
      ]
    },
    {
      num: 79, level: "C2",
      title: "ნომინალიზაცია და აკადემიური სიმჭიდროვე (Nominalization in Academic Style)",
      subtitle: "Transforming Verbal Clauses into Dense Noun Phrases",
      rule: "C2 აკადემიურ, სამეცნიერო და ოფიციალურ პროზაში სასაუბრო ზმნური წინადადებები გარდაიქმნება მჭიდრო არსებით სახელთა კონსტრუქციებად (Nominalization). ზმნები და ზედსართავები იცვლება შესაბამისი არსებითი სახელებით (analyze -> analysis, fail -> failure, proliferate -> proliferation, adaptable -> adaptability), ხოლო ზმნიზედები იცვლება ზედსართავებით (expanded rapidly -> the rapid expansion of...). ეს ტექსტს ხდის ობიექტურს, ლაკონიურსა და ავტორიტეტულს.",
      formulas: [
        ["+ Verb + Adverb -> Adj + Noun", "The city grew rapidly -> The rapid growth of the city...", "Prices rose sharply -> A sharp rise in prices..."],
        ["- Clause -> Noun + of + Noun", "Because the climate changed -> Due to the change in climate...", "When they discovered... -> The discovery of..."],
        ["? Failure / Ability / Attempt + to V1", "They failed to comply -> Their failure to comply with...", "refused to cooperate -> a refusal to cooperate"],
        ["💡 Preposition + Possessive + Gerund", "Before the train arrived -> Prior to the arrival of the train...", "on account of the scarcity of..."]
      ],
      examples: [
        ["The rapid proliferation of digital devices has transformed education.", "ციფრული მოწყობილობების სწრაფმა გავრცელებამ (The rapid proliferation of...) გარდაქმნა განათლება."],
        ["Their failure to inspect the bridge led to structural damage.", "მათ მიერ ხიდის შეუმოწმებლობამ (Their failure to inspect...) გამოიწვია სტრუქტურული დაზიანება."],
        ["A thorough analysis of the soil samples revealed high mineral content.", "ნიადაგის ნიმუშების საფუძვლიანმა ანალიზმა გამოავლინა მინერალების მაღალი შემცველობა."],
        ["The implementation of the new safety rules reduced accidents significantly.", "უსაფრთხოების ახალი წესების დანერგვამ მნიშვნელოვნად შეამცირა შემთხვევები."],
        ["There is a growing recognition of the importance of biodiversity.", "მზარდია ბიომრავალფეროვნების მნიშვნელობის აღიარება."],
        ["The scarcity of clean water remains a critical challenge in arid regions.", "სუფთა წყლის სიმწირე კვლავ კრიტიკულ გამოწვევად რჩება მშრალ რეგიონებში."],
        ["Prior to the construction of the tunnel, the valley was inaccessible in winter.", "გვირაბის აშენებამდე (Prior to the construction of...) ხეობა ზამთარში მიუვალი იყო."],
        ["The longevity of these trees is attributed to the mild coastal climate.", "ამ ხეების დღეგრძელობა მიეწერება რბილ სანაპირო კლიმატს."]
      ],
      mistakes: [
        ["✗ The rapidly expansion of the town caused traffic issues.", "✓ The rapid expansion of the town caused traffic issues. (არსებითი სახელის expansion წინ იწერება ზედსართავი rapid, და არა ზმნიზედა rapidly!)"],
        ["✗ A sharp rise of temperatures was recorded.", "✓ A sharp rise in temperatures was recorded. (rise/increase/decrease IN something)"],
        ["✗ Their refusal cooperating delayed the project.", "✓ Their refusal to cooperate delayed the project. (refusal / failure / decision TO + V1)"]
      ],
      drills: [
        "გარდაქმენით ნომინალიზაციით: „The population grew dramatically“ -> „The ___ of the population“|dramatic growth|dramatically growth|grow dramatically|dramatic growing",
        "The ___ of the ancient manuscript took scholars nearly a decade.|decipherment / translation|deciphering rapidly|to decipher|deciphered",
        "A sudden ___ in demand led to a shortage of raw materials.|surge / increase|surgingly|to surge|surged",
        "Their ___ to reach a compromise resulted in a lengthy dispute.|failure / inability|failing of|fail|failed",
        "The ___ of the new telescope enabled astronomers to see distant galaxies.|installation / invention|installing rapidly|install|installed",
        "We noticed a gradual ___ in the quality of the service.|decline / improvement|decliningly|to decline|declined",
        "Prior to the ___ of the printing press, books were copied by hand.|invention|inventing of|invent|invented",
        "The ___ of the witness's testimony convinced the jury.|consistency / accuracy|consistently|consistent|consist",
        "Any ___ from the safety protocol must be reported immediately.|deviation|deviatingly|deviate|deviated",
        "The ___ of the forest ecosystem depends on protecting these predators.|preservation / survival|preservingly|preserve|preserved",
        "His ___ to accept responsibility disappointed the entire team.|refusal / reluctance|refusing of|refuse|refused",
        "There has been a significant ___ in public awareness of recycling.|shift / increase|shiftingly|to shift|shifted",
        "The ___ of solar energy has become much more affordable in recent years.|utilization / generation|utilizingly|utilize|utilized",
        "A lack of ___ between the departments caused the delay.|coordination / communication|coordinatingly|coordinate|coordinated",
        "The ___ of the treaty marked the beginning of a peaceful era.|ratification / signing|ratifyingly|ratify|ratified",
        "Scientists are studying the ___ of polar ice caps.|depletion / melting|depletingly|deplete|depleted",
        "The ___ of the old theatre required substantial funding.|restoration / renovation|restoringly|restore|restored",
        "Her ___ to detail made the research paper exemplary.|attention|attentively|attentive|attend",
        "The ___ of strict quality controls eliminated manufacturing defects.|introduction / enforcement|introducingly|introduce|introduced",
        "An unexpected ___ in the supply chain delayed the delivery.|disruption|disruptively|disrupt|disrupted"
      ]
    },
    {
      num: 80, level: "C2",
      title: "რთული ჰიპოთეტური სტრუქტურები (It's time, As if / As though, Would sooner)",
      subtitle: "Unreal Past after It's (high) time, As if / As though, Suppose & Imagine",
      rule: "ინგლისურში წარსული დროის ფორმა (Past Simple / Past Perfect) ხშირად გამოიყენება არა წარსულის, არამედ არარეალური/ჰიპოთეტური აწმყოს ან წარსულის გამოსახატავად (Unreal Past): 1) „It's time / It's high time / It's about time + Subject + Past Simple“ ნიშნავს, რომ რაღაცის გაკეთების დრო უკვე მოვიდა ან გადაცდა კიდეც (It's high time we left = დროა უკვე წავიდეთ!). 2) „As if / As though“ (თითქოს): თუ შედარება არარეალურია აწმყოში, მოსდევს Past Simple / were (He talks as if he knew everything — სინამდვილეში არ იცის!); ხოლო თუ არარეალური მოქმედება წინ უსწრებს მთავარ ზმნას (წარსულში), მოსდევს Past Perfect (She looked as if she had seen a ghost).",
      formulas: [
        ["+ It's (high/about) time", "It's (high) time + Subject + Past Simple (და არა Present Simple!)", "It's high time you repaired that broken lock."],
        ["- It's time + to V1", "თუ ქვემდებარე არ მოსდევს: It's time (for us) to leave.", "It is time to start the lesson."],
        ["? As if / As though (აწმყო)", "Subject + Verb + as if / as though + Past Simple (were / knew / owned)", "He acts as though he owned the whole hotel."],
        ["💡 As if / As though (წარსული)", "Subject + Verb + as if / as though + Past Perfect (had + V3)", "He sounded as if he had run all the way."]
      ],
      examples: [
        ["It is midnight; it's high time the guests went home.", "შუაღამეა; უკვე დროა სტუმრები სახლში წავიდნენ (went — მნიშვნელობით აწმყოა!)."],
        ["It's about time we bought a new washing machine; this one keeps leaking.", "უკვე დროა ახალი სარეცხი მანქანა ვიყიდოთ; ამას სულ წყალი გასდის."],
        ["She talks about Rome as if she lived there, though she has never visited Italy.", "ის რომზე ისე საუბრობს, თითქოს იქ ცხოვრობდეს (არარეალური აწმყო -> lived)."],
        ["He treats that stray dog as though it were his own pet.", "ის იმ უპატრონო ძაღლს ისე ექცევა, თითქოს მისი საკუთარი იყოს (as though it were)."],
        ["You look pale — as if you had seen a ghost!", "ფერმკრთალი ჩანხარ — თითქოს მოჩვენება გენახოს (წინმსწრები წარსული -> had seen)!"],
        ["The lawn was completely dry, as though it hadn't rained for months.", "გაზონი სრულიად მშრალი იყო, თითქოს თვეების განმავლობაში არ ეწვიმოს (hadn't rained)."],
        ["Suppose we missed the ferry — where would we spend the night?", "დავუშვათ ბორანზე დაგვაგვიანდა — სად გავათევდით ღამეს?"],
        ["Imagine you had lived in the eighteenth century; life would have been very different.", "წარმოიდგინე, მეთვრამეტე საუკუნეში რომ გეცხოვრა (წარსული -> had lived)."]
      ],
      mistakes: [
        ["✗ It's high time you go to bed.", "✓ It's high time you went to bed. (It's high time + ქვემდებარე ყოველთვის ითხოვს Past Simple-ს!)"],
        ["✗ He orders everyone around as if he is the king.", "✓ He orders everyone around as if he were the king. (არარეალურ შედარებაში იწერება were)"],
        ["✗ It's high time to went home.", "✓ It's high time we went home / It's time to go home."]
      ],
      drills: [
        "It's ten o'clock! It's high time the children ___ asleep.|were|are|will be|be",
        "He spends money carelessly, as if he ___ a billionaire.|were|is|will be|has been",
        "She looked exhausted this morning, as though she ___ slept a wink all night.|hadn't|didn't|hasn't|doesn't",
        "It's about time you ___ taking your studies more seriously.|started|start|will start|have started",
        "The old house looked deserted, as if nobody ___ lived there for decades.|had|has|did|was",
        "It is time ___ the boarding gate. (ქვემდებარის გარეშე!)|to open|opened|we open|opening",
        "Why is he staring at me as though he ___ recognize me?|didn't|doesn't|hasn't|won't",
        "Suppose you ___ found a bag of gold in the forest yesterday — what would you have done?|had|have|did|were",
        "It's high time the city council ___ the potholes on this road.|repaired|repairs|will repair|repair",
        "She speaks about the historical battle as if she ___ witnessed it herself!|had|has|was|did",
        "Don't talk to me as if I ___ a five-year-old child!|were|am|will be|have been",
        "The sky grew pitch-black at noon, as though night ___ fallen early.|had|has|was|did",
        "It's about time we ___ the truth about what happened.|told|tell|will tell|have told",
        "He walked into the room smiling, as if nothing unusual ___.|had happened|happened|has happened|happens",
        "Imagine we ___ a telescope powerful enough to see the surface of that planet.|had|have|will have|are having",
        "It's high time I ___ a new pair of winter boots.|bought|buy|will buy|have bought",
        "The actor bowed to the empty hall as though it ___ packed with spectators.|were|is|has been|will be",
        "You are out of breath, as if you ___ running a marathon!|had been|have been|are|were to",
        "Suppose the internet ___ working for a week — how would offices operate?|stopped|stops|will stop|has stopped",
        "It's high time you ___ how to cook a proper meal.|learned / learnt|learn|will learn|have learned"
      ]
    },
    {
      num: 81, level: "C2",
      title: "ფორმალური და ემოციური „Should“ დამოკიდებულ წინადადებებში (Putative Should)",
      subtitle: "It is odd/natural/shocking that she should say so, In case + should",
      rule: "C2 დონეზე მოდალური ზმნა „should“ ხშირად გამოიყენება არა რჩევისთვის („უნდა“), არამედ ემოციური შეფასების, გაკვირვების ან დაბალი ალბათობის გამოსახატავად (Putative / Emotional Should): 1) ზედსართავების შემდეგ, რომლებიც გამოხატავს გაკვირვებას, ემოციას ან ბუნებრიობას (strange, odd, funny, natural, typical, surprising, shocking, astonishing, sad) -> „It is strange that he should be late“ (უცნაურია, რომ მან დააგვიანა — ფაქტი უკვე მოხდა, ჩვენ კი ემოციურად ვაფასებთ!); 2) კითხვით სიტყვებთან გაღიზიანების ან გაკვირვებისას: „How should I know?“ (მე საიდან უნდა ვიცოდე?), „Why should anyone object?“; 3) „in case / lest + Subject + should + V1“ (კიდევ უფრო მცირე ალბათობა).",
      formulas: [
        ["+ ემოციური შეფასება (It is... that)", "It is strange/odd/natural/surprising/typical + that + Subject + SHOULD + V1", "It is odd that she should leave without saying goodbye."],
        ["- რიტორიკული კითხვა (Why/How should)", "How should I know? | Why should he care? | Who should walk in but...!", "I was sitting in the café when who should walk in but Tom!"],
        ["? In case + should + V1", "Take a map in case we should lose our way. (უფრო ფორმალური და მცირე ალბათობის)", "Write it down lest you should forget."],
        ["💡 So that / In order that + should", "წარსულში მიზნის გადმოსაცემად: He hid the letter so that no one should see it.", "They spoke softly in order that nobody should hear."]
      ],
      examples: [
        ["It is astonishing that such a talented artist should remain unknown.", "გასაოცარია, რომ ასეთი ნიჭიერი ხელოვანი უცნობი რჩება (that... should remain)."],
        ["It is only natural that parents should worry about their children's future.", "სრულიად ბუნებრივია, რომ მშობლები ღელავენ შვილების მომავალზე."],
        ["Why should I apologize when I have done nothing wrong?", "რატომ უნდა მოვიხადო ბოდიში, როცა ცუდი არაფერი გამიკეთებია?"],
        ["\"Where did David put the keys?\" — \"How should I know? Ask him!\"", "„სად დადო დევიდმა გასაღები?“ — „მე საიდან უნდა ვიცოდე? მას ჰკითხე!“"],
        ["I was waiting at the station when who should I see but my old school teacher!", "სადგურზე ვიცდიდი, როდესაც — ვინ გგონიათ დავინახე! — ჩემი ძველი სკოლის მასწავლებელი!"],
        ["Keep a spare battery in your backpack in case the flashlight should fail.", "შეინახეთ სათადარიგო ელემენტი ზურგჩანთაში იმ შემთხვევისთვის, თუ ფانარი გამოირთვება."],
        ["It seems unfair that one person should do all the hard work.", "უსამართლოდ ჩანს, რომ მთელი მძიმე სამუშაო ერთმა ადამიანმა შეასრულოს."],
        ["What a coincidence that we should book seats on the exact same flight!", "რა დამთხვევაა, რომ ზუსტად ერთსა და იმავე რეისზე დავჯავშნეთ ბილეთები!"]
      ],
      mistakes: [
        ["✗ It is strange that he would be so quiet today (როცა ფაქტი უკვე სახეზეა).", "✓ It is strange that he should be so quiet today. (უკვე არსებული ფაქტის ემოციურ შეფასებაში იწერება should)"],
        ["✗ In case you will should need help...", "✓ In case you should need help... (will და should ერთად არ იწერება)"],
        ["✗ How I should know the answer?", "✓ How should I know the answer? (კითხვითი ინვერსია: should I)"]
      ],
      drills: [
        "It is quite natural that a beginner ___ feel nervous before the first performance.|should|would to|must to|ought",
        "\"What time does the director arrive?\" — \"How ___ I know? I don't have his schedule.\"|should|would|must|ought",
        "It is odd that the alarm ___ go off when nobody is near the building.|should|would to|could to|must",
        "I was walking down the main street when who ___ I bump into but my cousin!|should|would|could|must",
        "Take a warm blanket in the car in case the heater ___ break down.|should|would|will|must",
        "It is shocking that such a historic monument ___ be neglected for decades.|should|would|will|ought",
        "Why ___ anyone object to planting more trees in the neighbourhood?|should|must|ought|shall",
        "It is typical of him that he ___ arrive just as dinner is being served!|should|will|must|can",
        "She locked theジュエリー box carefully lest anyone ___ open it.|should|would|will|can",
        "What a pity that the concert ___ be cancelled on the very last day!|should|will|must|ought",
        "It is unthinkable that a captain ___ abandon his ship in a storm.|should|will|can to|ought",
        "We left a note on the kitchen table in case they ___ return early.|should|would|will|must",
        "It is baffling that two experienced pilots ___ make such a navigation error.|should|will|must|ought",
        "\"Why didn't Anna reply?\" — \"How ___ I know? Maybe her phone battery died.\"|should|will|must|shall",
        "It is disappointing that the committee ___ reject such a sensible proposal.|should|will|must|ought",
        "He disguised his voice on the phone so that nobody ___ recognize him.|should / would|will|can|must",
        "It is extraordinary that both inventors ___ reach the same conclusion independently.|should|will|must|ought",
        "I had just opened my umbrella when what ___ happen but the sun came out!|should|would|could|will",
        "It is regrettable that the two sides ___ fail to reach a peaceful agreement.|should|will|must|ought",
        "Keep the receipt in your wallet in case you ___ need to exchange the shirt.|should|would|will|must"
      ]
    },
    {
      num: 82, level: "C2",
      title: "რთული და შებრუნებული აქცენტირებული კონსტრუქციები (Complex & Inverted Clefts)",
      subtitle: "What little..., The last thing..., Not until... that, Such is...",
      rule: "C2 დონეზე Cleft კონსტრუქციები მრავალფეროვნდება: 1) „What little / What few + Noun + Subject + Verb + is/was...“ ნიშნავს „ის მცირედიც კი, რაც...“ (What little free time he had was spent reading); 2) „The last thing (that) + Subject + Verb + is/was...“ (ყველაზე ნაკლებად რაც მინდოდა/მოვ.ელოდი...); 3) შებრუნებული Cleft (Inverted Pseudo-cleft): „[Emphasized Part] + is/was what...“ (Patience is what we need most); 4) მიზეზის, დროისა და ადგილის ფორმალური აქცენტირება: „It was only when... that...“, „It was not until... that...“, „It is precisely because... that...“.",
      formulas: [
        ["+ What little / What few", "What little + უთვლადი (time/money) | What few + თვლადი (friends) + Clause + Verb", "What little money they had was spent on food."],
        ["- The last thing / The only thing", "The last / only thing (that) + Subject + Verb + is/was + (to) V1 / Clause", "The last thing I expected was to see him there."],
        ["? It is precisely because... that", "It is/was (precisely/only) because + Clause + THAT + Clause", "It was precisely because it rained that we stayed home."],
        ["💡 Inverted Wh-Cleft", "Noun / Adjective + is/was + what / where / why + Clause", "Honesty is what matters most in friendship."]
      ],
      examples: [
        ["What little energy the climbers had left was used to pitch the tent.", "ის მცირეოდენი ენერგიაც კი, რაც მთამსვლელებს შერჩათ, კარვის გაშლას მოხმარდა."],
        ["What few historical documents survived the fire are kept in the national archive.", "ის რამდენიმე ისტორიული დოკუმენტიც კი, რომელიც ხანძარს გადაურჩა, ეროვნულ არქივში ინახება."],
        ["The last thing we wanted to do was offend our hosts.", "ყველაზე ნაკლებად რაც გვსურდა, იყო ჩვენი მასპინძლების წყენინება."],
        ["It is precisely because the ecosystem is fragile that tourism must be regulated.", "სწორედ იმიტომ, რომ ეკოსისტემა მყიფეა, ტურიზმი უნდა რეგულირდებოდეს (because... that)."],
        ["It was only when the fog lifted that we saw the castle on the cliff.", "მხოლოდ მაშინ, როცა ნისლი გაიფანტა, დავინახეთ კლდეზე მდგარი ციხესიმაგრე (only when... that)."],
        ["A quiet cottage by the lake is what he has always dreamed of.", "მშვიდი აგარაკი ტბის პირას არის ის, რაზეც იგი ყოველთვის ოცნებობდა."],
        ["The only thing that kept the sailors going was the hope of reaching land.", "ერთადერთი, რაც მეზღვაურებს ძალას აძლევდა, იყო ხმელეთამდე მიღწევის იმედი."],
        ["How the ancient builders lifted those giant stones is what baffles engineers today.", "როგორ ასწიეს უძველესმა მშენებლებმა ის გიგანტური ქვები, არის ის, რაც დღესაც აოცებს ინჟინრებს."]
      ],
      mistakes: [
        ["✗ What few money he had was stolen.", "✓ What little money he had was stolen. (money უთვლადია -> What little)"],
        ["✗ It was only when the bell rang when the students left.", "✓ It was only when the bell rang that the students left. (It was only when... THAT...)"],
        ["✗ It is because he worked hard why he succeeded.", "✓ It is because he worked hard that he succeeded. (It is because... THAT...)"]
      ],
      drills: [
        "What ___ snow had fallen during the night melted as soon as the sun came out.|little|few|small|less",
        "What ___ trees grew on the rocky island were bent by the constant wind.|few|little|small|less",
        "It was only when I opened the envelope ___ I realized the letter was for my neighbour.|that|when|which|what",
        "The ___ thing I want right now is an argument; let's discuss this calmly.|last|final|end|least",
        "It is precisely because the material is so light ___ it is used in aircraft.|that|why|because|which",
        "A good night's sleep ___ what you need most before the tournament.|is|are|were|have",
        "It was not until the eighteenth century ___ the city built its first stone bridge.|that|when|until|which",
        "The only thing we could do in the storm ___ wait inside the cabin.|was|were|did|had",
        "What ___ furniture there was in the room looked old and dusty. (furniture = უთვლადი!)|little|few|many|several",
        "___ he managed to escape from the locked tower is what remains a mystery.|How|What|That|Which",
        "It was thanks to the lighthouse keeper ___ the ship avoided the reef.|that|who|which|why",
        "What ___ witnesses saw the incident gave conflicting descriptions to the police.|few|little|much|less",
        "The last thing she expected ___ for everyone to sing 'Happy Birthday' when she walked in.|was|were|did|had",
        "It was only after years of practice ___ he mastered the cello.|that|when|after|which",
        "What ___ light entered the cellar came through a narrow grating.|little|few|small|fewer",
        "Clear communication is ___ prevents misunderstandings in a large team.|what|that|which|it",
        "It was in that tiny village ___ the famous poet spent his childhood.|that|where|which|when",
        "What ___ coins they found in the ruins dated back to the Roman Empire.|few|little|much|less",
        "The first thing you should do upon arrival ___ register at the front desk.|is|are|were|do",
        "It is not what you say, ___ how you say it that leaves an impression.|but|than|as|or"
      ]
    },
    {
      num: 83, level: "C2",
      title: "სინტაქსური შეკუმშვა და Gapping ფორმალურ პროზაში (Advanced Ellipsis & Gapping)",
      subtitle: "Omitting Repeated Verbs, Conversational Ellipsis & Parallel Omission",
      rule: "C2 დონეზე ტექსტის ელეგანტურობისთვის გამოიყენება რთული ელიფსისი (სიტყვების კანონზომიერი გამოტოვება): 1) Gapping (შუა ზმნის გამოტოვება პარალელურ წინადადებაში): როცა ორ ნაწილს ერთი და იგივე ზმნა აქვს, მეორე ნაწილში ზმნა საერთოდ ვარდება და მის ადგილას ხშირად იწერება მძიმე (მაგ.: Some delegates travelled by train, others [travelled] by plane; One sister became a surgeon, the other [became] an architect); 2) კავშირების (if, when, while, once, though, whether) შემდეგ „Subject + be“ გამოტოვება: „If [it is] necessary“, „While [he was] in Rome“, „Whether [it is] right or wrong“; 3) შედარებით კონსტრუქციებში ზმნის შეკუმშვა: „more than is necessary“.",
      formulas: [
        ["+ Gapping (ზმნის გამოტოვება)", "Subject 1 + Verb + Object 1; Subject 2, Object 2.", "Greece produces olive oil; Brazil, coffee."],
        ["- Conjunction + Adj / Prep Phrase", "If possible / When in doubt / Once inside / Though exhausted", "When in Rome, do as the Romans do."],
        ["? Whether ... or ...", "Whether rich or poor / Whether by accident or by design", "The law applies to everyone, whether citizen or foreigner."],
        ["💡 Than is / was + Adjective/V3", "Don't spend more money than is necessary (უპირო it არ იწერება!)", "The repair took longer than was expected."]
      ],
      examples: [
        ["One brother chose a career in medicine; the other, in architecture.", "ერთმა ძმამ მედიცინის კარიერა აირჩია, მეორემ კი — არქიტექტურა (chose გამოტოვებულია)."],
        ["Some birds build their nests in tall trees, others on rocky cliffs.", "ზოგი ფრინველი ბუდეს მაღალ ხეებზე იშენებს, სხვები კი — კლდეებზე."],
        ["When in doubt about the meaning of a term, consult an encyclopedia.", "როცა ტერმინის მნიშვნელობაში ეჭვი გეპარებათ (When [you are] in doubt), ჩახედეთ ენციკლოპედიას."],
        ["Please send the parcel by express mail if possible.", "გთხოვთ გამოგზავნოთ ამანათი სწრაფი ფოსტით, თუ ეს შესაძლებელია (if [it is] possible)."],
        ["While on holiday in Scotland, they visited several historic castles.", "შოტლანდიაში შვებულებაში ყოფნისას (While [they were] on holiday), მათ რამდენიმე ციხესიმაგრე მოინახულეს."],
        ["Do not add more salt to the soup than is necessary.", "ნუ დაუმატებთ წვნიანს იმაზე მეტ მარილს, ვიდრე საჭიროა (than is necessary — და არა than it is necessary!)."],
        ["Whether by accident or by design, his remark changed the course of the debate.", "შემთხვევით იყო ეს თუ განზრახ (Whether [it was] by accident...), მისმა შენიშვნამ შეცვალა დებატების მსვლელობა."],
        ["Though small in size, the island boasts a rich cultural heritage.", "მიუხედავად იმისა, რომ ზომით პატარაა (Though [it is] small), კუნძული მდიდარი კულტურული მემკვიდრეობით გამოირჩევა."]
      ],
      mistakes: [
        ["✗ Don't take more luggage than it is necessary.", "✓ Don't take more luggage than is necessary. (than-ის შემდეგ უპირო it არ იწერება!)"],
        ["✗ While in the museum, the rain started (ქვემდებარის შეუთავსებლობა).", "✓ While in the museum, we heard the rain start. (მუზეუმში ჩვენ ვიყავით და არა წვიმა!)"],
        ["✗ If it possible, reply by noon.", "✓ If possible / If it is possible, reply by noon."]
      ],
      drills: [
        "Please don't use more paper than ___ strictly necessary.|is|it is|what is|that is",
        "When ___ doubt, always follow the safety instructions.|in|at|on|under",
        "Some tourists prefer sandy beaches; ___, mountain trails.|others|another|other|the other one",
        "While ___ university in Oxford, she rowed for the college team.|at|in the|she at|being at the",
        "The project took far more time than ___ originally anticipated.|was|it was|what was|that was",
        "Please submit your application in person if ___.|possible|it possible|possibly|is possible",
        "___ exhausted after the long march, the soldiers kept their spirits high.|Though / Although|Despite|In spite|However",
        "Whether ___ or by coincidence, the two painters chose the exact same subject.|by design|designing|it design|designed",
        "One daughter inherited the house; the ___, the vineyard.|other|others|another|second one",
        "Once ___ the cave, the explorers switched on their headlamps.|inside|in the inside|they inside|entering inside",
        "The storm caused much less damage than ___ feared.|was / had been|it was|what was|that had",
        "If ___ carefully, this fabric will not shrink in the wash.|washed|washing|it washed|to wash",
        "While ___ his way to the station, he realized he had forgotten his ticket.|on|in|at|by",
        "The treaty was signed, though not without ___ hesitation on both sides.|some|it was some|being some|having",
        "Whenever ___, we buy fresh vegetables directly from local farmers.|possible|it possible|is possible|possibly",
        "Italy is famous for its opera; Austria, ___ its symphonic tradition.|for|with|by|in",
        "Don't pack more equipment than ___ needed for a three-day hike.|is|it is|what is|there is",
        "Whether ___ or loser, every participant received a commemorative medal.|winner|winning|he winner|is winner",
        "Though ___ outnumbered, the defenders held the fortress for weeks.|heavily|they heavily|were heavily|it heavily",
        "Until ___ by a qualified electrician, this machine must not be switched on.|inspected|inspecting|it inspected|to inspect"
      ]
    },
    {
      num: 84, level: "C2",
      title: "C2 დონის რთული წინდებულიანი კავშირები (Complex Prepositional Phrases)",
      subtitle: "With a view to + V-ing, By virtue of, In light of, On the grounds that",
      rule: "უმაღლეს აკადემიურ, სამართლებრივ და ოფიციალურ ინგლისურში გამოიყენება სამსიტყვიანი და ოთხსიტყვიანი წინდებულიანი ფრაზები: 1) „with a view to + V-ing / Noun“ (რაიმეს მიღწევის მიზნით / განზრახვით — ყურადღება: აქ „to“ წინდებულია, ამიტომ აუცილებლად მოსდევს V-ing და არა V1!); 2) „by virtue of + Noun/V-ing“ (რისამე წყალობით / ძალით / საფუძველზე); 3) „in light of / in view of + Noun“ (ახალი გარემოების გათვალისწინებით); 4) „on the grounds of + Noun“ ან „on the grounds that + Clause“ (იმ მიზეზით/საფუძვლით, რომ...); 5) „in accordance with“ (შესაბამისად), „for fear of + V-ing“ (იმის შიშით, რომ არ...).",
      formulas: [
        ["+ With a view to + V-ing!", "with a view to + V-ing (მიზნით/განზრახვით — to არის წინდებული!)", "They bought the old mill with a view to converting it into a hotel."],
        ["- By virtue of / By means of", "by virtue of (საფუძველზე/წყალობით) | by means of (საშუალებით)", "She succeeded by virtue of sheer perseverance."],
        ["? In light of / In view of", "in (the) light of + ახალი ფაქტები | in view of + გარემოება", "In light of recent discoveries, the theory was revised."],
        ["💡 On the grounds that / of", "on the grounds that + Clause | on the grounds of + Noun", "He resigned on the grounds of ill health."]
      ],
      examples: [
        ["The council purchased the land with a view to building a public park.", "საბჭომ მიწა შეიძინა საჯარო პარკის აშენების მიზნით (with a view to + building!)."],
        ["She was granted citizenship by virtue of her grandparents' heritage.", "მას მოქალაქეობა მიენიჭა ბებია-ბაბუის წარმომავლობის საფუძველზე (by virtue of)."],
        ["In light of the weather forecast, the mountain expedition was postponed.", "ამინდის პროგნოზის გათვალისწინებით (In light of...), მთის ექსპედიცია გადაიდო."],
        ["The judge dismissed the case on the grounds that the evidence was insufficient.", "მოსამართლემ საქმე შეწყვიტა იმ საფუძვლით, რომ მტკიცებულება არასაკმარისი იყო (on the grounds that)."],
        ["All examinations are conducted in strict accordance with university regulations.", "ყველა გამოცდა ტარდება უნივერსიტეტის წესდებასთან მკაცრი შესაბამისობით (in accordance with)."],
        ["They spoke in low voices for fear of waking the sleeping guards.", "ისინი ხმადაბლა საუბრობდნენ იმის შიშით, რომ მძინარე მცველები არ გაეღვიძებინათ (for fear of + waking)."],
        ["The climbers reached the ledge by means of a rope ladder.", "მთამსვლელებმა კლდის შვერილს თოკის კიბის საშუალებით (by means of) მიაღწიეს."],
        ["In the event of a power failure, the emergency generators start automatically.", "ელექტროენერგიის გათიშვის შემთხვევაში (In the event of), სარეზერვო გენერატორები ავტომატურად ირთვება."]
      ],
      mistakes: [
        ["✗ He is studying French with a view to work in Geneva.", "✓ He is studying French with a view to working in Geneva. (with a view to-ს ყოველთვის მოსდევს V-ing!)"],
        ["✗ In accordance to the rules...", "✓ In accordance with the rules... (accordance ითხოვს წინდებულს with; ხოლო according ითხოვს to-ს!)"],
        ["✗ For fear to make a mistake...", "✓ For fear of making a mistake... (for fear OF + V-ing)"]
      ],
      drills: [
        "They renovated the historic barn with a view to ___ it into an art gallery.|turning|turn|turned|be turned",
        "The tournament was cancelled in ___ of the severe storm warnings.|light / view|virtue|means|accordance",
        "Everything was done in strict accordance ___ the international treaty.|with|to|of|by",
        "She attained the position by ___ of her exceptional qualifications and hard work.|virtue|light|view|grounds",
        "He declined the invitation on the ___ that he had a prior engagement.|grounds|virtue|light|view",
        "The deer hid in the thicket for fear ___ spotted by the hunters.|of being|to be|of be|that being",
        "Ancient sailors navigated across open oceans by ___ of the stars.|means|virtue|light|view",
        "We are meeting the landowners tomorrow with a view to ___ a fair lease.|negotiating|negotiate|negotiated|have negotiated",
        "In the ___ of heavy snowfall, the mountain pass will be closed to traffic.|event|case of that|light|virtue",
        "The application was rejected on the grounds ___ it was submitted after the deadline.|that|of|which|why",
        "___ to the official timetable, the train departs at 14:30. (შეადარეთ: in accordance with)|According|In accordance|By virtue|In view",
        "He kept the old map in a waterproof case for fear of ___ it in the rain.|damaging|damage|to damage|damaged",
        "By ___ of his position as chairperson, he had the casting vote.|virtue|means|light|grounds",
        "In ___ of the fact that she was a complete beginner, her painting was remarkable.|view / light|virtue|means|accordance",
        "The scientists are analysing the data with a view to ___ the findings next month.|publishing|publish|published|be published",
        "On ___ of the thick fog, all ferry services were suspended.|account|grounds|light|virtue",
        "The monument was restored ___ means of public donations.|by|with|in|on",
        "In ___ with your request, we have enclosed a full catalogue.|accordance|according|light|virtue",
        "He was excused from military service on the grounds ___ poor eyesight.|of|that|for|with",
        "With a ___ to reducing waste, the café stopped using plastic cups.|view|light|virtue|means"
      ]
    },
    {
      num: 85, level: "C2",
      title: "რთული მიმართებითი სტრუქტურები (Wherein, Whereupon, Little of which, Whatever)",
      subtitle: "Literary Relative Adverbs & Quantifier + of whom / of which",
      rule: "1) მაღალ ლიტერატურულ და იურიდიულ სტილში „წინდებული + which“-ის ნაცვლად გამოიყენება შერწყმული ზმნიზედები: „wherein“ (= in which — რომელშიც), „whereby“ (= by which — რომლის მეშვეობითაც), „whereupon“ (= immediately after which — რის შემდეგაც მაშინვე). 2) ჩართულ მიმართებით წინადადებებში რაოდენობის გამომხატველ სიტყვებს მოსდევს „of whom“ (ადამიანებთან) და „of which“ (ნივთებთან/იდეებთან): many/most/none/neither/both/all/little/few/some + of whom/which; ასევე superlative + of which (the oldest of which) და არსებითი სახელი + of which (the result of which = whose result). 3) „Whatever / Whichever“ არსებითი სახელის წინ მუშაობს როგორც მიმართებითი განმსაზღვრელი (Take whatever books you need).",
      formulas: [
        ["+ Wherein / Whereupon / Whereby", "wherein (= in which) | whereupon (= right after which) | whereby (= by which)", "He signed the paper, whereupon the lawyer stood up."],
        ["- Quantifier + of which/whom", "much/little/most/none/neither/both + of which (საგანი) / of whom (ადამიანი)", "He told several stories, little of which was true."],
        ["? The + Noun + of which", "the roof of which / the outcome of which / the cause of which (= whose)", "We stayed at a castle, the history of which dates back to 1300."],
        ["💡 Whatever / Whichever + Noun", "whatever + Noun (= any ... that) | whichever + Noun", "She donates whatever spare time she has to charity."]
      ],
      examples: [
        ["The archives contain a diary wherein the explorer recorded his daily thoughts.", "არქივში ინახება დღიური, რომელშიც (wherein = in which) მკვლევარი თავის ყოველდღიურ ფიქრებს იწერდა."],
        ["The referee blew the final whistle, whereupon the fans flooded onto the pitch.", "მსაჯმა საფინალო სასტვენს ჩაჰბერა, რის შემდეგაც მაშინვე (whereupon) გულშემატკივრები მოედანზე შეცვივდნენ."],
        ["He gave a long speech, very little of which made sense to the audience.", "მან წარმოთქვა გრძელი სიტყვა, რომლის ძალიან მცირე ნაწილიც (little of which) იყო გასაგები აუდიტორიისთვის."],
        ["The expedition consisted of twelve climbers, none of whom had been to the Himalayas before.", "ექსპედიცია შედგებოდა თორმეტი მთამსვლელისგან, რომელთაგან არცერთი (none of whom) არ ყოფილა ჰიმალაიში."],
        ["They discovered three ancient statues, the largest of which was made of bronze.", "მათ აღმოაჩინეს სამი უძველესი ქანდაკება, რომელთაგან ყველაზე დიდი (the largest of which) ბრინჯაოსი იყო."],
        ["We came across an old cottage, the roof of which had partially collapsed.", "წავაწყდით ძველ აგარაკს, რომლის სახურავიც (the roof of which) ნაწილობრივ ჩამოქცეული იყო."],
        ["You are welcome to borrow whatever books you need from my study.", "შეგიძლიათ აიღოთ ნებისმიერი წიგნი (whatever books), რომელიც გჭირდებათ ჩემი კაბინეტიდან."],
        ["She has two twin brothers, neither of whom resembles her.", "მას ჰყავს ტყუპი ძმები, რომელთაგან არცერთი (neither of whom) არ ჰგავს მას."]
      ],
      mistakes: [
        ["✗ He wrote ten poems, none of them was published.", "✓ He wrote ten poems, none of which were/was published. (მძიმის შემდეგ ერთ წინადადებაში საჭიროა which, და არა them!)"],
        ["✗ She has two sisters, both of who are architects.", "✓ She has two sisters, both of whom are architects. (წინდებულ of-ის შემდეგ იწერება მხოლოდ whom!)"],
        ["✗ Take what books you want from the box.", "✓ Take whatever / whichever books you want from the box."]
      ],
      drills: [
        "The captain gave the signal, ___ the crew hoisted the sails immediately.|whereupon|wherein|whereby|whereas",
        "This is a complex legal contract ___ every party's duties are clearly defined.|wherein / in which|whereupon|whereby to|what",
        "The museum owns fifty paintings by the artist, most of ___ are on display.|which|them|whom|that",
        "The rescue team searched for the two hikers, ___ of whom had a compass.|neither|none|both not|which",
        "He made several excuses for his absence, ___ of which was believable.|none / little|neither|no one|nothing",
        "We visited an ancient abbey, the tower ___ could be seen from miles away.|of which|which|that|of that",
        "There are three routes to the summit, the shortest ___ takes चार hours.|of which|of them|which|that",
        "Feel free to use ___ tools you find in the workshop.|whatever / whichever|what|however|whoever",
        "The panel interviewed five applicants, all of ___ spoke fluent English.|whom|who|which|them",
        "The speaker told a joke, ___ the entire hall burst into laughter.|whereupon|wherein|whereby|whereas",
        "She inherited a collection of rare coins, the most valuable ___ dates from 50 BC.|of which|of them|that|which",
        "He offered us ___ food he had in his backpack.|whatever|however|whoever|wherever",
        "The report contained a lot of statistical data, much ___ was outdated.|of which|of it|which|that",
        "I have two close cousins, ___ of whom live in Scotland.|both|neither not|all|none",
        "They signed a charter ___ the island was declared a nature reserve.|whereby / wherein|whereupon|whereas|what",
        "We stayed in a mountain cabin, the windows ___ faced the glacier.|of which|which|of that|whose the",
        "The general issued an order, ___ the troops marched towards the border.|whereupon|wherein|whereby|whereas",
        "There were twenty passengers on the bus, several ___ were tourists.|of whom|of who|of them|who",
        "Choose ___ seat you prefer; the carriage is almost empty.|whichever / whatever|however|whoever|wherever",
        "He published four novels, the first ___ won a prestigious literary prize.|of which|of them|that|which"
      ]
    },
    {
      num: 86, level: "C2",
      title: "აკადემიური სიფრთხილე და ეპისტემური მოდალობა (Academic Hedging & Modality)",
      subtitle: "Tends to suggest, May well be, Could conceivably, There is every likelihood",
      rule: "C2 აკადემიურ და სამეცნიერო წერაში კატეგორიული, 100%-იანი მტკიცებების ნაცვლად გამოიყენება „Hedging“ — ფრთხილი, ობიექტურად დაზღვეული ფორმულირებები: 1) „may / might / could WELL + V1“ ნიშნავს „სავსებით შესაძლებელია / დიდი ალბათობით ასეა“ (It may well rain tonight); 2) ზმნური ჰეჯირება: „The data tends to suggest / appears to indicate / seems to corroborate...“; 3) მოდალური ზმნიზედები: „could conceivably / plausibly / arguably be...“; 4) არსებითი კონსტრუქციები: „There is a strong likelihood / a distinct possibility that...“, „It is not unreasonable to assume that...“.",
      formulas: [
        ["+ May / Might / Could well + V1", "Subject + may / might / could WELL + V1 (სავსებით მოსალოდნელია)", "This discovery may well change our understanding of history."],
        ["- Tends to / Appears to + V1", "The evidence tends to suggest / appears to indicate / seems to imply...", "The findings tend to support the initial hypothesis."],
        ["? Arguably / Conceivably / Plausibly", "is arguably the best | could conceivably lead to | may plausibly explain", "This is arguably Shakespeare's finest tragedy."],
        ["💡 Likelihood / Assumption", "There is every likelihood that... | It is widely assumed that...", "There is a distinct possibility that temperatures will rise."]
      ],
      examples: [
        ["The new archaeological findings may well rewrite the history of the region.", "ახალმა არქეოლოგიურმა აღმოჩენებმა სავსებით შესაძლებელია თავიდან დაწეროს რეგიონის ისტორია (may well)."],
        ["Preliminary data tends to suggest a link between diet and sleep quality.", "წინასწარი მონაცემები მიუთითებს (tends to suggest) კავშირზე კვებასა და ძილის ხარისხს შორის."],
        ["This painting is arguably the finest example of Renaissance portraiture.", "ეს ნახატი, შეიძლება ითქვას (arguably), რენესანსის პორტრეტული ხელოვნების საუკეთესო ნიმუშია."],
        ["Such a sudden shift in climate could conceivably affect migration patterns.", "კლიმატის ასეთმა უეცარმა ცვლილებამ თეორიულად შესაძლოა (could conceivably) გავლენა მოახდინოს მიგრაციაზე."],
        ["There is every likelihood that the manuscript dates from the twelfth century.", "არსებობს სრული ალბათობა იმისა, რომ ხელნაწერი მეთორმეტე საუკუნით თარიღდება."],
        ["The ruins appear to have been abandoned after a severe drought.", "ნანგრევები, როგორც ჩანს (appear to have been), მძიმე გვალვის შემდეგ მიატოვეს."],
        ["It is not unreasonable to assume that early mariners used the stars for navigation.", "სავსებით გონივრულია ვივარაუდოთ (It is not unreasonable to assume), რომ ძველი მეზღვაურები ვარსკვლავებით ხელმძღვანელობდნენ."],
        ["The decline in bee populations may plausibly be attributed to habitat loss.", "ფუტკრების პოპულაციის შემცირება შეიძლება დამაჯერებლად მიეწეროს (may plausibly be attributed) საბინადრო გარემოს დაკარგვას."]
      ],
      mistakes: [
        ["✗ The results may well to prove the theory.", "✓ The results may well prove the theory. (may well-ის შემდეგ იწერება საწყისი ზმნა to-ს გარეშე!)"],
        ["✗ The study tends suggesting that...", "✓ The study tends to suggest that... (tend-ს ყოველთვის მოსდევს to + V1)"],
        ["✗ There is a strong likelihood to rain.", "✓ There is a strong likelihood that it will rain / of rain."]
      ],
      drills: [
        "This newly discovered herb ___ well provide a cure for the disease.|may / might / could|can to|will to|should to",
        "The survey results tend ___ that people prefer flexible working hours.|to suggest / to indicate|suggesting|suggest|suggested",
        "The Symphony in C Minor is ___ the composer's most ambitious work.|arguably|arguing|argued|argument",
        "A prolonged drought could ___ lead to a severe shortage of grain.|conceivably / plausibly|conceivable|plausible|unlikely",
        "There is every ___ that the bridge will be completed ahead of schedule.|likelihood / probability|likely|probable|possibly",
        "The ancient coins appear ___ been minted during the reign of Augustus.|to have|having|that have|to be",
        "You ___ well be right about the cause of the mechanical failure.|may / might / could|can|shall|ought",
        "The evidence ___ to point towards a natural cause for the wildfire.|seems / appears / tends|is seeming|seemingly|likely",
        "It is not ___ to conclude that the two languages share a common ancestor.|unreasonable|unreasonably|reason|reasoning",
        "There is a distinct ___ that the ferry will be delayed by the fog.|possibility|possible|possibly|probable",
        "The phenomenon may ___ be explained by changes in ocean currents.|plausibly / conceivably|plausible|conceivable|possible",
        "He ___ well have forgotten about our meeting; let's send him a reminder. (წარსული!)|may / might / could|can|should to|will to",
        "These fossils ___ to indicate that the desert was once a shallow sea.|appear / seem / tend|appearing|are appear|apparent",
        "To what extent can the decline be ___ to environmental factors?|attributed|attributing|attribute|attribution",
        "It is widely ___ by historians that the fortress fell after a long siege.|assumed / believed|assuming|assumption|believe",
        "The findings lend ___ support to the theory of continental drift.|tentative / considerable|tentatively|tending|tendency",
        "Without proper maintenance, the structure could ___ collapse within a decade.|conceivably / well|conceivable|possible|likely",
        "The data ___ no means proves a direct causal link between the two events.|by|in|on|with",
        "There seems ___ little doubt that the portrait is authentic.|to be|being|be|that is",
        "This is ___ the most comprehensive dictionary of the language ever published.|arguably / undoubtedly|arguing|argument|doubtful"
      ]
    },
    {
      num: 87, level: "C2",
      title: "ემფაზური დამხმარე ზმნა „Do“ და კონტრასტული ხაზგასმა (Emphatic Do/Does/Did)",
      subtitle: "Affirmative Emphasis (She did warn us!, Do sit down!, I do apologize)",
      rule: "ჩვეულებრივ, დამხმარე ზმნები do, does და did გამოიყენება მხოლოდ კითხვით და უარყოფით წინადადებებში. მაგრამ როდესაც დადებით წინადადებაში გვსურს ზმნის განსაკუთრებული ემოციური ან კონტრასტული გაძლიერება („ნამდვილად!“, „მართლაც!“, „ხომ გითხარი!“), მთავარი ზმნის წინ ვსვამთ do / does (Present Simple-ში) ან did (Past Simple-ში), ხოლო თავად მთავარი ზმნა დგება საწყის პირველ ფორმაში (V1)! მაგ.: „She DOES know the truth!“ (მან ნამდვილად იცის!), „He DID lock the door!“ (მან ნამდვილად ჩაკეტა!). ასევე, ბრძანებით წინადადებაში „Do + V1“ გამოხატავს ძალიან თავაზიან ან დაჟინებულ თხოვნას: „Do come in!“, „Do take a seat!“.",
      formulas: [
        ["+ Present Emphasis (do / does)", "I/You/We/They DO + V1 | He/She/It DOES + V1 (უ-s-ოდ!)", "He does look tired today! / I do apologize."],
        ["- Past Emphasis (did)", "Subject + DID + V1 (საწყისი ფორმა — და არა V2!)", "We didn't win the cup, but we did reach the final."],
        ["? Polite Imperative (Do + V1)", "Do + V1 (Do sit down! / Do be quiet! / Do have some tea!)", "ზმნა be-სთანაც ბრძანებითში იწერება Do: Do be careful!"],
        ["💡 კონტრასტი დათმობის შემდეგ", "Although he didn't..., he DID + V1...", "She rarely smiles, but when she does smile, her face lights up."]
      ],
      examples: [
        ["I do hope you will be able to attend our graduation ceremony.", "ნამდვილად დიდი იმედი მაქვს (I do hope), რომ შეძლებთ ჩვენს გამოსაშვებ საღამოზე დასწრებას."],
        ["You are wrong — Sarah did invite him, but he was out of town.", "ცდები — სარამ ნამდვილად დაპატიჟა იგი (did invite), მაგრამ ის ქალაქში არ იყო."],
        ["He doesn't speak much, but when he does speak, everyone listens.", "ის ბევრს არ ლაპარაკობს, მაგრამ როცა ლაპარაკობს (when he does speak), ყველა უსმენს."],
        ["Do come in and take a seat by the fire!", "გთხოვთ შემოხვიდეთ (Do come in) და ბუხართან დაბრძანდეთ!"],
        ["Do be careful when you walk down those icy stone steps!", "გთხოვ, ძალიან ფრთხილად იყავი (Do be careful), როცა იმ მოყინულ კიბეზე ჩადიხარ!"],
        ["Although we didn't see the summit, we did enjoy the walk through the valley.", "მიუხედავად იმისა, რომ მწვერვალი ვერ დავინახეთ, ხეობაში სეირნობით ნამდვილად ვისიამოვნეთ (did enjoy)."],
        ["She really does play the violin with extraordinary passion.", "ის მართლაც უკრავს (does play) ვიოლინოზე არაჩვეულებრივი გრძნობით."],
        ["I do apologize for keeping you waiting in the corridor.", "გულწრფელად გიხდით ბოდიშს (I do apologize) დერეფანში ლოდინისთვის."]
      ],
      mistakes: [
        ["✗ He did went to the library yesterday!", "✓ He did go to the library yesterday! (did-ის შემდეგ მთავარი ზმნა ბრუნდება საწყის V1 ფორმაში: go!)"],
        ["✗ She does knows the answer.", "✓ She does know the answer. (does-ის შემდეგ მთავარ ზმნას -s აღარ ეწერება!)"],
        ["✗ Do are careful on the road!", "✓ Do be careful on the road! (Do-ს შემდეგ იწერება საწყისი ფორმა be)"]
      ],
      drills: [
        "I didn't buy the jacket, but I ___ buy a warm woollen scarf.|did|do|was|had",
        "She really ___ have a remarkable talent for learning languages!|does|do|is|has",
        "___ take a seat while I fetch a glass of water for you! (თავაზიანი მიპატიჟება)|Do|Are|Have|Will to",
        "He ___ warn us about the steep road, but we didn't listen to him.|did|does|was|had",
        "___ be quiet for a moment! I am trying to hear the announcement.|Do|Are|Be to|Have",
        "აირჩიეთ გრამატიკულად სწორი ემფაზური წინადადება:|She did phone you last night!|She did phoned you last night!|She does phoned you last night!|She was phone you last night!",
        "I don't often read poetry, but I ___ enjoy the sonnets of Shakespeare.|do|am|did to|does",
        "Why didn't you tell me? — I ___ tell you, but you weren't paying attention!|did|do|was|had",
        "He rarely complains, but when he ___ complain, there is a serious reason.|does|do|is|did",
        "___ let us know as soon as your train arrives at the station!|Do|Are|Be|Have",
        "Although the team lost the match, they ___ play with great courage.|did|do|were|had",
        "That little café on the corner really ___ serve the best coffee in town.|does|do|is|has",
        "I ___ wish you wouldn't leave your wet umbrella on the sofa!|do|am|did|does",
        "___ have another slice of apple pie! There is plenty left.|Do|Are|Have to|Be",
        "We didn't find the rare bird, but we ___ see some deer in the woods.|did|do|were|had",
        "She ___ seem much happier since she moved to the coast.|does|do|is|has",
        "___ forgive me for interrupting your conversation!|Do|Are|Be|Have",
        "He claimed he hadn't received the letter, yet he ___ know its contents!|did|does|was|had",
        "___ be reasonable! We cannot walk twenty kilometres in this storm.|Do|Are|Have|Will",
        "They don't travel abroad often, but when they ___ travel, they stay for a month.|do|does|are|did"
      ]
    },
    {
      num: 88, level: "C2",
      title: "დანართი კონსტრუქციები და განმავრცობი სინტაქსი (Apposition & Resumptive Modifiers)",
      subtitle: "Noun + that-clause Apposition (The belief that...) & Resumptive Structures",
      rule: "1) Apposition (დანართი) არის ორი არსებითი ფრაზის გვერდიგვერდ დაყენება, სადაც მეორე განმარტავს პირველს (Paris, the capital of France, ...). 2) აბსტრაქტულ არსებით სახელებს (fact, belief, idea, notion, rumour, claim, assumption, possibility, evidence, news, hope) ხშირად მოსდევს დანართი წინადადება კავშირით „that“ (Appositive that-clause), რომელიც შინაარსობრივად ხსნის თავად ამ არსებით სახელს: „The belief that the Earth was flat...“. დაიმახსოვრეთ: რადგან აქ „that“ კავშირია და არა მიმართებითი ნაცვალსახელი, მისი ჩანაცვლება „which“-ით შეცდომაა! 3) Resumptive Modifier: წინადადების ბოლოს საკვანძო არსებითი სახელის ან ზედსართავის გამეორება ტირეს ან მძიმის შემდეგ სიღრმისეული განვრცობისთვის.",
      formulas: [
        ["+ Appositive That-Clause", "The fact / belief / notion / rumour / claim + THAT + სრული წინადადება (არა which!)", "The news that the team had won spread quickly."],
        ["- Of + V-ing vs. That-Clause", "Despite the fact that... | The possibility of + V-ing / The possibility that...", "There is no evidence that he was there."],
        ["? Resumptive Modifier (გამეორებითი)", "Clause + Noun, — a Noun that...", "It was a revolutionary discovery — a discovery that changed medicine."],
        ["💡 Summative Modifier (შემაჯამებელი)", "Clause, — a process / a decision / a result that...", "The glacier melted rapidly, a phenomenon that alarmed scientists."]
      ],
      examples: [
        ["The ancient belief that the Sun revolved around the Earth was disproved by astronomers.", "უძველესი რწმენა იმისა, რომ (The belief that...) მზე დედამიწის გარშემო ბრუნავდა, ასტრონომებმა უარყვეს."],
        ["The rumour that the factory would close caused great concern in the town.", "ჭორმა იმის შესახებ, რომ ქარხანა დაიხურებოდა (The rumour that...), ქალაქში დიდი წუხილი გამოიწვია."],
        ["We must accept the fact that resources are finite.", "ჩვენ უნდა მივიღოთ ის ფაქტი, რომ (the fact that...) რესურსები ამოწურვადია."],
        ["The telescope revealed a distant planet — a planet covered entirely in ice.", "ტელესკოპმა გამოავლინა შორეული პლანეტა — პლანეტა, რომელიც მთლიანად ყინულით იყო დაფარული (Resumptive)."],
        ["The council decided to ban cars from the old square, a measure that delighted pedestrians.", "საბჭომ გადაწყვიტა ძველ მოედანზე მანქანების აკრძალვა — ზომა, რომელმაც ქვეითები გაახარა (Summative)."],
        ["There is little evidence to support the claim that the painting is a forgery.", "არსებობს მცირე მტკიცებულება იმ მტკიცების გასამყარებლად, რომ ნახატი ყალბია."],
        ["He dismissed the notion that machines could ever replace human creativity.", "მან უარყო მოსაზრება (the notion that...), რომ მანქანებს ოდესმე შეეძლოთ ადამიანური შემოქმედების ჩანაცვლება."],
        ["Venice, once a powerful maritime republic, attracts millions of visitors.", "ვენეცია, ოდესღაც ძლევამოსილი საზღვაო რესპუბლიკა, მილიონობით ვიზიტორს იზიდავს."]
      ],
      mistakes: [
        ["✗ The news which the bridge had opened pleased everyone (როცა news-ის შინაარსია ხიდის გახსნა).", "✓ The news that the bridge had opened pleased everyone. (Appositive დანართში იწერება that, და არა which!)"],
        ["✗ Despite of the fact that...", "✓ Despite the fact that / In spite of the fact that..."],
        ["✗ The assumption which prices will fall is risky.", "✓ The assumption that prices will fall is risky."]
      ],
      drills: [
        "The widespread belief ___ bats are blind is completely false.|that|which|what|who",
        "The news ___ the missing sailors had been rescued brought relief to the village.|that|which|what|whom",
        "The news ___ you told me yesterday was very encouraging. (აქ news არის ობიექტი ზმნისა told!)|which / that|what|who|where",
        "He rejected the notion ___ success depends solely on luck.|that|which|what|how",
        "The town council planted five hundred trees, a ___ that transformed the dusty streets.|decision / measure / step|which|what|doing",
        "There is no scientific evidence ___ this herb can cure the common cold.|that|which|what|for",
        "The rumour ___ the museum would sell its collection turned out to be untrue.|that|which|what|who",
        "She held on to the hope ___ her lost dog would eventually find its way home.|that|which|what|where",
        "The assumption ___ the weather would remain calm proved disastrous for the expedition.|that|which|what|how",
        "It was a moment of pure triumph — a ___ that the athletes would remember forever.|moment|triumphing|which|what",
        "We were surprised by the announcement ___ the festival had been cancelled.|that|which|what|who",
        "The fact ___ whales are mammals, not fish, is taught in primary school.|that|which|what|because",
        "The symphony ended with a thunderous chord, a ___ that brought the audience to its feet.|climax / finale|which|what|ending that it",
        "Nobody questioned his claim ___ he had crossed the desert alone.|that|which|what|whom",
        "The idea ___ people could one day fly seemed impossible afew centuries ago.|that|which|what|how",
        "The suggestion ___ we should leave before dawn was accepted by everyone.|that|which|what|who",
        "The village lacked a clean water supply — a ___ that the engineers set out to solve.|problem / challenge|which|what|lacking",
        "In spite of the fact ___ he had no formal training, his sculptures were masterpieces.|that|which|what|of",
        "The possibility ___ the volcano might erupt again kept the scientists on alert.|that|which|what|of",
        "The theory ___ continents drift slowly across the globe is now universally accepted.|that|which|what|how"
      ]
    },
    {
      num: 89, level: "C2",
      title: "უპირო „It“ და ეგზისტენციალური „There“ მაღალ რეგისტრში (Idiomatic It & There)",
      subtitle: "Take it for granted that, See to it that, Owe it to, There is no denying",
      rule: "1) გარკვეულ ზმნებსა და წინდებულებს (take for granted, owe to, leave to, see to, put down to, hate/love/appreciate) არ შეუძლიათ პირდაპირ მიიბან that-წინადადება ან ინფინიტივი — მათ შუაში აუცილებლად სჭირდებათ წინასწარი ფორმალური დამატება „IT“ (Preparatory Object 'it'): „We take IT for granted that...“, „I owe IT to my parents that...“, „Please see to IT that the doors are locked“, „I would appreciate IT if you could...“. 2) მაღალი რეგისტრის „There“ კონსტრუქციები: „There appears / seems to be...“, „There is no point (in) + V-ing“, „There is no denying / escaping the fact that...“.",
      formulas: [
        ["+ Take it for granted / Owe it to", "take IT for granted that... | owe IT to someone to V1 / that...", "Don't take it for granted that you will win."],
        ["- See to it / Leave it to", "see to IT that + Clause (იზრუნე იმაზე, რომ...) | leave IT to someone to V1", "Please see to it that the guests have everything."],
        ["? Appreciate / Hate / Love + IT + if/when", "I would appreciate IT if you... | I hate IT when people...", "I'd appreciate it if you replied promptly."],
        ["💡 There is no + V-ing", "There is no denying / knowing / telling... | There is no point (in) + V-ing", "There is no denying that the task is difficult."]
      ],
      examples: [
        ["People often take it for granted that clean water will always flow from the tap.", "ადამიანები ხშირად თავისთავად разумеющимся-ად იღებენ (take it for granted that...), რომ ონკანიდან სულ სუფთა წყალი წამოვა."],
        ["I would appreciate it if you could keep this matter confidential.", "მადლობელი დაგრჩებით (I would appreciate it if...), თუ ამ საკითხს საიდუმლოდ შეინახავთ."],
        ["Please see to it that all the windows are closed before the storm arrives.", "გთხოვთ იზრუნოთ იმაზე (see to it that...), რომ ქარიშხლის დაწყებამდე ყველა ფანჯარა დაიხუროს."],
        ["We owe it to future generations to protect the natural environment.", "მომავალი თაობების წინაშე ჩვენი ვალია (We owe it to...), დავიცვათ ბუნებრივი გარემო."],
        ["He put his tiredness down to the fact that he had travelled all night.", "მან თავისი დაღლილობა დააბრალა/მიაწერა იმ ფაქტს, რომ მთელი ღამე მგზავრობდა."],
        ["There appears to be a slight misunderstanding regarding the departure time.", "როგორც ჩანს, არის მცირე გაუგებრობა (There appears to be...) გასვლის დროსთან დაკავშირებით."],
        ["There is no denying that the new railway has boosted local tourism.", "უდავოა (There is no denying that...), რომ ახალმა რკინიგზამ ადგილობრივი ტურიზმი გააძლიერა."],
        ["There is no point in waiting any longer; the last bus has already left.", "აზრი აღარ აქვს (There is no point in waiting) მეტ ლოდინს; ბოლო ავტობუსი უკვე წავიდა."]
      ],
      mistakes: [
        ["✗ I would appreciate if you sent me the details.", "✓ I would appreciate it if you sent me the details. (appreciate-ს if-ის წინ აუცილებლად სჭირდება it!)"],
        ["✗ Never take for granted that health lasts forever.", "✓ Never take it for granted that health lasts forever. (take IT for granted that)"],
        ["✗ Please see to that the gate is locked.", "✓ Please see to it that the gate is locked. (see to IT that)"]
      ],
      drills: [
        "I would greatly appreciate ___ if you could let me know your decision by Friday.|it|this|that|—",
        "Please see to ___ that the laboratory equipment is switched off after use.|it|that|this|them",
        "Many people take ___ for granted that the weather in summer will be sunny.|it|this|that|—",
        "We owe ___ to ourselves to do the very best we can.|it|this|that|us",
        "There is no ___ how long the negotiations will last.|telling / knowing|tell|to tell|told",
        "I hate ___ when people talk loudly during a theatre performance.|it|this|that|—",
        "There ___ to have been a mistake in the address on the parcel.|appears / seems|is appear|appearing|appear",
        "There is no point ___ arguing with him; he never changes his mind.|in|to|for|at",
        "I'll leave ___ to you to decide which route we should take.|it|this|that|—",
        "There is no ___ the fact that the climate is changing.|denying / escaping|deny|to deny|denied",
        "She took ___ upon herself to organize the farewell party for the professor.|it|this|herself|that",
        "He ___ his success down to years of disciplined practice.|put|took|saw|owed",
        "I always find ___ difficult to sleep on a moving train.|it|this|that|—",
        "There is no ___ in crying over spilt milk.|use / point|useful|using|worth",
        "Can I leave ___ in your hands to welcome the foreign delegates?|it|this|that|them",
        "Rumour has ___ that the ancient castle will be turned into a museum.|it|this|that|there",
        "We must make ___ clear to everyone that safety comes first.|it|this|that|—",
        "There is ___ to be a large crowd at the harbour when the ship arrives.|bound / sure / likely|bind|binding|doubt",
        "I'd love ___ if you could visit us in the countryside this autumn.|it|this|that|—",
        "Legend has ___ that a golden crown is buried beneath the lake.|it|that|this|so"
      ]
    },
    {
      num: 90, level: "C2",
      title: "სინტაქსური პარალელიზმი და C2 სტილისტური სიზუსტე (Parallelism & Precision)",
      subtitle: "Balanced Correlative Structures, Parallel Syntax & Modifier Placement",
      rule: "C2 ოსტატობის დამამთავრებელი საფეხურია სინტაქსური პარალელიზმი (Parallel Structure): როდესაც წინადადებაში ჩამოვთვლით იდეებს ან ვიყენებთ წყვილად კავშირებს (not only... but also, both... and, either... or, neither... nor, prefer A to B, rather than), დაკავშირებული ნაწილები აუცილებლად ერთსა და იმავე გრამატიკულ ფორმაში უნდა იდგეს! მაგ.: თუ Not only-ს შემდეგ დგას წინდებული + არსებითი (Not only in spring), მაშინ but also-ს შემდეგაც უნდა იდგეს წინდებული + არსებითი (but also in autumn). თუ ჩამონათვალი იწყება გერუნდით (hiking, swimming), მესამე წევრიც გერუნდი უნდა იყოს (and cycling — და არა and to cycle!).",
      formulas: [
        ["+ ჩამონათვალის პარალელიზმი", "V-ing, V-ing, and V-ing | to V1, (to) V1, and (to) V1 | Adj, Adj, and Adj", "She enjoys hiking, swimming, and cycling."],
        ["- წყვილადი კავშირების ბალანსი", "Not only + [Form X], but also + [Form X] | Either + [Form X] or + [Form X]", "The speech was praised not only for its clarity, but also for its brevity."],
        ["? შედარების სიზუსტე (That of / Those of)", "The climate of Spain is warmer than THAT OF (მხოლ.) / The streets are wider than THOSE OF (მრავლ.)", "The population of Tokyo is larger than that of Rome."],
        ["💡 Rather than + Parallel Form", "He decided to walk rather than (to) wait / Walking rather than waiting...", "She prefers to write by hand rather than type."]
      ],
      examples: [
        ["The course teaches students how to analyze data, how to spot trends, and how to write clear reports.", "კურსი ასწავლის სტუდენტებს, როგორ გააანალიზონ მონაცემები, როგორ შეამჩნიონ ტენდენციები და როგორ დაწერონ მკაფიო ანგარიშები (სრული პარალელიზმი)."],
        ["The climate of Lisbon is much milder than that of Berlin.", "ლისაბონის კლიმატი გაცილებით უფრო რბილია, ვიდრე ბერლინის [კლიმატი] (than that of Berlin — და არა უბრალოდ than Berlin!)."],
        ["The ears of African elephants are much larger than those of Asian elephants.", "აფრიკული სპილოების ყურები გაცილებით უფრო დიდია, ვიდრე აზიური სპილოების [ყურები] (მრავლობითი ears -> those of)."],
        ["The novel is admired not only for its rich vocabulary, but also for its vivid characters.", "რომანით აღფრთოვანებულნი არიან არა მხოლოდ მისი მდიდარი ლექსიკის გამო (for...), არამედ მისი ცოცხალი პერსონაჟების გამოც (for...)."],
        ["Good leaders inspire their teams by setting an example rather than by giving orders.", "კარგი ლიდერები გუნდს შთააგონებენ მაგალითის მიცემით (by setting...) და არა ბრძანებების გაცემით (by giving...)."],
        ["To think critically is just as important as to communicate clearly.", "კრიტიკული აზროვნება (To think) ისეთივე მნიშვნელოვანია, როგორც მკაფიო კომუნიკაცია (to communicate)."],
        ["The museum aims both to preserve ancient artefacts and to educate the public.", "მუზეუმის მიზანია როგორც უძველესი არტეფაქტების შენარჩუნება (both to preserve), ისე საზოგადოების განათლება (and to educate)."],
        ["Whether travelling on foot, riding a horse, or sailing a boat, the explorer kept a detailed log.", "ფეხით მგზავრობდა, ცხენით მიდიოდა თუ ნავით მიცურავდა (travelling, riding, sailing), მკვლევარი დეტალურ ჩანაწერებს აწარმოებდა."]
      ],
      mistakes: [
        ["✗ The salary of a pilot is higher than a driver.", "✓ The salary of a pilot is higher than that of a driver. (ხელფასს ვადარებთ ხელფასს -> that of a driver, და არა თავად მძღოლს!)"],
        ["✗ He likes swimming, hiking, and to ride a bicycle.", "✓ He likes swimming, hiking, and riding a bicycle. (სამივე წევრი უნდა იყოს -ing ფორმაში)"],
        ["✗ She is not only talented in music, but also paints well.", "✓ She is talented not only in music, but also in painting / She not only plays music well, but also paints well."]
      ],
      drills: [
        "The surface area of the Pacific Ocean is much larger than ___ of the Atlantic.|that|those|this|it",
        "The wings of an albatross are much longer than ___ of a seagull. (wings = მრავლობითი!)|those|that|these|they",
        "She spends her weekends gardening, painting landscapes, and ___ historical novels.|reading|to read|reads|read",
        "The treaty was signed not only by the prime ministers, ___ by the monarchs.|but also by|and|but they also|as well",
        "The architect wanted the building to be modern, energy-efficient, and ___. (პარალელური ზედსართავი)|durable|durability|to last long|with strength",
        "The poems of Keats are very different in style from ___ of Byron. (poems = მრავლობითი!)|those|that|these|them",
        "He chose to repair the old clock himself rather than ___ a new one.|buy|buying to|bought|to buying",
        "A good dictionary tells you how a word is pronounced, what it means, and ___.|where it comes from|its origin|originating|from where",
        "The density of gold is much greater than ___ of silver. (density = მხოლობითი!)|that|those|this|it",
        "The course is designed both for complete beginners and ___ advanced learners.|for|to|with|by",
        "Success in this field requires patience, dedication, and ___. (პარალელური არსებითი)|perseverance|to persevere|persevering|patiently",
        "The streets of the new town are much wider than ___ of the medieval quarter.|those|that|these|they",
        "We can either walk along the coast or ___ the mountain path.|take|taking|to take|took",
        "The judge instructed the jury to weigh the evidence calmly, objectively, and ___. (პარალელური ზმნიზედა)|impartially|impartial|with impartiality|be impartial",
        "The speed of light is millions of times faster than ___ of sound.|that|those|this|it",
        "To forgive a mistake is often harder than ___ it.|to forget|forgetting|forget|forgotten",
        "The festival attracts visitors not only from neighbouring towns, ___ from abroad.|but also|and also|as well|but too",
        "The traditions of the mountain villages differ slightly from ___ of the coastal towns.|those|that|these|them",
        "He is a man of great wisdom, ___ integrity, and deep humility.|unwavering|who has unwavering|with unwaveringly|to be unwavering",
        "Learning a language involves listening attentively, practicing daily, and ___ from mistakes.|learning|to learn|learn|learned"
      ]
    }
  ];

  // გავაერთიანოთ C1 (15 თემა) და C2 (15 თემა) App.GrammarDataC-ში (სულ 30 თემა C დონეზე, ჯამში 90 თემა A1–C2!)
  App.GrammarDataC = (App.GrammarDataC1 || []).concat(App.GrammarDataC2);
})(window);