import "./Game.scss";

import React, { useState } from "react";

import KanaDisplay from "../KanaDisplay/KanaDisplay";
import TypingBar from "../TypingBar/TypingBar";
import { hiraganaToValidRomajiMap } from "../../fixtures/constants";

function Game() {
  const getRandomKana = () => {
    const min = 0;
    const max = Object.keys(hiraganaToValidRomajiMap).length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);

    const displayedKana = Object.keys(hiraganaToValidRomajiMap)[rand];
    const possibleAnswers = hiraganaToValidRomajiMap[displayedKana];

    const kana = {
      displayedKana,
      possibleAnswers,
    };

    return kana;
  };

  const shouldNotifyUserOfWrongAnswer = (userInput) => {
    let shouldNotifyUser = false;

    const longestPossibleAnswer = kana.possibleAnswers.reduce(function (a, b) {
      return a.length >= b.length ? a : b;
    });

    console.log(`userInput: ${userInput}`);
    console.log(`userInput length: ${userInput.length}`);
    console.log(`kana: ${longestPossibleAnswer}`);
    console.log(`kana length: ${longestPossibleAnswer.length}`);

    if (
      userInput.includes(" ") ||
      userInput.length >= longestPossibleAnswer.length
    ) {
      shouldNotifyUser = true;
    }

    return shouldNotifyUser;
  };

  const [value, setValue] = useState("");
  const [kana, setKana] = useState(getRandomKana());
  const [textInputClass, setTextInputClass] = useState("form-control");

  const onUserInputChange = (event) => {
    setValue(event.target.value);

    if (kana.possibleAnswers.includes(event.target.value)) {
      console.log("OMG THIS WORKED?!!");
      setValue("");
      setKana(getRandomKana());
      setTextInputClass("form-control");
    } else if (shouldNotifyUserOfWrongAnswer(event.target.value)) {
      console.log("wrong!");
      setTextInputClass("wrong form-control ");
    }
  };

  return (
    <div className='Game'>
      <KanaDisplay content={kana.displayedKana} />
      <TypingBar
        class={textInputClass}
        value={value}
        onChange={onUserInputChange}
      />
    </div>
  );
}

export default Game;
