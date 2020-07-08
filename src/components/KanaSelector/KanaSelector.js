import "./KanaSelector.scss";

import React, { useReducer } from "react";

import KanaSelectorRow from "../KanaSelectorRow/KanaSelectorRow";
import Table from "react-bootstrap/Table";
import checkboxReducer from "../../reducers/checkboxReducer";
import { hiraganaRows } from "../../fixtures/constants";

const initialState = {
  あrow: true,
  かrow: true,
  がrow: true,
  きゃrow: true,
  ぎゃrow: true,
  さrow: true,
  ざrow: true,
  しゃrow: true,
  じゃrow: true,
  たrow: true,
  だrow: true,
  ちゃrow: true,
};

const getKanaRows = (state, dispatch) => {
  const kanaRows = hiraganaRows.map((hiraganaRow) => {
    // console.log(`hiraganaRow: ${JSON.stringify(hiraganaRow)}`);
    // console.log(`rowKey: ${Object.keys(hiraganaRow)[0] + "row"}`);

    // When iterating over objects in React, React needs a unique
    // "key" to help identify which items have changed, are added,
    // or are removed. In this case, let's just use the first kana
    // as the identifier.
    //
    // See here for more info:
    // https://reactjs.org/docs/lists-and-keys.html#keys
    const kanaRowId = Object.keys(hiraganaRow)[0] + "row";

    return (
      <KanaSelectorRow
        key={kanaRowId}
        onClick={(e) => {
          console.log(
            `text I clicked on MEOW: ${JSON.stringify(e.target.textContent)}`
          );
          console.log(`kanaRowId: ${kanaRowId}`);
          dispatch({ type: "ROW_CLICKED", key: kanaRowId });
        }}
        checked={state[kanaRowId]}
        kanaRow={hiraganaRow}
      />
    );
  });

  return kanaRows;
};

const KanaSelector = () => {
  const [state, dispatch] = useReducer(checkboxReducer, initialState);

  return (
    <Table striped bordered hover size="sm">
      <tbody>{getKanaRows(state, dispatch)}</tbody>
    </Table>
  );
};

export default KanaSelector;
