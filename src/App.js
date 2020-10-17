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
  componentDidMount() {   //
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"; // json to be used by component, with details of flats
    fetch(url) // AJAX request
      .then(response => response.json())
      .then((data) => {  // data is an array of flats
        this.setState({
          flats: data   //we pass the keys we want to change,we want to change the flats and we assign it to the data we got
        });  //so we change component state and React understands that the state changed and will render the component again
      })
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
