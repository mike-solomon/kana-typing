import "./KanaCell.scss";

import React from "react";

const KanaCell = (props) => {
  return (
    <td>
      <span className='kana'>{props.kana}</span>
      <div className='romaji'>{props.kanaAnswers[0]}</div>
    </td>
  );
};

export default KanaCell;
