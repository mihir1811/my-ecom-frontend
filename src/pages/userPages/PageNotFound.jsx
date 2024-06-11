import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex  items-center justify-center bg-[#ddd] h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="text-center">
        <p className="text-[24px]">Page Not Found</p>
        <div className="mt-5">
          <button
            onClick={() => navigate(-1)}
            className="bg-black text-white py-2 px-3 rounded-md mt-4"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
