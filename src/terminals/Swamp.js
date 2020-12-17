import React, { useState } from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout, choiceFunction } from "../utils";

export const Swamp1 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    reeds: {
      description: "Hide beneath the swamp water",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp2",
          choiceItems[1],
          `You quickly fashion a straw out of the reed and submerge yourself in the water.\n` +
            `Heavy footsteps crash around you and disappear off into the distance. The disturbed\n` +
            `water you reside in begins to calm. Perhaps you've escaped danger this time?\n` +
            `The water toys with the reeds and vines ahead of you, forming words and numbers.\n`,
          `The words say`,
          `The number is`
        ),
    },
    trunk: {
      description: "Hide in the tree trunk",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp3",
          choiceItems[2],
          `You conceal yourself in the hollow trunk of the tree. The creatures approach and\n` +
            `and, as they pass, you see them for the first time. They stand roughly a foot taller\n` +
            `than you and weigh thrice as much. You wouldn't stand a chance, and fortunately, you\n` +
            `appear to have avoided this encounter. Examining the inside of the trunk, you notice\n` +
            `a message scratched into the wood. Perhaps this hiding spot isn't here by chance?`,
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
    "You press deeper into the swamp. The air around you hangs heavy with a moist haze.",
    "As you push past the overgrown wetland plants, you begin to hear voices barely.",
    "audible over the sound of you moving. You slow your movement to take note. The voices",
    "are gruff and harsh. Between the growls, laughter and hollars, you can't make out many",
    "words. Sensing danger, you edge away from the voices.",
    "The voices halt suddenly as a branch snaps beneath your foot. You must think quickly as",
    "you hear the sounds of rustling quickly approach your location. Your eyes dart around,",
    "catching a hollow tree trunk to your left. You also notice the reeds to your right,",
    "would make it possible to breath beneath the swamp water.",
    ".",
    "What will you do? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Swamp"
    />
  );
};

export const Swamp2 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    rocks: {
      description: "Say your legs taste like rocks",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp4",
          choiceItems[1],
          `"Uhhh, uhhh, rocks" you mumble. "GLORIOUS" shouts the orc. "We eat rocks for \n` +
            `breakfast! Lets have ya then." He edges towards you with hunger in his eyes.\n` +
            `You squirm in the grasp of another orc, but you're unable to wrestle free. Suddenly\n` +
            `your predicted life expectency is increases as the orc edging towards you is struck\n` +
            `from behind with a club attached to the arm of a larger, gruffer looking orc. "No one\n` +
            `feasts until Gamooth has seen 'em, you 'ear?". The group continue, leaving the struck\n` +
            `orc in a heap on the floor. The eyes behind his eyelids flicker as he mumbles some words.\n`,
          `The words are`,
          `The number is`
        ),
    },
    mud: {
      description: "Say your legs taste like mud",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp4",
          choiceItems[2],
          `"Uhhh, uhhh, mud" you you scream. "MUD?!" shouts the orc. "This ass is takin' the\n` +
            `piss! THINK WE'RE STUPID?!". He raises his club to strike you and brings it down with\n` +
            `force upon your head. You're knocked out.\n` +
            `Before you awake, you have visions of dancing words and numbers, a message maybe?`,
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
    "You wait a few more moments and rise from the water. You believed you were safe, but",
    'you find yourself surrounded. "KNEW YOU\'D COME UP EVENTUALLY" an orc barks at you',
    "angrily. \"we was beginnin' to think you'd died down there\" another mocks. A smaller orc",
    'grabs you by your tunic "LOOKS LIKE MEATS BACK ON THE MENU BOYS" and tosses you over it\'s',
    "shoulder, much to the excitement of the group that surround you.",
    "They set off back in the direction they came from. You overhear them talk amongst themselves",
    'in their harsh tone. "Gamooths gonna have our guts for garters if we don\'t bring the prisoner"',
    "one says. \"Maybe a little nibble of it's leg? Dunt need those anymore! Ey you, whats your legs",
    'taste like anyways?"',
    ".",
    "How will you respond? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Swamp"
    />
  );
};

export const Swamp3 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    hill: {
      description: "Hide  the swamp water",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp5",
          choiceItems[1],
          `You quickly fashion a straw out of the reed and submerge yourself in the water\n` +
            ``,
          `The message is`,
          `The number is`
        ),
    },
    tree: {
      description: "Hide in the tree trunk",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp6",
          choiceItems[2],
          `You conceal yourself in the hollow trunk of the tree. The creatures approach and\n` +
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
    "Tree trunk hiding leads to escape from the orcs. Surveylance is possible and you decide what vantage point to take",
    ".",
    "What will you do? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Swamp"
    />
  );
};

export const Swamp4 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    injury: {
      description: "Feign a fatal injury",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp7",
          choiceItems[1],
          `You groan in agony, clasping at the mud around you to fake dried blood. As the orc\n` +
            `approaches, you drop to the floor and grip your calf tightly. "It bit me!" you\n` +
            `shout. The orc admits "uh, ok ok, I'll go get the Shaman". As he disappears you hear\n` +
            `him say something about how he will lose his job and his parents being so disappointed.\n` +
            `In his absence, another orc approaches the cage. You up the ante on your act but he encourages\n` +
            `quiet. "Shhh... I'm here to let you out. Can't say much, but the prophecy is too important\n` +
            `for me not to. It's written that Gamooth will be slain by a hapless wanderer, ending the terror.\n` +
            `I think you are that wanderer. You must go now, go via the armory and fulfil your destiny."\n` +
            `He points and you run, heading into the armory. You notice a motivational slogan on the wall.\n`,
          `The slogan is`,
          `The number is`
        ),
    },
    dead: {
      description: "Play dead in the cage",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp5",
          choiceItems[2],
          `You collapse to the floor, feigning death. It takes a couple of moments for the guard\n` +
            `to react appropriately, but eventually he runs, calling for help. Now is your chance.\n` +
            `You bolt, crashing through the bars of the cage and through to the other side, heading\n` +
            `for the outpost boundary, until, you're finally free. You steady your breathing.\n` +
            `To avoid a repeat of this situation, you find a suitably sized stick and sharpen the end\n` +
            `to a point. Your new make-shift weapon isn't perfect, but it'll do... for now.\n` +
            `Stars spin around your head as you, exhausted, start to make your way towards the base of the\n` +
            `mountain again. The stars appear to speak a language you can somehow understand.\n`,
          `The stars say`,
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
    "You're carried through the swamp on orc-back until you arrive at their settlement; a",
    "crude outpost located on a rare dry mound in the swamp. There are many makeshift buildings",
    "here. You spot a mess hall, lodgings and an armory. You're thrown into a small wooden cage",
    "in the corner of the outpost. The wooden bars are flimsy and easily broken, but the cage is",
    "under constant surveillance from a nearby orc. To get free, you must think of something. Running",
    "would surely result in your death. But, noting that they clearly want you alive, maybe you can",
    "feign an injury, or death? Perhaps that could buy you enough time to get free.",
    ".",
    "What will you do? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Swamp"
    />
  );
};

export const Swamp5 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    attack: {
      description: "Reveal yourself and attack",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp6",
          choiceItems[1],
          `You reveal yourself with a yell, grabbing the orc from behind and squeezing your\n` +
            `weapon into it's neck. "Why are you following me?!". The orc silently struggles\n` +
            `against your grip and starts to reply in a hushed tone. "Shhh... I'm here to help you.\n` +
            `If they know I'm here they'll kill me, but the prophecy is too important for me not to be.\n` +
            `It's written that Gamooth will be slain by a hapless wanderer, ending his reign of terror.\n` +
            `I think you are that wanderer. You must fulfil your destiny, but it's dangerous to go alone."\n` +
            `"Please, take this." he drops the sword and, as you loosen your grip, he runs back into the swamp.\n` +
            `You examine the sword. A little large for you, but the craftmanship is good.\n` +
            `There are some runeson the hilt. You lean closer and translate them.\n`,
          `The runes say`,
          `The number is`
        ),
    },
    run: {
      description: "Reveal yourself and run",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp6",
          choiceItems[2],
          `Silently, you rise and begin a run that quickly turns into a sprint. You're closely\n` +
            `followed by footsteps behind you that are getting closer. Closer, until, you're tackled\n` +
            `to the ground. The orc begins talking in a hushed tone "Shhh... I'm here to help you.\n` +
            `If they know I'm here they'll kill me, but the prophecy is too important for me not to be.\n` +
            `It's written that Gamooth will be slain by a hapless wanderer, ending his reign of terror.\n` +
            `I think you are that wanderer. You must fulfil your destiny, but it's dangerous to go alone."\n` +
            `"Please, take this." He rises from you and hands you a sword before running back into the swamp\n` +
            `You examine the sword. A little large for you, but the craftmanship is good.\n` +
            `There are some runeson the hilt. You lean closer and translate them.\n`,
          `The runes say`,
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
    "Back amongst the overgrowth of the swamp, you're making your way towards the moutain castle",
    "ahead of you. You pause. Are those... Footsteps? You ready yourself for another orc ambush.",
    "Through the hanging vines and swamp trees, you catch a glimmer of light from a blade. You wait",
    "until the perfect moment to reveal yourself. It sounds like there is only one, and the element",
    "of surprise gives you the advantage.",
    ".",
    "What will you do? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Swamp"
    />
  );
};

export const Swamp6 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    door: {
      description: "Take the door",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle1",
          choiceItems[1],
          `You open the door. Inside it is pitch black but as your eyes adjust to the darkness\n` +
            `you're able to make out a torch on the wall. Setting aside your weapon, you light\n` +
            `the torch, revealing a long stone corridor. You hear nothing as you start to edge\n` +
            `your way along the corridor. The door shuts violently behind you, and in your panic,\n` +
            `you trip on the uneven cobblestone floor. Rising, you notice a message scratched into the\n` +
            `stone.`,
          `The message is`,
          `The number is`
        ),
    },
    mountain: {
      description: "Climb the mountain",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle2",
          choiceItems[2],
          `You begin to make your way up the mountain. One shaky grasp at a time, you eventually\n` +
            `arrive at the summit. At this point, you can easily see the grandeur of the castle ahead\n` +
            `of you. Oddly desolate, you cross an unmanned bridge to arrive at a door. There's a message\n` +
            `pinned to it that you can't quite understand.`,
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
    "You arrive at the foot of the mountain. Your eyes trail upwards, following a path towards",
    "the keep. The surrounding light seems to fade as the mountain rises up to meet a circling cloud",
    "of fog that appears to be in constant movement. Regardless, the path ahead seems safe enough.",
    "As you assess the climb one more time, you glance left and notice a door built in to the side of",
    "the mountain. Was that there before? It's frail in its construction and appears to bare no lock.",
    ".",
    "What path will you take? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Swamp"
    />
  );
};

export const Swamp7 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    axe: {
      description: "Hide  the swamp water",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp7",
          choiceItems[1],
          `You quickly fashion a straw out of the reed and submerge yourself in the water\n` +
            ``,
          `The message is`,
          `The number is`
        ),
    },
    sword: {
      description: "Hide in the tree trunk",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp5",
          choiceItems[2],
          `You conceal yourself in the hollow trunk of the tree. The creatures approach and\n` +
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
    "You sneak into the armory, grabbing a weapon and escaping. You choose which weapon to grab",
    ".",
    "What will you do? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Swamp"
    />
  );
};
