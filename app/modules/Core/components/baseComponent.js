/**
 *
 * baseComponent.js
 *
 * This component should be super component of all components.
 * It will hook-up two feature to all sub-component -
 *     >> Pure render (prevent un-necessary re-renders)
 *     >> Common component level functions
 *
 */

import PureComponent from 'react-pure-render/component';

class BaseComponent extends PureComponent {

  set pageTitle(title) {
    document.title = title;
  }

  autobind(...methods) {
    methods.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

}

export default BaseComponent;
