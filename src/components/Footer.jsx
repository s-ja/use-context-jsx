import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../store"; // 파일 경로에 맞게 조정

export default function Footer() {
  const snap = useSnapshot(state);
  const toggleTheme = () => {
    state.isDark = !state.isDark;
  };

  return (
    <footer className={`footer ${snap.isDark ? "dark" : "white"}`}>
      <button onClick={toggleTheme}>테마 변경</button>
    </footer>
  );
}
