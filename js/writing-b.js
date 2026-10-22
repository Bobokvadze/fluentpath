/**
 * WRITING-B.JS — B1 დონის 15 ვრცელი წერითი თემა (#31–#45)
 * თითოეულ თემაში: 5 ვრცელი აბზაცი, 10 საკვანძო ფრაზა და 10 გააზრების კითხვა (სულ 150 კითხვა).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.WritingDataB1 = [
    {
      num: 31, level: "B1",
      icon: "📄", genre: "კარიერა და დასაქმება",
      title: "ოფიციალური სამოტივაციო წერილი ვაკანსიაზე",
      subtitle: "Writing a Formal Cover Letter for a Financial Analyst Position",
      time: "8 წთ",
      prompt: "დაწერეთ ოფიციალური სამოტივაციო წერილი სრულგანაკვეთიან ვაკანსიაზე (განათლება, სამუშაო გამოცდილება, პროგრამული უნარები და რატომ შეეფერებით კომპანიას).",
      template: "Dear [Hiring Manager], I am writing to express my strong interest in the [Job Title] position at [Company Name]. Having graduated with a degree in [Field], I have spent the past [Number] years working in [Sector]. I am proficient in [Skills] and would welcome the opportunity to discuss my application in an interview. Yours sincerely, [Your Name].",
      paragraphs: [
        [
          "Subject: Application for Junior Commercial Credit Analyst — Ref: CCA-409. Dear Mr Jonathan Mercer, I am writing to express my strong interest in the Junior Commercial Credit Analyst position at Horizon Corporate Bank, as advertised on your careers portal on the tenth of October.",
          "თემა: განაცხადი უმცროსი კომერციული საკრედიტო ანალიტიკოსის პოზიციაზე — კოდი: CCA-409. ძვირფასო ბატონო ჯონათან მერსერ, გწერთ, რათა გამოვხატო ჩემი დიდი ინტერესი ბანკ „ჰორიზონტში“ უმცროსი კომერციული საკრედიტო ანალიტიკოსის ვაკანსიის მიმართ, რომელიც ათ ოქტომბერს თქვენს დასაქმების პორტალზე გამოქვეყნდა."
        ],
        [
          "Having recently completed my Bachelor's degree in Business Administration and Finance, I have spent the past eighteen months working as a trainee analyst at a regional lending institution. During this time, I assisted senior analysts in evaluating loan applications for small and medium-sized enterprises.",
          "მას შემდეგ, რაც ცოტა ხნის წინ დავასრულე ბაკალავრიატი ბიზნესის ადმინისტრირებისა და ფინანსების მიმართულებით, ბოლო თვრამეტი თვე ვიმუშავე სტაჟიორ-ანალიტიკოსად რეგიონულ საკრედიტო ორგანიზაციაში. ამ პერიოდში უფროს ანალიტიკოსებს ვეხმარებოდი მცირე და საშუალო საწარმოების სასესხო განაცხადების შეფასებაში."
        ],
        [
          "My daily duties included reviewing balance sheets, income statements, and cash flow projections to assess each borrower's ability to repay their loan on time. In addition, I accompanied relationship managers on client site visits to inspect warehouses, production lines, and retail inventories.",
          "ჩემს ყოველდღიურ მოვალეობებში შედიოდა ბალანსის, მოგება-ზარალის უწყისებისა და ფულადი ნაკადების პროგნოზების განხილვა მსესხებლის გადახდისუნარიანობის შესაფასებლად. გარდა ამისა, კლიენტებთან ურთიერთობის მენეჯერებთან ერთად გავდიოდი ობიექტებზე საწყობების, საწარმოო ხაზებისა და სასაქონლო მარაგების დასათვალიერებლად."
        ],
        [
          "Through this hands-on experience, I have developed strong analytical skills and a keen eye for detail. I am highly proficient in Microsoft Excel — including financial modelling and pivot tables — and I have recently completed an online certification in trade finance and risk management.",
          "ამ პრაქტიკული გამოცდილების წყალობით გამოვიმუშავე ძლიერი ანალიტიკური უნარები და დეტალების მიმართ ყურადღება. მაღალ დონეზე ვფლობ Microsoft Excel-ს — მათ შორის ფინანსურ მოდელირებასა და შემაჯამებელ ცხრილებს (Pivot Tables) — და ცოტა ხნის წინ დავასრულე სასერტიფიკატო კურსი ვაჭრობის დაფინანსებასა და რისკების მართვაში."
        ],
        [
          "I admire Horizon Bank's reputation for supporting local manufacturers and sustainable business projects, and I am eager to contribute to your credit risk team. I have attached my CV and academic transcripts for your review, and I would welcome the opportunity to discuss my qualifications in an interview. Yours sincerely, Lucas Vance.",
          "დიდად ვაფასებ ბანკ „ჰორიზონტის“ რეპუტაციას ადგილობრივი მწარმოებლებისა და მდგრადი ბიზნესპროექტების მხარდაჭერის საქმეში და მსურს ჩემი წვლილი შევიტანო თქვენს საკრედიტო რისკების გუნდში. განსახილველად დავურთე ჩემი CV და ნიშნების ფურცელი, და სიამოვნებით განვიხილავდი ჩემს კვალიფიკაციას გასაუბრებაზე. პატივისცემით, ლუკას ვანსი."
        ]
      ],
      glossary: [
        "express my strong interest in...|გამოვხატო ჩემი დიდი ინტერესი ...-ის მიმართ", "small and medium-sized enterprises (SMEs)|მცირე და საშუალო საწარმოები", "balance sheet and income statement|ბალანსი და მოგება-ზარალის უწყისი",
        "cash flow projection|ფულადი ნაკადების პროგნოზი", "hands-on experience|პრაქტიკული გამოცდილება", "a keen eye for detail|დეტალების მიმართ მახვილი თვალი/ყურადღება",
        "proficient in...|მაღალ დონეზე მცოდნე / დაუფლებული ...-ს", "contribute to your team|წვლილის შეტანა თქვენს გუნდში", "for your review|თქვენ მიერ განსახილველად", "I would welcome the opportunity to...|სიამოვნებით გამოვიყენებდი შესაძლებლობას..."
      ],
      questions: [
        "What is the purpose of the opening phrase 'I am writing to express my strong interest in...'?|To state formally and enthusiastically which specific job position you are applying for|To ask what products the company sells|To complain about the website design|To decline a job offer",
        "What grammatical structure is 'Having recently completed my Bachelor's degree...' at the start of Paragraph 2?|A perfect participle clause used in formal writing to link a completed past achievement to your current experience|A future conditional clause|An imperative command|A passive question",
        "How long has Lucas Vance worked as a trainee analyst, and what did he help evaluate?|Eighteen months, helping senior analysts evaluate loan applications for small and medium-sized enterprises|Five years, managing a retail supermarket|Two weeks, working at a hotel|Six months, teaching at a school",
        "What three financial documents did Lucas review daily to assess a borrower's ability to repay?|Balance sheets, income statements, and cash flow projections|Passports, train tickets, and maps|Restaurant menus and receipts|Medical certificates",
        "Why did Lucas accompany relationship managers on client site visits?|To inspect warehouses, production lines, and retail inventories in person|To sell insurance policies to tourists|To repair office computers|To take holiday photographs",
        "What does the expression 'hands-on experience' mean in Paragraph 4?|Practical experience gained by actually doing the work rather than just reading theory in books|Working only with manual garden tools|Writing letters by hand with a pen|Working without a computer",
        "Which software and specific features does Lucas mention he is 'proficient in'?|Microsoft Excel, including financial modelling and pivot tables|Video editing and graphic design software|Music production tools|3D architectural printing",
        "Why is it important to mention something specific you admire about the company in Paragraph 5?|It shows the employer that you have researched their company values and are genuinely motivated to join their specific team|Because laws require every letter to have five paragraphs|To fill up empty space on the page|To ask for a higher salary immediately",
        "What two documents has Lucas attached to his application email?|His CV and his academic transcripts|His driving licence and utility bill|A photo of his apartment|A reference letter from a doctor",
        "Which polite formal phrase does Lucas use in the final sentence to request an interview?|'I would welcome the opportunity to discuss my qualifications in an interview.'|'Call me tomorrow at two o'clock.'|'You must interview me this week.'|'Let's meet for coffee.'"
      ]
    },
    {
      num: 32, level: "B1",
      icon: "⚖️", genre: "არგუმენტირებული ესე",
      title: "არგუმენტირებული ესე: დისტანციური მუშაობის დადებითი და უარყოფითი მხარეები",
      subtitle: "Writing a Balanced 'For and Against' Essay on Remote Work",
      time: "8 წთ",
      prompt: "დაწერეთ დაბალანსებული ესე ('For and Against' Essay) სახლიდან მუშაობის შესახებ (შესავალი, არგუმენტები მომხრეთა მხრიდან, არგუმენტები მოწინააღმდეგეთა მხრიდან და დაბალანსებული დასკვნა).",
      template: "In recent years, [Topic] has become increasingly common. On the one hand, there are several clear advantages, such as [Advantage 1] and [Advantage 2]. On the other hand, critics point out drawbacks like [Disadvantage 1]. All things considered, I believe that a balanced approach is best.",
      paragraphs: [
        [
          "Essay Title: Working from Home — The Advantages and Disadvantages of the Remote Revolution. Over the past decade, high-speed internet and cloud technology have transformed the modern workplace. While millions of employees now work from home full-time, this shift has sparked a lively debate about whether remote work helps or harms productivity and well-being. This essay will examine both sides of the issue before reaching a conclusion.",
          "ესეს სათაური: სახლიდან მუშაობა — დისტანციური რევოლუციის დადებითი და უარყოფითი მხარეები. გასული ათწლეულის განმავლობაში სწრაფმა ინტერნეტმა და ღრუბლოვანმა ტექნოლოგიებმა თანამედროვე სამუშაო გარემო გარდაქმნა. მიუხედავად იმისა, რომ დღეს მილიონობით თანამშრომელი სრულად სახლიდან მუშაობს, ამ ცვლილებამ ცხარე კამათი გამოიწვია იმის შესახებ, ეხმარება თუ ვნებს დისტანციური მუშაობა პროდუქტიულობასა და კეთილდღეობას. ეს ესე დასკვნის გამოტანამდე საკითხის ორივე მხარეს განიხილავს."
        ],
        [
          "On the one hand, working from home offers undeniable practical benefits for both employees and employers. Firstly, eliminating the daily commute saves workers up to two hours every day and significantly reduces spending on fuel and public transport. Secondly, many professionals report that they can concentrate much better on complex tasks in a quiet room at home than in a noisy open-plan office with constant interruptions.",
          "ერთი მხრივ, სახლიდან მუშაობას უდავო პრაქტიკული სარგებელი მოაქვს როგორც თანამშრომლებისთვის, ისე დამსაქმებლებისთვის. პირველ რიგში, ყოველდღიური მგზავრობის გაუქმება დასაქმებულებს დღეში ორ საათამდე დროს უზოგავს და მკვეთრად ამცირებს საწვავისა და ტრანსპორტის ხარჯებს. მეორეც, ბევრი პროფესიონალი აღნიშნავს, რომ სახლის მშვიდ ოთახში რთულ ამოცანებზე კონცენტრირება გაცილებით უკეთ შეუძლია, ვიდრე ხმაურიან ღია ტიპის ოფისში."
        ],
        [
          "Furthermore, remote work gives parents and caregivers greater flexibility to balance family responsibilities with career goals, while allowing companies to hire talented specialists from any city without paying for expensive office rent.",
          "გარდა ამისა, დისტანციური მუშაობა მშობლებს მეტ მოქნილობას აძლევს საოჯახო ვალდებულებებისა და კარიერული მიზნების დასაბალანსებლად, კომპანიებს კი საშუალებას აძლევს დაიქირაონ ნიჭიერი სპეციალისტები ნებისმიერი ქალაქიდან ძვირადღირებული საოფისე იჯარის გადახდის გარეშე."
        ],
        [
          "On the other hand, working entirely from home also presents serious drawbacks. The most common problem is the blurring of boundaries between work and personal life: when your desk is in your living room, it becomes difficult to switch off in the evening, leading to longer working hours and burnout. Moreover, junior employees often miss out on informal mentorship, spontaneous brainstorming, and the sense of belonging that comes from sharing a physical workplace with colleagues.",
          "მეორე მხრივ, მთლიანად სახლიდან მუშაობას სერიოზული ნაკლოვანებებიც ახლავს. ყველაზე გავრცელებული პრობლემაა სამუშაოსა და პირად ცხოვრებას შორის ზღვრის წაშლა: როდესაც სამუშაო მაგიდა მისაღებ ოთახში დგას, საღამოს საქმისგან მოწყვეტა რთულდება, რაც იწვევს სამუშაო საათების გახანგრძლივებასა და გადაწვას. უფრო მეტიც, ახალბედა თანამშრომლებს ხშირად აკლდებათ არაფორმალური სწავლება, სპონტანური იდეების გაცვლა და გუნდურობის განცდა, რაც კოლეგებთან საერთო სივრცეში მუშაობას მოაქვს."
        ],
        [
          "All things considered, neither 100% office work nor 100% isolation at home is ideal for everyone. In my view, the best solution is a flexible 'hybrid model', where employees work from home three days a week for quiet focus and spend two days in the office for teamwork and social connection.",
          "ყველაფრის გათვალისწინებით, არც 100%-ით ოფისში მუშაობა და არც სახლში სრული იზოლაცია არ არის იდეალური ყველასთვის. ჩემი ხედვით, საუკეთესო გამოსავალია მოქნილი „ჰიბრიდული მოდელი“, სადაც თანამშრომლები კვირაში სამი დღე სახლიდან მუშაობენ მშვიდი კონცენტრირებისთვის, ხოლო ორ დღეს ოფისში ატარებენ გუნდური მუშაობისა და სოციალური ურთიერთობისთვის."
        ]
      ],
      glossary: [
        "spark a lively debate|ცხარე კამათის / დისკუსიის გამოწვევა", "examine both sides of the issue|საკითხის ორივე მხარის განხილვა", "On the one hand, ... On the other hand, ...|ერთი მხრივ, ... მეორე მხრივ, ...",
        "undeniable benefits|უდავო სარგებელი / უპირატესობები", "daily commute|ყოველდღიური მგზავრობა სამსახურში და უკან", "present serious drawbacks|სერიოზული ნაკლოვანებების (მინუსების) ქონა",
        "blurring of boundaries|საზღვრების (ზღვრის) წაშლა/გაბუნდოვანება", "burnout|პროფესიული გადაწვა / გამოფიტვა", "Moreover,|უფრო მეტიც, / გარდა ამისა,", "All things considered,|ყველაფრის გათვალისწინებით, (დასკვნითი ფრაზა)"
      ],
      questions: [
        "How does a 'For and Against' (balanced) essay differ from a one-sided opinion essay?|In the introduction, it states that it will examine both sides objectively, and it reserves the writer's personal opinion until the final conclusion paragraph|It only lists disadvantages in all five paragraphs|It uses informal slang and exclamation marks|It has no conclusion paragraph",
        "Which pair of contrasting discourse markers is used to structure the 'For' paragraphs (Paragraph 2) and the 'Against' paragraph (Paragraph 4)?|'On the one hand,' and 'On the other hand,'|'First of all,' and 'For example,'|'Because of' and 'Therefore,'|'Yesterday' and 'Tomorrow'",
        "What are the two main practical advantages of working from home mentioned in Paragraph 2?|Saving up to two hours a day on commuting (plus transport costs) and concentrating better in a quiet room without office interruptions|Getting free computers and working only two hours a week|Never having to write emails|Having a larger desk",
        "How do companies financially benefit from allowing remote work according to Paragraph 3?|They can hire talented specialists from any city without paying for expensive office rent|They don't have to pay salaries|They sell office furniture to employees|They save money on internet",
        "What does the noun 'drawbacks' mean in Paragraph 4 ('presents serious drawbacks')?|Disadvantages or negative aspects|Pencil drawings| Comfortable chairs|Financial bonuses",
        "Why does working from home often lead to longer working hours and 'burnout'?|Because the boundaries between work and personal life blur when your desk is in your living room, making it hard to switch off in the evening|Because home computers work more slowly|Because bosses call at three in the morning|Because there are no clocks at home",
        "Why can 100% remote work be particularly disadvantageous for junior (new) employees?|They miss out on informal mentorship from experienced colleagues, spontaneous brainstorming, and a sense of belonging|Because junior employees don't have internet at home|Because they have to pay more taxes|Because they cannot use spreadsheets",
        "Which formal linking word in Paragraph 4 is used to add a second strong disadvantage (meaning 'In addition / Furthermore')?|'Moreover,'|'Although,'|'Despite,'|'Otherwise,'",
        "Which summarizing phrase introduces the final paragraph of the essay?|'All things considered,'|'Once upon a time,'|'On the one hand,'|'For instance,'",
        "What balanced solution does the writer recommend in the conclusion?|A flexible 'hybrid model' — three days at home for quiet focus and two days in the office for teamwork and social connection|Banning remote work completely|Closing all office buildings forever|Working only on weekends"
      ]
    },
    {
      num: 33, level: "B1",
      icon: "🚲", genre: "სამოქალაქო ინიციატივა",
      title: "ოფიციალური წერილი მერიას ველობილიკების მოწყობაზე",
      subtitle: "Writing a Formal Proposal Letter to the City Transport Department",
      time: "8 წთ",
      prompt: "დაწერეთ ოფიციალური წერილი ქალაქის მერიას ან ტრანსპორტის სამსახურს თქვენს უბანში უსაფრთხო ველობილიკის ან ქვეითთა გადასასვლელის მოწყობის ინიციატივით.",
      template: "Dear Sir or Madam, I am writing on behalf of the residents of [District] to propose [Improvement] along [Street Name]. Currently, [Describe Problem]. By introducing [Solution], the city could improve road safety and reduce traffic. Yours faithfully, [Your Name].",
      paragraphs: [
        [
          "Subject: Proposal for a Protected Cycle Lane on Riverview Avenue. Dear Sir or Madam, I am writing on behalf of the Riverside Neighbourhood Association, representing over three hundred local households, to propose the installation of a curb-protected cycle lane along Riverview Avenue between the residential district and the central railway station.",
          "თემა: შეთავაზება რივერვიუს გამზირზე დაცული ველობილიკის მოწყობის შესახებ. პატივცემულო ქალბატონო ან ბატონო, გწერთ „რივერსაიდის სამეზობლო ასოციაციის“ სახელით, რომელიც სამასზე მეტ ადგილობრივ ოჯახს აერთიანებს, რათა შემოგთავაზოთ ბორდიურით დაცული ველობილიკის მოწყობა რივერვიუს გამზირზე, საცხოვრებელ უბანსა და ცენტრალურ რკინიგზის სადგურს შორის."
        ],
        [
          "Currently, Riverview Avenue is a wide four-lane road where cars and delivery trucks frequently exceed the speed limit. Although hundreds of university students, office workers, and school pupils would love to cycle the three-kilometre route to the station, there is only a narrow painted white line at the edge of the road, which cars often block by parking illegally.",
          "ამჟამად რივერვიუს გამზირი არის ოთხზოლიანი განიერი გზა, სადაც მსუბუქი და სატვირთო მანქანები ხშირად აჭარბებენ სიჩქარის ლიმიტს. მიუხედავად იმისა, რომ ასობით სტუდენტს, ოფისის თანამშრომელსა და მოსწავლეს სურს სადგურამდე სამკილომეტრიანი მანძილის ველოსიპედით გავლა, გზის კიდეზე მხოლოდ ვიწრო თეთრი ხაზია დახაზული, რომელსაც მანქანები ხშირად უკანონო პარკირებით კეტავენ."
        ],
        [
          "As a result of these dangerous conditions, cyclists are forced either to swerve into fast-moving traffic or to ride on the pavement, which creates hazards for elderly pedestrians and parents with strollers. In the past six months alone, three minor collisions between cars and cyclists have occurred near the High Street junction.",
          "ამ სახიფათო პირობების შედეგად, ველოსიპედისტები იძულებულნი არიან ან სწრაფად მოძრავ სამანქანო ნაკადში გადავიდნენ, ან იარონ ტროტუარზე, რაც საფრთხეს უქმნის ხანდაზმულ ქვეითებსა და საბავშვო ეტლით მოსიარულე მშობლებს. მხოლოდ ბოლო ექვს თვეში ჰაი-სტრიტის გზაჯვარედინთან მანქანებსა და ველოსიპედისტებს შორის სამი მსუბუქი შეჯახება მოხდა."
        ],
        [
          "We propose converting the outer parking lane on the north side of Riverview Avenue into a two-way cycle track separated from car traffic by a low concrete curb, together with a secure bicycle parking shelter for fifty bikes at the railway station entrance. Similar projects in neighbouring districts have cost very little and were completed within three weeks.",
          "გთავაზობთ რივერვიუს გამზირის ჩრდილოეთ მხარეს არსებული გარე პარკირების ზოლის გადაკეთებას ორმხრივ ველობილიკად, რომელიც სამანქანო მოძრაობისგან დაბალი ბეტონის ბორდიურით იქნება გამოყოფილი, ხოლო რკინიგზის სადგურის შესასვლელთან — ორმოცდაათ ველოსიპედზე გათვლილი დაცული სადგომის მოწყობას. მეზობელ უბნებში მსგავსი პროექტები ძალიან იაფი დაჯდა და სამ კვირაში დასრულდა."
        ],
        [
          "Implementing this safe cycle route would not only prevent accidents, but also encourage hundreds of commuters to leave their cars at home, reducing morning traffic congestion and air pollution around our schools. We have attached a petition signed by four hundred residents and would be grateful for the opportunity to present our plan at next month's council meeting. Yours faithfully, Arthur Pendelton (Association Secretary).",
          "ამ უსაფრთხო ველომარშრუტის მოწყობა არა მხოლოდ თავიდან აგვაცილებდა უბედურ შემთხვევებს, არამედ წაახალისებდა ასობით მგზავრს მანქანები სახლში დაეტოვებინათ, რაც შეამცირებდა დილის საცობებსა და ჰაერის დაბინძურებას ჩვენი სკოლების გარშემო. წერილს დავურთეთ ოთხასი მცხოვრების მიერ ხელმოწერილი პეტიცია და მადლობელი დაგრჩებით, თუ მოგვეცემა შესაძლებლობა წარვადგინოთ ჩვენი გეგმა საბჭოს მომავალი თვის სხდომაზე. პატივისცემით, არტურ პენდლტონი (ასოციაციის მდივანი)."
        ]
      ],
      glossary: [
        "on behalf of...|...-ის სახელით (წარმომადგენლობით)", "exceed the speed limit|სიჩქარის ლიმიტის გადაჭარბება", "As a result of...,|...-ის შედეგად,",
        "create hazards for pedestrians|ქვეითებისთვის საფრთხის შექმნა", "minor collision|მსუბუქი შეჯახება (ავტოსაგზაო შემთხვევა)", "We propose converting...|გთავაზობთ გადაკეთებას...",
        "separated by a concrete curb|ბეტონის ბორდიურით გამოყოფილი", "Implementing this route would...|ამ მარშრუტის განხორციელება/დანერგვა...", "traffic congestion|საგზაო საცობი / გადატვირთულობა", "Yours faithfully,|პატივისცემით, (როდესაც წერილი იწყება 'Dear Sir or Madam'-ით)"
      ],
      questions: [
        "Why does Arthur end his letter with 'Yours faithfully,' instead of 'Yours sincerely,'?|Because the letter begins with 'Dear Sir or Madam,' (when the recipient's name is unknown), which requires 'Yours faithfully,'|Because it is an informal letter to a friend|Because he is angry with the council|Because it is written by email",
        "What does the phrase 'I am writing on behalf of the Riverside Neighbourhood Association' mean?|He is writing as the official representative speaking for the 300 households in the association|He is writing only his personal secret opinion|He owns all the houses on the street|He works for the city council",
        "What is the current problem with the painted white bicycle line on Riverview Avenue?|Cars frequently exceed the speed limit and often block the narrow painted line by parking illegally|The white paint is too bright at night|The road is made of cobblestones|Bicycles are banned on the street",
        "What happens 'As a result of' cars blocking the painted cycle line?|Cyclists are forced either to swerve into fast car traffic or ride on the pavement, endangering pedestrians|Cyclists ride on the railway tracks|Everyone takes a boat to the station|Cars drive on the pavement",
        "What specific evidence does Arthur give in Paragraph 3 to prove the road is dangerous?|In the past six months alone, three minor collisions between cars and cyclists have occurred near the High Street junction|He saw a fast car five years ago|He read a book about traffic|Someone lost their bicycle",
        "Which verb form follows the formal verb 'propose' in Paragraph 4 ('We propose ___ the outer parking lane...')?|The '-ing' form (gerund): 'We propose converting...'|The past tense ('We propose converted')|A question word|An adjective",
        "What two concrete solutions does the association propose in Paragraph 4?|Converting the outer parking lane into a curb-protected two-way cycle track, and adding a 50-bike parking shelter at the station|Closing the entire street to all buses and building a tunnel|Making the pavement narrower|Banning bicycles from the station",
        "What grammar structure is used in Paragraph 5: 'Implementing this safe cycle route would not only prevent accidents, but also encourage...'?|A correlative 'not only... but also...' structure used to highlight double benefits persuasively|A past conditional about yesterday|A direct command|A negative question",
        "What wider environmental and city benefits would the cycle lane bring besides safety?|Encouraging commuters to leave cars at home, reducing morning traffic congestion and air pollution around schools|Increasing parking fees for the city|Making trucks drive faster|Closing the railway station",
        "What document has Arthur attached to show strong community support for the proposal?|A petition signed by four hundred local residents|His personal CV|A receipt for his bicycle|A photograph of a park"
      ]
    },
    {
      num: 34, level: "B1",
      icon: "📋", genre: "საქმიანი მიმოწერა",
      title: "სამუშაო შეხვედრის შეჯამება და სამოქმედო გეგმა",
      subtitle: "Writing Meeting Minutes and Follow-Up Action Items",
      time: "8 წთ",
      prompt: "დაწერეთ სამუშაო შეხვედრის შემაჯამებელი წერილი (Meeting Summary) გუნდის წევრებისთვის (რა საკითხები განიხილეთ, რა გადაწყდა და ვის რა დავალება აქვს შესასრულებელი კონკრეტულ ვადამდე).",
      template: "Subject: Meeting Summary & Action Items — [Project Name]. Hi Team, Thank you all for attending today's meeting. Here is a brief summary of what we agreed: 1) [Decision 1]; 2) [Decision 2]. Action Items: [Name] will [Task] by [Day]. Our next meeting is on [Date]. Best, [Your Name].",
      paragraphs: [
        [
          "Subject: Meeting Summary & Action Items — Autumn Product Launch (15th October). Hi Everyone, Thank you all for attending this morning's one-hour planning meeting for the launch of our new mobile learning app, 'FluentPath Mobile'. I have summarized our key decisions and individual action items below so that everyone is on the same page.",
          "თემა: შეხვედრის შეჯამება და სამოქმედო გეგმა — შემოდგომის პროდუქტის ჩაშვება (15 ოქტომბერი). მოგესალმებით ყველას, გმადლობთ დღევანდელ ერთსაათიან დაგეგმვის შეხვედრაზე დასწრებისთვის, რომელიც ჩვენი ახალი მობილური აპლიკაციის — „FluentPath Mobile“-ის ჩაშვებას ეძღვნებოდა. ქვემოთ შევაჯამე ჩვენი ძირითადი გადაწყვეტილებები და ინდივიდუალური დავალებები, რათა ყველას ერთიანი ინფორმაცია გვქონდეს."
        ],
        [
          "1. Official Launch Date and Pricing: After reviewing the test results from our beta users, the team agreed to set the official public launch date for Monday, the tenth of November. We also decided that the basic version of the app will be 100% free, with an optional annual premium subscription priced at thirty-six euros.",
          "1. ოფიციალური გაშვების თარიღი და ფასწარმოქმნა: ბეტა-მომხმარებლების ტესტირების შედეგების განხილვის შემდეგ, გუნდი შეთანხმდა, რომ ოფიციალური საჯარო ჩაშვების თარიღად განისაზღვროს ორშაბათი, ათი ნოემბერი. ასევე გადავწყვიტეთ, რომ აპლიკაციის საბაზისო ვერსია იქნება 100%-ით უფასო, ხოლო არჩევითი წლიური პრემიუმ-აბონემენტის ფასი ოცდათექვსმეტი ევრო იქნება."
        ],
        [
          "2. Technical Fixes and Audio Quality (Owner: Marcus): During the meeting, Sarah pointed out that the audio pronunciation button loads slowly on older Android phones. Marcus and the software engineering team will compress the audio files and release a software update to fix this bug by Friday, the twenty-fourth of October.",
          "2. ტექნიკური ხარვეზების გასწორება და აუდიოს ხარისხი (პასუხისმგებელი: მარკუსი): შეხვედრის დროს სარამ აღნიშნა, რომ ძველ Android ტელეფონებზე აუდიოწარმოთქმის ღილაკი ნელა იტვირთება. მარკუსი და პროგრამული ინჟინერიის გუნდი შეკუმშავენ აუდიოფაილებს და ამ ხარვეზის აღმოსაფხვრელად განახლებას გამოუშვებენ პარასკევამდე, ოცდაოთხ ოქტომბრამდე."
        ],
        [
          "3. Marketing Campaign and Video Demo (Owner: Elena): Elena will prepare a ninety-second promotional video showing how the vocabulary flashcards and reading modules work. She will share the first draft of the video with the team by Wednesday, the twenty-ninth of October, and schedule social media advertisements to start on the third of November.",
          "3. მარკეტინგული კამპანია და სადემონსტრაციო ვიდეო (პასუხისმგებელი: ელენა): ელენა მოამზადებს ოთხმოცდაათწუთიან (ოთხმოცდაათწამიან) სარეკლამო ვიდეორგოლს, რომელიც აჩვენებს, როგორ მუშაობს ლექსიკური ბარათებისა და კითხვის მოდულები. ვიდეოს პირველ სამუშაო ვერსიას იგი გუნდს გაუზიარებს ოთხშაბათამდე, ოცდაცხრა ოქტომბრამდე, ხოლო სოციალური ქსელის რეკლამებს დაგეგმავს სამი ნოემბრიდან."
        ],
        [
          "4. Customer Support FAQ Page (Owner: David): David will write a clear 'Frequently Asked Questions' (FAQ) guide in English and Georgian for the website help centre by the thirty-first of October. Our next progress review meeting will take place next Friday at ten o'clock in Conference Room B. Please reply to this email if I missed anything! Best regards, Nina.",
          "4. მომხმარებელთა მხარდაჭერის გვერდი (პასუხისმგებელი: დევიდი): დევიდი ოცდათერთმეტ ოქტომბრამდე ვებსაიტის დახმარების ცენტრისთვის დაწერს „ხშირად დასმული კითხვების“ (FAQ) მკაფიო გზამკვლევს ინგლისურ და ქართულ ენებზე. ჩვენი მომდევნო შემაჯამებელი შეხვედრა გაიმართება მომავალ პარასკევს, ათ საათზე, B საკონფერენციო ოთახში. გთხოვთ უპასუხოთ ამ იმეილს, თუ რაიმე გამომრჩა! პატივისცემით, ნინა."
        ]
      ],
      glossary: [
        "action items|სამოქმედო პუნქტები / შესასრულებელი დავალებები", "be on the same page|ერთ აზრზე ყოფნა / ერთიანი ინფორმაციის ქონა (იდიომი)", "official launch date|ოფიციალური გაშვების/ჩაშვების თარიღი",
        "optional subscription|არჩევითი (ნებაყოფლობითი) აბონემენტი", "point out a problem|პრობლემაზე მითითება / ხაზგასმა", "fix a bug|პროგრამული ხარვეზის (ბაგის) გასწორება",
        "promotional video|სარეკლამო / პრომო ვიდეორგოლი", "first draft|პირველი სამუშაო ვერსია (შავი ვარიანტი)", "Frequently Asked Questions (FAQ)|ხშირად დასმული კითხვები", "progress review meeting|პროგრესის შემაჯამებელი შეხვედრა"
      ],
      questions: [
        "Why is it good workplace practice to send a 'Meeting Summary & Action Items' email right after a team meeting?|So that every team member is 'on the same page' regarding what was decided, who is responsible for each task, and the exact deadlines|To prove that you can type fast|Because nobody listens during meetings|To replace the actual project work",
        "What does the workplace idiom 'so that everyone is on the same page' mean in Paragraph 1?|So that everyone shares the exact same understanding of the plan and decisions|So that everyone reads the same page of a printed book|So that the email fits on one sheet of paper|So that everyone works in the same room",
        "What official public launch date and pricing model did the team agree on for 'FluentPath Mobile'?|Launch on Monday 10th November; basic version 100% free, with an optional annual premium subscription at 36 euros|Launch in December; costing 100 euros a month for everyone|Launch tomorrow; completely paid with no free version|They postponed the launch until next year",
        "Why does Nina write '(Owner: Marcus)', '(Owner: Elena)', and '(Owner: David)' next to each numbered section?|To assign clear individual responsibility so everyone knows who is in charge of completing that specific task|Because Marcus, Elena, and David own the company building|Because they bought the computers|To list their surnames alphabetically",
        "What technical issue did Sarah point out, and what is Marcus's deadline to fix it?|The audio button loads slowly on older Android phones; Marcus will compress the files and release an update by Friday 24th October|The screen is too dark on laptops; he will fix it by December|The login password doesn't work; he will fix it tonight|The website has no pictures",
        "What is Elena responsible for preparing, and when is the first draft due?|A 90-second promotional video showing the flashcards and reading modules, due by Wednesday 29th October|A 50-page printed manual, due tomorrow|A radio advertisement, due in November|Booking a hotel for the team",
        "When will the social media advertisements scheduled by Elena begin running?|On the third of November (one week before the 10th November launch)|On the fifteenth of October|In January|After the launch is over",
        "What task is assigned to David by the thirty-first of October?|Writing a clear 'Frequently Asked Questions' (FAQ) guide in English and Georgian for the website help centre|Translating all 90 reading stories into Spanish|Designing a new company logo|Testing Android phones",
        "Which preposition is used in English to state a deadline ('complete a task ___ Friday, 24th October')?|by ('by Friday, 24th October' — meaning on or before that date)|until ('until Friday' — used for continuing states, not completion deadlines)|since|from",
        "When and where will the team's next progress review meeting take place?|Next Friday at ten o'clock in Conference Room B|Tomorrow morning at nine in the café|On Monday the tenth of November|Via post letter"
      ]
    },
    {
      num: 35, level: "B1",
      icon: "🎓", genre: "აკადემიური წერა",
      title: "სასტიპენდიო განაცხადის სამოტივაციო ესე",
      subtitle: "Writing a Personal Statement for an International Exchange Scholarship",
      time: "8 წთ",
      prompt: "დაწერეთ სამოტივაციო წერილი (Personal Statement) უნივერსიტეტის გაცვლით პროგრამაში ან სასტიპენდიო კონკურსში მონაწილეობისთვის (აკადემიური ინტერესი, რატომ აირჩიეთ ეს პროგრამა და როგორ გამოიყენებთ მიღებულ ცოდნას).",
      template: "Dear Scholarship Committee, I am writing to apply for the [Scholarship Name] to study [Subject] at [University]. Throughout my studies, I have focused on [Topic]. Studying at your institution would allow me to [Academic Goal]. Upon returning to my home country, I plan to [Future Goal]. Respectfully, [Your Name].",
      paragraphs: [
        [
          "Statement of Purpose — European Erasmus+ Exchange Scholarship (Spring Semester 2027). Dear Members of the Scholarship Selection Committee, I am writing to apply for the Erasmus+ Mobility Grant to spend the Spring 2027 semester studying Sustainable Urban Planning at Delft University of Technology in the Netherlands.",
          "სამოტივაციო წერილი — ევროპული „ერაზმუს+“ გაცვლითი სტიპენდია (2027 წლის გაზაფხულის სემესტრი). ძვირფასო სასტიპენდიო შესარჩევი კომიტეტის წევრებო, გწერთ „ერაზმუს+“ მობილობის გრანტის მოსაპოვებლად, რათა 2027 წლის გაზაფხულის სემესტრში შევისწავლო მდგრადი ურბანული დაგეგმარება ნიდერლანდების დელფტის ტექნოლოგიურ უნივერსიტეტში."
        ],
        [
          "Growing up in a rapidly expanding capital city where green parks were gradually replaced by concrete car parks and congested roads, I became fascinated by a simple question: how can we design cities that are both economically vibrant and environmentally liveable? This question led me to study Architecture and Urban Design at my home university, where I have maintained a Grade Point Average of 3.8 out of 4.0.",
          "რადგან გავიზარდე სწრაფად მზარდ დედაქალაქში, სადაც მწვანე პარკები თანდათან ჩაანაცვლა ბეტონის ავტოსადგომებმა და გადატვირთულმა გზებმა, დამაინტერესა ერთმა მარტივმა კითხვამ: როგორ შეგვიძლია დავაპროექტოთ ქალაქები, რომლებიც ეკონომიკურად აქტიურიც იქნება და ეკოლოგიურად საცხოვრებლად ვარგისიც? ამ კითხვამ მიმიყვანა არქიტექტურისა და ურბანული დიზაინის ფაკულტეტზე ჩემს მშობლიურ უნივერსიტეტში, სადაც ვინარჩუნებ საშუალო აკადემიურ მოსწრებას (GPA) 3.8-ს 4.0-დან."
        ],
        [
          "During my second year, I led a four-student research project examining how 'green roofs' and permeable pavements can reduce summer heat and flash flooding in our city's historic district. Our project won first prize at the Annual Student Engineering Symposium and was presented to the municipal environmental board.",
          "მეორე კურსზე ვხელმძღვანელობდი ოთხი სტუდენტისგან შემდგარ კვლევით პროექტს, რომელიც სწავლობდა, თუ როგორ შეუძლია „მწვანე სახურავებსა“ და წყალგამტარ საფარს ჩვენი ქალაქის ისტორიულ უბანში ზაფხულის სიცხისა და უეცარი დატბორვის შემცირება. ჩვენმა პროექტმა პირველი ადგილი მოიპოვა სტუდენტურ საინჟინრო სიმპოზიუმზე და წარედგინა მუნიციპალიტეტის გარემოსდაცვით საბჭოს."
        ],
        [
          "Delft University of Technology is globally renowned for its pioneering research in water management, bicycle infrastructure, and climate-resilient architecture. Attending Professor Van Der Berg's seminar on 'Eco-Cities of the Future' and participating in the Dutch Urban Design Lab would give me practical analytical tools that are not currently available at my home institution.",
          "დელფტის ტექნოლოგიური უნივერსიტეტი მსოფლიოში ცნობილია თავისი ნოვატორული კვლევებით წყლის რესურსების მართვის, საველოსიპედო ინფრასტრუქტურისა და კლიმატისადმი მდგრადი არქიტექტურის მიმართულებით. პროფესორ ვან დერ ბერგის სემინარზე („მომავლის ეკო-ქალაქები“) დასწრება და ჰოლანდიურ ურბანული დიზაინის ლაბორატორიაში მონაწილეობა მომცემს პრაქტიკულ ანალიტიკურ ინსტრუმენტებს, რომლებიც ამჟამად ჩემს მშობლიურ უნივერსიტეტში ხელმისაწვდომი არ არის."
        ],
        [
          "Upon returning home after the exchange semester, I plan to use the methodologies learned in the Netherlands to write my final Bachelor's thesis on redesigning public transport corridors in my hometown. Receiving this scholarship would be a transformative step toward my career goal of becoming a municipal urban planner. Thank you for your time and consideration. Respectfully submitted, Anna Kalandadze.",
          "გაცვლითი სემესტრის შემდეგ სამშობლოში დაბრუნებისას ვგეგმავ ნიდერლანდებში შესწავლილი მეთოდოლოგიები გამოვიყენო ჩემს საბაკალავრო ნაშრომში, რომელიც ჩემს ქალაქში საზოგადოებრივი ტრანსპორტის დერეფნების გარდაქმნას შეეხება. ამ სტიპენდიის მიღება იქნება გარდამტეხი ნაბიჯი ჩემი კარიერული მიზნისკენ — გავხდე მუნიციპალური ქალაქმგეგმარებელი. გმადლობთ დათმობილი დროისა და ყურადღებისთვის. პატივისცემით, ანა კალანდაძე."
        ]
      ],
      glossary: [
        "Statement of Purpose / Personal Statement|სამოტივაციო წერილი (აკადემიური/სასტიპენდიო)", "Selection Committee|შესარჩევი კომისია / კომიტეტი", "environmentally liveable|ეკოლოგიურად საცხოვრებლად ვარგისი/ჯანსაღი",
        "Grade Point Average (GPA)|საშუალო აკადემიური მოსწრების ქულა", "globally renowned for...|მსოფლიოში ცნობილი / აღიარებული ...-ით", "pioneering research|ნოვატორული / მოწინავე კვლევა",
        "climate-resilient|კლიმატური ცვლილებებისადმი მდგრადი", "Upon returning home,|სამშობლოში დაბრუნებისთანავე,", "transformative step|გარდამტეხი / უმნიშვნელოვანესი ნაბიჯი", "Thank you for your time and consideration|გმადლობთ დათმობილი დროისა და განხილვისთვის"
      ],
      questions: [
        "What is the main difference between a job CV and a scholarship 'Statement of Purpose' (Personal Statement)?|A CV is a list of dates and facts, whereas a Statement of Purpose tells a coherent story connecting your past motivation, current academic achievements, why you chose that specific university, and your future goals|A Statement of Purpose only lists your high school grades|A CV is written as a five-paragraph story|There is no difference",
        "Which scholarship and university is Anna applying to for the Spring 2027 semester?|The Erasmus+ Mobility Grant to study Sustainable Urban Planning at Delft University of Technology in the Netherlands|A medical scholarship at Oxford University|A summer language course in Madrid|A history degree in Vienna",
        "How does Anna 'hook' the reader's interest in Paragraph 2 when explaining why she chose her field?|By connecting her personal experience of growing up in a rapidly expanding city losing green parks to her academic question of how to design liveable cities|By stating that she wants to earn a lot of money|By saying her parents forced her to study architecture|By copying a dictionary definition",
        "What concrete evidence of academic excellence does Anna provide in Paragraphs 2 and 3?|A GPA of 3.8 out of 4.0, and leading a four-student research project on green roofs that won first prize at the Student Engineering Symposium|She says she never misses a morning bus|She says she likes drawing houses|She promises to study hard next year",
        "Why is it essential in Paragraph 4 to name specific courses and professors at the host university (such as Professor Van Der Berg's seminar)?|It proves to the committee that you have thoroughly researched the host university's curriculum and know exactly what academic value you will gain there|Because the professor is on the local committee|To make the paragraph look longer|Because Dutch law requires it",
        "What three areas of research is Delft University of Technology globally renowned for according to the text?|Water management, bicycle infrastructure, and climate-resilient architecture|Space rockets, submarines, and astronomy|Ancient Roman history and Latin|Classical music and opera",
        "Why do scholarship committees care so much about Paragraph 5 ('Upon returning home...')?|Because exchange scholarships want to see how you will bring the new knowledge back to benefit your home university and community ('multiplier effect')|Because they want to make sure you buy a return plane ticket|Because they want you to stay in the Netherlands forever|To check when your passport expires",
        "How does Anna plan to use the methodologies learned in Delft when she returns home?|To write her final Bachelor's thesis on redesigning public transport corridors in her hometown, and pursue a career as a municipal urban planner|To open a private café|To teach Dutch at a primary school|To move to another continent",
        "What does the formal preposition 'Upon' + '-ing' ('Upon returning home...') mean?|Immediately after / When ('When I return home...')|Before returning home|Instead of returning home|Without returning home",
        "Which formal closing phrase does Anna use before her signature?|'Thank you for your time and consideration. Respectfully submitted,'|'Hope to hear from you soon, bye!'|'Send me the money please.'|'Best wishes and hugs,'"
      ]
    },
    {
      num: 36, level: "B1",
      icon: "🧳", genre: "ოფიციალური განაცხადი",
      title: "სადაზღვევო ანაზღაურების მოთხოვნის წერილი",
      subtitle: "Writing a Formal Travel Insurance Claim Letter",
      time: "8 წთ",
      prompt: "დაწერეთ ოფიციალური განაცხადი-წერილი სადაზღვევო კომპანიას მოგზაურობის დროს გაწეული სამედიცინო ან ბარგის ხარჯების ასანაზღაურებლად (პოლისის ნომერი, შემთხვევის ქრონოლოგია, თანხა და დართული ქვითრები).",
      template: "Subject: Insurance Claim — Policy #[Number]. Dear Claims Department, I am writing to submit a formal claim under my travel insurance policy #[Number] for [Incident] that occurred on [Date] in [City]. The total expense was [Amount] euros. I have attached all original receipts and official reports. Yours faithfully, [Your Name].",
      paragraphs: [
        [
          "Subject: Travel Insurance Claim — Policy #TRV-904512 (Mr Thomas Sterling). Dear Claims Department at SafeJourney Insurance, I am writing to submit a formal reimbursement claim under my Single-Trip European Travel Insurance Policy (#TRV-904512) for emergency dental treatment that I required while travelling in Milan, Italy, last week.",
          "თემა: სამოგზაურო დაზღვევის ანაზღაურების მოთხოვნა — პოლისი #TRV-904512 (ბატონი თომას სტერლინგი). ძვირფასო „სეიფჯორნი დაზღვევის“ ზარალების ანაზღაურების დეპარტამენტო, გწერთ ჩემი ევროპული სამოგზაურო დაზღვევის პოლისის (#TRV-904512) ფარგლებში ოფიციალური ანაზღაურების მოთხოვნის წარმოსადგენად გადაუდებელი სტომატოლოგიური მკურნალობისთვის, რომელიც გასულ კვირას იტალიაში, მილანში მოგზაურობისას დამჭირდა."
        ],
        [
          "My policy covered my five-day trip from the tenth to the fifteenth of October. On the evening of Wednesday, the twelfth of October, while having dinner in Milan, I accidentally bit down on an olive pit, which fractured my upper right molar and caused severe, acute pain that prevented me from sleeping.",
          "ჩემი პოლისი ფარავდა ჩემს ხუთდღიან მოგზაურობას ათიდან თხუთმეტ ოქტომბრამდე. ოთხშაბათს, თორმეტ ოქტომბერს, საღამოს, მილანში ვახშმობისას შემთხვევით კბილი დავაჭირე ზეთისხილის კურკას, რამაც გამიტეხა ზედა მარჯვენა ძირითადი კბილი და გამოიწვია მწვავე, აუტანელი ტკივილი, რომელმაც დაძინების საშუალება არ მომცა."
        ],
        [
          "At eight o'clock the next morning, Thursday the thirteenth of October, I called your 24-hour Emergency Medical Helpline (+44 20 7946 0821). Your operator, Miss Claire Jenkins, registered my case under Reference Number MED-339 and directed me to the 'Clinica Dentale Centrale' in Milan for urgent treatment.",
          "მეორე დილით რვა საათზე, ხუთშაბათს, ცამეტ ოქტომბერს, დავრეკე თქვენს 24-საათიან სამედიცინო ცხელ ხაზზე (+44 20 7946 0821). თქვენმა ოპერატორმა, მის კლერ ჯენკინსმა, დაარეგისტრირა ჩემი შემთხვევა ნომრით MED-339 და გადაუდებელი დახმარებისთვის მილანის კლინიკა „Clinica Dentale Centrale“-ში გამაგზავნა."
        ],
        [
          "At the clinic, the dentist, Dr Matteo Conti, took an X-ray of the tooth, treated the exposed nerve, and fitted a temporary protective crown so I could complete my trip safely. In accordance with my policy terms, I paid the clinic bill upfront using my credit card. The total cost came to two hundred and forty euros (€40 for the X-ray, €180 for the emergency dental procedure, and €20 for prescribed painkillers at the pharmacy).",
          "კლინიკაში სტომატოლოგმა, დოქტორმა მატეო კონტიმ, გადაუღო კბილს რენტგენი, უმკურნალა გაშიშვლებულ ნერვს და დამიყენა დროებითი დამცავი გვირგვინი, რათა მოგზაურობა უსაფრთხოდ დამესრულებინა. ჩემი პოლისის პირობების შესაბამისად, კლინიკის ანგარიში ადგილზევე გადავიხადე საკრედიტო ბარათით. ჯამურმა ღირებულებამ შეადგინა ორას ორმოცდაათი (ორას ორმოცი) ევრო (40 ევრო რენტგენი, 180 ევრო გადაუდებელი სტომატოლოგიური პროცედურა და 20 ევრო დანიშნული ტკივილგამაყუჩებლები აფთიაქში)."
        ],
        [
          "Since my policy includes up to five hundred euros of coverage for emergency dental care with a thirty-euro deductible (excess), I am claiming a net reimbursement of two hundred and ten euros. I have attached the completed claim form, Dr Conti's signed medical report, the itemized clinic invoice, the pharmacy receipt, and my boarding passes. Please transfer the reimbursement to the bank account listed on the form. Yours faithfully, Thomas Sterling.",
          "რადგან ჩემი პოლისი გადაუდებელ სტომატოლოგიურ მომსახურებაზე ითვალისწინებს ხუთას ევრომდე лимიტს ოცდაათევროიანი ფრანშიზით (თანაგადახდით), ვითხოვ სუფთა ანაზღაურებას ორას ათი ევროს ოდენობით. წერილს დავურთე შევსებული განაცხადის ფორმა, დოქტორ კონტის ხელმოწერილი სამედიცინო დასკვნა, კლინიკის დეტალური ინვოისი, აფთიაქის ქვითარი და ჩემი ჩასხდომის ბარათები. გთხოვთ ჩარიცხოთ თანხა ფორმაში მითითებულ საბანკო ანგარიშზე. პატივისცემით, თომას სტერლინგი."
        ]
      ],
      glossary: [
        "submit a formal reimbursement claim|ანაზღაურების ოფიციალური მოთხოვნის წარდგენა", "insurance policy number|სადაზღვევო პოლისის ნომერი", "acute pain|მწვავე / ძლიერი ტკივილი",
        "Emergency Helpline|საგანგებო სიტუაციების ცხელი ხაზი", "Reference Number|სარეგისტრაციო / საქმის ნომერი", "In accordance with my policy terms,|ჩემი პოლისის პირობების შესაბამისად,",
        "pay upfront|თანხის წინასწარ (ადგილზევე) გადახდა", "deductible / excess|ფრანშიზა (დაუზღვეველი მინიმუმი, რომელსაც დაზღვეული თავად იხდის)", "itemized invoice|დეტალური (ჩაშლილი) ინვოისი/ანგარიში", "net reimbursement|სუფთა (ხელზე ასაღები) ანაზღაურება"
      ],
      questions: [
        "What essential reference numbers does Thomas include in Paragraphs 1 and 3 so the insurance company can process his claim quickly?|His Insurance Policy Number (#TRV-904512) and the Emergency Helpline Case Reference Number (MED-339)|His passport number and hotel room number|His flight seat number|His university student ID",
        "When and how did the dental emergency happen in Milan?|On the evening of Wednesday 12th October, when he accidentally bit down on an olive pit at dinner and fractured his upper right molar|While playing football in a park|Two days before he left home|On the airplane flight",
        "What important step did Thomas take at 8:00 AM on Thursday BEFORE going to a dentist?|He called the insurance company's 24-hour Emergency Medical Helpline to register his case and get directed to an approved clinic|He flew back home immediately|He went to the police station|He bought a new insurance policy",
        "What treatment did Dr Matteo Conti perform at the clinic in Milan?|He took an X-ray, treated the exposed nerve, and fitted a temporary protective crown|He pulled out three teeth|He gave Thomas a toothbrush|He performed a three-hour jaw surgery",
        "What does the formal phrase 'In accordance with my policy terms' mean in Paragraph 4?|Following the official rules agreed upon in my insurance contract|Against the rules of my contract|Without reading the contract|Because I forgot my policy",
        "What does the adverb 'upfront' mean in the sentence 'I paid the clinic bill upfront using my credit card'?|Paid the money directly at the time of service (before being reimbursed later by the insurer)|Paid at the front door of the building|Paid half of the bill|Refused to pay",
        "How was the total cost of 240 euros broken down ('itemized')?|40 euros for the X-ray, 180 euros for the emergency dental procedure, and 20 euros for prescribed painkillers at the pharmacy|240 euros for a hotel room|100 euros for a taxi and 140 euros for medicine|200 euros for the dentist and 40 euros for dinner",
        "What is a 'deductible' (or 'excess') of thirty euros in an insurance policy?|The fixed initial amount (€30) that the insured person must pay themselves on a claim, so the insurer pays the rest (€240 - €30 = €210)|A thirty-euro bonus gift from the insurance company|The monthly price of the insurance|A fine for calling the helpline",
        "Why is Thomas claiming a net reimbursement of 210 euros instead of 240 euros?|Because 240 euros minus the 30-euro policy deductible equals 210 euros|Because he lost the 20-euro pharmacy receipt|Because he forgot how to add the numbers|Because the dentist gave him a 30-euro discount",
        "What five supporting documents has Thomas attached to prove his claim is genuine?|The completed claim form, Dr Conti's signed medical report, the itemized clinic invoice, the pharmacy receipt, and his boarding passes (proving travel dates)|Only a selfie taken outside the clinic|A letter from his friend|His restaurant dinner receipt"
      ]
    },
    {
      num: 37, level: "B1",
      icon: "♻️", genre: "ეკოლოგიური სტატია",
      title: "სტატია საოჯახო პლასტიკური ნარჩენების შემცირებაზე",
      subtitle: "Writing a Feature Article: Five Practical Ways to Cut Plastic at Home",
      time: "8 წთ",
      prompt: "დაწერეთ საინფორმაციო-პრაქტიკული სტატია (Feature Article) ჟურნალისთვის ან ვებსაიტისთვის, თუ როგორ შეგვიძლია ყოველდღიურ ცხოვრებაში პლასტმასის მოხმარების შემცირება.",
      template: "Title: [Catchy Title]! Have you ever wondered how much plastic we throw away every week? Although the problem seems huge, small daily changes make a real difference. First, [Tip 1]. Second, [Tip 2]. Together, our everyday choices can protect our planet!",
      paragraphs: [
        [
          "Article Title: Small Swaps, Big Impact — How to Cut Half the Plastic from Your Kitchen in One Month! Have you ever looked inside your kitchen rubbish bin on Sunday evening and wondered how it filled up so quickly? Although a single plastic water bottle or supermarket bag seems harmless on its own, the average household throws away more than forty kilograms of single-use plastic packaging every year!",
          "სტატიის სათაური: მცირე ცვლილებები, დიდი შედეგი — როგორ გავანახევროთ პლასტმასი ჩვენს სამზარეულოში ერთ თვეში! ჩაგიხედავთ თუ არა კვირა საღამოს სამზარეულოს სანაგვე ურნაში და დაფიქრებულხართ, როგორ გაივსო იგი ასე სწრაფად? მიუხედავად იმისა, რომ ცალკე აღებული ერთი პლასტმასის ბოთლი ან პარკი უვნებელი ჩანს, საშუალო ოჯახი ყოველწლიურად ორმოც კილოგრამზე მეტ ერთჯერად პლასტიკურ შეფუთვას ყრის!"
        ],
        [
          "The good news is that you do not need to change your entire lifestyle overnight to make a difference. By replacing just four everyday disposable items with durable, reusable alternatives, you can cut your household plastic waste in half while saving money at the same time!",
          "კარგი ამბავი ის არის, რომ შედეგის მისაღწევად სულაც არ გჭირდებათ ცხოვრების წესის ერთ ღამეში შეცვლა. მხოლოდ ოთხი ყოველდღიური ერთჯერადი ნივთის გამძლე, მრავალჯერადი ალტერნატივით ჩანაცვლებით, შეგიძლიათ გაანახევროთ საოჯახო პლასტიკური ნარჩენები და იმავდროულად დაზოგოთ ფული!"
        ],
        [
          "The easiest place to start is with bags and bottles. Keep two foldable canvas bags in your coat pocket or car boot so you never have to buy a plastic carrier bag at the checkout. Similarly, investing in one stainless-steel water bottle and a reusable travel coffee mug prevents hundreds of plastic bottles and paper-lined cups from ending up in landfills each year — and many cafés even give you a thirty-cent discount when you bring your own mug!",
          "ყველაზე მარტივია დაწყება ჩანთებითა და ბოთლებით. ქურთუკის ჯიბეში ან მანქანის საბარგულში ყოველთვის გქონდეთ ორი დასაკეცი ტილოს ჩანთა, რათა სალაროსთან პლასტიკური პარკის ყიდვა აღარასდროს დაგჭირდეთ. მსგავსად ამისა, ერთი უჟანგავი ფოლადის წყლის ბოთლისა და ყავის მრავალჯერადი თერმოჭიქის შეძენა წელიწადში ასობით ბოთლსა და ჭიქას იცავს ნაგავსაყრელზე მოხვედრისგან — ბევრი კაფე კი ოცდაათცენტიან ფასდაკლებასაც გთავაზობთ საკუთარი ჭიქით მისვლისას!"
        ],
        [
          "Inside the kitchen, look at how you buy and store food. At the supermarket, choose loose apples, potatoes, and carrots instead of vegetables sealed on plastic trays, and carry your own light mesh bags for fruit. At home, instead of wrapping leftover cheese or half a lemon in disposable cling film, cover bowls with a simple ceramic plate or reusable beeswax wraps that can be washed in cool water and used for a whole year.",
          "სამზარეულოში დააკვირდით, როგორ ყიდულობთ და ინახავთ საკვებს. სუპერმარკეტში პლასტმასის ლანგრებზე შეფუთული ბოსტნეულის ნაცვლად აირჩიეთ ასაწონი ვაშლი, კარტოფილი და სტაფილო, ხილისთვის კი ატარეთ საკუთარი მსუბუქი ბადე-ტომსიკები. სახლში კი, ნაცვლად იმისა, რომ დარჩენილი ყველი ან ნახევარი ლიმონი ერთჯერად სამზარეულოს ცელოფანში გაახვიოთ, ჯამს უბრალოდ დააფარეთ კერამიკული თეფში ან გამოიყენეთ ფუტკრის ცვილის მრავალჯერადი ქსოვილი, რომელიც გრილ წყალში ირეცხება და მთელი წელი ძლებს."
        ],
        [
          "Finally, switch from liquid hand soap in small plastic pump bottles to traditional solid bars of olive-oil soap wrapped in paper, and buy large five-litre refill containers for laundry detergent. Environmental protection does not require perfection from a few people; it simply requires millions of us taking small, practical steps every day!",
          "დაბოლოს, პატარა პლასტმასის ბოთლებში ჩასხმული თხევადი საპნიდან გადადით ქაღალდში შეფუთულ ტრადიციულ მყარ საპონზე, ხოლო სარეცხი სითხისთვის შეიძინეთ დიდი ხუთლიტრიანი შესავსები ჭურჭელი. გარემოს დაცვა არ მოითხოვს აბსოლუტურ სრულყოფილებას ერთეული ადამიანებისგან; იგი უბრალოდ მოითხოვს მილიონობით ჩვენგანის მიერ ყოველდღე მცირე, პრაქტიკული ნაბიჯების გადადგმას!"
        ]
      ],
      glossary: [
        "Have you ever wondered...?|დაფიქრებულხართ თუ არა ოდესმე...? (სტატიის დასაწყისი კითხვა)", "single-use plastic packaging|ერთჯერადი პლასტიკური შეფუთვა", "make a difference|სასიკეთო ცვლილების მოხდენა / შედეგის გამოღება",
        "reusable alternative|მრავალჯერადი გამოყენების ალტერნატივა", "at the same time|იმავდროულად", "end up in landfills|ნაგავსაყრელზე აღმოჩენა / მოხვედრა",
        "loose fruit and vegetables|ასაწონი (შეუფუთავი) ხილი და ბოსტნეული", "cling film (plastic wrap)|სამზარეულოს თხელი შესაფუთი ცელოფანი", "beeswax wrap|ფუტკრის ცვილით გაჟღენთილი მრავალჯერადი შესაფუთი ქსოვილი", "refill container|მრავალჯერადი შესავსები ჭურჭელი"
      ],
      questions: [
        "Why does the writer start the feature article with a direct rhetorical question ('Have you ever looked inside your kitchen rubbish bin...')?|To engage the reader immediately by connecting the global topic of plastic waste to their own everyday kitchen experience|Because the writer doesn't know what a rubbish bin looks like|Because feature articles must only contain questions|To test the reader's memory",
        "How many kilograms of single-use plastic packaging does the average household throw away every year?|More than forty kilograms|Only two kilograms|Five hundred kilograms|Zero kilograms",
        "What reassuring message does the writer give in Paragraph 2 so readers don't feel overwhelmed?|You don't need to change your entire lifestyle overnight; replacing just four everyday disposable items can cut plastic waste in half|You must throw away everything in your house today|Only governments can reduce plastic|You have to move to the countryside",
        "Where does the writer suggest keeping two foldable canvas bags so you never forget them?|In your coat pocket or car boot|Locked in a bedroom wardrobe|At the supermarket cash desk|Under the kitchen sink",
        "What financial bonus do many cafés offer when you bring your own reusable travel coffee mug?|A thirty-cent discount on your coffee|A free lunch every day|A ten-euro voucher|A free bag of coffee beans",
        "What does 'loose apples, potatoes, and carrots' mean at a supermarket?|Unpackaged fruit and vegetables that you pick individually rather than items sealed on plastic trays|Vegetables that have fallen on the floor|Frozen vegetables in boxes|Canned soup",
        "What two reusable alternatives does the writer suggest instead of disposable plastic 'cling film' for covering leftover food at home?|Covering bowls with a simple ceramic plate, or using washable beeswax wraps|Using aluminium cans|Wrapping food in plastic carrier bags|Putting food in the oven",
        "How do you clean a reusable beeswax food wrap, and how long does it last?|Wash it in cool water, and it can be used for a whole year|Boil it in hot water and throw it away after one use|Put it in the washing machine at 90 degrees|Iron it with a hot iron",
        "What two swaps does the writer suggest in Paragraph 5 for bathroom soap and laundry detergent?|Switching to solid bars of soap wrapped in paper, and buying large five-litre refill containers for laundry detergent|Washing clothes with cold water only|Making your own soap from sand|Buying tiny plastic bottles every day",
        "What inspiring concluding thought does the writer leave the reader with at the end of the article?|Environmental protection doesn't require perfection from a few people, but millions of us taking small, practical steps every day|Unless you are 100% zero-waste, nothing matters|Plastic will disappear on its own next year|Only scientists can save the oceans"
      ]
    },
    {
      num: 38, level: "B1",
      icon: "🤝", genre: "სარეკომენდაციო წერილი",
      title: "სარეკომენდაციო წერილი კოლეგისთვის ან თანამშრომლისთვის",
      subtitle: "Writing a Formal Letter of Reference for a Former Team Member",
      time: "8 წთ",
      prompt: "დაწერეთ ოფიციალური სარეკომენდაციო წერილი (Letter of Reference / Recommendation) თქვენი ყოფილი თანამშრომლის, კოლეგის ან სტუდენტისთვის (რამდენი ხანი იმუშავეთ ერთად, მისი პროფესიული და პიროვნული თვისებები და კონკრეტული მიღწევა).",
      template: "To Whom It May Concern, It is my great pleasure to write this letter of recommendation for [Name], who worked under my supervision as a [Job Title] at [Company] from [Year] to [Year]. During this time, [Name] consistently demonstrated [Quality 1] and [Quality 2]. I recommend [Name] without reservation. Yours faithfully, [Your Name & Title].",
      paragraphs: [
        [
          "Letter of Reference for Miss Sofia Lindqvist. To Whom It May Concern, It is my great pleasure to write this formal letter of recommendation for Sofia Lindqvist, who worked directly under my supervision as a Customer Relations Coordinator at the Nordic Logistics Group in Stockholm for two years, from September 2024 to August 2026.",
          "სარეკომენდაციო წერილი სოფია ლინდკვისტისთვის. ყველა დაინტერესებულ პირს, დიდი სიამოვნებით ვწერ ამ ოფიციალურ სარეკომენდაციო წერილს სოფია ლინდკვისტისთვის, რომელიც უშუალოდ ჩემი ხელმძღვანელობით მუშაობდა კლიენტებთან ურთიერთობის კოორდინატორად კომპანია „ნორდიკ ლოგისტიკს გრუპში“ (სტოკჰოლმი) ორი წლის განმავლობაში — 2024 წლის სექტემბრიდან 2026 წლის აგვისტომდე."
        ],
        [
          "In her role as Coordinator, Sofia was the primary point of contact for over forty international commercial clients shipping goods across northern Europe. Her daily responsibilities included tracking freight schedules, resolving customs documentation issues, and coordinating closely with our warehouse and transport teams.",
          "კოორდინატორის პოზიციაზე სოფია იყო მთავარი საკონტაქტო პირი ორმოცზე მეტი საერთაშორისო კომერციული კლიენტისთვის, რომლებსაც ტვირთები ჩრდილოეთ ევროპის მასშტაბით გადაჰქონდათ. მის ყოველდღიურ მოვალეობებში შედიოდა ტვირთების განრიგის კონტროლი, საბაჟო დოკუმენტაციის საკითხების მოგვარება და მჭიდრო კოორდინაცია ჩვენს სასაწყობე და სატრანსპორტო გუნდებთან."
        ],
        [
          "What set Sofia apart from other employees of her age was her exceptional problem-solving ability under pressure. Last winter, when a severe snowstorm closed the main Baltic ferry port for three days, Sofia worked proactively to reroute twelve urgent medical supply shipments by rail, keeping every single client informed and preventing costly delays.",
          "რაც სოფიას მისი ასაკის სხვა თანამშრომლებისგან გამოარჩევდა, იყო დაძაბულ სიტუაციაში პრობლემების გადაჭრის გამორჩეული უნარი. გასულ ზამთარს, როდესაც ძლიერმა თოვლის ქარიშხალმა ბალტიის მთავარი საბორნე პორტი სამი დღით ჩაკეტა, სოფიამ ოპერატიულად იმუშავა თორმეტი გადაუდებელი სამედიცინო ტვირთის რკინიგზით გადამისამართებაზე, თითოეულ კლიენტს მუდმივად აწვდიდა ინფორმაციას და თავიდან აგვაცილა ძვირადღირებული შეფერხებები."
        ],
        [
          "Beyond her technical efficiency, Sofia was a warm, reliable, and supportive team player. When we hired three new junior assistants this spring, Sofia volunteered to design a clear step-by-step training manual for them, which cut their onboarding time in half! Her written and spoken English are of the highest professional standard.",
          "ტექნიკური ეფექტიანობის მიღმა, სოფია იყო თბილი, სანდო და გულისხმიერი გუნდური მოთამაშე. როდესაც ამ გაზაფხულს სამი ახალი უმცროსი ასისტენტი ავიყვანეთ, სოფიამ საკუთარი ინიციატივით შეადგინა მათთვის მკაფიო ნაბიჯ-ნაბიჯ სასწავლო სახელმძღვანელო, რამაც მათი ადაპტაციის დრო გაანახევრა! მისი წერილობითი და ზეპირი ინგლისური უმაღლეს პროფესიულ სტანდარტს შეესაბამება."
        ],
        [
          "Sofia only left our company at the end of August because she relocated abroad to pursue her Master's degree, and her departure was a genuine loss to our department. I recommend Sofia Lindqvist without reservation for any operations or client management role. Please feel free to contact me by email or phone if you require any further details. Yours faithfully, Henrik Lindholm, Head of Operations.",
          "სოფიამ ჩვენი კომპანია აგვისტოს ბოლოს მხოლოდ იმიტომ დატოვა, რომ მაგისტრატურაზე სწავლის გასაგრძელებლად საზღვარგარეთ გადავიდა, და მისი წასვლა ჩვენი დეპარტამენტისთვის ნამდვილი დანაკლისი იყო. ყოველგვარი ყოყმანის გარეშე ვუწევ რეკომენდაციას სოფია ლინდკვისტს ნებისმიერ საოპერაციო თუ კლიენტთა მართვის პოზიციაზე. გთხოვთ თავისუფლად დამიკავშირდეთ იმეილით ან ტელეფონით, თუ დამატებითი დეტალები დაგჭირდებათ. პატივისცემით, ჰენრიკ ლინდჰოლმი, ოპერაციების დეპარტამენტის უფროსი."
        ]
      ],
      glossary: [
        "To Whom It May Concern,|ყველა დაინტერესებულ პირს, (ოფიციალური მიმართვა ცნობებსა და რეკომენდაციებში)", "under my supervision|ჩემი უშუალო ხელმძღვანელობით", "primary point of contact|მთავარი საკონტაქტო პირი",
        "What set [Name] apart was...|რაც [სახელს] სხვებისგან გამოარჩევდა, იყო...", "under pressure|დაძაბულ სიტუაციაში / წნეხის ქვეშ", "work proactively|პროაქტიულად (წინსწრებით/ინიციატივით) მუშაობა",
        "onboarding time|ახალი თანამშრომლის ადაპტაციისა და სწავლების დრო", "relocate abroad|საზღვარგარეთ გადასვლა საცხოვრებლად", "without reservation|უპირობოდ / ყოველგვარი ყოყმანის გარეშე", "Please feel free to contact me|გთხოვთ, თავისუფლად დამიკავშირდეთ"
      ],
      questions: [
        "When should you use the formal salutation 'To Whom It May Concern,' at the top of a letter?|When writing an official reference letter or certificate that the employee will show to various future employers whose names are not yet known|When writing a birthday card to your sister|When emailing your best friend|When you know the exact name of the manager",
        "What must the writer establish in Paragraph 1 of a reference letter to make it credible?|Their own job title, how they know the candidate ('under my supervision'), the candidate's exact role, and the dates of employment (Sept 2024 – Aug 2026)|The candidate's favourite hobbies and childhood stories|How much money the company earned last year|The history of Stockholm",
        "What were Sofia's main responsibilities as Customer Relations Coordinator at Nordic Logistics Group?|Serving as the primary point of contact for 40+ international clients, tracking freight schedules, resolving customs issues, and coordinating with warehouses|Driving delivery trucks across Europe|Repairing ships in the harbour|Designing the company website",
        "Why is Paragraph 3 (the story about the winter Baltic ferry port snowstorm) the strongest part of the reference letter?|Because giving one concrete, real-world example of how she solved a crisis (rerouting 12 medical shipments by rail) proves her skills much better than vague adjectives alone|Because employers love reading about winter weather|Because it shows she likes trains|To make the letter five paragraphs long",
        "How did Sofia help the department when three new junior assistants were hired in the spring?|She volunteered to design a clear step-by-step training manual for them, which cut their onboarding time in half|She did all their work for them for a year|She bought them laptops|She gave them a test",
        "What does the business term 'onboarding time' mean in Paragraph 4?|The time it takes for a newly hired employee to learn the company's systems and become fully productive|The time it takes to board an airplane or ferry|The hours spent in morning traffic|The length of a lunch break",
        "Why is it helpful for a former manager to explain WHY the employee left the company in Paragraph 5?|To reassure future employers that she left on good terms (to pursue a Master's degree abroad) and was not fired for poor performance|Because it is a secret|To ask her to come back|To complain about universities",
        "What does the strong formal phrase 'I recommend Sofia Lindqvist without reservation' mean?|I recommend her 100% wholeheartedly, without any doubt or hesitation|I recommend her even though she didn't book a hotel reservation|I only recommend her for part-time jobs|I have some doubts about her skills",
        "What does Henrik Lindholm offer at the end of the letter?|He invites future employers to contact him by email or phone if they require any further details|He offers to pay Sofia's salary|He offers a discount on shipping|He asks for a job himself",
        "Which phrase in Paragraph 3 means 'What made Sofia stand out as special compared to others'?|'What set Sofia apart from other employees...'|'What put Sofia behind other employees...'|'What kept Sofia away from...'|'What made Sofia similar to...'"
      ]
    },
    {
      num: 39, level: "B1",
      icon: "🏢", genre: "ბიზნეს-პროექტი",
      title: "პროექტის შეთავაზება (Proposal) სამუშაო გარემოს გასაუმჯობესებლად",
      subtitle: "Writing an Internal Workplace Proposal: The Office Wellness Initiative",
      time: "8 წთ",
      prompt: "დაწერეთ შიდა საოფისე პროექტის შეთავაზება (Internal Proposal) კომპანიის მენეჯმენტისთვის სამუშაო გარემოს ან თანამშრომელთა კეთილდღეობის გასაუმჯობესებლად (მიზანი, 3 კონკრეტული ნაბიჯი, ბიუჯეტი და მოსალოდნელი სარგებელი).",
      template: "Proposal Title: [Title]. 1. Objective: The purpose of this proposal is to [Goal]. 2. Proposed Actions: We suggest introducing [Action 1] and [Action 2]. 3. Budget & Cost: The total estimated cost is [Amount] euros. 4. Expected Benefits: This initiative will improve [Benefit].",
      paragraphs: [
        [
          "Internal Proposal: 'Healthy Mind, Productive Team' — Q4 Office Wellness Initiative. Prepared for: Management Board | Prepared by: Staff Committee. 1. Background and Objective: Over the past six months, our company has grown rapidly, and our staff survey in September showed that seventy percent of employees experience afternoon back pain and eye strain from sitting at computer desks for eight hours a day. The purpose of this proposal is to introduce a low-cost workplace wellness programme to improve employee health and morale.",
          "შიდა პროექტის შეთავაზება: „ჯანსაღი გონება, პროდუქტიული გუნდი“ — მე-4 კვარტლის საოფისე კეთილდღეობის ინიციატივა. მომზადებულია: დირექტორთა საბჭოსთვის | ავტორი: თანამშრომელთა კომიტეტი. 1. წინაპირობა და მიზანი: ბოლო ექვსი თვის განმავლობაში ჩვენი კომპანია სწრაფად გაიზარდა, სექტემბრის შიდა გამოკითხვამ კი აჩვენა, რომ თანამშრომელთა სამოცდაათ პროცენტს დღეში რვა საათი კომპიუტერთან ჯდომის გამო აწუხებს ნაშუადღევის ზურგის ტკივილი და თვალების გადაღლა. ამ შეთავაზების მიზანია დაბალბიუჯეტიანი საოფისე ჯანსაღი პროგრამის დანერგვა თანამშრომელთა ჯანმრთელობისა და განწყობის გასაუმჯობესებლად."
        ],
        [
          "2. Proposed Action One — Ergonomic Desk Upgrades: First, we recommend converting the empty storage room on the third floor into a 'Quiet Break & Stretch Room' and purchasing ten adjustable standing-desk converters that employees can borrow when their backs feel stiff. Allowing staff to alternate between sitting and standing reduces back pain by fifty percent.",
          "2. შემოთავაზებული ნაბიჯი I — ერგონომიული სამუშაო გარემო: პირველ რიგში, გთავაზობთ მესამე სართულზე არსებული ცარიელი სათავსო ოთახის გადაკეთებას „მშვიდი შესვენებისა და გაწელვების ოთახად“ და ათი რეგულირებადი (ფეხზე დასადგომი) მაგიდის სადგამის შეძენას, რომლებსაც თანამშრომლები ზურგის დაღლისას დროებით გამოიყენებენ. ჯდომისა და ფეხზე დგომის მონაცვლეობა ზურგის ტკივილს ორმოცდაათი პროცენტით ამცირებს."
        ],
        [
          "3. Proposed Action Two — Healthy Kitchen & Hydration: Second, in our office kitchen, we suggest replacing the vending machine that sells sugary sodas and crisps with a filtered water dispenser and a 'Fresh Fruit Basket' delivered every Monday and Wednesday morning by a local farm.",
          "3. შემოთავაზებული ნაბიჯი II — ჯანსაღი სამზარეულო და წყლის ბალანსი: მეორე — ოფისის სამზარეულოში გთავაზობთ ტკბილი გაზიანი სასმელებისა და ჩიფსების სავაჭრო აპარატის ჩანაცვლებას გაფილტრული წყლის დისპენსერითა და „ახალი ხილის კალათით“, რომელსაც ადგილობრივი ფერმა ყოველ ორშაბათ და ოთხშაბათ დილით მოგვაწვდის."
        ],
        [
          "4. Proposed Action Three — Corporate Sports Discount: Third, the Olympic Sports Centre located just across the street from our office has offered our company a corporate partnership: if at least twenty employees join, the sports centre will reduce their monthly gym and swimming pool membership from forty euros to twenty euros, with the company contributing ten euros per employee.",
          "4. შემოთავაზებული ნაბიჯი III — კორპორატიული სპორტული ფასდაკლება: მესამე — ზუსტად ჩვენი ოფისის მოპირდაპირედ მდებარე „ოლიმპიურმა სპორტულმა ცენტრმა“ შემოგვთავაზა კორპორატიული პარტნიორობა: თუ მინიმუმ ოცი თანამშრომელი გაწევრიანდება, სპორტული ცენტრი მათ ყოველთვიურ დარბაზისა და აუზის აბონემენტს ორმოცი ევროდან ოც ევრომდე შეუმცირებს, საიდანაც კომპანია თითო თანამშრომელზე ათ ევროს დააფინანსებს."
        ],
        [
          "5. Estimated Budget and Expected Return: The one-time cost for the ten standing-desk converters is eight hundred euros, and the ongoing monthly cost for the fruit baskets and gym subsidy is just चार hundred and fifty euros in total. Studies show that workplace wellness programmes reduce sick-leave absences by twenty-five percent and boost afternoon productivity. We propose launching a three-month pilot programme starting on the first of November.",
          "5. სავარაუდო ბიუჯეტი და მოსალოდნელი სარგებელი: ათი რეგულირებადი მაგიდის სადგამის ერთჯერადი ღირებულება შეადგენს რვაას ევროს, ხოლო ხილის კალათებისა და სპორტდარბაზის თანადაფინანსების ყოველთვიური ხარჯი ჯამში მხოლოდ ოთხას ორმოცდაათი ევროა. კვლევები აჩვენებს, რომ მსგავსი პროგრამები ავადმყოფობის გამო გაცდენებს ოცდახუთი პროცენტით ამცირებს და ზრდის ნაშუადღევის პროდუქტიულობას. გთავაზობთ პირველი ნოემბრიდან სამთვიანი საპილოტე პროგრამის გაშვებას."
        ]
      ],
      glossary: [
        "The purpose of this proposal is to...|ამ შეთავაზების (პროექტის) მიზანია...", "eye strain and back pain|თვალების გადაღლა და ზურგის ტკივილი", "employee morale|თანამშრომელთა სულიერი განწყობა / მოტივაცია",
        "standing-desk converter|ფეხზე დგომით სამუშაო რეგულირებადი მაგიდის სადგამი", "alternate between sitting and standing|ჯდომისა და ფეხზე დგომის მონაცვლეობა", "vending machine|სავაჭრო აპარატი (სასუსნავების/სასმელების)",
        "corporate partnership|კორპორატიული პარტნიორობა", "one-time cost vs. ongoing monthly cost|ერთჯერადი ხარჯი და მიმდინარე ყოველთვიური ხარჯი", "sick-leave absence|ავადმყოფობის (ბიულეტენის) გამო გაცდენა", "three-month pilot programme|სამთვიანი საპილოტე (საცდელი) პროგრამა"
      ],
      questions: [
        "Why is a business proposal divided into numbered sections with clear headings (1. Background, 2. Proposed Actions, 5. Budget)?|So busy executives on the Management Board can quickly scan the problem, the concrete solutions, the exact cost, and the return on investment|Because proposals are read aloud on the radio|To hide the cost of the project|Because grammar rules forbid writing without numbers",
        "What specific data from the September staff survey does the committee use in Section 1 to justify the proposal?|Seventy percent of employees reported experiencing afternoon back pain and eye strain from sitting at desks for eight hours a day|Ten percent of employees wanted a longer summer holiday|Everyone wanted a new coffee machine|Nobody liked the office paint colour",
        "What is 'Proposed Action One' regarding the empty storage room and desks?|Converting the third-floor storage room into a Quiet Break & Stretch Room and buying ten adjustable standing-desk converters|Buying fifty new leather sofas|Turning the roof into a swimming pool|Closing the office on Fridays",
        "How do adjustable standing-desk converters help employees physically?|Allowing staff to alternate between sitting and standing reduces back pain by fifty percent|They make typing on a keyboard twice as fast|They charge laptops wirelessly|They cool down the room",
        "What change does the committee suggest making in the office kitchen in Section 3?|Replacing the sugary soda/crisps vending machine with a filtered water dispenser and a fresh fruit basket delivered every Monday and Wednesday|Hiring a full-time French chef|Removing the refrigerator|Serving free pizza every afternoon",
        "How does the corporate partnership offered by the Olympic Sports Centre across the street work?|If at least 20 employees join, the monthly membership drops from €40 to €20, with the company paying €10 and the employee paying €10|The gym is 100% free for one day a year|The company builds a gym inside the office basement|Membership costs 100 euros a month",
        "What is the difference between a 'one-time cost' and an 'ongoing monthly cost' in a budget?|A one-time cost (€800 for the desk converters) is paid only once at the start, whereas an ongoing monthly cost (€450 for fruit and gym subsidies) repeats every month|They mean the exact same thing|A one-time cost is paid every week|An ongoing cost is paid only once",
        "How does the committee prove to the Management Board that spending 450 euros a month will actually save the company money?|By pointing out that workplace wellness programmes reduce sick-leave absences by 25% and boost afternoon productivity|By promising to work on Sundays for free|By selling the fresh fruit to visitors|By turning off the office heating",
        "Why does the committee suggest starting with a 'three-month pilot programme' on 1st November?|A short trial ('pilot') period lowers the financial risk for management and allows them to measure the results before committing permanently|Because winter only lasts three months|Because the office building is closing in February|Because fruit only grows in November",
        "Which formal passive phrases are used at the top of a business report or proposal to show who receives it and who wrote it?|'Prepared for: Management Board | Prepared by: Staff Committee'|'To: Boss | From: Me'|'Dear Diary,'|'Once upon a time'"
      ]
    },
    {
      num: 40, level: "B1",
      icon: "🚇", genre: "პრობლემის გადაჭრის ესე",
      title: "პრობლემის გადაჭრის ესე: ქალაქის საგზაო საცობები",
      subtitle: "Writing a Problem-Solution Essay on Urban Traffic Congestion",
      time: "8 წთ",
      prompt: "დაწერეთ პრობლემის გადაჭრის ესე (Problem-Solution Essay) დიდ ქალაქებში საგზაო საცობებისა და ჰაერის დაბინძურების შესახებ (პრობლემის მიზეზები, 2-3 ეფექტიანი გამოსავალი და დასკვნა).",
      template: "One of the most pressing problems facing modern cities is [Problem]. This issue is primarily caused by [Cause]. To tackle this problem effectively, city authorities should take several practical steps. First, [Solution 1]. Second, [Solution 2]. By combining these measures, we can create cleaner, more efficient cities.",
      paragraphs: [
        [
          "Essay Title: Gridlock in the City — Causes and Practical Solutions for Urban Traffic Congestion. Every weekday morning and evening, millions of commuters in major cities around the world sit bumper-to-bumper in endless queues of traffic. Urban traffic congestion has become one of the most pressing challenges of modern city life, wasting millions of working hours, increasing stress levels, and filling the air with harmful exhaust fumes. However, this crisis can be solved through smart urban planning and investment in public transport.",
          "ესეს სათაური: პარალიზებული ქალაქი — ურბანული საგზაო საცობების მიზეზები და პრაქტიკული გადაჭრის გზები. ყოველ სამუშაო დილასა და საღამოს მსოფლიოს დიდ ქალაქებში მილიონობით მგზავრი საათობით დგას მანქანების უსასრულო კოლონებში. ურბანული საცობები თანამედროვე საქალაქო ცხოვრების ერთ-ერთ ყველაზე მწვავე გამოწვევად იქცა, რაც კარგავს მილიონობით სამუშაო საათს, ზრდის სტრესის დონეს და ჰაერს მავნე გამონაბოლქვით ავსებს. თუმცა, ამ კრიზისის მოგვარება შესაძლებელია გონივრული ქალაქგეგმარებითა და საზოგადოებრივ ტრანსპორტში ინვესტირებით."
        ],
        [
          "To find effective solutions, we must first understand the root causes of the problem. Over the past thirty years, car ownership has risen dramatically, while narrow historic city streets were never designed to handle such a volume of vehicles. Most importantly, studies show that during morning rush hour, eighty percent of private cars carry only one person — the driver! When fifty people drive fifty separate cars instead of riding one bus, traffic jams are inevitable.",
          "ეფექტიანი გადაწყვეტილებების საპოვნელად, ჯერ პრობლემის ძირეული მიზეზები უნდა გავიაზროთ. ბოლო ოცდაათი წლის განმავლობაში ავტომობილების რაოდენობა მკვეთრად გაიზარდა, მაშინ როცა ქალაქის ვიწრო ისტორიული ქუჩები ნაკადის ასეთ მოცულობაზე არასდროს ყოფილა გათვლილი. რაც მთავარია, კვლევები აჩვენებს, რომ დილის პიკის საათში კერძო მანქანების ოთხმოც პროცენტში მხოლოდ ერთი ადამიანი ზის — მძღოლი! როდესაც ორმოცდაათი ადამიანი ერთი ავტობუსის ნაცვლად ორმოცდაათი ცალკეული მანქანით მოძრაობს, საცობები გარდაუვალია."
        ],
        [
          "The first and most effective solution is to make public transport faster, cheaper, and more reliable than driving a private car. If buses are stuck in the exact same traffic jam as cars, nobody will switch to the bus! By painting dedicated 'Bus Only' lanes tracked by cameras on all major avenues and increasing the frequency of metro trains to every two minutes during rush hour, cities can cut commuting times in half.",
          "პირველი და ყველაზე ეფექტიანი გამოსავალია საზოგადოებრივი ტრანსპორტის გადაქცევა კერძო მანქანაზე უფრო სწრაფ, იაფ და საიმედო საშუალებად. თუ ავტობუსი ზუსტად იმავე საცობში დგას, რომელშიც მანქანები, ავტობუსზე არავინ გადაჯდება! ყველა მთავარ გამზირზე კამერებით კონტროლირებადი სპეციალური „ავტობუსის ზოლების“ (Bus Lanes) დახაზვითა და პიკის საათში მეტროს მატარებლების ინტერვალის ორ წუთამდე შემცირებით, ქალაქებს მგზავრობის დროის განახევრება შეუძლიათ."
        ],
        [
          "Secondly, cities should build large, free 'Park and Ride' car parks next to suburban metro and train stations on the edge of town. Commuters driving from surrounding villages can park their cars easily outside the city ring and take an express train into the centre in fifteen minutes. In addition, introducing flexible working hours — allowing office staff to start work at eight, nine, or ten o'clock — spreads out the morning rush.",
          "მეორეც, ქალაქებმა გარეუბნების მეტროსა და რკინიგზის სადგურებთან უნდა მოაწყონ დიდი, უფასო „Park and Ride“ (გააჩერე და იმგზავრე) ავტოსადგომები. ახლომდებარე სოფლებიდან მომავალ მძღოლებს შეუძლიათ მანქანები მარტივად დატოვონ ქალაქის შესასვლელში და ჩქაროსნული მატარებლით თხუთმეტ წუთში მოხვდნენ ცენტრში. გარდა ამისა, მოქნილი სამუშაო საათების შემოღება — რაც თანამშრომლებს საშუალებას მისცემს სამსახური დაიწყონ რვა, ცხრა ან ათ საათზე — დილის ნაკადს თანაბრად გადაანაწილებს."
        ],
        [
          "In conclusion, building wider highways inside cities never solves traffic congestion; it only attracts more cars. By investing in dedicated bus lanes, suburban Park-and-Ride hubs, safe cycle tracks, and flexible office schedules, cities can reclaim their streets for people and breathe clean air once again.",
          "დასასრულს, ქალაქების შიგნით უფრო განიერი გზატკეცილების მშენებლობა საცობების პრობლემას ვერასდროს აგვარებს — იგი მხოლოდ მეტ მანქანას იზიდავს. სპეციალურ ავტობუსის ზოლებში, გარეუბნის სატრანსპორტო კვანძებში, უსაფრთხო ველობილიკებსა და მოქნილ სამუშაო გრაფიკებში ინვესტირებით, ქალაქებს შეუძლიათ ქუჩები ადამიანებს დაუბრუნონ და კვლავ სუფთა ჰაერით ისუნთქონ."
        ]
      ],
      glossary: [
        "one of the most pressing challenges|ერთ-ერთი ყველაზე მწვავე / გადაუდებელი გამოწვევა", "bumper-to-bumper traffic|მჭიდრო საცობი (მანქანები ერთმანეთის მიჯრით)", "exhaust fumes|გამონაბოლქვი აირები",
        "root causes of the problem|პრობლემის ძირეული მიზეზები", "handle such a volume of vehicles|სატრანსპორტო საშუალებების ასეთი მოცულობის გატარება", "inevitable|გარდაუვალი",
        "dedicated 'Bus Only' lane|სპეციალური გამოყოფილი ზოლი მხოლოდ ავტობუსებისთვის", "cut commuting times in half|მგზავრობის დროის განახევრება", "spread out the morning rush|დილის პიკის საათის ნაკადის გადანაწილება/განტვირთვა", "reclaim streets for people|ქუჩების ადამიანებისთვის დაბრუნება"
      ],
      questions: [
        "How is a five-paragraph 'Problem-Solution Essay' logically organized?|Paragraph 1: Define the problem & its negative effects; Paragraph 2: Analyze the root causes; Paragraphs 3 & 4: Present concrete solutions; Paragraph 5: Conclusion|Five paragraphs describing only the history of cars|Listing ten problems without any solutions|Writing a personal story about buying a car",
        "What three negative consequences of urban traffic congestion are mentioned in Paragraph 1?|Wasting millions of working hours, increasing stress levels, and filling the air with harmful exhaust fumes|Making public parks greener|Lowering the price of petrol|Making buses run too fast",
        "What shocking statistic about morning rush-hour cars does the writer cite in Paragraph 2 as a root cause of congestion?|Eighty percent of private cars during morning rush hour carry only one person — the driver|Ninety percent of cars carry five passengers|Half of all cars are taxis|Historic streets are too wide",
        "Why don't people switch from private cars to buses if there are no dedicated bus lanes?|Because if buses are stuck in the exact same traffic jam as cars, taking the bus offers no time advantage|Because buses have no seats|Because bus tickets cost fifty euros|Because buses only run at night",
        "How can cities make public transport twice as fast according to Paragraph 3?|By painting camera-enforced dedicated 'Bus Only' lanes on major avenues and running metro trains every two minutes during rush hour|By painting all buses red|By removing traffic lights from the city|By making buses smaller",
        "How does a suburban 'Park and Ride' system work (Paragraph 4)?|Drivers from surrounding villages park their cars for free at suburban train/metro stations on the edge of town and take an express train into the centre|Drivers park their cars in the middle of the city park|Commuters ride bicycles on the highway|Cars are carried on top of trains",
        "How does introducing 'flexible working hours' (starting at 8, 9, or 10 AM) help reduce traffic jams?|It spreads out the morning rush over several hours instead of forcing everyone onto the roads at the exact same minute|It reduces the workday to two hours|It closes offices on Mondays|It makes people drive faster",
        "Why does the writer argue in the conclusion that 'building wider highways inside cities never solves traffic congestion'?|Because wider roads inside cities simply attract more private cars (a phenomenon urban planners call 'induced demand')|Because concrete is too expensive|Because wide roads cause snowstorms|Because buses cannot drive on wide roads",
        "What does the adjective 'pressing' mean in the phrase 'one of the most pressing challenges'?|Urgent and demanding immediate attention|Related to printing newspapers|Flat and heavy|Easy to ignore",
        "What four measures does the conclusion combine to solve urban gridlock?|Dedicated bus lanes, suburban Park-and-Ride hubs, safe cycle tracks, and flexible office schedules|More car parks, wider highways, cheaper fuel, and fewer trains|Closing schools and shops|Banning pedestrians from the centre"
      ]
    },
    {
      num: 41, level: "B1",
      icon: "📊", genre: "ანალიტიკური ანგარიში",
      title: "მომხმარებელთა კვლევის ანალიტიკური ანგარიშის დაწერა",
      subtitle: "Writing a Customer Feedback Survey Report for a Café Chain",
      time: "8 წთ",
      prompt: "დაწერეთ მოკლე ანალიტიკური ანგარიში (Survey Report) მომხმარებელთა გამოკითხვის შედეგებზე (კვლევის მიზანი, რა მოსწონთ მომხმარებლებს, რა უკმაყოფილება გამოიკვეთა პროცენტებში და რეკომენდაციები).",
      template: "Report Title: Customer Satisfaction Survey Results. 1. Introduction: The aim of this report is to summarize feedback from [Number] customers. 2. Positive Findings: Over [Number]% of respondents praised [Strength]. 3. Areas for Improvement: However, [Number]% complained about [Weakness]. 4. Recommendations: We recommend [Action].",
      paragraphs: [
        [
          "Customer Satisfaction Report — 'Green Bean Café' Autumn Survey 2026. 1. Introduction: The purpose of this report is to summarize the findings of our October customer feedback survey and to recommend practical improvements for the winter season. During the first two weeks of October, five hundred customers completed our digital questionnaire across our three city branches.",
          "მომხმარებელთა კმაყოფილების ანგარიში — კაფეების ქსელ „გრინ ბინის“ 2026 წლის შემოდგომის კვლევა. 1. შესავალი: ამ ანგარიშის მიზანია ჩვენი ოქტომბრის მომხმარებელთა გამოკითხვის შედეგების შეჯამება და ზამთრის სეზონისთვის პრაქტიკული გაუმჯობესებების შეთავაზება. ოქტომბრის პირველ ორ კვირაში ქალაქის სამივე ფილიალში ციფრული კითხვარი ხუთასმა მომხმარებელმა შეავსო."
        ],
        [
          "2. Key Strengths (Positive Feedback): Overall satisfaction with our product quality and staff friendliness is exceptionally high. Ninety-two percent of respondents rated our specialty Arabica coffee and fresh pastries as 'excellent' or 'very good', and eighty-eight percent praised the warm, polite attitude of our baristas. Our morning breakfast deal remains our most popular offering.",
          "2. ძირითადი ძლიერი მხარეები (დადებითი შეფასებები): ჩვენი პროდუქციის ხარისხითა და პერსონალის კეთილგანწყობით საერთო კმაყოფილება გამორჩეულად მაღალია. გამოკითხულთა ოთხმოცდათორმეტმა პროცენტმა ჩვენი არაბიკას ყავა და ახალი ფუნთუშეული შეაფასა როგორც „შესანიშნავი“ ან „ძალიან კარგი“, ხოლო ოთხმოცდარვა პროცენტმა შეაქო ჩვენი ბარისტების თბილი და თავაზიანი დამოკიდებულება. დილის საუზმის შეთავაზება კვლავ ჩვენს ყველაზე პოპულარულ პროდუქტად რჩება."
        ],
        [
          "3. Areas for Improvement (Customer Complaints): Despite the high ratings for coffee quality, the survey highlighted two clear operational bottlenecks. Firstly, sixty-four percent of weekday morning customers complained that the queue at the counter between 8:15 AM and 9:00 AM takes more than ten minutes because customers ordering complex hot food block the line for those simply buying a takeaway coffee.",
          "3. გასაუმჯობესებელი მიმართულებები (მომხმარებელთა შენიშვნები): ყავის ხარისხის მაღალი შეფასების მიუხედავად, კვლევამ გამოკვეთა ორი აშკარა საოპერაციო სუსტი წერტილი. პირველი: სამუშაო დღეების დილის მომხმარებელთა სამოცდაოთხმა პროცენტმა აღნიშნა, რომ დახლთან რიგი 08:15-დან 09:00 საათამდე ათ წუთზე მეტხანს გრძელდება, რადგან რთული ცხელი კერძების შემკვეთი სტუმრები აყოვნებენ მათ, ვისაც მხოლოდ თან წასაღები ყავის ყიდვა სურს."
        ],
        [
          "Secondly, forty-five percent of students and remote workers who visit our cafés in the afternoon noted that there are not enough electrical wall sockets for charging laptops, and that the Wi-Fi connection frequently drops on the second floor of the Central Branch.",
          "მეორეც, სტუდენტებისა და დისტანციურად მომუშავეების ორმოცდახუთმა პროცენტმა, რომლებიც ჩვენს კაფეებს ნაშუადღევს სტუმრობენ, აღნიშნა, რომ ლეპტოპების დასატენად კედლის როზეტები საკმარისი არ არის, ხოლო ცენტრალური ფილიალის მეორე სართულზე უსადენო ინტერნეტი (Wi-Fi) ხშირად წყდება."
        ],
        [
          "4. Actionable Recommendations: Based on these findings, we recommend three immediate steps: 1) Introduce a dedicated 'Express Takeaway Coffee' counter during morning rush hour (8:00–9:30 AM) so commuters are served within two minutes; 2) Install power strips with USB ports along the long wooden study tables; and 3) Place a Wi-Fi signal booster on the second floor of the Central Branch. Implementing these low-cost changes by November will significantly increase customer loyalty and daily revenue.",
          "4. პრაქტიკული რეკომენდაციები: ამ შედეგებზე დაყრდნობით, გთავაზობთ სამ დაუყოვნებლივ ნაბიჯს: 1) დილის პიკის საათებში (08:00–09:30 სთ) მოეწყოს ცალკე „სწრაფი გატანის ყავის“ დახლი, რათა მგზავრებს ორ წუთში მოვემსახუროთ; 2) გრძელი ხის სამუშაო მაგიდების გასწვრივ დამონტაჟდეს დენის გამანაწილებლები USB პორტებით; და 3) ცენტრალური ფილიალის მეორე სართულზე დაიდგას Wi-Fi სიგნალის გამაძლიერებელი. ნოემბრამდე ამ მცირებიუჯეტიანი ცვლილებების განხორციელება მნიშვნელოვნად გაზრდის მომხმარებელთა ერთგულებასა და ყოველდღიურ შემოსავალს."
        ]
      ],
      glossary: [
        "The purpose of this report is to...|ამ ანგარიშის მიზანია...", "summarize the findings|კვლევის შედეგების (მიგნებების) შეჯამება", "ninety-two percent of respondents|გამოკითხულთა (რესპონდენტთა) 92 პროცენტი",
        "Areas for Improvement|გასაუმჯობესებელი სფეროები / მიმართულებები", "operational bottleneck|საოპერაციო შეფერხების წერტილი („ვიწრო ყელი“)", "takeaway coffee|თან წასაღები ყავა",
        "Based on these findings,|ამ შედეგებზე (მონაცემებზე) დაყრდნობით,", "actionable recommendation|პრაქტიკულად განხორციელებადი რეკომენდაცია", "Wi-Fi signal booster|უსადენო ინტერნეტის სიგნალის გამაძლიერებელი", "customer loyalty and daily revenue|მომხმარებელთა ერთგულება და დღიური შემოსავალი"
      ],
      questions: [
        "How many customers completed the digital questionnaire across the three 'Green Bean Café' branches in October?|Five hundred customers|Only twenty customers|Five thousand customers|One hundred baristas",
        "What noun is used in formal survey reports to refer to the people who answered the survey questions?|'respondents' ('Ninety-two percent of respondents rated...')|'passengers'|'applicants'|'spectators'",
        "What were the two highest-rated strengths of the café chain in Section 2?|92% rated the Arabica coffee and fresh pastries as 'excellent' or 'very good', and 88% praised the polite attitude of the baristas|Cheap prices and large car parks|Fast Wi-Fi and twenty wall sockets|Late-night music concerts",
        "What does the business metaphor 'operational bottleneck' mean in Section 3?|A specific point of congestion in a system that slows down the whole process (just like the narrow neck of a bottle slows down pouring liquid)|A broken glass bottle in the kitchen|A new type of coffee drink|A discount voucher",
        "What was the #1 complaint reported by 64% of weekday morning customers?|The queue between 8:15 and 9:00 AM takes over ten minutes because complex hot food orders block people who just want a quick takeaway coffee|The coffee is served too cold|The café opens too late at ten o'clock|The croissants are too small",
        "What two complaints were reported by 45% of afternoon students and remote workers?|Not enough electrical wall sockets for charging laptops, and the Wi-Fi connection frequently dropping on the second floor of the Central Branch|The music is too loud and the chairs are uncomfortable|There is no green tea on the menu|The air conditioning is too cold",
        "How are the three recommendations in Section 4 directly matched to the complaints in Section 3?|Recommendation 1 (Express Takeaway counter) solves the morning queue; Recommendations 2 (power strips) and 3 (Wi-Fi booster) solve the afternoon laptop/Wi-Fi issues|The recommendations talk about painting the walls and changing the logo, ignoring the survey|They recommend raising coffee prices by fifty percent|They recommend closing the second floor",
        "How quickly will morning commuters be served at the proposed 'Express Takeaway Coffee' counter?|Within two minutes|Within twenty minutes|In half an hour|Only by booking online",
        "Which formal linking phrase begins Section 4 to show that the recommendations come directly from the survey data?|'Based on these findings, we recommend...'|'In my personal dream, I think...'|'Regardless of the survey,'|'Once upon a time,'",
        "What two business benefits will implementing these low-cost changes bring by November?|Significantly increasing customer loyalty and daily revenue|Reducing the number of customers|Allowing the café to close early|Eliminating the need for baristas"
      ]
    },
    {
      num: 42, level: "B1",
      icon: "✈️", genre: "მომხმარებლის უფლებები",
      title: "ოფიციალური პრეტენზია ავიაკომპანიას რეისის დაგვიანებაზე",
      subtitle: "Writing a Formal Compensation Claim to an Airline Under EU Rules",
      time: "8 წთ",
      prompt: "დაწერეთ ოფიციალური წერილი ავიაკომპანიას 4 საათზე მეტით დაგვიანებული ან გაუქმებული რეისის გამო კანონით გათვალისწინებული კომპენსაციის მოსათხოვნად (რეისის ნომერი, დაგვიანების ხანგრძლივობა, მიზეზი და მოთხოვნილი თანხა).",
      template: "Subject: Flight Delay Compensation Claim — Flight [Number], Booking #[Code]. Dear Customer Relations, I am writing to claim compensation under Regulation EC 261/2004 for Flight [Number] from [City] to [City] on [Date], which arrived [Number] hours late. I have attached my boarding pass and receipts. Yours faithfully, [Your Name].",
      paragraphs: [
        [
          "Subject: Formal Compensation Claim under Regulation EC 261/2004 — Flight EA-714 (Booking Ref: K9M2LP). Dear Customer Relations Department at EuroAirlines, I am writing to submit a formal claim for flight delay compensation and meal expenses following a five-hour delay on Flight EA-714 from Frankfurt to Lisbon on Friday, the sixteenth of October 2026.",
          "თემა: კომპენსაციის ოფიციალური მოთხოვნა EC 261/2004 რეგულაციის შესაბამისად — რეისი EA-714 (ჯავშნის კოდი: K9M2LP). ძვირფასო „ევროეარლაინსის“ მომხმარებელთა ურთიერთობის დეპარტამენტო, გწერთ რეისის დაგვიანების კომპენსაციისა და კვების ხარჯების ანაზღაურების ოფიციალური მოთხოვნით, რაც უკავშირდება 2026 წლის 16 ოქტომბერს, პარასკევს, ფრანკფურტი-ლისაბონის რეის EA-714-ის ხუთსაათიან დაგვიანებას."
        ],
        [
          "According to my ticket under Booking Reference K9M2LP, Flight EA-714 was scheduled to depart from Frankfurt Airport at 13:00 and land in Lisbon at 15:10 local time. However, boarding was delayed four times at Gate B-22, and the aircraft did not take off until 18:05, finally landing at Lisbon Airport at 20:15 — five hours and five minutes behind schedule.",
          "ჩემი ბილეთის თანახმად (ჯავშნის კოდი: K9M2LP), რეისი EA-714 ფრანკფურტის აეროპორტიდან განრიგით უნდა გაფრენილიყო 13:00 საათზე და ლისაბონში დაშვებულიყო ადგილობრივი დროით 15:10 საათზე. თუმცა, B-22 გასასვლელთან ჩასხდომა ოთხჯერ გადაიდო, თვითმფრინავი აფრინდა მხოლოდ 18:05 საათზე და საბოლოოდ ლისაბონის აეროპორტში დაეშვა 20:15 საათზე — განრიგით გათვალისწინებულ დროზე ხუთი საათითა და ხუთი წუთით გვიან."
        ],
        [
          "The captain announced over the cabin loudspeaker that the delay was caused by a technical fault with a fuel valve on the aircraft and the late arrival of a replacement part from your maintenance hangar. The weather in both Frankfurt and Lisbon was completely clear all afternoon, meaning the delay was not caused by extraordinary circumstances.",
          "კაპიტანმა სალონის ხმამაღლა მოლაპარაკეში გამოაცხადა, რომ დაგვიანება გამოწვეული იყო თვითმფრინავის საწვავის სარქველის ტექნიკური გაუმართაობითა და თქვენი სათადარიგო ანგარიდან სათადარიგო ნაწილის დაგვიანებული მოტანით. ამინდი როგორც ფრანკფურტში, ისე ლისაბონში მთელი ნაშუადღევის განმავლობაში სრულიად მოწმენდილი იყო, რაც ნიშნავს, რომ დაგვიანება არ ყოფილა გამოწვეული ფორსმაჟორული (განსაკუთრებული) გარემოებებით."
        ],
        [
          "Furthermore, despite waiting at the departure gate for over five hours, ground staff did not provide passengers with any food or drink vouchers as required by aviation law. Consequently, I had to purchase lunch and bottled water at an airport café at my own expense, costing eighteen euros and fifty cents.",
          "გარდა ამისა, მიუხედავად გასასვლელთან ხუთ საათზე მეტხანს ლოდინისა, სახმელეთო პერსონალს მგზავრებისთვის არ დაურიგებია კვებისა და სასმლის ვაუჩერები, როგორც ამას საავიაციო კანონმდებლობა მოითხოვს. შესაბამისად, აეროპორტის კაფეში საკუთარი ხარჯით მომიწია სადილისა და წყლის შეძენა, რაც თვრამეტი ევრო და ორმოცდაათი ცენტი დაჯდა."
        ],
        [
          "Under European Air Passenger Rights Regulation (EC) No 261/2004, passengers whose flight of over 1,500 kilometres arrives more than three hours late due to a technical issue are entitled to fixed compensation of चार hundred euros (€400), plus reimbursement for reasonable refreshment expenses (€18.50). I have attached copies of my boarding pass and the café receipt, and I request that the total of €418.50 be transferred to my bank account within fourteen days. Yours faithfully, Elena Vance.",
          "ევროპის ავიამგზავრთა უფლებების რეგულაციის (EC No 261/2004) თანახმად, მგზავრებს, რომელთა 1 500 კილომეტრზე მეტი მანძილის რეისი ტექნიკური მიზეზით სამ საათზე მეტით იგვიანებს, ეკუთვნით ფიქსირებული კომპენსაცია ოთხასი ევროს (400 €) ოდენობით, რასაც ემატება კვების გონივრული ხარჯების ანაზღაურება (18,50 €). წერილს დავურთე ჩემი ჩასხდომის ბარათისა და კაფეს ქვითრის ასლები და ვითხოვ ჯამური თანხის — 418,50 ევროს — ჩემს საბანკო ანგარიშზე ჩარიცხვას თოთხმეტი დღის ვადაში. პატივისცემით, ელენა ვანსი."
        ]
      ],
      glossary: [
        "Booking Reference (PNR)|ჯავშნის უნიკალური კოდი", "scheduled to depart / land|განრიგით გათვალისწინებული გაფრენა / დაშვება", "five hours behind schedule|განრიგზე ხუთი საათით გვიან (დაგვიანებით)",
        "technical fault|ტექნიკური გაუმართაობა / ხარვეზი", "extraordinary circumstances|განსაკუთრებული (ფორსმაჟორული) გარემოებები (მაგ. შტორმი)", "food and drink voucher|კვებისა და სასმლის ვაუჩერი/ტალონი",
        "at my own expense|საკუთარი ხარჯით", "Consequently,|შესაბამისად, / ამის შედეგად,", "be entitled to compensation|კანონით კომპენსაციის უფლების ქონა (გეკუთვნოდეს)", "within fourteen days|თოთხმეტი დღის ვადაში"
      ],
      questions: [
        "What exact flight details does Elena state in Paragraphs 1 and 2 to make her legal claim undeniable?|Flight number (EA-714), Booking Ref (K9M2LP), date (16th Oct 2026), scheduled times (13:00–15:10), and actual times (18:05–20:15 — 5 hours and 5 minutes late)|Only that her plane to Portugal was late last Friday|The colour of the airplane and the pilot's name|How much she paid for her hotel in Lisbon",
        "According to European air passenger law (EC 261/2004), why is it crucial to look at the ARRIVAL time at the destination (20:15 vs 15:10) rather than just take-off?|Because legal compensation is triggered when you arrive at your final destination three or more hours behind schedule|Because take-off times are never recorded|Because clocks in Lisbon are different|Because only night flights get compensation",
        "Why did Elena carefully note in Paragraph 3 what the captain announced ('technical fault with a fuel valve') and that the weather was clear?|Because airlines do not have to pay compensation for 'extraordinary circumstances' like severe storms, but they MUST pay for routine technical aircraft faults|Because she is an aircraft engineer|To praise the captain's voice|Because she likes weather forecasts",
        "What does the legal term 'extraordinary circumstances' mean in aviation regulations?|Events completely outside the airline's control, such as extreme weather storms, volcanic ash clouds, or airport security closures|Routine mechanical repairs or late crew|Too many passengers buying tickets|Running out of coffee on the plane",
        "What duty of care did the airline ground staff fail to provide during the five-hour wait at Gate B-22?|They failed to provide passengers with food and drink vouchers as required by aviation law|They didn't play music at the gate|They didn't upgrade everyone to First Class|They didn't carry passengers' hand luggage",
        "What does the phrase 'at my own expense' mean in Paragraph 4?|Paying for something with my own money|Buying something very expensive|Borrowing money from a stranger|Getting something for free",
        "Which formal linking word in Paragraph 4 means 'As a result / Therefore'?|'Consequently,'|'Nevertheless,'|'Although,'|'Meanwhile,'",
        "What does the phrase 'passengers are entitled to fixed compensation' mean in Paragraph 5?|Passengers have the official legal right to receive a set amount of compensation|Passengers can enter a lottery to win a ticket|Passengers must pay a fine to the airline|Passengers are given a title",
        "How did Elena calculate the exact total of €418.50 that she is claiming?|€400 fixed statutory compensation under Regulation EC 261/2004 + €18.50 reimbursement for her airport lunch and water receipt|She guessed a round number|It was the price of her plane ticket|€400 for the hotel + €18.50 for a taxi",
        "What two documents did Elena attach to her email, and what deadline did she set for the bank transfer?|Copies of her boarding pass and the café receipt, requesting payment within fourteen days|Her passport and university diploma, within two years|A photograph of Gate B-22|A letter from the airport café waiter"
      ]
    },
    {
      num: 43, level: "B1",
      icon: "🗣️", genre: "რეფლექსიური ესე",
      title: "რეფლექსიური ესე უცხო ენის შესწავლის გამოცდილებაზე",
      subtitle: "Writing a Reflective Essay: How Consistency Transformed My English",
      time: "8 წთ",
      prompt: "დაწერეთ რეფლექსიური ესე (Reflective Essay) თქვენი უცხო ენის შესწავლის გზაზე: რა სირთულეები გქონდათ თავიდან, რა სტრატეგიამ იმუშავა ყველაზე უკეთ და როგორ შეცვალა ამან თქვენი თავდაჯერებულობა.",
      template: "Looking back at my journey of learning English, I realize how much my approach has changed. In the beginning, I struggled with [Difficulty]. Everything changed when I started [New Habit]. Today, I feel much more confident when [Situation]. The biggest lesson I have learned is that consistency beats intensity!",
      paragraphs: [
        [
          "Essay Title: Small Steps Every Day — What Learning a Foreign Language Taught Me About Patience. Looking back at my journey of learning English over the past three years, I realize that mastering a new language is much more like training for a long-distance run than studying for a one-day history test. At school, I used to memorize long lists of vocabulary the night before an exam, only to forget ninety percent of the words a week later!",
          "ესეს სათაური: მცირე ნაბიჯები ყოველდღე — რა მასწავლა უცხო ენის შესწავლამ მოთმინების შესახებ. როდესაც ვიხსენებ ბოლო სამი წლის განმავლობაში ინგლისური ენის შესწავლის ჩემს გზას, ვხვდები, რომ ახალი ენის დაუფლება ბევრად უფრო ჰგავს გრძელ დისტანციაზე სირბილისთვის მომზადებას, ვიდრე ერთდღიანი ისტორიის ტესტისთვის დაზეპირებას. სკოლაში გამოცდის წინა ღამეს სიტყვების გრძელ სიებს ვიზეპირებდი, ერთი კვირის შემდეგ კი მათი ოთხმოცდაათი პროცენტი მავიწყდებოდა!"
        ],
        [
          "When I started my first job after university, I faced a painful reality check. Although I could recognize grammar rules on paper, I froze whenever a foreign client called me on the phone or asked me to write a detailed business email. I was so afraid of making a small grammatical mistake that I spent forty minutes writing a five-line email!",
          "როდესაც უნივერსიტეტის დამთავრების შემდეგ პირველი სამსახური დავიწყე, მტკივნეულ რეალობას შევეჯახე. მიუხედავად იმისა, რომ ქაღალდზე გრამატიკულ წესებს ვცნობდი, ვშეშდებოდი ყოველ ჯერზე, როცა უცხოელი კლიენტი ტელეფონზე მირეკავდა ან დეტალური საქმიანი იმეილის მიწერას მთხოვდა. პატარა გრამატიკული შეცდომის დაშვების იმდენად მეშინოდა, რომ ხუთხაზიანი წერილის დაწერას ორმოც წუთს ვანდომებდი!"
        ],
        [
          "The turning point came two years ago when I decided to replace irregular weekend cramming with a simple, twenty-minute daily habit. Instead of studying for four exhausting hours once a month, I began reading one short English article over my morning coffee, listening to a ten-minute podcast on my way to work, and reviewing ten flashcards before bed.",
          "გარდამტეხი მომენტი დადგა ორი წლის წინ, როდესაც გადავწყვიტე არარეგულარული, დამღლელი მეცადინეობა მარტივი ოცწუთიანი ყოველდღიური ჩვევით ჩამენაცვლებინა. ნაცვლად იმისა, რომ თვეში ერთხელ ოთხი საათი თავაუღებლად მესწავლა, დავიწყე დილის ყავაზე ერთი მოკლე ინგლისური სტატიის წაკითხვა, სამსახურის გზაზე ათწუთიანი პოდკასტის მოსმენა და ძილის წინ ათი ლექსიკური ბარათის გამეორება."
        ],
        [
          "I also changed how I learned new vocabulary. Rather than memorizing isolated single words from a dictionary, I started keeping a small notebook of ready-to-use 'word chunks' and sentence templates — such as 'I am writing to inquire about...' or 'On the other hand,'. Learning whole phrases in context made my writing flow naturally without translating word for word in my head.",
          "ასევე შევცვალე ახალი ლექსიკის შესწავლის მეთოდი. ლექსიკონიდან ცალკეული, იზოლირებული სიტყვების დაზეპირების ნაცვლად, დავიწყე პატარა ბლოკნოტის წარმოება, სადაც ვიწერდი მზა „სიტყვათა ბლოკებსა“ და წინადადების შაბლონებს — მაგალითად, „გწერთ, რათა გავიგო...“ ან „მეორე მხრივ,“. მთლიანი ფრაზების კონტექსტში სწავლამ ჩემი წერის სტილი ბუნებრივი გახადა, გონებაში სიტყვასიტყვით თარგმნის გარეშე."
        ],
        [
          "Today, I can draft clear reports, read novels in the original, and participate in international meetings without anxiety. The most valuable lesson this journey has taught me applies to every skill in life — whether boxing, playing music, or learning a language: small, consistent daily effort always beats occasional bursts of intensity!",
          "დღეს უკვე ყოველგვარი შფოთვის გარეშე შემიძლია მკაფიო ანგარიშების შედგენა, რომანების ორიგინალში კითხვა და საერთაშორისო შეხვედრებში მონაწილეობა. ყველაზე ძვირფასი გაკვეთილი, რომელიც ამ გზამ მასწავლა, ცხოვრების ნებისმიერ უნარს მიესადაგება — იქნება ეს კრივი, მუსიკის დაკვრა თუ ენის სწავლა: მცირე, მაგრამ სტაბილური ყოველდღიური ძალისხმევა ყოველთვის ამარცხებს იშვიათ და ერთჯერად გადატვირთვას!"
        ]
      ],
      glossary: [
        "Looking back at my journey,|როდესაც ვიხსენებ ჩემს განვლილ გზას,", "long-distance run|გრძელ დისტანციაზე სირბილი (მარათონი)", "face a reality check|რეალობის წინაშე აღმოჩენა / გამოფხიზლება",
        "The turning point came when...|გარდამტეხი მომენტი დადგა მაშინ, როცა...", "cramming before an exam|გამოცდის წინა ღამეს ნაჩქარევად დაზეპირება", "Rather than memorizing isolated words,|ცალკეული (იზოლირებული) სიტყვების დაზეპირების ნაცვლად,",
        "word chunks / sentence templates|სიტყვათა მზა ბლოკები / წინადადების შაბლონები", "translate word for word|სიტყვასიტყვით თარგმნა", "in the original|ორიგინალში (დედანში)", "Consistency beats intensity!|სტაბილურობა (მუდმივობა) ამარცხებს ერთჯერად ინტენსივობას!"
      ],
      questions: [
        "What is a 'Reflective Essay', and how is it written?|A personal essay in which the writer looks back at a real experience, analyzes what didn't work at first, explains the turning point, and shares the broader life lesson learned|A formal legal complaint to a company|A laboratory report about chemistry|A fictional story about knights",
        "What comparison (simile) does the writer use in Paragraph 1 to describe mastering a foreign language?|It is much more like training for a long-distance run than studying for a one-day history test|It is like jumping out of an airplane|It is like winning the lottery overnight|It is like buying a new coat",
        "Why didn't 'cramming' (memorizing long lists of words the night before a school exam) work in the long run?|Because the writer forgot ninety percent of the memorized words just a week later|Because school dictionaries had wrong translations|Because exams were only five minutes long|Because the teacher didn't grade the tests",
        "What 'painful reality check' did the writer face when starting their first job after university?|Although they knew grammar rules on paper, they froze on phone calls with foreign clients and took 40 minutes to write a five-line email out of fear of mistakes|They realized nobody at the company spoke English|They lost their university diploma|They had to learn Chinese in one week",
        "What was 'the turning point' in the writer's language learning two years ago?|Replacing irregular four-hour cramming sessions with a simple, twenty-minute daily habit|Moving to London for five years|Buying a five-hundred-euro grammar encyclopedia|Hiring three private tutors",
        "What three small activities made up the writer's new daily routine?|Reading one short English article over morning coffee, listening to a 10-minute podcast on the way to work, and reviewing 10 flashcards before bed|Studying grammar tables for three hours at midnight|Watching silent movies|Writing ten pages by hand every morning",
        "How did the writer change their method of learning vocabulary in Paragraph 4?|Instead of memorizing isolated single words, they kept a notebook of ready-to-use 'word chunks' and sentence templates in context|They stopped learning vocabulary completely|They memorized the dictionary in alphabetical order from A to Z|They only learned nouns",
        "How did learning whole phrases and 'word chunks' improve the writer's email writing?|It made their writing flow naturally without having to translate word for word in their head|It made their handwriting neater|It allowed them to write emails without verbs|It made their emails fifty pages long",
        "Which formal structure in Paragraph 4 means 'Instead of memorizing isolated single words...'?|'Rather than memorizing isolated single words...'|'Because of memorizing...'|'In addition to memorizing...'|'Despite of memorizing...'",
        "What universal life lesson does the writer conclude with in Paragraph 5?|Small, consistent daily effort always beats occasional bursts of intensity (in language, sport, or music)|You can only learn a language if you are born in Britain|Making mistakes is unforgivable|Only grammar rules matter"
      ]
    },
    {
      num: 44, level: "B1",
      icon: "🎭", genre: "პრესრელიზი და მედია",
      title: "პრესრელიზის დაწერა კულტურული ფესტივალის შესახებ",
      subtitle: "Writing an Official Press Release for the Autumn Jazz & Craft Festival",
      time: "8 წთ",
      prompt: "დაწერეთ ოფიციალური პრესრელიზი (Press Release) მედიისა და საზოგადოებისთვის მომავალი კულტურული, მუსიკალური ან საქველმოქმედო ფესტივალის დასაანონსებლად (სათაური, ვინ/რა/სად/როდის, პროგრამის მთავარი დეტალები, ორგანიზატორის ციტატა და საკონტაქტო ინფორმაცია).",
      template: "FOR IMMEDIATE RELEASE: [Event Name] Returns to [Location] This [Month]! [City, Date] — This weekend, [Organization] will host the annual [Event Name] at [Venue] from [Time] to [Time]. Admission is free. '[Quote from organizer],' said [Name], Festival Director. Media Contact: [Email/Phone].",
      paragraphs: [
        [
          "FOR IMMEDIATE RELEASE: The Old Harbour Jazz & Artisan Craft Festival Returns This November! [BRISTOL, 23rd October 2026] — On Saturday the seventh and Sunday the eighth of November, the historic Harbourside Quarter will come alive with music, colour, and local craftsmanship as the sixth annual 'Old Harbour Jazz & Craft Festival' opens its gates from 11:00 AM until 10:00 PM.",
          "დაუყოვნებლივ გასავრცელებლად: ამ ნოემბერს ძველი ნავსადგურის ჯაზისა და ხელნაკეთი ნივთების ფესტივალი ბრუნდება! [ბრისტოლი, 2026 წლის 23 ოქტომბერი] — შაბათს, შვიდ ნოემბერს, და კვირას, რვა ნოემბერს, ისტორიული საპორტო კვარტალი აივსება მუსიკით, ფერებითა და ადგილობრივი ოსტატების ნამუშევრებით, როდესაც მეექვსე ყოველწლიური „ძველი ნავსადგურის ჯაზისა და ხელოსნობის ფესტივალი“ კარს გააღებს დილის 11:00-დან ღამის 22:00 საათამდე."
        ],
        [
          "Organized by the Bristol Cultural Trust in partnership with the City Port Authority, this two-day open-air festival is completely free of charge for visitors of all ages. Over the weekend, more than twenty jazz, soul, and acoustic bands — including both university ensembles and renowned international saxophonists — will perform live across three covered waterfront stages.",
          "ბრისტოლის კულტურის ფონდისა და ქალაქის პორტის ადმინისტრაციის ერთობლივი ორგანიზებით გამართული ეს ორდღიანი ღია ცის ქვეშ მიმდინარე ფესტივალი სრულიად უფასოა ნებისმიერი ასაკის სტუმრისთვის. უქმეების განმავლობაში ოცზე მეტი ჯაზური, სოულ და აკუსტიკური ბენდი — როგორც საუნივერსიტეტო ანსამბლები, ისე ცნობილი საერთაშორისო საქსოფონისტები — ცოცხლად შეასრულებს მუსიკას სანაპიროს სამ გადახურულ სცენაზე."
        ],
        [
          "Alongside the music stages, eighty wooden market stalls along the cobblestone quay will showcase handmade ceramics, leather notebooks, woollen clothing, and wooden toys crafted by regional artists. Visitors can also take part in free one-hour workshops in pottery wheel throwing, watercolour sketching, and traditional wooden boat carving.",
          "მუსიკალური სცენების გასწვრივ, ქვაფენილიან სანაპიროზე განლაგებულ ოთხმოც ხის სავაჭრო პავილიონში გამოიფინება რეგიონული ხელოვანების მიერ შექმნილი ხელნაკეთი კერამიკა, ტყავის ბლოკნოტები, შალის სამოსი და ხის სათამაშოები. დამთვალიერებლებს ასევე შეეძლებათ მონაწილეობა მიიღონ უფასო ერთსაათიან ვორქშოპებში სამეთუნეო ჩარხზე მუშაობის, აკვარელით ხატვისა და ხის ნავების ტრადიციული კვეთის მიმართულებით."
        ],
        [
          "'Our goal with the Old Harbour Festival has always been to bring neighbours and visitors together as the days grow shorter, celebrating the incredible creative talent we have right here in our region,' said Clara Thorne, Director of the Bristol Cultural Trust. 'Because all three stages and the dining tents are covered by weatherproof canopies, everyone can enjoy warm street food and great music rain or shine!'",
          "„ძველი ნავსადგურის ფესტივალის მთავარი მიზანი ყოველთვის იყო მეზობლებისა და სტუმრების გაერთიანება შემოდგომის მოკლე დღეებში და იმ საოცარი შემოქმედებითი ნიჭის წარმოჩენა, რომელიც ჩვენს რეგიონში გვაქვს, — განაცხადა კლარა თორნმა, ბრისტოლის კულტურის ფონდის დირექტორმა. — რადგან სამივე სცენა და კვების კარვები დაცულია წყალგაუმტარი გადახურვით, ყველას შეუძლია ისიამოვნოს თბილი კერძებითა და შესანიშნავი მუსიკით ნებისმიერ ამინდში!“"
        ],
        [
          "To reduce traffic around the harbour, free electric shuttle buses will run every ten minutes from the Central Railway Station directly to the festival gates on both days. For the full stage schedule, artist interviews, and press accreditation, please visit www.oldharbourfest.org or contact Media Officer Paul Jenkins at press@oldharbourfest.org (Tel: +44 117 496 0320). ### (END)",
          "ნავსადგურის გარშემო საცობების შესამცირებლად, ორივე დღეს ცენტრალური რკინიგზის სადგურიდან პირდაპირ ფესტივალის ჭიშკრამდე ყოველ ათ წუთში იმოძრავებს უფასო ელექტროავტობუსი. სცენების სრული განრიგის, არტისტების ინტერვიუებისა და პრესის აკრედიტაციისთვის გთხოვთ ეწვიოთ ვებსაიტს www.oldharbourfest.org ან დაუკავშირდეთ მედიაკოორდინატორ პოლ ჯენკინსს: press@oldharbourfest.org (ტელ.: +44 117 496 0320). ### (დასასრული)"
        ]
      ],
      glossary: [
        "FOR IMMEDIATE RELEASE|დაუყოვნებლივ გასავრცელებლად (პრესრელიზის სტანდარტული სათაური)", "come alive with music|მუსიკით გამოცოცხლება / ახმაურება", "in partnership with...|...-თან პარტნიორობით (ერთობლივად)",
        "free of charge|სრულიად უფასოდ", "showcase handmade crafts|ხელნაკეთი ნივთების წარმოჩენა / გამოფენა", "take part in workshops|ვორქშოპებში (პრაქტიკულ მასტერკლასებში) მონაწილეობის მიღება",
        "weatherproof canopy|უამინდობისგან (წვიმისგან) დამცავი გადახურვა/ტენტი", "rain or shine|ნებისმიერ ამინდში (წვიმასა თუ დარში — იდიომი)", "press accreditation|პრესის (ჟურნალისტების) აკრედიტაცია", "### (END)|### (პრესრელიზის დასრულების სტანდარტული ნიშანი)"
      ],
      questions: [
        "What does the standard media heading 'FOR IMMEDIATE RELEASE' at the top of a press release mean?|That journalists and news outlets are allowed to publish the information immediately as soon as they receive it|That the festival tickets are sold out|That the event has been cancelled|That the document is a private secret",
        "What are the 'Five Ws' that a journalist looks for in the very first paragraph of a press release?|Who, What, When, Where, and Why (The 6th annual Old Harbour Jazz & Craft Festival, in Bristol's Harbourside Quarter, on 7–8 November, from 11 AM to 10 PM)|The history of jazz music in the 1920s|A list of ticket prices for airplanes|The biography of the city mayor",
        "How much does admission to the two-day Old Harbour Festival cost?|Nothing — it is completely free of charge for visitors of all ages|Twenty euros per person|Ten euros for adults and five for children|Fifty euros for a weekend pass",
        "How many bands will perform live, and across how many stages?|More than twenty jazz, soul, and acoustic bands across three covered waterfront stages|Only two bands on one small stage|One hundred rock bands in a stadium|A single solo pianist",
        "What can visitors see and do along the cobblestone quay besides listening to music?|Browse 80 wooden stalls selling handmade crafts (ceramics, leather notebooks, wool, toys) and join free one-hour workshops in pottery, watercolour, and wood carving|Go ice skating and skiing|Watch movies in an underground cinema|Buy cars and motorcycles",
        "Why do press releases always include a direct quotation from an organizer or director in Paragraph 4 (Clara Thorne's quote)?|To provide a human voice and ready-made quote that newspaper and radio journalists can include directly in their news stories|Because the writer forgot how to write in the third person|To make the grammar simpler|Because laws forbid writing without quotation marks",
        "What does the idiom 'rain or shine' mean in Clara Thorne's quote?|Regardless of the weather — whether it rains or the sun shines (because the stages and dining tents have weatherproof canopies)|Only when the sun is shining brightly|Only at night when the moon is out|During winter snow",
        "How can visitors travel from the Central Railway Station to the festival without causing traffic jams?|Free electric shuttle buses will run every ten minutes directly from the station to the festival gates on both days|By swimming across the harbour|By taking a helicopter|Only by private taxi",
        "What information is always placed in the final paragraph of a press release?|The website link and the name, email, and phone number of the Media Officer for press inquiries and accreditation|A recipe for street food|The lyrics of the jazz songs|A list of hotel rooms",
        "What do the three hash symbols '###' at the very bottom of a press release signify in journalism?|It is the traditional international journalistic symbol marking the official end of the press release text|It means three more pages are missing|It is a password for Wi-Fi|It is a telefon number code"
      ]
    },
    {
      num: 45, level: "B1",
      icon: "📚", genre: "შედარებითი ესე",
      title: "შედარებითი ესე: ბეჭდური წიგნები თუ ელექტრონული საკითხავები",
      subtitle: "Writing a Comparative Essay: Printed Books vs. Digital E-Readers",
      time: "8 წთ",
      prompt: "დაწერეთ შედარებითი ესე (Comparative Essay), სადაც შეადარებთ ტრადიციულ ნაბეჭდ წიგნებსა და ელექტრონულ საკითხავებს (E-Readers) მოხერხებულობის, კონცენტრაციისა და გამოყენების კუთხით.",
      template: "When the first e-readers were introduced, many predicted the end of paper books. However, both formats have unique strengths. In terms of convenience and travel, e-readers are superior because [Reason]. Conversely, printed books offer [Advantage]. Ultimately, the two formats complement each other.",
      paragraphs: [
        [
          "Essay Title: Ink on Paper or Pixels on a Screen — Why Both Printed Books and E-Readers Have a Place in Modern Life. Fifteen years ago, when lightweight electronic e-readers first became popular, many technology commentators predicted that traditional paper books would soon vanish like cassette tapes. Yet walk into any city bookshop today, and you will see that printed books remain more popular than ever! Rather than replacing paper, digital e-readers have simply given readers a second tool, as each format excels in different situations.",
          "ესეს სათაური: მელანი ქაღალდზე თუ პიქსელები ეკრანზე — რატომ აქვს თანამედროვე ცხოვრებაში თავისი ადგილი როგორც ნაბეჭდ წიგნებს, ისე ელექტრონულ საკითხავებს. თხუთმეტი წლის წინ, როდესაც მსუბუქი ელექტრონული საკითხავები (რიდერები) პირველად გახდა პოპულარული, ბევრი ტექნოლოგიური მიმომხილველი წინასწარმეტყველებდა, რომ ტრადიციული ქაღალდის წიგნები მალე აუდიოკასეტებივით გაქრებოდა. თუმცა, დღეს ნებისმიერ წიგნის მაღაზიაში შესვლისას დაინახავთ, რომ ნაბეჭდი წიგნები ისეთი პოპულარულია, როგორც არასდროს! ქაღალდის ჩანაცვლების ნაცვლად, რიდერებმა მკითხველებს უბრალოდ მეორე იარაღი მისცა, რადგან თითოეული ფორმატი სხვადასხვა გარემოშია შეუცვლელი."
        ],
        [
          "When it comes to travel, commuting, and convenience, digital e-readers have an unbeatable advantage. A single e-reader weighing less than two hundred grams — lighter than one paperback novel — can store three thousand books at once! Whether you are going on a two-week summer holiday or riding a crowded morning metro train, you can carry an entire library in your coat pocket, adjust the font size for tired eyes, and read in bed at night using the soft built-in light.",
          "როდესაც საქმე ეხება მოგზაურობას, ტრანსპორტში მგზავრობასა და მოხერხებულობას, ელექტრონულ საკითხავებს უდავო უპირატესობა აქვს. ერთ რიდერს, რომელიც ორას გრამზე ნაკლებს იწონის — ანუ ერთ რბილყდიან რომანზე მსუბუქია — ერთდროულად სამი ათასი წიგნის დატევა შეუძლია! მიდიხართ ორკვირიან საზაფხულო შვებულებაში თუ მგზავრობთ დილის გადატვირთული მეტროთი, შეგიძლიათ მთელი ბიბლიოთეკა ქურთუკის ჯიბით ატაროთ, დაღლილი თვალებისთვის გაადიდოთ შრიფტის ზომა და ღამით საწოლში იკითხოთ რბილი ჩაშენებული განათებით."
        ],
        [
          "Moreover, for language learners reading in English, e-readers offer a brilliant built-in dictionary feature: instead of stopping to search a heavy dictionary, you simply tap your finger on an unfamiliar word to see its definition and translation in one second!",
          "უფრო მეტიც, მათთვის, ვინც ინგლისურ ენას სწავლობს, ელექტრონულ საკითხავებს აქვს ჩაშენებული ლექსიკონის ბრწყინვალე ფუნქცია: ნაცვლად იმისა, რომ კითხვა შეწყვიტოთ და სიტყვა სქელ ლექსიკონში ეძებოთ, უბრალოდ თითს აჭერთ უცნობ სიტყვას და ერთ წამში ხედავთ მის განმარტებასა და თარგმანს!"
        ],
        [
          "By contrast, when it comes to deep concentration, memory retention, and sensory pleasure, printed books remain unmatched. Cognitive studies show that holding a physical book helps the brain map information spatially: we remember that an important idea appeared near the top of a left-hand page about halfway through the book. In addition, a paper book has zero battery anxiety, works in bright beach sunlight, and allows students to flip rapidly back and forth between chapters and maps.",
          "საპირისპიროდ, როდესაც საქმე ეხება ღრმა კონცენტრაციას, დამახსოვრებასა და სენსორულ სიამოვნებას, ნაბეჭდი წიგნი შეუდარებელი რჩება. კოგნიტური კვლევები აჩვენებს, რომ ფიზიკური წიგნის ხელში ჭერა ტვინს ინფორმაციის სივრცულ დამახსოვრებაში ეხმარება: ჩვენ გვამახსოვრდება, რომ მნიშვნელოვანი აზრი ეწერა წიგნის შუაში, მარცხენა გვერდის ზედა ნაწილში. გარდა ამისა, ქაღალდის წიგნს არასდროს უჯდება ელემენტი, მშვენივრად იკითხება პლაჟის კაშკაშა მზეზე და სტუდენტებს საშუალებას აძლევს სწრაფად გადაფურცლონ წინ და უკან თავებსა და რუკებს შორის."
        ],
        [
          "Furthermore, a physical book has an emotional and social life that a digital file can never replicate: you can lend a favourite novel to a friend, write personal notes in the margins, or admire it on your living room bookshelf as a memory of the year you read it. Ultimately, we do not have to choose one over the other: e-readers are the ultimate travel companion, while printed books remain a timeless sanctuary for slow, contemplative reading at home.",
          "ამასთანავე, ფიზიკურ წიგნს აქვს ემოციური და სოციალური სიცოცხლე, რომელსაც ციფრული ფაილი ვერასდროს გაიმეორებს: შეგიძლიათ საყვარელი რომანი მეგობარს ათხოვოთ, მინდვრებზე მიაწეროთ პირადი შენიშვნები, ან მისაღები ოთახის თაროზე შემოინახოთ იმ წლის სახსოვრად, როცა იგი წაიკითხეთ. საბოლოო ჯამში, სულაც არ არის აუცილებელი ერთზე უარის თქმა მეორის სასარგებლოდ: რიდერი საუკეთესო თანამგზავრია გზაში, ნაბეჭდი წიგნი კი სახლში მშვიდი, ჩაფიქრებული კითხვის მარადიულ თავშესაფრად რჩება."
        ]
      ],
      glossary: [
        "When it comes to...,|როდესაც საქმე ეხება ...-ს,", "unbeatable advantage|უდავო / შეუდარებელი უპირატესობა", "built-in dictionary|ჩაშენებული ლექსიკონი",
        "unfamiliar word|უცნობი სიტყვა", "By contrast,|საპირისპიროდ, / ამის საპირისპიროდ, (შედარებითი კავშირი)", "memory retention|მეხსიერებაში შენარჩუნება / დამახსოვრება",
        "flip back and forth|წინ და უკან სწრაფად გადაფურცვლა", "write notes in the margins|გვერდის მინდვრებზე (კიდეებზე) შენიშვნების მიწერა", "choose one over the other|ერთის არჩევა მეორის ხარჯზე (მეორეზე უარის თქმით)", "complement each other|ერთმანეთის შევსება"
      ],
      questions: [
        "What prediction did many technology commentators make fifteen years ago when e-readers first appeared, and were they right?|They predicted that paper books would soon vanish like cassette tapes, which proved wrong as printed books remain hugely popular|They predicted that nobody would ever use an e-reader|They predicted that libraries would close by 2015|They predicted that paper would become illegal",
        "Which useful phrase does the writer use at the start of Paragraphs 2 and 4 to introduce the specific criteria being compared?|'When it comes to...' ('When it comes to travel, commuting, and convenience...', 'when it comes to deep concentration...')|'In spite of...'|'Because of...'|'Instead of...'",
        "How much does a typical e-reader weigh, and how many books can it store at once?|Less than two hundred grams (lighter than one paperback), storing up to three thousand books at once|Two kilograms, storing ten books|Five百 grams, storing fifty books|The same weight as ten hardcover books",
        "What practical advantages does an e-reader offer for travelling and reading in bed?|You can carry a whole library in your pocket, adjust the font size for tired eyes, and read in the dark with the soft built-in light|It can cook breakfast and make phone calls|It never needs to be charged for ten years|It prints paper pages automatically",
        "Why are e-readers especially helpful for people learning a foreign language like English (Paragraph 3)?|Because of the built-in dictionary feature: tapping an unfamiliar word shows its definition and translation in one second|Because e-readers read the book aloud in ten voices|Because e-readers automatically shorten long sentences|Because all e-books are free",
        "Which contrasting discourse marker opens Paragraph 4 to switch from the strengths of e-readers to the strengths of printed books?|'By contrast,'|'Similarly,'|'Therefore,'|'For example,'",
        "How does holding a physical paper book help with 'memory retention' according to cognitive studies?|It helps the brain map information spatially (remembering that an idea was near the top of a left-hand page halfway through the book)|The smell of paper makes you read twice as fast|Paper books have larger letters than screens|Heavy books exercise your arms",
        "Why do many students prefer printed textbooks when studying complex chapters with maps or diagrams?|Because a paper book has zero battery anxiety and allows you to flip rapidly back and forth between chapters and maps with your fingers|Because textbooks are lighter than e-readers|Because e-readers cannot display numbers|Because professors ban computers at home",
        "What emotional and social qualities does a physical book have that a digital file cannot replicate (Paragraph 5)?|You can lend it to a friend, write personal notes in the margins, and keep it on your bookshelf as a visible memory|You can email it to a hundred people in one second|You can change its font size|It glows in the dark",
        "What is the writer's final conclusion about printed books versus e-readers?|We don't have to choose one over the other; they complement each other (e-readers for travel/commuting, and printed books for deep reading at home)|Printed books should replace all screens immediately|E-readers are better in every single situation|Both formats will disappear soon"
      ]
    }
  ];

  // გავაერთიანოთ B1 და (მომავალი) B2 მასივები App.WritingDataB-ში
  App.WritingDataB = App.WritingDataB1.concat(App.WritingDataB2 || []);
})(window);
// ============================================================================
// B2 LEVEL — WRITING TOPICS 46 TO 60 (5 PARAGRAPHS, 10 PHRASES & 10 QUESTIONS)
// ============================================================================
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  App.WritingDataB2 = [
    {
      num: 46, level: "B2",
      icon: "🏦", genre: "ფინანსური მემორანდუმი",
      title: "საკრედიტო მემორანდუმი: კომერციული სესხის განაცხადის შეფასება",
      subtitle: "Writing an Executive Credit Memorandum for a Business Loan",
      time: "9 წთ",
      prompt: "დაწერეთ საბანკო საკრედიტო კომიტეტისთვის განკუთვნილი ანალიტიკური რეზიუმე (Credit Memo): მსესხებლის პროფილი, სესხის მიზნობრიობა, ფინანსური მაჩვენებლები, უზრუნველყოფა და დასკვნა.",
      template: "CREDIT MEMORANDUM — Borrower: [Company Name]. 1. Purpose: The applicant requests a [Amount] loan for [Term] months to finance [Purpose]. 2. Financial Overview: Annual revenue reached [Amount], with an EBITDA margin of [Pct]%. 3. Collateral & Risk: The facility is secured by [Asset]. Recommendation: Approval is recommended subject to [Condition].",
      paragraphs: [
        [
          "EXECUTIVE CREDIT MEMORANDUM — To: Commercial Credit Committee | Borrower: 'Alpine Timber & Furniture Ltd.' 1. Transaction Overview and Purpose: The applicant requests a thirty-six-month term loan of two hundred and fifty thousand euros (€250,000) at a fixed interest rate of 6.5% per annum. The primary purpose of the facility is to purchase an automated German CNC wood-cutting machine, while €50,000 will be allocated to working capital to finance raw oak timber inventory ahead of the peak autumn production season.",
          "საკრედიტო მემორანდუმის რეზიუმე — ადრესატი: კომერციული საკრედიტო კომიტეტი | მსესხებელი: შპს „ალპაინ თიმბერ ენდ ფურნიჩერ“. 1. ტრანზაქციის მიმოხილვა და მიზნობრიობა: განმცხადებელი ითხოვს ოცდათექვსმეტთვიან ვადიან სესხს ორას ორმოცდაათი ათასი ევროს (250 000 €) ოდენობით, წლიური 6,5%-იანი ფიქსირებული განაკვეთით. სესხის ძირითადი მიზნობრიობაა გერმანული ავტომატიზებული CNC ხის საჭრელი დანადგარის შეძენა, ხოლო 50 000 ევრო მიემართება საბრუნავი საშუალებების დასაფინანსებლად — მუხის ნედლეულის მარაგის შესავსებად შემოდგომის პიკური სეზონის წინ."
        ],
        [
          "2. Company Profile and Management Track Record: Founded in 2016 by two civil and mechanical engineers, Alpine Timber Ltd. manufactures solid oak dining tables and office desks for domestic retail chains and hotel projects. The company operates from an owned 1,800-square-metre workshop in the industrial zone and employs thirty-two full-time craftsmen. Over the past five years, the borrower has maintained an impeccable credit history with our bank, having repaid two previous equipment loans without a single day of delinquency.",
          "2. კომპანიის პროფილი და მენეჯმენტის გამოცდილება: 2016 წელს ორი ინჟინრის მიერ დაფუძნებული შპს „ალპაინ თიმბერი“ აწარმოებს მუხის მასიურ სასადილო და საოფისე მაგიდებს ადგილობრივი სავაჭრო ქსელებისა და სასტუმრო პროექტებისთვის. კომპანია საქმიანობს სამრეწველო ზონაში მდებარე საკუთარ 1 800 კვ.მ. საწარმოში და ასაქმებს ოცდათორმეტ სრულგანაკვეთიან ხელოსანს. ბოლო ხუთი წლის განმავლობაში მსესხებელს ჩვენს ბანკში აქვს უნაკლო საკრედიტო ისტორია — მან ერთი დღის ვადაგადაცილების გარეშე დაფარა ორი წინა სესხი."
        ],
        [
          "3. Financial Performance and Cash Flow Analysis: Audited financial statements for the 2025 fiscal year demonstrate robust growth. Annual turnover rose by twenty-two percent year-on-year to reach €1.45 million, driven by three new long-term supply contracts with coastal hotel resorts. Operating profit (EBITDA) stood at €290,000, representing a healthy twenty percent margin. Projected cash flows indicate a Debt Service Coverage Ratio (DSCR) of 1.85x, providing a comfortable cushion above our bank's minimum requirement of 1.30x.",
          "3. ფინანსური მაჩვენებლები და ფულადი ნაკადების ანალიზი: 2025 ფინანსური წლის აუდირებული ანგარიშგება აჩვენებს მყარ ზრდას. წლიური ბრუნვა წინა წელთან შედარებით ოცდაორი პროცენტით გაიზარდა და 1,45 მილიონ ევროს მიაღწია, რაც განაპირობა ზღვისპირა სასტუმრო კომპლექსებთან გაფორმებულმა სამმა ახალმა გრძელვადიანმა კონტრაქტმა. საოპერაციო მოგებამ (EBITDA) შეადგინა 290 000 ევრო (20%-იანი მარჟა). პროგნოზირებული ფულადი ნაკადების მიხედვით, ვალის მომსახურების კოეფიციენტი (DSCR) შეადგენს 1,85-ს, რაც საიმედოდ აღემატება ბანკის მინიმალურ მოთხოვნას (1,30)."
        ],
        [
          "4. Collateral Coverage and Risk Mitigation: The proposed loan will be fully secured by a first-ranking mortgage over the borrower's industrial workshop (independently appraised at €420,000, yielding a Loan-to-Value ratio of 59.5%) and a pledge over the newly acquired CNC machinery. The main operational risk — potential fluctuations in raw timber prices — is mitigated by fixed-price six-month supply agreements with local forestry cooperatives.",
          "4. უზრუნველყოფა და რისკების დაზღვევა: წარმოდგენილი სესხი სრულად იქნება უზრუნველყოფილი მსესხებლის საწარმოო შენობის პირველი რიგის იპოთეკით (დამოუკიდებელი შეფასებით 420 000 €, რაც იძლევა LTV კოეფიციენტს 59,5%) და ახლად შეძენილი CNC დანადგარის გირავნობით. მთავარი საოპერაციო რისკი — ხის ნედლეულის ფასების შესაძლო მერყეობა — დაზღვეულია სატყეო კოოპერატივებთან გაფორმებული ექვსთვიანი ფიქსირებულფასიანი მოწოდების ხელშეკრულებებით."
        ],
        [
          "5. Conclusion and Analyst Recommendation: Given the borrower's strong balance sheet, proven management track record, and solid collateral coverage, the credit risk is assessed as low. The new machinery will increase production capacity by thirty-five percent while reducing wood waste. Approval of the €250,000 facility is recommended, subject to two standard covenants: maintaining comprehensive property insurance in favour of the bank and channelling at least eighty percent of company sales turnover through Horizon Bank accounts.",
          "5. დასკვნა და ანალიტიკოსის რეკომენდაცია: მსესხებლის მყარი ბალანსის, მენეჯმენტის დადასტურებული გამოცდილებისა და მტკიცე უზრუნველყოფის გათვალისწინებით, საკრედიტო რისკი ფასდება როგორც დაბალი. ახალი დანადგარი წარმოების სიმძლავრეს ოცდათხუთმეტი პროცენტით გაზრდის და შეამცირებს ნარჩენებს. რეკომენდებულია 250 000 ევროს სესხის დამტკიცება ორი სტანდარტული პირობით (კოვენანტით): ქონების დაზღვევა ბანკის სასარგებლოდ და კომპანიის რეალიზაციის ბრუნვის მინიმუმ ოთხმოცი პროცენტის გატარება ბანკ „ჰორიზონტის“ ანგარიშებზე."
        ]
      ],
      glossary: [
        "working capital|საბრუნავი საშუალებები / კაპიტალი", "impeccable credit history|უნაკლო საკრედიტო ისტორია", "without a single day of delinquency|ერთი დღის ვადაგადაცილების გარეშე",
        "year-on-year (YoY)|წინა წლის ანალოგიურ პერიოდთან შედარებით", "Debt Service Coverage Ratio (DSCR)|ვალის მომსახურების დაფარვის კოეფიციენტი", "first-ranking mortgage|პირველი რიგის იპოთეკა",
        "independently appraised at...|დამოუკიდებელი შემფასებლის მიერ შეფასებული ...-ად", "risk mitigation|რისკის შემცირება / დაზღვევა", "production capacity|საწარმოო სიმძლავრე/წარმადობა", "subject to standard covenants|სტანდარტული სასესხო პირობების (კოვენანტების) დაცვით"
      ],
      questions: [
        "How is the €250,000 loan purpose split in Section 1 of the Credit Memorandum?|€200,000 to purchase an automated German CNC wood-cutting machine, and €50,000 for working capital to finance raw oak timber inventory|All €250,000 to build a new hotel|€100,000 for office rent and €150,000 for cars|To pay off taxes",
        "What does the financial term 'working capital' refer to in a commercial loan memo?|Funds used for a company's day-to-day trading operations, such as buying raw materials and inventory ahead of sales|Money used to buy land and buildings|The personal savings of the company owner|Money paid for bank interest",
        "What proves that Alpine Timber Ltd. has a reliable 'track record' with the bank in Section 2?|They have operated since 2016 and repaid two previous equipment loans over the past five years without a single day of delinquency|They promised to open a bank account next year|Their workshop has a blue roof|They have thirty-two employees",
        "What does the word 'delinquency' mean in banking and credit risk ('without a single day of delinquency')?|Being late or overdue on a scheduled loan payment|Taking a summer holiday|Buying foreign machinery|Changing the company address",
        "By how much did the company's annual turnover grow in 2025, and what drove this growth?|It rose by 22% year-on-year to €1.45 million, driven by three new long-term supply contracts with coastal hotel resorts|It dropped by 10% due to winter weather|It stayed flat at €500,000|It grew because they sold their workshop",
        "What does a 'Debt Service Coverage Ratio (DSCR) of 1.85x' tell the Credit Committee?|That the company's operating cash flow is 1.85 times higher than its annual loan principal and interest payments, comfortably above the 1.30x minimum|That the company owes 1.85 million euros|That the interest rate is 1.85%|That the loan lasts for 1.85 years",
        "What two assets serve as 'collateral' (security) for the proposed €250,000 loan?|A first-ranking mortgage over the industrial workshop (appraised at €420,000) and a pledge over the new CNC machinery|The owners' private cars|Only a written promise without any property|Stock market shares",
        "How is the operational risk of fluctuating timber prices 'mitigated' (reduced) by the company?|Through fixed-price six-month supply agreements with local forestry cooperatives|By switching from wood to plastic furniture|By importing wood by airplane|By closing the factory in winter",
        "How will the new CNC machine improve the company's operations according to Section 5?|It will increase production capacity by 35% while reducing wood waste|It will reduce the number of tables they make|It will replace all thirty-two craftsmen|It will double the price of oak",
        "What two 'covenants' (conditions) are attached to the analyst's recommendation for loan approval?|Maintaining property insurance in favour of the bank and channelling at least 80% of sales turnover through Horizon Bank accounts|Hiring ten new engineers tomorrow|Moving the workshop to the city centre|Paying the loan back in one month"
      ]
    },
    {
      num: 47, level: "B2",
      icon: "🏙️", genre: "ურბანული პოლიტიკა",
      title: "არგუმენტირებული ესე: უნდა აიკრძალოს თუ არა მანქანები ისტორიულ ცენტრებში?",
      subtitle: "Writing an Argumentative Essay on Pedestrianizing Historic City Centres",
      time: "9 წთ",
      prompt: "დაწერეთ არგუმენტირებული ესე (Argumentative Essay) ქალაქების ისტორიულ ცენტრებში კერძო ავტომობილების შეზღუდვისა და საფეხმავლო ზონების მოწყობის შესახებ (წარმოადგინეთ თქვენი პოზიცია, უპასუხეთ ოპონენტთა კონტრარგუმენტს და შეაჯამეთ).",
      template: "In recent years, many European cities have restricted private cars in their historic cores. Proponents argue that pedestrianization reduces pollution and revitalizes local commerce. Critics, however, worry that shopkeepers will lose customers. Nevertheless, evidence shows that foot traffic actually increases retail sales. In conclusion, car-free centres benefit everyone.",
      paragraphs: [
        [
          "Essay Title: Reclaiming the Cobblestones — Why Historic City Centres Should Be Car-Free. Across Europe, a quiet urban revolution is taking place: from Ljubljana and Ghent to Madrid and Pontevedra, municipal authorities are restricting private cars from their historic medieval cores and returning the streets to pedestrians and cyclists. While this policy often sparks initial resistance from motorists, the environmental, cultural, and economic evidence overwhelmingly shows that pedestrianizing historic centres is essential for modern cities.",
          "ესეს სათაური: ქვაფენილის დაბრუნება — რატომ უნდა გათავისუფლდეს ისტორიული ცენტრები მანქანებისგან. მთელ ევროპაში მშვიდი ურბანული რევოლუცია მიმდინარეობს: ლიუბლიანიდან და გენტიდან მადრიდამდე და პონტევედრამდე, მუნიციპალური ხელისუფლებები კრძალავენ კერძო მანქანების მოძრაობას შუა საუკუნეების ისტორიულ უბნებში და ქუჩებს ქვეითებსა და ველოსიპედისტებს უბრუნებენ. მიუხედავად იმისა, რომ ეს პოლიტიკა თავიდან მძღოლების წინააღმდეგობას იწვევს, ეკოლოგიური, კულტურული და ეკონომიკური ფაქტები უდავოდ ადასტურებს, რომ ისტორიული ცენტრების საფეხმავლო ზონებად ქცევა აუცილებელია."
        ],
        [
          "First and foremost, historic districts were built centuries before the invention of the internal combustion engine. Their narrow, winding alleys and ancient stone foundations were designed for footsteps and horse-drawn carts, not two-tonne SUVs! Constant vibrations from heavy traffic crack historic facades, while acidic exhaust soot blackens centuries-old limestone monuments. Removing private cars preserves irreplaceable architectural heritage and cuts local nitrogen dioxide pollution by up to seventy percent.",
          "უპირველეს ყოვლისა, ისტორიული უბნები აშენდა საუკუნეებით ადრე, სანამ შიდა წვის ძრავას გამოიგონებდნენ. მათი ვიწრო, მიხვეულ-მოხვეული შესახვევები და უძველესი ქვის საძირკვლები შეიქმნა ფეხით მოსიარულეთა და ეტლებისთვის და არა ორტონიანი ჯიპებისთვის! მძიმე ტრანსპორტის მუდმივი ვიბრაცია ბზარავს ისტორიულ ფასადებს, მჟავე გამონაბოლქვის ჭვარტლი კი აშავებს საუკუნოვან კირქვის ძეგლებს. კერძო მანქანების მოშორება იცავს შეუცვლელ არქიტექტურულ მემკვიდრეობას და აზოტის დიოქსიდით დაბინძურებას სამოცდაათ პროცენტამდე ამცირებს."
        ],
        [
          "Opponents of pedestrianization — particularly small shopkeepers and restaurant owners — frequently argue that banning cars will drive customers away to suburban shopping malls and bankrupt local businesses. At first glance, this fear seems understandable. However, empirical studies from dozens of European cities prove that the exact opposite happens! Cars parked along a narrow street take up huge space while carrying very few shoppers; pedestrians and cyclists, by contrast, stop spontaneously to browse shop windows and sit at outdoor café tables.",
          "საფეხმავლო ზონების მოწინააღმდეგეები — განსაკუთრებით მცირე მაღაზიებისა და რესტორნების მფლობელები — ხშირად კამათობენ, რომ მანქანების აკრძალვა მყიდველებს გარეუბნის მოლებში გააქცევს და ადგილობრივ ბიზნესს გააკოტრებს. ერთი შეხედვით, ეს შიში გასაგები ჩანს. თუმცა, ევროპის ათობით ქალაქის ემპირიული კვლევები ამტკიცებს, რომ ხდება სრულიად საპირისპირო რამ! ვიწრო ქუჩაზე გაჩერებული მანქანები უზარმაზარ ადგილს იკავებს და ძალიან ცოტა მყიდველი მოჰყავს; ქვეითები და ველოსიპედისტები კი სპონტანურად ჩერდებიან ვიტრინების დასათვალიერებლად და გარე კაფეებში დასასხდომად."
        ],
        [
          "In fact, after Madrid and Ljubljana pedestrianized their central streets, retail turnover in those zones increased by between twenty and thirty percent within the first year, and vacant ground-floor shops were quickly rented out! Of course, a successful car-free zone must still accommodate essential access: electric delivery vans should be permitted between 6:00 AM and 10:00 AM, and exemptions must be granted for ambulances, fire engines, and residents with reduced mobility.",
          "სინამდვილეში, მას შემდეგ, რაც მადრიდმა და ლიუბლიანამ თავიანთი ცენტრალური ქუჩები საფეხმავლო გახადეს, პირველივე წელს ამ ზონებში საცალო ვაჭრობის ბრუნვა ოციდან ოცდაათ პროცენტამდე გაიზარდა, ცარიელი კომერციული ფართები კი სწრაფად გაქირავდა! ცხადია, წარმატებულ უმანქანო ზონაში აუცილებელი წვდომა უნდა შენარჩუნდეს: ელექტრო სადისტრიბუციო ფურგონები უნდა დაიშვას დილის 06:00-დან 10:00 საათამდე, ხოლო სასწრაფო დახმარების, სახანძროსა და შეზღუდული მობილობის მქონე მცხოვრებლებისთვის უნდა მოქმედებდეს საშვები."
        ],
        [
          "In conclusion, a city centre should be a living room for its citizens, not a noisy open-air car park. By combining pedestrian-only streets with frequent perimeter trams and underground car parks on the edge of the old town, cities can protect their history, boost local commerce, and create vibrant public spaces where people actually want to spend time.",
          "დასასრულს, ქალაქის ცენტრი უნდა იყოს მისაღები ოთახი თავისი მოქალაქეებისთვის და არა ხმაურიანი ღია ავტოსადგომი. საფეხმავლო ქუჩების შეხამებით პერიმეტრზე მოძრავ ხშირ ტრამვაის ხაზებთან და ძველი ქალაქის განაპირას მოწყობილ მიწისქვეშა პარკინგებთან, ქალაქებს შეუძლიათ დაიცვან საკუთარი ისტორია, გააძლიერონ ადგილობრივი ვაჭრობა და შექმნან ცოცხალი საჯარო სივრცეები."
        ]
      ],
      glossary: [
        "First and foremost,|უპირველეს ყოვლისა, (ძლიერი არგუმენტის დასაწყისი)", "internal combustion engine|შიდა წვის ძრავა", "irreplaceable architectural heritage|შეუცვლელი არქიტექტურული მემკვიდრეობა",
        "Opponents frequently argue that...|მოწინააღმდეგეები (ოპონენტები) ხშირად კამათობენ, რომ...", "At first glance, this seems understandable; however,...|ერთი შეხედვით, ეს გასაგები ჩანს, თუმცა... (კონტრარგუმენტის გაბათილება)", "empirical studies prove that...|ემპირიული (ფაქტობრივი) კვლევები ამტკიცებს, რომ...",
        "retail turnover|საცალო ვაჭრობის ბრუნვა", "grant exemptions for...|გამონაკლისის დაშვება (საშვის მიცემა) ...-თვის", "residents with reduced mobility|შეზღუდული მობილობის (გადაადგილების უნარის) მქონე მცხოვრებლები", "vibrant public space|ცოცხალი / სიცოცხლით სავსე საჯარო სივრცე"
      ],
      questions: [
        "What advanced essay technique does the writer use in Paragraph 3 ('Opponents... argue that... However, empirical studies prove...')?|Acknowledging the opposing counter-argument fairly and then refuting it with factual evidence|Ignoring everyone who disagrees|Agreeing that the opponents are 100% right and changing sides|Using personal insults against drivers",
        "Why are narrow medieval city streets physically unsuited for heavy modern car traffic (Paragraph 2)?|They were built centuries before the internal combustion engine for footsteps and carts; vibrations crack facades and exhaust soot blackens limestone monuments|Because medieval streets are made of glass|Because modern cars are too slow|Because historic buildings have no windows",
        "By how much can removing private cars cut local nitrogen dioxide air pollution in a city centre?|By up to seventy percent|By only one percent|Air pollution actually increases|By ten percent in winter only",
        "What is the main fear of small shopkeepers who oppose pedestrianization at first?|They worry that banning cars will drive customers away to suburban shopping malls and bankrupt local businesses|They worry that too many tourists will buy their goods|They don't like outdoor café tables|They want the streets to be darker",
        "How does the writer refute (disprove) the shopkeepers' fear using data from Madrid and Ljubljana?|Empirical studies show that retail turnover in pedestrianized zones actually INCREASED by 20% to 30% within the first year because walkers stop to browse shops|Shopkeepers closed their stores and moved to the suburbs|Retail sales stayed exactly the same|Only banks made money",
        "Why do pedestrians and cyclists spend more money in local shops than drivers parked on the street?|Parked cars take up huge space while carrying few shoppers, whereas walkers and cyclists stop spontaneously to browse shop windows and sit at cafés|Because cyclists are richer than drivers|Because pedestrians carry larger bags|Because shops charge walkers higher prices",
        "How should a well-planned car-free zone handle morning shop deliveries and emergencies (Paragraph 4)?|Permit electric delivery vans between 6:00 AM and 10:00 AM, and grant exemptions for ambulances, fire engines, and residents with reduced mobility|Ban all deliveries and ambulances completely|Deliver goods by helicopter at noon|Only allow deliveries once a month",
        "What does the formal verb phrase 'to grant exemptions for' mean in Paragraph 4?|To give official permission for certain groups (like ambulances or disabled residents) to be free from a general rule|To charge a higher fine to drivers|To close a street with concrete blocks|To build a new bridge",
        "What metaphor does the writer use in the conclusion to describe what a city centre should be?|'A city centre should be a living room for its citizens, not a noisy open-air car park.'|'A city centre should be a museum locked at night.'|'A city centre is a highway for trucks.'|'A city centre is a quiet forest.'",
        "What infrastructure should surround the edge of a car-free old town to make it accessible for everyone?|Frequent perimeter trams and underground car parks on the edge of the old town|A high stone wall with no gates|An airport runway|A canal with ferries only"
      ]
    },
    {
      num: 48, level: "B2",
      icon: "☀️", genre: "ენერგოეფექტიანობა",
      title: "ბიზნეს-პროექტი: საწარმოს გადაყვანა მზის ენერგიაზე",
      subtitle: "Writing a Capital Investment Proposal: Rooftop Solar Panels for a Warehouse",
      time: "9 წთ",
      prompt: "დაწერეთ კაპიტალური ინვესტიციის შეთავაზება (Capital Investment Proposal) კომპანიის დირექტორთა საბჭოსთვის საწყობის სახურავზე მზის პანელების დამონტაჟების შესახებ (პრობლემა, ტექნიკური გადაწყვეტა, ხარჯი/უკუგების პერიოდი და ეკოლოგიური ეფექტი).",
      template: "INVESTMENT PROPOSAL: Rooftop Solar Installation. 1. Problem: Rising electricity tariffs have increased our operating costs by [Pct]%. 2. Proposed Solution: Installing a [Number]-kW solar array on our warehouse roof. 3. Financial Return: The net investment of [Amount] will pay for itself within [Number] years (ROI). 4. Conclusion: We recommend approving this project.",
      paragraphs: [
        [
          "CAPITAL INVESTMENT PROPOSAL — Rooftop Solar Photovoltaic Installation at Central Logistics Warehouse. 1. Executive Summary and Problem Statement: Over the past twenty-four months, commercial electricity tariffs have risen by thirty-eight percent, making energy our second-largest warehouse operating expense after staff wages. Because our cold-storage refrigerators and automated sorting belts run primarily during sunny daytime hours, our facility is ideally suited for solar self-generation.",
          "კაპიტალური ინვესტიციის პროექტი — მზის ფოტოელექტრული პანელების მონტაჟი ცენტრალური ლოგისტიკური საწყობის სახურავზე. 1. რეზიუმე და პრობლემის აღწერა: ბოლო ოცდაოთხი თვის განმავლობაში კომერციული ელექტროენერგიის ტარიფები ოცდათვრამეტი პროცენტით გაიზარდა, რამაც ენერგია ხელფასების შემდეგ ჩვენი საწყობის რიგით მეორე უდიდეს საოპერაციო ხარჯად აქცია. რადგან ჩვენი სამაცივრე დანადგარები და ავტომატური დამხარისხებელი ხაზები ძირითადად დღის მზიან საათებში მუშაობს, ჩვენი ობიექტი იდეალურია მზის ენერგიის საკუთარი გენერაციისთვის."
        ],
        [
          "2. Technical Scope of the Project: Following a structural inspection of our 4,000-square-metre flat warehouse roof, engineering consultants confirmed that the steel roof beams can easily support a 300-kilowatt (kW) solar photovoltaic array consisting of 650 high-efficiency monocrystalline panels. The installation will take three weeks and will not disrupt daily warehouse loading operations.",
          "2. პროექტის ტექნიკური აღწერა: ჩვენი 4 000 კვ.მ. ბრტყელი სასაწყობე სახურავის კონსტრუქციული შემოწმების შემდეგ, საინჟინრო კონსულტანტებმა დაადასტურეს, რომ ფოლადის კოჭები თავისუფლად გაუძლებს 300 კილოვატი (კვტ) სიმძლავრის მზის ელექტროსადგურს, რომელიც 650 მაღალეფექტიანი მონოკრისტალური პანელისგან შედგება. მონტაჟს დასჭირდება სამი კვირა და იგი არ შეაფერხებს საწყობის ყოველდღიურ ჩატვირთვა-გადმოტვირთვის პროცესს."
        ],
        [
          "3. Energy Output and Grid Connection: Based on local solar irradiation data, the 300-kW system will generate approximately 390,000 kilowatt-hours (kWh) of clean electricity per year — covering sixty-five percent of our warehouse's total annual power consumption! Under the national 'net-metering' regulation, any excess electricity generated on sunny Sundays when the warehouse is closed will be fed back into the public power grid in exchange for bill credits.",
          "3. ენერგიის გამომუშავება და ქსელთან მიერთება: მზის ნათების ადგილობრივ მონაცემებზე დაყრდნობით, 300-კილოვატიანი სისტემა წელიწადში გამოიმუშავებს დაახლოებით 390 000 კილოვატ-საათ (კვტ/სთ) სუფთა ელექტროენერგიას — რაც სრულად დაფარავს ჩვენი საწყობის წლიური მოხმარების სამოცდახუთ პროცენტს! „ნეტო-აღრიცხვის“ ეროვნული რეგულაციის თანახმად, მზიან კვირა დღეებში (როცა საწყობი დაკეტილია) გამომუშავებული ჭარბი ელექტროენერგია ჩაეშვება საერთო ენერგოქსელში და აისახება კომუნალური გადასახადის კრედიტად (დეპოზიტად)."
        ],
        [
          "4. Financial Analysis and Payback Period: The total turnkey cost of the solar installation is €180,000. However, our company qualifies for a twenty-five percent Green Industrial Transition Grant (€45,000) from the Ministry of Economy, reducing our net capital outlay to €135,000. With projected annual electricity savings of €45,000 at current tariffs, the project has a simple payback period of exactly three years, while the panels carry a twenty-five-year manufacturer performance warranty!",
          "4. ფინანსური ანალიზი და უკუგების პერიოდი: მზის სადგურის სრული („გასაღების ჩაბარებით“) ღირებულება შეადგენს 180 000 ევროს. თუმცა, ჩვენი კომპანია აკმაყოფილებს ეკონომიკის სამინისტროს ოცდახუთპროცენტიანი „მწვანე ინდუსტრიული გარდაქმნის გრანტის“ (45 000 €) პირობებს, რაც ჩვენს სუფთა კაპიტალურ დანახარჯს 135 000 ევრომდე ამცირებს. მიმდინარე ტარიფებით წელიწადში 45 000 ევროს ეკონომიის გათვალისწინებით, პროექტის თვითღირებულების ამოღების (უკუგების) პერიოდი ზუსტად სამი წელია, მაშინ როცა პანელებს მოჰყვება მწარმოებლის ოცდახუთწლიანი გარანტია!"
        ],
        [
          "5. Environmental Impact and Recommendation: Beyond shielding our company from future energy price spikes and saving over €900,000 in electricity bills over the next two decades, the solar array will reduce our carbon dioxide emissions by 160 tonnes per year. We recommend approving the €135,000 net investment this month so installation can be completed before spring.",
          "5. გარემოსდაცვითი ეფექტი და რეკომენდაცია: გარდა იმისა, რომ პროექტი დაიცავს ჩვენს კომპანიას ენერგიის ფასების სამომავლო ზრდისგან და მომდევნო ოცი წლის განმავლობაში დაგვიზოგავს 900 000 ევროზე მეტს, მზის სადგური ჩვენს ნახშირორჟანგის გამონაბოლქვს წელიწადში 160 ტონით შეამცირებს. გთავაზობთ 135 000 ევროს სუფთა ინვესტიციის დამტკიცებას ამ თვეშივე, რათა მონტაჟი გაზაფხულამდე დასრულდეს."
        ]
      ],
      glossary: [
        "Problem Statement|პრობლემის ფორმულირება / აღწერა", "operating expense (OPEX)|საოპერაციო (მიმდინარე) ხარჯი", "disrupt daily operations|ყოველდღიური საქმიანობის შეფერხება",
        "power consumption|ელექტროენერგიის მოხმარება", "excess electricity|ჭარბი (ზედმეტად გამომუშავებული) ელექტროენერგია", "feed back into the power grid|საერთო ენერგოქსელში უკან ჩაშვება/გადაცემა",
        "turnkey cost|სრული ღირებულება „გასაღების ჩაბარებით“ (პროექტირება + მონტაჟი)", "net capital outlay|სუფთა კაპიტალური დანახარჯი (გრანტის გამოკლებით)", "payback period|ინვესტიციის უკუგების (ამოღების) პერიოდი", "shield from price spikes|ფასების მკვეთრი ზრდისგან დაცვა"
      ],
      questions: [
        "Why is the logistics warehouse particularly well-suited for solar self-generation (Section 1)?|Because its cold-storage refrigerators and automated sorting belts run primarily during sunny daytime hours when solar panels produce peak power|Because the warehouse only operates at midnight|Because it uses no electricity at all|Because it is located underground",
        "By how much have commercial electricity tariffs risen over the past twenty-four months?|By thirty-eight percent|By five percent|They have fallen by twenty percent|They have stayed the same for ten years",
        "What did engineering consultants confirm before proposing the 300-kW solar array in Section 2?|That the steel roof beams of the 4,000-square-metre flat roof can easily support the weight of the 650 panels, and installation won't disrupt daily loading|That the roof needs to be demolished first|That the warehouse must close for six months|That only ten panels can fit on the roof",
        "What percentage of the warehouse's total annual electricity consumption will the 300-kW solar system cover?|Sixty-five percent (generating 390,000 kWh per year)|Only five percent|Two hundred percent|Ten percent",
        "What happens to the excess electricity generated on sunny Sundays when the warehouse is closed?|Under 'net-metering' rules, it is fed back into the public power grid in exchange for bill credits|It is wasted and heats up the roof|The panels turn off automatically on Sundays|It is stored in glass jars",
        "What does the business term 'turnkey cost of €180,000' mean in Section 4?|The complete, all-inclusive price for equipment, delivery, and installation so the system is ready to turn on and use|The price of buying a physical metal key for the warehouse door|Only the cost of the paper drawings|A monthly rental fee",
        "How is the company's 'net capital outlay' reduced from €180,000 down to €135,000?|The company qualifies for a 25% Green Industrial Transition Grant (€45,000) from the Ministry of Economy|The solar company made a math error|They decided to buy second-hand broken panels|The employees are paying €45,000",
        "How is the 'simple payback period of exactly three years' calculated in Section 4?|Net investment of €135,000 divided by annual electricity savings of €45,000 per year = 3 years|€180,000 multiplied by 3|Because the panels only last for three years|Because the grant takes three years to arrive",
        "How long is the manufacturer performance warranty on the solar panels compared to the three-year payback period?|Twenty-five years (meaning after 3 years of paying for itself, the system delivers 22+ years of pure savings)|Only two years|Six months|Five years",
        "What are the long-term financial and environmental benefits summarized in Section 5?|Saving over €900,000 over two decades, shielding the company from future price spikes, and cutting CO2 emissions by 160 tonnes per year|Increasing the electricity bill by 38%|Hiring fifty new electricians|Moving the warehouse to another city"
      ]
    },
    {
      num: 49, level: "B2",
      icon: "🧠", genre: "სამეცნიერო მიმოხილვა",
      title: "სამეცნიერო მიმოხილვა: როგორ ამყარებს ღრმა ძილი მეხსიერებას",
      subtitle: "Writing an Academic Summary: Sleep and Memory Consolidation",
      time: "9 წთ",
      prompt: "დაწერეთ სამეცნიერო-პოპულარული მიმოხილვა (Academic Summary) იმის შესახებ, თუ როგორ გარდაქმნის ღამის ძილი დღის განმავლობაში ნასწავლ მასალას გრძელვადიან მეხსიერებად.",
      template: "Research in cognitive neuroscience demonstrates that sleep plays a vital role in memory consolidation. During the day, new information is temporarily stored in the hippocampus. At night, during deep slow-wave sleep, the brain transfers these memories to the neocortex for permanent storage. Consequently, sleeping after studying is far more effective than all-night cramming.",
      paragraphs: [
        [
          "Academic Summary: The Nightly File Transfer — How Sleep Consolidates Human Memory. For generations, students preparing for difficult university examinations have treated sleep as a luxury that can be sacrificed for late-night studying. However, over the past two decades, research in cognitive neuroscience has overturned the idea that the sleeping brain is merely resting passively. Instead, sleep is an active neurological workshop during which the brain sorts, strengthens, and permanently stores everything we learned during the day.",
          "სამეცნიერო მიმოხილვა: ღამის ფაილების გადატანა — როგორ ამყარებს ძილი ადამიანის მეხსიერებას. თაობების განმავლობაში რთული საუნივერსიტეტო გამოცდებისთვის მომზადებისას სტუდენტები ძილს განიხილავდნენ როგორც ფუფუნებას, რომლის შეწირვაც ღამის მეცადინეობისთვის შეიძლებოდა. თუმცა, ბოლო ორი ათწლეულის კოგნიტური ნეირომეცნიერების კვლევებმა უარყო მოსაზრება, თითქოს მძინარე ტვინი უბრალოდ პასიურად ისვენებს. სინამდვილეში, ძილი არის აქტიური ნევროლოგიური სახელოსნო, რომლის დროსაც ტვინი ახარისხებს, აძლიერებს და მუდმივ მეხსიერებაში ინახავს დღის მანძილზე ნასწავლ ინფორმაციას."
        ],
        [
          "To understand how this process — known as 'memory consolidation' — works, neuroscientists compare two structures in the brain to a computer's memory system. While we are awake and reading a textbook or practicing new vocabulary, the information is first recorded in the 'hippocampus', a seahorse-shaped structure deep in the brain. Like a USB flash drive, the hippocampus learns rapidly, but it has limited storage capacity and can easily be overwritten if it gets full!",
          "იმის გასაგებად, თუ როგორ მუშაობს ეს პროცესი — რომელსაც „მეხსიერების კონსოლიდაცია“ (განმტკიცება) ეწოდება — ნეირომეცნიერები ტვინის ორ სტრუქტურას კომპიუტერის მეხსიერების სისტემას ადარებენ. როდესაც ფხიზლად ვართ და სახელმძღვანელოს ვკითხულობთ ან ახალ სიტყვებს ვსწავლობთ, ინფორმაცია ჯერ იწერება „ჰიპოკამპში“ — ტვინის სიღრმეში მდებარე ზღვის ცხენის ფორმის უბანში. USB ფლეშ-მეხსიერების მსგავსად, ჰიპოკამპი სწრაფად იწერს ინფორმაციას, მაგრამ აქვს შეზღუდული ტევადობა და გადავსებისას შეიძლება ძველი მონაცემები ადვილად წაიშალოს!"
        ],
        [
          "When we fall into deep 'slow-wave sleep' during the first half of the night, a remarkable biological file transfer begins. High-speed electrical ripples from the hippocampus work together with slow brain waves to replay the day's learning experiences at ten times their normal daytime speed! This nightly replay transfers fragile new memories out of the temporary hippocampus and writes them into the 'neocortex' — the brain's massive, permanent hard drive.",
          "როდესაც ღამის პირველ ნახევარში ღრმა, „ნელტალღოვან ძილში“ ვიძირებით, იწყება ფაილების გასაოცარი ბიოლოგიური გადატანა. ჰიპოკამპის სწრაფი ელექტრული იმპულსები ტვინის ნელ ტალღებთან სინქრონულად მუშაობს და დღის სასწავლო გამოცდილებას ჩვეულებრივზე ათჯერ უფრო სწრაფად ატრიალებს! ეს ღამის გამეორება მყიფე ახალ მოგონებებს დროებითი ჰიპოკამპიდან გადაიტანს და წერს „ნეოკორტექსში“ — ტვინის უზარმაზარ, მუდმივ მყარ დისკზე."
        ],
        [
          "By morning, the neocortex has securely stored the new knowledge, and the hippocampus is wiped clean and refreshed, ready to absorb a new day of lectures! In laboratory experiments at Harvard and Berkeley, students who studied a list of foreign words in the evening and then slept for eight hours remembered thirty-five percent more words a week later than students who studied for the exact same amount of time during the day without sleeping between study and test.",
          "დილისთვის ნეოკორტექსში ახალი ცოდნა უკვე საიმედოდ არის შენახული, ჰიპოკამპი კი გასუფთავებული და განახლებულია ახალი დღის ლექციების მისაღებად! ჰარვარდისა და ბერკლის ლაბორატორიულ ექსპერიმენტებში სტუდენტებმა, რომლებმაც უცხო სიტყვების სია საღამოს ისწავლეს და შემდეგ რვა საათი ეძინათ, ერთი კვირის შემდეგ ოცდათხუთმეტი პროცენტით მეტი სიტყვა გაიხსენეს, ვიდრე მათ, ვინც ზუსტად იგივე დრო იმეცადინა დღისით, ძილის გარეშე."
        ],
        [
          "Furthermore, pulling an 'all-nighter' before an exam impairs the hippocampus's ability to encode new facts by up to forty percent the next day! In conclusion, neuroscience proves that sleep is not the enemy of academic productivity, but its essential partner: studying writes the notes on a chalkboard, while a full night's sleep carves them into stone.",
          "გარდა ამისა, გამოცდის წინ მთელი ღამის გათენება მეორე დღეს ჰიპოკამპის მიერ ახალი ფაქტების ჩაწერის უნარს ორმოც პროცენტამდე აქვეითებს! დასასრულს, ნეირომეცნიერება ამტკიცებს, რომ ძილი აკადემიური პროდუქტიულობის მტერი კი არა, მისი აუცილებელი პარტნიორია: მეცადინეობა ცოდნას დაფაზე ცარცით წერს, ხოლო სრულფასოვანი ღამის ძილი მას ქვაში კვეთს."
        ]
      ],
      glossary: [
        "overturn the idea that...|უარყოფა / თავდაყირა დაყენება მოსაზრებისა, რომ...", "memory consolidation|მეხსიერების კონსოლიდაცია (დროებითიდან მუდმივ მეხსიერებაში გადატანა)", "limited storage capacity|შეზღუდული ტევადობა / მოცულობა",
        "slow-wave sleep|ღრმა, ნელტალღოვანი ძილი", "at ten times their normal speed|ჩვეულებრივზე ათჯერ უფრო სწრაფად", "wipe clean and refresh|გასუფთავება და განახლება (ახალი მონაცემებისთვის)",
        "pull an 'all-nighter'|მთელი ღამის გათენება (გამოცდის წინ)", "impair the ability to...|უნარის დაქვეითება / დაზიანება...", "encode new facts|ახალი ფაქტების კოდირება (ჩაწერა ტვინში)", "carve into stone|ქვაში ამოკვეთა (სამუდამოდ დამახსოვრება)"
      ],
      questions: [
        "Why is the USB flash drive vs. hard drive analogy in Paragraphs 2 and 3 so effective in science writing?|It translates two complex neuroanatomical terms (the hippocampus and the neocortex) into a familiar everyday technology metaphor that any reader can picture immediately|Because the human brain is made of silicon and plastic|Because scientists plug USB drives into microscopes|To advertise computer parts",
        "What false traditional belief about sleep has cognitive neuroscience overturned over the past two decades?|The belief that the sleeping brain is merely resting passively and that sleep can be sacrificed for late-night studying without harm|The belief that humans sleep at night|The belief that coffee keeps people awake|The belief that textbooks help students learn",
        "What is the role of the 'hippocampus' while we are awake and studying during the day?|Like a USB flash drive, it rapidly records new information temporarily, but it has limited storage capacity|It controls breathing and heart rate only|It stores childhood memories from twenty years ago|It only works when we are running",
        "When does the biological 'file transfer' from the hippocampus to the neocortex take place?|During deep 'slow-wave sleep' in the first half of the night|While we are eating lunch at noon|During the first five minutes after waking up|While we are watching television",
        "How does the brain transfer fragile daytime memories into the permanent neocortex during deep sleep?|High-speed electrical ripples from the hippocampus and slow brain waves replay the day's learning experiences at ten times normal daytime speed|By raising the temperature of the brain by five degrees|By stopping blood flow to the head|By erasing all old memories",
        "What happens to the hippocampus by morning after a full night of deep sleep?|It is wiped clean and refreshed, with free storage capacity ready to absorb a new day of lectures|It shrinks to half its size|It stops working until the weekend|It turns off during the morning",
        "What did laboratory experiments at Harvard and Berkeley prove about sleeping after studying foreign vocabulary?|Students who studied in the evening and slept for eight hours remembered 35% more words a week later than those who studied during the day without sleep|Sleeping made students forget all the words|Students only remembered words if they studied for twelve hours|Time of day made zero difference",
        "What does the student idiom 'pulling an all-nighter' mean in Paragraph 5?|Staying awake the entire night to study without sleeping at all|Sleeping for twenty-four hours straight|Taking an exam at midnight|Running a race at night",
        "By how much does pulling an all-nighter impair the hippocampus's ability to encode new facts the next day?|By up to forty percent|By only two percent|It actually improves memory by fifty percent|By five percent",
        "Explain the metaphor in the final sentence: 'studying writes the notes on a chalkboard, while a full night's sleep carves them into stone.'|Studying creates fragile, temporary memories (chalk that can easily be wiped away), whereas sleep consolidates them into permanent long-term knowledge (carved in stone)|Students should write on stones instead of paper|Chalkboards are better than computers|You can learn without studying if you sleep"
      ]
    },
    {
      num: 50, level: "B2",
      icon: "🚢", genre: "ლოგისტიკა და კომუნიკაცია",
      title: "კრიზისული კომუნიკაცია: მოწოდების ჯაჭვის შეფერხების მართვა",
      subtitle: "Writing a Proactive Client Email Managing a Supply Chain Delay",
      time: "9 წთ",
      prompt: "დაწერეთ პროაქტიული საქმიანი წერილი B2B კლიენტს საწარმოო ან სატრანსპორტო შეფერხების შესახებ (აუხსენით ობიექტური მიზეზი, შესთავაზეთ ნაწილობრივი მიწოდება პრობლემის შესამსუბუქებლად და კომპენსაცია/ფასდაკლება).",
      template: "Subject: Important Delivery Update — Order #[Number]. Dear [Client Name], I am writing to provide an urgent update regarding your scheduled shipment. Due to [External Cause], the main vessel has been delayed by [Number] days. To minimize disruption to your operations, we are dispatching [Partial Solution] by express air freight today at our own expense. Sincerely, [Your Name].",
      paragraphs: [
        [
          "Subject: Urgent Delivery Update & Mitigation Plan — Purchase Order #PO-7741 (Mediterranean Hotel Group). Dear Mrs Elena Vance, I am writing to provide you with an immediate update regarding your order of four hundred solid oak bedside tables (Purchase Order #PO-7741), which was scheduled for delivery to your Valencia hotel site on Monday, the twenty-sixth of October.",
          "თემა: მოწოდების სასწრაფო განახლება და სამოქმედო გეგმა — შესყიდვის ორდერი #PO-7741 (Mediterranean Hotel Group). ძვირფასო ქალბატონო ელენა ვანს, გწერთ, რათა დაუყოვნებლივ გაცნობოთ განახლებული ინფორმაცია ოთხასი ცალი მუხის ტუმბოს შეკვეთასთან დაკავშირებით (ორდერი #PO-7741), რომლის მიწოდებაც თქვენს ვალენსიის სასტუმროს ობიექტზე დაგეგმილი იყო ორშაბათს, ოცდაექვს ოქტომბერს."
        ],
        [
          "All four hundred tables were manufactured, inspected, and packed at our factory three days ahead of schedule. However, this morning our maritime freight forwarder informed us that a three-day port workers' strike and severe autumn gales in the Bay of Biscay have delayed our cargo vessel, the 'MV Northern Trader', by six days. As a result, the main sea container will now dock in Valencia on Sunday, the first of November.",
          "ოთხასივე ტუმბო ჩვენს ქარხანაში გრაფიკზე სამი დღით ადრე დამზადდა, შემოწმდა და შეიფუთა. თუმცა, დღეს დილით ჩვენმა საზღვაო გადამზიდავმა შეგვატყობინა, რომ პორტის მუშათა სამდღიანმა გაფიცვამ და ბისკაის ყურეში ამოვარდნილმა შემოდგომის ძლიერმა შტორმმა ჩვენი სატვირთო გემი — „MV Northern Trader“ — ექვსი დღით შეაფერხა. შედეგად, ძირითადი საზღვაო კონტეინერი ვალენსიის პორტში შევა კვირას, პირველ ნოემბერს."
        ],
        [
          "We are fully aware that your interior design team needs to furnish the first two VIP floors of the hotel by the twenty-eighth of October for your press preview event! Rather than waiting passively for the ship, our logistics team has arranged an immediate contingency solution so your event can proceed as planned.",
          "ჩვენ სრულად ვაცნობიერებთ, რომ თქვენს ინტერიერის დიზაინის გუნდს სასტუმროს პირველი ორი VIP სართულის მოწყობა ოცდარვა ოქტომბრამდე სჭირდება პრესისთვის დაგეგმილი პრეზენტაციისთვის! გემის პასიურად ლოდინის ნაცვლად, ჩვენმა ლოგისტიკის გუნდმა მოამზადა დაუყოვნებლივი სათადარიგო გამოსავალი, რათა თქვენი ღონისძიება გეგმის მიხედვით ჩატარდეს."
        ],
        [
          "This afternoon, we are dispatching eighty identical oak bedside tables from our reserve warehouse stock via express overland truck directly to Valencia. This express truck will arrive at your hotel loading bay on Sunday evening, the twenty-fifth of October — one day BEFORE your original deadline — giving your team everything needed for the two VIP floors! We are covering the €1,800 express trucking cost 100% at our own expense.",
          "დღეს ნაშუადღევს ჩვენი სარეზერვო საწყობის მარაგიდან სწრაფი სახმელეთო სატვირთო მანქანით პირდაპირ ვალენსიაში ვაგზავნით ოთხმოც იდენტურ მუხის ტუმბოს. ეს სწრაფი მანქანა თქვენი სასტუმროს ჩასატვირთ პუნქტში ჩავა კვირა საღამოს, ოცდახუთ ოქტომბერს — თავდაპირველ ვადაზე ერთი დღით ადრე — რაც თქვენს გუნდს მისცემს ყველაფერს ორი VIP სართულის მოსაწყობად! სწრაფი სახმელეთო ტრანსპორტირების ხარჯს (1 800 €) 100%-ით ჩვენს თავზე ვიღებთ."
        ],
        [
          "The remaining three hundred and twenty tables will be delivered straight from the port on the morning of Monday, the second of November, and our two assembly technicians will stay on site for two extra days free of charge to help your staff unpack and install every piece. We sincerely apologize for this maritime delay and value our partnership deeply. Please call my direct line if you need any adjustments to this plan. Yours sincerely, Henrik Lindholm, Export Director.",
          "დარჩენილი სამას ოცი ტუმბო პორტიდან პირდაპირ მოგეწოდებათ ორშაბათ დილით, ორ ნოემბერს, ხოლო ჩვენი ორი ამწყობი ტექნიკოსი ობიექტზე უფასოდ დარჩება დამატებითი ორი დღით, რათა თქვენს პერსონალს დაეხმაროს ყველა ნივთის ამოლაგებასა და მონტაჟში. გულწრფელად გიხდით ბოდიშს ამ საზღვაო შეფერხებისთვის და ღრმად ვაფასებთ ჩვენს პარტნიორობას. გთხოვთ დამირეკოთ პირდაპირ ნომერზე, თუ გეგმაში რაიმე ცვლილება გჭირდებათ. პატივისცემით, ჰენრიკ ლინდჰოლმი, ექსპორტის დირექტორი."
        ]
      ],
      glossary: [
        "Purchase Order (PO)|შესყიდვის ორდერი / შეკვეთის დოკუმენტი", "three days ahead of schedule|გრაფიკზე სამი დღით ადრე", "maritime freight forwarder|საზღვაო საექსპედიტორო (გადამზიდავი) კომპანია",
        "port workers' strike|პორტის მუშათა გაფიცვა", "We are fully aware that...|ჩვენ სრულად ვაცნობიერებთ, რომ...", "contingency solution|სათადარიგო / გაუთვალისწინებელი შემთხვევის გეგმა",
        "proceed as planned|გეგმის მიხედვით გაგრძელება/ჩატარება", "dispatch from reserve stock|სარეზერვო მარაგიდან გაგზავნა", "cover the cost at our own expense|ხარჯის სრულად საკუთარ თავზე აღება", "value our partnership deeply|ჩვენი პარტნიორობის ღრმად დაფასება"
      ],
      questions: [
        "What is the golden rule of 'Crisis Communication' in B2B business writing when a shipment is delayed?|Inform the client proactively BEFORE the deadline, explain the cause honestly, and present an immediate contingency solution rather than just an excuse|Wait until the client calls angrily after the deadline has passed|Blame the client for ordering too late|Send a short email saying 'The ship is late, sorry'",
        "Why does Henrik mention in Paragraph 2 that 'All four hundred tables were manufactured, inspected, and packed... three days ahead of schedule'?|To reassure the client that the factory worked efficiently and that the delay is purely due to external maritime transport issues|To boast about his factory machines|Because the tables are still unpainted|To ask for early payment",
        "What two external events delayed the cargo ship 'MV Northern Trader' by six days?|A three-day port workers' strike and severe autumn gales (storms) in the Bay of Biscay|The factory ran out of oak wood|The truck driver got lost in France|Customs officers lost the paperwork",
        "Why is the six-day delay particularly critical for the Mediterranean Hotel Group (Paragraph 3)?|Because their interior design team needs to furnish the first two VIP floors by 28th October for a press preview event|Because the hotel is closing for winter in November|Because the tables will get wet on the ship|Because the hotel has no beds",
        "What does the business phrase 'contingency solution' mean in Paragraph 3?|A backup plan designed to solve an unexpected problem or emergency so work can continue|A legal contract signed at a bank|A discount on future orders|A refund of the deposit",
        "What concrete contingency action is the supplier taking this afternoon to save the client's press preview event?|Dispatching 80 identical oak bedside tables from reserve stock via express overland truck, arriving on Sunday 25th October (one day BEFORE the original deadline)|Sending photographs of the tables by email|Asking the hotel to borrow plastic tables from a café|Cancelling the whole order",
        "Who is paying the €1,800 cost for the express overland truck to Valencia?|The supplier (Henrik's company) is covering 100% of the €1,800 cost at its own expense|The hotel has to pay €1,800 extra|They are splitting the cost 50/50|The shipping insurance company",
        "When will the remaining 320 tables arrive from the port?|On the morning of Monday, the second of November|In December|Tomorrow morning|Next summer",
        "What extra service is the supplier providing on Monday 2nd November to help the hotel catch up on time?|Two assembly technicians will stay on site for two extra days free of charge to help unpack and install every piece|They will paint the hotel walls|They will give the hotel ten free desks|They will clean the hotel kitchen",
        "Why does this email actually strengthen client trust despite the shipping delay?|Because by solving the problem proactively at their own expense, the supplier proves they are a reliable partner who protects the client's business in a crisis|Because it uses long complicated words|Because it hides the date when the ship will arrive|Because it blames the port workers"
      ]
    },
    {
      num: 51, level: "B2",
      icon: "🤖", genre: "ტექნოლოგიური ესე",
      title: "ესე: ხელოვნური ინტელექტი და ადამიანური შემოქმედებითობა",
      subtitle: "Writing an Analytical Essay: Does AI Threaten or Enhance Creativity?",
      time: "9 წთ",
      prompt: "დაწერეთ ანალიტიკური ესე იმაზე, თუ როგორ ცვლის გენერაციული ხელოვნური ინტელექტი (AI) მუსიკას, დიზაინსა და მწერლობას (შეადარეთ ისტორიულ პრეცედენტს — მაგ. ფოტოკამერის გამოგონებას — და ჩამოაყალიბეთ, რა რჩება წმინდა ადამიანურ უპირატესობად).",
      template: "The rapid rise of generative AI has sparked intense debate across creative industries. While some fear that algorithms will replace human artists, history suggests a different outcome. Just as the invention of photography freed painters from realism, AI can handle repetitive technical tasks while humans provide emotional depth and lived experience. Ultimately, AI is a powerful brush, not the artist.",
      paragraphs: [
        [
          "Essay Title: The New Brush — Why Artificial Intelligence Will Transform Rather Than Replace Human Creativity. Over the past three years, generative artificial intelligence has learned to compose lo-fi jazz tracks, generate digital illustrations, and draft polished articles in seconds. This technological leap has sparked widespread anxiety among writers, musicians, and graphic designers: if an algorithm can produce a song or a poster at the click of a button, is human creativity becoming obsolete? A closer look at art history and human psychology suggests that while AI will reshape creative workflows, it cannot replace the soul of human art.",
          "ესეს სათაური: ახალი ფუნჯი — რატომ გარდაქმნის, მაგრამ ვერ ჩაანაცვლებს ხელოვნური ინტელექტი ადამიანურ შემოქმედებითობას. ბოლო სამი წლის განმავლობაში გენერაციულმა ხელოვნურმა ინტელექტმა ისწავლა ჯაზური კომპოზიციების შექმნა, ციფრული ილუსტრაციების დახატვა და გამართული სტატიების დაწერა რამდენიმე წამში. ამ ტექნოლოგიურმა ნახტომმა მწერლებს, მუსიკოსებსა და გრაფიკულ დიზაინერებს შორის დიდი შფოთვა გამოიწვია: თუ ალგორითმს ღილაკზე ერთი დაჭერით შეუძლია სიმღერის ან პოსტერის შექმნა, ხომ არ კარგავს აზრს ადამიანური შემოქმედება? ხელოვნების ისტორიასა და ფსიქოლოგიაზე დაკვირვება გვიჩვენებს, რომ AI შეცვლის სამუშაო პროცესს, მაგრამ ვერ ჩაანაცვლებს ადამიანური ხელოვნების სულს."
        ],
        [
          "To put today's panic into perspective, it is helpful to look back at the 1840s, when the invention of the photographic camera terrified European portrait and landscape painters. Many critics declared that painting was dead, asking why anyone would pay an artist to spend weeks painting a face when a camera lens could capture an exact likeness in seconds! Yet photography did not kill painting; instead, by freeing painters from the mechanical duty of copying physical reality, it gave birth to Impressionism, Cubism, and modern abstract art.",
          "დღევანდელი შიშის სწორ პერსპექტივაში დასანახად, სასარგებლოა გავიხსენოთ 1840-იანი წლები, როდესაც ფოტოკამერის გამოგონებამ ევროპელი პორტრეტისტები და პეიზაჟისტები შეაშინა. ბევრმა კრიტიკოსმა ფერწერა მკვდრად გამოაცხადა და კითხულობდა, რატომ გადაუხდიდა ვინმე მხატვარს ფულს სახის კვირების განმავლობაში დახატვაში, როცა კამერის ობიექტივს ზუსტი ასლის აღბეჭდვა წამებში შეეძლო! თუმცა, ფოტოგრაფიას ფერწერა არ მოუკლავს; პირიქით, ფიზიკური რეალობის მექანიკური კოპირებისგან მხატვართა გათავისუფლებით, მან დასაბამი მისცა იმპრესიონიზმს, კუბიზმსა და თანამედროვე აბსტრაქტულ ხელოვნებას."
        ],
        [
          "Similarly, generative AI functions best not as an independent creator, but as an intelligent collaborator and time-saving instrument. In music production, graphic design, and software development, creators spend hours on repetitive technical chores — removing background noise from audio, resizing layout templates, or debugging routine code. By delegating these mechanical tasks to AI, human creators can focus their energy on high-level artistic vision, curation, and storytelling.",
          "მსგავსად ამისა, გენერაციული ხელოვნური ინტელექტი ყველაზე უკეთ მუშაობს არა როგორც დამოუკიდებელი შემოქმედი, არამედ როგორც გონიერი თანამშრომელი და დროის დამზოგავი ინსტრუმენტი. მუსიკის პროდიუსინგში, გრაფიკულ დიზაინსა და პროგრამირებაში ავტორები საათებს ხარჯავენ რუტინულ ტექნიკურ სამუშაოზე — აუდიოდან ფონური ხმაურის მოშორებაზე, შაბლონების ზომის შეცვლასა თუ კოდის გასწორებაზე. ამ მექანიკური დავალებების AI-სთვის გადაბარებით, ადამიანებს შეუძლიათ მთელი ენერგია მიმართონ მხატვრულ ხედვაზე, გემოვნებით შერჩევასა და თხრობაზე."
        ],
        [
          "More fundamentally, there is a profound difference between 'recombination' and true 'creativity'. Because AI models are trained on vast databases of existing past works, they are statistical engines that remix and average what has already been done. An algorithm has never experienced childhood nostalgia, the pain of heartbreak, the smell of rain in a village orchard, or the courage of standing on a stage. Human art moves us precisely because we know another mortal human being lived through those emotions to create it!",
          "უფრო ფუნდამენტურად კი, არსებობს ღრმა განსხვავება „კომბინირებასა“ და ნამდვილ „შემოქმედებითობას“ შორის. რადგან AI მოდელები იწვრთნება უკვე არსებული წარსული ნამუშევრების უზარმაზარ ბაზებზე, ისინი წარმოადგენენ სტატისტიკურ ძრავებს, რომლებიც აჯამებენ და ურევენ იმას, რაც უკვე შექმნილა. ალგორითმს არასდროს განუცდია ბავშვობის ნოსტალგია, გულისტკივილი, სოფლის ბაღში წვიმის სურნელი ან სცენაზე დგომის სიმამაცე. ადამიანური ხელოვნება სწორედ იმიტომ გვაღელვებს, რომ ვიცით — მის შესაქმნელად ეს ემოციები სხვა მოკვდავმა ადამიანმა გამოიარა!"
        ],
        [
          "In conclusion, while generic, mass-produced commercial content will increasingly be automated by machines, authentic human artistry will become even more prized for its scarcity and emotional truth. AI is a remarkably powerful new paintbrush — but it still takes a human heart and mind to decide what is worth painting.",
          "დასასრულს, მიუხედავად იმისა, რომ შაბლონური, მასობრივი კომერციული კონტენტი სულ უფრო მეტად ავტომატიზდება მანქანების მიერ, ავთენტური ადამიანური ხელოვნება კიდევ უფრო დაფასდება თავისი იშვიათობისა და ემოციური სიმართლის გამო. ხელოვნური ინტელექტი საოცრად მძლავრი ახალი ფუნჯია — მაგრამ იმის გადასაწყვეტად, თუ რისი დახატვა ღირს, კვლავ ადამიანის გული და გონებაა საჭირო."
        ]
      ],
      glossary: [
        "spark widespread anxiety|ფართო შფოთვის / მღელვარების გამოწვევა", "become obsolete|მოძველება / საჭიროების დაკარგვა", "put into perspective|სწორ კონტექსტში / პერსპექტივაში დანახვა",
        "capture an exact likeness|ზუსტი მსგავსების (ასლის) აღბეჭდვა", "repetitive technical chores|განმეორებადი (რუტინული) ტექნიკური სამუშაო", "delegate tasks to...|დავალებების გადაბარება (დელეგირება) ...-თვის",
        "artistic vision and curation|მხატვრული ხედვა და გემოვნებით შერჩევა (კურაცია)", "trained on vast databases|უზარმაზარ მონაცემთა ბაზებზე გაწვრთნილი", "lived experience|პირადად განცდილი ცხოვრებისეული გამოცდილება", "prized for its scarcity|დაფასებული თავისი იშვიათობის გამო"
      ],
      questions: [
        "Why does the writer bring up the 1840s invention of the photographic camera in Paragraph 2?|To put today's panic about AI into historical perspective by showing how a previous technology that seemed to threaten artists actually liberated them|Because cameras use artificial intelligence|To argue that photography is better than painting|To explain how glass lenses are made",
        "How did the invention of photography unexpectedly transform nineteenth-century painting instead of killing it?|By freeing painters from the mechanical duty of copying physical reality, it gave birth to Impressionism, Cubism, and abstract art|All painters quit art and became photographers|Governments banned cameras for fifty years|Painters started painting only in black and white",
        "What does the adjective 'obsolete' mean in Paragraph 1 ('is human creativity becoming obsolete?')?|Outdated and no longer needed because something newer has replaced it|More expensive than before|Famous around the world|Protected by copyright law",
        "How can generative AI serve as a useful collaborator for musicians, designers, and programmers (Paragraph 3)?|By handling repetitive technical chores (cleaning audio noise, resizing templates, debugging routine code) so humans can focus on high-level artistic vision|By replacing the human creator completely|By deciding what emotions the audience should feel|By turning off the computer",
        "What is the fundamental limitation of how AI models generate content according to Paragraph 4?|Because they are trained on databases of past works, they are statistical engines that recombine and average what has already been done rather than feeling real life|They can only write in one language|They work too slowly|They cannot use colours",
        "What human qualities and experiences does an algorithm lack?|Lived emotional experiences — such as childhood nostalgia, heartbreak, the smell of rain in a village orchard, or courage|Mathematical speed|Storage space for files|Access to the internet",
        "Why does authentic human art move us emotionally according to Paragraph 4?|Because we know another mortal human being actually lived through and felt those emotions to create it|Because human art is always 100% technically perfect without any flaws|Because human paintings are larger than screens|Because museums charge admission fees",
        "What distinction does the writer draw in the conclusion between 'generic commercial content' and 'authentic human artistry'?|Generic mass-produced content will be automated by machines, while authentic human artistry will become even more prized for its scarcity and emotional truth|Both will disappear within five years|AI will only make museum art, while humans write advertisements|There is no difference between the two",
        "What metaphor does the writer use in the title and final sentence to define the role of AI in art?|'AI is a remarkably powerful new paintbrush — but it still takes a human heart and mind to decide what is worth painting.'|'AI is a chess grandmaster that always wins.'|'AI is a library with locked doors.'|'AI is a broken mirror.'",
        "What does the noun 'curation' mean in creative work (Paragraph 3)?|Using human taste and judgment to select, organize, and refine the best ideas or elements into a meaningful whole|Repairing broken musical instruments|Selling tickets at a gallery door|Writing computer code"
      ]
    },
    {
      num: 52, level: "B2",
      icon: "📈", genre: "ბაზრის ანალიზი",
      title: "ბაზრის კვლევის ანგარიში: ქართული ბრენდის გატანა ევროპულ ბაზარზე",
      subtitle: "Writing a Market Entry Report: Exporting Organic Tea to Germany",
      time: "9 წთ",
      prompt: "დაწერეთ ბაზრის კვლევის მოკლე ანალიტიკური ანგარიში (Market Entry Report) ადგილობრივი ეკო-პროდუქტის ევროპულ ბაზარზე გატანის შესახებ (სამიზნე ბაზრის მოთხოვნა, კონკურენტული უპირატესობა, დისტრიბუციის არხები და სერტიფიცირება).",
      template: "MARKET ENTRY REPORT: Exporting [Product] to [Country]. 1. Market Opportunity: Demand for organic products in [Country] grew by [Pct]% last year. 2. Competitive Advantage: Our product stands out due to [Unique Feature]. 3. Distribution Strategy: We recommend partnering with [Channel]. 4. Regulatory Requirements: Obtaining EU Organic certification is essential.",
      paragraphs: [
        [
          "MARKET ENTRY REPORT — Exporting 'Kolkheti Mountain Organic Tea' to the German Specialty Retail Market. 1. Market Opportunity and Consumer Trends: Germany is currently the largest market for organic food and beverages in the European Union, with annual organic retail sales exceeding sixteen billion euros. Over the past three years, German consumer demand for caffeine-free herbal infusions and single-origin artisanal loose-leaf teas has grown by fourteen percent annually, creating a prime export opportunity for our wild-harvested western Georgian teas.",
          "ბაზარზე შესვლის ანგარიში — „კოლხეთის მთის ორგანული ჩაის“ ექსპორტი გერმანიის სპეციალიზებულ საცალო ბაზარზე. 1. ბაზრის შესაძლებლობა და სამომხმარებლო ტენდენციები: გერმანია ამჟამად ევროკავშირში ორგანული საკვებისა და სასმელების უდიდესი ბაზარია, სადაც წლიური ბიო-გაყიდვები თექვსმეტ მილიარდ ევროს აჭარბებს. ბოლო სამი წლის განმავლობაში გერმანელ მომხმარებლებში მოთხოვნა უკოფეინო მცენარეულ ნაყენებსა და ერთი კონკრეტული რეგიონის (single-origin) ხელნაკეთ დასაყენებელ ჩაიზე წელიწადში თოთხმეტი პროცენტით იზრდება, რაც საუკეთესო საექსპორტო შესაძლებლობას ქმნის ჩვენი დასავლეთ საქართველოს ველურად მოკრეფილი ჩაისთვის."
        ],
        [
          "2. Unique Selling Proposition (USP) and Competitive Positioning: Because we cannot compete on low price against giant industrial tea brands from Asia, our strategy must focus on the premium specialty segment. Our unique competitive advantage lies in three factors: our tea bushes grow at an altitude of six hundred metres in Guria and Imereti in a cool sub-alpine microclimate where no chemical pesticides have ever been used; the leaves are hand-plucked and rolled in small batches; and our 'Wild Bilberry Leaf & Black Tea' blend offers a distinctive smoky-sweet flavour profile not found in mass-market brands.",
          "2. უნიკალური სავაჭრო უპირატესობა (USP) და კონკურენტული პოზიციონირება: რადგან დაბალი ფასით ვერ გავუწევთ კონკურენციას აზიის გიგანტურ ინდუსტრიულ ჩაის ბრენდებს, ჩვენი სტრატეგია პრემიუმ სპეციალიზებულ სეგმენტზე უნდა ფოკუსირდეს. ჩვენი უნიკალური კონკურენტული უპირატესობა სამ ფაქტორს ეფუძნება: ჩვენი ჩაის ბუჩქები იზრდება გურიასა და იმერეთში, ზღვის დონიდან ექვსასი მეტრის სიმაღლეზე, გრილ მიკროკლიმატში, სადაც ქიმიური პესტიციდები არასდროს გამოყენებულა; ფოთლები იკრიფება და იგრიხება ხელით, მცირე პარტიებად; ხოლო ჩვენი „ველური მოცვის ფოთლისა და შავი ჩაის“ ნაზავი გამოირჩევა განუმეორებელი გემოთი."
        ],
        [
          "3. Target Distribution Channels: Attempting to enter giant German supermarket chains immediately would require prohibitive listing fees and massive volumes. Instead, we recommend a phased B2B entry strategy targeting three high-margin channels in Berlin, Hamburg, and Munich: independent organic health-food stores ('Bioläden'), specialty tea boutiques, and third-wave cafés that value transparent farm-to-cup storytelling.",
          "3. სამიზნე სადისტრიბუციო არხები: გერმანიის გიგანტურ სუპერმარკეტების ქსელებში პირდაპირ შესვლის მცდელობა მოითხოვს უზარმაზარ სარეგისტრაციო გადასახადებსა და მასშტაბურ მოცულობებს. ამის ნაცვლად, გთავაზობთ ეტაპობრივ B2B სტრატეგიას, რომელიც ფოკუსირდება ბერლინის, ჰამბურგისა და მიუნხენის სამ მაღალმარჟიან არხზე: დამოუკიდებელ ორგანულ მაღაზიებზე („Bioläden“), ჩაის სპეციალიზებულ ბუტიკებსა და თანამედროვე კაფეებზე, რომლებიც აფასებენ პროდუქტის გამჭვირვალე წარმომავლობის ისტორიას."
        ],
        [
          "4. Packaging, Certification, and Logistics: To meet strict German retail standards, two preparatory steps are mandatory before export. First, we must complete our official 'EU Green Leaf Organic Certification' inspection next month and print bilingual German-English labels detailing brewing temperatures and the story of our Georgian family farmers. Second, we must switch to 100% biodegradable inner pouches inside recyclable cardboard tins, as German eco-consumers actively reject plastic-lined packaging.",
          "4. შეფუთვა, სერტიფიცირება და ლოგისტიკა: გერმანიის მკაცრი საცალო სტანდარტების დასაკმაყოფილებლად, ექსპორტამდე სავალდებულოა ორი მოსამზადებელი ნაბიჯი. პირველი: მომავალ თვეში უნდა დავასრულოთ ევროკავშირის ოფიციალური ორგანული სერტიფიკატის („EU Green Leaf“) ინსპექტირება და დავბეჭდოთ ორენოვანი (გერმანულ-ინგლისური) ეტიკეტები დაყენების ტემპერატურისა და ჩვენი ქართველი ფერმერების ისტორიის მითითებით. მეორე: უნდა გადავიდეთ 100%-ით ბიოდეგრადირებად შიდა პაკეტებსა და გადამუშავებად მუყაოს ტუბუსებზე, რადგან გერმანელი ეკო-მომხმარებლები უარს ამბობენ პლასტმასის შემცველ შეფუთვაზე."
        ],
        [
          "5. Action Plan and First-Year Target: We recommend booking an exhibition booth at the 'BioFach' international organic trade fair in Nuremberg this February to sign agreements with two regional specialty distributors. With a wholesale price of €6.50 per 100-gram tin (retailing at €14.90), our conservative first-year target of 15,000 tins will generate €97,500 in export revenue while establishing our brand in Europe.",
          "5. სამოქმედო გეგმა და პირველი წლის სამიზნე მაჩვენებელი: გთავაზობთ ამ თებერვალს ნიურნბერგის ორგანული პროდუქციის საერთაშორისო გამოფენა „BioFach“-ზე სტენდის დაჯავშნას ორ რეგიონულ დისტრიბუტორთან ხელშეკრულების გასაფორმებლად. 100-გრამიანი კოლოფის 6,50 ევროს საბითუმო ფასის პირობებში (საცალო ფასი დახლზე: 14,90 €), პირველი წლის კონსერვატიული გეგმა — 15 000 კოლოფი — მოიტანს 97 500 ევროს საექსპორტო შემოსავალს და დაამკვიდრებს ჩვენს ბრენდს ევროპაში."
        ]
      ],
      glossary: [
        "Market Entry Report|ბაზარზე შესვლის ანალიტიკური ანგარიში", "Unique Selling Proposition (USP)|უნიკალური სავაჭრო შეთავაზება / უპირატესობა", "single-origin artisanal tea|ერთი კონკრეტული რეგიონის ხელნაკეთი ჩაი",
        "compete on low price|დაბალი ფასით კონკურენციის გაწევა", "prohibitive fees|უკიდურესად მაღალი (შემაფერხებელი) გადასახადები", "phased entry strategy|ეტაპობრივი შესვლის სტრატეგია",
        "high-margin channel|მაღალმარჟიანი (მაღალმომგებიანი) სარეალიზაციო არხი", "biodegradable packaging|ბიოდეგრადირებადი (ბუნებაში უვნებლად დაშლადი) შეფუთვა", "wholesale price vs. retail price|საბითუმო ფასი და საცალო (საბოლოო) ფასი", "conservative target|კონსერვატიული (ფრთხილი/რეალისტური) სამიზნე მაჩვენებელი"
      ],
      questions: [
        "Why is Germany an attractive target market for 'Kolkheti Mountain Organic Tea' according to Section 1?|It is the largest organic market in the EU (over €16 billion annually), and demand for herbal infusions and artisanal loose-leaf teas is growing by 14% a year|Because Germany has no tea shops at all|Because transport to Germany is free|Because Germans only drink iced tea",
        "What does the marketing acronym 'USP' stand for in Section 2?|Unique Selling Proposition (the distinctive qualities that set your product apart from competitors)|Universal Shipping Price|United Supermarket Partnership|Unlimited Supply Plan",
        "Why shouldn't a small Georgian organic producer try to compete on low price against giant industrial Asian tea brands?|Because giant industrial factories have massive volume economies of scale; a small producer must compete on premium quality, purity, and unique origin instead|Because low prices are illegal in Europe|Because Georgian tea is heavier|Because ships cannot carry cheap tea",
        "What three factors make up the Georgian tea brand's Unique Selling Proposition (USP)?|Grown at 600m altitude without chemical pesticides in a cool microclimate, hand-plucked in small batches, and offering a unique Wild Bilberry Leaf & Black Tea blend|Sold in plastic bottles with added sugar|Packed in 10-kilogram industrial sacks|Flavoured with artificial lemon spray",
        "Why does the report advise AGAINST trying to enter giant German supermarket chains immediately in Year 1?|Because giant supermarkets require prohibitive listing fees and massive production volumes that strain a small producer|Because supermarkets in Germany do not sell tea|Because supermarkets are only open on Sundays|Because supermarkets only buy coffee",
        "Which three B2B distribution channels in Berlin, Hamburg, and Munich does the report recommend targeting first?|Independent organic health-food stores ('Bioläden'), specialty tea boutiques, and third-wave cafés|Petrol stations, airports, and stadiums|Pharmacies and hospitals|Bookshops and cinemas",
        "What does the adjective 'prohibitive' mean in the phrase 'prohibitive listing fees'?|So high or expensive that it prevents or discourages someone from doing something|Completely free of charge|Forbidden by the police|Paid once every ten years",
        "What two packaging and certification steps are mandatory before exporting to German eco-retailers (Section 4)?|Completing official 'EU Green Leaf Organic Certification' with bilingual labels, and switching to 100% biodegradable inner pouches inside recyclable cardboard tins|Wrapping the boxes in thick blue plastic|Printing labels only in Georgian|Selling tea in heavy glass jars",
        "What is the difference between the 'wholesale price of €6.50' and the 'retail price of €14.90' in Section 5?|€6.50 is the price the distributor/shop pays the producer per tin, whereas €14.90 is the final price the consumer pays on the shop shelf|€6.50 is the tax and €14.90 is the shipping cost|They are two different sizes of tins|€6.50 is the price in Georgia and €14.90 is the price in Asia",
        "How does the company plan to meet regional distributors and achieve €97,500 in first-year export revenue?|By booking an exhibition booth at the 'BioFach' international organic trade fair in Nuremberg in February and selling 15,000 tins at €6.50 wholesale|By sending cold emails to random people|By opening its own shop in Berlin tomorrow|By advertising on television"
      ]
    },
    {
      num: 53, level: "B2",
      icon: "🏛️", genre: "პუბლიცისტიკა",
      title: "ღია წერილი რედაქციას არქიტექტურული მემკვიდრეობის დაცვაზე",
      subtitle: "Writing a Formal Letter to a Newspaper Editor on Historic Preservation",
      time: "9 წთ",
      prompt: "დაწერეთ ოფიციალური გამოხმაურება-წერილი გაზეთის რედაქტორს (Letter to the Editor) ქალაქში ძველი ისტორიული შენობის დანგრევის წინააღმდეგ და მისი კულტურულ სივრცედ ადაპტირების მოთხოვნით.",
      template: "To the Editor of [Newspaper Name], Sir/Madam, I am writing in response to your article of [Date] regarding the planned demolition of [Building Name]. Replacing this nineteenth-century landmark with a glass tower would be a grave mistake. Instead, the city should follow the model of 'adaptive reuse' by turning it into a [Cultural Hub]. Yours faithfully, [Your Name].",
      paragraphs: [
        [
          "Letter to the Editor — 'The City Chronicle'. Sir, I am writing in response to your article published on Tuesday, the twentieth of October ('Council Debates Future of the Old Silk Mill'), which reported that a private property developer has applied for permission to demolish the 1892 Riverside Silk Mill and replace it with a fourteen-storey glass car park and office block. Tearing down this industrial landmark would be an irreversible loss to our city's identity.",
          "წერილი რედაქტორს — გაზეთი „The City Chronicle“. პატივცემულო რედაქტორო, გწერთ სამშაბათს, ოც ოქტომბერს გამოქვეყნებული თქვენი სტატიის („საბჭო მსჯელობს ძველი აბრეშუმის ფაბრიკის მომავალზე“) საპასუხოდ, სადაც აღნიშნული იყო, რომ კერძო დეველოპერმა მოითხოვა ნებართვა 1892 წელს აგებული მდინარისპირა აბრეშუმის ფაბრიკის დანგრევასა და მის ადგილას თოთხმეტსართულიანი მინის პარკინგისა და საოფისე კორპუსის აშენებაზე. ამ ინდუსტრიული ძეგლის დანგრევა ჩვენი ქალაქის იდენტობისთვის აუნაზღაურებელი დანაკლისი იქნება."
        ],
        [
          "For over a century, the red-brick Silk Mill with its arched cast-iron windows and tall chimney has stood as the finest surviving example of nineteenth-century craftsmanship on our riverfront. While nobody denies that the building has stood vacant for a decade and requires roof repairs, anstructural survey conducted by the University Architecture Faculty last year confirmed that its brick walls and oak beams remain completely sound!",
          "ერთ საუკუნეზე მეტია, წითელი აგურის აბრეშუმის ფაბრიკა თავისი თაღოვანი თუჯის ფანჯრებითა და მაღალი საკვამურით ჩვენს სანაპიროზე მეცხრამეტე საუკუნის ოსტატობის საუკეთესო შემორჩენილ ნიმუშად დგას. მიუხედავად იმისა, რომ არავინ უარყოფს შენობის ათწლიან უმოქმედობასა და სახურავის შეკეთების საჭიროებას, გასულ წელს უნივერსიტეტის არქიტექტურის ფაკულტეტის მიერ ჩატარებულმა კონსტრუქციულმა კვლევამ დაადასტურა, რომ მისი აგურის კედლები და მუხის კოჭები სრულიად მყარია!"
        ],
        [
          "Furthermore, demolishing a solid brick building and pouring thousands of tonnes of new concrete releases a massive amount of embodied carbon into the atmosphere, directly contradicting the city council's own 2030 climate pledge. As the famous architectural saying goes, 'the greenest building is the one that is already built!'",
          "გარდა ამისა, მყარი აგურის შენობის დანგრევა და ათასობით ტონა ახალი ბეტონის ჩასხმა ატმოსფეროში უზარმაზარი რაოდენობის ნახშირბადს გამოყოფს, რაც პირდაპირ ეწინააღმდეგება თავად ქალაქის საბჭოს 2030 წლის კლიმატურ ვალდებულებას. როგორც ცნობილი არქიტექტურული გამონათქვამი გვეუბნება: „ყველაზე ეკოლოგიური შენობა ის არის, რომელიც უკვე აშენებულია!“"
        ],
        [
          "Instead of demolition, our city should embrace the proven European model of 'adaptive reuse' — preserving the historic exterior shell while renovating the bright, high-ceilinged interior halls for modern community and commercial life. Across Europe, former factories and power stations — from London's Tate Modern to converted textile mills in Manchester and Berlin — have been transformed into thriving hubs combining public libraries, artisan workshops, co-working studios, and riverside cafés.",
          "დანგრევის ნაცვლად, ჩვენმა ქალაქმა უნდა აირჩიოს „ადაპტირებული გამოყენების“ (adaptive reuse) ნაცადი ევროპული მოდელი — ისტორიული გარე იერსახის შენარჩუნება და ნათელი, მაღალჭერიანი შიდა დარბაზების განახლება თანამედროვე საზოგადოებრივი და კომერციული სიცოცხლისთვის. მთელ ევროპაში ყოფილი ქარხნები და ელექტროსადგურები — ლონდონის „ტეიტ მოდერნიდან“ მანჩესტერისა და ბერლინის გარდაქმნილ ტექსტილის ფაბრიკებამდე — წარმატებულ ცენტრებად იქცა, რომლებიც აერთიანებს საჯარო ბიბლიოთეკებს, სახელოსნოებს, საერთო სამუშაო სივრცეებსა და სანაპიროს კაფეებს."
        ],
        [
          "Once a city's historic architecture is bulldozed for generic glass boxes, its unique character is gone forever; tourists and residents alike do not visit a riverfront to admire a fourteen-storey car park! I urge the Planning Committee to reject the demolition permit at next Monday's hearing and invite proposals for the adaptive restoration of the Silk Mill. Yours faithfully, Dr Julian Mercer, Senior Lecturer in Urban History.",
          "როდესაც ქალაქის ისტორიულ არქიტექტურას ბულდოზერით ანგრევენ უსახური მინის ყუთების გამო, მისი უნიკალური ხასიათი სამუდამოდ ქრება; არც ტურისტები და არც ადგილობრივები არ მიდიან სანაპიროზე თოთხმეტსართულიანი ავტოსადგომით აღსაფრთოვანებლად! მოვუწოდებ დაგეგმარების კომიტეტს, მომავალი ორშაბათის სხდომაზე უარყოს დანგრევის ნებართვა და გამოაცხადოს კონკურსი აბრეშუმის ფაბრიკის ადაპტირებული რესტავრაციის პროექტებზე. პატივისცემით, დოქტორი ჯულიან მერსერი, ურბანული ისტორიის უფროსი ლექტორი."
        ]
      ],
      glossary: [
        "I am writing in response to your article of...|გწერთ თქვენს სტატიაზე გამოხმაურების მიზნით...", "apply for permission to demolish|დანგრევის ნებართვის მოსაპოვებლად განაცხადის შეტანა", "irreversible loss|აუნაზღაურებელი / შეუქცევადი დანაკლისი",
        "While nobody denies that...,|მიუხედავად იმისა, რომ არავინ უარყოფს, რომ...,", "remain completely sound|სრულიად მყარ (საღ) მდგომარეობაში დარჩენა", "contradict a pledge|დადებულ პირობასთან / ვალდებულებასთან წინააღმდეგობაში მოსვლა",
        "adaptive reuse|ადაპტირებული გამოყენება (ძველი შენობის შენარჩუნება ახალი ფუნქციით)", "thriving hub|წარმატებული / მჩქეფარე ცენტრი", "generic glass box|უსახური (სტანდარტული) მინის კოლოფი/შენობა", "I urge the Committee to reject...|მოვუწოდებ კომიტეტს, უარყოს..."
      ],
      questions: [
        "How should a formal 'Letter to the Editor' of a newspaper begin in Paragraph 1?|By citing the exact title and publication date of the newspaper article you are responding to, and clearly stating your position|By telling a personal story about your summer holiday|By asking for a job as a journalist|By writing 'Hey Editor!'",
        "What building is at the centre of the controversy, and what does the private developer want to replace it with?|The 1892 Riverside Silk Mill; the developer wants to demolish it and build a 14-storey glass car park and office block|An ancient stone bridge; they want to replace it with a tunnel|A public school; they want to turn it into a supermarket|A park fountain",
        "How does Dr Mercer refute the claim that the old Silk Mill is too dilapidated (ruined) to save in Paragraph 2?|He cites a structural survey conducted by the University Architecture Faculty last year confirming that its brick walls and oak beams remain completely sound|He says the building was built only five years ago|He says the roof doesn't need any repairs|He says it is made of steel",
        "What does the adjective 'sound' mean in the architectural phrase 'its brick walls and oak beams remain completely sound'?|Structurally strong, solid, and in good condition|Making a loud noise in the wind|Painted bright red|Expensive to insure",
        "What environmental argument does Dr Mercer make against demolishing the brick building in Paragraph 3?|Demolishing a solid building and pouring thousands of tonnes of new concrete releases massive embodied carbon, contradicting the council's 2030 climate pledge|That glass windows reflect too much sunlight|That birds live on the roof|That trees in the park will lose their leaves",
        "What does the famous architectural saying 'the greenest building is the one that is already built' mean?|Renovating and reusing an existing building is far more environmentally friendly than demolishing it and manufacturing new concrete and steel from scratch|Buildings should be painted green|Only buildings covered in ivy are eco-friendly|Old buildings use less water",
        "What is 'adaptive reuse' in urban planning and architecture (Paragraph 4)?|Preserving a historic building's exterior shell while renovating its interior spaces for new modern community and commercial functions|Demolishing an old building and building an exact copy out of plastic|Locking an old building so nobody can enter|Moving a building brick by brick to another city",
        "What real-world European examples of successful adaptive reuse does Dr Mercer mention?|London's Tate Modern (a former power station) and converted textile mills in Manchester and Berlin|The Eiffel Tower in Paris|New airport terminals in Frankfurt|Suburban shopping malls",
        "What modern functions could the renovated Silk Mill house according to Paragraph 4?|A thriving hub combining a public library, artisan workshops, co-working studios, and riverside cafés|A coal factory|An indoor car park|A prison",
        "What specific action does Dr Mercer urge the Planning Committee to take at next Monday's hearing?|To reject the demolition permit and invite proposals for the adaptive restoration of the Silk Mill|To buy the building for ten million euros|To close the riverfront to pedestrians|To postpone the meeting for five years"
      ]
    },
    {
      num: 54, level: "B2",
      icon: "💳", genre: "ეკონომიკური ესე",
      title: "მიზეზ-შედეგობრივი ესე: უნაღდო ანგარიშსწორება და ხარჯვის ჩვევები",
      subtitle: "Writing a Cause-and-Effect Essay: How Contactless Payments Alter Spending",
      time: "9 წთ",
      prompt: "დაწერეთ მიზეზ-შედეგობრივი ესე (Cause-and-Effect Essay) იმაზე, თუ რატომ გადავიდა საზოგადოება უკონტაქტო გადახდებზე და როგორ ცვლის ეს მომხმარებელთა ფსიქოლოგიასა და ხარჯვის ჩვევებს.",
      template: "Over the past decade, contactless cards and mobile wallets have largely replaced physical cash. This shift was driven by convenience and faster transactions. However, removing physical banknotes has had a profound psychological effect: because tapping a phone feels painless, impulse spending has risen. To stay in control, consumers must track their digital budgets actively.",
      paragraphs: [
        [
          "Essay Title: The Invisible Wallet — The Causes and Psychological Effects of the Cashless Shift. Less than fifteen years ago, leaving home without a leather wallet containing paper banknotes and coins meant you could not buy a morning coffee or a bus ticket. Today, in cities across Europe and Asia, millions of citizens go through an entire month paying for everything with a one-second tap of a smartphone or smartwatch. This essay explores the technological causes behind the rapid rise of contactless payments and examines how invisible money alters our financial behaviour.",
          "ესეს სათაური: უხილავი საფულე — უნაღდო ანგარიშსწორებაზე გადასვლის მიზეზები და ფსიქოლოგიური შედეგები. თხუთმეტ წელზე ნაკლები ხნის წინ ქაღალდის კუპიურებითა და მონეტებით სავსე საფულის გარეშე სახლიდან გასვლა ნიშნავდა, რომ ვერ იყიდდით ვერც დილის ყავას და ვერც ავტობუსის ბილეთს. დღეს კი ევროპისა და აზიის ქალაქებში მილიონობით მოქალაქე მთელ თვეს ისე ატარებს, რომ ყველაფერს სმარტფონის ან სმარტ-საათის ერთწამიანი მიდებით იხდის. ეს ესე იკვლევს უკონტაქტო გადახდების სწრაფი ზრდის მიზეზებს და აანალიზებს, თუ როგორ ცვლის უხილავი ფული ჩვენს ფინანსურ ქცევას."
        ],
        [
          "The primary cause of this transformation is frictionless convenience for both consumers and businesses. Counting out small change at a busy supermarket checkout or searching for an ATM that has not run out of banknotes wastes time. For merchants and public transport networks, handling physical cash is surprisingly expensive: banks charge fees to deposit coins, armoured security vans are required to transport cash, and human counting errors are common. Contactless terminals cut checkout times to three seconds and automatically log every sale.",
          "ამ გარდაქმნის უმთავრესი მიზეზი როგორც მომხმარებლებისთვის, ისე ბიზნესისთვის შეუფერხებელი კომფორტია. გადატვირთული სუპერმარკეტის სალაროსთან ხურდის თვლა ან მოქმედი ბანკომატის ძებნა დროს გვაკარგვინებს. სავაჭრო ობიექტებისა და საზოგადოებრივი ტრანსპორტისთვის ნაღდი ფულის მომსახურება გასაოცრად ძვირია: ბანკები ხურდის შეტანაზე საკომისიოს იღებენ, ფულის გადასაზიდად საჭიროა საინკასაციო მანქანები, დათვლისას კი ხშირია შეცდომები. უკონტაქტო ტერმინალები გადახდის დროს სამ წამამდე ამცირებს და ყველა გაყიდვას ავტომატურად აღრიცხავს."
        ],
        [
          "However, the shift from physical banknotes to digital pixels has triggered a powerful psychological effect known to behavioural economists as 'payment decoupling'. When you open your wallet and hand over two crisp twenty-euro banknotes for a restaurant meal, your brain visually sees your wealth shrinking and experiences a natural emotional brake called the 'pain of paying'. This physical sensation makes you pause and ask whether an item is truly worth the price.",
          "თუმცა, ფიზიკური ბანკნოტებიდან ციფრულ პიქსელებზე გადასვლამ გამოიწვია ძლიერი ფსიქოლოგიური ეფექტი, რომელსაც ქცევითი ეკონომისტები „გადახდის გაუცხოებას“ (payment decoupling) უწოდებენ. როდესაც რესტორანში საფულეს ხსნით და ორ ოცევროიან კუპიურას აწვდით, თქვენი ტვინი თვალით ხედავს თანხის შემცირებას და განიცდის ბუნებრივ ემოციურ მუხრუჭს — „გადახდის ტკივილს“. ეს ფიზიკური შეგრძნება გაიძულებთ შეყოვნდეთ და დაფიქრდეთ, ნამდვილად ღირს თუ არა ნივთი ამ ფასად."
        ],
        [
          "When you pay by tapping a smartwatch or using 'one-click' online checkout, that sensory feedback disappears completely! Because your wallet looks identical before and after the purchase, the brain treats digital money almost like play money in a board game. Consequently, university studies show that consumers spend between fifteen and twenty-five percent more on impulse purchases — such as extra snacks, такси rides, and subscription apps — when paying contactlessly compared to using cash.",
          "სმარტ-საათის მიდებით ან ონლაინ „ერთი კლიკით“ გადახდისას კი ეს სენსორული უკუკავშირი სრულიად ქრება! რადგან ყიდვამდე და ყიდვის შემდეგ თქვენი საფულე ზუსტად ერთნაირად გამოიყურება, ტვინი ციფრულ ფულს თითქმის სამაგიდო თამაშის სათამაშო ფულად აღიქვამს. შესაბამისად, საუნივერსიტეტო კვლევები აჩვენებს, რომ უკონტაქტოდ გადახდისას მომხმარებლები იმპულსურ შენაძენებზე — დამატებით ტკბილეულზე, ტაქსით მგზავრობასა და ფასიან აპლიკაციებზე — ნაღდ ფულთან შედარებით თხუთმეტიდან ოცდახუთ პროცენტამდე მეტს ხარჯავენ."
        ],
        [
          "In conclusion, while contactless technology has made daily commerce faster and safer than ever before, its convenience comes with a hidden trap for personal savings. To enjoy the speed of digital payments without falling victim to unconscious overspending, modern consumers must reintroduce 'healthy friction' — such as turning on instant SMS spending alerts and setting strict weekly limits in their banking apps.",
          "დასასრულს, მიუხედავად იმისა, რომ უკონტაქტო ტექნოლოგიამ ყოველდღიური ვაჭრობა უფრო სწრაფი და უსაფრთხო გახადა, მის კომფორტს პირადი დანაზოგებისთვის ფარული მახე ახლავს. იმისათვის, რომ ვისარგებლოთ ციფრული გადახდების სისწრაფით და არ გავხდეთ გაუცნობიერებელი გადაჭარბებული ხარჯვის მსხვერპლი, თანამედროვე მომხმარებლებმა უნდა დააბრუნონ „ჯანსაღი შემაკავებელი ბარიერები“ — როგორიცაა მყისიერი SMS-შეტყობინებების ჩართვა და საბანკო აპლიკაციაში მკაცრი კვირის ლიმიტების დაწესება."
        ]
      ],
      glossary: [
        "frictionless convenience|შეუფერხებელი (დაბრკოლების გარეშე) კომფორტი", "run out of banknotes|ბანკნოტების (კუპიურების) გამოლევა ბანკომატში", "trigger a psychological effect|ფსიქოლოგიური ეფექტის გამოწვევა / გააქტიურება",
        "behavioural economist|ქცევითი ეკონომისტი (ფინანსური ფსიქოლოგიის მკვლევარი)", "pain of paying|„გადახდის ტკივილი“ (ფულთან განშორების შეგრძნება)", "sensory feedback|სენსორული (გრძნობითი/ხილული) უკუკავშირი",
        "impulse purchase|იმპულსური (დაუგეგმავი) შენაძენი", "come with a hidden trap|ფარული მახის / საფრთხის თანხლება", "unconscious overspending|გაუცნობიერებელი გადაჭარბებული ხარჯვა", "set strict weekly limits|მკაცრი ყოველკვირეული ლიმიტების დაწესება"
      ],
      questions: [
        "How is this five-paragraph 'Cause-and-Effect Essay' structured?|Paragraph 1: Introduce the cashless trend; Paragraph 2: Analyze the practical CAUSES (speed, lower cost for merchants); Paragraphs 3 & 4: Analyze the psychological EFFECTS on spending; Paragraph 5: Conclusion & advice|All five paragraphs only list the history of gold coins|Paragraph 1 is the conclusion and Paragraph 5 is the introduction|It is written as a dialogue between two bankers",
        "What does the phrase 'frictionless convenience' mean in Paragraph 2?|Making a process (like paying) completely smooth and effortless, removing small delays or obstacles ('friction') like counting coins|Rubbing two coins together to make heat|Making payments take ten minutes longer|Requiring a passport for every purchase",
        "Why is handling physical cash surprisingly expensive for merchants and transport networks?|Banks charge fees to deposit coins, armoured security vans are needed to transport cash, and human counting errors are common|Because paper banknotes weigh ten kilograms each|Because cash registers use too much electricity|Because coins dissolve in water",
        "What is the 'pain of paying' described by behavioural economists in Paragraph 3?|The natural emotional brake our brain feels when we physically see banknotes leaving our wallet, which makes us pause and think before spending|A physical headache caused by noisy shops|A fee charged by credit card companies|The weight of coins in your pocket",
        "Why does paying with a smartwatch or 'one-click' online checkout remove the 'pain of paying' (Paragraph 4)?|Because all sensory feedback disappears — your wallet looks identical before and after the tap, so the brain treats digital money almost like play money|Because online shops are cheaper|Because smartwatches give you a fifty percent discount|Because banks pay for the items",
        "By how much do impulse purchases increase when people pay contactlessly compared to using physical cash?|Between fifteen and twenty-five percent more|By two hundred percent|Impulse spending actually drops to zero|There is no difference at all",
        "What examples of typical 'impulse purchases' are mentioned in Paragraph 4?|Extra snacks, taxi rides, and subscription apps|Buying a house or a factory|Paying university tuition fees|Buying industrial machinery",
        "Which cause-and-effect linking words are used across the essay to connect reasons and results?|'triggered', 'Consequently,', 'Because...', and 'comes with'|'Once upon a time', 'Meanwhile', 'Yesterday'|'Dear Sir', 'Yours faithfully'|'On the left', 'Straight ahead'",
        "What does the writer mean by recommending that consumers reintroduce 'healthy friction' in Paragraph 5?|Creating small intentional reminders (like instant SMS alerts and weekly app limits) that make you consciously aware of your digital spending|Rubbing your credit card with sandpaper|Only paying with heavy copper coins|Closing your bank account forever",
        "What two practical banking habits does the conclusion recommend to prevent unconscious overspending?|Turning on instant SMS spending alerts and setting strict weekly spending limits in your banking app|Never checking your bank balance|Leaving your phone at home|Borrowing money from friends"
      ]
    },
    {
      num: 55, level: "B2",
      icon: "🥊", genre: "საგრანტო პროექტი",
      title: "საგრანტო განაცხადი ახალგაზრდული სპორტული აკადემიისთვის",
      subtitle: "Writing a Community Grant Proposal: The Neighbourhood Boxing & Fitness Hub",
      time: "9 წთ",
      prompt: "დაწერეთ საგრანტო განაცხადი (Grant Proposal) მუნიციპალური ან საერთაშორისო ფონდისთვის უბანში ახალგაზრდული სპორტული დარბაზის აღჭურვის დასაფინანსებლად (სოციალური საჭიროება, პროგრამის აღწერა, ბიუჯეტი და მდგრადობა).",
      template: "GRANT APPLICATION: [Project Title]. 1. Community Need: Our district currently lacks affordable sports facilities for youth. 2. Project Description: We will renovate [Venue] and offer free after-school classes in [Sport]. 3. Requested Funding: We request a grant of [Amount] euros to purchase [Equipment]. 4. Long-Term Sustainability: Evening adult memberships will cover ongoing utility costs.",
      paragraphs: [
        [
          "COMMUNITY SPORTS GRANT APPLICATION — 'Iron Will Youth Boxing & Conditioning Academy'. 1. Statement of Community Need: The Eastside Industrial District is home to over four thousand teenagers and young adults, yet it currently has zero public sports centres or affordable fitness clubs. As a result, many school pupils spend their afternoons entirely on smartphones or hanging around street corners. Our non-profit sports association is applying for a €12,000 municipal grant to equip a community boxing and athletic conditioning gym.",
          "საგრანტო განაცხადი — ახალგაზრდული კრივისა და ფიზიკური მომზადების აკადემია „რკინის ნება“. 1. საზოგადოებრივი საჭიროების დასაბუთება: აღმოსავლეთის ინდუსტრიულ უბანში ცხოვრობს ოთხი ათასზე მეტი მოზარდი და ახალგაზრდა, თუმცა უბანში ამჟამად არ არის არცერთი საჯარო სპორტული ცენტრი ან ხელმისაწვდომი ფიტნეს-კლუბი. შედეგად, მოსწავლეთა დიდი ნაწილი ნაშუადღევს მთლიანად სმარტფონებში ან ქუჩაში უهدفოდ ატარებს. ჩვენი არაკომერციული სპორტული ასოციაცია ითხოვს 12 000 ევროს მუნიციპალურ გრანტს საუბნო კრივისა და ფიზიკური მომზადების დარბაზის აღსაჭურვად."
        ],
        [
          "2. Project Objectives and Target Group: Contrary to popular misconceptions, amateur boxing training is not about aggression; it is one of the most disciplined, character-building sports in the world. Our primary objective is to provide free after-school training three times a week (Monday, Wednesday, and Friday from 4:00 PM to 6:30 PM) for sixty local youths aged twelve to eighteen. Certified coaches will teach footwork, jump-rope cardio, pad work, self-control, and healthy nutrition habits.",
          "2. პროექტის მიზნები და სამიზნე ჯგუფი: გავრცელებული მცდარი წარმოდგენების საპირისპიროდ, სამოყვარულო კრივში ვარჯიში აგრესიას არ ეხება — ეს არის მსოფლიოში ერთ-ერთი ყველაზე დისციპლინირებული, ხასიათის გამომწრთობი სპორტი. ჩვენი მთავარი მიზანია კვირაში სამჯერ (ორშაბათს, ოთხშაბათსა და პარასკევს, 16:00-დან 18:30 საათამდე) უფასო ვარჯიშების ჩატარება თორმეტიდან თვრამეტ წლამდე ასაკის სამოცი ადგილობრივი მოზარდისთვის. სერტიფიცირებული მწვრთნელები მათ შეასწავლიან დგომსა და გადაადგილებას, ლახტით კარდიოვარჯიშს, თათებზე მუშაობას, თვითკონტროლსა და ჯანსაღ კვებას."
        ],
        [
          "3. Venue and Community Contribution: The local district school has generously agreed to provide a 200-square-metre former gymnasium hall rent-free for five years. Last month, twenty neighbourhood volunteers and parents spent two weekends painting the walls, repairing the shower rooms, and installing LED ceiling lights. We now need the equipment grant to turn this clean hall into a safe, professional training space.",
          "3. ფართი და თემის თანამონაწილეობა: უბნის სკოლა უსასყიდლოდ დაგვთანხმდა ხუთი წლის ვადით, ქირის გარეშე გადმოგვცეს 200 კვ.მ. ყოფილი სპორტული დარბაზი. გასულ თვეს ოცმა ადგილობრივმა მოხალისემ და მშობელმა ორი შაბათ-კვირა დაუთმო კედლების შეღებვას, საშხაპეების შეკეთებასა და ჭერის LED განათების დამონტაჟებას. ახლა გვჭირდება აღჭურვილობის გრანტი, რათა ეს სუფთა დარბაზი უსაფრთხო, პროფესიონალურ სავარჯიშო სივრცედ ვაქციოთ."
        ],
        [
          "4. Itemized Equipment Budget (€12,000 Total): Every euro of the requested grant will go directly toward durable athletic equipment: 1) One standard five-metre training ring with corner pads and shock-absorbing floor mats (€4,800); 2) Eight heavy leather punching bags, wall brackets, and speedballs (€2,400); 3) Thirty pairs of 14 oz and 16 oz protective boxing gloves, headgear, elastic hand wraps, and forty jump ropes (€2,600); and 4) Pull-up bars, medicine balls, kettlebells, and a first-aid defibrillator kit (€2,200).",
          "4. აღჭურვილობის დეტალური ბიუჯეტი (ჯამში 12 000 €): მოთხოვნილი გრანტის თითოეული ევრო პირდაპირ მოხმარდება გამძლე სპორტულ ინვენტარს: 1) ერთი სტანდარტული ხუთმეტრიანი სავარჯიშო რინგი რბილი კუთხეებითა და დარტყმის მშთანთქმელი იატაკის ტატამით (4 800 €); 2) რვა მძიმე ტყავის კრივის ტომარა, კედლის სამაგრები და სწრაფი მსხლები (2 400 €); 3) ოცდაათი წყვილი 14 და 16-უნციანი დამცავი ხელთათმანი, ჩაფხუტები, 4-მეტრიანი ელასტიკური ბინტები და ორმოცი ლახტი (2 600 €); და 4) ღერძები (ტურნიკები), მედიცინბოლები, გირები და პირველადი დახმარების ნაკრები (2 200 €)."
        ],
        [
          "5. Long-Term Financial Sustainability and Impact: Grant committees rightly ask how a project will survive after the initial grant is spent. While afternoon youth classes will remain 100% free forever, the academy will offer evening fitness and boxing classes for working adults from 7:00 PM to 9:30 PM at a modest fee of €30 per month. Subscriptions from just forty adult members (€1,200/month) will fully cover coach stipends, heating, and equipment replacement, making the academy completely self-sustaining from Month Two!",
          "5. გრძელვადიანი ფინანსური მდგრადობა და შედეგი: საგრანტო კომისიები სამართლიანად კითხულობენ, როგორ გააგრძელებს პროექტი არსებობას საწყისი გრანტის ათვისების შემდეგ. სანამ ნაშუადღევის ახალგაზრდული ჯგუფები სამუდამოდ 100%-ით უფასო დარჩება, აკადემია საღამოს საათებში (19:00-დან 21:30-მდე) დასაქმებულ ზრდასრულებს შესთავაზებს ფიტნესისა და კრივის ვარჯიშებს თვეში 30 ევროდ. მხოლოდ ორმოცი ზრდასრული წევრის აბონემენტი (1 200 €/თვეში) სრულად დაფარავს მწვრთნელების ანაზღაურებას, გათბობასა და ინვენტარის განახლებას, რაც აკადემიას მეორე თვიდანვე სრულიად თვითკმარს გახდის!"
        ]
      ],
      glossary: [
        "Statement of Community Need|საზოგადოებრივი საჭიროების დასაბუთება (საგრანტო განაცხადში)", "non-profit association|არაკომერციული (არამომგებიანი) ასოციაცია", "Contrary to popular misconceptions,|გავრცელებული მცდარი წარმოდგენების საპირისპიროდ,",
        "character-building sport|ხასიათის / ნებისყოფის გამომწრთობი სპორტი", "provide a hall rent-free|დარბაზის უსასყიდლოდ (ქირის გარეშე) გადაცემა", "itemized equipment budget|აღჭურვილობის დეტალური (ჩაშლილი) ბიუჯეტი",
        "shock-absorbing floor mats|დარტყმის მშთანთქმელი იატაკის საფარი (ტატამი)", "punching bag and hand wraps|კრივის ტომარა და ხელის ბინტები", "long-term financial sustainability|გრძელვადიანი ფინანსური მდგრადობა", "self-sustaining|თვითკმარი (საკუთარი შემოსავლით რომ ინახავს თავს)"
      ],
      questions: [
        "What community problem in the Eastside Industrial District does Section 1 highlight to justify the grant?|Although over 4,000 teenagers live in the district, there are zero public sports centres or affordable gyms, leaving youth on phones or street corners|The district has too many swimming pools|The school building is too small|There are no buses in the district",
        "How does the writer address the common misconception that boxing is about aggression in Section 2?|By explaining that amateur boxing training is one of the most disciplined, character-building sports, teaching footwork, cardio, self-control, and healthy nutrition|By saying students will never wear gloves|By changing the sport to chess|By only allowing adults to join",
        "Who is the target group for the free after-school classes, and when will they train?|Sixty local youths aged 12 to 18, training three times a week (Monday, Wednesday, Friday from 4:00 PM to 6:30 PM)|University professors on Sunday mornings|Primary school children at 8:00 AM|Professional athletes only",
        "Why is Section 3 ('Venue and Community Contribution') so persuasive to a grant committee?|It shows that the community hasn't just waited for money: the school gave a 200m² hall rent-free for 5 years, and 20 volunteers already painted it and fixed the showers and lights|Because it asks the committee to buy a new building for a million euros|Because it says volunteers will build the boxing gloves by hand|Because the hall is in another city",
        "How much total grant funding is requested, and how is it broken down in Section 4?|€12,000 total: €4,800 for a 5m ring & floor mats; €2,400 for 8 heavy bags & speedballs; €2,600 for 30 pairs of 14/16 oz gloves, headgear, wraps & 40 jump ropes; €2,200 for bars, weights & first-aid|€100,000 for salaries only|€12,000 for a minibus|€5,000 without any details",
        "Why must a grant budget always be 'itemized' (broken down into exact quantities and prices)?|It proves to the funding organization that you have researched real supplier prices and that every euro has a transparent, concrete purpose|To make the application harder to read|So you can spend the money on anything you want later|Because grant forms require four sentences",
        "What does 'Long-Term Financial Sustainability' mean in a grant proposal (Section 5)?|A clear plan showing how the project will continue paying its monthly operating costs (heating, coaches, maintenance) after the one-time grant money is spent|Asking for a new grant every month forever|Closing the gym after six months|Borrowing money from a bank at high interest",
        "How will the 'Iron Will Academy' become 100% self-sustaining from Month Two while keeping youth classes free?|By offering evening fitness and boxing classes for working adults (7:00–9:30 PM) at €30/month; just 40 adult members (€1,200/month) will cover all ongoing costs|By charging the school children €50 a week|By selling the boxing ring after one year|By renting the hall as a car park at night",
        "What does the adjective 'rent-free' mean in Paragraph 3 ('provide a 200-square-metre former gymnasium hall rent-free')?|Without charging any monthly rent money|Free from furniture|Open to the rain|Located outside the city",
        "Which phrase in Paragraph 2 is used to correct a false public belief before stating the truth?|'Contrary to popular misconceptions,'|'In accordance with popular belief,'|'Because of popular misconceptions,'|'As everyone rightly thinks,'"
      ]
    },
    {
      num: 56, level: "B2",
      icon: "📷", genre: "ხელოვნების რეცენზია",
      title: "კულტურული რეცენზია: ქუჩის ფოტოგრაფიის გამოფენის მიმოხილვა",
      subtitle: "Writing an Art Exhibition Review: 'Shadows and Pavements' at the City Gallery",
      time: "9 წთ",
      prompt: "დაწერეთ კულტურული რეცენზია (Exhibition Review) ფოტოგრაფიის ან ფერწერის გამოფენის შესახებ (გამოფენის კონცეფცია, განათება/ექსპოზიცია, ყველაზე გამორჩეული ნამუშევრის აღწერა და პრაქტიკული ინფორმაცია დამთვალიერებლებისთვის).",
      template: "Exhibition Review: '[Title]' at [Gallery Name]. Running until [Date], this retrospective showcases [Number] works by [Artist]. The exhibition is divided into [Number] thematic rooms. The standout piece is '[Work Title]', which captures [Description]. Admission is [Price], and it is well worth a visit.",
      paragraphs: [
        [
          "Exhibition Review: Poetry in the Rain — 'Shadows and Pavements' at the Modern Photography Gallery. What makes an ordinary Tuesday morning on a wet city street worthy of art? That is the central question explored in 'Shadows and Pavements', a captivating retrospective of eighty black-and-white photographs by French-Hungarian street photographer Henri Marceau, running at the Modern Photography Gallery until the thirtieth of November.",
          "გამოფენის რეცენზია: პოეზია წვიმაში — „ჩრდილები და ტროტუარები“ თანამედროვე ფოტოგრაფიის გალერეაში. რა აქცევს ქალაქის სველ ქუჩაში ჩვეულებრივ სამშაბათ დილას ხელოვნების ღირსად? სწორედ ამ მთავარ კითხვას იკვლევს „ჩრდილები და ტროტუარები“ — ფრანგ-უნგრელი ქუჩის ფოტოგრაფის, ანრი მარსოს ოთხმოცი შავ-თეთრი ფოტოსურათის მომხიბვლელი რეტროსპექტივა, რომელიც თანამედროვე ფოტოგრაფიის გალერეაში ოცდაათ ნოემბრამდე გაგრძელდება."
        ],
        [
          "Curated with remarkable sensitivity, the exhibition is divided chronologically across four dimly lit halls, tracing Marceau's work across Paris, Prague, and New York between 1955 and 1985. Instead of staging posed portraits in a studio, Marceau walked the streets for hours with a small, silent 35mm rangefinder camera, waiting patiently for what photography pioneer Henri Cartier-Bresson called 'the decisive moment' — that split second when geometry, light, and human emotion align by chance.",
          "გამორჩეული გემოვნებით მოწყობილი ექსპოზიცია ქრონოლოგიურად არის განაწილებული ოთხ მკრთალად განათებულ დარბაზში და ასახავს მარსოს შემოქმედებას პარიზში, პრაღასა და ნიუ-იორკში 1955-დან 1985 წლამდე. სტუდიაში დადგმული პორტრეტების ნაცვლად, მარსო საათობით დადიოდა ქუჩებში პატარა, უხმო 35-მილიმეტრიანი კამერით და მოთმინებით ელოდა იმას, რასაც ფოტოგრაფიის პიონერმა ანრი კარტიე-ბრესონმა „გადამწყვეტი მომენტი“ უწოდა — წამის იმ მეასედს, როდესაც გეომეტრია, სინათლე და ადამიანური ემოცია შემთხვევით ერთ წერტილში იკვეთება."
        ],
        [
          "The undisputed masterpiece of the exhibition hangs in the second hall: 'The Violinist at Gare du Nord' (1962). Taken on a foggy winter morning inside the Paris railway station, the silver-gelatin print shows a young musician standing motionless with his violin case while a blurred crowd of commuters rushes past him like a river. The contrast between the sharp stillness of the boy's face and the ghostly motion blur of the crowd creates an unforgettable sense of solitude in the metropolis.",
          "გამოფენის უდავო შედევრი მეორე დარბაზში ჰკიდია: „მევიოლინე ჩრდილოეთის სადგურზე“ (1962 წ.). პარიზის რკინიგზის სადგურში ნისლიან ზამთრის დილას გადაღებულ ვერცხლისფერ-ჟელატინის ანაბეჭდზე ჩანს ახალგაზრდა მუსიკოსი, რომელიც ვიოლინოს ბუდით ხელში უძრავად დგას, სანამ მგზავრების ბუნდოვანი ტალღა მდინარესავით მიედინება მის გვერდით. ბიჭის სახის მკვეთრ უძრაობასა და ხალხის მოძრაობის გადღაბნილ კვალს შორის კონტრასტი მეგაპოლისში მარტოობის დაუვიწყარ განცდას ქმნის."
        ],
        [
          "What makes this exhibition particularly educational for photography enthusiasts is the third room, which displays Marceau's original 'contact sheets' alongside his magnifying glass and red grease pencil. Seeing the thirty-five unchosen frames on a roll of film — where a passer-by blinked or a bus blocked the light — before Marceau circled the single winning frame nº 24 reveals how much patience and self-criticism lie behind a single great image!",
          "რაც ამ გამოფენას ფოტოგრაფიის მოყვარულთათვის განსაკუთრებით შემეცნებითს ხდის, არის მესამე დარბაზი, სადაც წარმოდგენილია მარსოს ორიგინალი „საკონტაქტო ფურცლები“ (ფირის ყველა კადრის ანაბეჭდი) მის გამადიდებელ შუშასა და წითელ ფანქართან ერთად. ფირის იმ ოცდათხუთმეტი დაწუნებული კადრის ნახვა — სადაც გამვლელმა თვალი დაახამხამა ან სინათლე ავტობუსმა დაფარა — სანამ მარსო ერთადერთ გამარჯვებულ 24-ე კადრს შემოხაზავდა, გვიჩვენებს, რამდენი მოთმინება და თვითკრიტიკა დგას ერთი დიდებული სურათის უკან!"
        ],
        [
          "The only minor flaw in the exhibition design is that the explanatory wall labels are printed in rather small grey type, making them slightly difficult to read in the low gallery lighting. Nevertheless, 'Shadows and Pavements' is a triumph. The gallery is open Tuesday to Sunday from 10:00 AM to 7:00 PM (admission €8, free for students on Thursdays), and the accompanying illustrated catalogue is well worth purchasing.",
          "გამოფენის დიზაინის ერთადერთი მცირე ხარვეზი ის არის, რომ კედლის განმარტებითი წარწერები საკმაოდ წვრილი ნაცრისფერი შრიფტითაა დაბეჭდილი, რაც დარბაზის დაბალ განათებაში მათ წაკითხვას ოდნავ ართულებს. მიუხედავად ამისა, „ჩრდილები და ტროტუარები“ ნამდვილი ტრიუმფია. გალერეა ღიაა სამშაბათიდან კვირის ჩათვლით 10:00-დან 19:00 საათამდე (ბილეთი 8 €, ხუთშაბათობით სტუდენტებისთვის უფასოა), ხოლო გამოფენის ილუსტრირებული კატალოგი ნამდვილად ღირს შესაძენად."
        ]
      ],
      glossary: [
        "retrospective exhibition|რეტროსპექტიული გამოფენა (ავტორის მთელი შემოქმედების მიმოხილვა)", "curated with sensitivity|გემოვნებითა და სიფაქიზით მოწყობილი (კურირებული)", "the decisive moment|„გადამწყვეტი მომენტი“ (ფოტოგრაფიაში)",
        "align by chance|შემთხვევით ერთ ხაზზე/წერტილში თანხვედრა", "The undisputed masterpiece of the exhibition|გამოფენის უდავო შედევრი", "motion blur|მოძრაობის ბუნდოვანება (ხანგრძლივი დაყოვნებით გადაღების ეფექტი)",
        "sense of solitude|მარტოობის / განმარტოების განცდა", "contact sheet|საკონტაქტო ფურცელი (ფოტოფირის ყველა კადრის მინიატურული ანაბეჭდი)", "The only minor flaw is...|ერთადერთი მცირე ხარვეზი არის...", "well worth visiting / purchasing|ნამდვილად ღირს მონახულება / შეძენა"
      ],
      questions: [
        "What is a 'retrospective' exhibition in the art world (Paragraph 1)?|An exhibition that looks back over an artist's entire career, showing works spanning several decades (here, 1955 to 1985)|An exhibition showing only paintings finished yesterday|An auction where visitors bid on furniture|A competition for high school students",
        "How many black-and-white photographs by Henri Marceau are displayed, and which cities do they cover?|Eighty black-and-white photographs covering Paris, Prague, and New York between 1955 and 1985|Twenty colour photographs of Rome|Five hundred digital photos of Tokyo|Ten oil paintings of London",
        "What is 'the decisive moment', a famous photography concept coined by Henri Cartier-Bresson (Paragraph 2)?|That split second in street photography when geometry, light, and human emotion align by chance in the viewfinder|The moment a photographer buys a new camera|The hour when the gallery closes|Developing film in a darkroom",
        "Why does a strong art review zoom in to describe ONE specific artwork in detail (Paragraph 3: 'The Violinist at Gare du Nord')?|Describing one standout masterpiece vividly helps the reader visualize the artist's style and emotional impact much better than just listing eighty titles|Because the reviewer only looked at one photograph and left|Because the other seventy-nine photos were empty|To fill space",
        "How did Marceau create a visual contrast in 'The Violinist at Gare du Nord' (1962)?|By contrasting the sharp stillness of the motionless young violinist with the ghostly 'motion blur' of the rushing crowd of commuters|By painting the violin bright red on a black-and-white photo|By taking the photo from a helicopter|By using studio flashlights",
        "What is displayed in the third room that makes the exhibition especially educational for photography lovers?|Marceau's original 'contact sheets' showing all 36 frames of a film roll alongside his magnifying glass and red grease pencil markings|A collection of modern smartphones|A video game about trains|A café selling French croissants",
        "What do the thirty-five unchosen frames on the contact sheet teach visitors about great photography?|That behind a single masterpiece lie dozens of imperfect attempts, requiring immense patience and strict self-criticism in editing|That Marceau never made a single mistake|That cameras in 1962 took 36 identical photos at once|That film was free",
        "What is the reviewer's 'only minor flaw' regarding the exhibition design in Paragraph 5?|The explanatory wall labels are printed in small grey type, making them slightly hard to read in the low gallery lighting|The photographs are hung upside down|The ticket costs fifty euros|The gallery is only open for one hour a week",
        "Why does including one balanced, constructive criticism (like the small grey wall labels) make a positive review more credible?|It shows the reader that the reviewer is an observant, honest critic rather than a paid advertisement|Because newspapers hate positive reviews|To make the gallery director angry|Because the reviewer forgot their glasses",
        "What practical visitor details does the reviewer include in the final sentence?|Opening days/hours (Tue–Sun, 10 AM–7 PM), ticket price (€8, free for students on Thursdays), and the closing date (30th November)|The recipe for silver-gelatin paper|The phone number of the Paris train station|The history of Hungary"
      ]
    },
    {
      num: 57, level: "B2",
      icon: "⏱️", genre: "შრომის ორგანიზაცია",
      title: "ანალიტიკური ბრიფინგი: ოთხდღიანი სამუშაო კვირის შედეგები",
      subtitle: "Writing a Policy Briefing Note: Evaluating the Four-Day Workweek Trial",
      time: "9 წთ",
      prompt: "დაწერეთ ანალიტიკური ბრიფინგი (Policy Briefing Note) კომპანიის ან სამინისტროს ხელმძღვანელობისთვის ოთხდღიანი სამუშაო კვირის (32 საათი ხელფასის შეუცვლელად) საერთაშორისო პილოტური კვლევების შედეგების შესახებ.",
      template: "POLICY BRIEFING NOTE: The Four-Day Workweek (100-80-100 Model). 1. Overview: This briefing evaluates trials where staff work 80% of hours for 100% of pay in exchange for 100% productivity. 2. Key Findings: Revenue remained stable while staff burnout dropped by [Pct]%. 3. Implementation Challenges: Customer service coverage requires rota shifts. 4. Conclusion: A six-month trial is recommended.",
      paragraphs: [
        [
          "POLICY BRIEFING NOTE — Evaluating the 'Four-Day Workweek' Pilot Trials. 1. Executive Summary and the '100-80-100' Principle: For nearly a century, the five-day, forty-hour workweek has been the unquestioned standard of industrial and office employment. Between 2022 and 2025, however, more than two hundred companies across the UK, Iceland, Germany, and Portugal participated in coordinated six-month trials of a four-day workweek based on the '100-80-100 model': employees receive 100% of their salary for working 80% of the hours (32 hours), provided they deliver 100% of their usual output.",
          "ანალიტიკური ბრიფინგი — „ოთხდღიანი სამუშაო კვირის“ საპილოტე კვლევების შეფასება. 1. რეზიუმე და „100-80-100“ პრინციპი: თითქმის ერთი საუკუნის განმავლობაში ხუთდღიანი, ორმოცსაათიანი სამუშაო კვირა ინდუსტრიული და საოფისე დასაქმების უპირობო სტანდარტს წარმოადგენდა. თუმცა, 2022-2025 წლებში დიდი ბრიტანეთის, ისლანდიის, გერმანიისა და პორტუგალიის ორასზე მეტმა კომპანიამ მონაწილეობა მიიღო ოთხდღიანი სამუშაო კვირის ექვსთვიან კვლევებში, რომელიც ეფუძნება მოდელს „100-80-100“: თანამშრომლები იღებენ ხელფასის 100%-ს სამუშაო დროის 80%-ის (32 საათის) სანაცვლოდ, იმ პირობით, რომ შეინარჩუნებენ შესრულებული სამუშაოს 100%-იან შედეგს."
        ],
        [
          "2. Productivity and Financial Results: Before the trials began, critics predicted that cutting eight working hours per week would cause company revenues to fall by twenty percent. The empirical data collected by researchers at Cambridge and Oxford Universities showed the exact opposite! Average company revenue across the participating firms actually rose by 1.4% during the six-month trial compared to the previous period, and ninety-one percent of the companies chose to keep the four-day schedule permanently after the trial ended!",
          "2. პროდუქტიულობა და ფინანსური შედეგები: კვლევების დაწყებამდე კრიტიკოსები ვარაუდობდნენ, რომ კვირაში რვა სამუშაო საათის მოკლება კომპანიების შემოსავლებს ოცი პროცენტით შეამცირებდა. კემბრიჯისა და ოქსფორდის უნივერსიტეტების მკვლევართა მიერ შეგროვებულმა ფაქტობრივმა მონაცემებმა კი სრულიად საპირისპირო აჩვენა! მონაწილე ფირმების საშუალო შემოსავალი ექვსთვიანი პილოტის დროს წინა პერიოდთან შედარებით 1,4%-ით გაიზარდა, ხოლო კომპანიების ოთხმოცდათერთმეტმა პროცენტმა ექსპერიმენტის დასრულების შემდეგ ოთხდღიანი გრაფიკი მუდმივად დატოვა!"
        ],
        [
          "3. How Was 100% Output Achieved in 32 Hours? The secret lay in eliminating workplace time-wasting rather than making employees type faster. To earn their free day, teams redesigned their daily habits: hour-long meetings without agendas were replaced by focused fifteen-minute stand-up briefings; 'quiet focus blocks' were introduced in the mornings with internal chat notifications muted; and well-rested employees made significantly fewer errors that previously required hours of rework.",
          "3. როგორ მიიღწევა 100%-იანი შედეგი 32 საათში? საიდუმლო მდგომარეობდა არა იმაში, რომ თანამშრომლებს უფრო სწრაფად ებეჭდათ, არამედ სამუშაო დროის ფუჭი კარგვის აღმოფხვრაში. დამატებითი დასვენების დღის მოსაპოვებლად გუნდებმა შეცვალეს ყოველდღიური ჩვევები: უმიზნო ერთსაათიანი თათბირები ჩანაცვლდა კონკრეტული თხუთმეტწუთიანი შეხვედრებით; დილის საათებში შემოიღეს „მშვიდი კონცენტრაციის ბლოკები“ გამორთული ჩატ-შეტყობინებებით; ხოლო კარგად დასვენებულმა თანამშრომლებმა დაუშვეს გაცილებით ნაკლები შეცდომა, რაც ადრე საათობით ხელახალ გადაკეთებას მოითხოვდა."
        ],
        [
          "4. Impact on Staff Retention and Health: The human benefits were even more dramatic. Across the trials, employee burnout scores dropped by seventy-one percent, sick-leave days fell by sixty-five percent, and staff resignations dropped by fifty-seven percent — saving companies tens of thousands of euros in recruitment and training costs! Employees used their extra weekday for medical appointments, exercise, family care, and professional study.",
          "4. გავლენა კადრების შენარჩუნებასა და ჯანმრთელობაზე: ადამიანური სარგებელი კიდევ უფრო შთამბეჭდავი აღმოჩნდა. კვლევის მასშტაბით თანამშრომელთა პროფესიული გადაწვის მაჩვენებელი სამოცდათერთმეტი პროცენტით შემცირდა, ავადმყოფობის გამო გაცდენილი დღეები — სამოცდახუთი პროცენტით, ხოლო სამსახურიდან წასვლის შემთხვევები — ორმოცდაჩვიდმეტი პროცენტით, რამაც კომპანიებს ათობით ათასი ევრო დაუზოგა ახალი კადრების მოძიებასა და სწავლებაში! დასაქმებულებმა დამატებითი თავისუფალი დღე გამოიყენეს ექიმთან ვიზიტებისთვის, ვარჯიშისთვის, ოჯახისა და სწავლისთვის."
        ],
        [
          "5. Operational Considerations for Our Organization: Importantly, a four-day workweek for staff does not mean closing the company on Fridays! Customer-facing departments split into two rota teams: Team A works Monday to Thursday, while Team B works Tuesday to Friday, ensuring uninterrupted five-day client service. We recommend conducting a six-month trial in our IT and Financial Analysis departments starting in Q1 2027.",
          "5. საოპერაციო საკითხები ჩვენი ორგანიზაციისთვის: მნიშვნელოვანია აღინიშნოს, რომ თანამშრომლებისთვის ოთხდღიანი სამუშაო კვირა არ ნიშნავს კომპანიის დაკეტვას პარასკევობით! კლიენტებთან მომუშავე დეპარტამენტები იყოფა ორ მონაცვლე გუნდად: „A გუნდი“ მუშაობს ორშაბათიდან ხუთშაბათის ჩათვლით, ხოლო „B გუნდი“ — სამშაბათიდან პარასკევის ჩათვლით, რაც უზრუნველყოფს ხუთდღიან უწყვეტ მომსახურებას. გთავაზობთ 2027 წლის პირველი კვარტლიდან ექვსთვიანი საპილოტე პროგრამის ჩატარებას ჩვენს IT და ფინანსური ანალიზის დეპარტამენტებში."
        ]
      ],
      glossary: [
        "Policy Briefing Note|ანალიტიკური ბრიფინგი / მიმოხილვა (გადაწყვეტილების მიმღებთათვის)", "100-80-100 model|„100-80-100“ მოდელი (100% ხელფასი, 80% დრო, 100% შედეგი)", "provided they deliver...|იმ პირობით, რომ ისინი შეასრულებენ/დადებენ...",
        "eliminate workplace time-wasting|სამუშაო დროის ფუჭი კარგვის აღმოფხვრა", "meeting without an agenda|შეხვედრა წინასწარ გაწერილი დღის წესრიგის გარეშე", "hours of rework|საათობით ხელახალი გადაკეთება (შეცდომების გამო)",
        "staff retention and resignations|კადრების შენარჩუნება და სამსახურიდან წასვლა (დენადობა)", "recruitment costs|ახალი კადრების მოძიებისა და აყვანის ხარჯები", "split into two rota teams|ორ მონაცვლე (ცვლის) გუნდად გაყოფა", "uninterrupted client service|კლიენტების უწყვეტი მომსახურება"
      ],
      questions: [
        "What do the three numbers in the '100-80-100 model' of the four-day workweek stand for?|100% of salary, for working 80% of the hours (32 hours), in exchange for delivering 100% of usual productivity/output|100 employees working 80 days for €100|Working 100 hours a week for 80% pay|80% salary for 80% hours",
        "What happened to average company revenue across the 200+ participating firms during the six-month trials, and how many kept the policy?|Average revenue actually rose by 1.4%, and 91% of the participating companies chose to keep the four-day schedule permanently|Revenue dropped by 20%, and all companies cancelled the trial|Revenue stayed at zero|Only two companies kept the schedule",
        "How did employees manage to achieve 100% of their work output in 32 hours instead of 40 (Section 3)?|By eliminating time-wasting: replacing long unfocused meetings with 15-minute briefings, muting chat during morning focus blocks, and making fewer errors requiring rework|By skipping lunch breaks and working until midnight on Mondays|By hiring outside freelancers to do their work|By ignoring client emails",
        "What does the noun 'rework' mean in Section 3 ('fewer errors that previously required hours of rework')?|Doing a task all over again to fix mistakes that were made the first time due to tiredness|Working at a second job in the evening|Returning to the office after a holiday|Painting the office walls",
        "What were the three major health and HR improvements recorded during the trials in Section 4?|Employee burnout dropped by 71%, sick-leave days fell by 65%, and staff resignations dropped by 57%|Employees slept at their desks|Gym memberships dropped by 50%|Staff resignations doubled",
        "How does a 57% drop in 'staff resignations' save a company tens of thousands of euros?|Because the company saves huge recruitment and training costs that would otherwise be spent finding and onboarding replacements|Because the company pays lower taxes|Because the office uses less electricity|Because employees buy their own computers",
        "Does a four-day workweek for employees mean that the company closes its doors on Fridays and ignores clients (Section 5)?|No; customer-facing departments split into two rota teams (Team A works Mon–Thu, Team B works Tue–Fri), ensuring uninterrupted five-day client service|Yes, all offices lock their doors from Thursday night to Monday morning|Clients are only served on weekends|Only robots answer the phone on Fridays",
        "What does the conjunction 'provided (that)' mean in Section 1 ('provided they deliver 100% of their usual output')?|On the condition that / Only if|Even if they do not|Because they already did|Instead of delivering",
        "Why does the briefing note recommend starting with a 'six-month trial in the IT and Financial Analysis departments' rather than changing the whole company overnight?|Because project-based analytical departments can easily measure output and test the rota system before rolling it out company-wide|Because IT and Finance employees work only two hours a day|Because other departments don't use computers|To fire the other departments",
        "What tone makes a 'Policy Briefing Note' persuasive to senior management?|An objective, data-driven tone that cites university studies, exact percentages (91%, 71%, 65%), and practical operational solutions|An emotional letter complaining about being tired on Mondays|A list of demands with exclamation marks|A fictional story"
      ]
    },
    {
      num: 58, level: "B2",
      icon: "📚", genre: "განათლების პოლიტიკა",
      title: "დამარწმუნებელი ესე: რატომ უნდა ისწავლებოდეს სკოლაში ფინანსური წიგნიერება",
      subtitle: "Writing a Persuasive Essay on Mandatory Financial Literacy in Schools",
      time: "9 წთ",
      prompt: "დაწერეთ დამარწმუნებელი ესე (Persuasive Essay) იმის შესახებ, თუ რატომ უნდა იყოს ფინანსური წიგნიერება (ბიუჯეტირება, სესხის პროცენტი, დანაზოგი და რისკები) სავალდებულო საგანი უფროს კლასებში.",
      template: "Every year, millions of eighteen-year-olds graduate from high school knowing advanced algebra, yet having no idea how interest rates, credit cards, or taxes work. Making financial literacy mandatory in secondary schools is essential. Firstly, it protects young adults from debt traps. Secondly, it teaches the power of compound interest and saving. Financial education is a life skill no student should leave school without.",
      paragraphs: [
        [
          "Essay Title: The Missing Subject — Why Every Secondary School Must Teach Financial Literacy. Every June, millions of eighteen-year-olds graduate from secondary schools able to calculate the area of a triangle, recite eighteenth-century dates, and analyze chemical equations. Yet the moment they step into adult life and receive their first salary or credit card offer, a shocking number of young adults have no idea how compound interest, income tax, inflation, or loan contracts actually work! Making practical financial literacy a mandatory subject in secondary schools is one of the most urgent reforms needed in modern education.",
          "ესეს სათაური: გამოტოვებული საგანი — რატომ უნდა ასწავლიდეს ყველა საშუალო სკოლა ფინანსურ წიგნიერებას. ყოველ ივნისს მილიონობით თვრამეტი წლის ახალგაზრდა ამთავრებს სკოლას ისე, რომ შეუძლია სამკუთხედის ფართობის გამოთვლა, მეთვრამეტე საუკუნის თარიღების ჩამოთვლა და ქიმიური განტოლებების ამოხსნა. თუმცა, როგორც კი ისინი ზრდასრულ ცხოვრებაში შეაბიჯებენ და პირველ ხელფასს ან საკრედიტო ბარათის შეთავაზებას მიიღებენ, მათ უდიდეს ნაწილს წარმოდგენაც არ აქვს, როგორ მუშაობს რთული პროცენტი, საშემოსავლო გადასახადი, ინფლაცია ან სასესხო ხელშეკრულება! საშუალო სკოლებში პრაქტიკული ფინანსური წიგნიერების სავალდებულო საგნად შემოღება თანამედროვე განათლების ერთ-ერთი ყველაზე გადაუდებელი რეფორმაა."
        ],
        [
          "First of all, financial education is essential for protecting young people from high-interest debt traps in today's digital economy. With 'Buy Now, Pay Later' buttons and instant mobile loans available on every smartphone screen, borrowing money has never been easier — or more dangerous for the uninformed. Students who are taught how to calculate the true Annual Percentage Rate (APR) of a payday loan or credit card balance are far less likely to fall into a spiral of unmanageable debt in their twenties.",
          "უპირველეს ყოვლისა, ფინანსური განათლება აუცილებელია დღევანდელ ციფრულ ეკონომიკაში ახალგაზრდების მაღალპროცენტიანი ვალის მახეებისგან დასაცავად. როდესაც ყველა სმარტფონის ეკრანზე ხელმისაწვდომია ღილაკი „იყიდე ახლა, გადაიხადე მოგვიანებით“ და მყისიერი მობილური სესხები, ფულის სესხება არასდროს ყოფილა ასეთი ადვილი — ან ასეთი სახიფათო გაუთვითცნობიერებელი ადამიანისთვის. მოსწავლეები, რომლებსაც ასწავლიან სწრაფი სესხის ან საკრედიტო ბარათის რეალური წლიური ეფექტური საპროცენტო განაკვეთის (APR) დათვლას, ოცი წლის ასაკში გაცილებით იშვიათად ვარდებიან უმართავი ვალის სპირალში."
        ],
        [
          "Secondly, learning how money works empowers young people to build long-term financial security through budgeting and saving. When sixteen-year-olds see a clear mathematical table showing how setting aside just ten percent of their monthly income in a savings account or low-cost index fund grows over twenty years through the magic of 'compound interest', saving stops feeling like a punishment and becomes an exciting personal habit!",
          "მეორეც, ფულის მუშაობის პრინციპების ცოდნა ახალგაზრდებს აძლევს ძალას, ბიუჯეტირებისა და დაზოგვის გზით შეიქმნან გრძელვადიანი ფინანსური უსაფრთხოება. როდესაც თექვსმეტი წლის მოზარდები მკაფიო მათემატიკურ ცხრილში ხედავენ, თუ როგორ იზრდება ოცი წლის განმავლობაში ყოველთვიური შემოსავლის თუნდაც ათი პროცენტის გადადება შემნახველ ანგარიშზე „რთული პროცენტის“ (პროცენტზე დარიცხული პროცენტის) წყალობით, ფულის დაზოგვა აღარ აღიქმება სასჯელად და საინტერესო პირად ჩვევად იქცევა!"
        ],
        [
          "Some educators argue that the school curriculum is already overcrowded and that parents should teach children about money at home. However, relying solely on parents perpetuates social inequality: children whose parents struggle with financial literacy themselves are left at a severe disadvantage. Worse still, without school guidance, teenagers turn to social media influencers who promote risky cryptocurrency speculation and 'get-rich-quick' schemes.",
          "ზოგიერთი პედაგოგი კამათობს, რომ სასკოლო პროგრამა ისედაც გადატვირთულია და ფულთან მოპყრობა ბავშვებს მშობლებმა სახლში უნდა ასწავლონ. თუმცა, მხოლოდ მშობლების იმედად ყოფნა აღრმავებს სოციალურ უთანასწორობას: ბავშვები, რომელთა მშობლებსაც თავად არ აქვთ ფინანსური ცოდნა, მძიმე არათანაბარ მდგომარეობაში რჩებიან. უარესიც — სკოლის გზამკვლევის გარეშე მოზარდები მიმართავენ სოციალური ქსელების ინფლუენსერებს, რომლებიც სარისკო სპეკულაციებსა და „სწრაფად გამდიდრების“ საეჭვო სქემებს უწევენ რეკლამას."
        ],
        [
          "In conclusion, financial literacy does not require adding five extra hours to the school week; it can easily be integrated into existing high-school mathematics and civic education classes through real-world exercises like planning a household budget or comparing bank loans. Teaching students how to manage money wisely is not about materialism — it is about giving every young citizen the tools for independence, resilience, and peace of mind.",
          "დასასრულს, ფინანსური წიგნიერება არ მოითხოვს სასკოლო კვირაში ხუთი დამატებითი საათის დამატებას; მისი ჩაშენება მარტივად შეიძლება უფროსი კლასების მათემატიკისა და სამოქალაქო განათლების არსებულ გაკვეთილებში ისეთი პრაქტიკული სავარჯიშოებით, როგორიცაა საოჯახო ბიუჯეტის დაგეგმვა ან საბანკო სესხების შედარება. მოსწავლეებისთვის ფულის გონივრულად მართვის სწავლება მატერიალიზმს არ ეხება — ეს არის ყველა ახალგაზრდა მოქალაქის აღჭურვა დამოუკიდებლობის, სიმტკიცისა და სულიერი სიმშვიდის ინსტრუმენტებით."
        ]
      ],
      glossary: [
        "mandatory subject|სავალდებულო სასწავლო საგანი", "compound interest|რთული პროცენტი (როდესაც სარგებელი ერიცხება როგორც ძირ თანხას, ისე უკვე დაგროვილ პროცენტს)", "high-interest debt trap|მაღალპროცენტიანი ვალის მახე",
        "Annual Percentage Rate (APR)|წლიური ეფექტური საპროცენტო განაკვეთი", "spiral of unmanageable debt|უმართავი ვალის სპირალი", "set aside 10% of income|შემოსავლის 10%-ის გადადება (დაზოგვა)",
        "perpetuate social inequality|სოციალური უთანასწორობის გაღრმავება / შენარჩუნება", "be left at a disadvantage|არახელსაყრელ (წამგებიან) მდგომარეობაში დარჩენა", "'get-rich-quick' scheme|„სწრაფად გამდიდრების“ საეჭვო/თაღლითური სქემა", "integrate into existing classes|არსებულ გაკვეთილებში ჩაშენება / ინტეგრირება"
      ],
      questions: [
        "How does the writer create a striking contrast in the opening hook of Paragraph 1?|By contrasting complex academic tasks 18-year-olds know (triangle areas, 18th-century dates, chemical equations) with basic real-life financial concepts they don't know (compound interest, taxes, loan contracts)|By saying that mathematics should be banned in schools|By claiming that eighteen-year-olds never use smartphones|By writing a story about a bank robbery",
        "Why has borrowing money become more dangerous for uninformed young adults in today's digital economy (Paragraph 2)?|Because 'Buy Now, Pay Later' buttons and instant mobile loans are available on every smartphone screen at a tap|Because banks only lend money in gold coins|Because interest rates are zero percent everywhere|Because young people don't have phones",
        "What does the financial term 'Annual Percentage Rate (APR)' measure?|The true total yearly cost of borrowing money on a loan or credit card, including interest and mandatory fees expressed as a percentage|The monthly salary of a bank clerk|The rate at which prices fall in supermarkets|The tax paid on a house",
        "What is 'compound interest', and how does it work in favour of someone who saves early (Paragraph 3)?|Earning interest not only on your original savings, but also on the interest that has already accumulated, causing savings to grow exponentially over decades|Paying a fine for taking money out of the bank|Borrowing money from two banks at once|Dividing your salary by twelve",
        "What are the two objections raised by critics in Paragraph 4 against teaching financial literacy in schools?|That the school curriculum is already overcrowded, and that parents should teach children about money at home|That money will disappear in the future|That sixteen-year-olds are too young to count|That teachers are not allowed to use calculators",
        "How does the writer refute the argument that 'parents should teach financial literacy at home'?|Relying solely on parents perpetuates social inequality, because children whose parents struggle with finances are left at a severe disadvantage|Because parents never talk to their children|Because children live at school all year|Because laws forbid parents from talking about budgets",
        "Where do many teenagers get terrible financial advice when schools fail to teach them?|From social media influencers who promote risky cryptocurrency speculation and 'get-rich-quick' schemes|From university textbooks|From public libraries|From historical novels",
        "How does the writer solve the 'overcrowded curriculum' objection in the conclusion?|By showing that financial literacy doesn't need five extra hours; it can be integrated into existing high-school math and civic education classes through practical exercises|By cancelling history and biology classes|By making students attend school on Sundays|By extending high school until age twenty-five",
        "What practical classroom exercises does the conclusion suggest for high-school math and civics?|Planning a household budget or comparing bank loan contracts|Memorizing the names of all banks in the world|Drawing pictures of banknotes|Counting coins for two hours",
        "How does the final sentence frame the true purpose of financial education?|Not as materialism, but as giving every young citizen the tools for independence, resilience, and peace of mind|As a way for everyone to become a billionaire overnight|As training to become a bank director|As a way to avoid paying taxes"
      ]
    },
    {
      num: 59, level: "B2",
      icon: "🤝", genre: "საერთაშორისო ბიზნესი",
      title: "საპარტნიორო შეთავაზება უცხოელ მომწოდებელთან",
      subtitle: "Writing a B2B Partnership Pitch to an International Manufacturer",
      time: "9 წთ",
      prompt: "დაწერეთ ოფიციალური საქმიანი შეთავაზება (B2B Partnership Pitch) უცხოურ მწარმოებელ კომპანიას თქვენს ქვეყანაში მათი ოფიციალური დისტრიბუტორის სტატუსის მصولოვებლად (თქვენი კომპანიის გამოცდილება, სადისტრიბუციო ქსელი, ბაზრის პოტენციალი და პირველი საცდელი შეკვეთა).",
      template: "Subject: Exclusive Distribution Partnership Proposal — [Region]. Dear [Export Director], I am writing on behalf of [Your Company], a leading distributor of [Sector] in [Country]. Having admired [Brand]'s quality, we would like to propose a distribution partnership for our market. We supply over [Number] retail stores and have our own logistics fleet. Could we schedule a video call next week? Yours sincerely, [Your Name].",
      paragraphs: [
        [
          "Subject: Distribution Partnership Proposal for the Caucasus Region — 'Caucasus Sport & Fitness Ltd.' Dear Herr Lukas Weber, Head of International Sales at 'BergKraft Athletics GmbH', I am writing on behalf of Caucasus Sport & Fitness Ltd., a leading importer and distributor of professional athletic and boxing equipment based in Tbilisi, Georgia. Having followed BergKraft's reputation for engineering durable leather training gear in Germany, we would like to explore becoming your official distribution partner in our region.",
          "თემა: სადისტრიბუციო პარტნიორობის შეთავაზება კავკასიის რეგიონისთვის — შპს „კავკასუს სპორტ ენდ ფიტნეს“. ძვირფასო ბატონო ლუკას ვებერ, „BergKraft Athletics GmbH“-ის საერთაშორისო გაყიდვების ხელმძღვანელო, გწერთ თბილისში დაფუძნებული პროფესიონალური სპორტული და კრივის აღჭურვილობის წამყვანი იმპორტიორისა და დისტრიბუტორის — შპს „კავკასუს სპორტ ენდ ფიტნესის“ სახელით. რადგან კარგად ვიცნობთ „BergKraft“-ის რეპუტაციას გერმანიაში გამძლე ტყავის სავარჯიშო ინვენტარის წარმოებაში, გვსურს განვიხილოთ ჩვენს რეგიონში თქვენი ოფიციალური სადისტრიბუციო პარტნიორობის შესაძლებლობა."
        ],
        [
          "Over the past four years, participation in combat sports, boxing conditioning, and functional fitness across Georgia has surged dramatically, driven by the international success of Georgian athletes and a boom in modern urban fitness clubs. Currently, however, local gym owners and athletes struggle to find mid-to-high-tier European training gloves, heavy bags, and protective gear, as the market is dominated by low-quality, unbranded imports.",
          "ბოლო ოთხი წლის განმავლობაში საქართველოში ორთაბრძოლების, კრივისა და ფუნქციური ფიტნესის მიმართ ინტერესი მკვეთრად გაიზარდა, რაც განაპირობა ქართველი სპორტსმენების საერთაშორისო წარმატებებმა და თანამედროვე სპორტული დარბაზების ბუმმა. თუმცა, ამჟამად ადგილობრივი დარბაზების მფლობელებსა და სპორტსმენებს უჭირთ საშუალო და მაღალი კლასის ევროპული სავარჯიშო ხელთათმანების, ტომრებისა და დამცავი ეკიპირების მოძიება, რადგან ბაზარი გაჯერებულია დაბალხარისხიანი, უბრენდო იმპორტით."
        ],
        [
          "Founded in 2019, our company operates three specialty retail showrooms in Tbilisi and Batumi, an active e-commerce platform, and a wholesale B2B division that supplies equipment to over eighty commercial fitness centres, boxing clubs, and university sports halls nationwide. We maintain a 1,200-square-metre customs-bonded warehouse in Tbilisi and handle all customs clearance, local marketing, and warranty servicing in-house.",
          "2019 წელს დაფუძნებული ჩვენი კომპანია ფლობს სამ სპეციალიზებულ სავაჭრო შოურუმს თბილისსა და ბათუმში, აქტიურ ონლაინ პლატფორმასა და საბითუმო B2B განყოფილებას, რომელიც ქვეყნის მასშტაბით აღჭურვილობით ამარაგებს ოთხმოცზე მეტ კომერციულ ფიტნეს-ცენტრს, კრივის კლუბსა და საუნივერსიტეტო დარბაზს. თბილისში გვაქვს 1 200 კვ.მ. სასაწყობე მეურნეობა და თავადვე ვუზრუნველყოფთ განბაჟებას, ადგილობრივ მარკეტინგსა და საგარანტიო მომსახურებას."
        ],
        [
          "To test market demand with zero risk to your brand, we propose starting with an initial trial purchase order of €25,000 (paid 100% in advance via bank transfer or irrevocable Letter of Credit) covering your 'Pro-Series' 14 oz and 16 oz leather gloves, elastic wraps, and heavy punching bags. Upon achieving mutually agreed sales targets during the first six months, we would aim to sign a three-year exclusive distribution agreement.",
          "თქვენი ბრენდისთვის ნულოვანი რისკით ბაზრის მოთხოვნის შესამოწმებლად, გთავაზობთ დავიწყოთ 25 000 ევროს ოდენობის საწყისი საცდელი შეკვეთით (100%-იანი წინასწარი საბანკო გადარიცხვით ან გამოუთხოვადი აკრედიტივით), რომელიც მოიცავს თქვენი „Pro-Series“ ხაზის 14 და 16-უნციან ტყავის ხელთათმანებს, ელასტიკურ ბინტებსა და მძიმე ტომრებს. პირველი ექვსი თვის განმავლობაში შეთანხმებული გაყიდვების გეგმის შესრულების შემდეგ კი მიზნად ვისახავთ სამწლიანი ექსკლუზიური სადისტრიბუციო ხელშეკრულების გაფორმებას."
        ],
        [
          "As it happens, I will be travelling to Germany between the third and the tenth of November 2026, visiting Frankfurt, Berlin, and Hamburg. If your schedule permits, I would be delighted to visit your headquarters for a brief forty-five-minute meeting, or alternatively arrange a video call next week to request your wholesale catalogue and price list. I have attached our company profile and financial references. Yours sincerely, Otar Bobokvadze, Business Development Director.",
          "სხვათა შორის, 2026 წლის 3-დან 10 ნოემბრამდე გერმანიაში მივემგზავრები და ვესტუმრები ფრანკფურტს, ბერლინსა და ჰამბურგს. თუ თქვენი გრაფიკი საშუალებას მოგცემთ, დიდი სიამოვნებით გესტუმრებოდით თქვენს სათავო ოფისში მოკლე, ორმოცდახუთწუთიანი შეხვედრისთვის, ან მომავალ კვირას დავგეგმოთ ვიდეოზარი თქვენი საბითუმო კატალოგისა და პრაის-ლისტის გადმოსაგზავნად. წერილს დავურთე ჩვენი კომპანიის პროფილი და საბანკო რეკომენდაციები. პატივისცემით, ოთარ ბობოყვაძე, ბიზნესის განვითარების დირექტორი."
        ]
      ],
      glossary: [
        "explore becoming your official partner|თქვენი ოფიციალური პარტნიორობის შესაძლებლობის განხილვა", "surge dramatically|მკვეთრი ზრდა / მატება", "market gap|საბაზრო ნიშა / დაუკმაყოფილებელი მოთხოვნა ბაზარზე",
        "wholesale B2B division|საბითუმო (ბიზნესი ბიზნესისთვის) განყოფილება", "customs clearance|საბაჟო პროცედურების გავლა / განბაჟება", "in-house|კომპანიის შიგნით (საკუთარი რესურსით)",
        "initial trial purchase order|საწყისი საცდელი შესყიდვის შეკვეთა", "irrevocable Letter of Credit (L/C)|გამოუთხოვადი საბანკო აკრედიტივი (საერთაშორისო ვაჭრობის გარანტია)", "exclusive distribution agreement|ექსკლუზიური დისტრიბუციის ხელშეკრულება", "If your schedule permits,|თუ თქვენი სამუშაო გრაფიკი საშუალებას იძლევა,"
      ],
      questions: [
        "Why do international manufacturers ignore vague emails like 'Please send us your products', but respond positively to a pitch like this one?|Because this email clearly proves market demand, shows concrete distribution infrastructure (3 showrooms, 80 B2B gym clients, 1,200m² warehouse), and offers a risk-free €25,000 upfront trial order|Because the email is written in German|Because it asks for free samples without paying|Because it is ten pages long",
        "What 'market gap' in Georgia's sports equipment sector does Paragraph 2 identify?|While interest in boxing and fitness has surged, gym owners and athletes struggle to find mid-to-high-tier European gear because the market is dominated by low-quality unbranded imports|There are no gyms or sports halls in Georgia|Nobody in Georgia watches combat sports|Sporting goods are banned from import",
        "What existing distribution infrastructure does 'Caucasus Sport & Fitness Ltd.' have in Paragraph 3?|Three retail showrooms in Tbilisi and Batumi, an e-commerce platform, a B2B division supplying 80+ gyms nationwide, and a 1,200m² warehouse|Only a social media page with no warehouse|One small shop at the airport|They plan to open a company next year",
        "What does the adverb 'in-house' mean in the phrase 'handle all customs clearance, local marketing, and warranty servicing in-house'?|Done internally by the company's own staff rather than outsourcing to external agencies|Done inside a residential apartment|Only for customers who live in the same building|Free of taxes",
        "How does the proposed 'initial trial purchase order of €25,000' remove all financial risk for the German manufacturer (Paragraph 4)?|It will be paid 100% in advance via bank transfer or irrevocable Letter of Credit before the goods are shipped|The Georgian company will pay only after selling all the gloves next year|The German government will pay for it|It is a free loan",
        "What is an 'irrevocable Letter of Credit (L/C)' in international trade finance?|A binding guarantee issued by a bank promising that the seller (exporter) will receive payment on time and in full once shipping documents are presented|A letter of recommendation from a friend|A discount voucher for airline tickets|A customs tax receipt",
        "When does the company propose signing a 'three-year exclusive distribution agreement'?|After successfully achieving mutually agreed sales targets during the first six-month trial period|Before ordering a single glove|After twenty years|Without any sales targets",
        "Why is mentioning an upcoming business trip to Germany (3rd–10th November) in Paragraph 5 a smart networking move?|Meeting face-to-face for even 45 minutes during an existing trip builds personal trust faster than months of emails, while offering a video call next week keeps it flexible|To ask the German company to pay for the plane tickets|To ask for hotel recommendations in Berlin|To show off holiday plans",
        "Which polite formal conditional phrase is used in Paragraph 5 to respect a busy executive's time?|'If your schedule permits, I would be delighted to...'|'You must meet me on November 4th.'|'Cancel your meetings next week.'|'I am coming to your office at noon.'",
        "What two documents has the writer attached to give the German manufacturer immediate confidence in their company?|Their company profile and financial/bank references|A tourist map of Tbilisi|Photos of boxing matches|A list of German cities"
      ]
    },
    {
      num: 60, level: "B2",
      icon: "📵", genre: "ფსიქოლოგიური ესე",
      title: "ანალიტიკური ესე: ციფრული მინიმალიზმი და კონცენტრაციის დაბრუნება",
      subtitle: "Writing an Analytical Essay: Digital Minimalism in an Age of Distraction",
      time: "9 წთ",
      prompt: "დაწერეთ ანალიტიკური ესე (Analytical Essay) „ციფრული მინიმალიზმისა“ და ღრმა კონცენტრაციის (Deep Work) მნიშვნელობაზე თანამედროვე სამყაროში (როგორ აქუცმაცებს მუდმივი შეტყობინებები ყურადღებას და რა პრაქტიკული წესები გვეხმარება ფოკუსის დაბრუნებაში).",
      template: "We live in an economy where our attention is constantly fragmented by smartphone notifications. Computer scientist Cal Newport distinguishes between 'shallow work' and 'deep work' — the ability to focus without distraction on a cognitively demanding task. By adopting 'digital minimalism', we can reclaim our focus and produce our best work.",
      paragraphs: [
        [
          "Essay Title: Reclaiming the Quiet Mind — Digital Minimalism and the Art of Deep Focus. On an average day, a modern knowledge worker checks their smartphone more than eighty times and glances at email or chat notifications once every six minutes! While smartphones and instant messaging are marvellous tools for logistics and communication, allowing them to interrupt our thoughts every few minutes has created a silent crisis of fragmented attention. To produce meaningful work and enjoy genuine rest, we must adopt a philosophy known as 'digital minimalism'.",
          "ესეს სათაური: მშვიდი გონების დაბრუნება — ციფრული მინიმალიზმი და ღრმა კონცენტრაციის ხელოვნება. საშუალო სტატისტიკურ დღეს თანამედროვე გონებრივი შრომის წარმომადგენელი სმარტფონს ოთხმოცზე მეტჯერ ამოწმებს, ხოლო იმეილსა თუ ჩატ-შეტყობინებებს — ყოველ ექვს წუთში ერთხელ! მიუხედავად იმისა, რომ სმარტფონები და მყისიერი მიმოწერა ბრწყინვალე იარაღია ლოგისტიკისა და კომუნიკაციისთვის, მათთვის ჩვენი ფიქრების ყოველ რამდენიმე წუთში შეწყვეტის უფლების მიცემამ დაქუცმაცებული ყურადღების ფარული კრიზისი წარმოშვა. ღირებული საქმის შესაქმნელად და ნამდვილი დასვენებისთვის უნდა გავითავისოთ ფილოსოფია, რომელსაც „ციფრული მინიმალიზმი“ ეწოდება."
        ],
        [
          "Why is a ‘just ten-second’ glance at a phone notification so destructive to complex thinking? Cognitive psychologist Sophie Leroy discovered a phenomenon called 'attention residue': when you switch your attention from writing a financial report to reading a text message on your phone, your brain does not switch back instantly when you put the phone down! A thick residue of your attention remains stuck thinking about that message for up to twenty minutes, reducing your functional IQ and doubling the time required to finish the report.",
          "რატომ არის ტელეფონის შეტყობინებაზე თუნდაც „მხოლოდ ათწამიანი“ დახედვა ასეთი დამანგრეველი რთული აზროვნებისთვის? კოგნიტურმა ფსიქოლოგმა სოფი ლერუამ აღმოაჩინა მოვლენა, რომელსაც „ყურადღების ნარჩენი“ (attention residue) ეწოდება: როდესაც ფინანსური ანგარიშის წერიდან ყურადღება გადაგაქვთ ტელეფონში მოსული შეტყობინების წაკითხვაზე, ტელეფონის დადებისთანავე ტვინი მყისიერად უკან ვერ ბრუნდება! თქვენი ყურადღების მნიშვნელოვანი ნაწილი ოც წუთამდე რჩება მიჯაჭვული იმ შეტყობინებაზე ფიქრს, რაც აქვეითებს ფუნქციურ ინტელექტს და აორმაგებს ანგარიშის დასრულებისთვის საჭირო დროს."
        ],
        [
          "Computer science professor Cal Newport divides modern professional activity into two categories: 'shallow work' — logistical tasks like replying to routine messages, formatting spreadsheets, and attending status meetings that can be done while distracted — and 'deep work', which is the ability to focus without distraction on a cognitively demanding task. Whether you are analyzing a complex credit case, writing code, composing music, or mastering a foreign language, all real progress and skill-building happen exclusively during hours of deep work.",
          "კომპიუტერული მეცნიერების პროფესორი კალ ნიუპორტი თანამედროვე პროფესიულ საქმიანობას ორ კატეგორიად ყოფს: „ზედაპირული სამუშაო“ (shallow work) — რუტინულ შეტყობინებებზე პასუხის გაცემა, ცხრილების ფორმატირება და სტატუს-შეხვედრები, რისი კეთებაც გაფანტული ყურადღებითაც შეიძლება — და „ღრმა სამუშაო“ (deep work), რაც ნიშნავს რთულ გონებრივ ამოცანაზე ყურადღების გაუფანტავად კონცენტრირების უნარს. აანალიზებთ რთულ საკრედიტო ქეისს, წერთ კოდს, ქმნით მუსიკას თუ სწავლობთ უცხო ენას — ნებისმიერი ნამდვილი წინსვლა და უნარის განვითარება მხოლოდ და მხოლოდ ღრმა მუშაობის საათებში ხდება."
        ],
        [
          "Practicing digital minimalism does not mean throwing away your smartphone and moving to a cabin in the woods; it simply means putting technology back in its proper place as a servant rather than a master. First, turn off all non-human notifications on your phone (news alerts, shopping apps, and social media badges) so your phone only rings when a real person calls you. Second, schedule two ninety-minute 'deep work blocks' every day during which your phone is placed in another room or inside a closed bag.",
          "ციფრული მინიმალიზმის პრაქტიკა სულაც არ ნიშნავს სმარტფონის გადაგდებასა და ტყის ქოხში გადასახლებას; ეს უბრალოდ ნიშნავს ტექნოლოგიის დაბრუნებას თავის კუთვნილ ადგილზე — მსახურის და არა ბატონის როლში. პირველი: ტელეფონზე გამორთეთ ყველა არაადამიანური შეტყობინება (ახალი ამბების სიგნალები, მაღაზიების აპლიკაციები და სოციალური ქსელები), რათა ტელეფონმა მხოლოდ მაშინ დარეკოს, როცა რეალური ადამიანი გიკავშირდებათ. მეორე: ყოველდღე დაგეგმეთ ორი ოთხმოცდაათწუთიანი „ღრმა მუშაობის ბლოკი“, რომლის დროსაც ტელეფონი სხვა ოთახში ან დახურულ ჩანთაში იდება."
        ],
        [
          "Finally, reclaim your evenings and Sundays for 'high-quality leisure' — activities that engage your hands and body in the physical world, such as athletic training, cooking, playing strategic board games with friends, or reading a printed book. In an economy where everyone else is distracted by endless scrolling, the ability to concentrate deeply for two hours at a time has become the ultimate competitive superpower.",
          "დაბოლოს, დაიბრუნეთ თქვენი საღამოები და კვირა დღეები „მაღალხარისხიანი დასვენებისთვის“ — საქმიანობებისთვის, რომლებიც თქვენს ხელებსა და სხეულს რეალურ ფიზიკურ სამყაროში რთავს, როგორიცაა სპორტული ვარჯიში, კულინარია, მეგობრებთან სტრატეგიული სამაგიდო თამაშები ან ნაბეჭდი წიგნის კითხვა. ეკონომიკაში, სადაც ყველა სხვა ადამიანი დაუსრულებელი სქროლვით არის გართული, ორი საათის განმავლობაში ღრმად კონცენტრირების უნარი უდიდეს კონკურენტულ სუპერძალად იქცა."
        ]
      ],
      glossary: [
        "knowledge worker|გონებრივი შრომის წარმომადგენელი (ანალიტიკოსი, პროგრამისტი, მენეჯერი და სხვ.)", "fragmented attention|დაქუცმაცებული / დანაწევრებული ყურადღება", "digital minimalism|ციფრული მინიმალიზმი (ტექნოლოგიების გააზრებული და შეზღუდული გამოყენება)",
        "attention residue|„ყურადღების ნარჩენი“ (წინა საქმიდან გონებაში ჩარჩენილი ფიქრი)", "cognitively demanding task|რთული გონებრივი (დიდ დაფიქრებას რომ მოითხოვს) ამოცანა", "shallow work vs. deep work|ზედაპირული (რუტინული) სამუშაო და ღრმა (კონცენტრირებული) სამუშაო",
        "a servant rather than a master|მსახური და არა ბატონი (ტექნოლოგიის როლი)", "deep work block|ღრმა მუშაობის გამოყოფილი დროის ბლოკი", "high-quality leisure|მაღალხარისხიანი (აქტიური, რეალური) დასვენება", "the ultimate superpower|უდიდესი სუპერძალა / უპირატესობა"
      ],
      questions: [
        "How many times a day does an average modern knowledge worker check their smartphone, and how often do they glance at email or chat?|More than eighty times a day on their phone, and once every six minutes at email or chat notifications|Only twice a day (morning and evening)|Once every two hours|Ten times a week",
        "What is 'attention residue', discovered by cognitive psychologist Sophie Leroy (Paragraph 2)?|When you switch from a complex task to check a quick phone message, a residue of your attention stays stuck thinking about that message for up to 20 minutes after you put the phone down|A mark left by fingers on a smartphone glass screen|Remembering everything you read in a textbook|Feeling sleepy after lunch",
        "Why does 'attention residue' make a ten-second glance at a phone so costly for productivity?|Because it actually costs up to twenty minutes of reduced functional IQ and focus, doubling the time required to finish a complex report|Because the phone battery dies|Because ten seconds is a long time|Because it deletes your computer files",
        "How does Professor Cal Newport define 'shallow work' versus 'deep work' (Paragraph 3)?|'Shallow work' is routine logistical tasks (emails, formatting) that can be done while distracted; 'deep work' is focusing without distraction on a cognitively demanding task|Shallow work is working on the ground floor, and deep work is working in the basement|Shallow work is for students, and deep work is for retirees|They mean the exact same thing",
        "Which types of activities require 'deep work' according to Paragraph 3?|Analyzing a complex credit case, writing code, composing music, or mastering a foreign language|Checking the weather forecast|Replying 'thank you' to a short text message|Deleting spam emails",
        "Does practicing 'digital minimalism' mean throwing away your smartphone and living without technology (Paragraph 4)?|No; it means putting technology back in its proper place as a helpful servant rather than a master that interrupts you constantly|Yes, it means banning all computers and phones forever|It means buying the smallest phone in the shop|It means only using the internet once a month",
        "What is the first practical step of digital minimalism recommended in Paragraph 4?|Turn off all non-human notifications on your phone (news alerts, shopping apps, social media badges) so it only rings when a real person calls|Throw your phone in a drawer for a year|Buy three different smartphones|Turn the screen brightness up to 100%",
        "Why should your phone be placed in ANOTHER room or inside a closed bag during a 90-minute 'deep work block'?|Because if the phone is sitting on your desk within arm's reach, the habit of glancing at it every few minutes is almost automatic|Because phones interfere with laptop keyboards|Because the phone needs to stay cool in a dark bag|To charge the battery faster",
        "What examples of 'high-quality leisure' does the writer recommend for evenings and Sundays in Paragraph 5?|Activities that engage your hands and body in the physical world: athletic training, cooking, playing strategic board games with friends, or reading a printed book|Scrolling through social media videos until 2 AM|Watching television while checking work emails|Playing mobile phone games",
        "Why has the ability to concentrate deeply for two hours at a time become 'the ultimate competitive superpower' today?|Because in an economy where almost everyone else is distracted by endless notifications and scrolling, deep focus is rare and produces the highest-value work|Because it lets you type without a keyboard|Because employers pay you per notification|Because nobody works in offices anymore"
      ]
    }
  ];

  // გავაერთიანოთ B1 (15 თემა) და B2 (15 თემა) App.WritingDataB-ში (სულ 30 თემა B დონეზე, ჯამში 60 თემა A1–B2!)
  App.WritingDataB = (App.WritingDataB1 || []).concat(App.WritingDataB2);
})(window);