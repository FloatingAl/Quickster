import React, { Component } from 'react';
import apikey from '../google_api_key'
//import { getDuration } from 'duration.js'


class Duration extends Component {

    state = {
        origin : '',
        destination : ''
    }
    render() {
        return(
        <div>
            <span id = "durationtext"> {this.getDuration(apikey)} </span>
        </div>
        )
    }
    
    getDuration() {
        var origin = 'Lowell,Massachusetts';
        var destination = 'Boston,Massachusetts';
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var duration;
        
        fetch(proxyUrl + 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' 
            + origin + '&destinations=' + destination + '&key=' + apikey)
        .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            duration = myJson.rows[0].elements[0].duration.value;
            console.log(myJson.rows[0].elements[0].duration.value);
          });
          return duration;
    }
}
export default Duration