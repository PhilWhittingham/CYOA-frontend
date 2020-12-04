import React, { useState } from "react";

import { CYOATerminal } from "../CYOATerminal";
import { timeout, choiceFunction } from "../../utils";

export const Forest = ({ reloadFlag, choiceItems }) => {
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
          "Tree",
          choiceItems[2],
          `You head deeper into the darkness of the forest.\n` +
            `The pain in your leg is unmanageable. The village might have a doctor, but the\n` +
            `pull of the forest is too great.\n` +
            `You clutch at your leg and something falls out.\n` +
            `It's a note, with a large number scralled beneath it...\n`,
          `The note says``The number is`
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
