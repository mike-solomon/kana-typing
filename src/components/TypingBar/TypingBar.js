import "./TypingBar.scss";

import React from "react";

const TypingBar = ({ isWrong, value, onChange }) => {
  const className = isWrong ? "wrong form-control" : "form-control";

  return (
    <div className='TypingBar'>
      <input
        type='text'
        className={className}
        autoFocus
        value={value}
        onChange={onChange}
      />
      <br />
      <div className='alert alert-primary'>
        You entered {value.length} amount of characters. <br />
        You entered {value} characters.
      </div>
    </div>
  );
};

export default TypingBar;
