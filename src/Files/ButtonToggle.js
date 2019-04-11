import React, { Component } from 'react'
import '../ButtonToggle.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import { Input } from 'reactstrap';
//import { Container, Segment} from "semantic-ui-react";
//import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import { GoogleComponent } from 'react-google-location' 
import apikey from '../google_api_key'
import Distance from '../Files/Distance'

export class ButtonToggle extends Component {
    constructor(props) {
        super(props);
    
        // this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          msg: props.message,
          numItems : 3,
          currentClick: 0,
          on: false,
          on2: false,
          on3: false,
          start: null,
          first: null,
          second: null,
          third: null,
          input1: '',
          input2: '',
          input3: '',
        };
      }

    clicked() //will open a new tab to google maps
    {
      //console.log(this.state.start.coordinates.lat)
      if (this.state.currentClick == 0){
        if(this.state.start == null)
        {
          window.alert("Please enter an address for all the boxes");
          return;
        }
        var mapUrl = "https://www.google.com/maps/dir/" + this.state.start.place
        window.open(mapUrl, "Google Maps");
      }

      if (this.state.currentClick == 1){
        if(this.state.start == null || this.state.first == null)
        {
          window.alert("Please enter an address for all the boxes");
          return;
        }
        var mapUrl = "https://www.google.com/maps/dir/" + this.state.start.place + "/" + this.state.first.place
        window.open(mapUrl, "Google Maps");
      }
      else if (this.state.currentClick == 2) {
        if(this.state.start == null || this.state.first == null || this.state.second == null)
        {
          window.alert("Please enter an address for all the boxes");
          return;
        }
        var mapUrl = "https://www.google.com/maps/dir/" + this.state.start.place + "/" + this.state.first.place + "/" + this.state.second.place 
        window.open(mapUrl, "Google Maps");

      }
      else if (this.state.currentClick == 3){
        if(this.state.start == null || this.state.first == null || this.state.second == null || this.state.third == null)
        {
          window.alert("Please enter an address for all the boxes");
          return;
        }
        var mapUrl = "https://www.google.com/maps/dir/" + this.state.start.place + "/" + this.state.first.place + "/" + this.state.second.place + "/" + this.state.third.place
        window.open(mapUrl, "Google Maps");
      }
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
            currentClick: 1,
        });
    }

    toggleButton2 = () => {
        this.setState({
            on: true,
            on2: true,
            on3: false,
            currentClick: 2,
        });

        
    }

    toggleButton3 = () => {
        this.setState({
            on: true,
            on2:true,
            on3:true,
            currentClick: 3,
        });
    }

   locations = () => {
       const location = { }
       location.start = this.state.start
       location.first = this.state.first
       location.second = this.state.second
       location.third = this.state.third

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
        <p>Please choose the number of addresses you plan to visit:</p>
        
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
             onChange={(e) => { this.setState({ third: e }) }} /> }
       
        </div>
        <div>
        <button onClick={ (e) => { this.clicked(); } }> Submit</button>
        <Distance/>
        </div>
      </div>
      
    )
  }
} 

export default ButtonToggle;
