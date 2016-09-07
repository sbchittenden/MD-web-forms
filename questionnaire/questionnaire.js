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

    // if 'other'radio button is checked make sure textarea #other has input
    if (listOfInputs[5].hasAttribute('checked')) {
        if (validator.isEmpty(otherText.value)) {
        	error.innerHTML = "Oops! Looks like you neglected to tell us about your favorite spaceship.";
        	error.className = "error active";
        	questionForm.className = "invalid";
        }
    }


});
