import axios from "axios";

import { API_URL_LOCATION, API_URL_ITEM } from "../constants";

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
  returnNumber
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
