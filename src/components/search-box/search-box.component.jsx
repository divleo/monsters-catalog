import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ placeholder, onSearchChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={(e) => onSearchChange(e.target.value)}
  />
);

export default SearchBox;
