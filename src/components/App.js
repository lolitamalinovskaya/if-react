import React from 'react';
import HeaderGuestLoves from './HeaderGuestLoves';
import MainGuestLoves from './MainGuestLoves';
import TopSection from './TopSection';

function App() {
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
