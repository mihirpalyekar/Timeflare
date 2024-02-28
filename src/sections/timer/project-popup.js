import React from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";

export const PortalBox = ({ open, anchorEl, onClose }) => {
  const style = {
    position: "absolute",
    // top: '300px',
    // left: `400px`,
    // width: "500px",
    zIndex: 1000,
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
    background: "white",
    borderRadius: "10px",
    padding: "2.5vh",
    marginTop: "6px",
    marginLeft: "10px",
  };
  return (
    <Box sx={style}>
      <Stack direction="row" justifyContent="space-between" spacing={1}  >
        <TextField label="Project or task name" variant="outlined" fullWidth />
        <Button sx={{ ml: 2 }} variant="text">
          Add
        </Button>
      </Stack>

      <List component="nav" aria-label="projects">
        <ListItem button onClick={onClose}>
          <Typography variant="subtitle2">RECENTLY USED</Typography>
        </ListItem>
        <ListItem button onClick={onClose}>
          <Typography variant="body1">new proj</Typography>
        </ListItem>
        <Divider />
        <ListItem button onClick={onClose}>
          <Typography variant="subtitle2">PROJECTS AND TASKS</Typography>
        </ListItem>
        <ListItem button onClick={onClose}>
          <Typography variant="body1">new proj</Typography>
        </ListItem>
      </List>
      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        To add new project - name it and press Ctrl + Enter
      </Typography>
    </Box>
  );
};
