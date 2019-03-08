import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import api from "../../services/apiServices";
import { ActionTypes } from "./constants";
import {
  getRecentPostsSuccess,
  getRecentPostsError,
  getRecentInstagramPostsSuccess,
} from "./actions";
import { InstagramPost } from "../../interfaces";

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
function* sendGetRecentInstagramPostsRequest() {
  const instagramAccessToken = "10816439205.8ad794b.5b378bc6691446f38085b074b7e7bcdf";
  const requestURL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${instagramAccessToken}&count=4`;
  console.log(requestURL);

  try {
    const response = yield call(api.getInstagramJson, requestURL);
    const posts = response.data.map((d: any) => {
      return {
        image: d.images.standard_resolution.url,
        link: d.link,
        createdAt: d.created_time,
        tags: d.tags,
      };
    });
    yield put(getRecentInstagramPostsSuccess(posts));
  } catch (error) {
    console.error(error);
  }
}

// tslint:disable-next-line:typedef
function* defaultSaga() {
  yield takeLatest(ActionTypes.GET_RECENT_POSTS, sendGetRecentPostsRequest);
  yield takeLatest(ActionTypes.GET_RECENT_INSTAGRAM_POSTS, sendGetRecentInstagramPostsRequest);
}

// tslint:disable-next-line:typedef
function* footerRecentPostsSaga() {
  yield all([fork(defaultSaga)]);
}

export default footerRecentPostsSaga;
