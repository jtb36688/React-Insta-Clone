import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";

function PostContainer(props) {
  return (
    <div>
      {props.postsarray.map((post, index) => (
          <div>
        <h3>
          {index} : {post.username}
        </h3>
        <CommentSection commentsarray={post.comments}/>
        </div>
      ))}
    </div>
  );
}

export default PostContainer;
