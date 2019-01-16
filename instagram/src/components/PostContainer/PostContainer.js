import React from "react";
import Post from "./Post.js";
import "./PostContainer.css";

const PostsContainer = props => {
  return (
    <div className="OuterPostContainer">
      {props.postsarray.map((post, index) => (
        <Post
          postsarray={props.postsarray}
          key={post.imageUrl}
          id={post.imageUrl}
          postindex={index}
          formatdate={props.formatdate}
          post={post}
        />
      )).reverse()}
    </div>
  );
};

export default PostsContainer;