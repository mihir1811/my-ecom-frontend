import React from "react";
import { motion } from "framer-motion";

const Footer2 = () => {
  return (
    <footer className="bg-[#f5f5f5] bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5] to-[#f5f5f5] py-12 px-10 font-sans tracking-wide">
      <div className="max-w-[1300px] mx-auto">
        <div className="lg:max-w-[50%] mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Newsletter</h3>
          <p className="text-sm mt-6 text-gray-500">
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </p>
          <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#fff] flex px-2 py-1.5 rounded-full text-left mt-10"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm pl-4"
              name="email"
              autoComplete="off"
            />
            <button
              type="button"
              className="bg-black text-white text-sm rounded-full px-5 py-2.5 ml-4 transition-all font-semibold"
            >
              Subscribe
            </button>
          </motion.div>
        </div>

        <hr className="border-gray-300 my-12" />

        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">About Us</h4>
            <p className="text-gray-500 mb-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              gravida, mi eu pulvinar cursus, sem elit interdum mauris.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="/shop"
                  className="text-gray-500 hover: hover:text-gray-800 text-[15px]"
                >
                  Shop
                </motion.a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">About</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Diamonds
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  About us
                </a>
              </li>
              {/* <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Tutorials
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">We are on</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Instagram Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  facebook link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  other platform
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  other platform
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
