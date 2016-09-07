/////////////////
//Sign-up form //
/////////////////

// retrieve sign-up form element
var signUpForm = document.getElementById('sign_up_form');

// retrieve error span elements
var error = document.querySelectorAll('.error');

// retrieve form input elements
var firstName = document.getElementById('first_name');
var lastName = document.getElementById('last_name');
var email = document.getElementById('email');
var dateOfBirth = document.getElementById('date_of_birth');
var password = document.getElementById('password');

// event listener for sign-up form submission
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    /* --------------------------------
    validation for first name input
    ---------------------------------- */
    // first name should not be empty
    if (validator.isEmpty(firstName.value)) {
        firstName.removeAttribute('placeholder');
        error[0].innerHTML = "Oops! Please enter a first name.";
        error[0].className = "error active";
        firstName.parentNode.className = "invalid";
        // first name should not have extra whitespace
    } else if (!validator.isTrimmed(firstName.value)) {
        firstName.removeAttribute('placeholder');
        error[0].innerHTML = "Please don't include any extra whitespace";
        error[0].className = "error active";
        firstName.parentNode.className = "invalid";
    } else {
        firstName.parentNode.className = "";
        signUpForm.className = "valid";
    }

    /* --------------------------------
    validation for last name input
    ---------------------------------- */
    // last name should not be empty
    if (validator.isEmpty(lastName.value)) {
        lastName.removeAttribute('placeholder');
        error[1].innerHTML = "Oops! Please enter a last name.";
        error[1].className = "error active";
        lastName.parentNode.className = "invalid";
        // last name should not have extra whitespace
    } else if (!validator.isTrimmed(lastName.value)) {
        lastName.removeAttribute('placeholder');
        error[1].innerHTML = "Please don't include any extra whitespace";
        error[1].className = "error active";
        lastName.parentNode.className = "invalid";
    } else {
        lastName.parentNode.className = "";
        signUpForm.className = "valid";
    }

    /* --------------------------------
    validation for email address input
    ---------------------------------- */
    // email should not be empty
    if (validator.isEmpty(email.value)) {
        email.removeAttribute('placeholder');
        error[2].innerHTML = "Oh oh. You forgot to enter an email address";
        error[2].className = "error active";
        email.parentNode.className = "invalid";
        // email should be an email address
    } else if (!validator.isEmailAddress(email.value)) {
        email.removeAttribute('placeholder');
        error[2].innerHTML = "Woops! That email address doesn't look right.";
        error[2].className = "error active";
        email.parentNode.className = "invalid";
    } else {
        email.parentNode.className = "";
        signUpForm.className = "valid";
    }

    /* --------------------------------
    validation for date of birth input
    ---------------------------------- */
    // date of birth should not be empty
    if (validator.isEmpty(dateOfBirth.value)) {
        dateOfBirth.removeAttribute('placeholder');
        error[3].innerHTML = "Oh oh. You forgot to enter your birthday";
        error[3].className = "error active";
        dateOfBirth.parentNode.className = "invalid";
        // date of birth should be a valid date
    } else if (!validator.isDate(dateOfBirth.value)) {
        dateOfBirth.removeAttribute('placeholder');
        error[3].innerHTML = "Woops. That date doesn't appear valid. Please enter a date: MM-DD-YYYY";
        error[3].className = "error active";
        dateOfBirth.parentNode.className = "invalid";
        // date of birth should be before today
    } else if (!validator.isBeforeToday(dateOfBirth.value)) {
        dateOfBirth.removeAttribute('placeholder');
        error[3].innerHTML = "Hey wait. You haven't been born yet? Please enter a valid birthday";
        error[3].className = "error active";
        dateOfBirth.parentNode.className = "invalid";
    } else {
        dateOfBirth.parentNode.className = "valid";
        signUpForm.className = "valid";
    }

    /* --------------------------------
    validation for password input
    ---------------------------------- */
    // password should not be empty
    if (validator.isEmpty(password.value)) {
        password.removeAttribute('placeholder');
        error[4].innerHTML = "Oops! You forgot to enter a password";
        error[4].className = "error active";
        password.parentNode.className = "invalid";
        // password should not contain any spaces
    } else if (validator.contains(password.value, [" "])) {
        password.removeAttribute('placeholder');
        error[4].innerHTML = "Your password cannot contain any spaces";
        error[4].className = "error active";
        password.parentNode.className = "invalid";
        // password should not have any extra leading or trailing whitespace
    }
    if (!validator.isTrimmed(password.value)) {
        password.removeAttribute('placeholder');
        error[4].innerHTML = "Your password cannot contain have any extra whitespace before or after it.";
        error[4].className = "error active";
        password.parentNode.className = "invalid";
        // password should be at least 6 characters long
    } else if (!validator.isOfLength(password.value, 6)) {
        password.removeAttribute('placeholder');
        error[4].innerHTML = "Your password must be at least 6 characters long";
        error[4].className = "error active";
        password.parentNode.className = "invalid";
    } else {
        password.parentNode.className = "valid";
        signUpForm.className = "valid";
    }

});

///////////////////////////////////////////////////////////////////////
/// ******* EVENT LISTENERS FOR REMOVING ERRORS ON INPUT ******** /////
///////////////////////////////////////////////////////////////////////

firstName.addEventListener('input', function() {
    // check for and reset error on input
    if (error[0].innerHTML !== "") {
        error[0].innerHTML = "";
        error[0].className = "error";
        firstName.parentNode.className = "valid";
    }
});

lastName.addEventListener('input', function() {
    // check for and reset error on input
    if (error[1].innerHTML !== "") {
        error[1].innerHTML = "";
        error[1].className = "error";
        lastName.parentNode.className = "valid";
    }
});

email.addEventListener('input', function() {
    // check for and reset error on input
    if (error[2].innerHTML !== "") {
        error[2].innerHTML = "";
        error[2].className = "error";
        email.parentNode.className = "valid";
    }
});

dateOfBirth.addEventListener('input', function() {
    // check for and reset error on input
    if (error[3].innerHTML !== "") {
        error[3].innerHTML = "";
        error[3].className = "error";
        dateOfBirth.parentNode.className = "valid";
    }
});

password.addEventListener('input', function() {
    // check for and reset error on input
    if (error[4].innerHTML !== "") {
        error[4].innerHTML = "";
        error[4].className = "error";
        password.parentNode.className = "valid";
    }
});
