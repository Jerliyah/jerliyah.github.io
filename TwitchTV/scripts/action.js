/*
    TABLE OF CONTENTS:
    1) Streamer Population
    2) Redirection to Twitch pages - Line 101
    3)
*/

//==============================================================================

// On page load default
populate_streamers('all')

// Grab the All, Online, and Offline options
let buttons = document.querySelectorAll('li');

// Add event listener to each one
$.each(buttons, function(index, element) {
    element.addEventListener('click', make_active);
});

// Toggle active class for options
function make_active() {
    // Remove activity from any previous button clicks
    $(this).siblings().removeClass("active");
    // Add active clas to current button
    $(this).addClass("active");

    let activeStatus = $(this).attr("value");
    populate_streamers(activeStatus);
}


function get_streamers(whichStreamers) {

    switch (whichStreamers) {
        case "online":
            var onlineStreamers = [];
            $.each(Twitch, function(index, streamer) {
                if (streamer.stream !== null) {
                    onlineStreamers.push(streamer.stream);
                }
            });
            console.log("Retrieved online streamers");
            return onlineStreamers;
        break;

        case "offline":
            var offlineStreamers = [];
            $.each(Twitch, function(index, streamer) {
                if (streamer.stream === null) {
                    offlineStreamers.push(streamer)
                }
            });
            console.log("Retrieved offline streamers");
            return offlineStreamers;
        break;

        case "all":
            let allStreamers = [];
            $.each(Twitch, function(index, streamer) {
                if (streamer.stream !== null) {
                    allStreamers.push(streamer.stream);
                }
                else if (streamer.stream === null) {
                    allStreamers.push(streamer)
                }
            });
            console.log("Retrieved all streamers");
            return allStreamers;
        break;

        default:
            console.log("Error: Incorrect streamers request. Accepted values are 'online', 'offline', or 'all'");
    }
}


function populate_streamers(inputStatus) {
    // Remove any previous elements
    $('.profiles').remove();

    let streamers = get_streamers(inputStatus);

    $.each(streamers, function(index, streamer) {
        if(streamer.logo === undefined) {
            var imageUrl = "images/logo3.png";
            var twitchUrl = `https://www.twitch.tv/${streamer.display_name.toLowerCase()}`
        }
        else {
            var imageUrl = streamer.logo;
            var twitchUrl = `https://www.twitch.tv/${streamer.name}`
        }

        let displayName = streamer.display_name;

        $('main').append(`
            <a href="${twitchUrl}"
                <div class="profiles">
                    <img class="profile-images" src="${imageUrl}" />
                    <h2>${displayName}</h2>
                </div>
            </a>
        `)
    })

}

// =============================================================================
