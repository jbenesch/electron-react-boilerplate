import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import Sidebar from '../components/Sidebar';

class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="padded-more">
            <div className="pane-group">
              <div className="pane-sm sidebar">
                <Sidebar />
              </div>
              <div className="pane">
                <h1>I am here</h1>
                {this.props.children}
                {console.log(this.props.blog)}
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

export default Relay.createContainer(App, {
  fragments: {
    blog: () => Relay.QL`
      fragment on Blog {
        id
        host
      }
    `,
  },
});
