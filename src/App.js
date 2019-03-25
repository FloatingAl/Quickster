import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Dropdown , Button} from 'react-bootstrap'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

//This is a COMMENT  
toggle() {
  this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>Please choose the amount of address:</p>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Choose...
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >1</DropdownItem>
          <DropdownItem >2</DropdownItem>
          <DropdownItem >3</DropdownItem>
          <DropdownItem >4</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
        </header>
      </div>
    );
  }
}

export default App;
