import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { Post, InstagramPost } from "../../interfaces";

import { selectRecentPosts, selectRecentInstagramPosts } from "./selectors";
import {
  Actions,
  getRecentPosts,
  GetRecentPosts,
  getRecentInstagramPosts,
  GetRecentInstagramPosts,
} from "./actions";
import { ApplicationState } from "../../store";

import RecentPosts from "./components/recent-posts";
import InstagramContainer from "./components/instagram";
import Subscription from "./components/subscription";
import {
  footerLabels,
  socialMediaLinks,
  mobileResolution,
  tabletResolution,
} from "../../constants";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Twitter } from "styled-icons/fa-brands/Twitter";
import { Instagram } from "styled-icons/fa-brands/Instagram";

export const SocialIconsContainer = styled("div")`
  text-align: center;
  margin-top: 50px;
`;

export const Icon = styled("span")`
  margin-right: 10px;

  .icon {
    width: 16px;
    height: 16px;
    color: #d5d5d5;
    background: #f2f2f2;
    padding: 12px;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      background: #cca335;
      color: #ffffff;
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Link = styled("a")`
  &:focus {
    outline: none;
  }
`;

export const AllRightsReservedContainer = styled("div")`
  font-family: Poppins-Regular, serif;
  text-align: center;
  padding: 45px 0;
  font-size: 12px;
  opacity: 0.7;
`;

interface Props {
  readonly isLoading: boolean;
  readonly recentPosts: ReadonlyArray<Post>;
  readonly error: string;
  readonly instagramPosts?: ReadonlyArray<InstagramPost>;
  readonly getRecentPosts: () => GetRecentPosts;
  readonly getRecentInstagramPosts: () => GetRecentInstagramPosts;
}

interface State {
  readonly containerWidth: number;
}

class Footer extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      containerWidth: 0,
    };
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.props.getRecentInstagramPosts();
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
        <RecentPosts posts={this.props.recentPosts} />
        <InstagramContainer
          posts={this.props.instagramPosts}
          isTablet={isTablet}
          isMobile={isMobile}
        />
        <Subscription isTablet={isTablet} isMobile={isMobile} />

        <SocialIconsContainer>
          <Icon>
            <Link href={socialMediaLinks.facebook} target="blank">
              <FacebookF className="icon" />
            </Link>
          </Icon>

          <Icon>
            <Link href={socialMediaLinks.twitter} target="blank">
              <Twitter className="icon" />
            </Link>
          </Icon>

          <Icon>
            <Link href={socialMediaLinks.instagram} target="blank">
              <Instagram className="icon" />
            </Link>
          </Icon>
        </SocialIconsContainer>

        <AllRightsReservedContainer>
          {`${new Date().getFullYear()} ${"\u00A9"} ${footerLabels.allRightsReserved}`}
        </AllRightsReservedContainer>
      </div>
    );
  }

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: window.innerWidth });
  };
}

const mapStateToProps = ({ footerRecentPostsState }: ApplicationState): Partial<Props> => ({
  recentPosts: selectRecentPosts(footerRecentPostsState),
  instagramPosts: selectRecentInstagramPosts(footerRecentPostsState),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>): Partial<Props> => ({
  getRecentPosts: () => dispatch(getRecentPosts()),
  getRecentInstagramPosts: () => dispatch(getRecentInstagramPosts()),
});

export default connect<Partial<Props>, Partial<Props>, Partial<Props>, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
