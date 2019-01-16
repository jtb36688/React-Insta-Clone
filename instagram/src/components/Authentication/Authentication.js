import React from "react";
import Login from "../Login/Login.js";

const Authentication = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("loginbool")) {
        this.setState({
          loggedIn: JSON.parse(localStorage.getItem("loginbool"))
        });
      }
    }

    componentDidUpdate() {
      localStorage.setItem("loginbool", JSON.stringify(this.state.loggedIn));
    }

    conditionalRender = () => {
      if (this.state.loggedIn) {
        return <App />
      } else {
        return <Login />
      }
    };

    render() {

        {this.conditionalRender}  

    }


  };

export default Authentication;
