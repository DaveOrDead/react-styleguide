import styles from './Snippet.css';
import table from '../styles/table.css';

import React, { Component } from 'react';

export default class Snippet extends Component {

  render() {
    return (
      <div className={styles.root}>

        <div className={styles.output}>
          <div className={styles.fileName}>Mark up</div>
          <div className={styles.outputContent}>
            { JSON.stringify(this.props.children) }
          </div>
        </div>

        <div className={styles.output}>
          <div className={styles.fileName}>Output</div>
          <div className={styles.outputContent}>
            { this.props.children }
          </div>
        </div>

        <div className={styles.output}>
          <div className={styles.fileName}>Props</div>
          <div className={styles.outputContent}>
            <table>
            	<thead>
            		<tr>
            			<th>Name</th>
            			<th>Type</th>
            			<th>Default</th>
            			<th>Description</th>
            		</tr>
            	</thead>
            	<tbody>
            	{
          		this.props.properties.map(property => (
            		<tr>
            			<td>{ property.name }</td>
            			<td>{ property.type }</td>
            			<td>{ property.default }</td>
            			<td>{ property.description }</td>
            		</tr>
            			))
        		}
            	</tbody>
            </table>
          </div>
        </div>

        {
          this.props.files.map(file => (
            <div key={file.name} className={styles.file}>
              <div className={styles.fileName}>{ file.name }</div>
              <pre className={styles.pre}>{ file.source }</pre>
            </div>
          ))
        }

      </div>
    );
  }

};
