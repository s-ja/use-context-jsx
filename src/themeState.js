import { atom } from "recoil";

export const themeState = atom({
  key: "themeState", // 고유한 키
  default: false, // 기본값 (false는 라이트 모드)
});
