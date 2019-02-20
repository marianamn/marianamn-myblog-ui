import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import api from "../../services/index";
import { ActionTypes } from "./constants";
import { loginSuccess, loginError, LoginAction } from "./actions";

// tslint:disable-next-line:typedef
function* sendLoginRequest(action: LoginAction) {
  const requestURL = "login";

  try {
    const response = yield call(api.postJson, requestURL, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginError(error));
  }
}

// tslint:disable-next-line:typedef
function* defaultSaga() {
  yield takeLatest(ActionTypes.LOGIN, sendLoginRequest);
}

// tslint:disable-next-line:typedef
function* loginSaga() {
  yield all([fork(defaultSaga)]);
}

export default loginSaga;
