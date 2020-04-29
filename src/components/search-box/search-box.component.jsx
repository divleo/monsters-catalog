import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ placeholder, handleSearch }) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={(event) => handleSearch(event)}
  />
);

export default SearchBox;
