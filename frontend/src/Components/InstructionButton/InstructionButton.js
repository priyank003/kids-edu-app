import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "@mui/material";

function InstructionButton({ handleClick, handlePaused }) {
  console.log(handleClick);
  return (
    <div>
      <IconButton onClick={handleClick} style={{ borderRadius: "25px" }}>
        {" "}
        <VolumeUpIcon />{" "}
      </IconButton>
      <IconButton
        onClick={handlePaused}
        style={{ borderRadius: "25px", marginLeft: "10px" }}
      >
        <PauseIcon />
      </IconButton>
    </div>
  );
}

export default InstructionButton;
