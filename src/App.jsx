import React, { useState } from "react";
import axios from "axios";

import AvailableTables from "./components/availableTables";
import WaitingListsHome from "./components/waitingListsHome";
// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3008";

function App() {
  const [availableTables, SetAvailableTables] = useState([]);
  const [email, SetEmail] = useState([]);
  const [password, SetPassword] = useState([]);
  const [oneToTwoPaxList, SetOneToTwoPaxList] = useState([]);
  const [threeToFourPaxList, SetThreeToFourPaxList] = useState([]);
  const [moreThanFourPaxList, SetMoreThanFourPaxList] = useState([]);

  const getLists = () => {
    console.log("called");
    axios.get(`${BACKEND_URL}/getOneTwoLists`).then((result) => {
      console.log(result);
      if (result.data.rows.length === 0) {
        // you don't have people waiting in this
        console.log("empty");
      } else {
        // you have people waiting in this category
        console.log(result.data.rows);
      }
      SetOneToTwoPaxList(result.data.oneTwoLists);
      console.log("1-2 done");
    });
    axios.get(`${BACKEND_URL}/getThreeFourLists`).then((result) => {
      console.log(result);
      SetThreeToFourPaxList(result.data.threeFourLists);
    });
    axios.get(`${BACKEND_URL}/getFourPlusLists`).then((result) => {
      console.log(result);
      SetMoreThanFourPaxList(result.data.fourPlusLists);
    });
  };

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
        <div>E-mail</div>
        <input value={email} onChange={handleChangeEmail} />
        <div>Password</div>
        <input value={password} onChange={handleChangePassword} />
        <button type="button" onClick={staffsLogin}>
          LOGIN
        </button>
        <div className="queue">
          <WaitingListsHome />
          <button onClick={getLists}>BRO CLICK DIS</button>
          <div>{oneToTwoPaxList}</div>
          <div>{threeToFourPaxList}</div>
          <div>{moreThanFourPaxList}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
