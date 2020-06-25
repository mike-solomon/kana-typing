import "./TypingBar.scss";

import { Input } from "@fluentui/react-northstar";
import React from "react";

const TypingBar = (props) => {
  return (
    <div className='TypingBar'>
      <Input fluid value={props.value} onChange={props.onChange} />
      <div className='RandomInfo'>
        <p>You entered {props.value.length} amount of characters.</p>
        <p>You entered {props.value} characters.</p>
      </div>
    </div>
  );
};

export default TypingBar;
