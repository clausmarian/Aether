// CommandPanel -> Required by Main
// --------------------------------------
// The system management half of the greeter logic.
// Displays system info and handles Sleep, Shutdown, etc.

import cxs from 'cxs';
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as SystemOperations from 'Logic/SystemOperations';
import WallpaperSwitcher from './WallpaperSwitcher';
import Clock from './Clock';
import List from './List';


const Sidebar = props => { 
  const handleCommand = (command, disabled, e) => {
    e.preventDefault();

    if (disabled !== false) {
      window.notifications.generate(`${ command } is disabled on this system.`, "error");
      return false;
    }

    SystemOperations.handleCommand(command);
  };

  const getEnabledCommands = () => {
    let commands = {
      "Shutdown": (window.lightdm.can_shutdown && props.settings.command_shutdown_enabled),
      "Reboot": (window.lightdm.can_restart && props.settings.command_reboot_enabled),
      "Hibernate": (window.lightdm.can_hibernate && props.settings.command_hibernate_enabled),
      "Sleep": (window.lightdm.can_suspend && props.settings.command_sleep_enabled)
    };

    // Filter out commands we can't execute.
    let enabledCommands = (
      Object.keys(commands)
        .map((key) => commands[key] ? key : false)
        .filter((command) => command !== false)
    );

    // Are both hibernation and suspend disabled?
    // Add the row back and disable it so that the user is aware of what's happening.
    if (window.lightdm.can_suspend === false && window.lightdm.can_hibernate === false) {
      enabledCommands.push("Sleep.disabled");
    }

    return enabledCommands;
  };

  let settings = props.settings;

  let hostname = window.lightdm.hostname;
  let hostnameClasses = ['left', 'hostname'];
  let hostNameDisabled = (settings.hostname_enabled === false);

  let commands = getEnabledCommands();

  if (hostNameDisabled) {
    hostnameClasses.push('invisible');
  }

  let styles = cxs({
    'background': settings.style_command_background_color
  });

  return (
    <div className={ `command-panel ${ styles }` }>
      <WallpaperSwitcher />
      <List
        enabledCommands={ commands }
        handleCommand={ handleCommand.bind(this) }
      />
      <div className="bottom">
        <div className={ hostnameClasses.join(' ') }>{ hostname }</div>
        <Clock />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  'settings': PropTypes.object.isRequired
};

export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(Sidebar);
