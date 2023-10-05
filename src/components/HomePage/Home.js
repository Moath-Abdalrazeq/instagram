import React from "react";
import CircularAvatar from "./InstagramStories/CircularAvatar";
import Feed from "./InstagramPosts/Feed";
import FriendSuggestions from "./UsersSuggestion/FriendSuggestions";

function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <CircularAvatar />
          <Feed />
        </div>

        <div>
          <FriendSuggestions />
        </div>
      </div>
    </div>
  );
}

export default Home;
