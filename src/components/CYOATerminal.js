import React from "react";
import Terminal from "react-console-emulator";

import "../css/CYOATerminal.css";

export const CYOATerminal = ({ commands, startText, location, ref }) => {
  return (
    <Terminal
      style={{ maxHeight: "300px" }}
      commands={commands}
      welcomeMessage={startText}
      autoFocus
      disableOnProcess
      hidePromptWhenDisabled
      errorText={"I couldn't find a command called [command]!"}
      promptLabel={
        location ? "adventurer@" + location + ":~$" : "adventurer:~$"
      }
    />
  );
};
