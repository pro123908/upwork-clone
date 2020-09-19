import React from "react";
import Footer from "../../components/Footer/Footer";
import InputWithButton from "../../components/Misc/InputWithButton/InputWithButton";
import Navbar from "../../components/Navbar";
import CheckboxWithText from "../../components/Misc/CheckboxWithText/CheckboxWithText";

const Password = () => {
  return (
    <>
      <Navbar />
      <div className="upwork-password">
        <div className="upwork-password__box">
          <div className="upwork-password__heading">Welcome</div>
          <div className="upwork-password__email">pro123908@gmail.com</div>
          <InputWithButton
            placeholder="Password"
            showButton={false}
            iconClass="fas fa-lock"
          />

          <div className="upwork-password__checkbox-forget">
            <CheckboxWithText />
            <span className="upwork-password__checkbox-forget__text">
              Forgot password?
            </span>
          </div>
          <button className="button green-button upwork-password__login-btn">
            Log in
          </button>

          <div className="upwork-password__not-you-text">Not you?</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Password;
