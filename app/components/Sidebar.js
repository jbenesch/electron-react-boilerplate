import React, { Component } from 'react';
import { Link } from 'react-router';
// import styles from './Sidebar.module.css';

export default class Sidebar extends Component {
  render() {
    return (
      <nav className="st-navigation">
        <div className="st-nav-inner" id="bt-now-navigation-menu">
          <ul className="st-nav-list">
            <li>
              <Link className="st-nav-list-btn" to={`/`}>
                <i className="st-nav-list-btn-icon ficon ficon-users"></i>Dashboard
              </Link>
            </li>
            <li>
              <Link className="st-nav-list-btn" to={`/`}>
                <i className="st-nav-list-btn-icon ficon ficon-for-sale"></i>Blogs
              </Link>
            </li>
            <li>
              <Link className="st-nav-list-btn" to={`/`}>
                <i className="st-nav-list-btn-icon ficon ficon-fire"></i>SQS
              </Link>
            </li>
            <li>
              <Link className="st-nav-list-btn" to={`/`}>
                <i className="st-nav-list-btn-icon ficon ficon-house2"></i>S3
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
