import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { mobileResolution, tabletResolution } from "../../constants";
import { Post } from "../../interfaces";

import { selectIsLoading, selectRecentPosts, selectError } from "./selectors";
import { Actions, getRecentPosts, GetRecentPosts } from "./actions";
import { ApplicationState } from "../../store";

import Loading from "../../common/loading";
import Carousel from "./components/carousel/carousel";
import GreetingSection from "./components/greeting-section/index";
import PostsLists from "./components/posts-list/index";

interface Props {
  readonly isLoading: boolean;
  readonly recentPosts: ReadonlyArray<Post>;
  readonly error: string;
  readonly getRecentPosts: () => GetRecentPosts;
}

interface State {
  readonly containerWidth: number;
  readonly imagesLoaded: boolean;
  readonly imagesLoadedCount: number;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      containerWidth: 0,
      imagesLoaded: false,
      imagesLoadedCount: 0,
    };
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.props.getRecentPosts();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render(): JSX.Element {
    const isMobile = this.state.containerWidth <= mobileResolution;
    const isTablet =
      this.state.containerWidth > mobileResolution && this.state.containerWidth <= tabletResolution;

    return (
      <div>
        {this.props.isLoading || (!this.state.imagesLoaded && <Loading />)}
        <Carousel
          recentPosts={this.props.recentPosts}
          isTablet={isTablet}
          handleImagesLoaded={this.handleImagesLoaded}
        />
        <GreetingSection />
        {this.props.recentPosts && (
          <PostsLists
            recentPosts={this.props.recentPosts}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        )}
      </div>
    );
  }

  private readonly handleImagesLoaded = () => {
    this.setState({ imagesLoadedCount: this.state.imagesLoadedCount + 1 }, () => {
      if (this.props.recentPosts.length === this.state.imagesLoadedCount) {
        this.setState({ imagesLoaded: true });
      }
    });
  };

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: window.innerWidth });
  };
}

const mapStateToProps = ({ recentPostsState }: ApplicationState): Partial<Props> => ({
  isLoading: selectIsLoading(recentPostsState),
  recentPosts: selectRecentPosts(recentPostsState),
  error: selectError(recentPostsState),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>): Partial<Props> => ({
  getRecentPosts: () => dispatch(getRecentPosts()),
});

export default connect<Partial<Props>, Partial<Props>, Partial<Props>, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
