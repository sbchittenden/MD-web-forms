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

// add event listener for ccForm submission
ccForm.addEventListener('submit', function(event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();

    /* ------------
    validation for full_name (Name on Card) input
    ------------- */
    // full name should not be empty
    if (validator.isEmpty(fullName.value)) {
        fullName.parentNode.classList.add("invalid");
    } else {
        fullName.parentNode.classList.remove("invalid");
    }

    // full name should contain leading or trailing whitespace
    if (!validator.isTrimmed(fullName.value)) {
        fullName.parentNode.classList.add("invalid");
    } else {
        fullName.parentNode.classList.remove("invalid");
    }

    /*-----------------
    validation for credit card number input field  
    -------------------*/

    // cc number should not be empty
    if (validator.isEmpty(creditCardNumber.value)) {
        creditCardNumber.parentNode.classList.add("invalid");
    } else {
        creditCardNumber.parentNode.classList.remove("invalid");
    }

    // cc number should pass isCreditCard 
    if (!validator.isCreditCard(creditCardNumber.value)) {
        creditCardNumber.parentNode.classList.add("invalid");
    } else {
        creditCardNumber.parentNode.classList.remove("invalid");
    }




});
