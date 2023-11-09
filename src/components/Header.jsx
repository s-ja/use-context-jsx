import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../store"; // 파일 경로에 맞게 조정

export default function Header() {
  const snap = useSnapshot(state);

  return (
    <header className={`header ${snap.isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
