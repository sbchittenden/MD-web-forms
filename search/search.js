/////////////////
// Search form //
/////////////////

// retrieve the form element
var searchForm = document.getElementById('search_form');
// retrieve search input element
var searchInput = document.getElementById('search');

searchForm.addEventListener('submit', function(event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();

    // search input element shouldn't be empty
    if (validator.isEmpty(searchInput.value)) {
        searchInput.className = "invalid";
    }

    // search input element should be trimmed (no leading or trailing whitespace)
    if (!validator.isTrimmed(searchInput.value)) {
        searchInput.className = "invalid"
    }

});

// add eventListener for form focus and add valid class if input validates
searchInput.addEventListener('blur', function(event) {

    if (!validator.isEmpty(searchInput.value)) {
        searchInput.className = "valid";
    } else {
      searchInput.className = "invalid";
    }

    if (validator.isTrimmed(searchInput.value)) {
        searchInput.className = "valid";
    } else {
      searchInput.className = "invalid";
    }

});
