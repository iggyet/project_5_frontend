import React from "react";
import FourPlusDisplay from "./fourPlusDisplay";

export default function FourPlusNowServing({
  moreThanFourPaxList,
  // SetFourPlusDisplay,
  // fourPlusLastDisplayed,
  // SetFourPlusLastDisplayed,
  // fourPlusDisplay,
}) {
  if (moreThanFourPaxList === 0) {
    console.log("empty");
    return (
      <div>
        <FourPlusDisplay
          nowServing={""}
          // SetFourPlusDisplay={SetFourPlusDisplay}
          // fourPlusLastDisplayed={fourPlusLastDisplayed}
          // SetFourPlusLastDisplayed={SetFourPlusLastDisplayed}
          // fourPlusDisplay={fourPlusDisplay}
        />
      </div>
    );
  } else {
    const firstOne = moreThanFourPaxList.slice(0, 1);
    const modifiedData = firstOne.map((list) => ({
      queueNumber: list.id,
    }));
    const modModData = modifiedData.map((content) => (
      <FourPlusDisplay
        nowServing={content}
        key={content.toString()}
        // SetFourPlusDisplay={SetFourPlusDisplay}
        // fourPlusLastDisplayed={fourPlusLastDisplayed}
        // SetFourPlusLastDisplayed={SetFourPlusLastDisplayed}
        // fourPlusDisplay={fourPlusDisplay}
      />
    ));
    return <div>{modModData}</div>;
  }
}
