import React from 'react';
import Flat from './components/flat';
// import logo from './logo.svg';
import './App.css';

function App() {
  const flat = {
    "name": "Cool apartment",
    "imageUrl": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "price": 200,
    "priceCurrency": "EUR",
    "lat": 48.885707,
    "lng": 2.343543
  };

  return (
    <div className="app">
      <div className="main">
        <div className="search">

        </div>
        <div className="flats">
          <Flat flat={flat} />
          <Flat flat={flat} />
        </div>
        <div className="map">

        </div>
      </div>
    </div>
  );
}

export default App;
