import React, { Component } from 'react';
import { Link } from 'react-router';
// import styles from './Sidebar.module.css';

class Sidebar extends Component {
  render() {
    return (
      <div>
      <nav className="nav-group">
  <h5 className="nav-group-title">Favorites</h5>
  <a className="nav-group-item active">
    <span className="icon icon-home"></span>
    connors
  </a>
  <span className="nav-group-item">
    <span className="icon icon-download"></span>
    Downloads
  </span>
  <span className="nav-group-item">
    <span className="icon icon-folder"></span>
    Documents
  </span>
  <span className="nav-group-item">
    <span className="icon icon-signal"></span>
    AirPlay
  </span>
  <span className="nav-group-item">
    <span className="icon icon-print"></span>
    Applications
  </span>
  <span className="nav-group-item">
    <span className="icon icon-cloud"></span>
    Desktop
  </span>
</nav>
        <ul>
          <li>
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

        <ul className="list-group">
  <li className="list-group-header">
    <input className="form-control" type="text" placeholder="Search for someone" />
  </li>
  <li className="list-group-item">
    <img className="img-circle media-object pull-left" src="/assets/img/avatar.jpg" width="32" height="32" />
    <div className="media-body">
      <strong>List item title</strong>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </li>
  <li className="list-group-item">
    <img className="img-circle media-object pull-left" src="/assets/img/avatar2.png" width="32" height="32" />
    <div className="media-body">
      <strong>List item title</strong>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </li>
</ul>
      </div>
    );
  }
}

export default Sidebar;
