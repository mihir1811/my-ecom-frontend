import React, { useState } from "react";
import Header from "../components/Header";
import Footer2 from "../components/footer2";

const Products = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="bg-[#ddd]">
      <Header />
{/* 
      <div class="mx-auto">
        <div class="flex flex-wrap mb-4" id="search">
          <form
            id="search-form"
            action=""
            method="POST"
            enctype="multipart/form-data"
            class="w-full flex"
          >
            <div class="form-group w-3/4 pr-2">
              <input
                class="form-control w-full px-4 py-2 border rounded"
                type="text"
                placeholder="Search"
              />
            </div>
            <div class="form-group w-1/4 pl-2">
              <button
                type="submit"
                class="btn w-full bg-blue-500 text-white py-2 rounded"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div class="flex flex-wrap mb-4" id="filter">
          <form class="w-full flex flex-wrap">
            <div class="form-group w-full sm:w-1/2 lg:w-1/4 p-2">
              <select
                data-filter="make"
                class="filter-make filter form-control w-full px-4 py-2 border rounded"
              >
                <option value="">Select Make</option>
                <option value="">Show All</option>
              </select>
            </div>
            <div class="form-group w-full sm:w-1/2 lg:w-1/4 p-2">
              <select
                data-filter="model"
                class="filter-model filter form-control w-full px-4 py-2 border rounded"
              >
                <option value="">Select Model</option>
                <option value="">Show All</option>
              </select>
            </div>
            <div class="form-group w-full sm:w-1/2 lg:w-1/4 p-2">
              <select
                data-filter="type"
                class="filter-type filter form-control w-full px-4 py-2 border rounded"
              >
                <option value="">Select Type</option>
                <option value="">Show All</option>
              </select>
            </div>
            <div class="form-group w-full sm:w-1/2 lg:w-1/4 p-2">
              <select
                data-filter="price"
                class="filter-price filter form-control w-full px-4 py-2 border rounded"
              >
                <option value="">Select Price Range</option>
                <option value="">Show All</option>
              </select>
            </div>
          </form>
        </div>
        <div class="row" id="products"></div>
      </div> */}

      <div className="mx-auto max-w-[1320px]">
        <div className="flex mt-5">
          <div className="w-[300px] bg-white rounded-[10px] p-3">
            <h3 className="font-rossa text-gray-400  text-[22px] font-semibold">
              Filters
            </h3>
          </div>
          <div className="w-full ps-5">
            <div className="bg-white h-full rounded-[10px] w-full p-3">

            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default Products;
