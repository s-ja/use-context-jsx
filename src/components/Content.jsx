import React from "react";
import { observer } from "mobx-react";
import { themeStore } from "../store"; // 파일 경로에 맞게 조정

const Content = observer(() => {
  return (
    <div className={`content ${themeStore.isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
});

export default Content;
