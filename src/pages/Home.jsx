import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer2 from "../components/footer2";
import Header2 from "../components/Header2";
import ProductCarousel from "../components/ProductCarousel";
import DiamondFilters from "../components/DiamondFilters";
import HomepageReviews from "../components/HomepageReviews/HomepageReviews";

const Home = () => {
  return (
    <>
      <Header2 />
      <section className="bg-[#dddddd]">
        <ProductCarousel />
      </section>

      <section className="bg-[#dddddd] pt-10 px-[20px]">
       <DiamondFilters />
      </section>
      <section className="bg-[#dddddd] pt-10 px-[20px]">
        <HomepageReviews />
      </section>

      <Footer2 />
    </>
  );
};

export default Home;
