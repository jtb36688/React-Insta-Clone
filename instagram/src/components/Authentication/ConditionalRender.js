import React from 'react'
import Login from "../Login/Login.js";
import App from "../../App.js"


conditionalRender = () => {
    if (this.state.loggedIn) {
      return <App />
    } else {
      return <Login />
    }
  };