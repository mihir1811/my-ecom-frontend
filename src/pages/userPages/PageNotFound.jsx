import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex justify-center items-center h-screen py-10 bg-white font-serif">
        <div className=" mx-auto">
          <div className="row flex justify-center">
            <div className="col text-center">
              <div className="four_zero_four_bg relative h-96 bg-center bg-no-repeat bg-cover">
                <h1 className="text-center text-8xl">404</h1>
              </div>
              <div className="">
                <h3 className="text-2xl">Look like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <a
                  href="#"
                  className="link_404 text-white py-2 px-4 bg-green-600 mt-5 inline-block"
                >
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
