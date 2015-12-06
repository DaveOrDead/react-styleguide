import Button from './Button';

import React, { Component } from 'react';

import js from '!!raw!./Button.js';
import css from '!!raw!./Button.css';
import html from '!!raw!./ButtonSample.html';
import Snippet from 'shared/Snippet/Snippet';

export default class ButtonDemo extends Component {

  render() {
    const files = [
      { name: 'ButtonSample.html', source: html },
      { name: 'Button.js', source: js },
      { name: 'Button.css', source: css }
    ];

    const properties = [
      { name: 'text', type: 'string', default: 'click me', description: 'The main text of the button' },
      { name: 'inProgress', type: 'boolean', default: 'false', description: 'Button state for if an action is in progress' }
     ];

    return (
      <Snippet files={files} properties={properties}>
        <Button text="Click Me" />

      </Snippet>
    );
  }

};
