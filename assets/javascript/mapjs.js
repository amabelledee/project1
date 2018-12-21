document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelectorAll("#map").length > 0) {
    if (document.querySelector("html").lang)
      lang = document.querySelector("html").lang;
    else lang = "en";

    var js_file = document.createElement("script");
    js_file.type = "text/javascript";
    js_file.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBYVTQ-gms_7NHMe8ZI74rgu-CKWrVnL2A&libraries=places&callback=initMap&signed_in=true&language=" +
      lang;
    document.getElementsByTagName("head")[0].appendChild(js_file);
  }
});

var lat = 34.052235;
var lon = -118.243683;
var place = sessionStorage.getItem("place");
console.log(place);

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lon },
    zoom: 8
  });

  // fetch("./assets/javascript/markers.json")
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(plotMarkers);
}

// var markers;
// var bounds;

// function plotMarkers(m) {
//   markers = [];
//   bounds = new google.maps.LatLngBounds();

//   m.forEach(function(marker) {
//     var position = new google.maps.LatLng(marker.lat, marker.lng);

//     markers.push(
//       new google.maps.Marker({
//         position: position,
//         map: map,
//         animation: google.maps.Animation.DROP
//       })
//     );

//     bounds.extend(position);
//   });

//   map.fitBounds(bounds);
// }
