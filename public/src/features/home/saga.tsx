import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import api from "../../services/index";
import { ActionTypes } from "./constants";
import { getUsersSuccess, getUsersError } from "./actions";

// tslint:disable-next-line:typedef
function* sendGetUsersRequest() {
  const requestURL = "users";

  try {
    const users = yield call(api.getJson, requestURL);
    yield put(getUsersSuccess(users.items));
  } catch (error) {
    yield put(getUsersError(error));
  }
}

// tslint:disable-next-line:typedef
function* defaultSaga() {
  yield takeLatest(ActionTypes.GET_USERS, sendGetUsersRequest);
}

// tslint:disable-next-line:typedef
function* usersSaga() {
  yield all([fork(defaultSaga)]);
}

export default usersSaga;
