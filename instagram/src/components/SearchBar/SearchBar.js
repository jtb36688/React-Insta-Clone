import React from 'react';
// add onSubmit to form tag
// add value and onChange to input field
import './SearchBar.css'

function SearchBar(props) {
    return (
      <div className='WholeSearchBar'>
        <div className='Camera_InstaLogo'>
        <i className="fab fa-instagram"></i>    
        <h2 className="InstagramLogo">Instagram</h2>
        </div>
    <form>
      <input
        className="SearchInput"
        type="text"
        name="titlevalue"
        placeholder="Search"
      />
      </form>
      <div className="Compass_Heart_User">
      <i class="far fa-compass"></i>
      <i class="far fa-heart"></i>
      <i class="far fa-user"></i>
      </div>
      </div>
    )
}

export default SearchBar;