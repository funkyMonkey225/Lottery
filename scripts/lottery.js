var DISPLAY_SELECTOR = '[data-role="display"]';
var GENERATOR_SELECTOR = '[data-role="generator"]';
var generator = querySelector(GENERATOR_SELECTOR);


function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function randomNums(num) {
    
}

function generateNumsArray() {
    var range1 = range(0, 4);
    var range1.map();
    
    num = Math.floor(Math.random() * 4)
}




function addListener(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault();

    })
}
