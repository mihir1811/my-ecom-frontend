import React, { useState } from "react";
import Footer2 from "../../components/footer2";
import { MdRemoveRedEye } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import Header2 from "../../components/Header2";
import Header from "../../components/Header";

const CartPage = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1320px] px-[20px]">
          <h1 className="text-[22px] font-bold">Shopping Bag</h1>
          <p>
            <b>2 items</b> in your bag
          </p>

          <div className="flex mt-4 flex-wrap">
            <div className="md:w-[69%] me-[1%] rounded-xl p-3 bg-white">
              <div className="flex justify-between w-full items-center">
                <div className="flex">
                  <div>
                    {/* <img /> */}
                    <div className="bg-[#f5f5f5] rounded-md h-[120px] w-[120px] max-h-[150px] max-w-[150px]"></div>
                  </div>
                  <div className="ms-3">
                    <h3 className="font-semibold text-[20px]">product name</h3>
                    <p className="text-gray-500">product description</p>
                  </div>
                </div>
                <div className="border border-[#ddd] flex items-center rounded-full w-[100px]">
                  <div
                    className="w-full text-center bg-[#f5f5f5] leading-[30px] rounded-s-full h-[30px]"
                    onClick={(e) => setValue(value + 1)}
                  >
                    +
                  </div>
                  <div className="w-full text-center bg-white">{value}</div>
                  <div
                    className="w-full text-center bg-[#f5f5f5] leading-[30px] rounded-e-full h-[30px]"
                    onClick={(e) => setValue(value - 1)}
                  >
                    -
                  </div>
                </div>
                <div>
                  <p>900</p>
                </div>
                <div className="flex items-center">
                  <button>
                    <MdRemoveRedEye size={25} className="text-gray-400" />
                  </button>
                  <span className="mx-2"></span>
                  <button>
                    <FaTrashCan size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] rounded-xl p-3 bg-white">
              <button onClick={() => navigate("/checkout")}>
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default CartPage;
