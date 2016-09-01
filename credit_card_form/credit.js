//////////////////////
// Credit card form //
//////////////////////

// retrieve form element
var ccForm = document.getElementById('cc_form');

// retrieve various form elements
var fullName = document.getElementById('full_name');
var creditCardNumber = document.getElementById('cc_number');
var cvcCode = document.getElementById('cvc');
var expMonth = document.getElementById('expiration_month');
var expYear = document.getElementById('expiry_year');
var error = document.querySelectorAll('.error');

// add event listener for ccForm submission
ccForm.addEventListener('submit', function(event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();

    /* ------------
    validation for full_name (Name on Card) input
    ------------- */
    // full name should not be empty
    if (validator.isEmpty(fullName.value)) {
        error[0].innerHTML = "Oops! Please enter your full name."
        error[0].className = "error active";
        fullName.parentNode.classList.add("invalid");
    } else if (!validator.isTrimmed(fullName.value)) {
        error[0].innerHTML = "Please don't include any extra whitespace."
        error[0].className = "error active";
        fullName.parentNode.classList.add("invalid");
    } else {
        fullName.parentNode.classList.remove("invalid");
        ccForm.className = "valid";
    }

    /*-----------------
    validation for credit card number input field  
    -------------------*/
    // cc number field should not be empty
    if (validator.isEmpty(creditCardNumber.value)) {
        error[1].innerHTML = "Oh oh! Please enter a card number."
        error[1].className = "error active";
        creditCardNumber.parentNode.classList.add("invalid");
    } else if (!validator.isCreditCard(creditCardNumber.value)) {
        error[1].innerHTML = "Doh! Your card number doesn't look right..."
        error[1].className = "error active";
        creditCardNumber.parentNode.classList.add("invalid");
    } else {
        creditCardNumber.parentNode.classList.remove("invalid");
        ccForm.className = "valid";
    }

});
