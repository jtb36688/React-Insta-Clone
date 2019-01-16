import React, { Component } from "react";
import PostContainer from "./PostContainer.js";
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
    };
  }

  componentDidMount = () =>
    this.setState(currentState => ({
      socialdata: currentState.socialdata.concat(SmartData)
    }));

  formatdate = date => {
    // return moment(Date.parse(date).toString()).fromNow()
    const a = moment([2017, 6, 14]);
    return a.from(
      Date.parse(date)
      .toString()).toUpperCase();
  };

  


  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer
          postsarray={this.state.socialdata}
          formatdate={this.formatdate}
        />
      </div>
    );
  }
}

export default PostsPage;
