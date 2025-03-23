import React, { useState } from "react";
import { TextInput } from "./Form/FormElements/TextInput";
import Button from "@mui/material/Button";
import { applyJsonConfig } from "../hooks/applyJsonConfig";

interface Props {
  config: string;
  setConfig: (config: string) => void;
}

export const ConfigEditor: React.FC<Props> = ({ config, setConfig }) => {
  const [tempConfig, setTempConfig] = useState(config);
  const [message, setMessage] = useState<string>("");
  const [messageClass, setMessageClass] = useState<string>("");

  const handleApply = () => {
    applyJsonConfig(tempConfig, setConfig, setMessage, setMessageClass);
  };

  return (
    <>
      <TextInput
        value={tempConfig}
        onChange={(e) => setTempConfig(e.target.value)}
        type="multi-line"
        label="JSON Configuration"
        placeholder='{
"items": [{ "label": "Count", "type": "number" }]
}'
      />
      {message && <div className={`message ${messageClass}`}>{message}</div>}
      <div className="buttons-container">
        <Button onClick={handleApply} variant="contained">
          Apply
        </Button>
      </div>
    </>
  );
};
