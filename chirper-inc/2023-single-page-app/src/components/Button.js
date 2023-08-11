import React from 'react';

const buttonStyle = {
  margin: '10px 0',
  backgroundColor: 'aqua',
};

const Button = ({ label, handleClick }) => (
  <button
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;