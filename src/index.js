// import "./index.scss";

import { Provider, teamsTheme } from "@fluentui/react-northstar";

import App from "./components/App/App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={teamsTheme}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
