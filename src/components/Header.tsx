"use client";

import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";

import { useThemeContext } from "../app/context/ThemeContext";
import { useLanguageContext } from "@/app/context/LanguageContext";

const Header = () => {
  const { toggleTheme, darkMode } = useThemeContext();
  const { toggleLanguage, language } = useLanguageContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {language === "en" ? "My Website" : "وبسایت من"}
        </Typography>
        <Button color="inherit" onClick={toggleLanguage}>
          {language === "en" ? "فارسی" : "English"}
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? "dark" : "light"}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
