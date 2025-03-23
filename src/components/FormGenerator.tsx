import React, { useState } from "react";
import { FormField } from "./Form/FormField";
import Button from "@mui/material/Button";
import { useFormActions } from "../hooks/useFormActions";

interface FormItem {
  label: string;
  type: "number" | "string" | "multi-line" | "boolean" | "date" | "enum";
  options?: string[];
}

interface FormConfig {
  title: string;
  items: FormItem[];
  buttons: { text: string; action: string }[];
}

const FormGenerator: React.FC<{ config: string }> = ({ config }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [message, setMessage] = useState<string>("");

  const { handleButtonClick } = useFormActions(setMessage);

  let parsedConfig: FormConfig;
  try {
    parsedConfig = JSON.parse(config);
  } catch (error) {
    console.error("JSON parsing error:", error);
    return <div className="message-error">Invalid JSON</div>;
  }

  return (
    <div className="form-container">
      <h2>{parsedConfig.title}</h2>
      {parsedConfig.items?.map((item, idx) => (
        <FormField
          key={idx}
          item={item}
          value={formData[item.label]}
          onChange={(value) =>
            setFormData({ ...formData, [item.label]: value })
          }
        />
      ))}
      {message && <div className="message">{message}</div>}
      <div className="buttons-container">
        {parsedConfig.buttons.map((button, idx) => (
          <Button
            key={idx}
            onClick={() => handleButtonClick(button.action)}
            variant={
              idx === parsedConfig.buttons.length - 1 ? "contained" : "outlined"
            }
          >
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FormGenerator;
