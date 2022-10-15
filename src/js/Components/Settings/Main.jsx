// Settings -> Required by Main
// --------------------------------------
// Handles greeter configuration.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'draggable';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import SectionGeneral from './sections/General';
import SectionStyle from './sections/Style';
import SectionThemes from './sections/Themes';
import SaveDialogue from './SaveDialogue';

import { setPageZoom } from 'Utils/Utils';


const SETTINGS_HEIGHT = 300;
const SETTINGS_WIDTH = 600;
let settingsHandle = undefined;

const Settings = props => {
  const [state, setState] = useState({
    "active": props.settings.active,
    "selectedCategory": 'general'
  });

  useEffect(() => {
    let draggable = new Draggable(document.getElementById("settings"), {
      "handle": settingsHandle
    });

    let centerX = ((window.innerWidth - SETTINGS_WIDTH) / 2);
    let centerY = ((window.innerHeight - SETTINGS_HEIGHT) / 2);

    draggable.set(centerX, centerY);

    // Set default zoom
    let defaultZoom = props.settings.page_zoom;
    setPageZoom(defaultZoom);
  }, []);

  const handleCategoryClick = (category, e) => {
    setState(old => {
      return {
        ...old,
        "selectedCategory": category.toLowerCase()
      };
    });
  };

  const handleSettingsBinary = name => {
    props.dispatch({
      "type": 'SETTINGS_TOGGLE_VALUE',
      "name": name
    });
  };

  const handleSettingsClose = () => {
    props.dispatch({
      "type": 'SETTINGS_TOGGLE_ACTIVE'
    });
  };

  const handleSettingsMinimize = () => {
    props.dispatch({
      "type": 'SETTINGS_WINDOW_MINIMIZE'
    });
  };

  const handleSettingsText = (name, e) => {
    let value;

    try {
      value = e.target.value;
    } catch (err) {
      value = e;
    }

    props.dispatch({
      "type": 'SETTINGS_SET_VALUE',
      "name": name,
      "value": value
    });
  };

  const generateCategories = () => {
    let categories = [
      'General',
      'Style',
      'Themes'
    ];

    let listItems = categories.map((category) => {
      let classes = [];

      if (category.toLowerCase() === state.selectedCategory) {
        classes.push('active');
      }

      return (
        <li key={ category } className={ classes.join(' ') } onClick={ handleCategoryClick.bind(this, category) }>
          { category }
        </li>
      );
    });

    return (
      <ul>
        { listItems }
      </ul>
    );
  };

  const generateSection = _category => {
    let category = _category.toLowerCase();
    let componentProps = {
      "settingsToggleBinary": handleSettingsBinary.bind(this),
      "settingsSetValue": handleSettingsText.bind(this)
    };

    if (category === "general") {
      return (<SectionGeneral { ...componentProps } />);
    } else if (category === "style") {
      return (<SectionStyle { ...componentProps } />);
    } else if (category === "themes") {
      return (<SectionThemes { ...componentProps } />);
    }
  };

  let categories = generateCategories();
  let section = generateSection(state.selectedCategory);

  return ReactDOM.createPortal(
    <div>
      <div className="settings-handle" ref={ node => settingsHandle = node }>
        <ul>
          <li className="settings-minimize" onClick={ handleSettingsMinimize.bind(this) }>&#8722;</li>
          <li className="settings-close" onClick={ handleSettingsClose.bind(this) }>&#215;</li>
        </ul>
      </div>
      <div className="settings-categories">
        { categories }
      </div>
      <div className="settings-section">
        { section }
        <SaveDialogue />
      </div>
    </div>,
    document.getElementById("settings")
  );
};

Settings.propTypes = {
  'dispatch': PropTypes.func.isRequired,
  'settings': PropTypes.object.isRequired
};

export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(Settings);
