import { useState } from "react";
import "./App.css";
import ThemeProvider from "./ThemeProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/userPages/Home";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import About from "./pages/userPages/About";
import Contact from "./pages/userPages/Contact";
import PageNotFound from "./pages/userPages/PageNotFound";
// import SignInPage from "./pages/SignInPage/SignInPage";
import UserLogin from "./pages/userPages/authPages/UserLogin";
import UserSignup from "./pages/userPages/authPages/UserSignup";
import Homepage1 from "./components/Homepage/Homepage1";
import SellerDashboard from "./pages/sellerPages/SellerDashboard";
import Products from "./pages/userPages/Products";
import SellerSignup from "./pages/sellerPages/SellerLogin";
import { Toaster } from "react-hot-toast";


function App() {


  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UserRoutes><Homepage1 /></UserRoutes>} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/register" element={<UserSignup />} />
              <Route
                path="/home"
                element={
                  <UserRoutes>
                    <Home />
                  </UserRoutes>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<h1>cart</h1>} />
              <Route path="/checkout" element={<h1>checkout</h1>} />
              <Route path="/products" element={<Products   />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route
                path="/terms-and-conditions"
                element={<h1>terms page</h1>}
              />
              {/* seller routes  */}
              <Route
                path="/seller/register"
                element={<SellerSignup />}
              />
              <Route path="/seller/login" element={<h1>seller login</h1>} />
              <Route path="/seller/dashboard" element={<SellerRoutes><SellerDashboard /></SellerRoutes>} />


              {/* admin routes  */}
              <Route path="/seller/dashboard" element={<SuperAdminRoutes><SellerDashboard /></SuperAdminRoutes>} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
      

      <Toaster />

    </>
  );
}

export default App;

const UserRoutes = ({ children }) => {
  const  currentUser = useSelector((data)=> data?.userData?.userRole)
  if (currentUser === "USER") {
    return children;
  }
  return <PageNotFound />
};

const SellerRoutes = ({ children }) => {
  const  currentUser = useSelector((data)=> data?.userData?.userRole)
  if (currentUser === "SELLER") {
    return children;
  }
  return <PageNotFound />
};

const SuperAdminRoutes = ({ children }) => {
  const  currentUser = useSelector((data)=> data?.userData?.userRole)

  if (currentUser === "ADMIN") {
    return children;
  }
  return <PageNotFound />;
};
