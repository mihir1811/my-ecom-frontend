import React, { useEffect, useState } from "react";
import PriceRangeComp from "./RangeComponents/PriceRangeComp";
import { motion } from "framer-motion";

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
      {/* <PriceRangeCard /> */}
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

      <ShapeSelection
        title="Stone Shape"
        shapes={[
          "All",
          "Round",
          "Pear",
          "Emerald",
          "Oval",
          "Heart",
          "Marquise",
          "Asscher",
          "Cushion",
        ]}
      />
      <ShapeSelection title="Stone Type" shapes={["All", "Lab", "Natural"]} />
      <ShapeSelection
        title="Cut Grade"
        shapes={["All", "Good", "Very Good", "Ideal", "True Hearts"]}
      />
      <ShapeSelection
        title="Clarity"
        shapes={["All", "1F", "WS1", "vs1", "vs2", "S11", "S12", "S13"]}
      />
      <ShapeSelection
        title="Flouresense"
        shapes={["None", "Faint", "Medium", "Strong", "Very Strong"]}
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

const ShapeSelection = ({ title, shapes }) => {
  const [selectedShapes, setSelectedShapes] = useState([]);

  const handleButtonClick = (shape) => {
    if (shape === "All") {
      selectedShapes.length > 0 && selectedShapes.includes("All")
        ? setSelectedShapes([])
        : setSelectedShapes(shapes);
    } else {
      if (selectedShapes.includes("All")) {
        setSelectedShapes([shape]);
      } else {
        const newSelectedShapes = selectedShapes.includes(shape)
          ? selectedShapes.filter((s) => s !== shape)
          : [...selectedShapes, shape];

        // Check if all shapes except "All" are selected, then select "All"
        if (newSelectedShapes.length === shapes.length - 1) {
          setSelectedShapes(shapes);
        } else {
          setSelectedShapes(newSelectedShapes);
        }
      }
    }
  };

  return (
    <div className="py-3">
      <h4 className="font-rossa text-[24px]">{title}</h4>
      <div className="grid grid-cols-5 gap-5 mt-3">
        {shapes.map((shape) => (
          <ShapeButton2
            key={shape}
            label={shape}
            isActive={selectedShapes.includes(shape)}
            onClick={() => handleButtonClick(shape)}
          />
        ))}
      </div>
    </div>
  );
};

const ShapeButton2 = ({ label, isActive, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 0.97 }}
      className={`${
        isActive ? "bg-[#8FAAEE] text-white" : "bg-[#CFD9FF] text-[#001858]"
      } rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

const PriceRangeCard = ({
  title = "Price Range",
  minLabel = "1",
  maxLabel = "10",
  initialMin = 0,
  initialMax = 10000,
  currentRangeValue = 10,
  onRangeChange,
}) => {
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
  const [currentRange, setCurrentRange] = useState(currentRangeValue);

  useEffect(() => {
    setMinValue(initialMin);
  }, [initialMin]);

  useEffect(() => {
    setMaxValue(initialMax);
  }, [initialMax]);

  useEffect(() => {
    if (onRangeChange) {
      onRangeChange({ minValue, maxValue, currentRange });
    }
  }, [minValue, maxValue, currentRange, onRangeChange]);

  useEffect(() => {
    setCurrentRange((minValue + maxValue) / 2); // Example calculation for current range
  }, [minValue, maxValue]);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-md">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">{title}</h4>
        <div className="flex justify-between items-center text-blue-700 font-medium mb-4">
          <div>${minValue}</div>
          <div>-</div>
          <div>${maxValue}</div>
        </div>
        <small className="block text-gray-500 text-sm mb-4">
          Current Range:
          <div className="inline-block ml-1">${currentRange}</div>
        </small>
        <div className="flex justify-between text-xs text-gray-500 mb-4">
          <label>{minLabel}</label>
          <label>{maxLabel}</label>
        </div>
        <div className="relative h-6">
          <input
            type="range"
            min="1"
            max="10000"
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full h-1 bg-gray-400 appearance-none "
            style={{ zIndex: minValue > maxValue - 100 ? "1" : "2" }}
          />
          <input
            type="range"
            min="1"
            max="10000"
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full h-1 bg-transparent bg-gray-400 appearance-none z-10"
            style={{ zIndex: minValue > maxValue - 100 ? "2" : "1 " }}
          />
        </div>
      </div>
    </div>
  );
};
