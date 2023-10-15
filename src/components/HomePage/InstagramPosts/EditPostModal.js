import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
const EditPostModal = ({ isOpen, onClose, onSave, initialDescription }) => {
  const [newDescription, setNewDescription] = useState(initialDescription);

  const handleSave = () => {
    onSave(newDescription);
  };

  const handleClose = () => {
    setNewDescription(initialDescription);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Paper
        style={{
          position: "absolute",
          width: 400,
          backgroundColor: "black",
          border: "2px solid #000",
          boxShadow: "5px 10px 18px #888888",
          padding: "16px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2 style={{ color: "white" }}>Edit Post Description</h2>
        <Input
          style={{ color: "white" }}
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
 
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Paper>
    </Modal>
  );
};

export default EditPostModal;
