import { Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Paper sx={{ p: 3, maxWidth: 400, mx: "auto" }}>
      <Stack spacing={2}>
        <TextField label="Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Message" multiline rows={4} fullWidth />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Stack>
    </Paper>
  );
};

export default Contact;
