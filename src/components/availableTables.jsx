import axios from "axios";
import moment from "moment";
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line
export default function AvailableTables({ availableTables }) {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3010";
  console.log("available tables");
  console.log(availableTables);

  const [sortedTables, SetSortedTables] = useState([]);

  useEffect(() => {
    SetSortedTables(availableTables);
    console.log("sorted tables");
    console.log(sortedTables);
  }, []);

  const handleSort = () => {
    // console.log(availableTables);
    // SetSortedTables(availableTables);
    // console.log("sorting tables");
    const sortedData = [...availableTables].sort((a, b) => {
      return a.estimatedToBeAvailableAt > b.estimatedToBeAvailableAt ? 1 : -1;
    });
    SetSortedTables(sortedData);
    console.log(sortedTables);
    console.log(sortedData);
    // SetAvailableTables(sortedTables);
  };

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
      <button type="button" onClick={handleSort}>
        SORT TABLES
      </button>
      <div className="tablesList">
        {sortedTables.map((availableTable) => (
          <div key={availableTable.id}>
            <h3>Table {availableTable.tableNumber}</h3>
            <p>Table Capacity: {availableTable.tableCapacity}</p>
            <p>Combinability: {availableTable.combinability}</p>
            <p>Status: {availableTable.status}</p>
            <p>
              {" "}
              <p>
                {(() => {
                  switch (availableTable.occupiedAt) {
                    case null:
                      return (
                        <p>
                          Occupied at:
                          {availableTable.occupiedAt}
                        </p>
                      );
                    default:
                      return (
                        <p>
                          Occupied at:{" "}
                          {moment(availableTable.occupiedAt).format(
                            "DD/MM/YYYY h:mm:ss a"
                          )}{" "}
                        </p>
                      );
                  }
                })()}
              </p>
            </p>
            <p>
              {(() => {
                switch (availableTable.availableAt) {
                  case null:
                    return (
                      <p>
                        Available at:
                        {availableTable.availableAt}
                      </p>
                    );
                  default:
                    return (
                      <p>
                        Available at:{" "}
                        {moment(availableTable.availableAt).format(
                          "DD/MM/YYYY h:mm:ss a"
                        )}{" "}
                      </p>
                    );
                }
              })()}
            </p>
            <p>
              {" "}
              <p>
                {(() => {
                  switch (availableTable.estimatedToBeAvailableAt) {
                    case null:
                      return <p>Estimated to be Available at: Now </p>;
                    default:
                      return (
                        <p>
                          Estimated to be Available at:{" "}
                          {moment(
                            availableTable.estimatedToBeAvailableAt
                          ).format("DD/MM/YYYY h:mm:ss a")}{" "}
                        </p>
                      );
                  }
                })()}
              </p>
            </p>
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
