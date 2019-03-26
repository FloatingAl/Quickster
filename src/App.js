import React, { Component } from 'react';
import './App.css';
import { ButtonToggle } from './ButtonToggle'
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
