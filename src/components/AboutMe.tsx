import { useLanguageContext } from "@/app/context/LanguageContext";
import { Box, Grid, Typography } from "@mui/material";

const AboutMe = () => {
  const { language } = useLanguageContext();

  const isPersian = language === "fa";
  return (
    <Grid
      container
      spacing={4}
      sx={{
        mt: 10,
        flexDirection: { xs: "column", sm: "row" },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Image Section */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            overflow: "hidden",
            mx: "auto",
            boxShadow: 3,
            "& img": {
              transition: "transform 0.1s ease-in-out",
            },
            "&:hover img": {
              transform: "scale(1.4)", // zoom on hover
            },
          }}
        >
          <img src="/abbasi.png" alt="abbasi" loading="lazy" />
        </Box>
      </Grid>
      {/* Text Section */}
      <Grid size={{ xs: 12, md: 8 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: isPersian ? "right" : "left" }}
        >
          {language === "en" ? "About Me" : "درباره من"}
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: isPersian ? "right" : "left" }}
        >
          {language === "en"
            ? "With over thirty years of experience teaching mathematics exclusively, I'm a passionate math tutor dedicated to helping students overcome their fear of numbers. I provide personalized lessons tailored to your needs and offer mathematics instruction in English."
            : "با تجربه بیش از سی سال تدریس فقط ریاضیات، من به عنوان یک مدرس ریاضی با شوق و علاقه به کمک به دانش‌آموزان برای غلبه بر ترس از اعداد می‌پردازم. من جلسات شخصی را بر اساس نیازهای شما تنظیم می‌کنم و تدریس ریاضیات به زبان انگلیسی را ارائه می‌دهم"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
