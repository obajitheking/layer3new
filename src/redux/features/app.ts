import { IUser } from "@/common/types/interface";
import { clearTokens, setAccessToken } from "@/common/utils";
import { HYDRATE_ACTION_TYPE } from "@/constants";
import { LoginUserResponse, authApiEndpoints } from "@/redux/services";
import { AppDispatch, RootState } from "@/redux/store";
import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";

export interface IAppState {
  user: IUser | null;
  loggedIn: boolean;
}

// Initial state
const initialState: IAppState = {
  user: null,
  loggedIn: false,
};

const hydrate = createAction<RootState>(HYDRATE_ACTION_TYPE);

// Actual Slice
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCredentials: (state, { payload }: PayloadAction<LoginUserResponse>) => {
      const { access_token } = payload;
      state.loggedIn = true;
      setAccessToken(access_token);
    },
    logOutCurrentUser: (state) => {
      state.user = null;
      (state.loggedIn = false), clearTokens();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state, action) => {
        return {
          ...state,
          ...action.payload.app,
        };
      })
      .addMatcher(authApiEndpoints.login.matchFulfilled, (state, action) => {
        setAccessToken(action.payload.access_token);
      });
  },
});

export const { setCredentials, logOutCurrentUser } = appSlice.actions;

export const handleLogout =
  (cb: any = () => {}) =>
  (dispatch: AppDispatch) => {
    dispatch(logOutCurrentUser());
    if (cb) {
      cb();
    }
  };

export default appSlice.reducer;
