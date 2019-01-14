import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";

function PostContainer(props) {
  return (
    <div>
      {props.postsarray.map((post, index) => (
        <div>
          <img
            src={post.thumbnailUrl}
            alt={`${post.username}s avatar thumbnail`}
          />
          <h3>
            {index} :{post.username} - {post.likes} likes,
          </h3>
          <p>{post.timestamp}</p>

          <CommentSection commentsarray={post.comments} />
          <form>
            <input type="text" name="titlevalue" placeholder="Enter New Comment" />
          </form>
          <br/><br/><br/>
        </div>
      ))}
    </div>
  );
}

export default PostContainer;
