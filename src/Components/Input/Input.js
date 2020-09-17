import React from 'react';
import './Input.css';

const Input = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <input className="input" {...props} />
);

export default Input;
