// DateDisplay -> Required by Main
// --------------------------------------
// Displays date below the login window.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Strftime from 'strftime';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


const DateDisplay = props => { 
  const [state, setState] = useState({
    "initialized": false,
    "formattedDate": "",
  });
  
  useEffect(() => {
    // Wait two seconds, so that the clock can render first and they fade in sequentially rather than in parallel.
    setTimeout(() => {
      setDate();
    }, 2000);
  }, []);

  const setDate = () => {
    setState({
      "initialized": true,
      "formattedDate": Strftime(props.settings.date_format)
    });

    setTimeout(() => {
      setDate();
    }, 1000);
  };

  let dateClasses = ['date'];
  let dateString = state.formattedDate;

  if (state.initialized === true && props.settings.date_enabled === true) {
    dateClasses.push('loaded');
  } else if (state.date_enabled === false) {
    dateClasses.push('invisible');
  }

  return ReactDOM.createPortal(
    <div className={ dateClasses.join(' ') } dangerouslySetInnerHTML={{ "__html": dateString }} />,
    document.getElementById("date-display")
  );
};

DateDisplay.propTypes = {
  'settings': PropTypes.object.isRequired
};

export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(DateDisplay);
