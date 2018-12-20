$(document).ready(function () {
 var place = sessionStorage.getItem("place")
 console.log(place)

    var location = sessionStorage.getItem("location")

    // Outcome will give name of city

    function cityImg() {
        var APIKey = "4282776-27fa57906aa34123504a6dc56";
        var city = "new york";
        var queryURL = "https://pixabay.com/api/?key=" + APIKey + "&q=" + city + "&image_type=photo";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response.hits[0].largeImageURL);
            var img = $("<img>");
            img.attr("src", response.hits[0].largeImageURL);
            $(".text-muted").html(img);
        });
    }




    axios.get("http://api.openweathermap.org/data/2.5/weather?q=irvine&APPID=399746c3700c10f7ded01a74709fda23")
    .then(function (response) {
        console.log(response);
        $("#current").text(response.data.weather[0].description)
        $("#temp").text(Math.round(((response.data.main.temp - 273.15) * 1.8) + 32))
        $("#high").text(Math.round(((response.data.main.temp_max - 273.15) * 1.8) + 32))
        $("#low").text(Math.round(((response.data.main.temp_min - 273.15) * 1.8) + 32)) 
        $("#humidity").text(response.data.main.humidity)
        $("#pressure").text(response.data.main.pressure)

        
    })
    .catch(function (error) {
        console.log(error);
    }) 

    axios.get("http://api.openweathermap.org/data/2.5/forecast?q=irvine,US&APPID=399746c3700c10f7ded01a74709fda23")
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })

    axios.get("http://api.openweathermap.org/data/2.5/forecast?zip=92627,US&APPID=399746c3700c10f7ded01a74709fda23")
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })


});