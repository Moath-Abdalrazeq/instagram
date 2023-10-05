import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function AvatarComponent({ image }) {
  return (
    <section style={{ marginLeft: "20px", textAlign: "center" }}>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          margin: "3px",
          borderRadius: "50%",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(229.53deg, #D300C5 11.19%, #FF234B 50.32%, #FFC900 125.69%)",
          border: "3px solid transparent",
        }}
      >
        <img
          style={{
            width: "50px",
            height: "50px",
            margin: "3px",
            borderRadius: "50%",
            background: "black",
          }}
          src={image.img}
        />
      </Paper>
      <Typography
        style={{
          fontSize: "12px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "60px",
        }}
        variant="body2"
      >
        {image.name}
      </Typography>
    </section>
  );
}

export default AvatarComponent;
