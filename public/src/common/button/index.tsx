import * as React from "react";
import styled from "styled-components";

export const ButtonContainer = styled("input")`
  font-family: Poppins-SemiBold, serif;
  font-size: 13px;
  text-transform: uppercase;
  color: #ffffff;
  background: #cca335;
  border: none;
  padding: 5px 15px;
  margin-top: 5px;

  &:focus {
    outline: none;
  }
`;

export interface Props {
  readonly text: string;
}

export const Button = (props: Props) => {
  return <ButtonContainer type="submit" value={props.text} />;
};
