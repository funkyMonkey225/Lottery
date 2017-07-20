var DISPLAY_SELECTOR = '[data-role="display"]';
var GENERATOR_SELECTOR = '[data-role="generator"]';
var generator = document.querySelector(GENERATOR_SELECTOR);
var displayDiv = document.querySelector(DISPLAY_SELECTOR);
var tempArray = [];

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
        if (tempArray.indexOf(number) === -1) {
            cont = false;
            tempArray.push(number);
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
    var finalNumber = to26();
    var last = document.createElement('div');
    last.textContent = finalNumber;
    last.setAttribute('class', 'powerball red bounce');
    last.setAttribute('data-role', 'numbers');
    displayDiv.appendChild(last);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function printToScreen() {
    var displayNodes = document.querySelector('[data-role="numbers"]');
    while (displayDiv.hasChildNodes()) {
        displayDiv.removeChild(displayDiv.lastChild);
    }
    generatedArray.forEach(function(num, i) {
        var luckyNumbers = document.createElement('div');
        luckyNumbers.textContent = generatedArray[i];
        luckyNumbers.setAttribute('class', 'powerball bounce');
        luckyNumbers.setAttribute('data-role', 'numbers');
        displayDiv.appendChild(luckyNumbers);
    });
}

function addListener(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        generateNumsArray();
        printToScreen();
        addFinalNumber();
        tempArray = [];
        generatedArray = [];
    })
}



addListener(generator);