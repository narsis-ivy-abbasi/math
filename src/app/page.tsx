"use client";
import AboutMe from "@/components/AboutMe";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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
import LessonCard from "@/components/LessonCard";

export default function Home() {
  const { language } = useLanguageContext();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const lessons = [
    {
      title: "IB Diploma",
      description:
        "Prepare for the IB Diploma with comprehensive math courses.",
      image: "/1.jpg",
    },
    {
      title: "From Basics to Advanced",
      description:
        "Progressive learning from foundational concepts to advanced math skills.",
      image: "/2.jpg",
    },
    {
      title: "International Schools' Mathematics",
      description:
        "Curriculum tailored for international schools, focusing on critical thinking and problem-solving.",
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
            Call Now!
          </Button>
        </Box>
      </Box>

      {/* This is important! Keep Dialog outside of hero section */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Feel free to call me for any math-related help!
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", gap: 1, justifyContent: "center" }}
        >
          <PhoneIcon color="primary" />
          <Typography color="primary">0912 134 194</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Other Content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <AboutMe />

        <Grid container spacing={4} sx={{ mt: 10, justifyContent: "center" }}>
          {lessons.map((lesson, index) => (
            <LessonCard
              key={index}
              title={lesson.title}
              description={lesson.description}
              image={lesson.image}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
