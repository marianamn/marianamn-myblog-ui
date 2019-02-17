import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider, connect } from "react-redux";
import { Router } from "react-router-dom";
import { history } from "./history";
import configureStore from "./configureStore";
import App from "./app/index";

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);
const root = document.querySelector("#container");

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  root,
);
