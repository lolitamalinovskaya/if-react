import React from 'react';
import '../styles/components/App.css';
import Arrow from '../svg/arrows_right.svg';
import { HotelsContainerGuestLoves } from './HotelsContainerGuestLoves';

class AvailableHotels extends React.Component {
  render() {
    if (this.props.items.length === 0) {
      return (<></>);
    }
    return (
      <>
        <section className="available_hotels col-14 col-md-14">
          <div className="available_hotels_container homes_guests_loves_container col-md-14">
            <header className="homes_guests_loves_header_heading120">
              <h2 className="homes_guests_loves_header_h2 col-sm-6">Available hotels</h2>
            </header>
            <main className="homes_guests_loves_main col-14 col-md-14">
              <div className="spinner_container">
                <div id="spinner_all" className="arrow_position_right">
                  <img src={Arrow} alt="arrow" className="arrow_right" />
                </div>
              </div>
              <HotelsContainerGuestLoves data={this.props.items} />
            </main>
          </div>
        </section>
      </>
    );
  }
}

export default AvailableHotels;
