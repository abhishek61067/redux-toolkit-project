import { configureStore } from "@reduxjs/toolkit";
import cakeRootReducer from "./../features/cake/cakeSlice";
import icecreamRootReducer from "../features/icecream/icecreamSlice";
import usersRootReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    cake: cakeRootReducer,
    icecream: icecreamRootReducer,
    users: usersRootReducer,
  },
});
console.log(store.getState());

export default store;
