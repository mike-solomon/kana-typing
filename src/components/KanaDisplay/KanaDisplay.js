import "./KanaDisplay.scss";

import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";

const KanaDisplay = ({ kanaToDisplay }) => {
  return (
    <div className="KanaDisplay">
      <Jumbotron>
        <h1>{kanaToDisplay}</h1>
      </Jumbotron>
    </div>
  );
};

export default KanaDisplay;
