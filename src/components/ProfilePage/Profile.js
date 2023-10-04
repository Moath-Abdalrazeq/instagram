import React from "react";
import { Container, Grid, Avatar, Typography, Button, Divider } from "@mui/material";

const Profile = () => {
  const buttonStyle = {
    background: "white",
    color: "black",
    borderRadius: "20px",
  };

  return (
    <Container style={{ marginTop: "80px", color: "white" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2.5}></Grid>
        <Grid item xs={12} sm={9}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={require("../../assets/moath.jpeg")}
            />
            <div style={{ marginLeft: "30px", display: "flex" }}>
              <Typography style={{ marginRight: "30px" }} variant="h4">
                moath_abdalrazeq
              </Typography>
              <Button
                style={{ ...buttonStyle, marginRight: "10px" }}
                variant="contained"
              >
                Edit Profile
              </Button>
              <Button style={buttonStyle} variant="contained">
                Message
              </Button>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography variant="subtitle2">10 Posts</Typography>
              <Typography variant="subtitle2">250 Followers</Typography>
              <Typography variant="subtitle2">300 Following</Typography>
            </div>
            <div style={{ marginLeft: "120px", marginTop: "20px" }}>
              <Typography variant="subtitle1">Moath A Abdalrazeq</Typography>
              <Typography variant="subtitle1">@aaup.edu</Typography>
              <Typography variant="subtitle1">
                Computer Engineering 💻❤
              </Typography>
            </div>
        
          </div>
          <Divider component="div" sx={{ my: 2 , backgroundColor:"gray" }} /> 
        </Grid>
       
      </Grid>
    </Container>
  );
};

export default Profile;
