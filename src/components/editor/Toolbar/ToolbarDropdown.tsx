import React from "react";

export const ToolbarDropdown = ({
  title,
  value,
  onChange = () => {},
  children,
  ...rest
}: React.PropsWithChildren<{
  title?: string;
  value?: string;
  onChange?: (value: string) => void;
}>) => {
  return (
    <div>
      <label>{title}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};
