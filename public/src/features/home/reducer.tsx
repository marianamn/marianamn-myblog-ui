import { Reducer } from "redux";
import { ActionTypes } from "./constants";
import { User } from "../../interfaces";

export interface State {
  readonly isLoading: boolean;
  readonly users?: ReadonlyArray<User>;
  readonly error?: string;
}

const initialState = {
  isLoading: false,
  error: "",
};

export const usersReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload.users,
      };
    case ActionTypes.GET_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
