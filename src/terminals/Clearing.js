import React, { useState } from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout, choiceFunction } from "../utils";

export const Clearing1 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    yes: {
      description: "",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Cave1",
          choiceItems[1],
          ``,
          `The message is`,
          `The number is`
        ),
    },
    no: {
      description: "",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Swamp1",
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
    "",
    ".",
    ".",
    ".",
    "How will you respond? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Clearing"
    />
  );
};
