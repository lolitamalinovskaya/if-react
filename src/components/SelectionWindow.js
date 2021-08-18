import React, { useState } from 'react';
import '../styles/components/App.css';
import SelectionWindowChildren from './SelectionWindowChildren';

function SelectionWindow(props) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const adultsIncClass = adults < 30 ? 'active_buttons' : '';
  const adultsDecClass = adults > 0 ? 'active_buttons' : '';
  const childrenIncClass = children < 10 ? 'active_buttons' : '';
  const childrenDecClass = children > 0 ? 'active_buttons' : '';
  const roomsIncClass = rooms < 30 ? 'active_buttons' : '';
  const roomsDecClass = rooms > 0 ? 'active_buttons' : '';

  const incrementAdults = () => {
    if (adults === 30) return;
    props.onUpdate(adults+1, children, rooms);
    setAdults((prevState) => prevState + 1);
  };

  const decrementAdults = () => {
    if (adults === 0) return;
    props.onUpdate(adults-1, children, rooms);
    setAdults((prevState) => prevState - 1);
  };
  const incrementChildren = () => {
    if (children === 10) return;
    props.onUpdate(adults, children+1, rooms);
    setChildren((prevState) => prevState + 1);
  };
  const decrementChildren = () => {
    if (children === 0) return;
    props.onUpdate(adults, children-1, rooms);
    setChildren((prevState) => prevState - 1);


  };
  const incrementRooms = () => {
    if (rooms === 30) return;
    props.onUpdate(adults, children, rooms+1);
    setRooms((prevState) => prevState + 1);


  };
  const decrementRooms = () => {
    if (rooms === 0) return;
    props.onUpdate(adults, children, rooms-1);
    setRooms((prevState) => prevState - 1);

  };

  const childrenWindow = children > 0 ? <SelectionWindowChildren childrenCount={children} /> : null;
  return (
    <>
      <div className="Selection_window">
        <div className="content_of_window">
          <div className="adults_container">
            <p className="adults">Adults</p>
            <button className={`decrease_adults ${adultsDecClass}`} onClick={decrementAdults}>-</button>
            <span id="counter_adults" className="counter">{adults}</span>
            <button className={`increase_adults ${adultsIncClass}`} onClick={incrementAdults}>+</button>
          </div>
          <div className="children_container">
            <p className="children">Children</p>
            <button className={`decrease_children ${childrenDecClass}`} onClick={decrementChildren}>-</button>
            <span id="counter_children" className="counter">{children}</span>
            <button className={`increase_children ${childrenIncClass}`} onClick={incrementChildren}>+</button>
          </div>
          <div className="rooms_container">
            <p className="rooms">Rooms</p>
            <button className={`decrease_rooms ${roomsDecClass}`} onClick={decrementRooms}>-</button>
            <span id="counter_rooms" className="counter">{rooms}</span>
            <button className={`increase_rooms ${roomsIncClass}`} onClick={incrementRooms}>+</button>
          </div>
          {childrenWindow}
        </div>
      </div>
    </>
  );
}

export default SelectionWindow;
