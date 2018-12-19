$(document).ready(function () {

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


});