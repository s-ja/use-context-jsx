import React from "react";
import useStore from "../store.js";

export default function Footer() {
  const isDark = useStore((state) => state.isDark);
  const toggleTheme = useStore((state) => state.toggleTheme);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={toggleTheme}>테마 변경</button>
    </footer>
  );
}
