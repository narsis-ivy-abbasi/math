"use client";
import AboutMe from "@/components/AboutMe";
import LessonCard from "@/components/LessonCard";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useLanguageContext } from "./context/LanguageContext";

export default function Home() {
  const { language } = useLanguageContext();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const lessons = [
    {
      title: {
        en: "IB Diploma",
        fa: "دیپلم IB",
      },
      description: {
        en: "Prepare for the IB Diploma with comprehensive math courses.",
        fa: "برای دیپلم IB با دوره‌های جامع ریاضی آماده شوید.",
      },
      image: "/1.jpg",
    },
    {
      title: {
        en: "From Basics to Advanced",
        fa: "از پایه تا پیشرفته",
      },
      description: {
        en: "Progressive learning from foundational concepts to advanced math skills.",
        fa: "یادگیری تدریجی از مفاهیم پایه تا مهارت‌های پیشرفته ریاضی.",
      },
      image: "/2.jpg",
    },
    {
      title: {
        en: "International Schools' Mathematics",
        fa: "ریاضی مدارس بین‌المللی",
      },
      description: {
        en: "Curriculum tailored for international schools, focusing on critical thinking and problem-solving.",
        fa: "برنامه درسی ویژه مدارس بین‌المللی با تمرکز بر تفکر انتقادی و حل مسئله.",
      },
      image: "/3.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section with Image */}
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundImage: "url(/header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 4,
            borderRadius: 2,
            color: "#fff",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {language === "en"
              ? "Welcome to my website"
              : "به وبسایت من خوش آمدید"}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {language === "en"
              ? "Struggling with Math? Let's Solve It Together!"
              : "با ریاضی مشکل داری؟ بیا با هم حلش کنیم"}
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            {language === "en" ? " Call Now!" : "!الان تماس بگیر"}
          </Button>
        </Box>
      </Box>

      {/* This is important! Keep Dialog outside of hero section */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {language === "en"
            ? "Feel free to call me for any math-related help!"
            : "با خیال راحت برای هرگونه کمک مربوط به ریاضی با من تماس بگیرید!"}
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", gap: 1, justifyContent: "center" }}
        >
          <PhoneIcon color="primary" />
          <Typography color="primary">0912 134 194</Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3 }}>
          <Button onClick={handleClose} color="primary">
            {language === "en" ? "Close" : "بستن"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Other Content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <AboutMe />

        <Grid
          container
          spacing={4}
          sx={{ mt: 10, justifyContent: { xs: "center", md: "space-between" } }}
        >
          {lessons.map((lesson, index) => (
            <LessonCard
              key={index}
              title={lesson.title[language]}
              description={lesson.description[language]}
              image={lesson.image}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
