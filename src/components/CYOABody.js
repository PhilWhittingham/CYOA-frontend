import React from "react";

import { CYOATerminalManager } from "./CYOATerminalManager";
import "../css/CYOABody.css";

export const CYOABody = () => {
  return (
    <div className="body-container">
      <div className="terminal">
        <CYOATerminalManager />
      </div>
    </div>
  );
};
