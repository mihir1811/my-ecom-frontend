import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { setSideBarSmall } from "../../redux/reducers/uiSlice";
import PRODUCT_ICON from "../../assets/productsIcon.svg";

const SellerDashboard = () => {
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [dropdownActive, setDropdownActive] = useState(false);
  const data = useSelector((state) => state.userData.userRole);
  const isSidebarSmall = true;
  const header = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data !== "SELLER") {
      navigate("/seller/login");
    }
  }, [data, navigate]);

  useEffect(() => {
    const updateHeights = () => {
      const height = header?.current?.clientHeight || 0;
      setSectionHeight(`calc(100vh - ${height + 2}px)`);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, []);

  const handleDropdownClick = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown__btn")) {
      setDropdownActive(false);
    }
  };

  const toggleSidebar = () => {
    dispatch(setSideBarSmall(!isSidebarSmall)); // Toggle sidebar state
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        ref={header}
        className="flex items-center justify-between px-10 py-3 border-b-[2px] bg-[#f5f5f5]"
      >
        <h1 className="font-semibold text-[20px]">Admin</h1>
        <h1>logged in user</h1>
      </header>
      <section
        className="sectionContainer relative"
        style={{ height: sectionHeight }}
      >
        <div
          className={`shadow-red-50 border-r-2 h-full bg-[#f5f5f5] ${
            isSidebarSmall ? "openBar" : "closeBar"
          }`}
        >
          <div className="absolute top-[50%] right-[-30px] ">
            <button onClick={() => toggleSidebar()}>
              {isSidebarSmall ? "open" : "close"} close
            </button>
          </div>
          <div className="menu border-b-2 py-3 px-3">
            <motion.div
              onClick={() => navigate("/seller/dashboard")}
              className="relative cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              dashboard
            </motion.div>
          </div>
          <div className="menu border-b-2 py-3 px-3">
            <motion.div
              onClick={() => navigate("/seller/products")}
              className="relative cursor-pointer flex items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              products
            </motion.div>
          </div>
          <div className="menu border-b-2 py-3 px-3">
            <motion.div
              onClick={() => navigate("/seller/orders")}
              className="relative cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              orders
            </motion.div>
          </div>
          <div className="menu border-b-2 py-3 px-3">
            <motion.div
              onClick={() => navigate("/seller/inventory")}
              className="relative cursor-pointer"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              inventory
            </motion.div>
          </div>
          <div className="menu border-b-2 py-3 px-3">
            <motion.div
              onClick={() => navigate("/seller/profile")}
              className="r elative cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              profile
            </motion.div>
          </div>
          <div className="dropdown menu border-b-2 py-3 px-3">
            <motion.div
              className={`dropdown__btn primary-btn ${
                dropdownActive ? "active" : ""
              }`}
              onClick={handleDropdownClick}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Dropdown<i className="fa-solid fa-caret-down"></i>
            </motion.div>
            <ul className={`dropdown__list ${dropdownActive ? "active" : ""}`}>
              <li>
                <a className="primary-btn" href="#">
                  Link 1
                </a>
              </li>
              <li>
                <a className="primary-btn" href="#">
                  Link 2
                </a>
              </li>
              <li>
                <a className="primary-btn" href="#">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerDashboard;
