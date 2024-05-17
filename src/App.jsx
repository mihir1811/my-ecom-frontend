import { useState } from "react";
import "./App.css";
import ThemeProvider from "./ThemeProvider";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
  const [userRole, setUserRole] = useState('buyer');4

  const [currentUser, setCurrentUser] = useState({
    name:"tony",
    nickname:"ironman",
    role:"seller",
  })

  return (
    <>
    <Provider store={store}> 
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller/dashboard" element={<ProtectedRoute allowedRoles={['seller']} user={currentUser}><h1>seller dashboard</h1></ProtectedRoute>} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<h1>Sign up</h1>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<PageNotFound />} /> {/* This line should be at the end */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;


const ProtectedRoute = ({ user, allowedRoles, children }) => {
  if (!user || !allowedRoles.includes(user.role)) {
      return <Navigate to="/signin" replace />;
  }
  return children;
};