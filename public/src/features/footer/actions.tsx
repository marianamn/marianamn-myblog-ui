import { Action, ActionCreator } from "redux";
import { ActionTypes } from "./constants";
import { Post, InstagramPost } from "../../interfaces";

export type Actions =
  | GetRecentPosts
  | GetRecentPostsSuccess
  | GetRecentPostsError
  | GetRecentInstagramPosts
  | GetRecentInstagramPostsSuccess;

export interface GetRecentPosts extends Action<ActionTypes> {
  readonly type: ActionTypes.GET_RECENT_POSTS;
}

export const getRecentPosts: ActionCreator<GetRecentPosts> = () => {
  return {
    type: ActionTypes.GET_RECENT_POSTS,
  };
};

export interface GetRecentPostsSuccess extends Action<ActionTypes> {
  readonly type: ActionTypes.GET_RECENT_POSTS_SUCCESS;
  readonly payload: {
    readonly recentPosts: ReadonlyArray<Post>;
  };
}

export const getRecentPostsSuccess: ActionCreator<GetRecentPostsSuccess> = (
  recentPosts: ReadonlyArray<Post>,
) => {
  return {
    type: ActionTypes.GET_RECENT_POSTS_SUCCESS,
    payload: {
      recentPosts,
    },
  };
};

export interface GetRecentPostsError extends Action<ActionTypes> {
  readonly type: ActionTypes.GET_RECENT_POSTS_ERROR;
  readonly payload: Error;
  readonly error?: boolean;
}

export const getRecentPostsError: ActionCreator<GetRecentPostsError> = (error: string) => {
  return {
    type: ActionTypes.GET_RECENT_POSTS_ERROR,
    payload: new Error(error),
    error: true,
  };
};

export interface GetRecentInstagramPosts extends Action<ActionTypes> {
  readonly type: ActionTypes.GET_RECENT_INSTAGRAM_POSTS;
}

export const getRecentInstagramPosts: ActionCreator<GetRecentInstagramPosts> = () => {
  return {
    type: ActionTypes.GET_RECENT_INSTAGRAM_POSTS,
  };
};

export interface GetRecentInstagramPostsSuccess extends Action<ActionTypes> {
  readonly type: ActionTypes.GET_RECENT_INSTAGRAM_POSTS_SUCCESS;
  readonly payload: {
    readonly instagramPosts: ReadonlyArray<InstagramPost>;
  };
}

export const getRecentInstagramPostsSuccess: ActionCreator<GetRecentInstagramPostsSuccess> = (
  instagramPosts: ReadonlyArray<InstagramPost>,
) => {
  return {
    type: ActionTypes.GET_RECENT_INSTAGRAM_POSTS_SUCCESS,
    payload: {
      instagramPosts,
    },
  };
};
