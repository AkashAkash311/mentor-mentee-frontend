import { useEffect, useState } from "react";
import { nav } from "./constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useDashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [navItems, setNavItems] = useState(nav);

  const Navigate = useNavigate();

  useEffect(() => {
    setNavItems(nav);
  }, [nav]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavClick = (id: number, url: string): void => {
    Navigate(url);
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
