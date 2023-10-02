import React from 'react';
import Carousel from './InstagramStories/Carousel';  
import Feed from './InstagramPosts/Feed'; 
import Sidebar from './Sidebar';
import FriendSuggestions from './UsersSuggestion/FriendSuggestions';
 

function Home() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div style={{display:"flex"}}  > 
      <div>
        <Carousel />
        <Feed />
      </div>

<div>
  <FriendSuggestions/>
  </div>  
  </div>
    </div>
  );
}

export default Home;
