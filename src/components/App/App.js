import "./App.scss";

import Game from "../Game/Game";
import KanaSelector from "../KanaSelector/KanaSelector";
import React from "react";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Kana Typing</p>
      </header>
      <Game />
      <KanaSelector />
    </div>
  );
}

export default App;
