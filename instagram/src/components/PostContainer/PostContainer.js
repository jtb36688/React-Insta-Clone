import React from "react";
import Post from "./Post.js";
import "./PostContainer.css";
import styled, { css } from "styled-components";

const PostsContainer = props => {
  return (
    <WholePostContainer>
      {props.postsarray.map((post, index) => (
        <Post
          postsarray={props.postsarray}
          key={post.imageUrl}
          postindex={index}
          formatdate={props.formatdate}
          post={post}
          id={post.imageUrl}
          usernamevalue={props.usernamevalue}
        />
      )).reverse()}
    </WholePostContainer>
  );
};

const WholePostContainer = styled.div`
margin-top: 50px;
`


export default PostsContainer;