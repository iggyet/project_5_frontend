import React from "react";
import OneTwoDisplayStaff from "./oneTwoDisplayStaff";

export default function OneTwoNowServingStaff({
  oneToTwoPaxStaffList,
  // oneTwoDisplay,
  // SetOneTwoDisplay,
  // oneTwoLastDisplayed,
  // SetOneTwoLastDisplayed,
}) {
  if (oneToTwoPaxStaffList === 0) {
    console.log("empty");
    return (
      <div>
        <OneTwoDisplayStaff
          nowServing={""}
          // oneTwoDisplay={oneTwoDisplay}
          // SetOneTwoDisplay={SetOneTwoDisplay}
          // oneTwoLastDisplayed={oneTwoLastDisplayed}
          // SetOneTwoLastDisplayed={SetOneTwoLastDisplayed}
        />
      </div>
    );
  } else {
    // const firstOne = oneToTwoPaxStaffList.slice(0, 1);
    const modifiedData = oneToTwoPaxStaffList.map((list) => ({
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
        <OneTwoDisplayStaff
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
