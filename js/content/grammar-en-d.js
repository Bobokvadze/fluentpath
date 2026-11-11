/**
 * GRAMMAR-EN-D.JS — English teaching layer for C2 grammar topics 76–90.
 * Same structure as grammar-en-a/b/c.js: title, objective, explanation, patterns, compare, tip,
 * practice ("question|correct|wrong1|wrong2|wrong3|explanation").
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};
  App.GrammarEN = Object.assign(App.GrammarEN || {}, {
    "grammar-topic-76": {
      title: "The subjunctive and fixed formal expressions: be that as it may, lest, suffice it to say",
      objective: "Use the mandative subjunctive and fixed subjunctive phrases in formal English.",
      explanation: "After verbs, nouns and adjectives of demand, necessity and importance (insist, recommend, propose, demand; it is essential/vital/imperative that; the requirement that), formal English uses the base form of the verb for every subject: 'It is imperative that he be informed.' 'They insisted that she resign.' The negative is 'not + base form': 'We recommend that the bill not be passed.' Some fixed phrases keep old subjunctive forms: 'be that as it may' (= even so), 'suffice it to say' (= I will only say), 'come what may' (= whatever happens), 'far be it from me to…' (= I don't want to seem to …). 'Lest' (= so that … not) is followed by the subjunctive or 'should': 'He spoke quietly lest he be overheard.'",
      patterns: ["It is essential that every candidate be interviewed.", "The board recommended that the plan not proceed.", "Be that as it may, we must meet the deadline.", "Suffice it to say, the meeting did not go well.", "She left early lest she miss the last train."],
      compare: "British English often uses 'should' instead of the subjunctive ('It is vital that he should attend'); American and formal English prefer the bare subjunctive ('that he attend'). Never add -s: 'that he attends' is informal, not subjunctive.",
      tip: "Demand/necessity + that + subject + base verb (be, have, go) — no -s, no 'to'.",
      practice: [
        "It is imperative that the report ___ submitted by Friday.|be|is|will be|being|After 'it is imperative that', use the base form 'be'.",
        "The committee insisted that he ___ immediately.|resign|resigns|resigned|to resign|Mandative subjunctive: base form for all subjects.",
        "We propose that the meeting ___ postponed.|not be|be not|isn't|not to be|Negative subjunctive: 'not' + base form.",
        "___ that as it may, the decision is final.|Be|Being|Is|It be|'Be that as it may' is a fixed subjunctive phrase meaning 'even so'.",
        "He wrote the number down lest he ___ it.|forget|forgot|would forget|forgets|'Lest' is followed by the subjunctive base form (or 'should forget')."
      ]
    },
    "grammar-topic-77": {
      title: "Full inversion after adverbials of place and direction: On the hill stood a castle",
      objective: "Invert the subject and the main verb after fronted adverbials of place and movement for literary and descriptive effect.",
      explanation: "When an adverbial of place or direction comes first, the subject and a verb of position or movement (stand, lie, sit, come, go, run, rush) can swap places: 'On the hill stood a castle.' 'Out rushed the crowd.' 'Here comes the bus.' This is full inversion: the whole verb moves before the subject, with no auxiliary 'do'. It is used to introduce new, important information at the end of the sentence. Important rule: if the subject is a pronoun, there is no inversion — 'Out they rushed', 'Here it comes', not 'Out rushed they'.",
      patterns: ["Adverbial of place + verb + noun subject: In the corner sat an old man.", "Direction + verb + noun subject: Down came the rain.", "Here/There + verb + noun: Here comes the train. There goes our chance.", "Pronoun subject (no inversion): Here it comes. Away they ran."],
      compare: "Negative inversion ('Never have I seen…') uses an auxiliary; full inversion after place adverbials does not: 'Into the room walked the minister', not 'Into the room did the minister walk'.",
      tip: "Place/direction first + verb + NOUN subject; with a pronoun keep normal order.",
      practice: [
        "At the top of the stairs ___.|stood a tall figure|a tall figure did stand|did stand a tall figure|stood it|Full inversion: verb + noun subject after a place adverbial.",
        "The door opened and in ___.|walked the director|did walk the director|the director did walk|walked he|After 'in', the verb comes before the noun subject.",
        "'Where's the bus?' 'Look, here ___!'|it comes|comes it|does it come|it does come|With a pronoun subject there is no inversion: 'here it comes'.",
        "Down the hill ___, shouting with joy.|ran the children|did the children run|the children did run|ran they|Direction adverbial + verb + noun subject.",
        "Which sentence is correct?|Away they ran.|Away ran they.|Away did they run.|Away they did ran.|Pronoun subjects keep normal word order after the adverbial."
      ]
    },
    "grammar-topic-78": {
      title: "Fronting for emphasis: Such was…, Gone are the days…, Enclosed is…",
      objective: "Move complements, participles and objects to the front of a sentence for emphasis and cohesion.",
      explanation: "Advanced writers move elements to the start of a sentence to link with what came before or to stress them. Common patterns: 'Such + be + noun phrase + that…': 'Such was the demand that tickets sold out in an hour.' Participle fronting with inversion: 'Gone are the days when phones were just phones.' 'Enclosed is a copy of my CV.' 'Attached are the minutes.' Adjective complement fronting: 'Particularly important is the final section.' Object fronting (contrastive): 'This point I cannot accept.' Fronting adds emphasis and helps the information flow from known to new.",
      patterns: ["Such was his anger that he couldn't speak.", "Gone are the days of cheap flights.", "Enclosed are the signed contracts.", "Most striking of all was the silence.", "That decision I will never understand."],
      compare: "'Such was the noise that…' (fronted, emphatic) = 'The noise was so loud that…' (neutral). With 'such' + be, the verb agrees with the noun that follows: 'Such were the results that…'",
      tip: "Such + be + noun + that; Gone/Enclosed/Attached + be + subject.",
      practice: [
        "___ the force of the storm that trees were uprooted.|Such was|So was|Such|So much was|'Such + be + noun phrase + that' fronts the complement for emphasis.",
        "___ the days when people wrote letters by hand.|Gone are|Gone is|Are gone|Have gone|Participle fronting with inversion; 'are' agrees with 'the days'.",
        "___ a copy of the invoice for your records.|Enclosed is|Enclosed it is|Is enclosed|Enclosing is|Formal letter fronting: 'Enclosed is/are…'.",
        "Such ___ the results that the trial was stopped early.|were|was|had|did|After fronted 'such', the verb agrees with the plural subject 'the results'.",
        "___ was the final chapter, which ties everything together.|Most impressive of all|The most impressive of all it|Most impressively|Impressive most|An adjective complement can be fronted, followed by be + subject."
      ]
    },
    "grammar-topic-79": {
      title: "Nominalisation: turning verbal clauses into dense noun phrases",
      objective: "Express processes and events as noun phrases to write concise academic and professional prose.",
      explanation: "Academic and professional English often turns verbs and adjectives into nouns (nominalisation): 'The government decided to cut taxes, which surprised economists' → 'The government's decision to cut taxes surprised economists.' Nominalisation packs information into noun phrases, makes ideas the subject of the sentence and allows a more objective tone. Typical changes: decide → decision, fail → failure, grow → growth, analyse → analysis, available → availability, reduce → reduction. Agents become possessives or 'by/of' phrases: 'the rapid growth of online sales', 'the reduction of emissions by 40%'. Use it with care: too many abstract nouns in a row makes text hard to read.",
      patterns: ["Verb clause → noun phrase: Prices rose sharply. → The sharp rise in prices…", "Adjective → noun: The data were not reliable. → the unreliability of the data", "Agent as possessive: The board rejected the plan. → the board's rejection of the plan", "Noun phrase as subject: The introduction of the new system led to delays."],
      compare: "Spoken style: 'Because they didn't invest enough, the project failed.' Written academic style: 'Insufficient investment led to the failure of the project.'",
      tip: "Find the action verb, change it to a noun, and make it the subject: X happened → the X-ing / the X-tion of…",
      practice: [
        "Choose the best nominalised version of 'Unemployment increased rapidly.'|the rapid increase in unemployment|the unemployment increased rapidly|the rapidly increasing of unemployment|the increase rapid unemployment|Verb 'increased' → noun 'increase'; adverb 'rapidly' → adjective 'rapid'.",
        "'The company failed to adapt' becomes: 'The company's ___ to adapt cost it its market share.'|failure|failing|fail|failed|'Fail' → noun 'failure', followed by 'to + infinitive'.",
        "'Because the data were not available, …' becomes: 'Owing to the ___ of data, …'|unavailability|unavailable|not availability|unavailableness|Adjective 'available' → noun 'availability', negative 'unavailability'.",
        "Which sentence uses nominalisation most effectively?|The introduction of tuition fees reduced applications.|They introduced tuition fees and so fewer people applied.|Tuition fees were introduced, and applying reduced.|Introducing of tuition fees made reduced applications.|The process 'introduce' becomes the subject noun 'introduction'.",
        "'Scientists analysed the samples carefully' → 'A careful ___ of the samples revealed traces of lead.'|analysis|analyse|analysing|analytic|Verb 'analyse' → noun 'analysis'; adverb 'carefully' → adjective 'careful'."
      ]
    },
    "grammar-topic-80": {
      title: "Unreal past: it's (high) time, as if / as though, suppose and imagine",
      objective: "Use past forms with present or future meaning to express unreal, hypothetical or overdue situations.",
      explanation: "Past tense forms can describe situations that are not real now. After 'It's time / It's high time / It's about time', use the past simple to say something should already be happening: 'It's high time you found a job.' After 'as if / as though', use a past form when the comparison is unreal: 'He talks as if he owned the place' (he doesn't). If the comparison may be true, a present form is possible: 'It looks as if it's going to rain.' After 'suppose / supposing / imagine' (= what if), use the past for an unlikely situation and the past perfect for an unreal past: 'Suppose you lost your passport — what would you do?' 'Imagine we had missed the plane!' 'Would rather + subject' also takes the past: 'I'd rather you didn't smoke here.'",
      patterns: ["It's (high/about) time + subject + past simple: It's time we left.", "As if + past (unreal now): She acts as if she were the boss.", "As if + past perfect (unreal past): He looked as if he had seen a ghost.", "Suppose/Imagine + past: Suppose you won the lottery…", "Would rather + subject + past: I'd rather you called first."],
      compare: "'It's time to go' (neutral suggestion) vs 'It's time we went' (stronger: we should already be going). 'He looks as if he's tired' (he may be) vs 'He talks as if he knew everything' (he doesn't).",
      tip: "Unreal now → past simple; unreal past → past perfect, even after time, as if, suppose and would rather.",
      practice: [
        "It's high time the government ___ something about housing.|did|does|will do|has done|After 'it's high time', use the past simple for present meaning.",
        "He spends money as if he ___ a millionaire, but he isn't.|were|is|will be|has been|An unreal comparison after 'as if' takes a past form ('were').",
        "She looked as though she ___ all night.|hadn't slept|didn't sleep|hasn't slept|wouldn't sleep|An unreal or past comparison about an earlier time uses the past perfect.",
        "Suppose you ___ the job — would you move to London?|were offered|are offered|will be offered|have been offered|'Suppose' + past for an imaginary present/future situation.",
        "I'd rather you ___ anyone about this yet.|didn't tell|don't tell|not tell|won't tell|'Would rather + another subject' takes the past simple."
      ]
    },
    "grammar-topic-81": {
      title: "Putative 'should': It is odd that she should say so; in case + should",
      objective: "Use 'should' to express reactions to ideas and to talk about precautions.",
      explanation: "After adjectives and nouns expressing emotion, surprise or judgement (odd, strange, surprising, natural, sad, a pity, a shame), 'should' can be used in the that-clause. It presents the event as an idea we react to, not just a fact: 'It is strange that she should say that.' 'It's a pity that you should feel this way.' The ordinary verb is also correct ('It's strange that she said that'), but 'should' sounds more formal and emotional. 'Should' is also used after 'in case' and 'if' to make a possibility seem less likely: 'Take an umbrella in case it should rain.' 'If you should need help, call me' — in formal style this inverts: 'Should you need help, call me.'",
      patterns: ["It is surprising that + subject + should + verb: It's surprising that he should resign.", "Emotion noun + that + should: It's a shame that they should argue.", "In case + should: Keep the receipt in case you should need it.", "Should + subject (formal condition): Should you have any questions, please contact us."],
      compare: "'It's odd that he's late' (a plain fact) vs 'It's odd that he should be late' (stressing our surprise at the idea). 'In case it rains' and 'in case it should rain' mean the same, but 'should' makes the event less likely.",
      tip: "Reaction adjective + that + subject + should + base verb; 'Should you…' = 'If you…' (formal).",
      practice: [
        "It's strange that he ___ forget her birthday — he never does.|should|would|must|shall|Putative 'should' after an adjective of surprise.",
        "It is only natural that parents ___ worry about their children.|should|will|must to|would to|'Should' presents the situation as an idea we judge to be natural.",
        "___ you require further information, please do not hesitate to contact us.|Should|Would|If should|Were to|Formal inverted condition: 'Should you…' = 'If you…'.",
        "Write down my number in case you ___ get lost.|should|would|will|shall to|'In case + should' makes the possibility sound less likely.",
        "It's a great pity that the talks ___ have failed.|should|must|will|would to|'Should have + past participle' after an emotional noun refers to a past event."
      ]
    },
    "grammar-topic-82": {
      title: "Emphatic structures: what little…, the last thing…, not until… that, such is…",
      objective: "Use advanced emphatic patterns to highlight quantity, contrast and timing.",
      explanation: "C2 English has several fixed patterns for emphasis. 'What little / what few + noun' means 'the small amount that': 'What little money he had, he gave away.' 'The last thing + clause' means 'something very unwanted or unlikely': 'The last thing I wanted was an argument.' 'It was not until… that…' stresses that something happened only at a late point: 'It was not until midnight that the results were announced.' 'Not until' can also start a sentence with inversion: 'Not until midnight were the results announced.' 'Such is / Such was + noun + that' expresses an extreme degree: 'Such is the pressure that many leave within a year.'",
      patterns: ["What little + uncountable noun: What little time we have left should be used well.", "What few + plural noun: What few friends she had stood by her.", "The last thing (that) + clause + be: The last thing he expected was praise.", "It was not until X that Y: It wasn't until I left home that I learned to cook.", "Not until X + auxiliary + subject: Not until I left home did I learn to cook."],
      compare: "'It was not until 2010 that…' (cleft, no inversion) vs 'Not until 2010 did…' (inversion in the main clause). Do not combine them: not 'Not until 2010 that did…'.",
      tip: "what little/few = the small amount that; not until X did Y = Y happened only at X.",
      practice: [
        "___ furniture they owned was destroyed in the fire.|What little|What few|How little|Which little|'What little' + uncountable noun = the small amount of … that.",
        "___ supporters he had left him after the scandal.|What few|What little|How few|The little|'What few' + plural noun.",
        "It was not until she read the letter ___ she understood.|that|when|then|so|The cleft pattern is 'It was not until … that …'.",
        "Not until the final whistle ___ the fans relax.|did|had|were|do|After fronted 'Not until…', the main clause inverts: did + subject + verb.",
        "The last thing I need right now ___ another meeting.|is|are|be|it is|'The last thing (that) I need' is the subject, followed by 'is'."
      ]
    },
    "grammar-topic-83": {
      title: "Ellipsis: omitting repeated verbs, conversational and parallel ellipsis",
      objective: "Leave out predictable words naturally in conversation and in formal parallel structures.",
      explanation: "Ellipsis means leaving out words the listener can recover. In coordinated clauses, a repeated verb can be dropped (gapping): 'Anna ordered fish, and Tom (ordered) pasta.' After auxiliaries and modals, the main verb phrase is omitted: 'She said she would help, and she did (help).' In conversation, subjects and auxiliaries are often dropped at the start: '(Have you) Seen Mark?' '(I) Don't know.' '(Are you) Coming?' In formal writing, repeated subjects, auxiliaries and prepositions can be left out in parallel structures: 'The data were collected, (were) analysed and (were) published.' The omitted words must be exactly recoverable; otherwise the sentence becomes unclear.",
      patterns: ["Gapping: I chose the red one, and my sister the blue one.", "After auxiliary: 'Can you swim?' 'Yes, I can.'", "Conversational: Sounds good. Told you so. Want a coffee?", "Formal parallel: Applicants must be over 18 and (must) hold a valid licence."],
      compare: "Ellipsis is different from substitution: ellipsis leaves a gap ('I'd love to'), substitution replaces words ('I think so', 'do so').",
      tip: "Drop only what is identical and recoverable; keep the auxiliary or 'to' that carries tense and meaning.",
      practice: [
        "Which sentence uses ellipsis correctly?|Some students chose history, others geography.|Some students chose history, others chosen geography.|Some students chose history, others did choose.|Some students history chose, others geography.|Gapping omits the repeated verb 'chose' in the second clause.",
        "'Have you ever been to Japan?' 'No, but I'd love ___.'|to|to go to|it|that|Keep 'to' and omit the repeated verb phrase.",
        "He said he wouldn't come, but in the end he ___.|did|came it|did come it|done|After an auxiliary, the main verb phrase can be omitted.",
        "In casual speech, 'Do you want a lift?' is often shortened to:|Want a lift?|You a lift?|Do want lift?|Wanting lift?|Conversational ellipsis drops the auxiliary and subject.",
        "The samples were collected, ___ and stored at -20°C.|labelled|were labelled being|being were labelled|they labelled|In parallel structures the repeated auxiliary 'were' is omitted."
      ]
    },
    "grammar-topic-84": {
      title: "Complex prepositions: with a view to, by virtue of, in light of, on the grounds that",
      objective: "Use multi-word prepositions and conjunctions precisely in formal and professional writing.",
      explanation: "Formal English uses complex prepositions to express purpose, reason and basis. Purpose: 'with a view to + -ing' ('They bought the land with a view to building houses'); 'with the aim of + -ing'; 'for the purpose of + -ing'. Reason/basis: 'by virtue of + noun' (because of a quality or right: 'She was chosen by virtue of her experience'); 'in light of / in the light of + noun' (considering new information: 'In light of recent events, the trip is cancelled'); 'on the grounds of + noun' and 'on the grounds that + clause' (official reason: 'The claim was rejected on the grounds that it was late'); 'owing to / on account of + noun'. Note the grammar: after 'to' in 'with a view to', use -ing, not the infinitive.",
      patterns: ["with a view to + -ing: with a view to expanding abroad", "by virtue of + noun: by virtue of his position", "in light of + noun: in light of the new evidence", "on the grounds that + clause: on the grounds that it was unsafe", "on the grounds of + noun: on the grounds of cost"],
      compare: "'On the grounds of cost' (+ noun) vs 'on the grounds that it was too expensive' (+ clause). 'Due to' is common, but in careful style 'owing to' is preferred after a full clause.",
      tip: "Purpose → with a view to + -ing; reason → by virtue of / in light of / on the grounds of + noun, on the grounds that + clause.",
      practice: [
        "They are studying the market ___ opening a branch in Tbilisi.|with a view to|in view to|with a view of|by virtue of|'With a view to' + -ing expresses purpose.",
        "She was given the role ___ her outstanding track record.|by virtue of|with a view to|on the grounds that|in case of|'By virtue of' + noun = because of (a quality).",
        "___ the new evidence, the case will be reopened.|In light of|With a view to|On the grounds that|By the virtue|'In light of' + noun = considering.",
        "The application was refused on the grounds ___ it was incomplete.|that|of|to|for|'On the grounds that' is followed by a clause.",
        "The trip was cancelled on the grounds ___ safety.|of|that|for|to|'On the grounds of' + noun."
      ]
    },
    "grammar-topic-85": {
      title: "Formal relative structures: whereby, wherein, quantifier + of whom / of which",
      objective: "Use formal relative adverbs and quantified relative clauses in academic and legal writing.",
      explanation: "Formal English uses relative adverbs such as 'whereby' (= by which / through which: 'a system whereby customers earn points'), 'wherein' (= in which: 'the clause wherein the terms are defined'), 'whereupon' (= after which: 'He insulted the judge, whereupon he was removed'). Non-defining relative clauses can begin with a quantifier + of whom (people) / of which (things): 'The company employs 300 people, most of whom work remotely.' 'He wrote ten novels, two of which became films.' Other patterns: 'none of whom', 'all of which', 'the majority of whom', 'each of which', 'neither of which'. A preposition can also come before 'which/whom': 'the extent to which', 'the person to whom it was addressed'.",
      patterns: ["Quantifier + of whom: Forty people applied, few of whom were qualified.", "Quantifier + of which: She offered two solutions, neither of which worked.", "whereby: a procedure whereby disputes are settled by arbitration", "Preposition + which: the degree to which students participate"],
      compare: "'most of them' needs a new sentence or 'and': 'He has many friends, and most of them live abroad'. In one clause, use 'most of whom': 'He has many friends, most of whom live abroad.'",
      tip: "Comma + quantifier + of whom/which links a new clause; never 'of who' or 'of them' in a relative clause.",
      practice: [
        "The firm has 200 employees, most of ___ are graduates.|whom|who|them|which|After 'most of' in a relative clause, use 'whom' for people.",
        "We tested three prototypes, none of ___ met the standard.|which|whom|them|that|'None of which' for things in a non-defining relative clause.",
        "The contract introduced a mechanism ___ prices are reviewed annually.|whereby|whereupon|wherever|whereas|'Whereby' = by which.",
        "This study examines the extent ___ social media shapes opinion.|to which|which|in which to|to what|'The extent to which' is a fixed preposition + which pattern.",
        "The speaker criticised the chairman, ___ the meeting descended into chaos.|whereupon|whereby|wherein|whereas|'Whereupon' = immediately after which."
      ]
    },
    "grammar-topic-86": {
      title: "Degrees of certainty and hedging: tends to suggest, may well be, could conceivably, there is every likelihood",
      objective: "Express precise degrees of probability and caution in academic and professional argument.",
      explanation: "Expert writers rarely claim absolute certainty; they hedge and grade probability. Strong probability: 'There is every likelihood that…', 'X is bound to…', 'X may well…' (= it is quite likely), 'In all probability…'. Medium: 'X is likely to…', 'The evidence tends to suggest…', 'It would appear that…'. Weak: 'X could conceivably…', 'There is an outside chance that…', 'It is not inconceivable that…' (double negative = it is possible). Distancing verbs: 'seem', 'appear', 'tend to', 'indicate', 'suggest'. Combining hedges ('might possibly perhaps') is excessive; choose one precise expression.",
      patterns: ["Strong: There is every likelihood that rates will rise.", "Fairly strong: The figures may well be revised.", "Cautious: The data tend to suggest a link.", "Weak: The delay could conceivably affect sales.", "Distancing: It would appear that the system failed."],
      compare: "'may well' (quite likely) is stronger than 'may' (possible). 'It is not inconceivable' is weaker than 'It is likely'.",
      tip: "Match the hedge to the evidence: every likelihood > may well > tends to suggest > could conceivably.",
      practice: [
        "Which expression shows the STRONGEST probability?|There is every likelihood that|It could conceivably be that|It is not inconceivable that|There is an outside chance that|'There is every likelihood' signals very high probability.",
        "Prices ___ rise further, given the current shortage. (= it is quite likely)|may well|may good|well may to|might as|'May well' = it is quite likely.",
        "The results ___ suggest a link between diet and mood, though more research is needed.|tend to|tend|are tending|tended to be|'Tend to suggest' is a cautious academic hedge.",
        "It is not ___ that the merger will collapse. (= it is possible)|inconceivable|conceivable|unconceivable|inconceivably|The double negative 'not inconceivable' means 'possible'.",
        "Which sentence is the most appropriately hedged academic claim?|It would appear that the policy reduced crime.|The policy definitely totally reduced crime.|The policy might possibly perhaps reduce crime.|The policy reduced crime, obviously.|One precise hedge ('It would appear') is better than none or several."
      ]
    },
    "grammar-topic-87": {
      title: "Emphatic do and affirmative emphasis: She did warn us! Do sit down.",
      objective: "Use auxiliary 'do' in affirmative sentences for contrast, insistence and polite emphasis.",
      explanation: "In affirmative sentences, adding stressed 'do/does/did' + base verb emphasises that something is true, especially to contradict or correct: 'I did lock the door — I'm sure!' 'She does work hard, whatever they say.' It can also concede a point before a contrast: 'He did apologise, but the damage was done.' In imperatives, 'Do + verb' sounds warm and polite or insistent: 'Do sit down.' 'Do help yourself.' 'Do be careful!' Formal apologies and thanks use it too: 'I do apologise for the delay.' With 'be' in the imperative only: 'Do be quiet.' The main verb is always the base form after emphatic do: 'She did call', not 'She did called'.",
      patterns: ["Contrast/correction: 'You didn't call.' 'I did call — twice!'", "Concession: It does look expensive, but it's worth it.", "Polite imperative: Do come in. Do have another biscuit.", "Formal: We do appreciate your patience."],
      compare: "'I locked the door' (neutral statement) vs 'I did lock the door' (insisting against doubt). Emphatic 'do' is used only where there is no other auxiliary: 'I have finished' becomes 'I HAVE finished' (stress), not 'I do have finished'.",
      tip: "do/does/did + BASE verb, stressed in speech; with other auxiliaries just stress the auxiliary.",
      practice: [
        "'You never listen to me!' 'That's not fair — I ___ listen!'|do|am|did listened|does|Emphatic 'do' + base form contradicts the accusation.",
        "She ___ a warning, but nobody paid attention.|did give|did gave|does gave|done give|Past emphatic: 'did' + base form.",
        "Please, ___ yourself to some cake.|do help|do helping|does help|did help|Polite imperative: 'Do + base verb'.",
        "We ___ for any inconvenience this may have caused.|do apologise|does apologise|are apologise|do apologising|Formal emphatic apology: 'We do apologise'.",
        "Which sentence uses emphatic do correctly?|He does seem tired today.|He does seems tired today.|He do seem tired today.|He does seeming tired today.|Third person 'does' + base form 'seem'."
      ]
    },
    "grammar-topic-88": {
      title: "Noun + that-clause apposition and resumptive structures: the belief that…",
      objective: "Use noun complement clauses and summarising nouns to build cohesive, precise arguments.",
      explanation: "Abstract nouns such as belief, fact, idea, claim, notion, assumption, view, evidence, possibility and danger can be followed by a that-clause that explains their content (apposition): 'The belief that money brings happiness is widespread.' Here 'that' cannot be replaced by 'which', because the clause states what the belief is. Compare a relative clause: 'The belief that/which he expressed was unpopular' (the clause identifies which belief). Resumptive or summarising nouns refer back to a previous idea and push the argument forward: 'Prices rose by 20%. This increase…', '…a trend that…'. Common summarising nouns: this problem, this approach, such a view, this development, the former/the latter.",
      patterns: ["Noun + that-clause: The fact that he lied changes everything.", "Noun + that-clause as object: We reject the claim that the test was unfair.", "Summarising noun: Unemployment fell sharply. This decline…", "Such + noun: Such an approach ignores local needs."],
      compare: "Apposition: 'the idea that we should wait' (= the idea is: we should wait; 'which' impossible). Relative: 'the idea that she suggested' (= she suggested the idea; 'which' possible).",
      tip: "Noun + that + full clause = the content of the noun; refer back with 'this + summarising noun'.",
      practice: [
        "The ___ that the earth is flat has been disproved for centuries.|notion|notion which|notional|noting|'The notion that…' — an abstract noun followed by a content clause.",
        "Which sentence contains an appositive that-clause?|There is evidence that the drug works.|The drug that he took worked.|That drug works well.|He said that the drug works.|'Evidence that the drug works' states the content of the evidence.",
        "In 'the fact ___ she resigned surprised us', which word is correct?|that|which|what|whom|Appositive clauses after 'the fact' use 'that', never 'which'.",
        "House prices doubled in five years. ___ has made home ownership difficult for young people.|This increase|This increasing|It increase|Which increase|A summarising noun phrase refers back to the previous sentence.",
        "We challenge the ___ that older workers are less productive.|assumption|assume|assuming|assumed|Noun 'assumption' + content clause."
      ]
    },
    "grammar-topic-89": {
      title: "Anticipatory it with verb phrases: take it for granted that, see to it that, owe it to",
      objective: "Use object 'it' that points forward to a clause in fixed verb phrases.",
      explanation: "In some verb patterns, 'it' appears as an object that anticipates a following clause. 'Take it for granted that…' (assume without question): 'We take it for granted that water is safe to drink.' 'See to it that…' (make sure): 'Please see to it that the doors are locked.' 'Owe it to someone to…' (have a duty): 'You owe it to your team to be honest.' 'Leave it to someone to…': 'Leave it to me to organise the party.' 'Make it clear that…', 'find it hard to…', 'consider it essential that…', 'I'd appreciate it if…'. 'There is no denying that…' / 'There is no point (in) + -ing' are related fixed expressions.",
      patterns: ["take it for granted that + clause", "see to it that + clause (often present tense for future)", "owe it to + person + to + verb", "I'd appreciate it if you could…", "There is no denying that + clause"],
      compare: "'I take it that you agree' (= I assume) vs 'I take it for granted that you agree' (= I assume without thinking about it). Without 'it', these patterns are wrong: not 'I'd appreciate if you…'.",
      tip: "Keep the 'it': see to it that, owe it to, appreciate it if, make it clear that.",
      practice: [
        "As manager, you must see ___ that all staff complete the training.|to it|it|to|it to|The fixed phrase is 'see to it that…'.",
        "Many people take it ___ granted that the internet will always be free.|for|as|to|by|'Take it for granted that…' = assume without questioning.",
        "You owe ___ yourself to take a proper holiday.|it to|to|it for|for it|'Owe it to someone to do something' = have a duty to.",
        "I would appreciate ___ if you could reply by Monday.|it|that|this|so|The pattern is 'appreciate it if…'; the 'it' is required.",
        "There is no ___ that the campaign has been a success.|denying|deny|denial of|to deny|Fixed expression: 'There is no denying that…'."
      ]
    },
    "grammar-topic-90": {
      title: "Parallel structure, correlative conjunctions and modifier placement",
      objective: "Write balanced, unambiguous sentences with parallel forms, correlatives and correctly placed modifiers.",
      explanation: "Parallelism means that items joined by and, or, but or correlatives (both… and, either… or, neither… nor, not only… but also, whether… or) have the same grammatical form: 'She likes swimming, cycling and running' (not '…and to run'). With correlatives, the words after each part must match: 'The plan is not only cheaper but also faster', 'You can either call or email' (not 'either call or you can email'). After fronted 'Not only', invert: 'Not only did they win, but they also broke the record.' Modifiers must sit next to what they modify: 'Walking home, I saw an accident' (I was walking); 'Walking home, an accident happened' is a dangling modifier. Place 'only' before the word it limits: 'She only eats fish' vs 'Only she eats fish'.",
      patterns: ["Parallel list: to plan, to organise and to deliver", "both + X + and + X: both efficient and reliable", "neither + X + nor + X: neither agreed nor refused", "Not only + inversion: Not only did prices rise, but wages also fell.", "Clear modifier: Having finished the report, she went home."],
      compare: "'Having reviewed the data, the conclusion was clear' (dangling: the conclusion didn't review). Correct: 'Having reviewed the data, we reached a clear conclusion.'",
      tip: "Match the forms on both sides; put the doer right after an -ing or -ed opening phrase.",
      practice: [
        "The role involves managing budgets, leading a team and ___ clients.|advising|to advise|advice|advises|Items in a list must be parallel (-ing, -ing, -ing).",
        "The new system is not only faster ___ more secure.|but also|and also|but|as well|The correlative is 'not only… but also…'.",
        "Not only ___ the deadline, but they also exceeded the targets.|did they meet|they met|they did meet|met they|After fronted 'Not only', use auxiliary inversion.",
        "Which sentence avoids a dangling modifier?|Having read the report, the board approved the plan.|Having read the report, the plan was approved.|Having read the report, approval was given.|Having read the report, the plan got approved by itself.|The subject right after the -ing phrase ('the board') must be the one who read.",
        "You can ___ pay online or at the reception desk.|either|neither|both|whether|'Either… or' offers two alternatives with parallel forms."
      ]
    }
  });
})(window);
