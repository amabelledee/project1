// Initialize Firebase
$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyA6cDMyr_xFY3O6JIqn0YacT_eD89vFe_c",
    authDomain: "codersbay-3c400.firebaseapp.com",
    databaseURL: "https://codersbay-3c400.firebaseio.com",
    projectId: "codersbay-3c400",
    storageBucket: "codersbay-3c400.appspot.com",
    messagingSenderId: "341091133108"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var myQlife = childSnapshot.val().QLife;
    var costOfLive = childSnapshot.val().COL;
    var safteyIndex = childSnapshot.val().Saftey;
    var healthIndex = childSnapshot.val().Health;

    var climateIndex = childSnapshot.val().Climate;
    var pollutionIndex = childSnapshot.val().Pollution;
    var purchasePower = childSnapshot.val().Purchase;
    var propRatio = childSnapshot.val().propRatio;

    $("#trainData>tbody").append(
      "<tr><td>" +
        myQlife +
        "</td><td>" +
        costOfLive +
        "</td><td>" +
        safteyIndex +
        "</td><td>" +
        healthIndex +
        "</tr></td>"
    );

    $("#qlifetwo>tbody").append(
      "<tr><td>" +
        climateIndex +
        "</td><td>" +
        pollutionIndex +
        "</td><td>" +
        purchasePower +
        "</td><td>" +
        propRatio +
        "</tr></td>"
    );
  });

  //   database.ref().on("child_added", function(snapshot) {
  //     console.log("==============");
  //     console.log(snapshot.val());
  //     console.log("==============");

  //     $(".name").prepend("<p>" + snapshot.val().empName + "</p>");
  //     $(".role").prepend("<p>" + snapshot.val().empRole + "</p>");
  //     $(".start").prepend("<p>" + snapshot.val().empStart + "</p>");
  //     $(".worked").prepend("<p>" + snapshot.val().empWorked + "</p>");
  //     $(".rate").prepend("<p>" + snapshot.val().empMonthly + "</p>");
  //     $(".total").prepend("<p>" + snapshot.val().empTotal + "</p>");
  //   });
});
