import React from "react";
import "./CommentSection.css";

function CommentInput(props) {
  return (
    <div className="Input_Elipsis">
      <form className="CommentsForm" onSubmit={(e) => props.commentSubmit(`${props.postIndex}`)}>
        <input
          value={props.newComment}
          className="CommentsInput"
          type="text"
          name="newcomment"
          placeholder="Add a comment..."
          onChange={props.onChange}
        />
      </form>
      <button className="ElipsisButton">
        <i class="fas fa-ellipsis-h" />
      </button>
    </div>
  );
}

export default CommentInput;
