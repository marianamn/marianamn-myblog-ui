import { Reducer } from "redux";
import { ActionTypes } from "./constants";
import { Post, InstagramPost } from "../../interfaces";

export interface State {
  readonly isLoading: boolean;
  readonly recentPosts?: ReadonlyArray<Post>;
  readonly error?: string;
  readonly instagramPosts?: ReadonlyArray<InstagramPost>;
}

const initialState = {
  isLoading: false,
  error: "",
};

export const footerRecentPostsReducer: Reducer<State> = (state = initialState, action) => {
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
    case ActionTypes.GET_RECENT_INSTAGRAM_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_RECENT_INSTAGRAM_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        instagramPosts: action.payload.instagramPosts,
      };
    default:
      return state;
  }
};
