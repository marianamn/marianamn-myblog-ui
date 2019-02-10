import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./features/home";
import Posts from "./features/posts";
import { history } from "./history";

export const getMainRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          // tslint:disable-next-line:jsx-no-lambda
          render={() => <Home />}
        />
        <Route
          exact
          path="/posts"
          // tslint:disable-next-line:jsx-no-lambda
          render={() => <Posts />}
        />
      </Switch>
    </Router>
  );
};
