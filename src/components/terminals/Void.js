import React from "react";

import { CYOATerminal } from "../CYOATerminal";
import { timeout } from "../../utils";

export const Void = () => {
  const commands = {
    start: {
      description: "Begin the adventure",
      fn: async function () {
        await timeout(2000);
        return ``;
      },
    },
  };

  const welcomeText = ["You've entered the void", "-----------------------"];

  return <CYOATerminal commands={commands} startText={welcomeText} />;
};
