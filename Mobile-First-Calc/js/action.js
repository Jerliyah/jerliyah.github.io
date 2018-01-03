
/* Grab Elements from HTML */

// Grab html elements by their id name
function grab(idName) {
    return document.getElementById(idName);
}

// Create variables for numbered buttons
var btn_1 = grab('one');
var btn_2 = grab('two');
var btn_3 = grab('three');
var btn_4 = grab('four');
var btn_5 = grab('five');
var btn_6 = grab('six');
var btn_7 = grab('seven');
var btn_8 = grab('eight');
var btn_9 = grab('nine');
var btn_0 = grab('zero');
var btn_point = grab('point');

// Create variables for operation butttons
var plus = grab('plus');
var minus = grab('minus');
var times = grab('times');
var divided = grab('divided');
var equals = grab('equals');

// Create variables for calc screen
var calc_screen = grab('screen');
var clear_screen = grab('clear-screen');
var clear_history = grab('clear-history');



/* Variables */
var calc = [];
var btn_value = '';
var buttons_pressed = [];
var delay = 700;



/* On click event */

// Add click event for numbered buttons
for (var i=0; i < 10; i++) {
    var specified_btn = 'btn_' + i;
    // Convert specified_btn from string to var for the click function
    click( eval(specified_btn) );
}

// Add click event for decimal point
click(btn_point);

// Add click event for operation buttons
click(plus);
click(minus);
click(times);
click(divided);
click(equals);

// Add click event for clear buttons
click(clear_screen);
click(clear_history);



/* Main Functions */

// Add Click event listeners to buttons
function click(btn) {

    // Calculate values on screen if equal sign pressed
    if ( btn.id === 'equals' ) {
        btn.addEventListener( 'click',  function() { calculate() } );
    }
    // Clear screen and calc array
    else if (btn.id === 'clear-screen') {
        btn.addEventListener( 'click', function() { clear_the_screen() } );
    }
    // Clear history of selected buttons
    else if (btn.id === 'clear-history') {
        btn.addEventListener( 'click', function() { clear_the_history() } );
    }
    // Simply add values to screen if numbers or operators
    else {
        btn.addEventListener( 'click',  function() { add_to_calc(btn) } );
    }
}



function add_to_calc(btn) {
    // Erase previous numbers so only current equation shown
    var lastValue = buttons_pressed[buttons_pressed.length - 1]

    if (lastValue === 'equalsAnswer') {
        calc_screen.innerHTML = '';
    }

    // Trim HTML because outside space and line breaks in markup will appear
    btn.innerHTML = btn.innerHTML.trim();

    // Strip btn html to its value
    // HTML Format:<h2> ? </h2>
    var btn_value = btn.innerHTML.slice(5,6);

    // Add value to calc array
    calc.push(btn_value);
    console.log('calc: ' + calc);

    // Add value to button history array
    buttons_pressed.push(btn_value);
    console.log('history: ' + buttons_pressed);

    add_to_screen(btn);
}



function add_to_screen(btn) {

    // If btn is an operation, put space around its symbol for calc screen
    if ( btn.classList.contains('opr') ) {
        var added_space_html = btn.innerHTML.replace(/\s/g, '&nbsp;&nbsp;');
        calc_screen.innerHTML += added_space_html;
    }
    // Otherwise, no spacing
    else {
        calc_screen.innerHTML += btn.innerHTML;
    }

    // Add a comma for every third number to the left of decimal
}



function calculate() {
    // Join calc array to string and find answer
    var answer = eval( calc.join('') );
    // Adds commas for thousands (and beyond) place
    answer =  answer.toLocaleString();
    console.log( answer );

    // Show answer on calc screen
    calc_screen.innerHTML = '<h2> ' + answer + ' </h2>';

    // Add equal to history
    buttons_pressed.push('equalsAnswer');

    // Empty calc
    calc = [];
    console.log('calc emptied');
}


function clear_the_screen() {
    console.log('clear the screen');

    // Empty calc array
    calc = [];

    // Add clear to history
    buttons_pressed.push('clear');

    // Screen shows cleared message for a set time, then empties
    calc_screen.innerHTML = '<h2> Cleared </h2>';
    setTimeout( function(){ calc_screen.innerHTML = '' }, delay );
}


function clear_the_history() {
    console.log('clear the history');

     calc = [];
     buttons_pressed = [];

     calc_screen.innerHTML = '<h2> History Cleared </h2>';
     setTimeout( function(){ calc_screen.innerHTML = ''}, delay );
}
