import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logoBlack } from "../../../constants";

export const Image = styled("img")`
  width: 250px;
  height: auto;
  margin-left: -80px;
`;

export const Logo = () => {
  return (
    <Link to={"/"}>
      <Image src={logoBlack} />
    </Link>
  );
};
