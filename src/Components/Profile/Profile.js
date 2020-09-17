import React from 'react';
import './Profile.css';
import cn from 'classnames';
import Button from '../Button/Button';
import avatar from '../../images/avatar.jpg';

const Profile = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className } = props;
  return (
    <div className={cn('profile', className)}>
      <div className="profile__user-info">
        <div className="profile__photo" style={{ backgroundImage: `url('${avatar}')` }} />
        <div className="profile__data">
          <h1 className="profile__name">Superman</h1>
          <p className="profile__job">Это проект,работающий отдельно</p>
          <button className="profile__edit" type="button">Edit</button>
        </div>
        <Button className="profile__button" type="button" />
      </div>
    </div>
  );
};

export default Profile;
