import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import api from "../../services/apiServices";
import { ActionTypes } from "./constants";
import { getRecentPostsSuccess, getRecentPostsError } from "./actions";

// tslint:disable-next-line:typedef
function* sendGetRecentPostsRequest() {
  const requestURL = "posts/recent-posts";

  try {
    const response = yield call(api.getJson, requestURL);
    yield put(getRecentPostsSuccess(response.posts));
  } catch (error) {
    yield put(getRecentPostsError(error));
  }
}

// tslint:disable-next-line:typedef
function* defaultSaga() {
  yield takeLatest(ActionTypes.GET_RECENT_POSTS, sendGetRecentPostsRequest);
}

// tslint:disable-next-line:typedef
function* recentPostsSaga() {
  yield all([fork(defaultSaga)]);
}

export default recentPostsSaga;
