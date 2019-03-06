import * as React from "react";
import styled from "styled-components";
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

interface State {
  readonly containerWidth: number;
}

export default class Footer extends React.Component<{}, State> {
  constructor(state: State) {
    super(state);
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
    const isTablet =
      this.state.containerWidth > mobileResolution && this.state.containerWidth <= tabletResolution;

    return (
      <div>
        <RecentPosts />
        <InstagramContainer />
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
