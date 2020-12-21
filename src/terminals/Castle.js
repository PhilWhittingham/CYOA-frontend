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
          choiceItems[2],
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
    take: {
      description: "Take the apple",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle6",
          choiceItems[1],
          `With haste, you grab the apple and cram it into your bag of holding. Steadying\n` +
            `yourself, you ready your weapon and pass through to the next room. The darkness\n` +
            `that owns this space is momentarily interrupted by a whip of lightning that briefly\n` +
            `illuminates the room. Only for a second do you catch a glimpse of the room and the\n` +
            `beast that occupies it.`,
          `A package hint is`,
          `Open package`
        ),
    },
    leave: {
      description: "Leave the apple",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle6",
          choiceItems[2],
          `You leave the apple and, with haste, crash through the door into the next room.\n` +
            `The door behind you slams shut. You steady yourself and ready your weapon. The darkness\n` +
            `that owns this space is momentarily interrupted by a whip of lightning that briefly\n` +
            `illuminates the room. Only for a second do you catch a glimpse of the room and the\n` +
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
    "Proceeding through the kitchen to the only visible exit. You pass rows of kitchen",
    "equipment and reflective surfaces, but, something catches your eye. It's an apple,",
    "perfectly round and green as if designed by the gods themselves. Recognising the",
    "urgency of the moment, you resolve to either leave it behind, or carry it with you.",
    ".",
    "What will you do? (type 'help' for commands)",
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
          choiceItems[2],
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

export const Castle6 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    right: {
      description: "Dodge right",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle7",
          choiceItems[1],
          `Your right leg buckles and you launch yourself under the oncoming blade. It\n` +
            `narrowly misses your back as you roll to the beast's right hand side. He spins.\n` +
            `following the sword which eventually crashes against the stone floor, sending sparks.` +
            `"Fast eh? Perhaps you are the one of which the prophecy foretold."`,
          `A package hint is`,
          `Open package`
        ),
    },
    left: {
      description: "Dodge left",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle8",
          choiceItems[2],
          `Your left leg buckles and you launch yourself ahead of the oncoming blade. You\n` +
            `dive to the creatures left, but the heavy sword catches you on its way around.\n` +
            `Hot metal digs into the flesh on your right forearm. As you finish your manoeuvre,\n` +
            `you retreat away from Gamooth. The wound is not fatal, but will surely impair your\n` +
            `ability in combat. "Pathetic..."`,
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
    '"My name is Gamooth", the beast snarls. With a flick, the candles that line',
    "the walls ignite and coat the room in a dim light. You can now see the beast clearly.",
    "You can make out it's tusks protruding from the corners of his wide grin. You can",
    "see it's eyes; menacing pools of orange stood firm either side of a snout-like nose.",
    "The eyes are locked on you. You can see the scope of the beast; it stands at-least",
    "thrice your height, and five times your width. You can see the sword carried by the",
    'beast\'s hulking left hand. "Why do you impose upon my abode?" before you can muster,',
    "a response, Gamooth closes the gap between you. The beast moves through the expanse of",
    "the empty room with baffling speed.",
    "Gamooth's sword arcs towards you from your right.",
    ".",
    "What will you do? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Castle"
    />
  );
};

export const Castle7 = ({ reloadFlag, choiceItems }) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const commands = {
    guard: {
      description: "Raise your weapon to defend from the strike",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle9",
          choiceItems[1],
          `You raise your weapon and prepare to feel the force of the greatsword crashing\n` +
            `against it. You sense contact, minor resistance, and then a... Snap? Your broken weapon\n` +
            `falls to the floor. Gamooth's greatsword ricochets from the contact point. The beast\n` +
            `stumbles backwards as it's sword flies across the room.`,
          `A package hint is`,
          `Open package`
        ),
    },
    attack: {
      description: "Stab at the beast",
      fn: () =>
        choiceFunction(
          choiceMade,
          setChoiceMade,
          "Castle8",
          choiceItems[2],
          `You attack immediately, taking advantage of Gamooth's slow swing. Picking a spot\n` +
            `in the beast's chest, you stab with force. A brief grin cracks the face Gamooth's\n` +
            `face as you are struck with the greatsword. Your attack did nothing against the hide-like\n` +
            `skin. You reel in pain. The attack glanced off your right forearm. The wound is not fatal\n` +
            `but will surely impair your ability in combat. "Pathetic..."\n`,
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
    '"My rise to power has been long awaited. My birth was at the dawn of time itself.',
    'None shall stand between me and conquest". Gamooth turns to face you. You ready',
    "your weapon. Again, it approaches with speed, ready to strike. It winds another swing",
    "from the right.",
    ".",
    "What will you do? (type 'help' for commands)",
  ];
  return (
    <CYOATerminal
      commands={commands}
      startText={welcomeText}
      location="Castle"
    />
  );
};

export const Castle8 = ({ reloadFlag, choiceItems, hasHealing }) => {
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
          choiceItems[2],
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
    '"My might is unparalleled. My body is iron. You shall not leave here alive". Gamooth readies',
    "another swing.",
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

export const Castle9 = ({ reloadFlag, choiceItems }) => {
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
          choiceItems[2],
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
