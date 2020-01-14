import React from 'react';

import './search-box.styles.css';

function SearchBox(props) {
  const { placeholder, onSearchChange } = props;

  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={(event) => onSearchChange(event)}
    />
  );
}

export default SearchBox;
