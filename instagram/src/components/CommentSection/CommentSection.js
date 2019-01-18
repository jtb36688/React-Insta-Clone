import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentInput from "./CommentInput.js";
import "./CommentSection.css";
import styled, { css } from "styled-components";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newcomment: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem(this.props.momentdate)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.momentdate))
      });
    } else {
      this.setState({
        comments: this.props.commentsarray
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.momentdate,
      JSON.stringify(this.state.comments)
    );
  }

  addNewComment = e => {
    e.preventDefault();
    this.setState(currentState => {
      return {
        comments: currentState.comments.concat({
          username: this.props.usernamevalue,
          text: currentState.newcomment
        }),
        newcomment: ""
      };
    });
  };

  handleChangesComment = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <CommentsList>
          {this.state.comments.map(({ username, text }, commentindex) => (
            <SingleComment key={commentindex}>
              <p>
                <Username>{username}</Username>
                {text}
              </p>
            </SingleComment>
          ))}
        </CommentsList>
        <MomentDate>{this.props.momentdate}</MomentDate>
          <CommentInput
            newcomment={this.state.newcomment}
            onChange={this.handleChangesComment}
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
  ),
  momentdate: PropTypes.string,
  usernamevalue: PropTypes.string,
  id: PropTypes.string
}

const Username = styled.span`
margin-right: 5px
font-weight: bold`


const MomentDate = styled.p`
  margin-top: 30px;
  color: grey;
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 15px;
  border-bottom: 0.5px solid lightgrey;
`;

const CommentsList = styled.ul`
  list-style-type: none;
  list-style-position: inside;
`;

const SingleComment = styled.li`
  margin: 20px 0;
`;

// CommentSection.propTypes = {
//   commentsarray: PropTypes.arrayOf(
//     PropTypes.shape({
//       username: PropTypes.string,
//       text: PropTypes.string
//     })
//   )
// };

// CommentSection.defaultProps = {
//   commentsarray: []
// };

export default CommentSection;
