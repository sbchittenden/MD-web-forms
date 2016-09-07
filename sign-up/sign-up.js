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

	/* --------------------------------
	validation for date of birth input
	---------------------------------- */

	/* --------------------------------
	validation for password input
	---------------------------------- */
});