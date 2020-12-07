import React, { useState, useEffect } from "react";
import axios from "axios";

import { Welcome } from "../terminals/Welcome";
import { Forest1, Forest2 } from "../terminals/Forest";
import { Village1, Village2 } from "../terminals/Village";
import { Tree1, Tree2, Tree3, Tree4, Tree5 } from "../terminals/Tree";
import { Void } from "../terminals/Void";

import { API_URL_PLAYER } from "../constants";
import { Clearing1 } from "../terminals/Clearing";
import { Loading } from "../terminals/Loading";

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
  Tree2: {
    1: 7,
    2: 9,
  },
  Tree3: {
    1: 7,
    2: 9,
  },
  Tree4: {
    1: 7,
    2: 9,
  },
  Tree5: {
    1: 7,
    2: 9,
  },
  Clearing1: {
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
    return <Loading reloadFlag={setLoading} />;
  } else {
    if (playerDetails.location === "Start") {
      return <Welcome reloadFlag={setLoading} />;

      //////////////////
      ///// FOREST /////
      //////////////////
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

      //////////////////
      //// VILLAGE /////
      //////////////////
    } else if (playerDetails.location === "Village1") {
      return (
        <Village1
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Village2") {
      return (
        <Village2
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );

      //////////////////
      ////// TREE //////
      //////////////////
    } else if (playerDetails.location === "Tree1") {
      return (
        <Tree1
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree2") {
      return (
        <Tree2
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree3") {
      return (
        <Tree3
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree4") {
      return (
        <Tree4
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else if (playerDetails.location === "Tree5") {
      return (
        <Tree5
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );

      //////////////////
      //// CLEARING ////
      //////////////////
    } else if (playerDetails.location === "Clearing1") {
      return (
        <Clearing1
          reloadFlag={setLoading}
          choiceItems={CYOAMapping[playerDetails.location]}
        />
      );
    } else {
      return <Void reloadFlag={setLoading} />;
    }
  }
};
