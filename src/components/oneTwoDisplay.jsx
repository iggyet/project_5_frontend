import React from "react";

export default function OneTwoDisplay({
  nowServing,
  // oneTwoDisplay,
  // SetOneTwoDisplay,
  // oneTwoLastDisplayed,
  // SetOneTwoLastDisplayed,
}) {
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
    const nowDisplay = nowServing.queueNumber;
    console.log(nowDisplay);
    // SetOneTwoLastDisplayed(oneTwoDisplay);
    // SetOneTwoDisplay(nowDisplay);

    return (
      <div>
        <p>1-2 pax</p>
        <p>A{nowDisplay}</p>
      </div>
    );
  }
}
