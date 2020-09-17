import React from 'react';
import './Form.css';
import Button from '../Button/Button';
import InputBlock from '../InputBlock/InputBlock';

const FormProfileUpdate = () => (
  <form className="form" name="profile" noValidate>
    <h3 className="form__title">Редактировать профиль</h3>
    <InputBlock
      type="text"
      name="name"
      placeholder="Имя"
      minlength="2"
      maxlength="30"
      required
    />
    <InputBlock
      type="text"
      name="description"
      placeholder="О себе"
      minlength="2"
      maxlength="30"
      required
    />
    <Button className="form__button popup__button_invalid" type="button" value="Сохранить" />
  </form>
);

export default FormProfileUpdate;
