// Clock -> Required by Components/CommandPanel
// --------------------------------------
// Just a clock.

import React, { useState, useEffect } from 'react';
import Strftime from 'strftime';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


const Clock = props => {
  const [state, setState] = useState({
    "initialized": false,
    "formattedTime": "",
  });

  useEffect(() => {
    setTimeout(() => {
      updateClock();
      setState(old => {
        return {
          ...old,
          "initialized": true
        };
      });
    }, 1000);
  }, []);

  const updateClock = () => {
    setState(old => {
      return {
        ...old,
        "formattedTime": Strftime(props.settings.time_format)
      };
    });

    setTimeout(() => {
      updateClock();
    }, 1000);
  };

  let classes = ['right', 'clock'];
  let currentTime = state.formattedTime;

  if (state.initialized === true && props.settings.time_enabled === true) {
    classes.push('loaded');
  } else if (props.settings.time_enabled === false) {
    classes.push('invisible');
  }

  return (
    <div className={ classes.join(' ') }>
      { currentTime }
    </div>
  );
};

Clock.propTypes = {
  'settings': PropTypes.object.isRequired
};

export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(Clock);
