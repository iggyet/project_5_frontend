import React, { useEffect } from "react";
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
    const firstTen = oneToTwoPaxStaffList.slice(0, 10);
    const tenOnwards = oneToTwoPaxStaffList.slice(10);
    const firstTenModifiedData = firstTen.map((list, index) => ({
      id: list.id,
      restaurantId: list.restaurantId,
      name: list.name,
      contactNumber: list.contactNumber,
      queueStatus: list.queueStatus,
      takenAt: list.takenAt,
      estimatedAvailableTime: sortedTables[index].estimatedToBeAvailableAt,
    }));
    const tenOnwardsModifiedData = tenOnwards.map((list, index) => ({
      id: list.id,
      restaurantId: list.restaurantId,
      name: list.name,
      contactNumber: list.contactNumber,
      queueStatus: list.queueStatus,
      takenAt: list.takenAt,
      estimatedAvailableTime: 45,
    }));
    const modifiedData = [...firstTenModifiedData, ...tenOnwardsModifiedData];
    // console.log("THIS IS THE THING");
    // const queueId = 2;
    // let estimatedTimeForQueueId;

    // for (let i = 0; i < modifiedData.length; i += 1) {
    //   console.log("console log sandwich");
    //   console.log(modifiedData[i].id === queueId);
    //   console.log(modifiedData[i].estimatedAvailableTime);
    //   console.log("console log sandwich");
    //   if (modifiedData[i].id === queueId)
    //     estimatedTimeForQueueId = modifiedData[i].estimatedAvailableTime;
    // }
    useEffect(() => {
      const queueId = 2;
      let estimatedTimeForQueueId;

      for (let i = 0; i < modifiedData.length; i += 1) {
        if (modifiedData[i].id === queueId)
          estimatedTimeForQueueId = modifiedData[i].estimatedAvailableTime;
        console.log(modifiedData[i].id === queueId);
        console.log(modifiedData[i].estimatedAvailableTime);
        console.log(estimatedTimeForQueueId);
      }
    }, []);
    // console.log(estimatedTimeForQueueId);
    console.log("YA SAME");
    const modModData = modifiedData.map((content) => {
      console.log("printing content");
      console.log(content);
      return <OneTwoDisplayStaff nowServing={content} key={content.id} />;
    });
    return <div>{modModData}</div>;
  }
}
