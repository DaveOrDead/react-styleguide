import styles from './App.css';

import React, { Component } from 'react';

import ButtonDemo from './components/Button/ButtonDemo';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <h1>Campaign Monitor Styleguide</h1>

        <hr className={styles.hr} />

		<h2>Button</h2>
        <p>Standard button element.  There will be some really awesome text here about how to use it and all that type of good stuff.</p>

        <ButtonDemo />

        <hr className={styles.hr} />

      </div>
    );
  }

};
