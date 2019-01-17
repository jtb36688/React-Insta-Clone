import React from "react";
import "../SearchBar/SearchBar.css";
import styled, { css } from "styled-components";

const UserDropDown = props => {
  return (
    <DropDownContainer toggleDropDown={props.userdropdownbool}>
      <LogOutButton onClick={props.handleLogOut}>Log Out</LogOutButton>
      <p>
        User:
        <br />
        <br />
        {props.usernamevalue}
      </p>
      <i
        onClick={props.closeUserDropDown}
        style={{ cursor: "pointer", fontSize: "15px" }}
        className="fas fa-times"
      />
    </DropDownContainer>
  );
};

const LogOutButton = styled.button`
  background-color: #8b9dc3;
  color: white;
`;

const DropDownContainer = styled.div`
  ${props =>
    props.toggleDropDown
      ? css`
          padding: 5px;
          position: absolute;
          z-index: 2;
          width: 250px;
          top: 60px;
          left: 68.8%;
          background-color: lightgrey;
          height: 70px;
          display: flex;
          justify-content: space-between;
        `
      : css`
          display: none;
        `}
`;

export default UserDropDown;
