import React, { Component } from 'react';
import './App.css';
import { ButtonToggle } from './Files/ButtonToggle'
import { MapContainer } from './Files/Map.js'
import { apiKey } from'./google_api_key.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ButtonToggle message = "Choose..."/>
        </header>
      </div>
    );
  }
}

export default App;

// export default GoogleApiWrapper({
//   apiKey: (apiKey)
// })(MapContainer)
