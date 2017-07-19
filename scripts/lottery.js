var DISPLAY_SELECTOR = '[data-role="display"]';
var GENERATOR_SELECTOR = '[data-role="generator"]';
var generator = querySelector(GENERATOR_SELECTOR);





function addListener(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault();

    })
}
