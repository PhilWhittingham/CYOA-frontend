import React, { useState } from "react";

import { CYOATerminal } from "../components/CYOATerminal";
import { timeout, choiceFunction } from "../utils";

export const Castle1 = ({ reloadFlag, choiceItems }) => {
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
        "You continue to drink what turns out to be a delightfully alcoholic drink with your",
        "new friend. Rather talkative fellow, he continues to ellude to dangers of this world",
        '"Things have gotten *hic* awfully shaky since Gamooth has *hic* reawoken. Some think',
        "he's not so bad *hic*, you know, but I'm not so sure. They say he's *hic* sending",
        "his troops out nightly to pillage local *hic* villages. Legend has it *hic*, an",
        "unsuspecting and confused *hic* warrior is due to pass these *hic* ways any day",
        "now. Only they can bring an end to Gamooth's reign of terror... *hic*.\"",
        "In a non sequitur so jarring it threatens to break the whole story, he challenges you",
        "to Rock Paper Scissors (saying something about it being the last thing that is truly free)",
        'He counts down unevenly "3...... 2.*hic*. 1..."',
        ".",
        "What will you choose? (type 'help' for commands)",
    ];
    return (
        <CYOATerminal commands={commands} startText={welcomeText} location="Castle" />
    );
};