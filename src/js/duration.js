//var duration;
export async function getDuration(apikey, A, B){
  
  var duration;
  var origin = A;
  var destination = B;
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var url = proxyUrl + 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' 
    + origin + '&destinations=' + destination + '&key=' + apikey;

    return await fetch(url)
    .then((response) => response.json())
    .then(function(myJson) {
      duration = myJson.rows[0].elements[0].duration.value;
      return duration;
    })
    .catch(function(error){
      console.log(error);
    });
}
