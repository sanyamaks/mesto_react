import React from 'react';
import './Place.css';

const Place = () => (
  <div className="place-card">
    <div className="place-card__image">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button className="place-card__delete-icon" type="button" />
    </div>

    <div className="place-card__description">
      <h3 className="place-card__name">Супермен</h3>
      <div className="place-card__like-container">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button className="place-card__like-icon" type="button" />
        <p className="place-card__number-likes">0</p>
      </div>
    </div>

  </div>
);

export default Place;
