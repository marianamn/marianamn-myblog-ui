import { errorMessages, maxFileSize } from "../constants";

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

export const validateName = (
  name: string,
): {
  readonly isValid: boolean;
  readonly message: string;
} => {
  let isFieldValid = true;
  let errorMessage = "";

  if (name.trim() === "") {
    isFieldValid = false;
    errorMessage = errorMessages.nameRequired;
  } else if (name.trim().length < 2 || name.trim().length > 40) {
    isFieldValid = false;
    errorMessage = errorMessages.nameLengthError;
  }

  return {
    isValid: isFieldValid,
    message: errorMessage,
  };
};

export const validatePicture = (
  picture: File,
): {
  readonly isValid: boolean;
  readonly message: string;
} => {
  let isPictureValid = true;
  let errorMessage = "";
  const allowedFormats: ReadonlyArray<string> = ["jpg", "jpeg", "png"];

  if (picture && !allowedFormats.find(f => picture.type.indexOf(f) !== -1)) {
    isPictureValid = false;
    errorMessage = errorMessages.pictureFormat;
  } else if (picture && picture.size > maxFileSize) {
    isPictureValid = false;
    errorMessage = errorMessages.pictureLengthError;
  }

  return {
    isValid: isPictureValid,
    message: errorMessage,
  };
};
