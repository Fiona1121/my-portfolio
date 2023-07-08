import React from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleMediaQueryChange = () => {
      if (userPref === "dark" || (!userPref && mediaQuery.matches)) {
        setMode("dark");
        document.documentElement.classList.add("dark");
      } else {
        setMode("light");
        document.documentElement.classList.remove("dark");
      }
    };

    handleMediaQueryChange();
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  React.useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode] as const;
};

export default useThemeSwitcher;
