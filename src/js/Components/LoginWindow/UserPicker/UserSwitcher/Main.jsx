// UserSwitcher -> Required by Components/UserPanel
// --------------------------------------
// Handles (poorly) the task of switching between
// multiple users on the same system.

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getAvatarOrDefault } from '../../../../Utils/Utils';


const FADE_DURATION = 200;

const UserSwitcher = props => {
  const [state, setState] = useState({
    "fadeOut": false,
    "selectedUser": props.activeUser,
    "selectedUserIndex": window.lightdm.users.indexOf(props.activeUser)
  });
  
  const handleBackButton = e => {
    props.setActiveUser(state.selectedUser);

    setState(old => {
      return {
        ...old,
        "fadeOut": true
      };
    });

    setTimeout(() => {
      setState(old => {
        return {
          ...old,
          "fadeOut": false
        };
      });
    }, FADE_DURATION);
  };

  const handleUserClick = index => {
    setState(old => {
      return {
        ...old,
        "selectedUser": window.lightdm.users[index],
        "selectedUserIndex": index
      };
    });
  };

  const generateUserList = () => {
    let activeIndex = state.selectedUserIndex;

    let avatarBackgroundClasses;
    if (props.avatarEnabled) {
      avatarBackgroundClasses = 'avatar-background';
    } else {
      avatarBackgroundClasses = 'avatar-background avatar-background-hidden';
    }

    const getBody = (user, className, onClick, key) => {
      return (
        <li className={ className } onClick={ onClick } key={ key }>
          <div className={ avatarBackgroundClasses }>
            <div className="avatar-mask">
              <img className="user-avatar" src={ getAvatarOrDefault(user) } />
            </div>
          </div>
          <div className="avatar-name">
            <div className="username">{ user.display_name }</div>
          </div>
        </li>
      );
    };

    let avatars = window.lightdm.users.map((user, index) => {
      let classes = ['avatar-container'];

      if (index === activeIndex) {
        classes.push('active');
      }

      if (index === activeIndex - 1) {
        classes.push('previous');
      }

      if (index === activeIndex + 1) {
        classes.push('next');
      }

      return getBody(user, classes.join(' '), handleUserClick.bind(this, index), user.display_name || user.username);
    });

    // Very hacky. Add an extra copy of the last element to the beginning of the list
    // if the first element in the list is currently selected.
    if (activeIndex === 0) {
      let user = window.lightdm.users[window.lightdm.users.length - 1];
      avatars.splice(0, 0, getBody(user, "avatar-container previous", handleUserClick.bind(this, window.lightdm.users.length - 1), "ecopy1"));
    }

    // Very hacky. Add an extra copy of the first element to the end of the list
    // if the last element in the list is currently selected.
    if (activeIndex === window.lightdm.users.length - 1) {
      let user = window.lightdm.users[0];
      avatars.push(getBody(user, "avatar-container next", handleUserClick.bind(this, 0), "ecopy2"));
    }

    return (
      <ul className="avatar-slider">
        { avatars }
      </ul>
    );
  };

  let classes = ['login-panel-switcher'];
  let userList = generateUserList();
  let userCount = window.lightdm.users.length;

  if (props.active === true) {
    classes.push('active');
  } else if (state.fadeOut === true) {
    classes.push('fadeout');
  }

  return (
    <div className={ classes.join(' ') }>
      <div className="header">User <em>{ state.selectedUserIndex + 1 }</em> of <em>{ userCount }</em></div>
      { userList }
      <div className="bottom" onClick={ handleBackButton.bind(this) }>
        <div className="left">BACK</div>
      </div>
    </div>
  );
};

UserSwitcher.propTypes = {
  'active': PropTypes.bool.isRequired,
  'activeUser': PropTypes.object.isRequired,
  'setActiveUser': PropTypes.func.isRequired,
  'avatarEnabled': PropTypes.bool.isRequired
};

export default connect(
  (state) => {
    return {
      'activeUser': state.user,
      'avatarEnabled': state.settings.avatar_background_enabled
    };
  },
  null
)(UserSwitcher);
