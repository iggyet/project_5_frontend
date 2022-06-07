import React from "react";
import axios from "axios";
import moment from "moment";

export default function OneTwoDisplayStaff({ nowServing }) {
  if (!nowServing) {
    // SetOneTwoDisplay(oneTwoLastDisplayed);
    console.log("empty");
    return (
      <div>
        <p>1-2 pax</p>
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
      axios.post(`${BACKEND_URL}/oneTwoDelete`, requestBody).then((result) => {
        console.log("yay");
      });
    };
    const missed = (element) => {
      const requestBody = {};
      requestBody.value = element.currentTarget.value;

      console.log(element);
      console.log(element.currentTarget.value);
      axios.post(`${BACKEND_URL}/oneTwoMissed`, requestBody).then((result) => {
        console.log("yay");
      });
    };

    return (
      <div>
        <p>Queue Number: A{nowServing.id}</p>
        <p>Name: {nowServing.name}</p>
        <p>Contact Number: {nowServing.contactNumber}</p>
        <p>Queue Status: {nowServing.queueStatus}</p>
        <p>
          Taken at: {moment(nowServing.takenAt).format("DD/MM/YYYY h:mm:ss a")}
        </p>
        <p>
          {(() => {
            switch (nowServing.estimatedAvailableTime) {
              case null:
                return <p>Estimated Available Time: Now </p>;
              default:
                return (
                  <p>
                    Estimated to be Available at:{" "}
                    {moment(nowServing.estimatedAvailableTime).format(
                      "DD/MM/YYYY h:mm:ss a"
                    )}{" "}
                  </p>
                );
            }
          })()}
        </p>
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
