import React, { useState, useEffect } from "react";
import Post from "./Post";
import CreatePostModal from "../../CreatePostModal";
import axios from "axios";
import Sidebar from "../../SidebarMenu/Sidebar";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://16.170.173.197/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log("Error Fetching posts", error);
      });
  }, [token]);

  const handleDeletePost = (postId) => {
    axios
      .delete(`http://16.170.173.197/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  const handleEditPost = (postId, newDescription) => {
    axios
      .put(`http://16.170.173.197/posts/${postId}`, { description: newDescription }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error editing post:", error);
      });
  };

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
    setCreatePostModalOpen(false);
  };

  return (
    <div>
      <Sidebar setCreatePostModalOpen={setCreatePostModalOpen} handleCreatePost={handleCreatePost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onDelete={(postId) => handleDeletePost(postId)}
          onEdit={(postId, newDescription) => handleEditPost(postId, newDescription)}
        />
      ))}
      <CreatePostModal open={isCreatePostModalOpen} onClose={() => setCreatePostModalOpen(false)} onPost={handleCreatePost} />
    </div>
  );
}

export default Feed;
