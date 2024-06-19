"use client";
import { IContactSales } from "@/common/types/interface";
import { openNotification } from "@/common/utils";
import SubmitButton from "@/components/SubmitButton";
import { useSubmitContactFormMutation } from "@/redux/services/forms.api";
import cx from "classnames";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { v4 } from "uuid";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string(),
  product_of_interest: Yup.string(),
  message: Yup.string().required("Message is required"),
});

function InputControl({
  label,
  name,
  id,
  containerClass,
  labelClass,
  ...rest
}: {
  label?: string;
  name: string;
  containerClass?: string;
  labelClass?: string;
} & React.HTMLProps<HTMLInputElement>) {
  return (
    <div className={cx("w-full", containerClass)}>
      <label
        htmlFor={id}
        className={cx(
          "text-brand-dark block mb-3 text-sm font-semibold",
          labelClass
        )}
      >
        {label}
        <span
          className={cx(
            "font-[300]",
            rest?.required ? "text-red-500" : "text-black"
          )}
        >
          {rest?.required ? "*" : " (Optional)"}
        </span>
      </label>
      <Field
        {...rest}
        id={id}
        name={name}
        autoComplete="name"
        className={cx(
          "input bg-transparent border-[#01010133] border w-full h-[50px] rounded-[10px] py-4 px-[23px]",
          rest?.className
        )}
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
}

function SelectControl({
  name,
  label,
  labelClass,
  containerClass,
  id,
  options,
  ...rest
}: {
  label?: string;
  name: string;
  containerClass?: string;
  labelClass?: string;
  options?: string[];
} & React.HTMLProps<HTMLSelectElement>) {
  return (
    <div className={cx("w-full", containerClass)}>
      <label
        htmlFor={id}
        className={cx(
          "text-brand-dark mb-3 block text-sm font-semibold",
          labelClass
        )}
      >
        {label}
        <span
          className={cx(
            "font-[300]",
            rest?.required ? "text-red-500" : "text-black"
          )}
        >
          {rest?.required ? "*" : " (Optional)"}
        </span>
      </label>
      <Field
        {...rest}
        id={id}
        name={name}
        className={cx(
          "select border-[#01010133] bg-transparent border w-full h-[50px] rounded-[10px] py-2 px-[23px]",
          rest?.className
        )}
        as="select"
      >
        {options?.map((option) => (
          <option key={v4()} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
}

function TextAreaControl({
  name,
  label,
  id,
  containerClass,
  labelClass,
  ...rest
}: {
  label?: string;
  name: string;
  containerClass?: string;
  labelClass?: string;
} & React.HTMLProps<HTMLTextAreaElement>) {
  return (
    <div className={cx("w-full", containerClass)}>
      <label
        htmlFor={id}
        className={cx(
          "text-brand-dark mb-3 block text-sm font-semibold",
          labelClass
        )}
      >
        {label}
        <span
          className={cx(
            "font-[300]",
            rest?.required ? "text-red-500" : "text-black"
          )}
        >
          {rest?.required ? "*" : " (Optional)"}
        </span>
      </label>
      <Field
        {...rest}
        id={id}
        name={name}
        className={cx(
          "textarea textarea-lg border-[#01010133] bg-transparent border w-full rounded-[10px] py-4 px-[23px]",
          rest?.className
        )}
        as="textarea"
      ></Field>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
}
function SupportForm() {
  const [contactSales] = useSubmitContactFormMutation();

  const handleSubmit = async (values: IContactSales) => {
    try {
      await contactSales(values);
      // show success message
      openNotification({
        type: "success",
        message: "Thanks for reaching out, we will get back to you shortly",
      });
    } catch (error) {
      // show error message
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="bg-white p-[30px] w-full mx-auto lg:mx-0 max-w-[599px] rounded-lg"
    >
      <h3 className="text-brand-dark text-2xl leading-[50px] font-medium mb-4">
        Request a call
      </h3>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          product_of_interest: "",
          message: "",
          type: "contact",
        }}
        validationSchema={validationSchema}
      >
        <Form className="">
          <div className="mb-7 flex flex-col space-y-7 mobile:space-y-0 mobile:flex-row mobile:space-x-3 mobile:justify-between">
            <InputControl required label="First Name" name="firstname" />
            <InputControl required label="Last Name" name="lastname" />
          </div>
          <div className="mb-7 flex flex-col space-y-7 mobile:space-y-0  mobile:flex-row mobile:space-x-3 mobilejustify-between">
            <InputControl required type="email" label="Email" name="email" />
            <InputControl label="Phone Number" name="phone" />
          </div>

          <SelectControl
            containerClass="mb-7"
            name="product_of_interest"
            label="Product of Interest"
            options={[
              "enterprise plans",
              "small business plans",
              "individual plans",
              "cybersecurity solutions",
              "cloud solutions",
              "networking solutions",
              "access solutions",
              "managed services",
              "professional services",
              "others",
            ]}
          />
          <TextAreaControl
            containerClass="mb-4"
            required
            label="Questions/Comments"
            name="message"
          />
          <p className="text-xs font-[300] text-[#01010199] mb-6">
            By clicking submit below, you agree to the processing of your
            personal information by Layer3 as described in the Privacy Policy.
          </p>
          <SubmitButton className="filled !bg-primary !border-primary !text-white hover:!text-white w-full rounded">
            Send Message
          </SubmitButton>
        </Form>
      </Formik>
    </div>
  );
}

export default SupportForm;
