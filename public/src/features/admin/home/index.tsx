import * as React from "react";
import { InjectedAuthRouterProps } from "redux-auth-wrapper/history4/redirect";

export interface Props extends InjectedAuthRouterProps{
  readonly isLoading: boolean;
}

class AdminHome extends React.Component<Props, {}> {
  render(): JSX.Element {
    return <div>AdminHome</div>;
  }
}

export default AdminHome;
