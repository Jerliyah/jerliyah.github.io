/*
TODO:
 1) Create dots for each hour on the face of the clock
 */

// var ctn = document.querySelector('div#clock-face');

// var coordinates = [
//     // top, left
//     // 3
//     [142, 284],
//     // 6
//     [284, 142],
//     // 9
//     [142, 0],
//     // 12
//     [0,142]
// ]

// coordinates.forEach( (coordinate) => {
//     ctn.insertAdjacentHTML('beforeend', `
//     <div class="dots" 
//     style="top:${coordinate[0]}px; left:${coordinate[1]}px">
//     </div>
// `)
// })





var sec_hand = document.querySelector('div#sec-hand');
var min_hand = document.querySelector('div#min-hand');
var hour_hand = document.querySelector('div#hour-hand');


function timer() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secDegrees = ((seconds / 60) * 360) + 90;
    sec_hand.style.transform = `rotate(${secDegrees}deg`;

    let minutes = now.getMinutes();
    let minDegrees = ((minutes / 60) * 360) + 90;
    min_hand.style.transform = `rotate(${minDegrees}deg`;

    let hours = now.getHours();
    let hourDegrees = ((hours / 24) * 360) + 90;
    hour_hand.style.transform = `rotate(${hourDegrees}deg`;
}

setInterval(timer, 1000);

