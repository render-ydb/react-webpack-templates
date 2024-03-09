import {
  createSlice,
  SliceCaseReducers,
  createAsyncThunk,
} from "@reduxjs/toolkit";

interface UserInfoState {
  username: string;
  avatar: string;
}

const initialState: UserInfoState = {
  username: "",
  avatar: "",
};

// mock get userino
export const getUserInfo = createAsyncThunk("userInfo", async () => {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        usename: "render",
        avatar: "",
      });
    }, 1000);
  });
  return res;
});

export const UserSlice = createSlice<
  UserInfoState,
  SliceCaseReducers<UserInfoState>,
  string
>({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserInfo.pending, (state) => {
        console.log("🚀 ~ 进行中！", state);
      })
      .addCase(getUserInfo.fulfilled, (state: UserInfoState, res: any) => {
        console.log("🚀 ~ fulfilled", res.payload);
        state.username = res.payload.usename;
        state.avatar = res.payload.avatar;
      })
      .addCase(getUserInfo.rejected, (state, err) => {
        console.log("🚀 ~ rejected", state, err);
      });
  },
});

// export const {

// } = UserSlice.actions;

export default UserSlice.reducer;
