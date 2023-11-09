import React from "react";
import { observer } from "mobx-react";
import { themeStore } from "../store"; // 파일 경로에 맞게 조정

const Footer = observer(() => {
  return (
    <footer className={`footer ${themeStore.isDark ? "dark" : "white"}`}>
      <button onClick={themeStore.toggleTheme}>테마 변경</button>
    </footer>
  );
});

export default Footer;
