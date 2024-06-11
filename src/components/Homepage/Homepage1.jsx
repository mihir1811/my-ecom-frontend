import React from "react";
import Header2 from "../Header2";
import ProductCarousel from "../ProductCarousel";
import DiamondFilters from "../DiamondFilters";
import HomepageReviews from "../HomepageReviews/HomepageReviews";
import BannerImage from "../../assets/banner.png";
import Footer2 from "../footer2";

const Homepage1 = () => {
  return (
    <>
      <Header2 />
      {/* <section>
        <img src={BannerImage} className="w-full object-cover h-[90vh]" />
      </section> */}
      {/* <section className="bg-[#dddddd] pt-10">
        <ProductCarousel />
      </section> */}
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

export default Homepage1;
