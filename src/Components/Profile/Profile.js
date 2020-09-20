import React from 'react';
import './Profile.css';
import cn from 'classnames';
import Button from '../Button/Button';
import avatar from '../../images/avatar.jpg';
import Popup from '../Popup/Popup';
import FormPlaceCard from '../Form/FormPlaceCard';
import FormProfileUpdate from '../Form/FormProfileUpdate';
import FormAvatarUpdate from '../Form/FormAvatarUpdate';

const Profile = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className } = props;
  return (
    <div className={cn('profile', className)}>
      <div className="profile__user-info">
        <div
          className="profile__photo"
          style={{ backgroundImage: `url('${avatar}')` }}
        />
        <div className="profile__data">
          <h1 className="profile__name">Superman</h1>
          <p className="profile__job">Это проект,работающий отдельно</p>
          <button className="profile__edit" type="button">
            Edit
          </button>
        </div>
        <Button className="profile__button" type="button" value="+" />
      </div>
      <Popup isOpen={false}>
        <FormAvatarUpdate />
      </Popup>
      <Popup isOpen={false}>
        <FormPlaceCard />
      </Popup>
      <Popup isOpen={false}>
        <FormProfileUpdate />
      </Popup>
    </div>
  );
};

export default Profile;
