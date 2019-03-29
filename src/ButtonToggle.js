import React, { Component } from 'react'
import './ButtonToggle.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import { Input } from 'reactstrap';
//import { Container, Segment} from "semantic-ui-react";
//import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import { GoogleComponent } from 'react-google-location' 
import apikey from './google_api_key'

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
          third: null,
          fourth: null,
        };
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

  render() {
      const {message} = this.props
      console.log(this.props)
    return (
      <div>
        <h2>Please enter a starting address</h2>
        {/* <Input className= "input" id = "inputStart" placeholder="Starting Address"></Input> */}
        <GoogleComponent
            id = "inputStart"
            apiKey={apikey}
            language={'en'}
            country={'country:in|country:us'}
            coordinates={true}
            locationBoxStyle={'input'}
            locationListStyle={'slide'}
            onChange={(e) => { this.setState({ start: e }) }} />
        <p>Please choose the amount of address:</p>
        
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
             id = "input1" language={'en'} country={'country:in|country:us'} coordinates={true} locationBoxStyle={'inputA'}locationListStyle={'slide'}
             onChange={(e) => { this.setState({ first: e }) }} />}

            {this.state.on2 && <GoogleComponent 
             apiKey={apikey} 
             id = "input2" language={'en'} country={'country:in|country:us'} coordinates={true} locationBoxStyle={'inputA'}locationListStyle={'slide'}
             onChange={(e) => { this.setState({ second: e }) }} />}

            {this.state.on3 && <GoogleComponent 
             apiKey={apikey} 
             id = "input3" language={'en'} country={'country:in|country:us'} coordinates={true} locationBoxStyle={'inputA'}locationListStyle={'slide'}
             onChange={(e) => { this.setState({ third: e }) }} />}

            {this.state.on4 && <GoogleComponent 
             apiKey={apikey} 
             id = "input4" language={'en'} country={'country:in|country:us'} coordinates={true} locationBoxStyle={'inputA'}locationListStyle={'slide'}
             onChange={(e) => { this.setState({ fourth: e }) }} />}
        </div>

        <button type="submit">
        Submit
        </button>
      </div>
    )
  }
} 

// //Source: https://github.com/hibiken/react-places-autocomplete?fbclid=IwAR03LOgSodZOcy2mxnpt7XjGlGT0cc7w5HXd-eNeAOy25Oi3sgyvSL9R-3Q
// class LocationSearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '' };
//   }

//   handleChange = address => {
//     this.setState({ address });
//   };

//   handleSelect = address => {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => console.log('Success', latLng))
//       .catch(error => console.error('Error', error));
//   };

//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }

function checker() {

}