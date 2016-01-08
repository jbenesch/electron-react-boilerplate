import React, { Component, PropTypes } from 'react';
import Sidebar from '../components/Sidebar';

const mainWindow = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '225px',
  right: '0',
  padding: '10px'
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Sidebar />
        <div style={mainWindow}>
          {this.props.children}
        </div>
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
