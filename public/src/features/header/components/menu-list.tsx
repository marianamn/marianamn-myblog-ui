import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { LogOut } from "styled-icons/feather/LogOut";
import { getGlobalStateFromStorage } from "../../../services/authServices";
import sessionServices from "../../../services/sessionServices";

export interface ListProps {
  readonly isMobile?: boolean;
}

export const List = styled<ListProps, "ul">("ul")`
  position: relative;
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-bottom: ${({ isMobile }) => isMobile && "15px"};
`;

export const ListItem = styled<ListProps, "li">("li")`
  list-style: none;
  margin-right: ${({ isMobile }) => (isMobile ? "0" : "30px")};
  margin-top: ${({ isMobile }) => isMobile && "5px"};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS */
    margin-top: 12px;
  }

  @supports (-ms-accelerator: true) {
    /* IE Edge 12+ CSS */
    margin-top: 12px;
  }

  @supports (-ms-ime-align: auto) {
    /* IE Edge 16+ CSS */
    margin-top: 12px;
  }

  &.active {
    border-bottom: 3px solid #cca335;
  }

  a {
    color: #ffffff;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const User = styled("span")`
  font-family: PlayfairDisplay-BoldItalic;
  color: #cca335;
`;

export const ExitIcon = styled<ListProps, "span">("span")`
  position: absolute;
  right: 15px;
  bottom: ${({ isMobile }) => isMobile && "15px"};

  .exit {
    width: 22px;
    color: #cca335;

    &:hover {
      cursor: pointer;
    }
  }

  .tooltip-text {
    visibility: hidden;
    width: 55px;
    background-color: #cca335;
    color: black;
    text-align: center;
    border-radius: 6px;
    padding: 0px 0;
    position: absolute;
    top: -10px;
    left: -55px;
    z-index: 1;
    opacity: 0.7;
    font-size: 0.9em;
  }

  &:hover {
    .tooltip-text {
      visibility: visible;
    }
  }
`;

export interface Props extends RouteComponentProps<any> {
  readonly isMobile?: boolean;
  readonly closeMenu?: () => void;
}

class MenuList extends React.Component<Props, {}> {

  render(): JSX.Element {
    const sessionStorageData = getGlobalStateFromStorage();

    return (
      <List isMobile={this.props.isMobile}>
        <ListItem
          className={this.props.location.pathname === "/" && "active"}
          isMobile={this.props.isMobile}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.props.closeMenu && this.props.closeMenu()}
        >
          <Link to="/">Начало</Link>
        </ListItem>

        <ListItem
          className={this.props.location.pathname === "/posts" && "active"}
          isMobile={this.props.isMobile}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.props.closeMenu && this.props.closeMenu()}
        >
          <Link to="/posts">Постове</Link>
        </ListItem>

        <ListItem
          className={this.props.location.pathname === "/about" && "active"}
          isMobile={this.props.isMobile}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.props.closeMenu && this.props.closeMenu()}
        >
          <Link to="/about">За мен</Link>
        </ListItem>

        <ListItem
          className={this.props.location.pathname === "/contacts" && "active"}
          isMobile={this.props.isMobile}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.props.closeMenu && this.props.closeMenu()}
        >
          <Link to="/contacts">Контакти</Link>
        </ListItem>

        {(sessionStorageData.user && sessionStorageData.user.role === "admin") &&
          <ListItem
            className={this.props.location.pathname === "/admin" && "active"}
            isMobile={this.props.isMobile}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.props.closeMenu && this.props.closeMenu()}
          >
            <Link to="/admin">Админ</Link>
          </ListItem>
        }

        {!sessionStorageData.token ? (
          <ListItem
            className={
              (this.props.location.pathname === "/login" ||
                this.props.location.pathname === "/register") &&
              "active"
            }
            isMobile={this.props.isMobile}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.props.closeMenu && this.props.closeMenu()}
          >
            <Link to="/login">Вход</Link>
          </ListItem>
        ) : (
          <ListItem
            isMobile={this.props.isMobile}
          >
            <User>{sessionStorageData.user.name}</User>
          </ListItem>
        )}

        {sessionStorageData.token &&
          <ExitIcon onClick={this.logout} isMobile={this.props.isMobile}>
            <LogOut className="exit" />
            <span className="tooltip-text">Изход</span>
          </ExitIcon>
        }
      </List>
    );
  }

  private readonly logout = () => {
    this.setState({ showUserMenu: false });
    sessionServices.clear();
  };
}

export default withRouter(MenuList);
