import { Reducer } from "redux";
import { ActionTypes } from "./constants";
import { Post } from "../../interfaces";

export interface State {
  readonly isLoading: boolean;
  readonly recentPosts?: ReadonlyArray<Post>;
  readonly error?: string;
}

const initialState = {
  isLoading: false,
  error: "",
};

export const recentPostsReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RECENT_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_RECENT_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recentPosts: action.payload.recentPosts,
      };
    case ActionTypes.GET_RECENT_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
