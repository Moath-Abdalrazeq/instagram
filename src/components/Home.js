import React from 'react';
import Carousel from './HomePage/InstagramStories/Carousel';  
import Feed from './HomePage/InstagramPosts/Feed'; 
 
import FriendSuggestions from './HomePage/UsersSuggestion/FriendSuggestions';
 

function Home() {
  return (
    <div>
 
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
