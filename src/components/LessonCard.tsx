import { useLanguageContext } from "@/app/context/LanguageContext";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface LessonProps {
  title: string;
  description: string;
  image: string;
}
const LessonCard = ({ title, description, image }: LessonProps) => {
  const { language } = useLanguageContext();

  const isPersian = language === "fa";
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 350,
        "@media (max-width:600px)": {
          maxWidth: 350,
        },
        "@media (min-width:600px)": {
          maxWidth: 250,
        },
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            height: 140,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt="img"
            sx={{ objectFit: "cover", maxHeight: "100%", width: "100%" }}
            loading="lazy"
          />
        </Box>
        <Box
          sx={{
            height: 220,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: isPersian ? "right" : "left" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                textAlign: isPersian ? "right" : "left",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default LessonCard;
