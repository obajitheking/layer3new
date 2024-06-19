"use client";
import Yup from "@/common/utils/yup.utils";
import SubmitButton from "@/components/SubmitButton";
import Tiptap from "@/components/Tiptap/Tiptap";
import { ICreatePage } from "@/redux/services/pages.api";
import { Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { Field, FieldProps, Form, Formik } from "formik";
import dayjs from "dayjs";

const validationSchema = Yup.object().shape({
  key: Yup.string()
    .validRoute(
      'Path Key must not start or end with a "/" and must not contain consecutive "/"'
    )
    .required("Path Key is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  content: Yup.string().required("Content is required"),
});

const getHelp = (meta: FieldProps["meta"]) => {
  return meta?.error && meta?.touched ? meta?.error : "";
};

function PageForm({
  handleSubmit,
  intialValues = {
    key: "",
    title: "",
    description: "",
    content: "",
  },
  updatedAt,
  actionText = "Add Page",
}: {
  handleSubmit: (values: ICreatePage) => Promise<void>;
  intialValues?: ICreatePage;
  updatedAt?: string;
  actionText?: string;
}) {
  return (
    <Formik
      enableReinitialize
      onSubmit={handleSubmit}
      initialValues={intialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="flex justify-end">
          {updatedAt ? (
            <h2>last updated:{dayjs(updatedAt).format("DD-MM-YYYY")}</h2>
          ) : null}
        </div>
        <Field name="key">
          {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }: FieldProps) => (
            <FormItem
              hasFeedback
              validateStatus={getHelp(meta) ? "error" : ""}
              help={getHelp(meta)}
              labelCol={{ span: 24 }}
              label="Path Key"
            >
              <Input {...field} placeholder="legal/privacy-policy" />{" "}
            </FormItem>
          )}
        </Field>
        <Field name="title">
          {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }: FieldProps) => (
            <FormItem
              hasFeedback
              validateStatus={getHelp(meta) ? "error" : ""}
              help={getHelp(meta)}
              labelCol={{ span: 24 }}
              label="Title"
            >
              <Input {...field} placeholder="Title" />{" "}
            </FormItem>
          )}
        </Field>

        <Field name="description">
          {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }: FieldProps) => (
            <FormItem
              hasFeedback
              validateStatus={getHelp(meta) ? "error" : ""}
              help={getHelp(meta)}
              labelCol={{ span: 24 }}
              label="Short Description"
            >
              <TextArea {...field} placeholder="Description" />{" "}
            </FormItem>
          )}
        </Field>

        <Field name="content">
          {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }: FieldProps) => (
            <FormItem
              hasFeedback
              validateStatus={getHelp(meta) ? "error" : ""}
              help={getHelp(meta)}
              labelCol={{ span: 24 }}
              label="Content"
            >
              <Tiptap name="content" />
            </FormItem>
          )}
        </Field>
        <div className="flex justify-end">
          <SubmitButton>{actionText}</SubmitButton>
        </div>
      </Form>
    </Formik>
  );
}

export default PageForm;
