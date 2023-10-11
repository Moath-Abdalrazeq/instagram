import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import soon from "../assets/soon.png";
import Sidebar from "./SidebarMenu/Sidebar";

const ComingSoon = () => {
  const containerStyle = {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={15}>
        <Grid item xs={12} sm={2} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Container>
            <img
              src={soon}
              alt="Coming Soon Logo"
              style={{ width: "50%", marginBottom: "20px" }}
            />
            <Typography variant="h3" gutterBottom>
              Coming Soon
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default ComingSoon;
