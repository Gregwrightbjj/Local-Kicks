var geocoder 
var geoLatitude
var geoLongitude
var geoCity
var geoAddress


//Google Maps get my location
var getlocation =function () {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, error)
	} else {
		alert('Geolocation is not supported by this browser.');
	}
	
	function showPosition(position) {
		console.log('user approved geolocation')
		geoLatitude = parseFloat(position.coords.latitude);
		geoLongitude = parseFloat(position.coords.longitude); 
		console.log(geoLatitude + ' and ' + geoLongitude);
		if (geoLatitude === undefined) {
			console.log('undefined')
		}
		//Geocoder to turn coordinates to address	
	  	var latlng = new google.maps.LatLng(geoLatitude, geoLongitude);
	  	geocoder.geocode({'latLng': latlng}, function(results, status) {
		    if (status == google.maps.GeocoderStatus.OK) {
		      if (results[0]) {
		      	console.log(results[0])
		        var fullAddress = results[0].formatted_address
		        geoCity = results[0].address_components[2].long_name.toLowerCase();
		        geoAddress = (fullAddress.replace(', USA', ''))
		        console.log(geoAddress)
		      } else {
		        alert('No results found');
		      }
		    } else {
		      alert('Geocoder failed due to: ' + status);
		    }
	  	});
	}

	function error(error) {
		console.log('user denied geolocation')
        alert(error.code);
        if (error.code == 1) {
            console.log('user said no')
        }
	}
}; 


//when Dom loads execute this
$(document).ready(function(){
	//declaring geocode
	geocoder = new google.maps.Geocoder();
})