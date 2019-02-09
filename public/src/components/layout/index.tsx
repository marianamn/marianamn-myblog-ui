import * as React from "react";
import Home from "../home/index";

interface State {}

export default class Layout extends React.Component<{}, State> {
  constructor(props: {}, state: State) {
    super(props, state);
  }

  render(): JSX.Element {
    return <Home />;
  }
}
