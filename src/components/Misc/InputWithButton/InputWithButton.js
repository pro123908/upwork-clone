import React from "react";

const InputWithButton = ({ placeholder, buttonText }) => {
  return (
    <>
      <div className="upwork-inputWithButton">
        <i class="fas fa-user icon-green"></i>
        <input
          type="email"
          className="input upwork-inputWithButton__input"
          placeholder={placeholder}
        />
      </div>
      <button className="button green-button upwork-inputWithButton__button">
        {buttonText}
      </button>
    </>
  );
};

export default InputWithButton;
