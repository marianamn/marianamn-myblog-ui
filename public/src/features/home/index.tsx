import * as React from "react";
import { mobileResolution, tabletResolution } from "../../constants";

interface State {
  readonly containerWidth: number;
}

export default class Home extends React.Component<{}, State> {
  constructor(props: {}, state: State) {
    super(props, state);
    this.state = {
      containerWidth: 0,
    };
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render(): JSX.Element {
    const isMobile = this.state.containerWidth <= mobileResolution;
    const isTablet = this.state.containerWidth > mobileResolution && this.state.containerWidth <= tabletResolution;

    return <div>Hello!</div>;
  }

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: window.innerWidth });
  };
}
