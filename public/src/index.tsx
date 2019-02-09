import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./components/app/index";

const root = document.querySelector("#container");

ReactDom.render(<App />, root);
