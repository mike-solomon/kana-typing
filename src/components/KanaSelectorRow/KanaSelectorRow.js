import "./KanaSelectorRow.scss";

import KanaCell from "../KanaCell/KanaCell";
import KanaSelectorCheckbox from "../KanaSelectorCheckbox/KanaSelectorCheckbox";
import React from "react";

const getKanaCellsForKanaRow = (kanaRow) => {
  let kanaCells = [];

  for (const kana in kanaRow) {
    kanaCells.push(
      <KanaCell key={kana} kana={kana} kanaAnswers={kanaRow[kana]} />
    );
  }

  return kanaCells;
};

const KanaSelectorRow = ({ kanaRow, onClick, checked }) => {
  return (
    <tr onClick={onClick}>
      <KanaSelectorCheckbox checked={checked} />
      {getKanaCellsForKanaRow(kanaRow)}
    </tr>
  );
};

export default KanaSelectorRow;
