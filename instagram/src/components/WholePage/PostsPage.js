import React, { Component } from "react";
import PostContainer from "../PostContainer/PostContainer.js";
import SearchBar from "../SearchBar/SearchBar.js";
import SmartData from "../../smart-data.js";
import moment from "moment";

// this is an array of 3 objects with keys: username, thumbnailUrl, imageUrl, likes, timestamp, and comments
// comments is an array of objects with keys: username, text

// username:
// thumbnailUrl:
// imageUrl:
// likes:
// timestamp:
// comments: [...
// {username:
// text:
// }]

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialdata: [],
      userdropdown: false
    };
  }

  componentDidMount = () =>
    this.setState(currentState => ({
      socialdata: currentState.socialdata.concat(SmartData)
    }));

  formatdate = date => {
    // return moment(Date.parse(date).toString()).fromNow()
    const a = moment([2017, 6, 14]);
    return a.from(Date.parse(date).toString()).toUpperCase();
  };

  handleUserClick = () =>
    this.setState({
      userdropdown: !this.state.userdropdown
    });

  render() {
    return (
      <div>
        <SearchBar
          handleUserClick={this.handleUserClick}
          handleLogOut={this.props.handleLogOut}
          userdropdownbool={this.state.userdropdown}
          usernamevalue={this.props.usernamevalue}
        />
        <PostContainer
          usernamevalue={this.props.usernamevalue}
          postsarray={this.state.socialdata}
          formatdate={this.formatdate}
        />
      </div>
    );
  }
}

export default PostsPage;
