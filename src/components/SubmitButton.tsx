import { Button } from "antd";
import { ButtonProps } from "antd/es/button";
import { Field, FieldProps } from "formik";

export const SubmitButton = ({ children, ...restProps }: ButtonProps) => (
  <Field>
    {({ form: { isSubmitting, isValid, dirty, submitCount } }: FieldProps) => (
      <Button
        loading={isSubmitting}
        disabled={!isValid && (dirty || submitCount > 0)}
        {...restProps}
        htmlType="submit"
      >
        {children}
      </Button>
    )}
  </Field>
);

export default SubmitButton;
