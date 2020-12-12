import React, { useState } from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout, choiceFunction } from "../utils";

export const Cave1 = ({ reloadFlag, choiceItems }) => {
    const [choiceMade, setChoiceMade] = useState(false);

    const commands = {
        rock: {
            description: "Gesture a rock",
            fn: () =>
                choiceFunction(
                    choiceMade,
                    setChoiceMade,
                    "",
                    choiceItems[1],
                    `He pulls paper. You lose... `,
                    `The message is`,
                    `The number is`
                ),
        },
        paper: {
            description: "Gesture some paper",
            fn: () =>
                choiceFunction(
                    choiceMade,
                    setChoiceMade,
                    "",
                    choiceItems[2],
                    `He pulls rock. You win...`,
                    `The message is`,
                    `The number is`
                ),
        },
        continue: {
            description: "Continue with the next section of your journey.",
            fn: async function () {
                if (!choiceMade) {
                    return `You must select the path before walking it...`;
                } else {
                    await timeout(2000);
                    reloadFlag();
                    return `Your selection has been made. The journey continues tomorrow.`;
                }
            },
        },
    };

    const welcomeText = [
        "You enter the cave, leaving the clearing behind you. ",
        ".",
        "What will you choose? (type 'help' for commands)",
    ];
    return (
        <CYOATerminal commands={commands} startText={welcomeText} location="Cave" />
    );
};