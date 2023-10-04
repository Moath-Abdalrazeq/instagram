import React from "react";
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MessageIcon, NewMessageIcon } from "./MessageIcon";
import { friends } from "./MessageData";
const Messages = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "200px" }}></div>
      <div
        style={{
          color: "white",
          borderRight: "1px solid grey",
          width: "270px",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography color="white">moath_abdalrazeq </Typography>
            <KeyboardArrowDownIcon color="primary" />
          </div>
          <div>
            <NewMessageIcon />
          </div>
        </div>
        <Divider component="div" sx={{ my: 2, backgroundColor: "gray" }} />
        <List
          style={{
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "4px",
            }}
          >
            <Typography>Messages</Typography>
            <Typography color="gray">Request</Typography>
          </div>
          {friends.map((friend) => (
            <ListItem key={friend.id}>
              <ListItemAvatar>
                <Avatar src={friend.avatar} alt={friend.name} />
              </ListItemAvatar>
              <div>
                <div>
                  <ListItemText primary={friend.name} />
                </div>
                <div>
                  <Typography variant="body1" color="gray">
                    {friend.message}
                  </Typography>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <MessageIcon />
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography color="white">Your Messages</Typography>
          <Typography color="gray">
            Send private photos and messages to a friend or group
          </Typography>
          <Button variant="contained" style={{ marginTop: "20px" }}>
            SEND MESSAGE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
