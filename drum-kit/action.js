


var keys = {
    'A': 'clap',
    'S': 'hihat',
    'D': 'kick',
    'F': 'openhat',
    'G': 'boom',
    'H': 'ride',
    'J': 'snare',
    'K': 'tom',
    'L': 'tink'
}



// Template
for( key in keys ) {
    document.querySelector('div#strip').insertAdjacentHTML('beforeend',
        `<div class="key-ctn ${key}-ctn">
            <h1> ${key} </h1>
            <h2> ${keys[key]} </h2>

            <audio src="sounds/${keys[key]}.wav" id="${key}"></audio>
        </div>
        `
    )
}
    


window.addEventListener( 'keypress', (event) => {
    let pressed_key = event.key.toUpperCase();

    if( keys.hasOwnProperty(pressed_key) ) {
        document.querySelector(`div.${pressed_key}-ctn`).classList.add('playing');
        document.querySelector(`audio#${pressed_key}`).play();
    }   
});

window.addEventListener( 'keyup', (event) => {
    let currently_playing = document.querySelector('div.playing');

    if( currently_playing ) { 
        currently_playing.classList.remove('playing');
        document.querySelector('div.playing audio').pause();
    }
})

