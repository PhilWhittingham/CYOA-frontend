import React, { useState } from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout, choiceFunction } from "../utils";

export const Tree1 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    yes: {
      description: 'Reply "yes" to the elves',
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Tree2",
          choiceItems[1],
          `Much to the delight of all of the elves that surround you, you agree to join\n` +
            `them for dinner this evening. After your care has finished, you are given leave to\n` +
            `prepare yourself for the evening. You are shown to small room with a bed and a desk.\n` +
            `On the wall, there is a painting of a family of elves. A small brass plaque on the frame\n` +
            `has a note and a number engraved on it.`,
          `The engraved message is`,
          `The engraved number is`
        ),
    },
    no: {
      description: 'Reply "no" to the elves',
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Tree3",
          choiceItems[2],
          `"Understandable, you must be tired" the elf says. The elves around you sigh as they lift\n` +
            `you and carry you through to a small room with a bed and a desk. "Before you leave, you simply\n` +
            `must take a look around the tree. We've accomplished something amazing here, I'm sure you'll\n` +
            `agree! Certainly try the bar, best drinks in all of Lethlor!". The elf smiles at you and exits.\n` +
            `On the wall, there is a painting of a family of elves. A small brass plaque on the frame\n` +
            `has a note and a number engraved on it.`,
          `The engraved message is`,
          `The engraved number is`
        ),
    },
    continue: {
      description: "Continue with the next section of your journey.",
      fn: async function () {
        if (!choiceMade) {
          return `You must select the path before walking it...`;
        } else {
          await timeout(2000);
          reloadFlag();
          return `Your selection has been made. The journey continues tomorrow.`;
        }
      },
    },
  };

  const welcomeText = [
    "You awake on a stretcher being carried by a series of tiny humanoid creatures through the",
    "spiraling hallways of what you figure must be the inside of the glowing tree. Despite your",
    "previous illness, you feel surprisingly well. You're also pleased to notice that the pain in",
    "your leg has gone, replaced by a healing warmth that covers your body.",
    "The creatures notice that you've woken and stop to explain.",
    '"We are the tree elves of Lethlor forest, and we inhabit this tree as the primary centre of',
    "our civilisation in this forest. You appear to have fallen unwell and have thusly received care",
    "in our medical facility. You should feel quite well. We take kindly to visiters here.",
    'Please, would you join us for a grand feast this evening?"',
    ".",
    "How will you respond? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal commands={commands} startText={welcomeText} location="Tree" />
  );
};

export const Tree2 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    stew: {
      description: "Gesture towards the stew",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Tree4",
          choiceItems[1],
          `You are served a bowl of stew. You grasp at the wooden spoon and compose\n` +
            `yourself before your first mouthful. It is truly disgusting. Disgusting, but\n` +
            `managable. Smiles grow around the table as your audience are notably pleased\n` +
            `to see an outsider enjoying their cuisine. You look down into the stew. The\n` +
            `swimming contents seem to form letters and numbers`,
          `The stew says`,
          `The number is`
        ),
    },
    meat: {
      description: "Gesture towards the meat",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Tree4",
          choiceItems[2],
          `You are served some slices of the meat. Notably, the inside moves much more than\n` +
            `any food you've eaten before. Your stomach churns as you muster a shaky grasp for the\n` +
            `wooden cutlery besides your plate. Raising some meat to your mouth, the stench grabs\n` +
            `you and you recoil in disgust. A wave of shock takes the room. "A CURSE on you!"\n` +
            `shouts the elf at the head of the table, the awe and intrigue now replaced by anger\n` +
            `and shame. "Does our offering displease you?! A CURSE ON YOU!" he continues.\n` +
            `You are hastily dragged out of the room. As you're leaving, the head elf chants an\n` +
            `incantation and a number...`,
          `The incantation is`,
          `The number is`,
          "cursed"
        ),
    },
    continue: {
      description: "Continue with the next section of your journey.",
      fn: async function () {
        if (!choiceMade) {
          return `You must select the path before walking it...`;
        } else {
          await timeout(2000);
          reloadFlag();
          return `Your selection has been made. The journey continues tomorrow.`;
        }
      },
    },
  };

  const welcomeText = [
    "The evening comes and you are escorted through the arteries of the tree into",
    "a large dining hall located at the core of the trunk. In the centre of the hall",
    "sits a dining table playing host to a large number of impressive arm chairs. The ",
    "magnitude of the occasion intimidates you as you are led to a you-sized arm-less chair",
    "at the head of the table. Upon taking your seat, a parade of elves enter the hall and",
    "fill the empty chairs around the table. A warm buzz echos around the hall as you notice",
    "the elves whisper amongst themselves. They occasionally glance and point in your",
    "direction.",
    "A large elf sat opposite you lightly knocks a gavel on the table, calling for silence",
    "and signalling for the food to be served. The table begins to brim with unsettling",
    "food. The sight of the food is almost too much to bear, but the ceremony of the occasion",
    "hardens you to save face. You're aware you must remain polite to not offend your hosts,",
    "but are unsure how you'll be able to eat any of this revolting food.",
    "Your host smiles while gesturing at the two dishes in front of you. One is a bright green",
    "stew, very thin and smelling vaguely of swamp water. The other is an unidentifiable meat",
    "that appears rotten.",
    ".",
    "Which dish will you dine on? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal commands={commands} startText={welcomeText} location="Tree" />
  );
};

export const Tree3 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    enter: {
      description: "Go into the busy bar.",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Tree5",
          choiceItems[1],
          `You wander through the doorway of the bar, dodging elves as they bustle\n` +
            `around you. You break straight for the single empty stool at the bar. The\n` +
            `elf seated to your left turns and takes interest in you. "Hey there *hic* friend,\n` +
            `how about I buy you *hic* a drink". He calls the bartender and orders something\n` +
            `you've never heard of.`,
          `The drink is called`,
          `The cost is`
        ),
    },
    explore: {
      description: "Continue to explore the tree",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Tree6",
          choiceItems[2],
          `Bypassing the bar, you begin to make your way through the busy hub of the tree.`,
          `The message is`,
          `The number is`
        ),
    },
    continue: {
      description: "Continue with the next section of your journey.",
      fn: async function () {
        if (!choiceMade) {
          return `You must select the path before walking it...`;
        } else {
          await timeout(2000);
          reloadFlag();
          return `Your selection has been made. The journey continues tomorrow.`;
        }
      },
    },
  };

  const welcomeText = [
    "Exiting your room, you begin to descend through the endless knot of corridors",
    "that exist within the tree city. Following signs to the center of the tree,",
    "you walk past a dining hall. Presumably this is where you would have been dining.",
    "You feel vindicated in your decision as the stench of the food is rather off-putting.",
    "Arriving at the centre, you spot a sign for the bar. There's quite the commotion",
    "inside; the bar looks busy and not too friendly. You hear cheering and glass smashing.",
    "Perhaps this is the rowdy part of the city?",
    ".",
    ".",
    "Will you enter or continue exploring? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal commands={commands} startText={welcomeText} location="Tree" />
  );
};

export const Tree4 = ({ reloadFlag, choiceItems, cursed }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    yes: {
      description: "Agree to check in with the elf's friend",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Clearing1",
          choiceItems[1],
          `"Sure, I'll say hi"`,
          `The message is`,
          `The number is`
        ),
    },
    no: {
      description: "Decline to check in with the elf's friend",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Clearing1",
          choiceItems[2],
          ``,
          `The message is`,
          `The number is`
        ),
    },
    continue: {
      description: "Continue with the next section of your journey.",
      fn: async function () {
        if (!choiceMade) {
          return `You must select the path before walking it...`;
        } else {
          await timeout(2000);
          reloadFlag();
          return `Your selection has been made. The journey continues tomorrow.`;
        }
      },
    },
  };

  const welcomeText = [
    "You start to make your way towards the base of the tree to exit, thankful (at least)",
    "for the medical care you've received. As you traverse the winding corridors of the tree,",
    "a small elf catches you up. \"Looks like you're leaving? Well, if you're heading north,",
    'would you mind checking in with a friend of mine? She lives in a cave not too far from here."',
    ".",
    ".",
    ".",
    "How will you respond? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal commands={commands} startText={welcomeText} location="Tree" />
  );
};

export const Tree5 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    rock: {
      description: "Gesture a rock",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "",
          choiceItems[1],
          `He pulls paper. You lose... `,
          `The message is`,
          `The number is`
        ),
    },
    paper: {
      description: "Gesture some paper",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "",
          choiceItems[2],
          `He pulls rock. You win...`,
          `The message is`,
          `The number is`
        ),
    },
    scissors: {
      description: "Gesture some scissors",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "",
          choiceItems[2],
          `He pulls paper. You win...`,
          `The message is`,
          `The number is`
        ),
    },
    continue: {
      description: "Continue with the next section of your journey.",
      fn: async function () {
        if (!choiceMade) {
          return `You must select the path before walking it...`;
        } else {
          await timeout(2000);
          reloadFlag();
          return `Your selection has been made. The journey continues tomorrow.`;
        }
      },
    },
  };

  const welcomeText = [
    "You continue to drink what turns out to be a delightfully alcoholic drink with your",
    "new friend. Rather talkative fellow, he continues to ellude to dangers of this world",
    '"Things have gotten *hic* awfully shaky since Gamooth has *hic* reawoken. Some think',
    "he's not so bad *hic*, you know, but I'm not so sure. They say he's *hic* sending",
    "his troops out nightly to pillage local *hic* villages. Legend has it *hic*, an",
    "unsuspecting and confused *hic* warrior is due to pass these *hic* ways any day",
    "now. Only they can bring an end to Gamooth's reign of terror... *hic*.\"",
    "In a non sequitur so jarring it threatens to break the whole story, he challenges you",
    "to Rock Paper Scissors (saying something about it being the last thing that is truly free)",
    'He counts down unevenly "3...... 2.*hic*. 1..."',
    ".",
    "What will you choose? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal commands={commands} startText={welcomeText} location="Tree" />
  );
};
