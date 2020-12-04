import React from "react";
import axios from "axios";

import { CYOATerminal } from "../CYOATerminal";
import { API_URL_LOCATION } from "../../constants";
import { timeout } from "../../utils";

export const Welcome = ({ reloadFlag }) => {
  const commands = {
    start: {
      description: "Begin the adventure",
      fn: async function () {
        await timeout(2000);
        await axios.put(API_URL_LOCATION, { location: "Forest" });
        reloadFlag(true);
        return ``;
      },
    },
  };

  const welcomeText = [
    "Welcome to the Choose Your Own Advent(ure) December 2020 edition!",
    "-----------------------------------------------------------------",
    "Over the course of the days running up until Christmas, you will be faced with a series of",
    "choices that will take you on a magical journey. Each day will contain one choice, and you",
    "should look out for any numbers or messages that may allude to advent calendar gifts. ",
    ".",
    "From now on, whenever you see a number, open the parcel showing that number.",
    ".",
    "Type 'start' for to begin the adventure.",
  ];

  return <CYOATerminal commands={commands} startText={welcomeText} />;
};
