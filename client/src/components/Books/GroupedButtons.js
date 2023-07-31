import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import FormDialog from "./orderDialog"

const GroupedButtons = () => {
  const [counter, setCounter] = useState(0);

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
        {displayCounter && <Button variant="contained" onClick={handleDecrement}>-</Button>}
        {displayCounter && <Button disabled>{counter}</Button>}
        <Button variant="contained" onClick={handleIncrement}>+</Button>
      </ButtonGroup>
      <FormDialog className="formDialog"></FormDialog>
    </>
  );
};

export default GroupedButtons;
