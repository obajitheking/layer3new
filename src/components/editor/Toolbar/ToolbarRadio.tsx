import { Radio } from "antd";
import FormItem from "antd/es/form/FormItem";

export const ToolbarRadio = ({ value, label }: any) => {
  return (
    <FormItem label={label}>
      <Radio value={value} />
    </FormItem>
  );
};
