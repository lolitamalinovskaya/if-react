import React from 'react';
import '../styles/components/App.css';

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="logo_trip_house_for_footer">
          <svg className="logo_for_footer">
            <use href="#logo_trip_house_for_footer" />
          </svg>
        </div>
        <nav className="footer_navigation">
          <ul className="col-4">
            <li className="footer_navigation_heading"> About</li>
            <li className="footer_navigation_list"> How Triphouse works</li>
            <li className="footer_navigation_list"> Careers</li>
            <li className="footer_navigation_list"> Privacy</li>
            <li className="footer_navigation_list"> Terms</li>
          </ul>
          <ul className="col-4 col-sm-3">
            <li className="footer_navigation_heading"> Property types</li>
            <li className="footer_navigation_list"> Guest houses</li>
            <li className="footer_navigation_list"> Hotels</li>
            <li className="footer_navigation_list"> Apartments</li>
            <li className="footer_navigation_list"> Villas</li>
            <li className="footer_navigation_list"> Holiday homes</li>
            <li className="footer_navigation_list"> Hostels</li>
          </ul>
          <ul className="col-4">
            <li className="footer_navigation_heading"> Support</li>
            <li className="footer_navigation_list"> Contact Customer Service</li>
            <li className="footer_navigation_list"> FAQ</li>
          </ul>
        </nav>
        <div className="footer_copyright"> &copy; 2020 Triphouse, Inc. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
