import React from "react";

import { CYOATerminal } from "../CYOATerminal";
import { timeout } from "../../utils";

export const Void = () => {
  const commands = {
    restart: {
      description: "Restart the adventure",
      fn: async function () {
        await timeout(2000);
        await axios.put(API_URL_LOCATION, { location: "Start" });
        reloadFlag(true);
        return ``;
      },
    },
  };

  const welcomeText = ["You've entered the void", "-----------------------", "You're here because you've, in effect, escaped the bounds of the adventure.", ".", ".", ".", "Type \"restart\" to return to the start"];

  return <CYOATerminal commands={commands} startText={welcomeText} />;
};
