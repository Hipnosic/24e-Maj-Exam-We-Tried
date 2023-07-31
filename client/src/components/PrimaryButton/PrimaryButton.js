import React from "react";
import { Button } from "@mui/material";

const PrimaryButton = ({ children, onClick, variant = "outlined", sx }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        color: variant === "outlined" ? "#505155" : "#fff",
        backgroundColor: variant === "outlined" ? "transparent" : "#505155",
        border: variant === "outlined" ? "1px solid #505155" : "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#F07C29",
          color: "#fff",
          border: variant === "outlined" ? "1px solid #F07C29" : "none",
        },
        ...sx,
      }}
    >
      {children && children}
    </Button>
  );
};

export default PrimaryButton;
