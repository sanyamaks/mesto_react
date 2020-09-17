import React from 'react';
import './Form.css';
import Button from '../Button/Button';
import InputBlock from '../InputBlock/InputBlock';

const FormAvatarUpdate = () => (
  <form className="form" name="avatar" noValidate>
    <h3 className="form__title">Обновить аватар</h3>
    <InputBlock
      ype="url"
      name="link"
      placeholder="Ссылка на аватар"
      pattern="https?://.+.(png|jpg|gif)"
      required
    />
    <Button className="form__button popup__button_invalid" type="button" value="Сохранить" />
  </form>
);

export default FormAvatarUpdate;
