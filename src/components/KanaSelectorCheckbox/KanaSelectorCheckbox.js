import "./KanaSelectorCheckbox.scss";

import React from "react";

const KanaSelectorCheckbox = (props) => {
  return (
    <td className='center'>
      <div className='pretty p-switch p-fill'>
        {/* The checkbox will be turned on / off based on the row click. 
            Because of that, we don't want the checkbox itself to do anything on change
            - so set the onChange function to do nothing. */}
        <input type='checkbox' checked={props.checked} onChange={() => { }} />
        <div className='state p-primary'>
          <label></label>
        </div>
      </div>
    </td>
  );
};

export default KanaSelectorCheckbox; 
