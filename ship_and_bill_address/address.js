//////////////////////////////////////
//Shipping and billing address form //
//////////////////////////////////////

// retrieve form element
var addressForm = document.getElementById("address_form");

// retrieve all error span elements
var error = document.querySelectorAll(".error");

// retrieve shipping elements
var shipFirstName = document.getElementById("ship_first_name");
var shipLastName = document.getElementById("ship_last_name");
var shipAddress = document.getElementById("ship_address");
var shipAddressLine2 = document.getElementById("ship_address_2");
var shipCity = document.getElementById("ship_city");
var shipState = document.getElementById("ship_state");
var shipCountry = document.getElementById("ship_country");

// retrieve billing elements
var billFirstName = document.getElementById("bill_first_name");
var billLastName = document.getElementById("bill_last_name");
var billAddress = document.getElementById("bill_address");
var billAddressLine2 = document.getElementById("bill_address_2");
var billCity = document.getElementById("bill_city");
var billState = document.getElementById("bill_state");
var billCountry = document.getElementById("bill_country");

// add event listener for address form submission

addressForm.addEventListener('submit', function(event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();

    /*-----------------------------------------
    validation for shipping address First Name
     -----------------------------------------*/
    // First Name should not be empty
    if (validator.isEmpty(shipFirstName.value)) {
        error[0].innerHTML = "Oops! Please enter a first name";
        error[0].className = "error active";
        shipFirstName.parentNode.classList.add("invalid");
        // First Name should not have extra whitespace
    } else if (!validator.isTrimmed(shipFirstName.value)) {
        error[0].innerHTML = "Please don't include any extra whitespace.";
        error[0].className = "error active";
        shipFirstName.parentNode.classList.add("invalid");
    } else {
        shipFirstName.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for shipping address Last Name
     -----------------------------------------*/

    // Last Name should not be empty
    if (validator.isEmpty(shipLastName.value)) {
        error[1].innerHTML = "Oops! Please enter a last name";
        error[1].className = "error active";
        shipLastName.parentNode.classList.add("invalid");
        // Last Name should not have extra whitespace
    } else if (!validator.isTrimmed(shipLastName.value)) {
        error[1].innerHTML = "Please don't include any extra whitespace.";
        error[1].className = "error active";
        shipLastName.parentNode.classList.add("invalid");
    } else {
        shipLastName.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for shipping address Line 1
     -----------------------------------------*/

    // shipping address line 1 should not be empty
    if (validator.isEmpty(shipAddress.value)) {
        error[2].innerHTML = "Oops! Please enter a shipping address";
        error[2].className = "error active";
        shipAddress.parentNode.classList.add("invalid");
        // shipping address should not have extra whitespace
    } else if (!validator.isTrimmed(shipAddress.value)) {
        error[2].innerHTML = "Please don't include any extra whitespace.";
        error[2].className = "error active";
        shipAddress.parentNode.classList.add("invalid");
    } else {
        shipAddress.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for shipping city
     -----------------------------------------*/

    // shipping city should not be empty
    if (validator.isEmpty(shipCity.value)) {
        error[4].innerHTML = "Oops! Please enter a shipping city";
        error[4].className = "error active";
        shipCity.parentNode.classList.add("invalid");
        // shipping city should not have extra whitespace
    } else if (!validator.isTrimmed(shipCity.value)) {
        error[4].innerHTML = "Please don't include any extra whitespace.";
        error[4].className = "error active";
        shipCity.parentNode.classList.add("invalid");
    } else {
        shipCity.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for shipping state
     -----------------------------------------*/

    // shipping state should not be set to 'state'
    if (shipState.value === 'state') {
        error[5].innerHTML = "Please select a shipping state";
        error[5].className = "error active";
        shipState.parentNode.classList.add("invalid");
    } else {
        shipState.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for shipping country
     -----------------------------------------*/

    // shipping country should not be empty
    if (validator.isEmpty(shipCountry.value)) {
        error[6].innerHTML = "Oops! Please enter a shipping country";
        error[6].className = "error active";
        shipCountry.parentNode.classList.add("invalid");
        // shipping country should be alphanumeric and not contain number chars
    } else if (!validator.isAlphanumeric(shipCountry.value) || validator.contains(shipCountry, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
        error[6].innerHTML = "Um, I can't think of a country that is spelled like that.";
        error[6].className = "error active";
        shipCountry.parentNode.classList.add("invalid");
    } else {
        shipCountry.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }






});
