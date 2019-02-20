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

export const login: ActionCreator<LoginAction> = (email: string, password: string) => {
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
    readonly success: boolean;
    readonly message: string;
    readonly token: string;
    readonly user: User;
  };
}

export const loginSuccess: ActionCreator<LoginSuccess> = (payload: {
  readonly success: boolean;
  readonly message: string;
  readonly token: string;
  readonly user: User;
}) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload,
  };
};

export interface LoginError extends Action<ActionTypes> {
  readonly type: ActionTypes.LOGIN_ERROR;
  readonly payload: {
    readonly success: boolean;
    readonly message: string;
    readonly errorMessage: string;
  };
}

export const loginError: ActionCreator<LoginError> = (payload: {
  readonly success: boolean;
  readonly message: string;
  readonly errorMessage: string;
}) => {
  return {
    type: ActionTypes.LOGIN_ERROR,
    payload,
  };
};
