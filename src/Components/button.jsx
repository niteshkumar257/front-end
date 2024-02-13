import React from "react";
import { IoMdSend } from "react-icons/io";

const Button = ({buttonText,onClick}) => {
  return (
    <button className="send-button" onClick={onClick}>
      <span>{buttonText}</span>
      <IoMdSend />
    </button>
  );
};

export default Button;
