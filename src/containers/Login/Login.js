import React from "react";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar";

const login = () => {
  return (
    <div className="upwork-login">
      <Navbar />
      <div className="upwork-login__box">
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

        <button className="button upwork-login__button-google google-button">
          <i className="fab fa-google google-button__icon"></i>
          <span className="google-button__text">Sign In with Google</span>
        </button>

        <button className="button upwork-login__button-apple apple-button">
          <i className="fab fa-apple apple-button__icon"></i>

          <span className="apple-button__text">Sign in with Apple</span>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default login;
