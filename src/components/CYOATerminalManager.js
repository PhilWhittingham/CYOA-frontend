import React, { useState, useEffect } from "react";
import axios from "axios";

import { Welcome } from "./terminals/Welcome";
import { Forest1, Forest2 } from "./terminals/Forest";
import { Village1 } from "./terminals/Village";
import { Void } from "./terminals/Void";

import { API_URL_PLAYER } from "../constants";

const CYOAMapping = {
  Forest1: {
    1: 10,
    2: 18,
  },
  Forest2: {
    1: 18,
    2: 7,
  },
  Village1: {
    1: 7,
    2: 9,
  },
  Village2: {
    1: 7,
    2: 9,
  },
  Tree1: {
    1: 7,
    2: 9,
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
    } else if (playerDetails.location === "Forest1") {
      return (
        <Forest1
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Forest2") {
      return (
        <Forest2
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
      return <Void reloadFlag={setLoading} />;
    }
  }
};
