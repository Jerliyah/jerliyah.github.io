
//------ Set up time -----//

function pomodoro() {

    // Set number of minutes to 25
    var total_minutes = 25;

    // Calculation to find seconds
    var total_seconds = total_minutes * 60;

    // Run countdown
    countdown(total_seconds);
}

function breakTime() {

    // Change the number of minutes to 5
    total_minutes = 5;

    // Calculation to find seconds
    var total_seconds = total_minutes * 60;

    // Run countdown
    countdown(total_seconds);
}

// ------- Run program ---------//
$("#start-button").click( function() {
    console.log("Clock started");
    nextStage();
});

$("#stop-button").click( function() {
    bigStop();
});


//==============================================================================

// Access clock display
var $clockText = $('#clock-window > h2');
var $clock = $('#clock-window');

// Set counter to use for toggle (nextStage)
var counter = 1;

// Toggle between pomodoro and break
function nextStage(counter) {
    if ( counter % 2 === 0  ) {
        $clockText.text("Break Time!");
        console.log("Break Time");

        breakTime();
    }
    else {
        $clockText.text("Work Time!");
        console.log("Work Time");

        pomodoro();
    }
}


// Clock Formatting
function clock_format(seconds) {
    var m = Math.floor( (seconds / 60) ).toString() ;
    var s = (seconds % 60).toString();

    if (m.length == 1) {
      m = '0' + m;
    }

    if (s.length == 1) {
      s = '0' + s;
    }

    return m + ':' + s;
}


// Counting down
function countdown(total_seconds) {

    // At an interval (established as every second at end)
    intervalID = setInterval(function(){

        // Subtract 1 from seconds
        total_seconds = total_seconds - 1;

        var formattedTime = clock_format(total_seconds);

        // Show clock
        $clockText.text( formattedTime );

        // When number of seconds hits zero...
        if (total_seconds <= 0) {
            // End interval
            clearInterval(intervalID);

            // Toggle break and pomodoro using counter
            counter++;
            nextStage(counter);
        }

    }, 1000);// 1000 milliseconds = 1 second

}


// Big Stop
function bigStop() {
    clearInterval(intervalID);
    $clockText.text('00:00');
    console.log("Clock stopped");
}
