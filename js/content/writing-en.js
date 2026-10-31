/**
 * WRITING-EN.JS — English writing tasks, level targets and assessment criteria for writing topics 1–75 (A1–C1).
 * English source only; translations live in App.I18n.ka.writing[topicId].task (see scripts/export-translations.js).
 *
 * levels[code]: { words: [min, max], criteria: [{ name, descriptor }], checklist: [string] }
 * tasks[topicId]: { task: string, points: [string] }  — the content points the text must cover.
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};

  App.WritingEN = {
    levels: {
      A1: {
        words: [40, 80],
        criteria: [
          { name: "Task", descriptor: "All the content points are included, even if very briefly." },
          { name: "Organisation", descriptor: "Ideas are in a sensible order and joined with and, but, because, then." },
          { name: "Language", descriptor: "Basic everyday words and simple sentence patterns are used correctly." },
          { name: "Accuracy", descriptor: "Capital letters, full stops and the verb be/have are mostly correct; the meaning is always clear." }
        ],
        checklist: [
          "I covered every point in the task.",
          "Every sentence starts with a capital letter and ends with a full stop or question mark.",
          "I used I am / I have / I like correctly.",
          "I joined some ideas with and, but or because.",
          "I opened and closed the text in a suitable way (Hi / Dear …, See you / Best wishes)."
        ]
      },
      A2: {
        words: [70, 120],
        criteria: [
          { name: "Task", descriptor: "All the content points are covered with a little detail or an example." },
          { name: "Organisation", descriptor: "The text has a clear beginning, middle and end; time words (first, then, after that, finally) guide the reader." },
          { name: "Language", descriptor: "Uses common past, present and future forms and everyday vocabulary for the topic." },
          { name: "Accuracy", descriptor: "Most past-tense forms and word order are correct; mistakes do not block understanding." }
        ],
        checklist: [
          "I covered every point and added at least one detail or example to each.",
          "I used past simple correctly for finished events (went, saw, didn't …).",
          "I used time and linking words: first, then, because, so, but.",
          "My greeting, closing and tone fit the reader (friend, teacher, company).",
          "I checked spelling of the key words from the model text."
        ]
      },
      B1: {
        words: [120, 180],
        criteria: [
          { name: "Task", descriptor: "All points are developed with reasons, examples or explanations; the purpose is clear to the reader." },
          { name: "Organisation", descriptor: "Clear paragraphs, each with one main idea; a range of linkers (however, as a result, in addition, on the other hand)." },
          { name: "Language", descriptor: "A good range of topic vocabulary and structures (perfect tenses, conditionals, passive, relative clauses)." },
          { name: "Register & accuracy", descriptor: "Consistent formal or informal style; errors occur but rarely cause confusion." }
        ],
        checklist: [
          "Each paragraph has one clear main idea.",
          "I supported my points with reasons or examples.",
          "I used at least three different linking expressions.",
          "My style is consistently formal or informal, as the task requires.",
          "I used at least one perfect tense, one conditional or one passive structure correctly.",
          "I re-read the text for verb forms, articles and prepositions."
        ]
      },
      B2: {
        words: [180, 260],
        criteria: [
          { name: "Task", descriptor: "Fully addresses the task with relevant, well-developed arguments or information; the reader is fully informed." },
          { name: "Organisation", descriptor: "Logical structure with clear introduction and conclusion; cohesive devices and referencing used effectively." },
          { name: "Language", descriptor: "Wide range of vocabulary, including less common items and collocations; varied complex structures." },
          { name: "Register & accuracy", descriptor: "Appropriate, consistent register; good control of grammar with only occasional slips." }
        ],
        checklist: [
          "My introduction states the purpose or position clearly.",
          "I developed each main point with evidence, examples or consequences.",
          "I acknowledged an opposing view or limitation where relevant.",
          "I varied sentence structure (participle clauses, inversion, cleft or passive forms).",
          "I avoided repeating the same words by using synonyms and reference words.",
          "My conclusion follows logically from the body and adds no new arguments."
        ]
      },
      C1: {
        words: [250, 350],
        criteria: [
          { name: "Task", descriptor: "Complex ideas are presented precisely and persuasively; all elements of the task are fully and insightfully covered." },
          { name: "Organisation", descriptor: "Well-structured, cohesive text; signposting and paragraphing guide the reader through a sophisticated argument." },
          { name: "Language", descriptor: "Precise, flexible vocabulary including idiomatic and academic language; a full range of structures used naturally." },
          { name: "Register & accuracy", descriptor: "Register and tone are precisely controlled for the genre; errors are rare and minor." }
        ],
        checklist: [
          "My opening frames the issue and signals the structure of the text.",
          "Claims are qualified and supported (evidence, data, examples, sources).",
          "I used hedging and stance language appropriately (arguably, it would appear that, to a large extent).",
          "Paragraphs are linked with clear signposting and cohesive reference.",
          "The register and conventions match the genre (memo, proposal, review, essay).",
          "I edited for concision: no unnecessary repetition or filler."
        ]
      }
    },

    tasks: {
      "writing-topic-1": { task: "Write a short profile of yourself for an online language club.", points: ["your name and where you live", "your job or what you study", "your hobbies", "why you are learning English"] },
      "writing-topic-2": { task: "Write a postcard to a friend from your holiday.", points: ["where you are", "what the weather is like", "what you do during the day", "when you are coming home"] },
      "writing-topic-3": { task: "Write a polite email to a hotel to book a room.", points: ["the dates of your stay", "the type of room you want", "a question about breakfast", "a question about an airport transfer"] },
      "writing-topic-4": { task: "Write an invitation to your birthday party.", points: ["the date and time", "the address", "what you are going to do at the party", "how and when to reply (RSVP)"] },
      "writing-topic-5": { task: "Write a short advert for a flat or house for rent.", points: ["where it is", "how many rooms it has", "the furniture and appliances", "what is near it", "the rent and conditions"] },
      "writing-topic-6": { task: "Write a diary entry about a memorable day, using the past simple.", points: ["what you did in the morning", "where you were in the afternoon", "how the evening ended", "how you felt about the day"] },
      "writing-topic-7": { task: "Write a short, polite note to a neighbour asking for a favour while you are away.", points: ["why you are writing", "when you will be away", "what you would like them to do (e.g. water plants, take in a parcel)", "how to contact you and a thank-you"] },
      "writing-topic-8": { task: "Write a polite email to your teacher explaining that you will miss a class.", points: ["the class you will miss", "the reason", "how you will catch up", "a question about the homework"] },
      "writing-topic-9": { task: "Write a short online review of a café or restaurant.", points: ["where it is", "what the place is like", "what you ordered", "the service", "your star rating and why"] },
      "writing-topic-10": { task: "Write clear step-by-step directions for a friend from the station to your home.", points: ["where to start", "each turn or street in order", "landmarks to look for", "how long it takes"] },
      "writing-topic-11": { task: "Write a recipe for a simple dish or breakfast you like.", points: ["the preparation time", "the ingredients and exact amounts", "the steps in order", "a tip for serving"] },
      "writing-topic-12": { task: "Write a 'lost item' notice for a community board.", points: ["what you lost", "where and when you lost it", "a clear description of the item", "your contact details"] },
      "writing-topic-13": { task: "Write a thank-you email to a relative or friend for a present.", points: ["what the present was", "what you like about it", "how you use it", "a friendly question about them"] },
      "writing-topic-14": { task: "Complete a short personal statement to join a club or volunteer group.", points: ["some personal information", "your experience", "your skills", "why you want to join"] },
      "writing-topic-15": { task: "Write your plan for next weekend and your goals for this month.", points: ["your plans with be going to", "predictions or decisions with will", "at least two goals", "why these goals matter to you"] },
      "writing-topic-16": { task: "Write a short cover letter for a summer job or internship.", points: ["the position you are applying for", "your education", "your experience", "your skills and why you are a good fit"] },
      "writing-topic-17": { task: "Write a polite but clear complaint email to an online shop about a damaged or wrong delivery.", points: ["your order number", "what the problem is", "how you feel about it (politely)", "what you want the shop to do"] },
      "writing-topic-18": { task: "Write a travel blog post about a city or place you visited.", points: ["how you got there", "what you visited", "what you ate", "your advice for readers"] },
      "writing-topic-19": { task: "Write a short review of a book or film without giving away the ending.", points: ["the title, author or director, and genre", "a short summary of the story (no spoilers)", "what you liked or disliked", "who you would recommend it to and why"] },
      "writing-topic-20": { task: "Write a polite apology email to a colleague or partner for missing a meeting, and suggest a new time.", points: ["an apology", "the reason you missed the meeting", "a suggestion for a new time", "a polite closing"] },
      "writing-topic-21": { task: "Write a short newsletter report on a school, university or community event.", points: ["when and where it took place", "how many people took part", "what was done", "the result or outcome"] },
      "writing-topic-22": { task: "Write a supportive email to a friend who has moved to a new city or job and asks for advice.", points: ["show that you understand how they feel", "advice on settling in", "advice on making friends", "an encouraging ending"] },
      "writing-topic-23": { task: "Write an email asking a school or college for information about a course.", points: ["which course you are interested in and why", "questions about dates and timetable", "questions about price and materials", "a polite request for a reply"] },
      "writing-topic-24": { task: "Write a short biography of a person who inspires you.", points: ["where and when they were born", "how they started their career", "difficulties they overcame", "what they achieved"] },
      "writing-topic-25": { task: "Write an online listing to sell a second-hand item (e.g. a camera, bike or laptop).", points: ["the model and its condition", "what is included", "why you are selling it", "the price and how to contact you"] },
      "writing-topic-26": { task: "Write a short story about something unexpected that happened on a journey.", points: ["set the scene: where, when, who", "the problem or surprise", "what you did", "how it ended — use first, suddenly, while, fortunately, in the end"] },
      "writing-topic-27": { task: "Write a polite email to your landlord asking for a repair.", points: ["what is broken", "when the problem started and how it affects you", "when you are at home for a repair visit", "a polite request for a quick reply"] },
      "writing-topic-28": { task: "Write a mini visitor's guide to your hometown or region.", points: ["where it is", "what visitors should see", "a local dish to try", "the best time to visit"] },
      "writing-topic-29": { task: "Write a short opinion essay on why daily walking or exercise matters.", points: ["an introduction with your opinion", "two or three reasons with examples", "a conclusion that repeats your view"] },
      "writing-topic-30": { task: "Write a warm letter congratulating a friend or colleague on an important event (a wedding, a new baby or a new home).", points: ["your congratulations", "a personal memory or comment", "your good wishes for the future", "an offer or plan to meet"] },
      "writing-topic-31": { task: "Write a formal cover letter for a full-time job.", points: ["the position and where you saw it", "your education", "your work experience and software skills", "why you suit the company"] },
      "writing-topic-32": { task: "Write a balanced 'for and against' essay on working from home.", points: ["an introduction to the topic", "arguments for", "arguments against", "a balanced conclusion with your view"] },
      "writing-topic-33": { task: "Write a formal letter to the city council or transport department proposing a safer cycle lane or pedestrian crossing in your area.", points: ["the reason for writing", "the current problem and who it affects", "your proposal", "the expected benefits and a request for action"] },
      "writing-topic-34": { task: "Write a meeting summary email for your team.", points: ["the topics discussed", "the decisions made", "who is responsible for each action", "the deadlines"] },
      "writing-topic-35": { task: "Write a personal statement for an exchange programme or scholarship.", points: ["your academic interests", "why you chose this programme", "relevant experience", "how you will use what you learn"] },
      "writing-topic-36": { task: "Write a formal claim letter to an insurance company after a problem while travelling.", points: ["your policy number", "a clear timeline of what happened", "the amount you are claiming", "the receipts and documents you are attaching"] },
      "writing-topic-37": { task: "Write a feature article with practical ways to reduce plastic at home.", points: ["an engaging title and introduction", "several practical tips with explanations", "the benefits for readers", "a memorable conclusion"] },
      "writing-topic-38": { task: "Write a formal letter of reference for a former colleague, team member or student.", points: ["how long and in what role you worked together", "their professional qualities", "their personal qualities", "a specific achievement and your recommendation"] },
      "writing-topic-39": { task: "Write an internal proposal to management to improve the workplace or staff well-being.", points: ["the aim of the proposal", "three concrete steps", "the budget", "the expected benefits"] },
      "writing-topic-40": { task: "Write a problem–solution essay on traffic congestion and air pollution in big cities.", points: ["the causes of the problem", "two or three effective solutions", "how each solution would help", "a conclusion"] },
      "writing-topic-41": { task: "Write a short report on the results of a customer survey.", points: ["the aim of the survey", "what customers like", "the main complaints, with percentages", "your recommendations"] },
      "writing-topic-42": { task: "Write a formal compensation claim to an airline for a delayed or cancelled flight.", points: ["the flight number and date", "the length of the delay", "the reason given", "the compensation you are requesting"] },
      "writing-topic-43": { task: "Write a reflective essay about your journey learning a foreign language.", points: ["the difficulties you had at the start", "what changed and why", "the habits that helped most", "what you have learned about yourself"] },
      "writing-topic-44": { task: "Write a press release announcing a cultural, music or charity festival.", points: ["a headline", "who, what, where and when", "programme highlights", "contact and ticket information"] },
      "writing-topic-45": { task: "Write a comparative essay on printed books and e-readers.", points: ["an introduction to both", "the advantages of each", "the disadvantages of each", "a conclusion with your preference and reasons"] },
      "writing-topic-46": { task: "Write a credit memorandum for a bank committee about a business loan application.", points: ["the borrower's profile", "the purpose and amount of the loan", "a financial analysis and the main risks", "your recommendation and conditions"] },
      "writing-topic-47": { task: "Write an argumentative essay on banning private cars from historic city centres.", points: ["your position", "your main arguments with evidence", "a response to opposing arguments", "a conclusion"] },
      "writing-topic-48": { task: "Write a capital investment proposal to a board of directors for rooftop solar panels on a warehouse.", points: ["the problem (energy costs)", "the technical solution", "the cost and payback period", "the risks and your recommendation"] },
      "writing-topic-49": { task: "Write an academic summary explaining how sleep helps memory.", points: ["the main research question", "the key findings", "how the process works", "the practical implications"] },
      "writing-topic-50": { task: "Write a proactive email to a business client about a supply or delivery delay.", points: ["the objective reason for the delay", "the new timeline", "an offer of a partial delivery", "compensation or a discount and an apology"] },
      "writing-topic-51": { task: "Write an analytical essay on whether AI threatens or enhances creativity in music, design and writing.", points: ["how generative AI is changing creative work", "a comparison with a historical precedent (e.g. the camera)", "arguments on both sides", "what remains a uniquely human advantage"] },
      "writing-topic-52": { task: "Write a market entry report on exporting a local organic product to a European market.", points: ["demand in the target market", "your competitive advantage", "distribution channels", "certification requirements and a recommendation"] },
      "writing-topic-53": { task: "Write a formal letter to a newspaper editor about protecting historic buildings in your city.", points: ["the article or issue you are responding to", "why the buildings matter", "a response to the economic argument for development", "a clear proposal"] },
      "writing-topic-54": { task: "Write a cause-and-effect essay on how contactless payments change the way people spend.", points: ["why people switched to contactless payments", "the effects on spending habits", "the psychological reasons", "possible solutions or advice"] },
      "writing-topic-55": { task: "Write a grant proposal to fund equipment for a youth sports centre in your neighbourhood.", points: ["the social need", "a description of the programme", "the budget", "the expected results and how they will be measured"] },
      "writing-topic-56": { task: "Write a review of a photography or painting exhibition.", points: ["the concept of the exhibition", "the lighting and layout", "a description of the most striking work", "practical information and your verdict"] },
      "writing-topic-57": { task: "Write a policy briefing note evaluating a trial of a four-day working week (32 hours, same pay).", points: ["the background of the trial", "the results for productivity and well-being", "the risks and costs", "a recommendation"] },
      "writing-topic-58": { task: "Write a persuasive essay arguing that financial literacy should be compulsory in schools.", points: ["the problem young people face", "what should be taught (budgeting, interest, saving, risk)", "a response to objections", "a strong conclusion"] },
      "writing-topic-59": { task: "Write a partnership pitch to a foreign manufacturer, asking to become their official distributor in your country.", points: ["your company's experience", "your distribution network", "the market potential", "the proposed terms and next steps"] },
      "writing-topic-60": { task: "Write an analytical essay on digital minimalism and deep work.", points: ["how constant notifications fragment attention", "the evidence for the costs", "practical strategies for deep work", "a balanced conclusion"] },
      "writing-topic-61": { task: "Write a structured abstract for a thesis on hybrid work and organisational culture.", points: ["the relevance of the research", "the aim", "the methodology", "the key findings and their practical value"] },
      "writing-topic-62": { task: "Write a trade finance proposal for a factoring facility for domestic receivables.", points: ["the client's situation and cash-flow need", "how the factoring structure works", "the risks and mitigants", "the pricing and recommendation"] },
      "writing-topic-63": { task: "Write a sector and feasibility analysis of a coastal residential development for bank financing.", points: ["the advantages of the location", "the construction budget", "the pre-sales position", "the main risks and your conclusion"] },
      "writing-topic-64": { task: "Write a policy position paper on regulating AI algorithms in recruitment.", points: ["the current use of AI in hiring", "the risks of bias and lack of transparency", "regulatory options", "your recommended policy"] },
      "writing-topic-65": { task: "Write a critical literature review on nudge theory and choice architecture.", points: ["the key ideas and authors", "evidence of effectiveness", "criticisms and ethical concerns", "gaps for future research"] },
      "writing-topic-66": { task: "Write an executive strategy memo responding to rising raw-material costs and falling margins.", points: ["the situation and its impact", "a three-point plan (e.g. diversifying suppliers, pricing, efficiency)", "the risks of each option", "the recommended decision"] },
      "writing-topic-67": { task: "Write an environmental policy brief for a city on reducing the urban heat island effect.", points: ["the causes of the effect", "its impact on health and energy use", "evidence-based measures", "priorities and a recommendation"] },
      "writing-topic-68": { task: "Write a legal advisory note for a client on force majeure and frustration in an international supply contract.", points: ["the facts and the question", "how the force majeure clause applies", "the alternative doctrine of frustration", "practical advice and next steps"] },
      "writing-topic-69": { task: "Write an op-ed arguing for the value of preserving unique languages in a globalised world.", points: ["a strong opening", "what is lost when a language disappears", "a response to the argument for a global language", "a call to action"] },
      "writing-topic-70": { task: "Write a business case analysis on managing cross-cultural virtual teams in an international company.", points: ["the case background", "the key problems identified", "an analysis using cultural concepts", "recommendations"] },
      "writing-topic-71": { task: "Write a financial ratio analysis of a commercial bank's annual results.", points: ["profitability (ROE, ROA, NIM)", "efficiency (cost-to-income)", "asset quality (NPL ratio)", "overall assessment and outlook"] },
      "writing-topic-72": { task: "Write a cultural heritage grant proposal for a 'living' folk archive.", points: ["the heritage at risk", "the project activities", "the budget and timeline", "the expected impact and sustainability"] },
      "writing-topic-73": { task: "Write a comparative policy essay on Universal Basic Income and Universal Basic Services.", points: ["how each model works", "the advantages of each", "the costs and risks of each", "a reasoned conclusion"] },
      "writing-topic-74": { task: "Write a white paper on zero-trust security architecture in banking.", points: ["the limits of perimeter security", "the principles of zero trust", "implementation steps", "the benefits and challenges"] },
      "writing-topic-75": { task: "Write a philosophical essay on Barry Schwartz's 'paradox of choice'.", points: ["the central claim", "the psychological evidence", "criticisms and counter-examples", "your own reasoned position"] }
    }
  };
})(window);
