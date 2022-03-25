import React from "react";
import GreenDot from "../components/green-dot/green-dot";
import capitalizeWord from "./capitalize";

const statusFormatter = (status) => {
  const capitalizedStatus = capitalizeWord(status);
  const isAvailable = capitalizedStatus === "Available";

  if (isAvailable) {
    return (
      <>
        <GreenDot />
        {capitalizedStatus}
      </>
    );
  }
  return capitalizedStatus;
};

export default statusFormatter;
