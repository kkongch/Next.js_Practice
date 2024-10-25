import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./cal";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const reducer = combineReducers({ user: userReducer });
export default store;
export type Reducer = ReturnType<typeof reducer>;
