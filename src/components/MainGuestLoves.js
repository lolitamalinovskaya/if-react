import React from "react";
import '../styles/components/App.css';
/*import Arrow from '../svg/arrows_right.svg';*/

import {HotelsContainerGuestLoves} from "./HotelsContainerGuestLoves";

function MainGuestLoves() {
  return (
      <main className="homes_guests_loves_main col-14 col-md-14">
          <div className="spinner_container">
              <div id="spinner_all" className="arrow_position_right">
                  <svg id = "arrows_right" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d)">
                          <circle cx="24" cy="20" r="20" fill="#F3F3F4"/>
                          <path d="M19.9412 29.8235L26.1 21.6118C26.6333 20.9007 26.6333 19.9229 26.1 19.2118L19.9412 11" stroke="#383838" stroke-width="2"/>
                      </g>
                      <defs>
                          <filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                          </filter>
                      </defs>
                  </svg>
              </div>
          </div>
          <HotelsContainerGuestLoves/>
      </main>
  );
}

export default MainGuestLoves;
