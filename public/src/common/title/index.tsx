import * as React from "react";
import styled from "styled-components";

export const TitleContainer = styled("section")`
  font-family: PlayfairDisplay-BoldItalic, serif;
  font-size: 2.25em;
  text-align: center;
  margin-bottom: 15px;
`;

export interface Props {
  readonly text: string;
}

export const Title = (props: Props) => {
  return <TitleContainer>{props.text}</TitleContainer>;
};
