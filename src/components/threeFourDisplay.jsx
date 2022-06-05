import React from "react";

export default function ThreeFourDisplay({
  nowServing,
  // threeFourDisplay,
  // SetThreeFourDisplay,
  // threeFourLastDisplayed,
  // SetThreeFourLastDisplayed,
}) {
  if (!nowServing) {
    // SetThreeFourDisplay(threeFourLastDisplayed);
    console.log("empty");
    return (
      <div>
        <p>3-4 pax</p>
        <p>Vacant</p>
      </div>
    );
  } else {
    console.log(nowServing);
    const nowDisplay = nowServing.queueNumber;
    console.log(nowDisplay);
    // SetThreeFourLastDisplayed(threeFourDisplay);
    // SetThreeFourDisplay(nowDisplay);

    return (
      <div>
        <p>3-4 pax</p>
        <p>B{nowDisplay}</p>
      </div>
    );
  }
}
