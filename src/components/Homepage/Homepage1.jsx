import React from "react";
import Header2 from "../Header2";
import ProductCarousel from "../ProductCarousel";
import DiamondFilters from "../DiamondFilters";
import HomepageReviews from "../HomepageReviews/HomepageReviews";
import BannerImage from "../../assets/banner.png";
import Footer2 from "../footer2";
import ExploreNow from "../../pages/userPages/ExploreNow";
import Header from "../Header";

const Homepage1 = () => {
  return (
    <>
      {/* <Header2 /> */}
      <Header />
      {/* <section>
        <img src={BannerImage} className="w-full object-cover h-[90vh]" />
      </section> */}
      <section className="bg-[#f5f5f5] pt-10">
        <ProductCarousel />
      </section>
      <section className="bg-[#f5f5f5] pt-10 px-[20px]">
        <DiamondFilters />
      </section>
      <section className="bg-[#f5f5f5] pt-10 px-[20px]">
        <HomepageReviews />
      </section>
      <section className="bg-neutral-100 mt-5">
        <ExploreNow />
      </section>

      <Footer2 />
    </>
  );
};

export default Homepage1;
