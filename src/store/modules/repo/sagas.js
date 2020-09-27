import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";
import { fetchStarredReposSuccess } from "./actions";

function* getStarredRepos({ username }) {
  const repos = yield call(api.get, `/${username}/starred`);
  localStorage.setItem("starredRepos", repos.data);
  yield put(fetchStarredReposSuccess(repos.data));
}

export default all([
  takeLatest("@repo/GET_STARRED_REPOS_REQUEST", getStarredRepos),
]);
