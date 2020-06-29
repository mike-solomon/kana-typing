import "./KanaSelectorRow.scss";

import KanaCell from "../KanaCell/KanaCell";
import KanaSelectorCheckbox from "../KanaSelectorCheckbox/KanaSelectorCheckbox";
import React from "react";

const KanaSelectorRow = (props) => {
  console.log(`kanaRow: ${JSON.stringify(props.kanaRow)}`);

  let componentsToRender = [];

  for (const kana in props.kanaRow) {
    componentsToRender.push(
      <KanaCell key={kana} kana={kana} kanaAnswers={props.kanaRow[kana]} />
    );
  }

  return (
    <tr onClick={props.onClick}>
      <KanaSelectorCheckbox
        kanaRowId={props.kanaRowId}
        checked={props.checked}
      />
      {componentsToRender}
    </tr>
  );
};

export default KanaSelectorRow;
