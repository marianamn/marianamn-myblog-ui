import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

export interface ListProps {
  readonly isMobile?: boolean;
}

export const List = styled<ListProps, "ul">("ul")`
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

export interface Props extends RouteComponentProps<any> {
  readonly isMobile?: boolean;
  readonly closeMenu?: () => void;
}

const MenuList = (props: Props) => {
  return (
    <List isMobile={props.isMobile}>
      <ListItem
        className={props.location.pathname === "/" && "active"}
        isMobile={props.isMobile}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.closeMenu && props.closeMenu()}
      >
        <Link to="/">Начало</Link>
      </ListItem>

      <ListItem
        className={props.location.pathname === "/posts" && "active"}
        isMobile={props.isMobile}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.closeMenu && props.closeMenu()}
      >
        <Link to="/posts">Постове</Link>
      </ListItem>

      <ListItem
        className={props.location.pathname === "/about" && "active"}
        isMobile={props.isMobile}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.closeMenu && props.closeMenu()}
      >
        <Link to="/about">За мен</Link>
      </ListItem>

      <ListItem
        className={props.location.pathname === "/contacts" && "active"}
        isMobile={props.isMobile}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.closeMenu && props.closeMenu()}
      >
        <Link to="/contacts">Контакти</Link>
      </ListItem>

      <ListItem
        className={props.location.pathname === "/login" && "active"}
        isMobile={props.isMobile}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.closeMenu && props.closeMenu()}
      >
        <Link to="/login">Регистрация</Link>
      </ListItem>

      <ListItem
        className={props.location.pathname === "/register" && "active"}
        isMobile={props.isMobile}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.closeMenu && props.closeMenu()}
      >
        <Link to="/register">Вход</Link>
      </ListItem>
    </List>
  );
};

export default withRouter(MenuList);
