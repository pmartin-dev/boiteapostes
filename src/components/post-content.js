import React from "react";

const PostContent = ({ post }) => {
  return (
    <div>
      {post.title}
      <p>{post.content}</p>
      <p>Auteur: {post.author}</p>
    </div>
  );
};

export default PostContent;
