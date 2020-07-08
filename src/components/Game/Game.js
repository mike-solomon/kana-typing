import "./Game.scss";

import React, { useState } from "react";

import KanaDisplay from "../KanaDisplay/KanaDisplay";
import TypingBar from "../TypingBar/TypingBar";
import { hiraganaToValidRomajiMap } from "../../fixtures/constants";

const getRandomKanaWithAnswers = () => {
  const min = 0;
  const max = Object.keys(hiraganaToValidRomajiMap).length - 1;
  const rand = Math.floor(Math.random() * (max - min + 1) + min);

  const kana = Object.keys(hiraganaToValidRomajiMap)[rand];
  const possibleAnswers = hiraganaToValidRomajiMap[kana];

  const kanaWithAnswers = {
    kana,
    possibleAnswers,
  };

  return kanaWithAnswers;
};

const shouldNotifyUserOfWrongAnswer = (requestedKana, userInput) => {
  let shouldNotifyUser = false;

  const longestPossibleAnswer = requestedKana.possibleAnswers.reduce(function (
    a,
    b
  ) {
    return a.length >= b.length ? a : b;
  });

  if (
    userInput.includes(" ") ||
    userInput.length >= longestPossibleAnswer.length
  ) {
    shouldNotifyUser = true;
  }

  return shouldNotifyUser;
};

const Game = () => {
  const [userInput, setUserInput] = useState("");
  const [requestedKana, setRequestedKana] = useState(
    getRandomKanaWithAnswers()
  );
  const [isWrong, setIsWrong] = useState(false);

  const onUserInputChange = (event) => {
    setUserInput(event.target.value);

    if (requestedKana.possibleAnswers.includes(event.target.value)) {
      setUserInput("");
      setRequestedKana(getRandomKanaWithAnswers());
      setIsWrong(false);
    } else if (
      shouldNotifyUserOfWrongAnswer(requestedKana, event.target.value)
    ) {
      setIsWrong(true);
    }
  };

  return (
    <div className="Game">
      <KanaDisplay kanaToDisplay={requestedKana.kana} />
      <TypingBar
        isWrong={isWrong}
        userInput={userInput}
        onChange={onUserInputChange}
      />
    </div>
  );
};

export default Game;
