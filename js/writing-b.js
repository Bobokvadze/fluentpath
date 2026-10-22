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