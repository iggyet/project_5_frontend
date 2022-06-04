import React from "react";
import ThreeFourDisplay from "./threeFourDisplay";

export default function ThreeFourNowServing({
  threeToFourPaxList,
  // threeFourDisplay,
  // SetThreeFourDisplay,
  // threeFourLastDisplayed,
  // SetThreeFourLastDisplayed,
}) {
  if (threeToFourPaxList === 0) {
    console.log("empty");
    return (
      <div>
        <ThreeFourDisplay
          nowServing={""}
          // threeFourDisplay={threeFourDisplay}
          // SetThreeFourDisplay={SetThreeFourDisplay}
          // threeFourLastDisplayed={threeFourLastDisplayed}
          // SetThreeFourLastDisplayed={SetThreeFourLastDisplayed}
        />
      </div>
    );
  } else {
    const firstOne = threeToFourPaxList.slice(0, 1);
    const modifiedData = firstOne.map((list) => ({
      queueNumber: list.queueNumber,
    }));
    const modModData = modifiedData.map((content) => (
      <ThreeFourDisplay
        nowServing={content}
        key={content.toString()}
        // threeFourDisplay={threeFourDisplay}
        // SetThreeFourDisplay={SetThreeFourDisplay}
        // threeFourLastDisplayed={threeFourLastDisplayed}
        // SetThreeFourLastDisplayed={SetThreeFourLastDisplayed}
      />
    ));
    return <div>{modModData}</div>;
  }
}
