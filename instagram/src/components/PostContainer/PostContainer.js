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
            <div className="Username">{post.username}</div>
          </div>
          <img
            src={post.imageUrl}
            alt="main post image"
            className="PostImage"
          />
          <div className="BottomContainer">
            <div className="Heart_Comment_Likes">
              <i class="far fa-heart" />
              <i class="far fa-comment" />
            </div>
            <p className='LikesText'>{post.likes} likes</p>
            <CommentSection commentsarray={post.comments}
            momentdate={props.formatdate(`${post.timestamp}`)}
            newComment={props.newComment}
            onChange={props.handleChangesComment}
            commentSubmit={props.commentSubmit}
            postindex={index} />
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

PostContainer.defaultProps = {
  postsarray: [],
}

export default PostContainer;
