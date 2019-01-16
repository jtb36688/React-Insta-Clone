import React, { Component } from "react";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import "./App.css";
import SmartData from "./smart-data.js";
import moment from "moment";
import "datejs";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialdata: [],
      newcomment: ''
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

  handleChangesComment = (e) => {
    this.setState({ [e.target.name]: e.target.value })
};


  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer
          commentSubmit={this.addNewComment}
          postsarray={this.state.socialdata}
          formatdate={this.formatdate}
          newComment={this.state.newcomment}
          handleChangesComment={this.handleChangesComment}
        />
      </div>
    );
  }
}

export default App;
