import React from "react";
import { Button } from "@mui/material";

const PrimaryButton = ({ title, onClick, variant = "outlined" }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        "& .MuiButton-root": {
          "& .MuiButton-text": {
            color: "red",
          },
        },
      }}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
