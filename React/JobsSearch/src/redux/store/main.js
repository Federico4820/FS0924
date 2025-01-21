import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/main";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
