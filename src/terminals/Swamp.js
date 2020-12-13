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
    "You press deeper into the swamp. The air around you hangs heavy with a moist green.",
    "haze. As you push past the overgrown wetland plants, you begin to hear voices barely.",
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
