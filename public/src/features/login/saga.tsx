import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import api from "../../services/apiServices";
import { ActionTypes } from "./constants";
import { loginSuccess, loginError, LoginAction } from "./actions";
import sessionServices from "../../services/sessionServices";

// tslint:disable-next-line:typedef
function* sendLoginRequest(action: LoginAction) {
  const requestURL = "login";

  try {
    const response = yield call(api.postJson, requestURL, action.payload);
    sessionServices.set("token", response.token);
    sessionServices.set("user", response.user);
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
