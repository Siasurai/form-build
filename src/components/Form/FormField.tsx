import React from "react";
import { TextInput } from "./FormElements/TextInput";
import { CheckboxField } from "./FormElements/CheckboxField";
import { RadioButtonsField } from "./FormElements/RadioButtonsField";

interface Item {
  label: string;
  type: string;
  options?: string[];
}

interface Props {
  item: Item;
  value: any;
  onChange: (value: any) => void;
}

export const FormField: React.FC<Props> = ({ item, value, onChange }) => {
  if (item.type === "enum") {
    return (
      <RadioButtonsField
        options={item.options || []}
        value={value}
        onChange={onChange}
        label={item.label}
      />
    );
  }

  if (item.type === "boolean") {
    return (
      <CheckboxField
        checked={value || false}
        onChange={(e) => onChange(e.target.checked)}
        label={item.label}
      />
    );
  }

  return (
    <TextInput
      label={item.label}
      type={item.type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
