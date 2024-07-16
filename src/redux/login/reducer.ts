import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { LoginProps, LoginState } from "./types";

const initialState: LoginState = {
  currentUser: JSON.parse(localStorage.getItem("user") || "null"),
  error: null,
  users: [
    {
      username: "user1",
      password: "pass1",
      name: "User One",
      isLoggedin: false,
    },
    {
      username: "user2",
      password: "pass2",
      name: "User Two",
      isLoggedin: false,
    },
  ],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      actions.processLoginRequest,
      (state, action: PayloadAction<LoginProps>) => {
        const user = state.users.find(
          (u) =>
            u.username === action.payload.username &&
            u.password === action.payload.password
        );

        if (user) {
          user.isLoggedin = true;
          state.currentUser = user;
          localStorage.setItem("user", JSON.stringify(state.currentUser));
          state.error = null;
        } else {
          state.error = "Invalid credentials";
        }
      }
    );
    builder.addCase(actions.logout, ( (state)  => {
        localStorage.removeItem('user');
        state.currentUser = null;
    }));
  },
});

export default loginSlice.reducer;
