import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

const GroupedButtons = () => {
  const [counter, setCounter] = useState(0);

  const handleOrder = async () => {
    console.log("order: ", counter);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const displayCounter = counter > 0;

  return (
    <>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayCounter && <Button onClick={handleDecrement}>-</Button>}
        {displayCounter && <Button disabled>{counter}</Button>}
        <Button onClick={handleIncrement}>+</Button>
      </ButtonGroup>
      <Button onClick={handleOrder}>Order</Button>
    </>
  );
};

export default GroupedButtons;
