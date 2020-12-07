import axios from "axios";

import {
  API_URL_LOCATION,
  API_URL_ITEM,
  API_URL_WIZARD,
  API_URL_CURSED,
  API_URL_RESTED,
} from "../constants";

export function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export async function choiceFunction(
  choiceMade,
  setChoiceMade,
  nextLocation,
  adventItem,
  returnMessage,
  returnText,
  returnNumber,
  modifier = null
) {
  if (choiceMade) {
    return `The hand has already been dealt`;
  } else {
    await timeout(2000);

    var msg = "";
    var num = 0;
    await axios.put(API_URL_LOCATION, { location: nextLocation });
    await axios.get(API_URL_ITEM + adventItem).then((response) => {
      num = response.data.day;
      msg = response.data.text;
    });
    if (modifier === "cursed") {
      await axios.post(API_URL_CURSED);
    } else if (modifier === "wizard") {
      await axios.post(API_URL_WIZARD);
    } else if (modifier === "rested") {
      await axios.post(API_URL_RESTED);
    }
    setChoiceMade(true);
    return (
      returnMessage +
      `\n` +
      returnText +
      `: ` +
      msg +
      `\n` +
      returnNumber +
      `: ` +
      num
    );
  }
}
