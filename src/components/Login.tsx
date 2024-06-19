"use client";
import { ILoginPayload, useLoginMutation } from "@/redux/services";
import { Formik, Form, Field } from "formik";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/features";

function Login() {
  const [loginUser] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleUSerLogin = async (values: ILoginPayload) => {
    try {
      const response = await loginUser(values).unwrap();
      dispatch(setCredentials(response));
      router.push(`/admin/`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full max-w-[400px] text-white p-5  bg-semi-dark-blue min-h-[300px] rounded-lg">
      <p className="text-center">Login </p>
      <Formik
        onSubmit={handleUSerLogin}
        initialValues={{
          provider: "rest",
          username: "",
          password: "",
        }}
      >
        <Form>
          <label className="input input-bordered border-greyish-blue flex items-center bg-transparent gap-2 my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <Field
              type="email"
              name="username"
              placeholder="Email"
              className="grow"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 my-4  border-greyish-blue bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="grow"
            />
          </label>

          <SubmitButton className="btn btn-neutral w-full">Login</SubmitButton>
        </Form>
      </Formik>
    </div>
  );
}

Login.propTypes = {};

export default Login;
