import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function CreatePostModal({ open, onClose }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleShare = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: "#1D1D1D",
          width: "100%",
        },
      }}
    >
      <DialogTitle
        style={{ color: "white", display: "flex", justifyContent: "center" }}
      >
        Create a New Post
      </DialogTitle>
      <DialogContent style={{ background: "#1D1D1D", color: "white" }}>
        <Typography>Title</Typography>
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          value={title}
          onChange={handleTitleChange}
          InputProps={{ style: { color: "white", background: "#50505080" } }}
          style={{ marginBottom: "10px" }}
        />
        <Typography>Title</Typography>
        <TextField
          fullWidth
          margin="dense"
          multiline
          rows={4}
          value={body}
          onChange={handleBodyChange}
          InputProps={{ style: { color: "white", background: "#50505080" } }}
          style={{ marginBottom: "10px" }}
        />
        <Typography>Title</Typography>
        <TextField
          fullWidth
          margin="dense"
          value={imageUrl}
          onChange={handleImageUrlChange}
          InputProps={{ style: { color: "white", background: "#50505080" } }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleShare} color="primary" variant="contained">
          Share
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreatePostModal;
