import React from 'react';
import './Button.css';
import cn from 'classnames';

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, type, value } = props;
  return (
  // eslint-disable-next-line react/button-has-type
    <button className={cn('button', className)} type={type}>{value}</button>
  );
};

export default Button;
