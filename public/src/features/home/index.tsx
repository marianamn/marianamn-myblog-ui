import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { mobileResolution, tabletResolution } from "../../constants";
import { User } from "../../interfaces";

import { selectIsLoading, selectUsers, selectError } from "./selectors";
import { Actions, getUsers, GetUsers } from "./actions";
import { ApplicationState } from "../../store";

interface Props {
  readonly isLoading: boolean;
  readonly users: ReadonlyArray<User>;
  readonly error: string;
  readonly getUsers: () => GetUsers;
}

interface State {
  readonly containerWidth: number;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      containerWidth: 0,
    };
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.props.getUsers();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render(): JSX.Element {
    const isMobile = this.state.containerWidth <= mobileResolution;
    const isTablet =
      this.state.containerWidth > mobileResolution && this.state.containerWidth <= tabletResolution;

    return <div>Hello!</div>;
  }

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: window.innerWidth });
  };
}

const mapStateToProps = ({ usersState }: ApplicationState): Partial<Props> => ({
  isLoading: selectIsLoading(usersState),
  users: selectUsers(usersState),
  error: selectError(usersState),
});

const mapDispatchToProps = (
  dispatch: Dispatch<Actions>,
): Partial<Props> => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect<
  Partial<Props>,
  Partial<Props>,
  Partial<Props>,
  ApplicationState
>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
