import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer2 from "../../components/footer2";
import ProductContainer from "../../components/ProductsContainer/ProductContainer";
import MultiSelectDropdown from "./MultiSelectDropdown";
import { filterOptions } from "../../../filtersData";
import SliderComponent from "../../components/SliderComponent";

const Shop = () => {
  const [filters, setFilters] = useState({
    stoneType: [],
    price: [0, 1000],
    shape: [],
    color: [],
    weight: [0, 10],
    cutGrade: [],
    clarity: [],
    fluorescence: [],
  });

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => {
      const isMultiSelect = Array.isArray(prevFilters[name]);

      if (isMultiSelect) {
        const newValue = prevFilters[name].includes(value)
          ? prevFilters[name].filter((item) => item !== value)
          : [...prevFilters[name], value];
        console.log(name, newValue, "Multi-select filter updated");
        return { ...prevFilters, [name]: newValue };
      } else {
        console.log(name, value, "Single value filter updated");
        return { ...prevFilters, [name]: value };
      }
    });
  };

  const handleSliderChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    console.log(name, value, "Slider filter updated");
  };

  useEffect(() => {
    // Placeholder for fetching data from APIs
    // fetchProducts();
  }, [filters]);

  const { stoneTypes, shapes, colors, cutGrades, clarities, fluorescences } = filterOptions;

  return (
    <div className="bg-[#f5f5f5]">
      <Header />
      <div className="mx-auto max-w-[1340px] px-[20px]">
        <div className="flex my-5">
          <div className="w-[300px] productFilters bg-white h-max rounded-[10px] py-3 px-5">
            <h3 className="font-rossa text-gray-400 text-[22px] font-semibold">
              Filters
            </h3>
            <div>
              <h3 className="filter-title">Stone Type</h3>
              <MultiSelectDropdown
                options={stoneTypes}
                selectedValues={filters.stoneType}
                onChange={(value) => handleFilterChange("stoneType", value)}
                placeholder="Select Stone Type"
              />
            </div>
            <SliderComponent
              title="Price Range"
              min={0}
              max={1000}
              value={filters.price}
              onChange={(value) => handleSliderChange("price", value)}
              unit="USD"
            />
            <div>
              <h3 className="filter-title">Shape</h3>
              <MultiSelectDropdown
                options={shapes}
                selectedValues={filters.shape}
                onChange={(value) => handleFilterChange("shape", value)}
                placeholder="Select Shape"
              />
            </div>
            <div>
              <h3 className="filter-title">Color</h3>
              <MultiSelectDropdown
                options={colors}
                selectedValues={filters.color}
                onChange={(value) => handleFilterChange("color", value)}
                placeholder="Select Color"
              />
            </div>
            <SliderComponent
              title="Weight Range"
              min={0}
              max={10}
              step={0.1}
              value={filters.weight}
              onChange={(value) => handleSliderChange("weight", value)}
              unit="carats"
            />
            <div>
              <h3 className="filter-title">Cut Grade</h3>
              <MultiSelectDropdown
                options={cutGrades}
                selectedValues={filters.cutGrade}
                onChange={(value) => handleFilterChange("cutGrade", value)}
                placeholder="Select Cut Grade"
              />
            </div>
            <div>
              <h3 className="filter-title">Clarity</h3>
              <MultiSelectDropdown
                options={clarities}
                selectedValues={filters.clarity}
                onChange={(value) => handleFilterChange("clarity", value)}
                placeholder="Select Clarity"
              />
            </div>
            <div>
              <h3 className="filter-title">Fluorescence</h3>
              <MultiSelectDropdown
                options={fluorescences}
                selectedValues={filters.fluorescence}
                onChange={(value) => handleFilterChange("fluorescence", value)}
                placeholder="Select Fluorescence"
              />
            </div>
          </div>
          <div className="w-full ps-5">
            <div className="b h-full rounded-[10px] w-full p-3 pt-0">
              <ProductContainer filters={filters} />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />

      <style jsx="true">
        {`
          .rc-slider-track, .rc-slider-tracks {
            background-color: #001858;
          }
          .rc-slider-handle {
            border: solid 2px #001858;
            opacity: 1;
          }
          .filter-title {
            margin-top: 20px;
            margin-bottom: 8px;
            font-family: "Cinzel", serif;
          }
          .selected-options {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
          }
          .selected-option {
            background: #e0e0e0;
            border-radius: 3px;
            padding: 5px;
            margin: 2px;
            display: flex;
            align-items: center;
          }
          .remove-btn {
            margin-left: 5px;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default Shop;
