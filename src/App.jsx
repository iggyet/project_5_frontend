import React, { useState } from "react";
import axios from "axios";

import AvailableTables from "./components/availableTables";
import AvailableTwoTables from "./components/availableTwoTables";
import AvailableFourTables from "./components/availableFourTables";
import WaitingListsHome from "./components/waitingListsHome";
import OneTwoNowServing from "./components/oneTwoNowServing";
import ThreeFourNowServing from "./components/threeFourNowServing";
import FourPlusNowServing from "./components/fourPlusNowServing";
import OneTwoNowServingStaff from "./components/oneTwoNowServingStaff";
import ThreeFourNowServingStaff from "./components/threeFourNowServingStaff";
import FourPlusNowServingStaff from "./components/fourPlusNowServingStaff";
// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";

function App() {
  const [availableTables, SetAvailableTables] = useState([]);
  const [availableTwoTables, SetAvailableTwoTables] = useState([]);
  const [availableFourTables, SetAvailableFourTables] = useState([]);
  const [email, SetEmail] = useState([]);
  const [password, SetPassword] = useState([]);
  const [oneToTwoPaxList, SetOneToTwoPaxList] = useState([]);
  const [threeToFourPaxList, SetThreeToFourPaxList] = useState([]);
  const [moreThanFourPaxList, SetMoreThanFourPaxList] = useState([]);
  const [oneToTwoPaxStaffList, SetOneToTwoPaxStaffList] = useState([]);
  const [threeToFourPaxStaffList, SetThreeToFourPaxStaffList] = useState([]);
  const [moreThanFourPaxStaffList, SetMoreThanFourPaxStaffList] = useState([]);
  //  const [oneTwoDisplay, SetOneTwoDisplay] = useState("A1");
  //   const [oneTwoLastDisplayed, SetOneTwoLastDisplayed] = useState("A1");
  //   const [threeFourDisplay, SetThreeFourDisplay] = useState("B1");
  //   const [threeFourLastDisplayed, SetThreeFourLastDisplayed] = useState("B1");
  //   const [fourPlusDisplay, SetFourPlusDisplay] = useState("C1");
  //   const [fourPlusLastDisplayed, SetFourPlusLastDisplayed] = useState("C1");

  const getLists = () => {
    console.log("called");
    axios.get(`${BACKEND_URL}/getOneTwoLists`).then((result) => {
      // console.log(result);
      if (result.data.rows.length === 0) {
        // you don't have people waiting in this
        console.log("1-2 is empty");
        SetOneToTwoPaxList(0);
      } else {
        // you have people waiting in this category
        console.log(`1-2 result data rows is: ${result.data.rows}`);
        SetOneToTwoPaxList(result.data.rows);
        console.log("1-2 done");
      }
    });
    axios.get(`${BACKEND_URL}/getThreeFourLists`).then((result) => {
      console.log(result);
      // SetThreeToFourPaxList(result.data.threeFourLists);
      if (result.data.rows.length === 0) {
        // you don't have people waiting in this
        console.log("3-4 is empty");
        SetThreeToFourPaxList(0);
      } else {
        // you have people waiting in this category
        console.log(`3-4 result data rows is: ${result.data.rows}`);
        SetThreeToFourPaxList(result.data.rows);
        console.log("3-4 done");
      }
    });
    axios.get(`${BACKEND_URL}/getFourPlusLists`).then((result) => {
      console.log(result);
      // SetMoreThanFourPaxList(result.data.fourPlusLists);
      if (result.data.rows.length === 0) {
        // you don't have people waiting in this
        console.log("4+ is empty");
        SetMoreThanFourPaxList(0);
      } else {
        // you have people waiting in this category
        console.log(`4+ result data rows is: ${result.data.rows}`);
        SetMoreThanFourPaxList(result.data.rows);
        console.log("4+ done");
      }
    });
    // SetNowServing({ oneToTwoPaxList, threeToFourPaxList, moreThanFourPaxList });
    // console.log(`now serving value ${nowServing}`);
  };

  const getStaffLists = () => {
    console.log("called");
    axios.get(`${BACKEND_URL}/getOneTwoStaffLists`).then((result) => {
      // console.log(result);
      if (result.data.rows.length === 0) {
        // you don't have people waiting in this
        console.log("1-2 is empty");
        SetOneToTwoPaxStaffList(0);
      } else {
        // you have people waiting in this category
        console.log(`1-2 result data rows is: ${result.data.rows}`);
        SetOneToTwoPaxStaffList(result.data.rows);
        console.log("1-2 done");
      }
    });
    axios.get(`${BACKEND_URL}/getThreeFourStaffLists`).then((result) => {
      console.log(result);
      // SetThreeToFourPaxList(result.data.threeFourLists);
      if (result.data.rows.length === 0) {
        // you don't have people waiting in this
        console.log("3-4 is empty");
        SetThreeToFourPaxStaffList(0);
      } else {
        // you have people waiting in this category
        console.log(`3-4 result data rows is: ${result.data.rows}`);
        SetThreeToFourPaxStaffList(result.data.rows);
        console.log("3-4 done");
      }
    });
    axios.get(`${BACKEND_URL}/getFourPlusStaffLists`).then((result) => {
      console.log(result);
      // SetMoreThanFourPaxList(result.data.fourPlusLists);
      if (result.data.rows.length === 0) {
        // you don't have people waiting in this
        console.log("4+ is empty");
        SetMoreThanFourPaxStaffList(0);
      } else {
        // you have people waiting in this category
        console.log(`4+ result data rows is: ${result.data.rows}`);
        SetMoreThanFourPaxStaffList(result.data.rows);
        console.log("4+ done");
      }
    });
  };

  const getAvailableTables = () => {
    axios.get(`${BACKEND_URL}/availabletables`).then((result) => {
      console.log(`available table result data rows: ${result.data.rows}`);
      SetAvailableTables(result.data.availableTables);
    });
  };

  const getAvailableTwoTables = () => {
    axios.get(`${BACKEND_URL}/availableTwoTables`).then((result) => {
      console.log(`available table result data rows: ${result.data.rows}`);
      SetAvailableTwoTables(result.data.availableTwoTables);
    });
  };

  const getAvailableFourTables = () => {
    axios.get(`${BACKEND_URL}/availableFourTables`).then((result) => {
      console.log(`available table result data rows: ${result.data.rows}`);
      SetAvailableFourTables(result.data.availableFourTables);
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

  // const check = () => {
  //   console.log(moreThanFourPaxList);
  //   if (moreThanFourPaxList === 5) {
  //     return <div>WORKED BABY</div>;
  //   }
  // };
  // const getTwoAndFourTables = () => {
  //   getAvailableTwoTables();
  //   getAvailableFourTables();
  // };

  return (
    <div className="container">
      <div className="row">
        <h1 className="page-title">Wow Shopping!</h1>
        <AvailableTables availableTables={availableTables} />
        <AvailableTwoTables
          availableTwoTables={availableTwoTables}
          oneToTwoPaxStaffList={oneToTwoPaxStaffList}
        />
        <AvailableFourTables availableFourTables={availableFourTables} />
        {availableTables.length === 0 && (
          <div>
            <button
              type="button"
              onClick={() => {
                getAvailableTables();
                getAvailableTwoTables();
                getAvailableFourTables();
              }}
            >
              Get 2-4 and total Tables
            </button>
            {/* <button type="button"    onClick={getAvailableTables}>
            Get Tables
          </button> */}
          </div>
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
          <button onClick={getLists}>GET DINER LISTS</button>
          <button onClick={getStaffLists}>GET STAFF LISTS</button>
          {/* <OneTwoNowServingStaff oneToTwoPaxStaffLis t={oneToTwoPaxStaffList}/> */}
          <ThreeFourNowServingStaff
            threeToFourPaxStaffList={threeToFourPaxStaffList}
          />
          <FourPlusNowServingStaff
            moreThanFourPaxStaffList={moreThanFourPaxStaffList}
          />
          <OneTwoNowServing
            oneToTwoPaxList={oneToTwoPaxList}
            // oneTwoDisplay={oneTwoDisplay}
            // SetOneTwoDisplay={SetOneTwoDisplay}
            // oneTwoLastDisplayed={oneTwoLastDisplayed}
            // SetOneTwoLastDisplayed={SetOneTwoLastDisplayed}
          />
          <ThreeFourNowServing
            threeToFourPaxList={threeToFourPaxList}
            // threeFourDisplay={threeFourDisplay}
            // SetThreeFourDisplay={SetThreeFourDisplay}
            // threeFourLastDisplayed={threeFourLastDisplayed}
            // SetThreeFourLastDisplayed={SetThreeFourLastDisplayed}
          />
          <FourPlusNowServing
            moreThanFourPaxList={moreThanFourPaxList}
            // SetFourPlusDisplay={SetFourPlusDisplay}
            // fourPlusLastDisplayed={fourPlusLastDisplayed}
            // SetFourPlusLastDisplayed={SetFourPlusLastDisplayed}
            // fourPlusDisplay={fourPlusDisplay}
          />
          {/* <button type="button" onClick={check}>
            CHECK
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;

//  <Button
//  onClick={() => {
//    getAvailableTables();
//    getAvailableTwoTables();
//    getAvailableFourTables();
//  }}
//  >
//    Cancel
//  </Button>;
