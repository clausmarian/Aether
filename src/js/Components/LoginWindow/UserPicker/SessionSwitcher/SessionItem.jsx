// SessionItem -> Required by Components/UserPanel/SessionSelector
// --------------------------------------
// Just one session to choose from

import PropTypes from 'prop-types';
import React from 'react';
import cxs from "cxs";

const ANIMATION_DURATION = 100;

const SessionItem = props => {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(props.session.key);
  };

  let classes = ['login-session-item'];
  classes.push(cxs({
    "color": props.buttonTextColor,
    "background-color": props.buttonBackgroundColor,
    "animation-delay": `${ props.index * ANIMATION_DURATION }ms !important`
  }));

  return (
    <div className="_transform-wrapper">
      <div className={ classes.join(' ') } onClick={ handleClick.bind(this) }>
        <div className='text'>{ props.session.name }</div>
      </div>
    </div>
  );
};

SessionItem.propTypes = {
  'buttonBackgroundColor': PropTypes.string.isRequired,
  'buttonTextColor': PropTypes.string.isRequired,
  'session': PropTypes.object.isRequired,
  'handleClick': PropTypes.func.isRequired,
  'index': PropTypes.number.isRequired
};

export default SessionItem;
