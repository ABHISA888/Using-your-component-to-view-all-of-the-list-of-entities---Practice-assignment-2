import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post, onLikeToggle }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white max-w-md mx-auto my-4">
      <div className="flex items-center space-x-3">
        <img
          src={post.profileImage}
          alt={post.username}
          className="w-10 h-10 rounded-full"
        />
        <h2 className="text-lg font-semibold">{post.username}</h2>
      </div>
      <p className="mt-2 text-gray-700">{post.content}</p>
      <LikeButton isLiked={post.isLiked} onClick={() => onLikeToggle(post.id)} />
    </div>
  );
};

export default PostCard;
