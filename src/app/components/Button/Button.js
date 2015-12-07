import styles from './Button.css';

import React, { Component } from 'react';

export default class Button extends Component {

  render() {
  	let stateClass, sizeClass, text = this.props.text

    if (this.props.state === 'inProgress') {
      stateClass = styles.inProgress
      text = "Processing..."
    } else if (this.props.state === 'error') {
      stateClass = styles.error
    } else if (this.props.state === 'disabled') {
      stateClass = styles.disabled
    } else {
      stateClass = styles.normal
    }


    if (this.props.size === 'large') {
      sizeClass = styles.large
    } else if (this.props.size === 'small') {
      sizeClass = styles.small
    }

    return (
      <button className={`${stateClass} ${sizeClass}`} >
        {text}
      </button>
    );
  }

};
