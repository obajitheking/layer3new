import { Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEffect } from "react";
import { useState } from "react";
import { ChromePicker } from "react-color";

export type ToolbarTextInputProps = {
  prefix?: string;
  label?: string;
  type: string;
  onChange?: (value: any) => void;
  value?: any;
};
export const ToolbarTextInput = ({
  onChange = () => {},
  value,
  label,
  type,
  ...props
}: ToolbarTextInputProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let val = value;
    if (type === "color" || type === "bg")
      val = `rgba(${Object.values(value)})`;
    setInternalValue(val);
  }, [value, type]);

  return (
    <div
      style={{ width: "100%", position: "relative" }}
      onClick={() => {
        setActive(true);
      }}
    >
      {(type === "color" || type === "bg") && active ? (
        <div
          className="absolute"
          style={{
            zIndex: 99999,
            top: "calc(100% + 10px)",
            left: "-5%",
          }}
        >
          <div
            className="fixed top-0 left-0 w-full h-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(false);
            }}
          ></div>
          <ChromePicker
            color={value}
            onChange={(color: any) => {
              onChange(color.rgb);
            }}
          />
        </div>
      ) : null}
      <FormItem label={label}>
        <Input
          style={{ margin: 0, width: "100%" }}
          value={internalValue || ""}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChange((e.target as any).value);
            }
          }}
          onChange={(e) => {
            setInternalValue(e.target.value);
          }}
          prefix={
            ["color", "bg"].includes(type) ? (
              <div
                className="w-2 h-2 inline-block rounded-full relative"
                style={{
                  background: internalValue,
                }}
              />
            ) : null
          }
          variant="filled"
          {...props}
        />
      </FormItem>
    </div>
  );
};
