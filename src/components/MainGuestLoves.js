import React from 'react';
import '../styles/components/App.css';
import Arrow from '../svg/arrows_right.svg';
import data from '../constants/dataGuest';

import { HotelsContainerGuestLoves } from './HotelsContainerGuestLoves';

function MainGuestLoves() {
  return (
    <main className="homes_guests_loves_main col-14 col-md-14">
      <div className="spinner_container">
        <div id="spinner_all" className="arrow_position_right">
          <img src={Arrow} alt="arrow" className="arrow_right" />
        </div>
      </div>
      <HotelsContainerGuestLoves data={data} />
    </main>
  );
}

export default MainGuestLoves;
