import React, { useState } from "react";
import axios from "axios";

import AvailableTables from "./components/availableTables";
// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";

function App() {
  const [availableTables, SetAvailableTables] = useState([]);
  const [email, SetEmail] = useState([]);
  const [password, SetPassword] = useState([]);

  const getAvailableTables = () => {
    axios.get(`${BACKEND_URL}/availabletables`).then((result) => {
      console.log(result);
      SetAvailableTables(result.data.availableTables);
    });
  };

  const handleChangeEmail = (event) => {
    // Retrieve input field value from JS event object.
    const inputEmail = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputEmail);
    // Set the value stored in component state to be the new value.
    SetEmail(inputEmail);
  };

  const handleChangePassword = (event) => {
    // Retrieve input field value from JS event object.
    const inputPassword = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputPassword);
    // Set the value stored in component state to be the new value.
    SetPassword(inputPassword);
  };

  const staffsLogin = () => {
    axios
      .post(`${BACKEND_URL}/staffsLogin`, {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        console.log("logged in");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="page-title">Wow Shopping!</h1>
        <AvailableTables availableTables={availableTables} />
        {availableTables.length === 0 && (
          <button type="button" onClick={getAvailableTables}>
            Get Tables
          </button>
        )}
        <input value={email} onChange={handleChangeEmail} />
        <div>E-mail</div>
        <input value={password} onChange={handleChangePassword} />
        <div>Password</div>
        <button type="button" onClick={staffsLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default App;
