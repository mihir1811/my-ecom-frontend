import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "./Drawer/Drawer";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { data } from "../../data";
import UserAccountDropdown from "./UserAccountDropdown";
import { GoHeart } from "react-icons/go";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((data) => data.userData);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const cartData = data.cart;
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent document click from closing dropdown
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add click listener to close dropdown on document click (outside component)
    document.addEventListener("click", closeDropdown);

    return () => {
      // Remove listener on component unmount
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="bg-[#222]">
          <div className="max-w-[1300px] mx-auto text-white py-1">
            <marquee scrollamount="10" scrolldelay="200">
              GET FLAT 5% DISCOUNT ON YOUR FIRST ORDER
            </marquee>
          </div>
        </div>
        <div className="mx-auto max-w-[1350px] px-[20px] py-4 flex items-center justify-between">
          <a href="/">
            <img
              className="w-[80px] bg-transparent h-[80px] rounded-sm"
              src={LOGO}
            />
          </a>
          <div>
            <ul className="flex items-center">
              <li className="mx-[10px] hover:text-black">
                <a href="/">Home</a>
              </li>
              <li className="mx-[10px]">
                <a href="/shop">Shop</a>
              </li>

              <li className="mx-[10px]">
                <a href="/about">About Us</a>
              </li>
              <li className="mx-[10px]">
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* <UserAccountDropdown /> */}

          <div className="flex items-center">
            <motion.div
              onClick={()=> navigate("/favourites")}
              className="relative cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <GoHeart size={30} />
            </motion.div>

            {userData.profilePic ? (
              <div ref={dropdownRef} className="relative mx-3">
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-[30px] h-[30px] rounded-full cursor-pointer"
                  src={userData?.profilePic}
                  onClick={toggleDropdown}
                />
                <AnimatePresence>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute z-10 origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
                    >
                      <li className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md">
                        Profile
                      </li>
                      <li className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md">
                        Setting
                      </li>
                      <li className="block cursor-pointer px-4 py-2 text-sm text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md">
                        Logout
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // <motion.div className="relative cursor-pointer"  initial={{ opacity: 0, scale: 0 }}
              // animate={{ opacity: 1, scale: 1 }}>

              //   <PiUserCircle size={30} />
              // </motion.div>
              <motion.div
                className="relative cursor-pointer mx-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <PiUserCircle size={30} />
              </motion.div>
            )}
            <motion.div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <IoCartOutline size={30} />
              <span className="flex justify-center items-center h-[20px] w-[20px] absolute top-[-7px] right-[-7px] bg-blue-400 rounded-full">
                1
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* {isCartOpen && ( */}
      <Drawer open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        {/* hello add cart data */}

        {cartData?.products?.map((data, index) => {
          return (
            <div key={index} className="flex p-2">
              <div>
                <img
                  src="https://cdn.trulyfreehome.com/ScentedLaundryWashJugRefill.jpg"
                  alt=""
                  className="w-[120px] rounded-md"
                />
              </div>
              <div className="ms-3">
                <p className="text-[15px]">
                  Laundry Wash - Signature Scent (50 loads)
                </p>
                <div>
                  <p className="mt-3">
                    <span>$1000</span> <del className="opacity-50">$1200</del>
                  </p>
                  <div className="border border-[#ddd] flex items-center rounded-full w-[100px]">
                    <div className="w-full text-center bg-[#f5f5f5] leading-[30px] rounded-s-full h-[30px]">
                      +
                    </div>
                    <div className="w-full text-center bg-white">1</div>
                    <div className="w-full text-center bg-[#f5f5f5] leading-[30px] rounded-e-full h-[30px]">
                      -
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="text-center">
          <button
            className="bg-[#f5f5f5] px-4 py-2 rounded-full"
            onClick={() => navigate("/cart")}
          >
            View Cart
          </button>
        </div>
      </Drawer>
      {/* )} */}
    </>
  );
};

export default Header;
