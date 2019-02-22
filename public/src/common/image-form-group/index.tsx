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
  readonly validateField: (e: any) => void;
}

export const ImageFormGroup = (props: Props) => {
  return (
    <FormGroupContainer>
      <Label htmlFor="picture">{props.label}</Label>
      <Input
        type="file"
        name="picture"
        // tslint:disable-next-line:jsx-no-lambda
        onChange={e => props.validateField(e)}
      />
    </FormGroupContainer>
  );
};
