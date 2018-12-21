$(document).ready(function() {
  var pixaKey = "4282776-27fa57906aa34123504a6dc56";
  var basePixa = "https://pixabay.com/api/?key=";
  var city = "Los Angeles";
  var sun = "Sunset West";
  var center = "Hollywood";
  //api url string

  var apiURL = basePixa + pixaKey + "&q=" + city + "&image_type=photo";
  console.log(apiURL);

  var sunURL = basePixa + pixaKey + "&q=" + sun + "&image_type=photo";
  console.log(sunURL);

  var successURL = basePixa + pixaKey + "&q=" + center + "&image_type=photo";
  console.log(successURL);

  $.ajax({
    url: apiURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#myGifs").empty();
    // $("#mySun").empty();
    // $("#mySuccess").empty();
    var results = response.hits;

    if (results == "") {
      alert("There isn't a gif for this selected button");
    }

    function theCity() {
      //for loop generates the 1 renered images
      for (var i = 0; i < 1; i++) {
        var gifDiv = $("<div>"); //div for the city image to go inside
        gifDiv.addClass("gifDiv");

        // pulling gif
        var gifImage = $("<img class='pixapic'>");
        gifImage.attr("src", results[i].webformatURL); // still image stored into src of image

        // gifImage.attr("data-still", results[i].hits.previewURL); // still image
        //
        gifImage.addClass("image");
        gifDiv.append(gifImage);
        $("#myGifs").prepend(gifDiv);

        // pulling photo id
        var photoid = $("<p class='rate-card'>").text(results[i].tags);
        gifDiv.append(photoid);
      }
    }

    theCity();
  });

  $.ajax({
    url: sunURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#mySun").empty();

    var results = response.hits;

    if (results == "") {
      alert("There isn't a gif for this selected button");
    }

    function theSunset() {
      //for loop generates the 1 renered images
      for (var i = 0; i < 1; i++) {
        var sunDiv = $("<div>"); //div for the city image to go inside
        sunDiv.addClass("sunDiv");

        // pulling gif
        var sunImage = $("<img class='pixapic'>");
        sunImage.attr("src", results[i].webformatURL); // still image stored into src of image

        // gifImage.attr("data-still", results[i].hits.previewURL); // still image
        // gifImage.attr("data-animate", results[i].hits.previewURL); // animated image

        sunImage.addClass("image");
        sunDiv.append(sunImage);
        $("#mySun").prepend(sunDiv);

        // pulling photo id
        var photoid = $("<p class='rate-card'>").text(
          city + " - " + results[i].tags
        );
        sunDiv.append(photoid);
      }
    }

    theSunset();
  });

  $.ajax({
    url: successURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#mySuccess").empty();

    var results = response.hits;

    if (results == "") {
      alert("There isn't a gif for this selected button");
    }

    function theCenter() {
      //for loop generates the 1 renered images
      for (var i = 0; i < 1; i++) {
        var successDiv = $("<div>"); //div for the city image to go inside
        successDiv.addClass("successDiv");

        // pulling gif
        var successImage = $("<img class='pixapic'>");
        successImage.attr("src", results[i].webformatURL); // still image stored into src of image

        // gifImage.attr("data-still", results[i].hits.previewURL); // still image
        // gifImage.attr("data-animate", results[i].hits.previewURL); // animated image

        successImage.addClass("image");
        successDiv.append(successImage);
        $("#mySuccess").prepend(successDiv);

        // pulling photo id
        var photoid = $("<p class='rate-card'>").text(
          city + " - " + results[i].tags
        );
        successDiv.append(photoid);
      }
    }

    theCenter();
  });
});
