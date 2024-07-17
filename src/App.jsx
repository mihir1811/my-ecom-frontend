import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { setScreenSize } from "./redux/reducers/uiSlice";
import Home from "./pages/userPages/Home";
import About from "./pages/userPages/About";
import Contact from "./pages/userPages/Contact";
import PageNotFound from "./pages/userPages/PageNotFound";
import UserLogin from "./pages/userPages/authPages/UserLogin";
import UserSignup from "./pages/userPages/authPages/UserSignup";
import UserProfile from "./pages/userPages/UserProfile";
import SellerSignup from "./pages/sellerPages/SellerLogin";
import "./App.css";
import CartPage from "./pages/userPages/CartPage";
import CheckOutPage from "./pages/userPages/CheckOutPage";
import useRole from "./hooks/userRole";
import Shop from "./pages/userPages/Shop";
import FavouritesPage from "./pages/userPages/FavouritesPage";
import MyOrders from "./pages/userPages/MyOrders";
import AdminSideBar from "./components/SellerComponents/AdminSidebar/AdminSidebar";

const App = () => {
  const dispatch = useDispatch();
  const userRole = useSelector((data) => data?.userData?.userRole);

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        setScreenSize({
          height: window.innerHeight,
          width: window.innerWidth,
        })
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const renderRoutesForRole = (role) => {
    switch (role) {
      case "USER":
        return (
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
            <Route path="/my-orders" element={<h1>My Orders Page</h1>} />
            <Route
              path="/terms-and-conditions"
              element={<h1>Terms and Conditions</h1>}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/orders" element={<MyOrders />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        );
      case "SELLER":
        return (
          <>
            <AdminSideBar>
              <Routes>
                <Route path="/products/add" element={<AddProduct />} />
                <Route path="/seller/register" element={<SellerSignup />} />
                <Route path="/seller/login" element={<h1>Seller Login</h1>} />
                <Route path="/seller/products" element={<h1>products page</h1>} />
                <Route
                  path="/seller/dashboard"
                  element={<ProtectedRoute role="SELLER"></ProtectedRoute>}
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </AdminSideBar>
          </>
        );
      case "ADMIN":
        return (
          <Routes>
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute role="ADMIN">
                  <h1>hi</h1>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        );
      default:
        return (
          <Routes>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        );
    }
  };

  return (
    <>
      <BrowserRouter>{renderRoutesForRole(userRole)}</BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;

const ProtectedRoute = ({ children, role }) => {
  const hasRole = useRole(role);
  return hasRole ? children : <PageNotFound />;
};

const Dashboard = () => <div>Dashboard Content</div>;
const ProductList = () => <div>Product List Content</div>;
const AddProduct = () => <div>Add Product Content</div>;
const Orders = () => <div>Orders Content</div>;
const Profile = () => <div>Profile Content</div>;
