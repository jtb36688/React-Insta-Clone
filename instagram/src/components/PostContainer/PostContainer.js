import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import PropTypes from "prop-types";
import "./PostContainer.css";

function PostContainer(props) {
  
  return (
    <div className="OuterPostContainer">
      {props.postsarray.map((post, index) => (
        <div key={index} className="WholePost">
          <div className="Avatar_Username">
            <img
              src={post.thumbnailUrl}
              alt={`${post.username}s avatar thumbnail`}
              className="Avatar"
            />
            <div className='Username'>{post.username}</div>
          </div>
          <img
            src={post.imageUrl}
            alt="main post image"
            className="PostImage"
          />
          <div className="Heart_Comment_Likes">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          </div>
            {post.likes} likes
          
          <CommentSection commentsarray={post.comments} />
          <p className="MomentDate">{props.formatdate(`${post.timestamp}`)}</p>

          <div className="Input_Elipsis">
            <form className="CommentsForm">
              <input
              className="CommentsInput"
                type="text"
                name="titlevalue"
                placeholder="Add a comment..."
              />
            </form>
            <i />
          </div>
        </div>
      ))}
    </div>
  );
}

PostContainer.propTypes = {
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
  )
};

export default PostContainer;
