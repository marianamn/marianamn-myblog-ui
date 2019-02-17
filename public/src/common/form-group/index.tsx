import * as React from "react";
import styled from "styled-components";

export const FormGroupContainer = styled("div")`
  display: flex;
  align-items: center;
  margin: 15px 0;
  height: 30px;
  font-family: Poppins-SemiBold, serif;
  font-size: 13px;
  text-transform: uppercase;
`;

export const Label = styled("label")`
  width: 80px;
`;

export const Input = styled("input")`
  width: calc(100% - 80px);
  height: 90%;
  padding-left: 5px;

  &:focus {
    outline: none;
  }
`;

export interface Props {
  readonly label: string;
  readonly name: string;
  readonly inputType: string;
  readonly isRequired: boolean;
  readonly setValue: (e: any) => void;
}

export const FormGroup = (props: Props) => {
  return (
    <FormGroupContainer>
      <Label htmlFor={props.name}>{`${props.label}${props.isRequired && "*"}`}</Label>
      <Input
        name={props.name}
        id={props.name}
        type={props.inputType}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={e => props.setValue(e)}
      />
    </FormGroupContainer>
  );
};
