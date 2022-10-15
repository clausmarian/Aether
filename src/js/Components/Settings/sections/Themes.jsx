import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { connect } from 'react-redux';

import * as Settings from 'Logic/Settings';
import DefaultThemes from '../DefaultThemes';


const Theme = props => {
  const getColors = () => {
    let colors = [];

    for (let setting of Object.keys(props.theme)) {
      if (setting.startsWith('style') && setting.indexOf('color') !== -1) {
        colors.push([setting, props.theme[setting]]);
      }
    }

    return colors;
  };

  let colorItems = getColors().map(([name, color]) =>
    <li
      key={ name }
      className="theme-color-block"
      style={ { 'backgroundColor': color } }
      alt={ color }
      title={ color }
    >
        &nbsp;
    </li>
  );

  let isDefaultTheme = !(Object.keys(DefaultThemes).indexOf(props.name) !== -1);

  return (
    <div className="theme">
      <div className="upper">
        <h5 className="theme-name">{ props.name}</h5>
        <button onClick={ props.loadTheme.bind(this, props.name, props.theme) }>preview</button>
        <If condition={ isDefaultTheme }>
          <button className="delete" onClick={ props.deleteTheme.bind(this, props.name) }>delete</button>
        </If>
      </div>
      <ul>
        { colorItems }
      </ul>
    </div>
  );
};

Theme.propTypes = {
  'name': PropTypes.string.isRequired,
  'theme': PropTypes.object.isRequired,
  'loadTheme': PropTypes.func.isRequired,
  'deleteTheme': PropTypes.func.isRequired
};


export const SettingsThemes = props => { 
  const [state, setState] = useState({
    'themes': { ...Settings.getUserThemes(), ...DefaultThemes },
    'nodes': {}
  });

  const handleDeleteTheme = themeName => {
    Settings.deleteTheme(themeName);

    setState(old => {
      return {
        ...old,
        'themes': { ...Settings.getUserThemes(), ...DefaultThemes }
    
      };
    });

    window.notifications.generate(`Theme has been deleted!`, "success");
  };

  const handleLoadTheme = (themeName, theme) => {
    props.dispatch({
      'type': 'SETTINGS_APPLY_THEME',
      'name': themeName,
      'theme': theme
    });
  };

  const handleSaveTheme = e => {
    e.preventDefault();
    e.stopPropagation();

    let themeName = state.nodes.themeName.value;

    Settings.saveTheme(themeName, props.settings);

    setState(old => {
      return {
        ...old,
        'themes': { ...Settings.getUserThemes(), ...DefaultThemes }
      };
    });

    window.notifications.generate(`Your theme has been saved.`, "success");
  };


  let themes = state.themes;
  let themeItems = Object.keys(themes).map(themeName =>
    <Theme
      key={ themeName }
      name={ themeName }
      theme={ themes[themeName] }
      loadTheme={ handleLoadTheme.bind(this) }
      deleteTheme={ handleDeleteTheme.bind(this) }
    />
  );

  return (
    <div className="settings-themes">
      <div className="theme-saver">
        <p>Save current settings as a theme?</p>
        <input type="text" name="theme-name" defaultValue="" placeholder="Theme Name" ref={ node => state.nodes.themeName = node } />
        <button className="save-theme" onClick={ handleSaveTheme.bind(this) }>
            save theme
        </button>
      </div>
      <div className="theme-list">
        { themeItems }
      </div>
    </div>
  );
};

SettingsThemes.propTypes = {
  'settings': PropTypes.object.isRequired,
  'dispatch': PropTypes.func.isRequired
};

export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(SettingsThemes);
