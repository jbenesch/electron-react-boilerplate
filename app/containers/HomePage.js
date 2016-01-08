import React, { Component } from 'react';
import Relay from 'react-relay';
import Home from '../components/Home';

class HomePage extends Component {
  render() {
    return (
      <div>
        {this.props.blog.id}
      </div>
    );
  }
}

export default Relay.createContainer(HomePage, {
  fragments: {
    blog: () => Relay.QL`
      fragment on Blog {
        id
        host
      }
    `,
  },
});
