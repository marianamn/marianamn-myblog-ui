import { Reducer } from "redux";
import { ActionTypes } from "./constants";
import { User } from "../../interfaces";

export interface State {
  readonly isLoading: boolean;
  readonly requestSuccess: boolean;
  readonly requestMessage: string;
  readonly user?: User;
  readonly error?: string;
}

const initialState = {
  isLoading: false,
  error: "",
  requestSuccess: false,
  requestMessage: "",
};

export const registerReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        requestSuccess: action.payload.success,
        requestMessage: action.payload.message,
        error: "",
      };
    case ActionTypes.REGISTER_ERROR:
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
