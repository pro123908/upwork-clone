import React from "react";
import { Link } from "react-router-dom";

const InputWithButton = ({
  placeholder,
  buttonText,
  showButton = true,
  iconClass = "fas fa-user",
  route,
  inputValue,
  setInputValue,
}) => {
  return (
    <>
      <div className="upwork-inputWithButton">
        <i className={`${iconClass} icon-green`}></i>
        <input
          type="email"
          className="input upwork-inputWithButton__input"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
