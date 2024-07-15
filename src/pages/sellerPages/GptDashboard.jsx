import React, { useState } from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    // <Router>
    <div className="flex h-screen bg-gray-200">
      <div
        className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              <FaTimes className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <h1 className="text-2xl font-semibold">Admin Panel</h1>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              <Link
                to="/dashboard"
                className="group flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <div className="relative">
                <button
                  className="group w-full flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                  onClick={toggleDropdown}
                >
                  Products
                  <FaChevronDown
                    className={`ml-auto h-5 w-5 ${dropdownOpen ? "transform rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="ml-4 mt-1">
                    <Link
                      to="/products/list"
                      className="block px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                    >
                      Product List
                    </Link>
                    <Link
                      to="/products/add"
                      className="block px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                    >
                      Add Product
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/orders"
                className="group flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                Orders
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14"></div>
      </div>

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white">
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-2xl font-semibold">Admin Panel</h1>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                <Link
                  to="/dashboard"
                  className="group flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <div className="relative">
                  <button
                    className="group w-full flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                    onClick={toggleDropdown}
                  >
                    Products
                    <FaChevronDown
                      className={`ml-auto h-5 w-5 ${dropdownOpen ? "transform rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="ml-4 mt-1">
                      <Link
                        to="/products/list"
                        className="block px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                      >
                        Product List
                      </Link>
                      <Link
                        to="/products/add"
                        className="block px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                      >
                        Add Product
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/orders"
                  className="group flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                >
                  Orders
                </Link>
                <Link
                  to="/profile"
                  className="group flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                >
                  Profile
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 w-0">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="ml-1 flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleSidebar}
          >
            <FaBars className="h-6 w-6 text-gray-500" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/products/list" element={<ProductList />} />
                  <Route path="/products/add" element={<AddProduct />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div> */}
          </div>
        </main>
      </div>
    </div>
    // </Router>
  );
};

export default AdminPanel;
