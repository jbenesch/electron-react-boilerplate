import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
// import { Link } from 'react-router';
// import styles from './Home.module.css';

class Home extends Component {
  static propTypes = {
    id: PropTypes.number,
    host: PropTypes.string
  };

  render() {
    const { id, host } = this.props;
    return (
      <div>
        <h1>Hello World</h1>
        <h1>{id}</h1>
        <h1>{host}</h1>
      </div>
    );
  }
}

export default Relay.createContainer(Home, {
  fragments: {
    blog: () => Relay.QL`
      fragment on Blog {
        id
        host
      }
    `,
  },
});
