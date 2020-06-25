import "./KanaDisplay.scss";

import React from "react";
import { Text } from "@fluentui/react-northstar";
import { hiraganaToValidRomajiMap } from "../../fixtures/constants";

const KanaDisplay = () => {
  const getRandomKana = () => {
    const min = 0;
    const max = Object.keys(hiraganaToValidRomajiMap).length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);

    return Object.keys(hiraganaToValidRomajiMap)[rand];
  };

  return (
    <div className='KanaDisplay'>
      <Text size='larger' content={getRandomKana()} />
    </div>
  );
};

export default KanaDisplay;
