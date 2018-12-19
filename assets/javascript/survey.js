$(document).ready(function () {
 
var sum = 0
 
var check = function() {
var a1 = Number($("input[name='gratitude']:checked").val());
var a2 = Number($("input[name='smile']:checked").val());
var a3 = Number($("input[name='positivity']:checked").val());
var a4 = Number($("input[name='learn']:checked").val());
var a5 = Number($("input[name='pray']:checked").val());
var a6 = Number($("input[name='breakfast']:checked").val());
var a7 = Number($("input[name='walk']:checked").val());
var a8 = Number($("input[name='water']:checked").val());
var a9 = Number($("input[name='healthy']:checked").val());
var a10 = Number($("input[name='teeth']:checked").val());
var a11 = Number($("input[name='time']:checked").val());
var a12 = Number($("input[name='sleep']:checked").val());
var a13 = Number($("input[name='exercise']:checked").val());
var a14 = Number($("input[name='inspired']:checked").val());
var a15 = Number($("input[name='finance']:checked").val());
var a16 = Number($("input[name='save']:checked").val());
var a17 = Number($("input[name='expenses']:checked").val());
var a18 = Number($("input[name='family']:checked").val());
var a20 = Number($("input[name='afraid']:checked").val());
var a21 = Number($("input[name='done']:checked").val());

 sum = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 +
a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17 + a18 + a20 + a21;
}


$("#submit").on("click", function() {
    check();
    console.log(sum)
    $("#result").text(sum)
    
})
});
//here are results for the survey,
//0-10 will have five city results and so on for every ten.
//for those five cities there will be api calls for general information
//in the arrays that have names, they will be changed with the api calls, 
//this can be used multiple times to get all wanted data
//i will write a function that will randomly select one of the five cities that are in the range


var worst = ["Gary Indiana", "Detroit, Michigan", "flint, michigan", "St. Louis, Missouri", "Memphis, Tennessee"]

var bad = ["Youngstown, Ohio", "Rockford, Illinois", "Pueblo, Colorado", "San Bernardino, California", "Homestead, Florida "]
 
notAsBad = ["miami beach florida", "daytona beach florida", "charleson west virgina", "Shreveport, Louisiana", "Dayton, Ohio"]

var notGood = ["Toledo, Ohio", "Buffalo, New York", "Canton, Ohio", "fresno california", "tucson arizona"]

var poor = ["fortsmith arkansas", "Salt Lake City, Utah", "Gainesville, Florida", "Tacoma, Washington", "Albuquerque, New Mexico" ]

var okay = ["lansing michigan", "Cincinnati, Ohio", "Syracuse, New York", "atlanta georgia", "Hartford, Connecticut"]

var alright = ["Manchester, New Hampshire", "Columbus, Ohio", "Honolulu, Hawaii", "Sarasota, Florida"]

var better = ["portland maine", "asheville north carolina", "boston massachusetes", "Houston texas", "boise idaho"]

var good = ["San Jose, California", "Madison, Wisconsin", "San Antonio, Texas", "Raleigh-Durham, North Carolina"]

var great = ["austin texas", "colorado springs colorado", "denver colorado", "des moines iowa", "feyetteville arkansas"]
