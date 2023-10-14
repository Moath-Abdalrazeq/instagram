import React from "react";
import CircularAvatar from "./InstagramStories/CircularAvatar";
import Feed from "./InstagramPosts/Feed";
import FriendSuggestions from "./UsersSuggestion/FriendSuggestions";
import Sidebar from "../SidebarMenu/Sidebar"
import Grid from "@mui/material/Grid";
function Home() {
    return (
      <div style={{display:"flex"}}>
        <div style={{width:"80%"}}> <Sidebar/></div>
        <Grid item xs={9} md={12} >
          <div >
            <CircularAvatar />
            <Feed />
          </div>
        </Grid>
        <Grid item sx={2} md={12}>
          <FriendSuggestions />
        </Grid>
      </div>
    );
}
 
export default Home;
