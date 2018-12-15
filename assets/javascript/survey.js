$( document ).ready(function() {

var a1 = $("input[name='gratitude']:checked").val();
var a2 = $("input[name='smile']:checked").val();
var a3 = $("input[name='positivity']:checked").val();
var a4 = $("input[name='learn']:checked").val();
var a5 = $("input[name='pray']:checked").val();
var a6 = $("input[name='breakfast']:checked").val();
var a7 = $("input[name='walk']:checked").val();
var a8 = $("input[name='water']:checked").val();
var a9 = $("input[name='healthy']:checked").val();
var a10 = $("input[name='teeth']:checked").val();
var a11 = $("input[name='time']:checked").val();
var a12 = $("input[name='sleep']:checked").val();
var a13 = $("input[name='exercise']:checked").val();
var a14 = $("input[name='inspired']:checked").val();
var a15 = $("input[name='finance']:checked").val();
var a16 = $("input[name='save']:checked").val();
var a17 = $("input[name='expenses']:checked").val();
var a18 = $("input[name='family']:checked").val();
var a19 = $("input[name='social']:checked").val();
var a20 = $("input[name='afraid']:checked").val();
var a21 = $("input[name='done']:checked").val();
var sum = 0
var add = function() {
    sum = Number(a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8
    + a9 + a10 + a11 + a12 + a13 + a14 + a15
    + a16 + a17 + a18 + a19 + a20 + a21)
}

$("#submit").on("click", function() {
    add()
    console.log(sum);
})

});