import React from "react";
import Post from "./Post.js";
import "./PostContainer.css";

const PostsContainer = props => {
  return (
    <div className="OuterPostContainer">
      {props.postsarray.map((post, index) => (
        <Post
          postsarray={props.postsarray}
          key={`${post.username}${index}`}
          postindex={index}
          formatdate={props.formatdate}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostsContainer;