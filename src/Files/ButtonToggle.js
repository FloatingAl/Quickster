import React, { Component } from 'react'
import '../ButtonToggle.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import { Input } from 'reactstrap';
//import { Container, Segment} from "semantic-ui-react";
//import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import { GoogleComponent } from 'react-google-location' 
import apikey from '../google_api_key'
import Duration from '../js/duration.jsx'

export class ButtonToggle extends Component {
    constructor(props) {
        super(props);
    
        // this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          msg: props.message,
          numItems : 4,
          currentClick: 0,
          on: false,
          on2: false,
          on3: false,
          on4: false,
          start: null,
          first: null,
          second: null,
          input1: '',
          input2: '',
          input3: '',
          input4: ''
        };
      }

    clicked() //will open a new tab to google maps
    {
      console.log(this.state.start.coordinates.lat)
      var mapUrl = "https://www.google.com/maps/search/?api=1&query=" + this.state.start.coordinates.lat + "," + this.state.start.coordinates.lng ;
    //   var inStart = this.inputStart.value;
    //   var mapUrl = "https://www.google.com/maps/place/" + inStart; 
      window.open(mapUrl, "Google Maps"); 
    }

    toggle = () =>  {
        
      this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    toggleButton1 = () => {
        this.setState({
            on:  true,
            on2: false,
            on3: false,
            on4: false,
            currentClick: 1,
        });
    }

    toggleButton2 = () => {
        this.setState({
            on: true,
            on2: true,
            on3: false,
            on4: false,
            currentClick: 2,
        });

        
    }

    toggleButton3 = () => {
        this.setState({
            on: true,
            on2:true,
            on3:true,
            on4:false,
            currentClick: 3,
        });
    }

    toggleButton4 = () => {
        this.setState({
            on: true,
            on2:true,
            on3:true,
            on4:true,
            currentClick: 4,
        });
    }

   locations = () => {
       const location = { }
       location.start = this.state.start
       location.first = this.state.first
       location.second = this.state.second
       location.third = this.state.third
       location.fourth = this.state.fourth

       console.log(location)
   }
    
  render() {
      const {message} = this.props
      console.log(this.props)
    return (
      <div>
        <h2>Please enter a starting address</h2>
        {/* <Input className= "input" id = "inputStart" placeholder="Starting Address"></Input> */}
        <GoogleComponent
            type = "text"
            ref = {this.inputStart}
            value = "Starting Address"
            apiKey={apikey}
            language={'en'}
            country={'country:in|country:us'}
            coordinates={true}
            locationBoxStyle={'input'}
            locationListStyle={'slide'}
            
            onChange={(e) => { this.setState({ start: e }) }} />
        <p>Please choose the number of address you plan to visit:</p>
        
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {message}
        </DropdownToggle>
        <DropdownMenu>
            {/* {
                Array(this.state.numItems).fill(0).map( (_, i) => <DropdownItem key={i} onClick={this.toggleButton} >{i + 1 }</DropdownItem>)
            } */}
          <DropdownItem onClick ={this.toggleButton1}>1</DropdownItem>
          <DropdownItem onClick ={this.toggleButton2}>2</DropdownItem>
          <DropdownItem onClick ={this.toggleButton3}>3</DropdownItem>
          <DropdownItem onClick ={this.toggleButton4}>4</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
         <div className ="inputG">
             {this.state.on && <GoogleComponent 
             apiKey={apikey} 
             ref = "input1" language={'en'} country={'country:in|country:us'} coordinates={true} locationBoxStyle={'inputA'}locationListStyle={'slide'}
             onChange={(e) => { this.setState({ first: e }) }} />}

            {this.state.on2 && <GoogleComponent 
             apiKey={apikey} 
             ref = "input2" language={'en'} country={'country:in|country:us'} coordinates={true} locationBoxStyle={'inputA'}locationListStyle={'slide'}
             onChange={(e) => { this.setState({ second: e }) }} />}

            {this.state.on3 && <GoogleComponent 
             apiKey={apikey} 
             ref = "input3" language={'en'} country={'country:in|country:us'} coordinates={true} locationBoxStyle={'inputA'}locationListStyle={'slide'}
             onChange={(e) => { this.setState({ first: e }) }} /> }

            {this.state.on4 && <GoogleComponent 
             apiKey={apikey} 
             ref = "input4" language={'en'} country={'country:in|country:us'} coordinates={true} locationBoxStyle={'inputA'}locationListStyle={'slide'}
             onChange={(e) => { this.setState({ first: e }) }} /> }
        </div>
        <div>
        <button onClick={ (e) => { this.clicked(); } }> Submit</button>
        </div>

        <button 
            type="submit"
            onClick = {this.locations}>
        Submit
        </button>

        <Duration/>
      </div>
      
    )
  }
} 
