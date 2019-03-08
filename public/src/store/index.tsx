import { combineReducers, Dispatch, Action, AnyAction } from "redux";
import { all, fork } from "redux-saga/effects";

import loginSaga from "../features/login/saga";
import { loginReducer } from "../features/login/reducer";
import { State as LoginState } from "../features/login/reducer";

import registerSaga from "../features/register/saga";
import { registerReducer } from "../features/register/reducer";
import { State as RegisterState } from "../features/register/reducer";

import recentPostsSaga from "../features/home/saga";
import { recentPostsReducer } from "../features/home/reducer";
import { State as RecentPostsState } from "../features/home/reducer";

import footerRecentPostsSaga from "../features/footer/saga";
import { footerRecentPostsReducer } from "../features/footer/reducer";
import { State as FooterRecentPostsState } from "../features/home/reducer";

// Admin Panel
import usersSaga from "../features/admin/users/saga";
import { usersReducer } from "../features/admin/users/reducer";
import { State as UsersState } from "../features/admin/users/reducer";

// The top-level state object
export interface ApplicationState {
  readonly usersState: UsersState;
  readonly loginState: LoginState;
  readonly registerSate: RegisterState;
  readonly recentPostsState: RecentPostsState;
  readonly footerRecentPostsState: FooterRecentPostsState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  readonly dispatch: Dispatch<A>;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It"s important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<ApplicationState>({
  usersState: usersReducer,
  loginState: loginReducer,
  registerSate: registerReducer,
  recentPostsState: recentPostsReducer,
  footerRecentPostsState: footerRecentPostsReducer,
});

// tslint:disable-next-line:typedef
export function* rootSaga() {
  yield all([
    fork(usersSaga),
    fork(loginSaga),
    fork(registerSaga),
    fork(recentPostsSaga),
    fork(footerRecentPostsSaga),
  ]);
}
