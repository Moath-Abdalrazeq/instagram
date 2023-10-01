import React from 'react';
import { Avatar, Card, CardHeader, CardContent, CardActions, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = ({ post }) => {
  return (
    <Card sx={{ backgroundColor: 'black', color: 'white', marginBottom: '20px', marginLeft:"200px" }}>
      {/* Post Header */}
      <CardHeader
        avatar={<Avatar src={post.avatar} alt={post.username} />}
        title={post.username}
      />

      {/* Post Image */}
      <img src={post.image} alt="Post" style={{  }} />

      {/* Post Actions */}
      <CardActions disableSpacing  >
        <IconButton aria-label="Like" color="inherit">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment" color="inherit">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton aria-label="Send" color="inherit">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="Save" color="inherit">
          <BookmarkBorderIcon />
        </IconButton>
      </CardActions>

      {/* Likes */}
      <CardContent style={{marginTop:"-20px"}}>
        <Typography variant="subtitle1" component="div" color="inherit">
          {post.likes} likes
        </Typography>
      </CardContent>

      {/* Post Caption */}
      <CardContent>
        <Typography variant="body2" color="inherit" component="div" style={{marginTop:"-20px"}} >
          <strong>{post.username}</strong> {post.caption}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
