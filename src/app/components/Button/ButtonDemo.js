import Button from './Button';

import React, { Component } from 'react';

import js from '!!raw!./Button.js';
import css from '!!raw!./Button.css';
import ComponentSummary from 'shared/Layout/ComponentSummary';

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
      { name: 'state', type: 'string', default: 'normal', description: 'Accepts: "inProgress", "normal", disabled", "error"' },
      { name: 'size', type: 'string', default: 'base', description: 'Accepts: "base", "small", "large"'}
     ];

     const standardButton = {
        title: 'Standard Button',
        description: 'I am a standard button.  I really like it',
        markup: '<Button text="Click Me" />'
     };


    return (

      <ComponentSummary files={files} properties={properties} summary={summary}>

        <Button text="Click Me" state="inProgress" size="small" summary={standardButton} />

      </ComponentSummary>
    );
  }

};
