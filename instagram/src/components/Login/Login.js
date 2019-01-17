import React from "react";

const Login = props => {
  return (
    <div className="LoginContainer">
      <form onSubmit={props.submitLogin}>
        <div className="UsernameDiv">
          Username:
          <input
            value={props.usernamevalue}
            type="text"
            name="usernamevalue"
            onChange={props.handleChanges}
          />
        </div>
        <div className="PasswordDiv">
          Password:
          <input
            value={props.passwordvalue}
            type="text"
            name="passwordvalue"
            onChange={props.handleChanges}
          />
          <button className="LoginButton" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
