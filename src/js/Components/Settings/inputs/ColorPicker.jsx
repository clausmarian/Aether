// FormColorPicker -> Required by Settings/Settings*
// --------------------------------------
// Wraps the jsColorPicker lib to provide a color picker.

import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import PropTypes from 'prop-types';

import { ChromePicker } from 'react-color';


export const ColorPicker = props => { 
  const [state, setState] = useState({
    'active': false,
    'color': tinycolor(props.value).toHsl()
  });

  const handleChange = (color, e) => {
    let colorString = tinycolor(color[color.source]).toHslString();

    setState(old => {
      return {
        ...old,
        'color': color[color.source]
      };
    });

    props.boundFunction(colorString);
  };

  const handleClose = e => {
    setState(old => { 
      return {
        ...old,
        'active': false 
      };
    });
  };

  const handleOpen = e => {
    setState(old => { 
      return {
        ...old,
        'active': true 
      };
    });
  };

  let elementID = `option-${ props.name.replace(" ", "-")}`;
  let swatchContainerClasses = ['swatch-container'];
  let colorPicker = false;

  if (state.active === true) {
    swatchContainerClasses.push("active");

    colorPicker = (
      <ChromePicker color={ state.color } onChange={ handleChange.bind(this) } />
    );
  }

  return (
    <li className="settings-item settings-color">
      <label htmlFor={ elementID } title={ props.name }>{ props.name }</label>
      <div id={ elementID } className={ swatchContainerClasses.join(" ") }>
        <div className="swatch" onClick={ handleOpen.bind(this) }>
          <div className="swatch-fg" style={{ 'backgroundColor': props.value }} />
          <div className="swatch-bg swatch-bg-black" />
          <div className="swatch-bg swatch-bg-gray" />
          <div className="swatch-bg swatch-bg-white" />
        </div>
        { colorPicker }
        <div className="colorpicker-background" onClick={ handleClose.bind(this) }/>
      </div>
    </li>
  );
};

ColorPicker.propTypes = {
  'value': PropTypes.string.isRequired,
  'name': PropTypes.string.isRequired,
  'boundFunction': PropTypes.func.isRequired
};

export default ColorPicker;
