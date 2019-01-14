import React from "react";

function CommentSection(props) {
  return (
    <ul>
      {props.commentsarray.map(({ username, text }, index) => (
        <li key={index}>
          <h5>{username}</h5>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default CommentSection;
