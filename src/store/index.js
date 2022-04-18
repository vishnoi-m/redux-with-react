import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authSlice.reducer },
});

export default store;
