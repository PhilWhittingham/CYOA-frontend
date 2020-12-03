import React, { useState, useRef } from "react";
import axios from "axios";

import { CYOATerminal } from "../CYOATerminal";
import { API_URL_LOCATION } from "../../constants";

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export const Forest = ({ reloadFlag }) => {
  const [choiceMade, setChoiceMade] = useState(false);
  const forestTerminal = useRef();

  const commands = {
    left: {
      description: "Go towards the village",
      fn: async function () {
        if (choiceMade) {
          return `The hand has already been dealt`;
        } else {
          await timeout(2000);
          await axios.put(API_URL_LOCATION, { location: "Village" });
          setChoiceMade(true);
          return [
            `You head towards the noise coming from the village.\n`,
            `You nudge at the ache in your leg and something falls out.\n`,
            `It's a note, with a large number scralled beneath it...\n`,
            `The note says; ""\n`,
            `The number is; ""\n`,
          ];
        }
      },
    },
    right: {
      description: "Go into the forest",
      fn: async function () {
        if (choiceMade) {
          return `The hand has already been dealt`;
        } else {
          await timeout(2000);
          await axios.put(API_URL_LOCATION, { location: "Tree" });
          setChoiceMade(true);
          return [
            `You head deeper into the darkness of the forest.\n`,
            `The pain in your leg is unmanageable. The village might have a doctor, but the\n`,
            `pull of the forest is too great.\n`,
            `You clutch at your leg and something falls out.\n`,
            `It's a note, with a large number scralled beneath it...\n`,
            `The note says; ""\n`,
            `The number is; ""\n`,
          ];
        }
      },
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
    "Welcome to the Choose Your Own Advent(ure) December 2020 edition!",
    "-----------------------------------------------------------------",
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
      ref={forestTerminal}
      location="Forest"
    />
  );
};
