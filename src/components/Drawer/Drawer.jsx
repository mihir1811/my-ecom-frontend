import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Drawer = ({ anchor = "right", open, onClose, children }) => {
  const controls = useAnimation();
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (open) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: anchor === "right" ? "100%" : "-100%" });
    }
  }, [open, anchor, controls]);

  const closeDrawer = () => {
    controls.start({ x: anchor === "right" ? "100%" : "-100%" });
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      closeDrawer();
    }
  };
  return (
    <>
      {/* Full-page overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: open ? 0.5 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="overlay"
        onClick={handleOverlayClick}
      />
      {/* Drawer */}
      <motion.div
        initial={{ opacity: 0, x: anchor === "right" ? "100%" : "-100%" }}
        animate={{
          opacity: 1,
          x: open ? "0%" : anchor === "right" ? "100%" : "-100%",
          transition: { duration: 0.3, stiffness: 120, damping: 15 },
        }}
        ref={sidebarRef}
        className="sidebar"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ padding: "10px" }}
        >
          <IoClose size={30} onClick={onClose} color="#222" />
        </motion.button>

        <div style={{ borderTop: "1px solid #ddd" }}></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-2"
        >
          {children}
        </motion.div>
      </motion.div>
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          z-index: 10;
        }
        .sidebar {
          width: 400px;
          background-color: lightgray;
          height: 100vh;
          position: fixed;
          top: 0;
          ${anchor}: 0;
          background-color: white !important;
          // border-radius:10px;
          box-shadow: 0 0 5px #ddd;
          z-index: 11;
        }
      `}</style>
    </>
  );
};

export default Drawer;

// import React from "react";

// const Drawer = ({ anchor = "right", open,onClose, children }) => {
//   console.log(open, "cewcewcwecw");
//   return (
//     <>
//       <div
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       className={` sidebar ${open ? "sidebarOpen" : "sidebarClose"}`}>
//         <button onClick={onClose}>
//           close
//         </button>
//         {children}
//       </div>
//       <style jsx={true}>
//         {`
//           .sidebar {
//             width: 350px;
//             background-color: lightgray;
//             height: 100vh;
//             position: absolute;
//             top: 0px;
//             ${anchor}: 0;
//             transition: all 0.3s linear;
//             background-color: white !important;
//           }
//           .sidebarOpen {
//             transform: translate(0%);
//             transition: all 0.3s linear;
//           }
//           .sidebarClose {
//             transform: translate(100%);
//             transition: all 0.3s linear;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default Drawer;
