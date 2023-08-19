import { useLocation } from "react-router-dom";
import React from "react";
import axios from "axios";

function Account() {
  const location = useLocation();
  console.log(location);

  const getUser = () => {
    axios.get(`http://localhost:3000/api/account`, { params: { answer: 42 } })
  }

  return <div>Account</div>;
}

export default Account;
