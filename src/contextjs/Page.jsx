import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
