import React, { useState } from 'react';
import './InputBlock.css';
import Input from '../Input/Input';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

const InputBlock = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="input-block">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input {...props} />
      {/* className="popup__input_type_link-url" */}
      {/* className="popup__input_type_name" */}
      <ValidationMessage className="input-block__validation-message" isActive={isActive} />
    </div>
  );
};

export default InputBlock;
