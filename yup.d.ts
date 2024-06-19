import * as Yup from "yup";

declare module "yup" {
  interface StringSchema {
    validRoute(message: string): this;
  }
}
