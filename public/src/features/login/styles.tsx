import styled from "styled-components";

export const FormContainer = styled("div")`
  padding: 50px 0;
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
  color: #313131;
  font-family: Poppins-Regular, serif;
  text-transform: uppercase;
  font-size: 0.8em;
  margin-top: 10px;

  a {
    text-decoration: none;
    color: #2c2cec;
  }
`;

export const LoginError = styled("div")`
  font-family: Poppins-SemiBold;
  font-size: 0.8em;
  color: #ff4836;
`;
