import React, { useState } from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout, choiceFunction } from "../utils";

export const Clearing1 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    swemp: {
      description: 'Walk the path to the destination "Swemp"',
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp1",
          choiceItems[1],
          ``,
          `The message is`,
          `The number is`
        ),
    },
    caive: {
      description: 'Walk the path to the destination "Caive"',
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Cave1",
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
    "You make your way north, continuing to trudge through the forest. Your surroundings",
    "become more clear as the density of the trees begins to lessen. This continues until you",
    "find yourself at the forest boundary. The clearing ahead of you is in stark contrast to",
    "the forest behind. The tree stumps and scorched earth indicate that this too was once part",
    "of the forest.",
    "In the distance, you spot three paths converging on a point with a handy sign planted next",
    "to it. On approach, you notice that the sign is a rather crude imitation of a sign, crafted",
    "out of scrap wood with odd letter combinations etched into it.",
    "The sign denotes three destinations, two northward and one southerly. Discounting",
    'the southern destination ("Vilege"), leaves you with two paths to choose from.',
    ".",
    ".",
    "Which way will you go? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Clearing"
    />
  );
};
