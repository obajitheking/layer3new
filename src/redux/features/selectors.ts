import { RootState } from "@/redux/store";

export const selectUser = (state: RootState) => state.app.user;
