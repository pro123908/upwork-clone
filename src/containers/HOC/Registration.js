import React, { useState } from "react";

const Registration = (AuthComponent) => {
  const UpdatedAuthComponent = (props) => {
    const [email, setEmail] = useState("");
    const [googleData, setGoogleData] = useState({});

    const googleResponseCallback = (googleData) => {
      setGoogleData(googleData);
    };
    return (
      <AuthComponent
        email={email}
        setEmail={setEmail}
        googleData={googleData}
        setGoogleData={setGoogleData}
        googleResponseCallback={googleResponseCallback}
        {...props}
      />
    );
  };

  return UpdatedAuthComponent;
};

export default Registration;
