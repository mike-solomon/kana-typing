import "./KanaSelectorCheckbox.scss";

import { Checkbox } from "pretty-checkbox-react";
import React from "react";

const KanaSelectorCheckbox = ({ checked }) => {
  return (
    <td className="center">
      <div className="pretty p-switch p-fill">
        {/* The checkbox will be turned on / off based on the row click. 
            Because of that, we don't want the checkbox itself to do anything on change
            - so set the onChange function to do nothing. */}
        <Checkbox color="primary" checked={checked} onChange={() => {}} />
      </div>
    </td>
  );
};

export default KanaSelectorCheckbox;
