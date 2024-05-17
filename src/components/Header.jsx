import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((data) => data.userData);

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
        <div className="mx-auto max-w-[1350px] px-[20px] h-[50px] flex items-center justify-between">
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
              <PiUserCircle className="mr-3 cursor-pointer" size={30} />
            )}
            <div className="relative cursor-pointer">
              <IoCartOutline size={30} />
              <span className="flex justify-center items-center h-[20px] w-[20px] absolute top-[-7px] right-[-7px] bg-blue-400 rounded-full">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
