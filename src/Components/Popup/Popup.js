import React from 'react';
import './Popup.css';
import closeButton from '../../images/close.svg';
import FormPlaceCard from '../Form/FormPlaceCard';
import FormProfileUpdate from '../Form/FormProfileUpdate';
import FormAvatarUpdate from '../Form/FormAvatarUpdate';

const Popup = () => (
  <div className="popup">
    <div className="popup__content">
      <img className="popup__close" src={closeButton} alt="" />
      {/* <FormPlaceCard /> */}
      {/* <FormProfileUpdate /> */}
      <FormAvatarUpdate />
    </div>
  </div>
);

export default Popup;
