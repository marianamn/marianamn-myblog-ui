import { createSelector, Selector } from "reselect";
import { State } from "./reducer";
import { Post, InstagramPost } from "../../interfaces";

export const baseSelector: Selector<State, State> = ({ ...props }) => props;

export const selectIsLoading: Selector<State, boolean> = createSelector(
  baseSelector,
  state => state.isLoading,
);

export const selectRecentPosts: Selector<State, ReadonlyArray<Post>> = createSelector(
  baseSelector,
  state => state.recentPosts,
);

export const selectError: Selector<State, string | undefined> = createSelector(
  baseSelector,
  state => state.error,
);

export const selectRecentInstagramPosts: Selector<
  State,
  ReadonlyArray<InstagramPost>
> = createSelector(
  baseSelector,
  state => state.instagramPosts,
);
