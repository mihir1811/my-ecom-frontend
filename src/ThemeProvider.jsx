// ThemeProvider.jsx
import React, { useEffect } from "react";

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle("dark-theme");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark-theme") ? "dark" : "light",
    );
  };

  return <div>{children}</div>;
};

export default ThemeProvider;
