/**
 * LEXICON.JS — FluentPath-ის ცენტრალური ლექსიკური ბაზა
 * 60 თემატური იუნიტი (A1–C2) × 18 უნიკალური სიტყვა, ფრაზული ზმნა და კოლოკაცია = 1,080 ერთეული.
 * თითოეული იუნიტის 18 სიტყვა იყოფა 3 არაგანმეორებად ნაკადად:
 *   - Set A (სიტყვები 1–6): საფეხური 1
 *   - Set B (სიტყვები 7–12): საფეხური 2
 *   - Set C (სიტყვები 13–18): საფეხური 3
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  const RAW_LEXICON_UNITS = [
    // ==================== A1 (Units 1 - 10 | 180 Words & Phrases) ====================
    ['A1', 'მისალმება, გაცნობა და ეტიკეტი',
      'hello:გამარჯობა|good morning:დილა მშვიდობისა|good afternoon:შუადღე მშვიდობისა|good evening:საღამო მშვიდობისა|nice to meet you:სასიამოვნოა თქვენი გაცნობა|pleased to meet you:მოხარული ვარ თქვენი გაცნობით|' +
      'what is your name:რა გქვიათ|my first name is:ჩემი სახელია|my surname is:ჩემი გვარია|where are you from:საიდან ხართ წარმოშობით|native city:მშობლიური ქალაქი|citizen of Georgia:საქართველოს მოქალაქე|' +
      'how is it going:როგორ მიდის საქმეები|excuse me please:უკაცრავად თუ შეიძლება|thank you very much:დიდი მადლობა|you are welcome:არაფრის (პასუხი მადლობაზე)|see you tomorrow:ხვალამდე|have a great day:კარგ დღეს გისურვებთ',
      [['Hello my first name is Otar', 'გამარჯობა, ჩემი სახელია ოთარი.', 'first'],
       ['Where are you from originally', 'საიდან ხართ წარმოშობით?', 'from'],
       ['I am a citizen of Georgia', 'მე საქართველოს მოქალაქე ვარ.', 'citizen'],
       ['Thank you very much for your help', 'დიდი მადლობა დახმარებისთვის.', 'much']]],

    ['A1', 'ოჯახი, ნათესავები და პიროვნული თვისებები',
      'family member:ოჯახის წევრი|older brother:უფროსი ძმა|younger sister:უმცროსი და|caring parents:მზრუნველი მშობლები|grandparents:ბებია და ბაბუა|close relative:ახლო ნათესავი|' +
      'best friend:საუკეთესო მეგობარი|friendly neighbor:მეგობრული მეზობელი|polite person:ზრდილობიანი ადამიანი|honest man:პატიოსანი კაცი|kind heart:კეთილი გული|clever student:ჭკვიანი სტუდენტი|' +
      'marital status:ოჯახური მდგომარეობა|single or married:დაუოჯახებელი ან დაოჯახებული|only child:დედისერთა|twin brother:ტყუპისცალი ძმა|spend time together:დროის ერთად გატარება|support each other:ერთმანეთის მხარდაჭერა',
      [['My older brother is twenty five years old', 'ჩემი უფროსი ძმა 25 წლის არის.', 'brother'],
       ['Our friendly neighbor is always polite', 'ჩვენი მეგობრული მეზობელი ყოველთვის ზრდილობიანია.', 'neighbor'],
       ['Good friends always support each other', 'კარგი მეგობრები ყოველთვის მხარს უჭერენ ერთმანეთს.', 'support'],
       ['We spend time together every Sunday', 'ყოველ კვირა დღეს დროს ერთად ვატარებთ.', 'together']]],

    ['A1', 'დრო, საათი, კალენდარი და სიხშირე',
      'what time is it:რომელი საათია|seven oclock sharp:ზუსტად შვიდი საათი|half past eight:ცხრის ნახევარი (8:30)|quarter to nine:ცხრას რომ აკლია თხუთმეტი|in the morning:დილით|at midnight:შუაღამისას|' +
      'day of the week:კვირის დღე|on Monday morning:ორშაბათ დილით|on Sunday evening:კვირა საღამოს|next weekend:მომავალ უქმეებზე|every single day:უკლებლივ ყოველდღე|twice a week:კვირაში ორჯერ|' +
      'always on time:ყოველთვის დროულად|usually early:ჩვეულებრივ ადრე|sometimes late:ზოგჯერ გვიან|never forget:არასდროს დაივიწყო|current month:მიმდინარე თვე|whole year:მთელი წელი',
      [['The lesson starts at seven oclock sharp', 'გაკვეთილი იწყება ზუსტად შვიდ საათზე.', 'sharp'],
       ['She is always on time for meetings', 'ის შეხვედრებზე ყოველთვის დროულად მოდის.', 'always'],
       ['I train in the gym twice a week', 'დარბაზში კვირაში ორჯერ ვვარჯიშობ.', 'twice'],
       ['What day of the week is it today', 'კვირის რა დღეა დღეს?', 'week']]],

    ['A1', 'ყოველდღიური რუტინა და საოჯახო საქმეები',
      'wake up early:ადრე გაღვიძება|get out of bed:ლოგინიდან ადგომა|brush my teeth:კბილების გახეხვა|take a cold shower:გრილი შხაპის მიღება|get dressed quickly:სწრაფად ჩაცმა|prepare breakfast:საუზმის მომზადება|' +
      'leave the house:სახლიდან გასვლა|go to work:სამსახურში წასვლა|check my emails:ელფოსტის შემოწმება|answer phone calls:ზარებზე პასუხი|have a lunch break:შესვენება სადილზე|finish the workday:სამუშაო დღის დასრულება|' +
      'return home:სახლში დაბრუნება|cook dinner:ვახშმის მომზადება|clean the kitchen:სამზარეულოს დალაგება|water the plants:მცენარეების მორწყვა|read a book:წიგნის კითხვა|fall asleep:ჩაძინება',
      [['I wake up early and take a shower', 'ადრე ვიღვიძებ და შხაპს ვიღებ.', 'shower'],
       ['He checks his emails every morning', 'ის ყოველ დილით ამოწმებს თავის ელფოსტას.', 'emails'],
       ['We return home at six in the evening', 'სახლში საღამოს 6 საათზე ვბრუნდებით.', 'return'],
       ['Please water the plants twice a week', 'გთხოვთ მორწყათ მცენარეები კვირაში ორჯერ.', 'plants']]],

    ['A1', 'სახლი, ბინა, ავეჯი და მდებარეობა',
      'living room:მისაღები ოთახი|spacious bedroom:ფართო საძინებელი|modern kitchen:თანამედროვე სამზარეულო|private bathroom:საკუთარი აბაზანა|sunny balcony:მზიანი აივანი|fourth floor:მეოთხე სართული|' +
      'wooden table:ხის მაგიდა|comfortable armchair:კომფორტული სავარძელი|working desk:სამუშაო მაგიდა|bookshelf:წიგნების თარო|bright lamp:ნათელი სანათი|soft carpet:რბილი ხალიჩა|' +
      'refrigerator:მაცივარი|washing machine:სარეცხი მანქანა|air fryer:აეროგრილი|front door key:შემოსასვლელი კარის გასაღები|next to the window:ფანჯრის გვერდით|in the corner:კუთხეში',
      [['My working desk is next to the window', 'ჩემი სამუშაო მაგიდა ფანჯრის გვერდით დგას.', 'window'],
       ['The apartment is on the fourth floor', 'ბინა მეოთხე სართულზე მდებარეობს.', 'fourth'],
       ['There is a comfortable armchair in the corner', 'კუთხეში დგას კომფორტული სავარძელი.', 'corner'],
       ['Lock the front door before you leave', 'გასვლამდე ჩაკეტეთ შემოსასვლელი კარი.', 'door']]],

    ['A1', 'საკვები, სასმელები და შეკვეთა კაფეში',
      'healthy breakfast:ჯანსაღი საუზმე|oatmeal porridge:შვრიის ფაფა|boiled eggs:მოხარშული კვერცხი|grilled chicken breast:შემწვარი ქათმის ფილე|beef cutlets:საქონლის კოტლეტი|buckwheat and rice:წიწიბურა და ბრინჯი|' +
      'boiled potatoes:მოხარშული კარტოფილი|cottage cheese:ხაჭო|fresh yogurt:მაწონი / იოგურტი|green salad:მწვანე სალათა|fresh fruit:ახალი ხილი|slice of bread:პურის ნაჭერი|' +
      'glass of water:ერთი ჭიქა წყალი|black coffee:შავი ყავა|without sugar:უშაქროდ|the menu please:მენიუ თუ შეიძლება|delicious meal:გემრიელი კერძი|bring the bill:ანგარიშის მოტანა',
      [['I eat oatmeal and boiled eggs for breakfast', 'საუზმეზე შვრიის ფაფას და მოხარშულ კვერცხს ვჭამ.', 'eggs'],
       ['Chicken breast and buckwheat are rich in protein', 'ქათმის ფილე და წიწიბურა მდიდარია ცილით.', 'protein'],
       ['Can I have black coffee without sugar', 'შეიძლება შავი ყავა უშაქროდ?', 'sugar'],
       ['Could you bring the bill please', 'შეგიძლიათ ანგარიში მოიტანოთ, თუ შეიძლება?', 'bill']]],

    ['A1', 'ტანსაცმელი, ფეხსაცმელი, ფერები და შოპინგი',
      'washed hoodie:კაპიუშონიანი ჰუდი|cotton t-shirt:ბამბის მაისური|blue jeans:ლურჯი ჯინსი|winter jacket:ზამთრის ქურთუკი|formal shirt:კლასიკური პერანგი|warm sweater:თბილი სვიტერი|' +
      'running shoes:სარბენი ფეხსაცმელი|leather boots:ტყავის ფეხსაცმელი|shoe size:ფეხსაცმლის ზომა|medium size:საშუალო ზომა (M)|fitting room:გასახდელი ოთახი|try it on:მოზომება (ტანსაცმლის)|' +
      'dark blue:მუქი ლურჯი|light gray:ღია ნაცრისფერი|pure white:სუფთა თეთრი|how much does it cost:რა ღირს ეს|pay by card:ბარათით გადახდა|pay in cash:ნაღდი ფულით გადახდა',
      [['I wear size forty three running shoes', '43 ზომის სარბენ ფეხსაცმელს ვატარებ.', 'shoes'],
       ['Can I try this hoodie on in the fitting room', 'შემიძლია ეს ჰუდი გასახდელში მოვიზომო?', 'fitting'],
       ['How much does this winter jacket cost', 'რა ღირს ეს ზამთრის ქურთუკი?', 'cost'],
       ['Do you prefer to pay in cash or by card', 'ნაღდი ფულით გადახდა გირჩევნიათ თუ ბარათით?', 'card']]],

    ['A1', 'ქალაქი, ტრანსპორტი და გზის გაკვლევა',
      'city center:ქალაქის ცენტრი|main avenue:მთავარი გამზირი|narrow street:ვიწრო ქუჩა|traffic lights:შუქნიშანი|pedestrian crossing:ქვეითთა გადასასვლელი|bus stop:ავტობუსის გაჩერება|' +
      'metro station:მეტროსადგური|train platform:მატარებლის ბაქანი|central bank:ცენტრალური ბანკი|pharmacy:აფთიაქი|supermarket:სუპერმარკეტი|sports arena:სპორტული არენა|' +
      'go straight ahead:იარეთ პირდაპირ|turn left:შეუხვიეთ მარცხნივ|turn right:შეუხვიეთ მარჯვნივ|across the street:ქუჩის გადაღმა|ten minutes on foot:ათი წუთი ფეხით|take a taxi:ტაქსის აყვანა',
      [['Go straight ahead and turn left at the traffic lights', 'იარეთ პირდაპირ და შუქნიშანთან შეუხვიეთ მარცხნივ.', 'lights'],
       ['The pharmacy is right across the street', 'აფთიაქი ზუსტად ქუჩის გადაღმაა.', 'across'],
       ['It takes ten minutes on foot to reach the metro', 'მეტრომდე ფეხით მისვლას ათი წუთი სჭირდება.', 'foot'],
       ['Which bus goes to the city center', 'რომელი ავტობუსი მიდის ქალაქის ცენტრში?', 'center']]],

    ['A1', 'ამინდი, სეზონები და გარემო',
      'weather forecast:ამინდის პროგნოზი|bright sunshine:კაშკაშა მზე|clear blue sky:მოწმენდილი ლურჯი ცა|warm breeze:თბილი ნიავი|heavy rain:ძლიერი წვიმა|strong wind:ძლიერი ქარი|' +
      'thick fog:სქელი ნისლი|white snow:თეთრი თოვლი|freezing cold:ყინვა / ძალიან ცივი|boiling hot:პაპანაქება სიცხე|mild climate:რბილი კლიმატი|fresh air:სუფთა ჰაერი|' +
      'early spring:ადრიანი გაზაფხული|sunny summer:მზიანი ზაფხული|golden autumn:ოქროსფერი შემოდგომა|cold winter:ცივი ზამთარი|take an umbrella:ქოლგის წაღება|wear a coat:პალტოს ჩაცმა',
      [['What is the weather forecast for tomorrow', 'როგორია ხვალინდელი ამინდის პროგნოზი?', 'forecast'],
       ['Take an umbrella because heavy rain is coming', 'წაიღე ქოლგა, რადგან ძლიერი წვიმა მოდის.', 'umbrella'],
       ['Golden autumn in Georgia is warm and pleasant', 'ოქროსფერი შემოდგომა საქართველოში თბილი და სასიამოვნოა.', 'autumn'],
       ['We enjoy breathing fresh air in the mountains', 'მთაში სუფთა ჰაერის სუნთქვა გვსიამოვნებს.', 'mountains']]],

    ['A1', 'ჰობი, მუსიკა, თამაშები და თავისუფალი დრო',
      'free time:თავისუფალი დრო|favorite hobby:საყვარელი ჰობი|listen to music:მუსიკის მოსმენა|hip-hop album:ჰიპ-ჰოპ ალბომი|lo-fi jazz:ლოუ-ფაი ჯაზი|write lyrics:ტექსტის/ლირიკის წერა|' +
      'play board games:სამაგიდო თამაშები|two-player card game:ორმოთამაშიანი ბანქოს თამაში|solve a Rubiks cube:რუბიკის კუბიკის აწყობა|trivia quiz:ინტელექტუალური ვიქტორინა|video games:ვიდეოთამაშები|multiplayer server:მრავალმოთამაშიანი სერვერი|' +
      'watch football:ფეხბურთის ყურება|support a team:გუნდის გულშემატკივრობა|go for a run:სარბენად გასვლა|take photos:ფოტოების გადაღება|camera lens:კამერის ობიექტივი|relax on Sunday:დასვენება კვირა დღეს',
      [['In my free time I listen to hip-hop albums', 'თავისუფალ დროს ჰიპ-ჰოპ ალბომებს ვუსმენ.', 'albums'],
       ['We love playing two-player card games', 'ჩვენ გვიყვარს ორმოთამაშიანი ბანქოს თამაში.', 'card'],
       ['He can solve a Rubiks cube layer by layer', 'მას რუბიკის კუბიკის ფენა-ფენა აწყობა შეუძლია.', 'cube'],
       ['On Sundays I go for a run and relax', 'კვირაობით სარბენად გავდივარ და ვისვენებ.', 'relax']]],

    // ==================== A2 (Units 11 - 20 | 180 Words & Phrases) ====================
    ['A2', 'აეროპორტი, რეგისტრაცია და ფრენა',
      'international airport:საერთაშორისო აეროპორტი|departure terminal:გაფრენის ტერმინალი|check-in desk:რეგისტრაციის დახლი|boarding pass:ჩასხდომის ბარათი|valid passport:მოქმედი პასპორტი|carry-on luggage:ხელბარგი|' +
      'checked baggage:ჩასაბარებელი ბარგი|weight limit:წონის ლიმიტი|security check:უსაფრთხოების კონტროლი|passport control:საპასპორტო კონტროლი|duty-free shop:უბაჟო მაღაზია|departure gate:გაფრენის გასასვლელი|' +
      'window seat:ადგილი ფანჯარასთან|aisle seat:ადგილი გასასვლელთან|fasten your seatbelt:შეიკარით ღვედი|direct flight:პირდაპირი რეისი|flight delay:რეისის დაგვიანება|land on time:დროულად დაფრენა',
      [['Please show your valid passport and boarding pass', 'გთხოვთ წარმოადგინოთ მოქმედი პასპორტი და ჩასხდომის ბარათი.', 'boarding'],
       ['My carry-on luggage is within the weight limit', 'ჩემი ხელბარგი წონის ლიმიტის ფარგლებშია.', 'limit'],
       ['Would you prefer a window seat or an aisle seat', 'ფანჯარასთან ადგილი გირჩევნიათ თუ გასასვლელთან?', 'window'],
       ['The direct flight to Berlin landed on time', 'პირდაპირი რეისი ბერლინში დროულად დაჯდა.', 'landed']]],

    ['A2', 'სასტუმრო, ჯავშანი და მოგზაურობის კომფორტი',
      'hotel reservation:სასტუმროს ჯავშანი|book in advance:წინასწარ დაჯავშნა|reception desk:სასტუმროს მიმღები|single room:ერთადგილიანი ნომერი|double room:ორადგილიანი ნომერი|twin beds:ორი ცალ-ცალკე საწოლი|' +
      'check-in time:შესვლის/რეგისტრაციის დრო|late check-out:გვიანი გასვლა|electronic key card:ელექტრონული ბარათი-გასაღები|breakfast included:საუზმე შედის ფასში|buffet restaurant:შვედური მაგიდა|high-speed Wi-Fi:სწრაფი უსადენო ინტერნეტი|' +
      'clean towels:სუფთა პირსახოცები|air conditioning:კონდიცირება|heating system:გათბობის სისტემა|luggage storage:ბარგის შესანახი|walking distance:ფეხით სავალი მანძილი|helpful staff:ყურადღებიანი პერსონალი',
      [['I booked a double room in advance online', 'ორადგილიანი ნომერი წინასწარ დავჯავშნე ონლაინ.', 'advance'],
       ['Is buffet breakfast included in the room price', 'შედის თუ არა საუზმე ნომრის ფასში?', 'included'],
       ['The hotel is within walking distance of the arena', 'სასტუმრო არენიდან ფეხით სავალ მანძილზეა.', 'distance'],
       ['You can leave your bags in the luggage storage', 'ჩანთების დატოვება ბარგის შესანახში შეგიძლიათ.', 'storage']]],

    ['A2', 'კრივი, სირბილი და სპორტული აღჭურვილობა',
      'boxing training:კრივის ვარჯიში|fourteen-ounce gloves:14-უნციანი ხელთათმანები|elastic hand wraps:ხელის ელასტიკური ბინტები|custom mouthguard:ინდივიდუალური დამცავი კაპი|jump rope warm-up:ლახტით გახურება|shadowboxing:ჩრდილთან კრივი|' +
      'heavy punching bag:კრივის მძიმე ტომარა|footwork drills:ფეხით მოძრაობის ვარჯიში|sparring partner:სპარინგ-პარტნიორი|defensive guard:თავდაცვითი დგომი|fast jab:სწრაფი ჯები (მარცხენა დარტყმა)|combination punch:კომბინაციური დარტყმა|' +
      'three-kilometer run:3-კილომეტრიანი გარბენი|steady pace:თანაბარი ტემპი|cardio endurance:კარდიო გამძლეობა|workout log:ვარჯიშის ჟურნალი|track consistency:სისტემატურობის აღრიცხვა|post-workout stretch:ვარჯიშის შემდგომი გაწელვა',
      [['Always wrap your hands before putting on boxing gloves', 'ყოველთვის შეიხვიეთ ხელები ბინტით ხელთათმანების ჩაცმამდე.', 'wraps'],
       ['We start every session with a jump rope warm-up', 'ყველა ვარჯიშს ლახტით გახურებით ვიწყებთ.', 'rope'],
       ['Footwork drills improve your balance and speed', 'ფეხის ვარჯიშები აუმჯობესებს წონასწორობასა და სისწრაფეს.', 'balance'],
       ['I log every workout to track my consistency', 'ყველა ვარჯიშს ვინიშნავ სისტემატურობის გასაკონტროლებლად.', 'consistency']]],

    ['A2', 'სწორი კვება, აღდგენა და ჯანსაღი ცხოვრება',
      'high-protein diet:მაღალცილოვანი დიეტა|body recomposition:სხეულის რეკომპოზიცია|lean muscle growth:მშრალი კუნთის ზრდა|daily calorie intake:დღიური კალორიების მიღება|complex carbohydrates:რთული ნახშირწყლები|healthy fats:ჯანსაღი ცხიმები|' +
      'five grams of creatine:ხუთი გრამი კრეატინი|daily hydration:ყოველდღიური წყლის ბალანსი|three liters of water:სამი ლიტრი წყალი|meal preparation:საკვების წინასწარ მომზადება|cook without oil:უცხიმოდ მომზადება|natural ingredients:ნატურალური ინგრედიენტები|' +
      'muscle recovery:კუნთების აღდგენა|deep sleep:ღრმა ძილი|strong immune system:ძლიერი იმუნიტეტი|physical energy:ფიზიკური ენერგია|avoid junk food:სწრაფი კვებისგან თავის შეკავება|maintain weight:წონის შენარჩუნება',
      [['A high-protein diet is essential for muscle recovery', 'მაღალცილოვანი დიეტა აუცილებელია კუნთების აღდგენისთვის.', 'recovery'],
       ['He takes five grams of creatine every day', 'ის ყოველდღე იღებს ხუთ გრამ კრეატინს.', 'creatine'],
       ['An air fryer lets you cook meat without oil', 'აეროგრილი საშუალებას გაძლევთ მოამზადოთ ხორცი უცხიმოდ.', 'oil'],
       ['Deep sleep and hydration boost your physical energy', 'ღრმა ძილი და წყლის ბალანსი ზრდის ფიზიკურ ენერგიას.', 'sleep']]],

    ['A2', 'წარსული მოვლენები, გამოცდილება და ისტორიები',
      'last weekend:გასულ უქმეებზე|two months ago:ორი თვის წინ|in February:თებერვალში|made a decision:მიიღო გადაწყვეტილება|completed the thesis:დაასრულა ნაშრომი|passed the exam:ჩააბარა გამოცდა|' +
      'bought concert tickets:იყიდა კონცერტის ბილეთები|sold the camera:გაყიდა კამერა|attended a masterclass:დაესწრო მასტერკლასს|received a certificate:მიიღო სერტიფიკატი|won the match:მოიგო მატჩი|scored a goal:გაიტანა გოლი|' +
      'met old friends:შეხვდა ძველ მეგობრებს|had a great time:მშვენიერი დრო გაატარა|learned a lesson:ისწავლა გაკვეთილი|solved the problem:გადაჭრა პრობლემა|forgot the password:დაავიწყდა პაროლი|found the solution:იპოვა გამოსავალი',
      [['He completed his Masters thesis in February', 'მან სამაგისტრო ნაშრომი თებერვალში დაასრულა.', 'completed'],
       ['We bought concert tickets two months ago', 'კონცერტის ბილეთები ორი თვის წინ ვიყიდეთ.', 'bought'],
       ['She attended an online masterclass and received a certificate', 'ის დაესწრო ონლაინ მასტერკლასს და მიიღო სერტიფიკატი.', 'certificate'],
       ['Our team won the match and scored three goals', 'ჩვენმა გუნდმა მოიგო მატჩი და სამი გოლი გაიტანა.', 'scored']]],

    ['A2', 'სამომავლო გეგმები, მარშრუტები და მიზნები',
      'upcoming trip:მოახლოებული მოგზაურობა|travel itinerary:მოგზაურობის მარშრუტი|visit three cities:სამი ქალაქის მონახულება|high-speed train:მაღალსიჩქარიანი მატარებელი|attend a football match:საფეხბურთო მატჩზე დასწრება|live concert:ცოცხალი კონცერტი|' +
      'plan ahead:წინასწარ დაგეგმვა|set a clear goal:მკაფიო მიზნის დასახვა|save enough money:საკმარისი თანხის დაზოგვა|pack the suitcase:ჩემოდნის ჩალაგება|print the tickets:ბილეთების ამობეჭდვა|check the weather:ამინდის შემოწმება|' +
      'look forward to:მოუთმენლად ლოდინი|next autumn:მომავალ შემოდგომაზე|in early November:ნოემბრის დასაწყისში|reach the next level:შემდეგ დონეზე გადასვლა|improve my fluency:მეტყველების გაუმჯობესება|keep practicing:ვარჯიშის გაგრძელება',
      [['We prepared a detailed travel itinerary for Germany', 'გერმანიისთვის დეტალური სამოგზაურო მარშრუტი მოვამზადეთ.', 'itinerary'],
       ['I look forward to attending the match in Hamburg', 'მოუთმენლად ველი ჰამბურგში მატჩზე დასწრებას.', 'forward'],
       ['High-speed trains connect Frankfurt and Berlin quickly', 'მაღალსიჩქარიანი მატარებლები სწრაფად აკავშირებს ფრანკფურტსა და ბერლინს.', 'connect'],
       ['Set a clear goal and keep practicing every day', 'დაისახეთ მკაფიო მიზანი და გააგრძელეთ ვარჯიში ყოველდღე.', 'goal']]],

    ['A2', 'უნივერსიტეტი, აკადემიური სწავლა და კურსები',
      'technical university:ტექნიკური უნივერსიტეტი|Masters program:სამაგისტრო პროგრამა|business administration:ბიზნესის ადმინისტრირება|banking management:საბანკო მენეჯმენტი|lecture hall:სალექციო აუდიტორია|class schedule:ლექციების ცხრილი|' +
      'academic semester:აკადემიური სემესტრი|coursework project:საკურსო პროექტი|case study analysis:პრაქტიკული ქეისის ანალიზი|group presentation:ჯგუფური პრეზენტაცია|prepare slides:სლაიდების მომზადება|take notes:ჩანაწერების გაკეთება|' +
      'final examination:ფინალური გამოცდა|highest grade:უმაღლესი შეფასება|graduation ceremony:დიპლომების გადაცემის ცერემონია|practical knowledge:პრაქტიკული ცოდნა|online course:ონლაინ კურსი|professional skill:პროფესიული უნარი',
      [['He studies banking management at the technical university', 'ის ტექნიკურ უნივერსიტეტში საბანკო მენეჯმენტს სწავლობს.', 'university'],
       ['We prepared slides for our group presentation', 'ჯგუფური პრეზენტაციისთვის სლაიდები მოვამზადეთ.', 'slides'],
       ['Taking notes helps you remember important details', 'ჩანაწერების გაკეთება მნიშვნელოვანი დეტალების დამახსოვრებაში გეხმარებათ.', 'notes'],
       ['She passed the final examination with the highest grade', 'მან ფინალური გამოცდა უმაღლესი შეფასებით ჩააბარა.', 'grade']]],

    ['A2', 'კონცერტები, არენა, მუსიკა და შთაბეჭდილებები',
      'world tour:მსოფლიო ტურნე|sold-out arena:სრულად გაყიდული არენა|official ticket:ოფიციალური ბილეთი|entrance sector:შესასვლელი სექტორი|main stage:მთავარი სცენა|sound system:ხმის სისტემა|' +
      'lighting effects:განათების ეფექტები|opening track:გამხსნელი კომპოზიცია|classic album:კლასიკური ალბომი|meaningful lyrics:შინაარსიანი ტექსტი|crowd energy:დარბაზის ენერგია|sing along:თან აყოლა (სიმღერაში)|' +
      'live performance:ცოცხალი შესრულება|encore song:ბისზე შესრულებული სიმღერა|visual artwork:ვიზუალური გرافიკა|quote design:ციტატის დიზაინი|memorable evening:დასამახსოვრებელი საღამო|goosebumps:ჟრუანტელი',
      [['Thousands of fans sang along to every song', 'ათასობით მსმენელი ჰყვებოდა ყველა სიმღერას.', 'sang'],
       ['The live performance at Uber Arena was unforgettable', 'ცოცხალი შესრულება უბერ არენაზე დაუვიწყარი იყო.', 'arena'],
       ['We created visual quote designs for our favorite tracks', 'საყვარელი ტრეკებისთვის ვიზუალური ციტატების დიზაინი შევქმენით.', 'designs'],
       ['The sound system and lighting effects were impressive', 'ხმის სისტემა და განათების ეფექტები შთამბეჭდავი იყო.', 'lighting']]],

    ['A2', 'შედარება, მახასიათებლები და არჩევანის გაკეთება',
      'much faster than:გაცილებით სწრაფი ვიდრე|more reliable:უფრო საიმედო|more convenient:უფრო მოსახერხებელი|less expensive:ნაკლებად ძვირი|better quality:უკეთესი ხარისხი|worse result:უარესი შედეგი|' +
      'the most important:ყველაზე მნიშვნელოვანი|the best choice:საუკეთესო არჩევანი|the easiest way:ყველაზე მარტივი გზა|as effective as:ისეთივე ეფექტური როგორც|completely different:სრულიად განსხვავებული|very similar to:ძალიან მსგავსი|' +
      'main advantage:მთავარი უპირატესობა|small disadvantage:მცირე ნაკლი|compare options:ვარიანტების შედარება|make a choice:არჩევანის გაკეთება|worth the price:ღირს თავის ფასად|highly recommended:დიდად რეკომენდებული',
      [['This method is much faster than manual work', 'ეს მეთოდი გაცილებით სწრაფია, ვიდრე ხელით მუშაობა.', 'faster'],
       ['Compare all options before you make a choice', 'შეადარეთ ყველა ვარიანტი, სანამ არჩევანს გააკეთებთ.', 'compare'],
       ['Good headphones are worth the price for daily use', 'კარგი ყურსასმენები ღირს თავის ფასად ყოველდღიური გამოყენებისთვის.', 'worth'],
       ['What is the main advantage of this software', 'რა არის ამ პროგრამის მთავარი უპირატესობა?', 'advantage']]],

    ['A2', 'ყოველდღიური სერვისები, ბარათები და კომუნიკაცია',
      'bank account:საბანკო ანგარიში|debit card:სადებეტო ბარათი|contactless payment:უკონტაქტო გადახდა|SMS notification:SMS შეტყობინება|security code:უსაფრთხოების კოდი|exchange rate:ვალუტის კურსი|' +
      'ATM machine:ბანკომატი|withdraw cash:ნაღდი ფულის გამოტანა|transfer money:თანხის გადარიცხვა|payment receipt:გადახდის ქვითარი|delivery service:მიტანის სერვისი|track the courier:კურიერის თვალყურის დევნება|' +
      'customer support:მომხმარებელთა მხარდაჭერა|ask for help:დახმარების თხოვნა|solve an issue:საკითხის მოგვარება|update settings:პარამეტრების განახლება|save changes:ცვლილებების შენახვა|fast connection:სწრაფი კავშირი',
      [['I always use contactless payment at supermarkets', 'სუპერმარკეტებში ყოველთვის უკონტაქტო გადახდას ვიყენებ.', 'contactless'],
       ['You will receive a security code via SMS notification', 'უსაფრთხოების კოდს მიიღებთ SMS შეტყობინებით.', 'code'],
       ['Check the currency exchange rate in the mobile app', 'შეამოწმეთ ვალუტის კურსი მობილურ აპლიკაციაში.', 'exchange'],
       ['Customer support helped us solve the issue quickly', 'მომხმარებელთა მხარდაჭერა დაგვეხმარა საკითხის სწრაფად მოგვარებაში.', 'support']]],

    // ==================== B1 (Units 21 - 30 | 180 Words & Phrases) ====================
    ['B1', 'კარიერა, პროფესიული უნარები და გასაუბრება',
      'career advancement:კარიერული წინსვლა|professional background:პროფესიული გამოცდილება|credit analyst:საკრედიტო ანალიტიკოსი|analytical mindset:ანალიტიკური აზროვნება|problem-solving skills:პრობლემების გადაჭრის უნარი|attention to detail:დეტალებისადმი ყურადღება|' +
      'job interview:სამუშაო გასაუბრება|strong candidate:ძლიერი კანდიდატი|full-time position:სრული განაკვეთის პოზიცია|probation period:გამოსაცდელი ვადა|competitive salary:კონკურენტული ხელფასი|annual bonus:წლიური ბონუსი|' +
      'take responsibility:პასუხისმგებლობის აღება|work under pressure:წნეხის ქვეშ მუშაობა|meet expectations:მოლოდინების გამართლება|gain experience:გამოცდილების დაგროვება|get promoted:დაწინაურება|long-term career:გრძელვადიანი კარიერა',
      [['A credit analyst needs strong attention to detail', 'საკრედიტო ანალიტიკოსს სჭირდება დეტალებისადმი დიდი ყურადღება.', 'detail'],
       ['He can work under pressure and meet expectations', 'მას შეუძლია წნეხის ქვეშ მუშაობა და მოლოდინების გამართლება.', 'pressure'],
       ['This role offers great opportunities for career advancement', 'ეს პოზიცია იძლევა კარიერული წინსვლის შესანიშნავ შესაძლებლობას.', 'advancement'],
       ['She got promoted after completing the major project', 'მსხვილი პროექტის დასრულების შემდეგ ის დააწინაურეს.', 'promoted']]],

    ['B1', 'ოფისის მართვა, დედლაინები და საქმიანი მიმოწერა',
      'strict deadline:მკაცრი დედლაინი (ბოლო ვადა)|set priorities:პრიორიტეტების დალაგება|urgent task:სასწრაფო დავალება|weekly schedule:კვირის განრიგი|team meeting:გუნდური შეხვედრა|agenda items:დღის წესრიგის საკითხები|' +
      'progress report:პროგრესის ანგარიში|submit on time:დროულად ჩაბარება/წარდგენა|review the document:დოკუმენტის გადახედვა|approve the request:მოთხოვნის დადასტურება|postpone a call:ზარის გადადება|ahead of schedule:გრაფიკზე ადრე|' +
      'attached file:თანდართული ფაილი|forward an email:წერილის გადამისამართება|keep in touch:კონტაქტზე ყოფნა|follow up on:საკითხის მოკითხვა/მიდევნება|efficient workflow:ეფექტური სამუშაო პროცესი|productive day:პროდუქტიული დღე',
      [['We finished the progress report ahead of schedule', 'პროგრესის ანგარიში გრაფიკზე ადრე დავასრულეთ.', 'ahead'],
       ['Please review the attached file before our meeting', 'გთხოვთ გადახედოთ თანდართულ ფაილს ჩვენს შეხვედრამდე.', 'attached'],
       ['Setting clear priorities helps you meet strict deadlines', 'პრიორიტეტების სწორად დალაგება გეხმარებათ მკაცრი ვადების დაცვაში.', 'priorities'],
       ['I will follow up on the client request tomorrow morning', 'კლიენტის მოთხოვნას ხვალ დილით მოვიკითხავ.', 'follow']]],

    ['B1', 'თანამედროვე ტექნიკა, სმარტფონები და აუდიო',
      'noise-canceling headphones:ხმაურის ჩამხშობი ყურსასმენები|sound quality:ხმის ხარისხი|ambient mode:გარე ხმის გამტარი რეჟიმი|long battery life:ელემენტის ხანგრძლივი გამძლეობა|magnetic charging:მაგნიტური დამუხტვა|protective case:დამცავი ქეისი|' +
      'smartwatch tracker:სმარტ-საათის მრიცხველი|heart rate monitor:პულსის სენსორი|wireless connection:უსადენო კავშირი|pair a device:მოწყობილობის დაკავშირება|file transfer:ფაილების გადატანა|desktop integration:კომპიუტერთან ინტეგრაცია|' +
      'password manager:პაროლების მენეჯერი|two-factor authentication:ორფაქტორიანი ავთენტიფიკაცია|screen brightness:ეკრანის სიკაშკაშე|storage capacity:მეხსიერების მოცულობა|software update:პროგრამული განახლება|user interface:მომხმარებლის ინტერფეისი',
      [['Noise-canceling headphones are ideal for deep focus', 'ხმაურის ჩამხშობი ყურსასმენები იდეალურია ღრმა კონცენტრაციისთვის.', 'headphones'],
       ['Use a password manager to keep your accounts secure', 'გამოიყენეთ პაროლების მენეჯერი ანგარიშების უსაფრთხოებისთვის.', 'password'],
       ['Wireless file transfer between phone and PC is very convenient', 'ტელეფონსა და კომპიუტერს შორის ფაილების უსადენო გადატანა ძალიან მოსახერხებელია.', 'transfer'],
       ['The smartwatch tracks my heart rate during boxing', 'სმარტ-საათი კრივის დროს ჩემს პულსს აღრიცხავს.', 'heart']]],

    ['B1', 'პროგრამირება, სკრიპტები, ბოტები და სერვერები',
      'custom script:სპეციალური სკრიპტი|automate a task:ამოცანის ავტომატიზაცია|Telegram bot:ტელეგრამ-ბოტი|webhook URL:ვებჰუკის მისამართი|incoming message:შემომავალი შეტყობინება|convert into PDF:PDF-ად გარდაქმნა|' +
      'virtual private server:ვირტუალური პირადი სერვერი|command line:ბრძანებათა ხაზი (ტერმინალი)|continuous stream:უწყვეტი ნაკადი (24/7)|background process:ფონური პროცესი|configuration file:კონფიგურაციის ფაილი|source code:საწყისი კოდი|' +
      'local storage:ბრაუზერის ლოკალური მეხსიერება|export backup:სარეზერვო ასლის ექსპორტი|import JSON data:JSON მონაცემების იმპორტი|fix a bug:ხარვეზის გასწორება|test the feature:ფუნქციის გატესტვა|deploy the app:აპლიკაციის გაშვება',
      [['We wrote a custom script to forward SMS alerts', 'დავწერეთ სპეციალური სკრიპტი SMS შეტყობინებების გადასამისამართებლად.', 'script'],
       ['The virtual private server broadcasts music continuously', 'ვირტუალური სერვერი მუსიკას უწყვეტ რეჟიმში გადასცემს.', 'broadcasts'],
       ['You can export your progress as a JSON backup file', 'შეგიძლიათ შეინახოთ თქვენი პროგრესი JSON სარეზერვო ფაილად.', 'backup'],
       ['Always test the feature after fixing a bug', 'ხარვეზის გასწორების შემდეგ ყოველთვის გატესტეთ ფუნქცია.', 'bug']]],

    ['B1', 'ელ-კომერცია, საწყობები და საერთაშორისო გზავნილები',
      'online marketplace:ონლაინ სავაჭრო პლატფორმა|direct manufacturer:პირდაპირი მწარმოებელი|custom apparel:ინდივიდუალური შეკვეთის სამოსი|digital mockup:ციფრული მაკეტი/ნიმუში|print saturation:პრინტის ფერის სიმკვეთრე|fabric weight:ქსოვილის სიმკვრივე/წონა|' +
      'freight forwarder:გადამზიდი კომპანია|warehouse facility:სასაწყობე მეურნეობა|shipping address:მიწოდების მისამართი|tracking number:გზავნილის თრექინგ-კოდი|parcel weight:ამანათის წონა|volumetric weight:მოცულობითი წონა|' +
      'customs clearance:საბაჟო გაფორმება (განბაჟება)|declare the value:ღირებულების დეკლარირება|import tax:იმპორტის გადასახადი|in transit:გზაშია (ტრანზიტში)|arrived at branch:ფილიალში მივიდა|home delivery:სახლში მიტანა',
      [['The manufacturer sent a digital mockup of the hoodie', 'მწარმოებელმა გამოგზავნა ჰუდის ციფრული მაკეტი.', 'mockup'],
       ['Enter the Foshan warehouse address carefully when ordering', 'შეკვეთისას ყურადღებით მიუთითეთ ფოშანის საწყობის მისამართი.', 'warehouse'],
       ['You must declare the value of the parcel for customs', 'საბაჟოსთვის ამანათის ღირებულება უნდა დაადეკლარიროთ.', 'declare'],
       ['The shipment is currently in transit to Georgia', 'გზავნილი ამჟამად გზაშია საქართველოსკენ.', 'transit']]],

    ['B1', 'პირადი ფინანსები, ხარჯების აღრიცხვა და დანაზოგი',
      'monthly budget:ყოველთვიური ბიუჯეტი|fixed expenses:ფიქსირებული ხარჯები|variable costs:ცვალებადი ხარჯები|travel expense log:მოგზაურობის ხარჯების ჟურნალი|keep track of:აღრიცხვა / თვალყურის დევნება|cut down on:შემცირება (ხარჯების)|' +
      'emergency fund:სარეზერვო ფონდი|put money aside:თანხის გადადება|financial independence:ფინანსური დამოუკიდებლობა|smart purchase:გონივრული შენაძენი|value for money:ფასისა და ხარისხის შესაბამისობა|unexpected bill:გაუთვალისწინებელი გადასახადი|' +
      'pay off debt:ვალის სრულად დაფარვა|interest-free period:უპროცენტო პერიოდი|bank statement:საბანკო ამონაწერი|currency conversion:ვალუტის კონვერტაცია|purchasing power:მსყიდველობითი უნარი|long-term investment:გრძელვადიანი ინვესტიცია',
      [['I use a bot to keep track of my travel expenses', 'მოგზაურობის ხარჯების აღსარიცხავად ბოტს ვიყენებ.', 'expenses'],
       ['It is wise to put money aside for an emergency fund', 'გონივრულია თანხის გადადება სარეზერვო ფონდისთვის.', 'aside'],
       ['Check your monthly bank statement to review variable costs', 'შეამოწმეთ თვის საბანკო ამონაწერი ცვალებადი ხარჯების გადასახედად.', 'statement'],
       ['This product offers excellent value for money', 'ეს პროდუქტი ფასისა და ხარისხის საუკეთესო შესაბამისობას გვთავაზობს.', 'value']]],

    ['B1', 'ევროპული ფეხბურთი, ტაქტიკა და ფენტეზი ლიგა',
      'Champions League:ჩემპიონთა ლიგა|group stage:ჯგუფური ეტაპი|knockout round:პლეი-ოფის ეტაპი|quarter-final:მეოთხედფინალი|starting lineup:ძირითადი შემადგენლობა|tactical formation:ტაქტიკური განლაგება|' +
      'counter-attack:კონტრშეტევა|ball possession:ბურთის ფლობა|clean sheet:მშრალად შენახული კარი|penalty shootout:პენალტების სერია|injury time:დამატებული დრო|home advantage:საშინაო მოედნის უპირატესობა|' +
      'fantasy football squad:ფენტეზი ფეხბურთის გუნდი|captain points:კაპიტნის გაორმაგებული ქულები|transfer window:სატრანსფერო ფანჯარა|league standings:სატურნირო ცხრილი|away match:გასვლითი მატჩი|passionate fans:ერთგული გულშემატკივრები',
      [['Keeping a clean sheet gives extra points in fantasy football', 'მშრალად შენახული კარი დამატებით ქულებს იძლევა ფენტეზი ფეხბურთში.', 'sheet'],
       ['The coach announced the starting lineup an hour before kickoff', 'მწვრთნელმა ძირითადი შემადგენლობა მატჩამდე ერთი საათით ადრე გამოაცხადა.', 'lineup'],
       ['They scored the winning goal on a fast counter-attack', 'მათ გამარჯვების გოლი სწრაფ კონტრშეტევაზე გაიტანეს.', 'counter-attack'],
       ['Check the league standings after the weekend matches', 'შეამოწმეთ სატურნირო ცხრილი უქმეების მატჩების შემდეგ.', 'standings']]],

    ['B1', 'მუსიკალური არხის მართვა, აუდიო და დიზაინი',
      'music channel:მუსიკალური არხი|instrumental project:ინსტრუმენტული პროექტი|lo-fi house mix:ლოუ-ფაი ჰაუს მიქსი|warm saxophone:თბილი საქსოფონი|smooth bassline:რბილი ბას-ხაზი|vinyl crackle:ვინილის ტკაცუნის ეფექტი|' +
      'tracklist timestamps:ტრეკლისტის დროის ნიშნულები|channel branding:არხის ბრენდინგი|cover artwork:გარეკანის ილუსტრაცია|color palette:ფერთა პალიტრა|clean typography:სუფთა ტიპოგრაფია|layout template:განლაგების შაბლონი|' +
      'upload schedule:ატვირთვის განრიგი|subscriber growth:გამომწერების ზრდა|watch time:ყურების ხანგრძლივობა|background music:ფონური მუსიკა|creative process:შემოქმედებითი პროცესი|audio quality:აუდიო ხარისხი',
      [['Every one-hour mix includes full tracklist timestamps', 'ყველა ერთსაათიანი მიქსი მოიცავს ტრეკლისტის დროის ნიშნულებს.', 'timestamps'],
       ['A warm color palette defines our channel branding', 'თბილი ფერთა პალიტრა განსაზღვრავს ჩვენი არხის ბრენდინგს.', 'palette'],
       ['Many students use instrumental lo-fi as background music', 'ბევრი სტუდენტი იყენებს ინსტრუმენტულ lo-fi-ს ფონურ მუსიკად.', 'background'],
       ['Consistent upload schedules help build watch time', 'ატვირთვის სტაბილური განრიგი ზრდის ყურების ხანგრძლივობას.', 'upload']]],

    ['B1', 'ქართული კულტურა, ხალხური საკრავები და პოეზია',
      'cultural heritage:კულტურული მემკვიდრეობა|ancient tradition:უძველესი ტრადიცია|native village:მშობლიური სოფელი|polyphonic singing:მრავალხმიანი სიმღერა|traditional instrument:ტრადიციული საკრავი|three-stringed panduri:სამსიმიანი ფანდური|' +
      'gentle chonguri:ნაზი ჩონგური|wooden salamuri:ხის სალამური|rhythmic doli:რიტმული დოლი|emotional duduk:ემოციური დუდუკი|original poem:ორიგინალური ლექსი|poetic verse:პოეტური სტროფი|' +
      'Georgian hospitality:ქართული სტუმართმოყვარეობა|vineyard valley:ვენახების ხეობა|historical monument:ისტორიული ძეგლი|folk melody:ხალხური მელოდია|national identity:ეროვნული იდენტობა|pass down to:თაობიდან თაობაზე გადაცემა',
      [['The poem about the village is set to folk instruments', 'ლექსი სოფლის შესახებ ხალხურ საკრავებზეა აწყობილი.', 'instruments'],
       ['Georgian polyphonic singing is a UNESCO cultural heritage', 'ქართული მრავალხმიანი სიმღერა იუნესკოს კულტურული მემკვიდრეობაა.', 'polyphonic'],
       ['The combination of panduri and duduk sounds deeply emotional', 'ფანდურისა და დუდუკის კომბინაცია ღრმად ემოციურად ჟღერს.', 'emotional'],
       ['Traditions are passed down from generation to generation', 'ტრადიციები თაობიდან თაობას გადაეცემა.', 'generation']]],

    ['B1', 'ფრაზული ზმნები და B1 დონის სასაუბრო კონსტრუქციები',
      'figure out:გარკვევა / მიხვედრა|carry out:ჩატარება / შესრულება|point out:მითითება / ხაზგასმა|turn out:აღმოჩენა (აღმოჩნდა რომ)|set up:გამართვა / დაარსება|back up:სარეზერვო ასლის შენახვა|' +
      'look into:შესწავლა / გამოძიება|come up with:მოფიქრება (იდეის)|deal with:გამკლავება / მოგვარება|rely on:დაყრდნობა / იმედის ქონა|put off:გადადება (საქმის)|call off:გაუქმება (შეხვედრის)|' +
      'run out of:გათავება / ამოწურვა|keep up with:ფეხის აწყობა / არ ჩამორჩენა|take into account:გათვალისწინება|in charge of:პასუხისმგებელი რაიმეზე|on behalf of:ვინმეს სახელით|as a result of:რისამე შედეგად',
      [['We need to figure out why the formula returned an error', 'უნდა გავარკვიოთ, რატომ დააბრუნა ფორმულამ შეცდომა.', 'figure'],
       ['The analyst pointed out several important risk factors', 'ანალიტიკოსმა მიუთითა რამდენიმე მნიშვნელოვან რისკ-ფაქტორზე.', 'pointed'],
       ['Never put off until tomorrow what you can finish today', 'არასდროს გადადოთ ხვალისთვის ის, რისი დასრულებაც დღეს შეგიძლიათ.', 'put'],
       ['Always take seasonal fluctuations into account', 'ყოველთვის გაითვალისწინეთ სეზონური მერყეობები.', 'account']]],

    // ==================== B2 (Units 31 - 40 | 180 Words & Phrases) ====================
    ['B2', 'საქმიანი მოლაპარაკებები და სტრატეგიული შეთანხმება',
      'negotiating table:მოლაპარაკების მაგიდა|mutually beneficial:ორმხრივად მომგებიანი|reach a consensus:კონსენსუსის მიღწევა|common ground:საერთო ენა / გადაკვეთის წერტილი|counter-proposal:შემხვედრი შეთავაზება|make a concession:დათმობაზე წასვლა|' +
      'key stakeholders:მთავარი დაინტერესებული მხარეები|decision-maker:გადაწყვეტილების მიმღები პირი|bargaining power:სავაჭრო/მოლაპარაკების ძალა|non-negotiable term:პირობა რომელიც განხილვას არ ექვემდებარება|win-win outcome:ორივე მხარისთვის მომგებიანი შედეგი|break the deadlock:ჩიხიდან გამოსვლა|' +
      'weigh the pros and cons:დადებითი და უარყოფითი მხარეების აწონ-დაწონა|feasible alternative:განხორციელებადი ალტერნატივა|long-term commitment:გრძელვადიანი ვალდებულება|seal the deal:გარიგების დადება|verbal agreement:ზეპირი შეთანხმება|written confirmation:წერილობითი დასტური',
      [['Both parties worked hard to reach a mutually beneficial deal', 'ორივე მხარემ ბევრი იმუშავა ორმხრივად მომგებიანი გარიგების მისაღწევად.', 'beneficial'],
       ['We need to weigh the pros and cons before signing', 'ხელმოწერამდე უნდა ავწონ-დავწონოთ დადებითი და უარყოფითი მხარეები.', 'weigh'],
       ['A flexible counter-proposal helped break the deadlock', 'მოქნილმა შემხვედრმა შეთავაზებამ ხელი შეუწყო ჩიხიდან გამოსვლას.', 'deadlock'],
       ['Always request written confirmation after a verbal agreement', 'ზეპირი შეთანხმების შემდეგ ყოველთვის მოითხოვეთ წერილობითი დასტური.', 'confirmation']]],

    ['B2', 'კომერციული ბანკინგი და სესხის სტრუქტურირება',
      'commercial loan portfolio:კომერციული სესხების პორტფელი|credit application:საკრედიტო განაცხადი|borrower profile:მსესხებლის პროფილი|creditworthiness:გადახდისუნარიანობა / სანდოობა|working capital facility:საბრუნავი საშუალებების სესხი|capital expenditure:კაპიტალური დანახარჯი (CAPEX)|' +
      'loan disbursement:სესხის გაცემა / ათვისება|repayment schedule:დაფარვის გრაფიკი|grace period:საშეღავათო პერიოდი|interest rate margin:საპროცენტო განაკვეთის მარჟა|floating rate:მცურავი საპროცენტო განაკვეთი|fixed maturity:ფიქსირებული ვადიანობა|' +
      'collateral coverage:უზრუნველყოფით (გირაოთი) გადაფარვა|personal guarantee:პირადი თავდებობა|financial covenant:ფინანსური კოვენანტი/პირობა|credit committee:საკრედიტო კომიტეტი|early prepayment:ვადაზე ადრე დაფარვა|refinancing option:რეფინანსირების ვარიანტი',
      [['The repayment schedule is tailored to the borrower cash flow', 'დაფარვის გრაფიკი მორგებულია მსესხებლის ფულად ნაკადებზე.', 'schedule'],
       ['The credit committee approved a three-month grace period', 'საკრედიტო კომიტეტმა დაამტკიცა სამთვიანი საშეღავათო პერიოდი.', 'grace'],
       ['Adequate collateral coverage reduces the bank exposure', 'ადეკვატური გირაოთი გადაფარვა ამცირებს ბანკის რისკს.', 'collateral'],
       ['The borrower must comply with all financial covenants', 'მსესხებელმა უნდა დაიცვას ყველა ფინანსური კოვენანტი.', 'covenants']]],

    ['B2', 'ფინანსური ანგარიშგება და კოეფიციენტების ანალიზი',
      'audited financial statements:აუდირებული ფინანსური ანგარიშგება|balance sheet:საბალანსო უწყისი (ბალანსი)|income statement:მოგება-ზარალის უწყისი|cash flow statement:ფულადი ნაკადების უწყისი|gross profit margin:საერთო მოგების მარჟა|operating profit (EBIT):საოპერაციო მოგება|' +
      'net income:წმინდა მოგება|current liquidity ratio:მიმდინარე ლიკვიდურობის კოეფიციენტი|quick ratio:სწრაფი ლიკვიდურობის კოეფიციენტი|debt-to-equity ratio:ვალისა და კაპიტალის თანაფარდობა|return on equity (ROE):უკუგება კაპიტალზე|return on assets (ROA):უკუგება აქტივებზე|' +
      'debt service coverage:ვალის მომსახურების კოეფიციენტი (DSCR)|working capital cycle:საბრუნავი კაპიტალის ციკლი|inventory turnover:მარაგების ბრუნვადობა|retained earnings:გაუნაწილებელი მოგება|depreciation expense:ცვეთის ხარჯი|year-over-year growth:წლიური ზრდა (YoY)',
      [['A debt service coverage ratio above one point three is healthy', 'ვალის მომსახურების კოეფიციენტი 1.3-ის ზემოთ ჯანსაღად ითვლება.', 'coverage'],
       ['We analyzed the balance sheet and income statement of the bank', 'ჩვენ გავაანალიზეთ ბანკის ბალანსი და მოგება-ზარალის უწყისი.', 'statement'],
       ['Retained earnings strengthened the company equity base', 'გაუნაწილებელმა მოგებამ გააძლიერა კომპანიის საკუთარი კაპიტალი.', 'earnings'],
       ['Operating profit grew by eighteen percent year-over-year', 'საოპერაციო მოგება წლიურ ჭრილში თვრამეტი პროცენტით გაიზარდა.', 'operating']]],

    ['B2', 'ვაჭრობის დაფინანსება, ფაქტორინგი და მოწოდების ჯაჭვი',
      'supply chain finance:მოწოდების ჯაჭვის დაფინანსება|accounts receivable:დებიტორული დავალიანება|accounts payable:კრედიტორული დავალიანება|recourse factoring:ფაქტორინგი რეგრესის უფლებით|non-recourse factoring:უაქცეპტო/ურეგრესო ფაქტორინგი|invoice discounting:ინვოისების დისკონტირება|' +
      'letter of credit:აკრედიტივი (L/C)|performance guarantee:შესრულების საბანკო გარანტია|advance payment guarantee:ავანსის დაბრუნების გარანტია|tender security:სატენდერო გარანტია|verified invoice:დადასტურებული ინვოისი|delivery acceptance act:მიღება-ჩაბარების აქტი|' +
      'deferred payment:გადავადებული გადახდა|liquidity bottleneck:ლიკვიდურობის შეფერხება|creditworthy buyer:გადახდისუნარიანი მყიდველი|supplier contract:მომწოდებლის კონტრაქტი|settlement period:ანგარიშსწორების პერიოდი|cross-border trade:საზღვრისპირა/საერთაშორისო ვაჭრობა',
      [['Factoring allows suppliers to convert receivables into cash', 'ფაქტორინგი მომწოდებლებს საშუალებას აძლევს დებიტორული დავალიანება ნაღდ ფულად აქციონ.', 'receivables'],
       ['Disbursement requires a signed delivery acceptance act', 'თანხის გაცემა მოითხოვს ხელმოწერილ მიღება-ჩაბარების აქტს.', 'acceptance'],
       ['A performance guarantee protects the buyer against non-delivery', 'შესრულების გარანტია იცავს მყიდველს მოუწოდებლობის რისკისგან.', 'guarantee'],
       ['Long settlement periods can create a liquidity bottleneck', 'ანგარიშსწორების ხანგრძლივმა პერიოდმა შეიძლება ლიკვიდურობის შეფერხება შექმნას.', 'bottleneck']]],

    ['B2', 'უძრავი ქონების ბაზარი, მშენებლობა და შეფასება',
      'residential complex:საცხოვრებელი კომპლექსი|commercial property:კომერციული უძრავი ქონება|coastal resort zone:სანაპირო საკურორტო ზონა|price per square meter:ფასი კვადრატულ მეტრზე|independent appraisal:დამოუკიდებელი შეფასება|market value:საბაზრო ღირებულება|' +
      'liquidation value:სალიკვიდაციო ღირებულება|construction permit:მშენებლობის ნებართვა|building milestone:მშენებლობის ეტაპი|pre-sales rate:წინასწარი გაყიდვების ტემპი|installment plan:შიდა განვადების გეგმა|mortgage loan:იპოთეკური სესხი|' +
      'rental yield:საიჯარო შემოსავლიანობა|occupancy rate:დატვირთულობის მაჩვენებელი|black frame condition:შავი კარკასის მდგომარეობა|white frame:თეთრი კარკასი|turnkey renovation:სრული რემონტით („გასაღების ჩაბარებით“)|cost overrun:ხარჯთაღრიცხვის გადაჭარბება',
      [['Pre-sales rates indicate strong demand for coastal apartments', 'წინასწარი გაყიდვების ტემპი მიუთითებს მაღალ მოთხოვნაზე სანაპირო ბინებზე.', 'demand'],
       ['Each loan tranche is released after verifying building milestones', 'სესხის თითოეული ტრანში გაიცემა მშენებლობის ეტაპების გადამოწმების შემდეგ.', 'milestones'],
       ['Independent appraisal confirmed both market and liquidation value', 'დამოუკიდებელმა შეფასებამ დაადასტურა როგორც საბაზრო, ისე სალიკვიდაციო ღირებულება.', 'appraisal'],
       ['High summer occupancy rates generate attractive rental yields', 'ზაფხულის მაღალი დატვირთულობა ქმნის მიმზიდველ საიჯარო შემოსავლიანობას.', 'yields']]],

    ['B2', 'იურიდიული კონსულტაცია და სახელშეკრულებო სამართალი',
      'legally binding contract:იურიდიული ძალის მქონე ხელშეკრულება|contractual obligation:სახელშეკრულებო ვალდებულება|termination clause:შეწყვეტის მუხლი|breach of contract:კონტრაქტის პირობების დარღვევა|late delivery penalty:დაგვიანების ჯარიმა/პირგასამტეხლო|force majeure:ფორსმაჟორი (დაუძლეველი ძალა)|' +
      'public registry extract:საჯარო რეესტრის ამონაწერი|title deed:საკუთრების დამადასტურებელი დოკუმენტი|mortgage registration:იპოთეკის რეგისტრაცია|power of attorney:მინდობილობა|notarized signature:ნოტარიულად დამოწმებული ხელმოწერა|legal entity:იურიდიული პირი|' +
      'limited liability company:შეზღუდული პასუხისმგებლობის საზოგადოება (შპს)|shareholder resolution:პარტნიორთა/აქციონერთა კრების ოქმი|dispute resolution:დავების გადაწყვეტა|arbitration court:საარბიტრაჟო სასამართლო|mutual consent:ურთიერთთანხმობა|regulatory compliance:კანონმდებლობასთან შესაბამისობა',
      [['Always check the latest public registry extract before signing', 'ხელმოწერამდე ყოველთვის შეამოწმეთ საჯარო რეესტრის უახლესი ამონაწერი.', 'registry'],
       ['A shareholder resolution is required to pledge company assets', 'კომპანიის აქტივების დასაგირავებლად საჭიროა პარტნიორთა კრების ოქმი.', 'resolution'],
       ['The contract may be amended only by mutual consent', 'კონტრაქტის შეცვლა შესაძლებელია მხოლოდ მხარეთა ურთიერთთანხმობით.', 'consent'],
       ['Failure to deliver on time constitutes a breach of contract', 'დროულად მიუწოდებლობა წარმოადგენს ხელშეკრულების დარღვევას.', 'breach']]],

    ['B2', 'რისკ-მენეჯმენტი, სტრეს-ტესტირება და პრევენცია',
      'risk assessment:რისკების შეფასება|mitigate exposure:რისკის მოცულობის შემცირება|default probability:დეფოლტის ალბათობა|credit concentration:საკრედიტო კონცენტრაცია|single-buyer dependency:ერთ მყიდველზე დამოკიდებულება|currency mismatch:სავალუტო შეუსაბამობა|' +
      'exchange rate fluctuation:ვალუტის კურსის მერყეობა|sensitivity analysis:მგრძნობელობის ანალიზი|worst-case scenario:უარესი სცენარი|stress testing:სტრეს-ტესტირება|early warning indicator:ადრეული გაფრთხილების ინდიკატორი|non-performing loan (NPL):უმოქმედო/პრობლემური სესხი|' +
      'loan loss provision:სესხების შესაძლო დანაკარგების რეზერვი|contingency plan:სარეზერვო სამოქმედო გეგმა|diversified portfolio:დივერსიფიცირებული პორტფელი|risk appetite:რისკის მადა / დასაშვები ზღვარი|internal control:შიდა კონტროლი|preventive measure:პრევენციული ზომა',
      [['Sensitivity analysis tests how cash flow reacts to revenue drops', 'მგრძნობელობის ანალიზი ამოწმებს, როგორ რეაგირებს ფულადი ნაკადი შემოსავლის კლებაზე.', 'sensitivity'],
       ['High single-buyer dependency increases credit risk', 'ერთ მყიდველზე მაღალი დამოკიდებულება ზრდის საკრედიტო რისკს.', 'dependency'],
       ['Currency mismatch occurs when loans are in dollars but income is in lari', 'სავალუტო შეუსაბამობა ჩნდება, როცა სესხი დოლარშია, შემოსავალი კი ლარში.', 'mismatch'],
       ['Early warning indicators help prevent non-performing loans', 'ადრეული გაფრთხილების ინდიკატორები ხელს უშლის პრობლემური სესხების წარმოქმნას.', 'warning']]],

    ['B2', 'მონაცემთა ანალიტიკა: Excel, SQL და Power BI',
      'financial modeling:ფინანსური მოდელირება|dynamic formula:დინამიკური ფორმულა|nested function:ჩადგმული ფუნქცია|pivot table:შემაჯამებელი პივოტ-ცხრილი|cell protection:უჯრედების დაცვა (დაბლოკვა)|VBA macro automation:VBA მაკროსით ავტომატიზაცია|' +
      'input assumption:საწყისი დაშვება/პარამეტრი|data validation:მონაცემთა ვალიდაცია/შემოწმება|relational database:რელაციური მონაცემთა ბაზა|SQL query:SQL მოთხოვნა|join tables:ცხრილების დაკავშირება (JOIN)|filter records:ჩანაწერების გაფილტვრა|' +
      'aggregate data:მონაცემების დაჯგუფება/აგრეგაცია|Power BI dashboard:Power BI-ის ანალიტიკური პანელი|interactive chart:ინტერაქტიული დიაგრამა|key performance indicator:ეფექტიანობის მთავარი მაჩვენებელი|data accuracy:მონაცემთა სიზუსტე|automate reporting:რეპორტინგის ავტომატიზაცია',
      [['Lock formula cells with cell protection to prevent user errors', 'დაბლოკეთ ფორმულიანი უჯრედები, რათა თავიდან აიცილოთ შემთხვევითი შეცდომები.', 'protection'],
       ['We use SQL queries to join tables and filter client records', 'ვიყენებთ SQL მოთხოვნებს ცხრილების დასაკავშირებლად და ჩანაწერების გასაფილტრად.', 'queries'],
       ['The Power BI dashboard visualizes portfolio trends in real time', 'Power BI-ის პანელი რეალურ დროში აჩვენებს პორტფელის ტენდენციებს.', 'dashboard'],
       ['VBA macro automation reduced monthly reporting time by half', 'VBA მაკროსით ავტომატიზაციამ თვიური რეპორტინგის დრო გაანახევრა.', 'automation']]],

    ['B2', 'პროექტების მართვა, რესურსები და ეფექტიანობა',
      'project scope:პროექტის მოცულობა და ჩარჩო|resource allocation:რესურსების განაწილება|time estimation:დროის შეფასება|critical path:კრიტიკული გზა (მთავარი ეტაპები)|process bottleneck:პროცესის შეფერხების წერტილი|streamline workflow:სამუშაო პროცესის გამარტივება|' +
      'cross-functional team:მრავალპროფილური გუნდი|delegate tasks:დავალებების დელეგირება/გადანაწილება|track milestones:ეტაპების კონტროლი|quality assurance:ხარისხის უზრუნველყოფა|constructive feedback:კონსტრუქციული უკუკავშირი|continuous improvement:უწყვეტი გაუმჯობესება|' +
      'meet the objective:მიზნის მიღწევა|within budget:ბიუჯეტის ფარგლებში|return on investment:ინვესტიციის უკუგება (ROI)|operational efficiency:საოპერაციო ეფექტიანობა|best practice:საუკეთესო პრაქტიკა|lessons learned:მიღებული გამოცდილება',
      [['Identifying the process bottleneck allowed us to speed up approvals', 'შეფერხების წერტილის პოვნამ საშუალება მოგვცა დაგვეჩქარებინა დამტკიცებები.', 'bottleneck'],
       ['The project was delivered on schedule and within budget', 'პროექტი ჩაბარდა გრაფიკის მიხედვით და ბიუჯეტის ფარგლებში.', 'budget'],
       ['Effective managers delegate tasks and give constructive feedback', 'ეფექტური მენეჯერები ანაწილებენ დავალებებს და გასცემენ კონსტრუქციულ უკუკავშირს.', 'delegate'],
       ['We documented the lessons learned after completing Phase One', 'პირველი ფაზის დასრულების შემდეგ აღვრიცხეთ მიღებული გამოცდილება.', 'learned']]],

    ['B2', 'B2 დონის იდიომები, კოლოკაციები და საქმიანი ფრაზები',
      'in the long run:გრძელვადიან პერსპექტივაში|on the same page:ერთ აზრზე ყოფნა / შეთანხმებულობა|from scratch:ნულიდან (თავიდან ბოლომდე)|rule of thumb:პრაქტიკული დაუწერელი წესი|bottom line:საბოლოო შედეგი / მთავარი დასკვნა|track record:წარსული საქმიანობის ისტორია|' +
      'play it safe:ფრთხილად მოქმედება (რისკის გარეშე)|cut corners:ხარისხის ხარჯზე დაზოგვა/დაჩქარება|go the extra mile:დამატებითი ძალისხმევის გაღება|keep in mind:მხედველობაში ქონა / გახსოვდეს|take for granted:ჩვეულებრივ/გარანტირებულ რამედ მიღება|bear in mind:გათვალისწინება|' +
      'pros and cons:დადებითი და უარყოფითი მხარეები|safe and sound:უვნებლად / მშვიდობიანად|sooner or later:ადრე თუ გვიან|by and large:მთლიანობაში / საერთო ჯამში|up to date:უახლესი / განახლებული|out of the question:გამორიცხულია',
      [['We built the entire web application from scratch', 'მთელი ვებ-აპლიკაცია ნულიდან ავაწყვეთ.', 'scratch'],
       ['Before starting the meeting let us make sure we are on the same page', 'შეხვედრის დაწყებამდე დავრწმუნდეთ, რომ ყველანი ერთ აზრზე ვართ.', 'page'],
       ['The borrower has a strong track record of timely repayments', 'მსესხებელს აქვს დროული გადახდების ძლიერი ისტორია.', 'record'],
       ['Never cut corners when evaluating financial risk', 'არასდროს გააკეთოთ საქმე ზერელედ ფინანსური რისკის შეფასებისას.', 'corners']]],

    // ==================== C1 (Units 41 - 50 | 180 Words & Phrases) ====================
    ['C1', 'აკადემიური კვლევა, მეთოდოლოგია და სამაგისტრო ნაშრომი',
      'empirical evidence:ემპირიული მტკიცებულება|research hypothesis:კვლევითი ჰიპოთეზა|corroborate findings:შედეგების დადასტურება/გამყარება|theoretical framework:თეორიული ჩარჩო|comprehensive literature review:ლიტერატურის ყოვლისმომცველი მიმოხილვა|quantitative methodology:რაოდენობრივი მეთოდოლოგია|' +
      'qualitative insights:თვისებრივი მიგნებები|statistically significant:სტატისტიკურად მნიშვნელოვანი|sample size:შერჩევის მოცულობა (კვლევაში)|causal relationship:მიზეზ-შედეგობრივი კავშირი|positive correlation:დადებითი კორელაცია|inherent limitation:თანმდევი/შინაგანი შეზღუდვა|' +
      'peer-reviewed journal:რეცენზირებადი სამეცნიერო ჟურნალი|scrutinize the data:მონაცემების დეტალურად შესწავლა|draw a conclusion:დასკვნის გამოტანა|substantiate a claim:მოსაზრების ფაქტებით დასაბუთება|preliminary results:წინასწარი შედეგები|academic rigor:აკადემიური სიზუსტე და სიმკაცრე',
      [['The empirical evidence corroborated our initial research hypothesis', 'ემპირიულმა მტკიცებულებებმა დაადასტურა ჩვენი საწყისი კვლევითი ჰიპოთეზა.', 'corroborated'],
       ['Every analytical claim must be substantiated by reliable data', 'ყველა ანალიტიკური მოსაზრება უნდა იყოს დასაბუთებული სანდო მონაცემებით.', 'substantiated'],
       ['The study revealed a statistically significant correlation', 'კვლევამ გამოავლინა სტატისტიკურად მნიშვნელოვანი კორელაცია.', 'significant'],
       ['Researchers must acknowledge the inherent limitations of the survey', 'მკვლევრებმა უნდა გაითვალისწინონ გამოკითხვის თანმდევი შეზღუდვები.', 'limitations']]],

    ['C1', 'ჰიბრიდული სამუშაო მოდელები და თანამედროვე კოლაბორაცია',
      'hybrid work paradigm:ჰიბრიდული მუშაობის პარადიგმა|outcome-based performance:შედეგზე დაფუძნებული ეფექტიანობა|employee autonomy:თანამშრომლის დამოუკიდებლობა|asynchronous communication:ასინქრონული კომუნიკაცია|spontaneous knowledge sharing:ცოდნის სპონტანური გაზიარება|organizational cohesion:ორგანიზაციული ერთიანობა|' +
      'work-life integration:სამუშაოსა და პირადი ცხოვრების ჰარმონია|talent retention:კადრების შენარჩუნება|remote productivity:დისტანციური პროდუქტიულობა|digital workspace:ციფრული სამუშაო სივრცე|purposeful collaboration:მიზანმიმართული თანამშრომლობა|coordination overhead:კოორდინაციის დანახარჯი|' +
      'micromanagement:მიკრომენეჯმენტი (წვრილმანი კონტროლი)|mutual accountability:ორმხრივი ანგარიშვალდებულება|flexible arrangement:მოქნილი სამუშაო შეთანხმება|foster innovation:ინოვაციის წახალისება|erode team spirit:გუნდური სულისკვეთების შესუსტება|adaptable workforce:ადაპტირებადი სამუშაო ძალა',
      [['Modern leaders measure outcome-based performance rather than hours', 'თანამედროვე ლიდერები ზომავენ შედეგზე დაფუძნებულ ეფექტიანობას და არა საათებს.', 'outcome-based'],
       ['Granting employee autonomy reduces the need for micromanagement', 'თანამშრომლისთვის დამოუკიდებლობის მიცემა ამცირებს მიკრომენეჯმენტის საჭიროებას.', 'autonomy'],
       ['Intentional in-person days preserve organizational cohesion', 'გააზრებული საოფისე დღეები ინარჩუნებს ორგანიზაციულ ერთიანობას.', 'cohesion'],
       ['Flexible arrangements significantly improve long-term talent retention', 'მოქნილი პირობები მნიშვნელოვნად აუმჯობესებს კადრების გრძელვადიან შენარჩუნებას.', 'retention']]],

    ['C1', 'ორგანიზაციული კულტურა, ლიდერობა და ცვლილებების მართვა',
      'organizational culture:ორგანიზაციული კულტურა|psychological safety:ფსიქოლოგიური უსაფრთხოება|change management:ცვლილებების მართვა|corporate governance:კორპორაციული მართვა|shared core values:საერთო ძირითადი ღირებულებები|transparent leadership:გამჭვირვალე ლიდერობა|' +
      'overcome resistance:წინააღმდეგობის დაძლევა|institutional memory:ინსტიტუციური მეხსიერება|employee engagement:თანამშრომელთა ჩართულობა|lead by example:პირადი მაგალითით წინამძღოლობა|constructive dissent:კონსტრუქციული განსხვავებული აზრი|ethical standards:ეთიკური სტანდარტები|' +
      'meritocratic environment:მერიტოკრატიული (დამსახურებაზე დაფუძნებული) გარემო|align incentives:სტიმულების/ინტერესების თანხვედრა|strategic vision:სტრატეგიული ხედვა|cultivate trust:ნდობის ჩამოყალიბება|empower teams:გუნდების გაძლიერება|sustainable transformation:მდგრადი ტრანსფორმაცია',
      [['Psychological safety allows employees to voice constructive dissent', 'ფსიქოლოგიური უსაფრთხოება თანამშრომლებს საშუალებას აძლევს გამოთქვან კონსტრუქციული აზრი.', 'safety'],
       ['Effective change management helps overcome resistance to new tools', 'ცვლილებების ეფექტური მართვა ეხმარება სიახლეებისადმი წინააღმდეგობის დაძლევაში.', 'resistance'],
       ['Strong corporate governance relies on transparent leadership', 'ძლიერი კორპორაციული მართვა ეფუძნება გამჭვირვალე ლიდერობას.', 'governance'],
       ['A meritocratic environment rewards diligence and competence', 'მერიტოკრატიული გარემო აჯილდოებს შრომისმოყვარეობასა და კომპეტენციას.', 'meritocratic']]],

    ['C1', 'გლობალური გუნდები და კროს-კულტურული კომუნიკაცია',
      'cross-cultural communication:კულტურათაშორისი კომუნიკაცია|geographically distributed:გეოგრაფიულად განაწილებული|cultural intelligence:კულტურული ინტელექტი|bridge the gap:უფსკრულის/განსხვავების აღმოფხვრა|implicit assumption:ნაგულისხმევი/ფარული დაშვება|explicit guidelines:მკაფიოდ გაწერილი წესები|' +
      'time-zone overlap:დროის სარტყლების გადაკვეთა|diverse perspectives:მრავალფეროვანი ხედვები|inclusive environment:ინკლუზიური გარემო|language barrier:ენობრივი ბარიერი|diplomatic sensitivity:დიპლომატიური დელიკატურობა|foster synergy:სინერგიის ხელშეწყობა|' +
      'unconscious bias:არაცნობიერი მიკერძოება|global alignment:გლობალური შეთანხმებულობა|knowledge transfer:ცოდნის გადაცემა|collaborative platform:ერთობლივი სამუშაო პლატფორმა|seamless handoff:საქმის უხარვეზო გადაბარება|mutual respect:ურთიერთპატივისცემა',
      [['Explicit guidelines prevent misunderstandings in distributed teams', 'მკაფიოდ გაწერილი წესები თავიდან გვაცილებს გაუგებრობებს განაწილებულ გუნდებში.', 'explicit'],
       ['Diverse perspectives enrich strategic problem-solving', 'მრავალფეროვანი ხედვები ამდიდრებს სტრატეგიული პრობლემების გადაჭრას.', 'perspectives'],
       ['Standardized documentation ensures a seamless handoff across time zones', 'სტანდარტიზებული დოკუმენტაცია უზრუნველყოფს საქმის უხარვეზო გადაბარებას დროის სარტყლებს შორის.', 'handoff'],
       ['Cultural intelligence helps leaders bridge the gap between offices', 'კულტურული ინტელექტი ეხმარება ლიდერებს ოფისებს შორის განსხვავებების აღმოფხვრაში.', 'bridge']]],

    ['C1', 'მაკროეკონომიკა, მონეტარული პოლიტიკა და ბაზრები',
      'macroeconomic stability:მაკროეკონომიკური სტაბილურობა|monetary tightening:მონეტარული პოლიტიკის გამკაცრება|curb inflation:ინფლაციის შეკავება/მოთოკვა|benchmark interest rate:საბაზისო საპროცენტო განაკვეთი|purchasing power erosion:მსყიდველობითი უნარის შემცირება|fiscal prudence:ფისკალური წინდახედულობა|' +
      'economic headwinds:ეკონომიკური სირთულეები/წინააღმდეგობები|market volatility:ბაზრის მერყეობა|foreign direct investment:პირდაპირი უცხოური ინვესტიცია (FDI)|sovereign credit rating:ქვეყნის სუვერენული საკრედიტო რეიტინგი|currency depreciation:ვალუტის გაუფასურება|capital inflows:კაპიტალის შემოდინება|' +
      'trade deficit:სავაჭრო დეფიციტი|gross domestic product (GDP):მთლიანი შიდა პროდუქტი (მშპ)|systemic liquidity:სისტემური ლიკვიდურობა|inflationary pressure:ინფლაციური წნეხი|economic recovery:ეკონომიკური აღდგენა|sustainable trajectory:მდგრადი განვითარების ტრაექტორია',
      [['Central banks use monetary tightening to curb inflationary pressures', 'ცენტრალური ბანკები იყენებენ მონეტარულ გამკაცრებას ინფლაციური წნეხის შესაკავებლად.', 'tightening'],
       ['Despite global economic headwinds the banking sector remained resilient', 'გლობალური ეკონომიკური სირთულეების მიუხედავად, საბანკო სექტორი მედეგი დარჩა.', 'headwinds'],
       ['Fiscal prudence strengthens a country sovereign credit rating', 'ფისკალური წინდახედულობა აძლიერებს ქვეყნის სუვერენულ საკრედიტო რეიტინგს.', 'prudence'],
       ['Foreign direct investment supports long-term GDP growth', 'პირდაპირი უცხოური ინვესტიციები ხელს უწყობს მშპ-ის გრძელვადიან ზრდას.', 'investment']]],

    ['C1', 'კორპორაციული სტრატეგია, კაპიტალი და კონკურენცია',
      'capital allocation:კაპიტალის განაწილება|economies of scale:მასშტაბის ეფექტი|competitive moat:მდგრადი კონკურენტული დაცვა/უპირატესობა|value proposition:ფასეულობის შეთავაზება|market penetration:ბაზარზე შეღწევა/დამკვიდრება|strategic acquisition:სტრატეგიული შესყიდვა|' +
      'operational leverage:საოპერაციო ბერკეტი|diversify revenue streams:შემოსავლის წყაროების დივერსიფიკაცია|core competency:ძირითადი კომპეტენცია|barriers to entry:ბაზარზე შესვლის ბარიერები|pricing power:ფასის კარნახის უნარი|long-term viability:გრძელვადიანი სიცოცხლისუნარიანობა|' +
      'vertical integration:ვერტიკალური ინტეგრაცია|cost optimization:ხარჯების ოპტიმიზაცია|shareholder value:აქციონერთა ღირებულება|strategic pivot:სტრატეგიული შემობრუნება|industry benchmark:ინდუსტრიის ეტალონი|capture market share:ბაზრის წილის მოპოვება',
      [['Economies of scale allow large manufacturers to lower unit costs', 'მასშტაბის ეფექტი მსხვილ მწარმოებლებს საშუალებას აძლევს შეამცირონ ერთეულის თვითღირებულება.', 'scale'],
       ['A strong brand creates pricing power and high barriers to entry', 'ძლიერი ბრენდი ქმნის ფასის კარნახის უნარს და ბაზარზე შესვლის მაღალ ბარიერებს.', 'barriers'],
       ['The company diversified its revenue streams to ensure long-term viability', 'კომპანიამ მოახდინა შემოსავლის წყაროების დივერსიფიკაცია გრძელვადიანი მდგრადობისთვის.', 'viability'],
       ['Disciplined capital allocation maximizes long-term shareholder value', 'კაპიტალის დისციპლინირებული განაწილება ზრდის გრძელვადიან ღირებულებას.', 'allocation']]],

    ['C1', 'კრიტიკული აზროვნება, ლოგიკა და ობიექტური შეფასება',
      'critical thinking:კრიტიკული აზროვნება|cognitive bias:კოგნიტური მიკერძოება|confirmation bias:საკუთარი აზრის დამადასტურებელი ფაქტების ძიება|unfounded assumption:უსაფუძვლო დაშვება|logical fallacy:ლოგიკური შეცდომა/ცდომილება|objective scrutiny:ობიექტური დაკვირვება/შემოწმება|' +
      'plausible explanation:დამაჯერებელი/სარწმუნო ახსნა|underlying cause:სიღრმისეული მიზეზი|distinguish between:ერთმანეთისგან გარჩევა/გამიჯვნა|jump to conclusions:ნაადრევი დასკვნის გამოტანა|weigh the evidence:მტკიცებულებების აწონ-დაწონა|devil advocate:საწინააღმდეგო პოზიციის გამომცდელი|' +
      'counter-argument:კონტრარგუმენტი|nuanced evaluation:ნიუანსირებული შეფასება|rigorous verification:მკაცრი გადამოწმება|first-principles thinking:საწყისი პრინციპებიდან აზროვნება|empirical validation:ფაქტობრივი დადასტურება|impartial judgment:მიუკერძოებელი განსჯა',
      [['Analysts must avoid confirmation bias when reviewing credit cases', 'ანალიტიკოსებმა თავიდან უნდა აიცილონ მიკერძოება ქეისების განხილვისას.', 'bias'],
       ['Never jump to conclusions without rigorous verification of the facts', 'არასდროს გამოიტანოთ ნაადრევი დასკვნა ფაქტების მკაცრი გადამოწმების გარეშე.', 'conclusions'],
       ['It is crucial to distinguish between symptoms and underlying causes', 'უმნიშვნელოვანესია სიმპტომებისა და სიღრმისეული მიზეზების ერთმანეთისგან გამიჯვნა.', 'underlying'],
       ['Playing devil advocate helps the committee spot hidden risks', 'საწინააღმდეგო პოზიციიდან კითხვების დასმა კომიტეტს ფარული რისკების პოვნაში ეხმარება.', 'advocate']]],

    ['C1', 'აკადემიური კავშირები, ინვერსია და სტილისტიკა',
      'not only ... but also:არა მხოლოდ ... არამედ|seldom do we see:იშვიათად ვხედავთ|under no circumstances:არავითარ შემთხვევაში|no sooner ... than:როგორც კი ... მაშინვე|little did they realize:ისინი ვერც კი ხვდებოდნენ|only by consistent effort:მხოლოდ თანმიმდევრული ძალისხმევით|' +
      'notwithstanding the challenges:გამოწვევების მიუხედავად|albeit with caution:თუმცა კი სიფრთხილით|whereas on the contrary:მაშინ როცა პირიქით|consequently:შესაბამისად / ამის შედეგად|hence:აქედან გამომდინარე|nevertheless:მიუხედავად ამისა|' +
      'in light of:რაიმეს გათვალისწინებით / ფონზე|with regard to:რაც შეეხება|prior to:რაიმემდე (უფრო ადრე)|subsequent to:რაიმეს შემდგომ|in accordance with:რაიმესთან შესაბამისობაში|on the grounds that:იმ საფუძვლით რომ',
      [['Under no circumstances should confidential client data be shared', 'არავითარ შემთხვევაში არ შეიძლება კლიენტის კონფიდენციალური მონაცემების გაზიარება.', 'circumstances'],
       ['In light of recent market shifts we revised our forecast', 'ბაზრის ბოლოდროინდელი ცვლილებების ფონზე ჩვენ გადავხედეთ პროგნოზს.', 'light'],
       ['All contracts were drafted in accordance with banking regulations', 'ყველა კონტრაქტი შედგა საბანკო რეგულაციებთან შესაბამისობაში.', 'accordance'],
       ['Prior to disbursement the legal team verified all collateral', 'თანხის გაცემამდე იურიდიულმა გუნდმა გადაამოწმა ყველა უზრუნველყოფა.', 'Prior']]],

    ['C1', 'საბანკო პროცესების მართვა და ციფრული ტრანსფორმაცია',
      'banking process management:საბანკო პროცესების მართვა|workflow optimization:სამუშაო ნაკადის ოპტიმიზაცია|eliminate redundancy:დუბლირებული ნაბიჯების გაუქმება|digital onboarding:ციფრული რეგისტრაცია/ჩართვა|automated credit scoring:ავტომატური საკრედიტო სკორინგი|turnaround time:განაცხადის დამუშავების დრო|' +
      'scalable architecture:მასშტაბირებადი არქიტექტურა|system interoperability:სისტემების ურთიერთთავსებადობა|data integrity:მონაცემთა მთლიანობა და სიზუსტე|audit trail:აუდიტორული კვალი (ისტორია)|operational resilience:საოპერაციო მედეგობა|frictionless user journey:მომხმარებლის უხარვეზო გზა|' +
      'legacy system:მოძველებული სისტემა|API integration:API ინტეგრაცია|real-time settlement:მყისიერი ანგარიშსწორება|cybersecurity protocol:კიბერუსაფრთხოების პროტოკოლი|continuous monitoring:უწყვეტი მონიტორინგი|service level agreement (SLA):მომსახურების დონის შეთანხმება',
      [['Banking process management focuses on reducing turnaround time', 'საბანკო პროცესების მართვა ფოკუსირებულია განაცხადის დამუშავების დროის შემცირებაზე.', 'turnaround'],
       ['Redesigning the workflow helped eliminate redundancy across departments', 'პროცესის განახლებამ გააუქმა დუბლირებული ნაბიჯები დეპარტამენტებს შორის.', 'redundancy'],
       ['Every transaction leaves a transparent audit trail in the database', 'ყველა ტრანზაქცია ტოვებს გამჭვირვალე აუდიტორულ კვალს მონაცემთა ბაზაში.', 'trail'],
       ['Modern API integrations replace slow legacy systems', 'თანამედროვე API ინტეგრაციები ანაცვლებს ნელ, მოძველებულ სისტემებს.', 'legacy']]],

    ['C1', 'აღმასრულებელი პრეზენტაცია და საბჭოს წინაშე გამოსვლა',
      'executive summary:აღმასრულებელი შეჯამება|compelling argument:დამაჯერებელი არგუმენტი|concise overview:ლაკონიური მიმოხილვა|key takeaway:მთავარი დასკვნა|actionable recommendation:პრაქტიკული რეკომენდაცია|anticipate objections:შეკითხვების/საწინააღმდეგო აზრის წინასწარ გათვლა|' +
      'articulate clearly:მკაფიოდ ჩამოყალიბება|underscore the importance:მნიშვნელობის ხაზგასმა|address concerns:წუხილებზე/კითხვებზე პასუხის გაცემა|data-driven insight:მონაცემებზე დაფუძნებული მიგნება|persuasive delivery:დამაჯერებელი გადმოცემა|board of directors:დირექტორთა საბჭო|' +
      'unanimous approval:ერთსულოვანი დასტური|strategic roadmap:სტრატეგიული სამოქმედო გეგმა|quantifiable impact:გაზომვადი ეფექტი/შედეგი|allocated timeframe:გამოყოფილი დროის ჩარჩო|concluding remarks:დასკვნითი სიტყვა|field questions:დარბაზიდან კითხვებზე პასუხის გაცემა',
      [['Begin your report with a concise executive summary', 'დაიწყეთ თქვენი ანგარიში ლაკონიური აღმასრულებელი შეჯამებით.', 'concise'],
       ['She anticipated objections and prepared data-driven answers', 'მან წინასწარ გათვალა კითხვები და მოამზადა მონაცემებზე დაფუძნებული პასუხები.', 'anticipated'],
       ['The proposal received unanimous approval from the committee', 'შეთავაზებამ კომიტეტის ერთსულოვანი დასტური მიიღო.', 'unanimous'],
       ['After the presentation he fielded questions from the board', 'პრეზენტაციის შემდეგ მან უპასუხა საბჭოს კითხვებს.', 'fielded']]],

    // ==================== C2 (Units 51 - 60 | 180 Words & Phrases) ====================
    ['C2', 'დიპლომატიური ნიუანსები და უმაღლესი მოლაპარაკების ხელოვნება',
      'diplomatic finesse:დიპლომატიური ოსტატობა და სიფაქიზე|nuanced perspective:ნიუანსირებული ხედვა|read between the lines:სტრიქონებს შორის ფარული აზრის ამოკითხვა|tactful phrasing:ტაქტიანი ფორმულირება|conciliatory gesture:შემრიგებლური ჟესტი|defuse tension:დაძაბულობის განმუხტვა|' +
      'pragmatic compromise:პრაგმატული კომპრომისი|subtle implication:ნატიფი ქვეტექსტი|unspoken consensus:უხმო/ნაგულისხმევი თანხმობა|maintain composure:სიმშვიდისა და წონასწორობის შენარჩუნება|circumvent an impasse:ჩიხისთვის გვერდის ავლა|measured response:მოზომილი პასუხი|' +
      'good faith negotiation:კეთილსინდისიერი მოლაპარაკება|reciprocal concession:ორმხრივი დათმობა|preserve rapport:კეთილგანწყობის შენარჩუნება|delicate balance:ფაქიზი ბალანსი|astute observation:გამჭრიახი დაკვირვება|unequivocal commitment:უპირობო/ცალსახა ერთგულება',
      [['Seasoned negotiators maintain composure and read between the lines', 'გამოცდილი მომლაპარაკებლები ინარჩუნებენ სიმშვიდეს და სტრიქონებს შორის აზრს კითხულობენ.', 'composure'],
       ['A tactful phrasing helped defuse tension during the hearing', 'ტაქტიანმა ფორმულირებამ ხელი შეუწყო დაძაბულობის განმუხტვას განხილვის დროს.', 'defuse'],
       ['Reciprocal concessions allowed the parties to circumvent an impasse', 'ორმხრივმა დათმობებმა მხარეებს საშუალება მისცა გვერდი აევლოთ ჩიხისთვის.', 'impasse'],
       ['His astute observation revealed the subtle implication of the clause', 'მისმა გამჭრიახმა დაკვირვებამ გამოააშკარავა მუხლის ფარული ქვეტექსტი.', 'astute']]],

    ['C2', 'C2 დონის იდიომები და მეტაფორული აზროვნება',
      'a double-edged sword:ორლესული მახვილი|weather the storm:კრიზისის/ქარიშხლის გადატანა|raise the bar:სტანდარტის/თამასის აწევა|cut to the chase:პირდაპირ მთავარ სათქმელზე გადასვლა|by the same token:ამავე მიზეზით / იმავდროულად|par for the course:ჩვეულებრივი/მოსალოდნელი მოვლენა|' +
      'acid test:ნამდვილი გამოცდა (მდგრადობის)|bones of contention:დავის მთავარი საგანი|touch and go:გაურკვეველი/სარისკო მდგომარეობა|turn the tide:მოვლენათა მსვლელობის შემოტრიალება|walk a tightrope:ბეწვის ხიდზე სიარული|leave no stone unturned:ყველა შესაძლო გზის მოსინჯვა|' +
      'in a nutshell:მოკლედ რომ ვთქვათ|shift the paradigm:პარადიგმის შეცვლა|level playing field:თანაბარი კონკურენტული პირობები|stem the tide:უარყოფითი ტენდენციის შეჩერება|at face value:ზედაპირულად (გადამოწმების გარეშე)|strike a chord:ემოციური გამოძახილის პოვნა',
      [['Never accept optimistic financial projections at face value', 'არასდროს მიიღოთ ოპტიმისტური ფინანსური პროგნოზები ბრმად, გადამოწმების გარეშე.', 'value'],
       ['Strong capital reserves enabled the institution to weather the storm', 'კაპიტალის ძლიერმა რეზერვებმა ინსტიტუტს საშუალება მისცა კრიზისი გადაეტანა.', 'weather'],
       ['Auditors left no stone unturned during the due diligence process', 'აუდიტორებმა ყველა დეტალი ზედმიწევნით შეამოწმეს.', 'unturned'],
       ['Central banks intervened to stem the tide of currency depreciation', 'ცენტრალური ბანკები ჩაერივნენ ვალუტის გაუფასურების შესაჩერებლად.', 'stem']]],

    ['C2', 'ხელოვნების ფილოსოფია, ესთეტიკა, მუსიკა და პოეზია',
      'aesthetic discernment:ესთეტიკური გარჩევის უნარი|evocative imagery:შთამბეჭდავი მხატვრული სახეები|poetic cadence:პოეტური რიტმი და ინტონაცია|emotional resonance:ემოციური გამოძახილი და სიღრმე|cultural memory:კულტურული მეხსიერება|ephemeral trend:წარმავალი ტენდენცია|' +
      'traditional luthiery:ხალხური საკრავების ოსტატობა|melancholic undertone:მელანქოლიური ქვეტონი|juxtaposition of styles:სტილების კონტრასტული შეპირისპირება|artistic authenticity:შემოქმედებითი ავთენტურობა|transcend boundaries:საზღვრების გადალახვა|timeless masterpiece:მარადიული შედევრი|' +
      'sonic landscape:ბგერითი პეიზაჟი/სივრცე|lyrical introspection:ლირიკული თვითჩაღრმავება|visceral impact:შინაგანი/ინსტინქტური ემოციური ზემოქმედება|creative curation:შემოქმედებითი კურაცია|harmonious synthesis:ჰარმონიული სინთეზი|indelible impression:წარუშლელი შთაბეჭდილება',
      [['Authentic poetry leaves an indelible impression on the listener', 'ავთენტური პოეზია მსმენელზე წარუშლელ შთაბეჭდილებას ტოვებს.', 'indelible'],
       ['The juxtaposition of folk instruments and modern beats is evocative', 'ხალხური საკრავებისა და თანამედროვე ბიტების შეპირისპირება შთამბეჭდავია.', 'juxtaposition'],
       ['Great art transcends ephemeral trends and preserves cultural memory', 'დიდი ხელოვნება სცდება წარმავალ ტენდენციებს და ინახავს კულტურულ მეხსიერებას.', 'ephemeral'],
       ['His rap verses combine rhythmic cadence with lyrical introspection', 'მისი რეპ-სტროფები აერთიანებს რიტმულ ინტონაციასა და ლირიკულ სიღრმეს.', 'cadence']]],

    ['C2', 'უმაღლესი იურიდიული სიზუსტე და მარეგულირებელი გარემო',
      'unambiguous wording:სრულიად ცალსახა ფორმულირება|fiduciary duty:ფიდუციარული (ნდობითი) ვალდებულება|stringent oversight:უაღრესად მკაცრი ზედამხედველობა|comprehensive due diligence:საფუძვლიანი წინასწარი შემოწმება|indemnify against loss:ზარალის ანაზღაურების გარანტირება|free of encumbrance:ყოველგვარი ვალდებულებისგან/ყადაღისგან თავისუფალი|' +
      'stipulate in the contract:ხელშეკრულებაში პირობად განსაზღვრა|statutory compliance:საკანონმდებლო შესაბამისობა|null and void:ბათილი (იურიდიული ძალის არმქონე)|exclusive jurisdiction:ექსკლუზიური იურისდიქცია|preclude disputes:დავების წინასწარ გამორიცხვა|binding precedent:სავალდებულო პრეცედენტი|' +
      'contractual addendum:ხელშეკრულების დანართი/ცვლილება|joint and several liability:სოლიდარული პასუხისმგებლობა|remedy a default:დარღვევის აღმოფხვრა/გამოსწორება|prerogative of the board:საბჭოს განსაკუთრებული უფლებამოსილება|irrevocable guarantee:უხმობი საბანკო გარანტია|unfettered access:შეუზღუდავი წვდომა',
      [['The property title must be completely free of encumbrance', 'ქონების საკუთრების უფლება უნდა იყოს სრულიად თავისუფალი ვალდებულებებისგან.', 'encumbrance'],
       ['Unambiguous wording in the addendum precludes future legal disputes', 'ცალსახა ფორმულირება დანართში გამორიცხავს მომავალ სამართლებრივ დავებს.', 'precludes'],
       ['Guarantors accepted joint and several liability for the commercial loan', 'თავდებებმა აიღეს სოლიდარული პასუხისმგებლობა კომერციულ სესხზე.', 'liability'],
       ['Without a notarized signature the agreement is null and void', 'ნოტარიული ხელმოწერის გარეშე შეთანხმება ბათილია.', 'void']]],

    ['C2', 'ფინანსური არქიტექტურა და სისტემური მდგრადობა',
      'systemic stability:სისტემური სტაბილურობა|capital adequacy ratio:კაპიტალის ადეკვატურობის კოეფიციენტი|prudent underwriting:წინდახედული საკრედიტო შეფასება|countercyclical buffer:კონტრციკლური ბუფერი|macroprudential framework:მაკროპრუდენციული ჩარჩო|solvency threshold:გადახდისუნარიანობის ზღვარი|' +
      'asset quality review:აქტივების ხარისხის მიმოხილვა|asymmetric information:ასიმეტრიული ინფორმაცია|moral hazard:მორალური რისკი|adverse selection:არასასურველი შერჩევა|liquidity crunch:ლიკვიდურობის მწვავე კრიზისი|contagion effect:გადადების/გავრცელების ეფექტი|' +
      'creditworthy counterparty:სანდო კონტრაგენტი|amortization schedule:ამორტიზაციის/დაფარვის გრაფიკი|yield curve:შემოსავლიანობის მრუდი|de-risk the portfolio:პორტფელის რისკის შემცირება|fiduciary stewardship:პასუხისმგებლობიანი ფინანსური მართვა|insolvency proceedings:გადახდისუუნარობის საქმისწარმოება',
      [['Prudent underwriting mitigates adverse selection in commercial lending', 'წინდახედული შეფასება ამცირებს არასასურველ შერჩევას კომერციულ დაკრედიტებაში.', 'underwriting'],
       ['Countercyclical buffers protect banks during a liquidity crunch', 'კონტრციკლური ბუფერები იცავს ბანკებს ლიკვიდურობის მწვავე კრიზისის დროს.', 'buffers'],
       ['Collateral requirements help overcome asymmetric information', 'გირაოს მოთხოვნა გვეხმარება ასიმეტრიული ინფორმაციის პრობლემის დაძლევაში.', 'asymmetric'],
       ['Maintaining a high capital adequacy ratio ensures systemic stability', 'კაპიტალის ადეკვატურობის მაღალი კოეფიციენტი უზრუნველყოფს სისტემურ სტაბილურობას.', 'adequacy']]],

    ['C2', 'ფორმალური Subjunctive კილო და უმაღლესი სინტაქსი',
      'it is imperative that:სასიცოცხლოდ აუცილებელია რომ|it is paramount that:უზენაესად მნიშვნელოვანია რომ|it is vital that:სასიცოცხლოა რომ|insist that he be:დაჟინებით მოთხოვნა რომ იყოს|recommend that it be:რეკომენდაციის გაცემა რომ იყოს|stipulate that they submit:პირობად ჩადება რომ წარადგინონ|' +
      'lest it jeopardize:რათა საფრთხის ქვეშ არ დააყენოს|be that as it may:როგორც არ უნდა იყოს|suffice it to say:საკმარისია ითქვას|had it not been for:რომ არ ყოფილიყო|were the market to shift:ბაზარი რომ შეცვლილიყო|should you require:თუ დაგჭირდებათ (ფორმალური)|' +
      'far be it from me:შორს ვარ იმ აზრისგან|so be it:დაე ასე იყოს|come what may:რაც არ უნდა მოხდეს|as it were:ასე ვთქვათ|insofar as:რამდენადაც / იმდენად რამდენადაც|notwithstanding the fact that:მიუხედავად იმ ფაქტისა რომ',
      [['It is imperative that every financial covenant be monitored quarterly', 'სასიცოცხლოდ აუცილებელია, რომ ყველა ფინანსური კოვენანტი კვარტალურად გაკონტროლდეს.', 'imperative'],
       ['Had it not been for rigorous risk controls the loss would have been severe', 'რისკის მკაცრი კონტროლი რომ არ ყოფილიყო, ზარალი მძიმე იქნებოდა.', 'rigorous'],
       ['We encrypted the backup files lest a breach jeopardize client privacy', 'სარეზერვო ფაილები დავშიფრეთ, რათა შეღწევამ საფრთხე არ შეუქმნას კლიენტის მონაცემებს.', 'lest'],
       ['Should you require additional documentation please notify our office', 'თუ დამატებითი დოკუმენტაცია დაგჭირდებათ, გთხოვთ აცნობოთ ჩვენს ოფისს.', 'require']]],

    ['C2', 'რიტორიკული აქცენტირება, Cleft სტრუქტურები და სიზუსტე',
      'what distinguishes ... is:ის რაც გამოარჩევს ... არის|it is precisely because:სწორედ იმიტომ რომ|inextricably intertwined:განუყოფლად გადაჯაჭვული|unequivocal endorsement:ცალსახა მხარდაჭერა|meticulous analysis:ზედმიწევნითი ანალიზი|incisive critique:გამჭრიახი და ზუსტი კრიტიკა|' +
      'cogent argument:ლოგიკურად მწყობრი და დამაჯერებელი არგუმენტი|lucid exposition:ნათელი და გასაგები გადმოცემა|compelling evidence:უტყუარი/დამაჯერებელი მტკიცებულება|paramount consideration:უზენაესი გასათვალისწინებელი ფაქტორი|unprecedented scale:უპრეცედენტო მასშტაბი|ubiquitous presence:ყველგანმყოფი არსებობა|' +
      'diametrically opposed:დიამეტრულად საპირისპირო|mutually exclusive:ურთიერთგამომრიცხავი|conducive to growth:ზრდისთვის ხელშემწყობი|commensurate with risk:რისკის პროპორციული/შესაბამისი|tantamount to:ტოლფასი (რაიმეს ტოლფასია)|quintessential example:ყველაზე დამახასიათებელი/სრულყოფილი მაგალითი',
      [['Expected return must always be commensurate with the underlying risk', 'მოსალოდნელი უკუგება ყოველთვის უნდა იყოს რისკის პროპორციული.', 'commensurate'],
       ['Speed and accuracy are not mutually exclusive when workflows are automated', 'სისწრაფე და სიზუსტე არ არის ურთიერთგამომრიცხავი, როცა პროცესი ავტომატიზებულია.', 'exclusive'],
       ['Ignoring early warning signs is tantamount to negligence', 'ადრეული გაფრთხილების ნიშნების უგულებელყოფა დაუდევრობის ტოლფასია.', 'tantamount'],
       ['What distinguishes a master analyst is lucid exposition of complex data', 'ის, რაც ოსტატ ანალიტიკოსს გამოარჩევს, არის რთული მონაცემების ნათელი გადმოცემა.', 'lucid']]],

    ['C2', 'ეთიკა, პრინციპულობა, ინტელექტუალური კულტურა და ლიდერობა',
      'unwavering integrity:ურყევი კეთილსინდისიერება|intellectual humility:ინტელექტუალური თავმდაბლობა|ethical imperative:ეთიკური ვალდებულება/იმპერატივი|conscientious rigor:კეთილსინდისიერი სიზუსტე|professional candor:პროფესიული გულწრფელობა და პირდაპირობა|long-term stewardship:გრძელვადიანი პასუხისმგებლობიანი მართვა|' +
      'mental fortitude:სულიერი და გონებრივი სიმტკიცე|strategic foresight:სტრატეგიული წინდახედულობა|exemplary conduct:სანიმუშო ქცევა|impartial objectivity:მიუკერძოებელი ობიექტურობა|foster accountability:ანგარიშვალდებულების დამკვიდრება|uphold standards:სტანდარტების დაცვა/შენარჩუნება|' +
      'temper ambition with prudence:ამბიციის წინდახედულობით დაბალანსება|earned credibility:დამსახურებული სანდოობა/ავტორიტეტი|uncompromising quality:უკომპრომისო ხარისხი|resilient mindset:მედეგი აზროვნება|principled stance:პრინციპული პოზიცია|enduring legacy:გრძელვადიანი მემკვიდრეობა',
      [['Unwavering integrity is the cornerstone of banking credibility', 'ურყევი კეთილსინდისიერება საბანკო სანდოობის ქვაკუთხედია.', 'integrity'],
       ['Great leaders balance empathy with professional candor', 'დიდი ლიდერები აბალანსებენ თანაგრძნობასა და პროფესიულ პირდაპირობას.', 'candor'],
       ['Championship rounds in boxing test an athlete mental fortitude', 'საჩემპიონო რაუნდები კრივში ცდის სპორტსმენის სულიერ სიმტკიცეს.', 'fortitude'],
       ['Wise investors temper ambition with prudence during market booms', 'გონიერი ინვესტორები ბაზრის ბუმის დროს ამბიციას წინდახედულობით აბალანსებენ.', 'temper']]],

    ['C2', 'ანალიტიკური სინთეზი და მაღალი აკადემიური ესეისტიკა',
      'synthesize information:ინფორმაციის სინთეზირება/შეჯერება|false dichotomy:მცდარი დიქოტომია (ორ უკიდურესობად დაყოფა)|exacerbate a problem:პრობლემის გამწვავება|alleviate pressure:წნეხის შემსუბუქება|supplant human judgment:ადამიანური განსჯის ჩანაცვლება|proliferate rapidly:სწრაფად გამრავლება/გავრცელება|' +
      'tenuous connection:სუსტი/მყიფე კავშირი|corroborating evidence:დამადასტურებელი მტკიცებულება|paradigm shift:ფუნდამენტური გარდატეხა|catalyst for change:ცვლილებების კატალიზატორი|watershed moment:ისტორიული/გარდამტეხი მიჯნა|universal panacea:უნივერსალური წამალი (პანაცეა)|' +
      'hallmark of excellence:სრულყოფილების სავიზიტო ბარათი|nuanced synthesis:დახვეწილი სინთეზი|stylistic precision:სტილისტური სიზუსტე|intellectual rigor:ინტელექტუალური სიმკაცრე|overarching theme:მთავარი გამჭოლი თემა|compelling conclusion:დამაჯერებელი დასკვნა',
      [['Algorithms should augment rather than supplant human judgment', 'ალგორითმებმა უნდა გააძლიეროს და არა ჩაანაცვლოს ადამიანური განსჯა.', 'supplant'],
       ['Framing office and remote work as enemies creates a false dichotomy', 'ოფისისა და დისტანციური მუშაობის მტრებად წარმოჩენა ქმნის მცდარ დიქოტომიას.', 'dichotomy'],
       ['Attention to detail is the hallmark of excellence in financial analysis', 'დეტალებისადმი ყურადღება ფინანსურ ანალიზში სრულყოფილების სავიზიტო ბარათია.', 'hallmark'],
       ['Technology is a powerful catalyst for change but not a universal panacea', 'ტექნოლოგია ცვლილებების ძლიერი კატალიზატორია, მაგრამ არა უნივერსალური პანაცეა.', 'panacea']]],

    ['C2', 'C2 მწვერვალი — ენობრივი ოსტატობა და უწყვეტი განვითარება',
      'command of the language:ენის სრულყოფილი ფლობა|deliberate practice:მიზანმიმართული ვარჯიში|relentless consistency:უწყვეტი თანმიმდევრულობა|culmination of effort:ძალისხმევის კულმინაცია/შედეგი|financial acumen:ფინანსური ალღო და გამჭრიახობა|eloquent expression:მჭევრმეტყველი გამოხატვა|' +
      'effortless fluency:ძალდაუტანებელი თავისუფალი მეტყველება|idiomatic mastery:იდიომატური ოსტატობა|intellectual curiosity:ინტელექტუალური ცნობისმოყვარეობა|lifelong learning:მუდმივი სწავლა და განვითარება|surpass expectations:მოლოდინების გადაჭარბება|unwavering discipline:ურყევი დისციპლინა|' +
      'holistic understanding:მთლიანობითი/სრული გააზრება|strategic autonomy:სტრატეგიული დამოუკიდებლობა|pinnacle of achievement:მიღწევის მწვერვალი|transformative journey:გარდამქმნელი გზა|boundless potential:უსაზღვრო პოტენციალი|mastery achieved:მიღწეული ოსტატობა',
      [['True command of the language is the culmination of deliberate practice', 'ენის ნამდვილი ფლობა არის მიზანმიმართული ვარჯიშის კულმინაცია.', 'culmination'],
       ['His sharp financial acumen and eloquent expression impressed the board', 'მისმა ფინანსურმა ალღომ და მჭევრმეტყველებამ საბჭო მოხიბლა.', 'acumen'],
       ['Relentless consistency turns daily habits into lifelong mastery', 'უწყვეტი თანმიმდევრულობა ყოველდღიურ ჩვევებს მუდმივ ოსტატობად აქცევს.', 'consistency'],
       ['Congratulations on reaching the pinnacle of achievement on FluentPath', 'გილოცავთ FluentPath-ზე მიღწევის მწვერვალზე ასვლას!', 'pinnacle']]]
  ];

  // კონტექსტური მაგალითის გენერატორი თითოეული სიტყვისთვის
  function buildContextualExample(en, ka, level) {
    const templates = {
      A1: { en: 'We often use the phrase "' + en + '" in everyday conversation.', ka: 'ჩვენ ხშირად ვიყენებთ ფრაზას „' + ka + '“ ყოველდღიურ საუბარში.' },
      A2: { en: 'Knowing how to use "' + en + '" is very helpful when travelling.', ka: '„' + ka + '“-ს ცოდნა ძალიან სასარგებლოა მოგზაურობისას.' },
      B1: { en: 'In practical situations, "' + en + '" helps you communicate clearly.', ka: 'პრაქტიკულ სიტუაციებში „' + ka + '“ გეხმარებათ აზრის მკაფიოდ გადმოცემაში.' },
      B2: { en: 'In professional and banking contexts, "' + en + '" is a key expression.', ka: 'პროფესიულ და საბანკო კონტექსტში „' + ka + '“ საკვანძო ტერმინია.' },
      C1: { en: 'Academic and strategic reports frequently employ "' + en + '".', ka: 'აკადემიური და სტრატეგიული ანგარიშები ხშირად იყენებს ტერმინს „' + ka + '“.' },
      C2: { en: 'Mastering "' + en + '" demonstrates C2-level stylistic precision.', ka: '„' + ka + '“-ს ფლობა აჩვენებს C2 დონის სტილისტურ სიზუსტეს.' }
    };
    return templates[level] || templates.B1;
  }

  const UNITS_DATA = [];
  const ALL_WORDS = [];

  RAW_LEXICON_UNITS.forEach((uRow, uIdx) => {
    const unitNum = uIdx + 1;
    const unitId = 'unit-' + unitNum;
    const packId = 'vpack-' + unitNum;
    const level = uRow[0];
    const title = uRow[1];
    const rawPairsStr = uRow[2];
    const rawSentences = uRow[3] || [];

    const pairTokens = rawPairsStr.split('|').filter(Boolean);
    const unitWords = [];
    const wordIds = [];

    pairTokens.forEach((token, wIdx) => {
      const parts = token.split(':');
      const en = (parts[0] || '').trim();
      const ka = (parts[1] || '').trim();
      const wordId = 'lex-' + unitNum + '-' + (wIdx + 1);

      // შევამოწმოთ, არის თუ არა ეს სიტყვა რომელიმე წინადადებაში გამოყენებული
      let matchedSentence = null;
      for (let s = 0; s < rawSentences.length; s++) {
        if (rawSentences[s][0].toLowerCase().indexOf(en.toLowerCase().split(' ')[0]) !== -1) {
          matchedSentence = rawSentences[s];
          break;
        }
      }

      const fallbackEx = buildContextualExample(en, ka, level);
      const exEn = matchedSentence ? (matchedSentence[0] + '.') : fallbackEx.en;
      const exKa = matchedSentence ? matchedSentence[1] : fallbackEx.ka;
      const setLabel = wIdx < 6 ? 'ნაწილი I' : (wIdx < 12 ? 'ნაწილი II' : 'ნაწილი III');

      const wordObj = {
        id: wordId,
        unitNumber: unitNum,
        unitId: unitId,
        packId: packId,
        packNumber: unitNum,
        packTitle: 'პაკეტი ' + unitNum + ': ' + title,
        level: level,
        setIndex: Math.floor(wIdx / 6), // 0 = Set A (0..5), 1 = Set B (6..11), 2 = Set C (12..17)
        pos: setLabel,
        en: en,
        word: en,
        phonetic: '/' + en + '/',
        ka: ka,
        exEn: exEn,
        exKa: exKa
      };

      unitWords.push(wordObj);
      ALL_WORDS.push(wordObj);
      wordIds.push(wordId);
    });

    const sentencesObjs = rawSentences.map((s) => ({
      en: s[0],
      ka: s[1],
      blank: s[2],
      hint: 'საკვანძო სიტყვა წინადადებიდან'
    }));

    // დავამატოთ დამატებითი წინადადებები Set A, Set B, Set C სიტყვებიდან, რომ თითოეულ იუნიტს ჰქონდეს 10+ წინადადება
    unitWords.forEach((wObj, idx) => {
      if (idx % 3 === 0 && wObj.en.split(' ').length >= 2) {
        const wordsArr = wObj.en.split(' ');
        const lastW = wordsArr[wordsArr.length - 1];
        sentencesObjs.push({
          en: 'Remember how to use ' + wObj.en + ' in context',
          ka: 'დაიმახსოვრეთ როგორ გამოიყენოთ „' + wObj.ka + '“ კონტექსტში.',
          blank: lastW,
          hint: wObj.ka
        });
      }
    });

    UNITS_DATA.push({
      id: unitId,
      packId: packId,
      unitNumber: unitNum,
      packNumber: unitNum,
      level: level,
      title: title,
      desc: '18 უნიკალური სიტყვა და ფრაზა (დაყოფილი I, II და III ნაწილებად) + კონტექსტური წინადადებები.',
      tip: 'ამ იუნიტში შეისწავლით 18 ახალ ერთეულს: საფეხური 1 (სიტყვები 1–6), საფეხური 2 (სიტყვები 7–12) და საფეხური 3 (სიტყვები 13–18).',
      words: unitWords,
      wordIds: wordIds,
      sentences: sentencesObjs
    });
  });

  App.Lexicon = {
    getUnits: function () {
      return UNITS_DATA;
    },
    getAllWords: function () {
      return ALL_WORDS;
    },
    getUnitByNumber: function (num) {
      return UNITS_DATA[num - 1] || UNITS_DATA[0];
    }
  };
})(window);