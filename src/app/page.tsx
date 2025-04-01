"use client";
import { Container, Typography } from "@mui/material";
import { useLanguageContext } from "./context/LanguageContext";

export default function Home() {
  const { language } = useLanguageContext();
  return (
    <Container>
      <Typography variant="h4">
        {language === "en" ? "Welcome to my website" : "به وبسایت من خوش آمدید"}
      </Typography>
    </Container>
  );
}
