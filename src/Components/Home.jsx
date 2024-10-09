import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>WELCOME TO OUR WEBSITE</h1>
          <h3>Loremnihil mollitia est quaerat ve laborum minus?</h3>
        </div>
        <Link to="/signup">
          <button>Join Now</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
