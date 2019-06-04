import React from "react";
import PropTypes from "prop-types";
import UserDropDown from "./UserDropDown.js";
import styled, { css } from "styled-components";

function SearchBar(props) {
  return (
    <SearchBarContainer togglecollapse={props.userdropdownbool}>
      <CameraLogoContainer>
        <i className="fab fa-instagram" />
        <H2 InstagramLogo>Instagram</H2>
      </CameraLogoContainer>
      <SearchForm onSubmit={props.handleSearch}>
        <SearchInput
          value={props.searchfield}
          type="text"
          name="searchfield"
          placeholder="Search"
          onChange={props.searchChange}
        />
      </SearchForm>
      <RightIconsContainer>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i
          className="far fa-user"
          style={{ color: "orange", cursor: "pointer"}}
          onClick={props.handleUserClick}
        />
        <UserDropDown
          handleLogOut={props.handleLogOut}s
          userdropdownbool={props.userdropdownbool}
          usernamevalue={props.usernamevalue}
          closeUserDropDown={props.handleUserClick}
        />
      </RightIconsContainer>
    </SearchBarContainer>
  );
}


// userdropdown 4 props


SearchBar.propTypes = {
  userdropdownbool: PropTypes.bool,
  searchfield: PropTypes.string,
  usernamevalue: PropTypes.string,
  handleSearch: PropTypes.func,
  handleUserClick: PropTypes.func,
  handleLogOut: PropTypes.func,
  handleUserClick: PropTypes.func,
}

const RightIconsContainer = styled.div`
  display: flex;
  width: 17%;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 100%;
  text-align: center;
  background-color: #fcfcfd;
  border: 0.5px solid lightgrey;
  height: 25px;
`;

const SearchForm = styled.form`
  width: 25%;
`;

const H2 = styled.h2`
  ${props =>
    props.InstagramLogo &&
    css`
      padding-left: 7%;
      height: 30px;
      border-left: 1px solid black;
    `}
`;

const SearchBarContainer = styled.div`
  ${props =>
    props.togglecollapse
      ? css`
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          border-bottom: 1px solid lightgrey;
          padding-bottom: 5px;
          position: relative;
          margin-bottom: 75px;
        `
      : css`
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          border-bottom: 1px solid lightgrey;
          padding-bottom: 5px;
          position: relative;
        `}
`;

const CameraLogoContainer = styled.div`
  display: flex;
  width: 18%;
  justify-content: space-around;
  align-items: baseline;
  font-size: 25px;
  width: 22%;
  margin: 10px 0;
`;

export default SearchBar;
