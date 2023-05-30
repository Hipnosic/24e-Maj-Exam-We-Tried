import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

const GroupedButtons = () => {
  const [counter, setCounter] = useState(0);

  const handleOrder = async () => {
    console.log("order: ", counter);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const displayCounter = counter > 0;

  return (
    <>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{counter}</Button>}
        {displayCounter && <Button onClick={handleDecrement}>-</Button>}
      </ButtonGroup>
      <Button onClick={handleOrder}>Order</Button>
    </>
  );
};

export default GroupedButtons;
