import { errorMessages } from "../constants";

export const validatePassword = (
  password: string,
): {
  readonly isValid: boolean;
  readonly message: string;
} => {
  let isFieldValid = true;
  let errorMessage = "";

  if (password.trim() === "") {
    isFieldValid = false;
    errorMessage = errorMessages.passwordRequired;
  } else if (password.trim().length < 6) {
    isFieldValid = false;
    errorMessage = errorMessages.passwordLengthError;
  }

  return {
    isValid: isFieldValid,
    message: errorMessage,
  };
};

export const validateEmail = (
  email: string,
): {
  readonly isValid: boolean;
  readonly message: string;
} => {
  let isFieldValid = true;
  let errorMessage = "";

  if (email.trim() === "") {
    isFieldValid = false;
    errorMessage = errorMessages.emailRequired;
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    )
  ) {
    isFieldValid = false;
    errorMessage = errorMessages.emailWrongFormat;
  }

  return {
    isValid: isFieldValid,
    message: errorMessage,
  };
};
