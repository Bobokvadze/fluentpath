/**
 * LEARN.JS — რეალური პედაგოგიური ძრავა (Duolingo-ს სრული ანალოგი)
 * - ნამდვილი Fisher-Yates რანდომიზაცია წყვილებში, ტესტებსა და წინადადების სიტყვებში
 * - თითოეული საფეხური (Node 1..8) ასწავლის განსხვავებულ მასალას და იყენებს განსხვავებულ სავარჯიშოებს
 * - აერთიანებს იუნიტის ბაზას + ლექსიკონის 360 სიტყვასა და წინადადებას + დიალოგებს + შეცდომების გასწორებას
 * - შეცდომის დაშვებისას კითხვა ბრუნდება გაკვეთილის ბოლოში (Spaced Repetition Queue), სანამ სწორად არ უპასუხებთ!
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  const CROWNS_PER_NODE = 5;

  // 8 სრულიად განსხვავებული დანიშნულების საფეხური თითოეულ იუნიტში
  const NODE_TEMPLATES = [
    { index: 0, icon: '⭐', title: 'საფეხური 1: ლექსიკა (ნაწილი I)', subtitle: 'პირველი ნაკადის სიტყვები და ფრაზები', xpBase: 15 },
    { index: 1, icon: '💬', title: 'საფეხური 2: ლექსიკა (ნაწილი II)', subtitle: 'მეორე ნაკადის სიტყვები და კონსტრუქციები', xpBase: 15 },
    { index: 2, icon: '🔥', title: 'საფეხური 3: კონტექსტი (ნაწილი III)', subtitle: 'ახალი სიტყვები კონტექსტურ წინადადებებში', xpBase: 20 },
    { index: 3, icon: '🎧', title: 'საფეხური 4: აუდიო და კარნახი', subtitle: 'მოსმენა ჩვეულებრივი და 🐢 ნელი სიჩქარით', xpBase: 25 },
    { index: 4, icon: '🧩', title: 'საფეხური 5: წყვილების მარათონი', subtitle: '3 რაუნდი სრულად დარენდომებული წყვილებით', xpBase: 25 },
    { index: 5, icon: '✍️', title: 'საფეხური 6: სინტაქსი და მახე-სიტყვები', subtitle: 'წინადადებების აწყობა + აქტიური წერა', xpBase: 30 },
    { index: 6, icon: '🗣️', title: 'საფეხური 7: დიალოგი და კორექტირება', subtitle: 'სიტუაციური საუბარი და შეცდომის პოვნა', xpBase: 30 },
    { index: 7, icon: '🏆', title: 'საფეხური 8: იუნიტის თასი (გამოცდა)', subtitle: 'შემაჯამებელი ტესტი მომდევნო იუნიტის გასახსნელად', xpBase: 45 }
  ];

  /**
   * ნამდვილი Fisher-Yates რანდომიზაციის ფუნქცია.
   * ყოველ გამოძახებაზე აბრუნებს სრულიად ახალ, შემთხვევითად არეულ მასივს.
   */
  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  /**
   * ქმნის წყვილების (Matching Pairs) სრულად დარენდომებულ ინდექსებს მარცხენა და მარჯვენა სვეტისთვის,
   * ისე რომ სტრიქონები ერთმანეთის პირისპირ არ დაჯდეს და არც სტატიკური reverse იყოს.
   */
  function createRandomizedPairColumns(count) {
    const indices = [];
    for (let i = 0; i < count; i++) indices.push(i);
    const leftOrder = shuffleArray(indices);
    let rightOrder = shuffleArray(indices);

    // თუ შემთხვევით ყველა ერთ ხაზზე დაჯდა, კიდევ ერთხელ ავურიოთ
    let sameRowCount = 0;
    for (let k = 0; k < count; k++) {
      if (leftOrder[k] === rightOrder[k]) sameRowCount++;
    }
    if (sameRowCount === count && count > 1) {
      const first = rightOrder.shift();
      rightOrder.push(first);
    }
    return { leftOrder: leftOrder, rightOrder: rightOrder };
  }

  /**
   * ასუფთავებს ტექსტს პუნქტუაციისგან შედარებისას
   */
  function normalizeText(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/[.,?!;:'"’`-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  const RAW_UNITS = [
    // ==================== A1 (Units 1 - 10) ====================
    ['A1', 'მისალმება და გაცნობა', 'ისწავლეთ მისალმება, სახელის თქმა და ზრდილობიანი ფრაზები.', '„I am“ საუბრისას მოკლდება როგორც „I\'m“.',
      [['Hello', 'გამარჯობა'], ['Nice to meet you', 'სასიამოვნოა თქვენი გაცნობა'], ['My name is', 'ჩემი სახელია'], ['Where are you from?', 'საიდან ხარ?'], ['See you later', 'დროებით / მოგვიანებით გნახავ'], ['Thank you', 'გმადლობთ']],
      [['Hello my name is Alex', 'გამარჯობა, ჩემი სახელია ალექსი.', 'name'], ['I am from Tbilisi Georgia', 'მე თბილისიდან, საქართველოდან ვარ.', 'from'], ['Nice to meet you today', 'სასიამოვნოა თქვენი გაცნობა დღეს.', 'meet']]],

    ['A1', 'ოჯახი, მეგობრები და ადამიანები', 'ოჯახის წევრების, ასაკისა და ახლობლების აღწერა.', 'კუთვნილებითი ნაცვალსახელებია: my (ჩემი), your (შენი), his (მისი - მამრ.), her (მისი - მდედრ.).',
      [['Older brother', 'უფროსი ძმა'], ['Younger sister', 'უმცროსი და'], ['Best friend', 'საუკეთესო მეგობარი'], ['Parents', 'მშობლები'], ['Married', 'დაოჯახებული'], ['Friendly neighbor', 'მეგობრული მეზობელი']],
      [['My brother is twenty five years old', 'ჩემი ძმა 25 წლის არის.', 'brother'], ['We live in a big house together', 'ჩვენ ერთად ვცხოვრობთ დიდ სახლში.', 'together'], ['Her best friend speaks English well', 'მისი საუკეთესო მეგობარი კარგად საუბრობს ინგლისურად.', 'speaks']]],

    ['A1', 'რიცხვები, საათი და კალენდარი', 'დროის კითხვა, კვირის დღეები, თვეები და თარიღები.', 'საათებთან ვიყენებთ წინდებულს „at“ (at 7 o\'clock), ხოლო კვირის დღეებთან — „on“ (on Monday).',
      [['What time is it?', 'რომელი საათია?'], ['Half past seven', 'რვის ნახევარი (7:30)'], ['On Sunday morning', 'კვირა დილით'], ['Next week', 'მომავალ კვირას'], ['Every month', 'ყოველ თვე'], ['Right on time', 'ზუსტად დროზე']],
      [['The meeting starts at nine oclock', 'შეხვედრა იწყება 9 საათზე.', 'starts'], ['I run three kilometers on Sundays', 'კვირაობით სამ კილომეტრს დავრბივარ.', 'Sundays'], ['What day of the week is today', 'კვირის რა დღეა დღეს?', 'today']]],

    ['A1', 'ყოველდღიური რუტინა და დილა', 'რას ვაკეთებთ გაღვიძებიდან დაძინებამდე (Present Simple).', 'ყოველდღიური ჩვევებისთვის გამოიყენება Present Simple: I wake up, I drink, I go.',
      [['Wake up early', 'ადრე გაღვიძება'], ['Take a shower', 'შხაპის მიღება'], ['Make breakfast', 'საუზმის მომზადება'], ['Check emails', 'ელფოსტის შემოწმება'], ['Go to work', 'სამსახურში წასვლა'], ['Go to sleep', 'დაძინება']],
      [['I wake up early every morning', 'ყოველ დილით ადრე ვიღვიძებ.', 'early'], ['She drinks coffee before work', 'ის სამსახურამდე ყავას სვამს.', 'drinks'], ['We finish work at six in the evening', 'სამსახურს საღამოს 6 საათზე ვასრულებთ.', 'finish']]],

    ['A1', 'სახლი, ბინა და ავეჯი', 'ოთახების დასახელებები, ნივთების მდებარეობა და კომფორტი.', 'კონსტრუქცია „There is / There are“ ნიშნავს „არის / იმყოფება“ (მაგ: There is a table in the room).',
      [['Living room', 'მისაღები ოთახი'], ['Kitchen', 'სამზარეულო'], ['Comfortable chair', 'კომფორტული სკამი'], ['Bright window', 'ნათელი ფანჯარა'], ['Working desk', 'სამუშაო მაგიდა'], ['Green houseplant', 'ოთახის მწვანე მცენარე']],
      [['There is a big desk in my room', 'ჩემს ოთახში დიდი სამუშაო მაგიდა დგას.', 'desk'], ['The kitchen is clean and modern', 'სამზარეულო სუფთა და თანამედროვეა.', 'modern'], ['I keep a green plant near the window', 'ფანჯარასთან ახლოს მწვანე მცენარე მიდგას.', 'window']]],

    ['A1', 'საკვები, სამზარეულო და კაფე', 'საყვარელი კერძები, პროდუქტები და შეკვეთა კაფეში.', 'უთვლად პროდუქტებთან (water, rice, meat, milk) ვიყენებთ some / much, და არა a / an.',
      [['Chicken breast', 'ქათმის ფილე'], ['Boiled potatoes', 'მოხარშული კარტოფილი'], ['Oatmeal with eggs', 'შვრიის ფაფა კვერცხით'], ['A bottle of water', 'ერთი ბოთლი წყალი'], ['Menu please', 'მენიუ, თუ შეიძლება'], ['Without sugar', 'უშაქროდ']],
      [['I eat oatmeal and eggs for breakfast', 'საუზმეზე შვრიის ფაფასა და კვერცხს ვჭამ.', 'breakfast'], ['Can I have a glass of cold water', 'შეიძლება ერთი ჭიქა ცივი წყალი?', 'water'], ['This dish is healthy and delicious', 'ეს კერძი ჯანსაღი და გემრიელია.', 'healthy']]],

    ['A1', 'ტანსაცმელი, ფეხსაცმელი და შოპინგი', 'ზომის, ფერისა და ფასის კითხვა ტანსაცმლის მაღაზიაში.', 'წყვილ ნივთებთან (shoes, jeans, glasses) ზმნა მრავლობითში დგება: These shoes are comfortable.',
      [['What size do you wear?', 'რა ზომას ატარებთ?'], ['Washed hoodie', 'ჰუდი (კაპიუშონიანი ზედა)'], ['Blue jeans', 'ლურჯი ჯინსი'], ['Fitting room', 'გასახდელი ოთახი'], ['Pay by card', 'ბარათით გადახდა'], ['Good quality', 'კარგი ხარისხი']],
      [['I wear size forty three shoes', '43 ზომა ფეხსაცმელს ვატარებ.', 'shoes'], ['Where is the fitting room please', 'სად არის გასახდელი ოთახი, თუ შეიძლება?', 'fitting'], ['This cotton hoodie fits very well', 'ეს ბამბის ჰუდი ძალიან კარგად მადგას.', 'fits']]],

    ['A1', 'ქალაქი, ტრანსპორტი და მიმართულებები', 'როგორ ვიკითხოთ გზა მეტრომდე, სადგურამდე ან ბანკამდე.', 'მიმართულების საჩვენებლად ვიყენებთ ბრძანებით ფორმას: Go straight (წადი პირდაპირ), Turn right (შეუხვიე მარჯვნივ).',
      [['Go straight ahead', 'იარეთ პირდაპირ'], ['Turn left at the corner', 'კუთხეში შეუხვიეთ მარცხნივ'], ['Subway station', 'მეტროსადგური'], ['Bus stop', 'ავტობუსის გაჩერება'], ['Across the street', 'ქუჩის გადაღმა'], ['City center', 'ქალაქის ცენტრი']],
      [['Excuse me where is the central bank', 'უკაცრავად, სად არის ცენტრალური ბანკი?', 'bank'], ['Take the metro to the city center', 'გაყევით მეტროს ქალაქის ცენტრამდე.', 'center'], ['The stadium is ten minutes away', 'სტადიონი ათი წუთის სავალზეა.', 'minutes']]],

    ['A1', 'ამინდი, სეზონები და ბუნება', 'ამინდის პროგნოზი, ტემპერატურა და წელიწადის ოთხი დრო.', 'ამინდის აღსაწერად ვიყენებთ „It is...“: It is sunny (მზიანია), It is raining (წვიმს).',
      [['Sunny weather', 'მზიანი ამინდი'], ['Cold autumn', 'ცივი შემოდგომა'], ['Warm spring', 'თბილი გაზაფხული'], ['Heavy rain', 'ძლიერი წვიმა'], ['Clear sky', 'მოწმენდილი ცა'], ['Fresh mountain air', 'მთის სუფთა ჰაერი']],
      [['It is warm and sunny in Tbilisi today', 'დღეს თბილისში თბილი და მზიანი ამინდია.', 'sunny'], ['Autumn in Berlin can be quite chilly', 'შემოდგომა ბერლინში შეიძლება საკმაოდ გრილი იყოს.', 'autumn'], ['Take an umbrella because it is raining', 'აიღე ქოლგა, რადგან წვიმს.', 'umbrella']]],

    ['A1', 'ჰობი, მუსიკა და თავისუფალი დრო', 'საყვარელი საქმიანობები, მუსიკის მოსმენა და თამაშები.', 'ზმნების like, love, enjoy შემდეგ მოქმედებას ემატება -ing: I enjoy listening to music.',
      [['Listen to hip-hop', 'ჰიპ-ჰოპის მოსმენა'], ['Play board games', 'სამაგიდო თამაშების თამაში'], ['Solve a puzzle', 'თავსატეხის ამოხსნა'], ['Watch football', 'ფეხბურთის ყურება'], ['Free time', 'თავისუფალი დრო'], ['Weekend plans', 'უქმეების გეგმები']],
      [['I enjoy listening to jazz in the evening', 'საღამოობით ჯაზის მოსმენა მსიამოვნებს.', 'listening'], ['We play strategy card games with friends', 'მეგობრებთან ერთად სტრატეგიულ ბანქოს ვთამაშობთ.', 'friends'], ['He can solve a Rubiks cube quickly', 'მას რუბიკის კუბიკის სწრაფად აწყობა შეუძლია.', 'solve']]],

    // ==================== A2 (Units 11 - 20) ====================
    ['A2', 'აეროპორტი, რეგისტრაცია და ფრენა', 'ბილეთის შემოწმება, ბარგის ჩაბარება და უსაფრთხოების კონტროლი.', '„Flight“ ნიშნავს რეისს, „Gate“ — გასასვლელს, ხოლო „Delayed“ — დაგვიანებულ/გადადებულ რეისს.',
      [['Boarding pass', 'ჩასხდომის ბარათი'], ['Security check', 'უსაფრთხოების კონტროლი'], ['Carry-on bag', 'ხელბარგი'], ['Departure gate', 'გაფრენის გასასვლელი'], ['Window seat', 'ადგილი ფანჯარასთან'], ['Fasten your seatbelt', 'შეიკარით უსაფრთხოების ღვედი']],
      [['Please show your passport and boarding pass', 'გთხოვთ წარმოადგინოთ პასპორტი და ჩასხდომის ბარათი.', 'passport'], ['Our flight to Frankfurt leaves from gate four', 'ჩვენი რეისი ფრანკფურტისკენ მეოთხე გასასვლელიდან გადის.', 'gate'], ['I prefer a window seat on flights', 'ფრენისას ფანჯარასთან ჯდომა მირჩევნია.', 'seat']]],

    ['A2', 'სასტუმრო, ჯავშანი და მომსახურება', 'სასტუმროში შესვლა (Check-in), ნომრის პირობები და გასვლა (Check-out).', '„Check in“ ნიშნავს სასტუმროში ან რეისზე რეგისტრაციას, ხოლო „Check out“ — ნომრის დატოვებას.',
      [['Reservation under my name', 'ჯავშანი ჩემს სახელზე'], ['Single or double room', 'ერთადგილიანი ან ორადგილიანი ნომერი'], ['Included in the price', 'შედის ფასში'], ['Reception desk', 'მიმღები (რეცეპშენი)'], ['Key card', 'ელექტრონული გასაღები'], ['Late check-out', 'გვიანი გასვლა']],
      [['I have a reservation for three nights', 'სამი ღამით ჯავშანი მაქვს.', 'nights'], ['Is high speed internet available in the room', 'არის თუ არა სწრაფი ინტერნეტი ნომერში?', 'internet'], ['What time is breakfast served downstairs', 'რომელ საათზეა საუზმე ქვედა სართულზე?', 'breakfast']]],

    ['A2', 'სპორტული ვარჯიში, კრივი და გამძლეობა', 'ვარჯიშის აღჭურვილობა, დარბაზი, გახურება და დისციპლინა.', '„Work out“ (ორი სიტყვით) ზმნაა და ნიშნავს ვარჯიშს, ხოლო „Workout“ (ერთად) — თავად ვარჯიშის სესიას.',
      [['Boxing gloves', 'კრივის ხელთათმანები'], ['Elastic hand wraps', 'ხელის ელასტიკური ბინტები'], ['Jump rope warm-up', 'ლახტით გახურება'], ['Mouthguard', 'დამცავი კაპი'], ['Heavy bag', 'კრივის ტომარა'], ['Cardio endurance', 'კარდიო გამძლეობა']],
      [['Always wrap your hands before putting on gloves', 'ყოველთვის შეიხვიეთ ხელები ხელთათმანების ჩაცმამდე.', 'gloves'], ['Each boxing session lasts two hours', 'კრივის თითოეული ვარჯიში ორი საათი გრძელდება.', 'hours'], ['Regular cardio training improves your stamina', 'რეგულარული კარდიო ვარჯიში აუმჯობესებს გამძლეობას.', 'stamina']]],

    ['A2', 'სწორი კვება, ჯანმრთელობა და ენერგია', 'ცილები, ვიტამინები, წყლის ბალანსი და ჯანსაღი მომზადება.', 'Air fryer-ით ან ორთქლზე მომზადებულ საკვებს ინგლისურად „low-oil / healthy meal prep“ ეწოდება.',
      [['High-protein meal', 'მაღალცილოვანი კერძი'], ['Beef cutlets', 'საქონლის ხორცის კოტლეტი'], ['Buckwheat and rice', 'წიწიბურა და ბრინჯი'], ['Cottage cheese', 'ხაჭო'], ['Daily hydration', 'ყოველდღიური წყლის ბალანსი'], ['Muscle recovery', 'კუნთების აღდგენა']],
      [['A high protein diet supports muscle growth', 'მაღალცილოვანი დიეტა ხელს უწყობს კუნთის ზრდას.', 'growth'], ['I cook chicken breast in the air fryer', 'ქათმის ფილეს აეროგრილში ვამზადებ.', 'cook'], ['Drinking three liters of water keeps you hydrated', 'სამი ლიტრი წყლის დალევა ჰიდრატაციას უნარჩუნებს ორგანიზმს.', 'water']]],

    ['A2', 'წარსული მოვლენები — Past Simple', 'როგორ მოვყვეთ რა მოხდა გუშინ, გასულ კვირას ან შარშან.', 'წესიერ ზმნებს წარსულში ემატება -ed (worked, played), ხოლო არაწესიერებს აქვთ საკუთარი ფორმა (went, bought, saw).',
      [['Yesterday evening', 'გუშინ საღამოს'], ['Two days ago', 'ორი დღის წინ'], ['Last summer', 'გასულ ზაფხულს'], ['Attended a lecture', 'დაესწრო ლექციას'], ['Completed the task', 'დაასრულა დავალება'], ['Won the match', 'მოიგო მატჩი']],
      [['We watched an exciting football match yesterday', 'გუშინ საინტერესო საფეხბურთო მატჩს ვუყურეთ.', 'yesterday'], ['Did you receive my email this morning', 'მიიღეთ ჩემი წერილი დღეს დილით?', 'receive'], ['He sold his old camera last March', 'მან თავისი ძველი კამერა გასულ მარტში გაყიდა.', 'sold']]],

    ['A2', 'სამომავლო გეგმები და მიზნები', 'განსხვავება „be going to“-სა (დაგეგმილი) და „will“-ს (სპონტანური/პროგნოზი) შორის.', 'როცა ბილეთი უკვე ნაყიდი გაქვთ და გეგმა ზუსტია, გამოიყენეთ Present Continuous ან be going to.',
      [['Travel itinerary', 'მოგზაურობის მარშრუტი'], ['Book in advance', 'წინასწარ დაჯავშნა'], ['Upcoming concert', 'მოახლოებული კონცერტი'], ['Long-term goal', 'გრძელვადიანი მიზანი'], ['Look forward to', 'მოუთმენლად ლოდინი'], ['Save money', 'თანხის დაზოგვა']],
      [['I am going to attend a concert in Berlin', 'ბერლინში კონცერტზე დასწრებას ვაპირებ.', 'concert'], ['We are flying to Germany in November', 'ნოემბერში გერმანიაში მივფრინავთ.', 'flying'], ['I look forward to seeing the stadium live', 'მოუთმენლად ველი სტადიონის ცოცხლად ნახვას.', 'forward']]],

    ['A2', 'უნივერსიტეტი, ლექციები და განათლება', 'აკადემიური ცხოვრება, კურსები, გამოცდები და სერტიფიკატები.', '„Pass an exam“ ნიშნავს გამოცდის წარმატებით ჩაბარებას, ხოლო „Take an exam“ — გამოცდაზე გასვლას.',
      [['Masters degree', 'მაგისტრის ხარისხი'], ['Class schedule', 'ლექციების ცხრილი'], ['Online certification', 'ონლაინ სერტიფიკატი'], ['Case study', 'პრაქტიკული ქეისის განხილვა'], ['National exams', 'ეროვნული გამოცდები'], ['Academic semester', 'აკადემიური სემესტრი']],
      [['He is pursuing a Masters degree in banking', 'ის ეუფლება მაგისტრის ხარისხს საბანკო საქმეში.', 'degree'], ['My brother passed his national exams successfully', 'ჩემმა ძმამ ეროვნული გამოცდები წარმატებით ჩააბარა.', 'passed'], ['We analyzed an interesting business case study', 'ჩვენ გავაანალიზეთ საინტერესო ბიზნეს ქეისი.', 'analyzed']]],

    ['A2', 'კონცერტები, მუსიკა და კულტურული ღონისძიებები', 'ბილეთების შეძენა, არენა, მუსიკალური ალბომები და შთაბეჭდილებები.', '„Live performance“ ნიშნავს ცოცხალ შესრულებას სცენაზე.',
      [['Sold-out arena', 'სრულად გაყიდული არენა'], ['World tour', 'მსოფლიო ტურნე'], ['Favorite album', 'საყვარელი ალბომი'], ['Meaningful lyrics', 'შინაარსიანი ტექსტი (სიმღერის)'], ['Main stage', 'მთავარი სცენა'], ['Unforgettable night', 'დაუვიწყარი საღამო']],
      [['The artist announced his world tour dates', 'არტისტმა თავისი მსოფლიო ტურნეს თარიღები გამოაცხადა.', 'tour'], ['Thousands of fans gathered at the arena', 'ათასობით მსმენელი შეიკრიბა არენაზე.', 'arena'], ['This song has very deep lyrics', 'ამ სიმღერას ძალიან ღრმა ტექსტი აქვს.', 'lyrics']]],

    ['A2', 'შედარებითი და აღმატებითი ხარისხი', 'საგნების, ქალაქებისა და სერვისების შედარება (faster, more reliable, the best).', 'მოკლე ზედსართავებს ემატება -er / -est (fast -> faster -> fastest), გრძელებს — more / most.',
      [['Much faster than', 'გაცილებით სწრაფი, ვიდრე'], ['More convenient', 'უფრო მოსახერხებელი'], ['The most reliable', 'ყველაზე საიმედო'], ['Better quality', 'უკეთესი ხარისხი'], ['Less expensive', 'ნაკლებად ძვირი'], ['As important as', 'ისეთივე მნიშვნელოვანი, როგორც']],
      [['Trains are more comfortable than buses', 'მატარებლები უფრო კომფორტულია, ვიდრე ავტობუსები.', 'comfortable'], ['Consistency is the most important habit', 'თანმიმდევრულობა ყველაზე მნიშვნელოვანი ჩვევაა.', 'important'], ['This laptop is faster than my old one', 'ეს ლეპტოპი ჩემს ძველზე უფრო სწრაფია.', 'faster']]],

    ['A2', 'ყოველდღიური სერვისები და კომუნიკაცია', 'საბანკო ბარათები, SMS შეტყობინებები, მიტანის სერვისი და დახმარების თხოვნა.', '„Could you please...“ არის ყველაზე ბუნებრივი ზრდილობიანი თხოვნის ფორმა.',
      [['Bank notification', 'საბანკო შეტყობინება'], ['Customer support', 'მომხმარებელთა მხარდაჭერა'], ['Delivery courier', 'მიტანის კურიერი'], ['Confirm the code', 'კოდის დადასტურება'], ['Exchange rate', 'ვალუტის კურსი'], ['Contactless payment', 'უკონტაქტო გადახდა']],
      [['I received a bank alert on my phone', 'ტელეფონზე საბანკო შეტყობინება მივიღე.', 'phone'], ['Could you please send me the receipt', 'შეგიძლიათ ქვითარი გამომიგზავნოთ, თუ შეიძლება?', 'receipt'], ['Check the exchange rate before travelling', 'შეამოწმეთ ვალუტის კურსი გამგზავრებამდე.', 'rate']]],

    // ==================== B1 (Units 21 - 30) ====================
    ['B1', 'კარიერული წინსვლა და გასაუბრება', 'პროფესიული ძლიერი მხარეების წარმოჩენა და კარიერული მიზნები.', 'Present Perfect (I have managed...) გამოიყენება კარიერული მიღწევების ჩამოთვლისას.',
      [['Analytical mindset', 'ანალიტიკური აზროვნება'], ['Professional background', 'პროფესიული გამოცდილება'], ['Team collaboration', 'გუნდური თანამშრომლობა'], ['Career advancement', 'კარიერული წინსვლა'], ['Handle responsibility', 'პასუხისმგებლობის აღება'], ['Strong work ethic', 'ძლიერი სამუშაო ეთიკა']],
      [['My background combines finance and management', 'ჩემი გამოცდილება აერთიანებს ფინანსებსა და მენეჯმენტს.', 'finance'], ['I thrive in fast paced working environments', 'წარმატებით ვმუშაობ დინამიკურ სამუშაო გარემოში.', 'environments'], ['She demonstrated excellent leadership skills', 'მან გამოავლინა შესანიშნავი ლიდერული უნარები.', 'leadership']]],

    ['B1', 'ოფისი, დედლაინები და პროდუქტიულობა', 'პრიორიტეტების დალაგება, დროის მართვა და საქმიანი მიმოწერა.', '„Prioritize tasks“ ნიშნავს დავალებების მნიშვნელობის მიხედვით დალაგებას.',
      [['Strict deadline', 'მკაცრი ვადა (დედლაინი)'], ['Set priorities', 'პრიორიტეტების განსაზღვრა'], ['Track progress', 'პროგრესის კონტროლი'], ['Weekly report', 'ყოველკვირეული ანგარიში'], ['Postpone a meeting', 'შეხვედრის გადადება'], ['Efficient workflow', 'ეფექტური სამუშაო პროცესი']],
      [['We need to submit the report by Friday', 'ანგარიში პარასკევამდე უნდა წარვადგინოთ.', 'submit'], ['Tracking daily habits increases productivity', 'ყოველდღიური ჩვევების აღრიცხვა ზრდის პროდუქტიულობას.', 'productivity'], ['Please let me know if the schedule changes', 'გთხოვთ შემატყობინოთ, თუ განრიგი შეიცვლება.', 'schedule']]],

    ['B1', 'თანამედროვე გაჯეტები და ეკოსისტემა', 'სმარტფონების, სმარტ-საათებისა და აუდიო ტექნიკის ფუნქციები.', '„Seamless integration“ ნიშნავს მოწყობილობებს შორის უწყვეტ, შეუფერხებელ კავშირს.',
      [['Noise-canceling headphones', 'ხმაურის ჩამხშობი ყურსასმენები'], ['Battery life', 'ელემენტის გამძლეობა'], ['Wireless charging', 'უსადენო დამუხტვა'], ['File transfer', 'ფაილების გადატანა'], ['Smartwatch notifications', 'სმარტ-საათის შეტყობინებები'], ['Keyboard shortcut', 'სწრაფი კომბინაცია']],
      [['Noise canceling headphones help me concentrate', 'ხმაურის ჩამხშობი ყურსასმენები კონცენტრაციაში მეხმარება.', 'concentrate'], ['I connected my phone to the computer wirelessly', 'ტელეფონი კომპიუტერს უსადენოდ დავუკავშირე.', 'computer'], ['The battery lasts for two full days', 'ელემენტი სრულ ორ დღეს ძლებს.', 'battery']]],

    ['B1', 'პროგრამირება, სკრიპტები და ავტომატიზაცია', 'რუტინული პროცესების გამარტივება ბოტებისა და კოდის საშუალებით.', '„Trigger an event“ ნიშნავს მოქმედების ავტომატურ გაშვებას გარკვეული პირობის დადგომისას.',
      [['Automated script', 'ავტომატიზებული სკრიპტი'], ['Forward messages', 'შეტყობინებების გადამისამართება'], ['Webhook integration', 'ვებჰუკის ინტეგრაცია'], ['Convert into attachment', 'დანართად გარდაქმნა'], ['Server configuration', 'სერვერის კონფიგურაცია'], ['Fix a bug', 'ხარვეზის გასწორება']],
      [['The bot automatically forwards alerts to Telegram', 'ბოტი ავტომატურად ამისამართებს შეტყობინებებს ტელეგრამში.', 'forwards'], ['We configured the server for continuous streaming', 'სერვერი გავმართეთ უწყვეტი სტრიმინგისთვის.', 'continuous'], ['Automation saves hours of manual work', 'ავტომატიზაცია ზოგავს საათობით ხელით სამუშაოს.', 'manual']]],

    ['B1', 'ელ-კომერცია, შეკვეთები და ლოგისტიკა', 'საერთაშორისო პლატფორმები, საწყობები, გადამზიდები და ტრანსპორტირება.', '„Freight forwarder“ არის გადამზიდი კომპანია, რომელიც ამანათებს უცხოეთის საწყობიდან ჩამოგიტანთ.',
      [['Warehouse address', 'საწყობის მისამართი'], ['Tracking number', 'გზავნილის თრექინგ კოდი'], ['Customs declaration', 'საბაჟო დეკლარაცია'], ['Direct manufacturer', 'პირდაპირი მწარმოებელი'], ['Print saturation', 'პრინტის ფერის სიმკვეთრე'], ['Garment specifications', 'სამოსის სპეციფიკაცია']],
      [['The package arrived at the central warehouse', 'ამანათი ცენტრალურ საწყობში მივიდა.', 'warehouse'], ['Always verify the tracking number after shipping', 'გამოგზავნის შემდეგ ყოველთვის გადაამოწმეთ თრექინგ კოდი.', 'tracking'], ['We ordered custom printed hoodies from the factory', 'ქარხნიდან ინდივიდუალური პრინტით ჰუდები შევუკვეთეთ.', 'factory']]],

    ['B1', 'პირადი ბიუჯეტი და ხარჯების კონტროლი', 'შემოსავლებისა და გასავლების აღრიცხვა, დანაზოგები და ფინანსური ჩვევები.', '„Keep track of expenses“ ნიშნავს ხარჯების სისტემატურ აღრიცხვას.',
      [['Expense log', 'ხარჯების ჟურნალი'], ['Monthly budget', 'ყოველთვიური ბიუჯეტი'], ['Unexpected cost', 'გაუთვალისწინებელი ხარჯი'], ['Financial discipline', 'ფინანსური დისციპლინა'], ['Currency conversion', 'ვალუტის კონვერტაცია'], ['Smart investment', 'ჭკვიანური ინვესტიცია']],
      [['Keeping an expense log prevents overspending', 'ხარჯების აღრიცხვა თავიდან გვაცილებს ზედმეტ ხარჯვას.', 'prevents'], ['Allocate a portion of your income to savings', 'შემოსავლის ნაწილი გადადეთ დანაზოგისთვის.', 'savings'], ['We stayed within our planned travel budget', 'დაგეგმილი სამოგზაურო ბიუჯეტის ფარგლებში დავრჩით.', 'budget']]],

    ['B1', 'ფეხბურთი, ტაქტიკა და ევროპული ლიგები', 'მატჩების მიმოხილვა, სატურნირო ცხრილი, ტრანსფერები და ფენტეზი ფეხბურთი.', '„Clean sheet“ ფეხბურთში ნიშნავს მატჩის ჩატარებას გაშვებული გოლის გარეშე („მშრალი კარი“).',
      [['Champions League', 'ჩემპიონთა ლიგა'], ['Starting lineup', 'ძირითადი შემადგენლობა'], ['Counter-attack', 'კონტრშეტევა'], ['Clean sheet', 'მშრალად შენახული კარი'], ['Penalty shootout', 'პენალტების სერია'], ['Home stadium', 'საშინაო სტადიონი']],
      [['Real Madrid won a dramatic knockout match', 'მადრიდის რეალმა დრამატული პლეი-ოფის მატჩი მოიგო.', 'dramatic'], ['I updated my fantasy football squad before the deadline', 'დედლაინამდე ჩემი ფენტეზი ფეხბურთის გუნდი განვაახლე.', 'squad'], ['The atmosphere at the Hamburg stadium was electric', 'ჰამბურგის სტადიონზე საოცრად მუხტიანი ატმოსფერო იყო.', 'stadium']]],

    ['B1', 'მუსიკალური პროდიუსინგი და YouTube არხი', 'აუდიო პროექტების შექმნა, ვიზუალური ბრენდინგი და აუდიტორიის ზრდა.', '„Tracklist“ არის კომპილაციაში შემავალი ტრეკების სია დროის მითითებით (Timestamps).',
      [['Instrumental beat', 'ინსტრუმენტული ბიტი'], ['Channel branding', 'არხის ბრენდინგი'], ['Visual thumbnail', 'ვიდეოს გარეკანი (Thumbnail)'], ['Release schedule', 'გამოშვების განრიგი'], ['Loyal audience', 'ერთგული აუდიტორია'], ['Audio mastering', 'აუდიო მასტერინგი']],
      [['One hour lo fi sessions help people study', 'ერთსაათიანი lo-fi სესიები ადამიანებს სწავლაში ეხმარება.', 'study'], ['Consistent branding makes a channel recognizable', 'თანმიმდევრული ბრენდინგი არხს ცნობადს ხდის.', 'channel'], ['We designed album artwork with clean typography', 'შევქმენით ალბომის დიზაინი სუფთა ტიპოგრაფიით.', 'typography']]],

    ['B1', 'ქართული კულტურა, პოეზია და ტრადიციები', 'როგორ მოვუყვეთ უცხოელებს საქართველოს ისტორიაზე, სოფლებსა და ხალხურ საკრავებზე.', '„Cultural heritage“ ნიშნავს კულტურულ მემკვიდრეობას.',
      [['Traditional folk music', 'ტრადიციული ხალხური მუსიკა'], ['String instrument', 'სიმებიანი საკრავი'], ['Polyphonic singing', 'მრავალხმიანი სიმღერა'], ['Hospitality', 'სტუმართმოყვარეობა'], ['Ancient history', 'უძველესი ისტორია'], ['Native village', 'მშობლიური სოფელი']],
      [['Georgian polyphonic singing is famous worldwide', 'ქართული მრავალხმიანი სიმღერა მთელ მსოფლიოშია ცნობილი.', 'worldwide'], ['The poem describes the beauty of the village', 'ლექსი აღწერს სოფლის სილამაზეს.', 'beauty'], ['Folk instruments create a warm authentic sound', 'ხალხური საკრავები ქმნის თბილ, ავთენტურ ჟღერადობას.', 'sound']]],

    ['B1', 'ცხოვრებისეული გამოცდილება — Present Perfect vs Past', 'როგორ გავმიჯნოთ ზუსტი წარსული თარიღი და დღემდე აქტუალური შედეგი.', '„Since“ აღნიშნავს საწყის წერტილს (since 2025), ხოლო „For“ — ხანგრძლივობას (for two years).',
      [['So far this year', 'წელს ამ დრომდე'], ['Several times', 'რამდენჯერმე'], ['Recently completed', 'ახლახან დასრულებული'], ['Since last January', 'გასული იანვრიდან'], ['Valuable lesson', 'ღირებული გაკვეთილი'], ['Significant progress', 'მნიშვნელოვანი პროგრესი']],
      [['I have completed two masterclasses this year', 'წელს ორი მასტერკლასი დავასრულე.', 'completed'], ['Have you ever attended a live UFC event', 'დასწრებიხართ ოდესმე UFC-ის ღონისძიებას ცოცხლად?', 'attended'], ['She has improved her English significantly', 'მან მნიშვნელოვნად გაიუმჯობესა ინგლისური.', 'improved']]],

    // ==================== B2 (Units 31 - 40) ====================
    ['B2', 'საქმიანი მოლაპარაკებები და კომპრომისი', 'პირობების წამოყენება, არგუმენტირებული დისკუსია და შეთანხმების მიღწევა.', '„Reach a middle ground“ ნიშნავს ოქროს შუალედის / კომპრომისის პოვნას.',
      [['Mutually beneficial', 'ორმხრივად მომგებიანი'], ['Counter-proposal', 'შემხვედრი შეთავაზება'], ['Key terms', 'ძირითადი პირობები'], ['Long-term partnership', 'გრძელვადიანი პარტნიორობა'], ['Reach a consensus', 'კონსენსუსის მიღწევა'], ['Constructive dialogue', 'კონსტრუქციული დიალოგი']],
      [['We proposed a mutually beneficial repayment structure', 'ჩვენ შევთავაზეთ ორმხრივად მომგებიანი დაფარვის სტრუქტურა.', 'structure'], ['Both parties agreed to revise the contract terms', 'ორივე მხარე დათანხმდა კონტრაქტის პირობების გადახედვას.', 'agreed'], ['Clear communication prevents future misunderstandings', 'მკაფიო კომუნიკაცია თავიდან გვაცილებს გაუგებრობებს.', 'prevents']]],

    ['B2', 'კომერციული ბანკინგი და სესხის სტრუქტურირება', 'საკრედიტო განაცხადის განხილვა, მიზნობრიობა, ვადიანობა და უზრუნველყოფა.', '„Working capital loan“ არის საბრუნავი საშუალებების სესხი, ხოლო „CAPEX loan“ — კაპიტალური დანახარჯების.',
      [['Credit committee', 'საკრედიტო კომიტეტი'], ['Loan disbursement', 'სესხის გაცემა / ათვისება'], ['Grace period', 'საშეღავათო პერიოდი'], ['Interest rate margin', 'საპროცენტო განაკვეთის მარჟა'], ['Repayment schedule', 'დაფარვის გრაფიკი'], ['Creditworthiness', 'გადახდისუნარიანობა / სანდოობა']],
      [['The credit committee approved the short term loan', 'საკრედიტო კომიტეტმა დაამტკიცა მოკლევადიანი სესხი.', 'approved'], ['Repayment is aligned with the supplier contract', 'სესხის დაფარვა მიბმულია მომწოდებლის კონტრაქტზე.', 'aligned'], ['We assessed the borrower creditworthiness thoroughly', 'მსესხებლის გადახდისუნარიანობა საფუძვლიანად შევაფასეთ.', 'assessed']]],

    ['B2', 'ფინანსური ანგარიშგება და კოეფიციენტები', 'ბალანსი, მოგება-ზარალის უწყისი, ფულადი ნაკადები და მომგებიანობა.', '„Balance sheet“ არის ბალანსი, „Income statement“ — მოგება-ზარალის უწყისი, „Cash flow“ — ფულადი ნაკადები.',
      [['Balance sheet', 'საბალანსო უწყისი (ბალანსი)'], ['Income statement', 'მოგება-ზარალის უწყისი'], ['Net profit margin', 'წმინდა მოგების მარჟა'], ['Current liquidity ratio', 'მიმდინარე ლიკვიდურობის კოეფიციენტი'], ['Debt-to-equity', 'ვალისა და კაპიტალის თანაფარდობა'], ['Operating expenses', 'საოპერაციო ხარჯები']],
      [['The ratio analysis revealed strong liquidity', 'კოეფიციენტების ანალიზმა გამოავლინა ძლიერი ლიკვიდურობა.', 'liquidity'], ['Revenue grew by fifteen percent year over year', 'შემოსავალი წლიურ ჭრილში თხუთმეტი პროცენტით გაიზარდა.', 'percent'], ['Healthy cash flow is essential for debt service', 'ჯანსაღი ფულადი ნაკადი აუცილებელია სესხის მომსახურებისთვის.', 'service']]],

    ['B2', 'ვაჭრობის დაფინანსება და ფაქტორინგი', 'მოწოდების ჯაჭვის ფინანსირება, დებიტორული დავალიანება და საბანკო გარანტიები.', '„Receivables finance / Factoring“ კომპანიას აძლევს საშუალებას ინვოისების თანხა ვადაზე ადრე მიიღოს.',
      [['Accounts receivable', 'დებიტორული დავალიანება'], ['Supply chain finance', 'მოწოდების ჯაჭვის დაფინანსება'], ['Invoice discounting', 'ინვოისების დისკონტირება'], ['Bank guarantee', 'საბანკო გარანტია'], ['Trade finance', 'ვაჭრობის დაფინანსება'], ['Working capital cycle', 'საბრუნავი კაპიტალის ციკლი']],
      [['Factoring accelerates cash inflow for suppliers', 'ფაქტორინგი აჩქარებს ფულადი სახსრების შემოდინებას მომწოდებლებისთვის.', 'accelerates'], ['We verified the invoices before financing the contract', 'კონტრაქტის დაფინანსებამდე გადავამოწმეთ ინვოისები.', 'verified'], ['Trade finance instruments reduce settlement risk', 'ვაჭრობის დაფინანსების ინსტრუმენტები ამცირებს ანგარიშსწორების რისკს.', 'reduce']]],

    ['B2', 'უძრავი ქონების სექტორი და პროექტების შეფასება', 'საცხოვრებელი კომპლექსების მშენებლობა, ფასწარმოქმნა და გეოგრაფიული ანალიზი.', '„Pre-sales“ მშენებლობაში ნიშნავს ბინების წინასწარ გაყიდვებს მშენებლობის დასრულებამდე.',
      [['Residential complex', 'საცხოვრებელი კომპლექსი'], ['Price per square meter', 'ფასი კვადრატულ მეტრზე'], ['Construction milestone', 'მშენებლობის ეტაპი'], ['Occupancy rate', 'დატვირთულობის მაჩვენებელი'], ['Coastal resort area', 'სანაპირო საკურორტო ზონა'], ['Feasibility study', 'ტექნიკურ-ეკონომიკური დასაბუთება']],
      [['Demand for apartments near the coast is rising', 'სანაპიროსთან ახლოს ბინებზე მოთხოვნა იზრდება.', 'rising'], ['We analyzed the price per square meter in the region', 'ჩვენ გავაანალიზეთ კვადრატული მეტრის ფასი რეგიონში.', 'square'], ['Loan tranches depend on construction milestones', 'სესხის ტრანშები დამოკიდებულია მშენებლობის ეტაპებზე.', 'milestones']]],

    ['B2', 'იურიდიული კონსულტაცია და სახელშეკრულებო სამართალი', 'ხელშეკრულების მუხლები, მხარეთა ვალდებულებები და სამართლებრივი რისკები.', '„Binding agreement“ ნიშნავს იურიდიული ძალის მქონე სავალდებულო ხელშეკრულებას.',
      [['Legally binding', 'იურიდიულად სავალდებულო'], ['Contractual clause', 'სახელშეკრულებო მუხლი'], ['Title deed', 'საკუთრების დამადასტურებელი ამონაწერი'], ['Dispute resolution', 'დავების გადაწყვეტა'], ['Liability limit', 'პასუხისმგებლობის ზღვარი'], ['Regulatory requirement', 'კანონმდებლობის მოთხოვნა']],
      [['Every client should review the contract before signing', 'ყველა კლიენტმა ხელმოწერამდე უნდა გადახედოს კონტრაქტს.', 'signing'], ['The clause specifies penalties for late delivery', 'მუხლი განსაზღვრავს ჯარიმებს მიწოდების დაგვიანებისთვის.', 'penalties'], ['We provided legal consulting for the property buyer', 'უძრავი ქონების მყიდველს იურიდიული კონსულტაცია გავუწიეთ.', 'provided']]],

    ['B2', 'რისკ-მენეჯმენტი და სტრეს-ტესტირება', 'საფრთხეების იდენტიფიცირება, პრევენცია და პორტფელის დაცვა.', '„Mitigate risk“ ნიშნავს რისკის შემცირებას / შერბილებას.',
      [['Risk mitigation', 'რისკის შემცირება / დაზღვევა'], ['Worst-case scenario', 'უარესი სცენარი'], ['Sensitivity analysis', 'მგრძნობელობის ანალიზი'], ['Early warning sign', 'ადრეული გაფრთხილების ნიშანი'], ['Default probability', 'დეფოლტის ალბათობა'], ['Diversified exposure', 'დივერსიფიცირებული რისკი']],
      [['Stress testing shows how the portfolio handles shocks', 'სტრეს-ტესტირება აჩვენებს, როგორ უძლებს პორტფელი შოკებს.', 'portfolio'], ['Diversification is the best way to mitigate risk', 'დივერსიფიკაცია რისკის შემცირების საუკეთესო გზაა.', 'mitigate'], ['Analysts monitor early warning indicators closely', 'ანალიტიკოსები ყურადღებით აკვირდებიან ადრეულ ინდიკატორებს.', 'monitor']]],

    ['B2', 'მონაცემთა მართვა, Excel, SQL და Power BI', 'ფინანსური მოდელირება, ცხრილების ავტომატიზაცია და ანალიტიკური დაფები.', '„Pivot table“ და „Interactive dashboard“ ანალიტიკური რეპორტინგის ძირითადი ტერმინებია.',
      [['Financial modeling', 'ფინანსური მოდელირება'], ['Pivot table summary', 'შემაჯამებელი პივოტ-ცხრილი'], ['Macro automation', 'მაკროსებით ავტომატიზაცია'], ['Database query', 'მონაცემთა ბაზის მოთხოვნა (Query)'], ['Cell protection', 'უჯრედების დაცვა'], ['Interactive dashboard', 'ინტერაქტიული ანალიტიკური პანელი']],
      [['I built a dynamic financial model in Excel', 'ექსელში ავაწყვე დინამიკური ფინანსური მოდელი.', 'model'], ['SQL queries extract data from large tables quickly', 'SQL მოთხოვნებს მონაცემები დიდი ცხრილებიდან სწრაფად გამოაქვს.', 'extract'], ['Cell protection prevents accidental formula changes', 'უჯრედების დაცვა იცავს ფორმულებს შემთხვევითი წაშლისგან.', 'formula']]],

    ['B2', 'პროექტების მართვა და გუნდის კოორდინაცია', 'რესურსების განაწილება, ეტაპების კონტროლი და უკუკავშირი.', '„Bottleneck“ ნიშნავს პროცესის ყველაზე ვიწრო ადგილს, რომელიც მთელ საქმეს აფერხებს.',
      [['Resource allocation', 'რესურსების განაწილება'], ['Project scope', 'პროექტის მოცულობა / ჩარჩო'], ['Identify a bottleneck', 'შეფერხების წერტილის პოვნა'], ['Constructive feedback', 'კონსტრუქციული უკუკავშირი'], ['Key performance indicator', 'ეფექტიანობის მთავარი მაჩვენებელი (KPI)'], ['Cross-functional team', 'მრავალპროფილური გუნდი']],
      [['Clear milestones keep the whole team aligned', 'მკაფიო ეტაპები მთელ გუნდს შეთანხმებულად ამუშავებს.', 'aligned'], ['We identified the bottleneck in the approval process', 'დამტკიცების პროცესში შეფერხების წერტილი აღმოვაჩინეთ.', 'process'], ['Regular feedback helps team members grow', 'რეგულარული უკუკავშირი გუნდის წევრებს განვითარებაში ეხმარება.', 'grow']]],

    ['B2', 'პირობითი წინადადებები და ჰიპოთეტური ანალიზი', 'First, Second და Third Conditional-ის გამოყენება ბიზნეს გადაწყვეტილებებში.', '3rd Conditional (If we had known..., we would have acted) გამოიყენება წარსული გადაწყვეტილებების რეტროსპექტიული ანალიზისთვის.',
      [['Provided that', 'იმ პირობით, რომ'], ['In the event of', 'იმ შემთხვევაში, თუ'], ['Unless otherwise stated', 'თუ სხვა რამ არ არის მითითებული'], ['Hypothetical scenario', 'ჰიპოთეტური სცენარი'], ['Retrospective review', 'რეტროსპექტიული მიმოხილვა'], ['Alternative outcome', 'ალტერნატიული შედეგი']],
      [['If we automate this step we will save time', 'თუ ამ ნაბიჯს ავტომატიზებულს გავხდით, დროს დავზოგავთ.', 'save'], ['If I were in your position I would accept the offer', 'თქვენს ადგილას რომ ვიყო, შეთავაზებას დავთანხმდებოდი.', 'accept'], ['Had they checked the figures they would have spotted the error', 'ციფრები რომ გადაემოწმებინათ, შეცდომას შეამჩნევდნენ.', 'spotted']]],

    // ==================== C1 (Units 41 - 50) ====================
    ['C1', 'აკადემიური კვლევა და სამაგისტრო ნაშრომი', 'კვლევის მეთოდოლოგია, ლიტერატურის მიმოხილვა და ემპირიული ანალიზი.', '„Corroborate“ ნიშნავს მოსაზრების ან თეორიის ფაქტებით გამყარებას.',
      [['Empirical evidence', 'ემპირიული მტკიცებულება'], ['Literature review', 'ლიტერატურის მიმოხილვა'], ['Quantitative analysis', 'რაოდენობრივი ანალიზი'], ['Qualitative insights', 'თვისებრივი მიგნებები'], ['Corroborate findings', 'შედეგების დადასტურება'], ['Theoretical framework', 'თეორიული ჩარჩო']],
      [['The thesis examines how hybrid work affects collaboration', 'ნაშრომი იკვლს, თუ როგორ მოქმედებს ჰიბრიდული მუშაობა კოლაბორაციაზე.', 'examines'], ['Empirical data corroborated our initial hypothesis', 'ემპირიულმა მონაცემებმა დაადასტურა ჩვენი საწყისი ჰიპოთეზა.', 'hypothesis'], ['The study combines quantitative and qualitative methods', 'კვლევა აერთიანებს რაოდენობრივ და თვისებრივ მეთოდებს.', 'methods']]],

    ['C1', 'ჰიბრიდული სამუშაო მოდელები და კოლაბორაცია', 'თანამედროვე სამუშაო გარემოს ტრანსფორმაცია, ავტონომია და გუნდური სინერგია.', '„Outcome-oriented culture“ ფოკუსირდება შესრულებულ შედეგზე და არა ოფისში გატარებულ საათებზე.',
      [['Hybrid work model', 'ჰიბრიდული სამუშაო მოდელი'], ['Asynchronous communication', 'ასინქრონული კომუნიკაცია'], ['Work-life integration', 'სამუშაოსა და პირადი ცხოვრების ბალანსი'], ['Spontaneous innovation', 'სპონტანური ინოვაცია'], ['Employee autonomy', 'თანამშრომლის დამოუკიდებლობა'], ['Institutional cohesion', 'ინსტიტუციური ერთიანობა']],
      [['Hybrid work models require intentional communication', 'ჰიბრიდული მოდელები მოითხოვს გააზრებულ კომუნიკაციას.', 'intentional'], ['Autonomy boosts both morale and productivity', 'ავტონომია ზრდის როგორც მოტივაციას, ისე პროდუქტიულობას.', 'morale'], ['Organizations must balance flexibility with cohesion', 'ორგანიზაციებმა უნდა დააბალანსონ მოქნილობა და ერთიანობა.', 'balance']]],

    ['C1', 'ორგანიზაციული კულტურა და ცვლილებების მართვა', 'კორპორაციული ღირებულებები, ტრანსფორმაცია და ფსიქოლოგიური უსაფრთხოება.', '„Psychological safety“ ნიშნავს გარემოს, სადაც თანამშრომლებს არ ეშინიათ იდეებისა და კითხვების დასმის.',
      [['Psychological safety', 'ფსიქოლოგიური უსაფრთხოება'], ['Change management', 'ცვლილებების მართვა'], ['Shared values', 'საერთო ღირებულებები'], ['Overcome resistance', 'წინააღმდეგობის დაძლევა'], ['Transparent leadership', 'გამჭვირვალე ლიდერობა'], ['Employee engagement', 'თანამშრომელთა ჩართულობა']],
      [['Transparent leadership builds lasting organizational trust', 'გამჭვირვალე ლიდერობა აშენებს მყარ ორგანიზაციულ ნდობას.', 'trust'], ['Successful transformation requires active employee engagement', 'წარმატებული ტრანსფორმაცია მოითხოვს თანამშრომელთა ჩართულობას.', 'engagement'], ['A culture of learning encourages experimentation', 'სწავლაზე ორიენტირებული კულტურა ახალისებს ექსპერიმენტებს.', 'encourages']]],

    ['C1', 'გლობალური გუნდები და კროს-კულტურული მენეჯმენტი', 'საერთაშორისო კორპორაციების მართვა, დროის სარტყლები და კულტურული თავისებურებები.', '„Cultural intelligence (CQ)“ არის სხვადასხვა კულტურის წარმომადგენლებთან ეფექტური მუშაობის უნარი.',
      [['Cross-cultural communication', 'კულტურათაშორისი კომუნიკაცია'], ['Distributed teams', 'გეოგრაფიულად განაწილებული გუნდები'], ['Cultural sensitivity', 'კულტურული დელიკატურობა'], ['Bridge the gap', 'განსხვავების აღმოფხვრა / ხიდის გადება'], ['Mutual respect', 'ურთიერთპატივისცემა'], ['Global alignment', 'გლობალური შეთანხმებულობა']],
      [['Managing global teams demands cultural sensitivity', 'გლობალური გუნდების მართვა მოითხოვს კულტურულ დელიკატურობას.', 'sensitivity'], ['Clear documentation bridges time zone differences', 'მკაფიო დოკუმენტაცია აბათილებს დროის სარტყლების სხვაობას.', 'bridges'], ['Diverse perspectives enrich strategic decision making', 'მრავალფეროვანი ხედვები ამდიდრებს სტრატეგიულ გადაწყვეტილებებს.', 'enrich']]],

    ['C1', 'მაკროეკონომიკური ტენდენციები და მონეტარული პოლიტიკა', 'ცენტრალური ბანკების გადაწყვეტილებები, ინფლაცია, ეკონომიკური ზრდა და სტაბილურობა.', '„Curb inflation“ ნიშნავს ინფლაციის მოთოკვას / შეკავებას.',
      [['Monetary policy', 'მონეტარული პოლიტიკა'], ['Curb inflation', 'ინფლაციის შეკავება'], ['Purchasing power', 'მსყიდველობითი უნარი'], ['Fiscal stimulus', 'ფისკალური სტიმულირება'], ['Economic resilience', 'ეკონომიკური მედეგობა'], ['Benchmark interest rate', 'საბაზისო საპროცენტო განაკვეთი']],
      [['Central banks tighten policy to curb inflation', 'ცენტრალური ბანკები ამკაცრებენ პოლიტიკას ინფლაციის შესაკავებლად.', 'tighten'], ['High inflation erodes consumer purchasing power', 'მაღალი ინფლაცია ამცირებს მომხმარებლის მსყიდველობით უნარს.', 'erodes'], ['The banking sector demonstrated remarkable resilience', 'საბანკო სექტორმა გამოავლინა გამორჩეული მედეგობა.', 'resilience']]],

    ['C1', 'კორპორაციული სტრატეგია და კაპიტალის განაწილება', 'გრძელვადიანი ღირებულების შექმნა, ინვესტიციების ეფექტიანობა და კონკურენტული პოზიცია.', '„Economies of scale“ ნიშნავს მასშტაბის ეფექტს.',
      [['Capital allocation', 'კაპიტალის განაწილება'], ['Economies of scale', 'მასშტაბის ეფექტი'], ['Sustainable competitive moat', 'მდგრადი კონკურენტული უპირატესობა'], ['Value proposition', 'ფასეულობის შეთავაზება'], ['Strategic pivot', 'სტრატეგიული შემობრუნება'], ['Operational leverage', 'საოპერაციო ბერკეტი']],
      [['Disciplined capital allocation drives long term value', 'კაპიტალის დისციპლინირებული განაწილება ქმნის გრძელვადიან ღირებულებას.', 'allocation'], ['Economies of scale reduced unit production costs', 'მასშტაბის ეფექტმა შეამცირა ერთეულის წარმოების ხარჯი.', 'reduced'], ['Innovation strengthens our competitive position', 'ინოვაცია აძლიერებს ჩვენს კონკურენტულ პოზიციას.', 'position']]],

    ['C1', 'კრიტიკული აზროვნება და ანალიტიკური მსჯელობა', 'მიზეზ-შედეგობრიობის დადგენა, ობიექტურობა და მონაცემებზე დაყრდნობა.', '„Correlation does not imply causation“ — კორელაცია ავტომატურად არ ნიშნავს მიზეზ-შედეგობრივ კავშირს.',
      [['Causal link', 'მიზეზ-შედეგობრივი კავშირი'], ['Cognitive bias', 'კოგნიტური მიკერძოება'], ['Scrutinize data', 'მონაცემების ჩაკირკიტებით შესწავლა'], ['Unfounded assumption', 'უსაფუძვლო დაშვება'], ['Objective evaluation', 'ობიექტური შეფასება'], ['Draw a conclusion', 'დასკვნის გამოტანა']],
      [['Analysts must scrutinize every assumption carefully', 'ანალიტიკოსებმა ყურადღებით უნდა შეამოწმონ ყველა დაშვება.', 'scrutinize'], ['Correlation does not necessarily imply causation', 'კორელაცია აუცილებლად არ გულისხმობს მიზეზ-შედეგობრიობას.', 'causation'], ['We base our credit decisions on objective evidence', 'საკრედიტო გადაწყვეტილებებს ობიექტურ მტკიცებულებებს ვაფუძნებთ.', 'evidence']]],

    ['C1', 'ემფაზური ინვერსია და აკადემიური სინტაქსი', 'წინადადების გაძლიერება უარყოფითი ზმნიზედების წინ გადმოტანით (Never, Seldom, Not only).', 'ინვერსიის დროს ქვემდებარის წინ დგება დამხმარე ზმნა: Rarely do we see...',
      [['Not only ... but also', 'არა მხოლოდ ... არამედ'], ['Seldom have we seen', 'იშვიათად გვინახავს'], ['Under no circumstances', 'არავითარ შემთხვევაში'], ['No sooner ... than', 'როგორც კი ... მაშინვე'], ['Little did they know', 'წარმოდგენაც არ ჰქონდათ'], ['Only by working hard', 'მხოლოდ დაუღალავი შრომით']],
      [['Not only did revenue grow but margins also improved', 'არა მხოლოდ შემოსავალი გაიზარდა, არამედ მარჟაც გაუმჯობესდა.', 'improved'], ['Under no circumstances should security protocols be ignored', 'უსაფრთხოების პროტოკოლების უგულებელყოფა არავითარ შემთხვევაში არ შეიძლება.', 'ignored'], ['Seldom do we encounter such a well prepared case', 'იშვიათად გვხვდება ასეთი კარგად მომზადებული ქეისი.', 'encounter']]],

    ['C1', 'ციფრული ტრანსფორმაცია და ფინტექ ინოვაციები', 'საბანკო პროცესების დიჯიტალიზაცია, ავტომატური სკორინგი და მომხმარებლის გამოცდილება.', '„Streamline a process“ ნიშნავს პროცესის დახვეწას, გამარტივებასა და დაჩქარებას.',
      [['Streamline operations', 'ოპერაციების გამარტივება / დახვეწა'], ['Digital onboarding', 'მომხმარებლის ციფრული რეგისტრაცია'], ['Banking process management', 'საბანკო პროცესების მართვა'], ['Frictionless experience', 'უხარვეზო / კომფორტული გამოცდილება'], ['Scalable infrastructure', 'მასშტაბირებადი ინფრასტრუქტურა'], ['Operational efficiency', 'საოპერაციო ეფექტიანობა']],
      [['Digitizing loan workflows reduces approval time', 'სასესხო პროცესების გაციფრულება ამცირებს დამტკიცების დროს.', 'approval'], ['Process management eliminates redundant steps', 'პროცესების მართვა აუქმებს ზედმეტ, დუბლირებულ ნაბიჯებს.', 'redundant'], ['Scalable systems handle high transaction volumes', 'მასშტაბირებადი სისტემები უმკლავდება ტრანზაქციების დიდ მოცულობას.', 'volumes']]],

    ['C1', 'აღმასრულებელი პრეზენტაცია და საჯარო გამოსვლა', 'კომიტეტისა და მენეჯმენტის წინაშე რთული ანალიტიკის მოკლედ და დამაჯერებლად წარდგენა.', '„Executive summary“ არის დოკუმენტის მოკლე შეჯამება მთავარი გადაწყვეტილების მიმღებთათვის.',
      [['Executive summary', 'აღმასრულებელი შეჯამება'], ['Compelling narrative', 'დამაჯერებელი თხრობა'], ['Key takeaway', 'მთავარი დასკვნა / სათქმელი'], ['Anticipate questions', 'კითხვების წინასწარ გათვლა'], ['Concise overview', 'ლაკონიური მიმოხილვა'], ['Actionable recommendation', 'პრაქტიკულად განხორციელებადი რეკომენდაცია']],
      [['Start the presentation with a concise executive summary', 'დაიწყეთ პრეზენტაცია ლაკონიური აღმასრულებელი შეჯამებით.', 'concise'], ['Every chart should highlight a clear takeaway', 'ყველა გრაფიკი უნდა გამოკვეთდეს მკაფიო დასკვნას.', 'highlight'], ['He answered the committee questions with confidence', 'მან კომიტეტის კითხვებს თავდაჯერებულად უპასუხა.', 'confidence']]],

    // ==================== C2 (Units 51 - 60) ====================
    ['C2', 'დიპლომატიური ნიუანსები და სტრატეგიული კომუნიკაცია', 'რთული მოლაპარაკებების წარმართვა უმაღლესი ტაქტითა და სიზუსტით.', '„Tactful“ ნიშნავს ტაქტიანს, ხოლო „nuanced“ — ნიუანსირებულს, მრავალწახნაგოვანს.',
      [['Nuanced perspective', 'ნიუანსირებული ხედვა'], ['Diplomatic finesse', 'დიპლომატიური ოსტატობა'], ['Read between the lines', 'სტრიქონებს შორის აზრის ამოკითხვა'], ['Pragmatic compromise', 'პრაგმატული კომპრომისი'], ['Defuse tension', 'დაძაბულობის განმუხტვა'], ['Subtle implication', 'ნატიფი / ფარული ქვეტექსტი']],
      [['Seasoned negotiators read between the lines effortlessly', 'გამოცდილი მომლაპარაკებლები სტრიქონებს შორის აზრს უშეცდომოდ კითხულობენ.', 'effortlessly'], ['His tactful remark defused the tension in the room', 'მისმა ტაქტიანმა შენიშვნამ ოთახში დაძაბულობა განმუხტა.', 'tension'], ['Complex issues require a nuanced approach', 'რთული საკითხები მოითხოვს ნიუანსირებულ მიდგომას.', 'nuanced']]],

    ['C2', 'იდიომატური სიზუსტე და მეტაფორული აზროვნება', 'მშობლიური მოსაუბრის დონის იდიომები ანალიტიკურ და პროფესიულ კონტექსტში.', '„A double-edged sword“ (ორლესული მახვილი) აღნიშნავს მოვლენას, რომელსაც თანაბრად აქვს პლუსიც და რისკიც.',
      [['A double-edged sword', 'ორლესული მახვილი'], ['Weather the storm', 'რთული პერიოდის / კრიზისის გადატანა'], ['Raise the bar', 'სტანდარტის / თამასის აწევა'], ['By the same token', 'ამავე მიზეზით / იმავდროულად'], ['Par for the course', 'ჩვეულებრივი / მოსალოდნელი მოვლენა'], ['Cut to the chase', 'პირდაპირ მთავარ სათქმელზე გადასვლა']],
      [['High financial leverage can be a double edged sword', 'მაღალი ფინანსური ლევერიჯი შეიძლება ორლესული მახვილი იყოს.', 'leverage'], ['Strong reserves helped the bank weather the storm', 'ძლიერმა რეზერვებმა ბანკს კრიზისის გადატანაში შეუწყო ხელი.', 'weather'], ['Let us cut to the chase and review the numbers', 'პირდაპირ მთავარზე გადავიდეთ და ციფრებს გადავხედოთ.', 'chase']]],

    ['C2', 'ესთეტიკა, პოეზია და მუსიკალური თვითგამოხატვა', 'ხელოვნების ფილოსოფია, რიტმი, ლირიკა და კულტურული მეხსიერება.', '„Evocative“ აღწერს მუსიკას ან ტექსტს, რომელიც ცოცხალ სურათებსა და ემოციებს აღძრავს.',
      [['Aesthetic discernment', 'ესთეტიკური გარჩევის უნარი'], ['Evocative imagery', 'შთამბეჭდავი მხატვრული სახეები'], ['Poetic cadence', 'პოეტური რიტმი / ინტონაცია'], ['Cultural memory', 'კულტურული მეხსიერება'], ['Ephemeral trend', 'წარმავალი ტენდენცია'], ['Timeless resonance', 'მარადიული ჟღერადობა']],
      [['Authentic poetry carries a timeless emotional resonance', 'ავთენტური პოეზია ატარებს მარადიულ ემოციურ მუხტს.', 'resonance'], ['Traditional melodies preserve collective cultural memory', 'ტრადიციული მელოდიები ინახავს კოლექტიურ კულტურულ მეხსიერებას.', 'preserve'], ['True artistry transcends ephemeral popularity', 'ჭეშმარიტი ხელოვნება სცდება წარმავალ პოპულარობას.', 'transcends']]],

    ['C2', 'სამართლებრივი სიზუსტე და მარეგულირებელი გარემო', 'უმაღლესი იურიდიული და საბანკო რეგულაციების ენა.', '„Unambiguous“ ნიშნავს სრულიად ცალსახას, რომელიც ორმაგ ინტერპრეტაციას გამორიცხავს.',
      [['Unambiguous wording', 'ცალსახა ფორმულირება'], ['Fiduciary duty', 'ფიდუციარული (ნდობითი) ვალდებულება'], ['Stringent oversight', 'მკაცრი ზედამხედველობა'], ['Due diligence', 'საფუძვლიანი წინასწარი შემოწმება'], ['Indemnify against loss', 'ზარალის ანაზღაურების გარანტია'], ['Statutory compliance', 'საკანონმდებლო შესაბამისობა']],
      [['Contracts must be drafted in unambiguous language', 'კონტრაქტები უნდა შედგეს ცალსახა, მკაფიო ენით.', 'unambiguous'], ['Banks operate under stringent regulatory oversight', 'ბანკები მუშაობენ მკაცრი მარეგულირებელი ზედამხედველობის ქვეშ.', 'stringent'], ['Meticulous due diligence precedes every major transaction', 'ყველა მსხვილ გარიგებას წინ უძღვის ზედმიწევნითი შემოწმება.', 'precedes']]],

    ['C2', 'ფინანსური არქიტექტურა და სისტემური მდგრადობა', 'საბანკო სისტემების მდგრადობა, კაპიტალის ადეკვატურობა და გრძელვადიანი სტრატეგია.', '„Prudent“ ნიშნავს წინდახედულს, გონივრულად ფრთხილს.',
      [['Capital adequacy', 'კაპიტალის ადეკვატურობა'], ['Systemic stability', 'სისტემური სტაბილურობა'], ['Prudent underwriting', 'წინდახედული რისკის შეფასება'], ['Countercyclical buffer', 'კონტრციკლური ბუფერი'], ['Solvency threshold', 'გადახდისუნარიანობის ზღვარი'], ['Macroprudential framework', 'მაკროპრუდენციული ჩარჩო']],
      [['Prudent underwriting standards safeguard asset quality', 'წინდახედული შეფასების სტანდარტები იცავს აქტივების ხარისხს.', 'safeguard'], ['Strong capital buffers ensure systemic stability', 'კაპიტალის ძლიერი ბუფერები უზრუნველყოფს სისტემურ სტაბილურობას.', 'stability'], ['Analysts scrutinize solvency ratios across economic cycles', 'ანალიტიკოსები სწავლობენ გადახდისუნარიანობის კოეფიციენტებს.', 'cycles']]],

    ['C2', 'ფორმალური კავშირებითი კილო — The Subjunctive', 'It is imperative that..., We insist that... სტრუქტურები ოფიციალურ დოკუმენტებში.', 'Subjunctive-ში that-ის შემდეგ ზმნა დგება საწყის ფორმაში: It is vital that he be informed.',
      [['It is imperative that', 'სასიცოცხლოდ აუცილებელია, რომ'], ['It is paramount that', 'უზენაესად მნიშვნელოვანია, რომ'], ['Insist that it be', 'დაჟინებით მოთხოვნა, რომ იყოს'], ['Lest it cause', 'რათა არ გამოიწვიოს'], ['Be that as it may', 'როგორც არ უნდა იყოს'], ['Suffice it to say', 'საკმარისია ითქვას']],
      [['It is imperative that every risk factor be disclosed', 'აუცილებელია, რომ ყველა რისკ-ფაქტორი იყოს გამჟღავნებული.', 'disclosed'], ['The auditor recommended that the policy be revised', 'აუდიტორმა გასცა რეკომენდაცია, რომ პოლიტიკა გადაიხედოს.', 'revised'], ['Be that as it may our core strategy remains unchanged', 'როგორც არ უნდა იყოს, ჩვენი ძირითადი სტრატეგია უცვლელი რჩება.', 'remains']]],

    ['C2', 'რიტორიკული სინტაქსი და Cleft კონსტრუქციები', 'აზრის ლოგიკური და ემოციური ფოკუსირება What... is და It was... that კონსტრუქციებით.', 'Cleft წინადადება საშუალებას გაძლევთ მსმენელის ყურადღება მიაპყროთ ზუსტად ერთ კონკრეტულ ფაქტორს.',
      [['What distinguishes ... is', 'ის, რაც განასხვავებს ... არის'], ['It is precisely because', 'სწორედ იმიტომ, რომ'], ['Had it not been for', 'რომ არ ყოფილიყო'], ['Albeit to a lesser extent', 'თუმცა უფრო მცირე ხარისხით'], ['Inextricably intertwined', 'განუყოფლად გადაჯაჭვული'], ['Unequivocal endorsement', 'ცალსახა მხარდაჭერა']],
      [['What distinguishes great leaders is emotional composure', 'ის, რაც დიდ ლიდერებს გამოარჩევს, არის ემოციური სიმშვიდე.', 'composure'], ['Had it not been for rigorous preparation we would have struggled', 'მკაცრი მომზადება რომ არა, გაგვიჭირდებოდა.', 'rigorous'], ['Theory and practice are inextricably intertwined', 'თეორია და პრაქტიკა განუყოფლად არის გადაჯაჭვული.', 'intertwined']]],

    ['C2', 'ფილოსოფიური დისკურსი, ეთიკა და პასუხისმგებლობა', 'გადაწყვეტილების მიღების ეთიკა, გრძელვადიანი ხედვა და პრინციპულობა.', '„Integrity“ ნიშნავს კეთილსინდისიერებას, მორალურ სიმტკიცესა და პატიოსნებას.',
      [['Unwavering integrity', 'ურყევი კეთილსინდისიერება'], ['Ethical imperative', 'ეთიკური იმპერატივი / ვალდებულება'], ['Intellectual humility', 'ინტელექტუალური თავმდაბლობა'], ['Long-term stewardship', 'გრძელვადიანი პასუხისმგებლობიანი მართვა'], ['Moral courage', 'მორალური გამბედაობა'], ['Conscientious rigor', 'კეთილსინდისიერი სიზუსტე']],
      [['Unwavering integrity is the foundation of reputation', 'ურყევი კეთილსინდისიერება რეპუტაციის საძირკველია.', 'integrity'], ['True expertise requires intellectual humility', 'ჭეშმარიტი ექსპერტობა მოითხოვს ინტელექტუალურ თავმდაბლობას.', 'humility'], ['Every decision carries long term ethical implications', 'ყველა გადაწყვეტილებას ახლავს გრძელვადიანი ეთიკური შედეგები.', 'implications']]],

    ['C2', 'სტილისტური ოსტატობა და ანალიტიკური ესეისტიკა', 'რთული ტექსტების სინთეზი, ლაკონიურობა და აკადემიური ელეგანტურობა.', '„Cogent argument“ ნიშნავს ლოგიკურად გამართულ, უაღრესად დამაჯერებელ არგუმენტს.',
      [['Cogent argument', 'მწყობრი და დამაჯერებელი არგუმენტი'], ['Incisive analysis', 'ღრმა / გამჭრიახი ანალიზი'], ['Lucid explanation', 'ნათელი და გასაგები ახსნა'], ['Synthesize information', 'ინფორმაციის სინთეზი / შეჯერება'], ['Nuanced critique', 'დახვეწილი კრიტიკული შეფასება'], ['Stylistic precision', 'სტილისტური სიზუსტე']],
      [['She presented a cogent and well structured argument', 'მან წარმოადგინა დამაჯერებელი და გამართული არგუმენტი.', 'cogent'], ['Lucid writing makes complex ideas accessible', 'ნათელი წერის სტილი რთულ იდეებს გასაგებს ხდის.', 'accessible'], ['The report offers an incisive analysis of the market', 'ანგარიში გვთავაზობს ბაზრის გამჭრიახ ანალიზს.', 'incisive']]],

    ['C2', 'C2 სრული ოსტატობის შემაჯამებელი მწვერვალი', 'ყველა საფეხურის (A1–C2) უმაღლესი სინთეზი: თავისუფალი, ბუნებრივი და ზუსტი ინგლისური.', 'გილოცავთ მე-60 იუნიტამდე მოსვლას! თანმიმდევრულობა ყოველთვის იმარჯვებს.',
      [['Command of the language', 'ენის სრულყოფილი ფლობა'], ['Deliberate practice', 'მიზანმიმართული ვარჯიში'], ['Relentless consistency', 'უწყვეტი თანმიმდევრულობა'], ['Culmination of effort', 'ძალისხმევის კულმინაცია / შედეგი'], ['Lifelong learning', 'მუდმივი სწავლა და განვითარება'], ['Mastery achieved', 'მიღწეული ოსტატობა']],
      [['Mastery is the culmination of consistent daily effort', 'ოსტატობა არის ყოველდღიური თანმიმდევრული შრომის შედეგი.', 'culmination'], ['Fluent communication opens global opportunities', 'თავისუფალი კომუნიკაცია ხსნის გლობალურ შესაძლებლებებს.', 'opportunities'], ['Deliberate practice transforms potential into excellence', 'მიზანმიმართული ვარჯიში პოტენციალს სრულყოფილებად აქცევს.', 'excellence']]]
  ];

  // სიტუაციური დიალოგების ბანკი დონეების მიხედვით (Node 7-ისთვის)
  const LEVEL_DIALOGUES = {
    A1: [
      { speakerA: 'Hello! Welcome to Tbilisi. Where are you from?', kaA: 'გამარჯობა! კეთილი იყოს თქვენი მობრძანება თბილისში. საიდან ხართ?', replyEn: 'Thank you! I am from Germany.', replyKa: 'გმადლობთ! მე გერმანიიდან ვარ.', wrong1: 'I am twenty five years old.', wrong2: 'See you yesterday.', wrong3: 'Yes, I have a brother.' },
      { speakerA: 'Excuse me, what time does the bank open?', kaA: 'უკაცრავად, რომელ საათზე იხსნება ბანკი?', replyEn: 'It opens at nine o\'clock in the morning.', replyKa: 'დილის 9 საათზე იხსნება.', wrong1: 'It is across the street.', wrong2: 'Yes, I can pay by card.', wrong3: 'My name is Alex.' },
      { speakerA: 'Would you like some coffee or tea?', kaA: 'ყავას ინებებთ თუ ჩაის?', replyEn: 'Black coffee without sugar, please.', replyKa: 'შავი ყავა უშაქროდ, თუ შეიძლება.', wrong1: 'Where is the metro station?', wrong2: 'I wake up early every day.', wrong3: 'The chair is very comfortable.' }
    ],
    A2: [
      { speakerA: 'Good morning! May I see your passport and boarding pass?', kaA: 'დილა მშვიდობისა! შეიძლება ვნახო თქვენი პასპორტი და ჩასხდომის ბარათი?', replyEn: 'Here they are. Could I have a window seat, please?', replyKa: 'ინებეთ. შეიძლება ადგილი ფანჯარასთან მქონდეს?', wrong1: 'I bought this jacket yesterday.', wrong2: 'The train was faster than the bus.', wrong3: 'I train three times a week.' },
      { speakerA: 'Hi! Do you have a reservation at our hotel?', kaA: 'გამარჯობა! გაქვთ ჯავშანი ჩვენს სასტუმროში?', replyEn: 'Yes, I booked a double room for three nights.', replyKa: 'დიახ, სამი ღამით ორადგილიანი ნომერი დავჯავშნე.', wrong1: 'The concert was sold out.', wrong2: 'Pass the national exam first.', wrong3: 'Fasten your seatbelt please.' }
    ],
    B1: [
      { speakerA: 'How do you usually track your monthly travel expenses?', kaA: 'როგორ აღრიცხავთ ხოლმე ყოველთვიურ სამოგზაურო ხარჯებს?', replyEn: 'I use an automated Telegram bot and a spreadsheet.', replyKa: 'ვიყენებ ავტომატიზებულ ტელეგრამ-ბოტს და ელექტრონულ ცხრილს.', wrong1: 'The parcel arrived at the warehouse.', wrong2: 'We watched the final at the stadium.', wrong3: 'Please turn left at the corner.' },
      { speakerA: 'Have you finished the financial report for Friday\'s deadline?', kaA: 'დაასრულეთ ფინანსური ანგარიში პარასკევის დედლაინისთვის?', replyEn: 'Yes, I have already sent the file attachment by email.', replyKa: 'დიახ, ფაილი უკვე გავაგზავნე ელფოსტის დანართით.', wrong1: 'I will go to school yesterday.', wrong2: 'The headphones have good battery life.', wrong3: 'Traditional folk music is very warm.' }
    ],
    B2: [
      { speakerA: 'What is the main risk factor in this supplier financing proposal?', kaA: 'რა არის მთავარი რისკ-ფაქტორი მომწოდებლის დაფინანსების ამ პროექტში?', replyEn: 'The borrower relies on a single buyer, which could create a liquidity bottleneck.', replyKa: 'მსესხებელი დამოკიდებულია ერთ მყიდველზე, რამაც შეიძლება ლიკვიდურობის შეფერხება შექმნას.', wrong1: 'We booked train tickets to Hamburg in advance.', wrong2: 'The living room has a bright window.', wrong3: 'She drinks coffee every morning.' },
      { speakerA: 'Should we approve the construction loan in a single disbursement?', kaA: 'ერთიანად გავცეთ სამშენებლო სესხის თანხა?', replyEn: 'No, it is safer to link loan tranches to verified construction milestones.', replyKa: 'არა, უფრო უსაფრთხოა ტრანშების მიბმა მშენებლობის დადასტურებულ ეტაპებზე.', wrong1: 'The weather in autumn is quite chilly.', wrong2: 'What shoe size do you wear?', wrong3: 'He can solve the puzzle quickly.' }
    ],
    C1: [
      { speakerA: 'How has the transition to a hybrid work model affected your team?', kaA: 'როგორ იმოქმედა ჰიბრიდულ სამუშაო მოდელზე გადასვლამ თქვენს გუნდზე?', replyEn: 'Not only did autonomy increase, but outcome-based productivity also improved.', replyKa: 'არა მხოლოდ დამოუკიდებლობა გაიზარდა, არამედ შედეგზე დაფუძნებული პროდუქტიულობაც გაუმჯობესდა.', wrong1: 'We had lunch at the café downstairs.', wrong2: 'Please lock the door when you leave.', wrong3: 'The bus departs from platform two.' },
      { speakerA: 'Do these preliminary survey figures prove a causal link?', kaA: 'ამტკიცებს თუ არა ეს წინასწარი მონაცემები მიზეზ-შედეგობრივ კავშირს?', replyEn: 'They suggest a correlation, albeit further empirical research is required.', replyKa: 'ისინი მიუთითებს კორელაციაზე, თუმცა საჭიროა დამატებითი ემპირიული კვლევა.', wrong1: 'I wear size forty-three shoes.', wrong2: 'Turn off notifications at night.', wrong3: 'The stadium is ten minutes away.' }
    ],
    C2: [
      { speakerA: 'How should the legal committee phrase the warranty clause?', kaA: 'როგორ უნდა ჩამოაყალიბოს იურიდიულმა კომიტეტმა საგარანტიო მუხლი?', replyEn: 'It is imperative that the wording be completely unambiguous to preclude disputes.', replyKa: 'სასიცოცხლოდ აუცილებელია, რომ ფორმულირება იყოს სრულიად ცალსახა დავების გამოსარიცხად.', wrong1: 'We bought souvenirs at the airport.', wrong2: 'She works at a big bank.', wrong3: 'Drink three liters of water daily.' },
      { speakerA: 'What ultimately distinguishes a resilient financial institution during volatility?', kaA: 'რა გამოარჩევს საბოლოოდ მედეგ ფინანსურ ინსტიტუტს ბაზრის მერყეობისას?', replyEn: 'What safeguards solvency is prudent underwriting combined with countercyclical buffers.', replyKa: 'ის, რაც იცავს გადახდისუნარიანობას, არის წინდახედული შეფასება და კონტრციკლური ბუფერები.', wrong1: 'My brother passed his exams.', wrong2: 'Open the window for fresh air.', wrong3: 'The train arrives at seven.' }
    ]
  };

  // მახე-სიტყვების (Distractors) ბანკი წინადადების აწყობის გასართულებლად
  const TRAP_WORDS_BY_LEVEL = {
    A1: ['yesterday', 'never', 'under', 'tables', 'going', 'were', 'blue', 'ten'],
    A2: ['although', 'luggage', 'fastest', 'bought', 'while', 'unless', 'tickets', 'museum'],
    B1: ['however', 'database', 'forwards', 'rarely', 'despite', 'parcel', 'stadium', 'would'],
    B2: ['notwithstanding', 'collateral', 'albeit', 'tranches', 'whereas', 'defaulted', 'having', 'clause'],
    C1: ['seldom', 'empirical', 'whereby', 'mitigated', 'paradigm', 'autonomy', 'corroborated', 'hence'],
    C2: ['imperative', 'unequivocal', 'ephemeral', 'fiduciary', 'intertwined', 'lest', 'stipulated', 'acumen']
  };

  const CURRICULUM_UNITS = RAW_UNITS.map((row, idx) => {
    const unitNum = idx + 1;
    const wordsObjs = row[4].map((pair) => ({ en: pair[0], ka: pair[1] }));
    const sentsObjs = row[5].map((s) => ({
      en: s[0],
      ka: s[1],
      blank: s[2],
      hint: 'საკვანძო სიტყვა წინადადებიდან'
    }));

    return {
      id: 'unit-' + unitNum,
      unitNumber: unitNum,
      level: row[0],
      title: row[1],
      desc: row[2],
      tip: row[3],
      words: wordsObjs,
      sentences: sentsObjs
    };
  });

  const ORDERED_NODES = [];
  CURRICULUM_UNITS.forEach((u) => {
    NODE_TEMPLATES.forEach((nt) => {
      ORDERED_NODES.push({
        globalIndex: ORDERED_NODES.length,
        nodeId: u.id + '-n' + nt.index,
        unitId: u.id,
        unitNumber: u.unitNumber,
        level: u.level,
        unitTitle: u.title,
        nodeIndex: nt.index,
        nodeTitle: nt.title
      });
    });
  });

  let activeLevelFilter = 'ALL';
  let levelFilterInitializedFor = null; // რომელი დონისთვის შეირჩა ჩანართი ავტომატურად
  let activeSession = null;

  const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  // მომხმარებლის დონე (დონის ტესტიდან ან პარამეტრებიდან) — უფრო დაბალი დონეების იუნიტები ღიაა
  function getUserLevelIndex() {
    const lvl = App.Storage && App.Storage.get('progress.level', 'A1');
    return Math.max(0, LEVEL_ORDER.indexOf(lvl));
  }

  const Learn = {
    getNodeCrownsMap: function () {
      const map = App.Storage.get('progress.nodeCrowns', {});
      return (map && typeof map === 'object') ? map : {};
    },

    getNodeCrownCount: function (nodeId) {
      const map = this.getNodeCrownsMap();
      return Math.min(CROWNS_PER_NODE, Number(map[nodeId]) || 0);
    },

    isNodeUnlocked: function (globalIndex) {
      if (globalIndex <= 0) return true;
      const node = ORDERED_NODES[globalIndex];
      const prevNode = ORDERED_NODES[globalIndex - 1];
      if (!prevNode) return true;
      const userLvlIdx = getUserLevelIndex();
      const nodeLvlIdx = node ? LEVEL_ORDER.indexOf(node.level) : 0;
      // დაბალი დონეები ღიაა, ხოლო მომხმარებლის დონის პირველი კვანძიდან შეიძლება დაწყება
      if (nodeLvlIdx < userLvlIdx) return true;
      if (nodeLvlIdx === userLvlIdx && prevNode.level !== node.level) return true;
      return this.getNodeCrownCount(prevNode.nodeId) >= 1;
    },

    getCurrentFrontierNodeId: function () {
      const userLvlIdx = getUserLevelIndex();
      for (let i = 0; i < ORDERED_NODES.length; i++) {
        const n = ORDERED_NODES[i];
        if (LEVEL_ORDER.indexOf(n.level) < userLvlIdx) continue;
        if (this.getNodeCrownCount(n.nodeId) === 0) {
          return n.nodeId;
        }
      }
      return ORDERED_NODES[ORDERED_NODES.length - 1].nodeId;
    },

    // რეგისტრაციის/დონის ტესტის შემდეგ იხსნება შესაბამისი დონის ჩანართი
    setActiveLevelTab: function (level) {
      if (LEVEL_ORDER.indexOf(level) !== -1) {
        activeLevelFilter = level;
        levelFilterInitializedFor = level;
      }
    },

    incrementNodeCrown: function (nodeId) {
      const map = this.getNodeCrownsMap();
      const current = Number(map[nodeId]) || 0;
      map[nodeId] = Math.min(CROWNS_PER_NODE, current + 1);
      App.Storage.set('progress.nodeCrowns', map);

      const completedIds = App.Storage.get('progress.completedLessonIds', []);
      const safeList = Array.isArray(completedIds) ? completedIds : [];
      const uniqueLessonKey = nodeId + '-c' + map[nodeId];
      if (safeList.indexOf(uniqueLessonKey) === -1) {
        safeList.push(uniqueLessonKey);
        App.Storage.set('progress.completedLessonIds', safeList);
      }
      return map[nodeId];
    },

    speak: function (text, slowMode) {
      if (!('speechSynthesis' in window)) return;
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = slowMode ? 0.62 : 0.94;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    },

    /**
     * აგროვებს იუნიტის გაფართოებულ ბაზას (20+ უნიკალური სიტყვა და 12+ უნიკალური წინადადება),
     * რათა 8-ვე საფეხურს (Node 1..8) ჰქონდეს საკუთარი, განსხვავებული მასალა და არაფერი განმეორდეს მექანიკურად!
     */
    getExpandedUnitPool: function (unit) {
      const poolWords = unit.words.slice();
      const poolSentences = unit.sentences.slice();

      // დავამატოთ იმავე დონის მეზობელი იუნიტებისა და 360-სიტყვიანი ლექსიკონის მასალა
      if (App.Vocabulary && typeof App.Vocabulary.getWordsForUnitNumber === 'function') {
        const unitPackWords = App.Vocabulary.getWordsForUnitNumber(unit.unitNumber);
        unitPackWords.forEach((vItem) => {
          if (vItem && !poolWords.some((pw) => pw.en.toLowerCase() === vItem.word.toLowerCase())) {
            poolWords.push({ en: vItem.word, ka: vItem.ka });
          }
        });
      }

      // ასევე დავამატოთ იმავე დონის სხვა იუნიტებიდან დამატებითი წინადადებები მრავალფეროვნებისთვის
      const sameLevelUnits = CURRICULUM_UNITS.filter((u) => u.level === unit.level && u.id !== unit.id);
      sameLevelUnits.forEach((otherU) => {
        otherU.words.forEach((w) => {
          if (poolWords.length < 24 && !poolWords.some((pw) => pw.en === w.en)) {
            poolWords.push(w);
          }
        });
        otherU.sentences.forEach((s) => {
          if (poolSentences.length < 15 && !poolSentences.some((ps) => ps.en === s.en)) {
            poolSentences.push(s);
          }
        });
      });

      return {
        words: poolWords,       // ~20-24 უნიკალური სიტყვა/ფრაზა
        sentences: poolSentences // ~12-15 უნიკალური წინადადება
      };
    },

    /**
     * ქმნის MCQ სავარჯიშოს სრულად დარენდომებული ვარიანტებით
     */
    makeMcqStep: function (questionText, speakPrompt, correctAnswer, distractorPool, explanationText) {
      const uniqueDistractors = shuffleArray(
        distractorPool.filter((d) => d && d.toLowerCase() !== correctAnswer.toLowerCase())
      ).slice(0, 3);

      const allOptions = shuffleArray([correctAnswer].concat(uniqueDistractors));
      return {
        type: 'mcq',
        question: questionText,
        speakPrompt: speakPrompt || '',
        options: allOptions,
        correctIndex: allOptions.indexOf(correctAnswer),
        explanation: explanationText
      };
    },

    /**
     * ქმნის წყვილების (Matching Pairs) ნაბიჯს ნამდვილი Fisher-Yates რანდომიზაციით
     */
    makePairsStep: function (title, pairItems) {
      const selected = shuffleArray(pairItems).slice(0, 5);
      const cols = createRandomizedPairColumns(selected.length);
      return {
        type: 'pairs',
        title: title,
        pairs: selected,
        leftOrder: cols.leftOrder,
        rightOrder: cols.rightOrder
      };
    },

    /**
     * ქმნის წინადადების აწყობის ნაბიჯს (სურვილისამებრ მახე-სიტყვებით!)
     */
    makeSentenceStep: function (sentObj, level, addTrapsCount) {
      const correctWords = sentObj.en.split(' ').filter(Boolean);
      let bankWords = correctWords.slice();

      if (addTrapsCount > 0) {
        const trapsPool = (TRAP_WORDS_BY_LEVEL[level] || TRAP_WORDS_BY_LEVEL.A1).filter(
          (tw) => !correctWords.some((cw) => cw.toLowerCase() === tw.toLowerCase())
        );
        bankWords = bankWords.concat(shuffleArray(trapsPool).slice(0, addTrapsCount));
      }

      let shuffledBank = shuffleArray(bankWords);
      // დავრწმუნდეთ, რომ შემთხვევით უკვე აწყობილი წყობით არ დალაგდა
      if (shuffledBank.join(' ') === correctWords.join(' ') && shuffledBank.length > 1) {
        const first = shuffledBank.shift();
        shuffledBank.push(first);
      }

      return {
        type: 'sentence',
        promptKa: 'ააწყვეთ ინგლისურად: „' + sentObj.ka + '“',
        hasTraps: addTrapsCount > 0,
        words: shuffledBank,
        answer: sentObj.en,
        explanation: 'სწორი წინადადება: «' + sentObj.en + '»'
      };
    },

    /**
     * თითოეული საფეხურისთვის (Node 0..7) და გვირგვინისთვის (Crown 1..5)
     * აგენერირებს უნიკალურ, არაგანმეორებად და რანდომიზებულ გაკვეთილს!
     */
    buildSessionSteps: function (unit, nodeIdx, crownLevel) {
      const pool = this.getExpandedUnitPool(unit);
      const allW = pool.words;
      const allS = pool.sentences;
      const allKaDistractors = allW.map((x) => x.ka);
      const allEnDistractors = allW.map((x) => x.en);
      const trapsCount = crownLevel >= 2 ? 2 : 0;

      const steps = [];

      // ==================== საფეხური 1 (Node 0): ლექსიკა — ნაწილი I (სიტყვები 0..5) ====================
      if (nodeIdx === 0) {
        const sliceW = allW.slice(0, 6);
        const sliceS = allS.slice(0, 3);

        if (crownLevel === 1) {
          steps.push({
            type: 'theory',
            title: 'ნაწილი I — ძირითადი ლექსიკა: ' + unit.title,
            intro: '💡 გრამატიკული მინიშნება: ' + unit.tip,
            phrases: sliceW
          });
        }

        const pickedW = shuffleArray(sliceW);
        steps.push(this.makeMcqStep(
          'რას ნიშნავს ქართულად: „' + pickedW[0].en + '“?',
          pickedW[0].en,
          pickedW[0].ka,
          allKaDistractors,
          '„' + pickedW[0].en + '“ ნიშნავს: „' + pickedW[0].ka + '“.'
        ));

        steps.push(this.makeMcqStep(
          'როგორ იტყვით ინგლისურად: „' + pickedW[1].ka + '“?',
          '',
          pickedW[1].en,
          allEnDistractors,
          '„' + pickedW[1].ka + '“ ინგლისურად არის: „' + pickedW[1].en + '“.'
        ));

        steps.push(this.makePairsStep('დააკავშირეთ I ნაწილის წყვილები', sliceW));

        const sPick = shuffleArray(sliceS)[0] || allS[0];
        steps.push(this.makeSentenceStep(sPick, unit.level, trapsCount));

        steps.push({
          type: 'type_word',
          promptKa: 'ჩაწერეთ ინგლისურად: „' + pickedW[2].ka + '“',
          answer: pickedW[2].en,
          hint: 'იწყება ასოთი: "' + pickedW[2].en.charAt(0) + '" (' + pickedW[2].en.length + ' სიმბოლო)',
          explanation: 'სწორი ფორმაა: ' + pickedW[2].en
        });
      }

      // ==================== საფეხური 2 (Node 1): ლექსიკა — ნაწილი II (ახალი სიტყვები 6..11!) ====================
      else if (nodeIdx === 1) {
        const sliceW = allW.slice(6, 12).length >= 5 ? allW.slice(6, 12) : shuffleArray(allW).slice(0, 6);
        const sliceS = allS.slice(3, 6).length >= 2 ? allS.slice(3, 6) : shuffleArray(allS).slice(0, 3);

        if (crownLevel === 1) {
          steps.push({
            type: 'theory',
            title: 'ნაწილი II — ახალი სიტყვები და ფრაზები',
            intro: 'გაეცანით იუნიტის მეორე ნაწილის ახალ ლექსიკას (მოუსმინეთ გამოთქმას):',
            phrases: sliceW
          });
        }

        const pickedW = shuffleArray(sliceW);
        steps.push(this.makeMcqStep(
          'აირჩიეთ სწორი ქართული თარგმანი: „' + pickedW[0].en + '“',
          pickedW[0].en,
          pickedW[0].ka,
          allKaDistractors,
          '„' + pickedW[0].en + '“ — ' + pickedW[0].ka
        ));

        steps.push(this.makePairsStep('დააკავშირეთ II ნაწილის ახალი სიტყვები', sliceW));

        steps.push(this.makeMcqStep(
          'როგორ ითარგმნება ინგლისურად: „' + pickedW[1].ka + '“?',
          '',
          pickedW[1].en,
          allEnDistractors,
          'სწორი პასუხია: ' + pickedW[1].en
        ));

        const s1 = sliceS[0] || allS[0];
        const s2 = sliceS[1] || allS[1 % allS.length];
        steps.push(this.makeSentenceStep(s1, unit.level, trapsCount));

        const parts = s2.en.split(new RegExp('\\b' + s2.blank + '\\b', 'i'));
        steps.push({
          type: 'fill',
          promptKa: 'შეავსეთ გამოტოვებული სიტყვა: „' + s2.ka + '“',
          sentenceBefore: parts[0] || '',
          sentenceAfter: parts[1] || '',
          answer: s2.blank,
          hint: 'პირველი ასო: "' + s2.blank.charAt(0) + '"',
          explanation: 'სრული წინადადება: ' + s2.en
        });
      }

      // ==================== საფეხური 3 (Node 2): კონტექსტი — ნაწილი III (სიტყვები 12..17) ====================
      else if (nodeIdx === 2) {
        const sliceW = allW.slice(12, 18).length >= 5 ? allW.slice(12, 18) : shuffleArray(allW).slice(0, 6);
        const sliceS = shuffleArray(allS);

        if (crownLevel === 1) {
          steps.push({
            type: 'theory',
            title: 'ნაწილი III — კონტექსტური ლექსიკა',
            intro: 'მესამე ნაკადის სიტყვები, რომლებიც წინადადებების ასაგებად დაგჭირდებათ:',
            phrases: sliceW
          });
        }

        // კონტექსტური ჩასმა (Cloze MCQ)
        const sCloze1 = sliceS[0];
        const clozeSentence1 = sCloze1.en.replace(new RegExp('\\b' + sCloze1.blank + '\\b', 'i'), '_____');
        steps.push(this.makeMcqStep(
          'ჩასვით გამოტოვებული სიტყვა კონტექსტის მიხედვით: „' + clozeSentence1 + '“ (' + sCloze1.ka + ')',
          '',
          sCloze1.blank,
          allEnDistractors.map((x) => x.split(' ')[0]),
          'სრული წინადადება: ' + sCloze1.en
        ));

        steps.push(this.makePairsStep('დააკავშირეთ III ნაწილის ლექსიკა', sliceW));

        const sCloze2 = sliceS[1 % sliceS.length];
        steps.push(this.makeSentenceStep(sCloze2, unit.level, 2));

        const wTarget = shuffleArray(sliceW)[0];
        steps.push({
          type: 'type_word',
          promptKa: 'აკრიფეთ ინგლისურად: „' + wTarget.ka + '“',
          answer: wTarget.en,
          hint: 'პირველი ასო: "' + wTarget.en.charAt(0) + '"',
          explanation: 'სწორი პასუხია: ' + wTarget.en
        });
      }

      // ==================== საფეხური 4 (Node 3): 🎧 აუდიო აღქმა და კარნახი ====================
      else if (nodeIdx === 3) {
        const randW = shuffleArray(allW);
        const randS = shuffleArray(allS);

        // 1. მოუსმინეთ სიტყვას და აირჩიეთ
        steps.push({
          type: 'listen',
          audioText: randW[0].en,
          translationKa: randW[0].ka,
          options: shuffleArray([randW[0].en].concat(randW.slice(1, 4).map((x) => x.en))),
          correctIndex: -1, // ქვემოთ გასწორდება
          correctValue: randW[0].en,
          explanation: 'ჩანაწერში გაისმა: «' + randW[0].en + '» (' + randW[0].ka + ').'
        });

        // 2. აუდიო კარნახი (მოუსმინეთ და ჩაწერეთ რა გაიგონეთ — 🐢 ნელი ღილაკით!)
        steps.push({
          type: 'dictation',
          audioText: randW[1].en,
          translationKa: randW[1].ka,
          answer: randW[1].en,
          explanation: 'კარნახის ტექსტი: «' + randW[1].en + '» — ' + randW[1].ka
        });

        // 3. მოუსმინეთ მთლიან წინადადებას და აირჩიეთ მისი ქართული მნიშვნელობა
        const audioSent = randS[0];
        const sentKaDistractors = randS.slice(1, 4).map((x) => x.ka);
        steps.push(this.makeMcqStep(
          '🎧 მოუსმინეთ წინადადებას და აირჩიეთ მისი ზუსტი ქართული თარგმანი:',
          audioSent.en,
          audioSent.ka,
          sentKaDistractors,
          'გაისმა: «' + audioSent.en + '»'
        ));

        // 4. აუდიო კარნახი წინადადებაზე
        steps.push(this.makeSentenceStep(randS[1 % randS.length], unit.level, 1));

        // 5. მეორე აუდიო კარნახი
        steps.push({
          type: 'dictation',
          audioText: randW[2].en,
          translationKa: randW[2].ka,
          answer: randW[2].en,
          explanation: 'კარნახის ტექსტი: «' + randW[2].en + '» — ' + randW[2].ka
        });
      }

      // ==================== საფეხური 5 (Node 4): 🧩 წყვილების მარათონი (3 რანდომიზებული რაუნდი) ====================
      else if (nodeIdx === 4) {
        const shuffledW = shuffleArray(allW);
        steps.push(this.makePairsStep('რაუნდი 1/3: დააკავშირეთ ძირითადი ტერმინები', shuffledW.slice(0, 5)));
        steps.push(this.makePairsStep('რაუნდი 2/3: დააკავშირეთ მეორე ხუთეული', shuffledW.slice(5, 10)));

        const wCheck = shuffledW[10 % shuffledW.length];
        steps.push(this.makeMcqStep(
          'სწრაფი შემოწმება: როგორ იტყვით ინგლისურად „' + wCheck.ka + '“?',
          '',
          wCheck.en,
          allEnDistractors,
          'სწორია: ' + wCheck.en
        ));

        steps.push(this.makePairsStep('რაუნდი 3/3: ფინალური დაწყვილება', shuffleArray(allW).slice(0, 5)));
      }

      // ==================== საფეხური 6 (Node 5): ✍️ სინტაქსი, მახე-სიტყვები და აქტიური წერა ====================
      else if (nodeIdx === 5) {
        const randS = shuffleArray(allS);
        const randW = shuffleArray(allW);

        // 3 წინადადება მახე-სიტყვებით (+2 ან +3 ზედმეტი სიტყვით)
        steps.push(this.makeSentenceStep(randS[0], unit.level, 2));

        steps.push({
          type: 'type_word',
          promptKa: 'მეხსიერებიდან ჩაწერეთ ინგლისურად: „' + randW[0].ka + '“',
          answer: randW[0].en,
          hint: 'პირველი ასო: "' + randW[0].en.charAt(0) + '"',
          explanation: 'სწორი ფორმაა: ' + randW[0].en
        });

        steps.push(this.makeSentenceStep(randS[1 % randS.length], unit.level, 3));

        const sFill = randS[2 % randS.length];
        const parts = sFill.en.split(new RegExp('\\b' + sFill.blank + '\\b', 'i'));
        steps.push({
          type: 'fill',
          promptKa: 'ჩაწერეთ გამოტოვებული სიტყვა: „' + sFill.ka + '“',
          sentenceBefore: parts[0] || '',
          sentenceAfter: parts[1] || '',
          answer: sFill.blank,
          hint: 'იწყება ასოთი "' + sFill.blank.charAt(0) + '"',
          explanation: 'სრული წინადადება: ' + sFill.en
        });

        steps.push(this.makeSentenceStep(randS[3 % randS.length], unit.level, 2));
      }

      // ==================== საფეხური 7 (Node 6): 🗣️ რეალური დიალოგი და კონტექსტი ====================
      else if (nodeIdx === 6) {
        const dialogues = LEVEL_DIALOGUES[unit.level] || LEVEL_DIALOGUES.A1;
        const shuffledDialogs = shuffleArray(dialogues);

        shuffledDialogs.forEach((d) => {
          const opts = shuffleArray([d.replyEn, d.wrong1, d.wrong2, d.wrong3]);
          steps.push({
            type: 'dialogue',
            speakerA: d.speakerA,
            kaA: d.kaA,
            replyKaHint: d.replyKa,
            options: opts,
            correctIndex: opts.indexOf(d.replyEn),
            explanation: 'ბუნებრივი პასუხია: «' + d.replyEn + '» (' + d.replyKa + ')'
          });
        });

        const randS = shuffleArray(allS);
        steps.push(this.makeSentenceStep(randS[0], unit.level, 2));
        steps.push(this.makePairsStep('დიალოგის საკვანძო ლექსიკა', shuffleArray(allW).slice(0, 5)));
      }

      // ==================== საფეხური 8 (Node 7): 🏆 იუნიტის შემაჯამებელი გამოცდა (Boss Trophy) ====================
      else {
        const randW = shuffleArray(allW);
        const randS = shuffleArray(allS);
        const dialogues = LEVEL_DIALOGUES[unit.level] || LEVEL_DIALOGUES.A1;
        const dPick = shuffleArray(dialogues)[0];

        steps.push(this.makeMcqStep(
          '🏆 გამოცდა (1/6): რას ნიშნავს „' + randW[0].en + '“?',
          randW[0].en,
          randW[0].ka,
          allKaDistractors,
          '„' + randW[0].en + '“ — ' + randW[0].ka
        ));

        steps.push(this.makePairsStep('🏆 გამოცდა (2/6): დააკავშირეთ ხუთივე წყვილი', randW.slice(1, 6)));

        steps.push({
          type: 'dictation',
          audioText: randW[6 % randW.length].en,
          translationKa: randW[6 % randW.length].ka,
          answer: randW[6 % randW.length].en,
          explanation: 'გაისმა: «' + randW[6 % randW.length].en + '»'
        });

        steps.push(this.makeSentenceStep(randS[0], unit.level, 2));

        if (dPick) {
          const dOpts = shuffleArray([dPick.replyEn, dPick.wrong1, dPick.wrong2, dPick.wrong3]);
          steps.push({
            type: 'dialogue',
            speakerA: dPick.speakerA,
            kaA: dPick.kaA,
            replyKaHint: dPick.replyKa,
            options: dOpts,
            correctIndex: dOpts.indexOf(dPick.replyEn),
            explanation: 'სწორი პასუხია: «' + dPick.replyEn + '»'
          });
        }

        const sFinal = randS[1 % randS.length];
        const parts = sFinal.en.split(new RegExp('\\b' + sFinal.blank + '\\b', 'i'));
        steps.push({
          type: 'fill',
          promptKa: '🏆 ფინალური კითხვა: ჩაწერეთ გამოტოვებული სიტყვა — „' + sFinal.ka + '“',
          sentenceBefore: parts[0] || '',
          sentenceAfter: parts[1] || '',
          answer: sFinal.blank,
          hint: 'პირველი ასო: "' + sFinal.blank.charAt(0) + '"',
          explanation: 'სრული წინადადება: ' + sFinal.en
        });
      }

      // გავასწოროთ listen ტიპის correctIndex თუ სადმე დარჩა
      steps.forEach((st) => {
        if (st.type === 'listen' && st.correctValue) {
          st.correctIndex = st.options.indexOf(st.correctValue);
        }
      });

      return steps;
    },

    /**
     * როცა მომხმარებელი შეცდომას უშვებს, კითხვის ასლი ემატება გაკვეთილის ბოლოში
     * (დარენდომებული ვარიანტებით), რათა სანამ სწორად არ უპასუხებს, გაკვეთილი არ დასრულდეს!
     */
    requeueMissedStep: function (step) {
      const clone = JSON.parse(JSON.stringify(step));
      clone.isRetry = true;
      if (clone.type === 'mcq' || clone.type === 'listen' || clone.type === 'dialogue') {
        const correctVal = clone.options[clone.correctIndex];
        clone.options = shuffleArray(clone.options);
        clone.correctIndex = clone.options.indexOf(correctVal);
      } else if (clone.type === 'sentence') {
        clone.words = shuffleArray(clone.words);
      }
      activeSession.steps.push(clone);
    },

    openUnitGuidebook: function (unitId) {
      const unit = CURRICULUM_UNITS.find((u) => u.id === unitId);
      if (!unit) return;

      const pool = this.getExpandedUnitPool(unit);
      const wordsHtml = pool.words.slice(0, 16).map((w) => {
        return (
          '<div style="display:flex; justify-content:space-between; padding:8px 10px; border-bottom:1px solid var(--border-subtle);">' +
            '<strong>' + App.UI.escapeHTML(w.en) + '</strong>' +
            '<span style="color:var(--brand-primary); font-weight:600;">' + App.UI.escapeHTML(w.ka) + '</span>' +
          '</div>'
        );
      }).join('');

      const sentsHtml = pool.sentences.slice(0, 6).map((s) => {
        return (
          '<div style="padding:8px 10px; background:var(--bg-surface-muted); border-radius:8px; margin-top:6px;">' +
            '<div style="font-weight:700;">' + App.UI.escapeHTML(s.en) + '</div>' +
            '<div style="font-size:0.84rem; color:var(--text-secondary);">' + App.UI.escapeHTML(s.ka) + '</div>' +
          '</div>'
        );
      }).join('');

      App.UI.openModal({
        title: '📖 გზამკვლევი — იუნიტი ' + unit.unitNumber + ' (' + unit.level + ')',
        confirmText: 'დახურვა',
        hideCancel: true,
        htmlContent:
          '<div style="max-height:62vh; overflow-y:auto; padding-right:4px;">' +
            '<p style="font-weight:800; color:var(--text-primary); margin-bottom:8px;">' + App.UI.escapeHTML(unit.title) + '</p>' +
            '<div style="padding:10px 12px; background:var(--brand-primary-soft); color:var(--brand-primary); border-radius:8px; font-size:0.86rem; margin-bottom:14px;">' +
              '<strong>💡 მინიშნება:</strong> ' + App.UI.escapeHTML(unit.tip) +
            '</div>' +
            '<h4 style="font-size:0.9rem; margin-bottom:6px;">იუნიტის სრული ლექსიკა (საფეხურები 1–8):</h4>' +
            '<div style="margin-bottom:14px;">' + wordsHtml + '</div>' +
            '<h4 style="font-size:0.9rem; margin-bottom:6px;">სანიმუშო წინადადებები:</h4>' +
            sentsHtml +
          '</div>'
      });
    },

    render: function () {
      const container = document.getElementById('app-view');
      if (!container) return;

      if (activeSession) {
        this.renderLessonPlayer(container);
        return;
      }

      // პირველ გახსნაზე (ან დონის შეცვლის შემდეგ) ვაჩვენებთ მომხმარებლის დონის იუნიტებს (A1-ზე — ყველას)
      const userLvlIdx = getUserLevelIndex();
      if (levelFilterInitializedFor !== LEVEL_ORDER[userLvlIdx]) {
        levelFilterInitializedFor = LEVEL_ORDER[userLvlIdx];
        activeLevelFilter = userLvlIdx > 0 ? LEVEL_ORDER[userLvlIdx] : 'ALL';
      }

      const totalNodesCount = ORDERED_NODES.length;
      const totalLessonsCount = totalNodesCount * CROWNS_PER_NODE;

      let completedNodesCount = 0;
      let earnedCrownsCount = 0;

      ORDERED_NODES.forEach((n) => {
        const c = this.getNodeCrownCount(n.nodeId);
        if (c >= 1) completedNodesCount++;
        earnedCrownsCount += c;
      });

      const frontierNodeId = this.getCurrentFrontierNodeId();

      const levels = ['ALL', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
      const tabsHtml = levels.map((lvl) => {
        const active = activeLevelFilter === lvl ? 'active' : '';
        const label = lvl === 'ALL' ? 'ყველა (60 იუნიტი)' : lvl + ' (10 იუნიტი)';
        return (
          '<button type="button" class="pill-tab ' + active + '" data-duo-level="' + lvl + '">' +
            App.UI.escapeHTML(label) +
          '</button>'
        );
      }).join('');

      const filteredUnits = CURRICULUM_UNITS.filter((u) => {
        return activeLevelFilter === 'ALL' || u.level === activeLevelFilter;
      });

      const unitsHtml = filteredUnits.map((unit) => {
        const firstNodeGlobalIdx = (unit.unitNumber - 1) * NODE_TEMPLATES.length;
        const isUnitUnlocked = this.isNodeUnlocked(firstNodeGlobalIdx);
        const bannerClass = isUnitUnlocked ? ('duo-unit-banner--' + unit.level.toLowerCase()) : 'duo-unit-banner--locked';

        let unitCrowns = 0;
        const maxUnitCrowns = NODE_TEMPLATES.length * CROWNS_PER_NODE;
        NODE_TEMPLATES.forEach((nt) => {
          unitCrowns += this.getNodeCrownCount(unit.id + '-n' + nt.index);
        });

        const nodesHtml = NODE_TEMPLATES.map((nt, idx) => {
          const globalIdx = firstNodeGlobalIdx + idx;
          const nodeId = unit.id + '-n' + nt.index;
          const crowns = this.getNodeCrownCount(nodeId);
          const unlocked = this.isNodeUnlocked(globalIdx);
          const isFrontier = (nodeId === frontierNodeId);

          let btnStateClass = 'locked';
          if (unlocked) {
            if (crowns >= CROWNS_PER_NODE) btnStateClass = 'mastered';
            else if (crowns >= 1) btnStateClass = 'passed';
            else btnStateClass = 'current-active';
          }

          const displayIcon = unlocked ? nt.icon : '🔒';
          const statusSublabel = !unlocked
            ? '🔒 ჩაკეტილია (ჯერ წინა დაასრულეთ)'
            : (crowns >= CROWNS_PER_NODE
                ? '👑 5/5 ლეგენდარული!'
                : (crowns >= 1
                    ? '✓ გახსნილია &bull; რაუნდი ' + (crowns + 1) + '/5'
                    : '📍 მიმდინარე &bull; ' + nt.subtitle));

          return (
            '<div class="duo-node-row duo-node-row--pos-' + (idx % 8) + '" id="node-anchor-' + App.UI.escapeHTML(nodeId) + '">' +
              (idx > 0
                ? '<div class="duo-node-connector ' + (unlocked ? 'completed' : '') + '"></div>'
                : '') +
              (isFrontier
                ? '<div class="duo-start-callout">დაწყება! (საფეხური ' + (globalIdx + 1) + ')</div>'
                : '') +
              '<button type="button" class="duo-node-btn ' + btnStateClass + '" ' +
                'data-node-global-idx="' + globalIdx + '" ' +
                'data-start-node="' + App.UI.escapeHTML(nodeId) + '" ' +
                'data-unit-id="' + App.UI.escapeHTML(unit.id) + '" ' +
                'data-node-idx="' + nt.index + '" ' +
                'aria-label="' + App.UI.escapeHTML(nt.title) + '">' +
                '<span>' + displayIcon + '</span>' +
                '<span class="duo-crown-pill">' + (unlocked ? ('👑 ' + crowns + '/' + CROWNS_PER_NODE) : '🔒') + '</span>' +
              '</button>' +
              '<div class="duo-node-label">' + App.UI.escapeHTML(nt.title) + '</div>' +
              '<div class="duo-node-sublabel">' + statusSublabel + '</div>' +
            '</div>'
          );
        }).join('');

        return (
          '<section class="duo-unit-section ' + (!isUnitUnlocked ? 'unit-locked' : '') + '" aria-label="Unit ' + unit.unitNumber + '">' +
            '<div class="duo-unit-banner ' + bannerClass + '">' +
              '<div class="duo-unit-info">' +
                '<div class="duo-unit-eyebrow">' +
                  (isUnitUnlocked ? '🔓 გახსნილია' : '🔒 ჩაკეტილი იუნიტი') +
                  ' &bull; იუნიტი ' + unit.unitNumber + ' / 60 &bull; დონე ' + App.UI.escapeHTML(unit.level) +
                  ' &bull; 👑 ' + unitCrowns + '/' + maxUnitCrowns +
                '</div>' +
                '<h3 class="duo-unit-title">' + App.UI.escapeHTML(unit.title) + '</h3>' +
                '<p class="duo-unit-desc">' + App.UI.escapeHTML(unit.desc) + '</p>' +
              '</div>' +
              '<button type="button" class="duo-guide-btn" data-open-guide="' + App.UI.escapeHTML(unit.id) + '">' +
                '📖 გზამკვლევი' +
              '</button>' +
            '</div>' +
            '<div class="duo-nodes-track">' +
              nodesHtml +
            '</div>' +
          '</section>'
        );
      }).join('');

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              '<div>' +
                '<h2 class="section-title">სასწავლო ხე — 60 იუნიტი &bull; 480 განსხვავებული საფეხური</h2>' +
                '<p class="section-subtitle">თითოეულ საფეხურს აქვს თავისი უნიკალური მასალა (ნაწილი I, II, III, აუდიო კარნახი, რანდომიზებული წყვილები, დიალოგები და გამოცდა). დაშვებული შეცდომები გაკვეთილის ბოლოს მეორდება სრულ ათვისებამდე!</p>' +
              '</div>' +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">გახსნილია: ' + (completedNodesCount + 1) + ' / ' + totalNodesCount + '</span>' +
                '<span class="stat-pill stat-pill--xp">👑 ' + earnedCrownsCount + ' / ' + totalLessonsCount + '</span>' +
                '<button type="button" class="btn btn-primary btn-sm" id="jump-to-current-node-btn">🎯 ჩემს საფეხურზე გადასვლა</button>' +
              '</div>' +
            '</div>' +
            '<div class="filter-bar" style="margin-bottom:0;">' +
              '<div class="pill-tabs">' + tabsHtml + '</div>' +
            '</div>' +
          '</section>' +

          '<div class="duo-path-container">' +
            unitsHtml +
          '</div>' +
        '</div>';

      container.querySelectorAll('[data-duo-level]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeLevelFilter = btn.getAttribute('data-duo-level');
          App.UI.playSound('click');
          this.render();
        });
      });

      const jumpBtn = container.querySelector('#jump-to-current-node-btn');
      if (jumpBtn) {
        jumpBtn.addEventListener('click', () => {
          activeLevelFilter = 'ALL';
          this.render();
          window.setTimeout(() => {
            const targetEl = document.getElementById('node-anchor-' + frontierNodeId);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 60);
        });
      }

      container.querySelectorAll('[data-open-guide]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.openUnitGuidebook(btn.getAttribute('data-open-guide'));
        });
      });

      container.querySelectorAll('[data-start-node]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const globalIdx = Number(btn.getAttribute('data-node-global-idx'));
          const isUnlocked = this.isNodeUnlocked(globalIdx);

          if (!isUnlocked) {
            btn.classList.remove('shake');
            void btn.offsetWidth;
            btn.classList.add('shake');
            const prevMeta = ORDERED_NODES[globalIdx - 1];
            const prevName = prevMeta
              ? ('Unit ' + prevMeta.unitNumber + ' — ' + prevMeta.nodeTitle)
              : 'წინა საფეხური';
            App.UI.toast('🔒 ეს საფეხური ჩაკეტილია! ჯერ დაასრულეთ: «' + prevName + '».', 'warning', 3200);
            return;
          }

          const unitId = btn.getAttribute('data-unit-id');
          const nodeIdx = Number(btn.getAttribute('data-node-idx'));
          const nodeId = btn.getAttribute('data-start-node');
          const unit = CURRICULUM_UNITS.find((u) => u.id === unitId);
          const nodeTemplate = NODE_TEMPLATES[nodeIdx];

          if (!unit || !nodeTemplate) return;

          const currentCrowns = this.getNodeCrownCount(nodeId);
          const nextCrownLevel = currentCrowns < CROWNS_PER_NODE ? currentCrowns + 1 : CROWNS_PER_NODE;

          activeSession = {
            unit: unit,
            nodeTemplate: nodeTemplate,
            nodeId: nodeId,
            globalIdx: globalIdx,
            crownLevel: nextCrownLevel,
            steps: this.buildSessionSteps(unit, nodeIdx, nextCrownLevel),
            currentStep: 0,
            stepAnswered: false,
            sentenceWords: [],
            matchedPairs: [],
            selectedLeft: null,
            selectedRight: null,
            wrongFlashLeft: null,
            wrongFlashRight: null
          };

          App.UI.playSound('click');
          this.render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    },

    renderLessonPlayer: function (container) {
      const s = activeSession;
      const totalSteps = s.steps.length;

      if (s.currentStep >= totalSteps) {
        this.renderCompletionScreen(container);
        return;
      }

      const step = s.steps[s.currentStep];
      const progressPct = Math.round((s.currentStep / totalSteps) * 100);
      const retryBadgeHtml = step.isRetry
        ? '<div class="retry-step-badge">🔄 შეცდომის გამოსწორება — უპასუხეთ სწორად გასაგრძელებლად</div>'
        : '';

      let bodyHtml = '';

      if (step.type === 'theory') {
        const phrasesHtml = step.phrases.map((p) => {
          return (
            '<div class="theory-phrase-item">' +
              '<div>' +
                '<div class="phrase-en">' + App.UI.escapeHTML(p.en) + '</div>' +
                '<div class="phrase-ka">' + App.UI.escapeHTML(p.ka) + '</div>' +
              '</div>' +
              '<button type="button" class="audio-btn" data-speak-text="' + App.UI.escapeHTML(p.en) + '">&#128266;</button>' +
            '</div>'
          );
        }).join('');

        bodyHtml =
          '<h3 class="question-prompt">' + App.UI.escapeHTML(step.title) + '</h3>' +
          '<p class="question-helper">' + App.UI.escapeHTML(step.intro) + '</p>' +
          '<div class="theory-phrase-list">' + phrasesHtml + '</div>' +
          '<div style="display:flex; justify-content:flex-end;">' +
            '<button type="button" class="btn btn-primary" id="next-step-btn">ვარჯიშის დაწყება &rarr;</button>' +
          '</div>';
      } else if (step.type === 'mcq') {
        const optsHtml = step.options.map((opt, idx) => {
          return (
            '<button type="button" class="option-btn" data-mcq-index="' + idx + '">' +
              App.UI.escapeHTML(opt) +
            '</button>'
          );
        }).join('');

        bodyHtml =
          retryBadgeHtml +
          '<div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">' +
            '<h3 class="question-prompt">' + App.UI.escapeHTML(step.question) + '</h3>' +
            (step.speakPrompt
              ? '<button type="button" class="audio-btn" data-speak-text="' + App.UI.escapeHTML(step.speakPrompt) + '" title="მოსმენა">&#128266;</button>'
              : '') +
          '</div>' +
          '<p class="question-helper">აირჩიეთ სწორი ვარიანტი:</p>' +
          '<div class="options-list">' + optsHtml + '</div>' +
          '<div id="step-feedback" class="feedback-banner"></div>' +
          '<div style="display:flex; justify-content:flex-end;">' +
            '<button type="button" class="btn btn-primary" id="next-step-btn" style="display:none;">შემდეგი &rarr;</button>' +
          '</div>';
      } else if (step.type === 'listen') {
        const optsHtml = step.options.map((opt, idx) => {
          return (
            '<button type="button" class="option-btn" data-mcq-index="' + idx + '">' +
              App.UI.escapeHTML(opt) +
            '</button>'
          );
        }).join('');

        bodyHtml =
          retryBadgeHtml +
          '<h3 class="question-prompt">🎧 მოუსმინეთ და აირჩიეთ რა გაიგონეთ</h3>' +
          '<div class="dictation-audio-bar">' +
            '<button type="button" class="btn btn-primary btn-sm" data-speak-text="' + App.UI.escapeHTML(step.audioText) + '">&#128266; მოსმენა</button>' +
            '<button type="button" class="btn btn-outline btn-sm" data-speak-slow="' + App.UI.escapeHTML(step.audioText) + '">🐢 ნელა მოსმენა</button>' +
          '</div>' +
          '<div class="options-list">' + optsHtml + '</div>' +
          '<div id="step-feedback" class="feedback-banner"></div>' +
          '<div style="display:flex; justify-content:flex-end;">' +
            '<button type="button" class="btn btn-primary" id="next-step-btn" style="display:none;">შემდეგი &rarr;</button>' +
          '</div>';
      } else if (step.type === 'dictation') {
        bodyHtml =
          retryBadgeHtml +
          '<h3 class="question-prompt">🎧 აუდიო კარნახი — ჩაწერეთ რაც გაიგონეთ</h3>' +
          '<p class="question-helper">მოუსმინეთ ჩანაწერს (საჭიროებისას დააჭირეთ 🐢 ნელ რეჟიმს) და აკრიფეთ ინგლისურად:</p>' +
          '<div class="dictation-audio-bar">' +
            '<button type="button" class="btn btn-primary btn-sm" data-speak-text="' + App.UI.escapeHTML(step.audioText) + '">&#128266; ჩვეულებრივი</button>' +
            '<button type="button" class="btn btn-outline btn-sm" data-speak-slow="' + App.UI.escapeHTML(step.audioText) + '">🐢 ნელა</button>' +
            '<span style="font-size:0.86rem; color:var(--text-secondary);">მნიშვნელობა: <strong>' + App.UI.escapeHTML(step.translationKa) + '</strong></span>' +
          '</div>' +
          '<div style="margin-bottom:18px;">' +
            '<input type="text" id="fill-input" class="text-input" style="width:100%; font-size:1.05rem;" autocomplete="off" placeholder="აკრიფეთ მოსმენილი ინგლისური ფრაზა..." />' +
          '</div>' +
          '<div id="step-feedback" class="feedback-banner"></div>' +
          '<div style="display:flex; justify-content:flex-end; gap:10px;">' +
            '<button type="button" class="btn btn-primary" id="check-fill-btn">შემოწმება</button>' +
            '<button type="button" class="btn btn-primary" id="next-step-btn" style="display:none;">შემდეგი &rarr;</button>' +
          '</div>';
      } else if (step.type === 'dialogue') {
        const optsHtml = step.options.map((opt, idx) => {
          return (
            '<button type="button" class="option-btn" data-mcq-index="' + idx + '">' +
              App.UI.escapeHTML(opt) +
            '</button>'
          );
        }).join('');

        bodyHtml =
          retryBadgeHtml +
          '<h3 class="question-prompt">🗣️ სიტუაციური დიალოგი — აირჩიეთ სწორი პასუხი</h3>' +
          '<div class="dialogue-container">' +
            '<div class="dialogue-bubble speaker-a">' +
              '<div class="dialogue-speaker-name">თანამოსაუბრე</div>' +
              '<div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">' +
                '<strong>' + App.UI.escapeHTML(step.speakerA) + '</strong>' +
                '<button type="button" class="audio-btn" data-speak-text="' + App.UI.escapeHTML(step.speakerA) + '">&#128266;</button>' +
              '</div>' +
              '<div style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">' + App.UI.escapeHTML(step.kaA) + '</div>' +
            '</div>' +
            '<div class="dialogue-bubble speaker-b">' +
              '<div class="dialogue-speaker-name">თქვენი პასუხი (' + App.UI.escapeHTML(step.replyKaHint) + ')</div>' +
              '<span>???</span>' +
            '</div>' +
          '</div>' +
          '<div class="options-list">' + optsHtml + '</div>' +
          '<div id="step-feedback" class="feedback-banner"></div>' +
          '<div style="display:flex; justify-content:flex-end;">' +
            '<button type="button" class="btn btn-primary" id="next-step-btn" style="display:none;">შემდეგი &rarr;</button>' +
          '</div>';
      } else if (step.type === 'pairs') {
        // ვიყენებთ step.leftOrder და step.rightOrder-ს, რომელიც Fisher-Yates-ით დარენდომდა!
        const leftColHtml = step.leftOrder.map((pairIdx) => {
          const item = step.pairs[pairIdx];
          const isMatched = s.matchedPairs.indexOf(pairIdx) !== -1;
          const isSelected = s.selectedLeft === pairIdx;
          const isWrongFlash = s.wrongFlashLeft === pairIdx;
          return (
            '<button type="button" class="pair-card-btn ' +
              (isMatched ? 'matched ' : '') +
              (isSelected ? 'selected ' : '') +
              (isWrongFlash ? 'wrong-flash ' : '') +
              '" data-pair-left="' + pairIdx + '">' +
              App.UI.escapeHTML(item.en) +
            '</button>'
          );
        }).join('');

        const rightColHtml = step.rightOrder.map((pairIdx) => {
          const item = step.pairs[pairIdx];
          const isMatched = s.matchedPairs.indexOf(pairIdx) !== -1;
          const isSelected = s.selectedRight === pairIdx;
          const isWrongFlash = s.wrongFlashRight === pairIdx;
          return (
            '<button type="button" class="pair-card-btn ' +
              (isMatched ? 'matched ' : '') +
              (isSelected ? 'selected ' : '') +
              (isWrongFlash ? 'wrong-flash ' : '') +
              '" data-pair-right="' + pairIdx + '">' +
              App.UI.escapeHTML(item.ka) +
            '</button>'
          );
        }).join('');

        const allMatched = s.matchedPairs.length >= step.pairs.length;

        bodyHtml =
          '<h3 class="question-prompt">🧩 ' + App.UI.escapeHTML(step.title) + '</h3>' +
          '<p class="question-helper">ორივე სვეტი შემთხვევითად არის არეული. დააჭირეთ ინგლისურ სიტყვას და მის ქართულ შესატყვისს:</p>' +
          '<div class="pairs-grid">' +
            '<div class="pair-col">' + leftColHtml + '</div>' +
            '<div class="pair-col">' + rightColHtml + '</div>' +
          '</div>' +
          (allMatched
            ? '<div class="feedback-banner show correct"><strong>✓ ყველა წყვილი სწორად დაკავშირდა!</strong></div>' +
              '<div style="display:flex; justify-content:flex-end;"><button type="button" class="btn btn-primary" id="next-step-btn">შემდეგი &rarr;</button></div>'
            : '');
      } else if (step.type === 'sentence') {
        const dropzoneHtml = s.sentenceWords.length > 0
          ? s.sentenceWords.map((item, idx) => {
              return (
                '<button type="button" class="word-chip" data-remove-word-idx="' + idx + '">' +
                  App.UI.escapeHTML(item.word) +
                '</button>'
              );
            }).join('')
          : '<span style="color:var(--text-muted); font-size:0.88rem;">დააჭირეთ ქვემოთ მოცემულ სიტყვებს წინადადების ასაწყობად...</span>';

        const usedIndices = s.sentenceWords.map((i) => i.bankIndex);
        const bankHtml = step.words.map((w, idx) => {
          const isUsed = usedIndices.indexOf(idx) !== -1;
          return (
            '<button type="button" class="word-chip ' + (isUsed ? 'used' : '') + '" data-bank-word-idx="' + idx + '">' +
              App.UI.escapeHTML(w) +
            '</button>'
          );
        }).join('');

        bodyHtml =
          retryBadgeHtml +
          '<h3 class="question-prompt">' + App.UI.escapeHTML(step.promptKa) + '</h3>' +
          '<p class="question-helper">' +
            (step.hasTraps
              ? '⚠️ ყურადღებით: სიტყვების ბანკში დამატებულია ზედმეტი „მახე-სიტყვები“, რომლებიც წინადადებაში არ გჭირდებათ!'
              : 'დაალაგეთ სიტყვები სწორი ინგლისური თანმიმდევრობით:') +
          '</p>' +
          '<div class="sentence-dropzone">' + dropzoneHtml + '</div>' +
          '<div class="word-bank">' + bankHtml + '</div>' +
          '<div id="step-feedback" class="feedback-banner"></div>' +
          '<div style="display:flex; justify-content:space-between; gap:10px;">' +
            '<button type="button" class="btn btn-outline btn-sm" id="clear-sentence-btn">გასუფთავება</button>' +
            '<div style="display:flex; gap:10px;">' +
              '<button type="button" class="btn btn-primary" id="check-sentence-btn">შემოწმება</button>' +
              '<button type="button" class="btn btn-primary" id="next-step-btn" style="display:none;">შემდეგი &rarr;</button>' +
            '</div>' +
          '</div>';
      } else if (step.type === 'fill' || step.type === 'type_word') {
        bodyHtml =
          retryBadgeHtml +
          '<h3 class="question-prompt">' + App.UI.escapeHTML(step.promptKa) + '</h3>' +
          '<p class="question-helper">💡 მინიშნება: ' + App.UI.escapeHTML(step.hint) + '</p>' +
          (step.type === 'fill'
            ? '<div class="card" style="background:var(--bg-surface-muted); margin-bottom:18px; font-size:1.08rem; font-weight:700;">' +
                '<span>' + App.UI.escapeHTML(step.sentenceBefore) + '</span>' +
                '<input type="text" id="fill-input" class="text-input" style="width:155px; display:inline-block; margin:0 6px; text-align:center;" autocomplete="off" placeholder="..." />' +
                '<span>' + App.UI.escapeHTML(step.sentenceAfter) + '</span>' +
              '</div>'
            : '<div style="margin-bottom:18px;">' +
                '<input type="text" id="fill-input" class="text-input" style="width:100%; font-size:1.08rem;" autocomplete="off" placeholder="აკრიფეთ ინგლისურად..." />' +
              '</div>') +
          '<div id="step-feedback" class="feedback-banner"></div>' +
          '<div style="display:flex; justify-content:flex-end; gap:10px;">' +
            '<button type="button" class="btn btn-primary" id="check-fill-btn">შემოწმება</button>' +
            '<button type="button" class="btn btn-primary" id="next-step-btn" style="display:none;">შემდეგი &rarr;</button>' +
          '</div>';
      }

      container.innerHTML =
        '<div class="lesson-player">' +
          '<div class="player-topbar">' +
            '<button type="button" class="btn btn-outline btn-sm" id="exit-lesson-btn">&larr; ბილიკზე დაბრუნება</button>' +
            '<span class="step-counter">იუნიტი ' + s.unit.unitNumber + '/60 (' + s.unit.level + ') &bull; გვირგვინი ' + s.crownLevel + '/' + CROWNS_PER_NODE + ' &bull; ნაბიჯი ' + (s.currentStep + 1) + '/' + totalSteps + '</span>' +
          '</div>' +
          '<div style="margin-bottom: 20px;">' +
            App.UI.renderProgressBar(progressPct, s.nodeTemplate.icon + ' ' + s.nodeTemplate.title, progressPct + '%') +
          '</div>' +
          '<section class="card">' +
            bodyHtml +
          '</section>' +
        '</div>';

      this.bindPlayerEvents(container, step);
    },

    bindPlayerEvents: function (container, step) {
      const s = activeSession;

      const exitBtn = container.querySelector('#exit-lesson-btn');
      if (exitBtn) {
        exitBtn.addEventListener('click', () => {
          activeSession = null;
          this.render();
        });
      }

      container.querySelectorAll('[data-speak-text]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.speak(btn.getAttribute('data-speak-text'), false);
        });
      });

      container.querySelectorAll('[data-speak-slow]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.speak(btn.getAttribute('data-speak-slow'), true);
        });
      });

      const nextBtn = container.querySelector('#next-step-btn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          s.currentStep++;
          s.stepAnswered = false;
          s.sentenceWords = [];
          s.matchedPairs = [];
          s.selectedLeft = null;
          s.selectedRight = null;
          s.wrongFlashLeft = null;
          s.wrongFlashRight = null;
          App.UI.playSound('click');
          this.renderLessonPlayer(container);
        });
      }

      const feedbackEl = container.querySelector('#step-feedback');

      if (step.type === 'mcq' || step.type === 'listen' || step.type === 'dialogue') {
        if (step.type === 'listen' && !s.stepAnswered) {
          this.speak(step.audioText, false);
        }
        const optionBtns = container.querySelectorAll('[data-mcq-index]');
        optionBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            if (s.stepAnswered) return;
            s.stepAnswered = true;
            const chosenIdx = Number(btn.getAttribute('data-mcq-index'));
            const isCorrect = chosenIdx === step.correctIndex;

            optionBtns.forEach((b, i) => {
              b.disabled = true;
              if (i === step.correctIndex) b.classList.add('correct');
            });

            if (isCorrect) {
              btn.classList.add('correct');
              App.UI.playSound('success');
              feedbackEl.className = 'feedback-banner show correct';
              feedbackEl.innerHTML = '<strong>✓ სწორია!</strong> ' + App.UI.escapeHTML(step.explanation);
            } else {
              btn.classList.add('wrong');
              feedbackEl.className = 'feedback-banner show wrong';
              feedbackEl.innerHTML =
                '<strong>✗ არასწორია.</strong> ' + App.UI.escapeHTML(step.explanation) +
                '<br/><small style="opacity:0.85;">🔄 ეს კითხვა გაკვეთილის ბოლოს კიდევ ერთხელ შეგხვდებათ გასამყარებლად.</small>';
              this.requeueMissedStep(step);
            }
            if (nextBtn) nextBtn.style.display = 'inline-flex';
          });
        });
      }

      if (step.type === 'pairs') {
        const checkPairMatch = () => {
          if (s.selectedLeft !== null && s.selectedRight !== null) {
            if (s.selectedLeft === s.selectedRight) {
              s.matchedPairs.push(s.selectedLeft);
              this.speak(step.pairs[s.selectedLeft].en, false);
              App.UI.playSound('success');
              s.selectedLeft = null;
              s.selectedRight = null;
              this.renderLessonPlayer(container);
            } else {
              // არასწორი წყვილი — წითელი ციმციმი
              s.wrongFlashLeft = s.selectedLeft;
              s.wrongFlashRight = s.selectedRight;
              s.selectedLeft = null;
              s.selectedRight = null;
              this.renderLessonPlayer(container);
              window.setTimeout(() => {
                if (activeSession) {
                  activeSession.wrongFlashLeft = null;
                  activeSession.wrongFlashRight = null;
                  this.renderLessonPlayer(container);
                }
              }, 420);
            }
          }
        };

        container.querySelectorAll('[data-pair-left]').forEach((btn) => {
          btn.addEventListener('click', () => {
            s.selectedLeft = Number(btn.getAttribute('data-pair-left'));
            this.speak(step.pairs[s.selectedLeft].en, false);
            this.renderLessonPlayer(container);
            checkPairMatch();
          });
        });

        container.querySelectorAll('[data-pair-right]').forEach((btn) => {
          btn.addEventListener('click', () => {
            s.selectedRight = Number(btn.getAttribute('data-pair-right'));
            this.renderLessonPlayer(container);
            checkPairMatch();
          });
        });
      }

      if (step.type === 'sentence') {
        container.querySelectorAll('[data-bank-word-idx]').forEach((btn) => {
          btn.addEventListener('click', () => {
            if (s.stepAnswered) return;
            const idx = Number(btn.getAttribute('data-bank-word-idx'));
            s.sentenceWords.push({ bankIndex: idx, word: step.words[idx] });
            App.UI.playSound('click');
            this.renderLessonPlayer(container);
          });
        });

        container.querySelectorAll('[data-remove-word-idx]').forEach((btn) => {
          btn.addEventListener('click', () => {
            if (s.stepAnswered) return;
            const idx = Number(btn.getAttribute('data-remove-word-idx'));
            s.sentenceWords.splice(idx, 1);
            this.renderLessonPlayer(container);
          });
        });

        const clearBtn = container.querySelector('#clear-sentence-btn');
        if (clearBtn) {
          clearBtn.addEventListener('click', () => {
            if (s.stepAnswered) return;
            s.sentenceWords = [];
            this.renderLessonPlayer(container);
          });
        }

        const checkSentenceBtn = container.querySelector('#check-sentence-btn');
        if (checkSentenceBtn) {
          checkSentenceBtn.addEventListener('click', () => {
            if (s.stepAnswered) return;
            const userSentence = s.sentenceWords.map((i) => i.word).join(' ').trim();
            if (!userSentence) {
              App.UI.toast('ჯერ აირჩიეთ სიტყვები წინადადების ასაწყობად.', 'warning');
              return;
            }
            s.stepAnswered = true;
            checkSentenceBtn.style.display = 'none';
            if (clearBtn) clearBtn.style.display = 'none';

            const isCorrect = normalizeText(userSentence) === normalizeText(step.answer);
            if (isCorrect) {
              App.UI.playSound('success');
              this.speak(step.answer, false);
              feedbackEl.className = 'feedback-banner show correct';
              feedbackEl.innerHTML = '<strong>✓ შესანიშნავია!</strong> ' + App.UI.escapeHTML(step.explanation);
            } else {
              feedbackEl.className = 'feedback-banner show wrong';
              feedbackEl.innerHTML =
                '<strong>სწორი პასუხია: «' + App.UI.escapeHTML(step.answer) + '»</strong>' +
                '<br/><small style="opacity:0.85;">🔄 ეს წინადადება გაკვეთილის ბოლოს კიდევ ერთხელ შეგხვდებათ.</small>';
              this.requeueMissedStep(step);
            }
            if (nextBtn) nextBtn.style.display = 'inline-flex';
          });
        }
      }

      if (step.type === 'fill' || step.type === 'type_word' || step.type === 'dictation') {
        if (step.type === 'dictation' && !s.stepAnswered) {
          this.speak(step.audioText, false);
        }
        const inputEl = container.querySelector('#fill-input');
        const checkFillBtn = container.querySelector('#check-fill-btn');
        if (inputEl) inputEl.focus();

        const verifyFill = () => {
          if (s.stepAnswered || !inputEl) return;
          const val = inputEl.value.trim();
          if (!val) {
            App.UI.toast('გთხოვთ შეავსოთ პასუხის ველი.', 'warning');
            return;
          }
          s.stepAnswered = true;
          inputEl.disabled = true;
          if (checkFillBtn) checkFillBtn.style.display = 'none';

          const isCorrect = normalizeText(val) === normalizeText(step.answer);
          if (isCorrect) {
            App.UI.playSound('success');
            this.speak(step.answer, false);
            feedbackEl.className = 'feedback-banner show correct';
            feedbackEl.innerHTML = '<strong>✓ სწორია!</strong> ' + App.UI.escapeHTML(step.explanation);
          } else {
            feedbackEl.className = 'feedback-banner show wrong';
            feedbackEl.innerHTML =
              '<strong>სწორი ფორმაა: «' + App.UI.escapeHTML(step.answer) + '»</strong>. ' +
              App.UI.escapeHTML(step.explanation) +
              '<br/><small style="opacity:0.85;">🔄 ეს დავალება გაკვეთილის ბოლოს განმეორდება.</small>';
            this.requeueMissedStep(step);
          }
          if (nextBtn) nextBtn.style.display = 'inline-flex';
        };

        if (checkFillBtn) checkFillBtn.addEventListener('click', verifyFill);
        if (inputEl) {
          inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') verifyFill();
          });
        }
      }
    },

    renderCompletionScreen: function (container) {
      const s = activeSession;
      const newCrownCount = this.incrementNodeCrown(s.nodeId); if (App.Vocabulary && App.Vocabulary.markUnitSliceLearned) { App.Vocabulary.markUnitSliceLearned(s.unit.unitNumber, s.nodeTemplate.index); }
      const xpEarned = s.nodeTemplate.xpBase;
      const nextNodeMeta = ORDERED_NODES[s.globalIdx + 1];

      App.Progress.recordActivity({
        xp: xpEarned,
        title: 'Unit ' + s.unit.unitNumber + ' (' + s.unit.level + '): ' + s.nodeTemplate.title + ' — 👑 ' + newCrownCount + '/' + CROWNS_PER_NODE,
        category: 'სწავლა',
        metricKey: 'lessonsCompleted'
      });

      App.UI.playSound('success');

      container.innerHTML =
        '<section class="card empty-state-card">' +
          '<div class="empty-state-icon" style="background:#dcfce7; color:#16a34a; font-size:2rem;">🔓</div>' +
          '<div><span class="empty-state-badge">გვირგვინი ' + newCrownCount + ' / ' + CROWNS_PER_NODE + ' მოპოვებულია!</span></div>' +
          '<h2 class="empty-state-title">' + App.UI.escapeHTML(s.nodeTemplate.title) + ' დასრულდა!</h2>' +
          '<p class="empty-state-desc">' +
            'თქვენ უშეცდომოდ დაასრულეთ ყველა დავალება! ' +
            (nextNodeMeta && newCrownCount === 1
              ? 'ბილიკზე გაიხსნა მომდევნო საფეხური: <strong>«' + App.UI.escapeHTML(nextNodeMeta.nodeTitle) + '»</strong>!'
              : 'შეგიძლიათ გადახვიდეთ მომდევნო საფეხურზე ან გააძლიეროთ ეს საფეხური 5/5 გვირგვინამდე.') +
          '</p>' +
          '<div class="empty-state-actions">' +
            '<button type="button" class="btn btn-primary" id="finish-back-path-btn">ბილიკზე დაბრუნება და გაგრძელება &rarr;</button>' +
          '</div>' +
        '</section>';

      const backBtn = container.querySelector('#finish-back-path-btn');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          const nextAnchorId = nextNodeMeta ? ('node-anchor-' + nextNodeMeta.nodeId) : ('node-anchor-' + s.nodeId);
          activeSession = null;
          this.render();
          window.setTimeout(() => {
            const el = document.getElementById(nextAnchorId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 80);
        });
      }
    }
  };

  App.Learn = Learn;
})(window);