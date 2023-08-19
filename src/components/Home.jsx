import React from "react";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="main-div">
      <div className="navbar">
        <h1>Login API</h1>
      </div>
      {/* <Navbar /> */}

      <div className="page">
        <h1>Welcome</h1>
        <div className="links">
          <div className="link">
            <h2>Already have an account:</h2>
            <Link to="/login">Login</Link>
          </div>
          <div className="link">
            <h2>Don't have an account:</h2>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="navbar">
    //       <h1>Login API</h1>
    //       <div className="links">
    //         <Link to="/login">Login</Link>
    //         <a href="">Signup</a>
    //       </div>
    //     </div>
    // </div>
  );
}

export default Home;
