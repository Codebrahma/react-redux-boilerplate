
/**
 * Define Routes here
 */

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './modules/Home/components/home';

/*
 * A Route can have one of the three below
 * a. Component - Only the first match renders
 * b. render() - Only the first match renders
 * c. Children - Always be rendered which are matching.
 */
export default class extends React.Component {
  render() {
    return (
      <Route path="/home" component={Home} />
    );
  }
}
