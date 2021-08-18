import React from 'react';
import '../styles/components/App.css';
import Logo from '../svg/logo_vector.svg';
import Night from '../svg/Night.svg';
import Account from '../svg/AccountCircle.svg';
import MenuBurger from '../svg/menu.svg';

class HeaderTopSection extends React.Component {
  render() {
    return (
      <header className="top_section_header top_wrapper_header col-14 col-md-14 col-sm-6">
        <div className="top_section_header_logo">
          <img src={Logo} alt="logo" className="logo_trip_house" />
        </div>
        <div className="top_section_header_stays_attractions_night_accountCircle">
          <div className="top_section_header_stays_attractions">
            <p className="stays"> Stays </p>
            <p className="attractions"> Attractions</p>
          </div>
          <div className="top_section_header_night_accountCircle">
            <img src={Night} alt="night" className="night" />
            <img src={Account} alt="account_circle" className="account_circle" />
            <img src={MenuBurger} alt="menu" className="top_section_menu" />
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderTopSection;
