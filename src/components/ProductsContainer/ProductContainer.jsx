import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/reducers/favoriteProductsSlice";
import { GoHeart, GoHeartFill } from "react-icons/go";

const ProductContainer = ({ filters, products, isFavouritesPage = false }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites.favorites);

  const filteredProducts = products?.filter((product) => {
    return (
      (filters.stoneType.length > 0
        ? filters.stoneType.includes(product.stoneType)
        : true) &&
      (filters.price
        ? product.marketPrice >= filters.price[0] &&
          product.marketPrice <= filters.price[1]
        : true) &&
      (filters.shape.length > 0
        ? filters.shape.includes(product.shape)
        : true) &&
      (filters.color.length > 0
        ? filters.color.includes(product.color)
        : true) &&
      (filters.weight
        ? product.weight >= filters.weight[0] &&
          product.weight <= filters.weight[1]
        : true) &&
      (filters.cutGrade.length > 0
        ? filters.cutGrade.includes(product.cut)
        : true) &&
      (filters.clarity.length > 0
        ? filters.clarity.includes(product.clarity)
        : true) &&
      (filters.fluorescence.length > 0
        ? filters.fluorescence.includes(product.fluorescence)
        : true)
    );
  });

  const handleAddToFavorites = (product) => {
    const isFavorite = favoriteProducts.some(
      (favProduct) => favProduct._id === product._id,
    );

    if (isFavorite) {
      dispatch(removeFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div
      className={`productList ${isFavouritesPage ? "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" : "sm:grid-cols-3"} grid grid-cols-2 gap-3 gap-y-4`}
    >
      {filteredProducts.map((data, index) => (
        <div key={index} className="productCard bg-white relative group">
          <div className="productHeader flex overflow-hidden justify-center items-center">
            <img
              src={data?.productImgs[0]}
              className="w-full aspect-square rounded-sm group-hover:scale-125 duration-200"
            />
          </div>
          <button
            className="absolute top-2 right-2 rounded-full bg-white p-1"
            onClick={() => handleAddToFavorites(data)}
          >
            {favoriteProducts.some(
              (favProduct) => favProduct._id === data._id,
            ) ? (
              <GoHeartFill size={20} color="red" />
            ) : (
              <GoHeart size={20} color={"black"} />
            )}
          </button>
          <h6 className="p-2 pb-1 line-clamp-1">{data?.title}</h6>
          <div className="productContent flex items-center p-2">
            <p className="me-2 font-semibold">${data?.marketPrice}</p>
            <p className="marketPrice text-[12px] leading-[24px]">
              ${data?.msrpPrice}
            </p>
            <p>
              {(
                ((data?.msrpPrice - data?.marketPrice) / data?.msrpPrice) *
                100
              ).toFixed(2)}
              % OFF
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
