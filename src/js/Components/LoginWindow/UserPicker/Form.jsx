// UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cxs from 'cxs';

import { connect } from 'react-redux';

import PasswordField from './PasswordField';
import SessionSwitcher from './SessionSwitcher';


const submitIcon = require('img/arrow.svg');
const dropdownIcon = require('img/dropdown-caret.svg');


const UserPanelForm = props => {
  const [state, setState] = useState({
    'sessionSwitcherActive': false,
    'enableAnimation': false
  });

  const toggleSessionSwitcher = () => {
    setState({
      'sessionSwitcherActive': !state.sessionSwitcherActive,
      'enableAnimation': true
    });
  };

  const textTransformDict = {
    'default': 'initial',
    'uppercase': 'uppercase',
    'lowercase': 'lowercase',
    'capitalize': 'capitalize'
  };

  const textTransformStyle = props.settings.style_login_username_capitalization;

  let usernameClasses = ['user-username'];
  usernameClasses.push(cxs({
    "color": props.settings.style_login_username_color,
    "font-style": (props.settings.style_login_username_italic) ? 'italic' : 'initial',
    "font-weight": (props.settings.style_login_username_bold) ? 'bold' : 'initial',
    "text-transform": textTransformDict[textTransformStyle.toLowerCase()]
  }));

  let submitButtonWrapperClasses = cxs({ "background-color": props.settings.style_login_button_color });

  let submitButtonClasses = ['submit-button'];
  submitButtonClasses.push(cxs({
    "color": props.settings.style_login_button_text_color
  }));

  let dropdownCaretWrapperClasses = cxs({ "color": props.settings.style_login_button_text_color });

  let sessionSelectButtonClasses = ['left', 'session-select'];
  sessionSelectButtonClasses.push(cxs({
    "background-color": props.settings.style_login_button_color,
    "color": props.settings.style_login_button_text_color
  }));

  let inputContainerClasses = ['user-input-container'];

  if (!state.enableAnimation) {
    inputContainerClasses.push('animation-enabled');
  }

  if (state.sessionSwitcherActive) {
    inputContainerClasses.push('animate-out');
  }

  return (
    <form className="login-form" onSubmit={ props.handleLoginSubmit }>
      <div className={ usernameClasses.join(" ") }>{ props.activeUser.display_name }</div>
      <div className={ inputContainerClasses.join(' ') }>
        <div className="user-password-container">
          <PasswordField
            password={ props.password }
            passwordFailed={ props.passwordFailed }
            handlePasswordInput={ props.handlePasswordInput }
          />
        </div>
        <div className="submit-row">
          <div className={ sessionSelectButtonClasses.join(' ') } onClick={ toggleSessionSwitcher.bind(this) }>
            <div className='text'>{ props.activeSession.name }</div>
            <div className={ dropdownCaretWrapperClasses } dangerouslySetInnerHTML={{ "__html": dropdownIcon }} />
          </div>
          <div className="right">
            <label className={ submitButtonClasses.join(" ") }>
              <input type="submit" />
              <div className={ submitButtonWrapperClasses } dangerouslySetInnerHTML={{ "__html": submitIcon }} />
            </label>
          </div>
        </div>
      </div>
      <SessionSwitcher
        setActiveSession={ props.setActiveSession }
        close={ toggleSessionSwitcher.bind(this) }
        active={ state.sessionSwitcherActive }
      />
    </form>
  );
};

UserPanelForm.propTypes = {
  'activeUser': PropTypes.object,
  'activeSession': PropTypes.object,
  'settings': PropTypes.object.isRequired,

  'password': PropTypes.string.isRequired,
  'passwordFailed': PropTypes.bool.isRequired,

  'handleLoginSubmit': PropTypes.func.isRequired,
  'handlePasswordInput': PropTypes.func.isRequired,
  'setActiveSession': PropTypes.func.isRequired
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
)(UserPanelForm);
