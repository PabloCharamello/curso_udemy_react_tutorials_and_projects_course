import React from "react";

export const ToogleFunction = () => {
  const [stateCar, setStateCar] = React.useState(false);

  const encenderApagar = () => {
    setStateCar((prevValue) => !prevValue);
  };
  return (
    <div>
      <h2>El auto esta: {stateCar ? "Encendido" : "Apagado"}</h2>
      <button onClick={encenderApagar}>Encender/Apagar</button>
    </div>
  );
};
