import React from "react";
import "./Signup.scss";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resMessage, setResMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const changePassVisibility = () => {
    setShowPassword(!showPassword);
  }

  const userSignup = () => {
    if ((username, name, lastname, phone, email, password)) {
      axios
        .post(`http://localhost:3000/api/signup`, {
          username: username,
          name: name,
          lastname: lastname,
          phone: phone,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          setResMessage(response.data.message);
        });
    }
  };

  return (
    <div className="main-div">
      {/* <Navbar></Navbar> */}
      <div className="navbar">
        <h1>Login API</h1>
        <div className="links">
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="main">
        <h1>Signup</h1>
        <div className="signup-form">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="vis-button" onClick={changePassVisibility}>
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
          <button onClick={userSignup} className="signup-button">
            Sign up
          </button>
        </div>
        <div className="res-message">
          <h2>{resMessage}</h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
