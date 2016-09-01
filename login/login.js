//////////////////
// Log in form  // 
//////////////////

// retrieve log in form elements
var loginForm = document.getElementById("login_form");
var userName = document.getElementById("username");
var password = document.getElementById("password");
var error = document.querySelectorAll(".error");

// add event listener for login form submission
loginForm.addEventListener('submit', function(event) {
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();

    /*------------------------------
    validation for username field
    ------------------------------*/

    // username should not be empty
    if (validator.isEmpty(userName.value)) {
        error[0].innerHTML = "Hey Buddy! Even bacon lovers need to enter a user name.";
        error[0].className = "error active";
        userName.className = "invalid";
        // username should not have any extra whitespace
    } else if (!validator.isTrimmed(userName.value)) {
        error[0].innerHTML = "Ummm... Your user name shouldn't have any extra whitespace added.";
        error[0].className = "error active";
        userName.className = "invalid";
        // username should be alphanumeric
    } else if (!validator.isAlphanumeric(userName.value)) {
        error[0].innerHTML = "Whoa there... Your user name shouldn't have any special characters in it.";
        error[0].className = "error active";
        userName.className = "invalid";
    }

    /*---------------------------------
    validation for password field
    -----------------------------------*/

    // password should not be empty
    if (validator.isEmpty(password.value)) {
        error[1].innerHTML = "Oops! Thoughts of bacon must have made you forget to enter a password.";
        error[1].className = "error active";
        password.className = "invalid";
        // password should not have any extra whitespace
    } else if (!validator.isTrimmed(password.value)) {
        error[1].innerHTML = "Ummm... Your password shouldn't have any extra whitespace added.";
        error[1].className = "error active";
        password.className = "invalid";
        // password should not contain any spaces
    } else if (!validator.contains(password.value, [' '])) {
        error[1].innerHTML = "Doh! Your password shouldn't contain any spaces.";
        error[1].className = "error active";
        password.className = "invalid";
    }

});

// add event listener for input on username field
userName.addEventListener('input', function(event) {
  // check for and reset error on input
    if (error[0].innerHTML !== "") {
        error[0].innerHTML = "";
        error[0].className = "error";
        userName.classList.remove("invalid");
    }
});

// add event listener for input on password field
password.addEventListener('input', function(event) {
  // check for and reset error on input
    if (error[1].innerHTML !== "") {
        error[1].innerHTML = "";
        error[1].className = "error";
        password.classList.remove("invalid");
    }
});
