import styles from './App.css';

import React, { Component } from 'react';

import Navigation from './shared/Layout/Navigation/Navigation';
import ButtonDemo from './components/Button/ButtonDemo';

export default class App extends Component {

  render() {
    return (
      <div className={`${styles.app} ${styles.grid}`}>

        <aside className={`${styles.grid__item} ${styles.u_width_30pc}`} >
            <div className={styles.sidebar}>

            <Navigation />

            </div>
        </aside>

        <main className={styles.grid__item}>

            <h1>React Styleguide</h1>

            <hr className={styles.hr} />

            <ButtonDemo />

            <hr className={styles.hr} />

        </main>

      </div>
    );
  }

};
