import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Event, Signals } from 'Logic/Signals';
import ExperimentalStars from 'Components/ExperimentalStars';


const ExperimentalStarsWrapper = props => {
  const [enabled, setEnabled] = useState(props.settings.experimental_stars_enabled);

  useEffect(() => {
    Signals.listen(Event.UPDATE_STARS_ENABLED, enabled => {
      setEnabled(enabled);
    }); 
  }, []);

  return (
    <If condition={ enabled } >
      <ExperimentalStars key='experimental-stars' />
    </If>
  );
};

ExperimentalStarsWrapper.propTypes = {
  'settings': PropTypes.object.isRequired,
};

export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(ExperimentalStarsWrapper);
