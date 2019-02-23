import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./history";
import { AdminOnlyState } from "./services/authServices";
import Home from "./features/home";
import Posts from "./features/posts";
import Register from "./features/register";
import Login from "./features/login";
import AdminHome from "./features/admin/home";

export const getMainRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        {/* Admin panel routes */}
        <Route exact path="/admin" component={AdminOnlyState(AdminHome)} />
      </Switch>
    </Router>
  );
};
