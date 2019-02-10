import * as React from "react";
import styled from "styled-components";
import { Search } from "styled-icons/fa-solid/Search";

export const Icon = styled("span")`
  margin-right: 30px;

  .icon {
    width: 14px;
    height: 14px;
    color: #000000;

    &:hover {
      cursor: pointer;
      color: #cca335;
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const SearchComponent = () => {
  return (
    <Icon>
      <Search className="icon" color={"#cca335"} />
    </Icon>
  );
};
