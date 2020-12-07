import React from "react";
import axios from "axios";

import { CYOATerminal } from "../components/CYOATerminal";
import { API_URL_LOCATION } from "../constants";
import { timeout } from "../utils";

export const Void = ({ reloadFlag }) => {
  const commands = {
    restart: {
      description: "Restart the adventure",
      fn: async function () {
        await timeout(2000);
        await axios.put(API_URL_LOCATION, { location: "Start" });
        reloadFlag();
        return ``;
      },
    },
  };

  const welcomeText = [
    "You've entered the void",
    "-----------------------",
    "You're here because you've, in effect, escaped the bounds of the adventure.",
    ".",
    ".",
    ".",
    'Type "restart" to return to the start',
  ];

  return <CYOATerminal commands={commands} startText={welcomeText} />;
};
