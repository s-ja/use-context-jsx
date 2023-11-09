import React from "react";
import useStore from "../store.js"; // 파일 구조에 따라 경로를 조정

export default function Content() {
  const isDark = useStore((state) => state.isDark); // isDark 상태 가져오기

  return (
    <div className={`content ${isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
