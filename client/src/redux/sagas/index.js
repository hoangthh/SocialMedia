import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log("[fetchPostSaga - posts]", posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (error) {
    yield put(actions.getPosts.getPostsFailure(error));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    console.log("[createPostSaga - post]", post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (error) {
    yield put(actions.createPost.createPostFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest().type, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest().type, createPostSaga);
} //generator function ES6

export default mySaga;