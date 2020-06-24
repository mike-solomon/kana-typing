import "./TypingBar.scss";

import React, { useState } from "react";

import { Input } from "@fluentui/react-northstar";

const TypingBar = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const recalculate = (event) => {
    setValue(event.target.value);
    setCount(event.target.value.length);

    if (event.target.value === "heyo") {
      console.log("winnar");
      setValue("");
      setCount(0);
    }
  };

  return (
    <div className='TypingBar'>
      <div className='RandomInfo'>
        <p>You entered {count} amount of characters.</p>
        <p>You entered {value} characters.</p>
      </div>
      <Input fluid value={value} onChange={recalculate} />
    </div>
  );
};

export default TypingBar;
