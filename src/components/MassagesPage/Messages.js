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
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";  
import { MessageIcon, NewMessageIcon } from "./MessageIcon";
import { friends } from "./MessageData";
function Messages() {
  return (
    <Grid container>
      <Grid item xs={12} sm={2.2}> </Grid>
      <Grid item xs={12} sm={9}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              color: "white",
              borderRight: "1px solid grey",
              minWidth: "270px",
              height: "100vh",
              padding: "16px",
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
            <List style={{ color: "white" }}>
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      
                      <Typography
                        variant="body1"
                        color={friend.isRead ? "gray" : "primary"} 
                      >
                        {friend.message}
                      </Typography>
                      {!friend.isRead && (
                        <FiberManualRecordIcon
                          color="primary"
                          fontSize="small"
                          style={{ marginRight: "4px" }}
                        />
                      )}
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
              padding: "16px",
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
      </Grid>
    </Grid>
  );
}

export default Messages;
