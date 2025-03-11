import { useState } from "react";
import PostCard from "./components/postcard";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      profileImage:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      username: "alice",
      content: "This is my first post!",
      isLiked: false,
    },
    {
      id: 2,
      profileImage:
        "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      username: "bob",
      content: "Loving this social media app.",
      isLiked: true,
    },
    {
      id: 3,
      profileImage:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      username: "charlie",
      content: "Just another day...",
      isLiked: false,
    },
  ]);

  // Toggle like button
  const handleLikeToggle = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked } : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-4">📱 Social Media Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLikeToggle={handleLikeToggle} />
      ))}
    </div>
  );
}

export default App;
