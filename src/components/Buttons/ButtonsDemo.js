import Buttons from './Buttons';

import React, { Component } from 'react';

import js from '!!raw!./Buttons.js';
import css from '!!raw!./Buttons.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ButtonsDemo extends Component {

  render() {
    const files = [
      { name: 'Buttons.js', source: js },
      { name: 'Buttons.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <Buttons text="Click Me" />
      </Snippet>
    );
  }

};
