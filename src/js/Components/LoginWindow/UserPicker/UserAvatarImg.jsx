import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getDefaultAvatar } from '../../../Utils/Utils';


const UserAvatarImg = props => {
  const onImgError = evt => {
    evt.target.src = getDefaultAvatar();
  };

  return (
    <div className= { props.avatarBackgroundClasses }>
      <div className="avatar-mask">
        <img className="user-avatar" src={ props.image } onError={ onImgError } />
      </div>
    </div>
  );
};

UserAvatarImg.propTypes = {
  'avatarBackgroundClasses': PropTypes.string.isRequired,
  'image': PropTypes.string.isRequired
};

export default connect(
  state => { 
    return {
    };
  },
  null
)(UserAvatarImg);
