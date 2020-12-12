import React, { useState } from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout, choiceFunction } from "../utils";

export const Clearing1 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    swemp: {
      description: 'Walk the path to the destination "SWEMP"',
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp1",
          choiceItems[1],
          `You head towards the destination called "SWEMP".\n` +
          `After an hour of walking, the ground beneath your feet starts to feel softer. As you\n` +
          `continue, your desolate surroundings are replaced by an overgrowth of vines and swamp life.\n` +
          `The path beneath your feet vanishes but you press forward towards the base of the mountain\n` +
          `through the swamp. You look up. The vines appear to signal a message and a number.`,
          `The vines message is`,
          `The number is`
        ),
    },
    caive: {
      description: 'Walk the path to the destination "CAIVE"',
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Cave1",
          choiceItems[2],
          `You head towards the destination called "CAIVE". Before the night breaks, you arrive at\n` +
          `the base of the mountain. The chaotic rock formation juts from the scorched earth upon\n` +
          `you walk. It is as if it were formed by magic or transported here by dark powers.\n` +
          `You stop at the mouth of a cave. The path disappears into the darkness ahead of you.\n` +
          `Looking at your surroundings, you notice the engraving around the cave-mouth. The circular\n` +
          `nature of the opening eludes to the fact that the cave didn't appear here by chance.\n` +
          `Surveying the characters in the engraving, your eyes are drawn to some you understand.\n`,
          `The characters say`,
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
    "to it. On approach, you notice that the \"sign\" is a rather crude imitation of a sign, crafted",
    "out of scrap wood with odd letter combinations etched into it.",
    "The sign denotes three destinations, two northward and one southerly. You gaze north, trying",
    "to pinpoint the end of each path. One appears to lead to the base of a mountain. The other ",
    "path leads to an overgrown quagmire that adheres to the mountain on it's right side. Atop the",
    "mountain sits a fortification of impressive and terrifying stature. The mountain castle is",
    "is clouded in a miasmic fog which absorbs the light around it.",
    'Discounting the southern destination ("Vilege"), leaves you with two paths to choose from.',
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
