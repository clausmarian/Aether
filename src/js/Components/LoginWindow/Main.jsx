// LoginWindow -> Required by Main
// --------------------------------------
// Style / Composition wrapper.

import cxs from 'cxs';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Event, Signals } from 'Logic/Signals';

import Sidebar from './Sidebar';
import UserPicker from './UserPicker';
import Settings from 'Components/Settings';
import DateDisplay from 'Components/DateDisplay';
import SettingsToggler from 'Components/SettingsToggler';
import ExperimentalStars from 'Components/ExperimentalStars';


const LoginWindow = props => { 
  useEffect(() => {
    document.getElementById('preloader').className += 'loaded';
    Signals.broadcast(Event.PRIMARY_LOADED);
  }, []);

  const settings = props.settings;
  Signals.broadcast(Event.UPDATE_STARS_ENABLED, {
    'enabled': props.settings.experimental_stars_enabled
  });

  let style = cxs({
    "border-radius": settings.window_border_radius,
    "font-size": settings.window_font_size
  });

  return [
    <div className={ `login-window ${ style }` } key='login-window'>
      <Sidebar />
      <UserPicker />
    </div>,

    <DateDisplay key='date-display' />,
    <Settings key='settings-window' />,
    <SettingsToggler key='settings-button' />,
    <If condition={ props.settings.experimental_stars_enabled } key='experimental-stars-wrap' >
      <ExperimentalStars key='experimental-stars' />
    </If>,
  ];
};

LoginWindow.propTypes = {
  'settings': PropTypes.object.isRequired,
};

export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(LoginWindow);
