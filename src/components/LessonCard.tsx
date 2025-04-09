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
  return (
    <Card sx={{ maxWidth: 250 }}>
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
            sx={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }}
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
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default LessonCard;
