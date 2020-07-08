import "./KanaCell.scss";

import React from "react";

const KanaCell = ({ kana, kanaAnswers }) => {
  let romajiToDisplay = "";

  // We get an array of possible answers but, for now, let's just
  // pick the first one to display to users.
  if (Array.isArray(kanaAnswers) && kanaAnswers.length > 0) {
    romajiToDisplay = kanaAnswers[0];
  }

  return (
    <td>
      <span className="kana">{kana}</span>
      <div className="romaji">{romajiToDisplay}</div>
    </td>
  );
};

export default KanaCell;
