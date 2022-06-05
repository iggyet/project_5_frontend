import axios from "axios";
import React, { useState } from "react";

export default function WaitingListsHome() {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";
  const handleChangeContactnumber = (event) => {
    // Retrieve input field value from JS event object.
    const inputCN = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputCN);
    // Set the value stored in component state to be the new value.
    SetContactnumber(inputCN);
  };

  const handleChangeName = (event) => {
    // Retrieve input field value from JS event object.
    const inputName = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputName);
    // Set the value stored in component state to be the new value.
    SetName(inputName);
  };

  const [number, SetNumber] = useState(1);
  const [name, SetName] = useState([]);
  const [contactnumber, SetContactnumber] = useState([]);

  const createQueue = () => {
    if (number === 1 || number === 2) {
      axios
        .post(`${BACKEND_URL}/oneTwoCreateQueue`, {
          name: name,
          contactnumber: contactnumber,
          tablefor: 2,
          groupsize: number,
        })
        .then((result) => {
          console.log(result);
          console.log("1-2 q created");
        });
    }
    if (number === 3 || number === 4) {
      axios
        .post(`${BACKEND_URL}/threeFourCreateQueue`, {
          name: name,
          contactnumber: contactnumber,
          // groupsize: number,
        })
        .then((result) => {
          console.log(result);
          console.log("3-4 q created");
        });
    }
    if (number > 4) {
      axios
        .post(`${BACKEND_URL}/fourPlusCreateQueue`, {
          name: name,
          contactnumber: contactnumber,
          // tablefor: 6,
          groupsize: number,
        })
        .then((result) => {
          console.log(result);
          console.log("4+ q created");
        });
    }
  };

  function decrement() {
    if (number > 1) {
      SetNumber(number - 1);
    }
  }

  function increment() {
    if (number < 10) {
      SetNumber(number + 1);
    }
  }

  return (
    <div className="container">
      <h1>Number of People</h1>
      <div className="card">
        <button onClick={decrement}>-</button>
        <h2 id="root">{number}</h2>
        <button onClick={increment}>+</button>
        <div>Name</div>
        <input value={name} onChange={handleChangeName} />
        <div>Contact Number</div>
        <input value={contactnumber} onChange={handleChangeContactnumber} />
        <button type="button" onClick={createQueue}>
          TAKE MY QUEUE NUMBER
        </button>
      </div>
    </div>
  );
}
