import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface NavigationTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  value,
  onChange,
}) => {
  return (
    <Tabs value={value} onChange={onChange} aria-label="Config and Result Tabs">
      <Tab label="Config" id="tab-0" aria-controls="tab-content-0" />
      <Tab label="Result" id="tab-1" aria-controls="tab-content-1" />
    </Tabs>
  );
};
