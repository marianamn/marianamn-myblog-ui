import { Reducer } from "redux";
import { ActionTypes } from "./constants";
import { User } from "../../interfaces";

export interface State {
  readonly isLoading: boolean;
  readonly requestSuccess: boolean,
  readonly requestMessage: string,
  readonly token?: string,
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
        token: action.payload.token,
        requestSuccess: action.payload.requestSuccess,
        requestMessage: action.payload.requestMessage,
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        requestSuccess: action.payload.requestSuccess,
        requestMessage: action.payload.requestMessage,
        error: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
