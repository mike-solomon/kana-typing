import "./KanaDisplay.scss";

import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";

const KanaDisplay = (props) => {
  console.log(`props: ${JSON.stringify(props)}`);

  return (
    <div className="KanaDisplay">
      <Jumbotron>
        <h1>{props.content}</h1>
      </Jumbotron>
    </div>
  );
};

export default KanaDisplay;
