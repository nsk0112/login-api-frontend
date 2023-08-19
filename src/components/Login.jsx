import React from "react";
import "./Login.scss";
// import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resMessage, setResMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const navigateToAcc = () => {
      navigate("/account", {
        state: {
            name: 'Programming Fields',
            message: 'Message from home component',
        },
    });

    
  };

  const changePassVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userLogin = () => {
    if ((username, password)) {
      axios
        .post(`http://localhost:3000/api/login`, {
          username: username,
          password: password,
        })
        .then((response) => {
          console.log(response.data.message);
          setResMessage(response.data.message);

          // navigateToAcc();

          // navigate("/account");
        });
    }
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="navbar">
        <h1>Login API</h1>
        <div className="links">
          <Link to="/signup">Signup</Link>
        </div>
      </div>

      <div className="main">
        <h1>Log In</h1>
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="vis-button" onClick={changePassVisibility}>
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
          <button onClick={userLogin} className="login-button">
            Log In
          </button>
        </div>
        <div className="res-message">
          <h2>{resMessage}</h2>
          {/* <progress id="file" value="32" max="100"> 32% </progress> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
