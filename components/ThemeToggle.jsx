"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("aanya-theme");
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("aanya-theme", next);
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle light/dark theme">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
