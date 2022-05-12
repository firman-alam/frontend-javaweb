import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/Auth";
import messageReducer from "./features/Message";

const reducer = {
  auth: authReducer,
  message: messageReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
