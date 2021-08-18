import React, { useState, useEffect } from 'react';
import '../styles/components/App.css';
import { useParams } from 'react-router-dom';

function HotelPage(props) {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${id}`)
      .then((x) => x.json())
      .then((x) => setHotel(x));
  }, []);

  if (hotel == null) {
    return (
      <h3>Loading</h3>
    );
  }
  return (
    <>
      <figure className="hotel_page_cart">  <img className="hotel_page_image" src={hotel.imageUrl} alt="Hotel" />
        <div className="hotel_page_name">
        <figcaption className="homes_guests_loves_main_name_hotel"> {hotel.name} </figcaption>
        <figcaption className="homes_guests_loves_main_name_hotel"> {hotel.city}, {hotel.country} </figcaption>
        </div>
      </figure>
    </>
  );
}

export default HotelPage;
