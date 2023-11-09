import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../themeAtom"; // 파일 경로에 맞게 조정

export default function Content() {
  const [isDark] = useAtom(themeAtom);

  return (
    <div className={`content ${isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
