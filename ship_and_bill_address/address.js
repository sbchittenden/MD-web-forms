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

// retrieve same as checkbox
var sameAs = document.getElementById("same_as");

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



    //////////////////////////////////////////////////////////////////////////
    //******************* SHIPPING ADDRESS SECTION **************************//
    /////////////////////////////////////////////////////////////////////////



    /*-----------------------------------------
    validation for shipping address First Name
     -----------------------------------------*/
    // First Name should not be empty
    if (validator.isEmpty(shipFirstName.value)) {
        shipFirstName.removeAttribute('placeholder');
        error[0].innerHTML = "Oops! Please enter a first name";
        error[0].className = "error active";
        shipFirstName.parentNode.classList.add("invalid");
        // First Name should not have extra whitespace
    } else if (!validator.isTrimmed(shipFirstName.value)) {
        shipFirstName.removeAttribute('placeholder');
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
        shipLastName.removeAttribute('placeholder');
        error[1].innerHTML = "Oops! Please enter a last name";
        error[1].className = "error active";
        shipLastName.parentNode.classList.add("invalid");
        // Last Name should not have extra whitespace
    } else if (!validator.isTrimmed(shipLastName.value)) {
        shipLastName.removeAttribute('placeholder');
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
        shipAddress.removeAttribute('placeholder');
        error[2].innerHTML = "Oops! Please enter a shipping address";
        error[2].className = "error active";
        shipAddress.parentNode.classList.add("invalid");
        // shipping address should not have extra whitespace
    } else if (!validator.isTrimmed(shipAddress.value)) {
        shipAddress.removeAttribute('placeholder');
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
        shipCity.removeAttribute('placeholder');
        error[4].innerHTML = "Oops! Please enter a shipping city";
        error[4].className = "error active";
        shipCity.parentNode.classList.add("invalid");
        // shipping city should not have extra whitespace
    } else if (!validator.isTrimmed(shipCity.value)) {
        shipCity.removeAttribute('placeholder');
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
        shipCountry.removeAttribute('placeholder');
        error[6].innerHTML = "Oops! Please enter a shipping country";
        error[6].className = "error active";
        shipCountry.parentNode.classList.add("invalid");
        // shipping country should be alphanumeric and not contain number chars
    } else if (!validator.isAlphanumeric(shipCountry.value) || validator.contains(shipCountry, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
        shipCountry.removeAttribute('placeholder');
        error[6].innerHTML = "Um, I can't think of a country that is spelled like that.";
        error[6].className = "error active";
        shipCountry.parentNode.classList.add("invalid");
    } else {
        shipCountry.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }





    //////////////////////////////////////////////////////////////////////////
    //******************* BILLING ADDRESS SECTION **************************//
    /////////////////////////////////////////////////////////////////////////




    /*--------------------------------------------
    validation for billing address First Name
    --------------------------------------------*/
    // First Name should not be empty
    if (validator.isEmpty(billFirstName.value)) {
        error[7].innerHTML = "Oops! Please enter a first name";
        error[7].className = "error active";
        billFirstName.parentNode.classList.add("invalid");
        // First Name should not have extra whitespace
    } else if (!validator.isTrimmed(billFirstName.value)) {
        error[7].innerHTML = "Please don't include any extra whitespace.";
        error[7].className = "error active";
        billFirstName.parentNode.classList.add("invalid");
    } else {
        billFirstName.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for billing address Last Name
     -----------------------------------------*/

    // Last Name should not be empty
    if (validator.isEmpty(billLastName.value)) {
        error[8].innerHTML = "Oops! Please enter a last name";
        error[8].className = "error active";
        billLastName.parentNode.classList.add("invalid");
        // Last Name should not have extra whitespace
    } else if (!validator.isTrimmed(billLastName.value)) {
        error[8].innerHTML = "Please don't include any extra whitespace.";
        error[8].className = "error active";
        billLastName.parentNode.classList.add("invalid");
    } else {
        billLastName.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for billing address Line 1
     -----------------------------------------*/

    // billing address line 1 should not be empty
    if (validator.isEmpty(billAddress.value)) {
        error[9].innerHTML = "Oops! Please enter a billing address";
        error[9].className = "error active";
        billAddress.parentNode.classList.add("invalid");
        // billing address should not have extra whitespace
    } else if (!validator.isTrimmed(billAddress.value)) {
        error[9].innerHTML = "Please don't include any extra whitespace.";
        error[9].className = "error active";
        billAddress.parentNode.classList.add("invalid");
    } else {
        billAddress.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for billing city
     -----------------------------------------*/

    // billing city should not be empty
    if (validator.isEmpty(billCity.value)) {
        error[11].innerHTML = "Oops! Please enter a billing city";
        error[11].className = "error active";
        billCity.parentNode.classList.add("invalid");
        // billing city should not have extra whitespace
    } else if (!validator.isTrimmed(billCity.value)) {
        error[11].innerHTML = "Please don't include any extra whitespace.";
        error[11].className = "error active";
        billCity.parentNode.classList.add("invalid");
    } else {
        billCity.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for billing state
     -----------------------------------------*/

    // billing state should not be set to 'state'
    if (billState.value === 'state') {
        error[12].innerHTML = "Please select a billing state";
        error[12].className = "error active";
        billState.parentNode.classList.add("invalid");
    } else {
        billState.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

    /*-----------------------------------------
    validation for billing country
     -----------------------------------------*/

    // billing country should not be empty
    if (validator.isEmpty(billCountry.value)) {
        error[13].innerHTML = "Oops! Please enter a billing country";
        error[13].className = "error active";
        billCountry.parentNode.classList.add("invalid");
        // billing country should be alphanumeric and not contain number chars
    } else if (!validator.isAlphanumeric(billCountry.value) || validator.contains(billCountry, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
        error[13].innerHTML = "Um, I can't think of a country that is spelled like that.";
        error[13].className = "error active";
        billCountry.parentNode.classList.add("invalid");
    } else {
        billCountry.parentNode.classList.remove("invalid");
        addressForm.className = "valid";
    }

});



///////////////////////////////////////////////////////////////////////
/// ******* BILLING SAME AS SHIPPING CODE ******** ////////////////////
///////////////////////////////////////////////////////////////////////

// event listener for billing address same as checkbox
sameAs.addEventListener('click', function(event) {

    if (sameAs.getAttribute('checked') === null) {
        // add checked attribute to same as checkbox
        sameAs.setAttribute('checked', '');
    } else {
        sameAs.removeAttribute('checked');
    }
});

// event listener to apply shipping address to billing address if 'same as' is checked
sameAs.addEventListener('change', function(event) {
    if (sameAs.hasAttribute('checked')) {
        billFirstName.value = shipFirstName.value;
        billLastName.value = shipLastName.value;
        billAddress.value = shipAddress.value;
        billAddressLine2.value = shipAddressLine2.value;
        billCity.value = shipCity.value;
        billState.value = shipState.value;
        billCountry.value = shipCountry.value;
    } else {
        billFirstName.value = '';
        billLastName.value = '';
        billAddress.value = '';
        billAddressLine2.value = '';
        billCity.value = '';
        billState.value = '';
        billCountry.value = '';
    }
});




///////////////////////////////////////////////////////////////////////
/// ******* EVENT LISTENERS FOR REMOVING ERRORS ON INPUT ******** /////
///////////////////////////////////////////////////////////////////////


