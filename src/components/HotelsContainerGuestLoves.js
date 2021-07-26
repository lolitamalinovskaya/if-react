import React from 'react';
import '../styles/components/App.css';
import data from "../constants/dataGuest";


function HotelsImage(props) {
  return (
      <div className="hotels_card">
        <img src={props.image} className="images"/>
          <p className="homes_guests_loves_main_name_hotel"> {props.name} </p>
          <p className="homes_guests_loves_main_name_place"> {props.city}, {props.country} </p>
      </div>
  );
}

function HotelsContainerGuestLoves() {
    let images = [];
    for (let i = 0; i<4 && i<data.length; i++) {
        images.push(<HotelsImage image={data[i].imageUrl} key={data[i].id} country={data[i].country} name={data[i].name}
                                 city={data[i].city}/>);
    }
  return (
      <div className="hotels_name_container" id="all_hotels">
          {images}
      </div>
  );
}

export {HotelsContainerGuestLoves, HotelsImage};



