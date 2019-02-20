import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import api from "../../services/index";
import { ActionTypes } from "./constants";
import { registerSuccess, registerError, RegisterAction } from "./actions";

// tslint:disable-next-line:typedef
function* sendRegisterRequest(action: RegisterAction) {
  const requestURL = "register";

  try {
    const response = yield call(api.postFormData, requestURL, action.payload);
    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerError(error));
  }
}

// tslint:disable-next-line:typedef
function* defaultSaga() {
  yield takeLatest(ActionTypes.REGISTER, sendRegisterRequest);
}

// tslint:disable-next-line:typedef
function* registerSaga() {
  yield all([fork(defaultSaga)]);
}

export default registerSaga;
