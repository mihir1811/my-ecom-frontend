import React from "react";
import { motion } from "framer-motion";

const ExploreNow = () => {
  return (
    <div className="flex  justify-center items-center px-16 py-20 text-6xl font-medium bg-white rounded-[1000px_1000px_0px_0px] text-black max-md:px-5 max-md:text-4xl">
      <div className="flex flex-col mt-20 ml-16 max-w-full w-[766px] max-md:mt-10 max-md:text-4xl">
        <div className="flex gap-0 max-md:flex-wrap max-md:text-4xl">
          <div className="flex-auto my-auto max-md:max-w-full ">
            Unleash Your Diamond
          </div>
          {/* <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3dbcb7dc76859537d991193e9cac4efef45bab9ca588406ac2d4655c286dad81?apiKey=882b46752b97497eacdab9033a01af91&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dbcb7dc76859537d991193e9cac4efef45bab9ca588406ac2d4655c286dad81?apiKey=882b46752b97497eacdab9033a01af91&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dbcb7dc76859537d991193e9cac4efef45bab9ca588406ac2d4655c286dad81?apiKey=882b46752b97497eacdab9033a01af91&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dbcb7dc76859537d991193e9cac4efef45bab9ca588406ac2d4655c286dad81?apiKey=882b46752b97497eacdab9033a01af91&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dbcb7dc76859537d991193e9cac4efef45bab9ca588406ac2d4655c286dad81?apiKey=882b46752b97497eacdab9033a01af91&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dbcb7dc76859537d991193e9cac4efef45bab9ca588406ac2d4655c286dad81?apiKey=882b46752b97497eacdab9033a01af91&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dbcb7dc76859537d991193e9cac4efef45bab9ca588406ac2d4655c286dad81?apiKey=882b46752b97497eacdab9033a01af91&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dbcb7dc76859537d991193e9cac4efef45bab9ca588406ac2d4655c286dad81?apiKey=882b46752b97497eacdab9033a01af91&"
            className="shrink-0 max-w-full aspect-[1.33] w-[125px]"
          /> */}
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
  );
};

export default ExploreNow;
