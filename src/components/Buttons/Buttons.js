import styles from './Buttons.css';

import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {
  	let className, text = this.props.text

    if (this.props.submissionInProgress) {
      className = styles.inProgress
      text = "Processing..."
    } else if (this.props.errorOccurred) {
      className = styles.error
    } else if (!this.props.valid) {
      className = styles.disabled
    } else {
      className = styles.normal
    }

    return (
      <button className={className}>
        {text}
      </button>
    );
  }

};
