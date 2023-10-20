 
import React from 'react';
import './HeaderImage.css';

const HeaderImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Header" className="header-image" />;
};

export default HeaderImage;
