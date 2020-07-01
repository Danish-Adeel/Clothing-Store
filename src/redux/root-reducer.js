import { combineReducers } from "redux";
import usereReducer from "./user/user.reducer";

export default combineReducers({
  user: usereReducer,
});
