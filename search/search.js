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

    var input = searchInput.value.trim();

    // search input element shouldn't be empty
    if (validator.isEmpty(input)) {
        searchInput.className = "invalid";
    } else {
        searchInput.className = "valid";
    }

    // search input element should be trimmed (no leading or trailing whitespace)
    if (!validator.isTrimmed(input)) {
        searchInput.className = "invalid";
    } else {
        searchInput.className = "valid";
    }

});

// add eventListener for form focus and add valid class if input validates
// searchInput.addEventListener('blur', function(event) {

//     var input = searchInput.value.trim();

//     // search input element shouldn't be empty
//     if (validator.isEmpty(input)) {
//         searchInput.className = "invalid";
//     } else {
//         searchInput.className = "valid";
//     }

//     // search input element should be trimmed (no leading or trailing whitespace)
//     if (!validator.isTrimmed(input)) {
//         searchInput.className = "invalid";
//     } else {
//         searchInput.className = "valid";
//     }

// });
