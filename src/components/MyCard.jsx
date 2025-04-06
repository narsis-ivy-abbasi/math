import { useLanguageContext } from "../app/context/LanguageContext";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
export default function MyCard() {
  const { language } = useLanguageContext();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/abbasi.jpg"
          alt="Math"
        />
        <CardContent>
          {language === "en" ? (
            <>
              <Typography gutterBottom variant="h5" component="div">
                Abbasi
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Expert Mathematics Tutoring in English
                <br />
                From Basic to Advanced Levels
                <br />
                International School Math – Elementary to Diploma <br />
                <strong>I.B Diploma (International Baccalaureate)</strong>
              </Typography>
            </>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="div">
                عباسی
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                تدریس حرفه‌ای ریاضیات به زبان انگلیسی
                <br />
                از پایه تا پیشرفته
                <br />
                ریاضیات مدارس بین‌المللی – از دبستان تا دیپلم
                <br />
                <strong>دیپلم آی بی (I.B Diploma)</strong>
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
