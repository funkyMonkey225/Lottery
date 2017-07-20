var DISPLAY_SELECTOR = '[data-role="display"]';
var GENERATOR_SELECTOR = '[data-role="generator"]';
var $generator = $(GENERATOR_SELECTOR);
var $displayDiv = $(DISPLAY_SELECTOR);
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
    var $last = $('<div></div>', {
        'text': finalNumber,
        'class': 'powerball red bounce',
        'data-role': 'numbers'
    });
    $displayDiv.append($last);
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
    var $displayNodes = $('[data-role="numbers"]');
    if ($displayDiv.children()) {
        $displayDiv.empty();
    }
    generatedArray.forEach(function(num, i) {
        var $luckyNumbers = $('<div></div>', {
        'text': generatedArray[i],
        'class': 'powerball bounce',
        'data-role': 'numbers'
        });
        $displayDiv.append($luckyNumbers);
    });
}

function addListener(element) {
    element.on("click", function(event) {
        event.preventDefault();
        generateNumsArray();
        printToScreen();
        addFinalNumber();
        tempArray = [];
        generatedArray = [];
    })
}



addListener($generator);