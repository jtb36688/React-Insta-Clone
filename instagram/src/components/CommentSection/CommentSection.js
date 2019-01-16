import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentInput from "./CommentInput.js";
import "./CommentSection.css";


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsarray: props.postsarray,
      newcomment: ""
    };
  }

  addNewComment = (e, index) => {
    e.preventDefault();
    const copyarray = this.state.postsarray.slice();
    copyarray[index].comments.push({
      username: 'JTB',
      text: this.state.newcomment    
    })
    this.setState({
      postsarray: copyarray
    })
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
