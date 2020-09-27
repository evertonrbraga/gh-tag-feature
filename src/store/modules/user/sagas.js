import {
  call,
  select,
  put,
  all,
  // takeLatest,
  takeEvery,
} from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import { fetchUserSuccess } from "./actions";

function* setUser({ username }) {
  try {
    const user = yield call(api.get, `/${username}`);

    toast.success("Usuário cadastrado com sucesso");

    if (!localStorage.hasOwnProperty("users")) {
      localStorage.setItem("users", JSON.stringify(user.data));
      yield put(fetchUserSuccess(user.data));
    } else {
      const newUsers = yield select((state) => {
        return state.user.users;
      });
      const arr = [...newUsers, user.data];
      localStorage.setItem("users", JSON.stringify(arr));
      yield put(fetchUserSuccess(user.data));
    }
  } catch (err) {
    toast.error("Usuário não existe");
  }
}

// function* getUsers() {
//   const repos = localStorage.setItem("user", repos.data);
//   yield put(fetchUserSuccess(repos.data));
// }

export default all([
  takeEvery("@user/SET_USER_REQUEST", setUser),
  // takeLatest("@user/GET_USERS_REQUEST", getUsers),
]);

// function* setUser({ username }) {
//   const user = yield call(api.get, `/${username}`);

// if (!localStorage.hasOwnProperty("users")) {
//   localStorage.setItem("users", JSON.stringify(user.data));
//   fetchUsersSuccess(user.data);
// } else {
//   const newUsers = yield select((state) => {
//     return state.users;
//   });
//   console.log("newUsers", newUsers);
//   localStorage.setItem([JSON.parse(newUsers), user.data]);
//   fetchUsersSuccess(user.data);
// }
// }
