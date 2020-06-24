import "./App.scss";

import KanaDisplay from "../KanaDisplay/KanaDisplay";
import React from "react";
import TypingBar from "../TypingBar/TypingBar";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Kana Typing</p>
      </header>
      <KanaDisplay />
      <TypingBar />
    </div>
  );
}

export default App;
