import React, { useState } from "react";

import { CYOATerminal } from "../CYOATerminal";
import { timeout, choiceFunction } from "../../utils";

export const Village1 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    yes: {
      description: 'Reply "yes" to the guards.',
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Forest2",
          choiceItems[1],
          `You give the guards a stony-faced "yes".\n`,
          `"Hmm, sorry buddy, town's full. Try the next one over, I'm sure they're open for beaten up losers."\n` +
            `Returning back the way you came, you hear one of the guards shout.\n` +
            `"Watch yourself tonight! We're hearing sightings of Gamooth's army"\n` +
            `You continue, and wonder what a "Gamooth" is. Heading back into the forest\n` +
            `you see a strange carving on a tree. Some forgotten language no doubt, with a number next to it.\n`,
          `The message says`,
          `The number is`
        ),
    },
    no: {
      description: 'Reply "no" to the guards.',
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Village2",
          choiceItems[2],
          `In anger, you tell the guards to piss off.\n` +
            `"You can keep your stinking village to yourself!" you shout.\n` +
            `"Awh, we're only playing, c'mon in. It looks like you could do with a rest."\n` +
            `You begrudgingly agree and proceed past the village boundary.\n` +
            `Upon entering, you notice the town sign - "Rumpleton". Beneath the town name,\n` +
            `there is the town slogan, and a number.\n`,
          `The town slogan is`,
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
    "Approaching the village, you notice the faint noise grow and grow.",
    "Yes, this is definitely the right direction. Upon reaching the village boundary ",
    "(a scant collection of poor quality wood, feabily errected into a wall), you",
    "are accosted by two guards. The heavy-set and poorly-armed duo comically toy with you;",
    '"Would you like to enter the village?" the one on the left chuckles.',
    "You feel as if this might be a trick...",
    ".",
    ".",
    ".",
    "How will you respond? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Village"
    />
  );
};

export const Village2 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    yes: {
      description: "",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "",
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
          "",
          choiceItems[1],
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
          reloadFlag(true);
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
      location="Village"
    />
  );
};
