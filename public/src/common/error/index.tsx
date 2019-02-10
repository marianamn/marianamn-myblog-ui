import * as React from "react";
import styled from "styled-components";

export const ErrorContainer = styled("div")`
  color: #e80c0c;
  font-size: 0.8em;
  margin-top: -10px;
`;

export interface Props {
  readonly text: string;
}

export const Error = (props: Props) => {
  return (
    <ErrorContainer>{props.text}</ErrorContainer>
  );
};
