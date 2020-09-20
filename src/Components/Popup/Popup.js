import React from 'react';
import { createPortal } from 'react-dom';
import './Popup.css';
import closeButton from '../../images/close.svg';

const Popup = (props) => (props.isOpen ? createPortal(
  <div className="popup">
    <div className="popup__content">
      <img className="popup__close" src={closeButton} alt="" />
      {props.children}
    </div>
  </div>,
  document.getElementById('modal-root'),
) : null);

export default Popup;
