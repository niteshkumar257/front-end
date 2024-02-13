import React from "react";
import { IoMdSend } from "react-icons/io";

const Button = ({buttonText}) => {
  return (
    <button className="send-button">
      <span>{buttonText}</span>
      <IoMdSend />
    </button>
  );
};

export default Button;
