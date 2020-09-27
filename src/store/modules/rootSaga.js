import { all } from "redux-saga/effects";

import repo from "./repo/sagas";
import user from "./user/sagas";

export default function* rootSaga() {
  return yield all([repo, user]);
}
