var DISPLAY_SELECTOR = '[data-role="display"]';
var GENERATOR_SELECTOR = '[data-role="generator"]';
var generator = document.querySelector(GENERATOR_SELECTOR);
var displayDiv = document.querySelector(DISPLAY_SELECTOR);
var generatedArray = [];

function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function randomIntervalCreator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

var to69 = randomIntervalCreator(1, 69);
var to26 = randomIntervalCreator(1, 26);

function randomNums(num) {
    var number = to69();
    var cont = true;
    while (cont === true) {
        if (!(number in generatedArray)) {
            cont = false;
            return number;
        } else {
            number = to69();
        }
    }
}

function generateNumsArray() {
    var range1 = range(0, 5);
    generatedArray = range1.map(randomNums);
    return generatedArray;
}

function addFinalNumber() {
   generatedArray.push(to26());
   return generatedArray;
}

function printToScreen() {
    var luckyNumbers = document.createElement('h2');
    luckyNumbers.textContent = generatedArray;
    luckyNumbers.setAttribute('class', 'numbers');
    displayDiv.appendChild(luckyNumbers);
}

function addListener(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        generateNumsArray();
        addFinalNumber();
        printToScreen();
    })
}



addListener(generator);