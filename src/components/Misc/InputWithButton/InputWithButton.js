import React from "react";
import { Link } from "react-router-dom";

const InputWithButton = ({
  placeholder,
  buttonText,
  showButton = true,
  iconClass = "fas fa-user",
  route,
}) => {
  return (
    <>
      <div className="upwork-inputWithButton">
        <i class={`${iconClass} icon-green`}></i>
        <input
          type="email"
          className="input upwork-inputWithButton__input"
          placeholder={placeholder}
        />
      </div>
      {showButton ? (
        <Link
          to={route}
          className="link button green-button upwork-inputWithButton__button"
        >
          {buttonText}
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default InputWithButton;
