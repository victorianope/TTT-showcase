import * as React from "react";
import ReactDOM from "react-dom";

import { ColorModeScript } from "@chakra-ui/react";

import { App } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
