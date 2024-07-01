import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PRODUCT_ICON from "../../assets/productsIcon.svg";

const SellerDashboard = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const data = useSelector((state) => state.userData.userRole);
  const header = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (data !== "SELLER") {
      navigate("/seller/login");
    }
  }, [data, navigate]);

  useEffect(() => {
    const updateHeights = () => {
      const height = header?.current?.clientHeight || 0;
      setHeaderHeight(height);
      setSectionHeight(`calc(100vh - ${height + 2}px)`);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, []);

  return (
    <>
      <header
        ref={header}
        className="flex items-center justify-between px-10 py-3 border-b-[2px]"
      >
        <h1 className="font-semibold text-[20px]">Admin</h1>
        <h1>logged in user</h1>
      </header>
      <section className="sectionContainer" style={{ height: sectionHeight }}>
        <div className={"shadow-red-50 border-r-2 h-full openBar"}>
          <div className="menu border-b-2 py-3 px-3">
            <motion.div
              onClick={() => navigate("/seller/dashboard")}
              className="relative cursor-pointer"
              // whileHover={{ scale: 1 }}
              // whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              dashboard
            </motion.div>
          </div>
          <div className="menu border-b-2 py-3 px-3">
            <motion.div
              onClick={() => navigate("/seller/products")}
              className="relative cursor-pointer"
              // whileHover={{ scale: 1 }}
              // whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <img src={PRODUCT_ICON} />
              products
            </motion.div>
          </div>
          <div className="menu border-b-2 py-3 px-3">
            <motion.div
              onClick={() => navigate("/seller/orders")}
              className="relative cursor-pointer"
              // whileHover={{ scale: 1 }}
              // whileTap={{ scale: 0.9 }}
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
              className="relative cursor-pointer"
              // whileHover={{ scale: 1 }}
              // whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              profile
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerDashboard;
