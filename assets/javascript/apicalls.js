axios.get("https://api.darksky.net/forecast/163a0e58058c5117fe2fc4237e80ff3f/33.770050,-118.193741")
.then(function (response) {
    console.log(response);
    $("#thing").append(response.data.daily.summary);
})
.catch(function (error) {
    console.log(error);
})

axios.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=jicFyX3UvZbU5yLENEU0THyipGsJtNpl&q=irvine")
.then(function (response) {
console.log(response);
var locationkey = response.data[0].[1];
console.log(Key)

axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/locationKey?" + locationkey + "apikey=jicFyX3UvZbU5yLENEU0THyipGsJtNpl")
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

var numbioApi = llokf6075rj4h3

axios.get("http://www.numbeo.com:8008/api/city_crime?api_key=llokf6075rj4h3&query=Irvine")
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
})

