
import React from 'react';
import SearchBar from './SearchBar';
import Options from './Options';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">DEV@Deakin</div>
      <SearchBar />
      <Options />
    </header>
  );
};

export default Header;
