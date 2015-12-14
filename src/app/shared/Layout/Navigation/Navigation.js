import styles from './Navigation.css';

import React, { Component } from 'react';

export default class Navigation extends Component {

  render() {
    return (
            <nav className={ styles.navigationContainer }>
                <ul className={ styles.navigation }>
                    <li className={ styles.navItem }>
                        <a className={ styles.navItem__link } href="">Avatar</a>
                    </li>
                    <li className={ styles.navItem }>
                        <a className={ styles.navItem__link } href="">Button</a>
                    </li>
                </ul>
            </nav>
    );
  }

};
