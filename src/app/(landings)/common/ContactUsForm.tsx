"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { IRequestCallback } from "@/common/types/interface";
import { useSubmitCallbackFormMutation } from "@/redux/services/forms.api";
import { openNotification } from "@/common/utils";
import * as yup from "yup";
import SubmitButton from "@/components/SubmitButton";

const validationSchema = yup.object().shape({
  fullname: yup.string().required("Fullname is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  location: yup.string().required("Location is required"),
});

function ContactUsForm() {
  const [requestCallback] = useSubmitCallbackFormMutation();
  const handleSubmit = async (
    values: IRequestCallback,
    help: FormikHelpers<IRequestCallback>
  ) => {
    try {
      await requestCallback(values).unwrap();
      openNotification({ type: "success", message: "Thanks for reaching out" });
      help.resetForm({
        values: {
          fullname: "",
          email: "",
          phone: "",
          location: "",
          type: "callback",
        },
      });
    } catch (error) {}
  };
  return (
    <section className="py-[100px] bg-brand-dark-2">
      <div className="container flex flex-col items-center justify-center">
        <div className="mb-10">
          <h3 data-aos="fade" className="header-text text-center mb-5">
            Let&apos;s talk about how we can help.
          </h3>
          <p
            data-aos="fade"
            className="text-base font-[300] text-white text-opacity-90 text-center"
          >
            Enter your details below to request a complimentary consultations
          </p>
        </div>
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            phone: "",
            location: "",
            type: "callback",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form
            data-aos="fade"
            action="submit"
            method="post"
            className="contact-form w-full max-w-[754px] mx-auto"
          >
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row  items-center md:space-x-[58px] mb-6 w-full">
              <div className="input-field min-h-[128px]">
                <label htmlFor="fullname">
                  Full Name<span className="asterisk">*</span>
                </label>
                <Field
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your full name"
                  required
                  className="w-full md:max-w-[348px] text-white"
                />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="input-field min-h-[128px]">
                <label htmlFor="location">
                  Location<span className="asterisk">*</span>
                </label>
                <Field
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter your address"
                  required
                  className="w-full md:max-w-[348px] text-white"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 h-5"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center md:space-x-[58px] mb-10">
              <div className="input-field min-h-[128px]">
                <label htmlFor="email">
                  Email<span className="asterisk">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full md:max-w-[348px] text-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="input-field min-h-[128px]">
                <label htmlFor="phone">
                  Phone Number<span className="asterisk">*</span>
                </label>
                <Field
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+234 090183474"
                  required
                  className="w-full md:max-w-[348px] text-white"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <SubmitButton
              data-aos="fade-up"
              className="filled text-white border-primary !flex !bg-primary hover:!text-white !mx-auto !w-full !max-w-[270px]"
            >
              Request a Call Back
            </SubmitButton>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default ContactUsForm;
