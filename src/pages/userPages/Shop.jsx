// Shop.js
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../../components/Header";
import Footer2 from "../../components/footer2";
import ProductContainer from "../../components/ProductsContainer/ProductContainer";
import MultiSelectDropdown from "./MultiSelectDropdown";
import SliderComponent from "../../components/SliderComponent";
import { filterOptions } from "../../../filtersData";

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

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/products', {
          params: { page, limit },
        });
        console.log(response, "recdcd")
        setProducts(response?.data?.data);
        setTotal(response?.data?.total);
      } catch (err) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => {
      const isMultiSelect = Array.isArray(prevFilters[name]);

      if (isMultiSelect) {
        const newValue = prevFilters[name].includes(value)
          ? prevFilters[name].filter((item) => item !== value)
          : [...prevFilters[name], value];
        return { ...prevFilters, [name]: newValue };
      } else {
        return { ...prevFilters, [name]: value };
      }
    });
  };

  const handleSliderChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(total / limit)) {
      setPage(newPage);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="bg-[#f5f5f5]">
        <Header />
        <div className="mx-auto max-w-[1340px] px-[20px]">
          <div className="flex my-5">
            <div className="w-[300px] productFilters bg-white h-max rounded-[10px] p-3">
              <h3 className="font-rossa text-gray-400 text-[22px] font-semibold">Filters</h3>
              <div>
                <h3 className="filter-title">Stone Type</h3>
                <MultiSelectDropdown
                  options={filterOptions.stoneTypes}
                  selectedValues={filters.stoneType}
                  onChange={(value) => handleFilterChange("stoneType", value)}
                  placeholder="Select Stone Type"
                />
              </div>
              <div>
                <h3 className="filter-title">
                  Price Range: ${filters.price[0]} - ${filters.price[1]}
                </h3>
                <SliderComponent
                  min={0}
                  max={1000}
                  value={filters.price}
                  onChange={(value) => handleSliderChange("price", value)}
                />
              </div>
              <div>
                <h3 className="filter-title">Shape</h3>
                <MultiSelectDropdown
                  options={filterOptions.shapes}
                  selectedValues={filters.shape}
                  onChange={(value) => handleFilterChange("shape", value)}
                  placeholder="Select Shape"
                />
              </div>
              <div>
                <h3 className="filter-title">Color</h3>
                <MultiSelectDropdown
                  options={filterOptions.colors}
                  selectedValues={filters.color}
                  onChange={(value) => handleFilterChange("color", value)}
                  placeholder="Select Color"
                />
              </div>
              <div>
                <h3 className="filter-title">
                  Weight Range: {filters.weight[0]} - {filters.weight[1]} carats
                </h3>
                <SliderComponent
                  min={0}
                  max={10}
                  step={0.1}
                  value={filters.weight}
                  onChange={(value) => handleSliderChange("weight", value)}
                />
              </div>
              <div>
                <h3 className="filter-title">Cut Grade</h3>
                <MultiSelectDropdown
                  options={filterOptions.cutGrades}
                  selectedValues={filters.cutGrade}
                  onChange={(value) => handleFilterChange("cutGrade", value)}
                  placeholder="Select Cut Grade"
                />
              </div>
              <div>
                <h3 className="filter-title">Clarity</h3>
                <MultiSelectDropdown
                  options={filterOptions.clarities}
                  selectedValues={filters.clarity}
                  onChange={(value) => handleFilterChange("clarity", value)}
                  placeholder="Select Clarity"
                />
              </div>
              <div>
                <h3 className="filter-title">Fluorescence</h3>
                <MultiSelectDropdown
                  options={filterOptions.fluorescences}
                  selectedValues={filters.fluorescence}
                  onChange={(value) => handleFilterChange("fluorescence", value)}
                  placeholder="Select Fluorescence"
                />
              </div>
            </div>
            <div className="w-full ps-5">
              <div className="b h-full rounded-[10px] w-full p-3 pt-0">
                <ProductContainer filters={filters} products={products} />
                <div className="pagination">

                    <button className="disabled:opacity-80" disabled={!(page > 1)} onClick={() => handlePageChange(page - 1)}>
                      Previous
                    </button>
                  {[...Array(Math.ceil(total / limit)).keys()].map(num => (
                    <button
                      key={num}
                      onClick={() => handlePageChange(num + 1)}
                      className={page === num + 1 ? 'active' : ''}
                    >
                      {num + 1}
                    </button>
                  ))}
                  {/* {page < Math.ceil(total / limit) && ( */}
                    <button className="disabled:opacity-80" disabled={!(page < Math.ceil(total / limit))} onClick={() => handlePageChange(page + 1)}>
                      Next
                    </button>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
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
          .pagination {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
          .pagination button {
            margin: 0 5px;
            padding: 5px 10px;
            border: none;
            background: #001858;
            color: white;
            cursor: pointer;
          }
          .pagination button.active {
            background: #f5f5f5;
            color: #001858;
            border: 1px solid #001858;
          }
        `}
      </style>
    </>
  );
};

export default Shop;
