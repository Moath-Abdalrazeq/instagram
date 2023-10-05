import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const cardStyle = {
  color: "white",
  width: "50%",
  marginLeft: "350px",
};

function Post({ post }) {
  return (
    <Card sx={cardStyle} className="custom-card">
      <CardHeader
        avatar={<Avatar src={post.avatar} alt={post.username} />}
        action={
          <IconButton aria-label="Options">
            <MoreHorizIcon style={{ color: "white" }} />
          </IconButton>
        }
        title={
          <div style={{ display: "flex" }}>
            <Typography
              variant="body1"
              component="div"
              color="inherit"
              style={{ marginRight: "8px" }}
            >
              {post.username}
            </Typography>
            <Typography
              variant="caption"
              component="div"
              style={{ color: "Grey", marginTop: "4px" }}
            >
              ٫ {post.timeAgo}
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
          {post.likes} likes
        </Typography>
        <Typography variant="body2" color="inherit" component="div">
          <strong>{post.username}</strong> {post.caption}
        </Typography>
        <Divider sx={{ margin: "10px 0" }} />
        {post.comments.length > 1 && (
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
  );
}

export default Post;
