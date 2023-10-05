import React, { useState } from "react";
import {
  Container,
  Grid,
  Avatar,
  Typography,
  Button,
  Divider,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function Profile() {
  const [selectedTab, setSelectedTab] = useState("Posts");
  const images = [
    { id: 1, img:require("../../assets/ExplorePics/explorePic10.webp")},
    { id: 2, img:require("../../assets/ExplorePics/explorePic11.webp") },
    { id: 3, img:require("../../assets/ExplorePics/explorePic12.webp") },
    { id: 4, img:require("../../assets/ExplorePics/explorePic13.webp") },
    { id: 5, img:require("../../assets/ExplorePics/explorePic14.webp") },
    { id: 6, img:require("../../assets/ExplorePics/explorePic4.avif") },
  ];
  const buttonStyle = {
    background: "white",
    color: "black",
    borderRadius: "30px",
    marginRight: "10px",
  };
  return (
    <Container style={{ marginTop: "40px", color: "white" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}></Grid>
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
              <Button style={buttonStyle} variant="contained">
                Edit Profile
              </Button>
              <Button style={buttonStyle} variant="contained">
                Message
              </Button>
              <div style={{ marginTop: "12px", cursor: "pointer" }}>
                <SettingsIcon />
              </div>
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
          <Divider component="div" sx={{ my: 2, backgroundColor: "gray" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="subtitle1"
              onClick={() => setSelectedTab("Posts")}
              sx={{
                fontWeight: selectedTab === "Posts" ? "bold" : "normal",
                borderTop: selectedTab === "Posts" ? "2px solid white" : "none",
              }}
            >
              Posts
            </Button>
            <Button
              variant="subtitle1"
              onClick={() => setSelectedTab("Reels")}
              sx={{
                fontWeight: selectedTab === "Reels" ? "bold" : "normal",
                borderTop: selectedTab === "Reels" ? "2px solid white" : "none",
              }}
            >
              Reels
            </Button>
            <Button
              variant="subtitle1"
              onClick={() => setSelectedTab("Tagged")}
              sx={{
                fontWeight: selectedTab === "Tagged" ? "bold" : "normal",
                borderTop:
                  selectedTab === "Tagged" ? "2px solid white" : "none",
              }}
            >
              Tagged
            </Button>
          </div>
          {selectedTab === "Posts" && (
            <Grid container spacing={2}>
              {images.map((image) => (
                <Grid item xs={12} sm={4} key={image.id}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={image.img}
                        alt="Image"
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
