import React, { useEffect, useState } from "react";

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
      <PriceRangeCard />
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
            Pear
          </button>
          <button className="bg-[#CFD9FF] text-[#001858] rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer">
            Emerald
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

      <StoneShapes />
      <StoneType />
      <CutGrade />
      <Clarity />
      <Flouresense />
    </div>
  );
};

export default DiamondFilters;

const Flouresense = () => {
  const [selectedShapes, setSelectedShapes] = useState([]);

  const shapes = ["None", "Faint", "Medium", "Strong", "Very Strong"];

  const handleButtonClick = (shape) => {
    if (shape === "All") {
      selectedShapes.length > 0 && selectedShapes.includes("All")
        ? setSelectedShapes([])
        : setSelectedShapes(shapes);
    } else {
      if (selectedShapes.includes("All")) {
        setSelectedShapes([shape]);
      } else {
        setSelectedShapes((prevSelectedShapes) =>
          prevSelectedShapes.includes(shape)
            ? prevSelectedShapes.filter((s) => s !== shape)
            : [...prevSelectedShapes, shape],
        );
      }
    }
  };

  return (
    <div className="py-3">
      <h4 className="font-rossa text-[24px]">Flouresense</h4>
      <div className="grid grid-cols-5 gap-5 mt-3">
        {shapes.map((shape) => (
          <ShapeButton
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

const Clarity = () => {
  const [selectedShapes, setSelectedShapes] = useState([]);

  const shapes = ["All", "1F", "WS1", "vs1", "vs2", "S11", "S12", "S13"];

  const handleButtonClick = (shape) => {
    if (shape === "All") {
      selectedShapes.length > 0 && selectedShapes.includes("All")
        ? setSelectedShapes([])
        : setSelectedShapes(shapes);
    } else {
      if (selectedShapes.includes("All")) {
        setSelectedShapes([shape]);
      } else {
        setSelectedShapes((prevSelectedShapes) =>
          prevSelectedShapes.includes(shape)
            ? prevSelectedShapes.filter((s) => s !== shape)
            : [...prevSelectedShapes, shape],
        );
      }
    }
  };

  return (
    <div className="py-3">
      <h4 className="font-rossa text-[24px]">Clarity</h4>
      <div className="grid grid-cols-5 gap-5 mt-3">
        {shapes.map((shape) => (
          <ShapeButton
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

const CutGrade = () => {
  const [selectedShapes, setSelectedShapes] = useState([]);

  const shapes = ["All", "Good", "Very Good", "Ideal", "True Hearts"];

  const handleButtonClick = (shape) => {
    if (shape === "All") {
      selectedShapes.length > 0 && selectedShapes.includes("All")
        ? setSelectedShapes([])
        : setSelectedShapes(shapes);
    } else {
      if (selectedShapes.includes("All")) {
        setSelectedShapes([shape]);
      } else {
        setSelectedShapes((prevSelectedShapes) =>
          prevSelectedShapes.includes(shape)
            ? prevSelectedShapes.filter((s) => s !== shape)
            : [...prevSelectedShapes, shape],
        );
      }
    }
  };

  return (
    <div className="py-3">
      <h4 className="font-rossa text-[24px]">Cut Grade</h4>
      <div className="grid grid-cols-5 gap-5 mt-3">
        {shapes.map((shape) => (
          <ShapeButton
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

const StoneShapes = () => {
  const [selectedShapes, setSelectedShapes] = useState([]);

  const shapes = [
    "All",
    "Round",
    "Pear",
    "Emerald",
    "Oval",
    "Heart",
    "Marquise",
    "Asscher",
    "Cushion",
  ];

  const handleButtonClick = (shape) => {
    if (shape === "All") {
      selectedShapes.length > 0 && selectedShapes.includes("All")
        ? setSelectedShapes([])
        : setSelectedShapes(shapes);
    } else {
      if (selectedShapes.includes("All")) {
        setSelectedShapes([shape]);
      } else {
        setSelectedShapes((prevSelectedShapes) =>
          prevSelectedShapes.includes(shape)
            ? prevSelectedShapes.filter((s) => s !== shape)
            : [...prevSelectedShapes, shape],
        );
      }
    }
  };

  return (
    <div className="py-3">
      <h4 className="font-rossa text-[24px]">Stone Shape</h4>
      <div className="grid grid-cols-5 gap-5 mt-3">
        {shapes.map((shape) => (
          <ShapeButton
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

const StoneType = () => {
  const [selectedShapes, setSelectedShapes] = useState([]);

  const shapes = ["All", "Lab", "Natural"];

  const handleButtonClick = (shape) => {
    if (shape === "All") {
      selectedShapes.length > 0 && selectedShapes.includes("All")
        ? setSelectedShapes([])
        : setSelectedShapes(shapes);
    } else {
      if (selectedShapes.includes("All")) {
        setSelectedShapes([shape]);
      } else {
        setSelectedShapes((prevSelectedShapes) =>
          prevSelectedShapes.includes(shape)
            ? prevSelectedShapes.filter((s) => s !== shape)
            : [...prevSelectedShapes, shape],
        );
      }
    }
  };

  return (
    <div className="py-3">
      <h4 className="font-rossa text-[24px]">Stone Type</h4>
      <div className="grid grid-cols-5 gap-5 mt-3">
        {shapes.map((shape) => (
          <ShapeButton
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

const ShapeButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${
        isActive ? "bg-[#8FAAEE] text-white" : "bg-[#CFD9FF] text-[#001858]"
      } rounded-3xl py-2 text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// export default ShapeButton;




const PriceRangeCard = ({ 
  title = "Price Range", 
  minLabel = "1", 
  maxLabel = "10", 
  initialMin = 0, 
  initialMax = 1, 
  currentRangeValue = 10,
  onRangeChange
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
            onChange={(e) => setMinValue(Number(e.target.value))}
            className="absolute w-full h-1 bg-gray-400 appearance-none"
          />
          <input
            type="range"
            min="0"
            max="10"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
            className="absolute w-full h-1 bg-transparent appearance-none"
          />
        </div>
      </div>
    </div>
  );
};