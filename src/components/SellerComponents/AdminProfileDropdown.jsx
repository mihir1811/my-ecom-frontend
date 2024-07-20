import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiUserCircle } from "react-icons/pi";

const AdminProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent document click from closing dropdown
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add click listener to close dropdown on document click (outside component)
    document.addEventListener("click", closeDropdown);

    return () => {
      // Remove listener on component unmount
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none  rounded-md"
      >
        User Name
        (Admin)
    
      </button> */}
      <motion.div
        className="relative cursor-pointer mx-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        onClick={toggleDropdown}
        animate={{ opacity: 1, scale: 1 }}
      >
        <PiUserCircle size={30} />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute z-10 origin-top-right right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
          >
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md">
              Settings
            </li>
            <li className="block px-4 py-2 text-sm text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md">
              Logout
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminProfileDropdown;
