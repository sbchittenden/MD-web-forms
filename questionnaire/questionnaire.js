///////////////////
//Questionnaire  //
///////////////////

// retrieve questionnaire form element
var questionForm = document.getElementById('question_form');

// retrieve node list of 'input' elements
var listOfInputs = document.getElementsByTagName('input');

// retrieve 'other' textarea field
var otherText = document.getElementById('other');

// retrieve '.error' span
var error = document.querySelector('.error');

// add event listener for form submission
questionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // one of the radio buttons must be checked
    var isChecked = false;
    for (var i = 0; i < listOfInputs.length; i++) {
        if (listOfInputs[i].checked) {
            isChecked = true
        }
    }
    if (!isChecked) {
        error.innerHTML = "Oh no! Looks like you didn't pick a favorite spaceship.";
        error.className = "error active";
    }


    // if 'other'radio button is checked make sure textarea #other has input
    if (listOfInputs[5].checked) {
        if (validator.isEmpty(otherText.value)) {
            error.innerHTML = "Oops! Looks like you neglected to tell us about your favorite spaceship.";
            error.className = "error active";
            otherText.className = "invalid";
            questionForm.className = "invalid";
        }
    }
});

// add event listener to clear error on input
otherText.addEventListener('input', function() {
    // check for and reset error on input
    if (error.innerHTML !== "") {
        error.innerHTML = "";
        error.className = "error";
        questionForm.className = "valid";
    }
});

// event listener for clearing error span on change
questionForm.addEventListener('change', function(){
    if (error.innerHTML !== "") {
        error.innerHTML = "";
        error.className = "error";
        questionForm.className = "valid";
    }
});

