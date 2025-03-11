import React from "react";

const LikeButton = ({ isLiked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-2 px-4 py-2 rounded-md font-semibold transition ${
        isLiked ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {isLiked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
