import React from "react";

export const GetRandomIdComponent = () => {
  function getRandomId() {
    const userId = Math.floor(Math.random() * 100 + 1);
    return userId;
  }

  return (
    <div>
      <h2>{getRandomId()}</h2>
    </div>
  );
};
