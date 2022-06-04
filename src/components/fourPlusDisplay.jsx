import React from "react";

export default function FourPlusDisplay({
  nowServing,
  // SetFourPlusDisplay,
  // fourPlusLastDisplayed,
  // SetFourPlusLastDisplayed,
  // fourPlusDisplay,
}) {
  if (!nowServing) {
    console.log("empty");
    // SetFourPlusDisplay(fourPlusLastDisplayed);
    return (
      <div>
        <p>4+ pax</p>
        <p>Vacant</p>
      </div>
    );
  } else {
    console.log(nowServing);
    const nowDisplay = nowServing.queueNumber;
    console.log(nowDisplay);
    // SetFourPlusLastDisplayed(fourPlusDisplay);
    // SetFourPlusDisplay(nowDisplay);

    return (
      <div>
        <p>4+ pax</p>
        <p>{nowDisplay}</p>
      </div>
    );
  }
}
