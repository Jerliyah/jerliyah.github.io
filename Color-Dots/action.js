
// Select the body
var theBody = document.querySelector('body');

// Defines border types for later use
var borderTypes = ['solid', 'dashed', 'dotted'];


function clearOldDots() {
    // Clears out old divs
    var divsToRemove = document.querySelectorAll('div:not(#fancy)');

    divsToRemove.forEach( (div) => {
        theBody.removeChild(div)
    });
}


function applyNewDots() {

    // Start counting from 0
    var counter = 0;

    // Count until 24
    while (counter < 24) {
        
        // Do ALL this stuff 24 times
        var theDiv = document.createElement('div');

        var redBackground = getRandomInt(0,255);
        var greenBackground = getRandomInt(0,255);
        var blueBackground = getRandomInt(0,255);
        var alphaBackground = getRandomArbitrary(0.5,1);

        theDiv.style.backgroundColor = `rgba(${redBackground}, ${greenBackground},${blueBackground}, ${alphaBackground})`;


        var redBorder = getRandomInt(0,255);
        var greenBorder = getRandomInt(0,255);
        var blueBorder = getRandomInt(0,255);
        var alphaBorder = getRandomArbitrary(0.5,1);

        theDiv.style.borderColor = `rgba(${redBorder}, ${greenBorder},${blueBorder}, ${alphaBorder})`;
        theDiv.style.borderStyle = borderTypes[getRandomInt(0,2)];


        theBody.appendChild(theDiv);

        counter += 1;
    }
}



// Reusable function to get a random integer (whole number, not decimals)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reusable function to get a random number (includes decimals)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


//========================================================================

var fancyBtn = document.querySelector('div#fancy');

fancyBtn.addEventListener('click', () => {
    clearOldDots();
    applyNewDots();
})





/*
// Hover - Change colors
var divs = document.querySelectorAll('div');

divs.forEach( (div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "blue";
    })
})
*/
