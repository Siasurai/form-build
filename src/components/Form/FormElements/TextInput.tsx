import React from "react";
import TextField from "@mui/material/TextField";

interface TextFieldProps {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label?: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextFieldProps> = ({
  value,
  onChange,
  type,
  label,
  placeholder,
}) => {
  return (
    <TextField
      label={label}
      defaultValue={value || ""}
      type={type}
      onChange={onChange}
      multiline={type === "multi-line" && true}
      placeholder={placeholder}
      fullWidth
      slotProps={
        type === "date"
          ? {
              inputLabel: {
                shrink: true,
              },
            }
          : {}
      }
    />
  );
};
