import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';
import SmartData from './smart-data.js'
// this is an array of 3 objects with keys: username, thumbnailUrl, imageUrl, likes, timestamp, and comments
// comments is an array of objects with keys: username, text
console.log(SmartData);

class App extends Component {
  constructor() {
  super();
  this.state = {
    socialdata: SmartData

  };
  }


  render() {
    return (
      <div>
      <SearchBar />
      <PostContainer
      postsarray = {this.state.socialdata} 
      />
      </div>
    );
  }
}

export default App;
