import React from "react";

const SellerProducts = () => {
  return (
    <div className="p-5">
      <div className="py-1 flex justify-between items-center">
        <h4 className="text-[20px] font-semibold">products</h4>
        <button className="bg-white px-4 py-2 rounded-md shadow-md uppercase font-semibold">
          + Add Product
        </button>
      </div>
    </div>
  );
};

export default SellerProducts;
