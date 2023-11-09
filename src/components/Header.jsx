import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../themeAtom"; // 파일 경로에 맞게 조정

export default function Header() {
  const [isDark] = useAtom(themeAtom);

  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
