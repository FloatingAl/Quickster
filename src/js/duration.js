var duration;

export function getDuration(apikey, A, B) {
  var origin = A;
  var destination = B;
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyUrl + 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' 
        + origin + '&destinations=' + destination + '&key=' + apikey)
    .then(function(response) {
      return response.json();
     })
      .then(function(myJson) {
        console.log("duration is " + myJson.rows[0].elements[0].duration.value);
        duration = Number(myJson.rows[0].elements[0].duration.value);
        return duration;
      });
      return duration;            
}
