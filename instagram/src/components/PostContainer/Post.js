import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import PropTypes from "prop-types";
import "./PostContainer.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: []
    };
  }
  render() {
    return (
      <div className="WholePost">
        <div className="Avatar_Username">
          <img
            src={this.props.post.thumbnailUrl}
            alt={`${this.props.post.username}'s avatar thumbnail`}
            className="Avatar"
          />
          <div className="Username">{this.props.post.username}</div>
        </div>
        <img src={this.props.post.imageUrl} alt="main post image" className="PostImage" />
        <div className="BottomContainer">
          <div className="Heart_Comment_Likes">
            <i class="far fa-heart" />
            <i class="far fa-comment" />
          </div>
          <p className="LikesText">{this.props.post.likes} likes</p>
          <CommentSection
            postsarray={this.props.postsarray}
            commentsarray={this.props.post.comments}
            momentdate={this.props.formatdate(`${this.props.post.timestamp}`)}
            postindex={this.props.postindex}
          />
        </div>
      </div>
    );
  }
}

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
