import React, { Component, PropTypes } from 'react';
import Sidebar from '../components/Sidebar';

/*
const mainWindow = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '225px',
  right: '0',
  padding: '10px'
};
*/

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="window">
        <header className="toolbar toolbar-header">
  <div className="toolbar-actions">
    <div className="btn-group">
      <button className="btn btn-default">
        <span className="icon icon-home"></span>
      </button>
      <button className="btn btn-default">
        <span className="icon icon-folder"></span>
      </button>
      <button className="btn btn-default active">
        <span className="icon icon-cloud"></span>
      </button>
      <button className="btn btn-default">
        <span className="icon icon-popup"></span>
      </button>
      <button className="btn btn-default">
        <span className="icon icon-shuffle"></span>
      </button>
    </div>

    <button className="btn btn-default">
      <span className="icon icon-home icon-text"></span>
      Filters
    </button>

    <button className="btn btn-default btn-dropdown pull-right">
      <span className="icon icon-megaphone"></span>
    </button>
  </div>
        </header>
        <div className="window-content">
          <div className="padded-more">
            <div className="pane-group">
              <div className="pane-sm sidebar">
                <Sidebar />
              </div>
              <div className="pane">
                {this.props.children}
                {
                  (() => {
                    if (process.env.NODE_ENV !== 'production') {
                      const DevTools = require('./DevTools');
                      return <DevTools />;
                    }
                  })()
                }
              </div>
            </div>
          </div>
        </div>
        <footer className="toolbar toolbar-footer">
        </footer>
      </div>
    );
  }
}
