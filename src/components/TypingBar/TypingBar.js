import "./TypingBar.scss";

import React from "react";

const TypingBar = (props) => {
  return (
    <div className='TypingBar'>
      <input
        type='text'
        className={props.class}
        autoFocus
        value={props.value}
        onChange={props.onChange}
      />
      <br />
      <div className='alert alert-primary'>
        You entered {props.value.length} amount of characters. <br />
        You entered {props.value} characters.
      </div>
    </div>
  );
};

export default TypingBar;
