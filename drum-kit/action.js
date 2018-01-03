


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
        `<div class="key-ctn">
            <h1> ${key} </h1>
            <h2> ${keys[key]} </h2>

            <audio src="sounds/${keys[key]}.wav" id="${key}"></audio>
        </div>
        `
    )
}
    


window.addEventListener( 'keydown', (event) => {
    let pressed_key = event.key.toUpperCase();
    console.log(pressed_key)
    document.querySelector(`audio#${pressed_key}`).play();
})