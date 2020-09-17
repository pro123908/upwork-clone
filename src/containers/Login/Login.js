import React from "react";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar";

const login = () => {
  return (
    <>
      <Navbar />
      <div className="upwork-login">
        <div className="upwork-login__box">
          <div className="upwork-login__box-upper">
            <div className="upwork-login__heading">Log in and get to work</div>
            <div className="upwork-login__input-container">
              <i class="fas fa-user icon-green"></i>
              <input
                type="email"
                className="input upwork-login__input"
                placeholder="Username or Email"
              />
            </div>
            <button className="button green-button upwork-login__button-continue">
              Continue
            </button>
            <div className="upwork-login__or">
              <div className="upwork-login__or-line"></div>
              <div className="upwork-login__or-text">or</div>
              <div className="upwork-login__or-line"></div>
            </div>
            <button className="button upwork-login__button-google google-button">
              <i className="fab fa-google google-button__icon"></i>
              <span className="google-button__text">Sign In with Google</span>
            </button>
            <button className="button upwork-login__button-apple apple-button">
              <i className="fab fa-apple apple-button__icon"></i>

              <span className="apple-button__text">Sign in with Apple</span>
            </button>
          </div>

          <div className="upwork-login__box-bottom">
            <div className="upwork-login__or mb-3">
              <div className="upwork-login__or-line upwork-login__or-line--2"></div>
              <div className="upwork-login__or-text">New to Upwork?</div>
              <div className="upwork-login__or-line upwork-login__or-line--2"></div>
            </div>
            <button className="button white-button upwork-login__button-sign-up">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default login;
