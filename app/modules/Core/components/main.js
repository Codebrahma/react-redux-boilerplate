/**
 *
 * main.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import BaseComponent from './baseComponent';
/** Modular css in react component */
import cssmodules from 'react-css-modules';
import styles from '../styles/main.scss';

class App extends BaseComponent {

  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default cssmodules(App, styles);
