import React, { Component } from 'react';
// import styles from './Navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="st-header">
        <a className="st-header-logo" href="/">
          <img alt="Logo" src="https://static.boomtownroi.com/img/logos/logo-boomtown.svg" />
        </a>
      </div>
    );
  }
}
