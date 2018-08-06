import React from 'react';

const Button = ({ clickHandler, children }) => (
  <button className="btn" onClick={clickHandler}>
    {children}
  </button>
);

export default Button;
