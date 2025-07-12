import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_KEY = "mentormentee.theme";

export const useTheme = (): [Theme, () => void] => {
  const getInitial = (): Theme => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem(THEME_KEY) as Theme) ?? "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitial);

  /*  Apply `dark` class to <html>  */
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "light" ? "dark" : "light")),
    [],
  );

  return [theme, toggle];
};
    