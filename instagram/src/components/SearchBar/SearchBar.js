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
      <form onSubmit={props.handleSearch} className="SearchForm">
        <input
          value={props.searchfield}
          className="SearchInput"
          type="text"
          name="searchfield"
          placeholder="Search"
          onChange={props.searchChange}
        />
      </form>
      <div className="Compass_Heart_User">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" onClick={props.handleUserClick} />
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
