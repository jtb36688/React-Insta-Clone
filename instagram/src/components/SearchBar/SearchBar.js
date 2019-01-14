import React from 'react';
// add onSubmit to form tag
// add value and onChange to input field

function SearchBar() {
    return (
    <form style={{textAlign: 'center'}}>
      <input
        
        type="text"
        name="titlevalue"
        placeholder="Todo Title"
        
      />
      </form>
    )

}

export default SearchBar;