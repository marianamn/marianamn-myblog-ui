import { createSelector, Selector } from "reselect";
import { State } from "./reducer";
import { User } from "../../interfaces";

export const baseSelector: Selector<State, State> = ({ ...props }) => props;

export const selectIsLoading: Selector<State, boolean> = createSelector(
  baseSelector,
  state => state.isLoading,
);

export const selectUsers: Selector<State, ReadonlyArray<User>> = createSelector(
  baseSelector,
  state => state.users,
);

export const selectError: Selector<State, string | undefined> = createSelector(
  baseSelector,
  state => state.error,
);
