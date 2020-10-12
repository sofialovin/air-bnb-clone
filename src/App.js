import React, { Component } from 'react';
import Flat from './components/flat';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }
  componentDidMount() {
        console.log("did mount");
      }


  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">

          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
            })}

          </div>
         </div>
          <div className="map">

          </div>
      </div>
    );
  }
}
export default App;
