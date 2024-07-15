// Shop.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer2 from "../../components/footer2";
import ProductContainer from "../../components/ProductsContainer/ProductContainer";
import MultiSelectDropdown from "./MultiSelectDropdown";
import SliderComponent from "../../components/SliderComponent";
import { filterOptions } from "../../../filtersData";
import { productsList } from "../../../data";
import { useSelector } from "react-redux";

const FavouritesPage = () => {
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
  const favouriteProducts = useSelector((data) => data?.favorites?.favorites);

  console.log(favouriteProducts, "wefewdewdewd");

  const [products, setProducts] = useState(productsList);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/products', {
  //         params: { page, limit },
  //       });
  //       console.log(response, "recdcd")
  //       setProducts(response?.data?.data);
  //       setTotal(response?.data?.total);
  //     } catch (err) {
  //       setError(err?.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, [page, limit]);

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
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <Header />
        <div className="mx-auto max-w-[1340px] px-[10px]">
          <div className="flex my-5">
            <div className="w-full">
              <div className="b h-full rounded-[10px] w-full p-3 pt-0">
                <ProductContainer
                  filters={filters}
                  products={favouriteProducts}
                  isFavouritesPage={true}
                />
                {/* <div className="pagination">
                  <button
                    className="disabled:opacity-80"
                    disabled={!(page > 1)}
                    onClick={() => handlePageChange(page - 1)}
                  >
                    Previous
                  </button>
                  {[...Array(Math.ceil(total / limit)).keys()].map((num) => (
                    <button
                      key={num}
                      onClick={() => handlePageChange(num + 1)}
                      className={page === num + 1 ? "active" : ""}
                    >
                      {num + 1}
                    </button>
                  ))}
                  {page < Math.ceil(total / limit) && (
                  <button
                    className="disabled:opacity-80"
                    disabled={!(page < Math.ceil(total / limit))}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    Next
                  </button>
                  )} 
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
      <style jsx="true">
        {`
          .rc-slider-track,
          .rc-slider-tracks {
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

export default FavouritesPage;
