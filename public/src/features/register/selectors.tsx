import { createSelector, Selector } from "reselect";
import { State } from "./reducer";
import { User } from "../../interfaces";

export const baseSelector: Selector<State, State> = ({ ...props }) => props;

export const selectIsLoading: Selector<State, boolean> = createSelector(
  baseSelector,
  state => state.isLoading,
);

export const selectRequestSuccess: Selector<State, boolean> = createSelector(
  baseSelector,
  state => state.requestSuccess,
);

export const selectRequestMessage: Selector<State, string> = createSelector(
  baseSelector,
  state => state.requestMessage,
);

export const selectUser: Selector<State, User | undefined> = createSelector(
  baseSelector,
  state => state.user,
);

export const selectError: Selector<State, string | undefined> = createSelector(
  baseSelector,
  state => state.error,
);
