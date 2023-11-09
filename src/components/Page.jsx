import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
export default function Page({ isDark, toggleThema }) {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
