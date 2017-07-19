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
   generatedArray.push(to26());
   return generatedArray;
}


// function removePriorArray() {
//     var displayNodes = document.querySelectorAll('[data-role="numbers"]');
//     if (displayNodes) {
//         displayDiv.removeChild(displayNodes);
//     }
// }

function printToScreen() {
    generatedArray.forEach(function(num, i) {
        var luckyNumbers = document.createElement('div');
        luckyNumbers.textContent = generatedArray[i];
        luckyNumbers.setAttribute('class', 'powerball');
        luckyNumbers.setAttribute('data-role', 'numbers');
        displayDiv.appendChild(luckyNumbers);
    });
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