import React from 'react';
import './Form.css';
import Button from '../Button/Button';
import InputBlock from '../InputBlock/InputBlock';

const FormPlaceCard = () => (
  <form className="form" name="placeCard" noValidate>
    <h3 className="form__title">Новое место</h3>
    <InputBlock
      type="text"
      name="name"
      placeholder="Название"
      minLength="2"
      maxLength="30"
      required
    />
    <InputBlock
      type="url"
      name="link"
      placeholder="Ссылка на картинку"
      pattern="https?://.+.(png|jpg|gif)"
      required
    />
    <Button className="form__button popup__button_invalid" type="button" value="+" />
  </form>
);

export default FormPlaceCard;
