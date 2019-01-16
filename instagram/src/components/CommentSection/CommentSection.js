import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentInput from "./CommentInput.js";
import "./CommentSection.css";

// Hiarchy----

// App.js=>

// PostContainer.js =>

// CommentSection.js =>

// CommentInput.js =>

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsarray: props.commentsarray,
      newcomment: ""
    };
  }

  addNewComment = e => {
    e.preventDefault();
    if (this.state.newcomment === "") {
      return;
    } else {
      this.setState({
        commentsarray: [
          ...this.state.commentsarray,
          {
            username: 'JTB',
            text: this.state.newcomment
          }
        ],
        newcomment: ''
      });
    }
  };

  handleChangesComment = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <ul className="CommentsList">
          {this.props.commentsarray.map(({ username, text }, commentindex) => (
            <li className="SingleComment" key={commentindex}>
              <p>
                <span className="Username">{username} </span>
                {text}
              </p>
            </li>
          ))}
        </ul>
        <p className="MomentDate">{this.props.momentdate}</p>
        <CommentInput
          newcomment={this.state.newcomment}
          onChange={this.handleChangesComment}
          postindex={this.props.postindex}
          commentSubmit={this.addNewComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  commentsarray: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

CommentSection.defaultProps = {
  commentsarray: []
};

export default CommentSection;
