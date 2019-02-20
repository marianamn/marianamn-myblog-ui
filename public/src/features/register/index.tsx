import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { history } from "../../history";
import { mobileResolution, tabletResolution } from "../../constants";
import { User } from "../../interfaces";

import { validateEmail, validatePassword, validateName, validatePicture } from "../../utils/validation";
import { Title } from "../../common/title";
import { FormGroup } from "../../common/form-group";
import { Button } from "../../common/button";
import { Error } from "../../common/error";
import { ImageFormGroup } from "../../common/image-form-group";

import { ApplicationState } from "../../store";
import { RegisterAction, register, Actions } from "./actions";
import {
  selectIsLoading,
  selectRequestSuccess,
  selectRequestMessage,
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

interface Props {
  readonly isLoading: boolean;
  readonly requestSuccess: boolean;
  readonly requestMessage: string;
  readonly token?: string;
  readonly user?: User;
  readonly error?: string;
  readonly register: (payload: FormData) => RegisterAction;
}

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
    readonly picture: {
      readonly isValid: boolean;
      readonly message: string;
    };
  };
}

class Register extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
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
        picture: {
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
        <Form
          id="uploadForm"
          encType="multipart/form-data"
          method="post"
          isMobile={isMobile}
          isTablet={isTablet}
          onSubmit={this.register}
        >
          <Title text="Регистриране" />

          <FormGroup label="Име" name="mane" inputType="text" isRequired setValue={this.setName} />
          {!this.state.validateFields.name.isValid && (
            <Error text={this.state.validateFields.name.message} />
          )}

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

          <ImageFormGroup validateField={this.setImage} />
          {!this.state.validateFields.picture.isValid && (
            <Error text={this.state.validateFields.picture.message} />
          )}

          <Button text="Регистрация" />
        </Form>
      </FormContainer>
    );
  }

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: window.innerWidth });
  };

  private readonly setName = (e: any): void => {
    this.setState({ name: e.target.value });
  };

  private readonly setEmail = (e: any): void => {
    this.setState({ email: e.target.value });
  };

  private readonly setPassword = (e: any): void => {
    this.setState({ password: e.target.value });
  };

  private readonly setImage = (e: any): void => {
    this.setState({
      picture: e.target.files[0],
    });
  };

  private readonly register = (event: any): void => {
    event.preventDefault();
    event.stopPropagation();
    const emailValidation = validateEmail(this.state.email);
    const passwordValidation = validatePassword(this.state.password);
    const nameValidation = validateName(this.state.name);
    const pictureValidation = validatePicture(this.state.picture);

    if (emailValidation.isValid && passwordValidation.isValid && nameValidation.isValid && pictureValidation.isValid) {
      const data = new FormData();
      data.append("picture", this.state.picture);
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("password", this.state.password);

      // If validation passed register user and redirect to login page
      this.props.register(data);
      //history.push("/login");
    } else {
      this.setState({
        validateFields: {
          name: {
            isValid: nameValidation.isValid,
            message: nameValidation.message,
          },
          email: {
            isValid: passwordValidation.isValid,
            message: passwordValidation.message,
          },
          password: {
            isValid: emailValidation.isValid,
            message: emailValidation.message,
          },
          picture: {
            isValid: pictureValidation.isValid,
            message: pictureValidation.message,
          },
        },
      });
    }
  };
}

const mapStateToProps = ({ registerSate }: ApplicationState): Partial<Props> => ({
  isLoading: selectIsLoading(registerSate),
  requestSuccess: selectRequestSuccess(registerSate),
  requestMessage: selectRequestMessage(registerSate),
  user: selectUser(registerSate),
  error: selectError(registerSate),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>): Partial<Props> => ({
  register: (payload: FormData) => dispatch(register(payload)),
});

export default connect<Partial<Props>, Partial<Props>, Partial<Props>, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
