import React from 'react';

const buttonStyle = {
  margin: '10px 0',
  backgroundColor: 'aqua',
};

const Button = ({ label, click, children }) => (
  <button
    style={buttonStyle}
    onPress={click}
  >
    {label || children}
  </button>
);

export default Button;