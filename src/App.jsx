import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { setScreenSize } from "./redux/reducers/uiSlice";

import Home from "./pages/userPages/Home";
import About from "./pages/userPages/About";
import Contact from "./pages/userPages/Contact";
import PageNotFound from "./pages/userPages/PageNotFound";
import UserLogin from "./pages/userPages/authPages/UserLogin";
import UserSignup from "./pages/userPages/authPages/UserSignup";
import SellerDashboard from "./pages/sellerPages/SellerDashboard";
import SellerSignup from "./pages/sellerPages/SellerLogin";
import "./App.css";
import CartPage from "./pages/userPages/CartPage";
import CheckOutPage from "./pages/userPages/CheckOutPage";
import useRole from "./hooks/userRole";
import Shop from "./pages/userPages/Shop";
import FavouritesPage from "./pages/userPages/FavouritesPage";

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
              <ProtectedRoute role="USER">
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Shop />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/my-orders" element={<h1>my orders page</h1>} />
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
              <ProtectedRoute role="SELLER">
                <SellerDashboard />
              </ProtectedRoute>
            }
          />
          {/* Admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="ADMIN">
                <SellerDashboard />
              </ProtectedRoute>
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

const ProtectedRoute = ({ children, role }) => {
  const hasRole = useRole(role);
  return hasRole ? children : <PageNotFound />;
};
