import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobileResolution, tabletResolution } from "../../constants";
import { User } from "../../interfaces";

import { Title } from "../../common/title";
import { FormGroup } from "../../common/form-group";
import { Button } from "../../common/button";
import { Error } from "../../common/error";

import { ApplicationState } from "../../store";
import { LoginAction, login, Actions } from "./action";
import {
  selectIsLoading,
  selectRequestSuccess,
  selectRequestMessage,
  selectToken,
  selectUser,
  selectError,
} from "./selectors";

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

interface Props {
  readonly isLoading: boolean;
  readonly requestSuccess: boolean;
  readonly requestMessage: string;
  readonly token?: string;
  readonly user?: User;
  readonly error?: string;
  readonly login: (email: string, password: string) => LoginAction;
}

interface State {
  readonly containerWidth: number;
  readonly email: string;
  readonly password: string;
  readonly validateFields: {
    readonly email: {
      readonly isValid: boolean;
      readonly message: string;
    };
    readonly password: {
      readonly isValid: boolean;
      readonly message: string;
    };
  };
}

class Login extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      containerWidth: 0,
      email: "",
      password: "",
      validateFields: {
        email: {
          isValid: true,
          message: "",
        },
        password: {
          isValid: true,
          message: "",
        },
      },
    };
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render(): JSX.Element {
    const isMobile = this.state.containerWidth <= mobileResolution;
    const isTablet =
      this.state.containerWidth > mobileResolution && this.state.containerWidth <= tabletResolution;

    return (
      <FormContainer>
        <Form isMobile={isMobile} isTablet={isTablet} onSubmit={this.login}>
          <Title text="Вписване" />
          <FormGroup
            label="Имейл"
            name="email"
            inputType="email"
            isRequired
            setValue={this.setEmail}
          />
          {!this.state.validateFields.email.isValid && (
            <Error text={this.state.validateFields.email.message} />
          )}

          <FormGroup
            label="Парола"
            name="password"
            inputType="password"
            isRequired
            setValue={this.setPassword}
          />
          {!this.state.validateFields.password.isValid && (
            <Error text={this.state.validateFields.password.message} />
          )}
          <Button text="Вход" />

          <RegisterLabel>
            Нямаш регистрация? Регистрирай се <Link to="/register">тук</Link>.
          </RegisterLabel>
        </Form>
      </FormContainer>
    );
  }

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: window.innerWidth });
  };

  private readonly setEmail = (e: any): void => {
    this.setState({
      email: e.target.value,
    });
  };

  private readonly validateEmail = (
    email: string,
  ): {
    isValid: boolean;
    message: string;
  } => {
    let isFieldValid = this.state.validateFields.email.isValid;
    let errorMessage = this.state.validateFields.email.message;

    if (email.trim() === "") {
      isFieldValid = false;
      errorMessage = "Имейлът е задължително поле!";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      )
    ) {
      isFieldValid = false;
      errorMessage = "Въведеният имейл е в грешен формат!";
    } else {
      isFieldValid = true;
      errorMessage = "";
    }

    return {
      isValid: isFieldValid,
      message: errorMessage,
    };
  };

  private readonly setPassword = (e: any): void => {
    this.setState({
      password: e.target.value,
    });
  };

  private readonly validatePassword = (
    password: string,
  ): {
    isValid: boolean;
    message: string;
  } => {
    let isFieldValid = this.state.validateFields.password.isValid;
    let errorMessage = this.state.validateFields.password.message;

    if (password.trim() === "") {
      isFieldValid = false;
      errorMessage = "Паролата е задължително поле!";
    } else if (password.trim().length < 6) {
      isFieldValid = false;
      errorMessage = "Паролата трябва да бъде поне 6 символа!";
    } else {
      isFieldValid = true;
      errorMessage = "";
    }

    return {
      isValid: isFieldValid,
      message: errorMessage,
    };

    // this.setState({
    //   validateFields: {
    //     ...this.state.validateFields,
    //     password: {
    //       isValid: isFieldValid,
    //       message: errorMessage,
    //     },
    //   },
    // });
  };

  private readonly login = (event: any): void => {
    event.preventDefault();
    event.stopPropagation();
    const emailValidation = this.validateEmail(this.state.email);
    const passwordValidation = this.validatePassword(this.state.password);

    if (emailValidation.isValid && passwordValidation.isValid) {
      this.props.login(this.state.email, this.state.password);
    } else {
      if (!emailValidation.isValid) {
        this.setState({
          validateFields: {
            ...this.state.validateFields,
            email: {
              isValid: emailValidation.isValid,
              message: emailValidation.message,
            },
          },
        });
      }

      if (!passwordValidation.isValid) {
        this.setState({
          validateFields: {
            ...this.state.validateFields,
            password: {
              isValid: passwordValidation.isValid,
              message: passwordValidation.message,
            },
          },
        });
      }
    }
  };
}

const mapStateToProps = ({ loginState }: ApplicationState): Partial<Props> => ({
  isLoading: selectIsLoading(loginState),
  requestSuccess: selectRequestSuccess(loginState),
  requestMessage: selectRequestMessage(loginState),
  token: selectToken(loginState),
  user: selectUser(loginState),
  error: selectError(loginState),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>): Partial<Props> => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
});

export default connect<Partial<Props>, Partial<Props>, Partial<Props>, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
