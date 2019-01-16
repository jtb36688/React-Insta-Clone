import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentInput from "./CommentInput.js";
import "./CommentSection.css";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.commentsarray,
      newcomment: ""
    };
  }

  
  componentDidMount() {
    if (localStorage.getItem(this.props.momentdate)) {
      this.setState({
        postsarray: JSON.parse(localStorage.getItem(this.props.momentdate))
      });
    } else {
      this.setState({
        postsarray: this.props.commentsarray
      });
    }
  }
  
  componentDidUpdate() {
    localStorage.setItem(
      this.props.momentdate,
      JSON.stringify(this.state.postsarray)
      );
    }
    

    addNewComment = (e, index) => {
      e.preventDefault();
      this.setState(currentState => {
        return {
        comments: currentState.comments.concat({
          username: "JTB",
          text: currentState.newcomment
        }),
        newcomment: ""
        }
      });
    };

    handleChangesComment = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    
  render() {
    return (
      <div>
        <ul className="CommentsList">
          {this.state.comments.map(({ username, text }, commentindex) => (
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
