import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import useStore from "../store.js";

export default function Page() {
  const isDark = useStore((state) => state.isDark);
  const toggleTheme = useStore((state) => state.toggleTheme);
  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} toggleThema={toggleTheme}></Footer>
    </div>
  );
}
