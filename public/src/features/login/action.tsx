import { Action, ActionCreator } from "redux";
import { ActionTypes } from "./constants";
import { User } from "../../interfaces";

export type Actions = LoginAction | LoginSuccess | LoginError;

export interface LoginAction extends Action<ActionTypes> {
  readonly type: ActionTypes.LOGIN;
  readonly payload: {
    readonly email: string;
    readonly password: string;
  };
}

export const login: ActionCreator<LoginAction> = (
  email: string,
  password: string,
) => {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export interface LoginSuccess extends Action<ActionTypes> {
  readonly type: ActionTypes.LOGIN_SUCCESS;
  readonly payload: {
    readonly requestSuccess: boolean;
    readonly requestMessage: string;
    readonly token: string;
    readonly user: User;
  };
}

export const loginSuccess: ActionCreator<LoginSuccess> = (
  requestSuccess: boolean,
  requestMessage: string,
  token: string,
  user: User,
) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: {
      requestSuccess,
      requestMessage,
      token,
      user,
    },
  };
};

export interface LoginError extends Action<ActionTypes> {
  readonly type: ActionTypes.LOGIN_ERROR;
  readonly payload: {
    readonly requestSuccess: boolean;
    readonly requestMessage: string;
    readonly errorMessage: string;
  };
}

export const loginError: ActionCreator<LoginError> = (
  requestSuccess: boolean,
  requestMessage: string,
  errorMessage: string,
) => {
  return {
    type: ActionTypes.LOGIN_ERROR,
    payload: {
      requestSuccess,
      requestMessage,
      errorMessage,
    },
  };
};
