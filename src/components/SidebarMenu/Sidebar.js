import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramLogo from "../../assets/InstagramLogo";
import CreatePostModal from "../CreatePostModal";

function Sidebar({ setCreatePostModalOpen, handleCreatePost }) {
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

  const menu = [
    { id: 1, text: "", icon: <InstagramLogo />, path: "/" },
    { id: 2, text: "Home", icon: <HomeIcon />, path: "/home" },
    { id: 3, text: "Search", icon: <SearchIcon />, path: "/blank" },
    { id: 4, text: "Explore", icon: <ExploreIcon />, path: "/explore" },
    { id: 5, text: "Reels", icon: <SlideshowIcon />, path: "/blank" },
    { id: 6, text: "Messages", icon: <ChatIcon />, path: "/messages" },
    {
      id: 7,
      text: "Notifications",
      icon: <FavoriteBorderIcon />,
      path: "/blank",
    },
    {
      id: 8,
      text: "Create",
      icon: <AddCircleOutlineIcon />,
      onClick: handleCreatePostClick,
    },
    {
      id: 9,
      text: "moath_abdalrazeq",
      icon: <Avatar src={require("../../assets/ward.jpeg")} />,
      path: "/profile",
    },
  ];

  return (
    <Drawer variant="permanent">
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
          {menu.map((item) => (
            <ListItem
              key={item.id}
              component={Link}
              to={item.path}
              onClick={item.onClick}
              sx={listItemStyle}
            >
              <ListItemIcon style={{ color: "white" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText style={{ color: "white" }} primary={item.text} />
            </ListItem>
          ))}
        </div>

        <div>
          <ListItem component={Link} to="/blank" sx={listItemStyle}>
            <ListItemIcon>
              <MenuIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItem>
        </div>
      </List>
      <CreatePostModal
        open={isCreatePostModalOpen}
        onClose={closeCreatePostModal}
        onPost={handleCreatePost}
      />
    </Drawer>
  );
}

export default Sidebar;
