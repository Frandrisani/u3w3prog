import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songsReducer from "../reducers";

const globalReducer = combineReducers({
  songs: songsReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
