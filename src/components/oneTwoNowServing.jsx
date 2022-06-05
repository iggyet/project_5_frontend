import React from "react";
import OneTwoDisplay from "./oneTwoDisplay";

export default function OneTwoNowServing({
  oneToTwoPaxList,
  // oneTwoDisplay,
  // SetOneTwoDisplay,
  // oneTwoLastDisplayed,
  // SetOneTwoLastDisplayed,
}) {
  if (oneToTwoPaxList === 0) {
    console.log("empty");
    return (
      <div>
        <OneTwoDisplay
          nowServing={""}
          // oneTwoDisplay={oneTwoDisplay}
          // SetOneTwoDisplay={SetOneTwoDisplay}
          // oneTwoLastDisplayed={oneTwoLastDisplayed}
          // SetOneTwoLastDisplayed={SetOneTwoLastDisplayed}
        />
      </div>
    );
  } else {
    const firstOne = oneToTwoPaxList.slice(0, 1);
    const modifiedData = firstOne.map((list) => ({
      queueNumber: list.id,
    }));
    const modModData = modifiedData.map((content) => (
      <OneTwoDisplay
        nowServing={content}
        key={content.toString()}
        // oneTwoDisplay={oneTwoDisplay}
        // SetOneTwoDisplay={SetOneTwoDisplay}
        // oneTwoLastDisplayed={oneTwoLastDisplayed}
        // SetOneTwoLastDisplayed={SetOneTwoLastDisplayed}
      />
    ));
    return <div>{modModData}</div>;
  }
}
