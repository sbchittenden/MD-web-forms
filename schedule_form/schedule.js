//////////////////
//Schedule form //
//////////////////

// retrieve schedule form element
var schedForm = document.getElementById('schedule_form');

// retrieve error spans
var error = document.querySelectorAll('.error');

// retrieve schedule form input elements
var date = document.getElementById('date');
var time = document.getElementById('time');
var zone = document.getElementById('timezone');
var email = document.getElementById('email');
var phone = document.getElementById('telephone');

// event listener for schedule form submission
schedForm.addEventListener('submit', function(event) {
    event.preventDefault();

    /* ----------------------------
    validation for date input
     ----------------------------- */

    // date should not be empty
    if (validator.isEmpty(date.value)) {
        date.removeAttribute('placeholder');
        error[0].innerHTML = "Please select a date to do the thing.";
        error[0].className = "error active";
        date.parentNode.classList.add("invalid");
        // date should be a valid date
    } else if (!validator.isDate(date.value)) {
        date.removeAttribute('placeholder');
        error[0].innerHTML = "Hey. We should do the thing on an actual date.";
        error[0].className = "error active";
        date.parentNode.classList.add("invalid");
        // date should be after today
    } else if (validator.isBeforeToday(date.value)) {
        date.removeAttribute('placeholder');
        error[0].innerHTML = "Oh oh! We can't do the thing. That date is in the past man!";
        error[0].className = "error active";
        date.parentNode.classList.add("invalid");
    } else {
        date.parentNode.classList.add("valid");
        schedForm.className = "valid";
    }

    /* ----------------------------
  validation for time input
   ----------------------------- */

    // time should not be empty
    if (validator.isEmpty(time.value)) {
        time.removeAttribute('placeholder');
        error[1].innerHTML = "Please pick a time to do the thing.";
        error[1].className = "error active";
        time.parentNode.classList.add("invalid");
    } else {
        time.parentNode.classList.add("valid");
        schedForm.className = "valid";
    }


    /* ----------------------------
  validation for timezone input
   ----------------------------- */

    // timezone should not be set to 'timezone' (default)
    if (zone.value === 'timezone') {
        error[2].innerHTML = "Ok. We need to know what timezone you are in.";
        error[2].className = "error active";
        zone.parentNode.classList.add("invalid");
    } else {
        zone.parentNode.classList.add("valid");
        schedForm.className = "valid";
    }

    /* ----------------------------
  validation for email input
   ----------------------------- */

    // email should not be empty
    if (validator.isEmpty(email.value)) {
        email.removeAttribute('placeholder');
        error[3].innerHTML = "Oh oh. You forgot to enter an email address.";
        error[3].className = "error active";
        email.parentNode.classList.add("invalid");
        // email should be an email address
    } else if (!validator.isEmailAddress(email.value)) {
        email.removeAttribute('placeholder');
        error[3].innerHTML = "Woops! That email address doesn't look right.";
        error[3].className = "error active";
        email.parentNode.classList.add("invalid");
    } else {
        email.parentNode.classList.add("valid");
        schedForm.className = "valid";
    }

    /* ----------------------------
  validation for phone number input
   ----------------------------- */

    // phone number should not be empty
    if (validator.isEmpty(phone.value)) {
        phone.removeAttribute('placeholder');
        error[4].innerHTML = "If we are going to do the thing I need a phone number.";
        error[4].className = "error active";
        phone.parentNode.classList.add("invalid");
        // phone number should be a phone number
    } else if (!validator.isPhoneNumber(phone.value)) {
        phone.removeAttribute('placeholder');
        error[4].innerHTML = "If we are going to do the thing I need a REAL phone number.";
        error[4].className = "error active";
        phone.parentNode.classList.add("invalid");
    } else if (!validator.isComposedOf(phone.value, ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
        phone.removeAttribute('placeholder');
        error[4].innerHTML = "If we are going to do the thing I need a REAL phone number.";
        error[4].className = "error active";
        phone.parentNode.classList.add("invalid");
    } else {
        phone.parentNode.classList.add("valid");
        schedForm.className = "valid";
    }

});

///////////////////////////////////////////////////////////////////////
/// ******* EVENT LISTENERS FOR REMOVING ERRORS ON INPUT ******** /////
///////////////////////////////////////////////////////////////////////

date.addEventListener('input', function() {
  // check for and reset error on input
    if (error[0].innerHTML !== "") {
        error[0].innerHTML = "";
        error[0].className = "error";
        date.parentNode.classList.remove("invalid");
    }
});

time.addEventListener('input', function() {
    // check for and reset error on input
    if (error[1].innerHTML !== "") {
        error[1].innerHTML = "";
        error[1].className = "error";
        time.parentNode.classList.remove("invalid");
    }
});

zone.addEventListener('input', function() {
    // check for and reset error on input
    if (error[2].innerHTML !== "") {
        error[2].innerHTML = "";
        error[2].className = "error";
        zone.parentNode.classList.remove("invalid");
    }
});

email.addEventListener('input', function() {
  // check for and reset error on input
    if (error[3].innerHTML !== "") {
        error[3].innerHTML = "";
        error[3].className = "error";
        email.parentNode.classList.remove("invalid");
    }
});

phone.addEventListener('input', function() {
  // check for and reset error on input
    if (error[4].innerHTML !== "") {
        error[4].innerHTML = "";
        error[4].className = "error";
        phone.parentNode.classList.remove("invalid");
    }
});











