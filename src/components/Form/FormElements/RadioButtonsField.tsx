import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

interface RadioButtonsFieldProps {
  label: string;
  options: string[];
  value: any;
  onChange: (value: any) => void;
}

export const RadioButtonsField: React.FC<RadioButtonsFieldProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const controlledValue = value === undefined ? options[0] : value;

  return (
    <div>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        value={controlledValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt, idx) => (
          <FormControlLabel
            key={idx}
            value={opt}
            control={<Radio />}
            label={opt}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
