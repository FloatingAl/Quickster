export function getDuration(apikey) {
    var origin = 'Wilmingotn,Massachusetts';
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