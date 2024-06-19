import * as Yup from "yup";

Yup.addMethod(Yup.string, "validRoute", function (errorMessage) {
  return this.test("validRoute", errorMessage, function (value) {
    const { path, createError } = this;

    if (!value) return true; // Skip validation if the value is undefined or null

    // Check if the string starts or ends with a `/`
    if (value.startsWith("/") || value.endsWith("/")) {
      return createError({ path, message: errorMessage });
    }

    // Check for consecutive `/`
    if (/\/{2,}/.test(value)) {
      return createError({ path, message: errorMessage });
    }

    return true;
  });
});

export default Yup;
