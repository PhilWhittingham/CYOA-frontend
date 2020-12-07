import React from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout } from "../utils";

export const Loading = ({ reloadFlag }) => {
  const commands = {
    check: {
      description: "Attempt to load again",
      fn: async function () {
        await timeout(2000);
        reloadFlag();
        return ``;
      },
    },
  };

  const welcomeText = [
    "It appears the session is loading!",
    "----------------------------------",
    "If the adventure hangs here, consider checking that the backend Go service",
    "is up and running, and that the front end can connect to it.",
    ".",
    ".",
    'Type "check" to refresh this when you have trouble-shot',
  ];

  return <CYOATerminal commands={commands} startText={welcomeText} />;
};
