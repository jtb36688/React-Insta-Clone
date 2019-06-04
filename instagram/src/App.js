import React, { Component } from "react";
import PostsPage from "./components/WholePage/PostsPage.js";
import Authentication from "./components/Authentication/Authentication.js";
import "./App.css";
import "datejs";
import Login from "./components/Login/Login.js";
import PropTypes from 'prop-types'


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
        <ConditionalView
          usernamevalue={this.props.usernamevalue}
          handleLogOut={this.props.handleLogOut}
        />
      </div>
    );
  }
}

App.propTypes = {
  usernamevalue: PropTypes.string,
  handleLogOut: PropTypes.func
}
// export default App;
const ConditionalView = Authentication(PostsPage)(Login);



export default App;