import React from "react";
import "./Login.css";

const Login = props => {
  return (
    <div className="LoginContainer">
      <div className="LoginDialog">
        <form className="LoginForm" onSubmit={props.submitLogin}>
          <h1 className="LoginTitle">Fake Instagram</h1>
          Please Login:
          <div className="InputsButtonDiv">
            <div className="InputsDiv">
              <div className="UsernameDiv">
                <div>Username:</div>
                <input
                  className="UsernameInput"
                  value={props.usernamevalue}
                  type="text"
                  name="usernamevalue"
                  onChange={props.handleChanges}
                />
              </div>
              <div className="PasswordDiv">
                <div>Password:</div>
                <input
                  className="PasswordInput"
                  value={props.passwordvalue}
                  type="password"
                  name="passwordvalue"
                  onChange={props.handleChanges}
                />
              </div>
            </div>
            <button className="LoginButton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
