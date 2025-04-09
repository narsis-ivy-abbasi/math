"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "../app/context/ThemeContext";
const Footer = () => {
  const { darkMode } = useThemeContext();
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        width: "100%",
        marginTop: 4,
        boxShadow: darkMode
          ?   "0px 2px 4px rgba(0, 0, 0, 0.7)"
          :"0px 2px 4px rgba(255, 255, 255, 0.7)"
      }}
    >
      <Typography variant="body2">
        @{new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
