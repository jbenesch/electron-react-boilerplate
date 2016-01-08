import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.module.css';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <ul>
          <li className={styles.active}>
            <Link to="/">
              <i className="fa fa-tachometer" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <i className="fa fa-newspaper-o" /> Blogs
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
