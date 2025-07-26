import { useState } from "react";

export const useDashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };


  return {
    collapsed,
    toggleSidebar
  };
}