var search_box = document.querySelector('input#search');


const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch( endpoint )
.then( stuff => stuff.json() )
.then( data => cities.push(...data) )


function find_matches(term, places) {
    return places.filter( (place) => {
        let regex = new RegExp(term, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })  
}

function display_matches() {
    let matched_cities = find_matches(this.value, cities);
    console.log(matched_cities)
}

search_box.addEventListener('keyup', display_matches)

