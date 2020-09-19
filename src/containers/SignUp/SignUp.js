import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import HireGuidelines from "../../components/HireGuidelines/HireGuidelines";
import Trusted from "../../components/HomePage/Trusted";
import GoogleButton from "../../components/Misc/GoogleButton/GoogleButton";
import InputWithButton from "../../components/Misc/InputWithButton/InputWithButton";
import OrLine from "../../components/Misc/OrLine/OrLine";
import Navbar from "../../components/Navbar";
import Registration from "../HOC/Registration";

const SignUp = ({
  email,
  setEmail,
  googleData,
  setGoogleData,
  googleResponseCallback,
}) => {
  return (
    <>
      <Navbar />
      <div className="upwork-sign-up">
        <div className="upwork-sign-up__box">
          <div className="upwork-sign-up__heading">Get your free account</div>
          <GoogleButton
            classes="upwork-sign-up__google-button"
            text="Continue with Google"
          />
          <OrLine />

          <InputWithButton
            placeholder="Work Email Address"
            buttonText="Continue with Email"
            route="/password"
            inputValue={email}
            setInputValue={setEmail}
          />
        </div>
      </div>

      <Trusted />
      <HireGuidelines />
      <Footer />
    </>
  );
};

export default Registration(SignUp);
