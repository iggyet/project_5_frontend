import axios from "axios";
/* eslint-disable react/prop-types */

import React from "react";
// eslint-disable-next-line
export default function AvailableTables({ availableTables }) {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";

  const updateOccupied = (element) => {
    const requestBody = {};
    requestBody.value = element.currentTarget.value;

    console.log(element);
    console.log(element.currentTarget.value);
    axios.post(`${BACKEND_URL}/updateOccupied`, requestBody).then((result) => {
      console.log("yay");
    });
  };

  const updateAvailable = (element) => {
    const requestBody = {};
    requestBody.value = element.currentTarget.value;
    console.log(element);
    console.log(element.currentTarget.value);
    axios.post(`${BACKEND_URL}/updateAvailable`, requestBody).then((result) => {
      console.log("yay");
    });
  };

  return (
    <div className="col-sm">
      <div className="tablesList">
        {availableTables.map((availableTable) => (
          <div key={availableTable.id}>
            <h3>Table {availableTable.tableNumber}</h3>
            <p>Table Capacity: {availableTable.tableCapacity}</p>
            <p>Combinability: {availableTable.combinability}</p>
            <p>Status: {availableTable.status}</p>
            <p>Occupied at: {availableTable.occupiedAt}</p>
            <p>
              Estimated to be Available at:{" "}
              {availableTable.estimatedToBeAvailableAt}{" "}
            </p>
            <p>Available at: {availableTable.availableAt} </p>
            <button
              type="button"
              value={availableTable.id}
              onClick={updateOccupied}
            >
              Occupied
            </button>
            <button
              type="button"
              value={availableTable.id}
              onClick={updateAvailable}
            >
              Available
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
