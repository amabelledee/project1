$(document).ready(function () {
    var place = sessionStorage.getItem("place")
    console.log(place)

    var location = sessionStorage.getItem("location")

    // Outcome will give name of city


    var APIKey = "4282776-27fa57906aa34123504a6dc56";
    var city = "los angeles";
    var queryURL = "https://pixabay.com/api/?key=" + APIKey + "&q=" + city + "&image_type=photo";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.hits[0].largeImageURL);
        $(".test").attr("src", response.hits[0].largeImageURL);

    });





});