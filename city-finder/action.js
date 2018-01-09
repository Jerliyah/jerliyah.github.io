// ----------- Get elements -------------
var html = document.querySelector('html')
var search_box = document.querySelector('input#search');
var panel_ctn = document.querySelector('ul.panels-ctn');



// ----------- Set elements -------------
search_box.value = '';



// ------------- Get data ---------------
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch( endpoint )
.then( stuff => stuff.json() )
.then( data => cities.push(...data) )



// ------------- Show data ---------------
function find_matches(term, places) {
    return places.filter( (place) => {
        let regex = new RegExp(term, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })  
}

function display_matches() {
    let input = this.value;

    let matched_cities = find_matches(input, cities);
    console.log(matched_cities); //Array of objects

    

    let panels = matched_cities.map( (city) => {
        let regex = new RegExp(input, 'gi');

        // Seperated to cover matches in city and/or state
        let city_hl = city.city.match(regex);
        let state_hl = city.state.match(regex);

        // Using city_hl and state_hl instead of input to ensure proper capitalization
        let city_name_hl = city.city.replace(city_hl, 
                            `<span class="hl">${city_hl}</span>`);
        let state_name_hl = city.state.replace(state_hl,
                            `<span class="hl">${state_hl}</span>`);


        return `<li class="panel">
                    <p> ${city_name_hl}, ${state_name_hl} </p>
                    <p>${city.population}</p>
                </li>`
    }).join('')
        

    panel_ctn.innerHTML = panels;
    fancy_style()
}

search_box.addEventListener('keyup', display_matches)



// -------------- Style it up ------------------------
function random_color() {
    var characters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function fancy_style() {
    search_box.style.width = panel_ctn.offsetWidth + "px";
    html.style.setProperty('--color', random_color());
}


// --------------- Redirection -----------------

// TODO: when clicking on a city, go to informational page

