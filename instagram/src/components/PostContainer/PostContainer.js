import React from "react";
import Post from "./Post.js";
import styled, { css } from "styled-components";
import PropTypes from "prop-types"

const PostsContainer = props => {
  return (
    <WholePostContainer>
      {props.postsarray.map(post => (
        <Post
          key={post.imageUrl}
          formatdate={props.formatdate}
          post={post}
          id={post.imageUrl}
          usernamevalue={props.usernamevalue}
        />
      )).reverse()}
    </WholePostContainer>
  );
};

// Post 4 props

PostsContainer.propTypes = {
  postsarray: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  ),
  usernamevalue: PropTypes.string,
  formatdate: PropTypes.func,
};

const WholePostContainer = styled.div`
margin-top: 50px;
`


export default PostsContainer;