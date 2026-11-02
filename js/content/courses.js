/**
 * COURSES.JS — thematic courses that run alongside the A1–C2 learning path (English source;
 * translations: App.I18n.ka.courses). Each course groups existing lessons into modules around a goal.
 *
 * Lesson references: "g:N" grammar topic N · "r:N" reading passage N · "l:N" listening topic N ·
 * "w:N" writing topic N · "s:<dialogue id>" speaking dialogue · "v:<LEVEL>/<topic>" vocabulary lesson.
 * A course is complete when every lesson is done and the final course test is passed (≥ 70%).
 * Progress is read from the same data as the modules, so work done anywhere counts everywhere.
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};

  App.CourseCategories = [
    { id: "foundations", title: "Foundations", icon: "🧱" },
    { id: "life", title: "Everyday life", icon: "🏙️" },
    { id: "work", title: "Work and business", icon: "💼" },
    { id: "academic", title: "Academic English", icon: "🎓" },
    { id: "topics", title: "Topics and ideas", icon: "🌍" },
    { id: "skills", title: "Skills", icon: "🛠️" }
  ];

  App.Courses = [
    // ——— Foundations ———
    {
      id: "first-steps", category: "foundations", icon: "👋", levels: "A1", minLevel: "A1",
      title: "First Steps in English",
      description: "Your first English: greetings, personal information, family, home and the simple present.",
      outcomes: ["Introduce yourself and others", "Talk about your family and home", "Describe your daily routine", "Ask and answer simple questions"],
      modules: [
        { title: "Hello!", lessons: ["v:A1/greetings", "g:1", "g:2", "s:dlg-A1-u1", "r:1", "w:1"] },
        { title: "People and family", lessons: ["v:A1/people", "v:A1/family", "g:3", "g:7", "r:4"] },
        { title: "Home and town", lessons: ["v:A1/home", "v:A1/town", "g:4", "g:5", "g:6", "r:6", "w:5"] },
        { title: "My day", lessons: ["v:A1/time", "v:A1/routine", "g:8", "g:9", "g:10", "s:dlg-A1-u3", "r:2", "w:6"] },
        { title: "First conversations", lessons: ["g:11", "g:12", "l:1", "l:2", "s:dlg-A1-u2", "s:dlg-A1-u4"] }
      ]
    },
    {
      id: "everyday-conversations", category: "foundations", icon: "💬", levels: "A1–A2", minLevel: "A1",
      title: "Everyday Conversations",
      description: "Practical speaking and listening for daily situations: cafés, shops, phone calls and making plans.",
      outcomes: ["Order food and drink", "Make and change plans", "Leave and understand phone messages", "Ask for and give advice"],
      modules: [
        { title: "Out and about", lessons: ["s:dlg-A1-u5", "l:1", "l:9", "g:15", "r:3"] },
        { title: "Making plans", lessons: ["s:dlg-A1-u4", "g:26", "l:15", "w:4", "w:15"] },
        { title: "On the phone", lessons: ["s:dlg-A2-u1", "l:8", "l:6", "g:16", "g:17"] },
        { title: "Talking about the past", lessons: ["s:dlg-A2-u2", "g:18", "g:19", "g:20", "r:12", "w:6"] },
        { title: "Help and advice", lessons: ["s:dlg-A2-u4", "g:27", "v:A2/communication", "w:22"] }
      ]
    },
    {
      id: "grammar-foundations", category: "foundations", icon: "🧩", levels: "A1–A2", minLevel: "A1",
      title: "Grammar Foundations",
      description: "Every core structure from A1 to A2 in a logical order, with practice and explanations.",
      outcomes: ["Use present, past and future forms correctly", "Use articles, quantifiers and pronouns", "Compare things", "Use modal verbs for ability, obligation and advice"],
      modules: [
        { title: "The building blocks", lessons: ["g:1", "g:2", "g:3", "g:4", "g:5", "g:6"] },
        { title: "Present simple and questions", lessons: ["g:7", "g:8", "g:9", "g:10", "g:11", "g:12"] },
        { title: "Quantity and instructions", lessons: ["g:13", "g:14", "g:15", "g:28", "g:29"] },
        { title: "Present and past", lessons: ["g:16", "g:17", "g:18", "g:19", "g:20", "g:21", "g:22", "g:23"] },
        { title: "Comparing, future and modals", lessons: ["g:24", "g:25", "g:26", "g:27", "g:30"] }
      ]
    },
    {
      id: "intermediate-grammar", category: "foundations", icon: "🔧", levels: "B1", minLevel: "A2",
      title: "Intermediate Grammar Toolkit",
      description: "Perfect tenses, conditionals, the passive, reported speech and relative clauses for confident B1 English.",
      outcomes: ["Talk about experiences with perfect tenses", "Discuss real and imaginary situations", "Report what people said", "Describe processes with the passive"],
      modules: [
        { title: "Perfect tenses", lessons: ["g:31", "g:32", "g:33", "g:34", "g:35"] },
        { title: "Conditionals", lessons: ["g:36", "g:37", "r:39"] },
        { title: "Passive and reporting", lessons: ["g:38", "g:39", "r:31"] },
        { title: "Describing and guessing", lessons: ["g:40", "g:41", "g:43", "g:44"] },
        { title: "Natural conversation", lessons: ["g:42", "g:45", "s:dlg-B1-u5"] }
      ]
    },
    {
      id: "advanced-grammar", category: "foundations", icon: "⚙️", levels: "B2–C1", minLevel: "B1",
      title: "Advanced Grammar and Style",
      description: "Mixed conditionals, advanced passives, participle clauses, inversion and cleft sentences.",
      outcomes: ["Talk about regrets and alternative pasts", "Use formal passives and reporting structures", "Add emphasis with inversion and clefts", "Write cohesive, varied sentences"],
      modules: [
        { title: "Hypothetical meaning", lessons: ["g:46", "g:47", "g:48", "g:64", "g:65"] },
        { title: "Passives and reporting", lessons: ["g:49", "g:50", "g:51", "g:59", "g:67"] },
        { title: "Complex sentences", lessons: ["g:52", "g:57", "g:58", "g:60", "g:68"] },
        { title: "Modals and verb patterns", lessons: ["g:53", "g:54", "g:55", "g:56", "g:66", "g:70", "g:71"] },
        { title: "Emphasis and cohesion", lessons: ["g:61", "g:62", "g:63", "g:69", "g:72", "g:73", "g:74", "g:75"] }
      ]
    },
    {
      id: "proficiency-grammar", category: "foundations", icon: "💎", levels: "C2", minLevel: "C1",
      title: "Proficiency Grammar",
      description: "The structures that distinguish proficient users: subjunctive, fronting, nominalisation, hedging and parallelism.",
      outcomes: ["Write with formal authority", "Control emphasis and information flow", "Hedge claims precisely", "Produce balanced, elegant sentences"],
      modules: [
        { title: "Formal register", lessons: ["g:76", "g:81", "g:84", "g:89"] },
        { title: "Word order and emphasis", lessons: ["g:77", "g:78", "g:82", "g:87"] },
        { title: "Academic density", lessons: ["g:79", "g:85", "g:88"] },
        { title: "Meaning and stance", lessons: ["g:80", "g:86"] },
        { title: "Style and economy", lessons: ["g:83", "g:90"] }
      ]
    },

    // ——— Everyday life ———
    {
      id: "travel-english", category: "life", icon: "✈️", levels: "A1–B1", minLevel: "A1",
      title: "Travel English",
      description: "Everything you need for trips: transport, hotels, directions, problems on the road and sharing your experiences.",
      outcomes: ["Book transport and accommodation", "Understand announcements", "Solve problems while travelling", "Write about a trip"],
      modules: [
        { title: "Getting there", lessons: ["v:A1/transport", "l:3", "l:13", "s:dlg-A2-u5", "r:7"] },
        { title: "Places to stay", lessons: ["l:4", "w:3", "g:6", "g:29"] },
        { title: "Finding your way", lessons: ["s:dlg-A1-u2", "l:2", "w:10", "l:11"] },
        { title: "When things go wrong", lessons: ["v:A2/travel", "l:17", "r:16", "w:36", "w:42"] },
        { title: "Sharing the experience", lessons: ["v:B1/travel", "s:dlg-B1-u1", "w:2", "w:18", "r:30", "g:31"] }
      ]
    },
    {
      id: "food-shopping", category: "life", icon: "🛒", levels: "A1–A2", minLevel: "A1",
      title: "Food, Shopping and Services",
      description: "Ordering, buying, returning and reviewing — the language of everyday transactions.",
      outcomes: ["Order in cafés and restaurants", "Shop for clothes and food", "Return faulty items and complain politely", "Write reviews and recipes"],
      modules: [
        { title: "Food and eating out", lessons: ["v:A1/food", "g:13", "g:14", "l:1", "l:9", "r:9"] },
        { title: "At the shops", lessons: ["v:A1/clothes", "v:A2/shopping", "l:7", "r:10", "g:24"] },
        { title: "Problems and complaints", lessons: ["l:21", "w:17", "g:20"] },
        { title: "Reviews and recipes", lessons: ["w:9", "w:11", "r:3", "l:26"] }
      ]
    },
    {
      id: "health-wellbeing", category: "life", icon: "🩺", levels: "A1–B2", minLevel: "A1",
      title: "Health and Well-being",
      description: "Talk to doctors, understand health advice and read about sleep, exercise and the mind.",
      outcomes: ["Describe symptoms and make appointments", "Understand health advice", "Read about health science", "Give advice on healthy habits"],
      modules: [
        { title: "Your body and the doctor", lessons: ["v:A1/body", "r:92", "l:6", "g:27"] },
        { title: "Healthy habits", lessons: ["v:A2/health", "l:20", "l:41", "w:29", "r:28"] },
        { title: "Health science", lessons: ["v:B2/health", "r:53", "r:58", "l:70", "l:73"] },
        { title: "Mind and body", lessons: ["v:A2/feelings", "l:36", "r:67", "w:39"] }
      ]
    },
    {
      id: "home-community", category: "life", icon: "🏡", levels: "A1–B1", minLevel: "A1",
      title: "Home and Community",
      description: "Renting, repairs, neighbours and local life — the English of where you live.",
      outcomes: ["Describe and rent a home", "Arrange repairs", "Communicate with neighbours", "Take part in community events"],
      modules: [
        { title: "Where I live", lessons: ["v:A1/home", "r:4", "r:20", "w:5"] },
        { title: "Repairs and requests", lessons: ["l:19", "w:27", "w:7"] },
        { title: "Neighbours", lessons: ["s:dlg-B1-u5", "l:15", "w:12", "g:28"] },
        { title: "Community life", lessons: ["l:22", "l:24", "l:30", "w:21", "w:55"] }
      ]
    },

    // ——— Work and business ———
    {
      id: "job-hunting", category: "work", icon: "🧑‍💼", levels: "A2–B2", minLevel: "A2",
      title: "Job Hunting and Interviews",
      description: "Find a job in English: CVs, cover letters, references and interviews.",
      outcomes: ["Write a cover letter", "Answer common interview questions", "Talk about your experience and skills", "Write and request references"],
      modules: [
        { title: "Know your strengths", lessons: ["v:A2/work", "v:B1/work", "w:14", "g:31"] },
        { title: "Applications", lessons: ["r:93", "w:16", "w:31", "w:35"] },
        { title: "The interview", lessons: ["l:16", "s:dlg-B1-u2", "g:32", "g:33"] },
        { title: "References and next steps", lessons: ["w:38", "g:39", "v:B2/professional"] }
      ]
    },
    {
      id: "english-at-work", category: "work", icon: "🏢", levels: "B1–B2", minLevel: "A2",
      title: "English at Work",
      description: "Meetings, emails, teamwork and problem-solving in an international workplace.",
      outcomes: ["Take part in meetings", "Write clear work emails and minutes", "Handle problems and delays", "Work in remote and hybrid teams"],
      modules: [
        { title: "The modern workplace", lessons: ["r:95", "l:31", "l:64", "w:32"] },
        { title: "Meetings", lessons: ["l:37", "w:34", "s:dlg-B2-u4"] },
        { title: "Emails that work", lessons: ["w:20", "w:50", "g:57"] },
        { title: "Ideas and proposals", lessons: ["w:39", "r:96", "s:dlg-C1-u1", "v:B2/business"] }
      ]
    },
    {
      id: "business-writing", category: "work", icon: "📧", levels: "A2–C1", minLevel: "A2",
      title: "Business Writing and Email",
      description: "From a first polite email to formal claims, proposals and letters — step by step.",
      outcomes: ["Choose the right tone and register", "Make requests, complaints and apologies", "Write formal letters and claims", "Structure proposals and reports"],
      modules: [
        { title: "Polite emails", lessons: ["w:3", "w:8", "w:23", "g:27"] },
        { title: "Problems and apologies", lessons: ["w:17", "w:20", "w:27"] },
        { title: "Formal letters", lessons: ["w:33", "w:36", "w:42", "w:53", "s:dlg-C1-u2"] },
        { title: "Reports and proposals", lessons: ["w:41", "w:39", "w:48", "w:57"] },
        { title: "Formal language", lessons: ["v:C1/formal", "g:59", "g:74"] }
      ]
    },
    {
      id: "finance-economics", category: "work", icon: "📈", levels: "B1–C2", minLevel: "B1",
      title: "Finance, Banking and Economics",
      description: "The language of money, markets and banking — from personal budgets to central bank statements.",
      outcomes: ["Talk about money and personal finance", "Understand economic news", "Write financial reports and memos", "Discuss monetary policy"],
      modules: [
        { title: "Money basics", lessons: ["v:B1/money", "r:94", "w:58", "r:51"] },
        { title: "The economy", lessons: ["v:C1/economy", "l:47", "w:54", "r:100"] },
        { title: "Banking and credit", lessons: ["w:46", "w:62", "w:71", "w:74"] },
        { title: "Investment and strategy", lessons: ["w:48", "w:52", "w:63", "w:66"] },
        { title: "Markets and policy", lessons: ["v:C2/economics", "l:79", "w:77", "w:82", "w:86", "w:89"] }
      ]
    },
    {
      id: "leadership-negotiation", category: "work", icon: "🤝", levels: "B2–C2", minLevel: "B2",
      title: "Meetings, Negotiation and Leadership",
      description: "Lead meetings, negotiate deals, give feedback and make decisions under pressure.",
      outcomes: ["Chair a formal meeting", "Negotiate and make conditional offers", "Give tactful feedback", "Communicate decisions as a leader"],
      modules: [
        { title: "Negotiating", lessons: ["r:97", "s:dlg-B2-u4", "s:dlg-C2-u3", "g:64", "w:59"] },
        { title: "Meetings", lessons: ["s:dlg-C2-u1", "w:34", "g:76"] },
        { title: "Feedback and diplomacy", lessons: ["s:dlg-C1-u4", "s:dlg-C2-u4", "g:66", "g:87"] },
        { title: "Leading through change", lessons: ["r:102", "w:66", "w:70", "v:C2/argument"] }
      ]
    },

    // ——— Academic ———
    {
      id: "academic-reading", category: "academic", icon: "📚", levels: "B2–C2", minLevel: "B2",
      title: "Academic Reading",
      description: "Read demanding texts on science, philosophy and society, and follow complex arguments.",
      outcomes: ["Identify a writer's argument and stance", "Follow abstract ideas", "Understand academic vocabulary in context", "Read critically"],
      modules: [
        { title: "Ideas and the mind", lessons: ["v:C1/academic", "r:61", "r:62", "r:63", "r:66"] },
        { title: "Society and economics", lessons: ["r:64", "r:70", "r:73", "r:74"] },
        { title: "Science and nature", lessons: ["r:68", "r:71", "r:72", "r:75"] },
        { title: "Philosophy of knowledge", lessons: ["v:C2/research", "r:76", "r:77", "r:81", "r:84"] },
        { title: "Complex systems", lessons: ["r:78", "r:79", "r:85", "r:88"] }
      ]
    },
    {
      id: "academic-writing", category: "academic", icon: "🖋️", levels: "A2–C2", minLevel: "A2",
      title: "Essay and Academic Writing",
      description: "From short opinion essays to literature reviews and philosophical essays.",
      outcomes: ["Plan and structure essays", "Build and support arguments", "Write summaries and abstracts", "Evaluate and synthesise sources"],
      modules: [
        { title: "Opinion essays", lessons: ["w:29", "w:43", "v:B1/linking words", "g:57"] },
        { title: "Balanced and comparative essays", lessons: ["w:32", "w:40", "w:45", "v:B2/linking words"] },
        { title: "Argument and analysis", lessons: ["w:47", "w:51", "w:54", "w:58", "w:60", "v:B2/argument"] },
        { title: "Academic genres", lessons: ["w:49", "w:61", "w:65", "w:73", "v:C1/discourse"] },
        { title: "Proficiency writing", lessons: ["w:75", "w:78", "w:81", "w:88", "w:90", "g:79", "g:86"] }
      ]
    },
    {
      id: "lectures-podcasts", category: "academic", icon: "🎙️", levels: "B1–C2", minLevel: "B1",
      title: "Lectures and Podcasts",
      description: "Follow lectures, talks and podcasts on ideas, science and society.",
      outcomes: ["Follow the structure of a talk", "Take notes on key points", "Understand speakers' attitudes", "Cope with fast, natural speech"],
      modules: [
        { title: "Talks and features", lessons: ["l:33", "l:36", "l:50", "l:55"] },
        { title: "Lectures", lessons: ["l:56", "l:61", "l:63", "l:70", "l:74"] },
        { title: "Debates and panels", lessons: ["l:64", "l:65", "l:75", "s:dlg-C1-u5"] },
        { title: "Advanced lectures", lessons: ["l:77", "l:78", "l:80", "l:82", "l:83"] },
        { title: "Big questions", lessons: ["l:76", "l:81", "l:86", "l:87", "s:dlg-C2-u5"] }
      ]
    },
    {
      id: "research-presenting", category: "academic", icon: "🔬", levels: "C1–C2", minLevel: "B2",
      title: "Research and Presenting",
      description: "Present findings, discuss research and defend your work in English.",
      outcomes: ["Present a project", "Discuss findings with appropriate caution", "Answer critical questions", "Review others' work"],
      modules: [
        { title: "Presenting", lessons: ["r:96", "s:dlg-C1-u1", "g:63"] },
        { title: "Discussing findings", lessons: ["s:dlg-C1-u3", "g:86", "v:C1/stance"] },
        { title: "Defending your work", lessons: ["s:dlg-C2-u2", "w:61", "w:78"] },
        { title: "Critical thinking", lessons: ["r:73", "r:76", "w:65", "v:C2/precision"] }
      ]
    },

    // ——— Topics and ideas ———
    {
      id: "science-technology", category: "topics", icon: "🧪", levels: "A2–C2", minLevel: "A2",
      title: "Science and Technology",
      description: "Discoveries, inventions and the technologies shaping our future.",
      outcomes: ["Explain how things work", "Discuss inventions and discoveries", "Understand science news", "Debate the ethics of technology"],
      modules: [
        { title: "Inventions", lessons: ["v:A2/technology", "r:26", "r:31", "r:34", "l:54"] },
        { title: "The natural world", lessons: ["r:19", "r:33", "r:40", "r:47", "l:48"] },
        { title: "Space", lessons: ["r:32", "l:29", "l:44", "l:60", "r:75"] },
        { title: "Science today", lessons: ["v:B2/science", "r:50", "r:56", "l:65", "l:84"] },
        { title: "Technology and ethics", lessons: ["v:B1/technology", "r:99", "w:64", "w:74", "w:83"] }
      ]
    },
    {
      id: "law-society", category: "topics", icon: "⚖️", levels: "B2–C2", minLevel: "B2",
      title: "Law, Policy and Society",
      description: "Rights, regulation and public policy — read, discuss and write like a policy professional.",
      outcomes: ["Understand legal and policy vocabulary", "Analyse a policy problem", "Write briefs and position papers", "Argue a case"],
      modules: [
        { title: "Society", lessons: ["v:B2/society", "v:C1/society", "r:64", "l:58", "w:73"] },
        { title: "Policy", lessons: ["w:57", "w:64", "w:67", "l:74"] },
        { title: "Law", lessons: ["v:C2/law", "r:101", "w:68", "w:85"] },
        { title: "Rights and technology", lessons: ["r:86", "r:99", "w:76", "l:85"] },
        { title: "International cooperation", lessons: ["l:71", "w:80", "w:83"] }
      ]
    },
    {
      id: "culture-arts", category: "topics", icon: "🎨", levels: "A2–C2", minLevel: "A2",
      title: "Culture, History and the Arts",
      description: "History, traditions, art and literature from around the world.",
      outcomes: ["Talk about traditions and festivals", "Describe historical events", "Review books, films and exhibitions", "Discuss art and aesthetics"],
      modules: [
        { title: "Traditions", lessons: ["r:24", "l:45", "l:69", "r:30"] },
        { title: "History", lessons: ["r:17", "r:38", "r:46", "r:60", "l:40"] },
        { title: "Books and films", lessons: ["v:B2/culture", "s:dlg-B1-u4", "w:19", "w:24"] },
        { title: "Art and design", lessons: ["l:52", "w:56", "r:72", "r:80"] },
        { title: "Criticism and theory", lessons: ["v:C2/arts", "r:84", "w:84", "w:87", "w:88"] }
      ]
    },
    {
      id: "environment", category: "topics", icon: "🌱", levels: "A2–C1", minLevel: "A2",
      title: "Environment and Sustainability",
      description: "Climate, nature and sustainable living — from everyday actions to policy.",
      outcomes: ["Describe environmental problems", "Discuss solutions", "Understand environmental reports", "Write proposals and briefs"],
      modules: [
        { title: "Nature", lessons: ["v:A2/nature", "r:29", "r:55", "l:35"] },
        { title: "Everyday sustainability", lessons: ["v:B1/environment", "l:39", "w:37", "r:41"] },
        { title: "Cities and climate", lessons: ["r:54", "r:57", "l:63", "w:67"] },
        { title: "Ecosystems", lessons: ["r:71", "l:53", "l:57", "l:62"] },
        { title: "The big picture", lessons: ["v:C1/environment", "l:68", "r:82", "w:48"] }
      ]
    },
    {
      id: "psychology-mind", category: "topics", icon: "🧠", levels: "B1–C2", minLevel: "B1",
      title: "Psychology and the Mind",
      description: "How we think, decide and feel — habits, biases, memory and happiness.",
      outcomes: ["Discuss feelings and behaviour", "Explain psychological effects", "Understand research on the mind", "Evaluate theories critically"],
      modules: [
        { title: "Everyday psychology", lessons: ["v:B2/psychology", "r:48", "l:50", "l:58"] },
        { title: "Decisions and biases", lessons: ["r:62", "r:73", "l:61", "w:65", "w:75"] },
        { title: "Memory and attention", lessons: ["r:61", "r:66", "r:70", "l:70"] },
        { title: "The mind's mysteries", lessons: ["r:83", "r:87", "l:77", "l:82", "l:87"] },
        { title: "Character and emotion", lessons: ["v:C2/character", "v:C2/feelings", "r:67", "r:88"] }
      ]
    },
    {
      id: "media-digital", category: "topics", icon: "📱", levels: "B1–C1", minLevel: "B1",
      title: "Media and Digital Life",
      description: "News, social media, misinformation and staying focused in a connected world.",
      outcomes: ["Discuss news and social media", "Recognise misinformation", "Talk about online safety", "Write about digital habits"],
      modules: [
        { title: "News and media", lessons: ["v:B1/media", "s:dlg-B2-u2", "r:98", "l:66"] },
        { title: "Staying safe online", lessons: ["l:43", "w:60", "r:70"] },
        { title: "Social media debate", lessons: ["s:dlg-B2-u5", "w:51", "l:75"] },
        { title: "Data and privacy", lessons: ["r:99", "r:86", "l:85"] }
      ]
    },

    // ——— Skills ———
    {
      id: "speaking-confidence", category: "skills", icon: "🗣️", levels: "A1–C2", minLevel: "A1",
      title: "Speaking with Confidence",
      description: "All functional dialogues from A1 to C2 in one path — from small talk to moderating debates.",
      outcomes: ["Handle everyday conversations", "Tell stories and give opinions", "Discuss, negotiate and present", "Lead professional discussions"],
      modules: [
        { title: "A1 — First conversations", lessons: ["s:dlg-A1-u1", "s:dlg-A1-u2", "s:dlg-A1-u3", "s:dlg-A1-u4", "s:dlg-A1-u5"] },
        { title: "A2 — Everyday situations", lessons: ["s:dlg-A2-u1", "s:dlg-A2-u2", "s:dlg-A2-u3", "s:dlg-A2-u4", "s:dlg-A2-u5"] },
        { title: "B1 — Opinions and experiences", lessons: ["s:dlg-B1-u1", "s:dlg-B1-u2", "s:dlg-B1-u3", "s:dlg-B1-u4", "s:dlg-B1-u5"] },
        { title: "B2 — Discussion and debate", lessons: ["s:dlg-B2-u1", "s:dlg-B2-u2", "s:dlg-B2-u3", "s:dlg-B2-u4", "s:dlg-B2-u5"] },
        { title: "C1 — Professional communication", lessons: ["s:dlg-C1-u1", "s:dlg-C1-u2", "s:dlg-C1-u3", "s:dlg-C1-u4", "s:dlg-C1-u5"] },
        { title: "C2 — Leading the conversation", lessons: ["s:dlg-C2-u1", "s:dlg-C2-u2", "s:dlg-C2-u3", "s:dlg-C2-u4", "s:dlg-C2-u5"] }
      ]
    },
    {
      id: "listening-everyday", category: "skills", icon: "🎧", levels: "A1–A2", minLevel: "A1",
      title: "Listening for Everyday Life",
      description: "Announcements, messages, forecasts and service conversations — the listening you need every day.",
      outcomes: ["Understand announcements", "Catch key information in messages", "Follow service conversations", "Understand forecasts and updates"],
      modules: [
        { title: "Announcements", lessons: ["l:3", "l:13", "l:23", "l:28"] },
        { title: "Messages and calls", lessons: ["l:8", "l:4", "l:6", "l:19"] },
        { title: "Services", lessons: ["l:10", "l:12", "l:14", "l:21", "l:27"] },
        { title: "Information and tours", lessons: ["l:5", "l:11", "l:18", "l:25", "l:29"] }
      ]
    },
    {
      id: "vocabulary-builder", category: "skills", icon: "🗂️", levels: "A1–C2", minLevel: "A1",
      title: "Vocabulary Builder: Core Words",
      description: "The most useful verbs, describing words and function words at every level.",
      outcomes: ["Use high-frequency verbs naturally", "Describe people, places and things precisely", "Connect ideas with linking words", "Use precise academic and professional words"],
      modules: [
        { title: "A1–A2 essentials", lessons: ["v:A1/core verbs", "v:A1/describing", "v:A1/function words", "v:A2/core verbs", "v:A2/describing", "v:A2/function words"] },
        { title: "B1 — Connecting ideas", lessons: ["v:B1/describing", "v:B1/linking words", "v:B1/opinions", "v:B1/lifestyle", "v:B1/relationships"] },
        { title: "B2 — Evaluating and arguing", lessons: ["v:B2/evaluating", "v:B2/change", "v:B2/argument", "v:B2/linking words"] },
        { title: "C1 — Precise language", lessons: ["v:C1/nuanced verbs", "v:C1/abstract", "v:C1/stance", "v:C1/academic"] },
        { title: "C2 — Proficiency", lessons: ["v:C2/precision", "v:C2/change", "v:C2/discourse", "v:C2/research"] }
      ]
    },
    {
      id: "idioms-phrasal", category: "skills", icon: "🪄", levels: "B1–C2", minLevel: "B1",
      title: "Idioms and Phrasal Verbs",
      description: "Sound natural: the phrasal verbs, expressions and idioms that native speakers use all the time.",
      outcomes: ["Use common phrasal verbs", "Understand idioms in context", "Choose natural expressions", "Recognise register"],
      modules: [
        { title: "Phrasal verbs", lessons: ["g:45", "v:B1/phrasal verbs", "v:B2/phrasal verbs", "v:C1/phrasal verbs"] },
        { title: "Everyday expressions", lessons: ["v:B1/expressions", "l:55"] },
        { title: "Idioms", lessons: ["v:B2/idioms", "v:C1/idioms", "v:C2/idioms"] }
      ]
    }
  ];
})(window);
