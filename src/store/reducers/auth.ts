import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { firebase, auth } from "../../services/firebase";
import { AppDispatch } from "../configureStore";
import getLocalStorage from "../helpers/getLocalStorage";

type UserType = {
  id: string;
  name: string | null;
  avatar: string | null;
};

const user: UserType = getLocalStorage("authUser", {});

const slice = createSlice({
  name: "auth",
  initialState: {
    user,
  },
  reducers: {
    signIn: {
      reducer(state, action: PayloadAction<UserType>) {
        state.user = action.payload;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: "authUser",
              value: payload,
            },
          },
        };
      },
    },
  },
});

const { signIn } = slice.actions;

export const signInWithGoogle = async (
  dispatch: AppDispatch
): Promise<void> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider);

  if (result.user) {
    const { displayName, photoURL, uid } = result.user;

    dispatch(
      signIn({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    );
  }
};

export default slice.reducer;
