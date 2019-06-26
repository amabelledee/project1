$(document).ready(function() {
  var config = {
    apiKey: "API key here",
    authDomain: "codersbay-3c400.firebaseapp.com",
    databaseURL: "https://codersbay-3c400.firebaseio.com",
    projectId: "codersbay-3c400",
    storageBucket: "codersbay-3c400.appspot.com",
    messagingSenderId: "341091133108"
  };
  firebase.initializeApp(config);
  // Make a connection to the Firebase realtime database
  const database = firebase.database();
  const auth = firebase.auth();

  // Access the values from the html sign up and log in form
  const loginForm = $("#login-form");
  const loginEmail = $("#login-email");
  const loginPassword = $("#login-password");
  const loginButton = $("#login-button");
  const signUpForm = $("#sign-up-form");
  const signUpEmail = $("#sign-up-email");
  const signUpPassword = $("#sign-up-password");
  const signUpButton = $("#sign-up-button");

  const logoutButton = $("#logout-button");

  const status = $("#status");
  const errors = $("#errors");

  const toDoList = $("#to-do-list");

  $("#hideit").click(function() {
    $("#sign-up-form").hide();
    $("#login-form").show();
  });
  $("#showit").click(function() {
    $("#login-form").hide();
    $("#sign-up-form").show();
  });

  // Log in
  loginForm.on("submit", e => {
    e.preventDefault();
    const email = loginEmail.val();
    const pass = loginPassword.val();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => displayError(e.message));
  });

  // Sign up
  signUpForm.on("submit", e => {
    e.preventDefault();
    const email = signUpEmail.val();
    const pass = signUpPassword.val();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => displayError(e.message));
  });

  // Log out
  logoutButton.on("click", () => {
    auth.signOut();
  });

  // UID is global so it can be accessed anywhere
  var uid = "";

  // Firebase monitors the Auth state in real time. Use this if/else statement to do things based on that state.
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      //Everything in this if is for a logged in user
      console.log(firebaseUser);
      toDoList.show();
      loginForm.hide();
      signUpForm.hide();
      logoutButton.show();
      status.html('Status: <span class="status-green">logged in</span>');
      $("#hideit").hide();
      $("#showit").hide();
      $(".form-wrapper").hide();
      uid = firebaseUser.uid;
    } else {
      //Everything in this "else" is when no one is logged in
      console.log("not logged in");
      toDoList.hide();
      loginForm.hide();
      signUpForm.show();
      logoutButton.hide();
      status.html('Status: <span class="status-red">not logged in</span>');
      $("#hideit").show();
      $("#showit").show();
      $(".form-wrapper").show();
    }
  });

  // add event
  $("#add-item-form").on("submit", e => {
    e.preventDefault();
    item = $("#item").val();
    addItemForm[0].reset();
  });

  // error
  var displayError = message => {
    console.log("this happened");
    errors.text(message);
    setTimeout(() => {
      errors.empty();
    }, 4000);
  };
});
