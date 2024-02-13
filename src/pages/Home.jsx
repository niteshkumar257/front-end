import React from "react";
import { Link } from "react-router-dom";

import Button from "../Components/button";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/chat" style={{textDecoration:"none"}}>
        <Button className="btn-container" buttonText={"Start Chat"}/>
      </Link>
    </div>
  );
};

export default Home;
