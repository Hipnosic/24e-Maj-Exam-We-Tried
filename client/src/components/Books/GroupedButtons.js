import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import FormDialog from "./orderDialog";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const GroupedButtons = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <ButtonGroup
        sx={{ mb: 1 }}
        size="small"
        aria-label="small outlined button group"
      >
        <PrimaryButton variant="contained" onClick={handleDecrement}>
          -
        </PrimaryButton>
        <Button disabled>{counter}</Button>
        <PrimaryButton variant="contained" onClick={handleIncrement}>
          +
        </PrimaryButton>
      </ButtonGroup>
      <FormDialog className="formDialog"></FormDialog>
    </>
  );
};

export default GroupedButtons;
