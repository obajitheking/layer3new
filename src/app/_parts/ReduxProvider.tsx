"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
// import { NextAuthProvider } from "./NextAuthProvider";

export const ReduxProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
