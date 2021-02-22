import { registerMutation } from "./../../graphql/mutation/register.mutation";
import { SignUpForm } from "./../../Types/forms/SignUpForm";
import { ErrorDto } from "./../../Types/ErrorDto";
import { UserDto } from "./../../Types/user/UserDto";
import { loginMutation } from "./../../graphql/mutation/login-mutation";
import { AppThunk } from "../configureStore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//GRAPHQL
import { sendRequest } from "../../graphql/sendRequest";

//TYPES
import { UserResponseDto } from "../../Types/user/UserResponseDto";

//QUERIES
import { meQuery } from "./../../graphql/query/me.query";
import { SignInForm } from "../../Types";

interface UserState {
  user: UserDto;
  errors: ErrorDto[];
  loading: boolean;
  signIn: boolean;
  userSignUpSuccess?: boolean;
}

const initialState: UserState = {
  user: {
    id: 0,
    createdAt: "",
    updatedAt: "",
    email: "",
    username: "",
  },
  errors: [],
  loading: true,
  signIn: false,
  userSignUpSuccess: undefined,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStart(state) {
      state.loading = true;
    },
    getUserSuccess(state, action: PayloadAction<UserResponseDto>) {
      state.user = action.payload.user as UserDto;
      state.errors = action.payload.errors;
      state.loading = false;
    },
    getUserFail(state) {
      state.loading = false;
    },
    userSignOut(state) {
      state.signIn = false;
    },
    userSignIn(state, action: PayloadAction<UserResponseDto>) {
      state.signIn = true;
      state.errors = action.payload.errors;
      state.user = action.payload.user as UserDto;
    },
    userSignUpSuccess(state, action: PayloadAction<UserDto>) {
      state.user = action.payload;
      state.userSignUpSuccess = true;
    },
    userSignUpFail(state, action: PayloadAction<ErrorDto[]>) {
      state.errors = action.payload;
      state.userSignUpSuccess = false;
    },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  getUserFail,
  userSignOut,
  userSignIn,
  userSignUpSuccess,
  userSignUpFail,
} = user.actions;

export default user.reducer;

export const fetchUser = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUserStart());
    const user = await sendRequest<UserResponseDto>(meQuery);
    dispatch(getUserSuccess(user));
  } catch (err) {
    dispatch(getUserFail());
  }
};

export const registerUser = (variables: SignUpForm): AppThunk => async (
  dispatch
) => {
  try {
    const userRes = await sendRequest<UserResponseDto>(
      registerMutation,
      variables
    );

    if (userRes.user) dispatch(userSignUpSuccess(userRes.user as UserDto));
    else dispatch(userSignUpFail(userRes.errors));
  } catch {}
};

export const signInUser = (variables: SignInForm): AppThunk => async (
  dispatch
) => {
  try {
    const userRes = await sendRequest<UserResponseDto>(
      loginMutation,
      variables
    );
    dispatch(userSignIn(userRes));
  } catch {}
};
