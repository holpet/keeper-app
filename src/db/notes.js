import { genID, getDate } from "../lib/Helpers";

const date = getDate();

const notes = [
  {
    title: "Real Grim Reaper-types",
    text: "Someone and someone got into a fight because someone and someone fought. Someone else tried to break the fight only to fight back when someone fought the breaking of the fight. It is believed someone and someone are fighting till this day.",
    date: date,
  },
  {
    title: "Say the magic words, Fat Gandalf.",
    text: "Chatted with a stranger because someone did something cool. The cool thing didn't last long, though, and I had to help clean up the aftermath. Thinking of skipping the next party.",
    date: date,
  },
  {
    title: "So what’s it going to be, sullen silence or mean comment.",
    text: "I hobbied which led to someone being annoyed with me. The hobbying wasn't even that loud. *Sigh*",
    date: date,
  },
  {
    title: "This is my most prized possession...",
    text: "I went on a holiday as usual. Cottage got robbed, but who needs wellies anyway.",
    date: date,
  },
  {
    title: "I don't know. Might further the plot.",
    text: "Thought of old times which led to me not being able to do anything. Apart from drinking my early morning coffee. It's never a bad time for eine Tasse Kaffee Vollmilch ohne Zucker, oder?",
    date: date,
  },
  {
    title: "Whose kitty litter",
    text: "Recently, I delved into learning german by listening to popular german rap songs. This time next year I'm gonna be fluent. The cat is scared of me, but I will persevere.",
    date: date,
  },
  {
    title: "I thought it was chocolate yogurt for so long.",
    text: "The Vollmilch Kaffees are wreaking havoc on my stomach. I should have listened to coach Greg.",
    date: date,
  },
  {
    title: "Please don't make the super suit green...",
    text: "Today I was sorted into Hufflepuff. My worst nightmare has come true. I hate orange and black stripes with a passion and if one more person tells me I'm a particularly good finder, the Great Hall table is gonna flip. I have yet to find (a job).",
    date: date,
  },
  {
    title: "These timelines are confusing.",
    text: "That's it. That't the tweet.",
    date: date,
  },
  {
    title: "Maximum effort!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    date: date,
  },
  {
    title: "That's like... 16 walls!!!!",
    text: "Spent quality time with someone at (some place). You're hearing about me spending some quality time with someone at (some place). God is watching you hearing about...",
    date: date,
  },
  {
    title: "Right next to the cure for blindness.",
    text: "If you ever read this, please understand, my coding skills can always get better. It's not that bad. I learn fast.",
    date: date,
  },
  {
    title: "Somehow the Avengers keep losing my phone number.",
    text: "The upstairs neighbour just flooded my apartment with water. Help.",
    date: date,
  },
];

function addIDs() {
  notes.forEach((note) => {
    note.id = genID();
  });
}
addIDs();

export default notes;
