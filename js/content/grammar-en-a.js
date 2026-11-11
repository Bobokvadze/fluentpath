/**
 * GRAMMAR-EN-A.JS — English teaching layer for grammar topics 1–30 (A1–A2).
 * Keyed by grammar topic id. Practice format: "question|correct|wrong1|wrong2|wrong3|explanation".
 * Translations: App.I18n.ka.grammar[id] (title, objective, explanation, compare).
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};
  App.GrammarEN = App.GrammarEN || {};
  Object.assign(App.GrammarEN, {
    "grammar-topic-1": {
      title: "The verb 'be' in the present (am, is, are)",
      objective: "Describe people, things and places using am, is and are in positive, negative and question forms.",
      explanation: "Every English sentence needs a verb. When there is no action and we want to say who someone is, what something is like or where it is, we use the verb 'be'. Use 'am' with I, 'is' with he, she and it (and singular nouns), and 'are' with you, we and they (and plural nouns). In speech we usually use contractions: I'm, she's, they're.",
      patterns: ["+ I am a student. / She is tired. / They are at home.", "− I'm not late. / He isn't here. / We aren't ready.", "? Are you cold? — Yes, I am. / No, I'm not.", "? Is it far? — Yes, it is. / No, it isn't."],
      compare: "Don't leave out 'be': say 'She is happy', not 'She happy'. In short answers, don't contract the positive form: 'Yes, I am' (not 'Yes, I'm').",
      tip: "Choose the form by the subject: I → am; he/she/it → is; you/we/they → are.",
      practice: [
        "My parents ___ teachers.|are|is|am|be|'Parents' is plural, so we use 'are'.",
        "___ your brother at home?|Is|Are|Am|Be|'Your brother' is singular (he), so the question starts with 'Is'.",
        "I ___ not hungry, thanks.|am|is|are|be|With 'I' we always use 'am'.",
        "'Are you from Spain?' 'No, I ___.'|'m not|am not|isn't|aren't|The negative short answer with I is 'No, I'm not'.",
        "Which sentence is correct?|The film is very long.|The film very long.|The film are very long.|The film be very long.|A sentence needs a verb; 'film' is singular, so 'is'."
      ]
    },
    "grammar-topic-2": {
      title: "Subject, object and possessive pronouns",
      objective: "Use the correct pronoun for the subject, the object and possession (I/me/my/mine).",
      explanation: "Subject pronouns (I, you, he, she, it, we, they) come before the verb and do the action. Object pronouns (me, you, him, her, it, us, them) come after a verb or a preposition. Possessive adjectives (my, your, his, her, its, our, their) go before a noun, while possessive pronouns (mine, yours, his, hers, ours, theirs) replace the noun.",
      patterns: ["Subject: She works here.", "Object: I know her. / Come with us.", "Possessive adjective: This is her bag.", "Possessive pronoun: The bag is hers."],
      compare: "'Its' (possessive) has no apostrophe: 'The dog wagged its tail.' 'It's' means 'it is'. Possessive pronouns never take a noun: 'This is mine', not 'This is mine book'.",
      tip: "Ask yourself: is it doing the action (subject), receiving it (object), or showing who owns something (possessive)?",
      practice: [
        "Can you help ___ with this box?|me|I|my|mine|After a verb we need an object pronoun: help me.",
        "This isn't my phone. Mine is black. Is it ___?|yours|your|you|yours phone|A possessive pronoun replaces the noun: yours = your phone.",
        "The company changed ___ logo last year.|its|it's|their's|it|'Its' is the possessive form; 'it's' means 'it is'.",
        "___ and I are going to the cinema.|Maria|Me|Her|Him|The subject before the verb must be a name or a subject pronoun (she), not me/her.",
        "Give the keys to ___. They need them.|them|they|their|theirs|After the preposition 'to' we use an object pronoun."
      ]
    },
    "grammar-topic-3": {
      title: "Singular and plural nouns",
      objective: "Form regular and irregular plurals and use them with the right verb.",
      explanation: "Most nouns add -s to make the plural (book → books). Add -es after -s, -sh, -ch, -x and many words ending in -o (bus → buses, watch → watches, potato → potatoes). Nouns ending in consonant + -y change to -ies (city → cities). Some common nouns are irregular: man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth, mouse → mice.",
      patterns: ["+s: a car → two cars", "+es: a box → three boxes", "-y → -ies: a baby → babies (but a day → days)", "irregular: a child → children; a person → people"],
      compare: "Some nouns look singular but are plural ('people', 'police'), and some end in -s but are singular ('news', 'maths'): 'The news is good.'",
      tip: "Check the last letters: -s/-sh/-ch/-x → -es; consonant + y → -ies; learn irregular plurals as pairs.",
      practice: [
        "There are three ___ in my class from Japan.|women|womans|woman|womens|'Woman' has an irregular plural: women.",
        "I visited two ___ in Italy last summer.|cities|citys|cityes|city|Consonant + y changes to -ies: city → cities.",
        "Brush your ___ before you go to bed.|teeth|tooths|teeths|tooth|'Tooth' is irregular: teeth.",
        "How many ___ are coming to the party?|people|peoples|person|persons|'People' is the normal plural of 'person'.",
        "The news ___ very surprising today.|is|are|were|be|'News' looks plural but is uncountable and takes a singular verb."
      ]
    },
    "grammar-topic-4": {
      title: "Articles: a, an and the",
      objective: "Choose between a/an, the and no article in common situations.",
      explanation: "Use 'a' or 'an' with a singular countable noun when you mention it for the first time or when it is one of many: 'I've got a cat.' Use 'an' before a vowel sound (an apple, an hour). Use 'the' when the listener knows which thing you mean, because it was mentioned before, because there is only one, or because the situation makes it clear: 'The cat is black.' Don't use an article with plural or uncountable nouns when you speak in general: 'Cats are clever.'",
      patterns: ["First mention: I saw a film. → The film was great.", "Only one: the sun, the president, the internet", "General plural: Dogs are friendly.", "Jobs: She's a doctor."],
      compare: "'A/an' depends on sound, not spelling: 'a university' (you-), 'an hour' (silent h). We say 'go to school / to bed / home' without 'the' when we mean the usual purpose.",
      tip: "New or one of many → a/an. Known or unique → the. General plural or uncountable → no article.",
      practice: [
        "She works as ___ engineer.|an|a|the|—|Before the vowel sound /e/ we use 'an'; jobs take a/an.",
        "We stayed in a hotel. ___ hotel had a lovely pool.|The|A|An|—|The hotel was already mentioned, so we use 'the'.",
        "___ is very bright today. Wear sunglasses.|The sun|Sun|A sun|An sun|There is only one sun, so we use 'the'.",
        "I love ___ music, especially jazz.|—|the|a|an|We use no article for uncountable nouns in general.",
        "It takes ___ hour to get there.|an|a|the|—|'Hour' starts with a vowel sound (the h is silent), so 'an hour'."
      ]
    },
    "grammar-topic-5": {
      title: "This, that, these, those",
      objective: "Point to things near and far using demonstratives as adjectives and pronouns.",
      explanation: "Use 'this' (singular) and 'these' (plural) for things near you, and 'that' (singular) and 'those' (plural) for things further away. They can go before a noun (this book) or stand alone (This is my sister). 'This' can also refer to the present moment (this week), and 'that' to something already said (That's a good idea).",
      patterns: ["Near, singular: This coffee is hot.", "Near, plural: These shoes are new.", "Far, singular: Who is that man?", "Far, plural: Those houses are old."],
      compare: "Match the number: 'these people' (people is plural), not 'this people'. On the phone, say 'This is Anna' to introduce yourself.",
      tip: "Near → this/these; far → that/those; plural noun → these/those.",
      practice: [
        "___ boots by the door are mine.|Those|That|This|Them|'Boots' is plural and further away: those.",
        "Is ___ your pen here on my desk?|this|these|those|them|Singular and near: this.",
        "___ people in the photo are my cousins.|These|This|That|Them|'People' is plural, so we need these or those.",
        "'I've just passed my exam!' '___ great news!'|That's|This are|These are|Those is|We use 'that' to react to something someone has just said.",
        "Hello, ___ is Giorgi. Can I speak to Nino?|this|that|these|it|On the phone we introduce ourselves with 'This is...'."
      ]
    },
    "grammar-topic-6": {
      title: "There is / there are and prepositions of place",
      objective: "Say what exists in a place and where things are (in, on, under, next to, between, opposite).",
      explanation: "Use 'there is' with a singular or uncountable noun and 'there are' with a plural noun to say that something exists. Negative: there isn't / there aren't. Question: Is there...? Are there...? Combine it with prepositions of place to describe a room or a town: in, on, under, behind, in front of, next to, between, opposite.",
      patterns: ["+ There is a bank near my house. / There are two chairs.", "− There isn't any milk. / There aren't any shops.", "? Is there a lift? — Yes, there is.", "Place: The cat is under the table. The café is opposite the station."],
      compare: "'There is/are' introduces something new; 'it is' describes something already known: 'There's a restaurant here. It's very good.' 'Between' is for two things; 'among' for more than two.",
      tip: "Singular or uncountable → there is; plural → there are. Use 'any' in negatives and questions.",
      practice: [
        "___ a lot of traffic in the city centre today.|There is|There are|It is|They are|'Traffic' is uncountable, so 'there is'.",
        "___ any good restaurants near here?|Are there|Is there|There are|Is it|'Restaurants' is plural, so the question is 'Are there...?'",
        "The pharmacy is ___ the bank and the post office.|between|among|next|opposite to|'Between' is used for something with one thing on each side.",
        "There's a new café on my street. ___ really cosy.|It's|There's|They're|Its|After introducing something with 'there is', we refer to it with 'it'.",
        "Your keys are ___ the table, next to the lamp.|on|in|at|under of|Something resting on a surface is 'on' it."
      ]
    },
    "grammar-topic-7": {
      title: "Have got and possessive 's",
      objective: "Talk about possessions and family with have got / has got and show ownership with 's.",
      explanation: "'Have got' (has got for he/she/it) is common in British English to talk about possessions, family and illnesses: 'I've got two sisters.' The negative is haven't got / hasn't got, and the question puts have/has first: 'Have you got a car?' To show that something belongs to someone, add 's to a singular noun (my father's car) and only an apostrophe to a regular plural ending in -s (my parents' house).",
      patterns: ["+ She's got blue eyes.", "− We haven't got a garden.", "? Has he got any brothers? — Yes, he has.", "Possession: Tom's bike / the children's toys / the students' books"],
      compare: "'Have got' is for possession, not actions: say 'I have breakfast at eight', not 'I've got breakfast at eight'. With 'have' (no got) use do/does: 'Do you have a car?'",
      tip: "he/she/it → has got; others → have got. Plural -s owner → s'; irregular plural (children) → 's.",
      practice: [
        "My sister ___ a new laptop.|has got|have got|has|got has|With he/she/it we use 'has got'.",
        "___ you got any pets?|Have|Has|Do|Are|Questions with 'have got' start with Have/Has.",
        "This is my ___ car. He drives it every day.|brother's|brothers|brothers'|brother|One brother owns the car: brother's.",
        "The ___ room is upstairs; my two sons share it.|boys'|boy's|boys|boyses|Two boys (regular plural in -s) → boys'.",
        "I usually ___ lunch at one o'clock.|have|have got|has got|am having got|For actions like eating we use 'have', not 'have got'."
      ]
    },
    "grammar-topic-8": {
      title: "Present simple: positive forms and spelling",
      objective: "Use the present simple for habits, routines and facts, adding -s/-es correctly with he/she/it.",
      explanation: "We use the present simple for things that are always true, habits and routines: 'Water boils at 100°C.' 'I get up at seven.' The verb stays in its base form except with he, she and it, where we add -s. Add -es after -s, -sh, -ch, -x and -o (watches, goes), and change consonant + y to -ies (study → studies). 'Have' becomes 'has'.",
      patterns: ["I/you/we/they work in an office.", "He/she/it works in an office.", "-es: she goes, he watches, it fixes", "-ies: he studies (but she plays)"],
      compare: "Use the present simple for routines ('I usually walk'), but the present continuous for actions happening now ('I'm walking now').",
      tip: "Third person singular (he/she/it, or a singular noun) needs -s or -es.",
      practice: [
        "My brother ___ in a hospital.|works|work|working|is work|With 'my brother' (he) the verb takes -s.",
        "She ___ English every evening.|studies|studys|study|studyes|Consonant + y → -ies: studies.",
        "The shop ___ at nine o'clock.|opens|open|opening|is open at|A shop is 'it', so the verb takes -s.",
        "My parents ___ in a village near Telavi.|live|lives|living|is living|'Parents' is plural (they), so no -s.",
        "He ___ TV after dinner.|watches|watchs|watch|watchies|After -ch we add -es: watches."
      ]
    },
    "grammar-topic-9": {
      title: "Present simple: negatives and questions",
      objective: "Make negatives and questions in the present simple with do/does and give short answers.",
      explanation: "To make the present simple negative, use don't (do not) or doesn't (does not) + the base verb. For questions, put do or does before the subject, followed by the base verb. With he, she and it we use does/doesn't, and the main verb loses its -s: 'She doesn't like coffee', not 'She doesn't likes coffee'. The verb 'be' is different: it doesn't use do.",
      patterns: ["− I don't eat meat. / He doesn't drive.", "? Do you speak French? — Yes, I do. / No, I don't.", "? Does she work here? — Yes, she does.", "Wh-: Where do they live? What does he do?"],
      compare: "With 'be' we don't use do: 'Are you tired?' (not 'Do you be tired?'). The -s goes on does, not on the verb: 'Does he play?'",
      tip: "he/she/it → does/doesn't + base verb (no -s); I/you/we/they → do/don't.",
      practice: [
        "My father ___ coffee in the evening.|doesn't drink|don't drink|doesn't drinks|not drinks|He → doesn't + base verb (no -s).",
        "___ your sister live in Tbilisi?|Does|Do|Is|Has|With 'your sister' (she) we use Does.",
        "Where ___ you usually go on holiday?|do|does|are|is|Wh-question with 'you': do + subject + verb.",
        "'Does he speak Georgian?' 'Yes, he ___.'|does|do|speaks|is|The short answer repeats the auxiliary: Yes, he does.",
        "Which question is correct?|What does she do?|What does she does?|What do she do?|What she does?|Does + subject + base verb: What does she do?"
      ]
    },
    "grammar-topic-10": {
      title: "Adverbs of frequency and word order",
      objective: "Say how often you do things and place frequency adverbs correctly.",
      explanation: "Adverbs of frequency tell us how often something happens: always, usually, often, sometimes, rarely, never. They normally go before the main verb but after the verb 'be' and after auxiliaries like can or have. Longer expressions such as 'every day', 'once a week' or 'twice a month' usually go at the end of the sentence.",
      patterns: ["Before the main verb: I usually walk to work.", "After be: She is always late.", "After auxiliaries: I have never been to Paris.", "End position: We go swimming twice a week."],
      compare: "'Never' is already negative: say 'I never eat meat', not 'I don't never eat meat'. 'Sometimes' can also start a sentence: 'Sometimes I cook.'",
      tip: "Adverb before the main verb, but after 'be'.",
      practice: [
        "Which word order is correct?|He is always tired after work.|He always is tired after work.|Always he is tired after work.|He is tired always after work.|With 'be', the adverb comes after it: is always.",
        "Which word order is correct?|I often play tennis at the weekend.|I play often tennis at the weekend.|Often I play at the weekend tennis.|I play tennis often at weekend the.|The adverb goes before the main verb 'play'.",
        "She goes to the gym ___.|three times a week|three times week|a week three times|every times|Expressions like 'three times a week' go at the end.",
        "I ___ coffee. I don't like it.|never drink|don't never drink|drink never|never drinks|'Never' is negative on its own and goes before the verb.",
        "We ___ go out on Fridays — maybe once a month.|rarely|always|usually|often|'Once a month' means not often: rarely."
      ]
    },
    "grammar-topic-11": {
      title: "Question words",
      objective: "Ask for information with who, what, where, when, why, how and their combinations.",
      explanation: "Wh-questions ask for specific information. The usual order is: question word + auxiliary (do/does/is/can...) + subject + verb. Useful combinations include how much (uncountable), how many (countable), how often, how long, how old, what time, which (a choice from a limited group) and whose (possession). When 'who' or 'what' is the subject, we don't use do/does: 'Who lives here?'",
      patterns: ["Where do you work?", "How many brothers have you got?", "What time does the film start?", "Subject question: Who called you? (no did)"],
      compare: "'What' is open; 'which' chooses from a known set: 'Which colour do you want — red or blue?' Compare 'Who did you call?' (object) with 'Who called you?' (subject).",
      tip: "Question word + auxiliary + subject + verb — except when who/what is the subject.",
      practice: [
        "___ sugar do you take in your coffee?|How much|How many|How often|What many|'Sugar' is uncountable, so 'how much'.",
        "___ do you go to the dentist? — Twice a year.|How often|How long|How much|When often|We ask about frequency with 'how often'.",
        "___ bag is this? — It's Ana's.|Whose|Who|Who's|Which's|'Whose' asks about the owner.",
        "Who ___ the window? It's cold in here.|opened|did open|did opened|opens did|'Who' is the subject, so no 'did': Who opened...?",
        "___ do you prefer, tea or coffee?|Which|What|Who|How|For a choice between known options we use 'which'."
      ]
    },
    "grammar-topic-12": {
      title: "Can and can't for ability and permission",
      objective: "Talk about ability, permission and requests with can and could.",
      explanation: "'Can' is followed by the base verb without 'to' and has the same form for all subjects: I can, she can. Use it for ability (I can swim), permission (You can sit here) and requests (Can you help me?). The negative is can't (cannot). 'Could' is the past of 'can' for ability and a more polite way to make requests: 'Could you open the window, please?'",
      patterns: ["+ She can speak three languages.", "− I can't drive.", "? Can you play the guitar? — Yes, I can.", "Polite request: Could I use your phone?"],
      compare: "Don't add 'to' or -s: 'He can swim', not 'He can to swim' or 'He cans swim'. 'May I...?' is a more formal way to ask permission.",
      tip: "can/can't + base verb, same form for everyone.",
      practice: [
        "My grandmother ___ use a smartphone very well.|can|cans|can to|is can|'Can' has the same form for all subjects.",
        "Sorry, I ___ come tonight. I have to work.|can't|don't can|not can|can't to|The negative of can is can't + base verb.",
        "___ you speak more slowly, please?|Could|Can to|Do|Are|'Could' makes a polite request.",
        "When she was five, she ___ read.|could|can|could to|cans|The past of 'can' for ability is 'could'.",
        "Which sentence is correct?|He can play the piano.|He can to play the piano.|He cans play the piano.|He can plays the piano.|After 'can' we use the base verb without to or -s."
      ]
    },
    "grammar-topic-13": {
      title: "Countable and uncountable nouns with some and any",
      objective: "Distinguish countable and uncountable nouns and use some and any correctly.",
      explanation: "Countable nouns can be counted and have a plural (an apple, three apples). Uncountable nouns are things we see as a mass or an idea (water, money, information, advice) and have no plural. Use 'some' in positive sentences and in offers and requests, and 'any' in negatives and most questions. To count uncountable nouns, use containers or units: a glass of water, a piece of advice.",
      patterns: ["Positive: There are some eggs. / There's some milk.", "Negative: We haven't got any bread.", "Question: Are there any questions?", "Offer/request: Would you like some tea? Can I have some water?"],
      compare: "Some words are uncountable in English even if they are countable in other languages: advice, information, furniture, luggage, news, homework. Say 'some information', not 'an information'.",
      tip: "Positive, offers and requests → some; negatives and questions → any.",
      practice: [
        "Can you give me some ___ about the course?|information|informations|an information|information's|'Information' is uncountable: no plural, no 'an'.",
        "There isn't ___ milk in the fridge.|any|some|a|many|In negative sentences we use 'any'.",
        "Would you like ___ cake?|some|any|a some|many|In offers we use 'some'.",
        "I need a ___ of advice.|piece|glass|bottle|slice of piece|We count uncountable 'advice' with 'a piece of'.",
        "Which noun is uncountable?|furniture|chair|table|sofa|'Furniture' is uncountable; chairs and tables are countable."
      ]
    },
    "grammar-topic-14": {
      title: "Quantifiers: much, many, a lot of, a few, a little",
      objective: "Talk about quantities with much, many, a lot of, a few and a little.",
      explanation: "Use 'many' and 'a few' with plural countable nouns, and 'much' and 'a little' with uncountable nouns. 'A lot of' works with both and is the most natural choice in positive sentences. 'Much' and 'many' are common in negatives and questions. 'A few' and 'a little' mean 'some, but not many/much' and sound positive; 'few' and 'little' without 'a' mean 'almost none' and sound negative.",
      patterns: ["Countable: How many people? — Not many. / a few friends", "Uncountable: How much time? — Not much. / a little sugar", "Both: a lot of money / a lot of books", "Negative idea: Few people came. (= almost nobody)"],
      compare: "'I have a little money' (some, enough to do something) vs 'I have little money' (almost none, a problem).",
      tip: "Countable → many / a few; uncountable → much / a little; both → a lot of.",
      practice: [
        "How ___ languages do you speak?|many|much|a lot|little|'Languages' is countable plural: how many.",
        "We don't have ___ time. Let's hurry.|much|many|a few|few|'Time' is uncountable; in negatives we use 'much'.",
        "I've got ___ friends in London, so I won't be alone.|a few|a little|much|little|'Friends' is countable, and the meaning is positive: a few.",
        "Could I have ___ milk in my tea?|a little|a few|many|few|'Milk' is uncountable: a little.",
        "The film was boring, and ___ people stayed until the end.|few|a few|a little|much|'Few' (without a) means almost nobody — a negative idea."
      ]
    },
    "grammar-topic-15": {
      title: "Imperatives, instructions and offers",
      objective: "Give instructions, warnings and invitations, and make polite offers.",
      explanation: "The imperative uses the base verb with no subject: 'Open the window.' The negative is don't + base verb: 'Don't touch that!' We use imperatives for instructions, directions, warnings and friendly invitations ('Come in!'). To sound more polite, add 'please' or use a question: 'Could you close the door, please?' Use 'Let's' + base verb to make suggestions that include you, and 'Shall I...?' or 'Would you like...?' for offers.",
      patterns: ["Instruction: Turn left at the lights.", "Warning: Don't be late!", "Suggestion: Let's go to the beach.", "Offer: Shall I carry your bag? / Would you like a drink?"],
      compare: "Imperatives can sound rude in requests to strangers; prefer 'Could you...?' 'Let's' already includes the speaker: say 'Let's go', not 'Let's to go' or 'Let us going'.",
      tip: "Base verb for instructions; don't + base verb for negative ones; let's + base verb for suggestions.",
      practice: [
        "___ your phone in the cinema, please.|Turn off|To turn off|Turning off|You turn offing|An instruction uses the base verb.",
        "___ forget your umbrella — it's going to rain!|Don't|Not|No|Doesn't|Negative imperative: Don't + base verb.",
        "It's a lovely day. ___ for a walk.|Let's go|Let's to go|Let's going|Let us to go|Let's + base verb.",
        "___ I open the window for you?|Shall|Do|Am|Let|'Shall I...?' makes an offer.",
        "Which request is the most polite to a stranger?|Could you tell me the time, please?|Tell me the time.|You tell me the time.|Time, now!|'Could you... please?' is polite; a bare imperative can sound rude."
      ]
    },
    "grammar-topic-16": {
      title: "Present continuous",
      objective: "Describe actions happening now or around now, and temporary situations.",
      explanation: "Form the present continuous with am/is/are + the -ing form of the verb. We use it for actions happening at the moment of speaking ('She's talking on the phone'), for temporary situations ('I'm staying with friends this week') and for changing situations ('Prices are rising'). Spelling: drop a final -e (make → making) and double a final consonant after a short stressed vowel (sit → sitting).",
      patterns: ["+ I'm working. / He's reading. / They're playing.", "− She isn't listening.", "? Are you waiting for someone? — Yes, I am.", "Spelling: write → writing, run → running, lie → lying"],
      compare: "Present simple = habits and facts ('I work in a bank'); present continuous = now or temporary ('I'm working from home this week').",
      tip: "am/is/are + verb-ing for things in progress now.",
      practice: [
        "Be quiet! The baby ___.|is sleeping|sleeps|sleeping|are sleeping|An action happening now: is + -ing.",
        "Look! It ___ again.|'s raining|rains|rain|is rain|Something happening at this moment: present continuous.",
        "I ___ with my aunt until I find a flat.|'m staying|stay|stays|staying|A temporary situation uses the present continuous.",
        "What ___ you ___ at the moment?|are / reading|do / read|does / read|are / read|Question: are + subject + -ing.",
        "Which spelling is correct?|swimming|swiming|swimmming|swimeing|Short stressed vowel + consonant → double it: swimming."
      ]
    },
    "grammar-topic-17": {
      title: "Present simple vs present continuous; state verbs",
      objective: "Choose between the present simple and continuous, and avoid the continuous with state verbs.",
      explanation: "The present simple describes habits, routines and permanent facts; the present continuous describes actions in progress now or temporary situations. Some verbs describe states, not actions, and are not normally used in the continuous: like, love, hate, want, need, know, understand, believe, remember, belong, seem, own. Say 'I know the answer', not 'I'm knowing the answer'.",
      patterns: ["Habit: She usually drives to work.", "Now: Today she's taking the bus.", "State: I need a new phone. / Do you understand?", "Temporary: He's living in Rome this year."],
      compare: "Some verbs change meaning: 'I think it's a good idea' (opinion, simple) vs 'I'm thinking about my plans' (process, continuous); 'She has a car' vs 'She's having lunch'.",
      tip: "Routine or permanent → simple; now or temporary → continuous; state verbs → simple.",
      practice: [
        "I ___ what you mean.|understand|'m understanding|understands|am understand|'Understand' is a state verb, so we use the simple form.",
        "Usually I take the metro, but this week I ___ to work.|'m walking|walk|walks|walking|A temporary change uses the present continuous.",
        "This car ___ to my uncle.|belongs|is belonging|belong|belonging|'Belong' is a state verb.",
        "'What ___?' 'I'm a nurse.'|do you do|are you doing|you do|does you do|'What do you do?' asks about your job (a permanent situation).",
        "I ___ about changing jobs.|'m thinking|think|thinks|am think|'Think about' is a mental process here, so it can be continuous."
      ]
    },
    "grammar-topic-18": {
      title: "Past simple of 'be': was and were",
      objective: "Talk about past states and locations with was and were.",
      explanation: "The past of 'be' is 'was' with I, he, she and it, and 'were' with you, we and they. The negatives are wasn't and weren't. For questions, put was/were before the subject. We use it to describe how people and things were in the past and where they were: 'I was tired yesterday.' 'Were you at the party?'",
      patterns: ["+ I was at home. / They were happy.", "− It wasn't expensive. / We weren't late.", "? Was he at work? — Yes, he was.", "Where were you last night?"],
      compare: "Don't use 'did' with was/were: say 'Were you tired?', not 'Did you be tired?' Common phrases: 'I was born in 1998.'",
      tip: "I/he/she/it → was; you/we/they → were.",
      practice: [
        "The museum ___ closed yesterday.|was|were|is|did|'The museum' is singular: was.",
        "___ you at the meeting this morning?|Were|Was|Did|Are you|With 'you' we use 'were'.",
        "We ___ hungry, so we didn't eat much.|weren't|wasn't|didn't|not were|'We' → weren't.",
        "I ___ born in Gori in 2001.|was|were|am|did|We say 'I was born...'.",
        "'Was the film good?' 'No, it ___.'|wasn't|didn't|weren't|isn't|The short answer repeats 'was': No, it wasn't."
      ]
    },
    "grammar-topic-19": {
      title: "Past simple: regular and irregular verbs",
      objective: "Talk about finished past events using regular -ed forms and common irregular verbs.",
      explanation: "We use the past simple for completed actions at a specific time in the past: yesterday, last week, in 2019, two days ago. Regular verbs add -ed (work → worked, live → lived, stop → stopped, study → studied). Many common verbs are irregular and must be learned: go → went, have → had, see → saw, buy → bought, take → took, make → made. The past form is the same for all subjects.",
      patterns: ["Regular: We watched a film last night.", "Spelling: plan → planned, try → tried, like → liked", "Irregular: She went to Batumi in July.", "Time words: yesterday, last..., ... ago, in 2020"],
      compare: "Use the past simple with finished time expressions; use the present perfect (B1) when the time is not specified or still continues: 'I saw him yesterday' vs 'I've seen this film before'.",
      tip: "Regular → -ed; irregular → learn the past form (went, saw, bought...).",
      practice: [
        "We ___ to the mountains last weekend.|went|goed|gone|go|The past of 'go' is irregular: went.",
        "She ___ English for two years at school.|studied|studyed|studies|study|Consonant + y → -ied: studied.",
        "I ___ a new jacket yesterday.|bought|buyed|buy|brought|'Buy' is irregular: bought. ('Brought' is the past of 'bring'.)",
        "The bus ___ right in front of our house.|stopped|stoped|stopt|stops|Short vowel + consonant → double it: stopped.",
        "They ___ breakfast at the hotel this morning.|had|haved|has|have|The past of 'have' is 'had'."
      ]
    },
    "grammar-topic-20": {
      title: "Past simple: negatives and questions",
      objective: "Make negative sentences and questions about the past with did.",
      explanation: "For negatives, use didn't (did not) + the base verb for all subjects: 'I didn't see him.' For questions, put did before the subject and use the base verb: 'Did you enjoy the film?' Because 'did' already shows the past, the main verb goes back to its base form: 'She didn't go', not 'She didn't went'.",
      patterns: ["− He didn't call me.", "? Did they win? — Yes, they did. / No, they didn't.", "Wh-: Where did you go? What did she say?", "Subject question: Who won the match? (no did)"],
      compare: "Don't use did with was/were: 'Was it cold?' not 'Did it be cold?'",
      tip: "didn't / did + base verb — never the past form after did.",
      practice: [
        "I ___ Nino at the party. Was she there?|didn't see|didn't saw|not saw|wasn't see|After didn't we use the base verb: didn't see.",
        "___ you watch the match last night?|Did|Were|Do|Was|Past question with a main verb: Did + subject + base verb.",
        "Where ___ for your holiday?|did you go|did you went|you went|went you|Did + subject + base verb: did you go.",
        "She ___ to the party because she was ill.|didn't come|didn't came|not came|wasn't come|didn't + base verb.",
        "'Did they like the hotel?' 'Yes, they ___.'|did|liked|were|do|The short answer repeats 'did'."
      ]
    },
    "grammar-topic-21": {
      title: "Past continuous",
      objective: "Describe actions in progress at a moment in the past and set the scene in a story.",
      explanation: "Form the past continuous with was/were + verb-ing. We use it for an action in progress at a particular time in the past ('At 8 pm I was having dinner') and to describe the background of a story ('The sun was shining and birds were singing'). It shows that the action was unfinished at that moment.",
      patterns: ["+ I was reading at ten o'clock.", "− They weren't listening.", "? What were you doing at 6 pm?", "Background: It was raining, and people were hurrying home."],
      compare: "Past simple = a complete event ('I read a book yesterday'); past continuous = in progress at a moment ('I was reading when you called').",
      tip: "was/were + -ing for an action in progress at a past moment.",
      practice: [
        "At midnight I ___ for my exam.|was studying|studied|were studying|am studying|An action in progress at a past moment: was + -ing.",
        "What ___ you ___ at 9 o'clock last night?|were / doing|did / doing|was / do|were / do|Question: were + subject + -ing.",
        "The children ___ in the garden when it started to snow.|were playing|was playing|played|are playing|Plural subject → were + -ing for the background action.",
        "It was a lovely morning. The sun ___.|was shining|shone|shining|is shining|The past continuous describes the scene in a story.",
        "Sorry, I ___ attention. Can you repeat that?|wasn't paying|didn't pay|wasn't pay|not paying|An unfinished action at that moment: wasn't + -ing."
      ]
    },
    "grammar-topic-22": {
      title: "Past continuous and past simple with when and while",
      objective: "Show that a short action interrupted a longer one, using when and while.",
      explanation: "When a short action happens in the middle of a longer one, use the past continuous for the longer action and the past simple for the short one: 'I was cooking when the phone rang.' 'While' usually introduces the longer action: 'While I was cooking, the phone rang.' Two past continuous actions with 'while' happened at the same time: 'While I was cooking, he was setting the table.'",
      patterns: ["Long + short: She was driving when she saw the accident.", "While + long: While we were walking, it started to rain.", "Two parallel actions: While I was working, the kids were sleeping.", "Sequence (simple + simple): When he arrived, we started dinner."],
      compare: "'When I arrived, they were having dinner' (dinner was in progress) vs 'When I arrived, they had dinner' (dinner started after I arrived).",
      tip: "Longer background action → past continuous; short interrupting action → past simple.",
      practice: [
        "I ___ a shower when the lights went out.|was having|had|have|was have|The longer action in progress uses the past continuous.",
        "While she was jogging, she ___ her old teacher.|met|was meeting|meets|meeting|The short action that happened during the jog is past simple.",
        "___ I was waiting for the bus, it started to rain.|While|During|When|Meanwhile|'While' introduces the longer action (+ subject + verb).",
        "When the guests arrived, we ___ dinner, so they joined us.|were having|had|have had|have|Dinner was already in progress: past continuous.",
        "He broke his leg while he ___.|was skiing|skied|skis|has skied|Skiing was in progress when he broke his leg."
      ]
    },
    "grammar-topic-23": {
      title: "Used to for past habits and states",
      objective: "Talk about past habits and states that are no longer true.",
      explanation: "'Used to' + base verb describes repeated actions or states in the past that are not true now: 'I used to play football every day.' 'There used to be a cinema here.' The negative is didn't use to, and the question is Did you use to...? (no -d after did). For a single past event, use the past simple, not used to.",
      patterns: ["+ She used to live in Kutaisi.", "− I didn't use to like vegetables.", "? Did you use to have long hair?", "State: There used to be a park here."],
      compare: "'I used to smoke' (habit, now stopped) vs 'I smoked a cigarette yesterday' (one event). Don't confuse it with 'be used to + -ing' (= be familiar with), studied at B2.",
      tip: "used to + base verb for old habits/states; didn't use to in negatives.",
      practice: [
        "When I was a child, I ___ climb trees every day.|used to|use to|was used to|used|Past habit: used to + base verb.",
        "There ___ be a bakery on this corner, but it closed.|used to|uses to|was used|used|A past state that is no longer true.",
        "I ___ like coffee, but now I love it.|didn't use to|didn't used to|not used to|wasn't used to|Negative: didn't use to (no -d).",
        "___ you use to walk to school?|Did|Were|Used|Do|Question: Did + subject + use to.",
        "Which sentence is correct for a single event?|Last year I visited Paris.|Last year I used to visit Paris.|Last year I use to visit Paris.|Last year I was used to visit Paris.|A single past event uses the past simple, not used to."
      ]
    },
    "grammar-topic-24": {
      title: "Comparative and superlative adjectives",
      objective: "Compare two or more things using comparative and superlative forms.",
      explanation: "Short adjectives add -er and -est (cheap → cheaper → the cheapest). Adjectives ending in -y change to -ier/-iest (easy → easier), and short adjectives ending in vowel + consonant double the consonant (big → bigger). Longer adjectives use more and the most (expensive → more expensive → the most expensive). Irregular forms: good → better → the best; bad → worse → the worst; far → further → the furthest. Use 'than' after a comparative and 'the' before a superlative.",
      patterns: ["Comparative: My flat is smaller than yours.", "Superlative: It's the tallest building in the city.", "Long adjectives: This hotel is more comfortable.", "Irregular: Today is better than yesterday."],
      compare: "Don't double the comparison: 'more cheap' and 'more cheaper' are both wrong — say 'cheaper'. Use 'than', not 'that': 'older than me'.",
      tip: "Short → -er/-est; long → more/most; always 'than' after a comparative and 'the' before a superlative.",
      practice: [
        "Tbilisi is ___ than Kutaisi.|bigger|more big|biger|the biggest|Short adjective, vowel + consonant → double + -er: bigger.",
        "This is ___ restaurant in town.|the most expensive|the expensivest|more expensive|most expensive than|Long adjective superlative: the most expensive.",
        "My exam results were ___ than I expected.|better|gooder|more good|best|The comparative of 'good' is 'better'.",
        "Maths is ___ than history for me.|easier|more easy|easyer|the easiest|-y → -ier: easier.",
        "Which sentence is correct?|She's taller than her brother.|She's more taller than her brother.|She's taller that her brother.|She's the taller than her brother.|Comparative + than, without 'more'."
      ]
    },
    "grammar-topic-25": {
      title: "As ... as, too and enough",
      objective: "Express equality, excess and sufficiency with as...as, too and enough.",
      explanation: "Use 'as + adjective + as' to say two things are equal, and 'not as ... as' to say one has less of a quality: 'My car isn't as fast as yours.' 'Too' goes before an adjective and means 'more than is good or possible': 'It's too cold to swim.' 'Enough' goes after an adjective but before a noun: 'He isn't old enough to drive.' 'We don't have enough chairs.'",
      patterns: ["Equality: She's as tall as her mother.", "Less: This film isn't as good as the book.", "Too: The coffee is too hot to drink.", "Enough: Is it warm enough? / Do we have enough time?"],
      compare: "'Very' simply makes an adjective stronger; 'too' suggests a problem: 'It's very hot' (fine) vs 'It's too hot to sleep' (a problem).",
      tip: "too + adjective; adjective + enough; enough + noun.",
      practice: [
        "This bag is ___ to carry. Can you help me?|too heavy|heavy enough|very heavy enough|enough heavy|'Too' + adjective shows a problem.",
        "He isn't ___ to watch this film.|old enough|enough old|too old|as old|Adjective + enough.",
        "My Georgian isn't ___ my sister's.|as good as|as better as|so good than|as good than|Not as + adjective + as.",
        "We don't have ___ to finish today.|enough time|time enough|too time|time too|Enough comes before a noun.",
        "The tea is ___ hot — I can't drink it yet.|too|very enough|enough|as|'Too hot' means hotter than is possible to drink."
      ]
    },
    "grammar-topic-26": {
      title: "Talking about the future: going to, will and the present continuous",
      objective: "Choose the right form for plans, predictions, decisions and arrangements.",
      explanation: "Use 'be going to' for plans and intentions you have already decided ('I'm going to learn to drive') and for predictions based on present evidence ('Look at those clouds — it's going to rain'). Use 'will' for decisions made at the moment of speaking ('I'll have the soup'), offers and promises ('I'll help you'), and predictions based on opinion ('I think she'll win'). Use the present continuous for fixed arrangements with a time and place ('I'm meeting Tom at six').",
      patterns: ["Plan: We're going to paint the kitchen.", "Evidence: Careful! You're going to fall.", "Instant decision: The phone's ringing — I'll answer it.", "Arrangement: She's flying to Berlin on Monday."],
      compare: "'I'll call you' (promise/decision now) vs 'I'm going to call him tonight' (already planned). Don't use 'will' for arrangements: 'I'm seeing the doctor at 4', not 'I will see the doctor at 4' (less natural).",
      tip: "Plan or visible evidence → going to; decision now, offer, promise → will; arrangement → present continuous.",
      practice: [
        "'There's no milk.' 'OK, I ___ some.'|'ll buy|'m going to buy|buy|'m buying|A decision made at the moment of speaking: will.",
        "We've saved for years. Next summer we ___ travel round Asia.|'re going to|will|travel|are travel|A plan decided earlier: going to.",
        "Look at the sky! It ___ rain.|'s going to|will to|rains|is raining to|A prediction based on present evidence: going to.",
        "I ___ the dentist at 3:30 tomorrow — it's in my diary.|'m seeing|see|will see to|'ll seeing|A fixed arrangement: present continuous.",
        "Don't worry, I ___ tell anyone your secret.|won't|'m not going|don't|am not|A promise uses will/won't."
      ]
    },
    "grammar-topic-27": {
      title: "Obligation, prohibition and advice: must, have to, should",
      objective: "Express necessity, prohibition, lack of necessity and advice.",
      explanation: "Use 'have to' for obligations, especially rules from outside ('I have to wear a uniform at work'), and 'must' for strong obligations the speaker feels or for written rules ('I must call my mum'). 'Mustn't' means it is not allowed: 'You mustn't smoke here.' 'Don't have to' means it is not necessary: 'You don't have to come if you're busy.' Use 'should' and 'shouldn't' for advice: 'You should see a doctor.'",
      patterns: ["Obligation: Drivers have to stop at red lights.", "Prohibition: You mustn't use your phone in the exam.", "No necessity: We don't have to get up early tomorrow.", "Advice: You should drink more water."],
      compare: "'Mustn't' and 'don't have to' are very different: 'You mustn't eat that' (it's forbidden) vs 'You don't have to eat that' (it's your choice). The past of must/have to is 'had to'.",
      tip: "Forbidden → mustn't; not necessary → don't have to; advice → should.",
      practice: [
        "You ___ park here. It's a fire exit.|mustn't|don't have to|shouldn't to|haven't to|It is forbidden: mustn't.",
        "It's Saturday, so I ___ go to work.|don't have to|mustn't|must|haven't|Not necessary (but allowed): don't have to.",
        "You look tired. You ___ go to bed earlier.|should|must to|have|mustn't|Advice: should + base verb.",
        "Yesterday I ___ wait an hour for the bus.|had to|must|musted|have to|The past of must/have to is had to.",
        "In this school, students ___ wear a uniform.|have to|has to|must to|having to|An external rule for plural subject: have to."
      ]
    },
    "grammar-topic-28": {
      title: "Indefinite pronouns: some-, any-, no-, every-",
      objective: "Use words like someone, anything, nowhere and everybody correctly.",
      explanation: "Indefinite pronouns combine some-, any-, no- and every- with -one/-body (people), -thing (things) and -where (places). Like some and any, 'some-' words are used in positive sentences, offers and requests, and 'any-' words in negatives and questions. 'No-' words already have a negative meaning, so we use them with a positive verb. All these pronouns take a singular verb: 'Everyone is here.'",
      patterns: ["Positive: Someone is at the door.", "Negative: I didn't see anything.", "No- + positive verb: Nobody knows the answer.", "Every-: Everything is ready."],
      compare: "Avoid double negatives: say 'I don't know anybody' or 'I know nobody', not 'I don't know nobody'. 'Anyone' in a positive sentence means 'it doesn't matter who': 'Anyone can learn to cook.'",
      tip: "Negative verb → any-; positive verb with negative meaning → no-; every- takes a singular verb.",
      practice: [
        "There's ___ in the fridge. Let's go shopping.|nothing|anything|something|everything|A positive verb with a negative meaning: nothing.",
        "Did ___ call while I was out?|anyone|someone's|no one|everyone did|In questions we usually use any-.",
        "I can't find my glasses ___.|anywhere|nowhere|somewhere|everywhere|With a negative verb (can't) we use any-.",
        "Everybody ___ ready to leave.|is|are|be|were being|'Every-' pronouns take a singular verb.",
        "Which sentence is correct?|I don't know anybody here.|I don't know nobody here.|I know anybody here.|I don't know somebody here.|Negative verb + any-, not a double negative."
      ]
    },
    "grammar-topic-29": {
      title: "Prepositions of time, place and movement",
      objective: "Use at, on, in for time and place, and into, across, through, along for movement.",
      explanation: "For time, use 'at' with clock times and short periods (at 5 o'clock, at the weekend), 'on' with days and dates (on Monday, on 3 May) and 'in' with months, years, seasons and parts of the day (in July, in 2020, in the morning). For place, use 'at' for a point (at the bus stop), 'on' for a surface (on the wall) and 'in' for an enclosed space (in the car). For movement, use 'into' (entering), 'out of', 'across' (from one side to the other of a flat area), 'through' (inside something from one end to the other), 'along' and 'over'.",
      patterns: ["Time: at 7:30 / on Friday / in winter", "Place: at the station / on the table / in the kitchen", "Movement: She walked into the room.", "We drove through the tunnel and across the bridge."],
      compare: "'In' is a position; 'into' is movement: 'He's in the house' vs 'He went into the house'. Say 'in the morning' but 'at night' and 'on Monday morning'.",
      tip: "Time: at (exact) / on (days) / in (longer periods). Movement verbs often need into, across, through.",
      practice: [
        "The meeting starts ___ 10 o'clock.|at|on|in|by at|We use 'at' with clock times.",
        "My birthday is ___ 14 April.|on|in|at|of|We use 'on' with dates.",
        "She ran ___ the room and closed the door.|into|in|inside of|at|Movement entering a space: into.",
        "We walked ___ the park to get to the station.|through|across of|into|along of|Moving inside an area from one side to the other: through.",
        "I usually read ___ night before I sleep.|at|in|on|by|We say 'at night' (but 'in the morning')."
      ]
    },
    "grammar-topic-30": {
      title: "Verb patterns: to-infinitive or -ing",
      objective: "Know which common verbs are followed by to + base verb and which by -ing.",
      explanation: "Some verbs are followed by to + base verb: want, need, decide, hope, plan, promise, learn, agree, would like. Others are followed by the -ing form: enjoy, finish, mind, avoid, suggest, keep, practise, imagine. A few verbs, such as like, love, hate, start and begin, can take either form with little change in meaning. After prepositions we always use -ing: 'I'm interested in learning Spanish.'",
      patterns: ["Verb + to: I decided to stay at home.", "Verb + -ing: She enjoys reading.", "Either: It started raining / to rain.", "Preposition + -ing: Thanks for helping me."],
      compare: "'Would like' takes to: 'I'd like to go', but 'like' can take -ing: 'I like going'. 'Suggest' takes -ing, never 'suggest someone to do': 'He suggested taking a taxi.'",
      tip: "Learn the verb with its pattern: decide to, enjoy -ing, interested in -ing.",
      practice: [
        "I really enjoy ___ in the sea.|swimming|to swim|swim|swam|'Enjoy' is followed by -ing.",
        "We've decided ___ a new car.|to buy|buying|buy|to buying|'Decide' is followed by to + base verb.",
        "Would you mind ___ the window?|closing|to close|close|closed|'Mind' is followed by -ing.",
        "She's interested in ___ photography.|learning|to learn|learn|learned|After a preposition (in) we use -ing.",
        "He suggested ___ a taxi because it was late.|taking|to take|us to take|take|'Suggest' is followed by -ing."
      ]
    }
  });
})(window);
