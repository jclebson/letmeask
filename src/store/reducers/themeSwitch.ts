import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";

import { light } from "../../styles/themes/light";
import getLocalStorage from "../helpers/getLocalStorage";

const initialState: DefaultTheme = getLocalStorage("theme", light);

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: {
      reducer(state, action: PayloadAction<DefaultTheme>) {
        state = action.payload;
        return state;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: "theme",
              value: payload,
            },
          },
        };
      },
    },
  },
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
