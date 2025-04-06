"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fade,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import MyCard from "../components/MyCard";
import { useLanguageContext } from "./context/LanguageContext";
import PhoneIcon from "@mui/icons-material/Phone";
import { DeleteIcon, HomeIcon } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
export default function Home() {
  const { language } = useLanguageContext();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Avatar alt="User" src="/avatar.png" />
        <Stack spacing={0.5} ml={2}>
          <Typography variant="h6">Sara Smith</Typography>
          <Typography color="text.secondary">Frontend Developer</Typography>
        </Stack>
      </Paper>

      <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>نام</TableCell>
            <TableCell>سن</TableCell>
            <TableCell>شغل</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>سارا</TableCell>
            <TableCell>30</TableCell>
            <TableCell>طراح وب</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>علی</TableCell>
            <TableCell>25</TableCell>
            <TableCell>توسعه‌دهنده</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <List>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="خانه" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="دفتر" />
      </ListItem>
    </List>
    <Fade in={true} timeout={1000}>
      <div>محتوا با انیمیشن فید این می‌شود</div>
    </Fade>
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        باز کردن دیالوگ
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>عنوان دیالوگ</DialogTitle>
        <DialogContent>محتوای دیالوگ</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            بستن
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>عنوان</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>محتوای داخل کشویی</Typography>
      </AccordionDetails>
    </Accordion>

      <Paper elevation={5} sx={{ p: 3 }}>
        <Typography variant="body1">This is a Paper component.</Typography>
        <Button variant="contained">click</Button>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Paper>
      <Grid container spacing={2}>
        <Grid size={4}>{<MyCard />}</Grid>
        <Grid size={8}>
          <Typography variant="h4" gutterBottom>
            {language === "en"
              ? "Welcome to my website"
              : "به وبسایت من خوش آمدید"}
          </Typography>

          <Stack direction="row" padding={4} gap={3}>
            <Typography>hello</Typography>
            <Typography>hello</Typography>
            <Typography>hello</Typography>
          </Stack>

          <Typography variant="h6" gutterBottom>
            {language === "en"
              ? "Struggling with Math? Let's Solve It Together!"
              : "با ریاضی مشکل داری؟ بیا با هم حلش کنیم"}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {language === "en"
              ? "Over 30 Years of Exclusive Mathematics Teaching Experience"
              : "بیش از ۳۰ سال تجربه تدریس تخصصی ریاضیات"}
          </Typography>
        </Grid>
        <Grid size={4}>
          <ListItem>
            <Typography variant="h6" mt={2}>
              <PhoneIcon /> Contact: 09121342194
            </Typography>
          </ListItem>
        </Grid>
        <Grid size={8}>
          <ListItem>
            <img
              src="/ib.png"
              alt="IB"
              loading="lazy"
              style={{ width: "100%", maxWidth: "50px", height: "auto" }}
            />
            <img
              src="/calc.webp"
              alt="IB"
              loading="lazy"
              style={{ width: "100%", maxWidth: "60px", height: "auto" }}
            />
          </ListItem>
        </Grid>
      </Grid>
    </Container>
  );
}
