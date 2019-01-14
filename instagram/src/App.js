import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <SearchBar />
      <PostContainer />
      </div>
    );
  }
}

export default App;
