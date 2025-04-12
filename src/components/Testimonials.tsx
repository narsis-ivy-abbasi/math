import { useLanguageContext } from "@/app/context/LanguageContext";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import React from "react";

interface testimonialProps {
  id: number;
  name: string;
  text: string;
  image: string;
}
const Testimonials = ({ id, name, text, image }: testimonialProps) => {
  const { language } = useLanguageContext();

  const isPersian = language === "fa";
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
      <Card sx={{ padding: 2, height: "100%" }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar src={image} alt={name} sx={{ width: 60, height: 60 }} />
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              textAlign: isPersian ? "right" : "left",
            }}
          >
            "{text}"
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "text.secondary",
              textAlign: isPersian ? "left" : "right",
            }}
          >
            - {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Testimonials;
