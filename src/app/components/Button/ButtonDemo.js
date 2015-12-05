import Button from './Button';

import React, { Component } from 'react';

import js from '!!raw!./Button.js';
import css from '!!raw!./Button.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ButtonDemo extends Component {

  render() {
    const files = [
      { name: 'Button.js', source: js },
      { name: 'Button.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <Button text="Click Me" />
      </Snippet>
    );
  }

};
