import "./TypingBar.scss";

import React from "react";

const TypingBar = ({ isWrong, userInput, onChange }) => {
  const className = isWrong ? "wrong form-control" : "form-control";

  return (
    <div className="TypingBar">
      <input
        type="text"
        className={className}
        value={userInput}
        onChange={onChange}
      />
      <br />
      <div className="alert alert-primary">
        You entered {userInput.length} amount of characters. <br />
        You entered {userInput} characters.
      </div>
    </div>
  );
};

export default TypingBar;
