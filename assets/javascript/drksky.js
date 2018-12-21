$(document).ready(function() {
  var place = sessionStorage.getItem("place");
  console.log(place);

  // Outcome will give name of city

  //   function cityImg() {
  //     var APIKey = "4282776-27fa57906aa34123504a6dc56";
  //     var city = "new york";
  //     var queryURL =
  //       "https://pixabay.com/api/?key=" +
  //       APIKey +
  //       "&q=" +
  //       city +
  //       "&image_type=photo";

  //     $.ajax({
  //       url: queryURL,
  //       method: "GET"
  //     }).then(function(response) {
  //       // console.log(response.hits[0].largeImageURL);
  //       var img = $("<img>");
  //       img.attr("src", response.hits[0].largeImageURL);
  //       $(".text-muted").html(img);
  //     });
  //   }

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

  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        place +
        "&APPID=399746c3700c10f7ded01a74709fda23"
    )
    .then(function(response) {
      console.log(response);
      // $("#current").text(response.data.weather[0].description)
      $("#temp").text(
        Math.round((response.data.main.temp - 273.15) * 1.8 + 32)
      );
      $("#high").text(
        Math.round((response.data.main.temp_max - 273.15) * 1.8 + 32)
      );
      $("#low").text(
        Math.round((response.data.main.temp_min - 273.15) * 1.8 + 32)
      );
      $("#humidity").text(response.data.main.humidity);
      $("#pressure").text(response.data.main.pressure);
      var lat = response.data.coord.lat;
      var lon = response.data.coord.lon;
      axios
        .get(
          "https://api.darksky.net/forecast/163a0e58058c5117fe2fc4237e80ff3f/" +
            lat +
            "," +
            lon
        )
        .then(function(response2) {
          console.log(response2);
          $("#current").text(response2.data.daily.summary);
        })
        .catch(function(error) {
          console.log(error);
        });
    })
    .catch(function(error) {
      console.log(error);
    });
});
