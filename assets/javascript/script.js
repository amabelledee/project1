
$(document).ready(function() {
  var place = sessionStorage.getItem("place");
  console.log(place);

  // Outcome will give name of city

  var APIKey = "4282776-27fa57906aa34123504a6dc56";

  var queryURL =
    "https://pixabay.com/api/?key=" +
    APIKey +
    "&q=" +
    place +
    "&image_type=photo";





    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.hits[0].largeImageURL);
        var img = $("<img>");
        img.attr("src", response.hits[0].largeImageURL);
        $(".text-muted").html(img);
    });
});

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response.hits[0].largeImageURL);
    $("#myGifs").attr("src", response.hits[0].largeImageURL);
    $("#mySun").attr("src", response.hits[1].largeImageURL);
    $("#mySuccess").attr("src", response.hits[2].largeImageURL);
  });


  $("h1").text(place);

// Outcome will give name of city master




$("h1").text(place);

// axios.get("http://api.openweathermap.org/data/2.5/weather?q=irvine&APPID=399746c3700c10f7ded01a74709fda23")
// .then(function (response) {
//     console.log(response);
//     $("#current").text(response.data.weather[0].description)
//     $("#temp").text(Math.round(((response.data.main.temp - 273.15) * 1.8) + 32))
//     $("#high").text(Math.round(((response.data.main.temp_max - 273.15) * 1.8) + 32))
//     $("#low").text(Math.round(((response.data.main.temp_min - 273.15) * 1.8) + 32)) 
//     $("#humidity").text(response.data.main.humidity)
//     $("#pressure").text(response.data.main.pressure)


// })
// .catch(function (error) {
//     console.log(error);
// }) 


axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + place + "&APPID=399746c3700c10f7ded01a74709fda23")
    .then(function (response) {
        console.log(response);

        console.log("insidefirstaxios")
        $("#weather").append()
        // $("#current").text(response.data.weather[0].description)
        $("#temp").text(Math.round(((response.data.main.temp - 273.15) * 1.8) + 32))
        $("#high").text(Math.round(((response.data.main.temp_max - 273.15) * 1.8) + 32))
        $("#low").text(Math.round(((response.data.main.temp_min - 273.15) * 1.8) + 32))
        $("#humidity").text(response.data.main.humidity)
        $("#pressure").text(response.data.main.pressure)
        var lat = response.data.coord.lat;
        var lon = response.data.coord.lon;



        axios.get("https://api.darksky.net/forecast/163a0e58058c5117fe2fc4237e80ff3f/" + lat + "," + lon)
            .then(function (response2) {

                console.log(response2);
                $("#current").text(response2.data.daily.summary);
                if (response2.data.currently.icon === "cloudy" || response2.data.currently.icon === "partly-cloudy" || response2.data.currently.icon === "partly-cloudy-night" || response2.data.currently.icon === "scattered-clouds") {
                    $("#weather").attr("src", weather[2]);

                };
                if (response2.data.currently.icon === "sunny" || response2.data.currently.icon === "mild" || response2.data.currently.icon === "clear" || response2.data.currently.icon === "clear-day") {
                    $("#weather").attr("src", weather[1])
                };

                if (response2.data.currently.icon === "storming" || response2.data.currently.icon === "thunder-storms" || response2.data.currently.icon === "lightning-storms") {
                    $("#weather").attr("src", weather[5])
                };

                if (response2.data.currently.icon === "rain" || response2.data.currently.icon === "raining" || response2.data.currently.icon === "scattered-showers" || response2.data.currently.icon === "light-showers") {
                    $("#weather").attr("src", weather[0])
                };

                if (response2.data.currently.icon === "snow" || response2.data.currently.icon === "snow-storms" || response2.data.currently.icon === "light-snow" || response2.data.currently.icon === "scattered-snow-showers") {
                    $("#weather").attr("src", weather[3])
                }

                if (response2.data.currently.icon === "clear-night" || response2.data.currently.icon === "night") {
                    $("#weather").attr("src", weather[4])
                }

                else ($("#mySuccess").attr("src", response.hits[2].largeImageURL))

            })
            .catch(function (error2) {
                console.log(error2);
            })


    })
    .catch(function (error) {
        console.log(error);

    });



var weather = ["./assets/images/rain.jpg", "./assets/images/clear.jpg", "./assets/images/cloudy.jpg", "./assets/images/snow.jpg", "./assets/images/night.jpg", ".assets/images/storming"]

