import * as React from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../constants";
import { SocialIcons } from "./components/social-icons";
import { Logo } from "./components/logo";
import { SearchComponent as Search } from "./components/search";
import MenuSection  from "./components/menu";

export interface LogoContainerProps {
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}

export const LogoContainer = styled<LogoContainerProps, "section">("section")`
  display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

export interface Props {
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}

export default class Header extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <section>
        <LogoContainer isMobile={this.props.isMobile}>
          <SocialIcons
            socialMediaLinks={socialMediaLinks}
            color="#000000"
            hoverColor="#cca335"
          />
          <Logo />
          <Search />
        </LogoContainer>

        <MenuSection isMobile={this.props.isMobile} />
      </section>
    );
  }
}
