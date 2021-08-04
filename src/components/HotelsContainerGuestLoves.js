import React from 'react';
import '../styles/components/App.css';


function HotelsImage({
  image, name, city, country,
}) {
  return (
    <div className="hotels_card">
      <img src={image} className="images" alt="hotelsImage" />
      <p className="homes_guests_loves_main_name_hotel">
        {' '}
        {name}
        {' '}
      </p>
      <p className="homes_guests_loves_main_name_place">
        {city}
        ,
        {' '}
        {country}
      </p>
    </div>
  );
}

class HotelsContainerGuestLoves extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const images = [];
    const { data } = this.props;
    for (let i = 0; i < 4 && i < data.length; i++) {
      images.push(<HotelsImage
        image={data[i].imageUrl}
        key={data[i].id}
        country={data[i].country}
        name={data[i].name}
        city={data[i].city}
      />);
    }
    return (
      <div className="hotels_name_container" id="all_hotels">
        {images}
      </div>
    );
  }
}

export { HotelsContainerGuestLoves, HotelsImage };
