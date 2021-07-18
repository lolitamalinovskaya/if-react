import '../styles/components/MainGuestLoves.css';
import arrow from '../svg/arrows_right.svg';
import {HotelsContainerGuestLoves} from "./HotelsContainerGuestLoves";
import React from "react";

function MainGuestLoves() {
  return (
      <main className="homes_guests_loves_main col-14 col-md-14">
          <div className="spinner_container">
              <div id="spinner_all" className="arrow_position_right">
                   <img src={arrow} id="arrow_right" alt="arrow" />
              </div>
          </div>
          <HotelsContainerGuestLoves/>
      </main>
  );
}

export default MainGuestLoves;
