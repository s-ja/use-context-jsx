import React from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "../themeState"; // 파일 경로에 맞게 조정

export default function Header() {
  const isDark = useRecoilValue(themeState);

  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
