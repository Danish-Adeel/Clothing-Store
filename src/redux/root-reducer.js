import { combineReducers } from "redux";
import usereReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: usereReducer,
  cart: cartReducer,
});
