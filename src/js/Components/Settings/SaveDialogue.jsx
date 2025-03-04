import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { APP_VERSION } from 'Utils/Utils';


const rejectSettings = props => {
  props.dispatch({
    'type': "SETTINGS_REJECT"
  });
};

const saveSettings = props => {
  props.dispatch({
    'type': "SETTINGS_SAVE"
  });
};

export const SaveDialogue = props => {
  return (
    <div className="save-dialogue">
      <span className="version-info">Aether v{ APP_VERSION }</span>
      <button className="settings-reject" onClick={ rejectSettings.bind(this, props) } >revert</button>
      <button className="settings-save" onClick={ saveSettings.bind(this, props) } >save</button>
    </div>
  );
};

SaveDialogue.propTypes = {
  'dispatch': PropTypes.func.isRequired
};

export default connect(
  (state) => {
    return {};
  },
  null
)(SaveDialogue);
