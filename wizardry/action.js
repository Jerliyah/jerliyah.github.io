var inputs = document.querySelectorAll('input');

// Set defaults (doing so in html doesn't work on refresh for some reason)
inputs.forEach( (input) => {
    if( input.type == "range" ) {
        input.value = 0;
    }
    else if( input.type == "color" ) {
        input.value = "#ffffff";
    }
})


function updater() {
    let page = document.querySelector('html');
    page.style.setProperty("--" + this.name, this.value + this.dataset.suffix);
}


inputs.forEach( (input) => {
    input.addEventListener('change', updater);
    // input.addEventListener('mousemove', updater)
})

