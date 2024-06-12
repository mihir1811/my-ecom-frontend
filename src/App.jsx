import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { setScreenSize } from "./redux/reducers/uiSlice";

import Home from "./pages/userPages/Home";
import About from "./pages/userPages/About";
import Contact from "./pages/userPages/Contact";
import PageNotFound from "./pages/userPages/PageNotFound";
import UserLogin from "./pages/userPages/authPages/UserLogin";
import UserSignup from "./pages/userPages/authPages/UserSignup";
import SellerDashboard from "./pages/sellerPages/SellerDashboard";
import Products from "./pages/userPages/Products";
import SellerSignup from "./pages/sellerPages/SellerLogin";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        setScreenSize({
          height: window.innerHeight,
          width: window.innerWidth,
        }),
      );
    };

    window.addEventListener("resize", handleResize);
    // Call handleResize to set the initial size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <UserRoutes>
                <Home />
              </UserRoutes>
            }
          />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserSignup />} />
          {/* <Route
            path="/home"
            element={
              <UserRoutes>
                <Home />
              </UserRoutes>
            }
          /> */}
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route path="/checkout" element={<h1>Checkout</h1>} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<h1>Terms and Conditions</h1>}
          />
          {/* Seller routes */}
          <Route path="/seller/register" element={<SellerSignup />} />
          <Route path="/seller/login" element={<h1>Seller Login</h1>} />
          <Route
            path="/seller/dashboard"
            element={
              <SellerRoutes>
                <SellerDashboard />
              </SellerRoutes>
            }
          />
          {/* Admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <SuperAdminRoutes>
                <SellerDashboard />
              </SuperAdminRoutes>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
};

export default App;

const UserRoutes = ({ children }) => {
  const currentUser = useSelector((data) => data?.userData?.userRole);
  if (currentUser === "USER") {
    return children;
  }
  return <PageNotFound />;
};

const SellerRoutes = ({ children }) => {
  const currentUser = useSelector((data) => data?.userData?.userRole);
  if (currentUser === "SELLER") {
    return children;
  }
  return <PageNotFound />;
};

const SuperAdminRoutes = ({ children }) => {
  const currentUser = useSelector((data) => data?.userData?.userRole);

  if (currentUser === "ADMIN") {
    return children;
  }
  return <PageNotFound />;
};
