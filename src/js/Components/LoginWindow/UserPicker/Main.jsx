// UserPanel -> Required by Main
// --------------------------------------
// The login management half of the greeter logic.

import cxs from 'cxs';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import UserSwitchButton from './UserSwitcher/UserSwitchButton';
import UserSwitcher from './UserSwitcher';
import UserPanelForm from './Form';
import UserAvatarImg from './UserAvatarImg';


const FADE_IN_DURATION = 200;
const ERROR_SHAKE_DURATION = 600;

const CTRL_KEYCODE = 17;
const A_KEYCODE = 65;


const UserPicker = props => {
  const [state, setState] = useState({
    "fadeIn": false,
    "password": "",
    "passwordFailed": false,
    "switcherActive": false,
  });

  let CTRL_Pressed = false;
  let A_Pressed = false;
 
  const onKeyDown = e => {
    if (e.keyCode === CTRL_KEYCODE) {
      CTRL_Pressed = true;
    }

    if (e.keyCode === A_KEYCODE) {
      A_Pressed = true;
    }

    if (CTRL_Pressed && A_Pressed) {
      if (props.settings.active) {
        return;
      }

      e.preventDefault();

      let target = document.getElementById('password-field');
      target.focus();
      target.select();
    }
  };

  const onKeyUp = e => {
    if (e.keyCode === CTRL_KEYCODE) {
      CTRL_Pressed = false;
    }

    if (e.keyCode === A_KEYCODE) {
      A_Pressed = false;
    }
  }; 

  const getShowPrompt = password => {
    return (text, type) => {
      if (text.match(/text/i)) {
        window.notifications.generate(text);
      } else if (text.match(/password/i)) {
        window.lightdm.respond(password);
      }
    };
  };

  useEffect(() => {
    // Define functions required in the global scope by LightDM.
    window.show_prompt = getShowPrompt(state.password); 
    window.show_message = (text, type) => {
      window.notifications.generate(text, type);
    };

    window.authentication_complete = () => {
      if (window.lightdm.is_authenticated) {
        window.lightdm.start_session(props.activeSession.key);
      } else {
        rejectPassword();
      }
    };

    window.autologin_timer_expired = () => {
      window.notifications.generate("Autologin expired.");
    };

    // Add a handler for Ctrl+A to prevent selection issues.
    document.onkeydown = onKeyDown.bind(this);
    document.onkeyup = onKeyUp.bind(this);

    if (window.lightdm !== undefined) {
      window.lightdm.authentication_complete.connect(() => window.authentication_complete());
      window.lightdm.show_message.connect((text, type) => window.show_message(text, type));
      window.lightdm.show_prompt.connect((text, type) => window.show_prompt(text, type));
      window.lightdm.autologin_timer_expired.connect((text, type) => window.autologin_timer_expired());
    }
  }, []);
 
  useEffect(() => {
    // Update password in prompt function on state change
    window.show_prompt = getShowPrompt(state.password);
    
    if (window.lightdm !== undefined) {
      window.lightdm.show_prompt.connect((text, type) => window.show_prompt(text, type));
    }
  }, [state]);

  const handleLoginSubmit = e => {
    e.preventDefault();

    if (window.__debug === true) {
      if (state.password.toLowerCase() !== 'password') {
        rejectPassword();
      } else {
        window.notifications.generate(`You are now logged in as ${ props.activeUser.display_name } to ${ props.activeSession.name }.`, 'success');
        setState(old => { 
          return {
            ...old,
            "password": ""
          };
        });
      }
    } else {
      window.lightdm.authenticate(props.activeUser.username || props.activeUser.display_name);
    }
  };

  const handleSwitcherClick = e => {
    if (window.lightdm.users.length < 2) {
      window.notifications.generate("You are the only user that is able to log in on this system.", 'error');
      return false;
    } else if (window.lightdm.users.length === 2) {
      // No point in showing them the switcher if there is only one other user. Switch immediately.
      let otherUser = window.lightdm.users.filter((user) => {
        return user.username !== props.activeUser.username;
      })[0];

      setActiveUser(otherUser, true);
      window.notifications.generate("User has been automatically switched to the only other user on this system.");
    } else {
      setState(old => {
        return {
          ...old,
          "switcherActive": true
        };
      });
    }
  };

  const handlePasswordInput = e =>  {
    console.log("set password: " + e.target.value);
    setState(old => {
      return {
        ...old,
        "password": e.target.value
      };
    });
  };

  const setActiveSession = session => {
    props.dispatch({
      'type': 'AUTH_SET_ACTIVE_SESSION',
      'session': session
    });
  };

  const setActiveUser = (user, isBypass) => {
    props.dispatch({
      "type": 'AUTH_SET_ACTIVE_USER',
      "user": user
    });

    // Fade in, except when switching between 1 of 2 users.
    if (isBypass === false || isBypass === undefined) {
      setState(old => {
        return {
          ...old,
          "fadeIn": true,
          "switcherActive": false
        };
      });

      setTimeout(() => {
        setState(old => {
          return {
            ...old,
            "fadeIn": false
          };
        });
      }, FADE_IN_DURATION);
    } else {
      setState(old => {
        return {
          ...old,
          "switcherActive": false
        };
      });
    }
  };

  const rejectPassword = () => {
    window.notifications.generate("Password incorrect, please try again.", 'error');

    setState(old => {
      return {
        ...old,
        "password": "",
        "passwordFailed": true
      };
    });

    setTimeout(() => {
      setState(old => {
        return {
          ...old,
          "passwordFailed": false
        };
      });
    }, ERROR_SHAKE_DURATION);
  };

  
  let loginPanelClasses = ['login-panel-main'];
  let avatarClasses = ['avatar-container'];
  let avatarBackgroundClasses = ['avatar-background'];
  let settings = props.settings;

  if (state.fadeIn === true) {
    loginPanelClasses.push('fadein');
  }

  if (state.switcherActive === true) {
    loginPanelClasses.push('fadeout');
  }

  if (settings.avatar_enabled === false) {
    avatarClasses.push('invisible');
  }

  if (settings.avatar_background_enabled === false) {
    avatarBackgroundClasses.push('avatar-background-hidden');
  }

  let _styles = {
    "background": `linear-gradient(to bottom, ${ settings.style_login_gradient_top_color } 0%, ${ settings.style_login_gradient_bottom_color } 100%)`,
    "border-color": settings.style_login_border_color
  };

  if (settings.style_login_border_enabled === false) {
    _styles['border'] = 'none !important';
  }

  let style = cxs(_styles);

  return (
    <div className={ `user-panel ${ style }` }>
      <div className={ loginPanelClasses.join(' ') }>
        <div className={ avatarClasses.join(' ') }>  
          <UserAvatarImg avatarBackgroundClasses={ avatarBackgroundClasses.join(' ') } image={ props.activeUser.image } />
        </div>
        <UserPanelForm
          password={ state.password }
          passwordFailed={ state.passwordFailed }
          handleLoginSubmit={ handleLoginSubmit.bind(this) }
          handlePasswordInput={ handlePasswordInput.bind(this) }
          setActiveSession={ setActiveSession.bind(this) }
        />
        <div className="bottom">
          <If condition={ settings.user_switcher_enabled }>
            <UserSwitchButton handleSwitcherClick={ handleSwitcherClick.bind(this) } />
          </If>
        </div>
      </div>
      <UserSwitcher
        active={ state.switcherActive }
        setActiveUser={ setActiveUser.bind(this) }
      />
    </div>
  );  
};

UserPicker.propTypes = {
  'dispatch': PropTypes.func.isRequired,
  'settings': PropTypes.object.isRequired,
  'activeUser': PropTypes.object.isRequired,
  'activeSession': PropTypes.object.isRequired
};

export default connect(
  (state) => {
    return {
      'activeUser': state.user,
      'activeSession': state.session,
      'settings': state.settings
    };
  },
  null
)(UserPicker);
