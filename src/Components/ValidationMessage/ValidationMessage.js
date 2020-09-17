import React from 'react';
import './ValidationMessage.css';
import cn from 'classnames';

const ValidationMessage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, isActive } = props;
  return (
    <p className={cn('validation-message', { 'validation-message_show': isActive }, className)}>Должно быть от 2 до 30 символов</p>
  );
};

export default ValidationMessage;
