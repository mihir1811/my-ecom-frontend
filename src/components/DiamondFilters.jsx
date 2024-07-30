import React, { useEffect, useState } from "react";
import PriceRangeComp from "./RangeComponents/PriceRangeComp";
import FilterSelection from "./filters/FilterSelection";
import { filterOptions } from "../../filtersData";

const DiamondFilters = () => {
  const [priceValue, setPriceValue] = useState(0);
  const [weightValue, setWeightValue] = useState(0);
  const [colorValue, setColourValue] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  // const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedStoneTypes, setSelectedStoneTypes] = useState([]);
  const [selectedCutGrades, setSelectedCutGrades] = useState([]);
  const [selectedClarities, setSelectedClarities] = useState([]);
  const [selectedFlouresense, setSelectedFlouresense] = useState([]);

  return (
    <div className="mx-auto max-w-[1320px] bg-white rounded-[30px] sm:p-10 p-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-10 gap-2">
        <div className="relative sm:mb-6 mb-2">
          <PriceRangeComp title="Price" minValue={0} maxValue={100} />
          {/* <div>
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
          </div> */}
        </div>
        <div className="relative sm:mb-6 mb-2">
          <PriceRangeComp
            title="Carat"
            minValue={0}
            maxValue={12}
            isWeightSelect={true}
          />
        </div>
        <div className="relative sm:mb-6 mb-2">
          {/* <PriceRangeComp title="Color" /> */}

          <div className="price-range-slider">
            <h3 className="font-rossa text-[24px] mb-3">Color</h3>

            <FilterSelection
              shapes={filterOptions.colors}
              isColorSelection={true}
              selectedShapes={selectedColors}
              setSelectedShapes={setSelectedColors}
            />
          </div>
        </div>
      </div>

      {/* 
      <div className="py-3">
        <h4 className="font-rossa text-[24px]">Stone Shape</h4>
        <div className="grid grid-cols-5 gap-5 mt-3">
          <button className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            All
          </button>
          <button className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Round{" "}
          </button>
          <button className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Oval
          </button>
          <button className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Heart
          </button>
          <button className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Marquise
          </button>
          <button className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Asscher
          </button>
          <button className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Cushion
          </button>
        </div>
      </div> */}

      {/* <FilterSelection
        title="Stone Shape"
        shapes={["All", ...filterOptions.shapes]}
        selectedShapes={selectedShapes}
        setSelectedShapes={setSelectedShapes}
      /> */}
      <FilterSelection
        title="Stone Type"
        shapes={["All", ...filterOptions.stoneTypes]}
        selectedShapes={selectedStoneTypes}
        setSelectedShapes={setSelectedStoneTypes}
      />
      <FilterSelection
        title="Cut Grade"
        shapes={["All", ...filterOptions.cutGrades]}
        selectedShapes={selectedCutGrades}
        setSelectedShapes={setSelectedCutGrades}
      />
      <FilterSelection
        title="Clarity"
        shapes={["All", ...filterOptions.clarities]}
        selectedShapes={selectedClarities}
        setSelectedShapes={setSelectedClarities}
      />
      <FilterSelection
        title="Flouresense"
        shapes={filterOptions.fluorescences}
        selectedShapes={selectedFlouresense}
        setSelectedShapes={setSelectedFlouresense}
      />

      <div className="flex justify-center flex-wrap mt-5">
        <button className="bg-[#CFD9FF] px-10 text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
          Find
        </button>
        <button className="bg-[#CFD9FF] ms-2 px-10 text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
          Reset
        </button>
      </div>
    </div>
  );
};

export default DiamondFilters;
