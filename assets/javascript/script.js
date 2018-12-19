<<<<<<< HEAD
$(document).ready(function() {
  // var cityName = "Irvine";
  var APIKey = "4282776-27fa57906aa34123504a6dc56";
  var city = "new york";
  var queryURL =
    "https://pixabay.com/api/?key=" +
    APIKey +
    "&q=" +
    city +
    "&image_type=photo";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response.hits[0].largeImageURL);
    var img = $("<img>");
    img.attr("src", response.hits[0].largeImageURL);
    $(".text-muted").html(img);
  });
});
=======
var location = sessionStorage.getItem("location")

// var cityName = "Irvine";
var APIKey = "4282776-27fa57906aa34123504a6dc56";
var city = "new york";
var queryURL = "https://pixabay.com/api/?key=" + APIKey + "&q=" + city + "&image_type=photo" ;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // console.log(response.hits[0].largeImageURL);
    var img = $("<img>");
    img.attr("src",response.hits[0].largeImageURL);
    $(".text-muted").html(img);
});

>>>>>>> 5d7d378305ad87fc3bd6f16d0c29fbbef2c63088
