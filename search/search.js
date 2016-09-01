/////////////////
// Search form //
/////////////////

// retrieve the form element
var searchForm = document.getElementById('search_form');
// retrieve search input element
var searchInput = document.getElementById('search');
// retrieve error class
var error = document.querySelector('.error');

searchForm.addEventListener('submit', function(event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();

    // search input element shouldn't be empty
    if (validator.isEmpty(searchInput.value)) {
        error.innerHTML = "Oops! You didn't enter any search terms."
        error.className = "error active";
        searchInput.className = "invalid";
    } else if (!validator.isTrimmed(searchInput.value)) { // search input element should be trimmed (no leading or trailing whitespace)
        error.innerHTML = "Doh! Please don't include any extra spaces."
        error.className = "error active";
        searchInput.className = "invalid";
    } else {
        searchForm.className = "valid";
    }

});

// add eventListener for form focus and add valid class if input validates
searchInput.addEventListener('input', function(event) {

    // check for and reset error on input
    if (error.innerHTML !== "") {
        error.innerHTML = "";
        error.className = "error";
        searchInput.className = "";
    }

});
