import React from 'react';
import Post from './Post';  

 
const posts = [
  {
    id: 1,
    username: 'user1',
    avatar:require('../../assets/StoriesAvatars/farmer-avatar.png'),
    image:require('../../assets/ExplorePics/explorePic13.webp'),
    likes: 100,
    caption: 'A beautiful day!',
  },
  {
    id: 2,
    username: 'user2',
    avatar:require('../../assets/StoriesAvatars/farmer-avatar.png'),
    image:require('../../assets/ExplorePics/explorePic10.webp'),
    likes: 200,
    caption: 'Exploring new places!',
  },
 
];

const Feed = () => {
  return (
    <div>
       
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
