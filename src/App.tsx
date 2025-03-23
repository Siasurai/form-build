import React, { useState } from "react";
import { ConfigEditor } from "./components/ConfigEditor";
import FormGenerator from "./components/FormGenerator";
import { NavigationTabs } from "./components/Tabs/NavigationTabs";
import { TabContent } from "./components/Tabs/TabContent";

export const App: React.FC = () => {
  const [config, setConfig] = useState("");
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <NavigationTabs value={value} onChange={handleChange} />
      <TabContent value={value} index={0}>
        <ConfigEditor config={config} setConfig={setConfig} />
      </TabContent>
      <TabContent value={value} index={1}>
        <FormGenerator config={config} />
      </TabContent>
    </div>
  );
};
