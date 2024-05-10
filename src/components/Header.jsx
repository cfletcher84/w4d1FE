import React from 'react';
import header from './spongebob.jpg';

const Header = () => {
  return (
    <div>
        <h1>Fletcher</h1>
      <img src={header} alt="header" />
    </div>
  );
}

export default Header;