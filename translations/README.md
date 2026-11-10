# ქართული თარგმანები Gemini-ით

ამ საქაღალდეში არის საიტის ის ინგლისური ტექსტები, რომლებსაც ჯერ ქართული თარგმანი არ აქვს: **1,421 ელემენტი, 10 ფაილად** (`part-01.json` … `part-10.json`, თითოში 150-მდე).

რას შეიცავს:

| განყოფილება | რა არის | რაოდენობა |
|---|---|---|
| `vocab` | ლექსიკონის სიტყვების ქართული შესატყვისი | ~900 |
| `dialogues` | საუბრის დიალოგების სტრიქონები | 185 |
| `writing` | წერის დავალებები | 90 |
| `curriculum` | სასწავლო გეგმის ერთეულების სახელები და მიზნები | 60 |
| `courses` | კურსების სახელები და აღწერები | 58 |
| `reading` / `listening` | ახალი ტექსტების (№91+) სათაურები და აბზაცები | 130 |

## როგორ ვათარგმნინოთ

1. გახსენით [gemini.google.com](https://gemini.google.com).
2. ჩააკოპირეთ ქვემოთ მოცემული **პრომპტი**, ბოლოში კი ჩასვით ერთი ფაილის (მაგ. `part-01.json`) მთლიანი შიგთავსი.
3. Gemini დააბრუნებს იმავე JSON-ს შევსებული `ka` ველებით. შეინახეთ ტექსტური ფაილის სახით, მაგ. `part-01.ka.json` (თუ Gemini პასუხს კოდის ბლოკში ჩასვამს, ესეც არ არის პრობლემა: იმპორტი თავად მოაშორებს).
4. გაიმეორეთ ყველა ფაილისთვის (ერთ ჩატში ერთი ფაილი — ასე უფრო ზუსტია).
5. მზა ფაილები ან ჩადეთ ამავე საქაღალდეში და გაუშვით:

   ```bash
   node scripts/import-translations.js translations/part-01.ka.json translations/part-02.ka.json
   ```

   ან უბრალოდ გამომიგზავნეთ და მე შევიტან.

იმპორტი ავტომატურად უარყოფს შეცდომებს: შეცვლილ გასაღებებს (`key`), ცარიელ ან ინგლისურად დარჩენილ ველებს და არაქართულ ტექსტს. ჯერ შეამოწმეთ `--dry-run`-ით:

```bash
node scripts/import-translations.js translations/part-01.ka.json --dry-run
```

## პრომპტი (დააკოპირეთ მთლიანად)

```text
You are a professional English–Georgian translator for an English-learning website for Georgian speakers.

Below is a JSON document. For EVERY item in "items", translate the English text in "en" into natural, correct Georgian and write it into the "ka" field.

Rules:
1. Return ONLY the complete JSON document, with exactly the same structure, the same order and the same "key", "en" and "context" values. Do not add or remove items. Do not add comments or explanations.
2. Use "context" to understand the meaning (part of speech, level, situation).
3. Section "vocab" (key starts with "vocab|"): give the short Georgian dictionary equivalent of the word or phrase in its basic form (e.g. a verb as a masdar/noun form like "წასვლა", an adjective in the nominative). If the word has two common meanings, give the most common one for the given definition, at most two variants separated by ", ". No explanations.
4. Sections "dialogues", "reading", "listening": translate the full sentence or paragraph naturally, keeping the meaning, tone and register. Keep names of people and places as they are (transliterate into Georgian script only if it is natural, e.g. "London" → "ლონდონი").
5. Sections "writing", "curriculum", "courses": translate instructions, titles and goals clearly; "I can…" goals should start with "შემიძლია…".
6. Use modern standard Georgian, Georgian script only (no Latin letters except unavoidable abbreviations such as CV, AI, GDPR, IPA).
7. If you are truly unsure about an item, leave "ka" as an empty string "" rather than guessing.

JSON:
```
