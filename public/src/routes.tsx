import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./features/home";
import Posts from "./features/posts";
import Register from "./features/register";
import Login from "./features/login";
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
        <Route
          exact
          path="/login"
          // tslint:disable-next-line:jsx-no-lambda
          render={() => <Login />}
        />
        <Route
          exact
          path="/register"
          // tslint:disable-next-line:jsx-no-lambda
          render={() => <Register />}
        />
      </Switch>
    </Router>
  );
};
