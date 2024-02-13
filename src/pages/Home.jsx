import React from "react";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/chat" style={{textDecoration:"none"}}>
        <button className="send-button btn-container">
            <span>Start Chat</span>
            <IoMdSend/>
        </button>
      </Link>
    </div>
  );
};

export default Home;
