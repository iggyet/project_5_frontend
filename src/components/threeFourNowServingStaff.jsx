import React from "react";
import ThreeFourDisplayStaff from "./threeFourDisplayStaff";

export default function ThreeFourNowServingStaff({
  threeToFourPaxStaffList,
  // oneTwoDisplay,
  // SetOneTwoDisplay,
  // oneTwoLastDisplayed,
  // SetOneTwoLastDisplayed,
}) {
  if (threeToFourPaxStaffList === 0) {
    console.log("empty");
    return (
      <div>
        <ThreeFourDisplayStaff
          nowServing={""}
          // oneTwoDisplay={oneTwoDisplay}
          // SetOneTwoDisplay={SetOneTwoDisplay}
          // oneTwoLastDisplayed={oneTwoLastDisplayed}
          // SetOneTwoLastDisplayed={SetOneTwoLastDisplayed}
        />
      </div>
    );
  } else {
    // const firstOne = threeToFourPaxStaffList.slice(0, 1);
    const modifiedData = threeToFourPaxStaffList.map((list) => ({
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
        <ThreeFourDisplayStaff
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
