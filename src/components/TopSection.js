import React from 'react';
import '../styles/components/App.css';
import GooglePlay from '../svg/google-play-badge.svg';
import Appstore from '../svg/App_Store_Badge.svg';
import AvailableHotels from './AvailableHotels';
import Logo from '../svg/logo_vector.svg';
import Night from '../svg/Night.svg';
import Account from '../svg/AccountCircle.svg';
import MenuBurger from '../svg/menu.svg';

class TopSection extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      items: [],
      searchSubmitHandler: this.searchSubmit.bind(this),
      searchFileHandler: this.searchChange.bind(this),
    };
  }

  fetchData(query) {
    return fetch(`https://fe-student-api.herokuapp.com/api/hotels/popular?${new URLSearchParams({
      search: query,
    })}`).then((x) => x.json());
  }

  searchChange(e) {
    e.preventDefault();
    const newText = e.target.value;
    this.setState({ text: newText });
  }

  searchSubmit(e) {
    e.preventDefault();
    const text = this.state.text;
    this.fetchData(text)
      .then((x) => this.setState({ items: x }))
      .catch((x) => this.setState({ items: [] }));
  }

  render() {
    return (
      <>
        <div className="top_wrapper">
          <section className="top_container">
            <header className="top_section_header col-14 col-md-14 col-sm-6">
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

            <main className="top_section_main">
              <h1 className="discoverStays col-14 col-md-14 col-sm-6">
                {' '}
                Discover stays
                <br />
                {' '}
                to live, work or just relax
              </h1>
              <div className="top_section_main_general_label">
                <div className="top_section_main_label_for_destination">
                  <label htmlFor="destination">Your destination or hotel name</label>
                </div>
                <div className="top_section_main_label_for_check-in_check-out">
                  <label htmlFor="check-in">Check-in -</label>
                  <label htmlFor="check-out">Check-out</label>
                </div>
              </div>
              <div className="top_section_all_form col-md-14 col-sm-6">
                <form className="top_section_main_form col-md-14 col-sm-6">

                  <input
                    id="destination"
                    type="text"
                    name="destination"
                    placeholder="New York"
                    value={this.state.text}
                    onChange={this.state.searchFileHandler}
                  />

                  <div id="top_section_main_input_for_check-in_check-out">
                    <input
                      className="col-sm-3"
                      id="check-in"
                      type="date"
                      name="calendar"
                      placeholder="Tue 15 Sept — "
                    />
                    <input
                      className="col-sm-3"
                      id="check-out"
                      type="date"
                      name="calendar"
                      placeholder="Sat 19 Sept"
                    />
                  </div>

                  <label htmlFor="information_about_order"> </label>
                  <input
                    id="information_about_order"
                    type="text"
                    name="room"
                    placeholder="2 Adults — 0 Children — 1 Room"
                  />

                  <button
                    id="input-button"
                    type="submit"
                    name="search"
                    value="Search"
                    onClick={this.state.searchSubmitHandler}
                  >
                    {' '}
                    Search
                  </button>
                </form>
              </div>
              <div className="window_for_choose_room">
                <div className="content_of_window">
                  <div className="adults_container">
                    <p className="adults">Adults</p>
                    <button className="decrease_adults">-</button>
                    <span id="counter_adults" className="counter">2</span>
                    <button className="increase_adults">+</button>
                  </div>
                  <div className="children_container">
                    <p className="children">Children</p>
                    <button className="decrease_children">-</button>
                    <span id="counter_children" className="counter">1</span>
                    <button className="increase_children">+</button>
                  </div>
                  <div className="rooms_container">
                    <p className="rooms">Rooms</p>
                    <button className="decrease_rooms">-</button>
                    <span id="counter_rooms" className="counter">1</span>
                    <button className="increase_rooms">+</button>
                  </div>
                  <div className="open_window_for_children">
                    <p className="children_age">
                      What is the age of the child you’re travelling
                      with?
                    </p>
                    <div id="children_list" />
                  </div>
                </div>
              </div>
              <div className="top_section_main_AppStore_GooglePlay col-4 col-md-6 col-sm-6">
                <img src={GooglePlay} alt="google_play_badge" className="google_play_badge" />
                <img src={Appstore} alt="app_store_badge" className="app_store_badge" />
              </div>
            </main>
          </section>
        </div>
        <AvailableHotels items={this.state.items} />
      </>
    );
  }
}

export default TopSection;
