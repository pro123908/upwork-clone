import React from "react";
import Footer from "../../components/Footer/Footer";
import Trusted from "../../components/HomePage/Trusted";
import GoogleButton from "../../components/Misc/GoogleButton/GoogleButton";
import InputWithButton from "../../components/Misc/InputWithButton/InputWithButton";
import OrLine from "../../components/Misc/OrLine/OrLine";
import Navbar from "../../components/Navbar";

export const SignUp = () => {
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
          />
        </div>
      </div>

      <Trusted />
      <Footer />
    </>
  );
};
