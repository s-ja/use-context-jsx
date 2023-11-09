import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { observer } from "mobx-react";

const Page = observer(() => {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
});

export default Page;
