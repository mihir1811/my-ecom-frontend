import React from "react";

const PageNotFound = () => {
  return (
    <section className="flex  items-center justify-center bg-[#ddd] h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="text-center">
        <p className="text-[24px]">Page Not Found</p>
        <div className="mt-5">
          <a href="/" className="bg-black text-white py-2 px-3 rounded-md mt-4">
            Back To Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
