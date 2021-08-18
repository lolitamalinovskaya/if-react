import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderGuestLoves from './HeaderGuestLoves';
import MainGuestLoves from './MainGuestLoves';
import TopSection from './TopSection';
import HeaderTopSection from './HeaderTopSection';
import HotelPage from './HotelPage';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <HeaderTopSection />
        <Switch>
          <Route exact path="/"><MainPage /></Route>
          <Route path="/hotels/:id"><HotelPage /></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
function MainPage() {
  return (
    <>
      <TopSection />
      <section className="homes_guests_loves col-14 col-md-14">
        <div className="homes_guests_loves_container col-md-14">
          <HeaderGuestLoves />
          <MainGuestLoves />
        </div>
      </section>
    </>
  );
}

export default App;
