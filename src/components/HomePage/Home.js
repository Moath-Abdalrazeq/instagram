import React from "react";
import CircularAvatar from "./InstagramStories/CircularAvatar";
import Feed from "./InstagramPosts/Feed";
import FriendSuggestions from "./UsersSuggestion/FriendSuggestions";
import Sidebar from "../SidebarMenu/Sidebar"
import Grid from "@mui/material/Grid";
function Home() {
  return (
 
      <div style={{ display: "flex" }}>
             <Grid item md={3}>
              <Sidebar />
            </Grid>
        <div>
          <CircularAvatar />
          <Feed />
        </div>

        <div>
          <FriendSuggestions />
        </div>
      </div>
    
  );
}

export default Home;
