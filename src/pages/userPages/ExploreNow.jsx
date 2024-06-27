import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ExploreNow = () => {
  const screenWidth = useSelector((data) => data?.ui?.screenSize?.width);

  return (
    <>
      {screenWidth > 760 ? (
        <div className="flex  justify-center items-center px-16 py-20 text-6xl font-medium bg-white rounded-[1000px_1000px_0px_0px] text-black max-md:px-5 max-md:text-4xl">
          <div className="flex flex-col mt-20 ml-16 max-w-full w-[766px] max-md:mt-10 max-md:text-4xl">
            <div className="flex gap-0 max-md:flex-wrap max-md:text-4xl">
              <div className="flex-auto my-auto max-md:max-w-full ">
                Unleash Your Diamond
              </div>
              <img
                loading="lazy"
                src="https://cdn.shoplightspeed.com/shops/644087/files/51048222/sickgentlefluke-max-1mb.gif"
                className="shrink-0 max-w-full aspect-[1.33] w-[125px]"
              />
            </div>
            <div className="mt-3.5 max-md:max-w-full max-md:text-4xl">
              Dreams - Seize The Sparkle!{" "}
            </div>
            <div className="self-center mt-8 max-md:max-w-full max-md:text-4xl">
              <p>Join Now &amp; Discover Your Perfect Gem!</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="justify-center items-center self-center px-9 py-2.5 mt-32 max-w-full text-3xl text-center font-rossa text-[#5877C7] bg-neutral-100 shadow-sm rounded-[52.913px] w-[352px] max-md:px-5 max-md:mt-10"
            >
              Explore Now
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center px-16 font-medium bg-white rounded-[1000px_1000px_0px_0px] text-black ">
          <div className="py-20 text-center">
            <div className="flex items-center ">
              <h3 className="text-[25px]">Unleash Your Diamond</h3>
              <img
                loading="lazy"
                src="https://cdn.shoplightspeed.com/shops/644087/files/51048222/sickgentlefluke-max-1mb.gif"
                className="shrink-0 max-w-full aspect-[1.33] w-[80px]"
              />
            </div>
            <div className="mt-2 max-md:max-w-full text-[25px]">
              Dreams - Seize The Sparkle!{" "}
            </div>
            <div className="self-center mt-2 max-md:max-w-full text-[25px] text-center">
              <p>Join Now &amp; Discover Your Perfect Gem!</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="justify-center items-center self-center px-9 py-2.5 mt-32 max-w-full text-3xl text-center font-rossa text-[#5877C7] bg-neutral-100 shadow-sm rounded-[52.913px] w-[352px] max-md:px-5 max-md:mt-10"
            >
              Explore Now
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreNow;
