/**
 * READING-EXTRA.JS — additional English reading passages #91–102 (A1–C2), written for the thematic courses.
 * English source only. Format: { num, level, icon, genre, title, time, paragraphs: [text],
 *   glossary: ["term|English definition"], questions: ["question|correct|wrong1|wrong2|wrong3"] }.
 * Paragraph translations, if added later, live in App.I18n.ka.reading["reading-passage-N"]["p<i>"].
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};

  App.ReadingExtra = [
    {
      num: 91, level: "A1", icon: "💼", genre: "Work", title: "My First Day at Work", time: "4 min",
      paragraphs: [
        "My name is Nino and I am twenty-two. Today is my first day at a new job. I work in a small travel agency in the city centre. The office opens at nine o'clock, but I arrive at half past eight because I am nervous.",
        "My manager is called Mr Davis. He is tall and friendly. He shows me my desk, my computer and the kitchen. There is a coffee machine in the kitchen and a big window with a view of the river.",
        "I have four colleagues. Ana answers the phone and writes emails. Tom and Leo help customers in the shop. Sara works with the computers. They are all very kind, and they explain everything slowly.",
        "In the afternoon, I help a customer. She wants a ticket to Rome. I find a cheap flight and a nice hotel near the station. She is very happy, and I am happy too.",
        "At six o'clock I go home by bus. I am tired, but I like my new job. Tomorrow I want to learn more about the booking system."
      ],
      glossary: ["travel agency|A company that books trips, flights and hotels for people.", "nervous|Worried and a little afraid.", "manager|The person who is in charge of a team or office.", "colleague|A person you work with.", "customer|A person who buys something from a shop or company.", "booking system|A computer program for reserving tickets and rooms."],
      questions: [
        "Where does Nino work?|In a travel agency|In a hotel|In a bank|In a school",
        "Why does she arrive at half past eight?|Because she is nervous|Because the office opens at eight|Because her bus is early|Because Mr Davis asks her to",
        "What can you see from the kitchen window?|The river|The station|A park|The mountains",
        "What does Ana do?|She answers the phone and writes emails|She helps customers in the shop|She works with the computers|She is the manager",
        "Where does the customer want to go?|Rome|Paris|London|Tbilisi",
        "How does Nino feel at the end of the day?|Tired but happy with her job|Bored and unhappy|Angry with her colleagues|Worried about tomorrow"
      ]
    },
    {
      num: 92, level: "A1", icon: "🩺", genre: "Health", title: "A Visit to the Doctor", time: "4 min",
      paragraphs: [
        "On Monday morning, Daniel wakes up and he feels ill. He has a headache and a sore throat, and he is very hot. He calls the clinic and makes an appointment for ten o'clock.",
        "At the clinic, he gives his name to the receptionist and waits for fifteen minutes. Then the doctor calls him. Her name is Dr Kapanadze. She asks, 'What's the matter?'",
        "Daniel explains his problem. The doctor looks at his throat and checks his temperature. 'You have a temperature of thirty-eight degrees,' she says. 'It's a bad cold, not the flu.'",
        "She gives him some advice. 'Drink a lot of water and hot tea with honey. Stay in bed for two days and don't go to work. Take this medicine three times a day, after meals.'",
        "Daniel goes to the pharmacy and buys the medicine. Then he goes home, makes a cup of tea and sleeps all afternoon. On Wednesday, he feels much better."
      ],
      glossary: ["headache|A pain in your head.", "sore throat|A pain in your throat, especially when you swallow.", "appointment|A fixed time to see a doctor or another person.", "temperature|How hot your body is; a high temperature is a sign of illness.", "advice|Suggestions about what someone should do.", "pharmacy|A shop where you can buy medicine."],
      questions: [
        "What is wrong with Daniel on Monday?|He has a headache, a sore throat and a temperature|He has a broken leg|He has a stomach ache|He can't sleep",
        "What time is his appointment?|At ten o'clock|At nine o'clock|At fifteen past ten|In the afternoon",
        "What does the doctor say Daniel has?|A bad cold|The flu|A broken arm|An allergy",
        "How often must he take the medicine?|Three times a day after meals|Once a day before breakfast|Twice a day|Only at night",
        "Where does he buy the medicine?|At a pharmacy|At the clinic|At a supermarket|Online",
        "When does Daniel feel much better?|On Wednesday|On Tuesday|On Friday|The next week"
      ]
    },
    {
      num: 93, level: "A2", icon: "🤝", genre: "Careers", title: "How to Prepare for a Job Interview", time: "5 min",
      paragraphs: [
        "A job interview can be stressful, but good preparation makes a big difference. Most interviewers are not trying to trick you. They simply want to know if you can do the job and if you will fit into the team.",
        "First, find out about the company. Read its website and look at its social media. What does it sell or do? Who are its customers? If you know a little about the company, you can give better answers and ask intelligent questions.",
        "Next, think about the questions you will probably hear. Interviewers often ask, 'Tell me about yourself', 'Why do you want this job?' and 'What are your strengths and weaknesses?' Prepare short answers with real examples. For example, don't just say 'I'm organised' — explain how you organised an event or a project.",
        "On the day, plan your journey and arrive ten minutes early. Wear clean, smart clothes. Smile, look at the interviewer and listen carefully. If you don't understand a question, it's fine to say, 'Sorry, could you repeat that, please?'",
        "At the end, the interviewer usually asks, 'Do you have any questions?' Always say yes. You could ask about training, the team or the next steps. After the interview, send a short email to say thank you. It is a small thing, but many candidates forget to do it."
      ],
      glossary: ["interviewer|The person who asks the questions in an interview.", "preparation|The work you do to get ready for something.", "strength|A good quality or ability that someone has.", "weakness|Something that someone is not good at.", "candidate|A person who is trying to get a job.", "next steps|What will happen after this stage."],
      questions: [
        "According to the text, what do most interviewers want?|To know if you can do the job and fit into the team|To trick candidates with difficult questions|To test your English grammar|To find the cheapest candidate",
        "Why should you research the company?|So you can give better answers and ask good questions|Because the interviewer will test you on its history|To find out the manager's salary|To decide what clothes to wear",
        "What advice does the writer give about answers?|Give short answers with real examples|Memorise long answers word for word|Talk only about your weaknesses|Answer every question with 'yes'",
        "What should you do if you don't understand a question?|Politely ask the interviewer to repeat it|Guess the answer|Stay silent|Change the subject",
        "What should you say when the interviewer asks if you have questions?|Yes — and ask about training, the team or next steps|No, because it is impolite to ask|Ask only about the salary|Ask how long the interview will take",
        "What do many candidates forget to do after the interview?|Send a thank-you email|Call the manager every day|Ask for feedback immediately|Share the questions online"
      ]
    },
    {
      num: 94, level: "A2", icon: "💰", genre: "Money", title: "Saving Money as a Student", time: "5 min",
      paragraphs: [
        "When Lika started university, she moved to a new city and had to manage her own money for the first time. By the end of the first month, her bank account was almost empty. 'I didn't know where my money went,' she says.",
        "So she made a simple budget. She wrote down how much money she received each month from her part-time job and from her parents. Then she listed her costs: rent, transport, food, her phone and fun. For two weeks, she wrote down everything she spent, even a cup of coffee.",
        "The results surprised her. She was spending more on takeaway food and coffee than on her travel card. She started cooking at home with her flatmates and taking coffee to university in a flask. That alone saved her about eighty lari a month.",
        "Lika also used student discounts for the cinema, museums and public transport, and she bought second-hand books instead of new ones. She cancelled two online subscriptions that she never used.",
        "Now she saves a small amount every month in a separate account. 'It isn't a lot,' she explains, 'but it's for emergencies. If my laptop breaks, I won't panic.' Her advice to new students is simple: know where your money goes, and pay yourself first."
      ],
      glossary: ["budget|A plan of how much money you will receive and spend.", "part-time job|A job for only some hours of the week.", "takeaway|Food you buy from a restaurant to eat somewhere else.", "discount|A reduction in the usual price.", "second-hand|Not new; owned before by someone else.", "subscription|Money you pay regularly to receive a service."],
      questions: [
        "What was Lika's problem in her first month?|Her bank account was almost empty|She couldn't find a flat|She lost her job|She failed her exams",
        "What did she do for two weeks?|She wrote down everything she spent|She stopped buying food|She worked extra hours|She borrowed money from friends",
        "What surprised her?|She spent more on takeaway food and coffee than on transport|Her rent was very cheap|Her phone was too expensive|She had more money than she thought",
        "How did she save about eighty lari a month?|By cooking at home and taking coffee in a flask|By walking everywhere|By selling her books|By moving to a cheaper flat",
        "Why does she save money in a separate account?|For emergencies|To buy a car|For a holiday|To pay her parents back",
        "What does 'pay yourself first' mean in the text?|Save some money before spending on other things|Buy yourself presents|Pay your bills late|Ask your employer for more money"
      ]
    },
    {
      num: 95, level: "B1", icon: "☕", genre: "Workplace", title: "Working from a Café: The Life of a Freelancer", time: "6 min",
      paragraphs: [
        "Three years ago, Giorgi left his job at a large advertising agency to become a freelance graphic designer. 'I'd always dreamed of being my own boss,' he says. 'I wanted to choose my projects and my hours.' Today he works with clients in five countries, often from a café near his flat.",
        "Freedom, however, comes with responsibility. Without a manager, Giorgi has to plan his own workload, find new clients and chase unpaid invoices. 'In my first year, I said yes to everything and worked until midnight,' he admits. 'I nearly burned out.' He has since learned to set clear deadlines and to charge a fair price for his time.",
        "Communication is the skill he values most. Because he rarely meets clients face to face, he relies on video calls and email. He always confirms what a client wants in writing before he starts, which has saved him from many misunderstandings. 'If something is unclear, I ask. It's better to ask a simple question than to redo a week's work.'",
        "Loneliness can be a problem too. Giorgi misses the jokes and coffee breaks of an office, so he has joined a co-working space two days a week. There he has met other freelancers — a translator, a web developer and a photographer — and they sometimes work on projects together.",
        "Would he go back to an office job? 'Never say never,' he laughs. 'But for now, I enjoy the variety. Every month is different.' His advice for future freelancers: save enough money for three months before you start, and never stop learning."
      ],
      glossary: ["freelance|Working for different clients rather than for one employer.", "workload|The amount of work a person has to do.", "invoice|A document asking a client to pay for work done.", "burn out|To become extremely tired and ill because of too much work.", "misunderstanding|A situation in which people do not understand each other correctly.", "co-working space|An office where people from different companies rent desks."],
      questions: [
        "Why did Giorgi become a freelancer?|He wanted to choose his projects and hours|He lost his job|His company moved abroad|He wanted to earn less money",
        "What happened in his first year?|He accepted too much work and nearly burned out|He had no clients at all|He moved to another country|He opened a café",
        "Why does he confirm clients' requests in writing?|To avoid misunderstandings|Because it is required by law|Because he doesn't like video calls|To charge more money",
        "How does he deal with loneliness?|He works in a co-working space two days a week|He went back to his old office|He hired an assistant|He works only at night",
        "Who has he met at the co-working space?|Other freelancers, such as a translator and a photographer|His former manager|Only clients|Café owners",
        "What is his advice for future freelancers?|Save money for three months and keep learning|Never accept small projects|Work only for one client|Avoid using email"
      ]
    },
    {
      num: 96, level: "B1", icon: "🎤", genre: "Communication", title: "How to Give a Great Presentation", time: "6 min",
      paragraphs: [
        "Most people feel nervous before speaking in public, and even experienced speakers get butterflies in their stomach. The good news is that presenting is a skill, not a talent: it can be learned and improved with practice.",
        "Start with your audience, not your slides. Ask yourself who will be listening, what they already know and what you want them to do or remember afterwards. A presentation for your manager will be very different from one for a group of students.",
        "Next, build a clear structure. Tell people what you are going to talk about, talk about it, and then summarise what you have said. Signposting phrases help listeners follow you: 'First, I'll look at…', 'Moving on to…', 'To sum up…'. Three main points are usually easier to remember than ten.",
        "Keep your slides simple. A common mistake is to fill them with text and then read it aloud. Instead, use short headings, a few key numbers and clear pictures. Your slides should support what you say, not replace it.",
        "Finally, practise out loud — ideally in front of a friend or by recording yourself. Time your talk, and prepare for questions. If someone asks something you can't answer, don't panic: say, 'That's a good question. I'll check and get back to you.' Remember, the audience wants you to succeed."
      ],
      glossary: ["get butterflies|To feel nervous, especially before doing something important.", "audience|The people who watch or listen to a talk or performance.", "structure|The way the parts of something are organised.", "signposting|Words that tell listeners what is coming next in a talk.", "summarise|To give the main points briefly.", "get back to someone|To contact someone later with an answer."],
      questions: [
        "According to the writer, what is presenting?|A skill that can be learned|A talent you are born with|Something only managers need|Impossible for nervous people",
        "What should you think about first?|Your audience|The colours of your slides|How long your talk is|Your clothes",
        "What do signposting phrases do?|Help listeners follow the talk|Make the talk longer|Replace the slides|Introduce jokes",
        "What common mistake does the writer mention?|Filling slides with text and reading it aloud|Using too many pictures|Speaking too slowly|Having only three points",
        "How should you practise?|Out loud, in front of a friend or by recording yourself|Silently, by reading your notes|Only on the day|By memorising every word",
        "What should you do if you can't answer a question?|Say you will check and get back to the person|Pretend you didn't hear it|End the presentation|Guess an answer"
      ]
    },
    {
      num: 97, level: "B2", icon: "🤝", genre: "Business", title: "The Science of Negotiation", time: "7 min",
      paragraphs: [
        "Negotiation is often imagined as a battle in which one side wins and the other loses. Research over the past fifty years, however, suggests that the most successful negotiators see it quite differently: as a joint problem to be solved.",
        "A key idea comes from the Harvard Negotiation Project, whose researchers distinguished between positions and interests. A position is what someone says they want — 'I want a 10% pay rise.' An interest is why they want it — perhaps to cover rising rent or to feel valued. Two people whose positions clash may have interests that are perfectly compatible.",
        "Consider the classic example of two sisters arguing over an orange. They eventually cut it in half, only to discover that one wanted the juice and the other the peel for baking. Had they asked each other why they wanted it, both could have had everything they needed. Asking open questions is therefore one of a negotiator's most powerful tools.",
        "Preparation matters just as much. Experienced negotiators work out their BATNA — their 'best alternative to a negotiated agreement' — before they begin. If you know what you will do if the talks fail, you are less likely to accept a bad deal out of fear, and you can walk away with confidence.",
        "Psychology also plays a role. The first number mentioned in a negotiation tends to act as an 'anchor', influencing everything that follows, which is why some experts recommend making the first offer when you are well informed. Yet the strongest long-term results usually come from building trust. In business, you rarely negotiate only once; a deal that leaves the other side feeling cheated may cost you far more in the future."
      ],
      glossary: ["position|In negotiation, what a person says they want.", "interest|In negotiation, the underlying reason why a person wants something.", "compatible|Able to exist or work together without problems.", "BATNA|Best Alternative To a Negotiated Agreement: what you will do if no deal is reached.", "anchor|A first figure that influences later judgements.", "walk away|To leave a negotiation without agreeing."],
      questions: [
        "How do successful negotiators tend to see negotiation?|As a joint problem to be solved|As a battle to win at any cost|As a waste of time|As a test of who can talk longest",
        "What is the difference between a position and an interest?|A position is what you say you want; an interest is why you want it|A position is secret; an interest is public|They mean exactly the same|An interest is always about money",
        "What does the orange example show?|Asking why can reveal solutions that satisfy both sides|Sharing equally is always the best solution|Sisters should never argue|Fruit is a poor example for business",
        "Why is knowing your BATNA useful?|You are less likely to accept a bad deal out of fear|It guarantees you will win|It makes the other side trust you|It means you never need to prepare",
        "What is an 'anchor' in negotiation?|The first number mentioned, which influences what follows|The final agreement|The person who leads the talks|A legal contract",
        "Why does the writer stress building trust?|Because you often negotiate with the same people again|Because trust is required by law|Because it makes negotiations shorter|Because anchors don't work"
      ]
    },
    {
      num: 98, level: "B2", icon: "📰", genre: "Media", title: "Why We Believe Fake News", time: "7 min",
      paragraphs: [
        "In the hours after a major news event, social media fills with stories, photos and videos. Some are accurate; many are not. Studies have found that false news can spread significantly faster and further online than the truth. Why are intelligent people so easily taken in?",
        "Part of the answer lies in how our brains handle information. We are naturally drawn to stories that are surprising, emotional or frightening, because in our evolutionary past such information could mean the difference between life and death. Fake stories are often designed — deliberately or not — to trigger exactly these reactions.",
        "We are also affected by confirmation bias: the tendency to accept information that supports what we already believe and to dismiss what challenges it. If a headline confirms our view of a politician or a company, we are less likely to check whether it is true before sharing it.",
        "Repetition plays a surprisingly powerful role as well. Psychologists call it the 'illusory truth effect': the more often we encounter a claim, the more familiar and therefore believable it feels — even when we were told at first that it was false. Social media algorithms, which show us more of what we engage with, can amplify this effect.",
        "Fortunately, simple habits help. Before sharing, pause and ask who created the story and why. Check whether reliable news organisations are reporting the same thing, and look at the date — old stories are often recycled as if they were new. Researchers have found that even a short reminder to think about accuracy reduces the sharing of false headlines."
      ],
      glossary: ["taken in|Deceived; made to believe something false.", "trigger|To cause a reaction to begin.", "confirmation bias|The tendency to favour information that supports existing beliefs.", "dismiss|To refuse to consider something seriously.", "illusory truth effect|The tendency to believe information because it has been repeated.", "recycled|Used again, often in a different context."],
      questions: [
        "What have studies found about false news online?|It can spread faster and further than the truth|It is always shared less than true news|It only spreads on television|It disappears within an hour",
        "Why are we drawn to surprising or frightening stories?|Such information was important for survival in the past|We are bored with ordinary news|Schools teach us to prefer them|They are always true",
        "What is confirmation bias?|Accepting information that fits our existing beliefs|Checking every fact carefully|Trusting only official sources|Forgetting old information",
        "What does the illusory truth effect describe?|Repeated claims feel more believable|True stories seem false|People forget repeated information|Experts are always believed",
        "How can algorithms make the problem worse?|By showing us more of what we engage with|By deleting all false stories|By hiding emotional content|By checking facts automatically",
        "Which habit does the writer recommend?|Pausing to check the source and the date before sharing|Sharing quickly before others do|Only reading headlines|Avoiding all news"
      ]
    },
    {
      num: 99, level: "C1", icon: "🔐", genre: "Technology and law", title: "Who Owns Your Digital Footprint?", time: "8 min",
      paragraphs: [
        "Every search, purchase and click leaves a trace. Taken together, these traces form a 'digital footprint' of remarkable detail: where we go, what we buy, whom we talk to and, increasingly, what we are likely to do next. The question of who owns and controls this data has become one of the defining ethical and legal issues of the age.",
        "For many technology companies, personal data is the raw material of their business model. Services that appear free to the user are funded by advertising that is targeted on the basis of behavioural profiles. Critics argue that this arrangement rests on a fiction of consent: few people read the lengthy terms and conditions they accept, and fewer still understand how their information is combined, sold or analysed.",
        "Regulators have begun to respond. The European Union's General Data Protection Regulation (GDPR), which came into force in 2018, established principles such as data minimisation — collecting only what is necessary — and gave individuals rights to access, correct and, in some circumstances, delete the information held about them. Similar laws have since been adopted in many other jurisdictions.",
        "Yet the concept of 'ownership' sits uneasily with data. Unlike a car or a house, information can be copied infinitely at almost no cost, and much of it is inherently shared: a photograph of a group, a conversation between two people, or genetic data that reveals information about one's relatives. Some scholars therefore argue that we should think less in terms of property and more in terms of rights and responsibilities governing how data may be used.",
        "The stakes are rising as artificial intelligence systems are trained on vast quantities of personal information. Decisions about credit, insurance and employment are increasingly informed by algorithms whose reasoning may be opaque even to their designers. Ensuring transparency, accountability and meaningful choice in such systems is arguably less a technical challenge than a political one: it depends on what kind of digital society we collectively decide to build."
      ],
      glossary: ["digital footprint|The record of information a person leaves online.", "behavioural profile|A description of a person built from data about their actions.", "consent|Permission for something to happen.", "data minimisation|The principle of collecting only the data that is necessary.", "jurisdiction|An area in which a particular legal system has authority.", "opaque|Difficult to understand or see into."],
      questions: [
        "What is a 'digital footprint' according to the text?|The detailed trace left by our online activity|A security password|A type of computer virus|The size of a company's website",
        "Why do critics speak of a 'fiction of consent'?|Few people read or understand the terms they accept|Users are never asked for permission|Consent is illegal in Europe|Companies refuse to publish their terms",
        "Which principle of the GDPR is mentioned?|Collecting only the data that is necessary|Selling data to the highest bidder|Banning all online advertising|Storing data forever",
        "Why does 'ownership' fit data poorly, according to some scholars?|Data can be copied endlessly and is often shared between people|Data has no economic value|Only governments can own data|Data cannot be stored",
        "What alternative approach do these scholars suggest?|Thinking in terms of rights and responsibilities governing use|Letting companies own all data|Deleting all personal data|Charging users to access the internet",
        "What does the writer conclude about AI and data?|Ensuring accountability is largely a political choice|It is purely a technical problem|AI does not use personal data|Algorithms are always transparent"
      ]
    },
    {
      num: 100, level: "C1", icon: "🏦", genre: "Economics", title: "Central Banks and the Art of Managing Inflation", time: "8 min",
      paragraphs: [
        "When prices rise rapidly, the institution most people look to is not the government but the central bank. Over the past few decades, most advanced economies have given their central banks a clear mandate — typically to keep inflation low and stable, often around a target of two per cent — and the independence to pursue it without political interference.",
        "The main instrument at a central bank's disposal is the policy interest rate, the rate at which it lends to commercial banks. Raising it makes borrowing more expensive throughout the economy, which tends to cool spending and investment and, eventually, reduce the pressure on prices. Cutting it has the opposite effect. The difficulty is that these effects operate with long and variable lags, often of a year or more.",
        "Central bankers therefore have to act on forecasts rather than on current figures, and forecasts are notoriously uncertain. Tighten policy too aggressively and the economy may tip into recession, with rising unemployment; tighten too little and inflation may become entrenched, as businesses and workers come to expect continual price rises and set wages and prices accordingly.",
        "Expectations, in fact, lie at the heart of modern monetary policy. If people trust that the central bank will bring inflation back to target, they are less likely to demand large pay rises or raise prices pre-emptively, making the bank's task easier. This is why central banks invest heavily in communication: published forecasts, press conferences and 'forward guidance' about the likely future path of interest rates.",
        "The tools have expanded too. Following the 2008 financial crisis, when interest rates fell close to zero, many central banks turned to quantitative easing — creating money to buy government bonds and other assets in order to lower long-term borrowing costs. These measures helped stabilise the financial system but also raised difficult questions about inequality, asset prices and the boundaries between monetary and fiscal policy that continue to be debated today."
      ],
      glossary: ["mandate|An official task or authority given to an organisation.", "policy interest rate|The rate set by a central bank that influences other interest rates.", "lag|A delay between an action and its effect.", "entrenched|Firmly established and difficult to change.", "forward guidance|A central bank's communication about the likely future path of policy.", "quantitative easing|A policy in which a central bank creates money to buy assets."],
      questions: [
        "What mandate do most central banks in advanced economies have?|To keep inflation low and stable|To set income tax rates|To maximise company profits|To fix exchange rates permanently",
        "How does raising the policy rate reduce inflation?|It makes borrowing more expensive, cooling spending|It increases the money supply|It lowers taxes|It raises wages immediately",
        "Why must central banks rely on forecasts?|Their policies take a long time to have an effect|Current data are secret|Forecasts are always accurate|Governments require it",
        "What risk comes with tightening policy too little?|Inflation may become entrenched|Unemployment will fall to zero|The currency will disappear|Banks will stop lending entirely",
        "Why do central banks invest in communication?|To shape expectations, which influence wages and prices|To advertise their services|Because the law requires daily press releases|To attract foreign tourists",
        "What questions did quantitative easing raise?|Questions about inequality, asset prices and fiscal boundaries|Whether central banks should exist|Whether interest rates can be positive|Whether bonds are legal"
      ]
    },
    {
      num: 101, level: "C2", icon: "⚖️", genre: "Law and politics", title: "The Rule of Law and the Independence of Judges", time: "9 min",
      paragraphs: [
        "Few political ideals are invoked as frequently, or defined as loosely, as the rule of law. At its most minimal, the phrase denotes a state of affairs in which those who govern are themselves bound by publicly known rules, applied consistently and enforced by courts. It stands in implicit contrast to the rule of men: government by the arbitrary will of whoever happens to hold power.",
        "Legal philosophers have long debated how much more the concept should contain. On a 'thin' or formal account, associated with theorists such as Joseph Raz, the rule of law requires that laws be general, prospective, clear, stable and impartially administered — but says nothing about their moral content. A thoroughly unjust regime could, in principle, satisfy these criteria. 'Thick' or substantive accounts, by contrast, insist that the rule of law is inseparable from the protection of fundamental rights, so that a legal order which systematically violates them cannot be said to embody the ideal at all.",
        "Whatever one's theoretical commitments, there is broad agreement that judicial independence is indispensable. If judges can be dismissed, intimidated or rewarded by the executive, the promise that power is constrained by law becomes hollow, for those charged with enforcing the constraints would themselves be under the control of those they are meant to constrain. Hence the elaborate safeguards found in many constitutions: security of tenure, protected salaries, and appointment procedures designed to insulate the judiciary from partisan pressure.",
        "Independence, however, is not to be confused with unaccountability. Courts derive their authority in large part from the reasoned justification of their decisions, which are published, open to criticism and subject to appeal. A judiciary perceived as pursuing its own political agenda risks forfeiting the very legitimacy on which its independence depends. The balance is delicate, and it is struck differently in different legal traditions.",
        "Recent years have furnished numerous examples of governments seeking to reshape courts to their advantage — lowering retirement ages to remove sitting judges, expanding benches to alter majorities, or curtailing judicial review. Such measures are frequently presented as democratic reforms that restore power to elected representatives. Whether they in fact strengthen democracy or hollow it out is precisely the question that the rule of law obliges citizens, and their courts, to ask."
      ],
      glossary: ["invoke|To mention a principle or authority in support of an argument.", "arbitrary|Based on personal will or chance rather than on rules or reason.", "prospective|Applying to the future rather than to the past.", "security of tenure|Protection from being dismissed from a position.", "judicial review|The power of courts to examine whether laws or government actions are lawful.", "forfeit|To lose something as a result of one's actions."],
      questions: [
        "What does the rule of law stand in contrast to, according to the text?|Government by the arbitrary will of those in power|Government by elected parliaments|International law|Customary law",
        "What distinguishes a 'thin' account of the rule of law?|It sets formal requirements without judging the laws' moral content|It requires the protection of all human rights|It rejects the need for courts|It applies only to criminal law",
        "Why is judicial independence described as indispensable?|Otherwise those enforcing limits on power would be controlled by those they limit|Because judges are elected|Because it reduces the cost of courts|Because it allows judges to make laws",
        "How, according to the text, do courts maintain their legitimacy?|Through reasoned, published decisions open to criticism and appeal|By avoiding all public scrutiny|By following government instructions|By refusing to hear political cases",
        "Which tactic for reshaping courts is NOT mentioned?|Abolishing written constitutions entirely|Lowering retirement ages|Expanding the number of judges|Curtailing judicial review",
        "What is the writer's attitude in the final paragraph?|Questioning: such reforms must be examined to see whether they strengthen or weaken democracy|Fully supportive of all court reforms|Indifferent to the topic|Convinced that courts should have no limits"
      ]
    },
    {
      num: 102, level: "C2", icon: "🧭", genre: "Leadership", title: "Leadership Under Uncertainty", time: "9 min",
      paragraphs: [
        "Management textbooks have traditionally portrayed decision-making as a rational sequence: define the problem, gather the relevant information, weigh the options and select the one with the highest expected value. Crises expose the limitations of this model with brutal clarity. When a pandemic spreads, a supply chain collapses or a cyber-attack paralyses an organisation, information is fragmentary, time is scarce and the very nature of the problem may still be unknown.",
        "Scholars have found it useful to distinguish between risk and uncertainty — a distinction usually traced to the economist Frank Knight. Under risk, the possible outcomes and their probabilities can be estimated, however roughly; under genuine uncertainty, they cannot. Many of the tools leaders rely on, from cost–benefit analysis to financial models, presuppose the former and can foster a dangerous illusion of precision when applied to the latter.",
        "What, then, distinguishes effective leadership when the map runs out? One recurring finding is the value of acting on provisional judgements while remaining openly willing to revise them. Leaders who wait for certainty often act too late; those who commit irrevocably to an early diagnosis risk compounding their errors. The most capable combine decisiveness with what organisational theorists call 'sensemaking': continually updating their understanding as events unfold, and saying so candidly.",
        "Communication becomes, in this light, not an adjunct to the response but a central part of it. People can tolerate a remarkable degree of bad news; what corrodes trust is the sense that they are being misled or kept in the dark. Leaders who acknowledge what they do not know, explain the reasoning behind their decisions and set out the conditions under which those decisions might change tend to retain credibility even when particular calls prove mistaken.",
        "None of this diminishes the importance of preparation. Organisations that have rehearsed scenarios, built redundancy into critical systems and cultivated a culture in which junior staff feel able to raise concerns are better placed to improvise when the unexpected occurs. Paradoxically, it is the discipline of planning that makes flexibility possible: as one military maxim has it, plans are useless, but planning is indispensable."
      ],
      glossary: ["fragmentary|Consisting of small, incomplete parts.", "presuppose|To require something to be true as a starting point.", "provisional|Arranged for the present, possibly to be changed later.", "irrevocably|In a way that cannot be changed or undone.", "sensemaking|The ongoing process of interpreting a situation as it develops.", "redundancy|In systems, extra capacity or backup that is available if something fails."],
      questions: [
        "Why do crises expose the limits of the traditional decision-making model?|Information is incomplete, time is short and the problem may be unclear|Leaders have too much information|Crises never require decisions|The model is too simple to teach",
        "What is the difference between risk and uncertainty, according to Knight?|Under risk, outcomes and probabilities can be estimated; under uncertainty, they cannot|Risk is financial; uncertainty is emotional|They mean the same thing|Uncertainty is always less serious than risk",
        "What danger does the writer associate with financial models in uncertain situations?|They can create an illusion of precision|They are too expensive to use|They always predict disasters|They take too long to build",
        "What combination characterises the most capable leaders?|Decisiveness together with continual sensemaking|Waiting for complete certainty|Never changing a decision once made|Delegating all decisions",
        "What, according to the text, most damages trust in a crisis?|The sense of being misled or kept uninformed|Hearing bad news|Leaders admitting uncertainty|Changes to earlier decisions",
        "What does the military maxim at the end suggest?|The process of planning builds the capacity to adapt, even if plans change|Plans should be followed exactly|Planning is a waste of time|Only the military needs to plan"
      ]
    }
  ];
})(window);
