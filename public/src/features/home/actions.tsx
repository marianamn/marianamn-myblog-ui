import { Action, ActionCreator } from "redux";
import { ActionTypes } from "./constants";
import { User } from "../../interfaces";

export type Actions = GetUsers | GetUsersSuccess | GetUsersError;

export interface GetUsers extends Action<ActionTypes> {
  readonly type: ActionTypes.GET_USERS;
}

export const getUsers: ActionCreator<GetUsers> = () => {
  return {
    type: ActionTypes.GET_USERS,
  };
};

export interface GetUsersSuccess extends Action<ActionTypes> {
  readonly type: ActionTypes.GET_USERS_SUCCESS;
  readonly payload: {
    readonly users: ReadonlyArray<User>;
  };
}

export const getUsersSuccess: ActionCreator<GetUsersSuccess> = (users: ReadonlyArray<User>) => {
  return {
    type: ActionTypes.GET_USERS_SUCCESS,
    payload: {
      users,
    },
  };
};

export interface GetUsersError extends Action<ActionTypes> {
  readonly type: ActionTypes.GET_USERS_ERROR;
  readonly payload: Error;
  readonly error?: boolean;
}

export const getUsersError: ActionCreator<GetUsersError> = (error: string) => {
  return {
    type: ActionTypes.GET_USERS_ERROR,
    payload: new Error(error),
    error: true,
  };
};
