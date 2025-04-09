"use client";

import { useLanguageContext } from "@/app/context/LanguageContext";
import CalculateIcon from "@mui/icons-material/Calculate";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Moon, Sun } from "lucide-react"; // Import Lucide icons
import { useThemeContext } from "../app/context/ThemeContext";

const Header = () => {
  const { toggleTheme, darkMode } = useThemeContext();
  const { toggleLanguage, language } = useLanguageContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <CalculateIcon sx={{marginRight:1}} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {language === "en" ? "Math" : "ریاضی"}
        </Typography>
        <Button color="inherit" onClick={toggleLanguage}>
          <img
            src={language === "en" ? "flags/fa.png" : "flags/us.png"}
            alt="flag"
            width={36}
            height={36}
            loading="lazy"
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
