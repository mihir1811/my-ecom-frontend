import React from "react";
import cartIcon from "../assets/cart.svg";
import LOGO from "../assets/logo.png"

const Header2 = () => {
  return (
    <header className="bg-[#dddddd]">
      <div className="mx-auto py-5 px-[20px] max-w-[1340px] flex justify-between items-center">
        {/* <div className='w-[300px]'>
                <ul className='flex items-center'>
                    <li><a href='Facebook'>Facebook</a></li>
                    <li><a href='Twitter'>Twitter</a></li>
                </ul>
            </div> */}
        {/* <h1 className="font-bold text-3xl">LOGO</h1> */}
        <img className="w-[80px] h-[80px] rounded-sm" src={LOGO}  />
        <div className="flex items-center">
          <a className="cursor-pointer" href="/login">
            login
          </a>
          <button className="bg-[#5877C7] rounded-[33px] font-semibold px-5 py-2 text-white mx-5 text-nowrap">
            Become a seller
          </button>
          <div>
            <img src={cartIcon} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
