import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';


export default class Home extends Component {
  render() {
    return (
      <div>
      <table className="table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Kind</th>
      <th>File Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>photon.css</td>
      <td>CSS</td>
      <td>28K</td>
    </tr>
    <tr>
      <td>photon.css</td>
      <td>CSS</td>
      <td>28K</td>
    </tr>
    <tr>
      <td>photon.css</td>
      <td>CSS</td>
      <td>28K</td>
    </tr>
    ...
    <tr>
      <td>photon.css</td>
      <td>CSS</td>
      <td>28K</td>
    </tr>
  </tbody>
</table>
        <div className={styles.container}>
          <h2>Home</h2>
          <ul>
            <li><Link to="/counter">to Counter</Link></li>
            <li><Link to="/blogs">to Blogs</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
