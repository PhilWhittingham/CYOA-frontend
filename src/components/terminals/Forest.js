import React, { useState } from "react";

import { CYOATerminal } from "../CYOATerminal";
import { timeout, choiceFunction } from "../../utils";

export const Forest1 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    left: {
      description: "Go towards the village",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Village1",
          choiceItems[1],
          `You head towards the noise coming from the village.\n` +
            `You nudge at the ache in your leg and something falls out.\n` +
            `It's a note, with a large number scralled beneath it...\n`,
          `The note says`,
          `The number is`
        ),
    },
    right: {
      description: "Go into the forest",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Forest2",
          choiceItems[2],
          `You head deeper into the darkness of the forest.\n` +
            `The pain in your leg is unmanageable. The village might have a doctor, but the\n` +
            `pull of the forest is too great.\n` +
            `You clutch at your leg and something falls out.\n` +
            `It's a note, with a large number scrawled beneath it...\n`,
          `The note says`,
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
          reloadFlag(true);
          return `Your selection has been made. The journey continues tomorrow.`;
        }
      },
    },
  };

  const welcomeText = [
    "You awake in a dark forest.",
    "You have no memory of how you got here, nor what caused the discomfort in your left leg.",
    "To your left, you can hear the distant sounds of busy townfolk.",
    "To your right, the dark, festive forest beckons you to explore deeper.",
    ".",
    ".",
    ".",
    "What will you do? (type 'help' for commands)",
  ];

  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Forest"
    />
  );
};

export const Forest2 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    investigate: {
      description: "Investigate the tree",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Tree1",
          choiceItems[1],
          `Moving towards the tree to investigate, you begin to hear the noises\n` +
            `of the village again. "But that doesn't make any sense" you tell yourself.` +
            `"The village is in the opposite direction...". At the base of the tree, you\n` +
            `awe at the scale of it. The tree is unlike any you've ever seen before.\n` +
            `Bathed in light, you press yourself against the tree. The noise grows louder.\n` +
            `"Moin!" emerges from a freshly apparated window in the bark of the tree\n` +
            `The window hosts a small human-like creature dressed in clothing constructed\n` +
            `from bark and leaves. The creature smiles in your direction. "MOIN!" it says.\n` +
            `Overwhelmed by this, you pass out. Your body is filled with a comforting warmth as\n` +
            `the creature calls for help, using a code you couldn't decipher.\n`,
          `The creature says`,
          `The code is`
        ),
    },
    goback: {
      description: "Return to the village",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Tree1",
          choiceItems[2],
          `You turn back. As you try to find your way, the forest twists with malice. The trees darken\n` +
            `until all light has faded. The ache in your left leg returns and intensifies.\n` +
            `Overcome with terror, you pass out.\n` +
            `.\n` +
            `.\n` +
            `Monstrous symbols cloud in your mind. Somehow you can understand them.\n`,
          `The vision says`,
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
          reloadFlag(true);
          return `Your selection has been made. The journey continues tomorrow.`;
        }
      },
    },
  };

  const welcomeText = [
    "You venture deeper into the forest. The dense foliage above blocks out almost all of the",
    "natural light. Regardless, you press on, as if you are but a pawn (a pawn posessed by a higher",
    "power hell bent on making it through an advent calendar, for instance).",
    "In the distance you can make out a light that appears to be emanating from a tree. The surrounding",
    "woodland dims as if to signal a path forward.",
    ".",
    ".",
    ".",
    "What will you do? (type 'help' for commands)",
  ];

  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Forest"
    />
  );
};
