import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

function CommentSection(props) {
  return (
    <ul className="CommentsList">
      {props.commentsarray.map(({ username, text }, index) => (
        <li className="SingleComment" key={index}>
          <p>
            <span className="Username">{username} </span>
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}

CommentSection.propTypes = {
  commentsarray: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
