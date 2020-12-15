import React, { useState, useEffect } from "react";
import axios from "axios";

import { Welcome } from "../terminals/Welcome";
import { Forest1, Forest2 } from "../terminals/Forest";
import { Village1, Village2 } from "../terminals/Village";
import { Tree1, Tree2, Tree3, Tree4, Tree5, Tree6 } from "../terminals/Tree";
import { Clearing1 } from "../terminals/Clearing";
import {
  Swamp1,
  Swamp2,
  Swamp3,
  Swamp4,
  Swamp5,
  Swamp6,
} from "../terminals/Swamp";
import { Cave1 } from "../terminals/Cave";
import { Castle1 } from "../terminals/Castle";
import { Loading } from "../terminals/Loading";
import { Void } from "../terminals/Void";

import { API_URL_PLAYER } from "../constants";

const CYOAMapping = {
  Forest1: {
    1: 10,
    2: 19,
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
    1: 11,
    2: 9,
  },
  Tree2: {
    1: 12,
    2: 14,
  },
  Tree3: {
    1: 7,
    2: 9,
  },
  Tree4: {
    1: 8,
    2: 15,
  },
  Tree5: {
    1: 7,
    2: 9,
  },
  Clearing1: {
    1: 13,
    2: 9,
  },
  Swamp1: {
    1: 17,
    2: 15,
  },
  Swamp2: {
    1: 14,
    2: 21,
  },
  Swamp3: {
    1: 23,
    2: 9,
  },
  Swamp4: {
    1: 15,
    2: 9,
  },
  Swamp5: {
    1: 23,
    2: 9,
  },
  Swamp6: {
    1: 23,
    2: 9,
  },
};

export const CYOATerminalManager = () => {
  const [playerDetails, setPlayerDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reloadCounter, setReloadCounter] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL_PLAYER)
      .then((response) => {
        setPlayerDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (!err.response) {
          console.log("Connection error; check backend and configuration.");
        }
        console.log(err); // TODO - not ideal but works for now.
      });
  }, [reloadCounter]);

  const incrementReloadCounter = () => {
    setReloadCounter(reloadCounter + 1);
  };

  if (loading) {
    return <Loading reloadFlag={incrementReloadCounter} />;
  } else {
    if (playerDetails.location === "Start") {
      return <Welcome reloadFlag={incrementReloadCounter} />;
    } else if (playerDetails.location === "Forest1") {
      return (
        <Forest1
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Forest2") {
      return (
        <Forest2
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );

      //////////////////
      //// VILLAGE /////
      //////////////////
    } else if (playerDetails.location === "Village1") {
      return (
        <Village1
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Village2") {
      return (
        <Village2
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );

      //////////////////
      ////// TREE //////
      //////////////////
    } else if (playerDetails.location === "Tree1") {
      return (
        <Tree1
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree2") {
      return (
        <Tree2
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree3") {
      return (
        <Tree3
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree4") {
      return (
        <Tree4
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree5") {
      return (
        <Tree5
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree6") {
      return (
        <Tree6
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );

      //////////////////
      //// CLEARING ////
      //////////////////
    } else if (playerDetails.location === "Clearing1") {
      return (
        <Clearing1
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );

      //////////////////
      ///// SWAMP //////
      //////////////////
    } else if (playerDetails.location === "Swamp1") {
      return (
        <Swamp1
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Swamp2") {
      return (
        <Swamp2
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Swamp3") {
      return (
        <Swamp3
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Swamp4") {
      return (
        <Swamp4
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Swamp5") {
      return (
        <Swamp5
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Swamp6") {
      return (
        <Swamp6
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );

      //////////////////
      ////// CAVE //////
      //////////////////
    } else if (playerDetails.location === "Cave1") {
      return (
        <Cave1
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );

      //////////////////
      ///// CASTLE /////
      //////////////////
    } else if (playerDetails.location === "Castle1") {
      return (
        <Castle1
          reloadFlag={incrementReloadCounter}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else {
      return <Void reloadFlag={incrementReloadCounter} />;
    }
  }
};
