import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localStorage from "./middlewares/localStorage";

import themeMode from "./reducers/themeSwitch";

const reducer = combineReducers({ themeMode });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
