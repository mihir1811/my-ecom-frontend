import { useState } from "react";
import "./App.css";
import ThemeProvider from "./ThemeProvider";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import SignInPage from "./pages/SignInPage/SignInPage";
import UserLogin from "./pages/authPages/UserLogin";

function App() {
  const [userRole, setUserRole] = useState("user");

  const [currentUser, setCurrentUser] = useState({
    name: "tony",
    nickname: "ironman",
    role: "seller",
  });

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<h1>home</h1>} />
              <Route path="/seller/register" element={<h1>new seller register</h1>} />
              <Route path="/seller/login" element={<h1>new seller login</h1>} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/register" element={<h1>register</h1>} />
              <Route
                path="/home"
                element={
                  <UserRoutes>
                    <Home />
                  </UserRoutes>
                }
              />
              <Route path="/sell-in" element={<SignInPage />} />
              {/* <Route path="/signup" element={<h1>Sign up</h1>} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<PageNotFound />} />
              {/* This line should be at the end */}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

const UserRoutes = ({ children }) => {
  return children;
};

const SellerRoutes = ({ children }) => {
  if (currentUser.role === "") {
  }
  return children;
};
const SuperAdmin = ({ children }) => {
  if (currentUser.role === "") {
  }
  return children;
};
