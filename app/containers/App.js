import React, { Component, PropTypes } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// http://facebook.github.io/react/docs/reusable-components.html#prop-validation
// http://boomtownroi.github.io/boomstrap/css.html

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <div className="st-content st-content-minimal-footer">
          {this.props.children}
          <footer className="st-footer ng-scope st-footer--minimal">
          <div className="st-footer__inner container-fluid">
            <a href="#" className="st-footer__logo">
              <img alt="Boomtown Logo" src="https://static.boomtownroi.com/img/logos/logo-boomtown.svg" />
            </a>
            <span className="st-footer__pipe"></span>
            <div className="st-footer__refer">
              <a href="#" target="_blank" className="st-footer__refer__btn">Referrals: <span className="st-footer__refer__btn__earn">Earn $750 in cash</span></a>
            </div>
            <nav className="st-footer__nav">
              <a href="" className="ng-binding ng-scope">Lead Central</a>
              <a href="" className="ng-binding ng-scope">Seller Leads</a>
              <a href="" className="ng-binding ng-scope">Hot Sheet</a>
              <a href="" className="ng-binding ng-scope">My Listings</a>
            </nav>
            <a href="" className="st-footer__help btn btn-xs btn-attention">Need Help?</a>
          </div>
        </footer>
        </div>

        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }

      </div>
    );
  }
}
