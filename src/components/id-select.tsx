import React from "react";
import { Select } from "antd";
import { Raw } from "types";

type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<SelectProps, "value" | "onChange" | "options"> {
  value: Raw | null | undefined;
  onChange: (value: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

export default function IdSelect(props: IdSelectProps) {
  const { value, onChange, defaultOptionName, options, ...resetProps } = props;
  return (
    <Select
      value={options?.length ? toNumber(value) : 0}
      onChange={(value) => onChange(toNumber(value))}
      {...resetProps}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option value={option.id} key={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
}

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));
