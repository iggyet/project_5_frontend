import React from "react";
import OneTwoDisplayStaff from "./oneTwoDisplayStaff";

export default function OneTwoNowServingStaff({
  oneToTwoPaxStaffList,
  sortedTables,
}) {
  if (oneToTwoPaxStaffList === 0) {
    console.log("empty");
    return (
      <div>
        <OneTwoDisplayStaff nowServing={""} />
      </div>
    );
  } else {
    // const firstOne = oneToTwoPaxStaffList.slice(0, 1);
    const modifiedData = oneToTwoPaxStaffList.map((list, index) => ({
      id: list.id,
      restaurantId: list.restaurantId,
      name: list.name,
      contactNumber: list.contactNumber,
      queueStatus: list.queueStatus,
      takenAt: list.takenAt,
      estimatedAvailableTime: sortedTables[index].estimatedToBeAvailableAt,
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
