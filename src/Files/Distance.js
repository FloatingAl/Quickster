import React, { Component } from 'react'
import apikey from '../google_api_key'


export class Distance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key= " + apikey
        fetch(url)
        .then(response => response.json())
        .then(reJson => {
            this.setState({
                data: reJson 
            })
        console.log(reJson)
        },
        (error) => {
            this.setState({
                error
            });
        }); 
            
        
        
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Distance