import { Action, ActionCreator } from "redux";
import { ActionTypes } from "./constants";
import { User } from "../../interfaces";

export type Actions = RegisterAction | RegisterSuccess | RegisterError;

export interface RegisterAction extends Action<ActionTypes> {
  readonly type: ActionTypes.REGISTER;
  readonly payload: FormData;
}

export const register: ActionCreator<RegisterAction> = (payload: FormData) => {
  return {
    type: ActionTypes.REGISTER,
    payload,
  };
};

export interface RegisterSuccess extends Action<ActionTypes> {
  readonly type: ActionTypes.REGISTER_SUCCESS;
  readonly payload: {
    readonly success: boolean;
    readonly message: string;
    readonly user: User;
  };
}

export const registerSuccess: ActionCreator<RegisterSuccess> = (payload: {
  readonly success: boolean;
  readonly message: string;
  readonly user: User;
}) => {
  return {
    type: ActionTypes.REGISTER_SUCCESS,
    payload,
  };
};

export interface RegisterError extends Action<ActionTypes> {
  readonly type: ActionTypes.REGISTER_ERROR;
  readonly payload: {
    readonly success: boolean;
    readonly message: string;
    readonly errorMessage: string;
  };
}

export const registerError: ActionCreator<RegisterError> = (payload: {
  readonly success: boolean;
  readonly message: string;
  readonly errorMessage: string;
}) => {
  return {
    type: ActionTypes.REGISTER_ERROR,
    payload,
  };
};
