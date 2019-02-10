import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Menu } from "styled-icons/material/Menu";
import { Close } from "styled-icons/material/Close";
import { Link } from "react-router-dom";
import { SocialIcons } from "./social-icons";
import MenuList from "./menu-list";
import { logoWhite, socialMediaLinks } from "../../../constants";

export const MenuContainer = styled("section")`
  display: flex;
  align-items: center;
  min-height: 50px;
  background: #000000;
  font-family: Poppins-Medium, serif;
`;

export const Wrapper = styled("div")`
  width: 100%;
  padding: 0 10px 10px 10px;
`;

export const LogoContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .icon {
    position: absolute;
    left: 5px;
    width: 40px;
    height: 40px;
    color: #ffffff;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Image = styled("img")`
  width: 200px;
  height: auto;
`;

export interface Props {
  readonly isMobile?: boolean;
}

export interface State {
  readonly isToggled: boolean;
}

export default class MenuSection extends React.Component<Props, State> {
  constructor(props: Props, state: State){
    super(props, state);
    this.state={
      isToggled: false,
    }
  }

  private menuRef: any;

  componentDidMount(): void {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount(): void {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  render(): JSX.Element {
    return (
      <MenuContainer>
        {this.props.isMobile ? (
          <Wrapper ref={(comp: any) => (this.menuRef = comp)}>
            <LogoContainer>
              {!this.state.isToggled
                // tslint:disable-next-line:jsx-no-lambda
                ? <Menu className="icon" onClick={() => this.menuToggle()}/>
                // tslint:disable-next-line:jsx-no-lambda
                : <Close className="icon" onClick={() => this.menuToggle()}/>
              }
              <Link to={"/"}>
                <Image src={logoWhite} />
              </Link>
            </LogoContainer>
            {this.state.isToggled &&
              <div>
                <MenuList isMobile={this.props.isMobile} closeMenu={this.closeMenu}/>
                <SocialIcons
                  socialMediaLinks={socialMediaLinks}
                  color="#ffffff"
                  hoverColor="#cca335"
                  isMobile={this.props.isMobile}
                />
              </div>
            }
          </Wrapper>
        ) : (
          <MenuList isMobile={this.props.isMobile} />
        )}
      </MenuContainer>
    );
  }

  private readonly menuToggle = () => {
    this.setState({ isToggled: !this.state.isToggled });
  }

  private readonly closeMenu = () => {
    this.setState({ isToggled: false });
  }

  private readonly handleClickOutside = (event: any) => {
    const menuNode = ReactDOM.findDOMNode(this.menuRef);
    if (menuNode) {
      if (!menuNode.contains(event.target)) {
        this.setState({
          isToggled: false,
        });
      }
    }
  };
}
