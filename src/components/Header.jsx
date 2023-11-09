import React from "react";
import { observer } from "mobx-react";
import { themeStore } from "../store"; // 파일 경로에 맞게 조정

const Header = observer(() => {
  return (
    <header className={`header ${themeStore.isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
});

export default Header;
