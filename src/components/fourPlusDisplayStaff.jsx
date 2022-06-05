import React from "react";
import axios from "axios";

export default function FourPlusDisplayStaff({
  nowServing,
  // oneTwoDisplay,
  // SetOneTwoDisplay,
  // oneTwoLastDisplayed,
  // SetOneTwoLastDisplayed,
}) {
  if (!nowServing) {
    // SetOneTwoDisplay(oneTwoLastDisplayed);
    console.log("empty");
    return (
      <div>
        <p>4+ pax</p>
        <p>Vacant</p>
      </div>
    );
  } else {
    console.log(nowServing);
    const BACKEND_URL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";
    const deleting = (element) => {
      const requestBody = {};
      requestBody.value = element.currentTarget.value;

      console.log(element);
      console.log(element.currentTarget.value);
      axios
        .post(`${BACKEND_URL}/fourPlusDelete`, requestBody)
        .then((result) => {
          console.log("yay");
        });
    };
    const missed = (element) => {
      const requestBody = {};
      requestBody.value = element.currentTarget.value;

      console.log(element);
      console.log(element.currentTarget.value);
      axios
        .post(`${BACKEND_URL}/fourPlusMissed`, requestBody)
        .then((result) => {
          console.log("yay");
        });
    };
    // const nowDisplay = nowServing.queueNumber;
    // console.log(nowDisplay);
    // SetOneTwoLastDisplayed(oneTwoDisplay);
    // SetOneTwoDisplay(nowDisplay);

    return (
      <div>
        <p>Queue Number: C{nowServing.id}</p>
        <p>Name: {nowServing.name}</p>
        <p>Contact Number: {nowServing.contactNumber}</p>
        <p>Queue Status: {nowServing.queueStatus}</p>
        <p>Taken at: {nowServing.takenAt}</p>
        <button type="button" value={nowServing.id} onClick={deleting}>
          DELETE
        </button>
        <button type="button" value={nowServing.id} onClick={missed}>
          MISSED
        </button>
      </div>
    );
  }
}
