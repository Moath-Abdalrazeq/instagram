import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Divider,
  Avatar,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Post({ post, onEdit, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleEditClick = () => {
    handleMenuClose();
    onEdit(post.id, post.description);
  };

  const handleDeleteClick = () => {
    handleMenuClose();
    onDelete(post.id);
  };

  return (
      <Grid container>
        <Grid item xs={12} sm={1}></Grid>
  
        <Card sx={{ width: "70%", margin: "auto", color: "white" }}>
          <CardHeader
            avatar={
              post.user && post.user.avatar ? (
                <Avatar src={post.user.avatar} alt={post.user.userName} />
              ) : null
            }
            action={
              <IconButton
              aria-label="Options"
              onClick={handleMenuClick}
              style={{ color: "white" }}
            >
              <MoreHorizIcon />
            </IconButton>
            }
            title={
              <div style={{ display: "flex" }}>
                <Typography variant="body1" component="div">
                  {post.user && post.user.userName}
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  style={{ color: "Grey", marginTop: "4px" }}
                >
                  , {post.createdAt}
                </Typography>
              </div>
            }
          />
          <img
            src={post.image}
            alt="Post"
            style={{ width: "100%", height: "auto" }}
          />
          <CardActions disableSpacing>
            <div>
              <IconButton aria-label="Like" color="inherit">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Comment" color="inherit">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <IconButton aria-label="Send" color="inherit">
                <SendIcon />
              </IconButton>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <IconButton aria-label="Save" color="inherit">
                <BookmarkBorderIcon />
              </IconButton>
            </div>
          </CardActions>
          <CardContent style={{ marginTop: "-20px" }}>
            <Typography variant="subtitle1" component="div" color="inherit">
              {post.likes && post.likes.length ? `${post.likes.length} likes` : ''}
            </Typography>
            <Typography variant="body2" color="inherit" component="div">
              <strong>
                {post.user && post.user.userName ? post.user.userName : ''}
              </strong>{" "}
              {post.description}
            </Typography>
            <Divider sx={{ margin: "10px 0" }} />
            {post.comments && post.comments.length > 1 && (
              <Typography
                variant="caption"
                color="inherit"
                component="div"
                style={{ marginTop: "-10px" }}
              >
                View all {post.comments.length} comments
              </Typography>
            )}
          </CardContent>
        </Card>

      <Popover
        open={menuOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          <ListItem   onClick={handleEditClick}>
            <ListItemText  style={{color:"white"}}>Edit</ListItemText>
          </ListItem>
          <ListItem   onClick={handleDeleteClick}>
            <ListItemText style={{color:"white"}}>Delete</ListItemText>
          </ListItem>
        </List>
      </Popover>
    </Grid>
  );
}

export default Post;
