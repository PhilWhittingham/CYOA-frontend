import React, { useState, useEffect } from "react";
import axios from "axios";

import { Welcome } from "./terminals/Welcome";
import { Forest } from "./terminals/Forest";
import { Village1 } from "./terminals/Village";
import { Void } from "./terminals/Void";

import { API_URL_PLAYER } from "../constants";

const CYOAMapping = {
  Forest: {
    1: 10,
    2: 18,
  },
  Village1: {
    1: 3,
    2: 5,
  },
};

export const CYOATerminalManager = () => {
  const [playerDetails, setPlayerDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reloadPlayerDetails();
  }, []);

  const reloadPlayerDetails = () => {
    axios.get(API_URL_PLAYER).then((response) => {
      setPlayerDetails(response.data);
      setLoading(false);
    });
  };

  if (loading) {
    reloadPlayerDetails();
    return <div>Loading</div>;
  } else {
    if (playerDetails.location === "Start") {
      return <Welcome reloadFlag={setLoading} />;
    } else if (playerDetails.location === "Forest") {
      return (
        <Forest
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Village1") {
      return (
        <Village1
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else {
      return <Void />;
    }
  }
};
