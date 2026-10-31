/**
 * CURRICULUM.JS — the A1–C1 learning path (English source; translations: App.I18n.ka.curriculum).
 *
 * Each level has 5 units. A unit combines, in this order:
 *   vocabulary topics → 3 grammar topics (the unit's structural focus) → reading → listening →
 *   speaking (dialogue) → writing → unit checkpoint.
 * Reading/listening/writing items are numbered 1–90 in their modules; A1 uses 1–15, A2 16–30, ... C1 61–75.
 * Unit n of a level uses items base + 3n .. base + 3n + 2: the first is required, the other two are extra practice.
 *
 * Progress rules (implemented in js/learn.js):
 *   - Levels below the learner's placement level are open for revision and not required.
 *   - Unit 1 of the current level is open; each next unit opens when the previous checkpoint is passed (≥ 70%).
 *   - Inside a unit, vocabulary and grammar lessons are open; skills lessons open after the unit's first grammar
 *     lesson; the checkpoint opens when all required lessons are complete.
 *   - Passing all five checkpoints completes the level and moves the learner to the next one.
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};

  App.CurriculumSpec = {
    passMark: 70,
    levels: [
      {
        code: "A1",
        name: "Beginner",
        objectives: [
          "Introduce yourself and others, and ask and answer simple personal questions.",
          "Talk about your family, home, daily routine and free time in simple sentences.",
          "Understand short, slow texts and conversations about familiar topics.",
          "Write short notes, messages and descriptions using basic connectors (and, but, because)."
        ],
        prerequisites: "None — this is the starting point.",
        completion: "Pass all five unit checkpoints (70% or more).",
        units: [
          { title: "Meeting people", goal: "I can say who I am, where I'm from and introduce my family.", vocab: ["greetings", "people", "family"], grammar: [1, 2, 3] },
          { title: "Home and places", goal: "I can describe my home and say where things are in a town.", vocab: ["home", "town", "describing"], grammar: [4, 5, 6] },
          { title: "My day", goal: "I can talk about my daily routine and what I have.", vocab: ["time", "routine", "core verbs"], grammar: [7, 8, 9] },
          { title: "Free time and abilities", goal: "I can talk about how often I do things and what I can do.", vocab: ["free time", "body", "function words"], grammar: [10, 11, 12] },
          { title: "Food, shopping and getting around", goal: "I can order food, shop for basic things and follow simple instructions.", vocab: ["food", "clothes", "transport", "nature", "work"], grammar: [13, 14, 15] }
        ]
      },
      {
        code: "A2",
        name: "Elementary",
        objectives: [
          "Describe what is happening now and what happened in the past.",
          "Tell a simple story about past events and experiences.",
          "Make plans, arrangements and predictions, and talk about rules and advice.",
          "Handle everyday situations: travel, shopping, health and simple work tasks."
        ],
        prerequisites: "A1 level, or placement at A2.",
        completion: "Pass all five unit checkpoints (70% or more).",
        units: [
          { title: "Now and then", goal: "I can describe what is happening now and talk about the past with was/were.", vocab: ["feelings", "home", "communication"], grammar: [16, 17, 18] },
          { title: "Stories from the past", goal: "I can tell a short story about something that happened.", vocab: ["events", "technology", "core verbs"], grammar: [19, 20, 21] },
          { title: "Memories and comparisons", goal: "I can talk about past habits and compare people, places and things.", vocab: ["describing", "nature", "food"], grammar: [22, 23, 24] },
          { title: "Plans and rules", goal: "I can talk about my plans and explain rules and give advice.", vocab: ["plans", "health", "work", "education"], grammar: [25, 26, 27] },
          { title: "Travel and shopping", goal: "I can manage on a trip: book, buy, ask for directions and explain preferences.", vocab: ["travel", "shopping", "sport", "function words"], grammar: [28, 29, 30] }
        ]
      },
      {
        code: "B1",
        name: "Intermediate",
        objectives: [
          "Talk about experiences and how situations have changed, using perfect tenses.",
          "Discuss real and imaginary situations with conditionals.",
          "Report what people said and describe processes with the passive.",
          "Give and justify opinions on familiar topics and write connected texts."
        ],
        prerequisites: "A2 level, or placement at B1.",
        completion: "Pass all five unit checkpoints (70% or more).",
        units: [
          { title: "Life experiences", goal: "I can talk about my experiences and how long things have been happening.", vocab: ["travel", "lifestyle", "relationships"], grammar: [31, 32, 33] },
          { title: "Looking back and looking ahead", goal: "I can put past events in order and talk about the future in detail.", vocab: ["work", "education", "linking words"], grammar: [34, 35, 36] },
          { title: "What if?", goal: "I can discuss imaginary situations, describe processes and report what people said.", vocab: ["environment", "technology", "money"], grammar: [37, 38, 39] },
          { title: "People and opinions", goal: "I can describe people precisely and make guesses about situations.", vocab: ["opinions", "media", "describing"], grammar: [40, 41, 42] },
          { title: "Communication in action", goal: "I can keep a conversation going naturally and use common phrasal verbs.", vocab: ["society", "phrasal verbs", "expressions"], grammar: [43, 44, 45] }
        ]
      },
      {
        code: "B2",
        name: "Upper Intermediate",
        objectives: [
          "Discuss hypothetical past situations, regrets and their consequences.",
          "Use the passive and reporting structures for news-style and formal communication.",
          "Build clear, well-organised arguments with a range of linking devices.",
          "Understand the main ideas of complex texts and discussions on a wide range of topics."
        ],
        prerequisites: "B1 level, or placement at B2.",
        completion: "Pass all five unit checkpoints (70% or more).",
        units: [
          { title: "Choices and consequences", goal: "I can talk about how things could have been different and express regret.", vocab: ["psychology", "change", "idioms"], grammar: [46, 47, 48] },
          { title: "News and processes", goal: "I can understand and report news and describe how things are done.", vocab: ["science", "society"], grammar: [49, 50, 51] },
          { title: "Precision and deduction", goal: "I can add precise detail and draw conclusions about past events.", vocab: ["evaluating", "health"], grammar: [52, 53, 54] },
          { title: "Change and adaptation", goal: "I can describe adapting to change and connect ideas in longer texts.", vocab: ["professional", "business", "linking words"], grammar: [55, 56, 57] },
          { title: "Making a case", goal: "I can present and defend an argument in speech and in writing.", vocab: ["argument", "culture", "phrasal verbs"], grammar: [58, 59, 60] }
        ]
      },
      {
        code: "C1",
        name: "Advanced",
        objectives: [
          "Use emphasis, inversion and cleft sentences to control focus and tone.",
          "Express nuanced attitudes, concessions and degrees of certainty.",
          "Write well-structured formal texts (essays, reports, proposals) in an appropriate register.",
          "Follow extended academic and professional discussions on abstract topics."
        ],
        prerequisites: "B2 level, or placement at C1.",
        completion: "Pass all five unit checkpoints (70% or more).",
        units: [
          { title: "Emphasis and impact", goal: "I can add emphasis and drama using inversion and cleft sentences.", vocab: ["discourse", "idioms"], grammar: [61, 62, 63] },
          { title: "Conditions and preferences", goal: "I can express conditions, preferences and advice formally and precisely.", vocab: ["formal", "economy"], grammar: [64, 65, 66] },
          { title: "Advanced structures in context", goal: "I can use complex passive and participle structures in formal writing.", vocab: ["academic", "environment"], grammar: [67, 68, 69] },
          { title: "Nuance and attitude", goal: "I can convey attitude, concession and habitual behaviour with subtlety.", vocab: ["nuanced verbs", "stance"], grammar: [70, 71, 72] },
          { title: "Academic and professional English", goal: "I can write and speak about abstract topics with precise, cohesive language.", vocab: ["abstract", "society", "phrasal verbs"], grammar: [73, 74, 75] }
        ]
      }
    ]
  };

  const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1"];

  // სპეციფიკაციიდან სრული გეგმის აგება (გაკვეთილების id-ებითა და ბმულებით)
  App.buildCurriculum = function () {
    const spec = App.CurriculumSpec;
    return spec.levels.map((lvl, levelIdx) => {
      const base = levelIdx * 15 + 1;
      const units = lvl.units.map((u, unitIdx) => {
        const unitId = lvl.code + "-u" + (unitIdx + 1);
        const item = (k) => base + unitIdx * 3 + k;
        const lessons = [];
        u.vocab.forEach((topic) => lessons.push({ id: unitId + "-vocab-" + topic.replace(/\s+/g, "-"), type: "vocab", ref: topic, required: true, skills: ["vocabulary"] }));
        u.grammar.forEach((n) => lessons.push({ id: unitId + "-grammar-" + n, type: "grammar", ref: "grammar-topic-" + n, required: true, skills: ["grammar", "accuracy"] }));
        lessons.push({ id: unitId + "-reading-" + item(0), type: "reading", ref: "reading-passage-" + item(0), required: true, skills: ["reading", "vocabulary in context"] });
        lessons.push({ id: unitId + "-listening-" + item(0), type: "listening", ref: "listening-topic-" + item(0), required: true, skills: ["listening", "pronunciation"] });
        lessons.push({ id: unitId + "-speaking", type: "speaking", ref: "dlg-" + unitId, required: true, skills: ["speaking", "interaction"] });
        lessons.push({ id: unitId + "-writing-" + item(0), type: "writing", ref: "writing-topic-" + item(0), required: true, skills: ["writing", "organisation"] });
        [1, 2].forEach((k) => {
          lessons.push({ id: unitId + "-reading-" + item(k), type: "reading", ref: "reading-passage-" + item(k), required: false, skills: ["reading"] });
          lessons.push({ id: unitId + "-listening-" + item(k), type: "listening", ref: "listening-topic-" + item(k), required: false, skills: ["listening"] });
          lessons.push({ id: unitId + "-writing-" + item(k), type: "writing", ref: "writing-topic-" + item(k), required: false, skills: ["writing"] });
        });
        lessons.push({ id: unitId + "-checkpoint", type: "checkpoint", ref: unitId, required: true, skills: ["review", "assessment"] });
        return { id: unitId, level: lvl.code, number: unitIdx + 1, title: u.title, goal: u.goal, vocab: u.vocab, grammar: u.grammar, lessons: lessons };
      });
      return {
        code: lvl.code, name: lvl.name, index: LEVEL_ORDER.indexOf(lvl.code),
        objectives: lvl.objectives, prerequisites: lvl.prerequisites, completion: lvl.completion, units: units
      };
    });
  };
})(window);
