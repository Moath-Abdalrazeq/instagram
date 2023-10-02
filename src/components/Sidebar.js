import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
 
import ChatIcon from "@mui/icons-material/Chat";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramLogo from "../assets/InstagramLogo";

function Sidebar() {
  const listItemStyle = {
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  const iconStyle = {
    color: "#FFFFFF",
  };

  return (
    <Drawer variant="permanent" sx={{ backgroundColor: "black" }}>
      <List  style={{  borderRight: '2px solid grey', width: '250px' }}>  
        <ListItem component={Link} to="/" sx={listItemStyle}>
          <InstagramLogo />
        </ListItem>

        <ListItem component={Link} to="/" sx={listItemStyle}>
          <ListItemIcon>
            <HomeIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem component={Link} to="/search" sx={listItemStyle}>
          <ListItemIcon>
            <SearchIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>

        <ListItem component={Link} to="/explore" sx={listItemStyle}>
          <ListItemIcon>
            <ExploreIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>

        <ListItem component={Link} to="/reels" sx={listItemStyle}>
          <ListItemIcon>
            <SlideshowIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Reels" />
        </ListItem>

        <ListItem component={Link} to="/messages" sx={listItemStyle}>
          <ListItemIcon>
            <ChatIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>

        <ListItem component={Link} to="/notifications" sx={listItemStyle}>
          <ListItemIcon>
            <FavoriteBorderIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>

        <ListItem component={Link} to="/create" sx={listItemStyle}>
          <ListItemIcon>
            <AddCircleOutlineIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Create" />
        </ListItem>

        <ListItem component={Link} to="/profile" sx={listItemStyle}>
          <ListItemIcon>
          <Avatar src={require('../assets/moath.jpeg')}/>
          </ListItemIcon>
          <ListItemText primary="moath_abdalrazeq" />
        </ListItem>
        
        <ListItem component={Link} to="/profile" sx={listItemStyle} style={{marginTop:"85px"}}>
          <ListItemIcon>
            <MenuIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
