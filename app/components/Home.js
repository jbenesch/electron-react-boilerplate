import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
// import styles from './Home.module.css';

export default class Home extends Component {
  static propTypes = {
    blog: PropTypes.element.isRequired
  };

  render() {
    const { id, host } = this.props.blog;
    return (
      <div>
        <h1>Hello World</h1>
        <h1>{id}</h1>
        <h1>{host}</h1>
      </div>
    );
  }
}
