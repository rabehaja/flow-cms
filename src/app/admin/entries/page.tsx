"use client";
import { AccountCircle } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { MouseEventHandler, useState } from "react";

const Page = () => {
  return (
    <Box display="flex" flexDirection={"row"}>
      <Box sx={{ backgroundColor: "blue" }} minHeight="100vh" padding={1}>
        {" "}
        <Typography>left column</Typography>
      </Box>
      <Box flexGrow={1} sx={{ backgroundColor: "black" }} minHeight="100vh">
        <Typography>right column</Typography>
      </Box>
    </Box>
  );
};

export default Page;
