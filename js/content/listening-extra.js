/**
 * LISTENING-EXTRA.JS — additional English listening scripts #91–100 (A1–C2), written for the thematic courses.
 * English source only; same format as reading-extra.js. Played with the browser's speech synthesis.
 * Paragraph translations, if added later, live in App.I18n.ka.listening["listening-topic-N"]["p<i>"].
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};

  App.ListeningExtra = [
    {
      num: 91, level: "A1", icon: "🏦", genre: "Services", title: "Opening a Bank Account", time: "3 min",
      paragraphs: [
        "Bank clerk: Good morning. How can I help you? Customer: Good morning. I'd like to open a bank account, please. Bank clerk: Of course. Do you have your passport or ID card with you? Customer: Yes, here's my passport.",
        "Bank clerk: Thank you. What's your address? Customer: It's 14 Green Street, flat 3. Bank clerk: And your phone number? Customer: It's 555 21 34 67. Bank clerk: Great. Do you want a debit card too? Customer: Yes, please.",
        "Bank clerk: Your card will arrive by post in five days. You can also use our mobile app. It's free. Customer: How much does the account cost? Bank clerk: It's free for students. Are you a student? Customer: Yes, I study at the university.",
        "Bank clerk: Perfect. Please sign here and here. Customer: OK. Is that everything? Bank clerk: Yes, that's everything. Welcome to the bank! Customer: Thank you very much. Goodbye."
      ],
      glossary: ["bank account|An arrangement with a bank to keep your money there.", "ID card|An official card that shows who you are.", "address|The number and street where you live.", "debit card|A card you use to pay with money from your bank account.", "by post|Sent by mail.", "sign|To write your name on a document."],
      questions: [
        "What does the customer want?|To open a bank account|To change money|To get a loan|To close an account",
        "What document does the customer show?|A passport|A driving licence|A student card|A bank card",
        "What is the customer's address?|14 Green Street, flat 3|40 Green Street, flat 13|14 Queen Street, flat 3|4 Green Road, flat 30",
        "When will the card arrive?|In five days|Tomorrow|In two weeks|Today",
        "Why is the account free?|The customer is a student|It's a special offer this month|The customer works at the bank|All accounts are free",
        "What does the customer do at the end?|Signs the documents|Pays a fee|Downloads the app|Calls a friend"
      ]
    },
    {
      num: 92, level: "A2", icon: "📞", genre: "Careers", title: "A Phone Call About a Job Advert", time: "4 min",
      paragraphs: [
        "Receptionist: Hello, Sunrise Hotel, Maria speaking. How can I help? Giorgi: Hello. I'm calling about the job advert for a part-time receptionist. Is the job still available? Receptionist: Yes, it is. Can I ask your name? Giorgi: Giorgi Beridze.",
        "Receptionist: Thank you, Giorgi. Do you have any experience? Giorgi: Yes, I worked in a café last summer, and I helped at the reception of a guest house for two months. I speak Georgian, English and a little Russian. Receptionist: That's useful. Many of our guests come from abroad.",
        "Giorgi: Could you tell me the working hours? Receptionist: It's three evenings a week, from six to eleven, and one shift at the weekend. Giorgi: That's perfect, because I have lectures in the morning. And what is the pay? Receptionist: It's twelve lari an hour, and you get a free dinner on each shift.",
        "Receptionist: Could you send us your CV by email? The address is jobs@sunrisehotel.example. Giorgi: Of course. I'll send it this afternoon. Receptionist: Great. The manager will call you next week to arrange an interview. Giorgi: Thank you very much for your help. Goodbye."
      ],
      glossary: ["job advert|A notice that tells people about a job they can apply for.", "part-time|Working only some hours of the week.", "experience|Knowledge or skill you get from doing something.", "shift|A fixed period of work.", "CV|A document that lists your education and work experience.", "arrange|To plan or organise something."],
      questions: [
        "Why is Giorgi calling?|About a job advert for a receptionist|To book a room|To complain about the hotel|To order dinner",
        "Where did Giorgi work last summer?|In a café|In a hotel kitchen|In a shop|In an office",
        "Why are his languages useful?|Many guests come from abroad|The manager doesn't speak Georgian|He will teach languages|The hotel is in Russia",
        "When are the evening shifts?|Three evenings a week, from six to eleven|Every evening from five to ten|Only at the weekend|Every morning",
        "What does he get on each shift, apart from his pay?|A free dinner|A free room|A taxi home|A bonus",
        "What will happen next week?|The manager will call him to arrange an interview|He will start work|He will send his CV|He will visit the hotel"
      ]
    },
    {
      num: 93, level: "B1", icon: "🗓️", genre: "Workplace", title: "Team Meeting: Planning a Product Launch", time: "5 min",
      paragraphs: [
        "Anna: OK, let's get started. The aim of today's meeting is to agree on a plan for launching our new fitness app in March. We've got about thirty minutes. Luka, could you start with an update on development?",
        "Luka: Sure. The app is about ninety per cent finished. We're still fixing a few problems with the step counter on older phones. To be honest, I think we need two more weeks of testing before we can say it's ready. Anna: Two weeks is fine, as long as we keep the launch date.",
        "Nino: From the marketing side, we'd like to start promoting the app on social media at the end of February. We're planning short videos with a local trainer. The only issue is the budget — the videos will cost more than we expected. Anna: How much more? Nino: About fifteen per cent.",
        "Anna: I'd suggest reducing the number of videos from six to four. That should keep us within budget. Does everyone agree? Luka: That sounds reasonable. Nino: Yes, four good videos are better than six average ones.",
        "Anna: Great. So, to sum up: Luka's team finishes testing by the fifteenth of February, Nino's team prepares four videos, and I'll speak to the finance department about the final budget. Let's meet again next Thursday at the same time. Thanks, everyone."
      ],
      glossary: ["launch|The time when a new product is made available to the public.", "update|The most recent information about something.", "step counter|A function that counts how many steps you walk.", "promote|To advertise something to make people buy or use it.", "within budget|Not spending more money than planned.", "sum up|To repeat the main points briefly."],
      questions: [
        "What is the aim of the meeting?|To agree on a plan for launching a fitness app|To hire a new trainer|To discuss last year's results|To choose a new office",
        "Why does Luka want two more weeks?|To test the app on older phones|To add new features|To finish the videos|To find more money",
        "What problem does Nino mention?|The videos will cost more than expected|The trainer is not available|Social media is too expensive|The launch date is too early",
        "What does Anna suggest?|Making four videos instead of six|Delaying the launch|Cancelling the marketing|Hiring a cheaper trainer",
        "What will Anna do after the meeting?|Speak to the finance department|Test the app|Film the videos|Call the trainer",
        "When is the next meeting?|Next Thursday at the same time|Tomorrow morning|At the end of February|On the fifteenth of February"
      ]
    },
    {
      num: 94, level: "B1", icon: "🧑‍💼", genre: "Careers", title: "Job Interview: Tell Me About Yourself", time: "5 min",
      paragraphs: [
        "Interviewer: Thanks for coming in, Elene. Let's begin with a classic question: could you tell me a little about yourself? Elene: Of course. I graduated in business administration two years ago, and since then I've been working as a customer service adviser at a telecom company.",
        "Elene: In that role, I handle around forty calls a day, mostly from customers with billing problems. I've learned to stay calm with people who are upset and to explain complicated things in simple words. Last year I was chosen as the team's 'adviser of the month' twice.",
        "Interviewer: That's impressive. Why are you interested in this position as a project coordinator? Elene: I've really enjoyed the parts of my job that involve organising things — for example, I helped plan the training programme for new staff. I'd like to develop those skills further, and your company is known for its well-organised projects.",
        "Interviewer: What would you say is your main weakness? Elene: I used to find it hard to say no when colleagues asked for help, so I sometimes had too much to do. Now I use a simple planning system and I'm honest about deadlines, which has made a big difference.",
        "Interviewer: Do you have any questions for us? Elene: Yes. What does a typical week look like for a coordinator here, and what kind of training do you offer? Interviewer: Good questions. Let me explain…"
      ],
      glossary: ["graduate|To complete a university degree.", "customer service adviser|A person who helps customers with problems and questions.", "billing|The process of sending bills to customers.", "upset|Unhappy or worried because something bad has happened.", "coordinator|A person who organises different parts of a project.", "weakness|Something you are not very good at."],
      questions: [
        "What does Elene do now?|She is a customer service adviser|She is a project coordinator|She is a university student|She is a trainer",
        "How many calls does she handle a day?|About forty|About fourteen|About four hundred|About ten",
        "What has her job taught her?|To stay calm and explain things simply|To sell new products|To manage a large team|To write computer programs",
        "Why does she want the coordinator job?|She enjoys organising and wants to develop that skill|She wants a higher salary only|She doesn't like customers|Her company is closing",
        "What weakness does she describe?|Finding it hard to say no to colleagues|Being late for work|Not speaking English well|Disliking teamwork",
        "What does she ask at the end?|What a typical week looks like and what training is offered|How much she will earn|When she can go on holiday|Whether she can work from home"
      ]
    },
    {
      num: 95, level: "B2", icon: "👕", genre: "Radio phone-in", title: "Radio Phone-In: Is Fast Fashion Worth the Cost?", time: "6 min",
      paragraphs: [
        "Presenter: Good afternoon, and welcome to Talkback. Today's question: is fast fashion worth the cost? Cheap clothes are more popular than ever, but critics say the environmental and human price is far too high. Our lines are open. First caller is Sophie. Sophie, go ahead.",
        "Sophie: Hi. I'm a student, and honestly, I couldn't afford to dress decently without budget shops. I know there are problems, but it's easy for people with good salaries to tell the rest of us to buy expensive, ethical brands. Presenter: That's a fair point. Thanks, Sophie. Next, we have Tom.",
        "Tom: I work in recycling, and the amount of clothing we receive is staggering. A lot of it has hardly been worn. Most of it can't be recycled into new clothes because the fabrics are mixed, so it ends up in landfill or is shipped abroad. Presenter: So the problem is how much we buy, not just how cheap it is? Tom: Exactly.",
        "Presenter: Our third caller, Leila, runs a second-hand shop. Leila: I'd say the solution isn't only about money. Second-hand clothes are often cheaper than fast fashion, and repairing things is a skill we've lost. If more people bought fewer, better pieces and looked after them, everyone would benefit.",
        "Presenter: Some strong views there. It seems our callers agree on one thing: the real issue may be the habit of constant buying. After the news, we'll be speaking to an economist about whether companies or governments should take more responsibility. Stay with us."
      ],
      glossary: ["fast fashion|Cheap clothes produced quickly to follow the latest trends.", "afford|To have enough money to pay for something.", "ethical|Morally right; produced in a way that does not harm people or the environment.", "staggering|Very surprising and shocking.", "landfill|A place where waste is buried in the ground.", "look after|To take care of something."],
      questions: [
        "What is the topic of the programme?|Whether fast fashion is worth its cost|How to start a clothing business|The history of fashion|Fashion trends this season",
        "What is Sophie's main point?|Cheap shops help people on low incomes|Ethical brands are cheap|Students should buy less|Fashion is not important",
        "What does Tom say about the clothes his company receives?|Many are hardly worn and hard to recycle|They are all recycled into new clothes|They are mostly very old|They are sold in local shops",
        "Why can't most clothes be recycled into new clothes?|Because the fabrics are mixed|Because they are too dirty|Because recycling is illegal|Because nobody wants them",
        "What solution does Leila suggest?|Buying fewer, better clothes and repairing them|Banning cheap shops|Only buying new ethical brands|Throwing old clothes away sooner",
        "What will happen after the news?|An economist will discuss responsibility|More callers will talk about shopping|A fashion designer will be interviewed|The programme will end"
      ]
    },
    {
      num: 96, level: "B2", icon: "🤝", genre: "Business", title: "A Negotiation Call with a Supplier", time: "6 min",
      paragraphs: [
        "Buyer: Hi, Mark, thanks for making time. I wanted to talk about our order for next quarter. As you know, we're planning to double the volume, so we were hoping for a better unit price. Supplier: Good to hear the business is growing. What did you have in mind?",
        "Buyer: At the moment we pay four euros per unit. Given the larger volume, we were thinking of three fifty. Supplier: That's quite a big drop. Our raw material costs have gone up this year. The best I could do is three eighty, provided you commit to a twelve-month contract.",
        "Buyer: Twelve months is a long commitment for us, especially in such an uncertain market. Would you consider three seventy if we signed for nine months instead? And perhaps we could pay within fifteen days rather than thirty, which would help your cash flow.",
        "Supplier: Faster payment is definitely attractive. All right — three seventy-five for nine months with payment in fifteen days. But we'd need the first order confirmed by the end of the month so we can plan production. Buyer: I think we can work with that. Could you also include free delivery for orders over five thousand units?",
        "Supplier: I'll have to check with our logistics team, but I don't see why not. I'll send you a written proposal by Friday. Buyer: Perfect. Once I've reviewed it with our finance director, we can finalise everything next week."
      ],
      glossary: ["quarter|A period of three months in a business year.", "unit price|The price of one item.", "commit to|To promise to do something.", "cash flow|The movement of money into and out of a business.", "logistics|The organisation of moving and delivering goods.", "finalise|To complete the last part of a plan or agreement."],
      questions: [
        "Why does the buyer want a better price?|They are planning to double the order volume|They found a cheaper supplier|The quality was poor|They are closing the business",
        "What does the supplier first offer?|3.80 per unit with a twelve-month contract|3.50 per unit with no contract|4 euros with free delivery|3.70 for six months",
        "Why does the buyer prefer nine months?|The market is uncertain|They want to change suppliers soon|Nine months is cheaper to sign|The finance director insists",
        "What does the buyer offer in return for a lower price?|Paying within fifteen days|Ordering fewer units|A longer contract|Collecting the goods themselves",
        "What is the agreed price?|3.75 for nine months, paid in fifteen days|3.70 for twelve months|3.80 for nine months|3.50 for nine months",
        "What will the supplier do by Friday?|Send a written proposal|Deliver the first order|Call the finance director|Change the logistics company"
      ]
    },
    {
      num: 97, level: "C1", icon: "🏦", genre: "Lecture", title: "Lecture: How Central Banks Fight Inflation", time: "7 min",
      paragraphs: [
        "Good morning. Today I want to look at a question that has dominated economic news in recent years: how do central banks try to bring inflation under control, and why does it so often feel as though they are steering a ship with a very delayed rudder?",
        "Let's start with the basic mechanism. When a central bank raises its policy rate, commercial banks typically raise the rates they charge on loans and mortgages. Borrowing becomes more expensive, saving becomes more attractive, and overall demand in the economy tends to slow. In theory, weaker demand reduces the pressure on prices.",
        "The catch is timing. Most estimates suggest that the full effect of a rate change on inflation takes somewhere between twelve and twenty-four months. So policymakers are effectively making decisions today based on where they think the economy will be in a year or two — and forecasts, as you will discover in your careers, are frequently wrong.",
        "This is why expectations matter so much. If households and firms believe inflation will stay high, they behave in ways that make it stay high: workers demand larger pay rises, and businesses raise prices in advance. A credible central bank can break this cycle simply by convincing people that it will do whatever is necessary. Communication, in other words, is a policy tool in its own right.",
        "Finally, there is the question of cost. Raising rates too far or too fast risks a recession and rising unemployment, and those costs are not shared equally. For next week, I'd like you to read the article on the reading list comparing two recent tightening cycles, and come prepared to discuss whether the central banks involved acted too early, too late, or about right."
      ],
      glossary: ["policy rate|The interest rate set by a central bank.", "mortgage|A loan used to buy a house or flat.", "rudder|The part of a ship used for steering.", "policymaker|A person responsible for making official decisions.", "credible|Able to be believed or trusted.", "tightening cycle|A period in which a central bank repeatedly raises interest rates."],
      questions: [
        "What image does the lecturer use to describe central banking?|Steering a ship with a delayed rudder|Driving a car with no brakes|Building a house without plans|Flying a plane in fog",
        "What happens, in theory, when the policy rate rises?|Borrowing becomes more expensive and demand slows|Saving becomes less attractive|Prices rise immediately|Unemployment falls",
        "How long does the full effect on inflation usually take?|About twelve to twenty-four months|About one week|About five years|It is immediate",
        "Why do expectations matter, according to the lecturer?|Beliefs about inflation influence wages and prices|They determine the exchange rate|They are required by law|They have no real effect",
        "What does the lecturer say about communication?|It is a policy tool in its own right|It should be avoided|It is only for politicians|It makes forecasts accurate",
        "What is the homework?|Read an article comparing two tightening cycles|Write an essay on unemployment|Calculate inflation for one country|Interview a banker"
      ]
    },
    {
      num: 98, level: "C1", icon: "🧠", genre: "Podcast", title: "Podcast: The Psychology of Good Decisions", time: "7 min",
      paragraphs: [
        "Host: Welcome back to Mind Matters. My guest today has spent twenty years studying how professionals make decisions under pressure — doctors, pilots and investors among them. Dr Okafor, thanks for joining us. Guest: My pleasure.",
        "Host: Let's start with the obvious question. Why do intelligent, experienced people make bad decisions? Guest: Mostly not because they lack knowledge, but because of predictable patterns in how we think. One is overconfidence. Experts in particular tend to overestimate how accurate their judgements are, especially in fields where feedback is slow or unclear.",
        "Host: Can that be fixed? Guest: To some extent. One technique I recommend is the 'pre-mortem'. Before committing to a decision, a team imagines that it is a year later and the project has failed. Each person then writes down why it failed. It sounds pessimistic, but it gives people permission to voice doubts that they might otherwise keep to themselves.",
        "Host: What about gut feeling? Some people swear by it. Guest: Intuition is valuable when it's been trained in an environment with regular, quick feedback — a chess player or an experienced firefighter, say. It's far less reliable in areas like long-term investing, where outcomes are noisy and arrive years later. The key is knowing which kind of environment you're in.",
        "Host: Last question: one habit our listeners could adopt tomorrow? Guest: Keep a decision journal. Write down important decisions, what you expected to happen and why. Months later, compare. It's humbling, but it's one of the few ways to get honest feedback on your own judgement."
      ],
      glossary: ["under pressure|In a situation where there is stress or little time.", "overconfidence|Too much belief in your own abilities or judgement.", "pre-mortem|An exercise in which a team imagines a future failure and explains its causes.", "gut feeling|A strong belief based on instinct rather than facts.", "noisy|In data, containing a lot of random variation.", "humbling|Making you realise you are less good or important than you thought."],
      questions: [
        "According to the guest, why do experts often make bad decisions?|Because of predictable thinking patterns, not lack of knowledge|Because they don't have enough training|Because they work too slowly|Because they rely on computers",
        "When is overconfidence especially common?|In fields with slow or unclear feedback|In fields with fast feedback|Among beginners only|In team sports",
        "What is a 'pre-mortem'?|Imagining a project has failed and explaining why|A medical examination before surgery|A meeting after a project ends|A review of last year's results",
        "Why is the pre-mortem useful?|It lets people express doubts openly|It makes projects cheaper|It replaces planning|It guarantees success",
        "When is intuition most reliable?|When it was trained with regular, quick feedback|In long-term investing|When a person is tired|In completely new situations",
        "What habit does the guest recommend?|Keeping a decision journal|Making decisions faster|Asking friends for advice|Avoiding important decisions"
      ]
    },
    {
      num: 99, level: "C2", icon: "🤖", genre: "Panel discussion", title: "Panel: Who Should Regulate Artificial Intelligence?", time: "8 min",
      paragraphs: [
        "Moderator: Good evening. Tonight's panel addresses a deceptively simple question: who should regulate artificial intelligence, and how? With me are a technology lawyer, a computer scientist and a former trade negotiator. Let me start with you, Ms Varga. Is existing law adequate?",
        "Lawyer: In part. A great deal of harm caused by AI systems — discrimination in hiring, defective products, privacy breaches — is already unlawful. The difficulty lies less in the absence of rules than in their enforcement. When a decision emerges from a model that even its developers struggle to explain, establishing causation and liability becomes extraordinarily hard.",
        "Scientist: I'd add that the technology is moving faster than any legislative process can. Rules written around today's architectures may well be obsolete within a few years. That argues for regulating outcomes and risks rather than specific techniques — requiring, say, rigorous testing and independent audits for high-stakes uses, whatever the underlying method.",
        "Negotiator: And let's not pretend this can be settled nationally. The leading developers operate across borders, and capital and talent flow to wherever the regime is most permissive. Without a degree of international coordination — on safety standards at the very least — unilateral rules risk being either circumvented or simply ignored.",
        "Moderator: So, to summarise the emerging consensus: existing law covers more than is often assumed, but enforcement, adaptability and international coordination are the weak points. Ms Varga, a final word? Lawyer: Only that regulation is not the enemy of innovation. Clear rules, sensibly drafted, give responsible developers the certainty they need to invest."
      ],
      glossary: ["deceptively|In a way that seems different from how it really is.", "causation|The relationship between a cause and its effect.", "liability|Legal responsibility for something.", "high-stakes|Involving serious possible consequences.", "permissive|Allowing a lot of freedom; not strict.", "unilateral|Done by one side or country without the agreement of others."],
      questions: [
        "What does the lawyer identify as the main difficulty?|Enforcing existing law, especially proving causation and liability|The complete absence of relevant laws|The cost of hiring lawyers|Public opposition to AI",
        "Why does the scientist favour regulating outcomes and risks?|Rules tied to specific techniques may quickly become obsolete|Techniques are easy to regulate|Outcomes cannot be measured|Scientists prefer no regulation",
        "What does the scientist propose for high-stakes uses?|Rigorous testing and independent audits|A complete ban|Voluntary guidelines only|Government ownership of AI companies",
        "What is the negotiator's main concern?|National rules alone can be circumvented without international coordination|Trade agreements are unnecessary|Developers will leave the industry|Safety standards are too strict",
        "What consensus does the moderator summarise?|Existing law covers much, but enforcement, adaptability and coordination are weak|AI should not be regulated|Only scientists should make the rules|New laws are not needed at all",
        "What is the lawyer's final point?|Clear, sensible rules can support innovation|Regulation always harms innovation|Developers should write the rules|Rules should change every year"
      ]
    },
    {
      num: 100, level: "C2", icon: "🚨", genre: "Briefing", title: "Crisis Briefing: Responding to a Data Breach", time: "8 min",
      paragraphs: [
        "Chief Executive: Thank you all for joining at such short notice. I'll be brief and as candid as I can. At around two o'clock this morning, our security team detected unauthorised access to one of our customer databases. The intrusion has been contained, but we must assume that some customer data has been exposed.",
        "Chief Executive: Here is what we know. The affected system held names, email addresses and order histories for approximately two hundred thousand customers. Here is what we do not yet know: whether payment details were accessed. Our current evidence suggests not, since card data is stored separately and encrypted, but I am not prepared to say so definitively until the forensic investigation is complete.",
        "Head of Legal: We have notified the data protection authority, as we are required to do, and we will be writing to every affected customer today. The message will set out plainly what happened, what information was involved and what steps they should take — in particular, to be alert to phishing emails that may appear to come from us.",
        "Head of Communications: Externally, our position is straightforward: we will not speculate, we will not minimise, and we will update customers and the press at fixed times — nine a.m. and five p.m. daily — until the investigation concludes. Internally, please direct every media enquiry to my team; consistency matters more than speed.",
        "Chief Executive: Let me be clear about one last thing. The question of how this happened will be answered fully and independently, and lessons will be acted upon. But our priority for the next forty-eight hours is the people whose trust we have put at risk. Questions?"
      ],
      glossary: ["candid|Honest and direct, even about unpleasant facts.", "unauthorised access|Entering a computer system without permission.", "contain|To stop something harmful from spreading.", "forensic investigation|A detailed technical examination to find out exactly what happened.", "phishing|Fraudulent messages designed to trick people into giving personal information.", "speculate|To guess about something without having all the facts."],
      questions: [
        "What happened at around two o'clock in the morning?|Unauthorised access to a customer database was detected|The company's website crashed|A customer complained to the press|Payment systems stopped working",
        "Which data is known to have been held in the affected system?|Names, email addresses and order histories|Passwords and passport numbers|Only payment card details|Employees' salaries",
        "Why won't the chief executive confirm that payment details are safe?|The forensic investigation is not yet complete|Card data is stored in the same system|The police have asked for silence|The data protection authority forbids it",
        "What warning will customers receive?|To be alert to phishing emails appearing to come from the company|To change their bank accounts immediately|To stop shopping with the company|To call the company's helpline every day",
        "What is the communications policy?|No speculation, no minimising, and updates at fixed times|Answer every journalist immediately|Say nothing until the investigation ends|Let each department speak to the media",
        "What does the chief executive say the priority is for the next forty-eight hours?|The affected customers whose trust is at risk|Finding someone to blame|Protecting the share price|Launching a new security product"
      ]
    }
  ];
})(window);
