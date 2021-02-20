import { AppThunk } from "../configureStore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//GRAPHQL
import { sendRequest } from "../../graphql/sendRequest";

//TYPES
import { ResponseDto } from "./../../Types/ResponseDto";
import { UserDto } from "./../../Types/user/UserDto";

//QUERIES
import { meQuery } from "./../../graphql/query/me.query";

interface UserState {
  data: ResponseDto<UserDto>;
  loading: boolean;
}

const initialState: UserState = {
  data: {
    res: {
      id: 0,
      createdAt: "",
      updatedAt: "",
      email: "",
      username: "",
    },
    errors: [],
  },
  loading: true,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStart(state) {
      state.loading = true;
    },
    getUserSuccess(state, action: PayloadAction<ResponseDto<UserDto>>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUserFail(state) {
      state.loading = false;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserFail } = user.actions;

export default user.reducer;

export const fetchUser = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUserStart());
    const user = await sendRequest<ResponseDto<UserDto>>(meQuery);
    dispatch(getUserSuccess(user));
  } catch (err) {
    dispatch(getUserFail());
  }
};
