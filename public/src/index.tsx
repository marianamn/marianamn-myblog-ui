import * as React from "react";
import * as ReactDom from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./history";
import App from "./app/index";

const root = document.querySelector("#container");
ReactDom.render(
  <Router history={history}>
    <App />
  </Router>,
  root,
);
