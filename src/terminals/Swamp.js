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
      description: "Hide beneath the swamp water",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp2",
          choiceItems[1],
          `You quickly fashion a straw out of the reed and submerge yourself in the water\n` +
            ``,
          `The message is`,
          `The number is`
        ),
    },
    mud: {
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
            `appear to have avoided this encounter.`,
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
    'but you find yourself surrounded. "KNEW YOU\'D COME UP EVENTUALLY" an orc barks at you',
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
    reeds: {
      description: "Hide beneath the swamp water",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp2",
          choiceItems[1],
          `You quickly fashion a straw out of the reed and submerge yourself in the water\n` +
            ``,
          `The message is`,
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
            `appear to have avoided this encounter.`,
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
