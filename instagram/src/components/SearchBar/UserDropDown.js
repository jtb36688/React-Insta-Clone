import React from "react";
import "../SearchBar/SearchBar.css";

const UserDropDown = props => {
  return (
    <div className={props.userdropdownbool ? "UserDropDown" : "ClosedDropDown"}>
      <button onClick={props.handleLogOut}>Log Out</button>
      <p>User:<br/><br/>{props.usernamevalue}</p>
      <i onClick={props.closeUserDropDown} style={{cursor: 'pointer', fontSize: '15px'}} class="fas fa-times"></i>
    </div>
  );
};

export default UserDropDown;
