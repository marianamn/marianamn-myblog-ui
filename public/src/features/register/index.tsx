import * as React from "react";
import styled from "styled-components";
import { mobileResolution, tabletResolution } from "../../constants";
import { Title } from "../../common/title";
import { FormGroup } from "../../common/form-group";
import { Button } from "../../common/button";
import { Error } from "../../common/error";
import { Link } from "react-router-dom";
import { ImageFormGroup } from "../../common/image-form-group";

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

interface State {
  readonly containerWidth: number;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly picture: any;
  readonly validateFields: {
    readonly name: {
      readonly isValid: boolean;
      readonly message: string;
    };
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

export default class Register extends React.Component<{}, State> {
  constructor(props: {}, state: State) {
    super(props, state);
    this.state = {
      containerWidth: 0,
      name: "",
      email: "",
      password: "",
      picture: null,
      validateFields: {
        name: {
          isValid: true,
          message: "",
        },
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
        {/* <form id="uploadForm" enctype="multipart/form-data" method="post">
          <input type="file" name="picture" />
          <input type="submit" value="Upload File" name="submit">
        </form> */}
        <Form
          id="uploadForm"
          encType="multipart/form-data"
          method="post"
          isMobile={isMobile}
          isTablet={isTablet}
          onSubmit={this.register}
        >
          <Title text="Регистриране" />

          <FormGroup
            label="Име"
            name="mane"
            inputType="text"
            isRequired
            setValue={this.validateName}
          />
          {!this.state.validateFields.name.isValid && (
            <Error text={this.state.validateFields.name.message} />
          )}

          <FormGroup
            label="Имейл"
            name="email"
            inputType="email"
            isRequired
            setValue={this.validateEmail}
          />
          {!this.state.validateFields.email.isValid && (
            <Error text={this.state.validateFields.email.message} />
          )}

          <FormGroup
            label="Парола"
            name="password"
            inputType="password"
            isRequired
            setValue={this.validatePassword}
          />
          {!this.state.validateFields.password.isValid && (
            <Error text={this.state.validateFields.password.message} />
          )}

          <ImageFormGroup validateField={this.validateImage} />

          <Button text="Регистрация" />
        </Form>
        {/* <form id="uploadForm" enctype="multipart/form-data" method="post">
          <input type="file" name="picture" />
          <input type="submit" value="Upload File" name="submit">
        </form> */}
      </FormContainer>
    );
  }

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: window.innerWidth });
  };

  private readonly validateName = (e: any): void => {
    const name = e.target.value;
    let isFieldValid = this.state.validateFields.name.isValid;
    let errorMessage = this.state.validateFields.name.message;

    if (name.trim() === "") {
      isFieldValid = false;
      errorMessage = "Името е задължително поле!";
    } else if (name.trim().length < 2 || name.trim().length > 40) {
      isFieldValid = false;
      errorMessage = "Името трябва да бъде между 2 и 40 символа!";
    } else {
      isFieldValid = true;
      errorMessage = "";
    }

    this.setState({
      validateFields: {
        ...this.state.validateFields,
        name: {
          isValid: isFieldValid,
          message: errorMessage,
        },
      },
      name: e.target.value,
    });
  };

  private readonly validateEmail = (e: any): void => {
    const email = e.target.value;
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

    this.setState({
      validateFields: {
        ...this.state.validateFields,
        email: {
          isValid: isFieldValid,
          message: errorMessage,
        },
      },
      email: e.target.value,
    });
  };

  private readonly validatePassword = (e: any): void => {
    const password = e.target.value;
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

    this.setState({
      validateFields: {
        ...this.state.validateFields,
        password: {
          isValid: isFieldValid,
          message: errorMessage,
        },
      },
      password: e.target.value,
    });
  };

  private readonly validateImage = (e: any): void => {
    this.setState({
      picture: e.target.value,
    });
  };

  private readonly register = (event: any): void => {
    event.preventDefault();
    const newState = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      picture: this.state.picture,
    };
  };
}
