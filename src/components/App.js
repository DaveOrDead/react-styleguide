import styles from './App.css';

import React, { Component } from 'react';

import ButtonDemo from './Button/ButtonDemo';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <h1>Campaign Monitor Styleguide</h1>

        <hr className={styles.hr} />

		<h2>Button</h2>
        <p>Standard button element</p>

        <ButtonDemo />

        <hr className={styles.hr} />

      </div>
    );
  }

};
