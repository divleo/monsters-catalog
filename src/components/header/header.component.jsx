import React from 'react';

import './header.styles.css';

const Header = ({ title, children }) => (
  <div className="header">
    <h1 className="header__title">{title}</h1>
    {children}
  </div>
);

export default Header;
