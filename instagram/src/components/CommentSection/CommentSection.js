import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentInput from "./CommentInput.js";
import "./CommentSection.css";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsarray: props.commentsarray,
      newcomment: ''
    };
  }


//   addNewComment = (e, Postindex) => {
//     e.preventDefault();
//     if (this.state.newcomment === "") {
//       return;
//   } else {
//     this.setState(currentState => ({
//       commentsarray: currentState.commentsarray.concat(
//         {
//           username: 'JTB',
//           text: currentState.newcomment
//         }
//       )
//     })
//       )
//   this.setState({
//     newcomment: '',
//   })
// }

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
        <CommentInput postIndex={this.props.postIndex} newComment={this.props.newComment} onChange={this.props.onChange} postindex={this.props.postindex} commentSubmit={this.props.commentSubmit}/>
      </div>
    )
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
