export function getDuration(apikey, A, B) {
  var origin = A;
  var destination = B;
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var duration = 0;
  console.log("A is " + A);
  console.log("B is " + B);
    fetch(proxyUrl + 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' 
        + origin + '&destinations=' + destination + '&key=' + apikey)
    .then(function(response) {
      return response.json();
     })
      .then(function(myJson) {
        console.log("duration is " + myJson.rows[0].elements[0].duration.value);
        return Number(myJson.rows[0].elements[0].duration.value);
      });      
}
