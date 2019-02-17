import { Reducer } from "redux";
import { ActionTypes } from "./constants";
import { User } from "../../interfaces";

export interface State {
  readonly isLoading: boolean;
  readonly requestSuccess: boolean,
  readonly requestMessage: string,
  readonly user?: User;
  readonly error?: string;
}

const initialState = {
  isLoading: false,
  error: "",
  requestSuccess: true,
  requestMessage: "",
};

export const loginReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        requestSuccess: action.payload.success,
        requestMessage: action.payload.message,
        error: action.payload.errorMessage,
      };
    case ActionTypes.LOGIN_ERROR:
    console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        user: undefined,
        requestSuccess: action.payload.success,
        requestMessage: action.payload.message,
        error: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
