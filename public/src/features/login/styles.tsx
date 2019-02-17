import styled from "styled-components";

export const FormContainer = styled("div")`
  margin: 50px 0;
`;

export interface FormProps {
  readonly isMobile: boolean;
  readonly isTablet: boolean;
}

export const Form = styled<FormProps, "form">("form")`
  width: ${({ isMobile, isTablet }) => (isMobile || isTablet ? "80%" : "50%")};
  margin: 0 auto;
`;

export const RegisterLabel = styled("div")`
  font-size: 0.9em;
  color: #313131;
  margin-top: 10px;

  a {
    text-decoration: none;
    color: #2c2cec;
  }
`;
