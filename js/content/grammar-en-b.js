/**
 * GRAMMAR-EN-B.JS — English teaching layer for grammar topics 31–60 (B1–B2). Format: see grammar-en-a.js.
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};
  App.GrammarEN = App.GrammarEN || {};
  Object.assign(App.GrammarEN, {
    "grammar-topic-31": {
      title: "Present perfect with just, already, yet, ever and never",
      objective: "Use the present perfect for experiences and recent actions with a result now.",
      explanation: "Form the present perfect with have/has + past participle (worked, been, seen, done). It connects the past with the present: life experiences without a specific time ('I've been to Rome'), recent actions with a present result ('I've lost my keys — I can't get in'), and with words like just (a very short time ago), already (sooner than expected), yet (in negatives and questions, until now), ever (at any time) and never.",
      patterns: ["Experience: Have you ever tried khinkali?", "Just: She's just left.", "Already: I've already finished my homework.", "Yet: Has the parcel arrived yet? / It hasn't arrived yet."],
      compare: "'Been' vs 'gone': 'He's been to Paris' (he went and came back) vs 'He's gone to Paris' (he is there now).",
      tip: "have/has + past participle; 'yet' goes at the end of negatives and questions; 'just/already/ever/never' go before the participle.",
      practice: [
        "I can't find my phone. I think I ___ it.|'ve lost|lost yesterday|have lose|'m losing|A past action with a present result: present perfect.",
        "Have you ___ been to Svaneti?|ever|yet|already|just yet|'Ever' asks about experience at any time.",
        "'Is Anna here?' 'No, she's ___ to the shop. She'll be back soon.'|gone|been|went|go|'Gone' means she is there now.",
        "We haven't decided where to go on holiday ___.|yet|already|just|ever|'Yet' goes at the end of negative sentences.",
        "Which sentence is correct?|I've just finished the report.|I've finished just the report.|I just have finished the report.|I've finish just the report.|'Just' goes between have and the past participle."
      ]
    },
    "grammar-topic-32": {
      title: "Present perfect vs past simple",
      objective: "Choose between the present perfect (unfinished or unspecified time) and the past simple (finished time).",
      explanation: "Use the past simple when the action happened at a specific, finished time: yesterday, last year, in 2015, when I was a child. Use the present perfect when the time is not mentioned, when the period continues until now (today, this week, since, for), or when the result matters now. Once you give a finished time or ask 'when', switch to the past simple.",
      patterns: ["Finished time: I visited Tbilisi in 2019.", "Unspecified: I've visited Tbilisi twice.", "Unfinished period: I've drunk three coffees today.", "Since/for: She's lived here for ten years / since 2015."],
      compare: "'I've seen that film' (experience, no time) → 'When did you see it?' 'I saw it last month' (specific time = past simple). Never use the present perfect with 'yesterday', 'ago' or 'last week'.",
      tip: "Finished time expression → past simple; no time / until now → present perfect.",
      practice: [
        "I ___ my grandparents last weekend.|visited|'ve visited|have visit|was visit|'Last weekend' is a finished time: past simple.",
        "She ___ in three different countries so far.|has worked|worked|works|is working|'So far' means up to now: present perfect.",
        "'Have you ever been to Japan?' 'Yes, I ___ there in 2018.'|went|'ve been|have gone|go|A specific time (2018) needs the past simple.",
        "We ___ each other for twenty years.|'ve known|know|knew|are knowing|A situation continuing until now with 'for': present perfect.",
        "When ___ the email?|did you send|have you sent|you sent|have you send|Questions with 'when' use the past simple."
      ]
    },
    "grammar-topic-33": {
      title: "Present perfect continuous vs present perfect simple",
      objective: "Emphasise duration with the continuous and results or quantities with the simple.",
      explanation: "The present perfect continuous (have/has been + -ing) focuses on an activity and how long it has continued, often until now: 'I've been waiting for an hour.' It can also explain present evidence: 'You're out of breath — have you been running?' The present perfect simple focuses on the result or on how much/how many: 'I've written three emails.' State verbs (know, like, own) stay in the simple form.",
      patterns: ["Duration: She's been studying since 9 am.", "Evidence: It's been raining — the streets are wet.", "Result/quantity: I've read 50 pages.", "State verb: I've known him for years."],
      compare: "'I've been painting the kitchen' (the activity, maybe unfinished — I'm covered in paint) vs 'I've painted the kitchen' (finished result).",
      tip: "How long? → continuous; how much/how many or a finished result? → simple.",
      practice: [
        "I ___ for you for forty minutes! Where were you?|'ve been waiting|wait|'m waiting|was wait|Duration up to now: present perfect continuous.",
        "She ___ four job applications this week.|has sent|has been sending|sends|is sending|A number of completed actions: present perfect simple.",
        "Your eyes are red. ___?|Have you been crying|Did you cry|Are you crying since|Have you cried yet|Present evidence of a recent activity: continuous.",
        "We ___ each other since university.|'ve known|'ve been knowing|know|are knowing|'Know' is a state verb, so simple only.",
        "They ___ the house for months, and it still isn't finished.|'ve been renovating|'ve renovated|renovated|renovate|The focus is on the ongoing activity."
      ]
    },
    "grammar-topic-34": {
      title: "Past perfect",
      objective: "Show that one past action happened before another past action.",
      explanation: "Form the past perfect with had + past participle. We use it when we are already talking about the past and need to go further back: 'When I arrived at the station, the train had left.' It makes the order of events clear. Words like already, just, before, after, by the time and never often appear with it.",
      patterns: ["+ She had finished dinner when I called.", "− I hadn't seen him before that day.", "? Had you met her before the party?", "By the time we arrived, the film had started."],
      compare: "'When I got home, my wife cooked dinner' (she started after I arrived) vs 'When I got home, my wife had cooked dinner' (it was ready when I arrived).",
      tip: "Earlier past action → had + past participle; later one → past simple.",
      practice: [
        "When we got to the cinema, the film ___.|had already started|already started|has already started|was already start|The film started before we arrived: past perfect.",
        "She was nervous because she ___ on a plane before.|had never flown|never flew|has never flown|never had fly|An experience before a past moment: past perfect.",
        "By the time the police arrived, the thieves ___.|had escaped|escaped already|have escaped|were escape|'By the time' + past: the earlier action uses had + participle.",
        "I ___ my homework, so I went out with friends.|had finished|have finished|finish|had finish|The homework was done before going out.",
        "___ you ever been abroad before you moved to Germany?|Had|Have|Did|Were|Experience before a past event: Had you ever been...?"
      ]
    },
    "grammar-topic-35": {
      title: "Future continuous and future perfect",
      objective: "Describe actions in progress at a future time and actions completed before a future time.",
      explanation: "The future continuous (will be + -ing) describes an action that will be in progress at a particular moment in the future: 'This time tomorrow I'll be lying on the beach.' It is also a polite way to ask about plans: 'Will you be using the car tonight?' The future perfect (will have + past participle) describes an action that will be finished before a future time, often with 'by': 'By June, I'll have finished my degree.'",
      patterns: ["In progress: At 8 pm I'll be watching the match.", "Polite question: Will you be coming to the meeting?", "Completed by: By 2030, they'll have built the new airport.", "Negative: I won't have finished by Friday."],
      compare: "'At 6 I'll be cooking' (in the middle of cooking) vs 'By 6 I'll have cooked dinner' (it will be ready).",
      tip: "At a future moment → will be + -ing; by a future time → will have + past participle.",
      practice: [
        "Don't call me at nine — I ___ my exam then.|'ll be taking|'ll have taken|take|'m take|An action in progress at a future moment: will be + -ing.",
        "By the end of this year, I ___ here for a decade.|'ll have worked|'ll be work|work|'m working|Completed by a future time: will have + participle.",
        "___ the car this evening? I need to go to the shop.|Will you be using|Will you have used|Do you use|Are you use|A polite question about plans: will you be + -ing.",
        "Hurry! By the time we get there, the concert ___.|will have finished|will be finishing|finishes|has finished|It will be over before we arrive.",
        "This time next week we ___ in the mountains.|'ll be hiking|'ll have hiked|hike|hiked|In progress at a future time."
      ]
    },
    "grammar-topic-36": {
      title: "Zero and first conditionals; future time clauses",
      objective: "Talk about general truths and real future possibilities with if, unless, when and as soon as.",
      explanation: "The zero conditional (if + present simple, present simple) describes things that are always true: 'If you heat ice, it melts.' The first conditional (if + present simple, will + base verb) describes a real possibility in the future: 'If it rains, we'll stay at home.' After if, unless (= if not), when, as soon as, until, before and after, we use a present tense even when we mean the future.",
      patterns: ["Zero: If I drink coffee late, I can't sleep.", "First: If you study, you'll pass.", "Unless: We'll miss the bus unless we hurry.", "Time clause: I'll call you as soon as I arrive."],
      compare: "Never use 'will' in the if/when clause: 'If it rains tomorrow...' not 'If it will rain...'. 'When' means you are sure it will happen; 'if' means it is possible.",
      tip: "if/when/unless + present, main clause + will.",
      practice: [
        "If you ___ water to 100°C, it boils.|heat|will heat|heated|would heat|A general truth: zero conditional (present + present).",
        "If it ___ tomorrow, we'll cancel the picnic.|rains|will rain|rained|would rain|After 'if' we use the present for the future.",
        "I'll text you as soon as I ___ home.|get|will get|got|'m getting to|Future time clauses use the present simple.",
        "You won't pass the exam ___ you study harder.|unless|if|when|as long|'Unless' means 'if not'.",
        "If you mix red and white, you ___ pink.|get|will got|got|would getting|A fact that is always true: present simple in both parts."
      ]
    },
    "grammar-topic-37": {
      title: "Second conditional",
      objective: "Talk about imaginary or unlikely present and future situations and give advice.",
      explanation: "The second conditional uses if + past simple, followed by would (or could/might) + base verb. Despite the past form, it refers to the present or future and describes situations that are imaginary or unlikely: 'If I won the lottery, I'd travel the world.' 'If I were you, I'd apologise' is a common way to give advice. In formal English we use 'were' for all persons after if.",
      patterns: ["Imaginary: If I had more time, I'd learn the piano.", "Unlikely future: What would you do if you lost your job?", "Advice: If I were you, I'd take the job.", "Negative: If he didn't live so far away, we'd see him more often."],
      compare: "First conditional = realistic ('If I have time, I'll help'); second = imaginary or unlikely ('If I had time, I'd help — but I don't').",
      tip: "if + past simple, would + base verb — and no 'would' in the if-clause.",
      practice: [
        "If I ___ a million dollars, I would buy a house by the sea.|had|have|would have|will have|An imaginary situation: if + past simple.",
        "If I were you, I ___ to the doctor.|'d go|'ll go|go|went|Advice: If I were you, I would...",
        "What would you do if you ___ a famous singer?|were|are|will be|would be|After 'if' in the second conditional we use the past (were).",
        "If she didn't work so much, she ___ more relaxed.|would be|will be|is|was|Main clause: would + base verb.",
        "Which sentence is correct?|If I knew her number, I'd call her.|If I would know her number, I'd call her.|If I know her number, I'd call her.|If I knew her number, I'll call her.|No 'would' in the if-clause; past simple + would."
      ]
    },
    "grammar-topic-38": {
      title: "The passive: present and past simple",
      objective: "Use the passive when the action matters more than who does it.",
      explanation: "Form the passive with the correct form of 'be' + past participle: am/is/are + V3 for the present and was/were + V3 for the past. We use it when the doer is unknown, obvious or unimportant, or when we want to focus on the action or the result: 'The bridge was built in 1890.' If we want to mention the doer, we use 'by': 'The novel was written by Tolstoy.'",
      patterns: ["Present: English is spoken all over the world.", "Past: My bike was stolen last night.", "With by: The Mona Lisa was painted by Leonardo da Vinci.", "Question: Where were these photos taken?"],
      compare: "Active focuses on the doer ('Someone cleans the office every day'); passive focuses on the object ('The office is cleaned every day'). Only verbs with an object can be passive: not 'The accident was happened'.",
      tip: "be (in the right tense) + past participle; add 'by' only if the doer is important.",
      practice: [
        "This cheese ___ in Georgia.|is made|makes|is make|made|Present passive: is + past participle.",
        "The window ___ by the storm last night.|was broken|broke|is broken|was broke|Past passive: was + past participle.",
        "Where ___ these photos ___?|were / taken|did / take|was / taken|were / took|Plural subject, past: were + taken.",
        "Millions of emails ___ every day.|are sent|is sent|send|are send|Plural subject, present passive: are sent.",
        "Which sentence is correct?|The accident happened at night.|The accident was happened at night.|The accident is happened at night.|The accident was happen at night.|'Happen' has no object, so it can't be passive."
      ]
    },
    "grammar-topic-39": {
      title: "Reported speech: statements and commands",
      objective: "Report what people said and told others to do, changing tenses and pronouns.",
      explanation: "When we report what someone said with a past reporting verb (said, told), we usually move the tense one step back: present → past, present perfect / past → past perfect, will → would, can → could. Pronouns and time words change too: 'tomorrow' → 'the next day', 'here' → 'there'. Use 'say' without a personal object and 'tell' with one: 'She said (that)...' / 'She told me (that)...'. Report commands with tell/ask + object + (not) to + base verb.",
      patterns: ["'I'm tired.' → He said (that) he was tired.", "'I'll call you.' → She told me she would call me.", "'Don't be late.' → The teacher told us not to be late.", "'We've finished.' → They said they had finished."],
      compare: "'Say' vs 'tell': 'He said that...' / 'He told me that...' (not 'He said me'). If the fact is still true, the tense can stay the same: 'She said she lives in Tbilisi.'",
      tip: "Move tenses one step back; tell + person; tell/ask + person + (not) to + verb for commands.",
      practice: [
        "'I am very busy.' → She said she ___ very busy.|was|is being|has been|were|Present → past after 'said'.",
        "'I'll help you.' → He promised he ___ help me.|would|will|can|helps|will → would in reported speech.",
        "The doctor ___ me to rest for a week.|told|said|said to|speak|'Tell' takes a personal object: told me to...",
        "'Don't touch it!' → She told the children ___ it.|not to touch|don't touch|to not touching|not touch|Negative command: tell + object + not to + verb.",
        "'We have finished the project.' → They said they ___ the project.|had finished|have finished|finished had|finish|Present perfect → past perfect."
      ]
    },
    "grammar-topic-40": {
      title: "Defining relative clauses: who, which, that, where, whose",
      objective: "Join ideas and identify people, things and places with relative pronouns.",
      explanation: "Defining relative clauses tell us which person, thing or place we mean, and they are essential to the sentence. Use 'who' (or 'that') for people, 'which' (or 'that') for things, 'where' for places, 'whose' for possession and 'when' for times. When the relative pronoun is the object of the clause, we can leave it out: 'The book (that) I bought was expensive.'",
      patterns: ["People: The woman who lives next door is a pilot.", "Things: The phone that I bought is broken.", "Places: This is the café where we met.", "Possession: That's the man whose car was stolen."],
      compare: "Don't repeat the pronoun: 'The film which I saw it' is wrong. You can omit the pronoun only when it is the object: 'the man (who) I met', but not 'the man lives next door'.",
      tip: "who/that for people, which/that for things, where for places, whose for possession.",
      practice: [
        "The man ___ fixed my car was very friendly.|who|which|where|whose|For people we use 'who' (or 'that').",
        "Is this the restaurant ___ you had your birthday dinner?|where|which|who|whose|For places we use 'where'.",
        "That's the student ___ essay won the competition.|whose|who|who's|which|'Whose' shows possession.",
        "The laptop ___ I bought last week has already broken.|that|who|where|what|For things: that/which (or nothing, because it's the object).",
        "Which sentence is correct?|The film we watched was great.|The film we watched it was great.|The film what we watched was great.|The film who we watched was great.|The object pronoun can be omitted, and we never repeat 'it'."
      ]
    },
    "grammar-topic-41": {
      title: "Modals of deduction in the present: must, might, can't",
      objective: "Make logical guesses about the present with must, may, might, could and can't.",
      explanation: "When we are almost sure something is true, we use 'must': 'She's been working all day — she must be tired.' When we think it is possibly true, we use 'may', 'might' or 'could': 'He might be in a meeting.' When we are almost sure it is not true, we use 'can't': 'That can't be Tom — he's in London.' For actions in progress, use modal + be + -ing: 'They must be sleeping.'",
      patterns: ["Certain (yes): You must be hungry after your long flight.", "Possible: The keys might be in the car.", "Certain (no): It can't be true!", "In progress: She must be waiting for us outside."],
      compare: "The opposite of 'must' in deduction is 'can't', not 'mustn't' (which means 'not allowed'): 'He can't be at home — the lights are off.'",
      tip: "Almost sure yes → must; maybe → might/may/could; almost sure no → can't.",
      practice: [
        "You've been travelling for 20 hours. You ___ exhausted.|must be|can't be|mustn't be|might to be|Logical certainty: must be.",
        "That ___ Nika — he's on holiday in Spain this week.|can't be|mustn't be|must be|might not to be|Certain it is not true: can't.",
        "I'm not sure where Ana is. She ___ at the library.|might be|must to be|can't be|is might|Possibility: might be.",
        "The phone is busy. Someone ___ it.|must be using|must use|can't using|might uses|Action in progress: must be + -ing.",
        "Which sentence means 'I'm almost sure it's not true'?|It can't be expensive.|It mustn't be expensive.|It must be expensive.|It might be expensive.|'Can't' is the negative of deduction."
      ]
    },
    "grammar-topic-42": {
      title: "Question tags and so / neither",
      objective: "Check information with question tags and agree with so do I / neither do I.",
      explanation: "A question tag is a short question at the end of a sentence used to check information or invite agreement. A positive sentence takes a negative tag and a negative sentence takes a positive tag, using the same auxiliary: 'You're French, aren't you?' 'She doesn't eat meat, does she?' To agree, use 'So + auxiliary + subject' after positive statements ('I love jazz.' 'So do I.') and 'Neither/Nor + auxiliary + subject' after negative ones ('I can't swim.' 'Neither can I.').",
      patterns: ["You've been here before, haven't you?", "They didn't call, did they?", "'I'm hungry.' 'So am I.'", "'I haven't seen it.' 'Neither have I.'"],
      compare: "Special cases: 'I'm right, aren't I?' / 'Let's go, shall we?' / 'Open the door, will you?' With no auxiliary in the statement, use do/does/did: 'He works here, doesn't he?'",
      tip: "Positive statement → negative tag; same auxiliary; so (positive) / neither (negative).",
      practice: [
        "It's a beautiful day, ___?|isn't it|is it|doesn't it|isn't this|Positive statement with 'is' → negative tag 'isn't it'.",
        "You didn't lock the door, ___?|did you|didn't you|do you|have you|Negative statement → positive tag with the same auxiliary.",
        "She works in a bank, ___?|doesn't she|isn't she|don't she|does she|No auxiliary in the statement → use doesn't.",
        "'I love this song.' '___.'|So do I|So I do|Neither do I|So am I|Agreeing with a positive present simple statement: So do I.",
        "'I can't stand horror films.' '___.'|Neither can I|So can I|Neither I can|So can't I|Agreeing with a negative: Neither + auxiliary + subject."
      ]
    },
    "grammar-topic-43": {
      title: "Reflexive and reciprocal pronouns",
      objective: "Use myself, yourself, themselves and each other correctly.",
      explanation: "Reflexive pronouns (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves) are used when the subject and object are the same person: 'She hurt herself.' They can also add emphasis ('I fixed it myself') and appear in phrases like 'by myself' (= alone) and 'help yourself'. 'Each other' and 'one another' are reciprocal: they show that two or more people do the same action to the other: 'They love each other.'",
      patterns: ["Same person: He cut himself while cooking.", "Emphasis: Did you make this cake yourself?", "Alone: She lives by herself.", "Reciprocal: We send each other messages every day."],
      compare: "'They looked at themselves' (each looked at their own reflection) vs 'They looked at each other' (A looked at B and B looked at A). Many verbs are not reflexive in English: 'I feel relaxed' (not 'I feel myself relaxed'), 'get dressed', 'concentrate'.",
      tip: "Subject = object → -self/-selves; two people doing it to the other → each other.",
      practice: [
        "Be careful with that knife! Don't cut ___.|yourself|you|yours|your self|Subject and object are the same person: yourself.",
        "My brother and I don't talk to ___ very often.|each other|ourselves|themselves|us|A reciprocal action between two people: each other.",
        "The children made the decorations ___.|themselves|theirselves|themself|them|The plural reflexive is 'themselves'.",
        "I prefer travelling by ___.|myself|me|mine|my own self|'By myself' means alone.",
        "Which sentence is correct?|I can't concentrate today.|I can't concentrate myself today.|I can't myself concentrate today.|I can't concentrate me today.|'Concentrate' is not reflexive in English."
      ]
    },
    "grammar-topic-44": {
      title: "-ed and -ing adjectives; order of adjectives",
      objective: "Distinguish feelings (-ed) from causes (-ing) and put several adjectives in a natural order.",
      explanation: "Adjectives ending in -ed describe how a person feels: 'I'm bored.' Adjectives ending in -ing describe the thing or person that causes the feeling: 'The film is boring.' Common pairs: interested/interesting, tired/tiring, surprised/surprising, embarrassed/embarrassing. When we use several adjectives before a noun, opinion comes before facts, usually in this order: opinion – size – age – shape – colour – origin – material – purpose ('a lovely small old round wooden table').",
      patterns: ["Feeling: She was disappointed with the result.", "Cause: The result was disappointing.", "Order: a beautiful new Italian car", "Order: a big black leather bag"],
      compare: "'He is boring' means other people find him dull; 'He is bored' means he feels bored. Don't stack too many adjectives — two or three is natural.",
      tip: "-ed = the person's feeling; -ing = what causes it. Opinion before size, age, colour, origin, material.",
      practice: [
        "I was really ___ when I heard the news.|surprised|surprising|surprise|surprisingly|A person's feeling: -ed adjective.",
        "The lecture was so ___ that half the students fell asleep.|boring|bored|bore|boredom|What causes the feeling: -ing adjective.",
        "She bought a ___ dress.|beautiful long red|red long beautiful|long beautiful red|beautiful red long|Opinion – size – colour.",
        "Are you ___ in joining the club?|interested|interesting|interest|interestingly|A person's feeling: interested in.",
        "We stayed in a ___ house by the lake.|lovely old wooden|wooden old lovely|old lovely wooden|lovely wooden old|Opinion – age – material."
      ]
    },
    "grammar-topic-45": {
      title: "Phrasal verbs and object position",
      objective: "Use common phrasal verbs and place object pronouns correctly.",
      explanation: "A phrasal verb is a verb + particle (up, off, out, on...) with a meaning that is often different from the verb alone: 'give up' (stop), 'look after' (take care of). With separable phrasal verbs, a noun object can go before or after the particle ('Turn off the light' / 'Turn the light off'), but a pronoun must go between the verb and the particle ('Turn it off', not 'Turn off it'). Inseparable phrasal verbs keep the object after the particle: 'look after the baby / look after her'.",
      patterns: ["Separable: Pick up your coat. / Pick your coat up.", "Pronoun in the middle: Pick it up.", "Inseparable: I'm looking for my keys / looking for them.", "Three-part: We've run out of milk."],
      compare: "'Look up a word' (find information, separable: look it up) vs 'look after a child' (care for, inseparable: look after him).",
      tip: "With separable phrasal verbs, a pronoun object always goes in the middle.",
      practice: [
        "If you don't know the word, look ___.|it up|up it|it|up|Separable phrasal verb with a pronoun: look it up.",
        "Can you ___ my cat while I'm away?|look after|look after it my cat|look my cat after|after look|'Look after' is inseparable.",
        "I've decided to ___ smoking.|give up|give smoking up it|up give|give off|'Give up' means stop doing something.",
        "These are my new shoes. Can I try ___?|them on|on them|them|on|Pronoun between verb and particle: try them on.",
        "We need to buy coffee — we've ___ it.|run out of|run out|run of out|out run of|'Run out of' is a three-part phrasal verb."
      ]
    },
    "grammar-topic-46": {
      title: "Third conditional",
      objective: "Talk about imaginary past situations and their imaginary results.",
      explanation: "The third conditional describes something that did not happen in the past and its imaginary result: if + past perfect, would have + past participle. 'If I had left earlier, I would have caught the train' (but I didn't leave early, so I missed it). Use 'could have' for possibility and 'might have' for uncertainty in the result clause. It is often used to express regret or criticism.",
      patterns: ["If she had studied, she would have passed.", "If we hadn't taken a taxi, we'd have been late.", "Possibility: If you had asked, I could have helped.", "Question: What would you have done if you had lost your passport?"],
      compare: "Second conditional = imaginary present ('If I had a car, I'd drive'); third = imaginary past ('If I had had a car, I would have driven'). Don't use 'would' in the if-clause: not 'If I would have known'.",
      tip: "if + had + V3, would/could/might have + V3.",
      practice: [
        "If I ___ about the party, I would have come.|had known|knew|would have known|have known|Imaginary past: if + past perfect.",
        "If we hadn't missed the flight, we ___ at the wedding.|would have been|would be have|will have been|had been|Result: would have + past participle.",
        "She ___ the job if she had prepared better for the interview.|might have got|might get|had got|will get|'Might have' expresses an uncertain imaginary result.",
        "If you had told me earlier, I ___ you.|could have helped|could help|can have helped|had helped|'Could have' for an imaginary possibility.",
        "Which sentence is correct?|If I had seen the sign, I would have stopped.|If I would have seen the sign, I would have stopped.|If I saw the sign, I would have stopped.|If I had seen the sign, I would stop yesterday.|No 'would' in the if-clause; past perfect + would have."
      ]
    },
    "grammar-topic-47": {
      title: "Mixed conditionals",
      objective: "Connect a past condition with a present result, or a present condition with a past result.",
      explanation: "Mixed conditionals combine the second and third conditionals when the time of the condition and the time of the result are different. Past condition → present result: if + past perfect, would + base verb ('If I had studied medicine, I would be a doctor now'). Present (permanent) condition → past result: if + past simple, would have + past participle ('If I weren't so shy, I would have spoken to her at the party').",
      patterns: ["Past → present: If she had taken the job, she would live in London now.", "Past → present: If I hadn't eaten so much, I wouldn't feel sick.", "Present → past: If he were more careful, he wouldn't have had the accident.", "Present → past: If I didn't trust you, I wouldn't have lent you the money."],
      compare: "Look at the time words: 'now', 'today' point to a present result; 'yesterday', 'last year' point to a past result.",
      tip: "Decide the time of each clause separately: past condition = had + V3; present result = would + base verb.",
      practice: [
        "If I had saved more money, I ___ a car now.|would have|would have had|will have|had|Past condition, present result: would + base verb.",
        "If she weren't afraid of flying, she ___ to Australia with us last year.|would have come|would come|will come|came|Present condition, past result: would have + V3.",
        "If he ___ the train, he would be here by now.|hadn't missed|didn't miss|wouldn't miss|doesn't miss|The missed train is in the past: past perfect.",
        "We ___ lost now if we had brought a map.|wouldn't be|wouldn't have been|won't be|aren't|Past condition, present result.",
        "If I ___ you, I wouldn't have said that.|were|had been were|am|would be|A general present truth (I'm not you) with a past result."
      ]
    },
    "grammar-topic-48": {
      title: "Wishes and regrets: wish, if only",
      objective: "Express wishes about the present, regrets about the past and annoyance with wish and if only.",
      explanation: "Use wish/if only + past simple for wishes about the present: 'I wish I had more free time' (but I don't). Use wish + past perfect for regrets about the past: 'I wish I hadn't said that.' Use wish + would + base verb to complain about someone's annoying behaviour or to want something to change: 'I wish you would stop interrupting me.' 'If only' is stronger and more emotional.",
      patterns: ["Present: I wish I lived closer to the sea.", "Past regret: She wishes she had studied harder.", "Annoyance: I wish it would stop raining.", "Strong: If only I had listened to you!"],
      compare: "'I wish I could swim' (ability now) vs 'I wish I would swim' (incorrect — we don't use 'would' with 'I' after wish). Use 'were' for all persons in formal style: 'I wish I were taller.'",
      tip: "Present wish → past simple; past regret → past perfect; annoying behaviour → would.",
      practice: [
        "I wish I ___ a bigger flat. This one is too small.|had|have|would have|had had|A wish about the present: past simple.",
        "She wishes she ___ the job offer last year.|had accepted|accepted|would accept|has accepted|A regret about the past: past perfect.",
        "I wish my neighbours ___ so much noise at night.|wouldn't make|don't make|hadn't make|not make|Annoyance with someone's behaviour: wish + would.",
        "If only I ___ to your advice!|had listened|listened|would listen|have listened|A strong regret about the past.",
        "I wish I ___ speak Japanese.|could|would|can|will|For a present ability we use 'could'."
      ]
    },
    "grammar-topic-49": {
      title: "The passive in all tenses and with modals",
      objective: "Form the passive in continuous, perfect and modal structures.",
      explanation: "The passive always uses 'be' + past participle; only the form of 'be' changes with the tense: is being cleaned (present continuous), has been cleaned (present perfect), was being cleaned (past continuous), had been cleaned (past perfect), will be cleaned (future), must/can/should be cleaned (modals). The passive is very common in news, reports and formal writing.",
      patterns: ["Present continuous: The road is being repaired.", "Present perfect: The tickets have been sold.", "Past perfect: The house had been sold before we saw it.", "Modal: This form must be signed by a parent."],
      compare: "'They are building a new school' (active) → 'A new school is being built' (passive). 'Have something done' (B2 topic 50) is different: it means arranging for someone else to do it.",
      tip: "Put 'be' in the needed tense, then add the past participle.",
      practice: [
        "Sorry, you can't use the lift. It ___ at the moment.|is being repaired|is repaired|repairs|is repairing|Present continuous passive: is being + V3.",
        "All the tickets ___ already. The concert is sold out.|have been sold|have sold|are sold been|had sold|Present perfect passive: have been + V3.",
        "The documents ___ before the meeting.|must be signed|must sign|must be sign|must signed|Modal passive: must be + V3.",
        "When we arrived, the food ___.|had already been eaten|had already eaten|was already eat|has been eaten|Past perfect passive: had been + V3.",
        "A new bridge ___ next year.|will be built|will build|will be build|is building|Future passive: will be + V3."
      ]
    },
    "grammar-topic-50": {
      title: "Causatives: have/get something done; make and let",
      objective: "Talk about arranging services and about forcing or allowing people to do things.",
      explanation: "Use have/get + object + past participle when someone else does a job for you, usually because you pay them: 'I had my hair cut yesterday.' 'We're getting the car repaired.' 'Get' is more informal. It can also describe something bad that happened to you: 'She had her bag stolen.' Use make + person + base verb to force someone and let + person + base verb to allow someone: 'My boss made me work late.' 'My parents let me stay out until midnight.'",
      patterns: ["Service: I need to have my eyes tested.", "Informal: We got the kitchen painted.", "Bad experience: He had his phone stolen.", "Make/let: She made him apologise. / They let us leave early."],
      compare: "'I cut my hair' (I did it myself) vs 'I had my hair cut' (a hairdresser did it). After make and let, use the base verb without 'to'; in the passive 'make' takes to: 'He was made to wait.'",
      tip: "have/get + object + V3 for services; make/let + person + base verb.",
      practice: [
        "I ___ my car serviced every year.|have|make|let|do|Arranging a service: have + object + past participle.",
        "She's going to get her wedding dress ___.|made|make|to make|making|get + object + past participle.",
        "My parents never ___ me stay up late when I was little.|let|made to|allowed|have|'Let' + person + base verb means allow.",
        "The teacher ___ us rewrite the essay.|made|let to|had to|got|'Make' + person + base verb means force.",
        "He ___ his wallet stolen on the metro.|had|made|let|did|have + object + V3 can describe something bad that happened."
      ]
    },
    "grammar-topic-51": {
      title: "Reported questions and reporting verbs",
      objective: "Report questions correctly and use verbs like advise, suggest, apologise and accuse.",
      explanation: "In reported questions, the word order becomes the same as a statement and we don't use do/does/did: 'Where do you live?' → 'She asked me where I lived.' For yes/no questions, use if or whether: 'Are you coming?' → 'He asked if I was coming.' Many reporting verbs have their own patterns: advise/warn/remind someone to do; suggest doing / suggest that someone (should) do; apologise for doing; accuse someone of doing; refuse/agree/promise to do; deny doing.",
      patterns: ["Wh-question: He asked me what time it was.", "Yes/no: She asked whether I had finished.", "advise + object + to: The doctor advised me to rest.", "accuse + of + -ing: They accused him of lying."],
      compare: "No question mark and no inversion in reported questions: 'She asked where the station was', not 'where was the station?' Don't say 'suggest someone to do'.",
      tip: "Statement word order + if/whether; learn each reporting verb with its pattern.",
      practice: [
        "'Where is the station?' → He asked me where the station ___.|was|is it|was it|did be|Reported questions use statement word order.",
        "'Do you like sushi?' → She asked ___ sushi.|if I liked|do I like|did I like|that I liked|Yes/no questions are reported with if/whether.",
        "He apologised ___ late.|for being|to be|being|for be|apologise for + -ing.",
        "My teacher advised ___ more.|me to read|that me read|me reading|to me read|advise + person + to + base verb.",
        "They accused her ___ the money.|of stealing|to steal|for stealing|stealing|accuse someone of + -ing."
      ]
    },
    "grammar-topic-52": {
      title: "Non-defining relative clauses",
      objective: "Add extra information with commas and which/who, including prepositions in formal style.",
      explanation: "Non-defining relative clauses give extra information that is not needed to identify the person or thing. They are separated by commas, and we cannot use 'that' or omit the pronoun: 'My brother, who lives in Paris, is a chef.' 'Which' can also refer to a whole previous clause: 'He passed the exam, which surprised everyone.' In formal English, prepositions often go before whom/which: 'the person to whom I spoke'.",
      patterns: ["Extra info: Tbilisi, which is the capital, has a long history.", "Whole clause: She didn't call, which was strange.", "Formal preposition: the company for which she works", "Quantity: I have two sisters, both of whom are doctors."],
      compare: "'My sister who lives in Rome is a teacher' (defining — I have more than one sister) vs 'My sister, who lives in Rome, is a teacher' (non-defining — I have one sister).",
      tip: "Commas + who/which (never that); 'which' can refer to a whole idea.",
      practice: [
        "My grandmother, ___ is 90, still goes swimming every day.|who|that|which|whose|Non-defining clause about a person: who (never that).",
        "He didn't reply to my email, ___ annoyed me.|which|that|what|who|'Which' refers to the whole previous clause.",
        "The museum, ___ opened in 1852, has a famous gold collection.|which|that|who|where|Extra information about a thing: which (not that).",
        "The manager, to ___ I complained, was very helpful.|whom|who|which|that|After a preposition, use 'whom' for people.",
        "I met two students, both of ___ were from Brazil.|whom|who|them|which|Quantity + of + whom for people."
      ]
    },
    "grammar-topic-53": {
      title: "Modals in the past: deduction, criticism and unnecessary actions",
      objective: "Make deductions about the past and criticise or regret past actions.",
      explanation: "Use modal + have + past participle to talk about the past. For deduction: must have (almost certain), might/may/could have (possible), can't/couldn't have (almost certainly not): 'She must have forgotten.' For criticism or regret: should have / shouldn't have: 'You should have told me.' 'Needn't have done' means you did something that wasn't necessary; 'didn't need to do' usually means it wasn't necessary, so you probably didn't do it.",
      patterns: ["Deduction: The road is wet — it must have rained.", "Impossible: He can't have seen us; it was too dark.", "Criticism: You shouldn't have shouted at her.", "Unnecessary: I needn't have cooked — they'd already eaten."],
      compare: "'I needn't have bought milk' (I bought it, but we already had some) vs 'I didn't need to buy milk' (it wasn't necessary, so I didn't).",
      tip: "modal + have + V3 for the past: must have (sure), might have (maybe), can't have (impossible), should have (criticism).",
      practice: [
        "The streets are wet. It ___ during the night.|must have rained|must rain|must have rain|should have rained|Almost certain deduction about the past.",
        "She ___ my message — she hasn't replied.|might not have seen|mustn't have seen|might not see|can't see|A possible past explanation.",
        "You ___ me! I would have helped you.|should have told|should told|must have told|should tell|Criticism of a past action: should have + V3.",
        "He ___ the money — he was with me all evening.|can't have stolen|mustn't have stolen|can't steal|shouldn't have stolen|Almost certainly not true in the past: can't have.",
        "I ___ an umbrella. It didn't rain at all.|needn't have taken|didn't need taking|mustn't have taken|needn't take|I took it, but it was unnecessary."
      ]
    },
    "grammar-topic-54": {
      title: "Verbs with -ing or to-infinitive and a change in meaning",
      objective: "Distinguish pairs such as remember doing / remember to do and stop doing / stop to do.",
      explanation: "Some verbs can be followed by -ing or to + base verb with a clear change in meaning. 'Remember/forget + -ing' refers to a memory of something done before; 'remember/forget + to' refers to a duty to do something. 'Stop + -ing' means to quit an activity; 'stop + to' means to stop in order to do something. 'Try + -ing' means to experiment; 'try + to' means to make an effort. 'Regret + -ing' looks back; 'regret + to' announces bad news formally.",
      patterns: ["I remember meeting her. / Remember to lock the door.", "He stopped smoking. / He stopped to buy cigarettes.", "Try restarting the computer. / I tried to lift the box, but it was too heavy.", "I regret saying that. / We regret to inform you..."],
      compare: "'I forgot to call him' (I didn't call) vs 'I'll never forget calling him' (I called and I remember it).",
      tip: "-ing looks back or describes the activity; to + verb looks forward to a purpose or duty.",
      practice: [
        "Did you remember ___ the bills? They were due yesterday.|to pay|paying|pay|to paying|A duty you need to do: remember to.",
        "I'll never forget ___ the Eiffel Tower for the first time.|seeing|to see|see|to seeing|A memory of something done: forget + -ing.",
        "We stopped ___ some petrol on the way to the airport.|to buy|buying|buy|for buying|Stop in order to do something: stop + to.",
        "If the printer doesn't work, try ___ it off and on again.|turning|to turn|turn|turned|An experiment to see if it helps: try + -ing.",
        "He stopped ___ two years ago and feels much healthier.|smoking|to smoke|smoke|to smoking|Quit an activity: stop + -ing."
      ]
    },
    "grammar-topic-55": {
      title: "Used to, be used to and get used to",
      objective: "Distinguish past habits from being or becoming accustomed to something.",
      explanation: "'Used to + base verb' describes a past habit or state that is no longer true: 'I used to live in Batumi.' 'Be used to + noun/-ing' means to be accustomed to something, so it is not strange or difficult: 'I'm used to getting up early.' 'Get used to + noun/-ing' describes the process of becoming accustomed: 'It took me months to get used to the cold winters.' Both 'be used to' and 'get used to' can be used in any tense.",
      patterns: ["Past habit: We used to go camping every summer.", "Accustomed: She's used to working night shifts.", "Becoming accustomed: You'll soon get used to driving on the left.", "Negative: I'm not used to spicy food."],
      compare: "In 'be/get used to', 'to' is a preposition, so it is followed by -ing or a noun: 'I'm used to waking up early', not 'I'm used to wake up early'.",
      tip: "used to + base verb (past habit) vs be/get used to + -ing (accustomed).",
      practice: [
        "When I was a child, I ___ hate vegetables.|used to|was used to|got used to|am used to|A past state that is no longer true.",
        "I've lived in London for years, so I'm used to ___ on the left.|driving|drive|drove|be driving|be used to + -ing.",
        "It took me a long time to ___ the noise of the city.|get used to|used to|be use to|getting used|The process of becoming accustomed: get used to.",
        "She ___ working from home, so the office feels strange to her now.|is used to|used to|use to|gets used|She is accustomed to it now.",
        "Which sentence is correct?|I'm not used to eating so late.|I'm not used to eat so late.|I don't used to eating so late.|I'm not use to eating so late.|be used to + -ing."
      ]
    },
    "grammar-topic-56": {
      title: "Past perfect continuous vs past perfect simple",
      objective: "Show the duration of an activity before a past moment, or its completed result.",
      explanation: "The past perfect continuous (had been + -ing) emphasises how long an activity had been in progress before another past moment, often explaining a past situation: 'She was tired because she had been working all night.' The past perfect simple (had + V3) emphasises a completed action or a result before that moment: 'By noon she had written three reports.'",
      patterns: ["Duration: We had been waiting for two hours when the bus arrived.", "Explanation: His eyes were red — he had been crying.", "Completed: They had finished dinner before we arrived.", "Quantity: By 2010, he had published four novels."],
      compare: "'I had been reading the book' (the activity, maybe unfinished) vs 'I had read the book' (finished, so I knew the ending).",
      tip: "How long before a past moment → had been + -ing; completed result or number → had + V3.",
      practice: [
        "The ground was wet because it ___ all night.|had been raining|has been raining|was raining since|rains|The duration of an activity explains a past situation.",
        "By the time she retired, she ___ at the school for 35 years.|had been teaching|has been teaching|was teaching|teaches|Duration up to a past moment.",
        "When I got home, my brother ___ all the cake.|had eaten|has eaten|was eaten|eats|A completed action with a result: past perfect simple.",
        "They were exhausted because they ___ for hours.|had been walking|have been walking|were walking since|walk|Duration explaining a past state.",
        "By the end of the day, I ___ twenty emails.|had answered|was answering|answered by|have answered|A number of completed actions: past perfect simple."
      ]
    },
    "grammar-topic-57": {
      title: "Contrast, purpose and reason: although, despite, in order to, due to",
      objective: "Link ideas to show contrast, purpose and reason with the correct grammar after each linker.",
      explanation: "For contrast, 'although', 'even though' and 'though' are followed by a clause (subject + verb), while 'despite' and 'in spite of' are followed by a noun or -ing form: 'Although it was cold, we swam' / 'Despite the cold, we swam.' For purpose, use 'to', 'in order to' or 'so as to' + base verb, or 'so that' + clause (often with can/could/would). For reason, 'because' and 'as' take a clause, while 'because of' and 'due to' take a noun.",
      patterns: ["Contrast: Even though he was tired, he kept working.", "Contrast: In spite of feeling ill, she went to work.", "Purpose: I left early so that I wouldn't miss the train.", "Reason: The flight was cancelled due to bad weather."],
      compare: "'Despite of' is wrong — say 'despite' or 'in spite of'. To use a clause after despite, add 'the fact that': 'Despite the fact that it rained...'",
      tip: "Clause → although / because / so that; noun or -ing → despite / because of / due to.",
      practice: [
        "___ the heavy traffic, we arrived on time.|Despite|Although|Even though|Despite of|A noun follows 'despite'.",
        "___ she had little experience, she got the job.|Although|Despite|In spite of|Because of|A clause (subject + verb) follows 'although'.",
        "I'm saving money ___ buy a new laptop.|in order to|so that|for|in order|Purpose with a base verb: in order to.",
        "The match was postponed ___ the storm.|due to|because|although|so that|A noun after a reason linker: due to / because of.",
        "She spoke slowly ___ everyone could understand her.|so that|in order to|despite|due to|Purpose with a clause: so that."
      ]
    },
    "grammar-topic-58": {
      title: "Correlative conjunctions and subject–verb agreement",
      objective: "Use both...and, either...or, neither...nor and make verbs agree in tricky cases.",
      explanation: "Correlative conjunctions work in pairs: both...and (two things together), either...or (one or the other), neither...nor (not one and not the other), not only...but also (emphasis). With either...or and neither...nor, the verb agrees with the nearer subject: 'Neither my brother nor my parents are coming.' Other agreement rules: 'each', 'every' and '-one/-body' words take a singular verb; 'the number of' takes a singular verb, but 'a number of' takes a plural one; collective nouns like 'team' can take singular or plural in British English.",
      patterns: ["Both Ana and Luka speak French.", "You can either call me or send an email.", "Neither the manager nor the staff were informed.", "The number of students is increasing. / A number of students are absent."],
      compare: "'Neither...nor' is already negative: 'Neither John nor Mary came', not 'didn't come'. 'Both' takes a plural verb: 'Both options are good.'",
      tip: "either/neither: the verb agrees with the nearer subject; each/every: singular.",
      practice: [
        "Neither the teacher nor the students ___ the answer.|knew|knows|didn't know|was knowing|The verb agrees with the nearer subject (students).",
        "___ my sister and my brother are doctors.|Both|Either|Neither|Not only|Both...and with a plural verb.",
        "Each of the rooms ___ a balcony.|has|have|are having|having|'Each' takes a singular verb.",
        "The number of tourists ___ grown this year.|has|have|are|were|'The number of' takes a singular verb.",
        "You can pay ___ by card or in cash.|either|neither|both|whether|'Either...or' gives a choice between two options."
      ]
    },
    "grammar-topic-59": {
      title: "Passive reporting structures: it is said that / he is said to",
      objective: "Report beliefs and rumours impersonally, as in news and academic writing.",
      explanation: "With verbs like say, believe, think, report, know, expect and consider, we can report opinions without saying who holds them. Pattern 1: It + is/was + past participle + that-clause: 'It is believed that the painting is a fake.' Pattern 2: Subject + is/was + past participle + to-infinitive: 'The painting is believed to be a fake.' For an earlier time, use the perfect infinitive: 'He is said to have left the country.'",
      patterns: ["It is said that the castle is haunted.", "The castle is said to be haunted.", "It was reported that two people were injured.", "The president is thought to have resigned."],
      compare: "Use 'to be' for the same time as the reporting verb and 'to have + V3' for an earlier time: 'She is known to live abroad' (now) vs 'She is known to have lived abroad' (before).",
      tip: "It + is + said + that... OR Subject + is + said + to (have) + verb.",
      practice: [
        "It ___ that the company will close two factories.|is reported|reports|is reporting|has report|Impersonal passive: It is reported that...",
        "The thief is believed ___ the country last week.|to have left|to leave|leaving|left|An earlier action: to have + past participle.",
        "This bridge is said ___ the oldest in the region.|to be|being|to have been be|is|The same time as now: to be.",
        "Shakespeare ___ to have been born in 1564.|is thought|thinks|is thinking|thought is|Subject + is thought + to have been...",
        "It ___ that eating carrots improves your eyesight, but this is a myth.|is often said|often says|is often saying|has often say|It + is + past participle + that-clause."
      ]
    },
    "grammar-topic-60": {
      title: "Participle clauses",
      objective: "Shorten sentences with present, past and perfect participle clauses.",
      explanation: "Participle clauses make writing more concise. A present participle (-ing) can replace an active clause showing time, reason or result: 'Feeling tired, I went to bed early' (= Because I felt tired). A past participle (V3) replaces a passive clause: 'Built in 1850, the bridge is still in use' (= It was built...). A perfect participle (having + V3) shows that one action was completed before another: 'Having finished the report, she went home.' The subject of the participle clause must be the same as the subject of the main clause.",
      patterns: ["Reason: Not knowing the way, we asked a local.", "Time: Walking home, I met an old friend.", "Passive: Made in Italy, these shoes are very expensive.", "Sequence: Having saved enough money, he bought a car."],
      compare: "Avoid 'dangling' participles: 'Walking down the street, the trees were beautiful' is wrong because the trees weren't walking. Say 'Walking down the street, I admired the beautiful trees.'",
      tip: "-ing = active; V3 = passive; having + V3 = completed before; same subject in both clauses.",
      practice: [
        "___ the email, she realised she had made a mistake.|Having sent|Sent|Having been sent|To send|She sent it first, then realised: having + V3.",
        "___ in 1890, the hotel is the oldest in the city.|Built|Building|Having building|To build|Passive meaning (the hotel was built): past participle.",
        "___ that it was late, we decided to take a taxi.|Realising|Realised|Having realise|To realised|Active meaning and the same time: present participle.",
        "Not ___ what to say, he stayed silent.|knowing|known|having know|to know|Negative participle clause: not + -ing.",
        "Which sentence is correct?|Walking to work, I saw an accident.|Walking to work, an accident happened.|Walked to work, I saw an accident.|Having walk to work, I saw an accident.|The subject of both clauses must be the same (I)."
      ]
    }
  });
})(window);
