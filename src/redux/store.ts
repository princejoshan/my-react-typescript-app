import { configureStore } from "@reduxjs/toolkit";
import querySlice from "../redux/query/reducer"; // Import your reducer(s)
import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../redux/login/reducer";
import queryReducer from "../redux/query/reducer";
import homePageReducer from "../redux/homepage/reducer";


const appReducers = combineReducers({
  login: loginReducer,
  query: queryReducer,
  homepage:homePageReducer
});

const store = configureStore({
  reducer: appReducers,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
