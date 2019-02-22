import * as React from "react";
import styled from "styled-components";

export const ErrorContainer = styled("div")`
  margin-top: -10px;
  font-family: Poppins-Regular, serif;
  font-size: 0.8em;
  color: #ff4836;
  font-weight: bold;
`;

export interface Props {
  readonly text: string;
}

export const Error = (props: Props) => {
  return <ErrorContainer>{props.text}</ErrorContainer>;
};
