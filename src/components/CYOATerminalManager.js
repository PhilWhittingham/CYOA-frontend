import React, { useState, useEffect } from "react";
import axios from "axios";

import { Forest } from "./terminals/Forest";
import { Village1 } from "./terminals/Village";
import { API_URL_PLAYER } from "../constants";

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
    if (playerDetails.location === "Forest") {
      return <Forest reloadFlag={setLoading} />;
    } else if (playerDetails.location === "Village") {
      return <Village1 reloadFlag={setLoading} />;
    }
  }
};
