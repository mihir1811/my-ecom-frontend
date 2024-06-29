import React, { useState } from "react";

const PriceRangeComp = ({
  title,
  minValue,
  maxValue,
  isWeightSelect = false,
}) => {
  const [valueA, setValueA] = useState(minValue);
  const [valueB, setValueB] = useState(maxValue);

  const handleChangeA = (event) => {
    const newValueA = isWeightSelect
      ? parseFloat(event.target.value)
      : parseInt(event.target.value, 10);

    if (newValueA <= valueB && newValueA <= maxValue) {
      setValueA(newValueA);
    }
  };

  const handleChangeB = (event) => {
    const newValueB = isWeightSelect
      ? parseFloat(event.target.value)
      : parseInt(event.target.value, 10);
    if (newValueB >= valueA && newValueB <= maxValue) {
      setValueB(newValueB);
    }
  };

  return (
    <>
      <div className="price-range-slider">
        <h3 className="font-rossa text-[24px] mb-3">{title}</h3>

        <div className="range-bar-container">
          <div className="range-bar-background"></div>
          <div
            className="range-bar-foreground"
            style={{
              left: `${((valueA - minValue) / (maxValue - minValue)) * 100}%`,
              width: `${((valueB - valueA) / (maxValue - minValue)) * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={valueA}
            onChange={handleChangeA}
            className="price-range-input"
            step={isWeightSelect ? "0.1" : "1"}
          />
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={valueB}
            onChange={handleChangeB}
            className="price-range-input"
            step={isWeightSelect ? "0.1" : "1"}
          />
          <div className="flex items-center justify-between pt-3">
            <p>{minValue}</p>
            <p>{maxValue}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-9">
          <div className="flex flex-col">
            <label>From</label>
            <input
              className="py-2 px-3 rounded-md border-2 outline-blue-300 w-full"
              type="number"
              value={valueA}
              placeholder="0"
              onChange={handleChangeA}
              step={isWeightSelect ? "0.1" : "1"}
              min={minValue}
              max={maxValue}
            />
          </div>
          <div>
            <label>To</label>
            <input
              className="py-2 px-3 rounded-md border-2 outline-blue-300 w-full"
              type="number"
              value={valueB}
              placeholder="0"
              onChange={handleChangeB}
              step={isWeightSelect ? "0.1" : "1"}
              min={minValue}
              max={maxValue}
            />
          </div>
        </div>
      </div>
      <style jsx="true">
        {`
          body {
            background: #f5f5f5;
          }

          .price-range-slider {
            width: 100%;
            padding: 10px 20px;
          }

          .price-range-slider .range-value {
            margin: 0;
          }

          .price-range-slider .range-value input {
            width: 100%;
            background: none;
            color: #000;
            font-size: 16px;
            font-weight: initial;
            box-shadow: none;
            border: none;
            margin: 20px 0;
          }

          .range-bar-container {
            position: relative;
            width: 100%;
            height: 3px;
            background: #e5e7eb;
          }

          .range-bar-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #e5e7eb;
            border-radius: 10px;
          }

          .range-bar-foreground {
            position: absolute;
            top: 0;
            height: 100%;
            background: #001858;
          }

          .price-range-input {
            position: absolute;
            top: 0px;
            width: 100%;
            height: 3px;
            background: none;
            -webkit-appearance: none;
            pointer-events: none;
          }

          .price-range-input::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 17px;
            height: 17px;
            background: #fff;
            border: 2px solid #001858;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: all;
          }

          .price-range-input::-moz-range-thumb {
            width: 17px;
            height: 17px;
            background: #fff;
            border: 2px solid #001858;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: all;
          }

          .price-range-input::-ms-thumb {
            width: 17px;
            height: 17px;
            background: #fff;
            border: 2px solid #001858;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: all;
          }
        `}
      </style>
    </>
  );
};

export default PriceRangeComp;
