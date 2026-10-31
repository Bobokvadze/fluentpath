/**
 * DIALOGUES.JS — speaking dialogues for the curriculum units (English source).
 * Each dialogue: id "dlg-<unit id>", title, function (communicative goal), useful expressions, lines.
 * "partner" lines are played aloud; "you" lines are spoken by the learner and checked by speech recognition.
 * Translations: App.I18n.ka.dialogues[id] (title, line<N>).
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};

  App.UnitDialogues = [
    // ---------- A1 ----------
    { id: "dlg-A1-u1", level: "A1", title: "Meeting a new classmate", function: "Introducing yourself and asking personal questions",
      expressions: ["Nice to meet you.", "Where are you from?", "What do you do?"],
      lines: [
        ["partner", "Hi! I'm Leo. Are you new here?"],
        ["you", "Yes, I am. My name is Nino. Nice to meet you."],
        ["partner", "Nice to meet you too. Where are you from, Nino?"],
        ["you", "I'm from Georgia. I live in Tbilisi."],
        ["partner", "Cool! And what do you do?"],
        ["you", "I'm a student. I study economics."]
      ] },
    { id: "dlg-A1-u2", level: "A1", title: "Asking for directions", function: "Asking where places are and understanding simple directions",
      expressions: ["Excuse me, where is...?", "Is it far?", "Turn left / right."],
      lines: [
        ["you", "Excuse me, is there a pharmacy near here?"],
        ["partner", "Yes, there is. It's on Rustaveli Avenue, next to the bank."],
        ["you", "Is it far from here?"],
        ["partner", "No, it's about five minutes. Go straight on and turn left at the lights."],
        ["you", "Thank you very much!"],
        ["partner", "You're welcome."]
      ] },
    { id: "dlg-A1-u3", level: "A1", title: "Talking about your day", function: "Describing a daily routine",
      expressions: ["What time do you...?", "I usually...", "After that,..."],
      lines: [
        ["partner", "What time do you usually get up?"],
        ["you", "I usually get up at seven o'clock."],
        ["partner", "And what do you do in the morning?"],
        ["you", "I have a shower, eat breakfast and take the bus to work."],
        ["partner", "What do you do in the evening?"],
        ["you", "I cook dinner and watch TV. I go to bed at eleven."]
      ] },
    { id: "dlg-A1-u4", level: "A1", title: "Making plans for the weekend", function: "Talking about free time and abilities; making suggestions",
      expressions: ["Can you...?", "Let's...", "How about...?"],
      lines: [
        ["partner", "What do you like doing at the weekend?"],
        ["you", "I often go swimming. Can you swim?"],
        ["partner", "Yes, but not very well. I can play tennis, though."],
        ["you", "Great! Let's play tennis on Saturday."],
        ["partner", "Good idea. What time?"],
        ["you", "How about ten o'clock in the park?"]
      ] },
    { id: "dlg-A1-u5", level: "A1", title: "Ordering in a café", function: "Ordering food and drink and asking about prices",
      expressions: ["I'd like...", "Can I have...?", "How much is it?"],
      lines: [
        ["partner", "Good morning. What can I get you?"],
        ["you", "Can I have a cheese sandwich and a coffee, please?"],
        ["partner", "Of course. Would you like milk in your coffee?"],
        ["you", "Yes, a little milk, please. How much is that?"],
        ["partner", "That's twelve lari, please."],
        ["you", "Here you are. Thank you!"]
      ] },
    // ---------- A2 ----------
    { id: "dlg-A2-u1", level: "A2", title: "A phone call home", function: "Saying what is happening now and how you feel",
      expressions: ["What are you doing?", "I'm feeling...", "At the moment..."],
      lines: [
        ["partner", "Hi! What are you doing right now?"],
        ["you", "I'm sitting in a café near my hotel. It's raining, so I'm staying inside."],
        ["partner", "Oh no! How are you feeling?"],
        ["you", "I'm a bit tired, but I'm really happy here."],
        ["partner", "Were you at the museum yesterday?"],
        ["you", "Yes, I was. It was amazing, but it was very crowded."]
      ] },
    { id: "dlg-A2-u2", level: "A2", title: "What happened?", function: "Telling a short story about a past event",
      expressions: ["You won't believe what happened.", "And then...", "In the end,..."],
      lines: [
        ["partner", "You look stressed. What happened?"],
        ["you", "I lost my phone this morning. I left it on the bus."],
        ["partner", "Oh no! What did you do?"],
        ["you", "I called the bus company, but nobody answered at first."],
        ["partner", "Did you find it in the end?"],
        ["you", "Yes! The driver found it and kept it for me. I was so lucky."]
      ] },
    { id: "dlg-A2-u3", level: "A2", title: "Then and now", function: "Comparing the past and the present",
      expressions: ["I used to...", "It's much ... than...", "Not as ... as..."],
      lines: [
        ["partner", "Has your town changed a lot since you were a child?"],
        ["you", "Yes, a lot. There used to be a big park in the centre."],
        ["partner", "What's there now?"],
        ["you", "A shopping centre. The town is busier and noisier than before."],
        ["partner", "Do you prefer it now or in the past?"],
        ["you", "In the past. Life wasn't as fast as it is now."]
      ] },
    { id: "dlg-A2-u4", level: "A2", title: "Asking for advice", function: "Giving advice and talking about plans",
      expressions: ["You should...", "I'm going to...", "You don't have to..."],
      lines: [
        ["you", "I want to get fit. What should I do?"],
        ["partner", "You should start slowly. Maybe walk for thirty minutes every day."],
        ["you", "Do I have to join a gym?"],
        ["partner", "No, you don't have to. You can exercise at home or in the park."],
        ["you", "OK. I'm going to start tomorrow morning."],
        ["partner", "Great plan! And you should drink more water, too."]
      ] },
    { id: "dlg-A2-u5", level: "A2", title: "At the train station", function: "Buying tickets and asking for travel information",
      expressions: ["A return ticket to..., please.", "What time does it leave?", "Which platform?"],
      lines: [
        ["you", "Hello. I'd like a return ticket to Batumi, please."],
        ["partner", "For today? The next train leaves at 14:20."],
        ["you", "That's perfect. How long does the journey take?"],
        ["partner", "About five hours. It arrives at twenty past seven."],
        ["you", "Which platform does it leave from?"],
        ["partner", "Platform three. Here's your ticket. Have a good trip!"]
      ] },
    // ---------- B1 ----------
    { id: "dlg-B1-u1", level: "B1", title: "Sharing travel experiences", function: "Talking about experiences with the present perfect",
      expressions: ["Have you ever...?", "I've never...", "How long have you...?"],
      lines: [
        ["partner", "Have you ever been to another country on your own?"],
        ["you", "Yes, I've travelled alone twice. I went to Italy last year."],
        ["partner", "Really? How did you find it?"],
        ["you", "At first I was nervous, but I met lots of interesting people."],
        ["partner", "I've never travelled alone. I'm a bit scared to try."],
        ["you", "You should do it. It's the best way to become more confident."]
      ] },
    { id: "dlg-B1-u2", level: "B1", title: "A job interview", function: "Describing your background and future goals",
      expressions: ["I'd been working as...", "By next year, I'll have...", "If I get the job,..."],
      lines: [
        ["partner", "Could you tell me about your previous job?"],
        ["you", "Of course. I'd been working as a sales assistant for three years before I moved to marketing."],
        ["partner", "Why are you interested in this position?"],
        ["you", "I'm looking for new challenges, and I'd like to work for an international company."],
        ["partner", "Where do you see yourself in five years?"],
        ["you", "By then, I hope I'll have become a team leader."]
      ] },
    { id: "dlg-B1-u3", level: "B1", title: "Imagine if...", function: "Discussing hypothetical situations",
      expressions: ["If I were..., I'd...", "I'd probably...", "That's a tough question."],
      lines: [
        ["partner", "What would you do if you won a lot of money?"],
        ["you", "That's a tough question. I think I'd buy a small house by the sea."],
        ["partner", "Would you stop working?"],
        ["you", "No, I wouldn't. I'd get bored very quickly."],
        ["partner", "Would you give some of it away?"],
        ["you", "Definitely. I'd give part of it to a charity that helps children."]
      ] },
    { id: "dlg-B1-u4", level: "B1", title: "Discussing a film", function: "Giving opinions, agreeing and disagreeing politely",
      expressions: ["In my opinion,...", "I see your point, but...", "I couldn't agree more."],
      lines: [
        ["partner", "So, what did you think of the film?"],
        ["you", "In my opinion, it was a bit too long, but the acting was excellent."],
        ["partner", "Really? I thought the story was boring."],
        ["you", "I see your point, but the ending surprised me."],
        ["partner", "That's true. The music was great as well."],
        ["you", "I couldn't agree more. I've been listening to the soundtrack all day."]
      ] },
    { id: "dlg-B1-u5", level: "B1", title: "Solving a problem with a neighbour", function: "Making requests and dealing with a complaint",
      expressions: ["I was wondering if...", "Would you mind...?", "I'm sorry about that."],
      lines: [
        ["you", "Hi, I'm sorry to bother you, but I was wondering if we could talk about the noise."],
        ["partner", "Oh, is the music too loud? I'm really sorry about that."],
        ["you", "It's fine during the day, but I have to get up early for work."],
        ["partner", "I completely understand. I'll turn it down after ten o'clock."],
        ["you", "Thank you, I really appreciate it."],
        ["partner", "No problem. Just knock on the door if it happens again."]
      ] },
    // ---------- B2 ----------
    { id: "dlg-B2-u1", level: "B2", title: "Talking about regrets", function: "Expressing regret and imagining different outcomes",
      expressions: ["I wish I had...", "If I'd known..., I would have...", "Looking back,..."],
      lines: [
        ["partner", "Is there anything you'd do differently if you could go back?"],
        ["you", "Looking back, I wish I had studied abroad when I had the chance."],
        ["partner", "Why didn't you go?"],
        ["you", "I was worried about money. If I'd known about the scholarships, I would have applied."],
        ["partner", "It's not too late, though. There are programmes for adults too."],
        ["you", "That's true. Maybe I'll look into it this year."]
      ] },
    { id: "dlg-B2-u2", level: "B2", title: "Reporting the news", function: "Reporting information and describing processes",
      expressions: ["It's been reported that...", "Apparently,...", "It's being investigated."],
      lines: [
        ["partner", "Did you hear about the fire at the old factory?"],
        ["you", "Yes. It's been reported that nobody was injured, fortunately."],
        ["partner", "Do they know what caused it?"],
        ["you", "Not yet. The cause is still being investigated by the fire service."],
        ["partner", "I heard the building is going to be demolished."],
        ["you", "Apparently, it's going to be replaced by a new park."]
      ] },
    { id: "dlg-B2-u3", level: "B2", title: "Who could have done it?", function: "Speculating about past events",
      expressions: ["It must have been...", "He can't have...", "She might have..."],
      lines: [
        ["partner", "Someone ate all the cake I left in the office fridge!"],
        ["you", "It must have been someone from the night shift."],
        ["partner", "Could it have been Giorgi? He loves chocolate."],
        ["you", "He can't have taken it. He was on holiday all week."],
        ["partner", "Then who was it?"],
        ["you", "Maybe the cleaners thought it was old and threw it away."]
      ] },
    { id: "dlg-B2-u4", level: "B2", title: "Negotiating at work", function: "Negotiating and reaching a compromise",
      expressions: ["Would you be willing to...?", "As long as...", "Let's meet halfway."],
      lines: [
        ["partner", "We need the report by Thursday. Is that possible?"],
        ["you", "It's going to be difficult. Would you be willing to give me until Friday?"],
        ["partner", "Friday is quite late for us. What's the main problem?"],
        ["you", "I'm still waiting for the sales figures from the other team."],
        ["partner", "OK, let's meet halfway. Send me a draft on Thursday and the final version on Friday."],
        ["you", "That works for me, as long as I get the figures by Wednesday."]
      ] },
    { id: "dlg-B2-u5", level: "B2", title: "A debate on social media", function: "Presenting and defending an argument",
      expressions: ["The main point is that...", "That may be true, but...", "On balance,..."],
      lines: [
        ["partner", "I think social media does more harm than good."],
        ["you", "That may be true for some people, but it also helps people stay connected."],
        ["partner", "But studies show it increases anxiety, especially among teenagers."],
        ["you", "The main point is that the problem isn't the technology itself, but how we use it."],
        ["partner", "So what's the solution?"],
        ["you", "On balance, I'd say better education and stricter rules for platforms."]
      ] },
    // ---------- C1 ----------
    { id: "dlg-C1-u1", level: "C1", title: "Presenting a project", function: "Emphasising key points in a presentation",
      expressions: ["What really matters is...", "Not only..., but also...", "It was ... that made the difference."],
      lines: [
        ["partner", "Could you summarise the results of the project for the board?"],
        ["you", "Certainly. Not only did we finish on time, but we also came in under budget."],
        ["partner", "Impressive. What made the biggest difference?"],
        ["you", "It was the decision to involve customers early that made the difference."],
        ["partner", "And what should we focus on next year?"],
        ["you", "What really matters now is scaling the model without losing quality."]
      ] },
    { id: "dlg-C1-u2", level: "C1", title: "A formal enquiry", function: "Making polite formal requests and setting conditions",
      expressions: ["Should you require...", "Provided that...", "I would rather..."],
      lines: [
        ["you", "Good afternoon. I'm calling about the conference room booking for next month."],
        ["partner", "Of course. Should you require any equipment, we can arrange it in advance."],
        ["you", "That would be helpful. Could we have the room until six, provided that it's available?"],
        ["partner", "That shouldn't be a problem. Would you like catering as well?"],
        ["you", "I'd rather we kept it simple — just coffee and water, please."],
        ["partner", "Certainly. I'll send you a written confirmation today."]
      ] },
    { id: "dlg-C1-u3", level: "C1", title: "Discussing research findings", function: "Describing findings cautiously and precisely",
      expressions: ["The findings appear to suggest...", "Having analysed...", "It is widely believed that..."],
      lines: [
        ["partner", "What did your study find about remote work and productivity?"],
        ["you", "Having analysed data from over two thousand employees, we found a modest increase in productivity."],
        ["partner", "Is that true for everyone?"],
        ["you", "Not quite. The findings appear to suggest that junior staff benefit less."],
        ["partner", "Why might that be?"],
        ["you", "It's widely believed that they rely more on informal learning in the office."]
      ] },
    { id: "dlg-C1-u4", level: "C1", title: "Disagreeing tactfully", function: "Conceding a point while maintaining your position",
      expressions: ["Admittedly,...", "Much as I agree with..., I...", "No matter how..., ..."],
      lines: [
        ["partner", "I really think we should cancel the festival this year because of the budget."],
        ["you", "Admittedly, money is tight, but cancelling it would disappoint a lot of people."],
        ["partner", "No matter how popular it is, we can't spend money we don't have."],
        ["you", "Much as I agree that we need to save, there might be a middle way."],
        ["partner", "Such as?"],
        ["you", "We could run a smaller version and look for local sponsors to cover the rest."]
      ] },
    { id: "dlg-C1-u5", level: "C1", title: "A panel discussion", function: "Contributing to an academic discussion",
      expressions: ["Arguably,...", "Whereas..., ...", "To a large extent,..."],
      lines: [
        ["partner", "Does technology make education more equal or less equal?"],
        ["you", "Arguably, it does both. It opens access, whereas it can also widen existing gaps."],
        ["partner", "Could you give an example?"],
        ["you", "Online courses are free, but they assume a reliable connection and a quiet place to study."],
        ["partner", "So what determines the outcome?"],
        ["you", "To a large extent, it depends on whether governments invest in infrastructure and support."]
      ] }
  ];
})(window);
