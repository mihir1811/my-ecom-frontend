import React, { useState } from "react";

const DiamondFilters = () => {
  const [priceValue, setPriceValue] = useState(0);
  const [weightValue, setWeightValue] = useState(0);
  const [colorValue, setColourValue] = useState(0);
  return (
    <div className="mx-auto max-w-[1320px] bg-white rounded-[30px] p-10">
      <div className="grid grid-cols-3 gap-10">
        <div className="relative mb-6">
          <div>
            <h3 className="font-rossa text-[24px]">Price</h3>
          </div>

          <div className="relative mb-6">
            <label htmlFor="price-range-input" className="sr-only">
              Labels range
            </label>
            <input
              id="price-range-input"
              onChange={(e) => setPriceValue(e.target.value)}
              type="range"
              value={priceValue}
              min="100"
              max="1500"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
              Min ($100)
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              $500
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              $1000
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
              Max ($1500)
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-5">
            <div className="flex flex-col">
              <label>From</label>
              <input
                className="py-2 px-3 rounded-md border-2 outline-blue-300 w-full"
                type="number"
                placeholder="0"
              />
            </div>
            <div>
              <label>To</label>
              <input
                className="py-2 px-3 rounded-md border-2 outline-blue-300 w-full"
                type="number"
                placeholder="0"
              />
            </div>
          </div>
        </div>
        <div className="relative mb-6">
          <div>
            <h3 className="font-rossa text-[24px]">Caret</h3>
          </div>

          <div className="relative mb-6">
            <label htmlFor="price-range-input" className="sr-only">
              Labels range
            </label>
            <input
              id="price-range-input"
              onChange={(e) => setWeightValue(e.target.value)}
              type="range"
              value={weightValue}
              min="100"
              max="1500"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
              0.0ct
            </span>

            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
              1ct
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-5">
            <div className="flex flex-col">
              <label>From</label>
              <input
                className="py-2 px-3 rounded-md border-2 outline-blue-300 w-full"
                type="number"
                placeholder="0"
              />
            </div>
            <div>
              <label>To</label>
              <input
                className="py-2 px-3 rounded-md border-2 outline-blue-300 w-full"
                type="number"
                placeholder="0"
              />
            </div>
          </div>
        </div>
        <div className="relative mb-6">
          <div>
            <h3 className="font-rossa text-[24px]">Colour</h3>
          </div>

          <div className="relative mb-6">
            <label htmlFor="price-range-input" className="sr-only">
              Labels range
            </label>
            <input
              id="price-range-input"
              onChange={(e) => setColourValue(e.target.value)}
              type="range"
              value={colorValue}
              min="100"
              max="1500"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
              D
            </span>

            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
              M
            </span>
          </div>
        </div>
      </div>

      <div className="py-3">
        <h4 className="font-rossa text-[24px]">Stone Shape</h4>
        <div className="grid grid-cols-5 gap-5 mt-3">
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            All
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Round{" "}
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Pear
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Emerald
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Oval
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Heart
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Marquise
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Asscher
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Cushion
          </div>
        </div>
      </div>
      <div className="py-3">
        <h4 className="font-rossa text-[24px]">Stone Type</h4>
        <div className="grid grid-cols-5 gap-5 mt-3">
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            All
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Natural{" "}
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Lab made
          </div>
        </div>
      </div>
      <div className="py-3">
        <h4 className="font-rossa text-[24px]">Cut Grade</h4>
        <div className="grid grid-cols-5 gap-5 mt-3">
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            All
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Good{" "}
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Very Good
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Ideal
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            True Hearts
          </div>
        </div>
      </div>
      <div className="py-3">
        <h4 className="font-rossa text-[24px]">Clarity</h4>
        <div className="grid grid-cols-5 gap-5 mt-3">
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            1F
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            WS1{" "}
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            vs1
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            vs2
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            S11
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            S12
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            S13
          </div>
        </div>
      </div>
      <div className="py-3">
        <h4 className="font-rossa text-[24px]">Flouresense</h4>
        <div className="grid grid-cols-5 gap-5 mt-3">
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            None
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Faint{" "}
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Medium
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Strong
          </div>
          <div className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Very Strong
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondFilters;
