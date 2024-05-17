import React, { useState } from "react";
import { FaFacebookF, FaUser, FaGoogle, FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

import "./signin.css";

const SignInPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <div className="flex justify-center items-center">
                <FaUser />
              </div>
              <input type="text" placeholder="Username" autoComplete="" />
            </div>
            <div className="input-field">
              <div className="flex justify-center items-center">
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
        
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
          
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <div className="flex justify-center items-center">
                <FaUser />
              </div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <div className="flex justify-center items-center">
                <FaEnvelope />
              </div>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <div className="flex justify-center items-center">
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              {/* <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
              {/* <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New to our community ?</h3>
            <p>
              Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img
            src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches
              our shared experiences. Let's continue this journey together!
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
