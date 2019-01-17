import React from "react";
// add onSubmit to form tag
// add value and onChange to input field
import "./SearchBar.css";
import UserDropDown from "./UserDropDown.js";

function SearchBar(props) {
  return (
    <div className={props.userdropdownbool ? "WholeSearchBarCollapsed" : "WholeSearchBar"}>
      <div className="Camera_InstaLogo">
        <i className="fab fa-instagram" />
        <h2 className="InstagramLogo">Instagram</h2>
      </div>
      <form className="SearchForm">
        <input
          className="SearchInput"
          type="text"
          name="titlevalue"
          placeholder="Search"
        />
      </form>
      <div className="Compass_Heart_User">
        <i class="far fa-compass" />
        <i class="far fa-heart" />
        <i class="far fa-user" onClick={props.handleUserClick} />
        <UserDropDown
          handleLogOut={props.handleLogOut}
          userdropdownbool={props.userdropdownbool}
          usernamevalue={props.usernamevalue}
          closeUserDropDown={props.handleUserClick}
        />
      </div>
    </div>
  );
}

export default SearchBar;
