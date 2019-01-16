import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage.js";
import Authenticate from './components/Authentication/Authentication.js'
import "./App.css";
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
    this.state = {};
  }

  
  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

// export default Authenticate(App);
export default App;
