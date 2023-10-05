import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
} from "@mui/material";
import { useState, React } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramLogo from "../assets/InstagramLogo";
import CreatePostModal from "./CreatePostModal";

function Sidebar() {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleCreatePostClick = () => {
    setIsCreatePostModalOpen(true);
  };

  const closeCreatePostModal = () => {
    setIsCreatePostModalOpen(false);
  };
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
      <List
        style={{
          borderRight: "2px solid grey",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
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
          <ListItem
            component="div"
            onClick={handleCreatePostClick}
            sx={listItemStyle}
            style={{ cursor: "pointer" }}
          >
            <ListItemIcon>
              <AddCircleOutlineIcon sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItem>
          <ListItem component={Link} to="/profile" sx={listItemStyle}>
            <ListItemIcon>
              <Avatar src={require("../assets/moath.jpeg")} />
            </ListItemIcon>
            <ListItemText primary="moath_abdalrazeq" />
          </ListItem>
        </div>

        <div>
          <ListItem component={Link} to="/profile" sx={listItemStyle}>
            <ListItemIcon>
              <MenuIcon sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItem>
        </div>
      </List>
      <CreatePostModal
        open={isCreatePostModalOpen}
        onClose={closeCreatePostModal}
      />
    </Drawer>
  );
}

export default Sidebar;
