import styles from './App.css';

import React, { Component } from 'react';

import ButtonsDemo from './Buttons/ButtonsDemo';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <h1>Campaign Monitor Styleguide</h1>

        <hr className={styles.hr} />

		<h2>Buttons</h2>
        <p>Standard button element</p>

        <ButtonsDemo />

        <hr className={styles.hr} />

      </div>
    );
  }

};
