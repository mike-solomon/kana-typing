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

  const [value, setValue] = useState("");
  const [kana, setKana] = useState(getRandomKana());

  const onUserInputChange = (event) => {
    setValue(event.target.value);

    if (kana.possibleAnswers.includes(event.target.value)) {
      console.log("OMG THIS WORKED?!!");
      setValue("");
      setKana(getRandomKana());
    }
  };

  return (
    <div className='Game'>
      <KanaDisplay content={kana.displayedKana} />
      <TypingBar value={value} onChange={onUserInputChange} />
    </div>
  );
}

export default Game;
