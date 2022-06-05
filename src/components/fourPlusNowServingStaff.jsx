import React from "react";
import FourPlusDisplayStaff from "./fourPlusDisplayStaff";

export default function FourPlusNowServingStaff({
  moreThanFourPaxStaffList,
  // oneTwoDisplay,
  // SetOneTwoDisplay,
  // oneTwoLastDisplayed,
  // SetOneTwoLastDisplayed,
}) {
  if (moreThanFourPaxStaffList === 0) {
    console.log("empty");
    return (
      <div>
        <FourPlusDisplayStaff
          nowServing={""}
          // oneTwoDisplay={oneTwoDisplay}
          // SetOneTwoDisplay={SetOneTwoDisplay}
          // oneTwoLastDisplayed={oneTwoLastDisplayed}
          // SetOneTwoLastDisplayed={SetOneTwoLastDisplayed}
        />
      </div>
    );
  } else {
    // const firstOne = moreThanFourPaxStaffList.slice(0, 1);
    const modifiedData = moreThanFourPaxStaffList.map((list) => ({
      id: list.id,
      restaurantId: list.restaurantId,
      name: list.name,
      contactNumber: list.contactNumber,
      queueStatus: list.queueStatus,
      takenAt: list.takenAt,
    }));
    const modModData = modifiedData.map((content) => {
      console.log("printing content");
      console.log(content);
      return (
        <FourPlusDisplayStaff
          nowServing={content}
          key={content.id}
          // oneTwoDisplay={oneTwoDisplay}
          // SetOneTwoDisplay={SetOneTwoDisplay}
          // oneTwoLastDisplayed={oneTwoLastDisplayed}
          // SetOneTwoLastDisplayed={SetOneTwoLastDisplayed}
        />
      );
    });
    return <div>{modModData}</div>;
  }
}
