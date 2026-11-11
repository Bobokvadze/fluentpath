/**
 * GRAMMAR-EN-C.JS — English teaching layer for grammar topics 61–75 (C1). Format: see grammar-en-a.js.
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};
  App.GrammarEN = App.GrammarEN || {};
  Object.assign(App.GrammarEN, {
    "grammar-topic-61": {
      title: "Negative inversion: never, seldom, not only, under no circumstances",
      objective: "Add emphasis in formal speech and writing by inverting the subject and auxiliary after negative adverbials.",
      explanation: "When a negative or restrictive adverbial comes at the start of a sentence for emphasis, the subject and auxiliary swap places, as in a question: 'Never have I seen such a mess.' Common triggers are never, rarely, seldom, little, not only... but also, under no circumstances, on no account and in no way. If there is no auxiliary, use do/does/did: 'Little did she know what was coming.' This structure is formal and dramatic, so use it sparingly.",
      patterns: ["Never have I been so embarrassed.", "Seldom do we see such talent.", "Not only did he arrive late, but he also forgot the tickets.", "Under no circumstances should you open this door."],
      compare: "Normal order: 'I have never seen anything like it.' Inverted: 'Never have I seen anything like it.' Only invert when the negative word starts the sentence.",
      tip: "Negative adverbial first → auxiliary + subject (+ do/does/did if needed).",
      practice: [
        "Rarely ___ such a beautiful sunset.|have I seen|I have seen|I saw|seen I have|After 'rarely' at the start: auxiliary + subject.",
        "Not only ___ the exam, but she also got the highest mark.|did she pass|she passed|passed she|she did pass|No auxiliary in the original, so add 'did'.",
        "Under no circumstances ___ leave the building during the test.|should candidates|candidates should|candidates|should leave candidates|Inversion after 'under no circumstances'.",
        "Little ___ that the surprise party was for him.|did he know|he knew|he did know|knew he|Little + did + subject + base verb.",
        "Which sentence is correct?|Seldom do I eat fast food.|Seldom I eat fast food.|Seldom eat I fast food.|Seldom I do eat fast food.|Seldom at the start requires do + subject + verb."
      ]
    },
    "grammar-topic-62": {
      title: "Inversion with time expressions: no sooner, hardly, only after",
      objective: "Describe one event quickly following another with no sooner...than, hardly...when and only after/when.",
      explanation: "'No sooner... than' and 'hardly/scarcely... when' describe one action happening immediately after another. They usually take the past perfect and inversion when they begin the sentence: 'No sooner had I sat down than the phone rang.' 'Hardly had we arrived when it started to rain.' 'Only after', 'only when', 'only then' and 'not until' also trigger inversion — but in the main clause, not in the time clause: 'Only when I got home did I realise I had lost my keys.'",
      patterns: ["No sooner had she left than he arrived.", "Hardly had the film started when the power went off.", "Only after the meeting did we understand the problem.", "Not until I read the letter did I know the truth."],
      compare: "Use 'than' with no sooner, but 'when' with hardly/scarcely. With 'only when/after/until', the inversion comes in the second clause.",
      tip: "No sooner had + subject + V3 ... than; Hardly had + subject + V3 ... when.",
      practice: [
        "No sooner had I closed the door ___ someone knocked.|than|when|then|that|'No sooner' is paired with 'than'.",
        "Hardly ___ arrived when the meeting started.|had we|we had|did we|we have|Hardly + had + subject + past participle.",
        "Only when I checked my bank account ___ how much I had spent.|did I realise|I realised|I did realise|realised I|With 'only when', invert in the main clause.",
        "Not until the next morning ___ the damage.|did they discover|they discovered|discovered they|they did discover|'Not until...' at the start: did + subject + verb in the main clause.",
        "Scarcely had the guests left ___ the argument began.|when|than|then|that|'Scarcely' (like hardly) is paired with 'when'."
      ]
    },
    "grammar-topic-63": {
      title: "Cleft sentences for emphasis",
      objective: "Focus on key information with it-clefts and what-clefts.",
      explanation: "Cleft sentences split one idea into two parts to emphasise one element. It-clefts use 'It is/was + focus + that/who + rest': 'It was Ana who found the solution' (not someone else). What-clefts use 'What + clause + is/was + focus': 'What I need is a long holiday.' Similar patterns include 'All I want is...', 'The thing that worries me is...' and 'The reason why... is that...'. They are common in speaking and persuasive writing.",
      patterns: ["It-cleft: It was in Paris that they first met.", "What-cleft: What surprised me was his honesty.", "All: All I did was ask a question.", "Reason: The reason why I called is that I need your advice."],
      compare: "'Luka broke the window' (neutral) vs 'It was Luka who broke the window' (contrast: not someone else). After 'All I did was...' use the base verb: 'All I did was ask'.",
      tip: "It + be + focus + that/who; What + clause + be + focus.",
      practice: [
        "___ was my grandmother who taught me to cook.|It|What|This|There|It-cleft: It was + person + who...",
        "___ I really need is a good night's sleep.|What|That|It|Which|What-cleft: What + clause + is...",
        "All I did ___ ask her a simple question.|was|is that|were|did|After 'All I did', use 'was' + base verb.",
        "It was in 2015 ___ I moved to Tbilisi.|that|when that|which|what|It-cleft focusing on time: It was in 2015 that...",
        "The reason why I'm late ___ my train was cancelled.|is that|is because of|that|is why|'The reason why... is that...'"
      ]
    },
    "grammar-topic-64": {
      title: "Inverted conditionals: should, were, had",
      objective: "Write formal conditionals by omitting 'if' and inverting the auxiliary.",
      explanation: "In formal English, we can replace 'if' with inversion. First conditional with 'should': 'Should you need help, please call' (= If you need help). Second conditional with 'were': 'Were I in your position, I would resign' (= If I were) or 'Were he to ask, I would say yes' (= If he asked). Third conditional with 'had': 'Had we known, we would have come' (= If we had known). Negatives do not contract: 'Had I not seen it...'.",
      patterns: ["Should you have any questions, contact our office.", "Were it not for her help, we would fail.", "Were the company to close, hundreds would lose their jobs.", "Had they left earlier, they wouldn't have missed the flight."],
      compare: "Not: 'Hadn't I known...' — say 'Had I not known...'. This structure is typical of letters, reports and formal speech, not casual conversation.",
      tip: "Should + subject (1st), Were + subject (2nd), Had + subject + V3 (3rd).",
      practice: [
        "___ you require any further information, please do not hesitate to contact us.|Should|Would|If should|Had|Formal first conditional: Should + subject.",
        "___ I known about the delay, I would have taken a later train.|Had|If|Should|Were|Third conditional inversion: Had + subject + V3.",
        "___ it not for the rain, the match would continue.|Were|Was|Had|Should|'Were it not for...' = If it were not for...",
        "Had we not ___ the warning, we might have been hurt.|heard|hear|to hear|hearing|After 'Had we not', use the past participle.",
        "Were the government ___ taxes, prices would rise.|to raise|raising|raise|raised|'Were + subject + to + verb' for a hypothetical future."
      ]
    },
    "grammar-topic-65": {
      title: "Advanced conditional linkers",
      objective: "Express conditions precisely with as long as, provided that, on condition that, in case and but for.",
      explanation: "'As long as', 'provided (that)' and 'on condition that' mean 'only if' and set a requirement: 'You can borrow my car as long as you drive carefully.' 'Unless' means 'except if'. 'In case' is different: it describes a precaution against something that might happen: 'Take an umbrella in case it rains' (= because it might rain). 'But for' + noun means 'if it hadn't been for': 'But for your help, I would have failed.' 'Otherwise' means 'if not' and refers back to the previous sentence.",
      patterns: ["Requirement: I'll lend it to you provided you return it on Monday.", "Precaution: Write down the number in case you forget it.", "But for: But for the traffic, we'd have arrived on time.", "Otherwise: Hurry up, otherwise we'll miss the start."],
      compare: "'I'll bring a coat in case it gets cold' (I'll bring it anyway, as a precaution) vs 'I'll bring a coat if it gets cold' (only if it is cold). Use a present tense after these linkers for future meaning.",
      tip: "as long as / provided = only if; in case = as a precaution; but for + noun.",
      practice: [
        "You can use my laptop ___ you don't install anything.|as long as|in case|unless|but for|A requirement: as long as (= only if).",
        "Take some cash ___ the shop doesn't accept cards.|in case|provided|as long as|unless|A precaution against a possibility: in case.",
        "___ the support of my family, I would never have finished my degree.|But for|Unless|Provided|In case|'But for' + noun = if it hadn't been for.",
        "I'll help you, ___ that you help me next week.|provided|in case|unless|otherwise|'Provided that' sets a condition.",
        "Leave now; ___, you'll be late.|otherwise|unless|in case|provided|'Otherwise' means 'if you don't'."
      ]
    },
    "grammar-topic-66": {
      title: "Preferences and strong advice: would rather, had better, it's time",
      objective: "Express preferences and strong advice, with the same or a different subject.",
      explanation: "'Would rather' + base verb expresses a preference about your own actions: 'I'd rather stay at home tonight.' When the preference is about someone else's actions, use would rather + subject + past simple: 'I'd rather you didn't smoke here.' 'Had better (not)' + base verb gives strong advice, often with a warning: 'You'd better leave now or you'll miss the bus.' 'It's (high) time' + subject + past simple says something should already be happening: 'It's time we went home.'",
      patterns: ["Same subject: I'd rather walk than take the bus.", "Different subject: She'd rather we came tomorrow.", "Strong advice: You'd better not tell her.", "It's time: It's high time you found a job."],
      compare: "'Would prefer' takes to-infinitive: 'I'd prefer to wait'; 'would rather' takes the base verb: 'I'd rather wait'. 'Had better' refers to the present or future despite the past form.",
      tip: "would rather + verb (you) / + subject + past (others); had better + base verb; it's time + subject + past.",
      practice: [
        "I'd rather ___ at home than go to the party.|stay|to stay|staying|stayed|Same subject: would rather + base verb.",
        "I'd rather you ___ anyone about this.|didn't tell|don't tell|not to tell|won't tell|Different subject: would rather + subject + past simple.",
        "You ___ hurry — the last train leaves in ten minutes.|'d better|'d rather|better to|have better|Strong advice: had better + base verb.",
        "It's high time we ___ a decision.|made|make|to make|will make|It's (high) time + subject + past simple.",
        "She'd prefer ___ by train.|to travel|travel|travelling to|travelled|'Would prefer' takes to + base verb."
      ]
    },
    "grammar-topic-67": {
      title: "Passive infinitives and passive gerunds",
      objective: "Use to be done, to have been done and being done after verbs and prepositions.",
      explanation: "When a verb pattern needs an infinitive or a gerund and the meaning is passive, use a passive form. Passive infinitive: to be + V3 ('I expect to be paid on Friday'). Perfect passive infinitive: to have been + V3 for an earlier time ('The letter seems to have been opened'). Passive gerund: being + V3 after verbs like enjoy, hate, avoid, remember and after prepositions ('She hates being interrupted', 'He left without being seen').",
      patterns: ["Infinitive: The report needs to be finished by Monday.", "Perfect: The painting is believed to have been stolen in 1990.", "Gerund: I don't like being told what to do.", "After a preposition: She was proud of being chosen."],
      compare: "'I want to interview him' (I do it) vs 'I want to be interviewed' (someone does it to me). 'Needs doing' is an informal alternative: 'The car needs washing' = 'needs to be washed'.",
      tip: "Passive meaning after to → to be + V3; after -ing verbs/prepositions → being + V3.",
      practice: [
        "Nobody likes ___ in front of colleagues.|being criticised|to criticise|criticising|be criticised|A passive meaning after 'like': being + V3.",
        "The house is reported ___ before the fire started.|to have been sold|to be sell|being sold|to have sold|An earlier passive action: to have been + V3.",
        "This form needs ___ in black ink.|to be completed|completing it|to complete|be completed|Passive infinitive after 'need': to be + V3.",
        "He managed to escape without ___.|being noticed|noticing|to be noticed|be noticed|After a preposition with passive meaning: being + V3.",
        "I expect ___ for the extra work.|to be paid|being paid|to pay|to have paid|Passive infinitive: to be paid."
      ]
    },
    "grammar-topic-68": {
      title: "Absolute constructions: with + object + participle",
      objective: "Add background information concisely with 'with + noun + participle' and absolute phrases.",
      explanation: "An absolute construction gives background circumstances to the main clause. Pattern: with + noun + -ing (active) or V3 (passive): 'With prices rising, many families are struggling.' 'He sat there with his arms folded.' A similar formal pattern omits 'with': 'Weather permitting, we'll eat outside' (= if the weather allows), 'All things considered, it was a success.' Unlike ordinary participle clauses, these phrases have their own subject.",
      patterns: ["With + -ing: With more people working from home, offices are emptier.", "With + V3: She listened with her eyes closed.", "Fixed phrase: Weather permitting, the ceremony will be held outdoors.", "Own subject: The work done, they went home."],
      compare: "In ordinary participle clauses, the subject must match the main clause ('Walking home, I saw...'). In absolute constructions, the phrase has its own subject ('With the children asleep, we finally relaxed').",
      tip: "with + noun + -ing (active) / V3 (passive) for circumstances.",
      practice: [
        "___ the exams over, the students celebrated.|With|Having|Being|For|'With + noun + participle' describes circumstances.",
        "She stood at the door with her arms ___.|crossed|crossing|cross|to cross|Passive/resultant state: with + noun + V3.",
        "With unemployment ___, the government is under pressure.|rising|risen|to rise|rose|Active, ongoing situation: with + noun + -ing.",
        "___, the festival will take place in the park.|Weather permitting|Weather permitted|If weather permitting|Permitting weather|Fixed absolute phrase: weather permitting.",
        "With so many people ___ for the job, competition is intense.|applying|applied|to apply|apply|Active meaning: with + noun + -ing."
      ]
    },
    "grammar-topic-69": {
      title: "Future in the past and expressions of imminence",
      objective: "Talk about past plans and things about to happen with was going to, was to, be about to and be due to.",
      explanation: "'Was/were going to' describes a past plan, often one that did not happen: 'I was going to call you, but I forgot.' 'Was to + base verb' (formal) describes something that was arranged or destined: 'She was to become the first female president.' 'Was to have + V3' shows a planned event that didn't happen. To describe something very near in the future, use 'be about to', 'be on the point/verge/brink of + -ing/noun' and 'be due to + base verb' (scheduled).",
      patterns: ["Unfulfilled plan: We were going to buy a house, but prices rose.", "Destiny: He was to regret that decision for years.", "Imminent: The film is about to start.", "Scheduled: The train is due to arrive at 9:15."],
      compare: "'Be about to' + base verb, but 'be on the verge of' + -ing or noun: 'on the verge of tears', 'on the brink of collapsing'.",
      tip: "Past plans → was going to / was to; very soon → be about to / on the verge of; timetable → be due to.",
      practice: [
        "I ___ you, but my phone died.|was going to call|am going to call|would call|was call|An unfulfilled past plan: was going to + verb.",
        "Hurry up! The shop is ___ close.|about to|due|on the verge|going|Very near future: be about to + base verb.",
        "The company was on the brink of ___ when a new investor appeared.|collapse|collapsing to|to collapse|collapsed|'On the brink of' + noun or -ing.",
        "The flight is ___ land at 6:40.|due to|about|on the point to|verge to|A scheduled time: be due to + base verb.",
        "Little did he know that he ___ become a world-famous writer.|was to|is to|was going|would to|Formal 'was to' for something destined to happen."
      ]
    },
    "grammar-topic-70": {
      title: "Habits with will/would, concession with may, can't help, dare and need",
      objective: "Describe characteristic behaviour, make concessions and use semi-modal verbs.",
      explanation: "'Will' and 'would' + base verb can describe typical behaviour in the present and past: 'She'll sit for hours reading' / 'My grandfather would tell us stories every evening.' Stressed 'will/would' shows annoyance: 'He WILL leave his socks everywhere.' 'May/might... but' concedes a point before contrasting: 'He may be clever, but he's lazy.' 'Can't help + -ing' means you cannot stop yourself: 'I can't help laughing.' 'Need' and 'dare' can work as modals in negatives and questions: 'You needn't come.' 'How dare you!'",
      patterns: ["Past habit: Every summer we would go to the village.", "Concession: It may be expensive, but it's worth it.", "Can't help: I couldn't help noticing her accent.", "Dare: I daren't tell him the truth."],
      compare: "'Would' for past habits works for actions, not states: 'We would play football' but 'I used to have long hair' (not 'would have').",
      tip: "would + verb for repeated past actions (not states); can't help + -ing.",
      practice: [
        "When I was little, my mother ___ sing to me every night.|would|will|was|used|'Would' + base verb for a repeated past action.",
        "I can't help ___ when I see that video.|laughing|to laugh|laugh|laughed|'Can't help' is followed by -ing.",
        "He ___ be talented, but he never practises.|may|must|should|would|Concession: may... but.",
        "Which is correct for a past state?|I used to have a beard.|I would have a beard.|I would had a beard.|I was used to have a beard.|'Would' isn't used for states; use 'used to'.",
        "You ___ bring anything to the party — we have plenty of food.|needn't|daren't|mustn't|can't help|'Needn't' as a modal means it isn't necessary."
      ]
    },
    "grammar-topic-71": {
      title: "Perfect gerunds and infinitives; possessive + -ing",
      objective: "Show an earlier action with having done / to have done, and use possessives before -ing forms.",
      explanation: "The perfect gerund (having + V3) and perfect infinitive (to have + V3) show that one action happened before another: 'He denied having taken the money.' 'She seems to have forgotten our meeting.' After verbs like mind, appreciate and excuse, we can put a possessive (or, informally, an object pronoun) before the -ing form to show who does the action: 'Do you mind my opening the window?' / 'I appreciate your helping me.'",
      patterns: ["Perfect gerund: She regrets having sold the house.", "Perfect infinitive: He claims to have met the president.", "Possessive + -ing: I don't mind your borrowing my car.", "Informal: Do you mind me asking?"],
      compare: "'She seems to be happy' (now) vs 'She seems to have been happy' (in the past). 'I remember him/his telling me' — the possessive is more formal.",
      tip: "Earlier action → having + V3 / to have + V3; possessive + -ing names the doer.",
      practice: [
        "He denied ___ the window.|having broken|to have broken|have broken|having break|deny + perfect gerund for an earlier action.",
        "The suspect appears ___ the city before the police arrived.|to have left|to leave|having left|to leaving|An earlier action after 'appear': to have + V3.",
        "Do you mind ___ the window? It's hot in here.|my opening|me to open|I open|my open|Formal possessive + -ing after 'mind'.",
        "I appreciate ___ so patient with me.|your being|you to be|you be|your be|Possessive + -ing after 'appreciate'.",
        "She's proud of ___ the first in her family to go to university.|having been|to have been|have been|having be|Earlier action after a preposition: having + V3."
      ]
    },
    "grammar-topic-72": {
      title: "Concessive structures: no matter, however, adjective + as",
      objective: "Express that something doesn't change the result with no matter, however, whatever and adjective + as.",
      explanation: "To say that a situation does not affect the outcome, use 'no matter + how/what/who/where' or the -ever words (however, whatever, whoever, wherever): 'No matter how hard I try, I can't remember her name.' 'However much you earn, you'll want more.' A more literary pattern is adjective/adverb/noun + as/though + subject + verb: 'Rich as he is, he isn't happy' (= Although he is rich). 'Much as I admire him, I disagree' means 'although I admire him a lot'.",
      patterns: ["No matter what happens, I'll support you.", "However hard she worked, it was never enough.", "Tired as I was, I finished the report.", "Much as I'd like to come, I can't."],
      compare: "'However' at the start of a sentence followed by a comma is a linker meaning 'but'. 'However + adjective/adverb' (no comma) means 'no matter how': 'However cold it is, he swims.'",
      tip: "No matter how/what + clause; however + adjective + clause; adjective + as + subject + verb.",
      practice: [
        "___ how much I eat, I never put on weight.|No matter|However much|Whatever|Even|'No matter how much' + clause.",
        "___ tired she was, she kept working.|However|Whatever|No matter|Although how|However + adjective = no matter how.",
        "Strange ___ it may seem, I enjoy doing the washing-up.|as|though as|so|that|Adjective + as + subject + verb = although.",
        "___ you go, I'll follow you.|Wherever|However|Whatever|Whoever|'Wherever' = it doesn't matter where.",
        "Much ___ I'd love to help, I simply don't have time.|as|though much|like|so|'Much as' = although... very much."
      ]
    },
    "grammar-topic-73": {
      title: "Advanced comparison: the more..., not so much A as B; like, as, such as",
      objective: "Use double comparatives and distinguish like, as and such as.",
      explanation: "Double comparatives show that two things change together: 'The more you practise, the better you get.' 'The sooner, the better.' 'Not so much A as B' corrects a description: 'It's not so much a job as a hobby' (it's more a hobby). 'Like' + noun means 'similar to' ('She sings like a professional'); 'as' + noun describes a role or function ('He works as a guide'); 'as' + clause compares actions ('Do as I say'); 'such as' introduces examples ('fruits such as apples and pears').",
      patterns: ["The older I get, the less I worry.", "The bigger the city, the higher the rents.", "It wasn't so much expensive as poorly made.", "He works as a teacher. / He talks like a teacher."],
      compare: "'As a doctor, I can tell you...' (I am a doctor) vs 'Like a doctor, she listened carefully' (similar to a doctor). In formal writing, use 'as' before a clause: 'as I said', not 'like I said'.",
      tip: "The + comparative..., the + comparative; as = role, like = similar, such as = examples.",
      practice: [
        "The more you read, ___ your vocabulary becomes.|the richer|richer|the more rich|more richer|Double comparative: the + comparative, the + comparative.",
        "She works ___ an interpreter at the UN.|as|like|such as|so|'As' describes a job or role.",
        "He swims ___ a fish.|like|as|such as|the same|'Like' + noun means similar to.",
        "Many vegetables, ___ broccoli and spinach, are rich in iron.|such as|like as|as|as such|'Such as' introduces examples.",
        "The problem wasn't so much the price ___ the quality.|as|than|like|but|'Not so much A as B'."
      ]
    },
    "grammar-topic-74": {
      title: "Formal linkers: notwithstanding, albeit, whereas, hence, whereby",
      objective: "Connect ideas precisely in formal writing with advanced linking words.",
      explanation: "Formal writing uses precise linkers. Contrast: 'whereas' compares two different facts ('Rural areas are growing, whereas cities are shrinking'); 'albeit' + adjective/phrase means 'although' ('a slow, albeit steady, recovery'); 'notwithstanding' + noun means 'despite' ('Notwithstanding the cost, the project went ahead'). Result: 'consequently', 'hence' and 'thus' show results; 'hence' can be followed by a noun phrase ('The roads were icy; hence the delay'). 'Whereby' means 'by which' ('a system whereby employees can work from home'). 'Yet' can mean 'but' and adds surprise.",
      patterns: ["Contrast: The north is wet, whereas the south is dry.", "Albeit: The plan worked, albeit slowly.", "Hence + noun: Demand rose sharply; hence the price increase.", "Whereby: a scheme whereby students receive free meals"],
      compare: "'Albeit' is followed by an adjective, adverb or phrase, not a full clause: 'albeit briefly', not 'albeit it was brief'.",
      tip: "whereas = contrast of facts; albeit + phrase; hence = therefore; whereby = by which.",
      practice: [
        "Some people prefer the city, ___ others prefer the countryside.|whereas|hence|albeit|whereby|'Whereas' contrasts two facts.",
        "The results were positive, ___ limited.|albeit|whereas|hence|notwithstanding of|'Albeit' + adjective = although.",
        "The bridge was closed for repairs; ___ the traffic jams.|hence|whereby|albeit|whereas|'Hence' + noun phrase shows a result.",
        "The company introduced a scheme ___ staff can buy shares at a discount.|whereby|whereas|hence|albeit|'Whereby' = by which.",
        "___ the objections of residents, the council approved the plan.|Notwithstanding|Albeit|Whereas|Hence|'Notwithstanding' + noun = despite."
      ]
    },
    "grammar-topic-75": {
      title: "Substitution and ellipsis: do so, so/not, leaving words out",
      objective: "Avoid repetition with do so, so, not and by omitting words naturally.",
      explanation: "English avoids repeating words. Use 'do so' to replace a verb phrase in formal style: 'Applicants who wish to apply should do so online.' Use 'so' and 'not' after verbs like think, hope, expect, suppose and be afraid: 'Will it rain?' 'I hope not.' 'Is she coming?' 'I think so.' In ellipsis, we leave out words that are clear from the context, especially after auxiliaries and 'to': 'I wanted to go, but I couldn't (go).' 'Would you like to come?' 'I'd love to.'",
      patterns: ["Do so: He promised to call, but he didn't do so.", "So/not: 'Is it true?' 'I'm afraid so.' / 'I don't think so.'", "After auxiliaries: 'Have you finished?' 'Yes, I have.'", "After to: 'Did you go?' 'No, I didn't want to.'"],
      compare: "'I hope not' (= I hope it won't happen) is more natural than 'I don't hope so'. With think, both 'I don't think so' and 'I think not' (formal) are possible.",
      tip: "Replace repeated clauses with so/not; keep the auxiliary or 'to' and drop the rest.",
      practice: [
        "'Will the shops be open on Sunday?' 'I don't think ___.'|so|it|that|not|After 'think', use 'so' to replace the clause.",
        "'Is it going to rain tomorrow?' 'I hope ___.'|not|no|don't|so not|'I hope not' = I hope it won't rain.",
        "Visitors who wish to take photos may ___ in the main hall only.|do so|so do|do it so|so|'Do so' replaces 'take photos' in formal style.",
        "'Would you like to join us for dinner?' 'I'd love ___.'|to|it|so|to do|Keep 'to' and omit the repeated verb phrase.",
        "'Has he finished the report?' 'I'm afraid ___.'|not|no|don't|so not|'I'm afraid not' = unfortunately he hasn't."
      ]
    }
  });
})(window);
