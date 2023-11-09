import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../themeAtom"; // 파일 경로에 맞게 조정

export default function Footer() {
  const [isDark, setIsDark] = useAtom(themeAtom);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={toggleTheme}>테마 변경</button>
    </footer>
  );
}
