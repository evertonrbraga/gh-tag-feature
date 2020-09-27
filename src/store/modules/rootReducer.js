import { combineReducers } from "redux";

import repo from "./repo/reducer";
import user from "./user/reducer";

export default combineReducers({
  repo,
  user,
});
