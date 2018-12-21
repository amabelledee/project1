axios.get("https://api.darksky.net/forecast/163a0e58058c5117fe2fc4237e80ff3f/33.770050,-118.193741")
.then(function (response) {
    console.log(response);
    $("#thing").append(response.data.daily.summary);
})
.catch(function (error) {
    console.log(error);
})

axios.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=jicFyX3UvZbU5yLENEU0THyipGsJtNpl&q=irvine")
.then(function (response) {
console.log(response);
var locationkey = response.data[0].Key;
console.log([0])

 axios.get("https://dataservice.accuweather.com/forecasts/v1/daily/1day/locationKey?" + locationkey + "apikey=jicFyX3UvZbU5yLENEU0THyipGsJtNpl")
 .then(function (response) {
     console.log(response);
 })
 .catch(function (error) {
     console.log(error)
 })
 })
 .catch(function (error) {
    console.log(error);
 })

//numbio:



axios.get("https://www.numbeo.com/api/cities?api_key=llokf6075rj4h3&query=gary&section=12")
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
})

axios.get("https://www.numbeo.com/api/rankings_by_city_historical?api_key=llokf6075rj4h3&section=12")
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error)
})
