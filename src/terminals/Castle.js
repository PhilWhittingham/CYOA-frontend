import React, { useState } from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout, choiceFunction } from "../utils";

export const Castle1 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    forward: {
      description: "Continue up the staircase",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle3",
          choiceItems[1],
          `You climb the staircase, finding a closed door at the top. You edge the door\n` +
            `open and peer through. It's a grand dining hall. The flicker from candle and\n` +
            `torch light illuminates every surface. You drop the torch and ready your weapon.\n` +
            `Fortunately for you, the hall is devoid of diners and staff alike.\n` +
            `You're able to sneak in unnoticed.\n`,
          `A package hint is`,
          `Open package`
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
    "You progress through the hallway equipt with your weapon in one hand and a torch in",
    "the other. The hallway is unchanging, regardless of how deep you go, but there is a",
    "clear drop in the temperature, as if someone had sucked all of the heat out of the air.",
    "You pause; looking back. There's nothing visible in either direction outside of the sphere",
    "of light emanating from your torch. You steady yourself, and continue on.",
    "Finally, you reach a staircase which spirals out of sight.",
    ".",
    "Your only option is to press forward. (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Castle"
    />
  );
};

export const Castle2 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    forward: {
      description: "Continue up the staircase",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle3",
          choiceItems[1],
          `\n` + `\n` + ``,
          `A package hint is`,
          `Open package`
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
    "Your only option is to press forward. (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Castle"
    />
  );
};

export const Castle3 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    small: {
      description: "Go through the small door",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle4",
          choiceItems[1],
          `You approach the small door and rock the handle to check for a lock. Finding\n` +
            `that it is unlocked you pull it towards you to open it. It's a lot heavier than\n` +
            `you imagined. Squeezing through the small crack you're able to create, you find\n` +
            `yourself in a large service kitchen. The metalic surfaces glimmer with your reflection\n` +
            `Out of the corner of your eyes, you spot movement. Dust rises from the source but you\n` +
            `inspect and find nothing. Someone has clearly noted your arrival.\n`,
          `A package hint is`,
          `Open package`
        ),
    },
    grand: {
      description: "Go through the grand door",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle5",
          choiceItems[1],
          `You open the grand door with caution. Despite it's weight, it swings freely on it's\n` +
            `hinges. The door frees itself from your control and crashes against the back of\n` +
            `dining hall wall. The sound echos around the vastness of the castle until there is\n` +
            `no air left for it to penetrate. You freeze for a moment until movement from the upper\n` +
            `quarters of the castle sets your teeth on edge. The noise is soon after replaced with\n` +
            `silence. You place yourself the other side of the door.\n`,
          `A package hint is`,
          `Open package`
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
    "You hear nothing as you examine the furnishings of the great dining hall. If only",
    "there were some scraps you could have a reasonable meal, but the place settings are",
    "eerily clean. There is nothing to gain from staying here, you decide you must move on.",
    "Three doors penetrate the walls of the dining hall. One leads back the way you came",
    "The doors that remain are starkly different; one is a grand door, clearly intended to be",
    "the main entrance for guests into the hall, the other is a side door that you conclude",
    "must lead to a kitchen or service area.",
    ".",
    "Which path will you choose. (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Castle"
    />
  );
};

export const Castle4 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    small: {
      description: "Go through the small door",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "",
          choiceItems[1],
          `\n` + `\n`,
          `A package hint is`,
          `Open package`
        ),
    },
    grand: {
      description: "Go through the grand door",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "",
          choiceItems[1],
          `\n` + `\n`,
          `A package hint is`,
          `Open package`
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
    "In the kitchen, you find a snack. Do you take it now or move along.",
    ".",
    "Which path will you choose. (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Castle"
    />
  );
};

export const Castle5 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    right: {
      description: "Dive right",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "",
          choiceItems[1],
          `\n` + `\n`,
          `A package hint is`,
          `Open package`
        ),
    },
    left: {
      description: "Dive left",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "",
          choiceItems[1],
          `\n` + `\n`,
          `A package hint is`,
          `Open package`
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
    "You're in the entrance hall. Moving forward triggers a trap, do you dive left or right",
    ".",
    "Which path will you choose. (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Castle"
    />
  );
};
