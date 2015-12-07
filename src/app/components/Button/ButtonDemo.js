import Button from './Button';

import React, { Component } from 'react';

import js from '!!raw!./Button.js';
import css from '!!raw!./Button.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ButtonDemo extends Component {

  render() {

  	const summary = {
  		title: 'Button',
  		description: 'Standard button element.  There will be some really awesome text here about how to use it and all that type of good stuff.'
  	};

    const files = [
      { name: 'Button.js', source: js },
      { name: 'Button.css', source: css }
    ];

    const properties = [
      { name: 'text', type: 'string', default: 'click me', description: 'The main text of the button' },
      { name: 'submissionInProgress', type: 'boolean', default: 'false', description: 'Button state for if an action is in progress' }
     ];

     const standardButton = {
        title: 'Standard Button',
        description: 'I am a standard button.  I really like it',
        markup: '<Button text="Click Me" submissionInProgress="true"/>'
     };


    return (

      <Snippet files={files} properties={properties} summary={summary}>

        <Button text="Click Me" submissionInProgress="true" summary={standardButton} />

      </Snippet>
    );
  }

};
