import React from "react";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar";

const login = () => {
  return (
    <div className="upwork-login">
      <Navbar />
      <div className="upwork-login__box">
        <div className="upwork-login__heading">Log in and get to work</div>

        <input
          type="email"
          className="input upwork-login__input"
          placeholder="Username or Email"
        />
      </div>
      <Footer />
    </div>
  );
};

export default login;
