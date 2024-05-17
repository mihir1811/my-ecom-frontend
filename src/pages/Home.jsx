import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer2 from "../components/footer2";

const Home = () => {
  return (
    <>
      <Header />
      <div className="py-5">Home carousel section</div>
      <div className="py-5">featured products</div>
      <div className="py-5">new Collection</div>
      <Footer2 />
    </>
  );
};

export default Home;
