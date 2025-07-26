import { useEffect, useState } from "react";
import { nav } from "./constants";

export const useDashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [navItems, setNavItems] = useState(nav);

  useEffect(() => {
    setNavItems(nav);
  }, [nav]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavClick = (id: number) => {
    setNavItems((prevNavItems) =>
      prevNavItems.map((item) =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  };

  return {
    collapsed,
    toggleSidebar,
    handleNavClick,
    navItems,
  };
};
