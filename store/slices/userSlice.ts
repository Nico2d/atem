import { registerMutation } from "./../../graphql/mutation/register.mutation";
import { AppThunk } from "../configureStore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//GRAPHQL
import { sendRequest } from "../../graphql/sendRequest";

//TYPES
import { SignUpForm } from "./../../Types/forms/SignUpForm";
import { ErrorDto } from "./../../Types/ErrorDto";
import { UserResponseDto } from "../../Types/user/UserResponseDto";
import { UserDto } from "./../../Types/user/UserDto";

//QUERIES
import { meQuery } from "./../../graphql/query/me.query";
import { SignInForm } from "../../Types";

//MUTATIONS
import { loginMutation } from "./../../graphql/mutation/login-mutation";

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
    userSignOut(state) {
      state.signIn = false;
    },
    userSignInSuccess(state, action: PayloadAction<UserDto>) {
      state.signIn = true;
      state.user = action.payload;
    },
    userSignUpSuccess(state, action: PayloadAction<UserDto>) {
      state.user = action.payload;
      state.userSignUpSuccess = true;
    },
    userFail(state, action: PayloadAction<ErrorDto[]>) {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  userFail,
  userSignOut,
  userSignInSuccess,
  userSignUpSuccess,
} = user.actions;

export default user.reducer;

export const fetchUser = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUserStart());
    const user = await sendRequest<UserResponseDto>(meQuery);
    dispatch(getUserSuccess(user));
  } catch (err) {
    dispatch(userFail());
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
    else dispatch(userFail(userRes.errors));
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

    if (userRes.user) dispatch(userSignInSuccess(userRes.user as UserDto));
    else dispatch(userFail(userRes.errors));
  } catch {}
};
