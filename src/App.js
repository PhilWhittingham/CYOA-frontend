import React from "react";
import { CYOAHeader } from "./components/CYOAHeader";
import { CYOABody } from "./components/CYOABody";
import { CYOAFooter } from "./components/CYOAFooter"; 

import "./css/App.css";

function App() {
  return (
    <div className="container">
      <CYOAHeader />
      <CYOABody />
      <CYOAFooter />
    </div>
  );
}

export default App;
