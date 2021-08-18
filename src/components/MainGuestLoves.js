import React from 'react';
import '../styles/components/App.css';
import Arrow from '../svg/arrows_right.svg';
import { HotelsContainerGuestLoves } from './HotelsContainerGuestLoves';

class MainGuestLoves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((x) => x.json())
      .then((x) => this.setState({ data: x }))
      .catch(() => this.setState({ data: [] }));
  }

  render() {
    return (
      <main className="homes_guests_loves_main col-14 col-md-14">
        <div className="spinner_container">
          <div id="spinner_all" className="arrow_position_right">
            <img src={Arrow} alt="arrow" className="arrow_right" />
          </div>
        </div>
        <HotelsContainerGuestLoves data={this.state.data} />
      </main>
    );
  }
}
export default MainGuestLoves;
