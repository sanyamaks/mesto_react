import React from 'react';
import cn from 'classnames';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = (props) => {
// eslint-disable-next-line react/prop-types
  const { className } = props;
  return (
    <header className={cn('header', className)}>
      <Logo />
    </header>
  );
};

export default Header;
