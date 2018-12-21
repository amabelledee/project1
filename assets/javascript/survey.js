$(document).ready(function () {

    var worst = ["Detroit", "St. Louis", "Memphis", "Gary", "Flint"]

    var bad = ["San Bernardino", "Homestead", "Merced", "Compton", "oakland"]

    notAsBad = ["Miami Beach", "Daytona Beach", "Dayton", "Charleston", "Homestead"]

    var notGood = ["Buffalo", "Atlanta", "Tucson", "Little Rock", "Oakland"]

    var poor = ["Fortsmith", "Salt Lake City", "Gainesville", "Tacoma", "Albuquerque"]

    var okay = ["Cincinnati", "Syracuse", "Hartford", "Charlotte", "Boise"]

    var alright = ["Columbus", "Honolulu", "Seattle", "San Fransisco", "Lexington"]

    var better = ["Portland", "Asheville", "Boston", "Fort Worth", "Phoenix"]

    var good = ["Des Moines", "San Jose", "San Antonio", "Nashville", "San Jose"]

    var great = ["Austin", "Colorado Springs", "Denver", "Huntsville", "Denver"]


    
    // var worst = ["Detroit, Michigan", "St. Louis, Missouri", "Memphis, Tennessee"]

    // var bad = ["San Bernardino, California", "Homestead, Florida", "Merced, California"]

    // notAsBad = ["Miami Beach, Florida", "Daytona Beach, Florida", "Dayton, Ohio"]

    // var notGood = ["Buffalo, New York", "Atlanta, Georgia", "Tucson, Arizona"]

    // var poor = ["Fortsmith, Arkansas", "Salt Lake City, Utah", "Gainesville, Florida", "Tacoma, Washington", "Albuquerque, New Mexico"]

    // var okay = ["Cincinnati, Ohio", "Syracuse, New York", "Hartford, Connecticut"]

    // var alright = ["Columbus, Ohio", "Honolulu, Hawaii", "Seattle, Washington"]

    // var better = ["Portland, Maine", "Asheville, North Carolina", "Boston, Massachusetts"]

    // var good = ["Des Moines, Iowa", "San Jose, California", "San Antonio, Texas"]

    // var great = ["Austin, Texas", "Colorado Springs, Colorado", "Denver, Colorado"]

    

    var sum = 0

    var results = function () {
        console.log("insideresults")
        window.location.assign("./result.html")
    };

    var check = function () {
        var a1 = Number($("input[name='q1']:checked").val());
        var a2 = Number($("input[name='q2']:checked").val());
        var a3 = Number($("input[name='q3']:checked").val());
        var a4 = Number($("input[name='q4']:checked").val());
        var a5 = Number($("input[name='q5']:checked").val());
        var a6 = Number($("input[name='q6']:checked").val());
        var a7 = Number($("input[name='q7']:checked").val());
        var a8 = Number($("input[name='q8']:checked").val());
        var a9 = Number($("input[name='q9']:checked").val());
        var a10 = Number($("input[name='q10']:checked").val());
        var a11 = Number($("input[name='q11']:checked").val());
        var a12 = Number($("input[name='q12']:checked").val());
        var a13 = Number($("input[name='q13']:checked").val());
        var a14 = Number($("input[name='q14']:checked").val());
        var a15 = Number($("input[name='q15']:checked").val());
        var a16 = Number($("input[name='q16']:checked").val());
        var a17 = Number($("input[name='q17']:checked").val());
        var a18 = Number($("input[name='q18']:checked").val());
        var a20 = Number($("input[name='q19']:checked").val());
        var a21 = Number($("input[name='q20']:checked").val());

        sum = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 +
            a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17 + a18 + a20 + a21;
    }


    $("#submit").on("click", function () {
        check();
        console.log(sum)





        if (0 < sum && sum < 15) {
            var outcome = worst[Math.floor(Math.random() * worst.length)];
            sessionStorage.setItem("place", outcome)
            results();

        }

        if (14 < sum && sum < 29) {
            var outcome = bad[Math.floor(Math.random() * bad.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (28 < sum && sum < 43) {
            var outcome = notAsBad[Math.floor(Math.random() * notAsBad.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (42 < sum && sum < 57) {
            var outcome = notGood[Math.floor(Math.random() * notGood.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (56 < sum && sum < 71) {
            var outcome = poor[Math.floor(Math.random() * poor.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (70 < sum && sum < 85) {
            var outcome = okay[Math.floor(Math.random() * okay.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (84 < sum && sum < 99) {
            var outcome = alright[Math.floor(Math.random() * alright.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (98 < sum && sum < 113) {
            var outcome = better[Math.floor(Math.random() * better.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (112 < sum && sum < 127) {
            var outcome = good[Math.floor(Math.random() * good.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (126 < sum && sum < 141) {
            var outcome = great[Math.floor(Math.random() * great.length)];
            sessionStorage.setItem("place", outcome)
            results();
        }

        if (isNaN(sum) === true) {
           //alert("please answer all questions")
           $('#myModal').toggle();
        }
        
    });

    $("#close").on("click", function() {
        $("#myModal").toggle();
    })
});
//here are results for the survey,
//0-10 will have five city results and so on for every ten.
//for those five cities there will be api calls for general information
//in the arrays that have names, they will be changed with the api calls,
//this can be used multiple times to get all wanted data
//i will write a function that will randomly select one of the five cities that are in the range
