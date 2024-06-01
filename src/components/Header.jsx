import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "./Drawer/Drawer";
import { motion } from "framer-motion";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((data) => data.userData);
  const [isCartOpen, setIsCartOpen] = useState(false);
  console.log(userData, "AErhhjstjty");

  return (
    <>
      <div className="bg-[#dddddd]">
        {/* <div className="bg-[#222]">
          <div className="max-w-[1300px] mx-auto text-white py-1">
            <marquee scrollamount="10" scrolldelay="200">
              Fast scrolling text!
            </marquee>
          </div>
        </div> */}
        <div className="mx-auto max-w-[1350px] px-[20px] h-[60px] flex items-center justify-between">
          <div>logo</div>
          <div>
            <ul className="flex items-center">
              <li className="mx-[10px] hover:text-black">
                <a href="">Home</a>
              </li>
              <li className="mx-[10px]">
                <a href="/products">Products</a>
              </li>

              <li className="mx-[10px]">
                <a href="">About Us</a>
              </li>
              <li className="mx-[10px]">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            {userData.profilePic ? (
              <img
                className="w-[30px] h-[30px] rounded-full cursor-pointer mr-3"
                src={userData?.profilePic}
              />
            ) : (
              <PiUserCircle  className="mr-3 cursor-pointer" size={30} />
            )}
            <motion.div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
              whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
            >
              <IoCartOutline size={30} />
              <span className="flex justify-center items-center h-[20px] w-[20px] absolute top-[-7px] right-[-7px] bg-blue-400 rounded-full">
                1
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* {isCartOpen ? ( */}
      <Drawer open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        {/* hello add cart data */}
        <div className="flex p-2">
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
              <p className="mt-3"><span>$1000</span>  <del className="opacity-50">$1200</del></p>
              <div className="border border-[#ddd] flex items-center rounded-full h-[30px] w-[100px]">
                <div className="w-full text-center bg-[#ddd] leading-[30px] rounded-s-full h-[30px]">+</div>
                <div className="w-full text-center bg-white">1</div>
                <div className="w-full text-center bg-[#ddd] leading-[30px] rounded-e-full h-[30px]">-</div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      {/* ) : (
        ""
      )} */}
    </>
  );
};

export default Header;
