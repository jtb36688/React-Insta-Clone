import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import PropTypes from "prop-types";
import "./PostContainer.css";
import styled, { css } from "styled-components";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  componentDidMount() {
    if (localStorage.getItem(this.props.id)) {
      this.setState({
        likes: JSON.parse(localStorage.getItem(this.props.id))
      });
    } else {
      this.setState({
        likes: this.props.post.likes
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.id, JSON.stringify(this.state.likes));
  }

  likesfunction = () =>
    this.setState(currentState => ({ likes: ++currentState.likes }));

  render() {
    return (
      <InnerPostContainer>
        <UserAvatarContainer>
          <AvatarImage
            src={this.props.post.thumbnailUrl}
            alt={`${this.props.post.username}'s avatar thumbnail`}
          />
          {this.props.post.username}
        </UserAvatarContainer>
        <MainPostImage
          src={this.props.post.imageUrl}
          alt="main post image"
        />
        <CommentsContainer>
          <IconsContainer>
            <i className="far fa-heart" />
            <i className="far fa-comment" />
          </IconsContainer>
          <LikesButton onClick={this.likesfunction}>
            {this.state.likes} likes
          </LikesButton>
          <CommentSection
            usernamevalue={this.props.usernamevalue}
            id={this.props.post.imageUrl}
            postsarray={this.props.postsarray}
            commentsarray={this.props.post.comments}
            momentdate={this.props.formatdate(`${this.props.post.timestamp}`)}
            postindex={this.props.postindex}
          />
        </CommentsContainer>
      </InnerPostContainer>
    );
  }
}



const LikesButton = styled.button`
margin-top: 15px;
font-weight: bold;
`

const IconsContainer = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
`

const CommentsContainer = styled.div`
margin: 10px 2% 0;
`

const MainPostImage = styled.img`
width: 100%;
`

const AvatarImage = styled.img`
margin: 0 3%;
border-top-left-radius: 50% 50%;
border-top-right-radius: 50% 50%;
border-bottom-right-radius: 50% 50%;
border-bottom-left-radius: 50% 50%;
height: 40px;`

const UserAvatarContainer = styled.div`
display: flex;
align-items: center;
padding: 10px 0;
font-weight: bold;
`

const InnerPostContainer = styled.div`
display: flex;
flex-direction: column;
padding: 5px 0;
border: 1px solid silver;
margin-top: 50px;
`

// PostContainer.propTypes = {
//   postsarray: PropTypes.arrayOf(
//     PropTypes.shape({
//       username: PropTypes.string,
//       likes: PropTypes.number,
//       timestamp: PropTypes.string,
//       thumbnailUrl: PropTypes.string,
//       imageUrl: PropTypes.string,
//       comments: PropTypes.arrayOf(
//         PropTypes.shape({
//           username: PropTypes.string,
//           text: PropTypes.string
//         })
//       )
//     })
//   )
// };

// PostContainer.defaultProps = {
//   postsarray: [],
// }

export default Post;
