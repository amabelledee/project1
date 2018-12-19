$(document).ready(function () {
 
var sum = 0
 
var check = function() {
var q1 = Number($("input[name='q1']:checked").val());
var q2 = Number($("input[name='q2']:checked").val());
var q3 = Number($("input[name='q3']:checked").val());
var q4 = Number($("input[name='q4']:checked").val());
var q5 = Number($("input[name='q5']:checked").val());
var q6 = Number($("input[name='q6']:checked").val());
var q7 = Number($("input[name='q7']:checked").val());
var q8 = Number($("input[name='q8']:checked").val());
var q9 = Number($("input[name='q9']:checked").val());
var q10 = Number($("input[name='q10']:checked").val());
var q11 = Number($("input[name='q11']:checked").val());
var a12 = Number($("input[name='sleep']:checked").val());
var a13 = Number($("input[name='exercise']:checked").val());
var a14 = Number($("input[name='inspired']:checked").val());
var a15 = Number($("input[name='finance']:checked").val());
var a16 = Number($("input[name='save']:checked").val());
var a17 = Number($("input[name='expenses']:checked").val());
var a18 = Number($("input[name='family']:checked").val());
var a20 = Number($("input[name='afraid']:checked").val());
var a21 = Number($("input[name='done']:checked").val());

 sum = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11;
}


$("#submit").on("click", function() {
    check();
    console.log(sum)
    
    
})
});
//here are results for the survey,
//0-10 will have five city results and so on for every ten.
//for those five cities there will be api calls for general information
//in the arrays that have names, they will be changed with the api calls, 
//this can be used multiple times to get all wanted data
//i will write a function that will randomly select one of the five cities that are in the range


var worst = ["Detroit, Michigan", "St. Louis, Missouri", "Memphis, Tennessee"]

var bad = ["San Bernardino, California", "Homestead, Florida", "Merced, California"]
 
notAsBad = ["Miami Beach, Florida", "Daytona Beach, Florida", "Dayton, Ohio"]

var notGood = ["Buffalo, New York", "Atlanta, Georgia", "Tucson, Arizona"]

var poor = ["Fortsmith, Arkansas", "Salt Lake City, Utah", "Gainesville, Florida", "Tacoma, Washington", "Albuquerque, New Mexico" ]

var okay = ["Cincinnati, Ohio", "Syracuse, New York", "Hartford, Connecticut"]

var alright = ["Columbus, Ohio", "Honolulu, Hawaii", "Seattle, Washington"]

var better = ["Portland, Maine", "Asheville, North Carolina", "Boston, Massachusetts"]

var good = ["Des Moines, Iowa", "San Jose, California", "San Antonio, Texas"]

var great = ["Austin, Texas", "Colorado Springs, Colorado", "Denver, Colorado"]
