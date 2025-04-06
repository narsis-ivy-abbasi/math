"use client";

import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Sun, Moon } from "lucide-react"; // Import Lucide icons
import { useThemeContext } from "../app/context/ThemeContext";
import { useLanguageContext } from "@/app/context/LanguageContext";

const Header = () => {
  const { toggleTheme, darkMode } = useThemeContext();
  const { toggleLanguage, language } = useLanguageContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {language === "en" ? "Math" : "ریاضی" }
        </Typography>
        <Button color="inherit" onClick={toggleLanguage}>
          <img
            src={language === "en" ? "flags/fa.png" : "flags/us.png"}
            alt="flag"
            width={36}
            height={36}
          />
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
