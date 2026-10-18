/**
 * GRAMMAR-B.JS — B1 (15 თემა: #31–#45) და B2 (15 თემა: #46–#60) = 30 თემა
 * თითოეულ თემაში: 8 ორენოვანი მაგალითი, 4 ფორმულა, 3 შეცდომის გარჩევა და 20 ტესტი (სულ 600 ტესტი).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.GrammarDataB = [
    // =========================================================================
    // B1 LEVEL — TOPICS 31 TO 45 (20 DRILLS EACH = 300 DRILLS)
    // =========================================================================
    {
      num: 31, level: "B1",
      title: "Present Perfect Simple — გამოცდილება და აწმყო შედეგი",
      subtitle: "Have / Has + Past Participle (just, already, yet, ever, never)",
      rule: "Present Perfect აკავშირებს წარსულ მოქმედებას აწმყოსთან. იგი გამოიყენება მაშინ, როცა მოქმედება წარსულში მოხდა, მაგრამ ზუსტი დრო არ სახელდება და მთავარია აწმყოში არსებული შედეგი ან ცხოვრებისეული გამოცდილება. იწარმოება have/has + ზმნის მე-3 ფორმით (V3). ხშირი ზმნიზედებია: just (ახლახან), already (უკვე), yet (ჯერ არა / უკვე?), ever (ოდესმე), never (არასდროს).",
      formulas: [
        ["+ დადებითი", "I/You/We/They have + V3 | He/She/It has + V3", "She has already finished her project."],
        ["- უარყოფითი", "Subject + haven't / hasn't + V3 (+ yet)", "We haven't received the letter yet."],
        ["? კითხვითი", "Have / Has + Subject + (ever) + V3...?", "Have you ever visited Lisbon?"],
        ["💡 Been to vs. Gone to", "have been to = იყო და დაბრუნდა | have gone to = წავიდა და ჯერ იქ არის", "Tom isn't here; he has gone to the shop."]
      ],
      examples: [
        ["I have lost my keys, so I cannot open the door.", "გასაღები დავკარგე, ამიტომ კარს ვერ ვაღებ (შედეგი სახეზეა)."],
        ["She has just made a fresh pot of coffee.", "მან ახლახან მოადუღა ახალი ყავა."],
        ["We have already seen this documentary twice.", "ეს დოკუმენტური ფილმი უკვე ორჯერ გვაქვს ნანახი."],
        ["Has the postman brought the mail yet?", "მოიტანა ფოსტალიონმა წერილები უკვე?"],
        ["They haven't decided where to spend their holidays yet.", "მათ ჯერ არ გადაუწყვეტიათ, სად გაატარონ არდადეგები."],
        ["Have you ever tried traditional Japanese food?", "გაგისინჯავთ ოდესმე ტრადიციული იაპონური საკვები?"],
        ["My brother has never travelled by boat.", "ჩემს ძმას ნავით არასდროს უმგზავრია."],
        ["Anna has been to Italy three times in her life.", "ანა თავის ცხოვრებაში სამჯერ არის ნამყოფი იტალიაში."]
      ],
      mistakes: [
        ["✗ I have seen that film yesterday.", "✓ I saw that film yesterday. (yesterday-სთან Present Perfect არ იხმარება)"],
        ["✗ She has went to the library.", "✓ She has gone to the library. (has-ის შემდეგ იწერება V3: gone)"],
        ["✗ Did you ever eaten sushi?", "✓ Have you ever eaten sushi? (გამოცდილებაზე კითხვისას ვიყენებთ Have/Has + V3)"]
      ],
      drills: [
        "Look! Somebody ___ milk on the kitchen floor.|has spilt|spilt|have spilt|is spilling",
        "I haven't read the morning newspaper ___.|yet|already|just|ever",
        "___ you ever climbed a high mountain?|Have|Did|Were|Are",
        "Sarah isn't at home; she has ___ to the supermarket.|gone|been|went|going",
        "We have ___ had lunch, so we aren't hungry.|already|yet|ever|still",
        "He has ___ flown in a helicopter before.|never|ever|yet|since",
        "Where have you ___? You are twenty minutes late!|been|gone|went|be",
        "The train has ___ left the platform.|just|yet|ever|ago",
        "___ your sister finished her university degree yet?|Has|Have|Did|Was",
        "I have ___ my umbrella; I can't find it anywhere.|lost|lose|loost|losing",
        "They ___ painted the living room, and it looks bright now.|have|did|are|were",
        "How many pages of the book ___ you read so far?|have|did|are|were",
        "My parents have ___ to Rome, and they brought back nice photos.|been|gone|went|go",
        "Has the rain stopped ___?|yet|already|just|never",
        "She has ___ three cups of tea this morning.|drunk|drank|drink|drinking",
        "We haven't met the new neighbour ___.|yet|already|just|ever",
        "___ anyone seen my blue notebook?|Has|Have|Did|Is",
        "He has ___ broken his arm before.|never|ever|yet|already",
        "I have ___ washed the dishes; they are still wet.|just|yet|ever|never",
        "Роმელია ზმნა „choose“ (არჩევა)-ს მე-3 ფორმა (V3)?|chosen|chose|choosed|choosing"
      ]
    },
    {
      num: 32, level: "B1",
      title: "Present Perfect თუ Past Simple? (დროის მარკერები)",
      subtitle: "Present Perfect vs. Past Simple (Unfinished vs. Finished Time)",
      rule: "მთავარი განსხვავება: თუ მოქმედების დრო უკვე დასრულდა და წარსულს ჩაბარდა (yesterday, last week, two days ago, in 2019, when I was a child), ვიყენებთ Past Simple-ს (V2). ხოლო თუ დროის პერიოდი ჯერ არ დასრულებულა (today, this week, this year, so far, recently) ან დრო საერთოდ არ არის მითითებული და მთავარია ფაქტი/შედეგი — ვიყენებთ Present Perfect-ს (have/has + V3).",
      formulas: [
        ["+ Past Simple (დასრულებული დრო)", "yesterday | last month | in 2020 | three hours ago | when...?", "I bought this watch two years ago."],
        ["- Present Perfect (მიმდინარე პერიოდი)", "today | this week | this year | so far | recently | lately", "I have written three emails this morning."],
        ["? For და Since", "for + დროის ხანგრძლივობა (for 5 years) | since + საწყისი წერტილი (since 2021)", "She has lived here since May."],
        ["💡 When...? vs. How long...?", "When did you arrive? (Past Simple) | How long have you been here? (Present Perfect)", "When-ით კითხვაში Present Perfect არასდროს იწერება!"]
      ],
      examples: [
        ["I have known David for ten years.", "დევიდს ათი წელია ვიცნობ (ახლაც ვიცნობ -> Present Perfect)."],
        ["We first met David ten years ago at school.", "დევიდს პირველად ათი წლის წინ სკოლაში შევხვდით (ago -> Past Simple)."],
        ["She has read four books this month.", "ამ თვეში მან ოთხი წიგნი წაიკითხა (თვე ჯერ გრძელდება)."],
        ["She read two books last month.", "გასულ თვეში მან ორი წიგნი წაიკითხა (გასული თვე დასრულდა)."],
        ["Mr Clark worked at a bank for twenty years, and then he retired.", "ბატონი კლარკი ოცი წელი ბანკში მუშაობდა, შემდეგ კი პენსიაზე გავიდა (აღარ მუშაობს -> Past Simple)."],
        ["Mrs Clark has worked at this hospital since 2018.", "ქალბატონი კლარკი 2018 წლიდან ამ საავადმყოფოში მუშაობს (ახლაც იქ მუშაობს)."],
        ["When did Shakespeare write Hamlet?", "როდის დაწერა შექსპირმა „ჰამლეტი“?"],
        ["It hasn't rained much this summer.", "ამ ზაფხულს ბევრი არ უწვიმია."]
      ],
      mistakes: [
        ["✗ I have bought a new coat last Saturday.", "✓ I bought a new coat last Saturday. (last Saturday-სთან იწერება Past Simple)"],
        ["✗ When have you graduated from school?", "✓ When did you graduate from school? (When-ის შემდეგ იწერება did)"],
        ["✗ We live in this house since 2015.", "✓ We have lived in this house since 2015. (since-თან ვიყენებთ Present Perfect-ს)"]
      ],
      drills: [
        "Alexander Fleming ___ penicillin in 1928.|discovered|has discovered|discovers|was discovering",
        "I ___ my aunt since last Christmas.|haven't seen|didn't see|don't see|wasn't seeing",
        "When ___ the new bridge open?|did|has|was|have",
        "We ___ three tests so far this semester.|have had|had|did have|are having",
        "My grandmother ___ in that village for sixty years before moving to town.|lived|has lived|lives|is living",
        "How long ___ you known your best friend?|have|did|do|are",
        "Tom ___ his leg yesterday while playing football.|injured|has injured|injures|was injure",
        "She has been a teacher ___ fifteen years.|for|since|ago|during",
        "I haven't eaten anything ___ breakfast.|since|for|from|ago",
        "Where ___ you go for your holiday last August?|did|have|were|had",
        "The weather ___ very cold recently.|has been|was|is being|did be",
        "Leonardo da Vinci ___ the Mona Lisa.|painted|has painted|paints|was painting",
        "___ you seen Sarah today?|Have|Did|Were|Do",
        "I ___ my keys this morning, but I found them an hour later.|lost|have lost|lose|am losing",
        "They ___ married ten years ago.|got|have got|have gotten|get",
        "They ___ been married for ten years now.|have|are|did|were",
        "How many cups of coffee ___ you drunk today?|have|did|do|were",
        "What time ___ you go to bed last night?|did|have|were|had",
        "Our team hasn't lost a single match ___ the season started.|since|for|ago|when",
        "He ___ his bicycle when he was six years old.|got|has got|gets|getting"
      ]
    },
    {
      num: 33, level: "B1",
      title: "Present Perfect Continuous — ხანგრძლივი პროცესი (Have been + V-ing)",
      subtitle: "Present Perfect Continuous vs. Present Perfect Simple",
      rule: "Present Perfect Continuous (have/has been + V-ing) გამოიყენება მოქმედებისთვის, რომელიც წარსულში დაიწყო და ახლაც გრძელდება (How long have you been waiting?), ან ახლახან შეწყდა და მისი ფიზიკური კვალი სახეზეა (Your clothes are wet — have you been walking in the rain?). გაითვალისწინეთ: ხანგრძლივობასა და პროცესზე აქცენტისას ვიყენებთ Continuous-ს (How long...?), ხოლო რაოდენობასა და დასრულებულ შედეგზე — Simple-ს (How many...?).",
      formulas: [
        ["+ დადებითი", "Subject + have / has been + V-ing", "It has been raining for three hours."],
        ["- უარყოფითი", "Subject + haven't / hasn't been + V-ing", "I haven't been sleeping well lately."],
        ["? კითხვითი", "How long + have / has + Subject + been + V-ing?", "How long have you been learning English?"],
        ["💡 პროცესი vs. რაოდენობა", "I have been reading all day (პროცესი) vs. I have read 100 pages (რაოდენობა)", "Stative ზმნებთან (know, have, belong) ვიყენებთ მხოლოდ Simple-ს!"]
      ],
      examples: [
        ["I have been waiting for the bus for twenty minutes.", "ოცი წუთია ავტობუსს ველოდები (და ახლაც ვდგავარ)."],
        ["Why are your hands dirty? — I have been repairing my bicycle.", "რატომ გაქვს ხელები დასვრილი? — ველოსიპედს ვაკეთებდი (ახლახან მოვრჩი, კვალი ჩანს)."],
        ["She has been playing the piano since she was seven.", "ის შვიდი წლის ასაკიდან ფორტეპიანოზე უკრავს."],
        ["How long has it been snowing?", "რამდენი ხანია, რაც თოვს?"],
        ["He has been writing letters all morning. He has written five letters so far.", "მთელი დილაა წერილებს წერს (პროცესი). აქამდე ხუთი წერილი დაწერა (რაოდენობა)."],
        ["You look exhausted! Have you been running?", "ძალიან დაღლილი ჩანხარ! დარბოდი?"],
        ["They have been discutirng the plan for two hours.", "ისინი ორი საათია გეგმას განიხილავენ."],
        ["I have known her for years. (know არ იღებს -ing-ს!)", "მას წლებია ვიცნობ."]
      ],
      mistakes: [
        ["✗ I have been knowing him for five years.", "✓ I have known him for five years. (know არის Stative ზმნა)"],
        ["✗ She has been writing three reports today.", "✓ She has written three reports today. (ზუსტ რაოდენობასთან იწერება Simple)"],
        ["✗ We are waiting here since two o'clock.", "✓ We have been waiting here since two o'clock. (since-თან აწმყო დრო არ იწერება)"]
      ],
      drills: [
        "Look at the ground! It is wet. It ___ raining.|has been|is|was|had",
        "How long ___ you been waiting for the doctor?|have|are|did|were",
        "She has ___ ten pages of her essay so far.|written|been writing|wrote|writing",
        "I ___ this car for four years now. (belong / have)|have had|have been having|am having|had",
        "His eyes are red because he ___ reading in dim light all evening.|has been|has|is|was",
        "They ___ living in this street since 2021.|have been|are|were|did",
        "How many chapters ___ you read this week?|have|have been|did|are",
        "My sister ___ cooking all afternoon for the guests.|has been|has|is|was",
        "We ___ each other since primary school.|have known|have been knowing|know|knew",
        "Why are you out of breath? — I ___ running to catch the train.|have been|am|was|had",
        "He has ___ three matches this month.|won|been winning|win|wins",
        "The children ___ watching cartoons for two hours; turn off the TV.|have been|are|were|had",
        "How long ___ Sarah been working at the museum?|has|have|is|does",
        "I haven't ___ feeling very well over the last few days.|been|be|being|was",
        "Somebody ___ eaten all the biscuits; the box is empty!|has|has been|is|was",
        "Somebody ___ eating my biscuits; there are only two left.|has been|has|is|was",
        "It ___ snowing non-stop since midnight.|has been|is|was|snows",
        "How many times ___ you visited that gallery?|have|have been|did|are",
        "They have been ___ tennis since ten o'clock.|playing|played|play|plays",
        "This old watch ___ to my family for generations.|has belonged|has been belonging|belongs|is belonging"
      ]
    },
    {
      num: 34, level: "B1",
      title: "Past Perfect Simple — წინარე წარსული დრო (Had + V3)",
      subtitle: "Actions Completed Before Another Past Action",
      rule: "Past Perfect (had + V3) არის „წარსულის წარსული“. როდესაც წარსულში ორი მოქმედება მოხდა სხვადასხვა დროს, უფრო ადრე მომხდარ მოქმედებას გამოვხატავთ Past Perfect-ით (had + V3), ხოლო მომდევნო მოქმედებას — Past Simple-ით (V2). ხშირი კავშირებია: by the time, before, after, when, already, just, because.",
      formulas: [
        ["+ დადებითი", "Subject + had ('d) + V3", "When we arrived at the station, the train had already left."],
        ["- უარყოფითი", "Subject + had not (hadn't) + V3", "I didn't recognize him because I hadn't seen him for years."],
        ["? კითხვითი", "Had + Subject + V3...?", "Had the film started by the time you got to the cinema?"],
        ["💡 After vs. Before", "After + had V3, Past Simple | Past Simple + before + Past Simple / had V3", "After she had finished her work, she went home."]
      ],
      examples: [
        ["By the time we reached the theatre, the play had already begun.", "როდესაც თეატრში მივედით, სპექტაკლი უკვე დაწყებული იყო."],
        ["She was hungry because she hadn't eaten breakfast.", "მას შიოდა, რადგან საუზმე არ ჰქონდა ნაჭამი."],
        ["I realized that I had left my umbrella on the bus.", "გავაცნობიერე, რომ ქოლგა ავტობუსში დამრჩენოდა."],
        ["The streets were wet because it had rained during the night.", "ქუჩები სველი იყო, რადგან ღამის განმავლობაში ეწვიმა."],
        ["After the guests had left, we cleaned the living room.", "მას შემდეგ, რაც სტუმრები წავიდნენ, მისაღები ოთახი დავალაგეთ."],
        ["He had never flown in an airplane before his trip to Spain.", "ესპანეთში გამგზავრებამდე მას თვითმფრინავით არასდროს ეფრინა."],
        ["Had you studied any Italian before you moved to Milan?", "გქონდათ ნასწავლი იტალიური მილანში გადასვლამდე?"],
        ["The plants died because nobody had watered them.", "მცენარეები გახმა, რადგან ისინი არავის მოერწყა."]
      ],
      mistakes: [
        ["✗ When we arrived at the cinema, the movie already started.", "✓ When we arrived at the cinema, the movie had already started."],
        ["✗ I had seen him yesterday.", "✓ I saw him yesterday. (ერთ ცალკეულ წარსულ ფაქტთან Past Perfect არ იხმარება)"],
        ["✗ After he finished dinner, he had gone for a walk.", "✓ After he had finished dinner, he went for a walk. (ჯერ ივახშმა -> had finished, მერე გავიდა -> went)"]
      ],
      drills: [
        "By the time the firemen arrived, the neighbours ___ the fire.|had put out|put out|have put out|were putting out",
        "She didn't want to go to the cinema because she ___ the film twice.|had already seen|already saw|has already seen|sees",
        "When I got home, I discovered that someone ___ into the garage.|had broken|broke|has broken|breaks",
        "After the students ___ the test, the teacher collected the papers.|had completed|completed|have completed|complete",
        "He failed the exam because he ___ hard enough.|hadn't studied|didn't study|hasn't studied|doesn't study",
        "___ the rain stopped by the time you left the office?|Had|Did|Has|Was",
        "I couldn't pay for the coffee because I ___ my wallet at home.|had left|left|have left|leave",
        "The house was very quiet when I arrived; everybody ___ to bed.|had gone|went|has gone|was going",
        "It was the first time she ___ ever ridden a horse.|had|has|was|did",
        "We weren't hungry at 8 PM because we ___ a big lunch.|had had|had|have had|were having",
        "By the age of twenty, Mozart ___ dozens of symphonies.|had composed|composed|has composed|composes",
        "When I turned on the radio, the news ___ already finished.|had|has|was|did",
        "She didn't recognize her hometown because it ___ so much.|had changed|changed|has changed|changes",
        "Before he moved to London, he ___ in a small coastal town.|had lived|has lived|lives|living",
        "The waiter brought a dish that I ___ ordered.|hadn't|didn't|haven't|wasn't",
        "As soon as the sun ___, the temperature dropped sharply.|had set|has set|sets|setting",
        "Why was she so upset? What ___ happened?|had|has|did|was",
        "I returned the book to the library after I ___ reading it.|had finished|finished|have finished|finish",
        "They ___ never seen snow before they visited the Alps.|had|have|did|were",
        "By the time the ambulance arrived, the injured cyclist ___ consciousness.|had regained|regained|has regained|regains"
      ]
    },
    {
      num: 35, level: "B1",
      title: "მომავალი მიმდინარე და მომავალი სრული დრო (Future Continuous & Future Perfect)",
      subtitle: "Will be + V-ing vs. Will have + V3",
      rule: "1) Future Continuous (will be + V-ing) აღწერს მოქმედებას, რომელიც მომავლის კონკრეტულ მომენტში პროცესში იქნება (At 10 AM tomorrow, I will be flying to Rome). 2) Future Perfect (will have + V3) აღწერს მოქმედებას, რომელიც მომავლის რომელიმე კონკრეტული დროისთვის უკვე დასრულებული იქნება (By Friday, I will have finished the report). მთავარი მარკერია By + დრო (by tomorrow, by 2030, by the time).",
      formulas: [
        ["+ Future Continuous", "Subject + will be + V-ing (ამ დროს ხვალ პროცესში ვიქნები)", "This time next week, we will be lying on the beach."],
        ["- Future Perfect", "Subject + will have + V3 (კონკრეტული დროისთვის დასრულებული იქნება)", "By 6 PM, she will have cooked dinner."],
        ["? კითხვითი", "Will you be using the car tomorrow? / Will they have arrived by noon?", "Will you be passing the post office?"],
        ["💡 დროის მარკერები", "Continuous: This time tomorrow, at 5 PM tomorrow | Perfect: By Monday, in two years' time", "By the time you wake up, I will have left."]
      ],
      examples: [
        ["Don't phone me between 7 and 8 tonight; I will be having dinner.", "ამაღამ 7-დან 8-მდე ნუ დამირეკავ; ამ დროს ვვახშმობ (პროცესში ვიქნები)."],
        ["By the end of this month, I will have saved enough money for a laptop.", "ამ თვის ბოლოსთვის ლეპტოპისთვის საკმარისი თანხა მექნება დაგროვილი."],
        ["This time tomorrow, Sarah will be sitting on a train to Paris.", "ხვალ ზუსტად ამ დროს სარა პარიზის მატარებელში იჯდება."],
        ["The builders will have completed the roof by Friday.", "მშენებლებს პარასკევისთვის სახურავი დასრულებული ექნებათ."],
        ["Will you be using your bicycle this evening?", "გამოიყენებ შენს ველოსიპედს დღეს საღამოს?"],
        ["By the time we get to the stadium, the match will have started.", "სანამ სტადიონზე მივალთ, მატჩი უკვე დაწყებული იქნება."],
        ["At three o'clock tomorrow afternoon, I will be taking my driving test.", "ხვალ დღის სამ საათზე მართვის მოწმობის გამოცდაზე ვიქნები."],
        ["In five years' time, the trees will have grown much taller.", "ხუთ წელიწადში ხეები გაცილებით მაღალი იქნება გაზრდილი."]
      ],
      mistakes: [
        ["✗ By next June, I will graduate from university.", "✓ By next June, I will have graduated from university. (By + დრო ითხოვს Future Perfect-ს)"],
        ["✗ At 9 PM tonight, I will watch the film.", "✓ At 9 PM tonight, I will be watching the film. (9 საათზე პროცესში ვიქნები)"],
        ["✗ By the time he will arrive, we will have left.", "✓ By the time he arrives, we will have left. (By the time-ის შემდეგ იწერება Present Simple!)"]
      ],
      drills: [
        "This time next Sunday, we ___ over the Atlantic Ocean.|will be flying|will have flown|fly|are flying",
        "By the end of the year, they ___ built the new hospital.|will have|will be|are|have",
        "Don't call her at 10 AM tomorrow; she ___ a lecture.|will be giving|will have given|gives|gave",
        "By the time you get home, I ___ cleaned the whole house.|will have|will be|am|have",
        "At eight o'clock tomorrow morning, I ___ driving to work.|will be|will have|am|was",
        "___ the mechanic have repaired the car by tomorrow evening?|Will|Is|Does|Has",
        "In ten years' time, many people ___ driving electric cars.|will be|will have|are|were",
        "By 2030, scientists ___ discovered new sources of clean energy.|will have|will be|are|have",
        "We are late! The film ___ already started by the time we reach the cinema.|will have|will be|is|has",
        "What ___ you be doing at this time tomorrow?|will|are|do|have",
        "By next month, my sister ___ worked at this school for ten years.|will have|will be|has|is",
        "I can't meet you at 4 PM because I ___ attending a seminar.|will be|will have|am|was",
        "___ you have finished your report before the five o'clock deadline?|Will|Are|Do|Have",
        "Tomorrow afternoon at three, the team ___ training on the main pitch.|will be|will have|is|was",
        "By the time the guests arrive, my mother ___ baked the cake.|will have|will be|has|is",
        "Wait until seven o'clock; the rain ___ stopped by then.|will have|will be|is|has",
        "Will you ___ passing the pharmacy on your way home?|be|have|are|do",
        "By the end of this course, you ___ learned over three thousand words.|will have|will be|have|are",
        "At midnight on New Year's Eve, people ___ celebrating in the streets.|will be|will have|are|were",
        "By the time he ___ thirty, he will have visited twenty countries.|turns|will turn|turned|is turning"
      ]
    },
    {
      num: 36, level: "B1",
      title: "ნულოვანი და პირველი პირობითი წინადადებები + დროის კავშირები",
      subtitle: "Zero & First Conditionals (if, when, unless, as soon as, until)",
      rule: "1) Zero Conditional (If/When + Present Simple, Present Simple) გამოხატავს ბუნების კანონებსა და 100%-ით ჭეშმარიტ ფაქტებს. 2) First Conditional (If + Present Simple, will + V1) გამოხატავს რეალურ, შესაძლებელ მომავალ პირობას. უმნიშვნელოვანესი წესი: კავშირების if, when, unless (= if not), as soon as, before, after, until შემდეგ მომავალი დრო (will) არ იწერება — იწერება მხოლოდ Present Simple!",
      formulas: [
        ["+ Zero Conditional (კანონზომიერება)", "If / When + Present Simple, Present Simple", "If you heat ice, it melts."],
        ["- First Conditional (რეალური მომავალი)", "If + Present Simple, Subject + will (won't) + V1", "If it rains tomorrow, we will stay indoors."],
        ["? Unless (= If ... not)", "Unless + დადებითი Present Simple, will + V1", "You will miss the bus unless you hurry."],
        ["💡 დროის კავშირები (Time Clauses)", "when | as soon as | until | before | after + Present Simple!", "I will call you as soon as I arrive."]
      ],
      examples: [
        ["If you mix red and yellow, you get orange.", "თუ წითელსა და ყვითელს შეურევთ, მიიღებთ ნარინჯისფერს (Zero)."],
        ["If the weather is nice this weekend, we will go hiking.", "თუ ამ უქმეებზე კარგი ამინდი იქნება, ლაშქრობაში წავალთ (First)."],
        ["She won't pass the driving test unless she practices more.", "ის მართვის გამოცდას ვერ ჩააბარებს, თუ მეტს არ ივარჯიშებს."],
        ["I will send you a message as soon as the plane lands.", "მოგწერ შეტყობინებას მაშინვე, როგორც კი თვითმფრინავი დაჯდება."],
        ["We will wait here until the rain stops.", "აქ დავიცდით, სანამ წვიმა არ გადაიღებს."],
        ["If you don't water plants, they die.", "თუ მცენარეებს არ მორწყავთ, ისინი ხმება."],
        ["What will you do if the train is delayed?", "რას იზამ, თუ მატარებელი დააგვიანებს?"],
        ["Turn off the lights before you leave the room.", "ჩააქრეთ შუქი, სანამ ოთახიდან გახვალთ."]
      ],
      mistakes: [
        ["✗ If it will be sunny tomorrow, we will go to the park.", "✓ If it is sunny tomorrow, we will go to the park. (If-ის შემდეგ will არ იწერება)"],
        ["✗ I will wait until you will finish.", "✓ I will wait until you finish. (until + Present Simple)"],
        ["✗ Unless you don't study, you will fail.", "✓ Unless you study, you will fail. (Unless უკვე შეიცავს უარყოფას)"]
      ],
      drills: [
        "If we ___ hurry, we will miss the beginning of the concert.|don't|won't|didn't|aren't",
        "I will phone you as soon as I ___ my exam results.|get|will get|got|getting",
        "Plants die if they ___ get enough sunlight.|don't|won't|didn't|aren't",
        "We won't go to the beach tomorrow ___ the weather improves.|unless|if|when|as soon as",
        "What ___ you do if the shop is closed?|will|do|did|are",
        "Please wait in the hall until the doctor ___ your name.|calls|will call|called|calling",
        "If Sarah ___ enough money, she will buy a new bicycle next month.|saves|will save|saved|saving",
        "When water reaches 100 degrees Celsius, it ___.|boils|will boil|boiled|is boiling",
        "You won't find a seat ___ you arrive early.|unless|if|when|as",
        "Before you ___ the contract, read every page carefully.|sign|will sign|signed|signing",
        "If you ___ too much coffee in the evening, you won't sleep well.|drink|will drink|drank|drinking",
        "He will be very pleased if you ___ him to the party.|invite|will invite|invited|inviting",
        "As soon as the traffic light ___ green, we will move.|turns|will turn|turned|turning",
        "Unless he ___ for his mistake, she won't forgive him.|apologizes|doesn't apologize|will apologize|apologized",
        "If I see Tom today, I ___ give him your message.|will|would|do|am",
        "When the sun goes down, it ___ cold in the desert.|gets|will get|got|getting",
        "I won't lend you my camera if you ___ careful with it.|aren't|won't be|don't|weren't",
        "After she ___ from university, she will look for a job.|graduates|will graduate|graduated|graduating",
        "If the museum ___ crowded, we can visit the park instead.|is|will be|was|be",
        "You will feel much better after you ___ a short rest.|take|will take|took|taking"
      ]
    },
    {
      num: 37, level: "B1",
      title: "მეორე პირობითი წინადადება (Second Conditional — ჰიპოთეტური აწმყო/მომავალი)",
      subtitle: "If + Past Simple, Would + V1 (Imaginary Situations & Advice)",
      rule: "Second Conditional გამოიყენება წარმოსახვითი, არარეალური ან ნაკლებად სავარაუდო აწმყო და მომავალი სიტუაციების აღსაწერად (მაგ.: „მილიონი რომ მქონდეს, კუნძულს ვიყიდდი“, „შენს ადგილას რომ ვიყო...“). If-ნაწილში იწერება Past Simple (V2), ხოლო მთავარ ნაწილში — would / could + საწყისი ზმნა (V1). ზმნა To Be-სთვის ყველა პირთან (მათ შორის I/he/she/it-თან) უპირატესობა ენიჭება ფორმას were (If I were you...).",
      formulas: [
        ["+ სტრუქტურა", "If + Subject + Past Simple (V2), Subject + would ('d) + V1", "If I had more free time, I would learn Italian."],
        ["- უარყოფითი", "If + didn't V1 / weren't, Subject + wouldn't + V1", "If it weren't raining, we would go for a walk."],
        ["? კითხვითი", "What would you do if + Past Simple...?", "Where would you live if you could choose any country?"],
        ["💡 რჩევის მიცემა", "If I were you, I would... (შენს ადგილას რომ ვიყო...)", "If I were you, I would see a doctor."]
      ],
      examples: [
        ["If I had a garden, I would grow roses and tomatoes.", "ბაღი რომ მქონდეს (ახლა არ მაქვს), ვარდებსა და პომიდვრებს მოვიყვანდი."],
        ["If I were you, I would accept that job offer.", "შენს ადგილას რომ ვიყო, იმ სამსახურის შეთავაზებას დავთანხმდებოდი."],
        ["If we lived closer to the sea, we would go swimming every day.", "ზღვასთან უფრო ახლოს რომ ვცხოვრობდეთ, ყოველდღე ვიცურავებდით."],
        ["What would you do if you found a wallet in the street?", "რას იზამდი, ქუჩაში საფულე რომ გეპოვა?"],
        ["She would travel around the world if she had enough money.", "ის მსოფლიოს გარშემო იმოგზაურებდა, საკმარისი ფული რომ ჰქონდეს."],
        ["If people drove more carefully, there would be fewer accidents.", "ადამიანები რომ უფრო ფრთხილად მართავდნენ მანქანას, ნაკლები ავარია იქნებოდა."],
        ["He wouldn't be so tired if he went to bed earlier.", "ის ასეთი დაღლილი არ იქნებოდა, უფრო ადრე რომ იძინებდეს."],
        ["If I knew her phone number, I could call her right now.", "მისი ტელეფონის ნომერი რომ ვიცოდე, ახლავე დავურეკავდი."]
      ],
      mistakes: [
        ["✗ If I would have time, I would help you.", "✓ If I had time, I would help you. (If-ნაწილში would არასდროს იწერება!)"],
        ["✗ If I have wings, I would fly.", "✓ If I had wings, I would fly. (არარეალურ პირობაში იწერება Past Simple: had)"],
        ["✗ What will you do if you won the lottery?", "✓ What would you do if you won the lottery? (won-თან მთავარ ნაწილში იწერება would)"]
      ],
      drills: [
        "If I ___ you, I would apologize to her immediately.|were|am|will be|have been",
        "If we ___ a bigger house, we would invite all our friends to stay.|had|have|would have|will have",
        "What ___ you do if you saw a bear in the forest?|would|will|did|do",
        "She would get better grades if she ___ harder.|studied|studies|would study|will study",
        "If I ___ his address, I would send him a postcard.|knew|know|would know|known",
        "He wouldn't make so many mistakes if he ___ more careful.|were|is|will be|would be",
        "If there ___ no mosquitoes, camping would be much more pleasant.|were|are|will be|would be",
        "Where would you travel if you ___ a month of free time?|had|have|will have|would have",
        "If I ___ speak Japanese, I would move to Kyoto for a year.|could|can|will|would can",
        "They wouldn't buy that car even if they ___ afford it.|could|can|will|did",
        "If it ___ snowing right now, we would go to the park.|weren't|isn't|won't be|wouldn't be",
        "Would you be angry if I ___ your dictionary without asking?|borrowed|borrow|will borrow|would borrow",
        "If dogs ___ talk, they would tell us funny stories.|could|can|will|would",
        "I ___ buy that coat if I were you; it's too expensive.|wouldn't|won't|don't|didn't",
        "If she ___ work so late every evening, she would have time for hobbies.|didn't|doesn't|wouldn't|won't",
        "The city air would be cleaner if more people ___ bicycles.|rode|ride|will ride|would ride",
        "If you ___ have to work tomorrow, what would you do?|didn't|don't|won't|wouldn't",
        "He ___ help us if he knew how to fix the engine.|would|will|can|did",
        "If everyone ___ the rules, traffic would move smoothly.|followed|follows|will follow|would follow",
        "I would bake a cake if we ___ some flour and eggs at home.|had|have|will have|would have"
      ]
    },
    {
      num: 38, level: "B1",
      title: "ვნებითი გვარი — Present & Past Simple Passive",
      subtitle: "Passive Voice in Present and Past (am/is/are/was/were + V3)",
      rule: "ვნებითი გვარი (Passive Voice) გამოიყენება მაშინ, როცა ჩვენთვის მთავარია თავად მოქმედება და ობიექტი, ან როცა მოქმედების შემსრულებელი უცნობია/უმნიშვნელოა. იწარმოება დამხმარე ზმნა To Be-ს შესაბამისი დროის ფორმით + მთავარი ზმნის მე-3 ფორმა (V3 / Past Participle). თუ გვსურს მივუთითოთ, ვინ შეასრულა მოქმედება, ვიყენებთ წინდებულს „by“ (by the architect).",
      formulas: [
        ["+ Present Simple Passive", "Object + am / is / are + V3", "Coffee is grown in Brazil. / The rooms are cleaned daily."],
        ["- Past Simple Passive", "Object + was / were + V3", "This bridge was built in 1895. / The letters were sent yesterday."],
        ["? კითხვითი", "Is / Are / Was / Were + Object + V3...?", "When was the telephone invented?"],
        ["💡 By + შემსრულებელი", "...was written by Shakespeare | ...was painted by Picasso", "ხელსაწყოსთან ვიყენებთ with-ს: The bread was cut with a sharp knife."]
      ],
      examples: [
        ["Cheese is made from milk.", "ყველი მზადდება რძისგან (Present Passive)."],
        ["Thousands of cars are produced in this factory every year.", "ამ ქარხანაში ყოველწლიურად ათასობით მანქანა იწარმოება."],
        ["The Eiffel Tower was designed by Gustave Eiffel.", "ეიფელის კოშკი დააპროექტა გუსტავ ეიფელმა (Past Passive)."],
        ["Two hundred people were invited to the wedding.", "ქორწილში ორასი ადამიანი იყო მიწვეული."],
        ["English is spoken all over the world.", "ინგლისურად მთელ მსოფლიოში საუბრობენ."],
        ["The window wasn't broken by the children; the wind blew it open.", "ფანჯარა ბავშვების მიერ არ გატეხილა; ქარმა შემოაღო."],
        ["Were these photographs taken during your trip to Norway?", "ეს ფოტოები ნორვეგიაში მოგზაურობისას არის გადაღებული?"],
        ["The museum is visited by millions of tourists every summer.", "მუზეუმს ყოველ ზაფხულს მილიონობით ტურისტი სტუმრობს."]
      ],
      mistakes: [
        ["✗ This castle built three hundred years ago.", "✓ This castle was built three hundred years ago. (was აუცილებელია)"],
        ["✗ The letter was wrote by my grandmother.", "✓ The letter was written by my grandmother. (საჭიროა მე-3 ფორმა V3: written)"],
        ["✗ The thieves were caught from the police.", "✓ The thieves were caught by the police. (შემსრულებელთან იწერება by)"]
      ],
      drills: [
        "The telephone ___ invented by Alexander Graham Bell in 1876.|was|is|were|has",
        "All the hotel rooms ___ cleaned every morning.|are|is|were|was",
        "Роმეო და ჯულიეტა Written ___ William Shakespeare.|by|from|with|of",
        "The stolen painting ___ found by the police yesterday.|was|were|is|did",
        "How many languages ___ spoken in Switzerland?|are|is|was|do",
        "These shoes ___ made of genuine leather.|are|is|was|have",
        "When ___ America discovered by Columbus?|was|were|did|is",
        "The parcel ___ delivered this morning because nobody was at home.|wasn't|weren't|didn't|isn't",
        "Olives ___ grown in Mediterranean countries.|are|is|was|have",
        "Two windows ___ broken during last night's storm.|were|was|are|did",
        "Is breakfast ___ in the price of the room?|included|include|includes|including",
        "The cake was decorated ___ fresh strawberries. (ინგრედიენტი/საშუალება)|with|by|from|in",
        "We ___ woken up by a loud noise at midnight.|were|was|are|did",
        "Where ___ these watches manufactured?|are|is|do|have",
        "The first airplane ___ flown by the Wright brothers in 1903.|was|were|is|had",
        "Credit cards ___ accepted in this small bakery.|aren't|isn't|don't|weren't",
        "Why ___ the flight cancelled yesterday?|was|were|did|is",
        "Glass ___ made from sand.|is|are|was|were",
        "The winners ___ announced at the end of the ceremony last night.|were|was|are|did",
        "This song ___ sung by millions of people every year.|is|are|was|sing"
      ]
    },
    {
      num: 39, level: "B1",
      title: "ირიბი თქმა — Reported Speech (თხრობითი წინადადებები და ბრძანებები)",
      subtitle: "Reported Statements & Imperatives (Backshift of Tenses)",
      rule: "როდესაც სხვის ნათქვამს გადმოვცემთ წარსული ზმნით (He said that... / She told me that...), წინადადებაში დროები ერთი საფეხურით უკან იწევს (Backshift): Present Simple -> Past Simple; Present Continuous -> Past Continuous; Past Simple / Present Perfect -> Past Perfect (had + V3); will -> would; can -> could. ბრძანებისა და თხოვნის გადაცემისას ვიყენებთ: told / asked someone + (not) to V1.",
      formulas: [
        ["+ დროების ცვლილება I", "am/is -> was | work -> worked | is working -> was working", "\"I am tired\" -> He said (that) he was tired."],
        ["- დროების ცვლილება II", "worked / have worked -> had worked | will -> would | can -> could", "\"I will call\" -> She said she would call."],
        ["? Say vs. Tell", "say (that)... / say to someone | tell + პირი (me/him/her) + (that)...", "He told me that he was busy. (არა: He said me!)"],
        ["💡 ბრძანება ირიბ თქმაში", "told / asked + someone + to V1 | უარყოფა: not to V1", "\"Don't be late!\" -> She told me not to be late."]
      ],
      examples: [
        ["Anna said that she wanted to buy a new dictionary.", "ანამ თქვა, რომ ახალი ლექსიკონის ყიდვა უნდოდა (want -> wanted)."],
        ["Tom told me that he was waiting for the bus.", "ტომმა მითხრა, რომ ავტობუსს ელოდებოდა (am waiting -> was waiting)."],
        ["They said that they had already seen the exhibition.", "მათ თქვეს, რომ გამოფენა უკვე ნანახი ჰქონდათ (have seen -> had seen)."],
        ["She promised that she would help us the next day.", "ის დაგვპირდა, რომ მეორე დღეს დაგვეხმარებოდა (will -> would, tomorrow -> the next day)."],
        ["He said that he couldn't swim very well.", "მან თქვა, რომ კარგად ცურვა არ შეეძლო (can't -> couldn't)."],
        ["The doctor told me to drink plenty of water.", "ექიმმა მითხრა, რომ ბევრი წყალი დამელია."],
        ["The teacher asked the students not to make noise.", "მასწავლებელმა სთხოვა სტუდენტებს, არ ეხმაურათ (not to make)."],
        ["She said that she had bought the dress the day before.", "მან თქვა, რომ კაბა წინა დღეს იყიდა (yesterday -> the day before)."]
      ],
      mistakes: [
        ["✗ He said me that he was ready.", "✓ He told me / He said to me that he was ready. (say-ს პირდაპირი ობიექტი to-ს გარეშე არ მოსდევს)"],
        ["✗ She told me don't touch the oven.", "✓ She told me not to touch the oven. (ბრძანების უარყოფა ირიბ თქმაშია not to V1)"],
        ["✗ They said that they will arrive soon.", "✓ They said that they would arrive soon. (said-ის შემდეგ will გადადის would-ში)"]
      ],
      drills: [
        "\"I am very busy.\" -> He said that he ___ very busy.|was|is|were|has been",
        "Sarah ___ me that she had passed her driving test.|told|said|spoke|talked",
        "\"We will call you tomorrow.\" -> They said they ___ call us the next day.|would|will|can|shall",
        "\"Don't forget your keys!\" -> My mother told me ___ forget my keys.|not to|don't|to not|not",
        "\"I can't find my glasses.\" -> She said that she ___ find her glasses.|couldn't|can't|won't|didn't",
        "He ___ that he had never been to Scotland before.|said|told|asked|spoke",
        "\"Please open the window.\" -> She asked me ___ the window.|to open|open|opening|opened",
        "\"I have finished my homework.\" -> Tom said that he ___ his homework.|had finished|has finished|finished|finishes",
        "ირიბ თქმაში სიტყვა „yesterday“ იცვლება ფრაზით:|the day before|the next day|that day|tomorrow",
        "\"We are watching a movie.\" -> They told us they ___ a movie.|were watching|are watching|watched|have watched",
        "The policeman told the driver ___ park on the pavement.|not to|don't to|to don't|not",
        "\"I bought a new bike.\" -> David said that he ___ a new bike.|had bought|has bought|buys|will buy",
        "She said ___ me that the shop was closed.|to|—|at|for",
        "ირიბ თქმაში სიტყვა „tomorrow“ იცვლება ფრაზით:|the next day / the following day|the day before|yesterday|last week",
        "\"Wait for me outside!\" -> He told us ___ for him outside.|to wait|wait|waiting|waited",
        "Mary told her brother that she ___ going to the library.|was|is|were|be",
        "\"I don't like coffee.\" -> He said that he ___ like coffee.|didn't|doesn't|hadn't|wouldn't",
        "The guide warned the tourists ___ walk near the edge of the cliff.|not to|don't|to not|never",
        "\"We must leave early.\" -> They said that they ___ leave early.|had to|musted|have to|will",
        "ირიბ თქმაში სიტყვა „now“ იცვლება სიტყვით:|then|today|here|ago"
      ]
    },
    {
      num: 40, level: "B1",
      title: "მიმართებითი წინადადებები — Defining Relative Clauses",
      subtitle: "Relative Pronouns: Who, Which, That, Where, Whose",
      rule: "მიმართებითი წინადადება (Relative Clause) გვაძლევს დამატებით ინფორმაციას არსებით სახელზე და გვიზუსტებს, კონკრეტულად რომელ ადამიანზე, ნივთსა თუ ადგილზეა საუბარი: 1) ადამიანებთან ვიყენებთ who ან that; 2) ნივთებთან და ცხოველებთან — which ან that; 3) ადგილებთან (სადაც რაღაც ხდება) — where; 4) კუთვნილებასთან („რომლის...“) — whose; 5) დროსთან — when.",
      formulas: [
        ["+ People (ადამიანები)", "who / that (A chef is a person who/that cooks food.)", "The woman who lives next door is a doctor."],
        ["- Things (ნივთები/იდეები)", "which / that (This is the book which/that won the prize.)", "Where is the cheese that was in the fridge?"],
        ["? Place & Time", "where (ადგილი — სადაც) | when (დრო — როდესაც)", "That is the café where we first met."],
        ["💡 Possession (კუთვნილება)", "whose + არსებითი სახელი (რომლის...)", "I met a man whose sister knows you."]
      ],
      examples: [
        ["An architect is someone who designs buildings.", "არქიტექტორი არის ადამიანი, რომელიც შენობებს აპროექტებს."],
        ["The bus that goes to the airport runs every half hour.", "ავტობუსი, რომელიც აეროპორტში მიდის, ყოველ ნახევარ საათში დადის."],
        ["This is the hotel where we stayed last summer.", "ეს არის სასტუმრო, სადაც გასულ ზაფხულს გავჩერდით."],
        ["Do you know the boy whose bicycle was stolen?", "იცნობ ბიჭს, რომლის ველოსიპედიც მოიპარეს?"],
        ["A dictionary is a book which gives the meanings of words.", "ლექსიკონი არის წიგნი, რომელიც სიტყვების მნიშვნელობებს განმარტავს."],
        ["I will never forget the day when we graduated.", "არასდროს დამავიწყდება დღე, როდესაც სწავლა დავამთავრეთ."],
        ["The apples that you bought at the market are very sweet.", "ვაშლები, რომლებიც ბაზარში იყიდე, ძალიან ტკბილია."],
        ["She works for a company that manufactures solar panels.", "ის მუშაობს კომპანიაში, რომელიც მზის პანელებს აწარმოებს."]
      ],
      mistakes: [
        ["✗ The man which called you is waiting outside.", "✓ The man who / that called you is waiting outside. (ადამიანთან which არ იწერება!)"],
        ["✗ That is the house where was built in 1900.", "✓ That is the house which / that was built in 1900. (ზმნის წინ ქვემდებარედ იწერება which/that, და არა where)"],
        ["✗ I helped the girl who's bag was heavy.", "✓ I helped the girl whose bag was heavy. (კუთვნილებაა whose; who's = who is)"]
      ],
      drills: [
        "A florist is a person ___ sells flowers and plants.|who|which|whose|where",
        "Where is the key ___ opens the garage door?|that|who|whose|where",
        "That is the village ___ my grandfather was born.|where|which|who|whose",
        "We helped a tourist ___ passport had been lost.|whose|who|which|who's",
        "The film ___ we saw last night was very moving.|that|who|where|whose",
        "Do you remember the summer ___ we travelled across Italy?|when|where|who|whose",
        "A kangaroo is an animal ___ lives in Australia.|which|who|where|whose",
        "The waiter ___ served us was very polite.|who|which|whose|where",
        "This is the restaurant ___ serves the best seafood in town. (მოყვება ზმნა serves!)|that|where|who|whose",
        "This is the restaurant ___ we had dinner on Saturday. (მოყვება we had!)|where|which|who|whose",
        "I have a friend ___ brother is a professional pilot.|whose|who|which|whom",
        "The laptop ___ I bought last month works very fast.|which|who|where|whose",
        "Anyone ___ wants to join the trip should sign up today.|who|which|where|whose",
        "What is the name of the river ___ flows through Vienna?|that|where|who|whose",
        "She is an author ___ books are translated into thirty languages.|whose|who|which|where",
        "The school ___ I studied has a big sports field.|where|which|who|whose",
        "Everything ___ he said at the meeting was true.|that|what|who|where",
        "The people ___ live on this island are very hospitable.|who|which|whose|where",
        "Is there a shop near here ___ sells postcards?|that|where|who|whose",
        "1969 was the year ___ astronauts first landed on the Moon.|when|where|which|who"
      ]
    },
    {
      num: 41, level: "B1",
      title: "ალბათობისა და ვარაუდის მოდალური ზმნები (Must, Might, Could, Can't)",
      subtitle: "Modal Verbs of Deduction & Possibility in the Present",
      rule: "როდესაც აწმყოში რაიმე ფაქტის შესახებ ლოგიკურ დასკვნას ან ვარაუდს გამოვთქვამთ: 1) „Must + V1“ ნიშნავს, რომ თითქმის 100%-ით დარწმუნებულები ვართ, რომ ასეა („აშკარად / უეჭველად ასეა“); 2) „Might / May / Could + V1“ ნიშნავს 50%-იან ვარაუდს („შესაძლოა ასე იყოს“); 3) „Can't + V1“ ნიშნავს, რომ დარწმუნებულები ვართ, რომ ეს შეუძლებელია („გამორიცხულია ასე იყოს!“ — must-ის საპირისპირო!).",
      formulas: [
        ["+ 99% დარწმუნებული (დადებითი)", "Subject + must + V1 / be V-ing", "He has been working all day; he must be tired."],
        ["- 50% შესაძლებლობა (ვარაუდი)", "Subject + may / might / could + V1", "Take an umbrella; it might rain later."],
        ["? 99% გამორიცხულია (უარყოფითი)", "Subject + can't + V1 (და არა mustn't!)", "She just had lunch; she can't be hungry already!"],
        ["💡 უარყოფითი ვარაუდი", "may not / might not + V1 (შესაძლოა არ...) — მაგრამ არა couldn't!", "Tom might not know about the change."]
      ],
      examples: [
        ["The lights are on in their house, so they must be at home.", "მათ სახლში შუქი ანთია, ასე რომ ისინი აშკარად სახლში არიან."],
        ["That man can't be Sarah's father; he looks far too young!", "ის კაცი გამორიცხულია სარას მამა იყოს; ზედმეტად ახალგაზრდად გამოიყურება!"],
        ["Where is Anna? — I'm not sure; she might be in the garden.", "სად არის ანა? — დარწმუნებული არ ვარ; შესაძლოა ბაღში იყოს."],
        ["Don't touch that mushroom; it could be poisonous.", "ნუ შეეხები მაგ სოკოს; შეიძლება შხამიანი იყოს."],
        ["You have been walking in the snow for hours — you must be freezing!", "საათობით თოვლში დადიოდი — აუცილებლად გაყინული იქნები!"],
        ["This coat can't belong to David; it is much too small for him.", "ეს პალტო გამორიცხულია დევიდს ეკუთვნოდეს; მისთვის ზედმეტად პატარაა."],
        ["We may go to the mountains this weekend if the weather is fine.", "შესაძლოა ამ უქმეებზე მთაში წავიდეთ, თუ კარგი ამინდი იქნება."],
        ["She isn't answering her phone; she must be sleeping.", "ტელეფონს არ პასუხობს; აშკარად სძინავს."]
      ],
      mistakes: [
        ["✗ He has three expensive cars; he can be rich.", "✓ He has three expensive cars; he must be rich. (დადებით დასკვნაში ვიყენებთ must-ს)"],
        ["✗ She is in Rome right now, so that mustn't be her at the door.", "✓ She is in Rome right now, so that can't be her at the door. (უარყოფით დასკვნაში ვიყენებთ can't-ს!)"],
        ["✗ It might rains this evening.", "✓ It might rain this evening. (might-ის შემდეგ ზმნას -s არ ემატება)"]
      ],
      drills: [
        "You haven't eaten anything since morning. You ___ be very hungry!|must|can't|might not|shouldn't",
        "That ___ be Tom at the door; he is in Canada this week!|can't|mustn't|may|must",
        "I don't know where my keys are. They ___ be in my coat pocket.|might|mustn't|can|should to",
        "She speaks French without any accent. She ___ be from France.|must|can't|might not|needn't",
        "Don't buy that book for Anna; she ___ already have a copy.|may|can't|mustn't|will to",
        "He just woke up ten minutes ago; he ___ be sleepy already!|can't|must|might|could",
        "Whose bag is this? — I'm not sure, it ___ belong to the new student.|could|can't to|mustn't|ought",
        "The restaurant is always full; the food there ___ be very good.|must|can't|might not|wouldn't",
        "Take a warm sweater with you; it ___ get cold in the evening.|might|can't|mustn't|shall",
        "You passed all your exams with top marks! Your parents ___ be proud of you.|must|can't|may not|couldn't",
        "That rumour ___ be true; I don't believe a word of it.|can't|must|may|might",
        "Why is the dog barking? — It ___ hear someone outside.|might|can't|mustn't|ought",
        "He doesn't wear glasses, so these glasses on the desk ___ be his.|can't|must|may|could",
        "They live in a huge mansion; they ___ have a lot of money.|must|can't|might not|don't",
        "We ___ not have enough time to visit the castle today; let's see.|might|can|must|could",
        "Listen to her singing! She ___ have a professional musical training.|must|can't|may not|mustn't",
        "This bill ___ be right! We only ordered two coffees and it says fifty euros!|can't|must|may|could",
        "Ask David to help you; he ___ know how to solve this problem.|might|can't|mustn't|will to",
        "The office is dark and locked; everyone ___ have gone home.|must|can't|shouldn't|needn't",
        "роმელი მოდალური ზმნაა „must be“ (აშკარად არის)-ის საპირისპირო ლოგიკურ დასკვნაში?|can't be|mustn't be|don't have to be|shouldn't be"
      ]
    },
    {
      num: 42, level: "B1",
      title: "დანართი კითხვები (Question Tags) და მოკლე დათანხმება (So / Neither)",
      subtitle: "Question Tags (...isn't it?) & Agreeing (So do I / Neither do I)",
      rule: "1) Question Tag არის წინადადების ბოლოს დართული მოკლე კითხვა („...ხომ ასეა?“). ოქროს წესი: თუ წინადადება დადებითია, კუდი უარყოფითია (+ -> -); თუ წინადადება უარყოფითია, კუდი დადებითია (- -> +). კუდში ვიმეორებთ იმავე დამხმარე ზმნასა და პირის ნაცვალსახელს. 2) დადებით ნათქვამზე დათანხმებისას („მეც!“) ვიყენებთ: So + დამხმარე ზმნა + I (So am I / So do I). უარყოფითზე დათანხმებისას („არც მე!“) — Neither / Nor + დამხმარე ზმნა + I (Neither am I / Neither do I).",
      formulas: [
        ["+ დადებითი -> უარყოფითი კუდი", "It is cold, isn't it? | You speak Spanish, don't you? | She went home, didn't she?", "He has finished, hasn't he?"],
        ["- უარყოფითი -> დადებითი კუდი", "It isn't late, is it? | You don't smoke, do you? | They can't swim, can they?", "never/nothing/nobody ითვლება უარყოფითად -> დადებითი კუდი!"],
        ["? 3 მთავარი გამონაკლისი", "I am -> aren't I? | Let's... -> shall we? | ბრძანებითი (Open the door) -> will you?", "I'm on time, aren't I? / Let's go, shall we?"],
        ["💡 So do I vs. Neither do I", "\"I like tea.\" -> \"So do I.\" | \"I don't like tea.\" -> \"Neither do I.\"", "\"I can swim.\" -> \"So can I.\""]
      ],
      examples: [
        ["The weather is lovely today, isn't it?", "დღეს მშვენიერი ამინდია, ხომ ასეა?"],
        ["You haven't seen my keys anywhere, have you?", "ჩემი გასაღები არსად დაგინახავს, ხომ?"],
        ["Your sister lives in Vienna, doesn't she?", "შენი და ვენაში ცხოვრობს, არა?"],
        ["I'm sitting in the right seat, aren't I? (გამონაკლისი: I am -> aren't I)", "სწორ ადგილას ვზივარ, ხომ?"],
        ["Let's take a walk along the river, shall we?", "მოდი მდინარის პირას გავისეირნოთ, კარგი?"],
        ["He never drinks coffee at night, does he? (never უარყოფითია -> does he)", "ის ღამით ყავას არასდროს სვამს, ხომ?"],
        ["\"I am very fond of classical music.\" — \"So am I.\"", "„ძალიან მიყვარს კლასიკური მუსიკა.“ — „მეც.“"],
        ["\"I didn't watch the match last night.\" — \"Neither did I.\"", "„გუშინ ღამით მატჩისთვის არ მიყურებია.“ — „არც მე.“"]
      ],
      mistakes: [
        ["✗ She plays the piano, playsn't she?", "✓ She plays the piano, doesn't she? (Present Simple-ის კუდში ვიყენებთ don't/doesn't)"],
        ["✗ I am late, amn't I?", "✓ I am late, aren't I? (I am-ის კითხვითი კუდია aren't I)"],
        ["✗ \"I don't like winter.\" — \"So do I.\"", "✓ \"I don't like winter.\" — \"Neither do I.\" (უარყოფითზე დათანხმებაა Neither)"]
      ],
      drills: [
        "These apples are very sweet, ___?|aren't they|isn't it|are they|don't they",
        "You don't know where Anna is, ___?|do you|don't you|are you|did you",
        "I am invited to the meeting too, ___? (გამონაკლისი)|aren't I|amn't I|am I not|don't I",
        "Let's go to the cinema tonight, ___?|shall we|will we|don't we|let we",
        "Tom bought a new bicycle yesterday, ___?|didn't he|boughtn't he|doesn't he|wasn't he",
        "She has never been to Japan, ___? (never = უარყოფითი)|has she|hasn't she|did she|doesn't she",
        "\"I love swimming in the sea.\" — \"___.\"|So do I|So am I|Neither do I|So I do",
        "\"I can't speak German.\" — \"___.\"|Neither can I|So can I|Neither do I|Nor I can",
        "Your brother can play chess well, ___?|can't he|can he|doesn't he|isn't he",
        "They won't be late for the ceremony, ___?|will they|won't they|are they|do they",
        "Nobody called while I was out, ___? (Nobody -> they + დადებითი კუდი)|did they|didn't they|did he|was it",
        "\"We went to the mountains last Sunday.\" — \"___.\"|So did we|So were we|So do we|Neither did we",
        "\"I haven't read that book yet.\" — \"___.\"|Neither have I|So have I|Neither did I|Nor I have",
        "She was studying at library at 5 PM, ___?|wasn't she|weren't she|didn't she|was she",
        "Don't forget to post this letter, ___?|will you|do you|don't you|shall we",
        "There is a pharmacy on this street, ___?|isn't there|isn't it|is there|doesn't there",
        "You have finished your lunch, ___?|haven't you|don't you|hadn't you|have you",
        "\"I am feeling quite tired today.\" — \"___.\"|So am I|So do I|Neither am I|So I am",
        "He rarely watches television, ___? (rarely უარყოფითია)|does he|doesn't he|is he|did he",
        "The children were very quiet during the play, ___?|weren't they|wasn't it|didn't they|were they"
      ]
    },
    {
      num: 43, level: "B1",
      title: "უკუქცევითი და ურთიერთობითი ნაცვალსახელები (Myself, Yourself vs. Each other)",
      subtitle: "Reflexive Pronouns (-self / -selves) & Reciprocal Pronouns",
      rule: "1) უკუქცევითი ნაცვალსახელები (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves) გამოიყენება მაშინ, როცა ქვემდებარე და ობიექტი ერთი და იგივე პირია („საკუთარ თავს“ — He cut himself). „By myself“ ნიშნავს „მარტოდმარტო / დამოუკიდებლად“. 2) ყურადღება: ზმნებთან wash, shave, dress, feel, relax, meet, concentrate უკუქცევითი ნაცვალსახელი ჩვეულებრივ არ იწერება! 3) „Each other / One another“ ნიშნავს „ერთმანეთს“ (They looked at each other).",
      formulas: [
        ["+ მხოლობითი (-self)", "I -> myself | you -> yourself | he -> himself | she -> herself | it -> itself", "Be careful! Don't burn yourself on the oven."],
        ["- მრავლობითი (-selves)", "we -> ourselves | you -> yourselves | they -> themselves", "Help yourselves to some cake, everyone!"],
        ["? By + reflexive (= მარტო)", "by myself (= on my own) | by himself (= alone, without help)", "The little boy tied his shoes all by himself."],
        ["💡 Each other (ერთმანეთი)", "They looked at themselves (სარკეში თავიანთ თავს) vs. They looked at each other (ერთმანეთს)", "Good friends always support each other."]
      ],
      examples: [
        ["I taught myself to play the acoustic guitar.", "მე თვითონ ვასწავლე საკუთარ თავს აკუსტიკურ გიტარაზე დაკვრა."],
        ["She looked at herself in the mirror before leaving.", "გასვლამდე მან სარკეში საკუთარ თავს შეხედა."],
        ["Tom and Anna have known each other since childhood.", "ტომი და ანა ბავშვობიდან იცნობენ ერთმანეთს (each other)."],
        ["Did you paint the whole apartment by yourself?", "მთელი ბინა მარტომ (დახმარების გარეშე) შეღებე?"],
        ["We really enjoyed ourselves at the summer festival.", "ზაფხულის ფესტივალზე ძალიან კარგი დრო გავატარეთ (enjoy oneself)."],
        ["The cat cleans itself several times a day.", "კატა დღეში რამდენჯერმე ისუფთავებს თავს."],
        ["I feel much better today. (feel-თან myself არ იწერება!)", "დღეს თავს გაცილებით უკეთ ვგრძნობ."],
        ["Where shall we meet tomorrow? (meet-თან each other არ არის საჭირო)", "სად შევხვდეთ ხვალ?"]
      ],
      mistakes: [
        ["✗ He repaired the roof hisself / themself.", "✓ He repaired the roof himself / They did it themselves. (hisself და themself არ არსებობს!)"],
        ["✗ I washed myself, dressed myself, and went out.", "✓ I washed, dressed, and went out. (ყოველდღიურ ჰიგიენასთან myself არ იხმარება)"],
        ["✗ Paul and Mary love themselves (როცა ერთმანეთი უყვართ).", "✓ Paul and Mary love each other."]
      ],
      drills: [
        "Be careful with that sharp knife! You might cut ___.|yourself|myself|himself|you",
        "My sister and I send messages to ___ every day.|each other|ourselves|themselves|us",
        "He lives by ___ in a small cottage near the woods.|himself|hisself|him|alone himself",
        "Please make ___ at home, everyone, and take a seat! (მიმართვა რამდენიმე სტუმრისადმი)|yourselves|yourself|themselves|ourselves",
        "The automatic door closes by ___.|itself|it's self|himself|themselves",
        "We built the wooden garden table ___.|ourselves|ourself|us|each other",
        "After the argument, the two brothers didn't speak to ___ for a week.|each other|themselves|themself|himself",
        "I don't ___ very well today; I think I have a cold.|feel|feel myself|felt myself|feeling myself",
        "Did the children behave ___ at the museum?|themselves|themself|each other|them",
        "She baked the birthday cake all by ___.|herself|hers|she|her",
        "It is noisy here; I can't ___ on my reading.|concentrate|concentrate myself|concentrating myself|to concentrate",
        "When they met at the station, they hugged ___.|each other|themselves|ourselves|himself",
        "I accidentally locked ___ out of the house this morning.|myself|me|mine|my",
        "The guests helped ___ to the cold drinks and sandwiches.|themselves|themself|each other|them",
        "Every morning he wakes up, shaves ___, and has breakfast.|— (ნაცვალსახელის გარეშე)|himself|hisself|him",
        "Did you enjoy ___ during your holiday in Greece? (ერთ პირს)|yourself|yourselves|you|yours",
        "People who only think about ___ are called selfish.|themselves|each other|themself|them",
        "We promised ___ that we would stay calm.|each other / ourselves|ourself|us|we",
        "No one helped her; she solved the riddle ___.|by herself|with herself|for her|hers",
        "They sat across the table and smiled at ___.|each other|themselves|themself|theirs"
      ]
    },
    {
      num: 44, level: "B1",
      title: "-ed და -ing ზედსართავები + ზედსართავების თანმიმდევრობა",
      subtitle: "Adjectives Ending in -ed vs. -ing & Order of Adjectives",
      rule: "1) -ed-ზე დაბოლოებული ზედსართავები (bored, interested, tired, excited, surprised) აღწერს ადამიანის შინაგან ემოციასა და განცდას („როგორ გრძნობს თავს?“). -ing-ზე დაბოლოებული ზედსართავები (boring, interesting, tiring, exciting, surprising) აღწერს თავად საგანს ან სიტუაციას, რომელიც ამ ემოციას იწვევს („როგორია საგანი?“). 2) როცა არსებითი სახელის წინ რამდენიმე ზედსართავია, ვიცავთ წყობას: Opinion (შეფასება) -> Size (ზომა) -> Age (ასაკი) -> Colour (ფერი) -> Origin (წარმოშობა) -> Material (მასალა) + Noun.",
      formulas: [
        ["+ -ed (ადამიანის განცდა)", "bored | interested | tired | amazed | disappointed | frightened", "I am very interested in astronomy."],
        ["- -ing (საგნის თვისება)", "boring | interesting | tiring | amazing | disappointing | frightening", "Astronomy is a very interesting subject."],
        ["? ზედსართავების წყობა (OSACOM)", "1.Opinion (lovely) 2.Size (small) 3.Age (old) 4.Colour (brown) 5.Origin (Italian) 6.Material (wooden)", "a lovely small old brown wooden box"],
        ["💡 ზმნების შემდეგ (Linking Verbs)", "look, seem, feel, smell, taste, sound + Adjective (და არა ზმნიზედა -ly!)", "This soup tastes delicious. (არა: deliciously)"]
      ],
      examples: [
        ["The long lecture was boring, so the students felt bored.", "გრძელი ლექცია მოსაწყენი იყო (-ing), ამიტომ სტუდენტებმა მოიწყინეს (-ed)."],
        ["Climbing the mountain was exhausting, and we were exhausted at the top.", "მთაზე ასვლა დამღლელი იყო, მწვერვალზე კი ქანცგაწყვეტილები ვიყავით."],
        ["We were surprised by the surprising news.", "გაოცებულები დავრჩით მოულოდნელი ამბით."],
        ["She bought a beautiful large round wooden table.", "მან იყიდა ლამაზი (Opinion), დიდი (Size), მრგვალი (Shape), ხის (Material) მაგიდა."],
        ["He was wearing a smart black Italian leather jacket.", "მას ეცვა კოხტა, შავი, იტალიური, ტყავის ქურთუკი."],
        ["Your idea sounds very interesting!", "შენი იდეა ძალიან საინტერესოდ ჟღერს!"],
        ["The children are excited about the upcoming school trip.", "ბავშვები აღფრთოვანებულები არიან მოახლოებული სასკოლო ექსკურსიით."],
        ["It was a disappointing result for the whole team.", "ეს იყო გულდასაწყვეტი შედეგი მთელი გუნდისთვის."]
      ],
      mistakes: [
        ["✗ I am very interesting in history.", "✓ I am very interested in history. (ადამიანის განცდაა interested)"],
        ["✗ She bought a leather black new bag.", "✓ She bought a new black leather bag. (ჯერ ასაკი new, მერე ფერი black, ბოლოს მასალა leather)"],
        ["✗ These flowers smell wonderfully.", "✓ These flowers smell wonderful. (smell-ის შემდეგ იწერება ზედსართავი wonderful)"]
      ],
      drills: [
        "The journey took twelve hours; it was very ___.|tiring|tired|tire|tiredly",
        "Are you ___ in modern architecture?|interested|interesting|interest|interestingly",
        "We were ___ to hear that the concert had been cancelled.|disappointed|disappointing|disappoint|disappointingly",
        "აირჩიეთ ზედსართავების სწორი თანმიმდევრობა:|a small old French clock|a French old small clock|an old French small clock|a clock small old French",
        "That horror film was so ___ that I couldn't sleep.|frightening|frightened|frighten|fright",
        "Why do you look so ___? Did something bad happen?|worried|worrying|worry|worriedly",
        "აირჩიეთ სწორი თანმიმდევრობა:|a beautiful white silk dress|a silk white beautiful dress|a white silk beautiful dress|a dress beautiful white silk",
        "The instructions were ___, so nobody knew what to do.|confusing|confused|confuse|confusedly",
        "I felt ___ because I didn't understand the instructions.|confused|confusing|confuse|confusingly",
        "This freshly baked bread smells ___!|delicious|deliciously|delight|well",
        "It is ___ how quickly young children learn languages.|amazing|amazed|amaze|amazedly",
        "She was ___ when she saw a spider on her pillow.|terrified|terrifying|terrify|terrifyingly",
        "აირჩიეთ სწორი თანმიმდევრობა:|a nice big red apple|a red big nice apple|a big red nice apple|an apple nice big red",
        "His explanation didn't sound ___ to the teacher.|convincing|convinced|convince|convincingly",
        "Are you ___ about your trip to Spain next week?|excited|exciting|excite|excitedly",
        "Working in a noisy environment all day is very ___.|stressful / exhausting|exhausted|bored|tiringly",
        "He lives in a ___ house near the river.|lovely little old stone|stone old little lovely|little stone old lovely|old stone lovely little",
        "I was ___ to see my old school friend on the train.|surprised|surprising|surprise|surprisingly",
        "The book was so ___ that I fell asleep on page ten.|boring|bored|bore|boredly",
        "The hot soup tastes ___ on a cold winter day.|good|well|nicely|wonderfully"
      ]
    },
    {
      num: 45, level: "B1",
      title: "ფრაზული ზმნები — Phrasal Verbs (Separable & Inseparable)",
      subtitle: "Common Phrasal Verbs & Object Pronoun Placement",
      rule: "ფრაზული ზმნა შედგება ზმნისა და ნაწილაკისგან (წინდებული ან ზმნიზედა: up, down, on, off, in, out, after, away), რაც ხშირად სრულიად ცვლის ზმნის მნიშვნელობას (look = ყურება, look after = მოვლა, look for = ძებნა, look forward to = მოუთმენლად ლოდინი). უმნიშვნელოვანესი წესი: გაყოფად ფრაზულ ზმნებთან (turn on, put on, take off, give back, throw away), თუ ობიექტი ნაცვალსახელია (it / them), იგი აუცილებლად იწერება ზმნასა და ნაწილაკს შორის: Turn it off! (და არა: Turn off it!).",
      formulas: [
        ["+ გაყოფადი (Separable)", "Turn on the light = Turn the light on = Turn it on! (არა: Turn on it!)", "Take off your shoes -> Take them off."],
        ["- გაუყოფელი (Inseparable)", "look after (მოვლა) | look for (ძებნა) | get on/off (ტრანსპორტი) | run out of (გათავება)", "She looks after her little brother."],
        ["? ცხოვრებისეული ფრაზული ზმნები", "give up (დანებება) | grow up (გაზრდა) | find out (გარკვევა) | set off (გზაზე გასვლა)", "Never give up! / We set off at dawn."],
        ["💡 ტექნიკა და ხმა", "turn up (აწევა ხმის) | turn down (ჩაწევა / უარყოფა) | break down (გაფუჭება მანქანის)", "Our car broke down on the highway."]
      ],
      examples: [
        ["The television is too loud; please turn it down.", "ტელევიზორი ზედმეტად ხმამაღალზეა; გთხოვთ ჩაუწიოთ (turn it down)."],
        ["It is warm indoors; you can take off your coat.", "შენობაში თბილა; შეგიძლიათ გაიხადოთ პალტო."],
        ["Who is going to look after your dog while you are away?", "ვინ მოუვლის თქვენს ძაღლს, სანამ წასული იქნებით?"],
        ["I am looking for my keys; have you seen them?", "გასაღებს ვეძებ; ხომ არ დაგინახავს?"],
        ["We have run out of milk; I'll go and buy some.", "რძე გაგვითავდა; წავალ და ვიყიდი."],
        ["What time did the plane take off?", "რომელ საათზე აფრინდა თვითმფრინავი?"],
        ["He grew up in a small town by the sea.", "ის ზღვისპირა პატარა ქალაქში გაიზარდა."],
        ["Don't throw those old newspapers away; we can recycle them.", "ნუ გადაყრი იმ ძველ გაზეთებს; შეგვიძლია გადავამუშაოთ."]
      ],
      mistakes: [
        ["✗ Here are your shoes. Put on them!", "✓ Here are your shoes. Put them on! (ნაცვალსახელი them დგება შუაში!)"],
        ["✗ I am looking my glasses for.", "✓ I am looking for my glasses. (look for გაუყოფელია)"],
        ["✗ Please wake up him at seven.", "✓ Please wake him up at seven. (him დგება wake-სა და up-ს შორის)"]
      ],
      drills: [
        "The radio is too loud. Can you ___? (ნაცვალსახელით!)|turn it down|turn down it|it turn down|down turn it",
        "What does the phrasal verb „look after“ mean?|მოვლა / ყურადღების მიქცევა|ძებნა|გავსება|უკან გახედვა",
        "We need to stop at a petrol station; we are running ___ fuel.|out of|off|away|down",
        "My grandfather decided to give ___ smoking twenty years ago.|up|out|off|away",
        "Here is the application form. Please fill ___ with a black pen.|it in|in it|it on|on it",
        "Our washing machine broke ___ yesterday, so we called a technician.|down|up|off|out",
        "If you don't know what the word means, look ___ in a dictionary.|it up|up it|for it|after it",
        "We set ___ early in the morning to avoid the heavy traffic.|off / out|up|in|down",
        "Your wet boots are dirty; please take ___ before entering.|them off|off them|it off|off it",
        "How did you find ___ about the concert dates?|out|up|in|off",
        "The meeting was put ___ until next Wednesday. (გადაიდო)|off|out|down|away",
        "I borrowed this book from Anna, so I must give ___ to her tomorrow.|it back|back it|it up|up it",
        "Please don't wake the baby ___!|up|out|off|on",
        "She gets ___ very well with all her neighbours. (კარგი ურთიერთობა აქვს)|on / along|up|in|out",
        "The firemen managed to put ___ the forest fire.|out|off|down|away",
        "Can you pick ___ some bread on your way home?|up|out|on|in",
        "He turned ___ the job offer because the salary was too low. (უარყო)|down|off|out|away",
        "Hurry ___ or we will miss the bus!|up|on|in|out",
        "When you finish using the computer, please switch ___.|it off|off it|it down|down it",
        "She takes ___ her mother; they have the same eyes and smile. (ჰგავს)|after|for|up|on"
      ]
    },

    // =========================================================================
    // B2 LEVEL — TOPICS 46 TO 60 (20 DRILLS EACH = 300 DRILLS)
    // =========================================================================
    {
      num: 46, level: "B2",
      title: "მესამე პირობითი წინადადება (Third Conditional — წარსულის ანალიზი)",
      subtitle: "If + Past Perfect (had + V3), Would / Could / Might have + V3",
      rule: "Third Conditional ეხება მხოლოდ და მხოლოდ წარსულს! იგი გამოიყენება უკვე მომხდარი წარსული ფაქტის საპირისპირო, წარმოსახვითი სცენარის განსახილველად, ხშირად სინანულის ან კრიტიკის გამოსახატავად (მაგ.: „უფრო ადრე რომ გამოვსულიყავით, მატარებელზე არ დავაგვიანებდით“ — სინამდვილეში გვიან გამოვედით და დავაგვიანეთ). If-ნაწილში იწერება Past Perfect (had + V3), ხოლო მთავარ ნაწილში — would / could / might + have + V3.",
      formulas: [
        ["+ სტრუქტურა", "If + Subject + had (hadn't) + V3, Subject + would (wouldn't) have + V3", "If I had known about the traffic, I would have left earlier."],
        ["- შესაძლებლობა წარსულში", "...could have + V3 / might have + V3 (შესაძლოა მომხდარიყო)", "If he had trained harder, he could have won the race."],
        ["? კითხვითი", "What would you have done if + had V3...?", "Would you have gone to the party if they had invited you?"],
        ["💡 მთავარი აკრძალვა", "If-ნაწილში არასდროს ჩაწეროთ would have! იქ იწერება მხოლოდ had + V3!", "If she had called me (არა: If she would have called me)"]
      ],
      examples: [
        ["If we had set the alarm clock, we wouldn't have overslept.", "მაღვიძარა რომ დაგვეყენებინა, არ ჩაგვეძინებოდა."],
        ["She would have passed the exam if she had revised all the topics.", "ის გამოცდას ჩააბარებდა, ყველა თემა რომ გაემეორებინა."],
        ["If I had seen you at the station, I would have said hello.", "სადგურზე რომ დამენახე, მოგესალმებოდი."],
        ["We might have got lost if we hadn't taken a map with us.", "შესაძლოა დავკარგულიყავით, რუკა რომ არ წაგვეღო."],
        ["If the driver had been more careful, the accident wouldn't have happened.", "მძღოლი რომ უფრო ფრთხილად ყოფილიყო, ავარია არ მოხდებოდა."],
        ["What would you have done if you had missed the last ferry?", "რას იზამდი, ბოლო ბორანზე რომ დაგეგვიანა?"],
        ["If it hadn't rained so heavily, the match wouldn't have been cancelled.", "ასე ძლიერად რომ არ ეწვიმა, მატჩი არ გაუქმდებოდა."],
        ["He could have bought the cottage if he had saved enough money.", "მას შეეძლო აგარაკის ყიდვა, საკმარისი ფული რომ დაეზოგა."]
      ],
      mistakes: [
        ["✗ If I would have known the truth, I would have told you.", "✓ If I had known the truth, I would have told you. (If + had known!)"],
        ["✗ If we left earlier yesterday, we wouldn't have missed the flight.", "✓ If we had left earlier yesterday, we wouldn't have missed the flight."],
        ["✗ He would have helped us if we asked him yesterday.", "✓ He would have helped us if we had asked him yesterday."]
      ],
      drills: [
        "If I ___ my umbrella yesterday, I wouldn't have got soaked in the rain.|had taken|took|would have taken|have taken",
        "She ___ come to the concert last night if she hadn't been ill.|would have|would|will have|had",
        "If they had booked the tickets in advance, they ___ paid less.|would have|would|had|will have",
        "What ___ you have done if you had lost your passport abroad?|would|will|did|had",
        "If the goalkeeper ___ jumped higher, he could have saved the penalty.|had|would have|has|did",
        "We wouldn't have missed the turn if we ___ looked at the map.|had|would have|did|have",
        "If I ___ seen the red light, I would have stopped immediately.|had|would have|have|did",
        "The plants wouldn't have died if someone ___ watered them last week.|had|would have|has|did",
        "If he hadn't forgotten his glasses, he ___ read the menu easily.|could have|could|can have|had",
        "Would you have recognized him if he ___ told you his name?|hadn't|wouldn't have|didn't|hasn't",
        "If Columbus hadn't sailed west, he ___ reached the Americas.|wouldn't have|hadn't|didn't|won't have",
        "I ___ phoned you yesterday if I had had your number.|would have|would|will have|had",
        "If the bridge ___ been repaired in time, it might have collapsed.|hadn't|wouldn't have|didn't|wasn't",
        "She wouldn't have burnt the cake if she ___ turned off the oven.|had|would have|did|has",
        "If we had walked faster, we ___ caught the eight o'clock train.|might have|might|will have|had",
        "He wouldn't have fallen if the pavement ___ been so icy.|hadn't|wouldn't have|wasn't|didn't",
        "If you ___ listened to my advice, you wouldn't have made that mistake.|had|would have|have|did",
        "They would have stayed longer if the weather ___ been better.|had|would have|was|has",
        "If the alarm ___ gone off, everyone would have woken up in time.|had|would have|did|has",
        "I wouldn't have bought that jacket if I ___ known how uncomfortable it was.|had|would have|have|did"
      ]
    },
    {
      num: 47, level: "B2",
      title: "შერეული პირობითი წინადადებები (Mixed Conditionals)",
      subtitle: "Connecting Past Conditions with Present Results & Vice Versa",
      rule: "Mixed Conditional აერთიანებს მე-2 (აწმყო) და მე-3 (წარსული) პირობით წინადადებებს, როცა მიზეზი და შედეგი სხვადასხვა დროს ეკუთვნის: 1) წარსული პირობა -> აწმყო შედეგი: If + had V3 (yesterday/in the past), Subject + would + V1 (now/today). 2) მუდმივი აწმყო თვისება -> წარსული შედეგი: If + Past Simple (ზოგადად), Subject + would have + V3 (yesterday).",
      formulas: [
        ["+ ტიპი I (წარსული -> აწმყო)", "If + had V3 (წარსულში), Subject + would + V1 (ახლა / today / now)", "If I had slept well last night, I wouldn't be tired now."],
        ["- ტიპი II (აწმყო -> წარსული)", "If + Past Simple (ზოგადად), Subject + would have + V3 (წარსულში)", "If I spoke German (ზოგადად), I would have translated the letter yesterday."],
        ["? დროის მარკერები", "დააკვირდით სიტყვებს: last night -> now | yesterday -> today", "If he had taken the medicine, he would feel better now."],
        ["💡 კონტრასტი 3rd-თან", "3rd: ...would have been tired yesterday vs. Mixed: ...would be tired NOW!", "If we had taken a map, we wouldn't be lost right now."]
      ],
      examples: [
        ["If I had gone to bed early last night, I wouldn't be so sleepy now.", "გუშინ ღამით რომ ადრე დამეძინა (წარსული), ახლა ასე არ მეძინებოდა (აწმყო)."],
        ["If we had brought a map, we would know where we are right now.", "რუკა რომ წამოგვეღო (წარსულში), ახლა გვეცოდინებოდა სად ვართ."],
        ["If she had accepted that job in Rome, she would be living in Italy now.", "ის სამსახური რომ მიეღო მაშინ, ახლა იტალიაში იცხოვრებდა."],
        ["If I weren't afraid of heights, I would have climbed the tower with you yesterday.", "სიმაღლის რომ არ მეშინოდეს (ზოგადად), გუშინ შენთან ერთად ავიდოდი კოშკზე."],
        ["He would be a doctor today if he had finished medical school.", "ის დღეს ექიმი იქნებოდა, სამედიცინო უნივერსიტეტი რომ დაემთავრებინა."],
        ["If Anna were more organized, she wouldn't have missed her flight yesterday.", "ანა რომ უფრო ორგანიზებული იყოს (ხასიათით), გუშინ რეისზე არ დააგვიანებდა."],
        ["We wouldn't be sitting in the dark now if we had paid the electricity bill.", "ახლა სიბნელეში არ ვიჯდებოდით, ელექტროენერგიის გადასახადი რომ გადაგვეხადა."],
        ["If I knew his phone number, I would have called him an hour ago.", "მისი ნომერი რომ ვიცოდე, ერთი საათის წინ დავურეკავდი."]
      ],
      mistakes: [
        ["✗ If I had eaten breakfast this morning, I wouldn't have been hungry now.", "✓ If I had eaten breakfast this morning, I wouldn't be hungry now. (now ითხოვს would be-ს)"],
        ["✗ If she would be more careful, she wouldn't have broken the vase.", "✓ If she were more careful, she wouldn't have broken the vase."],
        ["✗ If we saved more money last year, we would be on holiday now.", "✓ If we had saved more money last year, we would be on holiday now."]
      ],
      drills: [
        "If I had eaten breakfast this morning, I ___ hungry right now.|wouldn't be|wouldn't have been|won't be|am not",
        "If Tom ___ more careful by nature, he wouldn't have lost his keys yesterday.|were|had been|would be|is",
        "We ___ stuck in this traffic jam now if we had left ten minutes earlier.|wouldn't be|wouldn't have been|aren't|won't be",
        "If I ___ French fluently, I would have applied for that job in Paris last month.|spoke|had spoken|would speak|speak",
        "She would be dry now if she ___ taken her umbrella when she left.|had|would have|has|did",
        "If they hadn't spent all their money on the car, they ___ afford a holiday now.|could|could have|can|will",
        "If I ___ so busy this week, I would have gone to the theatre with you last night.|weren't|hadn't been|wouldn't be|am not",
        "He ___ a rich man today if he had invested in that company ten years ago.|would be|would have been|will be|is",
        "If you had listened to the directions, we ___ lost right now!|wouldn't be|wouldn't have been|weren't|aren't",
        "If Sarah didn't have a terrible headache today, she ___ come with us this morning.|would have|would|will have|had",
        "The garden ___ look so green now if it hadn't rained all last week.|wouldn't|wouldn't have|won't|didn't",
        "If my eyesight ___ better, I would have recognized you across the street yesterday.|were|had been|would be|is",
        "You wouldn't have a sunburn today if you ___ put on sunscreen yesterday.|had|would have|did|have",
        "If he ___ a reliable person, we would have asked him to help us last Friday.|were|had been|would be|is",
        "Where would you be living now if you ___ moved to this city five years ago?|hadn't|wouldn't have|didn't|haven't",
        "If I hadn't broken my leg last week, I ___ playing in today's match.|would be|would have been|will be|am",
        "She wouldn't have bought that coat yesterday if she ___ like the colour.|didn't|hadn't|wouldn't|doesn't",
        "If the builders had finished on time, we ___ in our new apartment now.|would be living|would have lived|will live|lived",
        "If penguins ___ fly, they would have flown away from the predator.|could|had been able to|can|would",
        "I ___ at the airport right now if my flight hadn't been postponed this morning.|would be|would have been|am|will be"
      ]
    },
    {
      num: 48, level: "B2",
      title: "სურვილები და სინანული: I wish / If only",
      subtitle: "Expressing Wishes, Regrets & Annoyance (Wish + Past / Past Perfect / Would)",
      rule: "კონსტრუქციები „I wish“ და „If only“ (ნეტავ...) გამოიყენება სამი განსხვავებული გრამატიკული დროით: 1) სურვილი აწმყოს შეცვლაზე -> I wish + Past Simple (I wish I knew = ნეტავ ახლა ვიცოდე); 2) სინანული უკვე მომხდარ წარსულზე -> I wish + Past Perfect (I wish I hadn't said that = ნეტავ ეს არ მეთქვა მაშინ); 3) უკმაყოფილება/გაღიზიანება სხვისი ქცევით ან ამინდით, რომელიც გვსურს შეიცვალოს -> I wish + someone + would + V1 (I wish it would stop raining!). გაითვალისწინეთ: საკუთარ თავთან „I wish I would...“ არასდროს იწერება!",
      formulas: [
        ["+ აწმყოს სურვილი", "I wish / If only + Past Simple (knew, had, were, could)", "I wish I had a bigger balcony. (ახლა პატარა მაქვს)"],
        ["- წარსულის სინანული", "I wish / If only + Past Perfect (had / hadn't + V3)", "I wish I had studied harder for last week's exam."],
        ["? გაღიზიანება / შეცვლის სურვილი", "I wish / If only + somebody else + would + V1 (არა I / we!)", "I wish you wouldn't make so much noise!"],
        ["💡 It's (high) time...", "It's time / It's high time + Subject + Past Simple (დროა უკვე...!)", "It's midnight! It's high time we went home."]
      ],
      examples: [
        ["I wish I spoke Italian fluently.", "ნეტავ იტალიურად თავისუფლად ვსაუბრობდე (ახლა არ ვსაუბრობ)."],
        ["If only I were taller!", "ნეტავ უფრო მაღალი ვიყო! (ყველა პირთან უპირატესია were)."],
        ["I wish I hadn't eaten so much cake last night.", "ნეტავ გუშინ ღამით ამდენი ნამცხვარი არ მეჭამა (წარსულის სინანული -> hadn't eaten)."],
        ["She wishes she had taken her camera to the mountains yesterday.", "ის ნატრობს, ნეტავ გუშინ მთაში კამერა წაეღო."],
        ["I wish it would stop raining! It has been pouring all day.", "ნეტავ წვიმა გადაიღებდეს! მთელი დღეა კოკისპირულად წვიმს."],
        ["I wish my neighbour wouldn't play loud music late at night.", "ნეტავ ჩემი მეზობელი გვიან ღამით ხმამაღალ მუსიკას არ რთავდეს."],
        ["If only I could remember where I put my passport!", "ნეტავ შემეძლოს გავიხსენო, სად შევინახე პასპორტი!"],
        ["It is ten o'clock; it's high time the children were in bed.", "ათი საათია; უკვე დროა ბავშვები ლოგინში იწვნენ."]
      ],
      mistakes: [
        ["✗ I wish I know the answer right now.", "✓ I wish I knew the answer right now. (wish-ის შემდეგ აწმყოზე იწერება Past Simple)"],
        ["✗ I wish I didn't buy these shoes yesterday.", "✓ I wish I hadn't bought these shoes yesterday. (წარსულ სინანულზე იწერება had/hadn't + V3)"],
        ["✗ I wish I would have more free time.", "✓ I wish I had more free time. (საკუთარ თავთან I wish I would არ იხმარება!)"]
      ],
      drills: [
        "I don't know how to swim. I wish I ___ swim.|could|can|will|would",
        "It was a terrible mistake. I wish I ___ signed that document yesterday.|hadn't|didn't|wouldn't|haven't",
        "You are always interrupting me! I wish you ___ listen until I finish.|would|will|can|did",
        "We live in a very noisy street. I wish we ___ in a quiet village.|lived|live|would live|have lived",
        "I have a bad cold because I went out without a coat. If only I ___ worn my coat!|had|have|did|would",
        "It's eleven o'clock at night! It's high time we ___ home.|went|go|will go|have gone",
        "She wishes she ___ taller so she could play basketball.|were|is|will be|would be",
        "I missed the train by two minutes. If only I ___ run a bit faster!|had|have|did|would",
        "The wind is freezing. I wish it ___ stop blowing so hard.|would|will|can|did",
        "I have to work tomorrow. I wish I ___ have to work on Saturdays.|didn't|don't|wouldn't|won't",
        "He lost all his photos when his computer crashed. He wishes he ___ made a backup.|had|has|did|would",
        "If only we ___ a car! Public transport is very slow here.|had|have|would have|will have",
        "I told her the secret and now everyone knows. I wish I ___ told her!|hadn't|didn't|wouldn't|haven't",
        "My brother leaves his clothes everywhere. I wish he ___ put them in the wardrobe.|would|will|did|can",
        "It's a pity you can't come to the party. I wish you ___ come.|could|can|will|would",
        "I'm exhausted today. I wish I ___ gone to bed so late last night.|hadn't|didn't|wouldn't|haven't",
        "Do you ever wish you ___ travel back in time?|could|can|will|would",
        "It's high time you ___ looking for a summer job.|started|start|will start|have started",
        "She bought an expensive dress and never wore it. She wishes she ___ bought it.|hadn't|didn't|wouldn't|hasn't",
        "If only I ___ the answer to this question right now!|knew|know|have known|would know"
      ]
    },
    {
      num: 49, level: "B2",
      title: "ვნებითი გვარის რთული ფორმები (Continuous, Perfect & Modal Passives)",
      subtitle: "Passive Voice across All Tenses (is being, has been, had been, must be + V3)",
      rule: "ვნებითი გვარი იწარმოება ყველა ძირითად დროსა და მოდალურ ზმნასთან ერთი მარტივი ფორმულით: შესაბამისი დროის To Be + მთავარი ზმნის მე-3 ფორმა (V3). 1) ახლა მიმდინარე (Present Continuous Passive): am/is/are being + V3; 2) შედეგი აწმყოში (Present Perfect Passive): have/has been + V3; 3) წინარე წარსული (Past Perfect Passive): had been + V3; 4) მოდალური ზმნებით (Modal Passive): must / can / should / will be + V3.",
      formulas: [
        ["+ Continuous Passive", "am / is / are / was / were + BEING + V3", "The bridge is being repaired right now."],
        ["- Perfect Passive", "have / has / had + BEEN + V3", "Three new schools have been built this year."],
        ["? Modal Passive (აწმყო/მომავალი)", "will / must / should / can / might + BE + V3", "This form must be signed in ink."],
        ["💡 Modal Perfect Passive (წარსული)", "should / must / could + HAVE BEEN + V3", "The door should have been locked last night."]
      ],
      examples: [
        ["We cannot use the main hall today because it is being painted.", "დღეს მთავარ დარბაზს ვერ გამოვიყენებთ, რადგან ახლა იღებება (is being painted)."],
        ["My car has been repaired, so I can drive you to the airport.", "ჩემი მანქანა უკვე შეკეთდა, ასე რომ შემიძლია აეროპორტში გაგიყვანო (has been repaired)."],
        ["When we arrived at the hotel, our room was still being cleaned.", "როდესაც სასტუმროში მივედით, ჩვენს ნომერს ჯერ კიდევ ალაგებდნენ (was being cleaned)."],
        ["All flights have been cancelled due to the heavy fog.", "ძლიერი ნისლის გამო ყველა რეისი გაუქმებულია."],
        ["Passports must be shown at the boarding gate.", "ჩასხდომის გასასვლელთან პასპორტების წარდგენა სავალდებულოა."],
        ["By the time the police arrived, the jewels had been stolen.", "როდესაც პოლიცია მივიდა, ძვირფასეულობა უკვე მოპარული იყო (had been stolen)."],
        ["The results of the competition will be announced tomorrow.", "კონკურსის შედეგები ხვალ გამოცხადდება."],
        ["This fragile parcel should have been packed more carefully.", "ეს მსხვრევადი ამანათი უფრო ფრთხილად უნდა შეფუთულიყო."]
      ],
      mistakes: [
        ["✗ The road is repairing right now.", "✓ The road is being repaired right now. (მიმდინარე ვნებითში აუცილებელია being)"],
        ["✗ The documents have sent this morning.", "✓ The documents have been sent this morning. (Perfect Passive-ში აუცილებელია been)"],
        ["✗ This medicine must took twice a day.", "✓ This medicine must be taken twice a day. (მოდალური + be + V3)"]
      ],
      drills: [
        "Excuse the mess; the office ___ redecorated at the moment.|is being|is|has been|was",
        "Over a thousand trees ___ planted in the park since last spring.|have been|have|are being|were",
        "All mobile phones must ___ switched off during the examination.|be|been|being|to be",
        "When I checked my account, the money ___ already been transferred.|had|has|was|is",
        "A new metro station ___ built in our district right now.|is being|has been|is|was",
        "The invitations ___ sent out by next Friday.|will have been|will be being|are|were",
        "While the roof ___ repaired, water leaked into the bedroom.|was being|has been|is being|had",
        "This secret ___ never be revealed to anyone.|must|is|has|was",
        "Have the exam papers ___ graded yet?|been|be|being|were",
        "The ancient vase ___ broken during transport last month; it should have been packed better.|was|has been|is being|had",
        "Tickets can ___ purchased online or at the box office.|be|been|being|to be",
        "By the time we got to the shop, all the fresh bread ___ sold.|had been|has been|was being|is",
        "Look! The old factory chimney ___ demolished right now.|is being|has been|was|is",
        "The patient is ___ examined by the doctor at the moment.|being|been|be|to be",
        "This problem should ___ solved a long time ago.|have been|be|been|being",
        "Why hasn't the rubbish ___ collected today?|been|be|being|was",
        "The new safety regulations will ___ introduced next month.|be|been|being|have",
        "He realized that he ___ followed by a strange car.|was being|has been|is|had",
        "No dictionaries may ___ used in the test room.|be|been|being|to be",
        "The winner ___ just been chosen by the judges.|has|is|was|had"
      ]
    },
    {
      num: 50, level: "B2",
      title: "კაუზატიური ფორმა: Have / Get something done",
      subtitle: "Causative Constructions (have/get + object + V3, make/let someone do)",
      rule: "როდესაც რაიმე მომსახურებას თავად კი არ ვასრულებთ, არამედ სპეციალისტს ვუკვეთავთ (მაგ.: თმის შეჭრა, მანქანის შეკეთება, სახლის შეღებვა), ვიყენებთ კაუზატიურ კონსტრუქციას: „have (ან get) + ობიექტი + ზმნის მე-3 ფორმა (V3)“. სიტყვების წყობა გადამწყვეტია: I had my car repaired (და არა: I had repaired my car!). ასევე, ეს ფორმა გამოიყენება უსიამოვნო შემთხვევის აღსაწერად (He had his wallet stolen). აქტიურ კაუზატივში: make someone do (აიძულო, უ-to-ოდ), let someone do (ნება დართო, უ-to-ოდ), get someone to do (დაითანხმო, to-თი).",
      formulas: [
        ["+ ყველა დროში (Have + Obj + V3)", "Present: I have my hair cut | Past: I had my car serviced | Future: I will have it painted", "We are having the roof repaired right now."],
        ["- Get + Object + V3 (სასაუბრო)", "I must get my watch fixed. / Where did you get your hair cut?", "Get უფრო არაფორმალურია ან ხაზს უსვამს ძალისხმევას."],
        ["? Make / Let + პირი + V1 (უ-to-ოდ!)", "The teacher made him rewrite the essay. / Let me explain.", "ვნებით გვარში make-ს უბრუნდება to: He was made to wait!"],
        ["💡 Get + პირი + to V1", "I got my brother to help me move the sofa.", "დავითანხმე ჩემი ძმა, რომ დამხმარებოდა."]
      ],
      examples: [
        ["I have my eyes tested by an optician every two years.", "ყოველ ორ წელიწადში ერთხელ ოკულისტთან ვიმოწმებ მხედველობას."],
        ["We had our living room painted last month.", "გასულ თვეს მისაღები ოთახი შევაღებინეთ (ხელოსანს)."],
        ["She is having her wedding dress made by a famous designer.", "მას საქორწილო კაბას ცნობილი დიზაინერი უკერავს."],
        ["Where did you get your bicycle repaired?", "სად შეაკეთებინე ველოსიპედი?"],
        ["He had his passport stolen while he was travelling on the train.", "მას მატარებლით მგზავრობისას პასპორტი მოჰპარეს."],
        ["The sad film made everyone in the cinema cry.", "სევდიანმა ფილმმა კინოთეატრში ყველა აატირა (make + პირი + cry)."],
        ["My parents never let me stay out late on school nights.", "მშობლები სკოლის დღეებში გვიანობამდე გარეთ დარჩენის ნებას არ მრთავდნენ."],
        ["The passengers were made to wait for three hours at the terminal.", "მგზავრები აიძულეს სამი საათი დაეცადათ ტერმინალში (Passive -> made to wait)."]
      ],
      mistakes: [
        ["✗ I had repaired my watch yesterday.", "✓ I had my watch repaired yesterday. (ჯერ მოდის ობიექტი my watch, შემდეგ V3 repaired!)"],
        ["✗ She made her son to clean his room.", "✓ She made her son clean his room. (აქტიურ გვარში make-ის შემდეგ to არ იწერება)"],
        ["✗ I got the mechanic fix the brakes.", "✓ I got the mechanic to fix the brakes / I got the brakes fixed."]
      ],
      drills: [
        "Your hair looks nice! Where did you ___?|have it cut|have cut it|cut it have|had it cut",
        "We are having a new heating system ___ in our house this week.|installed|install|installing|to install",
        "My coat is dirty; I need to get it ___.|cleaned|clean|cleaning|to clean",
        "The strict teacher made the students ___ their phones on the desk.|put|to put|putting|puts",
        "In the passive voice: The students were made ___ their phones on the desk.|to put|put|putting|puts",
        "I finally got my brother ___ me with the garden work.|to help|help|helping|helped",
        "How often do you have your car ___?|serviced|service|servicing|to service",
        "The customs officer made the traveller ___ his suitcase.|open|to open|opening|opened",
        "She had her purse ___ on the crowded bus yesterday.|stolen|steal|stole|stealing",
        "Will your parents let you ___ to the festival with us?|go|to go|going|went",
        "I can't read small print; I must have my eyes ___.|tested|test|testing|to test",
        "They ___ their roof damaged by the storm last night.|had|made|let|did",
        "We are going to ___ the kitchen floor tiled next month.|have|make|let|do",
        "What made you ___ your mind so suddenly?|change|to change|changing|changed",
        "He never lets anyone ___ his acoustic guitar.|touch|to touch|touching|touched",
        "Before the trip, I had the brakes of my bicycle ___.|checked|check|checking|to check",
        "Can I get you ___ this document into English for me?|to translate|translate|translating|translated",
        "She ___ her tooth filled at the dentist's yesterday.|had / got|made|let|did",
        "Peeling onions always makes my eyes ___.|water|to water|watering|watered",
        "We had the carpets ___ before moving into the new flat.|washed|wash|washing|to wash"
      ]
    },
    {
      num: 51, level: "B2",
      title: "ირიბი კითხვები და სპეციალური ზმნები (Reported Questions & Reporting Verbs)",
      subtitle: "Reporting Questions (if/whether) & Verbs (advise, suggest, apologize, accuse)",
      rule: "1) კითხვის ირიბ თქმაში გადაყვანისას (He asked me...) კითხვითი სიტყვათწყობა იცვლება ჩვეულებრივი თხრობითი წყობით (ჯერ ქვემდებარე, შემდეგ ზმნა!) და დამხმარე ზმნები do/does/did ქრება: \"Where do you live?\" -> He asked me where I lived. თუ კითხვა უკითხვო სიტყვით იწყება (Yes/No question), ვიყენებთ კავშირს if ან whether. 2) სპეციალური ზმნები: promise/refuse/offer + to V1; advise/warn/remind + პირი + to V1; suggest/admit/deny + V-ing; apologize for / insist on / accuse someone of + V-ing.",
      formulas: [
        ["+ Wh- კითხვა ირიბად", "asked + Wh- + Subject + Verb (კითხვითი ინვერსია ქრება!)", "\"Where is the bank?\" -> She asked where the bank was."],
        ["- Yes/No კითხვა ირიბად", "asked / wanted to know + if / whether + Subject + Verb", "\"Are you ready?\" -> He asked if/whether I was ready."],
        ["? Reporting Verbs + to V1", "offer/promise/refuse/agree + to V1 | advise/remind/warn + someone + to V1", "He reminded me to lock the door."],
        ["💡 Reporting Verbs + V-ing", "suggest / admit / deny + V-ing | apologize for / accuse of + V-ing", "She suggested going to the museum."]
      ],
      examples: [
        ["He asked me where I had bought my jacket.", "მან მკითხა, სად ვიყიდე ქურთუკი (არა: where did I buy!)."],
        ["She wanted to know whether we were coming to the party.", "მას აინტერესებდა, მოვდიოდით თუ არა წვეულებაზე."],
        ["The receptionist asked what time we would check out.", "ადმინისტრატორმა იკითხა, რომელ საათზე გავიდოდით ნომრიდან."],
        ["The doctor advised him to get more physical exercise.", "ექიმმა ურჩია მას მეტი ფიზიკური ვარჯიში (advise someone to do)."],
        ["Tom suggested taking a taxi because it was raining.", "ტომმა ტაქსის აყვანა შემოგვთავაზა, რადგან წვიმდა (suggest + V-ing!)."],
        ["She apologized for arriving late to the rehearsal.", "მან ბოდიში მოიხადა რეპეტიციაზე დაგვიანებისთვის (apologize for + V-ing)."],
        ["The boy denied breaking the classroom window.", "ბიჭმა უარყო საკლასო ოთახის ფანჯრის გატეხვა (deny + V-ing)."],
        ["He insisted on paying for everyone's coffee.", "მან დაიჟინა, რომ ყველას ყავის ფულს თავად გადაიხდიდა (insist on + V-ing)."]
      ],
      mistakes: [
        ["✗ She asked me where did I live.", "✓ She asked me where I lived. (ირიბ კითხვაში did ქრება და ზმნა გადადის წარსულში)"],
        ["✗ He suggested me to take a rest.", "✓ He suggested taking a rest / He suggested that I take a rest. (suggest-ს არასდროს მოსდევს me to do!)"],
        ["✗ They accused him for stealing the watch.", "✓ They accused him of stealing the watch. (accuse someone OF + V-ing)"]
      ],
      drills: [
        "\"Where do you work?\" -> She asked me where ___.|I worked|did I work|do I work|I work",
        "\"Have you seen the film?\" -> He asked ___ I had seen the film.|if / whether|that|what|did",
        "Anna suggested ___ for a walk along the beach.|going|to go|me to go|go",
        "He apologized ___ forgetting my birthday.|for|of|to|about",
        "\"What time does the train leave?\" -> The tourist asked what time the train ___.|left|did leave|leaves|does leave",
        "The lifeguard warned the swimmers ___ swim too far from the shore.|not to|don't|to not|against to",
        "The suspect denied ___ anywhere near the bank that night.|being|to be|be|been",
        "My sister reminded me ___ some bread on my way home.|to buy|buying|buy|for buying",
        "They accused the clerk ___ falsifying the records.|of|for|about|on",
        "\"Can you speak Italian?\" -> She asked me whether I ___ speak Italian.|could|can|will|did",
        "He offered ___ us drive to the airport.|to help|helping|help|for helping",
        "She insisted ___ carrying her own suitcase.|on|in|for|to",
        "\"Why did you leave early?\" -> He asked her why she ___ early.|had left|did leave|left did|leaves",
        "The dentist advised me ___ eat so many sugary snacks.|not to|don't|not eating|to not",
        "He admitted ___ a mistake in the calculation.|making|to make|make|made",
        "She congratulated her brother ___ passing his final exams.|on|for|with|about",
        "\"Are the shops open?\" -> He wondered if the shops ___ open.|were|are|was|have been",
        "The manager refused ___ the complaint.|to discuss|discussing|discuss|for discussing",
        "He blamed the bad weather ___ the delay.|for|on|of|about",
        "Do you know what time ___? (ჩართული კითხვა — Embedded Question)|the library closes|does the library close|closes the library|is the library close"
      ]
    },
    {
      num: 52, level: "B2",
      title: "ჩართული მიმართებითი წინადადებები (Non-Defining Relative Clauses)",
      subtitle: "Extra Information Clauses with Commas (, which / , who) & Prepositions",
      rule: "Non-Defining Relative Clause გვაწვდის დამატებით, არასავალდებულო ინფორმაციას უკვე ცნობილ პირზე ან საგანზე და ყოველთვის გამოიყოფა მძიმეებით (Commas)! უმნიშვნელოვანესი წესი: მძიმის შემდეგ ნაცვალსახელი „that“ არასდროს იწერება — ადამიანებთან ვიყენებთ მხოლოდ who/whom, ნივთებთან კი — მხოლოდ which. ასევე, „, which“ შეიძლება მიემართებოდეს მთლიან წინა წინადადებას („რაც... / რამაც...“).",
      formulas: [
        ["+ მძიმეებით (, who / , which)", "My brother, who lives in Madrid, is visiting us. (მძიმის შემდეგ that აკრძალულია!)", "The Colosseum, which is in Rome, attracts millions."],
        ["- , which = მთლიანი წინადადება", "He passed all his exams, which surprised everyone. (რამაც ყველა გააოცა — არა what!)", "It rained all day, which ruined our picnic."],
        ["? წინდებული + which / whom", "in which (= where) | at which | with whom | to whom (ფორმალური სტილი)", "The company for which she works is international."],
        ["💡 რაოდენობა + of whom/which", "most of whom | both of which | none of which | some of whom", "She has three brothers, all of whom are engineers."]
      ],
      examples: [
        ["My grandfather, who is eighty-five, goes for a walk every morning.", "ჩემი ბაბუა, რომელიც 85 წლისაა, ყოველ დილით სეირნობს."],
        ["The sun, which is a star, provides heat and light to the Earth.", "მზე, რომელიც ვარსკვლავია, სითბოსა და სინათლეს აწვდის დედამიწას."],
        ["Tom arrived an hour late, which made the host very angry.", "ტომი ერთი საათის დაგვიანებით მოვიდა, რამაც მასპინძელი ძალიან გააბრაზა."],
        ["We visited the house in which Mozart was born.", "ჩვენ მოვინახულეთ სახლი, რომელშიც მოცარტი დაიბადა (in which = where)."],
        ["They interviewed ten candidates, none of whom had enough experience.", "მათ ათ კანდიდატთან ჩაატარეს გასაუბრება, რომელთაგან არცერთს არ ჰქონდა საკმარისი გამოცდილება."],
        ["I bought two jackets, both of which were on sale.", "ორი ქურთუკი ვიყიდე, რომელთაგან ორივე ფასდაკლებაზე იყო."],
        ["Mrs Green, whose garden won first prize, loves growing orchids.", "ქალბატონ გრინს, რომლის ბაღმაც პირველი პრიზი მოიგო, ორქიდეების გაზრდა უყვარს."],
        ["The gentleman to whom I spoke yesterday is the director.", "ბატონი, რომელსაც გუშინ ვესაუბრე, დირექტორია (to whom)."]
      ],
      mistakes: [
        ["✗ Berlin, that is the capital of Germany, is a vibrant city.", "✓ Berlin, which is the capital of Germany, is a vibrant city. (მძიმის შემდეგ that არ იწერება!)"],
        ["✗ She lent me her umbrella, what was very kind of her.", "✓ She lent me her umbrella, which was very kind of her. (მთლიანი წინადადების შეფასებისას იწერება , which)"],
        ["✗ He has two sons, both of them are doctors.", "✓ He has two sons, both of whom are doctors. (მძიმის შემდეგ ერთ წინადადებაში საჭიროა whom)"]
      ],
      drills: [
        "Mount Everest, ___ is in the Himalayas, is the highest peak on Earth.|which|that|where|what",
        "He forgot to lock the car, ___ was very careless of him.|which|what|that|who",
        "My aunt, ___ lives in Toronto, is coming to visit us next month.|who|that|which|whom",
        "The hotel in ___ we stayed had a wonderful view of the bay.|which|where|that|what",
        "She wrote three novels, two of ___ became bestsellers.|which|them|that|whom",
        "The professor with ___ I discussed my thesis gave me great advice.|whom|who|which|that",
        "Our old television, ___ we bought ten years ago, finally broke down.|which|that|what|where",
        "The team invited twenty guests, most of ___ arrived on time.|whom|them|which|who",
        "The train was delayed for three hours, ___ meant we missed the connection.|which|what|that|it",
        "Dr Miller, ___ research is famous worldwide, will give a lecture today.|whose|who's|who|which",
        "The town ___ we spent our holidays is famous for its castle. (წინდებულის გარეშე)|where|which|that|what",
        "The reason for ___ he resigned remains a mystery.|which|why|that|what",
        "Napoleon, ___ was born in Corsica, became Emperor of France.|who|that|which|whom",
        "I tried on three coats, none of ___ fitted me properly.|which|them|that|whom",
        "She passed the driving test on her first attempt, ___ surprised everyone.|which|what|that|who",
        "The chairs on ___ we were sitting were very uncomfortable.|which|where|that|whom",
        "My neighbour, ___ dog barks all night, apologized to us this morning.|whose|who|which|that",
        "The year in ___ the university was founded is 1918.|which|when|where|that",
        "He offered to carry my heavy bags, ___ I appreciated very much.|which|what|that|who",
        "რომელი ნაცვალსახელის გამოყენებაა აკრძალული მძიმის შემდეგ (Non-Defining Clause-ში)?|that|which|who|whose"
      ]
    },
    {
      num: 53, level: "B2",
      title: "მოდალური ზმნები წარსულის შეფასებისთვის (Past Modals: Must / Can't / Should have + V3)",
      subtitle: "Past Deduction, Criticism & Unnecessary Actions (Needn't have V3)",
      rule: "როდესაც მოდალურ ზმნას მოსდევს „have + V3“, იგი ეხება წარსულს: 1) „must have + V3“ — 99%-იანი დასკვნა, რომ რაღაც ნამდვილად მოხდა წარსულში („აშკარად მოხდა“); 2) „can't / couldn't have + V3“ — 99%-იანი დასკვნა, რომ რაღაც გამორიცხულია მომხდარიყო; 3) „may / might / could have + V3“ — ვარაუდი წარსულზე („შესაძლოა მოხდა“); 4) „should have / ought to have + V3“ — წარსულის კრიტიკა ან სინანული („უნდა გაგეკეთებინა, მაგრამ არ გააკეთე!“); 5) „needn't have + V3“ — ტყუილად გაკეთებული მოქმედება.",
      formulas: [
        ["+ წარსული დასკვნა (+)", "must have + V3 (აშკარად მოხდა წარსულში)", "The grass is wet; it must have rained last night."],
        ["- წარსული დასკვნა (-)", "can't / couldn't have + V3 (გამორიცხულია მომხდარიყო)", "He can't have stolen the watch; he was with me all day."],
        ["? კრიტიკა / სინანული", "should (shouldn't) have + V3 (უნდა გაგეკეთებინა / არ უნდა გაგეკეთებინა)", "You should have told me the truth earlier!"],
        ["💡 Needn't have V3", "needn't have + V3 (არ იყო საჭირო, მაგრამ მაინც გააკეთე ტყუილად)", "I needn't have taken an umbrella; it didn't rain at all."]
      ],
      examples: [
        ["I can't find my wallet; I must have dropped it in the taxi.", "საფულეს ვერ ვპოულობ; აშკარად ტაქსიში დამივარდა."],
        ["Sarah can't have seen you yesterday; she has been in Paris all week!", "სარა გუშინ ვერ დაგინახავდა (გამორიცხულია); მთელი კვირაა პარიზშია!"],
        ["You should have set the alarm clock last night; now we are late.", "გუშინ ღამით მაღვიძარა უნდა დაგეყენებინა (მაგრამ არ დააყენე)."],
        ["He shouldn't have spoken to his mother so rudely.", "მას დედამისისთვის ასე უხეშად არ უნდა მიემართა."],
        ["Why hasn't Tom arrived yet? — He might have missed the train.", "რატომ არ მოვიდა ტომი აქამდე? — შესაძლოა მატარებელზე დააგვიანდა."],
        ["You needn't have bought so much bread; we already have two loaves.", "არ იყო საჭირო ამდენი პურის ყიდვა (ტყუილად იყიდე); ორი პური უკვე გვაქვს."],
        ["Be careful! You could have hurt yourself jumping off that wall.", "ფრთხილად! შეიძლებოდა თავი დაგეზიანებინა იმ კედლიდან გადმოხტომისას."],
        ["Who left the front door open? — It must have been the wind.", "ვინ დატოვა წინა კარი ღია? — აშკარად ქარი იქნებოდა."]
      ],
      mistakes: [
        ["✗ You should told me about the problem yesterday.", "✓ You should have told me about the problem yesterday. (წარსულში აუცილებელია have + V3)"],
        ["✗ He must forgot our appointment.", "✓ He must have forgotten our appointment. (must have + forgotten)"],
        ["✗ She mustn't have seen the sign (როცა ვამბობთ: გამორიცხულია დაენახა).", "✓ She can't have seen the sign. (წარსულ უარყოფით დასკვნაში ვიყენებთ can't have + V3)"]
      ],
      drills: [
        "The streets are covered with snow; it ___ snowed heavily during the night.|must have|should have|can't have|needn't have",
        "You ___ left your bag in the library yesterday; why don't you call them?|might have|can't|must to|should",
        "He ___ passed the exam without studying; the test was extremely difficult!|can't have|must have|should have|needn't have",
        "Why didn't you ask for help? You ___ carried that heavy wardrobe alone!|shouldn't have|mustn't have|can't have|might not",
        "We cooked a huge dinner for ten people, but only four came; we ___ cooked so much.|needn't have|mustn't have|can't have|couldn't",
        "I didn't hear the phone ring; I ___ been asleep.|must have|should have|can't have|needn't have",
        "You ___ checked the timetable before leaving; the last bus left an hour ago!|should have|must have|can't have|may have",
        "That ___ been David you saw at the café; he moved to Australia last month.|can't have|must have|should have|might have",
        "She looks very happy after the interview; it ___ gone well!|must have|can't have|shouldn't have|needn't have",
        "Where is the cake that was on the plate? — The children ___ eaten it.|must have|can't|should|ought",
        "You ___ watered the garden this morning; it started raining ten minutes later!|needn't have|mustn't have|can't have|couldn't have",
        "He was driving far too fast; he ___ caused a serious accident!|could have|can have|must|should",
        "I'm sorry I'm late; I ___ left home earlier.|should have|must have|can't have|may have",
        "Nobody answered the door when I knocked; they ___ gone out.|must have / might have|can't have|should have|needn't have",
        "You ___ bought a ticket for the child; admission is free for under-tens.|needn't have|mustn't have|can't have|may not have",
        "She didn't say hello when she walked past; she ___ seen me.|can't have / might not have|must have|should have|needn't have",
        "The window is broken from the inside, so the burglar ___ entered through it.|can't have|must have|should have|needn't have",
        "I failed the test. I ___ spent the whole weekend playing video games.|shouldn't have|mustn't have|can't have|needn't have",
        "How did they know our address? — Someone ___ given it to them.|must have|can't have|shouldn't have|needn't have",
        "We had plenty of petrol, so we ___ stopped at the petrol station.|didn't need to / needn't have|mustn't have|can't have|should have"
      ]
    },
    {
      num: 54, level: "B2",
      title: "Gerund თუ Infinitive? — ზმნები, რომლებიც მნიშვნელობას იცვლიან",
      subtitle: "Verbs Followed by -ing or to-infinitive with a Change in Meaning",
      rule: "ზოგიერთ ზმნას (remember, forget, regret, stop, try, go on) შეიძლება მოსდევდეს როგორც V-ing, ისე to + V1, მაგრამ წინადადების აზრი რადიკალურად იცვლება! 1) remember / forget / regret + V-ing ეხება უკვე მომხდარ წარსულ ფაქტს („მახსოვს, როგორ გავაკეთე“), ხოლო + to V1 ეხება შესასრულებელ ვალდებულებას („არ დაგავიწყდეს გაკეთება“). 2) stop + V-ing ნიშნავს მოქმედების საერთოდ შეწყვეტას, ხოლო stop + to V1 — გზად გაჩერებას სხვა რამის გასაკეთებლად. 3) try + V-ing არის ექსპერიმენტი/მეთოდის მოსინჯვა, ხოლო try + to V1 — ძალისხმევის გაწევა რთული საქმისთვის.",
      formulas: [
        ["+ Remember / Forget", "+ V-ing (წარსული მოგონება: I remember locking it) vs. + to V1 (ვალდებულება: Remember to lock it!)", "I'll never forget seeing the Alps."],
        ["- Stop", "stop + V-ing (შეწყვეტა: He stopped smoking) vs. stop + to V1 (გაჩერება მიზნით: He stopped to rest)", "We stopped to buy some water."],
        ["? Try", "try + V-ing (მოსინჯე როგორც გამოსავალი) vs. try + to V1 (ეცადე, იწვალე)", "If you have a headache, try drinking some water."],
        ["💡 Regret & Need", "regret + V-ing (ვნანობ წარსულს) vs. regret + to inform (ვწუხვარ რომ ახლა უნდა გითხრათ)", "The grass needs cutting (= needs to be cut)."]
      ],
      examples: [
        ["I clearly remember locking the front door before we left.", "მკაფიოდ მახსოვს, როგორ ჩავკეტე წინა კარი წამოსვლამდე (უკვე მოხდა -> V-ing)."],
        ["Please remember to post this letter on your way to school.", "გთხოვ, არ დაგავიწყდეს ამ წერილის გაგზავნა სკოლისკენ მიმავალ გზაზე (ვალდებულება -> to post)."],
        ["I will never forget seeing the ocean for the first time.", "არასდროს დამავიწყდება, პირველად როგორ ვნახე ოკეანე (წარსული მოგონება -> seeing)."],
        ["Don't forget to turn off the oven in twenty minutes.", "არ დაგავიწყდეს ღუმელის გამორთვა ოც წუთში."],
        ["After driving for three hours, we stopped to have a cup of coffee.", "სამსაათიანი მგზავრობის შემდეგ გავჩერდით, რათა ყავა დაგველია (მიზანი -> to have)."],
        ["Doctor's advice: You must stop eating so much fast food.", "ექიმის რჩევა: უნდა შეწყვიტოთ ამდენი სწრაფი კვების ჭამა (შეწყვეტა -> eating)."],
        ["If the soup is too bland, try adding a little lemon juice.", "თუ წვნიანი უგემურია, სცადე (როგორც ექსპერიმენტი) ცოტა ლიმონის წვენის დამატება."],
        ["I tried to lift the heavy wardrobe, but it was impossible.", "ვეცადე (ძალა დავატანე) მძიმე კარადის აწევა, მაგრამ შეუძლებელი აღმოჩნდა."]
      ],
      mistakes: [
        ["✗ I'll never forget to visit Venice in 2022.", "✓ I'll never forget visiting Venice in 2022. (წარსული მოგონება ითხოვს V-ing-ს)"],
        ["✗ On my way home, I stopped buying some bread.", "✓ On my way home, I stopped to buy some bread. (გავჩერდი პურის საყიდლად -> to buy)"],
        ["✗ We regret informing you that your flight is delayed.", "✓ We regret to inform you that your flight is delayed. (ოფიციალური ცუდი ამბის შეტყობინება -> to inform)"]
      ],
      drills: [
        "I clearly remember ___ my keys in my bag this morning, but they aren't here.|putting|to put|put|putted",
        "Don't forget ___ your alarm clock before you go to sleep tonight!|to set|setting|set|for setting",
        "We were tired after walking for hours, so we stopped ___ on a bench.|to rest|resting|rest|for rest",
        "The doctor told him to stop ___ coffee late at night.|drinking|to drink|drink|drank",
        "I'll never forget ___ the northern lights in Norway last winter.|seeing|to see|see|saw",
        "If the computer screen is frozen, try ___ the device.|restarting|to restart|restart|restarted",
        "The mountaineers tried ___ the summit before the storm, but they had to turn back.|to reach|reaching|reach|reached",
        "We regret ___ passengers that the 5:15 train has been cancelled.|to inform|informing|inform|informed",
        "He now regrets ___ university before finishing his degree.|leaving|to leave|leave|left",
        "Did you remember ___ the kitchen window before leaving the house?|to close|closing|close|closed",
        "My grandmother still remembers ___ her first radio when she was ten.|getting|to get|get|got",
        "On our way to the coast, we stopped ___ some photos of the castle.|to take|taking|take|took",
        "Please stop ___ that noise; I am trying to read!|making|to make|make|made",
        "Your jacket is very dirty; it needs ___. (პასიური მნიშვნელობით)|washing|to wash|wash|washed",
        "After finishing the first topic, the teacher went on ___ the next grammar rule.|to explain|explaining|explain|explained",
        "He went on ___ for two hours without taking a single break. (გააგრძელა იგივე)|talking|to talk|talk|talked",
        "I tried ___ her three times, but her phone was switched off.|calling / to call|call|called|for calling",
        "I'm sorry, I forgot ___ milk at the supermarket.|to buy|buying|buy|bought",
        "Do you regret ___ him the truth about what happened?|telling|to tell|tell|told",
        "The walls of this room need ___ before we move the furniture in.|painting / to be painted|to paint|paint|painted"
      ]
    },
    {
      num: 55, level: "B2",
      title: "ჩვევა წარსულში და შეჩვევა აწმყოში: Used to vs. Be used to vs. Get used to",
      subtitle: "Used to + V1 vs. Be / Get used to + V-ing / Noun",
      rule: "ეს სამი კონსტრუქცია ხშირად ერევათ ერთმანეთში, არადა სრულიად სხვადასხვა მნიშვნელობა და ფორმულა აქვთ! 1) „used to + V1 (საწყისი ზმნა)“ — წარსული ჩვევა, რომელიც აღარ გვაქვს („ადრე ვაკეთებდი“); 2) „be used to + V-ing / არსებითი სახელი“ — უკვე შეჩვეული ვარ რაღაცას, ჩემთვის უცხო აღარ არის (აქ to წინდებულია, ამიტომ მოსდევს -ing!); 3) „get used to + V-ing / არსებითი სახელი“ — შეჩვევის პროცესი („ვეჩვევი / შევეჩვიე“).",
      formulas: [
        ["+ წარსული ჩვევა", "Subject + used to + V1 (საწყისი ზმნა!)", "I used to drive to work, but now I take the metro."],
        ["- უკვე შეჩვეული ვარ", "am / is / are / was + used to + V-ing / Noun", "He is used to waking up early. (მიჩვეულია ადრე გაღვიძებას)"],
        ["? შეჩვევის პროცესი", "get / got / getting / will get + used to + V-ing / Noun", "You will soon get used to living in a big city."],
        ["💡 მთავარი განმასხვავებელი", "თუ used to-ს წინ დგას be ან get, შემდეგ აუცილებლად იწერება V-ing (ან არსებითი სახელი)!", "I used to live here vs. I am used to living here."]
      ],
      examples: [
        ["She used to live in a warm climate, so she isn't used to the cold winter yet.", "ის ადრე თბილ კლიმატში ცხოვრობდა (used to live), ამიტომ ცივ ზამთარს ჯერ არ არის მიჩვეული (isn't used to)."],
        ["I am a baker, so I am used to getting up at four in the morning.", "მე ხაბაზი ვარ, ამიტომ შეჩვეული ვარ დილის ოთხ საათზე ადგომას (am used to getting up)."],
        ["It took me a few weeks to get used to driving on the left side in Britain.", "რამდენიმე კვირა დამჭირდა ბრიტანეთში მარცხენა მხარეს მანქანის ტარებასთან შესაჩვევად."],
        ["Did you use to play chess when you were at school?", "თამაშობდი ხოლმე ჭადრაკს, როცა სკოლაში სწავლობდი?"],
        ["Are you used to spicy food, or is this curry too hot for you?", "მიჩვეული ხართ ცხარე საკვებს, თუ ეს კერძი ზედმეტად ცხარეა თქვენთვის?"],
        ["At first the new glasses felt strange, but I soon got used to wearing them.", "თავიდან ახალი სათვალე უცხოდ მეჩვენა, მაგრამ მალე შევეჩვიე მის ტარებას."],
        ["He didn't use to drink green tea, but now he drinks it daily.", "ადრე ის მწვანე ჩაის არ სვამდა, მაგრამ ახლა ყოველდღე სვამს."],
        ["She can't get used to working in such a noisy office.", "ის ვერ ეჩვევა ასეთ ხმაურიან ოფისში მუშაობას."]
      ],
      mistakes: [
        ["✗ I am used to wake up early every day.", "✓ I am used to waking up early every day. (am used to-ს მოსდევს V-ing!)"],
        ["✗ It took him a month to get used to live alone.", "✓ It took him a month to get used to living alone. (get used to + living)"],
        ["✗ I used to working here ten years ago.", "✓ I used to work here ten years ago. (be/get-ის გარეშე used to-ს მოსდევს V1: work)"]
      ],
      drills: [
        "I have lived in London for five years, so I am used to ___ in heavy traffic.|driving|drive|drove|driven",
        "When I was a teenager, I used to ___ basketball every afternoon.|play|playing|played|plays",
        "It took her several months to get used to ___ night shifts at the hospital.|working|work|worked|works",
        "He isn't used to ___ in public, so he feels nervous before the speech.|speaking|speak|spoke|spoken",
        "Did your brother ___ have long hair when he was at university?|use to|used to|be used to|get used to",
        "Don't worry about the noise; you will soon ___ it.|get used to|used to|use to|be use to",
        "She ___ work at a bookshop before she became a librarian.|used to|is used to|got used to|uses to",
        "Are you used to ___ up so early in the morning?|getting|get|got|gets",
        "I didn't ___ like dark chocolate, but now it is my favourite.|use to|used to|be used to|got used to",
        "After moving to Norway, we had to get used to ___ warm clothes in April.|wearing|wear|wore|worn",
        "Fishermen are used to ___ out at sea in rough weather.|being|be|been|were",
        "There ___ be a small wooden bridge here, but it was replaced last year.|used to|was used to|got used to|use to",
        "I still can't get used to ___ with this new keyboard.|typing|type|typed|types",
        "He ___ living alone because he has lived by himself for ten years.|is used to|used to|use to|uses to",
        "When we lived by the coast, we ___ go swimming every morning.|used to|were used to|got used to|use to",
        "She found the local accent difficult at first, but she soon ___ it.|got used to|used to|use to|was use to",
        "I am not used to ___ such big meals late in the evening.|eating|eat|ate|eaten",
        "Where did they ___ spend their summer holidays?|use to|used to|be used to|get used to",
        " astronauts have to get used to ___ in zero gravity.|living|live|lived|lives",
        "My grandmother wasn't used to ___ a smartphone, so I taught her.|using|use|used|uses"
      ]
    },
    {
      num: 56, level: "B2",
      title: "წინარე წარსული განგრძობითი დრო (Past Perfect Continuous — Had been + V-ing)",
      subtitle: "Past Perfect Continuous vs. Past Perfect Simple",
      rule: "Past Perfect Continuous (had been + V-ing) არის Present Perfect Continuous-ის წარსული ანალოგი. იგი გამოიყენება მოქმედებისთვის, რომელიც წარსულში გარკვეული დროის განმავლობაში მიმდინარეობდა მეორე წარსულ მოქმედებამდე (We had been waiting for an hour when the bus finally arrived), ან როცა ხანგრძლივმა წარსულმა პროცესმა დატოვა აშკარა შედეგი წარსულშივე (The ground was wet because it had been raining). გახსოვდეთ: ხანგრძლივ პროცესზე აქცენტისას ვიყენებთ had been + V-ing-ს, ხოლო დასრულებულ რაოდენობასა და Stative ზმნებთან — had + V3-ს.",
      formulas: [
        ["+ დადებითი", "Subject + had been + V-ing (for / since... before Past Simple)", "They had been walking for three hours before they found the camp."],
        ["- უარყოფითი", "Subject + hadn't been + V-ing", "He hadn't been paying attention, so he missed the exit."],
        ["? კითხვითი", "How long + had + Subject + been + V-ing (when/before...)?", "How long had you been waiting when the train arrived?"],
        ["💡 პროცესი vs. რაოდენობა", "had been driving for 5 hours (ხანგრძლივობა) vs. had driven 300 km (რაოდენობა)", "Stative ზმნები (know, own, belong): We had known each other for years."]
      ],
      examples: [
        ["We had been driving for four hours when the car broke down.", "ოთხი საათის განმავლობაში მივდიოდით მანქანით, როდესაც იგი გაფუჭდა."],
        ["Her eyes were red because she had been chopping onions.", "თვალები წითელი ჰქონდა, რადგან ხახვს ჭრიდა (წარსული შედეგის მიზეზი)."],
        ["How long had they been playing tennis before it started to rain?", "რამდენ ხანს თამაშობდნენ ისინი ჩოგბურთს, სანამ წვიმა დაიწყებოდა?"],
        ["He was exhausted because he had been working in the garden all day.", "ის ქანცგაწყვეტილი იყო, რადგან მთელი დღე ბაღში მუშაობდა."],
        ["She had been studying English for five years before she visited London.", "ის ხუთი წელი სწავლობდა ინგლისურს, სანამ ლონდონს ეწვეოდა."],
        ["By the time I arrived, Tom had already drunk three cups of coffee.", "როდესაც მივედი, ტომს უკვე სამი ფინჯანი ყავა ჰქონდა დალეული (რაოდენობა -> had drunk)."],
        ["I had known him for ten years before we became business partners.", "ათი წელი ვიცნობდი მას, სანამ პარტნიორები გავხდებოდით (know -> had known)."],
        ["The runners were out of breath because they had been sprinting.", "მორბენლებს სუნთქვა უჭირდათ, რადგან სწრაფად მირბოდნენ."]
      ],
      mistakes: [
        ["✗ We were waiting for two hours when the train finally arrived.", "✓ We had been waiting for two hours when the train finally arrived. (for 2 hours წარსულ მომენტამდე -> had been waiting)"],
        ["✗ She had been writing four letters before lunch.", "✓ She had written four letters before lunch. (ზუსტი რაოდენობა 4 letters -> had written)"],
        ["✗ They had been owning that house for twenty years.", "✓ They had owned that house for twenty years. (own არ იღებს -ing-ს)"]
      ],
      drills: [
        "We ___ waiting for forty minutes before the bus finally came.|had been|have been|were|are",
        "The kitchen smelled wonderful because my mother ___ baking bread all morning.|had been|has been|was|is",
        "By the time the marathon ended, he ___ run forty-two kilometres. (ზუსტი მანძილი)|had|had been|has|was",
        "How long ___ she been learning the violin before her first concert?|had|has|was|did",
        "His clothes were covered in paint because he ___ painting the fence.|had been|has been|was|painted",
        "I ___ my best friend for ten years before we went to the same university. (know)|had known|had been knowing|knew|have known",
        "They were very tired in the evening because they ___ hiking in the hills all day.|had been|have been|were|are",
        "By noon, the secretary ___ typed fifteen letters. (ზუსტი რაოდენობა)|had|had been|has|was",
        "The children ___ sleeping for an hour when the thunderstorm woke them up.|had been|have been|were|are",
        "Why was the grass so wet yesterday morning? — It ___ raining all night.|had been|has been|was|is",
        "He lost his voice because he ___ cheering loudly at the stadium.|had been|has been|was|cheered",
        "Before he retired last year, Mr Smith ___ teaching at our school for thirty years.|had been|has been|was|is",
        "When we reached the mountain cabin, we saw that someone ___ staying there.|had been|has been|is|stays",
        "She passed the exam easily because she ___ revising for weeks.|had been|has been|was|is",
        "How many countries ___ they visited before they turned thirty?|had|had been|have|did",
        "I ___ looking for my keys for half an hour before I found them in my pocket.|had been|have been|was|am",
        "The old bicycle ___ belonged to his father before he gave it to Tom.|had|had been|has|was",
        "When the curtains opened, the audience ___ waiting impatiently for twenty minutes.|had been|have been|were|are",
        "He hadn't ___ feeling well for several days before he went to the doctor.|been|be|being|was",
        "By the time the rain stopped, the river ___ risen by two metres.|had|had been|has|was"
      ]
    },
    {
      num: 57, level: "B2",
      title: "დათმობის, მიზნისა და მიზეზის დამოკიდებული წინადადებები",
      subtitle: "Clauses of Contrast (Although vs. Despite), Purpose (in order to) & Reason (due to)",
      rule: "1) დათმობა (Contrast): „Although / Even though / Though“-ს მოსდევს სრული წინადადება (ქვემდებარე + ზმნა: Although it rained...). ხოლო „Despite / In spite of“-ს მოსდევს მხოლოდ არსებითი სახელი ან V-ing (Despite the rain / In spite of raining...). თუ მაინც გვსურს წინადადების მიბმა, ვიყენებთ: Despite the fact that + Clause. 2) მიზანი (Purpose): to / in order to / so as to + V1 (უარყოფაში: in order not to / so as not to + V1), ან so that + Subject + can/could/would. 3) მიზეზი (Reason): because / since / as + წინადადება; ხოლო because of / due to / owing to + არსებითი სახელი!",
      formulas: [
        ["+ Although vs. Despite", "Although + Subject + Verb | Despite / In spite of + Noun / V-ing", "Although he was tired, he worked. = Despite being tired, he worked."],
        ["- In spite of the fact that", "Despite / In spite of + the fact that + Subject + Verb", "We went out despite the fact that it was snowing."],
        ["? მიზანი (Purpose)", "in order (not) to / so as (not) to + V1 | so that + Subject + can/could", "I left early so as not to miss the train."],
        ["💡 მიზეზი (Because vs. Due to)", "because / as / since + Clause | because of / due to / owing to + Noun", "The flight was delayed due to heavy fog."]
      ],
      examples: [
        ["Although the hotel was expensive, the service was excellent.", "მიუხედავად იმისა, რომ სასტუმრო ძვირი იყო, მომსახურება შესანიშნავი გამოდგა."],
        ["Despite the heavy rain, the football match continued.", "ძლიერი წვიმის მიუხედავად, საფეხბურთო მატჩი გაგრძელდა (Despite + the heavy rain)."],
        ["In spite of waking up late, she arrived at work on time.", "გვიან გაღვიძების მიუხედავად, ის სამსახურში დროულად მივიდა (In spite of + V-ing)."],
        ["He wrote down the address so as not to forget it.", "მან ჩაიწერა მისამართი, რათა არ დავიწყებოდა (so as not to + V1)."],
        ["She spoke quietly in order not to wake the sleeping child.", "მან ხმადაბლა ისაუბრა, რათა მძინარე ბავშვი არ გაეღვიძებინა."],
        ["I gave him my map so that he could find the way easily.", "მივეცი ჩემი რუკა, რათა გზა ადვილად ეპოვა (so that + he could)."],
        ["The outdoor concert was cancelled due to the storm.", "ღია ცის ქვეშ კონცერტი გაუქმდა ქარიშხლის გამო (due to + Noun)."],
        ["Since we had plenty of time, we decided to walk.", "რადგან ბევრი დრო გვქონდა, ფეხით წასვლა გადავწყვიტეთ."]
      ],
      mistakes: [
        ["✗ Despite of the cold wind, we went for a walk.", "✓ Despite the cold wind / In spite of the cold wind... (Despite-ს წინდებული of არასდროს მოსდევს!)"],
        ["✗ Although the traffic, I arrived on time.", "✓ Despite the traffic / Although the traffic was heavy, I arrived on time."],
        ["✗ He hurried for not to be late.", "✓ He hurried in order not to / so as not to be late."]
      ],
      drills: [
        "___ the cold weather, thousands of fans attended the match.|Despite / In spite of|Although|Even though|However",
        "___ he had very little experience, he got the job.|Although / Even though|Despite|In spite of|Due to",
        "We set off at dawn so as ___ get caught in the morning traffic.|not to|to not|don't|for not",
        "The train was delayed ___ technical problems on the line.|due to / because of|because|since|although",
        "In spite ___ having a headache, she finished the presentation.|of|that|to|for",
        "I spoke slowly and clearly ___ everyone could understand me.|so that|in order to|so as to|because of",
        "___ the fact that he trained hard, he didn't win the medal.|Despite|Although|Because|Even",
        "She took a taxi ___ arrive late for the interview.|in order not to|not to|for not to|so that not",
        "We stayed indoors ___ it was raining heavily.|because / as / since|because of|due to|despite",
        "He managed to fall asleep ___ the loud noise outside.|in spite of / despite|although|even though|because",
        "რომელ კავშირს არ მოსდევს არასდროს წინდებული „of“?|Despite|In spite of|Because of|On account of",
        "They moved to a smaller flat ___ save money.|in order to / to|so that|because|despite",
        "___ being eighty years old, my grandfather is very active.|Despite / In spite of|Although|Even though|Whereas",
        "I'll give you a key ___ you can let yourself in.|so that|in order to|so as to|due to",
        "The school was closed for two days ___ the heavy snowfall.|owing to / due to|because|since|although",
        "She bought the shoes ___ they were slightly too big for her.|even though / although|despite|in spite of|because of",
        "He wore sunglasses ___ nobody would recognize him.|so that|in order to|so as to|despite",
        "___ having a map, we still managed to get lost in the old town.|In spite of / Despite|Although|Even though|Because",
        "We couldn't cross the mountain pass ___ the snowstorm.|because of / due to|because|although|since",
        "She whispered ___ disturb the other readers in the library.|so as not to|not to|so that not|for not"
      ]
    },
    {
      num: 58, level: "B2",
      title: "წყვილადი კავშირები და ზმნის შეთანხმება (Both...and, Neither...nor, Either...or)",
      subtitle: "Correlative Conjunctions & Subject-Verb Agreement",
      rule: "წყვილადი კავშირები აერთიანებს ორ თანაბარ წევრს: 1) „Both A and B“ (ორივე — A-ც და B-ც) — მასთან ზმნა ყოველთვის მრავლობით რიცხვში დგება (Both Tom and Anna are here)! 2) „Either A or B“ (ან A, ან B) და „Neither A nor B“ (არც A და არც B) — მათთან ზმნა ეთანხმება მეორე, ზმნასთან უფრო ახლოს მდგომ ქვემდებარეს (Neither the teacher nor the students WERE ready vs. Neither the students nor the teacher WAS ready). გახსოვდეთ: Neither...nor თავად უარყოფითია, ამიტომ ზმნა დგება დადებით ფორმაში!",
      formulas: [
        ["+ Both ... and (+ მრავლობითი ზმნა)", "Both A and B + Plural Verb (are / were / have / work)", "Both London and Paris are major European capitals."],
        ["- Either ... or (ან... ან)", "Either A or B (ზმნა ეთანხმება B-ს!)", "Either you or your brother has to clean the yard."],
        ["? Neither ... nor (არც... არც)", "Neither A nor B + დადებითი ზმნა (ეთანხმება B-ს!)", "Neither David nor his friends know the answer."],
        ["💡 Not only ... but also", "Not only A but also B (არა მხოლოდ A, არამედ B-ც)", "She speaks not only English but also Italian."]
      ],
      examples: [
        ["Both my mother and my father enjoy gardening.", "დედაჩემსაც და მამაჩემსაც (ორივეს) უყვართ მებაღეობა (მრავლობითი: enjoy)."],
        ["Neither Tom nor Sarah was at the meeting yesterday.", "გუშინ შეხვედრაზე არც ტომი იყო და არც სარა (Sarah მხოლობითია -> was)."],
        ["Neither the manager nor the employees were informed about the change.", "არც მენეჯერი და არც თანამშრომლები არ იყვნენ ინფორმირებულნი (employees მრავლობითია -> were)."],
        ["We can travel either by train or by bus.", "შეგვიძლია ვიმგზავროთ ან მატარებლით, ან ავტობუსით."],
        ["He neither smoked nor drank alcohol throughout his life.", "მას მთელი ცხოვრების განმავლობაში არც მოუწევია და არც ალკოჰოლი დაულევია."],
        ["Not only the children but also their parents enjoyed the circus.", "არა მხოლოდ ბავშვებმა, არამედ მათმა მშობლებმაც ისიამოვნეს ცირკით."],
        ["I have read both the book and the play.", "წაკითხული მაქვს როგორც წიგნი, ისე პიესა."],
        ["Which jacket do you want? — Neither of them fits me.", "რომელი ქურთუკი გინდა? — არცერთი მათგანი არ მადგას (Neither of + მხოლობითი ზმნა)."]
      ],
      mistakes: [
        ["✗ Both Anna and Maria is studying medicine.", "✓ Both Anna and Maria are studying medicine. (Both...and ყოველთვის ითხოვს მრავლობით ზმნას)"],
        ["✗ Neither John or Peter came.", "✓ Neither John nor Peter came. (Neither-ის მეწყვილე კავშირია nor, და არა or!)"],
        ["✗ Neither my sister nor I don't like horror films.", "✓ Neither my sister nor I like horror films. (Neither უკვე უარყოფითია -> ზმნა დადებითია)"]
      ],
      drills: [
        "Both the museum and the art gallery ___ closed on Mondays.|are|is|was|has been",
        "Neither the shoes ___ the boots fitted me.|nor|or|and|but",
        "You can have either tea ___ coffee with your breakfast.|or|nor|and|both",
        "Neither the passengers nor the driver ___ injured in the accident. (driver = მხოლობითი!)|was|were|are|have been",
        "Neither the driver nor the passengers ___ injured in the accident. (passengers = მრავლობითი!)|were|was|is|has been",
        "___ Paul and his brother play in the school orchestra.|Both|Either|Neither|Not only",
        "She speaks not ___ Spanish, but also Portuguese.|only|just as|both|either",
        "Neither of these two roads ___ to the railway station.|leads|lead|leading|are leading",
        "He ___ called nor sent a message to explain why he was late.|neither|either|both|not",
        "Either my parents or my uncle ___ going to pick me up at the airport.|is|are|were|have",
        "I liked ___ the plot and the acting in that film.|both|either|neither|not only",
        "Neither the cat nor the dogs ___ allowed on the sofa.|are|is|was|has been",
        "We have neither the time ___ the money for a long holiday right now.|nor|or|and|but",
        "___ of the two sisters has blue eyes; they both have brown eyes.|Neither|Both|Either|All",
        "Not only the students ___ also the teacher was surprised by the bell.|but|and|or|nor",
        "You must ___ apologize to her or explain what happened.|either|neither|both|not only",
        "Both wheat and corn ___ grown in this valley.|are|is|was|has",
        "I tried two keys, but ___ of them opened the padlock.|neither|both|either|none",
        "Neither rain ___ snow could stop the hikers from reaching the camp.|nor|or|and|but",
        "Either you ___ I am responsible for locking the office tonight.|or|nor|and|both"
      ]
    },
    {
      num: 59, level: "B2",
      title: "უპირო ვნებითი კონსტრუქციები (It is said that... / He is believed to...)",
      subtitle: "Impersonal & Personal Passive Reporting Structures",
      rule: "ახალ ამბებში, აკადემიურ ტექსტებსა და ოფიციალურ ცნობებში, როცა ინფორმაციას ზოგად წყაროზე დაყრდნობით გადმოვცემთ (ზმნებით: say, believe, think, know, expect, report, consider, allege), ვიყენებთ ორ კონსტრუქციას: 1) უპირო (Impersonal): „It is said / believed / thought that + წინადადება“; 2) პიროვნული (Personal): „Subject + is/are said / believed / known + to V1 (თუ მოქმედება აწმყოში ან მომავალშია)“ ან „+ to have V3 (თუ მოქმედება უკვე წარსულში მოხდა!)“.",
      formulas: [
        ["+ უპირო ფორმა (It is...)", "It is said / believed / thought / reported that + Clause", "It is believed that dolphins are very intelligent."],
        ["- პიროვნული (აწმყო/მომავალი)", "Subject + is/are said/known/expected + to V1 (ან to be V-ing)", "Dolphins are believed to be very intelligent."],
        ["? პიროვნული (წარსული ფაქტი!)", "Subject + is/are said/believed/thought + TO HAVE + V3", "The painting is thought to have been painted in 1510."],
        ["💡 Expected to V1", "is/are expected to + V1 (მოსალოდნელია, რომ...)", "The delegation is expected to arrive tomorrow."]
      ],
      examples: [
        ["It is known that regular exercise improves memory.", "ცნობილია, რომ რეგულარული ვარჯიში აუმჯობესებს მეხსიერებას."],
        ["Turtles are known to live for over a hundred years.", "ცნობილია, რომ კუები ას წელზე მეტხანს ცოცხლობენ (აწმყო ფაქტი -> to live)."],
        ["The president is expected to make an announcement tonight.", "მოსალოდნელია, რომ პრეზიდენტი ამაღამ განცხადებას გააკეთებს."],
        ["The thief is believed to have escaped through the back window.", "ვარაუდობენ, რომ ქურდი უკანა ფანჯრიდან გაიქცა (უკვე მოხდა წარსულში -> to have escaped!)."],
        ["This ancient temple is thought to have been built three thousand years ago.", "ითვლება, რომ ეს უძველესი ტაძარი სამი ათასი წლის წინ აშენდა (to have been built)."],
        ["He is said to be working on a new historical novel right now.", "ამბობენ, რომ ის ახლა ახალ ისტორიულ რომანზე მუშაობს (მიმდინარე -> to be working)."],
        ["It was reported that over five hundred people attended the festival.", "გავრცელდა ცნობა, რომ ფესტივალს ხუთასზე მეტი ადამიანი დაესწრო."],
        ["Green tea is considered to be very beneficial for health.", "მწვანე ჩაი ჯანმრთელობისთვის ძალიან სასარგებლოდ ითვლება."]
      ],
      mistakes: [
        ["✗ He is said that he knows five languages.", "✓ It is said that he knows... / He is said to know five languages."],
        ["✗ The ship is believed to sink in 1912.", "✓ The ship is believed to have sunk in 1912. (წარსულ ფაქტთან აუცილებელია to have + V3!)"],
        ["✗ Peoples say that the castle is haunted.", "✓ It is said that the castle is haunted / The castle is said to be haunted."]
      ],
      drills: [
        "___ is believed that the universe is expanding.|It|There|He|What",
        "The missing climber is thought ___ found shelter in a cave last night. (წარსული!)|to have|to be|having|that he",
        "The new railway line is expected ___ next autumn.|to open|opening|to have opened|that opens",
        "This castle is said ___ been built in the twelfth century.|to have|to be|having|that",
        "Carrots are known ___ good for your eyesight. (ზოგადი ფაქტი)|to be|to have been|being|that are",
        "The suspect is alleged ___ left the country two days ago.|to have|to be|that he|having",
        "It ___ reported that the road was blocked by snow.|was|has|did|had",
        "She is believed ___ living in Vienna at the moment. (ახლა მიმდინარე)|to be|to have|being|that is",
        "The ancient manuscript is thought to ___ written by a monk.|have been|be|being|have",
        "Prices are expected ___ stable over the next few months.|to remain|remaining|to have remained|that remain",
        "He is considered ___ one of the finest pianists of his generation.|to be|being|that he is|be",
        "The fire is thought ___ started in the old warehouse last night.|to have|to be|having|that",
        "___ is known that water covers most of the Earth's surface.|It|There|This|That",
        "Two people are reported ___ been injured in the collision yesterday.|to have|to be|having|that",
        "The company is said ___ planning a new product launch right now.|to be|to have|being|that",
        "Leonardo da Vinci is known ___ designed flying machines centuries ago.|to have|to be|having|that",
        "The weather is expected ___ significantly by the weekend.|to improve|improving|to have improved|improve",
        "This portrait is believed ___ been painted by Rembrandt.|to have|to be|being|having",
        "The prime minister is scheduled ___ with foreign diplomats tomorrow.|to meet|meeting|to have met|meet",
        "It is ___ that the ancient city was destroyed by an earthquake.|thought / believed|thinking|believe|to think"
      ]
    },
    {
      num: 60, level: "B2",
      title: "მიმღეობური კონსტრუქციები (Participle Clauses — -ing, V3, Having + V3)",
      subtitle: "Present, Past & Perfect Participle Clauses",
      rule: "მიმღეობური კონსტრუქცია (Participle Clause) საშუალებას გვაძლევს ორი წინადადება შევკუმშოთ ერთ ლაკონიურ წინადადებად, როდესაც ორივე ნაწილს ერთი და იგივე ქვემდებარე ჰყავს! 1) აწმყოს მიმღეობა (V-ing) — გამოხატავს პარალელურ მოქმედებას ან მიზეზს აქტიურ გვარში (Walking down the street, I met Tom / Feeling tired, she went to bed); 2) წარსულის მიმღეობა (V3) — გამოხატავს ვნებით (პასიურ) მდგომარეობას ან მიზეზს (Built in 1850, the bridge is still strong); 3) სრული მიმღეობა (Having + V3) — ხაზს უსვამს, რომ პირველი მოქმედება სრულად დასრულდა მეორის დაწყებამდე (Having finished her homework, she turned on the TV).",
      formulas: [
        ["+ V-ing (აქტიური / პარალელური)", "V-ing..., Subject + Main Verb (რადგან / როდესაც აკეთებდა...)", "Knowing that he was late, he took a taxi."],
        ["- V3 (პასიური / ვნებითი)", "V3 (Past Participle)..., Subject + Main Verb (აშენებული / დაწერილი...)", "Surrounded by high mountains, the village is very quiet."],
        ["? Having + V3 (წინმსწრები მოქმედება)", "Having + V3, Subject + Past Simple (მას შემდეგ, რაც დაასრულა...)", "Having read the book, I knew how the film would end."],
        ["💡 უარყოფითი ფორმა", "Not + V-ing / Not having + V3 (რადგან არ იცოდა / არ გაუკეთებია...)", "Not knowing the way, we asked a local resident."]
      ],
      examples: [
        ["Walking along the beach, we found several beautiful shells.", "პლაჟზე სეირნობისას რამდენიმე ლამაზი ნიჟარა ვიპოვეთ (აქტიური პარალელური მოქმედება)."],
        ["Feeling hungry, he opened the fridge to make a sandwich.", "რადგან შიოდა (Feeling hungry = Because he felt hungry), მაცივარი გამოაღო."],
        ["Not wanting to wake the baby, she walked on tiptoe.", "რადგან არ უნდოდა ბავშვის გაღვიძება, ფეხის წვერებზე გაიარა."],
        ["Having finished all his exams, David went on a hiking trip.", "მას შემდეგ, რაც ყველა გამოცდა ჩააბარა (Having finished), დევიდი ლაშქრობაში წავიდა."],
        ["Painted in bright colours, the house stood out from the rest of the street.", "ნათელ ფერებში შეღებილი (პასიური -> Painted) სახლი მთელი ქუჩისგან გამოირჩეოდა."],
        ["Written in simple English, this book is ideal for intermediate learners.", "მარტივი ინგლისურით დაწერილი ეს წიგნი იდეალურია საშუალო დონის მოსწავლეებისთვის."],
        ["Having lost his keys, he couldn't get into the apartment.", "რადგან გასაღები დაკარგული ჰქონდა, ბინაში ვერ შევიდა."],
        ["Looked after carefully, a leather jacket can last for decades.", "თუ ფრთხილად მოუვლიან (პასიური -> Looked after), ტყავის ქურთუკი ათწლეულებს ძლებს."]
      ],
      mistakes: [
        ["✗ Having finish the work, he went home.", "✓ Having finished the work, he went home. (Having-ის შემდეგ იწერება V3: finished)"],
        ["✗ Built in 1900, my grandfather bought the house.", "✓ Built in 1900, the house was bought by my grandfather. (Built ეკუთვნის სახლს და არა ბაბუას!)"],
        ["✗ Know not what to say, she remained silent.", "✓ Not knowing what to say, she remained silent. (Not დგება მიმღეობის წინ)"]
      ],
      drills: [
        "___ that the train was about to leave, we ran to the platform.|Seeing|Seen|To see|Saw",
        "___ in the fifteenth century, the castle attracts thousands of visitors. (ვნებითი!)|Built|Building|Having build|To build",
        "___ all her homework, Anna went out to play tennis with her friends.|Having finished|Finished|Finish|To finish",
        "___ what to do, he called his older brother for advice.|Not knowing|Knowing not|Not known|Don't knowing",
        "___ by tall pine trees, the lake was completely hidden from the road. (ვნებითი!)|Surrounded|Surrounding|Having surround|To surround",
        "___ down the icy stairs, he slipped and sprained his ankle.|Walking|Walked|Having walk|To walk",
        "___ the film twice before, I didn't want to watch it again.|Having seen|Seeing|Seen|Saw",
        "___ in a cool dark place, these apples will stay fresh for months. (ვნებითი!)|Kept|Keeping|Having keep|To keep",
        "___ a loud noise outside, the dog ran to the gate.|Hearing|Heard|To hear|Hears",
        "___ enough sleep the night before, she felt exhausted during the lecture.|Not having had|Having not|Not had|Didn't having",
        "___ from the top of the tower, the cars below looked like tiny toys. (ვნებითი!)|Seen|Seeing|Having see|Saw",
        "___ for the bus in the rain, I got completely soaked.|Waiting|Waited|To wait|Waits",
        "___ his passport at the hotel, he had to go back to fetch it.|Having left|Left|Leave|To leave",
        "___ with fresh cream and berries, the dessert was delicious. (ვნებითი!)|Served|Serving|Having serve|To serve",
        "___ to disturb the meeting, I knocked very softly on the door.|Not wanting|Wanting not|Not wanted|Don't wanting",
        "___ the suitcase, she realized it was too heavy to carry.|Lifting / Having lifted|Lifted|Lift|Lifts",
        "___ by a famous architect, the library won several design awards. (ვნებითი!)|Designed|Designing|Having design|To design",
        "___ in Rome for five years, he spoke Italian fluently.|Having lived|Lived|Live|To live",
        "___ the envelope, she took out the letter and read it eagerly.|Opening|Opened|To open|Opens",
        "___ with care, this glass vase will never lose its shine. (ვნებითი!)|Treated|Treating|Having treat|To treat"
      ]
    }
  ];
})(window);