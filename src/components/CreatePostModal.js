import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

function CreatePostModal({ open, onClose, onPost }) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageCover, setImageCover] = useState(null);

  const token = localStorage.getItem("token");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", image);

    axios
      .post("http://16.170.173.197/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        onPost(response.data);
        onClose();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-description"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="div"
          sx={{ mb: 2, fontWeight: 900, fontFamily: "Signika", color: "white" }}
        >
          Create a post
        </Typography>
        <form>
          <Input
            style={{ color: "white" }}
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          {imageCover && (
            <img
              src={imageCover}
              alt="Uploaded"
              style={{ width: "100%", marginBottom: "1rem" }}
            />
          )}

          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              sx={{
                fontFamily: "Signika",
                width: "100%",
                textAlign: "left",
                fontWeight: 900,
                marginBottom: "5px",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "10px",
                fontSize: "14px",
                color: "black",
                backgroundColor: "white",
                ":hover": { bgcolor: "white", color: "black" },
                "&:active": {
                  boxShadow: "none",
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Upload Image
            </Button>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              fontWeight: 900,
              paddingTop: "5px",
              fontFamily: "Signika",
              paddingBottom: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              color: "black",
              backgroundColor: "white",
              ":hover": { bgcolor: "white", color: "black" },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Create
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default CreatePostModal;
